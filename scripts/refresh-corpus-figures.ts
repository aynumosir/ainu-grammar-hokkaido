/**
 * refresh-corpus-figures.ts — keep the corpus token counts printed in the
 * grammar in step with the corpus itself.
 *
 * The corpus grows; every figure printed against an older snapshot silently
 * decays. This script re-queries each figure and either reports the drift
 * (`--check`, the CI gate) or rewrites it in place (`--write`).
 *
 * Two shapes are recognised:
 *   inline  — a form in <A>/<i lang="ain-Latn"> followed by "N tokens",
 *             optionally "(rank M)", within the same paragraph.
 *   table   — a column whose header is a bare count header (see COUNT_HEADERS);
 *             the form(s) come from the row's first cell. A row whose first
 *             cell holds several forms maps them left-to-right onto the count
 *             columns. Ratio columns are recomputed from the refreshed counts.
 *
 * A figure ATTRIBUTED to a source — a table whose caption cites one, or a
 * sentence carrying a <Ref> — measures that author's corpus, not ours. Those
 * are never rewritten: replacing them would put our numbers under someone
 * else's name. They are reported with what our corpus says, for comparison.
 *
 * Percentages, shares and derived rates are NOT touched: they are not raw
 * frequencies and cannot be recovered from the frequency endpoint. Multi-word
 * forms are counted as n-grams over the positional token layer, so a phrase
 * such as `ruwe ne` is checked like any single token — but it carries no rank,
 * because the corpus holds no ranked inventory of n-grams.
 *
 * Report → .grammar-build/qa/corpus-figures.json
 */

import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';

const ROOT = join(import.meta.dir, '..');
const CHAPTER_DIR = join(ROOT, 'src/lib/grammar/chapters');
const REPORT_PATH = join(ROOT, '.grammar-build/qa/corpus-figures.json');
const ENDPOINT = 'https://corpus.aynu.org/v1/freq/word?token=';
const NGRAM_ENDPOINT = 'https://corpus.aynu.org/v1/freq/ngram?tokens=';

const WRITE = process.argv.includes('--write');
const CONCURRENCY = 6;

/** Column headers that hold a raw corpus token count and nothing else. */
const COUNT_HEADERS = /^(corpus count|corpus tokens|tokens|count|frequency|singular tokens|plural tokens)$/i;
/** Columns derived from the counts in the same row. */
const RATIO_HEADERS = /(:|ratio)/i;

interface Figure {
	chapter: string;
	line: number;
	form: string;
	token: string;
	kind: 'inline' | 'table';
	stated: number;
	statedRank: number | null;
	actual?: number;
	actualRank?: number | null;
	drift?: number;
	status: 'match' | 'stale' | 'unresolved' | 'skipped' | 'attributed';
	reason?: string;
}

const strip = (s: string) => s.replace(/<[^>]*>/g, '').trim();
const num = (s: string) => Number(s.replace(/,/g, ''));
const fmt = (n: number, like: string) => (like.includes(',') ? n.toLocaleString('en-US') : String(n));
/** The corpus normalises away person clitics and edge hyphens. */
const normalise = (form: string) =>
	form.replace(/^(ku|a|e|ci|an|un|eci|i)=/, '').replace(/=/g, '').replace(/^-+|-+$/g, '').toLowerCase().trim();

const cache = new Map<string, { count: number; rank: number | null; found: boolean }>();
async function lookup(token: string) {
	if (cache.has(token)) return cache.get(token)!;
	// Multi-word forms are n-grams: the token-frequency table only holds single
	// tokens, so a phrase is counted from the positional token layer instead.
	const phrase = /\s/.test(token);
	const url = phrase ? NGRAM_ENDPOINT + encodeURIComponent(token) : ENDPOINT + encodeURIComponent(token);
	const res = await fetch(url);
	const body = (await res.json()) as { data?: { found: boolean; count: number | null; rank: number | null } };
	const value = { count: body.data?.count ?? 0, rank: phrase ? null : (body.data?.rank ?? null), found: Boolean(body.data?.found) };
	cache.set(token, value);
	return value;
}

// ---------------------------------------------------------------- extraction

interface Pending extends Figure {
	apply?: (src: string, actual: number, actualRank: number | null) => string;
}

