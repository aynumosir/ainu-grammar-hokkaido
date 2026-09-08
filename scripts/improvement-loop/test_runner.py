import contextlib
import fcntl
import io
import json
import os
from pathlib import Path
import sys
import tempfile
import time
import unittest
from unittest import mock

import runner


SUMMARY = {"status": "completed", "summary": "A checked correction.", "pr_urls": [],
           "chapters_checked": ["example"], "next_targets": [], "blockers": []}


class RunnerTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.directory = Path(self.tmp.name)

    def tearDown(self):
        self.tmp.cleanup()

    def execute(self, code, timeout=3):
        return runner.execute([sys.executable, "-c", code], "test prompt",
                              self.directory, self.directory / "events.jsonl", timeout)

    def successful_code(self, summary=SUMMARY):
        event = {"type": "item.completed", "item": {"type": "agent_message", "text": json.dumps(summary)}}
        return ("import json,sys\nsys.stdin.read()\n"
                + "print(" + repr(json.dumps(event)) + ")\n"
                + "print('{\"type\":\"turn.completed\",\"usage\":{\"input_tokens\":1}}')\n")

    def test_valid_cycle_requires_completed_turn_and_structured_summary(self):
        result = self.execute(self.successful_code())
        self.assertTrue(result["success"])
        self.assertEqual(result["result"], SUMMARY)
        self.assertEqual(result["usage"], {"input_tokens": 1})

    def test_no_final_output_is_not_success(self):
        result = self.execute("print('{\"type\":\"turn.completed\"}')")
        self.assertFalse(result["success"])

    def test_malformed_summary_is_not_success(self):
        for summary in ({"status": "completed"}, dict(SUMMARY, pr_urls="not a list")):
            with self.subTest(summary=summary):
                self.assertFalse(self.execute(self.successful_code(summary))["success"])

    def test_nonzero_exit_overrides_successful_message(self):
        result = self.execute(self.successful_code() + "sys.exit(7)")
        self.assertFalse(result["success"])
        self.assertEqual(result["exit_code"], 7)

    def test_failed_event_overrides_successful_message(self):
        result = self.execute(self.successful_code() + "print('{\"type\":\"turn.failed\"}')")
        self.assertFalse(result["success"])

    def test_silent_child_times_out(self):
        start = time.monotonic()
        result = self.execute("import time; time.sleep(30)", timeout=0.1)
        self.assertTrue(result["timed_out"])
        self.assertFalse(result["success"])
        self.assertLess(time.monotonic() - start, 3)

    def test_large_prompt_cannot_block_the_timeout(self):
        start = time.monotonic()
        result = runner.execute([sys.executable, "-c", "import time; time.sleep(30)"],
                                "x" * 1_000_000, self.directory,
                                self.directory / "events.jsonl", 0.1)
        self.assertTrue(result["timed_out"])
        self.assertLess(time.monotonic() - start, 3)

    def test_descendant_is_killed_when_parent_exits(self):
        marker = self.directory / "leaked"
        child = "import time,pathlib; time.sleep(0.8); pathlib.Path(" + repr(str(marker)) + ").touch()"
        code = self.successful_code() + ("import subprocess\nsubprocess.Popen([sys.executable,'-c',"
              + repr(child) + "], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)\n")
        self.assertTrue(self.execute(code)["success"])
        time.sleep(1)
        self.assertFalse(marker.exists())

    def test_home_user_is_redacted_across_output_chunks(self):
        value = str(Path.home()) + "/test " + "host-" + Path.home().name
        code = "import sys,time\n"
        code += "sys.stdout.write(" + repr(value[:7]) + "); sys.stdout.flush(); time.sleep(0.02)\n"
        code += "print(" + repr(value[7:]) + ")\n"
        self.execute(code)
        output = (self.directory / "events.jsonl").read_text()
        self.assertNotIn(Path.home().name, output)
        self.assertIn("~/test", output)

    def test_state_files_are_redacted(self):
        path = self.directory / "status.json"
        runner.save(path, {"path": str(Path.home()) + "/test"})
        self.assertEqual(json.loads(path.read_text())["path"], "~/test")

    def test_redaction_preserves_escaped_json_strings(self):
        value = 'print("' + str(Path.home()) + '")\nnext line'
        event = {"type": "item.completed", "item": {"type": "command_execution", "command": value}}
        self.execute("print(" + repr(json.dumps(event)) + ")")
        parsed = json.loads((self.directory / "events.jsonl").read_text())
        self.assertEqual(parsed["item"]["command"], 'print("~")\nnext line')
        path = self.directory / "status.json"
        runner.save(path, {"text": value})
        self.assertEqual(json.loads(path.read_text())["text"], 'print("~")\nnext line')
        result = self.execute(self.successful_code(dict(SUMMARY, summary=value)))
        self.assertTrue(result["success"])
        self.assertEqual(result["result"]["summary"], 'print("~")\nnext line')

    def config(self):
        config = self.directory / "config.json"
        config.write_text(json.dumps({"state_dir": str(self.directory)}))
        return config

    def test_pause_prevents_any_execution(self):
        (self.directory / "PAUSED").touch()
        with contextlib.redirect_stdout(io.StringIO()):
            self.assertEqual(runner.cycle(self.config()), 0)

    def test_overlap_prevents_any_execution(self):
        with (self.directory / "cycle.lock").open("a") as lock:
            fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
            with contextlib.redirect_stdout(io.StringIO()):
                self.assertEqual(runner.cycle(self.config()), 0)

    def test_failure_cooldown_prevents_any_execution(self):
        runner.save(self.directory / "status.json", {"retry_after": time.time() + 100})
        with contextlib.redirect_stdout(io.StringIO()):
            self.assertEqual(runner.cycle(self.config()), 0)

    def test_startup_failures_are_persisted_and_back_off(self):
        config = self.config()
        with mock.patch.object(runner, "perform", side_effect=FileNotFoundError("Missing executable")):
            with contextlib.redirect_stdout(io.StringIO()):
                for _ in range(3):
                    self.assertEqual(runner.cycle(config), 1)
        state = json.loads((self.directory / "status.json").read_text())
        self.assertEqual(state["status"], "failed")
        self.assertEqual(state["consecutive_failures"], 3)
        self.assertGreater(state["retry_after"], time.time())
        self.assertEqual(len((self.directory / "history.jsonl").read_text().splitlines()), 3)

    def test_git_errors_are_captured_and_redacted(self):
        config = self.config()
        config.write_text(json.dumps({"state_dir": str(self.directory), "workspace": str(self.directory)}))
        error = "fatal: " + str(Path.home()) + "/broken: invalid gitfile"
        result = mock.Mock(returncode=128, stderr=error, stdout="")
        with mock.patch.object(runner.subprocess, "run", return_value=result) as run:
            output = io.StringIO()
            with contextlib.redirect_stdout(output):
                self.assertEqual(runner.cycle(config), 1)
        self.assertTrue(run.call_args.kwargs["capture_output"])
        self.assertNotIn(Path.home().name, output.getvalue())
        self.assertNotIn(Path.home().name, (self.directory / "status.json").read_text())

    def test_repeated_hard_interruptions_reach_cooldown(self):
        config = self.config()
        runner.save(self.directory / "status.json", {"status": "running", "consecutive_failures": 2})
        with contextlib.redirect_stdout(io.StringIO()):
            self.assertEqual(runner.cycle(config), 0)
        state = json.loads((self.directory / "status.json").read_text())
        self.assertEqual(state["status"], "failed")
        self.assertEqual(state["consecutive_failures"], 3)
        self.assertGreater(state["retry_after"], time.time())


if __name__ == "__main__":
    unittest.main()
