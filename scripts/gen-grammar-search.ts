/**
 * Generate static/grammar-search.json — the build-time full-text search index
 * for the reference grammar.
 *
 *   bun scripts/gen-grammar-search.ts
 *
 * Reads the table of contents (src/lib/grammar/toc.ts) and every chapter
 * component (src/lib/grammar/chapters/<slug>.svelte), then emits one record per
 * chapter:
 *
 *   { slug, num, title, part, summary, sections: [{ title, id }], text }
 *
 * Extraction is deliberately tolerant — a `<script>` strip plus regex tag
 * removal — so it never throws on a malformed chapter; an authored chapter
 * yields rich `text`, a placeholder stub yields just title + summary.
 *
 * Wired into `bun run build` (see package.json) so the index is always fresh.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { parts, chapterNumber } from '../src/lib/grammar/toc.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const chaptersDir = join(root, 'src/lib/grammar/chapters');

interface SearchSection {
	title: string;
	id: string;
}
interface SearchDoc {
	slug: string;
	num: number;
	title: string;
	part: string;
	summary: string;
	sections: SearchSection[];
	text: string;
}

/** Read one double-quoted attribute value off a component tag string. */
function attr(tag: string, name: string): string {
	const m = tag.match(new RegExp(`\\b${name}="([^"]*)"`));
	return m ? m[1] : '';
}

/** Decode the handful of HTML entities the chapters actually use. */
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

/** Pull the `<S t="…" id="…">` section headings out of a chapter source. */
function extractSections(raw: string): SearchSection[] {
	const out: SearchSection[] = [];
	for (const m of raw.matchAll(/<S\b[^>]*>/g)) {
		const title = decodeEntities(attr(m[0], 't')).trim();
		const id = attr(m[0], 'id').trim();
		if (title) out.push({ title, id });
	}
	return out;
}

/**
 * Collapse a chapter component down to its searchable plain text: drop the
 * `<script>` block, fold the informative attributes of the custom components
 * (`<Ex>` translations/Ainu forms, `<A>` words + glosses, `<S>` titles) into the
 * flow, strip every remaining tag, then decode entities and normalise spaces.
 */
function extractText(raw: string): string {
	let body = raw.replace(/<script[\s\S]*?<\/script>/gi, ' ');

	// Interlinear examples: keep the Ainu (m/ain/orig), the translation (tr/lit)
	// and any explanatory note so they are all searchable.
	body = body.replace(/<Ex\b[\s\S]*?\/?>/g, (tag) => {
		const fields = ['m', 'ain', 'orig', 'tr', 'lit', 'note']
			.map((a) => attr(tag, a))
			.filter(Boolean);
		return ` ${fields.join(' ')} `;
	});

	// Dictionary words: <A w="ru" gl="track, path" /> → "ru track, path".
	body = body.replace(/<A\b[^>]*?\/?>/g, (tag) => ` ${[attr(tag, 'w'), attr(tag, 'gl')].filter(Boolean).join(' ')} `);

	// Section headings: keep the title text in the prose flow.
	body = body.replace(/<S\b[^>]*>/g, (tag) => ` ${attr(tag, 't')} `);

	// Everything else (p, i, em, table, Ref, Xr, …): drop the tag, keep children.
	body = body.replace(/<[^>]+>/g, ' ');

	return decodeEntities(body).replace(/\s+/g, ' ').trim();
}

const docs: SearchDoc[] = [];

for (const part of parts) {
	for (const c of part.chapters) {
		const file = join(chaptersDir, `${c.slug}.svelte`);
		let sections: SearchSection[] = [];
		let text = '';
		if (existsSync(file)) {
			const raw = readFileSync(file, 'utf8');
			sections = extractSections(raw);
			text = extractText(raw);
		}
		docs.push({
			slug: c.slug,
			num: chapterNumber(c.slug),
			title: c.title,
			part: part.title,
			summary: c.summary,
			sections,
			text
		});
	}
}

const outPath = join(root, 'static/grammar-search.json');
writeFileSync(outPath, JSON.stringify(docs));

const withText = docs.filter((d) => d.text.length > 200).length;
const bytes = readFileSync(outPath).length;
console.log(
	`Wrote ${docs.length} chapter records to static/grammar-search.json ` +
		`(${(bytes / 1024).toFixed(1)} KB; ${withText} with rich text).`
);
