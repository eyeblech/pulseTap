import pulsetapPy from "@/oss/pulsetap.py?raw";
import readme from "@/oss/README.md?raw";
import licenseText from "@/oss/LICENSE?raw";
import requirements from "@/oss/requirements.txt?raw";
import pyproject from "@/oss/pyproject.toml?raw";
import configExample from "@/oss/config.example.json?raw";
import githubGuide from "@/oss/GITHUB.md?raw";
import { KEYS, type Modifier } from "@/lib/keys";
import type { AppState } from "@/lib/store";
import { createZip, downloadBlob } from "@/lib/zip";

const gitignore = `__pycache__/
*.py[cod]
*.egg-info/
.venv/
venv/
.env
.DS_Store
dist/
build/
`;

export type ExportConfig = Pick<
  AppState,
  "sequence" | "intervalMs" | "holdMs" | "jitterPct" | "repeats" | "countdownS" | "modifiers"
>;

function pySequence(config: ExportConfig): string[] {
  return config.sequence.map((s) => KEYS[s.keyId]?.pyName ?? "space");
}

function configBlock(config: ExportConfig): string {
  const seq = pySequence(config);
  const seqLit = seq.map((n) => JSON.stringify(n)).join(", ");
  const mods = config.modifiers.map((m) => JSON.stringify(m)).join(", ");
  return [
    "# <<<PULSETAP_CONFIG",
    `SEQUENCE = [${seqLit}]`,
    `INTERVAL_MS = ${config.intervalMs}`,
    `HOLD_MS = ${config.holdMs}`,
    `JITTER_PCT = ${config.jitterPct}`,
    `REPEATS = ${config.repeats}  # 0 = infinite`,
    `COUNTDOWN_S = ${config.countdownS}`,
    `MODIFIERS: List[str] = [${mods}]  # ctrl, shift, alt, cmd`,
    `HOTKEY = "<f8>"`,
    "# PULSETAP_CONFIG>>>",
  ].join("\n");
}

export function pythonSource(config: ExportConfig): string {
  return pulsetapPy.replace(/# <<<PULSETAP_CONFIG[\s\S]*?# PULSETAP_CONFIG>>>/, configBlock(config));
}

export function configJson(config: ExportConfig): string {
  return `${JSON.stringify(
    {
      sequence: pySequence(config),
      interval_ms: config.intervalMs,
      hold_ms: config.holdMs,
      jitter_pct: config.jitterPct,
      repeats: config.repeats,
      countdown_s: config.countdownS,
      modifiers: config.modifiers as Modifier[],
      hotkey: "<f8>",
    },
    null,
    2,
  )}\n`;
}

export function downloadPython(config: ExportConfig) {
  const blob = new Blob([pythonSource(config)], { type: "text/x-python" });
  downloadBlob(blob, "pulsetap.py");
}

export function downloadProjectZip(config: ExportConfig) {
  const zip = createZip([
    { name: "pulsetap/pulsetap.py", content: pythonSource(config) },
    { name: "pulsetap/README.md", content: readme },
    { name: "pulsetap/LICENSE", content: licenseText },
    { name: "pulsetap/requirements.txt", content: requirements },
    { name: "pulsetap/pyproject.toml", content: pyproject },
    { name: "pulsetap/.gitignore", content: gitignore },
    { name: "pulsetap/config.example.json", content: configExample },
    { name: "pulsetap/config.json", content: configJson(config) },
    { name: "pulsetap/GITHUB.md", content: githubGuide },
  ]);
  downloadBlob(zip, "pulsetap.zip");
}
