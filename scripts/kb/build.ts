/**
 * build.ts — compile kb/ into the static projections the site reads.
 *
 *   bun scripts/kb/build.ts   →  static/kb/index.json, graph.json, topics/<slug>.json, sources/<key>.json
 *
 * index.json     counts, parts with their chapters, sources with their counts
 * graph.json     the overview network: parts, chapters and sources, with containment,
 *                citation and cross-reference links
 * topics/*.json  one chapter: its question, sections, sentence records, examples, sources,
 *                related chapters, forms, claims with their member statements, and a
 *                local network
 * sources/*.json one source: the chapters that cite it, the citing sentences and
 *                examples, the statements extracted from it and the claims it takes a
 *                position on
 *
 * Anchor spans of statements never leave kb/: the projections carry the locus, the
 * normalised statement and the anchor match score only.
 */
import { existsSync, readdirSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { KB, STATIC_KB, readJsonl, writeJson } from './lib';

type Row = Record<string, any>;

const readDir = (dir: string, ext: string) =>
	existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(ext)) : [];
const topics = readJsonl<Row>(join(KB, 'registries/topics.jsonl'));
const sources = readJsonl<Row>(join(KB, 'registries/sources.jsonl'));
const sentences = readJsonl<Row>(join(KB, 'imports/book-v1/sentences.jsonl'));
const manifest = existsSync(join(KB, 'imports/book-v1/manifest.json'))
	? JSON.parse(readFileSync(join(KB, 'imports/book-v1/manifest.json'), 'utf8'))
	: null;
const examples = readDir(join(KB, 'examples'), '.jsonl').flatMap((f) => readJsonl<Row>(join(KB, 'examples', f)));
const statements = readDir(join(KB, 'statements'), '.jsonl').flatMap((f) => readJsonl<Row>(join(KB, 'statements', f)));
const claims = readDir(join(KB, 'claims'), '.jsonl').flatMap((f) => readJsonl<Row>(join(KB, 'claims', f)));
const narrative = readDir(join(KB, 'narrative'), '.jsonl').flatMap((f) => readJsonl<Row>(join(KB, 'narrative', f)));
const assets = readDir(join(KB, 'assets'), '.json').map((f) => JSON.parse(readFileSync(join(KB, 'assets', f), 'utf8')) as Row);

const topicById = new Map(topics.map((t) => [t.id as string, t]));
const sourceByKey = new Map(sources.map((s) => [s.key as string, s]));
const stById = new Map(statements.map((s) => [s.id as string, s]));
const parts = topics.filter((t) => t.kind === 'part').sort((a, b) => a.order - b.order);
const chapters = topics.filter((t) => t.kind === 'chapter').sort((a, b) => a.order - b.order);
const chapterBySlug = new Map(chapters.map((c) => [c.chapter as string, c]));

const groupBy = <T,>(rows: T[], key: (r: T) => string | null | undefined) => {
	const m = new Map<string, T[]>();
	for (const r of rows) {
		const k = key(r);
		if (!k) continue;
		const list = m.get(k) ?? [];
		list.push(r);
		m.set(k, list);
	}
	return m;
};
const sectionsByChapter = groupBy(
	topics.filter((t) => t.kind === 'section'),
	(t) => t.chapter
);
for (const list of sectionsByChapter.values()) list.sort((a, b) => a.order - b.order);
const sentencesByChapter = groupBy(sentences, (s) => s.chapter);
const examplesByChapter = groupBy(examples, (e) => e.chapter);
const statementsBySource = groupBy(statements, (st) => st.source);
const statementsByTopic = new Map<string, Row[]>();
for (const st of statements)
	for (const t of st.topics ?? []) {
		const list = statementsByTopic.get(t) ?? [];
		list.push(st);
		statementsByTopic.set(t, list);
	}
const claimsByChapter = groupBy(claims, (c) => topicById.get(c.topic)?.chapter);
const narrativeByChapter = groupBy(narrative.filter((n) => n.status !== 'withdrawn'), (n) => topicById.get(n.topic)?.chapter);
const claimByStatement = new Map<string, Row>();
const claimsBySource = new Map<string, { claim: Row; stance: string }[]>();
for (const c of claims)
	for (const m of c.statements ?? []) {
		claimByStatement.set(m.id, c);
		const st = stById.get(m.id);
		if (!st) continue;
		const list = claimsBySource.get(st.source) ?? [];
		list.push({ claim: c, stance: m.stance });
		claimsBySource.set(st.source, list);
	}

