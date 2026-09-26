/**
 * import-first-edition.ts — the first edition of the book as records.
 *
 *   bun scripts/kb/import-first-edition.ts
 *
 * Reads toc-final.json and src/lib/grammar/chapters/<slug>.svelte and writes:
 *   kb/registries/topics.jsonl          parts, chapters and sections as candidate topics
 *   kb/imports/book-v1/sentences.jsonl  one record per sentence of prose, with the citations,
 *                                       grade tags, cross-references and forms it carries
 *   kb/imports/book-v1/manifest.json    book revision, parser version, counts
 *   kb/examples/book-v1.jsonl           every interlinear example, with its citation and dialect tag
 *
 * No model is called. Sentence splitting is heuristic; a sentence record is a
 * structural unit of the first edition and never an assertion of the base.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
	DIALECT_DOCULECT,
	KB,
	PART_DOMAIN,
	ROOT,
	chapterTopicId,
	decodeEntities,
	gitHead,
	parseAttrs,
	partTopicId,
	plainText,
	readJsonl,
	sectionTopicId,
	writeJson,
	writeJsonl
} from './lib';

const PARSER = 'import-first-edition@0.1';

interface TocChapter {
	num: number;
	slug: string;
	title: string;
	summary: string;
}
interface TocPart {
	title: string;
	chapters: TocChapter[];
}
const toc = JSON.parse(readFileSync(join(ROOT, 'toc-final.json'), 'utf8')) as { parts: TocPart[] };

interface Section {
	sid: string;
	title: string;
	start: number; // offset just after the opening tag
	end: number; // offset of the closing tag
	depth: number;
	order: number;
	parent: Section | null;
}

/** Scan `<S …>` / `</S>` tags into a section tree (offsets refer to `src`). */
function scanSections(src: string): Section[] {
	const events: { at: number; open: boolean; len: number; attrs?: string }[] = [];
	const openRe = /<S\s+([\s\S]*?)>/g;
	const closeRe = /<\/S>/g;
	let m: RegExpExecArray | null;
	while ((m = openRe.exec(src))) events.push({ at: m.index, open: true, len: m[0].length, attrs: m[1] });
	while ((m = closeRe.exec(src))) events.push({ at: m.index, open: false, len: m[0].length });
	events.sort((a, b) => a.at - b.at);
	const out: Section[] = [];
	const stack: Section[] = [];
	const counters: number[] = [0];
	for (const e of events) {
		if (e.open) {
			const a = parseAttrs(e.attrs ?? '');
			const title = typeof a.t === 'string' ? decodeEntities(a.t) : '';
			const depth = stack.length;
			counters[depth] = (counters[depth] ?? 0) + 1;
			counters.length = depth + 1;
			const sidRaw = typeof a.id === 'string' && a.id ? a.id : slugify(title) || `s${counters.join('-')}`;
			const sec: Section = {
				sid: sidRaw,
				title,
				start: e.at + e.len,
				end: src.length,
				depth,
				order: out.length,
				parent: stack[stack.length - 1] ?? null
			};
			out.push(sec);
			stack.push(sec);
		} else {
			const sec = stack.pop();
			if (sec) sec.end = e.at;
		}
	}
	// disambiguate duplicate ids within a chapter
	const seen = new Map<string, number>();
	for (const s of out) {
		const n = (seen.get(s.sid) ?? 0) + 1;
		seen.set(s.sid, n);
		if (n > 1) s.sid = `${s.sid}-${n}`;
	}
	return out;
}

function slugify(s: string): string {
	return s
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.slice(0, 60);
}

function innermost(sections: Section[], at: number): Section | null {
	let best: Section | null = null;
	for (const s of sections) {
		if (s.start <= at && at < s.end && (!best || s.depth > best.depth)) best = s;
	}
	return best;
}

/** Blank a span with spaces so later offsets stay valid. */
function blank(src: string, start: number, end: number): string {
	return src.slice(0, start) + ' '.repeat(end - start) + src.slice(end);
}

