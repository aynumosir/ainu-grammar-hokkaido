/**
 * Phonotactic statistics over the Hokkaido Ainu lexicon.
 *
 * Reads lemma lists from three modern Hokkaido dictionaries
 * (Tamura 1996 Saru, Nakagawa 1995 Chitose, Kayano 1996 Saru/Nibutani),
 * syllabifies each free single-word lemma with the (C)V(C) template,
 * and writes aggregate statistics to .grammar-build/phonotactics-stats.json.
 *
 * Run: bun run scripts/phonotactics-stats.ts
 */

import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { homedir } from 'node:os';

const DICT_ROOT =
	process.env.AINU_DICTIONARIES_ROOT ?? join(homedir(), 'projects/Ainu/ainu-dictionaries');
if (!existsSync(DICT_ROOT)) {
	throw new Error(
		`Dictionary root not found: ${DICT_ROOT} — set AINU_DICTIONARIES_ROOT to an ainu-dictionaries checkout.`
	);
}

const SOURCES: { key: string; file: string; column: number }[] = [
	{ key: 'tamura1996', file: '1996_Tamura_Ainu-Saru-Dialect-Dictionary/original.tsv', column: 0 },
	{
		key: 'nakagawa1995',
		file: '1995_Nakagawa_Ainu-Chitose-Dialect-Dictionary/nakagawa_terms.tsv',
		column: 1
	},
	{ key: 'kayano1996', file: '1996_Kayano_Kayanos-Ainu-Dictionary/kayano-entries.tsv', column: 0 }
];

const VOWELS = new Set('aeiou');
const CONSONANTS = new Set('ptkcsmnrwyh');

const ACCENT_STRIP: Record<string, string> = {
	á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u', à: 'a', è: 'e', ì: 'i', ò: 'o', ù: 'u'
};

/** Normalize a raw lemma; return null when it is not a free single Ainu word. */
function normalize(raw: string): string | null {
	let s = raw.normalize('NFC').trim().toLowerCase();
	// alternates: "sara(ha)" → "sara"; "a/b" → "a"
	s = s.replace(/（[^）]*）|\([^)]*\)/g, '');
	s = s.split('/')[0].trim();
	s = s.replace(/[áéíóúàèìòù]/g, (c) => ACCENT_STRIP[c]);
	if (!s || /\s/.test(s)) return null; // multiword
	if (/^[-=]|[-=]$/.test(s)) return null; // bound affix / clitic
	// drop joiners; keep word-internal ' / ʔ as a syllable-boundary mark for the syllabifier
	s = s.replace(/[-=]/g, '').replace(/ʔ/g, "'").replace(/^'+|'+$/g, '').replace(/''+/g, "'");
	if (!s) return null;
	for (const ch of s) if (ch !== "'" && !VOWELS.has(ch) && !CONSONANTS.has(ch)) return null;
	if (![...s].some((c) => VOWELS.has(c))) return null;
	return s;
}

type Syllable = { onset: string; nucleus: string; coda: string };

/** (C)V(C) syllabification: V.V and C.C split, CV never split; ' forces a boundary. */
function syllabify(word: string): Syllable[] | null {
	if (word.includes("'")) {
		const parts = word.split("'").map(syllabifyRun);
		return parts.every(Boolean) ? (parts as Syllable[][]).flat() : null;
	}
	return syllabifyRun(word);
}

function syllabifyRun(word: string): Syllable[] | null {
	const sylls: Syllable[] = [];
	let i = 0;
	while (i < word.length) {
		let onset = '';
		if (CONSONANTS.has(word[i]) && i + 1 < word.length && VOWELS.has(word[i + 1])) {
			onset = word[i];
			i++;
		} else if (CONSONANTS.has(word[i])) {
			return null; // CC before any nucleus, or final orphan consonant run
		}
		if (i >= word.length || !VOWELS.has(word[i])) return null;
		const nucleus = word[i];
		i++;
		let coda = '';
		// consonant is a coda unless it opens the next syllable (i.e. is followed by a vowel)
		if (i < word.length && CONSONANTS.has(word[i]) && !(i + 1 < word.length && VOWELS.has(word[i + 1]))) {
			coda = word[i];
			i++;
		}
		sylls.push({ onset, nucleus, coda });
	}
	return sylls;
}

