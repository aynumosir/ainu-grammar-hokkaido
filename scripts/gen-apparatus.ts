/**
 * Generate the four back-matter apparatus chapters from the corpus of authored
 * chapters:
 *
 *   consolidated-references-bibliography  ← bibliography.ts, grouped by region
 *   index-of-examples-sources-dialects    ← every <Ex cite= dial=> across chapters
 *   index-of-grammatical-morphemes        ← clitics/affixes + core particles in <Ex m=>
 *   index-of-subjects                     ← every <S t= id=> heading + chapter titles
 *
 *   bun scripts/gen-apparatus.ts
 *
 * These are GENERATED, not hand-authored: re-run after chapters change. Output is
 * plain static chapter .svelte files that fit the normal chapter contract (S/Xr,
 * raw tables), so they render through ChapterShell and are picked up by
 * gen-grammar-search.ts like any other chapter. No <Ex> is emitted (no gloss-count
 * risk); cross-references use <Xr ch=…/> which validates against the TOC.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { parts, chapterNumber } from '../src/lib/grammar/toc.ts';
import { bibliography } from '../src/lib/grammar/bibliography.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const chaptersDir = join(root, 'src/lib/grammar/chapters');

const GENERATED = new Set([
	'consolidated-references-bibliography',
	'index-of-examples-sources-dialects',
	'index-of-grammatical-morphemes',
	'index-of-subjects'
]);

/** Core grammatical free morphemes worth indexing when they head an example token. */
const PARTICLE_SEED = new Set([
	'ne', 'ruwe', 'hawe', 'siri', 'humi', 'sir', 'kor', 'wa', 'hine', 'akusu', 'kusu',
	'sekor', 'an', 'oka', 'okay', 'isam', 'somo', 'ka', 'patek', 'anak', 'anakne',
	'na', 'ya', 'no', 'he', 'tap', 'tane', 'yak', 'yakun', 'ciki', 'korka', 'kuni',
	'un', 'ta', 'or', 'pakno', 'tura', 'ani', 'wano', 'orano', 'newa'
]);

