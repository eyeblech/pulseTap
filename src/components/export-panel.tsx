import { useMemo, useState } from "react";
import { Check, Copy, Download, FolderArchive } from "lucide-react";
import { toast } from "sonner";
import { downloadProjectZip, downloadPython, pythonSource } from "@/lib/export";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";

export function ExportPanel() {
  const sequence = useAppStore((s) => s.sequence);
  const intervalMs = useAppStore((s) => s.intervalMs);
  const holdMs = useAppStore((s) => s.holdMs);
  const jitterPct = useAppStore((s) => s.jitterPct);
  const repeats = useAppStore((s) => s.repeats);
  const countdownS = useAppStore((s) => s.countdownS);
  const modifiers = useAppStore((s) => s.modifiers);
  const config = useMemo(
    () => ({ sequence, intervalMs, holdMs, jitterPct, repeats, countdownS, modifiers }),
    [sequence, intervalMs, holdMs, jitterPct, repeats, countdownS, modifiers],
  );
  const [copied, setCopied] = useState(false);
  const source = useMemo(() => pythonSource(config), [config]);
  const preview = source.length > 900 ? `${source.slice(0, 900)}\n…` : source;

  return (
    <div className="panel space-y-4 px-4 py-4">
      <div>
        <p className="text-sm font-medium">Python app · MIT · GitHub pack</p>
        <p className="mt-1 text-xs text-muted-foreground">
          This page only types into the sandbox. The Python download presses real
          keys on Windows, macOS, and Linux. The zip is a complete public repo.
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button
          type="button"
          className="flex-1"
          onClick={() => {
            downloadPython(config);
            toast("Downloaded pulsetap.py");
          }}
        >
          <Download />
          pulsetap.py
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="flex-1"
          onClick={() => {
            downloadProjectZip(config);
            toast("Downloaded pulsetap.zip — unzip, then upload the files");
          }}
        >
          <FolderArchive />
          GitHub zip
        </Button>
      </div>

      <div className="space-y-3 text-xs text-muted-foreground">
        <div>
          <p className="mb-1 font-medium text-foreground">Run on your computer</p>
          <ol className="list-decimal space-y-1 pl-4">
            <li>Install Python 3 from python.org (tick “Add to PATH” on Windows).</li>
            <li>
              <code className="font-mono text-foreground">pip install pynput</code>
            </li>
            <li>
              <code className="font-mono text-foreground">python pulsetap.py</code>
            </li>
            <li>Bind a key, focus the target window, Start or F8. Esc / F8 stops.</li>
          </ol>
        </div>
        <div>
          <p className="mb-1 font-medium text-foreground">Upload to GitHub, free</p>
          <ol className="list-decimal space-y-1 pl-4">
            <li>Download the GitHub zip and unzip it.</li>
            <li>
              Open{" "}
              <a
                href="https://github.com/new"
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline decoration-border underline-offset-2 hover:text-primary"
              >
                github.com/new
              </a>{" "}
              — public repo, leave README / license unchecked.
            </li>
            <li>Click “uploading an existing file” and drop the unzipped files (not the zip).</li>
            <li>Commit. MIT is already in LICENSE so the repo stays open source.</li>
          </ol>
        </div>
      </div>

      <div className="relative">
        <pre className="max-h-40 overflow-auto rounded-md bg-background p-3 font-mono text-xs leading-relaxed text-muted-foreground">
          {preview}
        </pre>
        <Button
          type="button"
          size="sm"
          variant="outline"
          className="absolute top-2 right-2"
          onClick={async () => {
            await navigator.clipboard.writeText(source);
            setCopied(true);
            toast("Script copied");
            window.setTimeout(() => setCopied(false), 1600);
          }}
        >
          {copied ? <Check /> : <Copy />}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
    </div>
  );
}