const count = (m: Map<string, number>, k: string) => m.set(k, (m.get(k) ?? 0) + 1);
const sorted = (m: Map<string, number>) =>
	Object.fromEntries([...m.entries()].sort((a, b) => b[1] - a[1]));

const perSource: Record<string, { raw: number; kept: number }> = {};
const lexicon = new Set<string>();
// raw headword + source key per normalized type, so exceptional entries stay traceable
const attestations = new Map<string, { raw: string; source: string }[]>();

for (const src of SOURCES) {
	const lines = readFileSync(join(DICT_ROOT, src.file), 'utf8').split('\n').slice(1);
	let raw = 0,
		kept = 0;
	for (const line of lines) {
		if (!line.trim()) continue;
		raw++;
		const rawLemma = line.split('\t')[src.column] ?? '';
		const lemma = normalize(rawLemma);
		if (lemma) {
			kept++;
			lexicon.add(lemma);
			const list = attestations.get(lemma) ?? [];
			if (!list.some((a) => a.source === src.key)) list.push({ raw: rawLemma.trim(), source: src.key });
			attestations.set(lemma, list);
		}
	}
	perSource[src.key] = { raw, kept };
}

const attested = (word: string) => ({ word, attestations: attestations.get(word) ?? [] });

const shapeCounts = new Map<string, number>();
const onsetCounts = new Map<string, number>();
const nucleusCounts = new Map<string, number>();
const codaFinal = new Map<string, number>();
const codaInternal = new Map<string, number>();
const clusterCounts = new Map<string, number>(); // heterosyllabic C.C
const hiatusCounts = new Map<string, number>(); // V.V
const lengthCounts = new Map<string, number>(); // syllables per word
const initialType = new Map<string, number>(); // vowel- vs consonant-initial words
const unparsable: string[] = [];
const codaCWords = new Set<string>();
const tiWords = new Set<string>();
let totalSyllables = 0;

for (const word of lexicon) {
	const sylls = syllabify(word);
	if (!sylls) {
		unparsable.push(word);
		continue;
	}
	for (const s of sylls) {
		if (s.coda === 'c') codaCWords.add(word);
		if (s.onset === 't' && s.nucleus === 'i') tiWords.add(word);
	}
	count(lengthCounts, String(sylls.length));
	count(initialType, sylls[0].onset ? 'C-initial' : 'V-initial');
	for (let i = 0; i < sylls.length; i++) {
		const s = sylls[i];
		totalSyllables++;
		count(shapeCounts, `${s.onset ? 'C' : ''}V${s.coda ? 'C' : ''}`);
		if (s.onset) count(onsetCounts, s.onset);
		count(nucleusCounts, s.nucleus);
		const last = i === sylls.length - 1;
		if (s.coda) count(last ? codaFinal : codaInternal, s.coda);
		if (!last) {
			const next = sylls[i + 1];
			if (s.coda && next.onset) count(clusterCounts, `${s.coda}.${next.onset}`);
			if (!s.coda && !next.onset) count(hiatusCounts, `${s.nucleus}.${next.nucleus}`);
		}
	}
}

const result = {
	sources: perSource,
	lexiconTypes: lexicon.size,
	parsedWords: lexicon.size - unparsable.length,
	audit: {
		unparsable: unparsable.sort().map(attested),
		codaC: [...codaCWords].sort().map(attested),
		ti: [...tiWords].sort().map(attested)
	},
	totalSyllables,
	syllableShapes: sorted(shapeCounts),
	wordInitial: sorted(initialType),
	syllablesPerWord: Object.fromEntries(
		[...lengthCounts.entries()].sort((a, b) => Number(a[0]) - Number(b[0]))
	),
	onsets: sorted(onsetCounts),
	nuclei: sorted(nucleusCounts),
	codasWordFinal: sorted(codaFinal),
	codasWordInternal: sorted(codaInternal),
	heterosyllabicClusters: sorted(clusterCounts),
	vowelHiatus: sorted(hiatusCounts)
};

mkdirSync('.grammar-build', { recursive: true });
writeFileSync('.grammar-build/phonotactics-stats.json', JSON.stringify(result, null, '\t') + '\n');
console.log(JSON.stringify(result, null, 2));
