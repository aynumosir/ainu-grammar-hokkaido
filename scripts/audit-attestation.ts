/**
 * audit-attestation.ts — every Ainu form printed in the grammar must be
 * attested in the corpus or the morpheme database, or carry a registered
 * exception (AUTHORING.md §3 bar 13).
 *
 *   bun run attest            # report
 *   bun run attest --strict   # fail on warnings too
 *
 * Reads the resolution cache written by `bun run attest:gen`, re-runs the
 * shared extraction (attestation-extract.ts), and reports:
 *
 *   error — an unattested form at an <A> site (the dictionary link it renders
 *           is dead by construction)
 *   warn  — an unattested form at an <Ex> or inline site
 *   warn  — a registered exception that is now attested (stale — remove it)
 *
 * Findings land in .grammar-build/qa/attestation-report.json (same shape as
 * audit-chapters.ts). Deliberately NOT wired into `bun run build` while the
 * triage backlog stands — see the final line of the run output.
 */

import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { extractOccurrences } from './attestation-extract';
import { attestationExceptions } from '../src/lib/grammar/attestation-exceptions';
import type { CacheEntry } from './gen-attestation';

const ROOT = join(import.meta.dir, '..');
const CHAPTER_DIR = join(ROOT, 'src/lib/grammar/chapters');
const CACHE_PATH = join(ROOT, '.grammar-build/attestation-cache.json');
const REPORT_PATH = join(ROOT, '.grammar-build/qa/attestation-report.json');

if (!existsSync(CACHE_PATH)) {
	console.error(`attestation cache not found at ${CACHE_PATH} — run \`bun run attest:gen\` first`);
	process.exit(1);
}
const cache: { forms: Record<string, CacheEntry> } = JSON.parse(readFileSync(CACHE_PATH, 'utf8'));

interface Finding {
	level: 'error' | 'warn';
	check: string;
	chapter: string;
	line: number;
	message: string;
}

const findings: Finding[] = [];
function report(level: 'error' | 'warn', check: string, chapter: string, line: number, message: string) {
	findings.push({ level, check, chapter, line, message });
}

// ------------------------------------------------------------------ findings

const excepted = new Map(attestationExceptions.map((e) => [e.form, e]));
const seen = new Set<string>();

const files = readdirSync(CHAPTER_DIR).filter((f) => f.endsWith('.svelte')).sort();
for (const f of files) {
	const slug = f.replace(/\.svelte$/, '');
	const src = readFileSync(join(CHAPTER_DIR, f), 'utf8');
	for (const o of extractOccurrences(src, slug)) {
		const key = `${slug}${o.line}${o.site}${o.form}`;
		if (seen.has(key)) continue;
		seen.add(key);
		if (excepted.has(o.form)) continue;
		const entry = cache.forms[o.form];
		if (entry && entry.via !== null) continue;
		if (o.site === 'A') {
			report('error', 'attestation', slug, o.line, `unattested form "${o.form}" at <A> site (dead dictionary link)`);
		} else {
			report('warn', 'attestation', slug, o.line, `unattested form "${o.form}" at ${o.site} site`);
		}
	}
}

for (const e of attestationExceptions) {
	const entry = cache.forms[e.form];
	if (entry && entry.via !== null) {
		report('warn', 'stale-exception', '(attestation-exceptions)', 0, `"${e.form}" is now attested via ${entry.via} — remove the exception`);
	}
}

// ------------------------------------------------------------------ output

const strict = process.argv.includes('--strict');
const errors = findings.filter((f) => f.level === 'error');
const warns = findings.filter((f) => f.level === 'warn');

const byChapter = new Map<string, Finding[]>();
for (const f of findings) {
	if (!byChapter.has(f.chapter)) byChapter.set(f.chapter, []);
	byChapter.get(f.chapter)!.push(f);
}
for (const [chapter, list] of [...byChapter].sort((a, b) => b[1].length - a[1].length)) {
	console.log(`\n${chapter} — ${list.length}`);
	for (const f of list) {
		console.log(`  [${f.level.toUpperCase()}]${f.line ? ' L' + f.line : ''}  ${f.message}`);
	}
}

mkdirSync(join(ROOT, '.grammar-build/qa'), { recursive: true });
writeFileSync(REPORT_PATH, JSON.stringify({ generated: new Date().toISOString(), errors: errors.length, warns: warns.length, findings }, null, 1));

console.log(`\nattest: ${errors.length} errors, ${warns.length} warnings across ${byChapter.size} chapters → ${REPORT_PATH}`);
console.log('wire into build once the backlog is triaged (AUTHORING.md §3 bar 13)');
if (errors.length > 0 || (strict && findings.length > 0)) process.exit(1);
