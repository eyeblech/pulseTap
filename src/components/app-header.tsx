import { Keyboard } from "lucide-react";
import { formatDuration, formatRate } from "@/lib/utils";
import { useAppStore } from "@/lib/store";
import { Badge } from "@/components/ui/badge";
import { useNow } from "@/lib/use-now";

export function AppHeader() {
  const running = useAppStore((s) => s.running);
  const presses = useAppStore((s) => s.presses);
  const startedAt = useAppStore((s) => s.startedAt);
  const countdownLeft = useAppStore((s) => s.countdownLeft);
  const now = useNow(running);
  const elapsed = startedAt ? now - startedAt : 0;

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-md bg-card text-primary ring-1 ring-border">
            <Keyboard className="size-5" strokeWidth={1.75} />
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-medium tracking-tight">PulseTap</h1>
              <Badge variant="outline">MIT</Badge>
            </div>
            <p className="truncate text-xs text-muted-foreground">Open-source auto keyboard presser</p>
          </div>
        </div>
        <dl className="grid w-full min-w-0 grid-cols-3 gap-2 sm:w-auto sm:gap-6">
          <Stat
            label="Status"
            value={countdownLeft > 0 ? `in ${countdownLeft}s` : running ? "live" : "idle"}
            live={running}
          />
          <Stat label="Presses" value={String(presses)} />
          <Stat label="Rate" value={`${formatRate(presses, elapsed)}/s`} extra={startedAt ? formatDuration(elapsed) : "0:00"} />
        </dl>
      </div>
    </header>
  );
}

function Stat({
  label,
  value,
  extra,
  live,
}: {
  label: string;
  value: string;
  extra?: string;
  live?: boolean;
}) {
  return (
    <div className="min-w-0">
      <dt className="text-xs tracking-wide text-subtle uppercase">{label}</dt>
      <dd className="mt-0.5 min-w-0 font-mono text-sm tabular-nums">
        <span className="flex items-center gap-1.5">
          {live !== undefined && <span className="live-dot shrink-0" data-on={live ? "true" : "false"} />}
          <span className="truncate">{value}</span>
        </span>
        {extra ? <span className="block truncate text-xs text-subtle">{extra}</span> : null}
      </dd>
    </div>
  );
}