/** statements routed to a chapter or to any of its sections, each once */
function statementsOfChapter(ch: Row): Row[] {
	const ids = [ch.id, ...(sectionsByChapter.get(ch.chapter) ?? []).map((s) => s.id)];
	const seen = new Set<string>();
	const out: Row[] = [];
	for (const id of ids)
		for (const st of statementsByTopic.get(id) ?? [])
			if (!seen.has(st.id)) {
				seen.add(st.id);
				out.push(st);
			}
	return out;
}

const sourceLabel = (s: Row) => `${s.cite_author} ${s.year}`;
const keyOf = (sourceId: string) => String(sourceId).replace(/^source:/, '');
const short = (s: string, n = 90) => (s.length > n ? s.slice(0, n - 1) + '…' : s);
const statementCard = (st: Row) => ({
	id: st.id,
	source: st.source,
	key: keyOf(st.source),
	leaf: st.locator?.leaf ?? null,
	printed: st.locator?.printed ?? null,
	en: st.statement?.en ?? '',
	ja: st.statement?.ja ?? '',
	type: st.type,
	stance: st.stance,
	scope: st.scope ?? {},
	forms: st.forms ?? [],
	topics: st.topics ?? [],
	match: st.anchor?.match ?? null,
	status: st.status,
	verification: st.verification ?? null,
	claim: claimByStatement.get(st.id)?.id ?? null
});
/** distinct sources per stance */
function support(c: Row) {
	const byStance: Record<string, Set<string>> = {};
	for (const m of c.statements ?? []) {
		const st = stById.get(m.id);
		if (!st) continue;
		(byStance[m.stance] ??= new Set()).add(keyOf(st.source));
	}
	return Object.fromEntries(Object.entries(byStance).map(([k, v]) => [k, [...v]]));
}
const claimCard = (c: Row) => {
	const sec = (c.topics ?? []).map((t: string) => topicById.get(t)).find((t: Row | undefined) => t?.kind === 'section');
	return {
		id: c.id,
		en: c.statement?.en ?? '',
		ja: c.statement?.ja ?? '',
		type: c.type,
		scope: c.scope ?? {},
		forms: c.forms ?? [],
		section: sec?.section ?? null,
		section_label: sec?.label?.en ?? null,
		support: support(c),
		members: (c.statements ?? []).map((m: Row) => {
			const st = stById.get(m.id);
			return { id: m.id, key: st ? keyOf(st.source) : null, printed: st?.locator?.printed ?? null, stance: m.stance, status: st?.status ?? null };
		}),
		relations: (c.relations ?? []).map((r: Row) => ({ kind: r.kind, claim: r.claim, differs_in: r.differs_in ?? null, note: r.note ?? null, en: claims.find((x) => x.id === r.claim)?.statement?.en ?? null })),
		status: c.status
	};
};

// ───────────────────────── citation aggregation ─────────────────────────
const bump = (m: Map<string, Map<string, number>>, a: string, b: string, n = 1) => {
	const inner = m.get(a) ?? new Map<string, number>();
	inner.set(b, (inner.get(b) ?? 0) + n);
	m.set(a, inner);
};
const agg = {
	byChapterSource: new Map<string, Map<string, number>>(),
	bySourceChapter: new Map<string, Map<string, number>>(),
	xref: new Map<string, Map<string, number>>(),
	formsByChapter: new Map<string, Map<string, number>>(),
	pagelessByChapterSource: new Map<string, Map<string, number>>()
};
for (const s of sentences) {
	for (const c of s.citations as { key: string; pages: string | null }[]) {
		bump(agg.byChapterSource, s.chapter, c.key);
		bump(agg.bySourceChapter, c.key, s.chapter);
		if (!c.pages) bump(agg.pagelessByChapterSource, s.chapter, c.key);
	}
	for (const x of s.xrefs as string[]) if (x !== s.chapter) bump(agg.xref, s.chapter, x);
	for (const f of s.forms as string[]) bump(agg.formsByChapter, s.chapter, f);
}
for (const e of examples)
	for (const ct of e.citations as { key: string }[]) {
		bump(agg.byChapterSource, e.chapter, ct.key);
		bump(agg.bySourceChapter, ct.key, e.chapter);
	}
