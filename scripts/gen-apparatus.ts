/**
 * Generate lookup data for the four handwritten back-matter chapters.
 *
 *   bun scripts/gen-apparatus.ts [--check]
 *
 * Only src/lib/grammar/data/apparatus.json is generated. Chapter components,
 * introductions, curated grammatical entries and their analyses stay authored.
 * Example tokens are whitespace-delimited words from Ex.m, not an inferred
 * morpheme inventory. Missing dialect metadata stays null, distinct from HK.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse, type AST } from 'svelte/compiler';
import { parts, chapterNumber } from '../src/lib/grammar/toc.ts';
import { bibliography, type BibEntry } from '../src/lib/grammar/bibliography.ts';
import { dialectLabels } from '../src/lib/grammar/abbreviations.ts';

export const APPARATUS_CHAPTERS = new Set([
	'consolidated-references-bibliography',
	'index-of-examples-sources-dialects',
	'index-of-grammatical-morphemes',
	'index-of-subjects'
]);

export interface ChapterInput {
	slug: string;
	num: number;
	title: string;
	source: string;
}
interface Target {
	chapter: string;
	section: string | null;
}
interface Example {
	chapter: string;
	/** Chapter-local displayed number; not an invented anchor. */
	number: number;
	id: string | null;
	m: string;
	constructed: boolean;
	dialect: string | null;
	citations: { key: string; locator: string | null }[];
	place: string | null;
	note: string | null;
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const collate = (value: string) => value.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '');
const compare = (a: string, b: string) =>
	collate(a).localeCompare(collate(b), 'en') || a.localeCompare(b, 'en');

/** Accept literal metadata, including entities and quoted/literal expressions. */
function staticAttribute(
	node: AST.Component,
	name: string,
	chapter: string
): string | boolean | undefined {
	if (node.attributes.some((attribute) => attribute.type === 'SpreadAttribute')) {
		throw new Error(`${chapter}: <${node.name}> spread attributes cannot be indexed statically`);
	}
	const attribute = node.attributes.find((item) => item.type === 'Attribute' && item.name === name);
	if (!attribute || attribute.type !== 'Attribute') return undefined;
	if (attribute.value === true) return true;
	const pieces = Array.isArray(attribute.value) ? attribute.value : [attribute.value];
	const values = pieces.map((piece) => {
		if (piece.type === 'Text') return piece.data;
		if (
			piece.expression.type === 'Literal' &&
			['string', 'boolean'].includes(typeof piece.expression.value)
		) {
			return piece.expression.value as string | boolean;
		}
		throw new Error(`${chapter}: <${node.name}> ${name} must be a static string or boolean`);
	});
	if (values.length === 1) return values[0];
	if (values.some((value) => typeof value !== 'string')) {
		throw new Error(`${chapter}: <${node.name}> ${name} mixes boolean and string values`);
	}
	return values.join('');
}

function stringAttribute(node: AST.Component, name: string, chapter: string): string | null {
	const value = staticAttribute(node, name, chapter);
	if (value === undefined) return null;
	if (typeof value !== 'string')
		throw new Error(`${chapter}: <${node.name}> ${name} must be a string`);
	return value.trim() || null;
}

/** Visit only the template, never comments or script text containing sample tags. */
function visitTemplate(
	value: unknown,
	visit: (node: AST.Component) => void,
	dynamic = false
): void {
	if (!value || typeof value !== 'object') return;
	if (Array.isArray(value)) {
		for (const item of value) visitTemplate(item, visit, dynamic);
		return;
	}
	const node = value as Record<string, unknown>;
	const conditional =
		dynamic || ['IfBlock', 'EachBlock', 'AwaitBlock', 'SnippetBlock'].includes(String(node.type));
	if (node.type === 'Component' && ['S', 'Ex'].includes(String(node.name))) {
		if (conditional)
			throw new Error(
				`<${node.name}> inside a conditional, loop or snippet cannot be counted statically`
			);
		visit(value as AST.Component);
	}
	for (const child of Object.values(node)) visitTemplate(child, visit, conditional);
}

