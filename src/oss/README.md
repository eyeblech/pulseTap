# PulseTap

Open-source auto keyboard presser for Windows, macOS, and Linux.

**MIT licensed.** Free to use, copy, modify, and publish — including on GitHub.

PulseTap repeats a key or a sequence of keys at a pace you choose. Typical uses:

- Accessibility — a key that must fire on a steady beat
- UI / form testing — Enter, Tab, or a short sequence
- Keeping a window awake with Space (when the app allows it)
- Macro-style loops (WASD, arrows) with a visible window and a kill switch

It is **not** a hidden cheat client. The window stays on top, F8 always toggles, and a countdown runs before the first press.

## Install

You need [Python 3.9+](https://www.python.org/downloads/) and one package:

```bash
pip install -r requirements.txt
python pulsetap.py
```

That opens the desktop window. Prefer the terminal?

```bash
python pulsetap.py --cli
```

`config.json` (if present) is the sequence exported from the web studio. Override it with flags at any time.

## Use

1. Click **Bind key**, then press the key you want repeated — or pick a preset (Space, Enter, W, WASD, Arrows).
2. Set interval, hold, jitter, and repeats (`0` = forever).
3. Optionally turn on **Always on top**, then click the window you want to type into.
4. Click **Start** or tap **F8**. The countdown is your time to focus that window.
5. **F8** or **Stop** ends it. Ctrl+C quits.

### Command line

```bash
python pulsetap.py --sequence space --interval 1000
python pulsetap.py --sequence w a s d --interval 400 --hold 180
python pulsetap.py --config config.json --cli
python pulsetap.py --list-keys
```

| Flag | Meaning |
|---|---|
| `--sequence` | Keys in order (`space`, `enter`, `w`, `f1`, `up`, …) |
| `--interval` | Milliseconds between presses |
| `--hold` | Milliseconds each key stays down |
| `--jitter` | Randomize interval by this percent |
| `--repeats` | Sequence cycles; `0` = infinite |
| `--countdown` | Seconds before the first press |
| `--modifiers` | `ctrl` `shift` `alt` `cmd` held while tapping |
| `--hotkey` | Global toggle, default `<f8>` |
| `--autostart` | Begin as soon as the app launches |
| `--config` | JSON file (see `config.example.json`) |

## Permissions

- **Windows** — run normally. Some games that capture raw input ignore injected keys; that is an OS/game limit.
- **macOS** — grant *Accessibility* to Terminal / Python in System Settings → Privacy & Security.
- **Linux** — works on X11. On Wayland, compositors often block injected keys.

## Publish on GitHub (free)

Step-by-step with screenshots-in-words: [GITHUB.md](GITHUB.md).

Short version:

1. Unzip this folder.
2. Create a **public** repo at [github.com/new](https://github.com/new) — leave README / license unchecked.
3. **uploading an existing file** → drag every file in this folder → commit.

## Safety

- Always-on-top window and a visible status line
- F8 is a global kill switch
- No network calls, no telemetry, no accounts

## License

MIT. See [LICENSE](LICENSE).
