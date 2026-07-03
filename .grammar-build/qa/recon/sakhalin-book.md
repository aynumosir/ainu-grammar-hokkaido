# Report: /home/mkpoli/projects/Ainu/aynu-itah — Sakhalin Ainu (Enchiw) reference grammar

## 1. Where the grammar lives

| What | Path |
|---|---|
| Chapter prose (27 Svelte files, one per chapter) | `/home/mkpoli/projects/Ainu/aynu-itah/src/lib/grammar/chapters/*.svelte` |
| TOC / part structure / chapter numbering | `/home/mkpoli/projects/Ainu/aynu-itah/src/lib/grammar/toc.ts` |
| Bibliography (76 entries, region-tagged) | `/home/mkpoli/projects/Ainu/aynu-itah/src/lib/grammar/bibliography.ts` |
| Gloss abbreviations (64 atoms) + dialect labels (WS/ES/SA) | `/home/mkpoli/projects/Ainu/aynu-itah/src/lib/grammar/abbreviations.ts` |
| Markup components (Ex, Ref, Xr, S, A, DialectMap…) | `/home/mkpoli/projects/Ainu/aynu-itah/src/lib/grammar/components/` |
| Build-time fact bases (13 domain dossiers + example bank, 5,600 lines) | `/home/mkpoli/projects/Ainu/aynu-itah/.grammar-build/factbase/*.md` |
| Design specs (planned TOC, glossing master list, bibliography source, chapter-source map) | `/home/mkpoli/projects/Ainu/aynu-itah/.grammar-build/design/{TOC,glossing,bibliography,chapter-source-map}.md` |
| Generator/validators (gen.ts regenerates glossing+bibliography registries; validate.ts compiles chapters in isolation; audit.ts) | `/home/mkpoli/projects/Ainu/aynu-itah/.grammar-build/*.ts` |
| Open verification items (8 unchecked, 37 resolved — mostly glossing-convention calls) | `/home/mkpoli/projects/Ainu/aynu-itah/GRAMMAR_TODO.md` |
| Editorial/design + data-model docs | `/home/mkpoli/projects/Ainu/aynu-itah/DESIGN.md`, `/home/mkpoli/projects/Ainu/aynu-itah/DATA.md` |
| Dictionary (2,495 entries) with Hokkaidō correspondences | `/home/mkpoli/projects/Ainu/aynu-itah/src/lib/data.json` |
| Corpus example sidecar | `/home/mkpoli/projects/Ainu/aynu-itah/src/lib/data/examples.json` |
| Rendering routes | `/home/mkpoli/projects/Ainu/aynu-itah/src/routes/grammar/` |

## 2. Size

- **27 chapters** (26 numbered + unnumbered Introduction front matter), organized in **7 parts**, plus 2 data-driven appendices (abbreviations, references).
- **202 `<S>` sections** (auto-numbered, nested; titles listed in §5 below).
- **390 `<Ex>` interlinear examples** (top chapters: texts 37, person-and-alignment 27, evidentiality 24, TAM 23, numerals 22).
- Word count: **~54,000 words of prose** (tags stripped); 86,701 raw `wc -w` including markup/example attributes; 682 KB of chapter source. Largest chapters: phonology (5,497 raw words), texts (5,183), person-and-alignment (4,710), numerals (4,276).

## 3. Markup & citation conventions

