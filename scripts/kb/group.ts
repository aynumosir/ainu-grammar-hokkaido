/**
 * group.ts — statements of all sources grouped into claims, chapter by chapter.
 *
 *   bun scripts/kb/group.ts [chapter-slug …] [--model google/gemini-3.8-flash] [--concurrency 2] [--slice 120] [--force]
 *
 * A claim is one proposition that several sources may assert, propose, doubt or
 * reject. For each chapter, the statements whose primary topic is that chapter
 * (from every source) are shown to the model, ordered by section and source, in
 * slices; the model returns claims with their member statements and the stance
 * each member takes, plus relations between claims (contradicts with the
 * dimension of difference, refines, contrasts, supports). Statements the model
 * leaves out become singleton claims, so every statement belongs to exactly one
 * claim within its primary chapter. Output: kb/claims/<chapter>.jsonl.
 */
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { chat, PRICES, usage } from '../qa/llm';
import { KB, readJsonl, writeJsonl } from './lib';

PRICES['google/gemini-3.8-flash'] = [0.75, 3.75];
const PROMPT_VERSION = 'group-v1.0';
const argv = process.argv.slice(2);
const opt = (name: string, dflt: string) => {
	const i = argv.indexOf(`--${name}`);
	return i >= 0 && argv[i + 1] ? argv[i + 1] : dflt;
};
const MODEL = opt('model', 'google/gemini-3.8-flash');
const CONCURRENCY = +opt('concurrency', '2');
const SLICE = +opt('slice', '120');
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

const byChapter = new Map<string, Row[]>();
for (const st of statements) {
	const ch = (st.topics ?? []).map((t: string) => topicById.get(t)).find((t: Row | undefined) => t?.kind === 'chapter');
	if (!ch) continue;
	const list = byChapter.get(ch.chapter) ?? [];
	list.push(st);
	byChapter.set(ch.chapter, list);
}
const sourcesOf = (t: Row) => new Set((byChapter.get(t.chapter) ?? []).map((s) => s.source)).size;
const chapters = topics
	.filter((t) => t.kind === 'chapter' && byChapter.has(t.chapter) && (!only.length || only.includes(t.chapter)))
	.filter((t) => FORCE || !existsSync(join(KB, 'claims', `${t.chapter}.jsonl`)))
	// chapters with the most sources first: that is where statements can meet across sources
	.sort((a, b) => sourcesOf(b) - sourcesOf(a) || (byChapter.get(b.chapter)?.length ?? 0) - (byChapter.get(a.chapter)?.length ?? 0) || a.order - b.order);
console.log(`${chapters.length} chapters to group (${[...byChapter.values()].reduce((a, b) => a + b.length, 0)} statements routed), model ${MODEL}`);

const SYSTEM = `You group statements about Hokkaido Ainu grammar, extracted from several published descriptions, into claims: propositions that more than one source may assert, propose, doubt, reject or report. You see one chapter topic, its sections, and a numbered list of statements, each with its source, printed page, type, stance, dialect scope, English and Japanese wording and the forms it names.

Rules:
- Two statements belong to one claim only when they commit to the same proposition at the same scope (same dialects, same conditions, same strength). A narrower, weaker or differently scoped statement is a separate claim linked by "refines". Repeated wording of the same proposition in one source is one claim with two members.
- Never merge across a difference of dialect or of analytic framework; record such pairs as separate claims linked by "contrasts" or, when they are incompatible over the same scope, "contradicts" with differs_in from: dialect, period, register, framework, level-of-analysis, scope, unresolved.
- A member's stance is that source's attitude to the claim: asserts, proposes, doubts, rejects, reports, presupposes.
- Each statement goes into at most one claim. Statements you do not group are left out and become single-member claims automatically.
- Write each claim as one plain English sentence and one Japanese sentence in the neutral terms of the chapter, keeping forms in Latin transcription; keep the type from the list existence | form-function | membership | distribution | ordering | paradigm-cell | alternation | frequency | variation | diachrony | analysis | judgement | absence | terminology | other; give scope {doculects, quantifier, modality, conditions} and forms; give section: the section id the claim belongs to, or null.
- slug: 3 to 8 lowercase words joined by hyphens, unique within the chapter.

Return JSON and nothing else:
{"claims": [{"slug": "...", "en": "...", "ja": "...", "type": "...", "scope": {"doculects": [...], "quantifier": "...", "modality": "...", "conditions": [...]}, "forms": [...], "section": "<id>|null", "members": [{"i": <number>, "stance": "..."}]}],
 "relations": [{"from": "<slug>", "to": "<slug>", "kind": "contradicts|refines|contrasts|supports", "differs_in": "<dimension>|null", "note": "<short>"}]}`;

