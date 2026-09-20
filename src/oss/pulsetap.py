#!/usr/bin/env python3
"""PulseTap — open-source auto keyboard presser.

MIT License. Free for personal and commercial use.

Install:
    pip install pynput

Run:
    python pulsetap.py
    python pulsetap.py --cli
    python pulsetap.py --sequence space --interval 500

Hotkey: F8 starts and stops. Ctrl+C always quits.
"""

from __future__ import annotations

import argparse
import json
import random
import sys
import threading
import time
from typing import Callable, List, Optional, Union

# <<<PULSETAP_CONFIG
SEQUENCE = ["space"]
INTERVAL_MS = 1000
HOLD_MS = 40
JITTER_PCT = 0
REPEATS = 0  # 0 = infinite
COUNTDOWN_S = 3
MODIFIERS: List[str] = []  # ctrl, shift, alt, cmd
HOTKEY = "<f8>"
# PULSETAP_CONFIG>>>

try:
    from pynput.keyboard import Controller, GlobalHotKeys, Key, Listener
except ImportError:
    sys.stderr.write(
        "PulseTap needs the pynput package.\n"
        "Install it with:  pip install pynput\n"
    )
    sys.exit(1)


KeyTarget = Union[str, Key]

SPECIAL_KEYS = {
    "space": Key.space,
    "enter": Key.enter,
    "return": Key.enter,
    "tab": Key.tab,
    "esc": Key.esc,
    "escape": Key.esc,
    "backspace": Key.backspace,
    "delete": Key.delete,
    "insert": Key.insert,
    "home": Key.home,
    "end": Key.end,
    "page_up": Key.page_up,
    "pageup": Key.page_up,
    "page_down": Key.page_down,
    "pagedown": Key.page_down,
    "up": Key.up,
    "down": Key.down,
    "left": Key.left,
    "right": Key.right,
    "shift": Key.shift,
    "ctrl": Key.ctrl,
    "alt": Key.alt,
    "cmd": Key.cmd,
    "win": Key.cmd,
    "caps_lock": Key.caps_lock,
    "capslock": Key.caps_lock,
}

for _i in range(1, 13):
    SPECIAL_KEYS[f"f{_i}"] = getattr(Key, f"f{_i}")

MODIFIER_KEYS = {
    "ctrl": Key.ctrl,
    "shift": Key.shift,
    "alt": Key.alt,
    "cmd": Key.cmd,
}


def resolve_key(name: str) -> KeyTarget:
    raw = name.strip()
    if not raw:
        raise ValueError("empty key name")
    lower = raw.lower()
    if lower in SPECIAL_KEYS:
        return SPECIAL_KEYS[lower]
    if lower in MODIFIER_KEYS:
        return MODIFIER_KEYS[lower]
    if len(raw) == 1:
        return raw
    raise ValueError(f"unknown key: {name!r}")


def jittered_interval(interval_ms: int, jitter_pct: int) -> float:
    base = max(0.01, interval_ms / 1000.0)
    if jitter_pct <= 0:
        return base
    span = jitter_pct / 100.0
    return max(0.01, base * (1.0 + random.uniform(-span, span)))