function attr(tag: string, name: string): string {
	const m = tag.match(new RegExp(`\\b${name}="([^"]*)"`));
	return m ? m[1] : '';
}
function decodeEntities(s: string): string {
	return s
		.replace(/&nbsp;/g, ' ')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#(\d+);/g, (_, d: string) => String.fromCodePoint(Number(d)))
		.replace(/&#x([0-9a-fA-F]+);/g, (_, h: string) => String.fromCodePoint(parseInt(h, 16)))
		.replace(/&amp;/g, '&');
}
function esc(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}
/** Strip surrounding punctuation/brackets from a morpheme token. */
function cleanTok(t: string): string {
	return t.replace(/^[\s"'“”「」（）()\[\]‹›.,;:!?]+/, '').replace(/[\s"'“”「」（）()\[\]‹›.,;:!?]+$/, '');
}

interface Chap { slug: string; num: number; title: string; part: string; }
const chaps: Chap[] = [];
for (const part of parts) {
	for (const c of part.chapters) {
		chaps.push({ slug: c.slug, num: chapterNumber(c.slug), title: c.title, part: part.title });
	}
}
const numOf = (slug: string) => chapterNumber(slug);

// ── Scan ─────────────────────────────────────────────────────────────────────
const bySource = new Map<string, Map<string, number>>(); // cite → (slug → count)
const byDialect = new Map<string, number>();              // dial → count
let totalExamples = 0;
const morphemes = new Map<string, Set<string>>();          // morpheme → set<slug>
const subjects: { term: string; slug: string; id: string }[] = [];

for (const c of chaps) {
	if (GENERATED.has(c.slug)) continue;
	const file = join(chaptersDir, `${c.slug}.svelte`);
	if (!existsSync(file)) continue;
	const raw = readFileSync(file, 'utf8');

	for (const m of raw.matchAll(/<S\b[^>]*>/g)) {
		const term = decodeEntities(attr(m[0], 't')).trim();
		const id = attr(m[0], 'id').trim();
		if (term) subjects.push({ term, slug: c.slug, id });
	}

	for (const m of raw.matchAll(/<Ex\b[\s\S]*?\/?>/g)) {
		const tag = m[0];
		const cite = attr(tag, 'cite').trim();
		const dial = attr(tag, 'dial').trim();
		const mline = decodeEntities(attr(tag, 'm')).trim();
		totalExamples++;
		// Parse cite exactly as <Ex> does: split on ';', strip ':pages' → bib key.
		for (const one of cite.split(';').map((s) => s.trim()).filter(Boolean)) {
			const i = one.indexOf(':');
			const key = (i === -1 ? one : one.slice(0, i)).trim();
			if (!key) continue;
			if (!bySource.has(key)) bySource.set(key, new Map());
			const cm = bySource.get(key)!;
			cm.set(c.slug, (cm.get(c.slug) ?? 0) + 1);
		}
		if (dial) for (const d of dial.split(/[\s,/]+/).filter(Boolean)) byDialect.set(d, (byDialect.get(d) ?? 0) + 1);
		if (mline) {
			for (const rawTok of mline.split(/\s+/)) {
				const t = cleanTok(rawTok).toLowerCase();
				if (!t) continue;
				const isAffix = t.includes('=') || (t.includes('-') && t.length <= 8);
				if (isAffix || PARTICLE_SEED.has(t)) {
					if (!morphemes.has(t)) morphemes.set(t, new Set());
					morphemes.get(t)!.add(c.slug);
				}
			}
		}
	}
}

// ── Helpers to emit ──────────────────────────────────────────────────────────
const head = (imports: string) => `<script lang="ts">\n\timport { ${imports} } from '$lib/grammar/components';\n</script>\n\n`;
const xr = (slug: string) => `<Xr ch="${slug}" />`;
const AINU_COLLATE = 'aáàeéèiíìoóòuúù';
const collate = (s: string) =>
	s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

// ── 1. Consolidated references ───────────────────────────────────────────────
{
	const REGIONS: { id: string; title: string; blurb: string }[] = [
		{ id: 'hokkaido', title: 'Hokkaidō Ainu', blurb: 'Primary sources and studies of the variety this grammar describes.' },
		{ id: 'sakhalin', title: 'Sakhalin Ainu', blurb: 'Works on Sakhalin varieties, cited for contrast.' },
		{ id: 'kuril', title: 'Kuril Ainu', blurb: 'Works on the extinct Kuril varieties.' },
		{ id: 'general', title: 'Pan-Ainu, comparative, and methodological works', blurb: 'Dialectology, reconstruction, typology, and conventions.' }
	];
	const entries = Object.entries(bibliography);
	let body = head('S, Xr');
	body += `<S t="Consolidated references" id="references">\n\t<p>\n\t\tThis chapter gathers the ${entries.length} works cited across the grammar into a single\n\t\tconsolidated list, grouped by the variety or domain each work primarily concerns and\n\t\talphabetised by author within each group. Entries marked <span class="reported-badge">reported</span>\n\t\tare cited second-hand, through the source named in the citation, and were not consulted directly.\n\t\tThe same list is available as the running <a href="/grammar/references">references page</a>.\n\t</p>\n</S>\n\n`;
	for (const r of REGIONS) {
		const group = entries
			.filter(([, e]) => e.region === r.id)
			.sort((a, b) => collate(a[1].author).localeCompare(collate(b[1].author)) || a[1].year.localeCompare(b[1].year));
		if (!group.length) continue;
		body += `<S t="${esc(r.title)}" id="${r.id}">\n\t<p class="bib-blurb">${esc(r.blurb)}</p>\n`;
		for (const [, e] of group) {
			const parts2: string[] = [`${esc(e.author)} (${esc(e.year)}).`];
			if (e.lang && e.lang !== 'en') parts2.push(`<i lang="${e.lang}">${esc(e.title)}</i>.`);
			else parts2.push(`<i>${esc(e.title)}</i>.`);
			if (e.titleTr) parts2.push(`[${esc(e.titleTr)}].`);
			if (e.container) parts2.push(`${esc(e.container)}.`);
			if (e.editor) parts2.push(`Ed. ${esc(e.editor)}.`);
			if (e.pages) parts2.push(`${esc(e.pages)}.`);
			if (e.place) parts2.push(`${esc(e.place)}:`);
			if (e.publisher) parts2.push(`${esc(e.publisher)}.`);
			const badge = e.reported ? ` <span class="reported-badge">reported</span>` : '';
			body += `\t<p class="bib-entry">${parts2.join(' ')}${badge}</p>\n`;
		}
		body += `</S>\n\n`;
	}
	writeFileSync(join(chaptersDir, 'consolidated-references-bibliography.svelte'), body);
}

// ── 2. Index of examples by source and dialect ───────────────────────────────
{
	let body = head('S, Xr');
	body += `<S t="Cited examples by source" id="by-source">\n\t<p>\n\t\tThis index lists every source from which an interlinear example is drawn, with the chapters\n\t\tin which its examples appear and the number of examples taken from it. It is generated from the\n\t\t${totalExamples} attested and constructed examples across the grammar; constructed examples are\n\t\tattributed to the source whose analysis they illustrate. Full bibliographic details are in\n\t\t${xr('consolidated-references-bibliography')}.\n\t</p>\n\t<table>\n\t\t<thead><tr><th>Source</th><th>Examples</th><th>Chapters</th></tr></thead>\n\t\t<tbody>\n`;
	const sources = [...bySource.entries()].sort((a, b) => {
		const ea = bibliography[a[0]], eb = bibliography[b[0]];
		const na = ea ? collate(ea.author) : a[0], nb = eb ? collate(eb.author) : b[0];
		return na.localeCompare(nb);
	});
	for (const [cite, cm] of sources) {
		const e = bibliography[cite];
		const label = e ? `${esc(e.citeAuthor)} (${esc(e.year)})` : esc(cite);
		const total = [...cm.values()].reduce((a, b) => a + b, 0);
		const chapSlugs = [...cm.keys()].sort((a, b) => numOf(a) - numOf(b));
		const links = chapSlugs.map((s) => xr(s)).join(', ');
		body += `\t\t\t<tr><td>${label}</td><td>${total}</td><td>${links}</td></tr>\n`;
	}
	body += `\t\t</tbody>\n\t</table>\n</S>\n\n`;
	// dialect summary
	const dials = [...byDialect.entries()].sort((a, b) => b[1] - a[1]);
	body += `<S t="Examples by dialect" id="by-dialect">\n\t<p>\n\t\tThe distribution of interlinear examples across the dialects and dialect labels used in the\n\t\tgrammar. Saru (SAR) and Chitose (CHI) form the descriptive core; other Hokkaido dialects and the\n\t\tlabelled Sakhalin (SA) contrast appear where documented.\n\t</p>\n\t<table>\n\t\t<thead><tr><th>Dialect / label</th><th>Examples</th></tr></thead>\n\t\t<tbody>\n`;
	for (const [d, n] of dials) body += `\t\t\t<tr><td>${esc(d)}</td><td>${n}</td></tr>\n`;
	body += `\t\t</tbody>\n\t</table>\n</S>\n`;
	writeFileSync(join(chaptersDir, 'index-of-examples-sources-dialects.svelte'), body);
}

// ── 3. Index of grammatical morphemes ────────────────────────────────────────
{
	const items = [...morphemes.entries()]
		.filter(([, set]) => set.size > 0)
		.sort((a, b) => collate(a[0]).localeCompare(collate(b[0])) || a[0].localeCompare(b[0]));
	let body = head('S, Xr');
	body += `<S t="Index of grammatical morphemes" id="morphemes">\n\t<p>\n\t\tThis index lists the person clitics (marked <i lang="ain-Latn">=</i>), bound affixes (marked\n\t\t<i lang="ain-Latn">-</i>), and core grammatical particles and formatives that appear in the\n\t\tgrammar's interlinear examples, each with the chapters in which it is exemplified. It is generated\n\t\tfrom the example corpus and is an index to attested usage, not an exhaustive morpheme dictionary;\n\t\tthe analysis of each form is given in the chapters cross-referenced. Lexical roots are omitted.\n\t</p>\n\t<ul class="morph-index">\n`;
	for (const [morph, set] of items) {
		const slugs = [...set].sort((a, b) => numOf(a) - numOf(b));
		const links = slugs.map((s) => xr(s)).join(', ');
		body += `\t\t<li><i lang="ain-Latn">${esc(morph)}</i> — ${links}</li>\n`;
	}
	body += `\t</ul>\n</S>\n`;
	writeFileSync(join(chaptersDir, 'index-of-grammatical-morphemes.svelte'), body);
}

// ── 4. Index of subjects ─────────────────────────────────────────────────────
{
	// dedupe (term, slug); a term can point at several chapters
	const seen = new Set<string>();
	const map = new Map<string, Set<string>>(); // term → set<slug>
	for (const s of subjects) {
		const key = `${s.term} ${s.slug}`;
		if (seen.has(key)) continue;
		seen.add(key);
		if (!map.has(s.term)) map.set(s.term, new Set());
		map.get(s.term)!.add(s.slug);
	}
	const terms = [...map.entries()].sort((a, b) => collate(a[0]).localeCompare(collate(b[0])));
	// group by first letter
	const groups = new Map<string, [string, Set<string>][]>();
	for (const t of terms) {
		const first = collate(t[0]).charAt(0).toUpperCase();
		const letter = /[A-Z]/.test(first) ? first : '#';
		if (!groups.has(letter)) groups.set(letter, []);
		groups.get(letter)!.push(t);
	}
	let body = head('S, Xr');
	body += `<S t="Index of subjects" id="subjects">\n\t<p>\n\t\tThis subject index is generated from the section headings of every chapter of the grammar. Each\n\t\tentry links to the chapter or chapters in which the topic is treated; where a topic recurs, the\n\t\tchapters are listed in reading order. For grammatical formatives see\n\t\t${xr('index-of-grammatical-morphemes')}; for cited examples by source see\n\t\t${xr('index-of-examples-sources-dialects')}.\n\t</p>\n`;
	for (const [letter, list] of [...groups.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
		body += `\t<h3>${letter}</h3>\n\t<ul class="subject-index">\n`;
		for (const [term, set] of list) {
			const slugs = [...set].sort((a, b) => numOf(a) - numOf(b));
			const links = slugs.map((s) => xr(s)).join(', ');
			body += `\t\t<li>${esc(term)} — ${links}</li>\n`;
		}
		body += `\t</ul>\n`;
	}
	body += `</S>\n`;
	writeFileSync(join(chaptersDir, 'index-of-subjects.svelte'), body);
}

console.log(
	`apparatus: ${Object.keys(bibliography).length} refs; ` +
	`${bySource.size} sources / ${totalExamples} examples / ${byDialect.size} dialects; ` +
	`${morphemes.size} morphemes; ${new Set(subjects.map((s) => s.term)).size} subject headings.`
);