const slugify = (s: string) =>
	s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').split('-').slice(0, 8).join('-') || 'claim';
const STANCES = ['asserts', 'proposes', 'doubts', 'rejects', 'reports', 'presupposes'];
const TYPES = ['existence', 'form-function', 'membership', 'distribution', 'ordering', 'paradigm-cell', 'alternation', 'frequency', 'variation', 'diachrony', 'analysis', 'judgement', 'absence', 'terminology', 'other'];
function parseObject(raw: string): Row {
	const s = raw.trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
	const a = s.indexOf('{');
	const b = s.lastIndexOf('}');
	if (a < 0 || b < 0) throw new Error('no JSON object');
	return JSON.parse(s.slice(a, b + 1));
}

let cursor = 0;
let totalClaims = 0;
let abort = false; // set when the API refuses (budget, auth): no chapter is then written by fallback
const ungrouped: string[] = [];
const started = new Date().toISOString();
const actId = `act:group/${started.replace(/[:.]/g, '-')}`;

async function groupChapter(ch: Row) {
	const slug = ch.chapter as string;
	const secs = topics.filter((t) => t.kind === 'section' && t.chapter === slug).sort((a, b) => a.order - b.order);
	const secById = new Map(secs.map((s) => [s.id as string, s]));
	const sts = (byChapter.get(slug) ?? []).slice().sort((a, b) => {
		const sa = (a.topics ?? []).find((t: string) => secById.has(t)) ?? '';
		const sb = (b.topics ?? []).find((t: string) => secById.has(t)) ?? '';
		return sa.localeCompare(sb) || String(a.source).localeCompare(String(b.source)) || (a.locator?.leaf ?? 0) - (b.locator?.leaf ?? 0);
	});
	const claims: Row[] = [];
	const usedSlugs = new Set<string>();
	const assigned = new Set<string>();
	const relations: Row[] = [];
	let failed = false;
	const mint = (base: string) => {
		let s = base;
		let n = 2;
		while (usedSlugs.has(s)) s = `${base}-${n++}`;
		usedSlugs.add(s);
		return s;
	};
	for (let off = 0; off < sts.length; off += SLICE) {
		const slice = sts.slice(off, off + SLICE);
		const user =
			`Chapter topic: ${ch.label.en}\nSummary: ${ch.summary ?? ''}\n\nSections:\n` +
			secs.map((s) => `${s.section} — ${s.label.en}`).join('\n') +
			`\n\nStatements:\n` +
			slice
				.map((st, i) => {
					const src = sourceById.get(st.source);
					const sec = (st.topics ?? []).map((t: string) => secById.get(t)).find(Boolean);
					return `[${i + 1}] (${src ? `${src.cite_author} ${src.year}` : st.source}${st.locator?.printed != null ? ` p.${st.locator.printed}` : ''}; ${st.type}; ${st.stance}; ${(st.scope?.doculects ?? []).map((d: string) => d.replace('doculect:', '')).join(',') || 'scope unstated'}${sec ? `; section ${sec.section}` : ''}) ${st.statement.en} — ${st.statement.ja}${st.forms?.length ? ` [${st.forms.join(', ')}]` : ''}`;
				})
				.join('\n');
		try {
			const out = parseObject(await chat(MODEL, SYSTEM, user, { maxTokens: 30000, temperature: 0.1, retries: 3 }));
			const sliceSlugs = new Map<string, string>();
			for (const c of out.claims ?? []) {
				const members = (c.members ?? [])
					.map((m: Row) => ({ i: Number(m.i) - 1, stance: STANCES.includes(String(m.stance)) ? String(m.stance) : null }))
					.filter((m: { i: number }) => slice[m.i] && !assigned.has(slice[m.i].id));
				if (!members.length) continue;
				const id = mint(slugify(String(c.slug ?? c.en ?? 'claim')));
				sliceSlugs.set(String(c.slug ?? ''), id);
				for (const m of members) assigned.add(slice[m.i].id);
				const sectionTopic = c.section ? secs.find((s) => s.section === String(c.section)) : undefined;
				claims.push({
					id: `claim:${ch.home}/${slug}--${id}`,
					revision: 1,
					topic: ch.id,
					topics: sectionTopic ? [ch.id, sectionTopic.id] : [ch.id],
					statement: { en: String(c.en ?? ''), ja: String(c.ja ?? '') },
					type: TYPES.includes(String(c.type)) ? String(c.type) : 'other',
					scope: {
						doculects: Array.isArray(c.scope?.doculects) ? c.scope.doculects.map((d: string) => (String(d).startsWith('doculect:') ? String(d) : `doculect:${d}`)) : [],
						quantifier: String(c.scope?.quantifier ?? 'unstated'),
						modality: String(c.scope?.modality ?? 'unstated'),
						conditions: Array.isArray(c.scope?.conditions) ? c.scope.conditions.map(String).slice(0, 6) : []
					},
					forms: Array.isArray(c.forms) ? c.forms.map(String).slice(0, 12) : [],
					statements: members.map((m: { i: number; stance: string | null }) => ({ id: slice[m.i].id, stance: m.stance ?? slice[m.i].stance })),
					relations: [],
					grouped_by: actId,
					status: 'grouped'
				});
			}
			for (const r of out.relations ?? []) {
				const from = sliceSlugs.get(String(r.from));
				const to = sliceSlugs.get(String(r.to));
				if (!from || !to || from === to) continue;
				relations.push({ from: `claim:${ch.home}/${slug}--${from}`, to: `claim:${ch.home}/${slug}--${to}`, kind: ['contradicts', 'refines', 'contrasts', 'supports'].includes(String(r.kind)) ? String(r.kind) : 'contrasts', differs_in: r.differs_in ? String(r.differs_in) : null, note: r.note ? String(r.note).slice(0, 200) : null });
			}
		} catch (e) {
			failed = true;
			if ((e as { fatal?: boolean }).fatal) abort = true;
			console.error(`${slug} slice ${off}: ${(e as Error).message}`);
			break;
		}
	}
	// a chapter whose grouping call failed is left without a claims file: single-member
	// claims stand in only for statements the model saw and left out
	if (failed) {
		ungrouped.push(slug);
		console.error(`${slug}: left ungrouped`);
		return;
	}
	// singletons for whatever was left out
	for (const st of sts) {
		if (assigned.has(st.id)) continue;
		const id = mint(slugify(st.statement.en));
		const sectionTopic = (st.topics ?? []).map((t: string) => secById.get(t)).find(Boolean);
		claims.push({
			id: `claim:${ch.home}/${slug}--${id}`,
			revision: 1,
			topic: ch.id,
			topics: sectionTopic ? [ch.id, sectionTopic.id] : [ch.id],
			statement: { en: st.statement.en, ja: st.statement.ja },
			type: st.type,
			scope: st.scope,
			forms: st.forms ?? [],
			statements: [{ id: st.id, stance: st.stance }],
			relations: [],
			grouped_by: actId,
			status: 'grouped'
		});
	}
	const claimById = new Map(claims.map((c) => [c.id, c]));
	for (const r of relations) {
		const c = claimById.get(r.from);
		if (c && claimById.has(r.to)) c.relations.push({ kind: r.kind, claim: r.to, differs_in: r.differs_in, note: r.note });
	}
	mkdirSync(join(KB, 'claims'), { recursive: true });
	writeJsonl(join(KB, 'claims', `${slug}.jsonl`), claims);
	totalClaims += claims.length;
	const multi = claims.filter((c) => c.statements.length > 1).length;
	console.log(`${slug}: ${sts.length} statements → ${claims.length} claims (${multi} with several members, ${relations.length} relations) · $${usage.costUsd.toFixed(3)}`);
}

async function worker() {
	while (cursor < chapters.length && !abort) await groupChapter(chapters[cursor++]);
}
await Promise.all(Array.from({ length: Math.min(CONCURRENCY, chapters.length) }, worker));
mkdirSync(join(KB, 'activities'), { recursive: true });
writeFileSync(
	join(KB, 'activities/group.jsonl'),
	JSON.stringify({
		id: actId,
		kind: 'group',
		agent: 'agent:pipeline/extract-v1',
		model: MODEL,
		prompt_version: PROMPT_VERSION,
		started,
		ended: new Date().toISOString(),
		inputs: { chapters: chapters.length - ungrouped.length, statements: stById.size, slice: SLICE },
		outputs: { claims: totalClaims, prompt_tokens: usage.promptTokens, completion_tokens: usage.completionTokens },
		cost_usd: Math.round(usage.costUsd * 1000) / 1000
	}) + '\n',
	{ flag: 'a' }
);
console.log(`done: ${totalClaims} claims over ${chapters.length} chapters, $${usage.costUsd.toFixed(3)}`);