class Presser:
    """Background key repeater. Safe to start/stop from the UI thread."""

    def __init__(
        self,
        on_press: Optional[Callable[[str], None]] = None,
        on_status: Optional[Callable[[str], None]] = None,
    ) -> None:
        self.keyboard = Controller()
        self.on_press = on_press
        self.on_status = on_status
        self._stop = threading.Event()
        self._thread: Optional[threading.Thread] = None
        self.running = False
        self.presses = 0

    def _emit(self, message: str) -> None:
        if self.on_status:
            self.on_status(message)

    def start(
        self,
        sequence: List[str],
        interval_ms: int,
        hold_ms: int,
        jitter_pct: int,
        repeats: int,
        countdown_s: int,
        modifiers: List[str],
    ) -> None:
        if self.running:
            return
        if not sequence:
            self._emit("Add at least one key first.")
            return
        try:
            keys = [resolve_key(name) for name in sequence]
            mods = [MODIFIER_KEYS[m] for m in modifiers if m in MODIFIER_KEYS]
        except ValueError as exc:
            self._emit(str(exc))
            return

        self._stop.clear()
        self.running = True
        self.presses = 0

        def worker() -> None:
            try:
                for remaining in range(countdown_s, 0, -1):
                    if self._stop.is_set():
                        return
                    self._emit(f"Starting in {remaining}…")
                    time.sleep(1)
                self._emit("Running")
                cycles = 0
                while not self._stop.is_set():
                    for name, key in zip(sequence, keys):
                        if self._stop.is_set():
                            return
                        try:
                            for mod in mods:
                                self.keyboard.press(mod)
                            self.keyboard.press(key)
                            hold = max(0.01, hold_ms / 1000.0)
                            time.sleep(hold)
                            self.keyboard.release(key)
                            for mod in reversed(mods):
                                self.keyboard.release(mod)
                        except Exception as exc:  # permission / focus issues
                            self._emit(f"Could not press {name}: {exc}")
                            return
                        self.presses += 1
                        if self.on_press:
                            self.on_press(name)
                        wait = jittered_interval(interval_ms, jitter_pct) - hold
                        if wait > 0:
                            # Wait in slices so Stop is snappy.
                            end = time.time() + wait
                            while time.time() < end:
                                if self._stop.is_set():
                                    return
                                time.sleep(min(0.05, end - time.time()))
                    cycles += 1
                    if repeats > 0 and cycles >= repeats:
                        self._emit(f"Finished {repeats} cycle(s).")
                        return
            finally:
                self.running = False
                if not self._stop.is_set():
                    self._emit("Stopped")
                else:
                    self._emit("Stopped")

        self._thread = threading.Thread(target=worker, name="pulsetap", daemon=True)
        self._thread.start()

    def stop(self) -> None:
        self._stop.set()
        self.running = False
        self._emit("Stopped")

    def toggle(self, **kwargs) -> None:
        if self.running:
            self.stop()
        else:
            self.start(**kwargs)


def has_display() -> bool:
    if sys.platform == "win32":
        return True
    if sys.platform == "darwin":
        return True
    return bool(__import__("os").environ.get("DISPLAY") or __import__("os").environ.get("WAYLAND_DISPLAY"))


def run_cli(args: argparse.Namespace) -> None:
    presser = Presser(
        on_press=lambda name: sys.stdout.write(f"  {name}\n"),
        on_status=lambda msg: sys.stdout.write(f"{msg}\n"),
    )
    params = dict(
        sequence=args.sequence,
        interval_ms=args.interval,
        hold_ms=args.hold,
        jitter_pct=args.jitter,
        repeats=args.repeats,
        countdown_s=args.countdown,
        modifiers=args.modifiers,
    )

    def toggle() -> None:
        presser.toggle(**params)

    sys.stdout.write(
        "PulseTap CLI  ·  F8 start/stop  ·  Ctrl+C quit\n"
        f"Sequence: {' → '.join(args.sequence)}  ·  {args.interval} ms\n"
    )
    hotkeys = GlobalHotKeys({args.hotkey: toggle})
    hotkeys.start()
    if args.autostart:
        presser.start(**params)
    try:
        while True:
            time.sleep(0.25)
    except KeyboardInterrupt:
        presser.stop()
        hotkeys.stop()
        sys.stdout.write("\nBye.\n")


