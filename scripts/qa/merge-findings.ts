/**
 * merge-findings.ts — merge the Phase 1 sweep outputs (N models × 176 chapters)
 * into per-chapter candidate bundles with cross-model agreement counts.
 *
 * Two findings "agree" when they sit within ±3 lines in the same chapter and
 * share a category family. Agreement ≥2 models → candidate promoted; single-model
 * findings kept with lower default confidence for the verification lane.
 *
 * Writes .grammar-build/qa/findings/phase1-merged/<slug>.json and a summary.
 */

import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = join(import.meta.dir, '../..');
const P1 = join(ROOT, '.grammar-build/qa/findings/phase1');
const OUT = join(ROOT, '.grammar-build/qa/findings/phase1-merged');
mkdirSync(OUT, { recursive: true });

const CATEGORY_FAMILY: Record<string, string> = {
	'internal-inconsistency': 'consistency',
	'gloss-mismatch': 'gloss',
	'citation-hygiene': 'citation',
	'citation-defect': 'citation',
	'register-leak': 'register',
	copyedit: 'copyedit',
	orthography: 'orthography',
	'logic-error': 'consistency',
	'suspicious-fact': 'fact',
	'verify-quote': 'fact',
};

/** Generated apparatus chapters — Tier C, excluded from LLM findings. */
const GENERATED = new Set([
	'index-of-subjects',
	'index-of-grammatical-morphemes',
	'index-of-examples-sources-dialects',
	'consolidated-references-bibliography',
]);

const modelDirs = readdirSync(P1).filter((d) => !d.endsWith('.log') && !d.endsWith('.json'));
const slugs = new Set<string>();
for (const d of modelDirs)
	for (const f of readdirSync(join(P1, d)))
		if (f.endsWith('.json') && !GENERATED.has(f.replace(/\.json$/, ''))) slugs.add(f.replace(/\.json$/, ''));

interface F {
	lines: string;
	category: string;
	severity: string;
	quote?: string;
	issue: string;
	suggestion?: string | null;
	confidence?: number;
	model: string;
}

function firstLine(l: string | number | undefined): number {
	if (l === undefined) return 0;
	const m = String(l).match(/\d+/);
	return m ? +m[0] : 0;
}

let total = 0;
let promoted = 0;
const perChapter: Record<string, { candidates: number; agreed: number }> = {};

for (const slug of [...slugs].sort()) {
	const all: F[] = [];
	for (const d of modelDirs) {
		const p = join(P1, d, `${slug}.json`);
		if (existsSync(p)) {
			try {
				all.push(...JSON.parse(readFileSync(p, 'utf8')));
			} catch {
				console.error(`unparseable: ${p}`);
			}
		}
	}
	// cluster by (family, line ±3)
	const clusters: F[][] = [];
	for (const f of all) {
		const fam = CATEGORY_FAMILY[f.category] ?? 'other';
		const ln = firstLine(f.lines);
		const home = clusters.find((c) => {
			const cf = CATEGORY_FAMILY[c[0].category] ?? 'other';
			return cf === fam && Math.abs(firstLine(c[0].lines) - ln) <= 3;
		});
		if (home) home.push(f);
		else clusters.push([f]);
	}
	const merged = clusters.map((c, i) => {
		const models = [...new Set(c.map((f) => f.model))];
		const sev = c.some((f) => f.severity === 'high') ? 'high' : c.some((f) => f.severity === 'medium') ? 'medium' : 'low';
		return {
			id: `${slug}~p1#${String(i + 1).padStart(3, '0')}`,
			chapter: slug,
			lines: c[0].lines,
			category: c[0].category,
			severity: sev,
			agreement: models.length,
			models,
			issues: c.map((f) => ({ model: f.model, issue: f.issue, quote: f.quote, suggestion: f.suggestion, confidence: f.confidence })),
		};
	});
	merged.sort((a, b) => b.agreement - a.agreement || (a.severity > b.severity ? 1 : -1));
	writeFileSync(join(OUT, `${slug}.json`), JSON.stringify(merged, null, 1));
	total += merged.length;
	promoted += merged.filter((m) => m.agreement >= 2).length;
	perChapter[slug] = { candidates: merged.length, agreed: merged.filter((m) => m.agreement >= 2).length };
}

const top = Object.entries(perChapter).sort((a, b) => b[1].agreed - a[1].agreed).slice(0, 15);
console.log(`merged ${total} candidate clusters across ${slugs.size} chapters; ${promoted} with ≥2-model agreement`);
console.log('top chapters by agreed findings:');
for (const [s, v] of top) console.log(`  ${String(v.agreed).padStart(3)}  ${s} (${v.candidates} total)`);
writeFileSync(join(OUT, '_summary.json'), JSON.stringify({ total, promoted, perChapter }, null, 1));
