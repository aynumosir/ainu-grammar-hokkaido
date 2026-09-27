import { afterEach, expect, test } from 'bun:test';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { parts } from '../src/lib/grammar/toc';
import { type BibEntry } from '../src/lib/grammar/bibliography';
import { APPARATUS_CHAPTERS, buildApparatus, generateApparatus } from './gen-apparatus';

const bib: Record<string, BibEntry> = {
	first: {
		author: 'Satō',
		citeAuthor: 'Satō',
		year: '2009',
		title: 'First study',
		region: 'hokkaido'
	},
	second: {
		author: 'Satō',
		citeAuthor: 'Satō',
		year: '2009',
		title: 'Second study',
		region: 'hokkaido'
	},
	proseOnly: {
		author: 'Z',
		citeAuthor: 'Z',
		year: '2010',
		title: 'Registered study',
		region: 'general'
	}
};
const chapter = (source: string) => ({ slug: 'fixture', num: 1, title: 'Fixture chapter', source });
const temporary: string[] = [];
afterEach(() => {
	for (const dir of temporary.splice(0)) rmSync(dir, { recursive: true, force: true });
});

test('generation and check mode never rewrite handwritten apparatus chapters', () => {
	const dir = mkdtempSync(join(tmpdir(), 'ainu-apparatus-test-'));
	temporary.push(dir);
	const chaptersDir = join(dir, 'chapters');
	mkdirSync(chaptersDir);
	const originals = new Map<string, string>();
	for (const item of parts.flatMap((part) => part.chapters)) {
		const source = APPARATUS_CHAPTERS.has(item.slug)
			? `<script>const title = 'Handwritten introduction';</script>\n<p>${item.slug}: preserve this prose byte for byte.</p>\n`
			: `<S t="Handwritten section" id="manual"><p>Authored text.</p></S>\n`;
		const file = join(chaptersDir, `${item.slug}.svelte`);
		writeFileSync(file, source);
		originals.set(file, source);
	}
	const outputFile = join(dir, 'data', 'apparatus.json');
	generateApparatus({ chaptersDir, outputFile });
	const first = readFileSync(outputFile, 'utf8');
	generateApparatus({ chaptersDir, outputFile });
	expect(readFileSync(outputFile, 'utf8')).toBe(first);
	generateApparatus({ chaptersDir, outputFile, check: true });
	for (const [file, source] of originals) expect(readFileSync(file, 'utf8')).toBe(source);
	writeFileSync(outputFile, '{}\n');
	expect(() => generateApparatus({ chaptersDir, outputFile, check: true })).toThrow(
		'data is stale'
	);
	expect(readFileSync(outputFile, 'utf8')).toBe('{}\n');
	expect(() =>
		generateApparatus({ chaptersDir, outputFile: join(chaptersDir, 'index-of-subjects.svelte') })
	).toThrow('JSON data file');
});

test('source locators, construction status and unknown dialect survive extraction', () => {
	const data = buildApparatus(
		[
			chapter(`
		<!-- <Ex m="fake" cite="missing" /> -->
		<S t='A &amp; B' id={'section'}>
			<Ex m='a=e-hotke' cite="first:12; second:§2: ex.3; first:13" dial="HK"
				constructed={true} id="example" place="Original witness" note="Quoted through a study." />
			<Ex m="an" cite={'first:4'} constructed={false} />
			<Ex m="cikir-ihi" constructed />
		</S>`)
		],
		bib,
		{ HK: 'Hokkaido (dialect not further specified)' }
	);
	expect(data.totalExamples).toBe(3);
	expect(data.examples[0]).toMatchObject({
		number: 1,
		id: 'example',
		constructed: true,
		dialect: 'HK',
		place: 'Original witness',
		note: 'Quoted through a study.'
	});
	expect(data.examples[0].citations).toEqual([
		{ key: 'first', locator: '12' },
		{ key: 'second', locator: '§2: ex.3' },
		{ key: 'first', locator: '13' }
	]);
	expect(data.examples[1]).toMatchObject({
		number: 2,
		id: null,
		dialect: null,
		constructed: false
	});
	expect(data.examples[2]).toMatchObject({ constructed: true, citations: [] });
	expect(data.sources.find((source) => source.key === 'first')).toMatchObject({
		count: 2,
		constructedCount: 1
	});
	expect(data.sources.find((source) => source.key === 'second')).toMatchObject({
		count: 1,
		constructedCount: 1
	});
	expect(data.dialects.find((dialect) => dialect.code === null)?.count).toBe(2);
	expect(data.dialects.find((dialect) => dialect.code === 'HK')?.count).toBe(1);
	expect(data.references.flatMap((group) => group.keys)).toContain('proseOnly');
	expect(data.subjects.find((subject) => subject.term === 'A & B')?.targets).toEqual([
		{ chapter: 'fixture', section: 'section' }
	]);
});

test('example words retain boundaries and spelling without becoming a morpheme inventory', () => {
	const data = buildApparatus(
		[chapter(`<Ex m="a=e-hotke cikir-ihi e= e- an =an a a= nína nina" constructed />`)],
		bib
	);
	expect(data.exampleTokens.map((entry) => entry.form).sort()).toEqual(
		['a=e-hotke', 'cikir-ihi', 'e=', 'e-', 'an', '=an', 'a', 'a=', 'nína', 'nina'].sort()
	);
	expect(data.exampleTokens.map((entry) => entry.form)).not.toContain('hotke');
	expect(data.exampleTokens.map((entry) => entry.form)).not.toContain('-ihi');
});

test('subject lookup keeps chapter titles and two same-titled sections', () => {
	const data = buildApparatus([chapter(`<S t="Scope" id="one"/><S t="Scope" id="two"/>`)], bib);
	expect(data.subjects.find((subject) => subject.term === 'Fixture chapter')?.targets).toEqual([
		{ chapter: 'fixture', section: null }
	]);
	expect(data.subjects.find((subject) => subject.term === 'Scope')?.targets).toEqual([
		{ chapter: 'fixture', section: 'one' },
		{ chapter: 'fixture', section: 'two' }
	]);
});

test('unsupported dynamic metadata and invalid references fail instead of disappearing', () => {
	for (const [source, error] of [
		['<Ex m={variable} constructed />', 'static string'],
		['<Ex m="an" {...metadata} constructed />', 'spread attributes'],
		['<Ex m="an" constructed="false" />', 'constructed must be a boolean'],
		['<Ex m="an" cite="missing" />', 'unknown bibliography key'],
		['<Ex m="an" constructed dial="UNKNOWN" />', 'unknown dialect'],
		['<Ex m="an" />', 'uncited example'],
		['<S t="One" id="same"/><Ex m="an" id="same" constructed />', 'duplicate section/example ID'],
		['{#if visible}<Ex m="an" constructed />{/if}', 'cannot be counted statically']
	])
		expect(() => buildApparatus([chapter(source)], bib)).toThrow(error);
});
