export type KeyDef = {
  id: string;
  label: string;
  width?: "1" | "1.25" | "1.5" | "1.75" | "2" | "2.25" | "2.75" | "6.25";
  /** Character inserted into the in-page sandbox, if any. */
  insert?: string;
  /** Token shown in the sandbox for non-print keys. */
  token?: string;
  /** pynput expression: Key.space or a quoted char. */
  pynput: string;
  /** Canonical name used in the Python SEQUENCE list. */
  pyName: string;
};

export type KeyStep = {
  uid: string;
  keyId: string;
};

const W = {
  std: "1" as const,
};

export function charKey(ch: string, extra?: Partial<KeyDef>): KeyDef {
  const lower = ch.toLowerCase();
  const isLetter = /^[a-z]$/.test(lower);
  const pynput =
    ch === "'"
      ? `"'" `
      : ch === "\\"
        ? `"\\\\"`
        : ch === '"'
          ? `'\"'`
          : `"${ch}"`;
  return {
    id: isLetter ? `Key${ch.toUpperCase()}` : `Digit${ch}`,
    label: isLetter ? ch.toUpperCase() : ch,
    width: W.std,
    insert: ch,
    pynput: pynput.trim(),
    pyName: lower,
    ...extra,
  };
}

const SPECIAL: KeyDef[] = [
  { id: "Escape", label: "Esc", pyName: "esc", pynput: "Key.esc", token: "Esc" },
  { id: "F1", label: "F1", pyName: "f1", pynput: "Key.f1", token: "F1" },
  { id: "F2", label: "F2", pyName: "f2", pynput: "Key.f2", token: "F2" },
  { id: "F3", label: "F3", pyName: "f3", pynput: "Key.f3", token: "F3" },
  { id: "F4", label: "F4", pyName: "f4", pynput: "Key.f4", token: "F4" },
  { id: "F5", label: "F5", pyName: "f5", pynput: "Key.f5", token: "F5" },
  { id: "F6", label: "F6", pyName: "f6", pynput: "Key.f6", token: "F6" },
  { id: "F7", label: "F7", pyName: "f7", pynput: "Key.f7", token: "F7" },
  { id: "F8", label: "F8", pyName: "f8", pynput: "Key.f8", token: "F8" },
  { id: "F9", label: "F9", pyName: "f9", pynput: "Key.f9", token: "F9" },
  { id: "F10", label: "F10", pyName: "f10", pynput: "Key.f10", token: "F10" },
  { id: "F11", label: "F11", pyName: "f11", pynput: "Key.f11", token: "F11" },
  { id: "F12", label: "F12", pyName: "f12", pynput: "Key.f12", token: "F12" },
  { id: "Backquote", label: "`", pyName: "`", pynput: '"`"', insert: "`" },
  { id: "Minus", label: "-", pyName: "-", pynput: '"-"', insert: "-" },
  { id: "Equal", label: "=", pyName: "=", pynput: '"="', insert: "=" },
  {
    id: "Backspace",
    label: "Bksp",
    width: "2",
    pyName: "backspace",
    pynput: "Key.backspace",
    token: "⌫",
  },
  {
    id: "Tab",
    label: "Tab",
    width: "1.5",
    pyName: "tab",
    pynput: "Key.tab",
    insert: "\t",
    token: "⇥",
  },
  { id: "BracketLeft", label: "[", pyName: "[", pynput: '"["', insert: "[" },
  { id: "BracketRight", label: "]", pyName: "]", pynput: '"]"', insert: "]" },
  { id: "Backslash", label: "\\", pyName: "\\", pynput: '"\\\\"', insert: "\\" },
  {
    id: "CapsLock",
    label: "Caps",
    width: "1.75",
    pyName: "caps_lock",
    pynput: "Key.caps_lock",
    token: "Caps",
  },
  { id: "Semicolon", label: ";", pyName: ";", pynput: '";"', insert: ";" },
  { id: "Quote", label: "'", pyName: "'", pynput: '"\'"', insert: "'" },
  {
    id: "Enter",
    label: "Enter",
    width: "2.25",
    pyName: "enter",
    pynput: "Key.enter",
    insert: "\n",
    token: "⏎",
  },
  {
    id: "ShiftLeft",
    label: "Shift",
    width: "2.25",
    pyName: "shift",
    pynput: "Key.shift",
    token: "⇧",
  },
  { id: "Comma", label: ",", pyName: ",", pynput: '","', insert: "," },
  { id: "Period", label: ".", pyName: ".", pynput: '"."', insert: "." },
  { id: "Slash", label: "/", pyName: "/", pynput: '"/"', insert: "/" },
  {
    id: "ShiftRight",
    label: "Shift",
    width: "2.75",
    pyName: "shift",
    pynput: "Key.shift",
    token: "⇧",
  },
  {
    id: "ControlLeft",
    label: "Ctrl",
    width: "1.25",
    pyName: "ctrl",
    pynput: "Key.ctrl",
    token: "Ctrl",
  },
  {
    id: "AltLeft",
    label: "Alt",
    width: "1.25",
    pyName: "alt",
    pynput: "Key.alt",
    token: "Alt",
  },
  {
    id: "MetaLeft",
    label: "Win",
    width: "1.25",
    pyName: "cmd",
    pynput: "Key.cmd",
    token: "Win",
  },
  {
    id: "Space",
    label: "Space",
    width: "6.25",
    pyName: "space",
    pynput: "Key.space",
    insert: " ",
    token: "␣",
  },
  {
    id: "AltRight",
    label: "Alt",
    width: "1.25",
    pyName: "alt",
    pynput: "Key.alt",
    token: "Alt",
  },
  {
    id: "ControlRight",
    label: "Ctrl",
    width: "1.25",
    pyName: "ctrl",
    pynput: "Key.ctrl",
    token: "Ctrl",
  },
  {
    id: "ArrowLeft",
    label: "←",
    pyName: "left",
    pynput: "Key.left",
    token: "←",
  },
  {
    id: "ArrowDown",
    label: "↓",
    pyName: "down",
    pynput: "Key.down",
    token: "↓",
  },
  {
    id: "ArrowUp",
    label: "↑",
    pyName: "up",
    pynput: "Key.up",
    token: "↑",
  },
  {
    id: "ArrowRight",
    label: "→",
    pyName: "right",
    pynput: "Key.right",
    token: "→",
  },
  {
    id: "Delete",
    label: "Del",
    pyName: "delete",
    pynput: "Key.delete",
    token: "Del",
  },
  {
    id: "Home",
    label: "Home",
    pyName: "home",
    pynput: "Key.home",
    token: "Home",
  },
  { id: "End", label: "End", pyName: "end", pynput: "Key.end", token: "End" },
  {
    id: "PageUp",
    label: "PgUp",
    pyName: "page_up",
    pynput: "Key.page_up",
    token: "PgUp",
  },
  {
    id: "PageDown",
    label: "PgDn",
    pyName: "page_down",
    pynput: "Key.page_down",
    token: "PgDn",
  },
  {
    id: "Insert",
    label: "Ins",
    pyName: "insert",
    pynput: "Key.insert",
    token: "Ins",
  },
];

