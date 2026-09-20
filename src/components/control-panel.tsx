import { useMemo, type ReactNode } from "react";
import { INTERVAL_CHIPS, PRESETS, type Modifier } from "@/lib/keys";
import { persistConfig, useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const MODS: { id: Modifier; label: string }[] = [
  { id: "ctrl", label: "Ctrl" },
  { id: "shift", label: "Shift" },
  { id: "alt", label: "Alt" },
  { id: "cmd", label: "Win / Cmd" },
];

function Field({
  label,
  value,
  unit,
  children,
}: {
  label: string;
  value: string;
  unit: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-3">
        <label className="text-xs font-medium text-muted-foreground">{label}</label>
        <span className="stat text-xs text-foreground">
          {value}
          <span className="text-subtle"> {unit}</span>
        </span>
      </div>
      {children}
    </div>
  );
}

export function ControlPanel() {
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
  const intervalValue = useMemo(() => [intervalMs], [intervalMs]);
  const holdValue = useMemo(() => [holdMs], [holdMs]);
  const jitterValue = useMemo(() => [jitterPct], [jitterPct]);

  return (
    <div className="panel space-y-5 px-4 py-4">
      <div>
        <p className="text-sm font-medium">Presets</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {PRESETS.map((p) => (
            <Button
              key={p.id}
              type="button"
              size="chip"
              variant="secondary"
              disabled={running}
              onClick={() => {
                applyPreset(p);
                persistConfig();
              }}
            >
              {p.name}
            </Button>
          ))}
        </div>
      </div>

      <Field
        label="Interval"
        value={
          intervalMs >= 1000
            ? (intervalMs / 1000).toFixed(intervalMs % 1000 ? 1 : 0)
            : String(intervalMs)
        }
        unit={intervalMs >= 1000 ? "s" : "ms"}
      >
        <Slider
          min={20}
          max={5000}
          step={10}
          value={intervalValue}
          disabled={running}
          onValueChange={([v]) => setIntervalMs(v ?? intervalMs)}
          onValueCommit={() => persistConfig()}
        />
        <div className="flex flex-wrap gap-1 pt-1">
          {INTERVAL_CHIPS.map((ms) => (
            <button
              key={ms}
              type="button"
              disabled={running}
              onClick={() => {
                setIntervalMs(ms);
                persistConfig();
              }}
              className={cn(
                "h-7 rounded-full px-2 font-mono text-xs text-muted-foreground transition-colors duration-[var(--motion-quick)]",
                intervalMs === ms ? "bg-muted text-foreground" : "hover:text-foreground",
              )}
            >
              {ms >= 1000 ? `${ms / 1000}s` : `${ms}`}
            </button>
          ))}
        </div>
      </Field>

      <Field label="Hold" value={String(holdMs)} unit="ms">
        <Slider
          min={10}
          max={1000}
          step={10}
          value={holdValue}
          disabled={running}
          onValueChange={([v]) => setHoldMs(v ?? holdMs)}
          onValueCommit={() => persistConfig()}
        />
      </Field>

      <Field label="Jitter" value={String(jitterPct)} unit="%">
        <Slider
          min={0}
          max={40}
          step={1}
          value={jitterValue}
          disabled={running}
          onValueChange={([v]) => setJitterPct(v ?? jitterPct)}
          onValueCommit={() => persistConfig()}
        />
      </Field>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground" htmlFor="repeats">
            Repeats
          </label>
          <Input
            id="repeats"
            type="number"
            min={0}
            max={100000}
            value={repeats}
            disabled={running}
            onChange={(e) => setRepeats(Number(e.target.value) || 0)}
            onBlur={() => persistConfig()}
          />
          <p className="text-xs text-subtle">0 = infinite</p>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground" htmlFor="countdown">
            Countdown
          </label>
          <Input
            id="countdown"
            type="number"
            min={0}
            max={10}
            value={countdownS}
            disabled={running}
            onChange={(e) => setCountdownS(Number(e.target.value) || 0)}
            onBlur={() => persistConfig()}
          />
          <p className="text-xs text-subtle">seconds</p>
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground">Hold with each tap</p>
        <div className="flex flex-wrap gap-1.5">
          {MODS.map((m) => {
            const on = modifiers.includes(m.id);
            return (
              <Button
                key={m.id}
                type="button"
                size="chip"
                variant={on ? "default" : "outline"}
                disabled={running}
                aria-pressed={on}
                onClick={() => {
                  toggleModifier(m.id);
                  persistConfig();
                }}
              >
                {m.label}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
