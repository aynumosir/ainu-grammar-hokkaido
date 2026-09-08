#!/usr/bin/env python3
"""Run one resumable grammar audit; the user timer supplies repetition."""
import argparse
import datetime as dt
import fcntl
import json
import os
from pathlib import Path
import re
import selectors
import signal
import subprocess
import tempfile
import time


def redact(text):
    text = re.sub(r"/home/[^/\s\\\"']+", "~", text)
    return text.replace(Path.home().name, "<username>")


def redacted_value(value):
    if isinstance(value, str):
        return redact(value)
    if isinstance(value, list):
        return [redacted_value(item) for item in value]
    if isinstance(value, dict):
        return {redact(key): redacted_value(item) for key, item in value.items()}
    return value


def encode(value, **kwargs):
    return json.dumps(redacted_value(value), ensure_ascii=False, **kwargs)


def save(path, value):
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(encode(value, indent=2) + "\n")
    temporary.replace(path)


def read(path, default):
    return json.loads(path.read_text()) if path.exists() else default


def stop_group(process):
    try:
        os.killpg(process.pid, signal.SIGTERM)
    except ProcessLookupError:
        return
    try:
        process.wait(timeout=10)
    except subprocess.TimeoutExpired:
        pass
    # The group can retain descendants after its leader exits.
    try:
        os.killpg(process.pid, signal.SIGKILL)
    except ProcessLookupError:
        pass


def execute(command, prompt, cwd, log_path, timeout):
    """Redact before writing output. A deadline also covers silent children."""
    # An unlinked input file cannot block on a child that never reads stdin.
    with tempfile.TemporaryFile() as input_file:
        input_file.write(prompt.encode())
        input_file.seek(0)
        process = subprocess.Popen(command, cwd=cwd, stdin=input_file,
                                   stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                                   start_new_session=True)
    old_handlers = {}
    interrupted = False

    def interrupt(signum, frame):
        nonlocal interrupted
        interrupted = True
        stop_group(process)

    for sig in (signal.SIGTERM, signal.SIGINT):
        old_handlers[sig] = signal.signal(sig, interrupt)
    final = None
    turn_completed = False
    failed = False
    usage = None
    timed_out = False
    pending = b""
    deadline = time.monotonic() + timeout

    def consume(line, log):
        nonlocal final, turn_completed, failed, usage
        decoded = line.decode("utf-8", errors="replace")
        try:
            event = redacted_value(json.loads(decoded))
        except json.JSONDecodeError:
            log.write(redact(decoded) + "\n")
            log.flush()
            return
        log.write(json.dumps(event, ensure_ascii=False) + "\n")
        log.flush()
        if event.get("type") == "turn.completed":
            turn_completed = True
            usage = event.get("usage")
        if event.get("type") in ("turn.failed", "error"):
            failed = True
        item = event.get("item", {})
        if event.get("type") == "item.completed" and item.get("type") == "agent_message":
            try:
                candidate = json.loads(item["text"])
                fields = {"status", "summary", "pr_urls", "chapters_checked", "next_targets", "blockers"}
                if (isinstance(candidate, dict) and fields == set(candidate)
                        and candidate["status"] in ("completed", "needs_followup", "blocked", "no_change")
                        and isinstance(candidate["summary"], str)
                        and all(isinstance(candidate[k], list) and all(isinstance(v, str) for v in candidate[k])
                                for k in fields - {"status", "summary"})):
                    final = candidate
            except (ValueError, KeyError, TypeError):
                pass

    try:
        with selectors.DefaultSelector() as selector, log_path.open("w") as log:
            selector.register(process.stdout, selectors.EVENT_READ)
            while selector.get_map():
                if time.monotonic() >= deadline or interrupted:
                    timed_out = not interrupted
                    stop_group(process)
                    break
                for key, _ in selector.select(min(1, max(0, deadline - time.monotonic()))):
                    chunk = os.read(key.fileobj.fileno(), 65536)
                    if not chunk:
                        selector.unregister(key.fileobj)
                        break
                    pending += chunk
                    while b"\n" in pending:
                        line, pending = pending.split(b"\n", 1)
                        consume(line, log)
            if pending:
                consume(pending, log)
        try:
            code = process.wait(timeout=max(0.1, deadline - time.monotonic()))
        except subprocess.TimeoutExpired:
            timed_out = True
            stop_group(process)
            code = process.wait()
        success = code == 0 and turn_completed and not failed and final is not None
        return {"success": success and not timed_out and not interrupted,
                "exit_code": code, "timed_out": timed_out, "interrupted": interrupted,
                "result": final, "usage": usage}
    finally:
        stop_group(process)
        process.stdout.close()
        for sig, handler in old_handlers.items():
            signal.signal(sig, handler)