for (const st of statements) {
	const key = keyOf(st.source);
	for (const t of st.topics ?? []) {
		const top = topicById.get(t);
		if (top?.chapter) {
			bump(agg.byChapterSource, top.chapter, key);
			bump(agg.bySourceChapter, key, top.chapter);
		}
	}
}

// ───────────────────────── index ─────────────────────────
rmSync(STATIC_KB, { recursive: true, force: true });
const index = {
	generated: new Date().toISOString().slice(0, 10),
	book_revision: manifest?.book_revision ?? null,
	counts: {
		parts: parts.length,
		chapters: chapters.length,
		sections: topics.filter((t) => t.kind === 'section').length,
		sentences: sentences.length,
		examples: examples.length,
		sources: sources.length,
		statements: statements.length,
		claims: claims.length,
		narrative: narrative.length,
		assets: assets.length
	},
	parts: parts.map((p) => ({
		id: p.id,
		label: p.label.en,
		home: p.home,
		order: p.order,
		chapters: chapters
			.filter((c) => c.broader[0] === p.id)
			.map((c) => ({
				id: c.id,
				slug: c.chapter,
				num: c.order,
				title: c.label.en,
				summary: c.summary ?? '',
				question: c.question ?? null,
				sections: (sectionsByChapter.get(c.chapter) ?? []).length,
				sentences: (sentencesByChapter.get(c.chapter) ?? []).length,
				examples: (examplesByChapter.get(c.chapter) ?? []).length,
				statements: statementsOfChapter(c).length,
				claims: (claimsByChapter.get(c.chapter) ?? []).length,
				sources: agg.byChapterSource.get(c.chapter)?.size ?? 0
			}))
	})),
	sources: sources
		.map((s) => ({
			key: s.key,
			label: sourceLabel(s),
			title: s.title,
			year: s.year,
			lang: s.lang,
			role: s.role ?? null,
			db_slug: s.db_slug ?? null,
			cited_by: agg.bySourceChapter.get(s.key)?.size ?? 0,
			citations: [...(agg.bySourceChapter.get(s.key)?.values() ?? [])].reduce((a, b) => a + b, 0),
			statements: (statementsBySource.get(s.id) ?? []).length,
			claims: (claimsBySource.get(s.id) ?? []).length
		}))
		.sort((a, b) => b.citations - a.citations),
	assets: assets.map((a) => ({ id: a.id, source: a.source, engine: a.engine, leaves: a.leaves, mapped: Object.keys(a.pagemap ?? {}).length }))
};
writeJson(join(STATIC_KB, 'index.json'), index);

// ───────────────────────── coverage ─────────────────────────
{
	const sentencesBySection = groupBy(sentences, (s) => `${s.chapter}#${s.section}`);
	const claimsByTopic = new Map<string, number>();
	for (const c of claims) for (const t of c.topics ?? []) claimsByTopic.set(t, (claimsByTopic.get(t) ?? 0) + 1);
	const coverageParts = parts.map((p) => ({
		id: p.id,
		label: p.label.en,
		chapters: chapters
			.filter((c) => c.broader[0] === p.id)
			.map((c) => {
				const secs = sectionsByChapter.get(c.chapter) ?? [];
				const sts = statementsOfChapter(c);
				const sections = secs.map((s) => ({
					id: s.id,
					sid: s.section,
					label: s.label.en,
					depth: s.depth,
					sentences: (sentencesBySection.get(`${c.chapter}#${s.section}`) ?? []).length,
					statements: (statementsByTopic.get(s.id) ?? []).length,
					claims: claimsByTopic.get(s.id) ?? 0
				}));
				return {
					slug: c.chapter,
					num: c.order,
					title: c.label.en,
					statements: sts.length,
					chapter_level: (statementsByTopic.get(c.id) ?? []).length,
					claims: (claimsByChapter.get(c.chapter) ?? []).length,
					sources: [...new Set(sts.map((st) => keyOf(st.source)))].sort(),
					sections,
					covered: sections.filter((s) => s.statements > 0).length
				};
			})
	}));
	const allSections = coverageParts.flatMap((p) => p.chapters.flatMap((c) => c.sections));
	const allChapters = coverageParts.flatMap((p) => p.chapters);
	writeJson(join(STATIC_KB, 'coverage.json'), {
		generated: index.generated,
		totals: {
			sections: allSections.length,
			covered: allSections.filter((s) => s.statements > 0).length,
			chapters: allChapters.length,
			chapters_covered: allChapters.filter((c) => c.statements > 0).length
		},
		parts: coverageParts
	});
}

