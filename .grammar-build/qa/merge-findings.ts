#!/usr/bin/env bun
/**
 * merge-findings.ts — Merge the canonical audit tools with the extra scanners
 * into ONE unified findings ledger with stable, line-shift-resistant IDs,
 * then apply the human decisions ledger.
 *
 * Sources merged:
 *   1. audit-chapters.ts   → .grammar-build/qa/audit-report.json   (canonical)
 *   2. audit-attestation.ts→ .grammar-build/qa/attestation-report.json (canonical)
 *   3. scan-issues.ts      → .grammar-build/qa/work-queue.json     (extra checks)
 *   4. verify-ecosystem.ts → .grammar-build/qa/verification-report.json (extra)
 *
 * Human decisions:
 *   .grammar-build/qa/decisions.jsonl  — one verdict per line
 *     { finding_id, verdict: 'fix'|'keep'|'skip'|'reword', note?, ts }
 *
 * Output:
 *   .grammar-build/qa/findings.json    — unified ledger
 *   .grammar-build/qa/review-queue.md  — human-readable, grouped, with context
 *
 * Usage: bun .grammar-build/qa/merge-findings.ts
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const QA = import.meta.dir;

// ------------------------------------------------------------------ stable ID

/**
 * Fingerprint: a short content hash of the meaningful tokens in a finding,
 * so the ID survives line-number shifts as chapters are edited.
 */
function fingerprint(parts: string[]): string {
	const s = parts.join('|').toLowerCase().replace(/\s+/g, ' ').trim();
	let h = 0;
	for (let i = 0; i < s.length; i++) {
		h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
	}
	return (h >>> 0).toString(36);
}

// ------------------------------------------------------------------ finding type

interface Finding {
	finding_id: string;
	source: 'canonical-chapters' | 'canonical-attestation' | 'scan-extra' | 'verify-ecosystem';
	category: string;
	severity: 'error' | 'warn';
	chapter: string;
	line: number;
	message: string;
	context: string;
	suggested_fix?: string;
	status: 'open' | 'fixed' | 'kept' | 'skipped';
	human_verdict?: string;
	human_note?: string;
}

// ------------------------------------------------------------------ load canonical audit-chapters.ts

function loadCanonicalChapters(): Finding[] {
	const path = join(QA, 'audit-report.json');
	if (!existsSync(path)) return [];
	const rep = JSON.parse(readFileSync(path, 'utf8'));
	const out: Finding[] = [];
	for (const f of rep.findings || []) {
		const category = f.check as string; // cite-pageless, ex-boundary-align, ex-charset, bib-uncited
		const id = fingerprint([category, f.chapter, f.message]);
		out.push({
			finding_id: `CAN-${category.split('-')[0].toUpperCase()}-${id}`,
			source: 'canonical-chapters',
			category,
			severity: f.level,
			chapter: f.chapter,
			line: f.line,
			message: f.message,
			context: f.message,
			suggested_fix: suggestFix(category, f.message),
			status: 'open',
		});
	}
	return out;
}

// ------------------------------------------------------------------ load canonical audit-attestation.ts

function loadCanonicalAttestation(): Finding[] {
	const path = join(QA, 'attestation-report.json');
	if (!existsSync(path)) return [];
	const rep = JSON.parse(readFileSync(path, 'utf8'));
	const out: Finding[] = [];
	for (const f of rep.findings || []) {
		const id = fingerprint(['attestation', f.chapter, f.message]);
		out.push({
			finding_id: `ATTEST-${id}`,
			source: 'canonical-attestation',
			category: 'attestation',
			severity: f.level,
			chapter: f.chapter,
			line: f.line,
			message: f.message,
			context: f.message,
			suggested_fix: 'Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts',
			status: 'open',
		});
	}
	return out;
}

// ------------------------------------------------------------------ load scan-issues.ts (extra checks)

function loadScanExtra(): Finding[] {
	const path = join(QA, 'work-queue.json');
	if (!existsSync(path)) return [];
	const rep = JSON.parse(readFileSync(path, 'utf8'));
	const out: Finding[] = [];
	for (const i of rep.issues || []) {
		// Skip categories the canonical tools already cover
		if (i.category === 'gloss-atom' || i.category === 'attestation') continue;
		const id = fingerprint([i.category, i.chapter, i.quote || i.claim]);
		out.push({
			finding_id: `SCAN-${i.category.split('-')[0].toUpperCase()}-${id}`,
			source: 'scan-extra',
			category: i.category,
			severity: i.severity === 'high' ? 'warn' : 'warn',
			chapter: i.chapter,
			line: i.line,
			message: i.claim,
			context: i.quote,
			suggested_fix: i.proposed_fix,
			status: 'open',
		});
	}
	return out;
}

