/**
 * route.ts — section-level routing of statements inside their chapter.
 *
 *   bun scripts/kb/route.ts [key …] [--model deepseek/deepseek-v4-flash] [--concurrency 3] [--batch 25]
 *
 * A statement leaves extraction routed to up to three chapter topics. For each
 * chapter, the statements routed to it that carry no section topic yet are shown
 * to a cheap model in batches together with the chapter's section list, and the
 * model picks the best section or none. The section topic id is appended to the
 * statement's topics; the chapter id stays first. The verdict, section or none, is kept
 * on the statement as `routing`, so a statement is sent once. Files are rewritten
 * atomically.
 */
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { chat, PRICES, usage } from '../qa/llm';
import { KB, readJsonl, writeJsonl } from './lib';

PRICES['deepseek/deepseek-v4-flash'] = [0.088, 0.177];
const PROMPT_VERSION = 'route-v1.0';

const argv = process.argv.slice(2);
const keys = argv.filter((a) => !a.startsWith('--') && !/^\d+$/.test(a) && !['deepseek/deepseek-v4-flash'].includes(a));
const opt = (name: string, dflt: string) => {
	const i = argv.indexOf(`--${name}`);
	return i >= 0 && argv[i + 1] ? argv[i + 1] : dflt;
};
const MODEL = opt('model', 'deepseek/deepseek-v4-flash');
const CONCURRENCY = +opt('concurrency', '3');
const BATCH = +opt('batch', '25');

type Row = Record<string, any>;
const topics = readJsonl<Row>(join(KB, 'registries/topics.jsonl'));
const topicById = new Map(topics.map((t) => [t.id as string, t]));
const sectionsByChapter = new Map<string, Row[]>();
for (const t of topics) {
	if (t.kind !== 'section') continue;
	const list = sectionsByChapter.get(t.chapter) ?? [];
	list.push(t);
	sectionsByChapter.set(t.chapter, list);
}
for (const list of sectionsByChapter.values()) list.sort((a, b) => a.order - b.order);

const files = readdirSync(join(KB, 'statements'))
	.filter((f) => f.endsWith('.jsonl'))
	.filter((f) => !keys.length || keys.includes(f.replace(/\.jsonl$/, '')));
const byFile = new Map<string, Row[]>();
for (const f of files) byFile.set(f, readJsonl<Row>(join(KB, 'statements', f)));

interface Item {
	st: Row;
	chapter: Row;
}
const work = new Map<string, Item[]>(); // chapter slug → items
for (const rows of byFile.values())
	for (const st of rows) {
		const ts: string[] = st.topics ?? [];
		if (ts.some((t) => topicById.get(t)?.kind === 'section')) continue;
		if (st.routing) continue;
		const ch = ts.map((t) => topicById.get(t)).find((t) => t?.kind === 'chapter');
		if (!ch) continue;
		if (!(sectionsByChapter.get(ch.chapter) ?? []).length) continue;
		const list = work.get(ch.chapter) ?? [];
		list.push({ st, chapter: ch });
		work.set(ch.chapter, list);
	}
const batches: { chapter: Row; items: Item[] }[] = [];
for (const [slug, items] of work) {
	const ch = topicById.get(items[0].chapter.id)!;
	for (let i = 0; i < items.length; i += BATCH) batches.push({ chapter: ch, items: items.slice(i, i + BATCH) });
	void slug;
}
console.log(`${[...work.values()].reduce((a, b) => a + b.length, 0)} statements to route in ${batches.length} batches over ${work.size} chapters, model ${MODEL}`);

const SYSTEM = `You route statements about Hokkaido Ainu grammar to the section of a chapter they belong to. You see the chapter's title and summary, its sections (id and title, indented by depth), and a numbered list of statements. For each statement pick the single best section id, or null when no section fits (the statement then stays at chapter level). Return a JSON array and nothing else: [{"i": <number>, "section": "<section id>" | null}].`;

let cursor = 0;
let routed = 0;
let done = 0;
const started = new Date().toISOString();
function parseArray(raw: string): Record<string, unknown>[] {
	const s = raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
	const a = s.indexOf('[');
	const b = s.lastIndexOf(']');
	if (a < 0 || b < 0) throw new Error('no JSON array');
	return JSON.parse(s.slice(a, b + 1));
}
async function worker() {
	while (cursor < batches.length) {
		const { chapter, items } = batches[cursor++];
		const secs = sectionsByChapter.get(chapter.chapter) ?? [];
		const secIds = new Set(secs.map((s) => s.section as string));
		const user =
			`Chapter: ${chapter.label.en}\nSummary: ${chapter.summary ?? ''}\n\nSections:\n` +
			secs.map((s) => `${'  '.repeat(Math.max(0, s.depth - 2))}${s.section} — ${s.label.en}`).join('\n') +
			`\n\nStatements:\n` +
			items.map(({ st }, i) => `[${i + 1}] ${st.statement.en}${st.forms?.length ? ` (forms: ${st.forms.join(', ')})` : ''}`).join('\n');
		try {
			const raw = await chat(MODEL, SYSTEM, user, { maxTokens: 6000, temperature: 0, retries: 3 });
			const answered = new Set<number>();
			for (const it of parseArray(raw)) {
				const i = Number(it.i) - 1;
				if (!items[i]) continue;
				answered.add(i);
				const sid = it.section == null ? null : String(it.section);
				const st = items[i].st;
				if (!sid || !secIds.has(sid)) {
					st.routing = { section: null, model: MODEL, prompt_version: PROMPT_VERSION, date: started.slice(0, 10) };
					continue;
				}
				const secTopic = secs.find((s) => s.section === sid)!;
				st.topics = [chapter.id, ...st.topics.filter((t: string) => t !== chapter.id), secTopic.id];
				st.routing = { section: secTopic.id, model: MODEL, prompt_version: PROMPT_VERSION, date: started.slice(0, 10) };
				routed++;
			}
			void answered;
		} catch (e) {
			console.error(`${chapter.chapter}: ${(e as Error).message}`);
		}
		done += items.length;
		{
			for (const [f, rows] of byFile) writeJsonl(join(KB, 'statements', f), rows);
			console.log(`${done} processed, ${routed} routed · $${usage.costUsd.toFixed(3)}`);
		}
	}
}
await Promise.all(Array.from({ length: Math.min(CONCURRENCY, batches.length) }, worker));
for (const [f, rows] of byFile) writeJsonl(join(KB, 'statements', f), rows);
mkdirSync(join(KB, 'activities'), { recursive: true });
writeFileSync(
	join(KB, 'activities/route.jsonl'),
	JSON.stringify({
		id: `act:route/${started.replace(/[:.]/g, '-')}`,
		kind: 'route',
		agent: 'agent:pipeline/extract-v1',
		model: MODEL,
		prompt_version: PROMPT_VERSION,
		started,
		ended: new Date().toISOString(),
		inputs: { statements: done, batch: BATCH },
		outputs: { routed, prompt_tokens: usage.promptTokens, completion_tokens: usage.completionTokens },
		cost_usd: Math.round(usage.costUsd * 1000) / 1000
	}) + '\n',
	{ flag: 'a' }
);
console.log(`done: ${routed} of ${done} routed to sections, $${usage.costUsd.toFixed(3)}`);
void existsSync;