function formsIn(fragment: string): string[] {
	return [...fragment.matchAll(/(?:lang="ain-Latn">|<A\b[^>]*\bw=")([^<"]+)/g)].map((m) => m[1].trim());
}

function extract(chapter: string, src: string): Pending[] {
	const out: Pending[] = [];
	const lineAt = (index: number) => src.slice(0, index).split('\n').length;

	// ---- inline: "… form … N tokens (rank M)"
	// The form must sit on the same line as the figure (or the line just above,
	// for a wrapped sentence) and within a short span of it. A looser search
	// silently attaches one form's figure to another form.
	const lines = src.split('\n');
	const lineOffsets: number[] = [];
	let running = 0;
	for (const line of lines) { lineOffsets.push(running); running += line.length + 1; }

	for (const m of src.matchAll(/([0-9][0-9,]*)\s*tokens(?:[^.<]{0,40}?rank\s*([0-9][0-9,]*))?/g)) {
		const at = m.index!;
		const line = lineAt(at);
		const lineStart = lineOffsets[line - 1];
		const scopeStart = line >= 2 ? lineOffsets[line - 2] : lineStart;
		const scope = src.slice(scopeStart, at);
		const forms = formsIn(scope);
		const form = forms.at(-1);
		const record = (status: Figure['status'], reason: string, f = form ?? '(unidentified)') =>
			out.push({ chapter, line, form: f, token: form ? normalise(form) : '', kind: 'inline', stated: num(m[1]), statedRank: m[2] ? num(m[2]) : null, status, reason });

		if (!form) { record('unresolved', 'no Ainu form on this line or the one above'); continue; }
		// Association guard. A figure is only safe to rewrite when its form sits
		// immediately before it: close by, in the same cell and the same sentence,
		// with no citation or other markup in between. Everything else is left for
		// a human — a mis-attached figure silently rewrites the wrong number.
		const lastFormAt = scope.lastIndexOf(form);
		const gap = lastFormAt >= 0 ? scope.slice(lastFormAt + form.length) : scope;
		if (gap.length > 60) { record('unresolved', 'form is too far from the figure to attach it safely'); continue; }
		if (/<\/?(td|p|tr|li)\b|<Ref\b|\.\s/.test(gap)) { record('unresolved', 'form and figure are separated by a cell, sentence or citation boundary'); continue; }
		if (/^[-=]|[-=]$/.test(form)) { record('skipped', 'bound morpheme — token frequency counts free tokens, not affix occurrences'); continue; }
		const token = normalise(form);

		// Attribution guard: if the sentence carrying this figure cites a source,
		// the number is that source's measurement.
		const sentStart = Math.max(
			src.lastIndexOf('<p>', at),
			src.lastIndexOf('. ', at),
			src.lastIndexOf('<td>', at),
		);
		const afterEnds = [src.indexOf('. ', at), src.indexOf('</p>', at), src.indexOf('</td>', at)].filter((i) => i > 0);
		const sentEnd = afterEnds.length ? Math.min(...afterEnds) : Math.min(src.length, at + 400);
		if (/<Ref\b/.test(src.slice(Math.max(0, sentStart), sentEnd))) {
			record('attributed', 'figure is cited to a source — it measures that corpus, not ours');
			continue;
		}
		const lead = src.slice(Math.max(0, at - 60), at);
		const hedged = /\b(roughly|approximately|about|around|some|nearly|over|under|~)\s*$/i.test(lead.trimEnd() + ' ');
		if (hedged && /00$/.test(m[1].replace(/,/g, ''))) {
			record('skipped', 'hedged round figure — restate the wording rather than swap in an exact count');
			continue;
		}
		const whole = m[0];
		out.push({
			chapter, line, form, token, kind: 'inline', stated: num(m[1]), statedRank: m[2] ? num(m[2]) : null, status: 'match',
			apply: (text, actual, actualRank) => {
				// Anchor both edits: a plain string replace would find the rank's digits
				// inside the freshly written count (6,362 contains "36").
				let replacement = whole.replace(/^[0-9][0-9,]*/, fmt(actual, m[1]));
				if (m[2] && actualRank != null && !/\s/.test(token)) {
					replacement = replacement.replace(/(rank\s*)[0-9][0-9,]*/, (_, lead: string) => lead + fmt(actualRank, m[2]!));
				}
				const idx = text.indexOf(whole, Math.max(0, at - 200));
				return idx < 0 ? text : text.slice(0, idx) + replacement + text.slice(idx + whole.length);
			},
		});
	}

	// ---- tables with a raw-count column
	for (const table of src.matchAll(/<table>[\s\S]*?<\/table>/g)) {
		const block = table[0];
		const headers = [...block.matchAll(/<th>([\s\S]*?)<\/th>/g)].map((h) => strip(h[1]));
		const countCols = headers.map((h, i) => (COUNT_HEADERS.test(h) ? i : -1)).filter((i) => i >= 0);
		if (!countCols.length) continue;
		const caption = block.match(/<caption>([\s\S]*?)<\/caption>/)?.[1] ?? '';
		const attributedTable = /<Ref\b/.test(caption);
		const ratioCols = headers.map((h, i) => (RATIO_HEADERS.test(h) ? i : -1)).filter((i) => i >= 0);

		for (const row of block.matchAll(/<tr>(?![\s\S]*?<th>)([\s\S]*?)<\/tr>/g)) {
			const cells = [...row[1].matchAll(/<td>([\s\S]*?)<\/td>/g)];
			if (!cells.length) continue;
			const forms = formsIn(cells[0][1]);
			const rowLine = lineAt(table.index! + row.index!);
			if (forms.length !== countCols.length) {
				out.push({ chapter, line: rowLine, form: forms.join(' / ') || '(none)', token: '', kind: 'table', stated: 0, statedRank: null, status: 'unresolved', reason: `${forms.length} form(s) against ${countCols.length} count column(s)` });
				continue;
			}
			const rowText = row[0];
			const rowAt = table.index! + row.index!;
			// every figure in this row, so the owning rewrite can read all of their
			// resolved counts (lookups all finish before any rewrite runs)
			const rowFigs: { col: number; fig: Pending }[] = [];
			let rowClaimed = false;
			countCols.forEach((col, i) => {
				const cell = cells[col];
				if (!cell) return;
				const raw = strip(cell[1]);
				if (!/^[0-9][0-9,]*$/.test(raw)) return;
				const token = normalise(forms[i]);
				if (/^[-=]|[-=]$/.test(forms[i])) {
					out.push({ chapter, line: rowLine, form: forms[i], token, kind: 'table', stated: num(raw), statedRank: null, status: 'skipped', reason: 'bound morpheme — token frequency counts free tokens' });
					return;
				}
				// The first figure in a row owns the rewrite for the whole row, so that
				// every refreshed count and any derived ratio land in one edit.
				if (attributedTable) {
					out.push({ chapter, line: rowLine, form: forms[i], token, kind: 'table', stated: num(raw), statedRank: null, status: 'attributed', reason: 'table is cited to a source — its figures measure that corpus, not ours' });
					return;
				}
				const owns = !rowClaimed;
				rowClaimed = true;
				const fig: Pending = {
					chapter, line: rowLine, form: forms[i], token, kind: 'table', stated: num(raw), statedRank: null, status: 'match',
					apply: (text) => {
						if (!owns) return text;
						const resolved = new Map<number, number>();
						for (const entry of rowFigs) {
							if (entry.fig.status === 'stale' && entry.fig.actual != null) resolved.set(entry.col, entry.fig.actual);
						}
						if (!resolved.size) return text;
						let next = rowText;
						for (const [c, value] of resolved) {
							const original = strip(cells[c][1]);
							next = next.replace(cells[c][0], cells[c][0].replace(original, fmt(value, original)));
						}
						for (const rc of ratioCols) {
							const rcell = cells[rc];
							if (!rcell || countCols.length !== 2) continue;
							const a = resolved.get(countCols[0]) ?? num(strip(cells[countCols[0]][1]));
							const b = resolved.get(countCols[1]) ?? num(strip(cells[countCols[1]][1]));
							if (!b) continue;
							const old = strip(rcell[1]);
							if (!/^[0-9.]+$/.test(old)) continue;
							const decimals = (old.split('.')[1] ?? '').length || 2;
							next = next.replace(rcell[0], rcell[0].replace(old, (a / b).toFixed(decimals)));
						}
						const at = text.indexOf(rowText, Math.max(0, rowAt - 400));
						return at < 0 ? text : text.slice(0, at) + next + text.slice(at + rowText.length);
					},
				};
				rowFigs.push({ col, fig });
				out.push(fig);
			});
		}
	}
	return out;
}

