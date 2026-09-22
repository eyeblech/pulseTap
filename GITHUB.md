# Put PulseTap on GitHub (free)

You do **not** need Git on the command line. A free GitHub account is enough.

## 1. Unzip

Download `pulsetap.zip` and unzip it. You should see a `pulsetap` folder with:

- `pulsetap.py` — the app
- `README.md` — what people see on the repo
- `LICENSE` — MIT (required so it stays open source)
- `requirements.txt` — `pynput`
- `pyproject.toml`
- `.gitignore`
- `config.json` — the sequence you built in the web app
- `config.example.json`

## 2. Create an empty repo

1. Open [https://github.com/new](https://github.com/new)
2. Repository name: `pulsetap` (or anything you like)
3. Public
4. **Do not** check “Add a README”, `.gitignore`, or license — those files are already in the zip
5. Create repository

## 3. Upload the files

1. On the empty repo page, click **uploading an existing file**
2. Drag **all files inside** the unzipped `pulsetap` folder (not the zip itself)
3. Commit message: `Initial commit: PulseTap auto keyboard presser`
4. Commit to `main`

GitHub will detect the MIT license. Your repo is public and free.

## Optional: git CLI

```bash
cd pulsetap
git init
git add .
git commit -m "Initial commit: PulseTap auto keyboard presser"
git branch -M main
git remote add origin https://github.com/YOUR_USER/pulsetap.git
git push -u origin main
```

## Suggested About blurb

> Open-source auto keyboard presser for Windows, macOS, and Linux. MIT.

Topics: `python`, `keyboard`, `automation`, `hotkey`, `mit-license`