export function buildApparatus(
	chapters: ChapterInput[],
	bib: Record<string, BibEntry> = bibliography,
	labels: Record<string, string> = dialectLabels
) {
	const inputs = [...chapters]
		.filter((chapter) => !APPARATUS_CHAPTERS.has(chapter.slug))
		.sort((a, b) => a.num - b.num || compare(a.slug, b.slug));
	const chapterNumbers = new Map(inputs.map((chapter) => [chapter.slug, chapter.num]));
	if (chapterNumbers.size !== inputs.length)
		throw new Error('Duplicate chapter slug in apparatus input');
	const compareChapters = (a: string, b: string) =>
		chapterNumbers.get(a)! - chapterNumbers.get(b)! || compare(a, b);
	const examples: Example[] = [];
	const subjects = new Map<string, Target[]>();
	const addSubject = (term: string, target: Target) => {
		const targets = subjects.get(term) ?? [];
		if (!targets.some((old) => old.chapter === target.chapter && old.section === target.section))
			targets.push(target);
		subjects.set(term, targets);
	};
	for (const chapter of inputs) {
		addSubject(chapter.title, { chapter: chapter.slug, section: null });
		let number = 0;
		const ids = new Set<string>();
		const tree = parse(chapter.source, { modern: true });
		try {
			visitTemplate(tree.fragment, (node) => {
				const get = (name: string) => stringAttribute(node, name, chapter.slug);
				const id = get('id');
				if (id) {
					if (ids.has(id)) throw new Error(`duplicate section/example ID ${id}`);
					ids.add(id);
				}
				if (node.name === 'S') {
					const term = get('t');
					if (!term) throw new Error('section has no title');
					addSubject(term, { chapter: chapter.slug, section: id });
					return;
				}
				const constructed = staticAttribute(node, 'constructed', chapter.slug) ?? false;
				if (typeof constructed !== 'boolean') throw new Error('constructed must be a boolean');
				const dialect = get('dial');
				if (dialect && !(dialect in labels)) throw new Error(`unknown dialect ${dialect}`);
				const citations = (get('cite') ?? '')
					.split(';')
					.map((citation) => citation.trim())
					.filter(Boolean)
					.map((citation) => {
						const colon = citation.indexOf(':');
						const key = (colon === -1 ? citation : citation.slice(0, colon)).trim();
						if (!(key in bib)) throw new Error(`unknown bibliography key ${key}`);
						return { key, locator: colon === -1 ? null : citation.slice(colon + 1).trim() || null };
					});
				if (!constructed && !citations.length)
					throw new Error('uncited example is not marked constructed');
				const m = get('m');
				if (!m) throw new Error('example has no morphemic line');
				examples.push({
					chapter: chapter.slug,
					number: ++number,
					id,
					m,
					constructed,
					dialect,
					citations,
					place: get('place'),
					note: get('note')
				});
			});
		} catch (error) {
			throw new Error(`${chapter.slug}: ${error instanceof Error ? error.message : String(error)}`);
		}
	}
	const sourceGroups = new Map<string, number[]>();
	const dialectGroups = new Map<string | null, number[]>();
	const tokenGroups = new Map<string, number[]>();
	const addIndex = <K>(map: Map<K, number[]>, key: K, index: number) => {
		const indices = map.get(key) ?? [];
		indices.push(index);
		map.set(key, indices);
	};
	examples.forEach((example, index) => {
		// One example counts once per source even when two pages of that source are cited.
		for (const key of new Set(example.citations.map((citation) => citation.key)))
			addIndex(sourceGroups, key, index);
		addIndex(dialectGroups, example.dialect, index);
		// Keep complete display tokens and boundary notation; infer no morphemes or word classes.
		const tokens = example.m
			.split(/\s+/)
			.map((token) =>
				token.replace(/^[“”「」（）()\[\]‹›.,;:!?]+|[“”「」（）()\[\]‹›.,;:!?]+$/g, '')
			)
			.filter(Boolean);
		for (const token of new Set(tokens)) addIndex(tokenGroups, token, index);
	});
	const chapterCounts = (indices: number[]) => {
		const counts = new Map<string, number>();
		for (const index of indices)
			counts.set(examples[index].chapter, (counts.get(examples[index].chapter) ?? 0) + 1);
		return [...counts]
			.sort(([a], [b]) => compareChapters(a, b))
			.map(([slug, count]) => ({ slug, count }));
	};
	const compareSources = (a: string, b: string) =>
		compare(bib[a].author, bib[b].author) ||
		compare(bib[a].year, bib[b].year) ||
		compare(bib[a].title, bib[b].title) ||
		compare(a, b);
	return {
		schemaVersion: 1,
		references: (['hokkaido', 'sakhalin', 'kuril', 'general'] as const).map((region) => ({
			region,
			keys: Object.keys(bib)
				.filter((key) => bib[key].region === region)
				.sort(compareSources)
		})),
		totalExamples: examples.length,
		examples,
		sources: [...sourceGroups]
			.sort(([a], [b]) => compareSources(a, b))
			.map(([key, exampleIndices]) => ({
				key,
				count: exampleIndices.length,
				constructedCount: exampleIndices.filter((index) => examples[index].constructed).length,
				chapters: chapterCounts(exampleIndices),
				exampleIndices
			})),
		dialects: [...dialectGroups]
			.sort(([a, ai], [b, bi]) => bi.length - ai.length || compare(a ?? '', b ?? ''))
			.map(([code, exampleIndices]) => ({
				code,
				label: code === null ? 'Dialect unspecified' : labels[code],
				count: exampleIndices.length,
				exampleIndices
			})),
		exampleTokens: [...tokenGroups]
			.sort(([a], [b]) => compare(a, b))
			.map(([form, exampleIndices]) => ({
				form,
				chapters: chapterCounts(exampleIndices).map(({ slug }) => slug),
				exampleIndices
			})),
		subjects: [...subjects]
			.sort(([a], [b]) => compare(a, b))
			.map(([term, targets]) => ({ term, targets }))
	};
}