// ---------------------------------------------------------------- run

const figures: Figure[] = [];
const chapters = readdirSync(CHAPTER_DIR).filter((f) => f.endsWith('.svelte')).sort();

for (const file of chapters) {
	const chapter = file.replace('.svelte', '');
	const path = join(CHAPTER_DIR, file);
	let src = readFileSync(path, 'utf8');
	const pending = extract(chapter, src);
	if (!pending.length) continue;

	const resolvable = pending.filter((p) => (p.status === 'match' || p.status === 'attributed') && p.token);
	let index = 0;
	await Promise.all(
		Array.from({ length: Math.min(CONCURRENCY, resolvable.length) }, async () => {
			while (index < resolvable.length) {
				const fig = resolvable[index++];
				try {
					const { count, rank, found } = await lookup(fig.token);
					fig.actual = count;
					fig.actualRank = rank;
					// an attributed figure keeps its status: we record what our corpus
					// says for comparison, but the printed number is not ours to change
					if (fig.status === 'attributed') {
						fig.drift = fig.stated ? Math.round(((count - fig.stated) / fig.stated) * 100) : 0;
						continue;
					}
					if (!found) { fig.status = 'unresolved'; fig.reason = 'form not in the corpus'; continue; }
					fig.drift = fig.stated ? Math.round(((count - fig.stated) / fig.stated) * 100) : 0;
					const rankStale = fig.statedRank != null && rank != null && fig.statedRank !== rank;
					fig.status = count === fig.stated && !rankStale ? 'match' : 'stale';
				} catch (error) {
					fig.status = 'unresolved';
					fig.reason = `lookup failed: ${String(error).slice(0, 60)}`;
				}
			}
		}),
	);

	// rewrite bottom-up so byte offsets stay valid
	const stale = pending.filter((p) => p.status === 'stale' && p.apply);
	if (WRITE && stale.length) {
		for (const fig of [...stale].sort((a, b) => b.line - a.line)) {
			src = fig.apply!(src, fig.actual!, fig.actualRank ?? null);
		}
		writeFileSync(path, src);
	}
	figures.push(...pending.map(({ apply, ...rest }) => rest));
}

