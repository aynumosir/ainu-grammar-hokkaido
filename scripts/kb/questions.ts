/**
 * questions.ts — the question each topic answers, written from its title, summary and text.
 *
 *   bun scripts/kb/questions.ts [--model deepseek/deepseek-v4-flash] [--concurrency 3] [--force]
 *
 * A topic is a descriptive question about the language. For every chapter without
 * a question, the model sees the title, the summary, the section titles and the
 * opening sentences of each section, and writes one question for the chapter and
 * one per section, in English and Japanese, phrased so that any source's answer
 * could attach to it. Topics are rewritten atomically.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { chat, PRICES, usage } from '../qa/llm';
import { KB, readJsonl, writeJsonl } from './lib';

PRICES['deepseek/deepseek-v4-flash'] = [0.088, 0.177];
const PROMPT_VERSION = 'questions-v1.0';
const argv = process.argv.slice(2);
const opt = (name: string, dflt: string) => {
	const i = argv.indexOf(`--${name}`);
	return i >= 0 && argv[i + 1] ? argv[i + 1] : dflt;
};
const MODEL = opt('model', 'deepseek/deepseek-v4-flash');
const CONCURRENCY = +opt('concurrency', '3');
const FORCE = argv.includes('--force');

type Row = Record<string, any>;
const topics = readJsonl<Row>(join(KB, 'registries/topics.jsonl'));
const sentences = readJsonl<Row>(join(KB, 'imports/book-v1/sentences.jsonl'));
const firstSentences = new Map<string, string[]>();
for (const s of sentences) {
	const k = `${s.chapter}#${s.section}`;
	const list = firstSentences.get(k) ?? [];
	if (list.length < 2) list.push(s.text);
	firstSentences.set(k, list);
}
const chapters = topics.filter((t) => t.kind === 'chapter' && (FORCE || !t.question));
const sectionsByChapter = new Map<string, Row[]>();
for (const t of topics) {
	if (t.kind !== 'section') continue;
	const list = sectionsByChapter.get(t.chapter) ?? [];
	list.push(t);
	sectionsByChapter.set(t.chapter, list);
}
for (const list of sectionsByChapter.values()) list.sort((a, b) => a.order - b.order);
console.log(`${chapters.length} chapters to question, model ${MODEL}`);

const SYSTEM = `You write the descriptive questions that a reference grammar of Hokkaido Ainu answers. You see one chapter: its title, its summary, its sections with their opening sentences. Write one question for the chapter and one for each section. A question names the phenomenon and asks what the language does, so that descriptions from any author could be attached as answers; it must not presuppose one author's analysis or terminology, and it must not mention the book, the chapter or the author. English first, then a Japanese rendering. Keep each under 30 words. Return JSON and nothing else:
{"question": {"en": "...", "ja": "..."}, "sections": [{"id": "<section id>", "en": "...", "ja": "..."}]}`;

let cursor = 0;
let written = 0;
const started = new Date().toISOString();
function parseObject(raw: string): Row {
	const s = raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
	const a = s.indexOf('{');
	const b = s.lastIndexOf('}');
	if (a < 0 || b < 0) throw new Error('no JSON object');
	return JSON.parse(s.slice(a, b + 1));
}
async function worker() {
	while (cursor < chapters.length) {
		const ch = chapters[cursor++];
		const secs = sectionsByChapter.get(ch.chapter) ?? [];
		const user =
			`Title: ${ch.label.en}\nSummary: ${ch.summary ?? ''}\n\nSections:\n` +
			secs
				.map((s) => `- ${s.section} — ${s.label.en}\n  ${(firstSentences.get(`${ch.chapter}#${s.section}`) ?? []).join(' ')}`)
				.join('\n');
		try {
			const out = parseObject(await chat(MODEL, SYSTEM, user, { maxTokens: 6000, temperature: 0.2, retries: 3 }));
			if (out.question?.en) {
				ch.question = { en: String(out.question.en), ja: String(out.question.ja ?? '') };
				written++;
			}
			for (const q of out.sections ?? []) {
				const sec = secs.find((s) => s.section === String(q.id));
				if (sec && q.en) {
					sec.question = { en: String(q.en), ja: String(q.ja ?? '') };
					written++;
				}
			}
		} catch (e) {
			console.error(`${ch.chapter}: ${(e as Error).message}`);
		}
		if (cursor % 6 === 0 || cursor >= chapters.length) {
			writeJsonl(join(KB, 'registries/topics.jsonl'), topics);
			console.log(`${cursor}/${chapters.length} chapters · ${written} questions · $${usage.costUsd.toFixed(3)}`);
		}
	}
}
await Promise.all(Array.from({ length: Math.min(CONCURRENCY, chapters.length) }, worker));
writeJsonl(join(KB, 'registries/topics.jsonl'), topics);
mkdirSync(join(KB, 'activities'), { recursive: true });
writeFileSync(
	join(KB, 'activities/questions.jsonl'),
	JSON.stringify({
		id: `act:questions/${started.replace(/[:.]/g, '-')}`,
		kind: 'questions',
		agent: 'agent:pipeline/extract-v1',
		model: MODEL,
		prompt_version: PROMPT_VERSION,
		started,
		ended: new Date().toISOString(),
		inputs: { chapters: chapters.length },
		outputs: { questions: written, prompt_tokens: usage.promptTokens, completion_tokens: usage.completionTokens },
		cost_usd: Math.round(usage.costUsd * 1000) / 1000
	}) + '\n',
	{ flag: 'a' }
);
console.log(`done: ${written} questions, $${usage.costUsd.toFixed(3)}`);
