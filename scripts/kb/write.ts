/**
 * write.ts — narrative units: one passage per section of a chapter topic, written
 * from the claims grouped under it, every sentence marked with the claims it rests on.
 *
 *   bun scripts/kb/write.ts [chapter-slug …] [--model google/gemini-3.8-flash] [--concurrency 2] [--force]
 *
 * For each chapter that has a claims file, the model sees the chapter's title and
 * question, its sections, and under each the claims with the sources that assert,
 * propose, report, doubt or reject them, their scope, forms and relations. It writes,
 * for the chapter opening and for each section that has claims, an English passage
 * and a Japanese passage in which every sentence ends with the markers of the claims
 * it rests on, [C3][C7]. The script turns the markers into claim ids, counts the
 * sentences that carry no marker (unsupported) and the claims never cited
 * (uncovered), and keeps both on the unit. Chapters with more than SLICE claims are
 * written in several calls, sections kept whole.
 *
 * Output: kb/narrative/<chapter>.jsonl, one unit per passage, status `generated`;
 * the run is recorded in kb/activities/write.jsonl.
 */
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { chat, PRICES, usage } from '../qa/llm';
import { KB, readJsonl, writeJsonl } from './lib';

PRICES['google/gemini-3.8-flash'] = [0.75, 3.75];
const PROMPT_VERSION = 'write-v1.1';
const argv = process.argv.slice(2);
const opt = (name: string, dflt: string) => {
	const i = argv.indexOf(`--${name}`);
	return i >= 0 && argv[i + 1] ? argv[i + 1] : dflt;
};
const MODEL = opt('model', 'google/gemini-3.8-flash');
const CONCURRENCY = +opt('concurrency', '2');
const SLICE = +opt('slice', '140');
const FORCE = argv.includes('--force');
const optValues = new Set(['--model', '--concurrency', '--slice'].flatMap((k) => { const i = argv.indexOf(k); return i >= 0 && argv[i + 1] ? [argv[i + 1]] : []; }));
const only = argv.filter((a) => !a.startsWith('--') && !optValues.has(a));

type Row = Record<string, any>;
const topics = readJsonl<Row>(join(KB, 'registries/topics.jsonl'));
const topicById = new Map(topics.map((t) => [t.id as string, t]));
const sources = readJsonl<Row>(join(KB, 'registries/sources.jsonl'));
const sourceById = new Map(sources.map((s) => [s.id as string, s]));
const statements = readdirSync(join(KB, 'statements'))
	.filter((f) => f.endsWith('.jsonl'))
	.flatMap((f) => readJsonl<Row>(join(KB, 'statements', f)));
const stById = new Map(statements.map((s) => [s.id as string, s]));
const claimDir = join(KB, 'claims');
const chapters = topics
	.filter((t) => t.kind === 'chapter' && existsSync(join(claimDir, `${t.chapter}.jsonl`)) && (!only.length || only.includes(t.chapter)))
	.filter((t) => FORCE || !existsSync(join(KB, 'narrative', `${t.chapter}.jsonl`)))
	.sort((a, b) => a.order - b.order);
console.log(`${chapters.length} chapters to write, model ${MODEL}`);

const SYSTEM = `You write one chapter of a reference grammar of Hokkaido Ainu from claims that were grouped from published descriptions. You see the chapter's title and the question it answers, then its sections; under each, numbered claims with the sources that assert, propose, report, doubt or reject them (with pages), the claim's dialect scope, conditions and forms, and its relations to other claims.

Write, for the chapter opening when it has claims and for each section that has claims, one passage in English and one in Japanese: one unit per section key (S0 is the chapter opening, S1, S2 … the sections), never a unit that spans several keys.

Rules:
- Use only the claims. Add no fact, form, example, gloss or generalisation that is not in them. Keep each claim's dialect scope and strength: a claim scoped to one dialect stays with that dialect; a proposal is written as one ("Bugaeva analyses … as …"); a doubted or rejected claim is reported as such with its critic named.
- Every sentence ends with the markers of the claims it rests on, written [C3] or [C3][C7]. A sentence without a marker is not allowed. Claims that say the same thing become one sentence carrying both markers. General statements come before details and exceptions.
- Where claims contradict or contrast, one sentence names both sides; the disagreement is stated, never resolved.
- Forms stay in the Latin transcription given, marked *like this*; glosses in single quotes.
- Plain descriptive prose in the present tense. No headings, no lists, no rhetorical questions, no "not X but Y" contrasts, no evaluative adjectives, no remarks about the sources' quality or about this text. Sentence length varies. The English text is the passage, the Japanese text is its counterpart in である体 with the same markers, technical register, no space between Japanese and Latin characters.
- Length: about one sentence per claim, fewer where claims overlap.

Return JSON and nothing else: {"units": [{"section": "<section key: S0, S1, …>", "en": "...", "ja": "..."}]}`;