- **`<Ex m g [ain] [orig origLang] tr [lit] cite dial place note constructed>`** — Leipzig IGT. `m`/`g` word counts are validated at compile time; every ALL-CAPS gloss atom must exist in `abbreviations.ts` or it **throws at SSR** (same failure mode as the Hokkaido book's Ex). `cite="bibKey:pages; bibKey2:pages"` is validated against the bibliography; `dial` ∈ {WS, ES, SA}; `place` = speaker's **home locality** (not recording site); `constructed` flags non-attested examples (rare, never sole support for a claim).
- **`<Ref k="bibKey" p="45–48" [paren]>`** — author–year citations, registered per-chapter for a per-chapter reference list.
- **`<Xr ch="slug" s="anchor">`** — cross-chapter links resolved through toc.ts (chapter renumbering-safe).
- **`<S t="Title" id>`** — auto-numbered §N.m sections; **`<A w gl>`** — every italic Ainu form links into the site dictionary; morphemes in Ex lines also auto-link to `/w/`.
- Bibliography entries carry `region: 'sakhalin' | 'hokkaido' | 'kuril' | 'general'` and a `reported: true` badge for works cited second-hand — the references page exposes both.
- Citation-chain doctrine (introduction §"Data and conventions", `chapters/introduction.svelte` l.52–87): prose → numbered example → source page/text/letter → references → dictionary → corpus attestation, unbroken.

## 4. Bibliography (76 entries)

- **36 Sakhalin-specific**: Chiri 1942 (the core prewar grammar), Murasaki 1976/1979/1996/2001/2009/2013/2025, Piłsudski 1912/1998, Dobrotvorsky 1875, Sakaguchi 2019–2024 (7 items, re-editions/analyses), Dal Corso 2018/2021/2024/2025 (alignment, negation), Hattori 1961, Tangiku 1998/2001, Sentoku 1929, Sato 1985, Bugaeva 2016, Kitahara 2016, Majewicz 1998, Iwai 1987, Furukawa 1967, Tamura 1999.
- **7 Hokkaidō-specific (used for contrast)**: Batchelor 1938, Bugaeva 2012, Dal Corso 2020, Refsing 1986 (Shizunai), Satō 2008, Tamura 2000 (Saru), Urata 1998.
- **33 general/pan-Ainu/comparative — the overlap set with the Hokkaido book**: **Hattori 1964** (dialect dictionary — both books' comparative backbone), **Vovin 1993** (Proto-Ainu), **Itabashi 2001** (pitch/length correspondences), **Satō 2015**, **Asai 1974** (dialect cluster analysis), **Lee 2013** (phylogenetics), **Janhunen 2022**, **Bugaeva 2010/2015/2017/2021/2022**, Chiri 1952/1973, Kirikae 1984/1997, Nakagawa 2006/2024, Tamura 2003, Ochiai 2021, Ono 2020, Shibatani 1990, Shiraishi 2022, Tangiku 2022, Gruzdeva 1996, Hattori 1967, plus typology (Comrie 2015, Croft, Givón, Noonan, Veselinova).

## 5. (a) Topic outline

Part I — The language and its setting: **Introduction** (aims; data/conventions; how to read an example; dialect labels & West-coast baseline; scholarship) · **1 Language and speakers** (names; geography/history; genetic affiliation & typological profile; contact; endangerment) · **2 Dialects, sources, previous research** (West/East coast division; what differs between the coasts; documentary record; generational variation; corpus used) · **3 Orthography** (Cyrillic; Dobrotvorsky; Sentoku letters 1906; Piłsudski's orthography; romanisations; katakana; this grammar's romanisation).

Part II — Phonology: **4 Phonology** (consonants; glottal stop; vowels & length; syllable structure; coda inventory & neutralisation; coda r; prosody; **pitch, length, and Proto-Ainu**) · **5 Morphophonology** (h~p/t/k coda alternations; possessive-suffix vowel copying; prefixes before V-initial stems; r-alternations & -rV stem classes).

Part III — Word classes & NP: **6 Word classes** · **7 Nouns and possession** (conceptual vs possessed form; generalized -he; inalienable/alienable; koro strategy; locative nouns) · **8 Number** (utara; =ahcin; verbal -hci; suppletive stems) · **9 Pronouns and demonstratives** · **10 Numerals** (vigesimal system; decimal innovation; classifiers; ordinals) · **11 Postpositions and relational nouns**.

Part IV — The verb: **12 Verb structure and transitivity** (template; strict transitivity; verbal number; stem classes; light verb ki) · **13 Person marking and alignment** (paradigms; indefinite person; object marking; 1↔2 portmanteaux; alignment) · **14 Valency** (causatives; applicatives e-/ko-/o-; antipassive i-; reflexive yay-/si-; reciprocal u-; noun incorporation; productivity) · **15 TAM** (tenseless verb; kusu an progressive; teh an resultative; perfect; dubitative; desiderative rusuy; imperative/hortative) · **16 Evidentiality** (reportative manu; inferential ruwehe an; sensory evidentials; evidentials as relative tense; person interactions) · **17 Negation** (negator composition; standard negation hannehka; prohibitive; caritive; history of the system).

Part V — Syntax: **18 Copula and existence** · **19 Simple clause and word order** · **20 Nominalization** (pe/p, usi, hi; possessive-suffix strategy) · **21 Relative clauses** (gap strategy; accessibility; oblique role-marker retention) · **22 Complementation** (kun(i); quotation; perception complements) · **23 Clause linking** (wa/teh; (h)ike/(h)ine; conditionals; chaining) · **24 Information structure** (neampe/anahne topic; focus particles).

Part VI: **25 Language contact** (Japanese, Manchu–Amur, Nivkh, Russian strata; Cyrillic epistolary register). Part VII: **26 Glossed texts** (Asai Take tuytah; Sentoku Tarōji 1906 letter; Piłsudski extract; Dobrotvorsky dialogues 1875).

## 6. (b) Dialect-neutral vs Sakhalin-specific — where cross-checking the Hokkaido book is valid

**Pan-Ainu / architecture-level (cross-checking VALID):**
- **Person-marking architecture** (ch. 13): tripartite-ish alignment, S/A/O affix series, indefinite/4th person set (-an/an-/i-) with its passive/impersonal/honorific-family polysemy, portmanteau 1→2 forms — the architecture is shared; the grammar itself says Sakhalin uses "essentially the epic paradigm of Hokkaidō" (Chiri §37).
- **Valency morphology** (ch. 14): applicative e-/ko-/o- inventory, causative -re/-te/-ka, antipassive i-, reflexive yay-/si-, reciprocal u-, noun incorporation with Chiri/Satō/Bugaeva incorporation-type hierarchies — cognate morpheme-for-morpheme.
- **Evidential system shape** (ch. 16): reportative + four-way inferential built on perception nouns ruwe/siri/hum/haw + copula — "The set matches the Hokkaidō [inventory]" (evidentiality.svelte l.300); nominalization-based clause structure behind it is shared.
- **Verb structure** (ch. 12): strict transitivity classes, verbal number/suppletion (with productivity differences), ditransitive konte/kore, light verb ki.
- Nominalization/relativization architecture (chs. 20–21): prenominal gap relativization, pe/hi nominalizers (though Sakhalin adds a strategy, below).
- Vigesimal numerals (ch. 10 core system), demonstrative system shape (ch. 9), possession conceptual/possessed opposition (ch. 7), Proto-Ainu prosody discussion (phonology §4.16).

**Sakhalin-specific (cross-checking MISLEADING):**
- **Phonology chs. 4–5**: coda neutralisation p/t/k→h, r→echo-vowel/h, distinctive **vowel length** (vs Hokkaidō pitch accent), 6- vs 9-coda system, cluster shapes (ahkas vs apkas).
- **First-person inventory details** (ch. 13): KU/CI/AN classes, **no inclusive/exclusive opposition**, near-absence of ci=, the object prefix **in-**, plural -(y)an analysis (Sakaguchi vs inverse debate), east/west en-/in- split.
- **Number** (ch. 8): plural clitic =ahci(n)/-hci, utara generalization, nominal plural -ahcin ("Nothing like it exists in Hokkaidō").
- **TAM exponents** (ch. 15): teh an, kusu an, koh, hemaka, postverbal perfect an/ea, nee nanko(ro) dubitative — categories comparable, forms and grammaticalization paths not.
- **Negation** (ch. 17): hannehka/ham/hanka system (vs Hokkaidō somo/iteki) — whole inventory is different.
- **Possessive/nominalization extension** (chs. 7, 20): generalized -he; V-POSS as a **finite/nominalized clause strategy extended to verbs** — explicitly a Sakhalin departure ("Here Sakhalin Ainu departs sharply from Hokkaidō", nouns-and-possession.svelte l.362).
- Topic particle anah(ka)/neampe (vs anak(ne)), allative onne/ene restructuring, numerals: decimal innovation kunkutu/tanku/wantanku, human classifier differences, ordinal formation, chs. 1–3, 25–26 (history, sources, contact, texts) — all Sakhalin-particular.

## 7. (c) Explicit Hokkaidō/Saru/Chitose comparative statements (~180 mentions; densest in phonology 32, language-and-speakers 19, TAM 16)

Policy: introduction.svelte l.41–48 & l.179–181 — Hokkaidō is "cited only for contrast", never tagged as a dialect, never silently folded in. Key substantive claims (all in `/home/mkpoli/projects/Ainu/aynu-itah/src/lib/grammar/chapters/`):

- **phonology.svelte l.413–432, 924–946**: Sakhalin vowel length ≈ Hokkaidō pitch accent correspondence (Hattori, Itabashi); residues like niná : niina → endorses **Vovin 1993/Itabashi 2001 Proto-Ainu with independent length AND pitch**, against Hattori's length-only and Satō 2015's pitch-only reconstructions; Kuril tentatively pitch-type. l.514–563: coda systems compared (560 vs ~360 possible syllables); l.646: full Hokkaidō:Sakhalin coda correspondence table.
- **person-and-alignment.svelte l.165–180**: an= set = general 1PL with no incl/excl opposition "of the Hokkaidō colloquial kind"; honorific 2nd-person use of Hokkaidō unattested; Sakhalin colloquial = Hokkaidō epic paradigm. l.267–323: en- (west, as Hokkaidō) vs in- (east); enci-/unci- of NE Hokkaidō compared.
- **tense-aspect-mood.svelte l.89–239**: Table 1 aligns each Sakhalin aspect periphrasis with its Hokkaidō counterpart (Chiri's own alignment); teh an = wa an; kusu an ≈ kor an; koh ≈ kor; l.443–447: dubitative nee nanko(ro) vs Hokkaidō bare nankor — Bugaeva's biclausal-fusion account.
- **negation.svelte l.458–612**: Hokkaidō somo and Sakhalin negators continue the **same Proto-Ainu stative verb** (Dal Corso reconstruction); somo appears in Sakhalin only in Piłsudski's Tunayci texts from speakers with Hokkaidō contact; prohibitive uses ordinary negator vs Hokkaidō dedicated iteki.
- **nominalization.svelte l.136–304** and **nouns-and-possession.svelte l.362**: possessive suffix extended beyond the noun — sharpest structural divergence claimed.
- **valency.svelte l.68, 258–300, 556**: Hokkaidō third causative allomorph -e absent; antipassive i- more productive in Sakhalin than Hokkaidō (vs Bugaeva 2006 counts); Satō's Hokkaidō incorporation percentages quoted for comparison.
- **number.svelte l.30–40, 207, 227, 421–422**: utara vs utar; =ahcin without Hokkaidō counterpart; 21 suppletive pairs (Rayciska) vs 42 (Saru); Hokkaidō -pa plurals mostly lack Sakhalin counterparts.
- **evidentiality.svelte l.300, 565**: perception-noun set matches Hokkaidō; Hokkaidō swaps hearsay marker overtly where Sakhalin uses manu placement.
- **relative-clauses.svelte l.96–277**: Hokkaidō uses applicatives to relativize obliques (Bugaeva) where Sakhalin retains the role marker; two Saru-attested equative idiom examples are quoted as Hokkaidō (Saru) data (l.225, 233); Hokkaidō allows RC–incorporation interaction Sakhalin lacks.
- **clause-linking.svelte l.103–109**: (h)ine "the great narrative converb of Hokkaidō but thin in the Sakhalin record"; Saru cognate of teh.
- Also: numerals (hoh vs hotne system, human-counter -n/-iw absent, ikin ne ordinals absent), information-structure (anah(ka) ≈ anak(ne)), morphophonology (Class I verbs = Hokkaidō coda-r cognates), language-and-speakers (three-branch Ainuic; Lee 2013 homeland in northern Hokkaidō; ~1300 CE expansion onto Sakhalin), tense-aspect-mood l.585 (hortative ro absent).

## 8. (d) Structured example data for diffing

Yes, three machine-readable layers:

1. **`<Ex>` props in chapter source** — `m` (morphemic, `-`/`=` segmented), `g` (aligned Leipzig gloss), `ain`/`orig`, `tr`, `lit`, `cite` (bibKey:pages), `dial`, `place`, `constructed`. 390 examples, extractable with a Svelte-attribute parser (multi-line attributes; same shape as the Hokkaido book's `<Ex>`, so a direct schema-level diff of shared pan-Ainu constructions — applicatives, incorporation, evidential frames, person portmanteaux — is feasible). Gloss atoms + cite keys are compile-validated, so extracted data is clean.
2. **`/home/mkpoli/projects/Ainu/aynu-itah/src/lib/data/examples.json`** — every translated Karafuto corpus sentence ({text, translation(ja), dialect, source, uri}), indexed for the dictionary (built by `scripts/gen-examples.ts`).
3. **`/home/mkpoli/projects/Ainu/aynu-itah/src/lib/data.json`** — 785 of 2,495 entries carry a `hokkaido` correspondence array ({lemma, type: regular-sound-change | irregular-correspondence, rules (e.g. geminate-stop-to-hc), conf, curated}) plus 45 `cognates` entries — a ready-made Sakhalin↔Hokkaidō lexical correspondence table that could be checked against the Hokkaido book's cited forms directly.

Caveat for cross-checking: glossing conventions differ (e.g. INDEF vs the 4th person; COLL vs PL for =ahci; PK evidential label; INF.RSN/VIS/NVIS/AUD set — see `.grammar-build/design/glossing.md`), and `GRAMMAR_TODO.md` documents 8 still-open glossing/analysis decisions (eci- portmanteau, in- object gloss, -(y)an, possessed -hV) sitting exactly in the person-marking area where naive diffing against the Hokkaido book would be noisiest.