// ───────────────────────── disagreements ─────────────────────────
{
	const claimById = new Map(claims.map((c) => [c.id as string, c]));
	const rows: Row[] = [];
	for (const c of claims)
		for (const r of c.relations ?? []) {
			if (!['contradicts', 'contrasts'].includes(r.kind)) continue;
			const other = claimById.get(r.claim);
			if (!other) continue;
			const top = topicById.get(c.topic);
			const part = top ? topicById.get(top.broader?.[0]) : undefined;
			rows.push({
				kind: r.kind,
				differs_in: r.differs_in ?? null,
				note: r.note ?? null,
				topic: { slug: top?.chapter ?? null, title: top?.label?.en ?? c.topic, order: (part?.order ?? 0) * 1000 + (top?.order ?? 0) },
				a: { id: c.id, en: c.statement?.en ?? '', ja: c.statement?.ja ?? '', support: support(c) },
				b: { id: other.id, en: other.statement?.en ?? '', ja: other.statement?.ja ?? '', support: support(other) }
			});
		}
	rows.sort((x, y) => x.topic.order - y.topic.order || String(x.a.id).localeCompare(String(y.a.id)));
	writeJson(join(STATIC_KB, 'disagreements.json'), { generated: index.generated, count: rows.length, rows });
	console.log(`disagreements: ${rows.length}`);
}

// ───────────────────────── overview graph ─────────────────────────
{
	const nodes: Row[] = [];
	const links: Row[] = [];
	for (const p of parts)
		nodes.push({ id: p.id, kind: 'part', label: p.label.en.replace(/^Part [IVXL]+ — /, ''), part: p.order, n: chapters.filter((c) => c.broader[0] === p.id).length, href: `/kb#${p.id.split('/').pop()}` });
	for (const c of chapters) {
		const partOrder = topicById.get(c.broader[0])?.order ?? 0;
		nodes.push({ id: c.id, kind: 'chapter', label: c.label.en, part: partOrder, n: (sentencesByChapter.get(c.chapter) ?? []).length, statements: statementsOfChapter(c).length, claims: (claimsByChapter.get(c.chapter) ?? []).length, href: `/kb/topics/${c.chapter}` });
		links.push({ source: c.id, target: c.broader[0], rel: 'in', w: 1 });
	}
	const citedKeys = new Set<string>();
	for (const [ch, m] of agg.byChapterSource) {
		const c = chapterBySlug.get(ch);
		if (!c) continue;
		for (const [key, n] of m) {
			if (!sourceByKey.has(key)) continue;
			citedKeys.add(key);
			links.push({ source: c.id, target: `source:${key}`, rel: 'cites', w: n });
		}
	}
	for (const key of citedKeys) {
		const s = sourceByKey.get(key)!;
		const total = [...(agg.bySourceChapter.get(key)?.values() ?? [])].reduce((a, b) => a + b, 0);
		nodes.push({ id: s.id, kind: 'source', label: sourceLabel(s), part: 0, n: total, lang: s.lang, href: `/kb/sources/${key}` });
	}
	const seenPair = new Set<string>();
	for (const [a, m] of agg.xref)
		for (const [b, n] of m) {
			const ca = chapterBySlug.get(a);
			const cb = chapterBySlug.get(b);
			if (!ca || !cb) continue;
			const pair = [ca.id, cb.id].sort().join('|');
			if (seenPair.has(pair)) continue;
			seenPair.add(pair);
			links.push({ source: ca.id, target: cb.id, rel: 'xref', w: n + (agg.xref.get(b)?.get(a) ?? 0) });
		}
	writeJson(join(STATIC_KB, 'graph.json'), { generated: index.generated, nodes, links });
	console.log(`graph: ${nodes.length} nodes, ${links.length} links`);
}