const NUMBER_ROW: KeyDef[] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
].map((d) => charKey(d, { id: `Digit${d}` }));

const LETTER = (ch: string) => charKey(ch, { id: `Key${ch.toUpperCase()}` });

export const KEYS: Record<string, KeyDef> = {};

function register(def: KeyDef) {
  KEYS[def.id] = def;
  return def;
}

SPECIAL.forEach(register);
NUMBER_ROW.forEach(register);
"abcdefghijklmnopqrstuvwxyz".split("").forEach((c) => register(LETTER(c)));

export const LAYOUT = {
  fn: ["Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"],
  extras: ["Insert", "Delete", "Home", "End", "PageUp", "PageDown"],
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
    "Backspace",
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
    "Backslash",
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
    "Enter",
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
    "ShiftRight",
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
    "ArrowRight",
  ],
  compact: [
    ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP"],
    ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL"],
    ["KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM"],
    ["Space", "Enter", "Backspace", "Tab", "Escape"],
  ],
};

export const CODE_TO_ID: Record<string, string> = Object.keys(KEYS).reduce(
  (acc, id) => {
    acc[id] = id;
    return acc;
  },
  {} as Record<string, string>,
);

export function keyFromEvent(e: KeyboardEvent): KeyDef | null {
  if (KEYS[e.code]) return KEYS[e.code];
  const lower = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  const found = Object.values(KEYS).find(
    (k) => k.pyName === lower || k.label.toLowerCase() === e.key.toLowerCase(),
  );
  return found ?? null;
}

export function sandboxInsert(def: KeyDef): string {
  if (def.insert !== undefined) return def.insert;
  return `⟨${def.token ?? def.label}⟩`;
}

export type Preset = {
  id: string;
  name: string;
  keyIds: string[];
  intervalMs: number;
  holdMs: number;
  jitterPct: number;
  repeats: number;
  countdownS: number;
  modifiers: Modifier[];
};

export type Modifier = "ctrl" | "shift" | "alt" | "cmd";

export const PRESETS: Preset[] = [
  {
    id: "space",
    name: "Space",
    keyIds: ["Space"],
    intervalMs: 1000,
    holdMs: 40,
    jitterPct: 0,
    repeats: 0,
    countdownS: 0,
    modifiers: [],
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
    modifiers: [],
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
    modifiers: [],
  },
  {
    id: "wasd",
    name: "WASD loop",
    keyIds: ["KeyW", "KeyA", "KeyS", "KeyD"],
    intervalMs: 420,
    holdMs: 180,
    jitterPct: 5,
    repeats: 0,
    countdownS: 0,
    modifiers: [],
  },
  {
    id: "arrows",
    name: "Arrows",
    keyIds: ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"],
    intervalMs: 350,
    holdMs: 80,
    jitterPct: 0,
    repeats: 0,
    countdownS: 0,
    modifiers: [],
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
    modifiers: [],
  },
];

export const INTERVAL_CHIPS = [50, 100, 250, 500, 1000, 2000, 5000];
