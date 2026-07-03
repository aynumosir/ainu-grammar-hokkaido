/**
 * sweep.ts — Phase 1 chapter-local QA pass over all chapters.
 *
 * Usage:
 *   bun scripts/qa/sweep.ts --model qwen/qwen3-235b-a22b-2507 [--only slug,slug] [--limit N] [--concurrency 5]
 *
 * Writes one findings file per chapter to
 *   .grammar-build/qa/findings/phase1/<model-dirname>/<slug>.json
 * Skips chapters that already have a findings file for the model (resumable).
 */

import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { chat, extractJsonArray, usage } from './llm';

const ROOT = join(import.meta.dir, '../..');
const CHAPTER_DIR = join(ROOT, 'src/lib/grammar/chapters');
const STYLE = readFileSync(join(ROOT, '.grammar-build/qa/house-style.md'), 'utf8');

const argv = process.argv.slice(2);
function arg(name: string, dflt?: string): string | undefined {
	const i = argv.indexOf(`--${name}`);
	return i !== -1 ? argv[i + 1] : dflt;
}
const MODEL = arg('model');
if (!MODEL) throw new Error('--model required');
const ONLY = arg('only')?.split(',');
const LIMIT = Number(arg('limit', '9999'));
const CONCURRENCY = Number(arg('concurrency', '5'));

const modelDir = MODEL.replace(/[^a-z0-9.-]+/gi, '_');
const OUT_DIR = join(ROOT, '.grammar-build/qa/findings/phase1', modelDir);
mkdirSync(OUT_DIR, { recursive: true });

const SYSTEM = `${STYLE}\n\nYou will receive one chapter source file with line numbers. Respond with the JSON array of findings only — no prose before or after.`;

function numberLines(src: string): string {
	return src
		.split('\n')
		.map((l, i) => `${String(i + 1).padStart(4)}| ${l}`)
		.join('\n');
}

let slugs = readdirSync(CHAPTER_DIR)
	.filter((f) => f.endsWith('.svelte'))
	.map((f) => f.replace(/\.svelte$/, ''))
	.sort();
if (ONLY) slugs = slugs.filter((s) => ONLY.includes(s));
slugs = slugs.filter((s) => !existsSync(join(OUT_DIR, `${s}.json`))).slice(0, LIMIT);

console.log(`sweep: ${MODEL} — ${slugs.length} chapters to do, concurrency ${CONCURRENCY}`);

let done = 0;
let failed = 0;

async function processChapter(slug: string) {
	const src = readFileSync(join(CHAPTER_DIR, `${slug}.svelte`), 'utf8');
	try {
		const out = await chat(MODEL, SYSTEM, `Chapter slug: ${slug}\n\n${numberLines(src)}`, {
			maxTokens: 12000,
		});
		let findings: any[];
		try {
			findings = extractJsonArray(out);
		} catch {
			// one repair attempt: ask the model to re-emit as valid JSON
			const fixed = await chat(MODEL, 'Convert the following review notes into a valid JSON array per the schema previously described. Output JSON only.', out, { maxTokens: 12000 });
			findings = extractJsonArray(fixed);
		}
		const cleaned = findings
			.filter((f) => f && typeof f === 'object' && f.issue)
			.map((f) => ({ ...f, chapter: slug, model: MODEL, phase: 'phase1' }));
		writeFileSync(join(OUT_DIR, `${slug}.json`), JSON.stringify(cleaned, null, 1));
		done++;
		console.log(`  ✓ ${slug} — ${cleaned.length} findings  [${done + failed}/${slugs.length}] $${usage.costUsd.toFixed(3)}`);
	} catch (e: any) {
		failed++;
		console.error(`  ✗ ${slug}: ${e.message?.slice(0, 200)}`);
	}
}

const queue = [...slugs];
await Promise.all(
	Array.from({ length: CONCURRENCY }, async () => {
		while (queue.length) await processChapter(queue.shift()!);
	}),
);

console.log(
	`\nsweep done: ${done} ok, ${failed} failed — ${usage.calls} calls, ${usage.promptTokens + usage.completionTokens} tokens, $${usage.costUsd.toFixed(4)}`,
);
if (failed > 0) process.exit(1);