// ───────────────────────── chapter pages ─────────────────────────
function sentenceCard(s: Row) {
	return { id: s.id, para: s.para, index: s.index, text: s.text, citations: s.citations, grades: s.grades, xrefs: s.xrefs, forms: s.forms };
}
function exampleCard(e: Row) {
	return {
		id: e.id,
		section: e.section,
		text: e.text,
		gloss: e.gloss,
		translation: e.translation,
		kana: e.kana ?? null,
		literal: e.literal ?? null,
		citations: e.citations,
		constructed: e.constructed,
		dialect_tag: e.dialect_tag,
		doculect: e.doculect,
		place: e.place ?? null,
		note: e.note ?? null
	};
}

for (const c of chapters) {
	const slug = c.chapter as string;
	const secs = sectionsByChapter.get(slug) ?? [];
	const secBySid = new Map(secs.map((s) => [s.section as string, s]));
	const sents = sentencesByChapter.get(slug) ?? [];
	const exs = examplesByChapter.get(slug) ?? [];
	const sts = statementsOfChapter(c);
	const cls = (claimsByChapter.get(slug) ?? []).slice().sort((a, b) => {
		const sa = secs.findIndex((s) => (a.topics ?? []).includes(s.id));
		const sb = secs.findIndex((s) => (b.topics ?? []).includes(s.id));
		return (sa === -1 ? 1e9 : sa) - (sb === -1 ? 1e9 : sb) || (b.statements?.length ?? 0) - (a.statements?.length ?? 0);
	});
	const bySection = groupBy(sents, (s) => s.section);
	const exBySection = groupBy(exs, (e) => e.section);
	const stBySection = new Map<string, Row[]>();
	for (const st of sts)
		for (const t of st.topics ?? []) {
			const top = topicById.get(t);
			if (top?.kind === 'section' && top.chapter === slug) {
				const list = stBySection.get(top.section) ?? [];
				list.push(st);
				stBySection.set(top.section, list);
			}
		}
	const clBySection = new Map<string, Row[]>();
	for (const cl of cls) {
		const sec = (cl.topics ?? []).map((t: string) => topicById.get(t)).find((t: Row | undefined) => t?.kind === 'section' && t.chapter === slug);
		if (!sec) continue;
		const list = clBySection.get(sec.section) ?? [];
		list.push(cl);
		clBySection.set(sec.section, list);
	}
	const sourceRows = [...(agg.byChapterSource.get(slug)?.entries() ?? [])]
		.map(([key, n]) => {
			const s = sourceByKey.get(key);
			return {
				key,
				known: !!s,
				label: s ? sourceLabel(s) : key,
				title: s?.title ?? '',
				count: n,
				pageless: agg.pagelessByChapterSource.get(slug)?.get(key) ?? 0,
				statements: sts.filter((st) => keyOf(st.source) === key).length
			};
		})
		.sort((a, b) => b.count - a.count);
	const relatedMap = new Map<string, number>();
	for (const [s, n] of agg.xref.get(slug)?.entries() ?? []) relatedMap.set(s, (relatedMap.get(s) ?? 0) + n);
	for (const o of chapters) {
		const n = agg.xref.get(o.chapter)?.get(slug) ?? 0;
		if (n) relatedMap.set(o.chapter, (relatedMap.get(o.chapter) ?? 0) + n);
	}
	const related = [...relatedMap.entries()]
		.map(([s, w]) => ({ slug: s, id: chapterBySlug.get(s)?.id ?? null, title: chapterBySlug.get(s)?.label.en ?? s, w }))
		.filter((r) => r.id)
		.sort((a, b) => b.w - a.w);
	const forms = [...(agg.formsByChapter.get(slug)?.entries() ?? [])].map(([form, count]) => ({ form, count })).sort((a, b) => b.count - a.count);

	// local network
	const nodes: Row[] = [{ id: c.id, kind: 'chapter', label: c.label.en, n: sents.length, href: `/kb/topics/${slug}`, center: true }];
	const links: Row[] = [];
	for (const s of secs) {
		nodes.push({ id: s.id, kind: 'section', label: s.label.en, n: (bySection.get(s.section) ?? []).length, depth: s.depth, href: `/kb/topics/${slug}#${s.section}` });
		links.push({ source: s.id, target: s.broader[0], rel: 'in', w: 1 });
	}
	const sourceSectionCounts = new Map<string, Map<string, number>>();
	for (const s of sents)
		for (const ct of s.citations as { key: string }[]) if (sourceByKey.has(ct.key)) bump(sourceSectionCounts, ct.key, secBySid.get(s.section)?.id ?? c.id);
	for (const e of exs) for (const ct of e.citations as { key: string }[]) if (sourceByKey.has(ct.key)) bump(sourceSectionCounts, ct.key, secBySid.get(e.section)?.id ?? c.id);
	const sourceNodeIds = new Set<string>();
	for (const row of sourceRows.filter((r) => r.known).slice(0, 14)) {
		const s = sourceByKey.get(row.key)!;
		nodes.push({ id: s.id, kind: 'source', label: sourceLabel(s), n: row.count, href: `/kb/sources/${row.key}` });
		sourceNodeIds.add(s.id);
		for (const [target, n] of sourceSectionCounts.get(row.key) ?? []) links.push({ source: s.id, target, rel: 'cites', w: n });
	}
	for (const r of related.slice(0, 8)) {
		nodes.push({ id: r.id, kind: 'chapter', label: r.title, n: 1, href: `/kb/topics/${r.slug}` });
		links.push({ source: c.id, target: r.id, rel: 'xref', w: r.w });
	}
	for (const f of forms.slice(0, 12)) {
		const id = `form:${f.form}`;
		nodes.push({ id, kind: 'form', label: f.form, n: f.count, href: `https://mdb.aynu.org/search?q=${encodeURIComponent(f.form)}` });
		links.push({ source: id, target: c.id, rel: 'form', w: f.count });
	}
	if (cls.length) {
		const shown = cls.slice().sort((a, b) => (b.statements?.length ?? 0) - (a.statements?.length ?? 0)).slice(0, 60);
		for (const cl of shown) {
			nodes.push({ id: cl.id, kind: 'claim', label: short(cl.statement?.en ?? '', 70), n: cl.statements?.length ?? 1, href: `/kb/topics/${slug}#${encodeURIComponent(cl.id)}` });
			const sec = (cl.topics ?? []).map((t: string) => topicById.get(t)).find((t: Row | undefined) => t?.kind === 'section' && t.chapter === slug);
			links.push({ source: cl.id, target: sec?.id ?? c.id, rel: 'claims', w: 1 });
			for (const m of cl.statements ?? []) {
				const st = stById.get(m.id);
				if (!st) continue;
				if (!sourceNodeIds.has(st.source)) {
					const s = sourceByKey.get(keyOf(st.source));
					if (!s) continue;
					nodes.push({ id: s.id, kind: 'source', label: sourceLabel(s), n: 1, href: `/kb/sources/${s.key}` });
					sourceNodeIds.add(s.id);
				}
				links.push({ source: st.source, target: cl.id, rel: m.stance, w: 1 });
			}
			for (const r of cl.relations ?? []) if (shown.some((x) => x.id === r.claim)) links.push({ source: cl.id, target: r.claim, rel: r.kind, w: 1 });
		}
	} else {
		for (const st of sts.slice(0, 60)) {
			nodes.push({ id: st.id, kind: 'statement', label: short(st.statement?.en ?? '', 70), n: 1, href: `/kb/sources/${keyOf(st.source)}#${encodeURIComponent(st.id)}` });
			const target = (st.topics ?? []).map((t: string) => topicById.get(t)).find((t: Row | undefined) => t && t.chapter === slug)?.id ?? c.id;
			links.push({ source: st.id, target, rel: 'states', w: 1 });
		}
	}

	const i = chapters.indexOf(c);
	writeJson(join(STATIC_KB, 'topics', `${slug}.json`), {
		topic: { id: c.id, slug, num: c.order, title: c.label.en, summary: c.summary ?? '', home: c.home, question: c.question ?? null, status: c.status },
		part: { id: c.broader[0], label: topicById.get(c.broader[0])?.label.en ?? '' },
		neighbours: {
			prev: chapters[i - 1] ? { slug: chapters[i - 1].chapter, title: chapters[i - 1].label.en } : null,
			next: chapters[i + 1] ? { slug: chapters[i + 1].chapter, title: chapters[i + 1].label.en } : null
		},
		intro: (bySection.get('intro') ?? []).map(sentenceCard),
		sections: secs.map((s) => ({
			id: s.id,
			sid: s.section,
			label: s.label.en,
			question: s.question ?? null,
			depth: s.depth,
			sentences: (bySection.get(s.section) ?? []).map(sentenceCard),
			examples: (exBySection.get(s.section) ?? []).map((e) => e.id),
			statements: (stBySection.get(s.section) ?? []).map((st) => st.id),
			claims: (clBySection.get(s.section) ?? []).map((cl) => cl.id)
		})),
		examples: exs.map(exampleCard),
		sources: sourceRows,
		related,
		forms: forms.slice(0, 40),
		statements: sts.map(statementCard),
		claims: cls.map(claimCard),
		narrative: (narrativeByChapter.get(slug) ?? []).map((n) => ({ id: n.id, section: n.section ?? null, en: n.text?.en ?? '', ja: n.text?.ja ?? '', claims: n.claims ?? [], uncovered: n.uncovered ?? [], unsupported: n.unsupported ?? 0, sentences: n.sentences ?? 0, model: n.model, status: n.status })),
		counts: { sections: secs.length, sentences: sents.length, examples: exs.length, statements: sts.length, claims: cls.length, sources: sourceRows.length, cited: sents.filter((s) => (s.citations as unknown[]).length).length },
		graph: { nodes, links }
	});
}

