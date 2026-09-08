#!/usr/bin/env python3
"""Install an explicitly enabled local audit timer with a dedicated worktree."""
import argparse
import fcntl
import json
import os
from pathlib import Path
import shutil
import subprocess

from runner import redact


def run(args, cwd=None):
    result = subprocess.run(args, cwd=cwd, capture_output=True, text=True)
    if result.returncode:
        raise RuntimeError(redact(result.stderr or result.stdout))
    return result.stdout.strip()


def relative_home(path):
    return "~/" + str(path.resolve().relative_to(Path.home()))


def copy_atomic(source, destination):
    temporary = destination.with_suffix(destination.suffix + ".tmp")
    shutil.copyfile(source, temporary)
    temporary.replace(destination)


def install_locked(enable=False):
    source = Path(__file__).resolve().parent
    repo = source.parents[1]
    home = Path.home()
    installed = home / ".local/share/ainu-grammar-improvement"
    configuration = home / ".config/ainu-grammar-improvement"
    state = home / ".local/state/ainu-grammar-improvement"
    units = home / ".config/systemd/user"
    workspace = repo.parent / "ainu-grammar-hokkaido-improvement"
    codex = shutil.which("codex")
    if not codex:
        raise RuntimeError("Codex CLI is unavailable.")
    run([codex, "login", "status"])
    identity = json.loads(run(["gh", "repo", "view", "--json", "nameWithOwner"], cwd=repo))
    if identity["nameWithOwner"] != "aynumosir/ainu-grammar-hokkaido":
        raise RuntimeError("Unexpected repository; installation stopped.")
    run(["systemctl", "--user", "show-environment"])
    active = subprocess.run(["systemctl", "--user", "is-active", "--quiet",
                             "grammar-improvement.service", "grammar-improvement.timer"])
    if active.returncode == 0:
        raise RuntimeError("Stop both the improvement timer and service before updating installed files.")
    if workspace.exists():
        common = run(["git", "rev-parse", "--path-format=absolute", "--git-common-dir"], cwd=workspace)
        expected = run(["git", "rev-parse", "--path-format=absolute", "--git-common-dir"], cwd=repo)
        if common != expected or not (workspace / ".git").is_file():
            raise RuntimeError("The target directory is not a worktree of this repository.")
    else:
        run(["git", "fetch", "origin", "main"], cwd=repo)
        run(["git", "worktree", "add", str(workspace), "-b", "chore/grammar-improvement", "origin/main"], cwd=repo)
    for directory in (installed, configuration, state, units):
        directory.mkdir(parents=True, exist_ok=True, mode=0o700)
    for name in ("runner.py", "prompt.md", "result.schema.json"):
        copy_atomic(source / name, installed / name)
    config_path = configuration / "config.json"
    if not config_path.exists():
        config = {"workspace": relative_home(workspace), "state_dir": relative_home(state),
                  "codex": relative_home(Path(codex)) if str(codex).startswith(str(home) + "/") else codex,
                  "model": "gpt-6-astra", "effort": "max", "timeout_seconds": 7200,
                  "max_open_content_prs": 2}
        # Keep the executable symlink path; resolving it could select a Python module.
        if str(codex).startswith(str(home) + "/"):
            config["codex"] = "~/" + str(Path(codex).relative_to(home))
        config_path.write_text(json.dumps(config, indent=2) + "\n")
    for name in ("grammar-improvement.service", "grammar-improvement.timer"):
        copy_atomic(source / name, units / name)
    run(["systemd-analyze", "--user", "verify", str(units / "grammar-improvement.service"),
         str(units / "grammar-improvement.timer")])
    run(["systemctl", "--user", "daemon-reload"])
    if enable:
        run(["systemctl", "--user", "enable", "--now", "grammar-improvement.timer"])
    print("Installed improvement runner and dedicated worktree.")
    print("Configuration: ~/.config/ainu-grammar-improvement/config.json")
    print("State: ~/.local/state/ainu-grammar-improvement/")
    print("Timer enabled." if enable else "Timer installed; not enabled.")


def install(enable=False):
    state = Path.home() / ".local/state/ainu-grammar-improvement"
    state.mkdir(parents=True, exist_ok=True, mode=0o700)
    with (state / "cycle.lock").open("a") as lock:
        try:
            fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except BlockingIOError:
            raise RuntimeError("An improvement cycle or another installation is running.")
        install_locked(enable)


if __name__ == "__main__":
    os.umask(0o077)
    parser = argparse.ArgumentParser()
    parser.add_argument("--enable", action="store_true")
    args = parser.parse_args()
    try:
        install(args.enable)
    except Exception as error:
        print(redact(f"Installation failed: {error}"))
        raise SystemExit(1)
