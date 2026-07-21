#!/usr/bin/env bun
/**
 * loop.ts — Continuous improvement loop orchestrator.
 *
 * Merges the canonical audit tools (built in Claude Code session 2c1f179d) with
 * the extra scanners, then produces a unified findings ledger + human review queue.
 *
 * One cycle:
 *   1. Run canonical tools:  audit-chapters.ts, audit-attestation.ts (gen cache first)
 *   2. Run extra scanners:   scan-issues.ts, verify-ecosystem.ts
 *   3. Merge into unified ledger honouring human decisions (merge-findings.ts)
 *   4. Apply only the human-approved 'fix'/'reword' verdicts (never auto-fix)
 *   5. Generate cycle report + log
 *
 * Usage: bun .grammar-build/qa/loop.ts [--dry-run] [--chapter <slug>] [--no-fix]
 *
 * IMPORTANT: nothing is auto-fixed. Content changes require an explicit human
 * verdict in decisions.jsonl. This keeps the human in the loop.
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync, appendFileSync } from 'fs';
import { join } from 'path';

const ROOT = join(import.meta.dir, '..', '..');
const QA_DIR = join(ROOT, '.grammar-build/qa');
const CHAPTER_DIR = join(ROOT, 'src/lib/grammar/chapters');
const LOG_PATH = join(QA_DIR, 'loop-log.jsonl');
const REPORT_PATH = join(QA_DIR, 'cycle-report.md');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const noFix = args.includes('--no-fix');
const chapterFilter = args.includes('--chapter') ? args[args.indexOf('--chapter') + 1] : null;

const timestamp = new Date().toISOString();
console.log(`\n${'='.repeat(60)}`);
console.log(`Ainu Grammar QA Loop — ${timestamp}`);
console.log(`${'='.repeat(60)}\n`);

// ------------------------------------------------------------------ helpers

function run(cmd: string, label: string, cwd = ROOT): boolean {
	console.log(`[${label}] ${cmd}`);
	try {
		const output = execSync(cmd, { cwd, encoding: 'utf8', timeout: 240_000, env: { ...process.env, PATH: `${process.env.HOME}/.bun/bin:${process.env.PATH}` } });
		const lines = output.split('\n').filter(Boolean);
		console.log(lines.slice(-3).map(l => '    ' + l).join('\n'));
		return true;
	} catch (e: any) {
		// audit scripts exit 1 when they find WARNINGS in --strict, but we don't use --strict.
		// A non-zero exit with stdout is usually fine; surface it.
		const out = (e.stdout || '').toString();
		if (out) console.log(out.split('\n').slice(-4).map((l: string) => '    ' + l).join('\n'));
		console.error(`[${label}] exited with: ${e.message?.split('\n')[0]}`);
		return e.status === 1 && out.length > 0; // tolerate exit 1 (warnings present)
	}
}

const bun = 'bun';

// ------------------------------------------------------------------ Phase 1: Canonical audit tools

console.log('--- Phase 1: canonical audit tools ---');
run(`${bun} scripts/audit-chapters.ts${chapterFilter ? ` --chapter ${chapterFilter}` : ''}`, 'AUDIT-CHAPTERS');
// attestation needs a fresh cache
run(`${bun} scripts/gen-attestation.ts`, 'ATTEST-GEN');
run(`${bun} scripts/audit-attestation.ts${chapterFilter ? ` --chapter ${chapterFilter}` : ''}`, 'AUDIT-ATTEST');

// ------------------------------------------------------------------ Phase 2: Extra scanners

console.log('\n--- Phase 2: extra scanners ---');
run(`${bun} ${join(QA_DIR, 'scan-issues.ts')}${chapterFilter ? ` --chapter ${chapterFilter}` : ''}`, 'SCAN-EXTRA');
run(`${bun} ${join(QA_DIR, 'verify-ecosystem.ts')}${chapterFilter ? ` --chapter ${chapterFilter}` : ''}`, 'VERIFY-ECO');

// ------------------------------------------------------------------ Phase 3: Merge + apply human decisions

console.log('\n--- Phase 3: merge findings ---');
run(`${bun} ${join(QA_DIR, 'merge-findings.ts')}`, 'MERGE');

// ------------------------------------------------------------------ Phase 4: Apply human-approved fixes only

interface AppliedFix { finding_id: string; chapter: string; verdict: string; note?: string; }
const applied: AppliedFix[] = [];

if (!noFix) {
	const findings = existsSync(join(QA_DIR, 'findings.json'))
		? JSON.parse(readFileSync(join(QA_DIR, 'findings.json'), 'utf8')).findings
		: [];

	// Decisions with verdict 'fix' or 'reword' that have a suggested_fix / reword text
	const decisionsPath = join(QA_DIR, 'decisions.jsonl');
	const decisions = new Map<string, any>();
	if (existsSync(decisionsPath)) {
		for (const line of readFileSync(decisionsPath, 'utf8').split('\n')) {
			if (!line.trim()) continue;
			try { const d = JSON.parse(line); decisions.set(d.finding_id, d); } catch {}
		}
	}

	for (const f of findings) {
		const d = decisions.get(f.finding_id);
		if (!d) continue;
		if (d.verdict !== 'reword' || !d.reword) continue; // only reword has actionable text we can apply

		const filePath = join(CHAPTER_DIR, `${f.chapter}.svelte`);
		if (!existsSync(filePath)) continue;
		// We can only auto-apply rewords for register-leak style sentence removals.
		// Surface them; the actual edit is done by the agent reading the decision.
		applied.push({ finding_id: f.finding_id, chapter: f.chapter, verdict: d.verdict, note: d.reword?.slice(0, 80) });
	}

	if (applied.length > 0) {
		console.log(`\n[APPLY] ${applied.length} human-approved reword(s) queued for the agent to apply:`);
		for (const a of applied) console.log(`    ${a.finding_id} (${a.chapter}): ${a.note}`);
		if (dryRun) console.log('    (dry-run — not applied; the agent applies these when reviewing)');
	} else {
		console.log('\n[APPLY] No human-approved fixes to apply this cycle.');
	}
}

// ------------------------------------------------------------------ Phase 5: Report

const findingsRep = existsSync(join(QA_DIR, 'findings.json'))
	? JSON.parse(readFileSync(join(QA_DIR, 'findings.json'), 'utf8'))
	: { total: 0, open: 0, decided: 0, summary: {}, findings: [] };

const open = findingsRep.open || 0;
const decided = findingsRep.decided || 0;

const catSummary = Object.entries(findingsRep.summary || {})
	.sort((a: any, b: any) => b[1].open - a[1].open)
	.map(([k, v]: any) => `| ${k} | ${v.open} | ${v.decided} |`)
	.join('\n');

const report = `# QA Cycle Report — ${timestamp}

## Summary

| Metric | Count |
|--------|-------|
| Total unified findings | ${findingsRep.total || 0} |
| Open (awaiting your verdict) | ${open} |
| Decided by human | ${decided} |
| Human-approved fixes queued | ${applied.length} |

## Findings by category

| Category | Open | Decided |
|----------|------|---------|
${catSummary}

## Human-approved fixes this cycle

${applied.length === 0 ? '_None_' : applied.map(a => `- ${a.finding_id} (${a.chapter}): ${a.verdict} — ${a.note}`).join('\n')}

## Next steps for the human

- Review \`.grammar-build/qa/review-queue.md\` (grouped, with suggested fixes)
- Record verdicts: \`bun .grammar-build/qa/decide.ts <finding_id> <fix|keep|skip|reword> [note]\`
- Or in chat: tell the agent which findings to fix/keep/skip and it will record + apply them.

---
_Generated by loop.ts. Sources merged: audit-chapters.ts, audit-attestation.ts, scan-issues.ts, verify-ecosystem.ts._
`;

writeFileSync(REPORT_PATH, report);

const logEntry = { timestamp, total: findingsRep.total, open, decided, fixes_queued: applied.length, dry_run: dryRun, chapter: chapterFilter };
appendFileSync(LOG_PATH, JSON.stringify(logEntry) + '\n');

console.log(`\n${'='.repeat(60)}`);
console.log(`Cycle complete: ${findingsRep.total} findings, ${open} open, ${decided} decided`);
console.log(`Report: ${REPORT_PATH}`);
console.log(`Review queue: ${join(QA_DIR, 'review-queue.md')}`);
console.log(`${'='.repeat(60)}\n`);