// ------------------------------------------------------------------ load verify-ecosystem.ts (extra)

function loadVerifyExtra(): Finding[] {
	const path = join(QA, 'verification-report.json');
	if (!existsSync(path)) return [];
	const rep = JSON.parse(readFileSync(path, 'utf8'));
	const out: Finding[] = [];
	for (const f of rep.findings || []) {
		// Only surface the high-signal types; pageless citations are advisory + already in canonical
		if (f.type === 'pageless-citation') continue;
		const category = f.type === 'unattested-form' ? 'unattested-form' :
			f.type === 'unverified-derivation' ? 'unverified-derivation' :
			f.type === 'missing-citation' ? 'missing-citation' : f.type;
		const id = fingerprint([category, f.chapter, f.detail || f.form || '']);
		out.push({
			finding_id: `ECO-${category.split('-')[0].toUpperCase()}-${id}`,
			source: 'verify-ecosystem',
			category,
			severity: 'warn',
			chapter: f.chapter,
			line: f.line || 0,
			message: f.detail || `${f.form}`,
			context: f.detail || '',
			suggested_fix: f.type === 'unverified-derivation'
				? 'Verify this morpheme-decomposition claim against morpheme_db / lexeme_db'
				: 'Cross-check against corpus + dictionaries',
			status: 'open',
		});
	}
	return out;
}

// ------------------------------------------------------------------ suggested fixes

function suggestFix(category: string, message: string): string | undefined {
	switch (category) {
		case 'cite-pageless': {
			const key = (message.match(/"([^"]+)"/) || [])[1];
			return key ? `Add a page locator to Ref "${key}", or mark it PAGELESS_OK if the source is unpaginated` : undefined;
		}
		case 'ex-charset':
			return 'This m-token contains a non-Ainu letter — likely a loanword. Add it to the loanword allowlist or restructure the example';
		case 'ex-boundary-align':
			return 'Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)';
		case 'bib-uncited': {
			const key = (message.match(/"([^"]+)"/) || [])[1];
			return key ? `Bibliography entry "${key}" is never cited — cite it in-text or remove it` : undefined;
		}
		default:
			return undefined;
	}
}

// ------------------------------------------------------------------ dedupe

function dedupe(findings: Finding[]): Finding[] {
	// Prefer canonical over scan when both flag the same (chapter, line, normalized category)
	const seen = new Map<string, Finding>();
	// canonical first (higher priority)
	const priority = { 'canonical-chapters': 0, 'canonical-attestation': 1, 'verify-ecosystem': 2, 'scan-extra': 3 };
	findings.sort((a, b) => priority[a.source] - priority[b.source]);
	for (const f of findings) {
		const key = `${f.chapter}|${f.line}|${normalizeCat(f.category)}`;
		if (!seen.has(key)) seen.set(key, f);
	}
	return [...seen.values()];
}

function normalizeCat(c: string): string {
	if (c === 'register-leak') return 'register-leak';
	return c;
}

// ------------------------------------------------------------------ apply human decisions

interface Decision {
	finding_id: string;
	verdict: 'fix' | 'keep' | 'skip' | 'reword';
	note?: string;
	ts: string;
}

function loadDecisions(): Map<string, Decision> {
	const path = join(QA, 'decisions.jsonl');
	const map = new Map<string, Decision>();
	if (!existsSync(path)) return map;
	for (const line of readFileSync(path, 'utf8').split('\n')) {
		if (!line.trim()) continue;
		try {
			const d = JSON.parse(line) as Decision;
			map.set(d.finding_id, d); // latest wins
		} catch {}
	}
	return map;
}

// ------------------------------------------------------------------ main

const all = [
	...loadCanonicalChapters(),
	...loadCanonicalAttestation(),
	...loadScanExtra(),
	...loadVerifyExtra(),
];

let findings = dedupe(all);

const decisions = loadDecisions();
let decidedCount = 0;
for (const f of findings) {
	const d = decisions.get(f.finding_id);
	if (d) {
		f.status = d.verdict === 'fix' ? 'fixed' : d.verdict === 'keep' ? 'kept' : 'skipped';
		f.human_verdict = d.verdict;
		f.human_note = d.note;
		decidedCount++;
	}
}