export function generateApparatus(
	options: { chaptersDir?: string; outputFile?: string; check?: boolean } = {}
) {
	const chaptersDir = options.chaptersDir ?? join(root, 'src/lib/grammar/chapters');
	const outputFile = options.outputFile ?? join(root, 'src/lib/grammar/data/apparatus.json');
	if (extname(outputFile) !== '.json') throw new Error('Apparatus output must be a JSON data file');
	const chapters = parts
		.flatMap((part) => part.chapters)
		.filter((chapter) => !APPARATUS_CHAPTERS.has(chapter.slug))
		.map((chapter) => ({
			slug: chapter.slug,
			title: chapter.title,
			num: chapterNumber(chapter.slug),
			source: readFileSync(join(chaptersDir, `${chapter.slug}.svelte`), 'utf8')
		}));
	const data = buildApparatus(chapters);
	const content = JSON.stringify(data, null, '\t') + '\n';
	if (options.check) {
		if (!existsSync(outputFile) || readFileSync(outputFile, 'utf8') !== content) {
			throw new Error('Apparatus data is stale; run bun scripts/gen-apparatus.ts');
		}
	} else {
		mkdirSync(dirname(outputFile), { recursive: true });
		writeFileSync(outputFile, content);
	}
	return data;
}

if (import.meta.main) {
	const data = generateApparatus({ check: process.argv.includes('--check') });
	console.log(
		`apparatus: ${data.references.reduce((sum, group) => sum + group.keys.length, 0)} registered references; ` +
			`${data.totalExamples} examples; ${data.exampleTokens.length} example tokens; ${data.subjects.length} subject entries`
	);
}
