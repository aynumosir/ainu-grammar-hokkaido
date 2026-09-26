/**
 * verify.ts — entailment check of extracted statements by a model of another family.
 *
 *   bun scripts/kb/verify.ts <key> [--model deepseek/deepseek-v4-flash] [--concurrency 4] [--batch 8]
 *
 * For every anchored statement in kb/statements/<key>.jsonl that has no entailment
 * verdict yet, the verifier sees the anchor span with about 300 characters of the
 * OCR text before and after it, and the normalised statement, and answers whether
 * the passage entails it: yes, partial or no, with the words it relied on. A `yes`
 * on an anchored statement moves it to status `checked`. The file is rewritten in
 * place; the run is recorded in kb/activities/verify.jsonl.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { chat, PRICES, usage } from '../qa/llm';
import { BOOKS_ROOT, KB, readJsonl, writeJsonl } from './lib';

PRICES['deepseek/deepseek-v4-flash'] = [0.088, 0.177];
PRICES['google/gemini-3.5-flash-lite'] = [0.3, 2.5];
const PROMPT_VERSION = 'verify-v1.0';

const argv = process.argv.slice(2);
const key = argv.find((a) => !a.startsWith('--'));
if (!key) {
	console.error('usage: bun scripts/kb/verify.ts <key> [--model M] [--concurrency N] [--batch N]');
	process.exit(2);
}
const opt = (name: string, dflt: string) => {
	const i = argv.indexOf(`--${name}`);
	return i >= 0 && argv[i + 1] ? argv[i + 1] : dflt;
};
const MODEL = opt('model', 'deepseek/deepseek-v4-flash');
const CONCURRENCY = +opt('concurrency', '4');
const BATCH = +opt('batch', '8');

type Statement = Record<string, any>;
const path = join(KB, 'statements', `${key}.jsonl`);
if (!existsSync(path)) {
	console.error(`no statements for ${key}`);
	process.exit(2);
}
const rows = readJsonl<Statement>(path);
const asset = JSON.parse(readFileSync(join(KB, 'assets', `${key}.json`), 'utf8')) as { dir: string; root?: string };
const dir = join(asset.root === 'kb' ? KB : BOOKS_ROOT, asset.dir);
const leafCache = new Map<number, string>();
const leaf = (n: number) => {
	let t = leafCache.get(n);
	if (t === undefined) {
		const p = join(dir, `page-${String(n).padStart(4, '0')}.txt`);
		t = existsSync(p) ? readFileSync(p, 'utf8') : '';
		leafCache.set(n, t);
	}
	return t;
};
const norm = (s: string) => s.replace(/\s+/g, '');

/** The anchor with context: locate the normalised anchor in the leaf and cut ±300 chars of the raw text. */
function passage(st: Statement): string {
	const n = st.anchor?.leaf ?? st.locator?.leaf;
	const raw = leaf(n);
	const exact = String(st.anchor?.exact ?? '');
	const idx = raw.indexOf(exact);
	if (idx >= 0) return raw.slice(Math.max(0, idx - 300), idx + exact.length + 300);
	// fall back to a normalised search with a coarse window
	const nraw = norm(raw);
	const j = nraw.indexOf(norm(exact));
	if (j >= 0) {
		// map back roughly by proportion
		const start = Math.max(0, Math.floor((j / nraw.length) * raw.length) - 400);
		return raw.slice(start, start + exact.length + 800);
	}
	return exact;
}

const todo = rows.filter((st) => st.status === 'anchored' && !st.verification?.entailment);
console.log(`${key}: ${rows.length} statements, ${todo.length} to verify with ${MODEL}`);
const started = new Date().toISOString();
const SYSTEM = `You check whether a passage from a published grammar of the Ainu language entails a statement that was extracted from it. The passage is OCR text (noise possible) and may be in Japanese; the statement is in English with a Japanese rendering.

For each item answer:
- "yes": the passage states the statement or directly implies it, at the same scope (same dialects, same conditions, same strength);
- "partial": the passage supports a narrower, weaker or differently scoped version, or supports part of a compound statement;
- "no": the passage does not support the statement, or contradicts it.
Quote the words of the passage you relied on (verbatim, at most 200 characters). Judge only from the passage; do not use outside knowledge of Ainu to fill gaps.

Return a JSON array and nothing else: [{"i": <item number>, "verdict": "yes"|"partial"|"no", "quote": "...", "note": "<one short sentence, only when partial or no>"}]`;

const batches: Statement[][] = [];
for (let i = 0; i < todo.length; i += BATCH) batches.push(todo.slice(i, i + BATCH));
let cursor = 0;
let done = 0;
const counts = { yes: 0, partial: 0, no: 0, unparsed: 0 };

function parseArray(raw: string): Record<string, unknown>[] {
	const s = raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
	const a = s.indexOf('[');
	const b = s.lastIndexOf(']');
	if (a < 0 || b < 0) throw new Error('no JSON array');
	return JSON.parse(s.slice(a, b + 1));
}

async function worker() {
	while (cursor < batches.length) {
		const batch = batches[cursor++];
		const user = batch
			.map((st, i) => `### Item ${i + 1}\nPassage:\n${passage(st)}\n\nStatement (en): ${st.statement?.en}\nStatement (ja): ${st.statement?.ja}\nScope: ${JSON.stringify(st.scope)}`)
			.join('\n\n');
		try {
			const raw = await chat(MODEL, SYSTEM, user, { maxTokens: 4000, temperature: 0, retries: 3 });
			const items = parseArray(raw);
			for (const it of items) {
				const i = Number(it.i) - 1;
				const st = batch[i];
				if (!st) continue;
				const verdict = ['yes', 'partial', 'no'].includes(String(it.verdict)) ? String(it.verdict) : 'partial';
				counts[verdict as keyof typeof counts]++;
				st.verification = {
					...(st.verification ?? {}),
					entailment: { verdict, quote: String(it.quote ?? '').slice(0, 240), note: it.note ? String(it.note).slice(0, 240) : null, model: MODEL, prompt_version: PROMPT_VERSION, date: started.slice(0, 10) }
				};
				if (verdict === 'yes' && st.status === 'anchored') st.status = 'checked';
			}
		} catch (e) {
			counts.unparsed += batch.length;
			console.error(`batch ${cursor}: ${(e as Error).message}`);
		}
		done += batch.length;
		if (done % (BATCH * 4) === 0 || cursor >= batches.length) {
			writeJsonl(path, rows);
			console.log(`${done}/${todo.length} · yes ${counts.yes} partial ${counts.partial} no ${counts.no} · $${usage.costUsd.toFixed(3)}`);
		}
	}
}
await Promise.all(Array.from({ length: Math.min(CONCURRENCY, batches.length) }, worker));
writeJsonl(path, rows);

mkdirSync(join(KB, 'activities'), { recursive: true });
writeFileSync(
	join(KB, 'activities/verify.jsonl'),
	JSON.stringify({
		id: `act:verify/${key}/${started.replace(/[:.]/g, '-')}`,
		kind: 'verify',
		agent: 'agent:pipeline/verify-v1',
		model: MODEL,
		prompt_version: PROMPT_VERSION,
		started,
		ended: new Date().toISOString(),
		inputs: { source: `source:${key}`, statements: todo.length, batch: BATCH },
		outputs: { ...counts, prompt_tokens: usage.promptTokens, completion_tokens: usage.completionTokens },
		cost_usd: Math.round(usage.costUsd * 1000) / 1000
	}) + '\n',
	{ flag: 'a' }
);
console.log(`done: ${JSON.stringify(counts)} $${usage.costUsd.toFixed(3)}`);