// ───────────────────────── source pages ─────────────────────────
for (const s of sources) {
	const key = s.key as string;
	const citedBy = [...(agg.bySourceChapter.get(key)?.entries() ?? [])]
		.map(([slug, n]) => ({ slug, title: chapterBySlug.get(slug)?.label.en ?? slug, count: n }))
		.sort((a, b) => b.count - a.count);
	const citations = sentences
		.filter((x) => (x.citations as { key: string }[]).some((c) => c.key === key))
		.slice(0, 400)
		.map((x) => ({
			id: x.id,
			chapter: x.chapter,
			chapter_title: chapterBySlug.get(x.chapter)?.label.en ?? x.chapter,
			section: x.section,
			pages: (x.citations as { key: string; pages: string | null }[]).filter((c) => c.key === key).map((c) => c.pages),
			text: x.text
		}));
	const exs = examples.filter((e) => (e.citations as { key: string }[]).some((ct) => ct.key === key)).slice(0, 200).map(exampleCard);
	const sts = (statementsBySource.get(s.id) ?? []).map(statementCard);
	const topicCounts = new Map<string, number>();
	for (const st of sts) for (const t of st.topics) topicCounts.set(t, (topicCounts.get(t) ?? 0) + 1);
	const asset = assets.find((a) => a.source === s.id);
	const cls = (claimsBySource.get(s.id) ?? []).map(({ claim, stance }) => {
		const top = topicById.get(claim.topic);
		return { id: claim.id, en: claim.statement?.en ?? '', ja: claim.statement?.ja ?? '', stance, members: claim.statements?.length ?? 1, support: support(claim), topic: { slug: top?.chapter ?? null, title: top?.label?.en ?? claim.topic } };
	});
	writeJson(join(STATIC_KB, 'sources', `${key}.json`), {
		source: { ...s, label: sourceLabel(s) },
		asset: asset ? { id: asset.id, engine: asset.engine, leaves: asset.leaves, mapped: Object.keys(asset.pagemap ?? {}).length, calibration: asset.calibration } : null,
		cited_by: citedBy,
		citations,
		examples: exs,
		statements: sts,
		statement_topics: [...topicCounts.entries()]
			.map(([id, n]) => {
				const t = topicById.get(id);
				return { id, slug: t?.chapter ?? null, section: t?.section ?? null, title: t?.label.en ?? id, count: n };
			})
			.sort((a, b) => b.count - a.count),
		claims: cls,
		counts: { cited_by: citedBy.length, citations: citations.length, examples: exs.length, statements: sts.length, claims: cls.length }
	});
}

console.log(JSON.stringify(index.counts));