const label = (st: Row | undefined) => {
	if (!st) return '?';
	const src = sourceById.get(st.source);
	const page = st.locator?.printed != null ? `: ${st.locator.printed}` : '';
	return `${src ? `${src.cite_author} ${src.year}` : st.source}${page}`;
};
const STANCE_ORDER = ['asserts', 'presupposes', 'reports', 'proposes', 'doubts', 'rejects'];
function describe(c: Row, num: Map<string, number>): string {
	const byStance = new Map<string, string[]>();
	for (const m of c.statements ?? []) byStance.set(m.stance, [...(byStance.get(m.stance) ?? []), label(stById.get(m.id))]);
	const stances = STANCE_ORDER.filter((s) => byStance.has(s))
		.map((s) => `${s === 'asserts' ? 'asserted by' : s === 'presupposes' ? 'presupposed by' : s === 'reports' ? 'reported by' : s === 'proposes' ? 'proposed by' : s === 'doubts' ? 'doubted by' : 'rejected by'} ${byStance.get(s)!.join('; ')}`)
		.join(' · ');
	const sc = c.scope ?? {};
	const scope = [
		(sc.doculects ?? []).map((d: string) => d.replace('doculect:', '')).join(', ') || 'dialect unstated',
		sc.quantifier && sc.quantifier !== 'unstated' ? sc.quantifier : '',
		...(sc.conditions ?? [])
	]
		.filter(Boolean)
		.join(' · ');
	const rels = (c.relations ?? [])
		.filter((r: Row) => num.has(r.claim))
		.map((r: Row) => `${r.kind} [C${num.get(r.claim)}]${r.differs_in ? ` (differs in ${r.differs_in})` : ''}`)
		.join('; ');
	return `[C${num.get(c.id)}] ${c.statement.en} — ${c.statement.ja}\n    sources: ${stances}\n    scope: ${scope}${c.forms?.length ? `\n    forms: ${c.forms.join(', ')}` : ''}${rels ? `\n    relations: ${rels}` : ''}`;
}
function parseObject(raw: string): Row {
	const s = raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
	const a = s.indexOf('{');
	const b = s.lastIndexOf('}');
	if (a < 0 || b < 0) throw new Error('no JSON object');
	return JSON.parse(s.slice(a, b + 1));
}
/** sentences of a passage, English or Japanese */
const sentencesOf = (text: string) => text.split(/(?<=[.!?。])\s*(?=\S)/).map((s) => s.trim()).filter(Boolean);

let cursor = 0;
let totalUnits = 0;
let abort = false;
const started = new Date().toISOString();
const actId = `act:write/${started.replace(/[:.]/g, '-')}`;