def run_gui(args: argparse.Namespace) -> None:
    try:
        import tkinter as tk
        from tkinter import messagebox
    except ImportError:
        sys.stderr.write("tkinter is not available; falling back to CLI.\n")
        run_cli(args)
        return

    BG = "#0a0a0c"
    SURFACE = "#141418"
    FG = "#f2f1ee"
    MUTED = "#9a9aa3"
    ACCENT = "#8fb9a8"
    ACCENT_FG = "#0a0a0c"
    DANGER = "#c45c5c"
    KEY = "#1a1a20"

    root = tk.Tk()
    root.title("PulseTap")
    root.configure(bg=BG)
    root.minsize(420, 520)
    root.geometry("460x580")

    sequence: List[str] = list(args.sequence)
    always_on_top = tk.BooleanVar(value=True)
    interval_var = tk.IntVar(value=args.interval)
    hold_var = tk.IntVar(value=args.hold)
    jitter_var = tk.IntVar(value=args.jitter)
    repeats_var = tk.IntVar(value=args.repeats)
    countdown_var = tk.IntVar(value=args.countdown)
    status_var = tk.StringVar(value="Idle · press F8 or Start")
    stats_var = tk.StringVar(value="0 presses")
    capture_var = tk.StringVar(value="")

    presser = Presser()

    def set_status(msg: str) -> None:
        def _apply() -> None:
            status_var.set(msg)
            stats_var.set(f"{presser.presses} presses")
            paint_start()

        root.after(0, _apply)

    presser.on_status = set_status
    presser.on_press = lambda _name: root.after(
        0, lambda: stats_var.set(f"{presser.presses} presses")
    )

    def params() -> dict:
        return dict(
            sequence=list(sequence),
            interval_ms=int(interval_var.get()),
            hold_ms=int(hold_var.get()),
            jitter_pct=int(jitter_var.get()),
            repeats=int(repeats_var.get()),
            countdown_s=int(countdown_var.get()),
            modifiers=list(args.modifiers),
        )

    def paint_seq() -> None:
        for child in seq_frame.winfo_children():
            child.destroy()
        if not sequence:
            tk.Label(
                seq_frame,
                text="No keys yet — click Bind key or use presets.",
                bg=SURFACE,
                fg=MUTED,
                font=("Segoe UI", 10),
            ).pack(anchor="w")
            return
        for i, name in enumerate(sequence):
            chip = tk.Frame(seq_frame, bg=KEY, padx=8, pady=4)
            chip.pack(side="left", padx=(0, 6), pady=2)
            tk.Label(chip, text=name, bg=KEY, fg=FG, font=("IBM Plex Mono", 10)).pack(
                side="left"
            )
            tk.Button(
                chip,
                text="×",
                command=lambda idx=i: remove_at(idx),
                bg=KEY,
                fg=MUTED,
                relief="flat",
                bd=0,
                cursor="hand2",
            ).pack(side="left", padx=(6, 0))

    def remove_at(idx: int) -> None:
        if 0 <= idx < len(sequence):
            sequence.pop(idx)
            paint_seq()

    def bind_key() -> None:
        capture_var.set("Press any key…")

        def on_press(key) -> bool:
            name = None
            try:
                if hasattr(key, "char") and key.char:
                    name = key.char
                else:
                    label = str(key).replace("Key.", "")
                    name = label
            except Exception:
                name = None
            if name:
                sequence.append(name)
                root.after(0, paint_seq)
            root.after(0, lambda: capture_var.set(""))
            return False

        listener = Listener(on_press=on_press)
        listener.start()

    def clear_seq() -> None:
        sequence.clear()
        paint_seq()

    def start() -> None:
        if not sequence:
            messagebox.showinfo("PulseTap", "Add at least one key to the sequence.")
            return
        presser.start(**params())
        paint_start()

    def stop() -> None:
        presser.stop()
        paint_start()

    def toggle() -> None:
        if presser.running:
            stop()
        else:
            start()

    def paint_start() -> None:
        if presser.running:
            start_btn.configure(text="Stop  ·  F8", bg=DANGER, fg=FG)
        else:
            start_btn.configure(text="Start  ·  F8", bg=ACCENT, fg=ACCENT_FG)

    def toggle_top() -> None:
        root.attributes("-topmost", always_on_top.get())

    def apply_preset(keys: List[str], interval: int) -> None:
        sequence.clear()
        sequence.extend(keys)
        interval_var.set(interval)
        paint_seq()

    pad = {"bg": BG, "fg": FG}
    outer = tk.Frame(root, bg=BG, padx=20, pady=18)
    outer.pack(fill="both", expand=True)

    head = tk.Frame(outer, bg=BG)
    head.pack(fill="x")
    tk.Label(head, text="PulseTap", bg=BG, fg=FG, font=("Segoe UI", 20, "bold")).pack(
        side="left"
    )
    tk.Label(head, text="MIT · open source", bg=BG, fg=MUTED, font=("Segoe UI", 9)).pack(
        side="left", padx=(10, 0), pady=(8, 0)
    )
    tk.Checkbutton(
        head,
        text="Always on top",
        variable=always_on_top,
        command=toggle_top,
        bg=BG,
        fg=MUTED,
        selectcolor=SURFACE,
        activebackground=BG,
        activeforeground=FG,
        highlightthickness=0,
    ).pack(side="right")

    tk.Label(
        outer,
        text="Click Bind key, then press the key you want repeated. F8 toggles anywhere.",
        bg=BG,
        fg=MUTED,
        wraplength=400,
        justify="left",
        font=("Segoe UI", 10),
    ).pack(anchor="w", pady=(8, 12))

    presets = tk.Frame(outer, bg=BG)
    presets.pack(fill="x", pady=(0, 10))
    for label, keys, interval in (
        ("Space", ["space"], 1000),
        ("Enter", ["enter"], 800),
        ("W", ["w"], 200),
        ("WASD", ["w", "a", "s", "d"], 420),
        ("Arrows", ["up", "right", "down", "left"], 350),
    ):
        tk.Button(
            presets,
            text=label,
            command=lambda k=keys, i=interval: apply_preset(k, i),
            bg=SURFACE,
            fg=FG,
            relief="flat",
            padx=10,
            pady=4,
            cursor="hand2",
        ).pack(side="left", padx=(0, 6))

    panel = tk.Frame(outer, bg=SURFACE, padx=14, pady=12)
    panel.pack(fill="x")
    row = tk.Frame(panel, bg=SURFACE)
    row.pack(fill="x")
    tk.Label(row, text="Sequence", bg=SURFACE, fg=MUTED, font=("Segoe UI", 9)).pack(
        side="left"
    )
    tk.Button(
        row, text="Bind key", command=bind_key, bg=ACCENT, fg=ACCENT_FG, relief="flat", cursor="hand2"
    ).pack(side="right")
    tk.Button(
        row, text="Clear", command=clear_seq, bg=KEY, fg=FG, relief="flat", cursor="hand2"
    ).pack(side="right", padx=(0, 6))
    seq_frame = tk.Frame(panel, bg=SURFACE, pady=8)
    seq_frame.pack(fill="x")
    tk.Label(panel, textvariable=capture_var, bg=SURFACE, fg=ACCENT, font=("Segoe UI", 9)).pack(
        anchor="w"
    )

    def slider(label: str, var: tk.IntVar, lo: int, hi: int, unit: str) -> None:
        wrap = tk.Frame(outer, bg=BG, pady=4)
        wrap.pack(fill="x")
        header = tk.Frame(wrap, bg=BG)
        header.pack(fill="x")
        tk.Label(header, text=label, bg=BG, fg=MUTED, font=("Segoe UI", 9)).pack(side="left")
        val = tk.Label(header, text=f"{var.get()} {unit}", bg=BG, fg=FG, font=("Segoe UI", 9))
        val.pack(side="right")

        def on_slide(_evt=None) -> None:
            val.configure(text=f"{int(var.get())} {unit}")

        sc = tk.Scale(
            wrap,
            from_=lo,
            to=hi,
            orient="horizontal",
            variable=var,
            showvalue=False,
            bg=BG,
            fg=FG,
            highlightthickness=0,
            troughcolor=SURFACE,
            activebackground=ACCENT,
            sliderrelief="flat",
            command=lambda _v: on_slide(),
        )
        sc.pack(fill="x")

    slider("Interval", interval_var, 20, 5000, "ms")
    slider("Hold", hold_var, 10, 1000, "ms")
    slider("Jitter", jitter_var, 0, 40, "%")
    slider("Repeats (0 = infinite)", repeats_var, 0, 500, "×")
    slider("Countdown", countdown_var, 0, 10, "s")

    start_btn = tk.Button(
        outer,
        text="Start  ·  F8",
        command=toggle,
        bg=ACCENT,
        fg=ACCENT_FG,
        relief="flat",
        font=("Segoe UI", 13, "bold"),
        pady=12,
        cursor="hand2",
    )
    start_btn.pack(fill="x", pady=(12, 8))

    tk.Label(outer, textvariable=status_var, bg=BG, fg=ACCENT, font=("Segoe UI", 10)).pack(
        anchor="w"
    )
    tk.Label(outer, textvariable=stats_var, bg=BG, fg=MUTED, font=("Segoe UI", 10)).pack(
        anchor="w"
    )

    paint_seq()
    root.attributes("-topmost", True)

    hotkeys = GlobalHotKeys({args.hotkey: lambda: root.after(0, toggle)})
    hotkeys.start()

    def on_close() -> None:
        presser.stop()
        try:
            hotkeys.stop()
        except Exception:
            pass
        root.destroy()

    root.protocol("WM_DELETE_WINDOW", on_close)
    if args.autostart:
        root.after(300, start)
    root.mainloop()


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        prog="pulsetap",
        description="Open-source auto keyboard presser (MIT).",
    )
    p.add_argument("--sequence", nargs="+", default=SEQUENCE, help="Keys to press in order")
    p.add_argument("--interval", type=int, default=INTERVAL_MS, help="Milliseconds between presses")
    p.add_argument("--hold", type=int, default=HOLD_MS, help="Milliseconds to hold each key")
    p.add_argument("--jitter", type=int, default=JITTER_PCT, help="Randomize interval by this percent")
    p.add_argument("--repeats", type=int, default=REPEATS, help="Sequence cycles; 0 = infinite")
    p.add_argument("--countdown", type=int, default=COUNTDOWN_S, help="Seconds before the first press")
    p.add_argument(
        "--modifiers",
        nargs="*",
        default=MODIFIERS,
        choices=["ctrl", "shift", "alt", "cmd"],
        help="Held while each key is tapped",
    )
    p.add_argument("--hotkey", default=HOTKEY, help="Global toggle hotkey, default <f8>")
    p.add_argument("--cli", action="store_true", help="Force the terminal UI")
    p.add_argument("--gui", action="store_true", help="Force the desktop window")
    p.add_argument("--autostart", action="store_true", help="Start pressing immediately")
    p.add_argument("--config", help="JSON file with sequence/interval/hold/...")
    p.add_argument("--list-keys", action="store_true", help="Print supported special key names")
    return p


def apply_config_file(args: argparse.Namespace, path: str) -> None:
    with open(path, "r", encoding="utf-8") as fh:
        data = json.load(fh)
    if "sequence" in data:
        args.sequence = list(data["sequence"])
    for src, dest in (
        ("interval_ms", "interval"),
        ("interval", "interval"),
        ("hold_ms", "hold"),
        ("hold", "hold"),
        ("jitter_pct", "jitter"),
        ("jitter", "jitter"),
        ("repeats", "repeats"),
        ("countdown_s", "countdown"),
        ("countdown", "countdown"),
        ("modifiers", "modifiers"),
        ("hotkey", "hotkey"),
    ):
        if src in data:
            setattr(args, dest, data[src])


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    if args.list_keys:
        print("Special keys:")
        for name in sorted(SPECIAL_KEYS):
            print(f"  {name}")
        return
    if args.config:
        apply_config_file(args, args.config)
    if args.cli or (not args.gui and not has_display()):
        run_cli(args)
    else:
        run_gui(args)


if __name__ == "__main__":
    main()
