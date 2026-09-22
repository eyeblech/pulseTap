# PulseTap

[![License: MIT](https://img.shields.io/badge/license-MIT-8fb9a8.svg)](LICENSE)
[![Python 3.9+](https://img.shields.io/badge/python-3.9+-3776AB.svg)](https://www.python.org/downloads/)

Open-source **auto keyboard presser** for Windows, macOS, and Linux.

PulseTap repeats a key — or a short sequence of keys — on a timer you choose. Use it for accessibility, UI testing, long forms, or keeping a window awake. The window stays visible. **F8** always starts and stops.

**This project is MIT licensed.** You may use, copy, modify, merge, publish, distribute, sublicense, and sell it. Keep the MIT copyright notice. See [LICENSE](LICENSE).

## Features

- Desktop window (tkinter) and a `--cli` mode
- Click **Bind key** or use presets: Space, Enter, W, WASD, arrows
- Interval, hold, jitter, repeat count, countdown
- Optional Ctrl / Shift / Alt / Win held with each tap
- Global **F8** toggle, always-on-top, no network, no accounts

## Install

Python 3.9+ and one package:

```bash
pip install -r requirements.txt
python pulsetap.py
```

Terminal only:

```bash
python pulsetap.py --cli
```

## Use

1. **Bind key** — press the key you want repeated, or pick a preset.
2. Set interval (ms), hold, jitter, and repeats (`0` = forever).
3. Focus the target window. Click **Start** or tap **F8**.
4. **F8** or **Stop** ends it. Ctrl+C quits.

### Examples

```bash
python pulsetap.py --sequence space --interval 1000
python pulsetap.py --sequence w a s d --interval 400 --hold 180
python pulsetap.py --config config.example.json --cli
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
| `--modifiers` | `ctrl` `shift` `alt` `cmd` |
| `--hotkey` | Global toggle, default `<f8>` |
| `--config` | JSON file (see `config.example.json`) |

## Permissions

- **Windows** — run as usual. Some games ignore injected keys.
- **macOS** — allow Accessibility for Python / Terminal.
- **Linux** — X11. Wayland often blocks injected keys.

## License

[MIT](LICENSE). Copyright (c) 2026 PulseTap contributors.

Free and open source. Fork it, change it, ship it — just keep the license file.
