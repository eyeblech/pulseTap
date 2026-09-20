import { create } from "zustand";
import { KEYS, PRESETS, type KeyStep, type Modifier, type Preset } from "@/lib/keys";
import { uid } from "@/lib/utils";

export type AppState = {
  sequence: KeyStep[];
  intervalMs: number;
  holdMs: number;
  jitterPct: number;
  repeats: number;
  countdownS: number;
  modifiers: Modifier[];
  running: boolean;
  capturing: boolean;
  countdownLeft: number;
  litKeyId: string | null;
  presses: number;
  startedAt: number | null;
  sandbox: string;
  addKey: (keyId: string) => void;
  removeAt: (index: number) => void;
  clearSequence: () => void;
  setIntervalMs: (n: number) => void;
  setHoldMs: (n: number) => void;
  setJitterPct: (n: number) => void;
  setRepeats: (n: number) => void;
  setCountdownS: (n: number) => void;
  toggleModifier: (m: Modifier) => void;
  applyPreset: (preset: Preset) => void;
  setRunning: (v: boolean) => void;
  setCapturing: (v: boolean) => void;
  setCountdownLeft: (n: number) => void;
  setLitKeyId: (id: string | null) => void;
  bumpPress: () => void;
  resetStats: () => void;
  markStarted: () => void;
  appendSandbox: (chunk: string) => void;
  clearSandbox: () => void;
  hydrate: (partial: Partial<Persisted>) => void;
};

export type Persisted = {
  sequence: KeyStep[];
  intervalMs: number;
  holdMs: number;
  jitterPct: number;
  repeats: number;
  countdownS: number;
  modifiers: Modifier[];
};

const STORAGE_KEY = "pulsetap-v1";

const defaultPreset = PRESETS[0];

function stepsFromIds(ids: string[]): KeyStep[] {
  return ids.filter((id) => KEYS[id]).map((id) => ({ uid: uid(), keyId: id }));
}

export const useAppStore = create<AppState>((set, get) => ({
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
    set({ sequence: [...get().sequence, { uid: uid(), keyId }] });
  },
  removeAt: (index) => {
    set({ sequence: get().sequence.filter((_, i) => i !== index) });
  },
  clearSequence: () => set({ sequence: [] }),
  setIntervalMs: (n) => {
    const next = Math.min(60000, Math.max(20, Math.round(n)));
    if (get().intervalMs === next) return;
    set({ intervalMs: next });
  },
  setHoldMs: (n) => {
    const next = Math.min(5000, Math.max(10, Math.round(n)));
    if (get().holdMs === next) return;
    set({ holdMs: next });
  },
  setJitterPct: (n) => {
    const next = Math.min(50, Math.max(0, Math.round(n)));
    if (get().jitterPct === next) return;
    set({ jitterPct: next });
  },
  setRepeats: (n) => {
    const next = Math.min(100000, Math.max(0, Math.round(n)));
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
    set({
      modifiers: cur.includes(m) ? cur.filter((x) => x !== m) : [...cur, m],
    });
  },
  applyPreset: (preset) =>
    set({
      sequence: stepsFromIds(preset.keyIds),
      intervalMs: preset.intervalMs,
      holdMs: preset.holdMs,
      jitterPct: preset.jitterPct,
      repeats: preset.repeats,
      countdownS: preset.countdownS,
      modifiers: [...preset.modifiers],
    }),
  setRunning: (v) => set({ running: v }),
  setCapturing: (v) => set({ capturing: v }),
  setCountdownLeft: (n) => set({ countdownLeft: n }),
  setLitKeyId: (id) => set({ litKeyId: id }),
  bumpPress: () => set({ presses: get().presses + 1 }),
  resetStats: () => set({ presses: 0, startedAt: null }),
  markStarted: () => set({ presses: 0, startedAt: Date.now() }),
  appendSandbox: (chunk) => {
    const next = (get().sandbox + chunk).slice(-4000);
    set({ sandbox: next });
  },
  clearSandbox: () => set({ sandbox: "" }),
  hydrate: (partial) => {
    const seq = (partial.sequence ?? [])
      .filter((s) => s && KEYS[s.keyId])
      .map((s) => ({ uid: s.uid || uid(), keyId: s.keyId }));
    set({
      sequence: seq.length ? seq : get().sequence,
      intervalMs: partial.intervalMs ?? get().intervalMs,
      holdMs: partial.holdMs ?? get().holdMs,
      jitterPct: partial.jitterPct ?? get().jitterPct,
      repeats: partial.repeats ?? get().repeats,
      countdownS: partial.countdownS ?? get().countdownS,
      modifiers: partial.modifiers ?? get().modifiers,
    });
  },
}));

export function persistConfig() {
  const s = useAppStore.getState();
  const data: Persisted = {
    sequence: s.sequence,
    intervalMs: s.intervalMs,
    holdMs: s.holdMs,
    jitterPct: s.jitterPct,
    repeats: s.repeats,
    countdownS: s.countdownS,
    modifiers: s.modifiers,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* ignore quota */
  }
}

export function loadPersisted(): Persisted | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Persisted;
  } catch {
    return null;
  }
}
