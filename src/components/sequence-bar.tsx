import { X } from "lucide-react";
import { KEYS } from "@/lib/keys";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

export function SequenceBar() {
  const sequence = useAppStore((s) => s.sequence);
  const removeAt = useAppStore((s) => s.removeAt);
  const clearSequence = useAppStore((s) => s.clearSequence);
  const capturing = useAppStore((s) => s.capturing);
  const setCapturing = useAppStore((s) => s.setCapturing);
  const running = useAppStore((s) => s.running);

  return (
    <div className="panel mt-4 px-4 py-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-foreground">Sequence</p>
          <p className="text-xs text-muted-foreground">
            Click keys above, or bind from the keyboard. Max 32.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button
            type="button"
            variant={capturing ? "default" : "outline"}
            size="sm"
            disabled={running}
            onClick={() => setCapturing(!capturing)}
          >
            {capturing ? "Listening" : "Bind key"}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            disabled={!sequence.length || running}
            onClick={clearSequence}
          >
            Clear
          </Button>
        </div>
      </div>
      {sequence.length === 0 ? (
        <p className="rounded-md border border-dashed border-border px-3 py-4 text-sm text-muted-foreground">
          Empty — add Space, letters, or a preset to get started.
        </p>
      ) : (
        <ol className="flex flex-wrap gap-2">
          {sequence.map((step, i) => {
            const def = KEYS[step.keyId];
            return (
              <li key={step.uid}>
                <span className="inline-flex h-9 items-center gap-1 rounded-md border border-border bg-muted pl-2.5 pr-1 font-mono text-xs text-foreground">
                  <span className="text-subtle tabular-nums">{i + 1}</span>
                  <span>{def?.label ?? step.keyId}</span>
                  <button
                    type="button"
                    className="grid size-7 place-items-center rounded-sm text-muted-foreground hover:text-foreground"
                    aria-label={`Remove ${def?.label ?? "key"}`}
                    disabled={running}
                    onClick={() => removeAt(i)}
                  >
                    <X className="size-3.5" />
                  </button>
                </span>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
