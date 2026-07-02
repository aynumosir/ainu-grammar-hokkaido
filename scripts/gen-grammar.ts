/**
 * Generate src/lib/grammar/toc.ts and a placeholder chapter component for every
 * chapter slug, deterministically, from toc-final.json.
 *
 *   bun scripts/gen-grammar.ts
 *
 * Re-run whenever toc-final.json changes. The generated toc.ts and chapters/ are
 * checked in; this script is the source of truth for their shape.
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

interface RawChapter {
	num: number;
	slug: string;
	title: string;
	summary: string;
}
interface RawPart {
	num: number;
	title: string;
	slug: string;
	scope: string;
	chapters: RawChapter[];
}
interface RawToc {
	parts: RawPart[];
	totalChapters: number;
}

const toc = JSON.parse(readFileSync(join(root, 'toc-final.json'), 'utf8')) as RawToc;

const q = (s: string) => JSON.stringify(s);

// ——— toc.ts ———

const partLiterals = toc.parts
	.map((part) => {
		const chapters = part.chapters
			.map(
				(c) =>
					`\t\t\t{\n\t\t\t\tslug: ${q(c.slug)},\n\t\t\t\ttitle: ${q(c.title)},\n\t\t\t\tsummary: ${q(c.summary)}\n\t\t\t}`
			)
			.join(',\n');
		return `\t{\n\t\ttitle: ${q(part.title)},\n\t\tchapters: [\n${chapters}\n\t\t]\n\t}`;
	})
	.join(',\n');

const tocTs = `/**
 * Table of contents for the reference grammar.
 *
 * GENERATED FILE — produced by scripts/gen-grammar.ts from toc-final.json.
 * Do not edit by hand; edit toc-final.json and re-run the script instead.
 *
 * Chapter numbers are derived from array order (1-based). Each chapter is a
 * Svelte component at \`$lib/grammar/chapters/<slug>.svelte\`. The two appendix
 * pages (abbreviations, references) are rendered from data modules instead.
 */

export interface ChapterMeta {
	slug: string;
	/** Full chapter title as shown on the page. */
	title: string;
	/** Shorter label for navigation, defaults to title. */
	short?: string;
	/** One-sentence summary for the table of contents. */
	summary: string;
}

export interface Part {
	title: string;
	chapters: ChapterMeta[];
}

export const parts: Part[] = [
${partLiterals}
];

/** Unnumbered front-matter chapters; chapterNumber() yields 0 for these. */
const FRONT_MATTER = new Set<string>([]);

const allChapters: ChapterMeta[] = parts.flatMap((p) => p.chapters);

/**
 * The numbered chapters, in order; array index + 1 is the chapter number.
 * Front matter is excluded so that adding it never renumbers anything.
 */
export const chapters: ChapterMeta[] = allChapters.filter((c) => !FRONT_MATTER.has(c.slug));

export function chapterNumber(slug: string): number {
	return chapters.findIndex((c) => c.slug === slug) + 1;
}

export function chapterBySlug(slug: string): ChapterMeta | undefined {
	return allChapters.find((c) => c.slug === slug);
}

/** Back-matter pages rendered from data rather than chapter files. */
export const appendices = [
	{ slug: 'abbreviations', title: 'Abbreviations and conventions' },
	{ slug: 'references', title: 'References' }
] as const;
`;

writeFileSync(join(root, 'src/lib/grammar/toc.ts'), tocTs);

// ——— placeholder chapter components ———

const chaptersDir = join(root, 'src/lib/grammar/chapters');
mkdirSync(chaptersDir, { recursive: true });

// Clear out previously generated stubs so removed slugs don't linger.
for (const f of readdirSync(chaptersDir)) {
	if (f.endsWith('.svelte')) rmSync(join(chaptersDir, f));
}

const allChapters = toc.parts.flatMap((p) => p.chapters);
let count = 0;
for (const c of allChapters) {
	const stub = `<!-- Placeholder chapter generated from toc-final.json. Replace with authored content. -->
<!-- The chapter title and summary are rendered by ChapterShell; this stub fills the body. -->
<p class="ch-stub"><em>— chapter in preparation —</em></p>
`;
	writeFileSync(join(chaptersDir, `${c.slug}.svelte`), stub);
	count++;
}

console.log(`Generated toc.ts (${toc.parts.length} parts) and ${count} chapter stubs.`);