const SENTENCE_SPLIT = /(?<=[.!?›])\s+(?=[A-Z<‹(])/;

interface Citation {
	key: string;
	pages: string | null;
}

function citationsOf(html: string): Citation[] {
	const out: Citation[] = [];
	const re = /<Ref\s+([^>]*?)\/?>/g;
	let m: RegExpExecArray | null;
	while ((m = re.exec(html))) {
		const a = parseAttrs(m[1]);
		if (typeof a.k === 'string') out.push({ key: a.k, pages: typeof a.p === 'string' ? a.p : null });
	}
	return out;
}
const collect = (html: string, re: RegExp) => {
	const out: string[] = [];
	let m: RegExpExecArray | null;
	while ((m = re.exec(html))) out.push(decodeEntities(m[1]));
	return out;
};

const topics: Record<string, unknown>[] = [];
const sentences: Record<string, unknown>[] = [];
const examples: Record<string, unknown>[] = [];
const counts = { chapters: 0, chaptersWithText: 0, sections: 0, sentences: 0, examples: 0, citations: 0, tables: 0 };

toc.parts.forEach((part, pi) => {
	const domain = PART_DOMAIN[pi] ?? 'misc';
	const partId = partTopicId(domain, pi + 1);
	topics.push({
		id: partId,
		kind: 'part',
		label: { en: part.title },
		question: null,
		broader: [],
		related: [],
		order: pi + 1,
		depth: 0,
		home: domain,
		origin: { import: 'book-v1', ref: `part:${pi + 1}` },
		status: 'candidate'
	});

	for (const ch of part.chapters) {
		counts.chapters++;
		const chId = chapterTopicId(domain, ch.slug);
		const file = join(ROOT, 'src/lib/grammar/chapters', `${ch.slug}.svelte`);
		const related = new Set<string>();
		const chapterTopic: Record<string, unknown> = {
			id: chId,
			kind: 'chapter',
			label: { en: ch.title },
			question: null,
			summary: ch.summary,
			broader: [partId],
			related: [] as string[],
			order: ch.num,
			depth: 1,
			home: domain,
			chapter: ch.slug,
			origin: { import: 'book-v1', ref: `chapter:${ch.slug}` },
			status: 'candidate'
		};
		topics.push(chapterTopic);
		if (!existsSync(file)) continue;
		counts.chaptersWithText++;

		let src = readFileSync(file, 'utf8');
		src = src.replace(/<script[\s\S]*?<\/script>/g, (s) => ' '.repeat(s.length));
		const sections = scanSections(src);
		counts.sections += sections.length;
		const sectionTopicIds = new Map<Section, string>();
		for (const s of sections) {
			const id = sectionTopicId(domain, ch.slug, s.sid);
			sectionTopicIds.set(s, id);
			topics.push({
				id,
				kind: 'section',
				label: { en: s.title },
				question: null,
				broader: [s.parent ? sectionTopicIds.get(s.parent)! : chId],
				related: [],
				order: s.order + 1,
				depth: s.depth + 2,
				home: domain,
				chapter: ch.slug,
				section: s.sid,
				origin: { import: 'book-v1', ref: `section:${ch.slug}#${s.sid}` },
				status: 'candidate'
			});
		}
		const topicAt = (at: number) => {
			const s = innermost(sections, at);
			return s ? { topic: sectionTopicIds.get(s)!, section: s.sid } : { topic: chId, section: 'intro' };
		};

		// examples, then blank them so paragraph scanning does not see their attributes
		const exRe = /<Ex\b([\s\S]*?)\/>|<Ex\b([^>]*)>[\s\S]*?<\/Ex>/g;
		const exCounter = new Map<string, number>();
		let m: RegExpExecArray | null;
		const exSpans: [number, number][] = [];
		while ((m = exRe.exec(src))) {
			const a = parseAttrs(m[1] ?? m[2] ?? '');
			const where = topicAt(m.index);
			const n = (exCounter.get(where.section) ?? 0) + 1;
			exCounter.set(where.section, n);
			// `cite` names one or more sources, separated by semicolons: "sato2008:47; sato2009:52"
			const citations: Citation[] = (typeof a.cite === 'string' ? a.cite : '')
				.split(';')
				.map((s) => s.trim())
				.filter(Boolean)
				.map((s) => {
					const i = s.indexOf(':');
					return i > 0 ? { key: s.slice(0, i).trim(), pages: s.slice(i + 1).trim() } : { key: s, pages: null };
				});
			const dial = typeof a.dial === 'string' ? a.dial : null;
			const text = typeof a.m === 'string' ? decodeEntities(a.m) : '';
			examples.push({
				id: `ex:book-v1/${ch.slug}#${where.section}/${n}`,
				origin: 'book-v1',
				ref: typeof a.id === 'string' ? a.id : '',
				chapter: ch.slug,
				section: where.section,
				topic: where.topic,
				text,
				gloss: typeof a.g === 'string' ? decodeEntities(a.g) : '',
				...(typeof a.ain === 'string' ? { kana: decodeEntities(a.ain) } : {}),
				...(typeof a.orig === 'string' ? { original: decodeEntities(a.orig) } : {}),
				...(typeof a.origLang === 'string' ? { original_lang: a.origLang } : {}),
				translation: typeof a.tr === 'string' ? decodeEntities(a.tr) : '',
				...(typeof a.lit === 'string' ? { literal: decodeEntities(a.lit) } : {}),
				citations,
				constructed: a.constructed === true || a.constructed === 'true',
				dialect_tag: dial,
				doculect: dial ? (DIALECT_DOCULECT[dial] ?? null) : null,
				...(typeof a.place === 'string' ? { place: decodeEntities(a.place) } : {}),
				...(typeof a.note === 'string' ? { note: decodeEntities(a.note) } : {}),
				forms: text.split(/\s+/).filter(Boolean)
			});
			counts.examples++;
			exSpans.push([m.index, m.index + m[0].length]);
		}
		for (const [s, e] of exSpans) src = blank(src, s, e);
		counts.tables += (src.match(/<table/g) ?? []).length;

		// prose: paragraphs and list items, innermost section by offset
		const blockRe = /<(p|li)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/g;
		const paraCounter = new Map<string, number>();
		while ((m = blockRe.exec(src))) {
			const where = topicAt(m.index);
			const p = (paraCounter.get(where.section) ?? 0) + 1;
			paraCounter.set(where.section, p);
			const raw = m[2].replace(/\s+/g, ' ').trim();
			const parts = raw.split(SENTENCE_SPLIT);
			let si = 0;
			for (const html of parts) {
				const text = plainText(html);
				if (text.length < 3) continue;
				si++;
				const citations = citationsOf(html);
				counts.citations += citations.length;
				const xrefs = collect(html, /<Xr\s+ch="([^"]+)"/g);
				for (const x of xrefs) if (x !== ch.slug) related.add(x);
				const forms = [
					...collect(html, /<A\s+w="([^"]+)"/g),
					...collect(html, /<i lang="ain-[A-Za-z]+">([^<]+)<\/i>/g)
				];
				sentences.push({
					id: `book-v1:${ch.slug}#${where.section}/p${p}/s${si}`,
					chapter: ch.slug,
					section: where.section,
					para: p,
					index: si,
					text,
					citations,
					grades: collect(html, /‹([a-z-]+)›/g),
					xrefs,
					forms,
					topic: where.topic
				});
				counts.sentences++;
			}
		}
		chapterTopic.related = [...related];
	}
});

