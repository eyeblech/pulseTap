import { useCallback, useEffect, useRef } from "react";
import { KEYS, keyFromEvent, sandboxInsert } from "@/lib/keys";
import { toast } from "sonner";
import { persistConfig, useAppStore } from "@/lib/store";

function sleep(ms: number, signal: { cancelled: boolean }) {
  return new Promise<void>((resolve) => {
    const start = performance.now();
    const tick = () => {
      if (signal.cancelled) {
        resolve();
        return;
      }
      if (performance.now() - start >= ms) {
        resolve();
        return;
      }
      window.setTimeout(tick, Math.min(40, ms));
    };
    window.setTimeout(tick, Math.min(40, ms));
  });
}

export function usePresserEngine() {
  const runId = useRef(0);
  const signal = useRef({ cancelled: false });

  const stop = useCallback(() => {
    signal.current.cancelled = true;
    runId.current += 1;
    useAppStore.getState().setRunning(false);
    useAppStore.getState().setCountdownLeft(0);
    useAppStore.getState().setLitKeyId(null);
  }, []);

  const start = useCallback(async () => {
    const snap = useAppStore.getState();
    if (snap.running) return;
    if (!snap.sequence.length) {
      toast("Add a key first — click the keyboard or Bind key.");
      return;
    }
    persistConfig();
    const myRun = ++runId.current;
    signal.current = { cancelled: false };
    snap.setRunning(true);
    snap.resetStats();

    for (let c = snap.countdownS; c > 0; c--) {
      if (signal.current.cancelled || runId.current !== myRun) return;
      useAppStore.getState().setCountdownLeft(c);
      await sleep(1000, signal.current);
    }
    if (signal.current.cancelled || runId.current !== myRun) return;
    useAppStore.getState().setCountdownLeft(0);
    useAppStore.getState().markStarted();

    let cycles = 0;
    const sequence = [...useAppStore.getState().sequence];
    const repeats = useAppStore.getState().repeats;

    while (!signal.current.cancelled && runId.current === myRun) {
      const live = useAppStore.getState();
      const seq = live.sequence.length ? live.sequence : sequence;
      for (const step of seq) {
        if (signal.current.cancelled || runId.current !== myRun) return;
        const def = KEYS[step.keyId];
        if (!def) continue;
        const hold = Math.min(live.holdMs, live.intervalMs);
        const jitter = live.jitterPct / 100;
        const interval =
          live.intervalMs * (jitter ? 1 + (Math.random() * 2 - 1) * jitter : 1);
        live.setLitKeyId(def.id);
        if (def.id === "Backspace") {
          const cur = useAppStore.getState().sandbox;
          useAppStore.setState({ sandbox: cur.slice(0, -1) });
        } else {
          live.appendSandbox(sandboxInsert(def));
        }
        live.bumpPress();
        await sleep(Math.max(10, hold), signal.current);
        if (runId.current === myRun) {
          useAppStore.getState().setLitKeyId(null);
        }
        const rest = Math.max(0, interval - hold);
        if (rest > 0) await sleep(rest, signal.current);
      }
      cycles += 1;
      if (repeats > 0 && cycles >= repeats) {
        toast("Sequence finished.");
        stop();
        return;
      }
    }
  }, [stop]);

  const toggle = useCallback(() => {
    if (useAppStore.getState().running) stop();
    else void start();
  }, [start, stop]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const state = useAppStore.getState();
      const target = e.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (state.capturing) {
        e.preventDefault();
        if (e.repeat) return;
        if (e.code === "Escape") {
          state.setCapturing(false);
          return;
        }
        const def = keyFromEvent(e);
        if (def) {
          state.addKey(def.id);
          toast(`Added ${def.label}`);
        }
        state.setCapturing(false);
        return;
      }

      if (e.code === "Escape" && state.running) {
        e.preventDefault();
        stop();
        return;
      }
      if (e.code === "F8") {
        e.preventDefault();
        toggle();
        return;
      }
      if (typing) return;
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [stop, toggle]);

  useEffect(() => () => stop(), [stop]);

  return { start, stop, toggle };
}
