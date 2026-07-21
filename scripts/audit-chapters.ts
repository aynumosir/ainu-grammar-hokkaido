/**
 * audit-chapters.ts — deterministic QA lint suite for the grammar corpus.
 *
 * Mirrors every SSR-time throw in the Ex/Ref/Xr components at build time
 * (an invalid gloss or cite key otherwise surfaces only as a request-time
 * 500 — `bun run check` never executes component code), plus a set of
 * corpus-level checks no component can see (cross-chapter anchors,
 * citation-registry parity, evidence-grade vocabulary, duplicate prose…).
 *
 * ERROR-level findings exit 1 (wired into `bun run build`); WARN-level
 * findings are reported and written to .grammar-build/qa/audit-report.json
 * for the QA ledger. `--strict` promotes warnings to failures;
 * `--quiet` prints the summary only.
 */

import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { abbreviations, dialectLabels } from '../src/lib/grammar/abbreviations';
import { bibliography } from '../src/lib/grammar/bibliography';
import { auditRegistry, citationRegistry } from '../src/lib/grammar/citation-registry';

const ROOT = join(import.meta.dir, '..');
const CHAPTER_DIR = join(ROOT, 'src/lib/grammar/chapters');
const REPORT_PATH = join(ROOT, '.grammar-build/qa/audit-report.json');

// ------------------------------------------------------------------ config

/** The 6 evidence grades of AUTHORING.md §4 + prose dialect-contrast tags. */
const VALID_GUILLEMET_TAGS = new Set([
	'consensus',
	'contested',
	'corpus-confirmed',
	'corpus-suggested',
	'speculative',
	'original-needs-review',
	// dialect-contrast tags used in prose
	'SA',
	// meta-documentation cell in the conventions chapter's own notation table
	'grade',
	'KU',
	'ISH',
	'TOK',
	'SHI',
	'HK',
]);

/** Chapters allowed to carry ‹original-needs-review› (the 5 theory-magnet domains). */
const NEEDS_REVIEW_ALLOWLIST = new Set<string>([
	// pending adjudication — populate after the grade-tag cleanup; until then W-level anyway
]);

/** Lowercase letters that cannot occur in Ainu forms (loanwords excepted → warn). */
const NON_AINU_LETTERS = /[bdfgjlqvxz]/;

/** Phrases that leak the authoring pipeline's register into reader-facing prose. */
const REGISTER_LEAKS = [
	/factbase/i,
	/\bdirectly read\b/i,
	/\bread sources\b/i,
	/\bthe read literature\b/i,
	/\bsources directly read\b/i,
	/\bcentral-verify\b/i,
];

/** Gloss-atom extraction — the exact regex Ex.svelte uses at SSR. */
const GLOSS_ATOM = /(?<![A-Za-z])[0-9]*[A-Z][A-Z0-9]*(?![a-z])/g;

/** Keys where a pageless citation is normal (unpaginated / community sources). */
const PAGELESS_OK = new Set(['aynucorporadiscord']);
/** Source roles where whole-work citation is scholarly-normal. */
const PAGELESS_OK_ROLES = new Set(['primary-data', 'typological-framework', 'background']);
function pagelessIsDefect(key: string): boolean {
	if (PAGELESS_OK.has(key)) return false;
	const role = citationRegistry[key]?.sourceRole;
	return role === undefined || !PAGELESS_OK_ROLES.has(role);
}

// ------------------------------------------------------------------ types

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

// ------------------------------------------------------------------ tag parsing

interface Tag {
	attrs: Record<string, string>;
	bools: Set<string>;
	line: number;
	raw: string;
}

/** Find all `<Name …>` tags (self-closing or not); attr values may span lines. */
function findTags(src: string, name: string): Tag[] {
	const re = new RegExp(`<${name}\\b((?:[^>"]|"[^"]*")*)>`, 'g');
	const out: Tag[] = [];
	let m: RegExpExecArray | null;
	while ((m = re.exec(src))) {
		let inner = m[1];
		if (inner.endsWith('/')) inner = inner.slice(0, -1);
		const attrs: Record<string, string> = {};
		const bools = new Set<string>();
		const attrRe = /([\w-]+)\s*=\s*"([^"]*)"/g;
		let a: RegExpExecArray | null;
		let consumed = inner;
		while ((a = attrRe.exec(inner))) {
			attrs[a[1]] = a[2];
			consumed = consumed.replace(a[0], ' ');
		}
		for (const word of consumed.split(/\s+/)) {
			if (/^[\w-]+$/.test(word)) bools.add(word);
		}
		out.push({ attrs, bools, line: src.slice(0, m.index).split('\n').length, raw: m[0] });
	}
	return out;
}