// cross-reference targets as topic ids (chapter slug → chapter topic id)
const chapterIdBySlug = new Map<string, string>();
for (const t of topics) if (t.kind === 'chapter') chapterIdBySlug.set(t.chapter as string, t.id as string);
for (const t of topics) {
	if (t.kind !== 'chapter') continue;
	t.related = (t.related as string[]).map((s) => chapterIdBySlug.get(s)).filter((x): x is string => !!x);
}

// the questions and review status of topics are written by later steps and survive a re-import
const topicsPath = join(KB, 'registries/topics.jsonl');
if (existsSync(topicsPath)) {
	const previous = new Map(readJsonl<Record<string, unknown>>(topicsPath).map((t) => [t.id as string, t]));
	for (const t of topics) {
		const old = previous.get(t.id as string);
		if (!old) continue;
		if (t.question == null && old.question != null) t.question = old.question;
		if (old.status === 'reviewed') t.status = 'reviewed';
	}
}
writeJsonl(topicsPath, topics);
writeJsonl(join(KB, 'imports/book-v1/sentences.jsonl'), sentences);
writeJsonl(join(KB, 'examples/book-v1.jsonl'), examples);
writeJson(
	join(KB, 'imports/book-v1/manifest.json'),
	{
		import: 'book-v1',
		book_revision: gitHead(),
		parser: PARSER,
		generated: new Date().toISOString().slice(0, 10),
		counts: { ...counts, topics: topics.length }
	},
	true
);
console.log(JSON.stringify({ ...counts, topics: topics.length }));
