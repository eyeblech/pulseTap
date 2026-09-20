import { KEYS, LAYOUT } from "@/lib/keys";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/lib/store";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

function Keycap({
  id,
  fn,
}: {
  id: string;
  fn?: boolean;
}) {
  const def = KEYS[id];
  const litKeyId = useAppStore((s) => s.litKeyId);
  const inSeq = useAppStore((s) => s.sequence.some((step) => step.keyId === id));
  const addKey = useAppStore((s) => s.addKey);
  if (!def) return null;
  const down = litKeyId === id;
  return (
    <Tooltip delayDuration={400}>
      <TooltipTrigger asChild>
        <button
          type="button"
          className={cn("kcap", fn && "kcap-fn", down && "is-down", inSeq && !down && "in-seq")}
          data-w={def.width ?? "1"}
          aria-label={`Add ${def.label}`}
          onClick={() => addKey(id)}
        >
          {def.label}
        </button>
      </TooltipTrigger>
      <TooltipContent>Add {def.label} to sequence</TooltipContent>
    </Tooltip>
  );
}

function Row({ ids, fn }: { ids: string[]; fn?: boolean }) {
  return (
    <div className="krow">
      {ids.map((id) => (
        <Keycap key={id} id={id} fn={fn} />
      ))}
    </div>
  );
}

export function VirtualKeyboard() {
  const countdownLeft = useAppStore((s) => s.countdownLeft);
  const capturing = useAppStore((s) => s.capturing);

  return (
    <div className="relative min-w-0 w-full overflow-hidden">
      <div className="kboard hidden md:flex">
        <Row ids={LAYOUT.fn} fn />
        <Row ids={LAYOUT.row1} />
        <Row ids={LAYOUT.row2} />
        <Row ids={LAYOUT.row3} />
        <Row ids={LAYOUT.row4} />
        <Row ids={LAYOUT.row5} />
      </div>
      <div className="kboard flex md:hidden">
        {LAYOUT.compact.map((ids, i) => (
          <Row key={i} ids={ids} />
        ))}
        <Row ids={["Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0"]} />
      </div>
      {(countdownLeft > 0 || capturing) && (
        <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-background/70">
          <p className="font-sans text-5xl font-medium tracking-tight text-primary tabular-nums">
            {capturing ? "Press a key" : countdownLeft}
          </p>
        </div>
      )}
    </div>
  );
}