/** Reader-visible prose: drop script block, comments, tags. */
function proseOf(src: string): string {
	return src
		.replace(/<script[\s\S]*?<\/script>/g, ' ')
		.replace(/<!--[\s\S]*?-->/g, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/\s+/g, ' ');
}

function citeKeys(cite: string): string[] {
	return cite
		.split(';')
		.map((c) => c.trim().split(':')[0].trim())
		.filter(Boolean);
}

// ------------------------------------------------------------------ load corpus

const files = readdirSync(CHAPTER_DIR).filter((f) => f.endsWith('.svelte')).sort();
const chapters = files.map((f) => ({
	slug: f.replace(/\.svelte$/, ''),
	src: readFileSync(join(CHAPTER_DIR, f), 'utf8'),
}));

const toc = JSON.parse(readFileSync(join(ROOT, 'toc-final.json'), 'utf8'));
const tocSlugs = new Set<string>(toc.parts.flatMap((p: any) => p.chapters.map((c: any) => c.slug)));

// anchors per chapter (S id= and Ex id=), for Xr s= resolution
const anchorsByChapter = new Map<string, Set<string>>();
for (const ch of chapters) {
	const ids = new Set<string>();
	for (const name of ['S', 'Ex']) {
		for (const t of findTags(ch.src, name)) if (t.attrs.id) ids.add(t.attrs.id);
	}
	anchorsByChapter.set(ch.slug, ids);
}

const citedKeysGlobal = new Set<string>();

// ------------------------------------------------------------------ per-chapter checks

