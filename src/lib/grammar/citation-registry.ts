/**
 * Citation registry — the crosswalk between the *registered* bibliography
 * (`bibliography.ts`) and each work's *evidentiary* status.
 *
 * The reviewers' P0 (REVIEW-SYNTHESIS §3, §5) demands a clean separation between
 * "this work has a stable citation key" (bibliography.ts) and "this work plays
 * role X, is/ isn't held locally, and resolves to db-slug Y". That second layer
 * lives here so a chapter author can answer, per source:
 *   • what db.aynu.org record does this key resolve to?  (`dbSlug`)
 *   • is the full text in the local `ainu-grammar` corpus?  (`heldLocally` / `path`)
 *   • what kind of evidence is it?  (`sourceRole`)
 *
 * `sourceRole` is the work's DEFAULT/registered role. A work can play a different
 * evidentiary role in a specific chapter (a reference grammar cited for a datum is
 * primary-data there); that per-chapter role is recorded in the chapter's
 * claims/disagreements matrix (AUTHORING.md), not here.
 *
 * `path` is relative to the sibling source repo `../ainu-grammar/` (e.g.
 * `books/2024_Nakagawa`). It is filled only where the directory id is known with
 * certainty — currently the 15 OCR'd books. `heldLocally: true` without a `path`
 * means the work is among the ~218 article records of the corpus survey but its
 * exact directory id has not been pinned here yet (TODO: backfill from
 * `../ainu-grammar/inventory.jsonl`).
 *
 * dbSlug values were resolved via the Ainu MCP (`sources_search` → `source_get`)
 * against db.aynu.org. Keys with no `dbSlug` were not matched at registry-build
 * time (TODO: backfill).
 */

import { bibliography } from './bibliography';

export type SourceRole =
	/** Attested language data: corpora, dictionaries-as-data, text editions, recordings. */
	| 'primary-data'
	/** Descriptive/analytic studies and reference grammars of Ainu itself. */
	| 'prior-analysis'
	/** General-linguistic / typological frameworks applied to Ainu. */
	| 'typological-framework'
	/** Early records & old documents valued as witnesses (Batchelor, Edo-period, Kaga-ke). */
	| 'philological-witness'
	/** History-of-research, sociolinguistics, revitalization, orientation. */
	| 'background';

export interface RegistryEntry {
	/** Canonical db.aynu.org slug (1:1 with the citation key where known). */
	dbSlug?: string;
	/** Default evidentiary role of the work. */
	sourceRole: SourceRole;
	/** True when the full text is present in the local `ainu-grammar` corpus. */
	heldLocally: boolean;
	/** Path relative to `../ainu-grammar/`, when the directory id is known. */
	path?: string;
}

/** Path of the sibling source repository, for resolving `path`. */
export const SOURCE_REPO = '../ainu-grammar';

