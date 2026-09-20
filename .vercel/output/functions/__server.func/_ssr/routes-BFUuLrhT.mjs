import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { r as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Monitor, c as FolderArchive, d as Check, i as Play, l as Download, o as Keyboard, r as Square, s as Github, t as X, u as Copy } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider$1 } from "../_libs/@radix-ui/react-slider+[...].mjs";
import { a as Trigger, i as Root3, n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BFUuLrhT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid() {
	return Math.random().toString(36).slice(2, 10);
}
function formatDuration(ms) {
	const total = Math.max(0, Math.floor(ms / 1e3));
	const h = Math.floor(total / 3600);
	const m = Math.floor(total % 3600 / 60);
	const s = total % 60;
	if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
	return `${m}:${String(s).padStart(2, "0")}`;
}
function formatRate(presses, elapsedMs) {
	if (elapsedMs < 400) return "0.0";
	return (presses / elapsedMs * 1e3).toFixed(1);
}
var W = { std: "1" };
function charKey(ch, extra) {
	const lower = ch.toLowerCase();
	const isLetter = /^[a-z]$/.test(lower);
	const pynput = ch === "'" ? `"'" ` : ch === "\\" ? `"\\\\"` : ch === "\"" ? `'\"'` : `"${ch}"`;
	return {
		id: isLetter ? `Key${ch.toUpperCase()}` : `Digit${ch}`,
		label: isLetter ? ch.toUpperCase() : ch,
		width: W.std,
		insert: ch,
		pynput: pynput.trim(),
		pyName: lower,
		...extra
	};
}
var SPECIAL = [
	{
		id: "Escape",
		label: "Esc",
		pyName: "esc",
		pynput: "Key.esc",
		token: "Esc"
	},
	{
		id: "F1",
		label: "F1",
		pyName: "f1",
		pynput: "Key.f1",
		token: "F1"
	},
	{
		id: "F2",
		label: "F2",
		pyName: "f2",
		pynput: "Key.f2",
		token: "F2"
	},
	{
		id: "F3",
		label: "F3",
		pyName: "f3",
		pynput: "Key.f3",
		token: "F3"
	},
	{
		id: "F4",
		label: "F4",
		pyName: "f4",
		pynput: "Key.f4",
		token: "F4"
	},
	{
		id: "F5",
		label: "F5",
		pyName: "f5",
		pynput: "Key.f5",
		token: "F5"
	},
	{
		id: "F6",
		label: "F6",
		pyName: "f6",
		pynput: "Key.f6",
		token: "F6"
	},
	{
		id: "F7",
		label: "F7",
		pyName: "f7",
		pynput: "Key.f7",
		token: "F7"
	},
	{
		id: "F8",
		label: "F8",
		pyName: "f8",
		pynput: "Key.f8",
		token: "F8"
	},
	{
		id: "F9",
		label: "F9",
		pyName: "f9",
		pynput: "Key.f9",
		token: "F9"
	},
	{
		id: "F10",
		label: "F10",
		pyName: "f10",
		pynput: "Key.f10",
		token: "F10"
	},
	{
		id: "F11",
		label: "F11",
		pyName: "f11",
		pynput: "Key.f11",
		token: "F11"
	},
	{
		id: "F12",
		label: "F12",
		pyName: "f12",
		pynput: "Key.f12",
		token: "F12"
	},
	{
		id: "Backquote",
		label: "`",
		pyName: "`",
		pynput: "\"`\"",
		insert: "`"
	},
	{
		id: "Minus",
		label: "-",
		pyName: "-",
		pynput: "\"-\"",
		insert: "-"
	},
	{
		id: "Equal",
		label: "=",
		pyName: "=",
		pynput: "\"=\"",
		insert: "="
	},
	{
		id: "Backspace",
		label: "Bksp",
		width: "2",
		pyName: "backspace",
		pynput: "Key.backspace",
		token: "⌫"
	},
	{
		id: "Tab",
		label: "Tab",
		width: "1.5",
		pyName: "tab",
		pynput: "Key.tab",
		insert: "	",
		token: "⇥"
	},
	{
		id: "BracketLeft",
		label: "[",
		pyName: "[",
		pynput: "\"[\"",
		insert: "["
	},
	{
		id: "BracketRight",
		label: "]",
		pyName: "]",
		pynput: "\"]\"",
		insert: "]"
	},
	{
		id: "Backslash",
		label: "\\",
		pyName: "\\",
		pynput: "\"\\\\\"",
		insert: "\\"
	},
	{
		id: "CapsLock",
		label: "Caps",
		width: "1.75",
		pyName: "caps_lock",
		pynput: "Key.caps_lock",
		token: "Caps"
	},
	{
		id: "Semicolon",
		label: ";",
		pyName: ";",
		pynput: "\";\"",
		insert: ";"
	},
	{
		id: "Quote",
		label: "'",
		pyName: "'",
		pynput: "\"'\"",
		insert: "'"
	},
	{
		id: "Enter",
		label: "Enter",
		width: "2.25",
		pyName: "enter",
		pynput: "Key.enter",
		insert: "\n",
		token: "⏎"
	},
	{
		id: "ShiftLeft",
		label: "Shift",
		width: "2.25",
		pyName: "shift",
		pynput: "Key.shift",
		token: "⇧"
	},
	{
		id: "Comma",
		label: ",",
		pyName: ",",
		pynput: "\",\"",
		insert: ","
	},
	{
		id: "Period",
		label: ".",
		pyName: ".",
		pynput: "\".\"",
		insert: "."
	},
	{
		id: "Slash",
		label: "/",
		pyName: "/",
		pynput: "\"/\"",
		insert: "/"
	},
	{
		id: "ShiftRight",
		label: "Shift",
		width: "2.75",
		pyName: "shift",
		pynput: "Key.shift",
		token: "⇧"
	},
	{
		id: "ControlLeft",
		label: "Ctrl",
		width: "1.25",
		pyName: "ctrl",
		pynput: "Key.ctrl",
		token: "Ctrl"
	},
	{
		id: "AltLeft",
		label: "Alt",
		width: "1.25",
		pyName: "alt",
		pynput: "Key.alt",
		token: "Alt"
	},
	{
		id: "MetaLeft",
		label: "Win",
		width: "1.25",
		pyName: "cmd",
		pynput: "Key.cmd",
		token: "Win"
	},
	{
		id: "Space",
		label: "Space",
		width: "6.25",
		pyName: "space",
		pynput: "Key.space",
		insert: " ",
		token: "␣"
	},
	{
		id: "AltRight",
		label: "Alt",
		width: "1.25",
		pyName: "alt",
		pynput: "Key.alt",
		token: "Alt"
	},
	{
		id: "ControlRight",
		label: "Ctrl",
		width: "1.25",
		pyName: "ctrl",
		pynput: "Key.ctrl",
		token: "Ctrl"
	},
	{
		id: "ArrowLeft",
		label: "←",
		pyName: "left",
		pynput: "Key.left",
		token: "←"
	},
	{
		id: "ArrowDown",
		label: "↓",
		pyName: "down",
		pynput: "Key.down",
		token: "↓"
	},
	{
		id: "ArrowUp",
		label: "↑",
		pyName: "up",
		pynput: "Key.up",
		token: "↑"
	},
	{
		id: "ArrowRight",
		label: "→",
		pyName: "right",
		pynput: "Key.right",
		token: "→"
	},
	{
		id: "Delete",
		label: "Del",
		pyName: "delete",
		pynput: "Key.delete",
		token: "Del"
	},
	{
		id: "Home",
		label: "Home",
		pyName: "home",
		pynput: "Key.home",
		token: "Home"
	},
	{
		id: "End",
		label: "End",
		pyName: "end",
		pynput: "Key.end",
		token: "End"
	},
	{
		id: "PageUp",
		label: "PgUp",
		pyName: "page_up",
		pynput: "Key.page_up",
		token: "PgUp"
	},
	{
		id: "PageDown",
		label: "PgDn",
		pyName: "page_down",
		pynput: "Key.page_down",
		token: "PgDn"
	},
	{
		id: "Insert",
		label: "Ins",
		pyName: "insert",
		pynput: "Key.insert",
		token: "Ins"
	}
];
var NUMBER_ROW = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"0"
].map((d) => charKey(d, { id: `Digit${d}` }));
var LETTER = (ch) => charKey(ch, { id: `Key${ch.toUpperCase()}` });
var KEYS = {};
function register(def) {
	KEYS[def.id] = def;
	return def;
}
SPECIAL.forEach(register);
NUMBER_ROW.forEach(register);
"abcdefghijklmnopqrstuvwxyz".split("").forEach((c) => register(LETTER(c)));
var LAYOUT = {
	fn: [
		"Escape",
		"F1",
		"F2",
		"F3",
		"F4",
		"F5",
		"F6",
		"F7",
		"F8",
		"F9",
		"F10",
		"F11",
		"F12"
	],
	extras: [
		"Insert",
		"Delete",
		"Home",
		"End",
		"PageUp",
		"PageDown"
	],
	row1: [
		"Backquote",
		"Digit1",
		"Digit2",
		"Digit3",
		"Digit4",
		"Digit5",
		"Digit6",
		"Digit7",
		"Digit8",
		"Digit9",
		"Digit0",
		"Minus",
		"Equal",
		"Backspace"
	],
	row2: [
		"Tab",
		"KeyQ",
		"KeyW",
		"KeyE",
		"KeyR",
		"KeyT",
		"KeyY",
		"KeyU",
		"KeyI",
		"KeyO",
		"KeyP",
		"BracketLeft",
		"BracketRight",
		"Backslash"
	],
	row3: [
		"CapsLock",
		"KeyA",
		"KeyS",
		"KeyD",
		"KeyF",
		"KeyG",
		"KeyH",
		"KeyJ",
		"KeyK",
		"KeyL",
		"Semicolon",
		"Quote",
		"Enter"
	],
	row4: [
		"ShiftLeft",
		"KeyZ",
		"KeyX",
		"KeyC",
		"KeyV",
		"KeyB",
		"KeyN",
		"KeyM",
		"Comma",
		"Period",
		"Slash",
		"ShiftRight"
	],
	row5: [
		"ControlLeft",
		"MetaLeft",
		"AltLeft",
		"Space",
		"AltRight",
		"ControlRight",
		"ArrowLeft",
		"ArrowDown",
		"ArrowUp",
		"ArrowRight"
	],
	compact: [
		[
			"KeyQ",
			"KeyW",
			"KeyE",
			"KeyR",
			"KeyT",
			"KeyY",
			"KeyU",
			"KeyI",
			"KeyO",
			"KeyP"
		],
		[
			"KeyA",
			"KeyS",
			"KeyD",
			"KeyF",
			"KeyG",
			"KeyH",
			"KeyJ",
			"KeyK",
			"KeyL"
		],
		[
			"KeyZ",
			"KeyX",
			"KeyC",
			"KeyV",
			"KeyB",
			"KeyN",
			"KeyM"
		],
		[
			"Space",
			"Enter",
			"Backspace",
			"Tab",
			"Escape"
		]
	]
};
Object.keys(KEYS).reduce((acc, id) => {
	acc[id] = id;
	return acc;
}, {});
function keyFromEvent(e) {
	if (KEYS[e.code]) return KEYS[e.code];
	const lower = e.key.length === 1 ? e.key.toLowerCase() : e.key;
	return Object.values(KEYS).find((k) => k.pyName === lower || k.label.toLowerCase() === e.key.toLowerCase()) ?? null;
}
function sandboxInsert(def) {
	if (def.insert !== void 0) return def.insert;
	return `⟨${def.token ?? def.label}⟩`;
}
var PRESETS = [
	{
		id: "space",
		name: "Space",
		keyIds: ["Space"],
		intervalMs: 1e3,
		holdMs: 40,
		jitterPct: 0,
		repeats: 0,
		countdownS: 0,
		modifiers: []
	},
	{
		id: "enter",
		name: "Enter",
		keyIds: ["Enter"],
		intervalMs: 800,
		holdMs: 40,
		jitterPct: 0,
		repeats: 0,
		countdownS: 0,
		modifiers: []
	},
	{
		id: "w",
		name: "Walk (W)",
		keyIds: ["KeyW"],
		intervalMs: 200,
		holdMs: 160,
		jitterPct: 8,
		repeats: 0,
		countdownS: 0,
		modifiers: []
	},
	{
		id: "wasd",
		name: "WASD loop",
		keyIds: [
			"KeyW",
			"KeyA",
			"KeyS",
			"KeyD"
		],
		intervalMs: 420,
		holdMs: 180,
		jitterPct: 5,
		repeats: 0,
		countdownS: 0,
		modifiers: []
	},
	{
		id: "arrows",
		name: "Arrows",
		keyIds: [
			"ArrowUp",
			"ArrowRight",
			"ArrowDown",
			"ArrowLeft"
		],
		intervalMs: 350,
		holdMs: 80,
		jitterPct: 0,
		repeats: 0,
		countdownS: 0,
		modifiers: []
	},
	{
		id: "tab",
		name: "Tab",
		keyIds: ["Tab"],
		intervalMs: 1500,
		holdMs: 40,
		jitterPct: 0,
		repeats: 0,
		countdownS: 0,
		modifiers: []
	}
];
var INTERVAL_CHIPS = [
	50,
	100,
	250,
	500,
	1e3,
	2e3,
	5e3
];
var STORAGE_KEY = "pulsetap-v1";
var defaultPreset = PRESETS[0];
function stepsFromIds(ids) {
	return ids.filter((id) => KEYS[id]).map((id) => ({
		uid: uid(),
		keyId: id
	}));
}
var useAppStore = create((set, get) => ({
	sequence: stepsFromIds(defaultPreset.keyIds),
	intervalMs: defaultPreset.intervalMs,
	holdMs: defaultPreset.holdMs,
	jitterPct: defaultPreset.jitterPct,
	repeats: defaultPreset.repeats,
	countdownS: defaultPreset.countdownS,
	modifiers: [],
	running: false,
	capturing: false,
	countdownLeft: 0,
	litKeyId: null,
	presses: 0,
	startedAt: null,
	sandbox: "",
	addKey: (keyId) => {
		if (!KEYS[keyId]) return;
		if (get().sequence.length >= 32) return;
		set({ sequence: [...get().sequence, {
			uid: uid(),
			keyId
		}] });
	},
	removeAt: (index) => {
		set({ sequence: get().sequence.filter((_, i) => i !== index) });
	},
	clearSequence: () => set({ sequence: [] }),
	setIntervalMs: (n) => {
		const next = Math.min(6e4, Math.max(20, Math.round(n)));
		if (get().intervalMs === next) return;
		set({ intervalMs: next });
	},
	setHoldMs: (n) => {
		const next = Math.min(5e3, Math.max(10, Math.round(n)));
		if (get().holdMs === next) return;
		set({ holdMs: next });
	},
	setJitterPct: (n) => {
		const next = Math.min(50, Math.max(0, Math.round(n)));
		if (get().jitterPct === next) return;
		set({ jitterPct: next });
	},
	setRepeats: (n) => {
		const next = Math.min(1e5, Math.max(0, Math.round(n)));
		if (get().repeats === next) return;
		set({ repeats: next });
	},
	setCountdownS: (n) => {
		const next = Math.min(10, Math.max(0, Math.round(n)));
		if (get().countdownS === next) return;
		set({ countdownS: next });
	},
	toggleModifier: (m) => {
		const cur = get().modifiers;
		set({ modifiers: cur.includes(m) ? cur.filter((x) => x !== m) : [...cur, m] });
	},
	applyPreset: (preset) => set({
		sequence: stepsFromIds(preset.keyIds),
		intervalMs: preset.intervalMs,
		holdMs: preset.holdMs,
		jitterPct: preset.jitterPct,
		repeats: preset.repeats,
		countdownS: preset.countdownS,
		modifiers: [...preset.modifiers]
	}),
	setRunning: (v) => set({ running: v }),
	setCapturing: (v) => set({ capturing: v }),
	setCountdownLeft: (n) => set({ countdownLeft: n }),
	setLitKeyId: (id) => set({ litKeyId: id }),
	bumpPress: () => set({ presses: get().presses + 1 }),
	resetStats: () => set({
		presses: 0,
		startedAt: null
	}),
	markStarted: () => set({
		presses: 0,
		startedAt: Date.now()
	}),
	appendSandbox: (chunk) => {
		set({ sandbox: (get().sandbox + chunk).slice(-4e3) });
	},
	clearSandbox: () => set({ sandbox: "" }),
	hydrate: (partial) => {
		const seq = (partial.sequence ?? []).filter((s) => s && KEYS[s.keyId]).map((s) => ({
			uid: s.uid || uid(),
			keyId: s.keyId
		}));
		set({
			sequence: seq.length ? seq : get().sequence,
			intervalMs: partial.intervalMs ?? get().intervalMs,
			holdMs: partial.holdMs ?? get().holdMs,
			jitterPct: partial.jitterPct ?? get().jitterPct,
			repeats: partial.repeats ?? get().repeats,
			countdownS: partial.countdownS ?? get().countdownS,
			modifiers: partial.modifiers ?? get().modifiers
		});
	}
}));
function persistConfig() {
	const s = useAppStore.getState();
	const data = {
		sequence: s.sequence,
		intervalMs: s.intervalMs,
		holdMs: s.holdMs,
		jitterPct: s.jitterPct,
		repeats: s.repeats,
		countdownS: s.countdownS,
		modifiers: s.modifiers
	};
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	} catch {}
}
function loadPersisted() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return null;
		return JSON.parse(raw);
	} catch {
		return null;
	}
}
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors", {
	variants: { variant: {
		default: "border-transparent bg-muted text-muted-foreground",
		accent: "border-transparent bg-primary text-primary-foreground",
		outline: "border-border text-foreground",
		live: "border-transparent bg-primary/15 text-primary"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function useNow(active) {
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		if (!active) return;
		const id = window.setInterval(() => setNow(Date.now()), 250);
		return () => window.clearInterval(id);
	}, [active]);
	return now;
}
function AppHeader() {
	const running = useAppStore((s) => s.running);
	const presses = useAppStore((s) => s.presses);
	const startedAt = useAppStore((s) => s.startedAt);
	const countdownLeft = useAppStore((s) => s.countdownLeft);
	const now = useNow(running);
	const elapsed = startedAt ? now - startedAt : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-border bg-background/80 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-10 shrink-0 place-items-center rounded-md bg-card text-primary ring-1 ring-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Keyboard, {
						className: "size-5",
						strokeWidth: 1.75
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-lg font-medium tracking-tight",
							children: "PulseTap"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							children: "MIT"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-xs text-muted-foreground",
						children: "Open-source auto keyboard presser"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid w-full min-w-0 grid-cols-3 gap-2 sm:w-auto sm:gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Status",
						value: countdownLeft > 0 ? `in ${countdownLeft}s` : running ? "live" : "idle",
						live: running
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Presses",
						value: String(presses)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Rate",
						value: `${formatRate(presses, elapsed)}/s`,
						extra: startedAt ? formatDuration(elapsed) : "0:00"
					})
				]
			})]
		})
	});
}
function Stat({ label, value, extra, live }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs tracking-wide text-subtle uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
			className: "mt-0.5 min-w-0 font-mono text-sm tabular-nums",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1.5",
				children: [live !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "live-dot shrink-0",
					"data-on": live ? "true" : "false"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate",
					children: value
				})]
			}), extra ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block truncate text-xs text-subtle",
				children: extra
			}) : null]
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,color,opacity,border-color] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-muted text-foreground hover:bg-border",
			outline: "border border-border bg-transparent text-foreground hover:bg-muted",
			ghost: "text-muted-foreground hover:bg-muted hover:text-foreground",
			destructive: "bg-destructive text-destructive-foreground hover:opacity-90"
		},
		size: {
			default: "h-11 rounded-md px-4 text-sm",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-md px-5 text-base",
			icon: "size-11 rounded-md",
			chip: "h-8 rounded-full px-3 text-xs"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	type,
	className: cn("flex h-11 w-full rounded-md border border-border bg-muted px-3 text-sm text-foreground", "placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
	ref,
	...props
}));
Input.displayName = "Input";
var Slider = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider$1, {
	ref,
	className: cn("relative flex w-full touch-none items-center select-none", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
		className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full bg-primary" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, { className: "block size-4 rounded-full border border-border bg-foreground shadow-sm transition-[transform,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)] hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none" })]
}));
Slider.displayName = Slider$1.displayName;
var MODS = [
	{
		id: "ctrl",
		label: "Ctrl"
	},
	{
		id: "shift",
		label: "Shift"
	},
	{
		id: "alt",
		label: "Alt"
	},
	{
		id: "cmd",
		label: "Win / Cmd"
	}
];
function Field({ label, value, unit, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "text-xs font-medium text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "stat text-xs text-foreground",
				children: [value, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-subtle",
					children: [" ", unit]
				})]
			})]
		}), children]
	});
}
function ControlPanel() {
	const intervalMs = useAppStore((s) => s.intervalMs);
	const holdMs = useAppStore((s) => s.holdMs);
	const jitterPct = useAppStore((s) => s.jitterPct);
	const repeats = useAppStore((s) => s.repeats);
	const countdownS = useAppStore((s) => s.countdownS);
	const modifiers = useAppStore((s) => s.modifiers);
	const running = useAppStore((s) => s.running);
	const applyPreset = useAppStore((s) => s.applyPreset);
	const setIntervalMs = useAppStore((s) => s.setIntervalMs);
	const setHoldMs = useAppStore((s) => s.setHoldMs);
	const setJitterPct = useAppStore((s) => s.setJitterPct);
	const setRepeats = useAppStore((s) => s.setRepeats);
	const setCountdownS = useAppStore((s) => s.setCountdownS);
	const toggleModifier = useAppStore((s) => s.toggleModifier);
	const intervalValue = (0, import_react.useMemo)(() => [intervalMs], [intervalMs]);
	const holdValue = (0, import_react.useMemo)(() => [holdMs], [holdMs]);
	const jitterValue = (0, import_react.useMemo)(() => [jitterPct], [jitterPct]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel space-y-5 px-4 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium",
				children: "Presets"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex flex-wrap gap-1.5",
				children: PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					size: "chip",
					variant: "secondary",
					disabled: running,
					onClick: () => {
						applyPreset(p);
						persistConfig();
					},
					children: p.name
				}, p.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
				label: "Interval",
				value: intervalMs >= 1e3 ? (intervalMs / 1e3).toFixed(intervalMs % 1e3 ? 1 : 0) : String(intervalMs),
				unit: intervalMs >= 1e3 ? "s" : "ms",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					min: 20,
					max: 5e3,
					step: 10,
					value: intervalValue,
					disabled: running,
					onValueChange: ([v]) => setIntervalMs(v ?? intervalMs),
					onValueCommit: () => persistConfig()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1 pt-1",
					children: INTERVAL_CHIPS.map((ms) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: running,
						onClick: () => {
							setIntervalMs(ms);
							persistConfig();
						},
						className: cn("h-7 rounded-full px-2 font-mono text-xs text-muted-foreground transition-colors duration-[var(--motion-quick)]", intervalMs === ms ? "bg-muted text-foreground" : "hover:text-foreground"),
						children: ms >= 1e3 ? `${ms / 1e3}s` : `${ms}`
					}, ms))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Hold",
				value: String(holdMs),
				unit: "ms",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					min: 10,
					max: 1e3,
					step: 10,
					value: holdValue,
					disabled: running,
					onValueChange: ([v]) => setHoldMs(v ?? holdMs),
					onValueCommit: () => persistConfig()
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Jitter",
				value: String(jitterPct),
				unit: "%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
					min: 0,
					max: 40,
					step: 1,
					value: jitterValue,
					disabled: running,
					onValueChange: ([v]) => setJitterPct(v ?? jitterPct),
					onValueCommit: () => persistConfig()
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-muted-foreground",
							htmlFor: "repeats",
							children: "Repeats"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "repeats",
							type: "number",
							min: 0,
							max: 1e5,
							value: repeats,
							disabled: running,
							onChange: (e) => setRepeats(Number(e.target.value) || 0),
							onBlur: () => persistConfig()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-subtle",
							children: "0 = infinite"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium text-muted-foreground",
							htmlFor: "countdown",
							children: "Countdown"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "countdown",
							type: "number",
							min: 0,
							max: 10,
							value: countdownS,
							disabled: running,
							onChange: (e) => setCountdownS(Number(e.target.value) || 0),
							onBlur: () => persistConfig()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-subtle",
							children: "seconds"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-medium text-muted-foreground",
				children: "Hold with each tap"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: MODS.map((m) => {
					const on = modifiers.includes(m.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						size: "chip",
						variant: on ? "default" : "outline",
						disabled: running,
						"aria-pressed": on,
						onClick: () => {
							toggleModifier(m.id);
							persistConfig();
						},
						children: m.label
					}, m.id);
				})
			})] })
		]
	});
}
var pulsetap_default = "#!/usr/bin/env python3\n\"\"\"PulseTap — open-source auto keyboard presser.\n\nMIT License. Free for personal and commercial use.\n\nInstall:\n    pip install pynput\n\nRun:\n    python pulsetap.py\n    python pulsetap.py --cli\n    python pulsetap.py --sequence space --interval 500\n\nHotkey: F8 starts and stops. Ctrl+C always quits.\n\"\"\"\n\nfrom __future__ import annotations\n\nimport argparse\nimport json\nimport random\nimport sys\nimport threading\nimport time\nfrom typing import Callable, List, Optional, Union\n\n# <<<PULSETAP_CONFIG\nSEQUENCE = [\"space\"]\nINTERVAL_MS = 1000\nHOLD_MS = 40\nJITTER_PCT = 0\nREPEATS = 0  # 0 = infinite\nCOUNTDOWN_S = 3\nMODIFIERS: List[str] = []  # ctrl, shift, alt, cmd\nHOTKEY = \"<f8>\"\n# PULSETAP_CONFIG>>>\n\ntry:\n    from pynput.keyboard import Controller, GlobalHotKeys, Key, Listener\nexcept ImportError:\n    sys.stderr.write(\n        \"PulseTap needs the pynput package.\\n\"\n        \"Install it with:  pip install pynput\\n\"\n    )\n    sys.exit(1)\n\n\nKeyTarget = Union[str, Key]\n\nSPECIAL_KEYS = {\n    \"space\": Key.space,\n    \"enter\": Key.enter,\n    \"return\": Key.enter,\n    \"tab\": Key.tab,\n    \"esc\": Key.esc,\n    \"escape\": Key.esc,\n    \"backspace\": Key.backspace,\n    \"delete\": Key.delete,\n    \"insert\": Key.insert,\n    \"home\": Key.home,\n    \"end\": Key.end,\n    \"page_up\": Key.page_up,\n    \"pageup\": Key.page_up,\n    \"page_down\": Key.page_down,\n    \"pagedown\": Key.page_down,\n    \"up\": Key.up,\n    \"down\": Key.down,\n    \"left\": Key.left,\n    \"right\": Key.right,\n    \"shift\": Key.shift,\n    \"ctrl\": Key.ctrl,\n    \"alt\": Key.alt,\n    \"cmd\": Key.cmd,\n    \"win\": Key.cmd,\n    \"caps_lock\": Key.caps_lock,\n    \"capslock\": Key.caps_lock,\n}\n\nfor _i in range(1, 13):\n    SPECIAL_KEYS[f\"f{_i}\"] = getattr(Key, f\"f{_i}\")\n\nMODIFIER_KEYS = {\n    \"ctrl\": Key.ctrl,\n    \"shift\": Key.shift,\n    \"alt\": Key.alt,\n    \"cmd\": Key.cmd,\n}\n\n\ndef resolve_key(name: str) -> KeyTarget:\n    raw = name.strip()\n    if not raw:\n        raise ValueError(\"empty key name\")\n    lower = raw.lower()\n    if lower in SPECIAL_KEYS:\n        return SPECIAL_KEYS[lower]\n    if lower in MODIFIER_KEYS:\n        return MODIFIER_KEYS[lower]\n    if len(raw) == 1:\n        return raw\n    raise ValueError(f\"unknown key: {name!r}\")\n\n\ndef jittered_interval(interval_ms: int, jitter_pct: int) -> float:\n    base = max(0.01, interval_ms / 1000.0)\n    if jitter_pct <= 0:\n        return base\n    span = jitter_pct / 100.0\n    return max(0.01, base * (1.0 + random.uniform(-span, span)))\n\n\nclass Presser:\n    \"\"\"Background key repeater. Safe to start/stop from the UI thread.\"\"\"\n\n    def __init__(\n        self,\n        on_press: Optional[Callable[[str], None]] = None,\n        on_status: Optional[Callable[[str], None]] = None,\n    ) -> None:\n        self.keyboard = Controller()\n        self.on_press = on_press\n        self.on_status = on_status\n        self._stop = threading.Event()\n        self._thread: Optional[threading.Thread] = None\n        self.running = False\n        self.presses = 0\n\n    def _emit(self, message: str) -> None:\n        if self.on_status:\n            self.on_status(message)\n\n    def start(\n        self,\n        sequence: List[str],\n        interval_ms: int,\n        hold_ms: int,\n        jitter_pct: int,\n        repeats: int,\n        countdown_s: int,\n        modifiers: List[str],\n    ) -> None:\n        if self.running:\n            return\n        if not sequence:\n            self._emit(\"Add at least one key first.\")\n            return\n        try:\n            keys = [resolve_key(name) for name in sequence]\n            mods = [MODIFIER_KEYS[m] for m in modifiers if m in MODIFIER_KEYS]\n        except ValueError as exc:\n            self._emit(str(exc))\n            return\n\n        self._stop.clear()\n        self.running = True\n        self.presses = 0\n\n        def worker() -> None:\n            try:\n                for remaining in range(countdown_s, 0, -1):\n                    if self._stop.is_set():\n                        return\n                    self._emit(f\"Starting in {remaining}…\")\n                    time.sleep(1)\n                self._emit(\"Running\")\n                cycles = 0\n                while not self._stop.is_set():\n                    for name, key in zip(sequence, keys):\n                        if self._stop.is_set():\n                            return\n                        try:\n                            for mod in mods:\n                                self.keyboard.press(mod)\n                            self.keyboard.press(key)\n                            hold = max(0.01, hold_ms / 1000.0)\n                            time.sleep(hold)\n                            self.keyboard.release(key)\n                            for mod in reversed(mods):\n                                self.keyboard.release(mod)\n                        except Exception as exc:  # permission / focus issues\n                            self._emit(f\"Could not press {name}: {exc}\")\n                            return\n                        self.presses += 1\n                        if self.on_press:\n                            self.on_press(name)\n                        wait = jittered_interval(interval_ms, jitter_pct) - hold\n                        if wait > 0:\n                            # Wait in slices so Stop is snappy.\n                            end = time.time() + wait\n                            while time.time() < end:\n                                if self._stop.is_set():\n                                    return\n                                time.sleep(min(0.05, end - time.time()))\n                    cycles += 1\n                    if repeats > 0 and cycles >= repeats:\n                        self._emit(f\"Finished {repeats} cycle(s).\")\n                        return\n            finally:\n                self.running = False\n                if not self._stop.is_set():\n                    self._emit(\"Stopped\")\n                else:\n                    self._emit(\"Stopped\")\n\n        self._thread = threading.Thread(target=worker, name=\"pulsetap\", daemon=True)\n        self._thread.start()\n\n    def stop(self) -> None:\n        self._stop.set()\n        self.running = False\n        self._emit(\"Stopped\")\n\n    def toggle(self, **kwargs) -> None:\n        if self.running:\n            self.stop()\n        else:\n            self.start(**kwargs)\n\n\ndef has_display() -> bool:\n    if sys.platform == \"win32\":\n        return True\n    if sys.platform == \"darwin\":\n        return True\n    return bool(__import__(\"os\").environ.get(\"DISPLAY\") or __import__(\"os\").environ.get(\"WAYLAND_DISPLAY\"))\n\n\ndef run_cli(args: argparse.Namespace) -> None:\n    presser = Presser(\n        on_press=lambda name: sys.stdout.write(f\"  {name}\\n\"),\n        on_status=lambda msg: sys.stdout.write(f\"{msg}\\n\"),\n    )\n    params = dict(\n        sequence=args.sequence,\n        interval_ms=args.interval,\n        hold_ms=args.hold,\n        jitter_pct=args.jitter,\n        repeats=args.repeats,\n        countdown_s=args.countdown,\n        modifiers=args.modifiers,\n    )\n\n    def toggle() -> None:\n        presser.toggle(**params)\n\n    sys.stdout.write(\n        \"PulseTap CLI  ·  F8 start/stop  ·  Ctrl+C quit\\n\"\n        f\"Sequence: {' → '.join(args.sequence)}  ·  {args.interval} ms\\n\"\n    )\n    hotkeys = GlobalHotKeys({args.hotkey: toggle})\n    hotkeys.start()\n    if args.autostart:\n        presser.start(**params)\n    try:\n        while True:\n            time.sleep(0.25)\n    except KeyboardInterrupt:\n        presser.stop()\n        hotkeys.stop()\n        sys.stdout.write(\"\\nBye.\\n\")\n\n\ndef run_gui(args: argparse.Namespace) -> None:\n    try:\n        import tkinter as tk\n        from tkinter import messagebox\n    except ImportError:\n        sys.stderr.write(\"tkinter is not available; falling back to CLI.\\n\")\n        run_cli(args)\n        return\n\n    BG = \"#0a0a0c\"\n    SURFACE = \"#141418\"\n    FG = \"#f2f1ee\"\n    MUTED = \"#9a9aa3\"\n    ACCENT = \"#8fb9a8\"\n    ACCENT_FG = \"#0a0a0c\"\n    DANGER = \"#c45c5c\"\n    KEY = \"#1a1a20\"\n\n    root = tk.Tk()\n    root.title(\"PulseTap\")\n    root.configure(bg=BG)\n    root.minsize(420, 520)\n    root.geometry(\"460x580\")\n\n    sequence: List[str] = list(args.sequence)\n    always_on_top = tk.BooleanVar(value=True)\n    interval_var = tk.IntVar(value=args.interval)\n    hold_var = tk.IntVar(value=args.hold)\n    jitter_var = tk.IntVar(value=args.jitter)\n    repeats_var = tk.IntVar(value=args.repeats)\n    countdown_var = tk.IntVar(value=args.countdown)\n    status_var = tk.StringVar(value=\"Idle · press F8 or Start\")\n    stats_var = tk.StringVar(value=\"0 presses\")\n    capture_var = tk.StringVar(value=\"\")\n\n    presser = Presser()\n\n    def set_status(msg: str) -> None:\n        def _apply() -> None:\n            status_var.set(msg)\n            stats_var.set(f\"{presser.presses} presses\")\n            paint_start()\n\n        root.after(0, _apply)\n\n    presser.on_status = set_status\n    presser.on_press = lambda _name: root.after(\n        0, lambda: stats_var.set(f\"{presser.presses} presses\")\n    )\n\n    def params() -> dict:\n        return dict(\n            sequence=list(sequence),\n            interval_ms=int(interval_var.get()),\n            hold_ms=int(hold_var.get()),\n            jitter_pct=int(jitter_var.get()),\n            repeats=int(repeats_var.get()),\n            countdown_s=int(countdown_var.get()),\n            modifiers=list(args.modifiers),\n        )\n\n    def paint_seq() -> None:\n        for child in seq_frame.winfo_children():\n            child.destroy()\n        if not sequence:\n            tk.Label(\n                seq_frame,\n                text=\"No keys yet — click Bind key or use presets.\",\n                bg=SURFACE,\n                fg=MUTED,\n                font=(\"Segoe UI\", 10),\n            ).pack(anchor=\"w\")\n            return\n        for i, name in enumerate(sequence):\n            chip = tk.Frame(seq_frame, bg=KEY, padx=8, pady=4)\n            chip.pack(side=\"left\", padx=(0, 6), pady=2)\n            tk.Label(chip, text=name, bg=KEY, fg=FG, font=(\"IBM Plex Mono\", 10)).pack(\n                side=\"left\"\n            )\n            tk.Button(\n                chip,\n                text=\"×\",\n                command=lambda idx=i: remove_at(idx),\n                bg=KEY,\n                fg=MUTED,\n                relief=\"flat\",\n                bd=0,\n                cursor=\"hand2\",\n            ).pack(side=\"left\", padx=(6, 0))\n\n    def remove_at(idx: int) -> None:\n        if 0 <= idx < len(sequence):\n            sequence.pop(idx)\n            paint_seq()\n\n    def bind_key() -> None:\n        capture_var.set(\"Press any key…\")\n\n        def on_press(key) -> bool:\n            name = None\n            try:\n                if hasattr(key, \"char\") and key.char:\n                    name = key.char\n                else:\n                    label = str(key).replace(\"Key.\", \"\")\n                    name = label\n            except Exception:\n                name = None\n            if name:\n                sequence.append(name)\n                root.after(0, paint_seq)\n            root.after(0, lambda: capture_var.set(\"\"))\n            return False\n\n        listener = Listener(on_press=on_press)\n        listener.start()\n\n    def clear_seq() -> None:\n        sequence.clear()\n        paint_seq()\n\n    def start() -> None:\n        if not sequence:\n            messagebox.showinfo(\"PulseTap\", \"Add at least one key to the sequence.\")\n            return\n        presser.start(**params())\n        paint_start()\n\n    def stop() -> None:\n        presser.stop()\n        paint_start()\n\n    def toggle() -> None:\n        if presser.running:\n            stop()\n        else:\n            start()\n\n    def paint_start() -> None:\n        if presser.running:\n            start_btn.configure(text=\"Stop  ·  F8\", bg=DANGER, fg=FG)\n        else:\n            start_btn.configure(text=\"Start  ·  F8\", bg=ACCENT, fg=ACCENT_FG)\n\n    def toggle_top() -> None:\n        root.attributes(\"-topmost\", always_on_top.get())\n\n    def apply_preset(keys: List[str], interval: int) -> None:\n        sequence.clear()\n        sequence.extend(keys)\n        interval_var.set(interval)\n        paint_seq()\n\n    pad = {\"bg\": BG, \"fg\": FG}\n    outer = tk.Frame(root, bg=BG, padx=20, pady=18)\n    outer.pack(fill=\"both\", expand=True)\n\n    head = tk.Frame(outer, bg=BG)\n    head.pack(fill=\"x\")\n    tk.Label(head, text=\"PulseTap\", bg=BG, fg=FG, font=(\"Segoe UI\", 20, \"bold\")).pack(\n        side=\"left\"\n    )\n    tk.Label(head, text=\"MIT · open source\", bg=BG, fg=MUTED, font=(\"Segoe UI\", 9)).pack(\n        side=\"left\", padx=(10, 0), pady=(8, 0)\n    )\n    tk.Checkbutton(\n        head,\n        text=\"Always on top\",\n        variable=always_on_top,\n        command=toggle_top,\n        bg=BG,\n        fg=MUTED,\n        selectcolor=SURFACE,\n        activebackground=BG,\n        activeforeground=FG,\n        highlightthickness=0,\n    ).pack(side=\"right\")\n\n    tk.Label(\n        outer,\n        text=\"Click Bind key, then press the key you want repeated. F8 toggles anywhere.\",\n        bg=BG,\n        fg=MUTED,\n        wraplength=400,\n        justify=\"left\",\n        font=(\"Segoe UI\", 10),\n    ).pack(anchor=\"w\", pady=(8, 12))\n\n    presets = tk.Frame(outer, bg=BG)\n    presets.pack(fill=\"x\", pady=(0, 10))\n    for label, keys, interval in (\n        (\"Space\", [\"space\"], 1000),\n        (\"Enter\", [\"enter\"], 800),\n        (\"W\", [\"w\"], 200),\n        (\"WASD\", [\"w\", \"a\", \"s\", \"d\"], 420),\n        (\"Arrows\", [\"up\", \"right\", \"down\", \"left\"], 350),\n    ):\n        tk.Button(\n            presets,\n            text=label,\n            command=lambda k=keys, i=interval: apply_preset(k, i),\n            bg=SURFACE,\n            fg=FG,\n            relief=\"flat\",\n            padx=10,\n            pady=4,\n            cursor=\"hand2\",\n        ).pack(side=\"left\", padx=(0, 6))\n\n    panel = tk.Frame(outer, bg=SURFACE, padx=14, pady=12)\n    panel.pack(fill=\"x\")\n    row = tk.Frame(panel, bg=SURFACE)\n    row.pack(fill=\"x\")\n    tk.Label(row, text=\"Sequence\", bg=SURFACE, fg=MUTED, font=(\"Segoe UI\", 9)).pack(\n        side=\"left\"\n    )\n    tk.Button(\n        row, text=\"Bind key\", command=bind_key, bg=ACCENT, fg=ACCENT_FG, relief=\"flat\", cursor=\"hand2\"\n    ).pack(side=\"right\")\n    tk.Button(\n        row, text=\"Clear\", command=clear_seq, bg=KEY, fg=FG, relief=\"flat\", cursor=\"hand2\"\n    ).pack(side=\"right\", padx=(0, 6))\n    seq_frame = tk.Frame(panel, bg=SURFACE, pady=8)\n    seq_frame.pack(fill=\"x\")\n    tk.Label(panel, textvariable=capture_var, bg=SURFACE, fg=ACCENT, font=(\"Segoe UI\", 9)).pack(\n        anchor=\"w\"\n    )\n\n    def slider(label: str, var: tk.IntVar, lo: int, hi: int, unit: str) -> None:\n        wrap = tk.Frame(outer, bg=BG, pady=4)\n        wrap.pack(fill=\"x\")\n        header = tk.Frame(wrap, bg=BG)\n        header.pack(fill=\"x\")\n        tk.Label(header, text=label, bg=BG, fg=MUTED, font=(\"Segoe UI\", 9)).pack(side=\"left\")\n        val = tk.Label(header, text=f\"{var.get()} {unit}\", bg=BG, fg=FG, font=(\"Segoe UI\", 9))\n        val.pack(side=\"right\")\n\n        def on_slide(_evt=None) -> None:\n            val.configure(text=f\"{int(var.get())} {unit}\")\n\n        sc = tk.Scale(\n            wrap,\n            from_=lo,\n            to=hi,\n            orient=\"horizontal\",\n            variable=var,\n            showvalue=False,\n            bg=BG,\n            fg=FG,\n            highlightthickness=0,\n            troughcolor=SURFACE,\n            activebackground=ACCENT,\n            sliderrelief=\"flat\",\n            command=lambda _v: on_slide(),\n        )\n        sc.pack(fill=\"x\")\n\n    slider(\"Interval\", interval_var, 20, 5000, \"ms\")\n    slider(\"Hold\", hold_var, 10, 1000, \"ms\")\n    slider(\"Jitter\", jitter_var, 0, 40, \"%\")\n    slider(\"Repeats (0 = infinite)\", repeats_var, 0, 500, \"×\")\n    slider(\"Countdown\", countdown_var, 0, 10, \"s\")\n\n    start_btn = tk.Button(\n        outer,\n        text=\"Start  ·  F8\",\n        command=toggle,\n        bg=ACCENT,\n        fg=ACCENT_FG,\n        relief=\"flat\",\n        font=(\"Segoe UI\", 13, \"bold\"),\n        pady=12,\n        cursor=\"hand2\",\n    )\n    start_btn.pack(fill=\"x\", pady=(12, 8))\n\n    tk.Label(outer, textvariable=status_var, bg=BG, fg=ACCENT, font=(\"Segoe UI\", 10)).pack(\n        anchor=\"w\"\n    )\n    tk.Label(outer, textvariable=stats_var, bg=BG, fg=MUTED, font=(\"Segoe UI\", 10)).pack(\n        anchor=\"w\"\n    )\n\n    paint_seq()\n    root.attributes(\"-topmost\", True)\n\n    hotkeys = GlobalHotKeys({args.hotkey: lambda: root.after(0, toggle)})\n    hotkeys.start()\n\n    def on_close() -> None:\n        presser.stop()\n        try:\n            hotkeys.stop()\n        except Exception:\n            pass\n        root.destroy()\n\n    root.protocol(\"WM_DELETE_WINDOW\", on_close)\n    if args.autostart:\n        root.after(300, start)\n    root.mainloop()\n\n\ndef build_parser() -> argparse.ArgumentParser:\n    p = argparse.ArgumentParser(\n        prog=\"pulsetap\",\n        description=\"Open-source auto keyboard presser (MIT).\",\n    )\n    p.add_argument(\"--sequence\", nargs=\"+\", default=SEQUENCE, help=\"Keys to press in order\")\n    p.add_argument(\"--interval\", type=int, default=INTERVAL_MS, help=\"Milliseconds between presses\")\n    p.add_argument(\"--hold\", type=int, default=HOLD_MS, help=\"Milliseconds to hold each key\")\n    p.add_argument(\"--jitter\", type=int, default=JITTER_PCT, help=\"Randomize interval by this percent\")\n    p.add_argument(\"--repeats\", type=int, default=REPEATS, help=\"Sequence cycles; 0 = infinite\")\n    p.add_argument(\"--countdown\", type=int, default=COUNTDOWN_S, help=\"Seconds before the first press\")\n    p.add_argument(\n        \"--modifiers\",\n        nargs=\"*\",\n        default=MODIFIERS,\n        choices=[\"ctrl\", \"shift\", \"alt\", \"cmd\"],\n        help=\"Held while each key is tapped\",\n    )\n    p.add_argument(\"--hotkey\", default=HOTKEY, help=\"Global toggle hotkey, default <f8>\")\n    p.add_argument(\"--cli\", action=\"store_true\", help=\"Force the terminal UI\")\n    p.add_argument(\"--gui\", action=\"store_true\", help=\"Force the desktop window\")\n    p.add_argument(\"--autostart\", action=\"store_true\", help=\"Start pressing immediately\")\n    p.add_argument(\"--config\", help=\"JSON file with sequence/interval/hold/...\")\n    p.add_argument(\"--list-keys\", action=\"store_true\", help=\"Print supported special key names\")\n    return p\n\n\ndef apply_config_file(args: argparse.Namespace, path: str) -> None:\n    with open(path, \"r\", encoding=\"utf-8\") as fh:\n        data = json.load(fh)\n    if \"sequence\" in data:\n        args.sequence = list(data[\"sequence\"])\n    for src, dest in (\n        (\"interval_ms\", \"interval\"),\n        (\"interval\", \"interval\"),\n        (\"hold_ms\", \"hold\"),\n        (\"hold\", \"hold\"),\n        (\"jitter_pct\", \"jitter\"),\n        (\"jitter\", \"jitter\"),\n        (\"repeats\", \"repeats\"),\n        (\"countdown_s\", \"countdown\"),\n        (\"countdown\", \"countdown\"),\n        (\"modifiers\", \"modifiers\"),\n        (\"hotkey\", \"hotkey\"),\n    ):\n        if src in data:\n            setattr(args, dest, data[src])\n\n\ndef main() -> None:\n    parser = build_parser()\n    args = parser.parse_args()\n    if args.list_keys:\n        print(\"Special keys:\")\n        for name in sorted(SPECIAL_KEYS):\n            print(f\"  {name}\")\n        return\n    if args.config:\n        apply_config_file(args, args.config)\n    if args.cli or (not args.gui and not has_display()):\n        run_cli(args)\n    else:\n        run_gui(args)\n\n\nif __name__ == \"__main__\":\n    main()\n";
var README_default = "# PulseTap\n\nOpen-source auto keyboard presser for Windows, macOS, and Linux.\n\n**MIT licensed.** Free to use, copy, modify, and publish — including on GitHub.\n\nPulseTap repeats a key or a sequence of keys at a pace you choose. Typical uses:\n\n- Accessibility — a key that must fire on a steady beat\n- UI / form testing — Enter, Tab, or a short sequence\n- Keeping a window awake with Space (when the app allows it)\n- Macro-style loops (WASD, arrows) with a visible window and a kill switch\n\nIt is **not** a hidden cheat client. The window stays on top, F8 always toggles, and a countdown runs before the first press.\n\n## Install\n\nYou need [Python 3.9+](https://www.python.org/downloads/) and one package:\n\n```bash\npip install -r requirements.txt\npython pulsetap.py\n```\n\nThat opens the desktop window. Prefer the terminal?\n\n```bash\npython pulsetap.py --cli\n```\n\n`config.json` (if present) is the sequence exported from the web studio. Override it with flags at any time.\n\n## Use\n\n1. Click **Bind key**, then press the key you want repeated — or pick a preset (Space, Enter, W, WASD, Arrows).\n2. Set interval, hold, jitter, and repeats (`0` = forever).\n3. Optionally turn on **Always on top**, then click the window you want to type into.\n4. Click **Start** or tap **F8**. The countdown is your time to focus that window.\n5. **F8** or **Stop** ends it. Ctrl+C quits.\n\n### Command line\n\n```bash\npython pulsetap.py --sequence space --interval 1000\npython pulsetap.py --sequence w a s d --interval 400 --hold 180\npython pulsetap.py --config config.json --cli\npython pulsetap.py --list-keys\n```\n\n| Flag | Meaning |\n|---|---|\n| `--sequence` | Keys in order (`space`, `enter`, `w`, `f1`, `up`, …) |\n| `--interval` | Milliseconds between presses |\n| `--hold` | Milliseconds each key stays down |\n| `--jitter` | Randomize interval by this percent |\n| `--repeats` | Sequence cycles; `0` = infinite |\n| `--countdown` | Seconds before the first press |\n| `--modifiers` | `ctrl` `shift` `alt` `cmd` held while tapping |\n| `--hotkey` | Global toggle, default `<f8>` |\n| `--autostart` | Begin as soon as the app launches |\n| `--config` | JSON file (see `config.example.json`) |\n\n## Permissions\n\n- **Windows** — run normally. Some games that capture raw input ignore injected keys; that is an OS/game limit.\n- **macOS** — grant *Accessibility* to Terminal / Python in System Settings → Privacy & Security.\n- **Linux** — works on X11. On Wayland, compositors often block injected keys.\n\n## Publish on GitHub (free)\n\nStep-by-step with screenshots-in-words: [GITHUB.md](GITHUB.md).\n\nShort version:\n\n1. Unzip this folder.\n2. Create a **public** repo at [github.com/new](https://github.com/new) — leave README / license unchecked.\n3. **uploading an existing file** → drag every file in this folder → commit.\n\n## Safety\n\n- Always-on-top window and a visible status line\n- F8 is a global kill switch\n- No network calls, no telemetry, no accounts\n\n## License\n\nMIT. See [LICENSE](LICENSE).\n";
var LICENSE_raw_default = "MIT License\n\nCopyright (c) 2026 PulseTap contributors\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n";
var requirements_default = "pynput>=1.7.6\n";
var pyproject_default = "[build-system]\nrequires = [\"setuptools>=68\"]\nbuild-backend = \"setuptools.build_meta\"\n\n[project]\nname = \"pulsetap\"\nversion = \"1.0.0\"\ndescription = \"Open-source auto keyboard presser with a desktop window and CLI.\"\nreadme = \"README.md\"\nlicense = { file = \"LICENSE\" }\nrequires-python = \">=3.9\"\nauthors = [{ name = \"PulseTap contributors\" }]\nkeywords = [\"keyboard\", \"automation\", \"hotkey\", \"accessibility\"]\nclassifiers = [\n  \"License :: OSI Approved :: MIT License\",\n  \"Programming Language :: Python :: 3\",\n  \"Environment :: Win32 (MS Windows)\",\n  \"Environment :: MacOS X\",\n  \"Environment :: X11 Applications\",\n  \"Topic :: Utilities\",\n]\ndependencies = [\"pynput>=1.7.6\"]\n\n[project.scripts]\npulsetap = \"pulsetap:main\"\n\n[project.urls]\nHomepage = \"https://github.com/\"\n";
var config_example_default = "{\n  \"sequence\": [\"space\"],\n  \"interval_ms\": 1000,\n  \"hold_ms\": 40,\n  \"jitter_pct\": 0,\n  \"repeats\": 0,\n  \"countdown_s\": 3,\n  \"modifiers\": [],\n  \"hotkey\": \"<f8>\"\n}\n";
var GITHUB_default = "# Put PulseTap on GitHub (free)\n\nYou do **not** need Git on the command line. A free GitHub account is enough.\n\n## 1. Unzip\n\nDownload `pulsetap.zip` and unzip it. You should see a `pulsetap` folder with:\n\n- `pulsetap.py` — the app\n- `README.md` — what people see on the repo\n- `LICENSE` — MIT (required so it stays open source)\n- `requirements.txt` — `pynput`\n- `pyproject.toml`\n- `.gitignore`\n- `config.json` — the sequence you built in the web app\n- `config.example.json`\n\n## 2. Create an empty repo\n\n1. Open [https://github.com/new](https://github.com/new)\n2. Repository name: `pulsetap` (or anything you like)\n3. Public\n4. **Do not** check “Add a README”, `.gitignore`, or license — those files are already in the zip\n5. Create repository\n\n## 3. Upload the files\n\n1. On the empty repo page, click **uploading an existing file**\n2. Drag **all files inside** the unzipped `pulsetap` folder (not the zip itself)\n3. Commit message: `Initial commit: PulseTap auto keyboard presser`\n4. Commit to `main`\n\nGitHub will detect the MIT license. Your repo is public and free.\n\n## Optional: git CLI\n\n```bash\ncd pulsetap\ngit init\ngit add .\ngit commit -m \"Initial commit: PulseTap auto keyboard presser\"\ngit branch -M main\ngit remote add origin https://github.com/YOUR_USER/pulsetap.git\ngit push -u origin main\n```\n\n## Suggested About blurb\n\n> Open-source auto keyboard presser for Windows, macOS, and Linux. MIT.\n\nTopics: `python`, `keyboard`, `automation`, `hotkey`, `mit-license`\n";
/** Uncompressed ZIP (STORE) so the GitHub pack downloads without extra deps. */
function crc32(data) {
	let crc = 4294967295;
	for (let i = 0; i < data.length; i++) {
		crc ^= data[i];
		for (let j = 0; j < 8; j++) crc = crc >>> 1 ^ (crc & 1 ? 3988292384 : 0);
	}
	return (crc ^ 4294967295) >>> 0;
}
function u16(n) {
	const b = /* @__PURE__ */ new Uint8Array(2);
	b[0] = n & 255;
	b[1] = n >>> 8 & 255;
	return b;
}
function u32(n) {
	const b = /* @__PURE__ */ new Uint8Array(4);
	b[0] = n & 255;
	b[1] = n >>> 8 & 255;
	b[2] = n >>> 16 & 255;
	b[3] = n >>> 24 & 255;
	return b;
}
function concat(parts) {
	const len = parts.reduce((n, p) => n + p.length, 0);
	const out = new Uint8Array(len);
	let o = 0;
	for (const p of parts) {
		out.set(p, o);
		o += p.length;
	}
	return out;
}
function createZip(files) {
	const encoder = new TextEncoder();
	const locals = [];
	const centrals = [];
	let offset = 0;
	for (const file of files) {
		const nameBytes = encoder.encode(file.name);
		const data = encoder.encode(file.content);
		const crc = crc32(data);
		const local = concat([
			encoder.encode("PK"),
			u16(20),
			u16(0),
			u16(0),
			u16(0),
			u16(0),
			u32(crc),
			u32(data.length),
			u32(data.length),
			u16(nameBytes.length),
			u16(0),
			nameBytes,
			data
		]);
		const central = concat([
			encoder.encode("PK"),
			u16(20),
			u16(20),
			u16(0),
			u16(0),
			u16(0),
			u16(0),
			u32(crc),
			u32(data.length),
			u32(data.length),
			u16(nameBytes.length),
			u16(0),
			u16(0),
			u16(0),
			u16(0),
			u32(0),
			u32(offset),
			nameBytes
		]);
		locals.push(local);
		centrals.push(central);
		offset += local.length;
	}
	const centralDir = concat(centrals);
	const end = concat([
		encoder.encode("PK"),
		u16(0),
		u16(0),
		u16(files.length),
		u16(files.length),
		u32(centralDir.length),
		u32(offset),
		u16(0)
	]);
	return new Blob([concat([
		...locals,
		centralDir,
		end
	])], { type: "application/zip" });
}
function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.rel = "noopener";
	document.body.appendChild(a);
	a.click();
	a.remove();
	window.setTimeout(() => URL.revokeObjectURL(url), 1500);
}
var gitignore = `__pycache__/
*.py[cod]
*.egg-info/
.venv/
venv/
.env
.DS_Store
dist/
build/
`;
function pySequence(config) {
	return config.sequence.map((s) => KEYS[s.keyId]?.pyName ?? "space");
}
function configBlock(config) {
	const seqLit = pySequence(config).map((n) => JSON.stringify(n)).join(", ");
	const mods = config.modifiers.map((m) => JSON.stringify(m)).join(", ");
	return [
		"# <<<PULSETAP_CONFIG",
		`SEQUENCE = [${seqLit}]`,
		`INTERVAL_MS = ${config.intervalMs}`,
		`HOLD_MS = ${config.holdMs}`,
		`JITTER_PCT = ${config.jitterPct}`,
		`REPEATS = ${config.repeats}  # 0 = infinite`,
		`COUNTDOWN_S = ${config.countdownS}`,
		`MODIFIERS: List[str] = [${mods}]  # ctrl, shift, alt, cmd`,
		`HOTKEY = "<f8>"`,
		"# PULSETAP_CONFIG>>>"
	].join("\n");
}
function pythonSource(config) {
	return pulsetap_default.replace(/# <<<PULSETAP_CONFIG[\s\S]*?# PULSETAP_CONFIG>>>/, configBlock(config));
}
function configJson(config) {
	return `${JSON.stringify({
		sequence: pySequence(config),
		interval_ms: config.intervalMs,
		hold_ms: config.holdMs,
		jitter_pct: config.jitterPct,
		repeats: config.repeats,
		countdown_s: config.countdownS,
		modifiers: config.modifiers,
		hotkey: "<f8>"
	}, null, 2)}\n`;
}
function downloadPython(config) {
	downloadBlob(new Blob([pythonSource(config)], { type: "text/x-python" }), "pulsetap.py");
}
function downloadProjectZip(config) {
	downloadBlob(createZip([
		{
			name: "pulsetap/pulsetap.py",
			content: pythonSource(config)
		},
		{
			name: "pulsetap/README.md",
			content: README_default
		},
		{
			name: "pulsetap/LICENSE",
			content: LICENSE_raw_default
		},
		{
			name: "pulsetap/requirements.txt",
			content: requirements_default
		},
		{
			name: "pulsetap/pyproject.toml",
			content: pyproject_default
		},
		{
			name: "pulsetap/.gitignore",
			content: gitignore
		},
		{
			name: "pulsetap/config.example.json",
			content: config_example_default
		},
		{
			name: "pulsetap/config.json",
			content: configJson(config)
		},
		{
			name: "pulsetap/GITHUB.md",
			content: GITHUB_default
		}
	]), "pulsetap.zip");
}
function ExportPanel() {
	const sequence = useAppStore((s) => s.sequence);
	const intervalMs = useAppStore((s) => s.intervalMs);
	const holdMs = useAppStore((s) => s.holdMs);
	const jitterPct = useAppStore((s) => s.jitterPct);
	const repeats = useAppStore((s) => s.repeats);
	const countdownS = useAppStore((s) => s.countdownS);
	const modifiers = useAppStore((s) => s.modifiers);
	const config = (0, import_react.useMemo)(() => ({
		sequence,
		intervalMs,
		holdMs,
		jitterPct,
		repeats,
		countdownS,
		modifiers
	}), [
		sequence,
		intervalMs,
		holdMs,
		jitterPct,
		repeats,
		countdownS,
		modifiers
	]);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const source = (0, import_react.useMemo)(() => pythonSource(config), [config]);
	const preview = source.length > 900 ? `${source.slice(0, 900)}\n…` : source;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel space-y-4 px-4 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium",
				children: "Python app · MIT · GitHub pack"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: "This page only types into the sandbox. The Python download presses real keys on Windows, macOS, and Linux. The zip is a complete public repo."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					className: "flex-1",
					onClick: () => {
						downloadPython(config);
						toast("Downloaded pulsetap.py");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "pulsetap.py"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "secondary",
					className: "flex-1",
					onClick: () => {
						downloadProjectZip(config);
						toast("Downloaded pulsetap.zip — unzip, then upload the files");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderArchive, {}), "GitHub zip"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-1 font-medium text-foreground",
					children: "Run on your computer"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "list-decimal space-y-1 pl-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Install Python 3 from python.org (tick “Add to PATH” on Windows)." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono text-foreground",
							children: "pip install pynput"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono text-foreground",
							children: "python pulsetap.py"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bind a key, focus the target window, Start or F8. Esc / F8 stops." })
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-1 font-medium text-foreground",
					children: "Upload to GitHub, free"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "list-decimal space-y-1 pl-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Download the GitHub zip and unzip it." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Open",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://github.com/new",
								target: "_blank",
								rel: "noreferrer",
								className: "text-foreground underline decoration-border underline-offset-2 hover:text-primary",
								children: "github.com/new"
							}),
							" ",
							"— public repo, leave README / license unchecked."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Click “uploading an existing file” and drop the unzipped files (not the zip)." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Commit. MIT is already in LICENSE so the repo stays open source." })
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "max-h-40 overflow-auto rounded-md bg-background p-3 font-mono text-xs leading-relaxed text-muted-foreground",
					children: preview
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					size: "sm",
					variant: "outline",
					className: "absolute top-2 right-2",
					onClick: async () => {
						await navigator.clipboard.writeText(source);
						setCopied(true);
						toast("Script copied");
						window.setTimeout(() => setCopied(false), 1600);
					},
					children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), copied ? "Copied" : "Copy"]
				})]
			})
		]
	});
}
var CARDS = [
	{
		icon: Keyboard,
		title: "On this page",
		body: "Click keys or a preset, set the interval, then Start. Keys fire into the sandbox so you can try a sequence without touching the rest of your computer. F8 starts and stops. Esc stops."
	},
	{
		icon: Monitor,
		title: "On your computer",
		body: "Download pulsetap.py. Install Python 3, then pip install pynput and run python pulsetap.py. Bind a key, focus the target window during the countdown, and F8 toggles anywhere."
	},
	{
		icon: Github,
		title: "On GitHub, free",
		body: "Download the GitHub zip, unzip it, create a public repo with no README, then drag the files in. MIT license is included so anyone can use your copy."
	}
];
function GuidePanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mb-6 grid gap-3 md:grid-cols-3",
		children: [CARDS.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "panel px-4 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center gap-2 text-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(card.icon, {
					className: "size-4",
					strokeWidth: 1.75
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-medium text-foreground",
					children: card.title
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-muted-foreground",
				children: card.body
			})]
		}, card.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "md:col-span-3 flex items-start gap-2 text-xs text-subtle",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mt-0.5 size-3.5 shrink-0" }), "The buttons at the bottom of the right column save a script and a full repo folder. Unzip before uploading — GitHub wants the files, not the zip itself."]
		})]
	});
}
function SandboxPanel() {
	const sandbox = useAppStore((s) => s.sandbox);
	const clearSandbox = useAppStore((s) => s.clearSandbox);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (el) el.scrollTop = el.scrollHeight;
	}, [sandbox]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium",
				children: "Sandbox"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "Live output of this demo. Not your OS."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				size: "sm",
				variant: "ghost",
				onClick: clearSandbox,
				children: "Clear"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			ref,
			className: "h-36 overflow-auto rounded-md bg-background p-3 font-mono text-xs leading-relaxed whitespace-pre-wrap text-foreground",
			children: sandbox || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-subtle",
				children: "Waiting for Start…"
			})
		})]
	});
}
function SequenceBar() {
	const sequence = useAppStore((s) => s.sequence);
	const removeAt = useAppStore((s) => s.removeAt);
	const clearSequence = useAppStore((s) => s.clearSequence);
	const capturing = useAppStore((s) => s.capturing);
	const setCapturing = useAppStore((s) => s.setCapturing);
	const running = useAppStore((s) => s.running);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel mt-4 px-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-foreground",
				children: "Sequence"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "Click keys above, or bind from the keyboard. Max 32."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: capturing ? "default" : "outline",
					size: "sm",
					disabled: running,
					onClick: () => setCapturing(!capturing),
					children: capturing ? "Listening" : "Bind key"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					disabled: !sequence.length || running,
					onClick: clearSequence,
					children: "Clear"
				})]
			})]
		}), sequence.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-md border border-dashed border-border px-3 py-4 text-sm text-muted-foreground",
			children: "Empty — add Space, letters, or a preset to get started."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex flex-wrap gap-2",
			children: sequence.map((step, i) => {
				const def = KEYS[step.keyId];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex h-9 items-center gap-1 rounded-md border border-border bg-muted pl-2.5 pr-1 font-mono text-xs text-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-subtle tabular-nums",
							children: i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: def?.label ?? step.keyId }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-7 place-items-center rounded-sm text-muted-foreground hover:text-foreground",
							"aria-label": `Remove ${def?.label ?? "key"}`,
							disabled: running,
							onClick: () => removeAt(i),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
						})
					]
				}) }, step.uid);
			})
		})]
	});
}
var TooltipProvider = Provider;
var Tooltip = Root3;
var TooltipTrigger = Trigger;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-sm bg-foreground px-2 py-1 text-xs text-background", "origin-[var(--radix-tooltip-content-transform-origin)]", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
function Keycap({ id, fn }) {
	const def = KEYS[id];
	const litKeyId = useAppStore((s) => s.litKeyId);
	const inSeq = useAppStore((s) => s.sequence.some((step) => step.keyId === id));
	const addKey = useAppStore((s) => s.addKey);
	if (!def) return null;
	const down = litKeyId === id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, {
		delayDuration: 400,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: cn("kcap", fn && "kcap-fn", down && "is-down", inSeq && !down && "in-seq"),
				"data-w": def.width ?? "1",
				"aria-label": `Add ${def.label}`,
				onClick: () => addKey(id),
				children: def.label
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipContent, { children: [
			"Add ",
			def.label,
			" to sequence"
		] })]
	});
}
function Row({ ids, fn }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "krow",
		children: ids.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Keycap, {
			id,
			fn
		}, id))
	});
}
function VirtualKeyboard() {
	const countdownLeft = useAppStore((s) => s.countdownLeft);
	const capturing = useAppStore((s) => s.capturing);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-w-0 w-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "kboard hidden md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						ids: LAYOUT.fn,
						fn: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, { ids: LAYOUT.row1 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, { ids: LAYOUT.row2 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, { ids: LAYOUT.row3 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, { ids: LAYOUT.row4 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, { ids: LAYOUT.row5 })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "kboard flex md:hidden",
				children: [LAYOUT.compact.map((ids, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, { ids }, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, { ids: [
					"Digit1",
					"Digit2",
					"Digit3",
					"Digit4",
					"Digit5",
					"Digit6",
					"Digit7",
					"Digit8",
					"Digit9",
					"Digit0"
				] })]
			}),
			(countdownLeft > 0 || capturing) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center rounded-xl bg-background/70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-5xl font-medium tracking-tight text-primary tabular-nums",
					children: capturing ? "Press a key" : countdownLeft
				})
			})
		]
	});
}
function sleep(ms, signal) {
	return new Promise((resolve) => {
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
function usePresserEngine() {
	const runId = (0, import_react.useRef)(0);
	const signal = (0, import_react.useRef)({ cancelled: false });
	const stop = (0, import_react.useCallback)(() => {
		signal.current.cancelled = true;
		runId.current += 1;
		useAppStore.getState().setRunning(false);
		useAppStore.getState().setCountdownLeft(0);
		useAppStore.getState().setLitKeyId(null);
	}, []);
	const start = (0, import_react.useCallback)(async () => {
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
			await sleep(1e3, signal.current);
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
				const interval = live.intervalMs * (jitter ? 1 + (Math.random() * 2 - 1) * jitter : 1);
				live.setLitKeyId(def.id);
				if (def.id === "Backspace") {
					const cur = useAppStore.getState().sandbox;
					useAppStore.setState({ sandbox: cur.slice(0, -1) });
				} else live.appendSandbox(sandboxInsert(def));
				live.bumpPress();
				await sleep(Math.max(10, hold), signal.current);
				if (runId.current === myRun) useAppStore.getState().setLitKeyId(null);
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
	const toggle = (0, import_react.useCallback)(() => {
		if (useAppStore.getState().running) stop();
		else start();
	}, [start, stop]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const state = useAppStore.getState();
			const target = e.target;
			const typing = target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
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
	(0, import_react.useEffect)(() => () => stop(), [stop]);
	return {
		start,
		stop,
		toggle
	};
}
function Home() {
	const running = useAppStore((s) => s.running);
	const { toggle } = usePresserEngine();
	(0, import_react.useEffect)(() => {
		const saved = loadPersisted();
		if (saved) useAppStore.getState().hydrate(saved);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 250,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-dvh overflow-x-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "mx-auto max-w-6xl px-4 pt-6 pb-28 md:pb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 max-w-2xl text-sm text-muted-foreground",
							children: "PulseTap is an auto keyboard presser. Try a sequence here, then download the MIT Python app to type into real windows — and publish that folder as a free GitHub repo."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuidePanel, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-start gap-5 lg:grid-cols-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "min-w-0 lg:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VirtualKeyboard, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SequenceBar, {})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "flex min-w-0 flex-col gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StartCard, {
										running,
										onToggle: toggle
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlPanel, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SandboxPanel, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportPanel, {})
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mobile-dock fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/95 p-3 backdrop-blur-sm md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						size: "lg",
						className: "w-full",
						variant: running ? "destructive" : "default",
						onClick: toggle,
						children: [running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), running ? "Stop · Esc" : "Start · F8"]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					theme: "dark",
					position: "bottom-right",
					richColors: false
				})
			]
		})
	});
}
function StartCard({ running, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel hidden px-4 py-4 md:block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			size: "lg",
			className: "w-full",
			variant: running ? "destructive" : "default",
			onClick: onToggle,
			children: [running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), running ? "Stop · F8" : "Start · F8"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-center text-xs text-muted-foreground",
			children: "Esc also stops. Switch to the sandbox to watch keys land."
		})]
	});
}
//#endregion
export { Home as component };