async function writeChapter(ch: Row) {
	const slug = ch.chapter as string;
	const claims = readJsonl<Row>(join(claimDir, `${slug}.jsonl`)).filter((c) => c.status !== 'withdrawn');
	const secs = topics.filter((t) => t.kind === 'section' && t.chapter === slug).sort((a, b) => a.order - b.order);
	const secIds = new Set(secs.map((s) => s.id as string));
	// claims by section, in section order; the opening first
	const bySection = new Map<string | null, Row[]>();
	for (const c of claims) {
		const sec = (c.topics ?? []).find((t: string) => secIds.has(t)) ?? null;
		bySection.set(sec, [...(bySection.get(sec) ?? []), c]);
	}
	const order: (string | null)[] = [null, ...secs.map((s) => s.id as string)].filter((k) => bySection.has(k));
	// short keys the model can echo: S0 for the opening, S1 … for the sections in order
	const keyOf = new Map<string | null, string>([[null, 'S0'], ...secs.map((s, i) => [s.id as string, `S${i + 1}`] as [string, string])]);
	const sectionOfKey = new Map<string, string | null>([...keyOf.entries()].map(([id, k]) => [k, id]));
	// batches of whole sections, at most SLICE claims each
	const batches: (string | null)[][] = [];
	let cur: (string | null)[] = [];
	let n = 0;
	for (const k of order) {
		const size = bySection.get(k)!.length;
		if (n + size > SLICE && cur.length) {
			batches.push(cur);
			cur = [];
			n = 0;
		}
		cur.push(k);
		n += size;
	}
	if (cur.length) batches.push(cur);
	const units: Row[] = [];
	for (const batch of batches) {
		const num = new Map<string, number>();
		const listed: Row[] = [];
		for (const k of batch) for (const c of bySection.get(k)!) listed.push(c);
		listed.forEach((c, i) => num.set(c.id, i + 1));
		const user =
			`Chapter: ${ch.label.en}\nQuestion: ${ch.question?.en ?? ''}\nSummary: ${ch.summary ?? ''}\n\n` +
			batch
				.map((k) => {
					const sec = k ? topicById.get(k) : null;
					const head = sec ? `Section ${keyOf.get(k)} — ${sec.label.en}${sec.question?.en ? `\nQuestion: ${sec.question.en}` : ''}` : 'Chapter opening (section S0)';
					return `${head}\n${bySection.get(k)!.map((c) => describe(c, num)).join('\n')}`;
				})
				.join('\n\n');
		let out: Row;
		try {
			out = parseObject(await chat(MODEL, SYSTEM, user, { maxTokens: 30000, temperature: 0.2, retries: 3 }));
		} catch (e) {
			if ((e as { fatal?: boolean }).fatal) abort = true;
			console.error(`${slug}: ${(e as Error).message}`);
			return;
		}
		const byId = new Map(listed.map((c) => [c.id as string, c]));
		const idOfNum = new Map([...num.entries()].map(([id, i]) => [i, id]));
		for (const u of out.units ?? []) {
			const given = u.section == null ? 'S0' : String(u.section).trim();
			let section: string | null | undefined;
			if (/^S0$|^null$/i.test(given)) section = null;
			else if (sectionOfKey.has(given.toUpperCase())) section = sectionOfKey.get(given.toUpperCase());
			else if (secIds.has(given)) section = given;
			else section = secs.find((s) => s.section === given || String(s.label?.en).toLowerCase() === given.toLowerCase())?.id;
			if (section === undefined) {
				console.error(`${slug}: unit with unknown section "${given.slice(0, 60)}" dropped`);
				continue;
			}
			if (!batch.includes(section)) continue;
			const expected = new Set((bySection.get(section) ?? []).map((c) => c.id as string));
			const cited = new Set<string>();
			const convert = (text: string) =>
				String(text ?? '').replace(/\[C(\d+)\]/g, (_, d) => {
					const id = idOfNum.get(+d);
					if (!id || !byId.has(id)) return '';
					cited.add(id);
					return `⟦${id}⟧`;
				});
			const en = convert(u.en);
			const ja = convert(u.ja);
			const sents = sentencesOf(en.replace(/⟦[^⟧]+⟧/g, (m) => m));
			const unsupported = sents.filter((s) => !/⟦/.test(s)).length;
			const sid = section ? topicById.get(section)?.section : 'opening';
			units.push({
				id: `narr:${ch.home}/${slug}--${sid}`,
				topic: ch.id,
				section,
				revision: 1,
				text: { en, ja },
				claims: [...cited].filter((id) => expected.has(id)),
				uncovered: [...expected].filter((id) => !cited.has(id)),
				unsupported,
				sentences: sents.length,
				written_by: actId,
				model: MODEL,
				prompt_version: PROMPT_VERSION,
				date: started.slice(0, 10),
				status: 'generated'
			});
		}
	}
	if (!units.length) {
		console.error(`${slug}: no units`);
		return;
	}
	mkdirSync(join(KB, 'narrative'), { recursive: true });
	writeJsonl(join(KB, 'narrative', `${slug}.jsonl`), units);
	totalUnits += units.length;
	const unc = units.reduce((a, u) => a + u.uncovered.length, 0);
	const uns = units.reduce((a, u) => a + u.unsupported, 0);
	console.log(`${slug}: ${claims.length} claims → ${units.length} units, ${unc} claims uncovered, ${uns} sentences unsupported · $${usage.costUsd.toFixed(3)}`);
}

async function worker() {
	while (cursor < chapters.length && !abort) await writeChapter(chapters[cursor++]);
}
await Promise.all(Array.from({ length: Math.min(CONCURRENCY, chapters.length) }, worker));
mkdirSync(join(KB, 'activities'), { recursive: true });
writeFileSync(
	join(KB, 'activities/write.jsonl'),
	JSON.stringify({
		id: actId,
		kind: 'write',
		agent: 'agent:pipeline/extract-v1',
		model: MODEL,
		prompt_version: PROMPT_VERSION,
		started,
		ended: new Date().toISOString(),
		inputs: { chapters: chapters.length, slice: SLICE },
		outputs: { units: totalUnits, prompt_tokens: usage.promptTokens, completion_tokens: usage.completionTokens },
		cost_usd: Math.round(usage.costUsd * 1000) / 1000
	}) + '\n',
	{ flag: 'a' }
);
console.log(`done: ${totalUnits} units, $${usage.costUsd.toFixed(3)}`);
