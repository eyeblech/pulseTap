import { Download, Github, Keyboard, Monitor } from "lucide-react";

const CARDS = [
  {
    icon: Keyboard,
    title: "On this page",
    body: "Click keys or a preset, set the interval, then Start. Keys fire into the sandbox so you can try a sequence without touching the rest of your computer. F8 starts and stops. Esc stops.",
  },
  {
    icon: Monitor,
    title: "On your computer",
    body: "Download pulsetap.py. Install Python 3, then pip install pynput and run python pulsetap.py. Bind a key, focus the target window during the countdown, and F8 toggles anywhere.",
  },
  {
    icon: Github,
    title: "On GitHub, free",
    body: "Download the GitHub zip, unzip it, create a public repo with no README, then drag the files in. MIT license is included so anyone can use your copy.",
  },
];

export function GuidePanel() {
  return (
    <section className="mb-6 grid gap-3 md:grid-cols-3">
      {CARDS.map((card) => (
        <article key={card.title} className="panel px-4 py-4">
          <div className="mb-2 flex items-center gap-2 text-primary">
            <card.icon className="size-4" strokeWidth={1.75} />
            <h2 className="text-sm font-medium text-foreground">{card.title}</h2>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">{card.body}</p>
        </article>
      ))}
      <p className="md:col-span-3 flex items-start gap-2 text-xs text-subtle">
        <Download className="mt-0.5 size-3.5 shrink-0" />
        The buttons at the bottom of the right column save a script and a full repo folder. Unzip before uploading — GitHub wants the files, not the zip itself.
      </p>
    </section>
  );
}