const stale = figures.filter((f) => f.status === 'stale');
const unresolved = figures.filter((f) => f.status === 'unresolved');
const skipped = figures.filter((f) => f.status === 'skipped');
const attributed = figures.filter((f) => f.status === 'attributed');
const matched = figures.filter((f) => f.status === 'match');

mkdirSync(dirname(REPORT_PATH), { recursive: true });
writeFileSync(REPORT_PATH, JSON.stringify({ generated: new Date().toISOString(), counts: { matched: matched.length, stale: stale.length, unresolved: unresolved.length, skipped: skipped.length, attributed: attributed.length }, figures }, null, '\t'));

console.log(`corpus figures: ${matched.length} current, ${stale.length} stale, ${attributed.length} attributed elsewhere, ${unresolved.length} unresolved, ${skipped.length} not checkable`);
for (const f of [...stale].sort((a, b) => Math.abs(b.drift ?? 0) - Math.abs(a.drift ?? 0)).slice(0, 20)) {
	console.log(`  ${WRITE ? 'updated' : 'stale  '} ${f.form.padEnd(16)} ${String(f.stated).padStart(7)} → ${String(f.actual).padStart(7)} (${(f.drift ?? 0) > 0 ? '+' : ''}${f.drift}%)  ${f.chapter}:${f.line}`);
}
for (const f of unresolved.slice(0, 10)) console.log(`  unresolved ${f.form.padEnd(16)} ${f.chapter}:${f.line} — ${f.reason}`);
for (const f of skipped.slice(0, 10)) console.log(`  skipped    ${f.form.padEnd(16)} ${f.chapter}:${f.line} — ${f.reason}`);
for (const f of attributed.slice(0, 12)) console.log(`  attributed ${f.form.padEnd(16)} prints ${String(f.stated).padStart(6)}, our corpus has ${String(f.actual ?? '?').padStart(6)}  ${f.chapter}:${f.line}`);
console.log(`→ ${REPORT_PATH}`);

if (!WRITE && stale.length) {
	console.log('\nrun `bun run figures:write` to bring these in line with the corpus');
	process.exit(1);
}
