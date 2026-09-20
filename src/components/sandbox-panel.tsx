import { useEffect, useRef } from "react";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

export function SandboxPanel() {
  const sandbox = useAppStore((s) => s.sandbox);
  const clearSandbox = useAppStore((s) => s.clearSandbox);
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [sandbox]);

  return (
    <div className="panel px-4 py-4">
      <div className="mb-2 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium">Sandbox</p>
          <p className="text-xs text-muted-foreground">Live output of this demo. Not your OS.</p>
        </div>
        <Button type="button" size="sm" variant="ghost" onClick={clearSandbox}>
          Clear
        </Button>
      </div>
      <pre
        ref={ref}
        className="h-36 overflow-auto rounded-md bg-background p-3 font-mono text-xs leading-relaxed whitespace-pre-wrap text-foreground"
      >
        {sandbox || <span className="text-subtle">Waiting for Start…</span>}
      </pre>
    </div>
  );
}
