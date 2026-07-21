#!/usr/bin/env bun
/**
 * decide.ts — Record human verdicts on QA findings. Persists to decisions.jsonl
 * so the loop and merge-findings honour them across cycles.
 *
 * Usage:
 *   bun .grammar-build/qa/decide.ts <finding_id> <fix|keep|skip|reword> [note...]
 *   bun .grammar-build/qa/decide.ts --list                     # show open findings
 *   bun .grammar-build/qa/decide.ts --category doctrine keep "all cited analyses"
 *   bun .grammar-build/qa/decide.ts --reword <id> "<new text>" # store a reword
 *
 * Verdicts:
 *   fix    — apply the suggested/automatic fix
 *   keep   — the content is correct as-is; stop flagging it
 *   skip   — defer; do not fix or keep (stays out of the report)
 *   reword — replace with the provided text
 */

import { readFileSync, writeFileSync, existsSync, appendFileSync } from 'fs';
import { join } from 'path';

const QA = import.meta.dir;
const DECISIONS = join(QA, 'decisions.jsonl');
const FINDINGS = join(QA, 'findings.json');

const args = process.argv.slice(2);

function loadFindings(): any {
	if (!existsSync(FINDINGS)) {
		console.error('findings.json not found — run `bun .grammar-build/qa/merge-findings.ts` first');
		process.exit(1);
	}
	return JSON.parse(readFileSync(FINDINGS, 'utf8'));
}

function appendDecision(finding_id: string, verdict: string, note?: string, reword?: string) {
	const entry = { finding_id, verdict, ts: new Date().toISOString() };
	if (note) (entry as any).note = note;
	if (reword) (entry as any).reword = reword;
	appendFileSync(DECISIONS, JSON.stringify(entry) + '\n');
	console.log(`Recorded: ${finding_id} → ${verdict}${note ? ` (${note})` : ''}${reword ? ` → "${reword}"` : ''}`);
}

// --list
if (args[0] === '--list') {
	const rep = loadFindings();
	const open = rep.findings.filter((f: any) => f.status === 'open');
	console.log(`${open.length} open findings:\n`);
	for (const f of open.slice(0, 50)) {
		console.log(`  ${f.finding_id}  [${f.category}]  ${f.chapter}:${f.line}`);
		console.log(`      ${f.message.slice(0, 110)}`);
	}
	if (open.length > 50) console.log(`  …and ${open.length - 50} more`);
	process.exit(0);
}

// --category <cat> <verdict> [note]
if (args[0] === '--category') {
	const cat = args[1];
	const verdict = args[2];
	const note = args.slice(3).join(' ');
	if (!cat || !verdict) {
		console.error('Usage: decide.ts --category <category> <fix|keep|skip> [note]');
		process.exit(1);
	}
	const rep = loadFindings();
	const matches = rep.findings.filter((f: any) => f.category === cat && f.status === 'open');
	for (const f of matches) appendDecision(f.finding_id, verdict, note || `batch decision for category ${cat}`);
	console.log(`\n${matches.length} findings in "${cat}" marked "${verdict}".`);
	process.exit(0);
}

// --reword <id> <new text>
if (args[0] === '--reword') {
	const id = args[1];
	const reword = args.slice(2).join(' ');
	if (!id || !reword) {
		console.error('Usage: decide.ts --reword <finding_id> "<new text>"');
		process.exit(1);
	}
	appendDecision(id, 'reword', undefined, reword);
	process.exit(0);
}

// Single finding: decide.ts <id> <verdict> [note]
const [id, verdict, ...noteParts] = args;
if (!id || !verdict) {
	console.error('Usage: decide.ts <finding_id> <fix|keep|skip|reword> [note...]');
	console.error('       decide.ts --list');
	process.exit(1);
}
if (!['fix', 'keep', 'skip', 'reword'].includes(verdict)) {
	console.error(`Unknown verdict "${verdict}" — must be fix|keep|skip|reword`);
	process.exit(1);
}
appendDecision(id, verdict, noteParts.join(' ') || undefined);