def perform(config, previous, log_path):
    workspace = Path(config["workspace"]).expanduser().resolve()

    def git(*args):
        result = subprocess.run(["git", *args], cwd=workspace, text=True, capture_output=True)
        if result.returncode:
            raise ValueError(redact(result.stderr or result.stdout))
        return result.stdout.strip()

    top = git("rev-parse", "--show-toplevel")
    if Path(top).resolve() != workspace or not (workspace / ".git").is_file():
        raise ValueError("The audit workspace must be a dedicated git worktree.")
    branch = git("branch", "--show-current")
    if branch in ("main", "master"):
        raise ValueError("The audit worktree must use a task branch.")
    installed = Path(__file__).resolve().parent
    prompt = (installed / "prompt.md").read_text()
    prompt += "\nRuntime configuration:\n" + json.dumps(config) + "\n"
    prompt += "Previous cycle result:\n" + json.dumps(previous.get("result")) + "\n"
    command = [str(Path(config["codex"]).expanduser()), "exec", "--ephemeral", "--json",
               "--color", "never", "--model", config["model"],
               "-c", 'model_reasoning_effort="' + config["effort"] + '"',
               "--output-schema", str(installed / "result.schema.json"), "-"]
    return execute(command, prompt, workspace, log_path, config["timeout_seconds"])


def cycle(config_path):
    config = read(config_path, {})
    state_dir = Path(config["state_dir"]).expanduser()
    state_dir.mkdir(parents=True, exist_ok=True, mode=0o700)
    with (state_dir / "cycle.lock").open("a") as lock:
        try:
            fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except BlockingIOError:
            print("An improvement cycle is already running.")
            return 0
        if (state_dir / "PAUSED").exists():
            print("Improvement loop is paused.")
            return 0
        status_path = state_dir / "status.json"
        previous = read(status_path, {})
        if previous.get("status") == "running":
            # SIGKILL, OOM and machine shutdown cannot run our exception handler.
            failures = previous.get("consecutive_failures", 0) + 1
            previous.update({"status": "failed", "success": False,
                             "error": "Previous cycle ended without a final checkpoint.",
                             "consecutive_failures": failures,
                             "retry_after": time.time() + 21600 if failures >= 3 else 0})
            save(status_path, previous)
            with (state_dir / "history.jsonl").open("a") as history:
                history.write(encode(previous) + "\n")
        if previous.get("retry_after", 0) > time.time():
            print("Waiting for the retry window after repeated failures.")
            return 0
        started = dt.datetime.now(dt.timezone.utc).isoformat()
        run_id = dt.datetime.now(dt.timezone.utc).strftime("%Y%m%dT%H%M%S%fZ")
        log_path = state_dir / (run_id + ".jsonl")
        save(status_path, {"status": "running", "started": started,
                           "result": previous.get("result"),
                           "consecutive_failures": previous.get("consecutive_failures", 0)})
        try:
            result = perform(config, previous, log_path)
        except Exception as error:
            result = {"success": False, "exit_code": None, "result": previous.get("result"),
                      "error": redact(str(error))}
        failures = 0 if result["success"] else previous.get("consecutive_failures", 0) + 1
        result.update({"status": "finished" if result["success"] else "failed", "started": started,
                       "finished": dt.datetime.now(dt.timezone.utc).isoformat(),
                       "consecutive_failures": failures,
                       "retry_after": time.time() + 21600 if failures >= 3 else 0,
                       "log": log_path.name})
        save(status_path, result)
        with (state_dir / "history.jsonl").open("a") as history:
            history.write(encode(result) + "\n")
        # Keep summaries indefinitely; retain the latest 30 detailed event logs.
        logs = sorted(state_dir.glob("[0-9]*.jsonl"))
        for old in logs[:-30]:
            old.unlink()
        print(encode(result))
        return 0 if result["success"] else 1


if __name__ == "__main__":
    os.umask(0o077)
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", type=Path, required=True)
    args = parser.parse_args()
    try:
        raise SystemExit(cycle(args.config))
    except Exception as error:
        print(redact(f"Improvement cycle failed: {error}"))
        raise SystemExit(1)
