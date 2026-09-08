# Recurring source audit

This local systemd user timer runs a source-grounded grammar audit through Codex.
It uses a dedicated worktree, saves progress between cycles, and delivers focused
corrections through reviewed PRs. Human merges trigger the existing production
deployment workflow.

The default is GPT-6 Astra at `max` effort, one cycle at a time, with a two-hour
execution limit and a 15-minute interval after each cycle ends. The service caps
memory at 4 GB, swap at 1 GB, and CPU at two cores. It runs while this machine's
user service manager is available; it cannot run while the machine is shut down.
Model usage is charged against the account used by the local Codex CLI.

The runner uses Codex's [non-interactive mode](https://learn.chatgpt.com/docs/non-interactive-mode)
with ephemeral sessions and structured results. It inherits the local Codex
permissions, rules, authentication and integrations. It does not install credentials
or change the user's permission policy.

## Install

Requires Python 3, git, GitHub CLI authentication, Codex CLI authentication, and a
working systemd user manager. Build and source-retrieval dependencies are the same
as for manual book maintenance. Run from a checkout of this repository:

```sh
python3 scripts/improvement-loop/test_runner.py
python3 scripts/improvement-loop/install.py --enable
systemctl --user start grammar-improvement.service
```

Installation creates a sibling `ainu-grammar-hokkaido-improvement` worktree from
`origin/main`. It copies the reviewed runner and protocol into
`~/.local/share/ainu-grammar-improvement/`; changing a task branch cannot silently
replace the running protocol. Stop both units before updating the installed snapshot:

```sh
systemctl --user stop grammar-improvement.timer grammar-improvement.service
python3 scripts/improvement-loop/install.py --enable
```

The installer holds the cycle lock and replaces files atomically. Existing local
configuration and progress are preserved.

Configuration lives in `~/.config/ainu-grammar-improvement/config.json`. Operational
state is in `~/.local/state/ainu-grammar-improvement/`:

- `status.json`: latest cycle outcome, usage, failure count and detailed-log name.
- `history.jsonl`: completed execution summaries.
- `campaign.json` and `handoff.md`: source coverage, claims checked and unfinished work.
- `seed-findings.json`: optional source leads for the first cycle.
- Timestamped `.jsonl` files: redacted event logs for the latest 30 cycles.

The protocol requires separate factual, example, citation, consistency, statistics
and prose coverage. Source disagreements remain attributed; source statistics
remain distinct from independently reproducible MDB/corpus calculations. With two
outstanding content PRs, the agent works on review and research until one merges.

## Operate

```sh
systemctl --user status grammar-improvement.timer grammar-improvement.service
cat ~/.local/state/ainu-grammar-improvement/status.json

# Pause after the current cycle finishes.
touch ~/.local/state/ainu-grammar-improvement/PAUSED

# Resume.
rm ~/.local/state/ainu-grammar-improvement/PAUSED
systemctl --user start grammar-improvement.service

# Stop the current cycle and disable future runs.
systemctl --user disable --now grammar-improvement.timer
systemctl --user stop grammar-improvement.service
```

An execution failure, timeout, invalid result or interrupted run is recorded as a
failure. After three consecutive execution failures, retries wait six hours.
Partial changes remain in the owned worktree for recovery. The timer and file lock
prevent overlapping runs; service shutdown terminates its entire process group.
Build checks and review remain necessary: a successful runner status records an
agent execution, not an independent guarantee of linguistic correctness.