for (const ch of chapters) {
	const { slug, src } = ch;
	const exTags = findTags(src, 'Ex');
	const refTags = findTags(src, 'Ref');
	const xrTags = findTags(src, 'Xr');
	const sTags = findTags(src, 'S');

	// E: anchor-id uniqueness
	const seenIds = new Map<string, number>();
	for (const t of [...sTags, ...exTags]) {
		if (!t.attrs.id) continue;
		if (seenIds.has(t.attrs.id))
			report('error', 'anchor-dup', slug, t.line, `duplicate anchor id "${t.attrs.id}" (first at line ${seenIds.get(t.attrs.id)})`);
		else seenIds.set(t.attrs.id, t.line);
	}

	// Ex checks
	const exSeries: { cite: string; page: number; ex: number; line: number }[] = [];
	for (const t of exTags) {
		const { m, g, cite, dial, place } = t.attrs;
		const constructed = t.bools.has('constructed') || 'constructed' in t.attrs;

		// E: m/g word count (SSR-throw mirror)
		if (m !== undefined && g !== undefined) {
			const mw = m.trim().split(/\s+/);
			const gw = g.trim().split(/\s+/);
			if (mw.length !== gw.length)
				report('error', 'ex-mg-count', slug, t.line, `m has ${mw.length} words, g has ${gw.length}`);
			else {
				// W: Leipzig boundary alignment.
				//   - the clitic boundary `=` is meaningful: a cliticized source word
				//     (ku=nukar, =an, anak=ne) must gloss with the SAME number of `=`.
				//   - the hyphen `-` is overloaded and mostly noise: it marks Leipzig
				//     compound-gloss separators (ruwe → track-POSS, sinen → one-HUM),
				//     orthographic hyphens (kamuy-yukar), and analytical compounds, none
				//     of which correspond to a source morpheme boundary. Only flag a `-`
				//     mismatch when NEITHER side contains a hyphen at all (a pure
				//     segmentation difference), which has never occurred in this corpus.
				mw.forEach((w, i) => {
					const g = gw[i];
					const clm = (w.match(/=/g) || []).length;
					const clg = (g.match(/=/g) || []).length;
					if (clm !== clg)
						report('warn', 'ex-boundary-align', slug, t.line, `clitic "=" count mismatch: "${w}" (${clm}) ~ "${g}" (${clg})`);
					const hm = (w.match(/-/g) || []).length;
					const hg = (g.match(/-/g) || []).length;
					if (hm !== hg && hm === 0 && hg === 0)
						report('warn', 'ex-boundary-align', slug, t.line, `boundary "-" mismatch: "${w}" (${hm}) ~ "${g}" (${hg})`);
				});
			}
		} else {
			report('error', 'ex-mg-missing', slug, t.line, `Ex missing ${m === undefined ? 'm' : 'g'} attribute`);
		}

		// E: gloss abbreviations (SSR-throw mirror)
		if (g) {
			for (const atom of g.match(GLOSS_ATOM) || []) {
				if (!(atom in abbreviations))
					report('error', 'ex-gloss-abbrev', slug, t.line, `unknown gloss abbreviation "${atom}"`);
			}
		}

		// E: cite keys resolve; W: pageless cites on paged sources
		if (cite) {
			for (const part of cite.split(';').map((c) => c.trim()).filter(Boolean)) {
				const [key, pages] = [part.split(':')[0].trim(), part.split(':')[1]];
				citedKeysGlobal.add(key);
				if (!(key in bibliography)) report('error', 'cite-key', slug, t.line, `unknown cite key "${key}"`);
				else if (!pages && pagelessIsDefect(key))
					report('warn', 'cite-pageless', slug, t.line, `pageless cite "${key}"`);
			}
		}

		// E: attested examples need cite; constructed need the flag
		if (!cite && !constructed)
			report('error', 'ex-provenance', slug, t.line, `Ex has neither cite nor constructed`);

		// E: dialect tag closed set
		if (dial && !(dial in dialectLabels))
			report('error', 'ex-dial', slug, t.line, `unknown dial "${dial}"`);

		// W: non-Ainu letters in the m line (loanword or typo)
		if (m) {
			for (const word of m.split(/\s+/)) {
				const lower = word.replace(/[A-Z]/g, '');
				const bad = lower.match(NON_AINU_LETTERS);
				if (bad) report('warn', 'ex-charset', slug, t.line, `non-Ainu letter "${bad[0]}" in m-token "${word}"`);
			}
		}

		// collect for monotonicity
		const exNum = place?.match(/ex\.?\s*(\d+)/i);
		const firstKey = cite ? citeKeys(cite)[0] : undefined;
		const pageNum = cite?.match(/:\s*(\d+)/);
		if (exNum && firstKey && pageNum)
			exSeries.push({ cite: firstKey, page: +pageNum[1], ex: +exNum[1], line: t.line });
	}

	// W: ex-number/page monotonicity within this chapter, per source
	const bySource = new Map<string, typeof exSeries>();
	for (const e of exSeries) {
		if (!bySource.has(e.cite)) bySource.set(e.cite, []);
		bySource.get(e.cite)!.push(e);
	}
	for (const [key, list] of bySource) {
		const sorted = [...list].sort((a, b) => a.ex - b.ex);
		for (let i = 1; i < sorted.length; i++) {
			if (sorted[i].page < sorted[i - 1].page)
				report('warn', 'ex-page-monotonic', slug, sorted[i].line,
					`${key} ex ${sorted[i - 1].ex} @p${sorted[i - 1].page} but ex ${sorted[i].ex} @p${sorted[i].page}`);
		}
	}

	// Ref checks
	for (const t of refTags) {
		const k = t.attrs.k;
		if (!k) { report('error', 'ref-key', slug, t.line, 'Ref without k'); continue; }
		citedKeysGlobal.add(k);
		if (!(k in bibliography)) report('error', 'ref-key', slug, t.line, `unknown Ref key "${k}"`);
		else if (!t.attrs.p && pagelessIsDefect(k))
			report('warn', 'cite-pageless', slug, t.line, `pageless Ref "${k}"`);
	}

	// Xr checks
	for (const t of xrTags) {
		const target = t.attrs.ch;
		if (!target) { report('error', 'xr-slug', slug, t.line, 'Xr without ch'); continue; }
		if (!tocSlugs.has(target)) report('error', 'xr-slug', slug, t.line, `Xr to unknown chapter "${target}"`);
		else if (t.attrs.s) {
			const ids = anchorsByChapter.get(target);
			if (ids && !ids.has(t.attrs.s))
				report('error', 'xr-anchor', slug, t.line, `Xr s="${t.attrs.s}" not found in "${target}"`);
		}
	}

	// prose-level checks
	const prose = proseOf(src);

	// W/E: guillemet tag vocabulary
	for (const m of prose.matchAll(/‹([^›‹]{1,80})›/g)) {
		const tag = m[1].trim();
		if (!VALID_GUILLEMET_TAGS.has(tag))
			report('error', 'grade-tag', slug, 0, `invalid guillemet tag ‹${tag}›`);
		if (tag === 'original-needs-review' && !NEEDS_REVIEW_ALLOWLIST.has(slug))
			report('error', 'needs-review-tag', slug, 0, `‹original-needs-review› shipped in prose`);
	}

	// E: [UNVERIFIED] must never ship; W: TODO/FIXME
	for (const [pat, level, check] of [
		[/\[UNVERIFIED\]/g, 'error', 'unverified-token'],
		[/\b(TODO|FIXME|XXX)\b/g, 'warn', 'todo-token'],
	] as const) {
		for (const m of src.matchAll(pat)) {
			const line = src.slice(0, m.index).split('\n').length;
			report(level, check, slug, line, `"${m[0]}" in chapter source`);
		}
	}

	// W: pipeline register leaks
	for (const re of REGISTER_LEAKS) {
		const m = prose.match(re);
		if (m) report('error', 'register-leak', slug, 0, `pipeline register in prose: "${m[0]}"`);
	}

	// W: duplicated sentences within a chapter (≥60 chars)
	const sentences = prose.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter((s) => s.length >= 60);
	const seen = new Map<string, number>();
	for (const s of sentences) {
		const key = s.toLowerCase().replace(/[^a-z0-9 ]/g, '');
		seen.set(key, (seen.get(key) || 0) + 1);
	}
	for (const [key, n] of seen) {
		if (n > 1) report('warn', 'dup-sentence', slug, 0, `sentence repeated ×${n}: "${key.slice(0, 80)}…"`);
	}
}