export const citationRegistry: Record<string, RegistryEntry> = {
	// Reference grammars & handbooks
	kindaichi1933: { sourceRole: 'background', heldLocally: true, path: 'books/1933_Kindaichi' },
	kindaichi1936: { dbSlug: '1936-kindaichi', sourceRole: 'prior-analysis', heldLocally: true, path: 'books/1936_Kindaichi' },
	chiri1942: { dbSlug: '1942-chiri', sourceRole: 'prior-analysis', heldLocally: true, path: 'books/1942_Chiri' },
	refsing1986: { dbSlug: '1986-refsing', sourceRole: 'prior-analysis', heldLocally: true, path: 'books/1986_Refsing' },
	shibatani1990: { dbSlug: '1990-shibatani', sourceRole: 'prior-analysis', heldLocally: true, path: 'books/1990_Shibatani' },
	tamura1996: { dbSlug: '1996-tamura', sourceRole: 'primary-data', heldLocally: false },
	tamura2000: { dbSlug: '2000-suzuko-tamura-the-ainu-language', sourceRole: 'prior-analysis', heldLocally: false },
	sato2008: { dbSlug: '2008-sato', sourceRole: 'prior-analysis', heldLocally: true, path: 'books/2008_Sato' },
	sato2009: { sourceRole: 'prior-analysis', heldLocally: true },
	sato2023a: { sourceRole: 'prior-analysis', heldLocally: false },
	bugaeva2012: { sourceRole: 'prior-analysis', heldLocally: true },
	bugaeva2022: { dbSlug: '2022-bugaeva', sourceRole: 'prior-analysis', heldLocally: true, path: 'books/2022_Bugaeva' },
	nakagawa2024: { dbSlug: '2024-nakagawa', sourceRole: 'prior-analysis', heldLocally: true, path: 'books/2024_Nakagawa' },
	nakagawa2022: { dbSlug: '2022-hiroshi-nakagawa-17-verbal-number', sourceRole: 'prior-analysis', heldLocally: true, path: 'books/2022_Bugaeva' },
	nakagawa2022pos: { sourceRole: 'prior-analysis', heldLocally: true, path: 'books/2022_Bugaeva' },
	tamuramasashi2011: { sourceRole: 'prior-analysis', heldLocally: true },
	asai1969: { dbSlug: '1969-asai-toru-ainugo-no-bunpo-ainugo-ishikari-hogen-bunpo-no-gai', sourceRole: 'prior-analysis', heldLocally: false },
	chamberlain1887: { dbSlug: '2018-basil-hall-chamberlain-ainu-grammar', sourceRole: 'philological-witness', heldLocally: false },

	// Sakhalin / contrast grammars
	pilsudski1912: { dbSlug: '1912-pilsudski', sourceRole: 'primary-data', heldLocally: true, path: 'books/1912_Pilsudski' },
	murasaki1979: { dbSlug: '1979-murasaki-kyoko-karafuto-ainugo-bunpo-hen-sakhalin-ainu-grammar-vo', sourceRole: 'prior-analysis', heldLocally: false },
	murasaki2025: { dbSlug: '2025-murasaki', sourceRole: 'primary-data', heldLocally: true, path: 'books/2025_Murasaki' },
	dalcorso2021: { dbSlug: '2021-dal-corso-elia-the-language-and-folklore-of-west-sakhalin-ainu-a', sourceRole: 'prior-analysis', heldLocally: false },

	// Oral-literature chapters (Handbook ch.10–11)
	endo2022: { sourceRole: 'prior-analysis', heldLocally: true, path: 'books/2022_Bugaeva' },
	okuda2022: { sourceRole: 'prior-analysis', heldLocally: true, path: 'books/2022_Bugaeva' },
	sato2009yukar: { sourceRole: 'prior-analysis', heldLocally: true },
	chiri1923: { sourceRole: 'primary-data', heldLocally: false },

	// Pedagogical / standard / text-collection
	kayano1987: { dbSlug: '1987-kayano', sourceRole: 'primary-data', heldLocally: true, path: 'books/1987_Kayano' },
	utari1994: { sourceRole: 'primary-data', heldLocally: true, path: 'books/1994_HokkaidoUtariKyokai' },
	ijas2023: { sourceRole: 'prior-analysis', heldLocally: true, path: 'books/2023_Ijas' },
	aynucorporadiscord: { sourceRole: 'prior-analysis', heldLocally: true, path: '../ainu-discord-archive/knowledge' },
	nakagawatexts2000: { sourceRole: 'primary-data', heldLocally: true },
	takahashi2014texts: { dbSlug: '2014-yasushige-takahashi-ainugo-tokachi-hogen-reibunshu', sourceRole: 'primary-data', heldLocally: true },

	// Dictionaries & lexica
	nakagawa1995: { dbSlug: '1995-nakagawa-hiroshi-ainugo-chitose-hogen-jiten-ainu-japanese-dictionar', sourceRole: 'primary-data', heldLocally: false },
	kayano1996: { dbSlug: '1996-kayano-kayanos-ainu-dictionary', sourceRole: 'primary-data', heldLocally: false },
	hattori1964: { sourceRole: 'primary-data', heldLocally: false },
	chiri1953: { sourceRole: 'primary-data', heldLocally: false },
	batchelor1905: { dbSlug: '1905-batchelor-ainu-english-japanese-dictionary', sourceRole: 'philological-witness', heldLocally: false },
	batchelor1938: { dbSlug: '1938-batchelor-ainu-english-japanese-dictionary-4ed', sourceRole: 'philological-witness', heldLocally: false },
	bugaeva2015topical: { dbSlug: '2015-bugaeva-anna-a-topical-dictionary-of-conversational-ainu-englis', sourceRole: 'primary-data', heldLocally: false },
	kanazawa1898: { sourceRole: 'primary-data', heldLocally: false },

	// Phonology, prosody, morphophonology
	shiraishi2022: { sourceRole: 'prior-analysis', heldLocally: true, path: 'books/2022_Bugaeva' },
	chiri1952: { sourceRole: 'prior-analysis', heldLocally: true },
	okuda2025: { sourceRole: 'prior-analysis', heldLocally: true },
	ochiai2023: { dbSlug: '2023-ochiai-izumi-a-disparity-in-the-final-vowels-in-ainu-word-final', sourceRole: 'prior-analysis', heldLocally: true },
	dalcorso2024: { dbSlug: '2024-dal-corso-elia-elements-of-sakhalin-ainu-phonetics-phonology-and-morphosyntax-in-bronis-aw-pi-sudskis-corpus-of-ainu-folklore', sourceRole: 'prior-analysis', heldLocally: true },
	itabashi2001: { sourceRole: 'prior-analysis', heldLocally: true },
	shiratori2026: { sourceRole: 'prior-analysis', heldLocally: true },
	fukuda1956: { sourceRole: 'prior-analysis', heldLocally: true },
	fukuda1961: { sourceRole: 'prior-analysis', heldLocally: true },
	nakagawa2009: { sourceRole: 'prior-analysis', heldLocally: true },
	kirikae1984: { sourceRole: 'prior-analysis', heldLocally: true },

	// Person marking & alignment
	tamura1971: { sourceRole: 'prior-analysis', heldLocally: true },
	tamura1972: { sourceRole: 'prior-analysis', heldLocally: true },
	takahashi2015: { sourceRole: 'prior-analysis', heldLocally: true },
	baek2021: { sourceRole: 'prior-analysis', heldLocally: true },
	sakaguchi2024: { sourceRole: 'prior-analysis', heldLocally: true },
	dalcorso2025align: { dbSlug: '2025-dal-corso-elia-the-mixed-nominative-neutral-inverse-morphological-alignment-of-sakhalin-ainu', sourceRole: 'prior-analysis', heldLocally: true },
	sato2004: { sourceRole: 'prior-analysis', heldLocally: true },

	// Valency
	bugaeva2006: { dbSlug: '2006-bugaeva-anna-applicatives-in-ainu', sourceRole: 'prior-analysis', heldLocally: true },
	bugaeva2010: { dbSlug: '2010-anna-bugaeva-ainu-applicatives-in-typological-perspective', sourceRole: 'prior-analysis', heldLocally: true },
	bugaeva2014: { sourceRole: 'prior-analysis', heldLocally: true },
	nam2021: { dbSlug: '2021-nam-deokhyun-some-evidence-for-the-origin-of-the-ainu-antipassive-prefix-i', sourceRole: 'prior-analysis', heldLocally: true },
	bugaeva2021antip: { dbSlug: '2021-anna-bugaeva-unspecified-participant-a-case-of-antipassive-in-a', sourceRole: 'prior-analysis', heldLocally: true },
	bugaeva2025: { dbSlug: '2025-bugaeva-anna-a-diachronic-study-of-anticausatives-in-ainu', sourceRole: 'prior-analysis', heldLocally: true },
	bugaevakobayashi2022: { dbSlug: '2022-anna-bugaeva-15-verbal-valency', sourceRole: 'prior-analysis', heldLocally: true, path: 'books/2022_Bugaeva' },
	kobayashi2015: { sourceRole: 'prior-analysis', heldLocally: true },
	takahashi2017: { sourceRole: 'prior-analysis', heldLocally: true },
	sato2007: { sourceRole: 'prior-analysis', heldLocally: true },
	kobayashi2010: { sourceRole: 'prior-analysis', heldLocally: true },
	kobayashi2020: { sourceRole: 'prior-analysis', heldLocally: true },
	kobayashi2025: { sourceRole: 'prior-analysis', heldLocally: true },
	sato2023b: { sourceRole: 'prior-analysis', heldLocally: true },

	// Noun incorporation
	shibatani1988: { dbSlug: '1988-shibatani-masayoshi-polysynthesis-in-ainu-and-theories-of-incorporation', sourceRole: 'prior-analysis', heldLocally: true },
	sato2016: { dbSlug: '2016-sato-tomomi-a-classification-of-the-types-of-noun-incorporation-in-ainu-and-its-implications-for-morphosyntactic-typology', sourceRole: 'prior-analysis', heldLocally: true },
	satoni2022: { dbSlug: '2022-tomomi-sato-16-noun-incorporation-in-ainu', sourceRole: 'prior-analysis', heldLocally: true, path: 'books/2022_Bugaeva' },
	dalcorso2020: { dbSlug: '2020-dal-corso-elia-the-interaction-of-relativization-and-noun-incorporation-in-southern-hokkaido-ainu', sourceRole: 'prior-analysis', heldLocally: true },
	barrie2021: { dbSlug: '2021-barrie-michael-mathieu-eric-noun-incorporation-and-polysynthesis', sourceRole: 'typological-framework', heldLocally: true },
	kaiser1998: { dbSlug: '1998-lizanne-kaiser-the-interaction-of-noun-incorporation-and-applicat', sourceRole: 'prior-analysis', heldLocally: false },
	yoshida2013: { sourceRole: 'prior-analysis', heldLocally: true },

	// Tense / aspect / mood
	tamura1960: { sourceRole: 'prior-analysis', heldLocally: true },
	sato2006: { sourceRole: 'prior-analysis', heldLocally: true },
	yoshikawa2020: { sourceRole: 'prior-analysis', heldLocally: true },
	yoshikawa2022: { dbSlug: '2022-yoshimi-yoshikawa-existential-aspectual-forms-in-the-saru-and-chitos', sourceRole: 'prior-analysis', heldLocally: true, path: 'books/2022_Bugaeva' },
	refsing2011: { sourceRole: 'prior-analysis', heldLocally: false },

	// Evidentiality
	dalcorso2018: { sourceRole: 'prior-analysis', heldLocally: true },
	takahashi2013: { sourceRole: 'prior-analysis', heldLocally: true },
	takahashi2022: { dbSlug: '2022-yasushige-takahashi-18-aspect-and-evidentiality', sourceRole: 'prior-analysis', heldLocally: true, path: 'books/2022_Bugaeva' },
	hirosawa2026: { sourceRole: 'prior-analysis', heldLocally: true },

	// Negation
	takahashi2016: { sourceRole: 'prior-analysis', heldLocally: true },
	dalcorso2025neg: { dbSlug: '2025-dal-corso-elia-negation-in-sakhalin-ainu-history-and-typology', sourceRole: 'prior-analysis', heldLocally: true },

	// Nominalization & relativization
	bugaeva2015: { dbSlug: '2015-bugaeva-anna-an-equivalent-of-the-standard-of-comparison-relativization-in-ainu', sourceRole: 'prior-analysis', heldLocally: true },
	bugaeva2016: { dbSlug: '2016-bugaeva-anna-on-the-innovative-nature-of-sakhalin-ainu-focusing-on-nominalization', sourceRole: 'prior-analysis', heldLocally: true },
	takahashi2018: { sourceRole: 'prior-analysis', heldLocally: true },

	// Possession
	bugaeva2021poss: { dbSlug: '2021-bugaeva-anna-appositive-possession-in-ainu-and-around-the-pacific', sourceRole: 'prior-analysis', heldLocally: true },
	sato2021: { sourceRole: 'prior-analysis', heldLocally: true },
	huber2025: { sourceRole: 'prior-analysis', heldLocally: true },

	// Numerals
	ochiai2021: { sourceRole: 'prior-analysis', heldLocally: true },
	sakaguchi2022: { sourceRole: 'prior-analysis', heldLocally: true },
	peng1970: { dbSlug: '1970-fred-c-c-peng-a-grammar-of-ainu-number-names', sourceRole: 'prior-analysis', heldLocally: false },

	// Demonstratives
	takahashi2011: { sourceRole: 'prior-analysis', heldLocally: true },

	// Logophoricity
	bugaeva2008: { dbSlug: '2008-bugaeva-anna-reported-discourse-and-logophoricity-in-southern-hokkaido-dialects-of-ainu', sourceRole: 'prior-analysis', heldLocally: true },
	nikitina2021: { dbSlug: '2021-nikitina-tatiana-bugaeva-anna-logophoric-speech-is-not-indirect', sourceRole: 'prior-analysis', heldLocally: true },

	// Word order & syntax
	sato2025a: { sourceRole: 'prior-analysis', heldLocally: true },
	sato2025b: { sourceRole: 'prior-analysis', heldLocally: true },

	// Dialectology
	hattorichiri1960: { sourceRole: 'prior-analysis', heldLocally: false },
	asai1974: { sourceRole: 'prior-analysis', heldLocally: false },
	tamura1988: { sourceRole: 'prior-analysis', heldLocally: false },
	kirikae1994: { sourceRole: 'prior-analysis', heldLocally: false },
	ono2020: { sourceRole: 'prior-analysis', heldLocally: true },
	nakagawafukazawa2022: { dbSlug: '2022-nakagawa-hiroshi-hokkaido-ainu-dialects-towards-a-classification-of', sourceRole: 'prior-analysis', heldLocally: true, path: 'books/2022_Bugaeva' },
	fukazawaono2024: { sourceRole: 'prior-analysis', heldLocally: true },
	kasuga2026: { sourceRole: 'prior-analysis', heldLocally: true },
	fukazawa2025: { sourceRole: 'primary-data', heldLocally: true, path: 'books/2025_Fukazawa' },

	// Historical / comparative
	vovin1993: { sourceRole: 'prior-analysis', heldLocally: false },

	// Orthography & philology
	kirikae1997: { sourceRole: 'prior-analysis', heldLocally: true },
	nakagawa2006: { sourceRole: 'prior-analysis', heldLocally: true },
	fukazawa2017: { sourceRole: 'philological-witness', heldLocally: true },
	yasuoka2023: { sourceRole: 'philological-witness', heldLocally: true },

	// Sociolinguistics & revitalization
	ono2022: { sourceRole: 'background', heldLocally: true },
	sato2012: { sourceRole: 'background', heldLocally: true },
	ijas2023b: { sourceRole: 'background', heldLocally: true },

	// Corpus / data resources
	ninjal2003: { sourceRole: 'primary-data', heldLocally: false },
	ainukoraci1991: { sourceRole: 'primary-data', heldLocally: false },
	glossedcorpus2016: { dbSlug: '2016-nakagawa-hiroshi-a-glossed-audio-corpus-of-ainu-folklore', sourceRole: 'primary-data', heldLocally: false },
	ilcaa1976: { dbSlug: 'ilcaa-ainu-materials', sourceRole: 'primary-data', heldLocally: false },
	biratori1969: { dbSlug: 'biratori-ainu-oral-literature', sourceRole: 'primary-data', heldLocally: false },

	// Typological & theoretical frameworks
	mithun1984: { sourceRole: 'typological-framework', heldLocally: false },
	baker1988: { sourceRole: 'typological-framework', heldLocally: false },
	keenancomrie1977: { sourceRole: 'typological-framework', heldLocally: false },
	foleyvanvalin1984: { sourceRole: 'typological-framework', heldLocally: false },
	aikhenvald2004: { sourceRole: 'typological-framework', heldLocally: false },
	comrie1976: { sourceRole: 'typological-framework', heldLocally: false },
	bybee1994: { sourceRole: 'typological-framework', heldLocally: false },
	talmy2000: { sourceRole: 'typological-framework', heldLocally: false },
	peterson2007: { sourceRole: 'typological-framework', heldLocally: false },
	corbett2000: { sourceRole: 'typological-framework', heldLocally: false },
	miestamo2005: { sourceRole: 'typological-framework', heldLocally: false },
	haspelmath1997: { sourceRole: 'typological-framework', heldLocally: false },
	stassen1997: { sourceRole: 'typological-framework', heldLocally: false },
	nichols1986: { sourceRole: 'typological-framework', heldLocally: false },
	givon1978: { sourceRole: 'typological-framework', heldLocally: false },
	croft1991: { sourceRole: 'typological-framework', heldLocally: false },
	comrie2015: { sourceRole: 'typological-framework', heldLocally: false }
};

/**
 * Dev/CI helper: assert that the registry and the bibliography cover exactly the
 * same key set. NOT run at module load (so it never throws during prerender/SSR);
 * call it from an offline audit script (e.g. `scripts/audit-apparatus.ts`).
 *
 * @returns the lists of keys missing from each side; empty arrays mean they agree.
 */
export function auditRegistry(): { missingFromRegistry: string[]; missingFromBibliography: string[] } {
	const bibKeys = new Set(Object.keys(bibliography));
	const regKeys = new Set(Object.keys(citationRegistry));
	return {
		missingFromRegistry: [...bibKeys].filter((k) => !regKeys.has(k)).sort(),
		missingFromBibliography: [...regKeys].filter((k) => !bibKeys.has(k)).sort()
	};
}
