import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Square, Play } from "lucide-react";
import { Toaster } from "sonner";
import { AppHeader } from "@/components/app-header";
import { ControlPanel } from "@/components/control-panel";
import { ExportPanel } from "@/components/export-panel";
import { GuidePanel } from "@/components/guide-panel";
import { SandboxPanel } from "@/components/sandbox-panel";
import { SequenceBar } from "@/components/sequence-bar";
import { VirtualKeyboard } from "@/components/virtual-keyboard";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { loadPersisted, useAppStore } from "@/lib/store";
import { usePresserEngine } from "@/lib/use-presser";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const running = useAppStore((s) => s.running);
  const { toggle } = usePresserEngine();

  useEffect(() => {
    const saved = loadPersisted();
    if (saved) useAppStore.getState().hydrate(saved);
  }, []);

  return (
    <TooltipProvider delayDuration={250}>
      <div className="min-h-dvh overflow-x-hidden">
        <AppHeader />
        <main className="mx-auto max-w-6xl px-4 pt-6 pb-28 md:pb-12">
          <p className="mb-4 max-w-2xl text-sm text-muted-foreground">
            PulseTap is an auto keyboard presser. Try a sequence here, then download
            the MIT Python app to type into real windows — and publish that folder
            as a free GitHub repo.
          </p>
          <GuidePanel />
          <div className="grid items-start gap-5 lg:grid-cols-3">
            <section className="min-w-0 lg:col-span-2">
              <VirtualKeyboard />
              <SequenceBar />
            </section>
            <aside className="flex min-w-0 flex-col gap-4">
              <StartCard running={running} onToggle={toggle} />
              <ControlPanel />
              <SandboxPanel />
              <ExportPanel />
            </aside>
          </div>
        </main>
        <div className="mobile-dock fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/95 p-3 backdrop-blur-sm md:hidden">
          <Button
            type="button"
            size="lg"
            className="w-full"
            variant={running ? "destructive" : "default"}
            onClick={toggle}
          >
            {running ? <Square className="size-4" /> : <Play className="size-4" />}
            {running ? "Stop · Esc" : "Start · F8"}
          </Button>
        </div>
        <Toaster theme="dark" position="bottom-right" richColors={false} />
      </div>
    </TooltipProvider>
  );
}

function StartCard({ running, onToggle }: { running: boolean; onToggle: () => void }) {
  return (
    <div className="panel hidden px-4 py-4 md:block">
      <Button
        type="button"
        size="lg"
        className="w-full"
        variant={running ? "destructive" : "default"}
        onClick={onToggle}
      >
        {running ? <Square className="size-4" /> : <Play className="size-4" />}
        {running ? "Stop · F8" : "Start · F8"}
      </Button>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Esc also stops. Switch to the sandbox to watch keys land.
      </p>
    </div>
  );
}