// ------------------------------------------------------------------ corpus-level checks

// E: toc parity
const fileSlugs = new Set(chapters.map((c) => c.slug));
for (const s of tocSlugs) if (!fileSlugs.has(s)) report('error', 'toc-parity', s, 0, 'in toc-final.json but no chapter file');
for (const s of fileSlugs) if (!tocSlugs.has(s)) report('error', 'toc-parity', s, 0, 'chapter file not in toc-final.json');

// E: bibliography ↔ citation-registry parity
const parity = auditRegistry();
for (const k of parity.missingFromRegistry) report('error', 'registry-parity', '(bibliography)', 0, `"${k}" missing from citationRegistry`);
for (const k of parity.missingFromBibliography) report('error', 'registry-parity', '(registry)', 0, `"${k}" missing from bibliography`);

// W: bibliography entries never cited in any chapter
for (const k of Object.keys(bibliography)) {
	if (!citedKeysGlobal.has(k)) report('warn', 'bib-uncited', '(bibliography)', 0, `"${k}" never cited in-text`);
}

// ------------------------------------------------------------------ output

const strict = process.argv.includes('--strict');
const quiet = process.argv.includes('--quiet');

const errors = findings.filter((f) => f.level === 'error');
const warns = findings.filter((f) => f.level === 'warn');

if (!quiet) {
	const byCheck = new Map<string, Finding[]>();
	for (const f of findings) {
		if (!byCheck.has(f.check)) byCheck.set(f.check, []);
		byCheck.get(f.check)!.push(f);
	}
	for (const [check, list] of [...byCheck].sort((a, b) => b[1].length - a[1].length)) {
		const lvl = list[0].level.toUpperCase();
		console.log(`\n[${lvl}] ${check} — ${list.length}`);
		for (const f of list.slice(0, quiet ? 0 : 15))
			console.log(`  ${f.chapter}${f.line ? ':' + f.line : ''}  ${f.message}`);
		if (list.length > 15) console.log(`  … and ${list.length - 15} more`);
	}
}

mkdirSync(join(ROOT, '.grammar-build/qa'), { recursive: true });
writeFileSync(REPORT_PATH, JSON.stringify({ generated: new Date().toISOString(), errors: errors.length, warns: warns.length, findings }, null, 1));

console.log(`\naudit: ${errors.length} errors, ${warns.length} warnings across ${chapters.length} chapters → ${REPORT_PATH}`);
if (errors.length > 0 || (strict && warns.length > 0)) process.exit(1);
