/**
 * extract.ts — statements from one source's OCR dump.
 *
 *   bun scripts/kb/extract.ts <key> [--model google/gemini-3.8-flash] [--concurrency 4]
 *                             [--chunk 5500] [--limit N] [--from LEAF] [--to LEAF]
 *
 * Reads kb/assets/<key>.json (which OCR directory, which leaves carry which printed
 * page), groups consecutive leaves into chunks of about `--chunk` characters, and asks
 * a model for the statements each chunk commits to: one plain English and one
 * Japanese sentence, a type, a stance, a scope, the forms named, up to three chapter
 * topics of the first edition, and a verbatim anchor span copied from the input.
 *
 * The anchor is then searched in the OCR text of the chunk's leaves: an exact hit
 * (after whitespace normalisation) or a fuzzy hit on character bigrams gives the
 * leaf and a match score. A statement whose anchor matches at 0.85 or better is
 * `anchored`; otherwise it stays `extracted` with its score. The model never
 * produces page numbers: printed pages come from the asset's page map.
 *
 * Output is appended to kb/statements/<key>.jsonl; progress per chunk is kept in
 * kb/statements/.progress/<key>.json so a run can resume. The run is recorded in
 * kb/activities/extract.jsonl with the model, prompt version, counts and cost.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { chat, PRICES, usage } from '../qa/llm';
import { BOOKS_ROOT, KB, ROOT, readJsonl, writeJson } from './lib';

PRICES['google/gemini-3.8-flash'] = [0.75, 3.75];
PRICES['google/gemini-3.5-flash-lite'] = [0.3, 2.5];
PRICES['deepseek/deepseek-v4-flash'] = [0.088, 0.177];

const PROMPT_VERSION = 'extract-v1.0';

// ───────────────────────── args ─────────────────────────
const argv = process.argv.slice(2);
const key = argv.find((a) => !a.startsWith('--'));
if (!key) {
	console.error('usage: bun scripts/kb/extract.ts <key> [--model M] [--concurrency N] [--chunk CHARS] [--limit N] [--from LEAF] [--to LEAF]');
	process.exit(2);
}
const opt = (name: string, dflt: string) => {
	const i = argv.indexOf(`--${name}`);
	return i >= 0 && argv[i + 1] ? argv[i + 1] : dflt;
};
const MODEL = opt('model', 'google/gemini-3.8-flash');
const CONCURRENCY = +opt('concurrency', '4');
const CHUNK = +opt('chunk', '5500');
const LIMIT = +opt('limit', '0');
const FROM = +opt('from', '0');
const TO = +opt('to', '999999');

// ───────────────────────── inputs ─────────────────────────
const assetPath = join(KB, 'assets', `${key}.json`);
if (!existsSync(assetPath)) {
	console.error(`no asset for ${key} (run import-assets.ts)`);
	process.exit(2);
}
const asset = JSON.parse(readFileSync(assetPath, 'utf8')) as {
	id: string;
	source: string;
	root?: 'books' | 'kb';
	dir: string;
	engine: string;
	leaf_ranges?: [number, number][];
	pagemap: Record<string, number | string>;
};
const dir = join(asset.root === 'kb' ? KB : BOOKS_ROOT, asset.dir);
const inRanges = (n: number) => !asset.leaf_ranges?.length || asset.leaf_ranges.some(([a, b]) => n >= a && n <= b);
const leafFiles = readdirSync(dir)
	.map((f) => f.match(/^page-(\d+)\.txt$/))
	.filter((m): m is RegExpMatchArray => !!m)
	.map((m) => +m[1])
	.filter((n) => n >= FROM && n <= TO && inRanges(n))
	.sort((a, b) => a - b);
const leafText = new Map<number, string>();
for (const n of leafFiles) leafText.set(n, readFileSync(join(dir, `page-${String(n).padStart(4, '0')}.txt`), 'utf8'));

const sources = readJsonl<{ id: string; key: string; cite_author: string; year: string; title: string; lang: string }>(join(KB, 'registries/sources.jsonl'));
const source = sources.find((s) => s.key === key);
if (!source) {
	console.error(`no source record for ${key}`);
	process.exit(2);
}
const topics = readJsonl<{ id: string; kind: string; label: { en: string }; broader: string[]; chapter?: string; order: number }>(join(KB, 'registries/topics.jsonl'));
const parts = topics.filter((t) => t.kind === 'part').sort((a, b) => a.order - b.order);
const chapters = topics.filter((t) => t.kind === 'chapter').sort((a, b) => a.order - b.order);
const chapterIdBySlug = new Map(chapters.map((c) => [c.chapter!, c.id]));
const tocText = parts
	.map((p) => `${p.label.en}\n` + chapters.filter((c) => c.broader[0] === p.id).map((c) => `  ${c.chapter} — ${c.label.en}`).join('\n'))
	.join('\n');
const doculects = readJsonl<{ id: string; path: string; label: { en: string; ja: string } }>(join(KB, 'registries/doculects.jsonl'));
const doculectText = doculects.map((d) => `  ${d.path} (${d.label.ja}, ${d.label.en})`).join('\n');
const doculectIds = new Set(doculects.map((d) => d.path));

// ───────────────────────── chunks ─────────────────────────
interface Chunk {
	id: string;
	leaves: number[];
	text: string;
}
const chunks: Chunk[] = [];
{
	let cur: number[] = [];
	let size = 0;
	const flush = () => {
		if (!cur.length) return;
		chunks.push({
			id: `l${String(cur[0]).padStart(4, '0')}-l${String(cur[cur.length - 1]).padStart(4, '0')}`,
			leaves: [...cur],
			text: cur.map((n) => `⟦leaf ${n}${asset.pagemap[n] != null ? ` · printed p.${asset.pagemap[n]}` : ''}⟧\n${leafText.get(n)!.trim()}`).join('\n\n')
		});
		cur = [];
		size = 0;
	};
	for (const n of leafFiles) {
		const t = leafText.get(n)!.trim();
		if (t.length < 40) continue;
		cur.push(n);
		size += t.length;
		if (size >= CHUNK) flush();
	}
	flush();
}

// ───────────────────────── prompt ─────────────────────────
const SYSTEM = `You extract the descriptive statements that a grammar of the Ainu language makes, page by page, so that they can be stored as records and later verified against the page.

Source: ${source.cite_author} (${source.year}), ${source.title}.
Input: the OCR text of consecutive pages. Each page starts with a marker ⟦leaf N · printed p.P⟧. OCR noise is possible.

Output: a JSON array (and nothing else) of statement objects:
{
  "en": one plain English sentence stating one proposition about the language that this source commits to; self-contained; Ainu forms in Latin transcription as the source writes them,
  "ja": the same proposition in one Japanese sentence,
  "type": one of existence | form-function | membership | distribution | ordering | paradigm-cell | alternation | frequency | variation | diachrony | analysis | judgement | absence | terminology | other,
  "stance": one of asserts | proposes | doubts | rejects | reports | presupposes   (reports = the source attributes the view to another author; then add "reported": "author, year"),
  "scope": { "doculects": [paths from the list below, as the source states them; use "hokkaido" when the source speaks of Hokkaido Ainu generally; leave empty when unstated],
             "quantifier": all | none | exists | generic | usually | measured | example_only | unstated,
             "modality": necessary | possible | actual | unstated,
             "conditions": [short strings for stated conditions or exceptions] },
  "forms": [Ainu forms or morphemes the statement is about, Latin transcription],
  "topics": [0 to 3 chapter slugs from the table of contents below that the statement belongs to],
  "anchor": { "exact": a verbatim span copied from the input (20 to 240 characters) in which the source makes this statement; copy characters exactly, never paraphrase or translate,
              "leaf": the leaf number of the marker the span is under }
}

Types: existence = a form, category or construction exists; form-function = a form or construction expresses a function or meaning; membership = a word or form belongs to a class, by a diagnostic; distribution = where a form occurs, its conditions, its exceptions; ordering = slots, precedence, adjacency in a template; paradigm-cell = the exponent of a person, number or role cell; alternation = an alternation or sandhi and its conditioning; frequency = a count or proportion reported by the source; variation = a difference between dialects, speakers, genres or periods; diachrony = an origin, pathway or reconstruction; analysis = a higher-level analytic position (alignment type, wordhood, clitic status); judgement = grammaticality or acceptability of a given example; absence = the source states that something does not exist or does not occur; terminology = what the source calls a category or form; other = a statement that fits none.

Rules:
- One proposition per object. Split "X and Y" into two objects when each can be true or false on its own.
- Extract every distinct descriptive statement in the text, including small ones (an allomorph, an exception, a gloss of a morpheme's function). Skip page furniture, tables of contents, bibliographies, exercises, and bare example sentences without a descriptive claim. Descriptions of what an example shows are statements.
- Keep the source's own terminology in "ja" and translate it plainly in "en"; do not silently equate the source's categories with other authors' categories.
- Never widen or narrow the dialect scope beyond what the source says.
- The anchor must be an exact substring of the input. Prefer the sentence that states the claim over a heading.

Doculect paths:
${doculectText}

Table of contents (chapter slugs to route to):
${tocText}`;

// ───────────────────────── anchoring ─────────────────────────
const norm = (s: string) => s.replace(/\s+/g, '').replace(/[“”"]/g, '"').replace(/[‘’']/g, "'");
function bigrams(s: string): Map<string, number> {
	const m = new Map<string, number>();
	for (let i = 0; i < s.length - 1; i++) {
		const b = s.slice(i, i + 2);
		m.set(b, (m.get(b) ?? 0) + 1);
	}
	return m;
}
function dice(a: Map<string, number>, b: Map<string, number>): number {
	let inter = 0;
	let na = 0;
	let nb = 0;
	for (const v of a.values()) na += v;
	for (const v of b.values()) nb += v;
	for (const [k, v] of a) inter += Math.min(v, b.get(k) ?? 0);
	return na + nb ? (2 * inter) / (na + nb) : 0;
}
const sentenceCache = new Map<number, { s: string; bg: Map<string, number> }[]>();
function leafSentences(n: number) {
	let list = sentenceCache.get(n);
	if (!list) {
		const raw = leafText.get(n) ?? '';
		list = raw
			.split(/(?<=[。．.!?！？])|\n/)
			.map((s) => norm(s))
			.filter((s) => s.length >= 8)
			.map((s) => ({ s, bg: bigrams(s) }));
		sentenceCache.set(n, list);
	}
	return list;
}
function anchor(exact: string, leaves: number[], hint: number | null): { leaf: number | null; match: number; method: string } {
	const q = norm(exact);
	if (!q) return { leaf: null, match: 0, method: 'empty' };
	const order = hint != null && leaves.includes(hint) ? [hint, ...leaves.filter((l) => l !== hint)] : leaves;
	for (const n of order) if (norm(leafText.get(n) ?? '').includes(q)) return { leaf: n, match: 1, method: 'exact' };
	const qb = bigrams(q);
	let best = { leaf: null as number | null, match: 0 };
	for (const n of order) {
		for (const { bg } of leafSentences(n)) {
			const d = dice(qb, bg);
			if (d > best.match) best = { leaf: n, match: d };
		}
		// windows of two sentences for anchors that span a boundary
		const ss = leafSentences(n);
		for (let i = 0; i + 1 < ss.length; i++) {
			const d = dice(qb, bigrams(ss[i].s + ss[i + 1].s));
			if (d > best.match) best = { leaf: n, match: d };
		}
	}
	return { ...best, method: 'bigram-dice' };
}

// ───────────────────────── run ─────────────────────────
const outPath = join(KB, 'statements', `${key}.jsonl`);
const progressPath = join(KB, 'statements/.progress', `${key}.json`);
mkdirSync(join(KB, 'statements/.progress'), { recursive: true });
const progress: Record<string, { statements: number; at: string }> = existsSync(progressPath) ? JSON.parse(readFileSync(progressPath, 'utf8')) : {};
// --retry sends again the chunks whose completion could not be parsed
const RETRY = argv.includes('--retry');
const todo = chunks.filter((c) => !progress[c.id] || (RETRY && progress[c.id].statements < 0)).slice(0, LIMIT || undefined);
console.log(`${key}: ${leafFiles.length} leaves, ${chunks.length} chunks, ${todo.length} to do, model ${MODEL}, concurrency ${CONCURRENCY}`);
const started = new Date().toISOString();
const engineShort = asset.engine;
let total = 0;
let anchored = 0;

function parseArray(raw: string): Record<string, unknown>[] {
	let s = raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
	const a = s.indexOf('[');
	const b = s.lastIndexOf(']');
	if (a < 0 || b < 0) throw new Error('no JSON array in completion');
	s = s.slice(a, b + 1);
	return JSON.parse(s);
}

async function runChunk(c: Chunk) {
	const raw = await chat(MODEL, SYSTEM, c.text, { maxTokens: 24000, temperature: 0.1, retries: 3 });
	let items: Record<string, unknown>[];
	try {
		items = parseArray(raw);
	} catch (e) {
		console.error(`${c.id}: unparsable completion (${(e as Error).message}); skipped`);
		progress[c.id] = { statements: -1, at: new Date().toISOString() };
		writeJson(progressPath, progress, true);
		return;
	}
	const perLeaf = new Map<number, number>();
	const rows: Record<string, unknown>[] = [];
	for (const it of items) {
		const ex = String((it.anchor as { exact?: string })?.exact ?? '');
		const hint = Number((it.anchor as { leaf?: number })?.leaf ?? NaN);
		const a = anchor(ex, c.leaves, Number.isFinite(hint) ? hint : null);
		const leaf = a.leaf ?? (Number.isFinite(hint) && c.leaves.includes(hint) ? hint : c.leaves[0]);
		const n = (perLeaf.get(leaf) ?? 0) + 1;
		perLeaf.set(leaf, n);
		const scope = (it.scope as Record<string, unknown>) ?? {};
		const docs = Array.isArray(scope.doculects) ? (scope.doculects as string[]).map((d) => String(d).replace(/^doculect:/, '')).filter((d) => doculectIds.has(d)).map((d) => `doculect:${d}`) : [];
		const topicsRouted = Array.isArray(it.topics) ? (it.topics as string[]).map((s) => chapterIdBySlug.get(String(s))).filter((x): x is string => !!x).slice(0, 3) : [];
		const status = a.match >= 0.85 ? 'anchored' : 'extracted';
		if (status === 'anchored') anchored++;
		rows.push({
			id: `stmt:${key}@${engineShort}/l${String(leaf).padStart(4, '0')}-${String(n).padStart(2, '0')}`,
			source: source!.id,
			asset: asset.id,
			locator: { leaf, printed: asset.pagemap[leaf] ?? null, section: null, example: null },
			anchor: { exact: ex, match: Math.round(a.match * 1000) / 1000, method: a.method, leaf: a.leaf ?? leaf },
			statement: { en: String(it.en ?? ''), ja: String(it.ja ?? '') },
			type: typeOf(it.type),
			stance: stanceOf(it.stance),
			scope: {
				doculects: docs,
				quantifier: pick(scope.quantifier, ['all', 'none', 'exists', 'generic', 'usually', 'measured', 'example_only', 'unstated'], 'unstated'),
				modality: pick(scope.modality, ['necessary', 'possible', 'actual', 'unstated'], 'unstated'),
				conditions: Array.isArray(scope.conditions) ? (scope.conditions as unknown[]).map(String).slice(0, 6) : []
			},
			hedge: null,
			reported: it.reported ? { note: String(it.reported) } : null,
			forms: Array.isArray(it.forms) ? (it.forms as unknown[]).map(String).slice(0, 12) : [],
			topics: topicsRouted,
			extracted_by: `act:extract/${key}/${started.replace(/[:.]/g, '-')}`,
			verification: { anchor: a.match >= 0.85 ? 'pass' : 'fail', image: 'not-applicable', entailment: null, human: null },
			status
		});
	}
	// append atomically per chunk
	const line = rows.map((r) => JSON.stringify(r)).join('\n') + (rows.length ? '\n' : '');
	writeFileSync(outPath, line, { flag: 'a' });
	total += rows.length;
	progress[c.id] = { statements: rows.length, at: new Date().toISOString() };
	writeJson(progressPath, progress, true);
	console.log(`${c.id}: ${rows.length} statements (${rows.filter((r) => r.status === 'anchored').length} anchored) · $${usage.costUsd.toFixed(3)} so far`);
}

const TYPES = ['existence', 'form-function', 'membership', 'distribution', 'ordering', 'paradigm-cell', 'alternation', 'frequency', 'variation', 'diachrony', 'analysis', 'judgement', 'absence', 'terminology', 'other'];
const STANCES = ['asserts', 'proposes', 'doubts', 'rejects', 'reports', 'presupposes'];
const typeOf = (v: unknown) => (TYPES.includes(String(v)) ? String(v) : 'other');
const stanceOf = (v: unknown) => (STANCES.includes(String(v)) ? String(v) : 'asserts');
const pick = (v: unknown, allowed: string[], dflt: string) => (allowed.includes(String(v)) ? String(v) : dflt);

mkdirSync(join(KB, 'statements'), { recursive: true });
let cursor = 0;
async function worker() {
	while (cursor < todo.length) {
		const c = todo[cursor++];
		try {
			await runChunk(c);
		} catch (e) {
			console.error(`${c.id}: ${(e as Error).message}`);
		}
	}
}
await Promise.all(Array.from({ length: Math.min(CONCURRENCY, todo.length) }, worker));

const activity = {
	id: `act:extract/${key}/${started.replace(/[:.]/g, '-')}`,
	kind: 'extract',
	agent: 'agent:pipeline/extract-v1',
	model: MODEL,
	prompt_version: PROMPT_VERSION,
	started,
	ended: new Date().toISOString(),
	inputs: { source: source.id, asset: asset.id, chunks: todo.length, leaves: leafFiles.length, chunk_chars: CHUNK },
	outputs: { statements: total, anchored, prompt_tokens: usage.promptTokens, completion_tokens: usage.completionTokens },
	cost_usd: Math.round(usage.costUsd * 1000) / 1000
};
mkdirSync(join(KB, 'activities'), { recursive: true });
writeFileSync(join(KB, 'activities/extract.jsonl'), JSON.stringify(activity) + '\n', { flag: 'a' });
console.log(`done: ${total} statements, ${anchored} anchored, $${usage.costUsd.toFixed(3)} (${usage.promptTokens} in / ${usage.completionTokens} out)`);
void ROOT;