// Sort: open first, by severity then category
const catOrder = ['doctrine', 'unattested-form', 'unverified-derivation', 'register-leak', 'priority-claim', 'ex-charset', 'ex-boundary-align', 'bib-uncited', 'ai-prose', 'hardcoded-xref', 'cite-pageless', 'attestation'];
findings.sort((a, b) => {
	if (a.status === 'open' && b.status !== 'open') return -1;
	if (a.status !== 'open' && b.status === 'open') return 1;
	const ci = catOrder.indexOf(a.category) - catOrder.indexOf(b.category);
	if (ci !== 0) return ci;
	return a.chapter.localeCompare(b.chapter);
});

// ------------------------------------------------------------------ summary

const summary: Record<string, { open: number; decided: number }> = {};
for (const f of findings) {
	if (!summary[f.category]) summary[f.category] = { open: 0, decided: 0 };
	if (f.status === 'open') summary[f.category].open++;
	else summary[f.category].decided++;
}

writeFileSync(join(QA, 'findings.json'), JSON.stringify({
	generated: new Date().toISOString(),
	total: findings.length,
	open: findings.filter(f => f.status === 'open').length,
	decided: decidedCount,
	summary,
	findings,
}, null, 2));

// ------------------------------------------------------------------ review-queue.md (human-readable)

const openFindings = findings.filter(f => f.status === 'open');
const catLabels: Record<string, string> = {
	'doctrine': '🔴 Doctrine — "clitic" used for person markers',
	'unattested-form': '🟠 Unattested Ainu form (not in corpus / morpheme DB)',
	'unverified-derivation': '🟠 Unverified morpheme-decomposition claim',
	'register-leak': '🟡 Register-leak — pipeline language in reader prose',
	'priority-claim': '🟡 Priority claim — "first / only / unprecedented"',
	'ex-charset': '🟡 Non-Ainu letter in example morpheme',
	'ex-boundary-align': '🟡 Gloss/word boundary misalignment',
	'bib-uncited': '🟡 Bibliography entry never cited',
	'ai-prose': '⚪ AI-prose tic (throat-clearing / buzzword)',
	'hardcoded-xref': '⚪ Hardcoded "Chapter N" — should use <Xr>',
	'cite-pageless': '⚪ Pageless citation',
	'attestation': '⚪ Unattested form (canonical)',
};

let md = `# Ainu Grammar — Human Review Queue

_Generated ${new Date().toISOString()} — ${openFindings.length} open findings (${decidedCount} already decided)._

## How to give feedback

Reply in chat with verdicts, e.g.:

\`\`\`
DOCTRINE-abc123: keep   (it's a cited analysis of Nam's)
DOCTRINE-def456: reword → "person-marker boundary"
ATTEST-ghi789: fix
SCAN-ai-jkl012: skip
\`\`\`

Or describe a whole category, e.g. "all cite-pageless for community sources → keep".

The \`decide.ts\` tool records verdicts to \`decisions.jsonl\`; they persist across loop cycles.

---

`;

for (const cat of catOrder) {
	const items = openFindings.filter(f => f.category === cat);
	if (items.length === 0) continue;
	md += `## ${catLabels[cat] || cat} — ${items.length}\n\n`;
	for (const f of items.slice(0, 30)) {
		md += `### \`${f.finding_id}\`\n`;
		md += `- **Chapter**: \`${f.chapter}\`${f.line ? `:${f.line}` : ''}  ·  **source**: ${f.source}\n`;
		md += `- **Issue**: ${f.message}\n`;
		if (f.context && f.context !== f.message) md += `- **Context**: ${f.context.slice(0, 220)}\n`;
		if (f.suggested_fix) md += `- **Suggested fix**: ${f.suggested_fix}\n`;
		md += `\n`;
	}
	if (items.length > 30) md += `_…and ${items.length - 30} more in this category._\n\n`;
}

writeFileSync(join(QA, 'review-queue.md'), md);

// ------------------------------------------------------------------ console

console.log(`merge-findings: ${findings.length} unified findings (${openFindings.length} open, ${decidedCount} decided)`);
console.log('By category (open):');
for (const [cat, s] of Object.entries(summary).sort((a, b) => b[1].open - a[1].open)) {
	console.log(`  ${cat}: ${s.open} open, ${s.decided} decided`);
}
console.log(`\nWrote: findings.json, review-queue.md`);
