# PLAN.md — A Comprehensive Reference Grammar of Hokkaido Ainu

## 1. Title and Vision

**Working title:** *A Comprehensive Reference Grammar of Hokkaido Ainu* (project root: `/home/mkpoli/projects/Ainu/ainu-grammar-hokkaido`).

**Vision.** To produce the most comprehensive English-language reference grammar of Hokkaido Ainu ever written: a single, coherent, corpus-grounded description that integrates *every* prior description of the language — from Edo-period wordlists and Batchelor through Kindaichi, Chiri, Tamura, Refsing, Shibatani, Sato, Bugaeva, and Nakagawa — with the full modern apparatus of general, historical, and typological linguistics, then re-analyzes the language to surface what prior work missed and keeps improving as evidence grows.

**Four standing commitments** define the book and run through every chapter rather than forming separate parts:

1. **Corpus-quantified.** Frequencies of affix cells, evidentials by genre, alignment splits, noun-incorporation productivity, and sandhi optionality — backed by a ~196,000-sentence aligned corpus and an 80-source dictionary aggregation. No predecessor reports numbers; this is the book's primary differentiator.
2. **Typologically framed.** Every domain scored against named samples and frameworks (WALS/Grambank-style features: alignment, noun incorporation, applicatives, evidentiality, numeral base, nominalization, tenselessness), with explicit forward-references from a single orientation feature-profile.
3. **Diachronically integrated.** Proto-Ainu reconstruction and grammaticalization pathways woven into each synchronic chapter (proto-form + source), not quarantined in a history chapter.
4. **Optionally formalized.** An explicit, skippable formal-analysis layer for the five theory-magnet domains (alignment, applicatives, noun incorporation, evidentiality, switch-reference-like linkage).

**Granularity target.** The benchmark is Nakagawa 2024 『アイヌ語広文典』 (652 pp., 28 top-level chapters, ~130–160 numbered subsections). This grammar targets **at least 2× that granularity** while remaining tighter and more navigable than a sprawling reference: **120–180 granular leaf chapters** (a few hundred would be too many). The merged outline is now **complete and frozen: it enumerates 198 leaf chapters across 23 parts**, exceeding Sato 2008, Tamura 1988–2000, and Bugaeva (ed.) 2022 in distinct described topics. At 198 it sits **slightly above** the stated 120–180 envelope; the coherence review (§3) flags candidate merges that could trim it toward **~175** if a tighter book is preferred — an open decision (§9), not a defect.

**Honesty rule (non-negotiable).** Earlier grammars exist (Tamura, Sato 2008, Nakagawa 2024, Bugaeva ed. 2022). The book claims **comprehensiveness, not priority** — never "the first Ainu grammar." "First English treatment to X" is permitted only where literally true.

---

## 2. Scope and Boundaries

**Grammar only.** This is a grammar, not a dictionary. The hard rule: **no dictionary module is built, and no lexicon is embedded.** Dictionaries (`ainu-dictionaries`, 80 sources / 155,523 rows) and the bibliographic backbone (`ainu-sources` / db.aynu.org) live in their own repos and are **linked and cited, never reimplemented.** For any lemma in an example, the grammar links out to its dictionary entries; it does not reproduce gloss data. This keeps the project bounded and avoids the per-source copyright exposure of the dictionary collections.

**Hokkaido focus, with systematic contrast.** The core object is Hokkaido Ainu — fortunately the dominant share of the corpus (Saru 77,964 / Shizunai 43,295 / Mukawa 13,424 / Chitose 4,420 sentences). **Sakhalin (Enciw) and Kuril Ainu are treated as the principal external contrast set**, in dedicated contrast boxes per phenomenon and in a full comparative part (Part XX), not as the primary description. Where a feature is a Hokkaido flagship the Sakhalin sketch lacks (pitch-accent, the four-term evidential paradigm, applicatives, noun incorporation, oral-literature register grammar, full Hokkaido dialectology), it receives first-class, expanded treatment.

**Prose language.** English-only reference prose; multilingual UI chrome only (see §5). The grammar is not translated into other languages; only navigation/labels are localized via Paraglide.

**What is in scope but easy to mistake as out of scope:** the modern revival register (standardized orthography plus coined vocabulary) is described as a synchronic variety alongside the traditional oral corpus, with coinages explicitly flagged as such.

---

## 3. Information Architecture — The Full Chapter Outline

This is the centerpiece. The book is organized as **23 Parts → (optional Subparts) → leaf Chapters**, presented in the structural-descriptive order all source surveys converged on: phonology → morphophonology → nominal → personal affixes → verb → valency/voice → TAM → evidentiality/modality → negation → simple clause → complex sentence → discourse, bracketed by front and back matter and closed by a diachrony/dialectology + contact + texts block.

**Numbering policy.** Chapter numbers are **book-wide sequential** and **derived from array order** (parts are pure grouping; Roman part numerals are display-only). Slugs are the stable primary key; numbers are never hardcoded in prose. Below, every chapter carries its frozen slug, one-line summary, section list, key source keys, and the novel-contribution note. The outline is now **complete: all 23 Parts are fully enumerated** to a uniform depth (198 leaf chapters), with no remaining part-level-prose placeholders to expand.

---

## Part 1. Part I — The Language and Its Setting

**1. Aims, Scope, and Design Philosophy of This Grammar** `aims-scope-design-philosophy`  
What this reference grammar covers, whom it is for, and the integrated corpus-quantified, typologically-scored, diachronically-grounded method that distinguishes it from prior grammars.  
Sections: Aims and intended readership; what a 'comprehensive reference grammar' commits to; Scope: Hokkaido focus with systematic Sakhalin/Kuril contrast and Hokkaido-internal dialect coverage; The integrated method: corpus quantification, WALS/Grambank typological scoring, and per-chapter diachrony; The optional formal-analysis layer for the theory-magnet domains (alignment, applicatives, incorporation, evidentiality, clause-linkage); Relation to and advance on Tamura, Refsing, Shibatani, Sato, Bugaeva, and Nakagawa  
Sources: nakagawa2024; bugaeva2022; sato2008; refsing1986; shibatani1990; tamura1996; nowakowski2020 (Digital Corpus of Ainu); bugaeva2022 (Glossed Audio Corpus / Topical Dictionary)  
Gap/novel: States the book's differentiators explicitly: ~2x Nakagawa (2024) granularity, a full corpus-quantified layer, integrated grammaticalization/diachrony per chapter, and explicit typological scoring — none of which any single existing Ainu grammar combines.  

**2. A Typological Profile of Hokkaido Ainu** `typological-profile`  
A condensed bird's-eye sketch of the language's structural type, serving as a roadmap to the granular chapters that follow.  
Sections: Polysynthetic, head-marking, head-final/SOV, postpositional, modifier-before-head profile; Split-intransitive (active-stative) alignment and the four-person affix system in brief; Valency machinery overview: causatives, the e-/ko-/o- applicatives, antipassive/reflexive/reciprocal, and noun incorporation; The nominalization-plus-copula evidential paradigm and tenselessness as Ainu signatures; Where Hokkaido Ainu sits on selected WALS/Grambank features (alignment, NI, applicatives, evidentiality, numeral base)  
Sources: shibatani1990; bugaeva2022; bugaeva2012 (Southern Hokkaido Ainu); nakagawa2024; sato2008; refsing1986; dalcorso2025 (alignment)  
Gap/novel: A single feature-scored thumbnail keyed to typological databases (WALS/Grambank), functioning as an explicit cross-reference index into the detailed chapters — not offered at this granularity in prior English sketches.  

**3. The Ainu People, Their Homeland, and History** `ainu-people-homeland-history`  
The ethnonym, geography, society, and contact history that frame the language and its present endangerment.  
Sections: The ethnonym Aynu, self-designation, and naming controversies; Geography: Hokkaido, Sakhalin, the Kurils, and the northern-Honshu substrate-toponym evidence for the historical range; Society, subsistence, and culture in outline (as relevant to lexicon and register); Contact history with the Wajin/Japanese and with Russians; Colonization, the Meiji assimilation policies, and demographic decline  
Sources: bugaeva2022; shibatani1990; nakagawa2024; refsing1986; Domain AK (Japanese contact and toponymy sources)  
Gap/novel: Integrates toponymic evidence for the language's former range and connects the sociohistorical setting directly to the patchy, dialect-uneven documentary record exploited later in the grammar.  

**4. The Sociolinguistic Situation: Endangerment and Revitalization** `sociolinguistic-situation-revitalization`  
The present state of Hokkaido Ainu — language shift, speaker estimates, documentation, and the revitalization movement, including new speakers and standardized 'neo-Ainu'.  
Sections: Language shift and the near-loss of L1 speakers; degrees-of-endangerment assessment and speaker estimates; Documentation, archives, and the new digital/audio corpora; Revitalization: schooling, media, neologism-coining, and the rise of new speakers; Institutional support: FRPAC, Upopoy / the National Ainu Museum, and standardized teaching materials; How revitalization norms (orthography, coined lexicon) interact with this grammar's descriptive choices  
Sources: sato2012 (アイヌ語の現状と復興); sato2021 (国立アイヌ民族博物館における復興); yoshimoto2022 (新たな話者たちによるアイヌ語復興); ijas2023 (revitalization through lexical modernization); bugaeva2022; utari1994  
Gap/novel: Quantifies the present situation and treats the emergent 'standard/neo-Ainu' of new speakers as a sociolinguistic object in its own right, distinguishing revival-norm forms from the documented native varieties the grammar describes.  

**5. The Genetic Position of Ainu: Isolate Status and Macro-Comparison Controversies** `genetic-position-macro-comparison`  
Ainu as a language isolate, and a methodologically explicit survey of the contested macro-relationship and deep-contact proposals.  
Sections: Ainu as a language isolate: the default consensus and what 'isolate' commits to; Ainu–Japonic proposals versus the deep-contact alternative; 'Altaic', Austroasiatic/Austronesian, and other macro-comparisons surveyed and flagged as speculative; Method: separating inheritance, contact, and chance resemblance (borrowing scales, comparative method); Secure internal classification — Hokkaido, Sakhalin, Kuril — as the only firm comparative base  
Sources: nakagawa2024 (ch. 2 系統と方言); bugaeva2022; shibatani1990; vovin1993 (cited, not in repo); shiratori2026 (proto-Ainu *ia); itabashi2001 (Sakhalin length / Hokkaido pitch diachrony); Domain AK (Vovin Austronesian-contact rebuttals)  
Gap/novel: A sober, criteria-driven survey that quarantines speculative macro-comparison from secure internal reconstruction, explicitly scoring each proposal's evidential status rather than adjudicating relatedness.  

**6. The History of Ainu Language Description and Previous Research** `history-of-description-research`  
A periodized historiography of Ainu linguistics from Edo-period records to the modern typological and corpus-computational turn, situating this grammar in that lineage.  
Sections: Edo-period records and the philological sources (Kaga-ke documents, early word-lists); Batchelor, Piłsudski, and early Western/Russian documentation; Kindaichi and Chiri: the classical Japanese descriptive tradition; Tamura, Refsing, Shibatani, and Sato: the modern descriptive and typological era; Bugaeva and Nakagawa: the current state of the art, and the computational/NLP–corpus turn  
Sources: kindaichi1936; chiri1942; refsing1986; tamura1996; tamura1997 (アイヌ語 encyclopedia sketch); sato2008; shibatani1990; bugaeva2022; nakagawa2024; pilsudski1912; fukazawa2017 (加賀家文書 dissertation); nowakowski2020 (Digital Corpus); senuma-aizawa (UD); yasuoka (NLP/philology)  
Gap/novel: Periodizes Ainu linguistics (Edo philology → classical Kindaichi/Chiri → modern descriptive → typological/corpus-computational) as an explicit research-history chapter, including the NLP/corpus turn that earlier grammars omit.  

## Part 2. Part II — Sources, Conventions, Glossing, and Orthography

**7. Written Sources: Grammars, Dictionaries, and the Philological Record** `written-sources-grammars-dictionaries`  
The book-length descriptive tradition, lexicography, and Edo-period manuscript sources underpinning the grammar, with an audit of works that must be cited but are physically absent.  
Sections: The classical grammars: Kindaichi & Chiri (1936) and Chiri (1942); Modern reference grammars: Refsing (1986), Tamura, Satō (2008), Nakagawa (2024), the Bugaeva Handbook (2022), Shibatani (1990); Dictionaries and lexical resources (Tamura Saru, Nakagawa Chitose, Kayano, Hattori dialect dictionary); Edo-period old documents and the philological tradition (Kaga-ke monjo, 蝦夷記); Source gaps: works cited-but-absent (Tamura 2000, Bugaeva 2004 Chitose, Dal Corso 2021)  
Sources: kindaichi1936; chiri1942; refsing1986; tamura1996; sato2008; nakagawa2024; bugaeva2022; shibatani1990; fukasawa2017 (Kaga-ke diss.); sato2003/2008/2009 (old-document philology)  
Gap/novel: Adds a transparent source-criticism layer that rates each grammar's dialect base and reliability and flags the missing Tamura (2000) English Saru grammar as the field's key lacuna — no predecessor grammar audits its own evidentiary base.  

**8. The Oral-Literature Corpus and Spoken-Language Data** `oral-literature-and-spoken-corpora`  
The annotated oral-narrative text editions, recorded conversation, and audio archives that supply the grammar's connected-discourse examples, treated as a genre-tagged quantifiable corpus.  
Sections: Annotated oral-text editions (Nakagawa テキスト集 1–24, Otani prose-tale series, Fujita Kannari Matsu notebooks); Genre coverage as data (uwepeker, yukar, kamuy yukar, ritual prayer); Recorded conversation and pedagogical corpora (Kayano 1987, Utari Kyōkai 1994); Sakhalin and archival text editions (Piłsudski, Sakaguchi, Murasaki); Audio archives and the NINJAL Glossed Audio Corpus of Folklore  
Sources: nakagawa2024; kayano1987; utari1994; pilsudski1912; murasaki2025; Otani text editions (1995–2022); Fujita Kannari-Matsu series (2021–2025); Kitahara ritual-text editions (2012/2013)  
Gap/novel: Reframes text-editions as a quantifiable register corpus (genre- and speaker-tagged) rather than mere illustration, enabling the per-genre frequency claims (evidentials, 4th person, TAM) made downstream in the grammar.  

**9. The Dialect Sample and the Corpus-Quantification Method** `dialect-sample-and-corpus-method`  
Which Hokkaido dialects are sampled, how Sakhalin/Kuril contrast is framed, and exactly how the grammar computes and reports corpus frequencies.  
Sections: The Hokkaido dialect sample (Saru, Chitose, Shizunai, Tokachi, Horobetsu, Mukawa, Shiranuka); Sakhalin and Kuril as systematic external contrast points; Dialect classification and isogloss basis (Asai reanalysis, dialectometry); Corpus-frequency methodology: counting units, normalization, and how figures are cited; Digital corpora and NLP resources (Nowakowski Digital Corpus, UD treebanks)  
Sources: refsing1986; sato2008; bugaeva2022; fukazawa2025; ono2020 (dialect division); kasuga2026 (dialectometry); nowakowski2020 (Digital Corpus); senuma-aizawa (UD)  
Gap/novel: First Ainu grammar to state an explicit, reproducible corpus-quantification protocol and dialect-weighting scheme, pairing hand-checked elicitation with the digital corpus so that every numerical claim is traceable.  

**10. Interlinear Glossing, Abbreviations, and Citation Conventions** `glossing-abbreviations-and-citation`  
How to read the grammar's examples — the Leipzig-based interlinear format, morpheme segmentation, the gloss and abbreviation inventory, and the source-attribution sigla.  
Sections: The four-line interlinear format and the Leipzig Glossing Rules baseline; Morpheme segmentation: affix (-) vs clitic (=) vs incorporation; The Ainu-specific gloss inventory (4/INDEF, AFF, APPL, AP, RECP, etc.); The abbreviation table and the glossing of zero and portmanteau exponents; Example citation: source, dialect, genre, and speaker sigla  
Sources: bugaeva2022; nakagawa2024; sato2008; refsing1986; Leipzig Glossing Rules (external standard)  
Gap/novel: Reconciles the divergent gloss labels of the Japanese tradition (Tamura/Satō: 所属形, 不定人称) with the typological tradition (Bugaeva/Dal Corso: AFF, 4/INDEF) into one consistent set, supplied with a concordance table — a unification no single existing source provides.  

**11. The Latin Phonemic Transcription** `latin-phonemic-transcription`  
The canonical romanization adopted as the grammar's primary script — its phoneme-to-grapheme mapping and conventions for /c/, the glottal stop, accent, and capitalization.  
Sections: Phoneme-to-grapheme correspondences and the choice of c (vs ch / č / ts); Glottal stop, vowel-initial words, and onset representation; Pitch-accent diacritics: when and how accent is marked; Capitalization, proper names, and punctuation policy; Relationship to the IPA and to other romanizations in the literature  
Sources: tamura1996; sato2008; bugaeva2022; nakagawa2024; ijas2023; kirikae1997 (アイヌによるアイヌ語表記)  
Gap/novel: States an explicit accent-marking policy (accent shown in citation forms and examples) that most grammars leave implicit or omit, and fixes a single primary romanization while mapping it to the IPA and to the Batchelor/Kindaichi/FRPAC variants.  

**12. Katakana Orthography and the Extended Small-Kana Codas** `katakana-and-small-kana-codas`  
The katakana writing of Ainu — the syllabary mapping, the extended small-kana coda letters, the modern normative standard, and historical kana systems.  
Sections: Katakana-to-phoneme mapping and the open-syllable default; The extended small-kana coda set (ㇰ ㇱ ㇲ ㇳ ㇷ゚ … ㇻ ㇼ ㇽ) and Unicode coverage; The Utari Kyōkai / Akor Itak normative standard; Historical kana systems: Nabezawa Genzō and Edo-period kana usage; Latin↔katakana correspondence and round-tripping issues  
Sources: utari1994; nakagawa2024; kirikae1997; nakagawa2006 (アイヌ人によるアイヌ語表記への取り組み); endo2016 (Nabezawa kana); sato2018 (古文献における仮名の用法)  
Gap/novel: Documents Unicode small-kana (incl. ㇷ゚ = ㇷ + ゚ combining semi-voiced mark) rendering and interoperability problems — a digital-orthography issue entirely absent from print-era grammars.  

**13. Cyrillic and Multi-Script Rendering** `cyrillic-and-multiscript-rendering`  
The Cyrillic transcription of Ainu in the Russian and Sakhalin tradition and the interoperability of Latin, katakana, and Cyrillic renderings.  
Sections: Cyrillic in the Russian tradition: Piłsudski and Nevsky; Sakhalin-Ainu (Enciw) Cyrillic conventions and vowel length; Script conversion and Latin↔katakana↔Cyrillic interoperability; This grammar's multi-script presentation policy  
Sources: pilsudski1912; murasaki2025; Sakaguchi Sakhalin text editions (2018–2022); dalcorso2024 (Piłsudski-corpus phonology)  
Gap/novel: Provides an explicit three-script transliteration table (Latin / katakana / Cyrillic), enabling cross-tradition lookup — chiefly for Sakhalin contrast sources — that no single existing grammar offers.  

**14. Orthographic Standardization and the Word-Division Problem** `orthographic-standardization-and-word-division`  
The competing romanization norms, the unresolved question of where word boundaries fall, and the spacing and hyphenation conventions this grammar adopts.  
Sections: Competing romanization standards and the absence of a single norm; Word boundaries: clitic (=) vs affix (-) vs free word (the kor an / ku=kor cases); Spacing, hyphenation, and the writing of compounds and incorporation; Capitalization, sentence punctuation, and quotation conventions; The conventions adopted in this grammar (decision summary)  
Sources: nakagawa2024; sato2008; bugaeva2022; ijas2023; kirikae1997; nakagawa2006  
Gap/novel: Foregrounds word-division as a substantive morphosyntactic-analysis problem (clitic vs affix boundaries) rather than a cosmetic spacing choice, tying orthographic spacing directly to the grammar's morphological analysis and offering a comparative-standard concordance with reasoned recommendations.  

## Part 3. Part III — Segmental Phonetics, Phonology, and Phonotactics

**15. The Consonant Inventory and Its Phonetic Realization** `consonant-inventory`  
The twelve-consonant system /p t k c s m n r w y h/ (plus glottal stop), with instrumental detail on stop VOT, the affricate /c/, and intervocalic lenition.  
Sections: Phonemic inventory and the obstruent/sonorant split; the labial gap (no /b/, /f/); The unaspirated stops /p t k/: VOT measurements and the intervocalic voicing/lenition allophony (the 'b/d/g' of older transcriptions); The affricate /c/ and its realizations [tʃ]~[ts]~[tɕ]; conditioning and dialect variation; Nasals /m n/ and the place-assimilation preview (cross-ref morphophonology part); Source disputes: Batchelor's voiced-stop letters vs the modern voiceless analysis  
Sources: sato2008; bugaeva2022; nakagawa2024; tamura1996; shibatani1990; refsing1986; dalcorso2024; chiri1942  
Gap/novel: No existing grammar offers instrumental phonetics; supply VOT/spectrographic data and corpus-quantified intervocalic lenition, reframing the historical voiced-stop notation as allophonic.  

**16. The Vowel Inventory and Vowel Realization** `vowel-inventory`  
The five-vowel triangular system /a e i o u/, the absence of phonemic length in Hokkaido, and allophonic centralization/devoicing.  
Sections: The five-vowel system and its acoustic targets; formant plots and the vowel space; Absence of contrastive length in Hokkaido vs Sakhalin length (cross-ref Sakhalin contrast / diachrony); Allophonic devoicing and centralization; the [ə] question; Reassessing Chiri's (1952) 'vowel harmony' claim; Dialect microvariation in vowel quality  
Sources: sato2008; bugaeva2022; nakagawa2024; tamura1996; chiri1952; dalcorso2024; murasaki2025; fukazawa2025  
Gap/novel: Per-dialect formant plots and a corpus check on devoicing; critical re-evaluation of the long-cited vowel-harmony hypothesis against modern data.  

**17. /s/ and the s ~ š Palatalization Alternation** `s-palatalization`  
The allophonic [s]~[ʃ] alternation before and after /i/ and word-finally (Saru sisam vs šišam), its conditioning, and its dialect distribution.  
Sections: Distribution of [ʃ] before/after /i/ and in coda; conditioning environments; Allophonic vs marginal-phoneme analyses of /š/; Dialect- and idiolect-conditioned variation; corpus frequencies; Diachronic link to proto-Ainu palatalization (the *ia hypothesis)  
Sources: tamura1996; sato2008; nakagawa2024; refsing1986; bugaeva2022; shiratori2026; fukazawa2025  
Gap/novel: Corpus-quantified distribution of s~š with sociolinguistic/dialect variation, tied to Shiratori (2026) proto-Ainu palatalization reconstruction.  

**18. The Rhotic /r/ and Coda-r** `rhotic-r`  
The single rhotic phoneme (flap [ɾ]) with positional allophones, and coda /r/ as the most morphophonologically active segment of the language.  
Sections: /r/ as a single phoneme; flap realization and positional allophony; Coda /r/: its release/offglide and the echo-vowel realization debate; Coda /r/ as the trigger of cluster assimilation (cross-ref morphophonology/sandhi part); The -rV syllable type and its alternations (Sakhalin comparison)  
Sources: sato2008; bugaeva2022; nakagawa2024; tamura1996; tangiku1998; refsing1986  
Gap/novel: Acoustic study of the coda-r release/echo vowel; foregrounds coda /r/'s outsized role feeding the sandhi system, drawing on Tangiku (1998) on -rV syllables.  

**19. The Glottal Stop: Onset Default vs Phoneme** `glottal-stop`  
The status of the glottal stop as obligatory-onset filler versus an independent phoneme, and its interaction with the every-syllable-has-an-onset requirement.  
Sections: Distribution: word-initial and intervocalic; the onset-default analysis; Arguments for and against phonemic status; Interaction with hiatus and glide epenthesis (cross-ref glides chapter); Notation practices across grammars and old documents  
Sources: sato2008; nakagawa2024; bugaeva2022; tamura1996; shibatani1990; refsing1986  
Gap/novel: Settles the phonemicity question with corpus evidence on onset-default insertion, distinguishing it cleanly from the final-h problem treated separately.  

**20. /h/, Coda-h Neutralization, and the Final-h Question** `h-series-and-final-h`  
The laryngeal /h/ in onset and coda, the neutralization of coda-h, and the major controversy over whether word-final -h exists in Hokkaido and its Sakhalin length reflex.  
Sections: Onset /h/ vs the restricted coda /h/; Coda-h neutralization and copy/glottal realizations; The final-h controversy: real coda vs affiliative/citation artifact; Historical tie-in: final-h as the source of Sakhalin vowel length (cross-ref diachrony part)  
Sources: sato2008; nakagawa2024; bugaeva2022; tamura1996; itabashi2001; dalcorso2024; refsing1986; chiri1942  
Gap/novel: Adjudicates the long-standing final-h debate with corpus data and integrates Itabashi (2001) on the Sakhalin-length ↔ Hokkaido final-h diachronic correspondence.  

**21. The Glides /w/ and /y/: Phonemic vs Epenthetic** `glides-w-y`  
The status of /w y/ as phonemes that are nonetheless largely predictable at hiatus, distinguishing underlying glides from epenthetic ones.  
Sections: Evidence for phonemic /w y/ in onset position; Predictable glides at vowel hiatus; the epenthesis environment; Diagnostics: where a glide is underlying vs inserted; Glide behavior under affixation and compounding (cross-ref sandhi part)  
Sources: okuda2025; sato2008; nakagawa2024; bugaeva2022; tamura1996; refsing1986  
Gap/novel: Builds on Okuda (2025) on transitional glides (わたり音) to formalize the underlying-vs-epenthetic distinction not handled in prior grammars.  

**22. Vowel Hiatus and the Coda-Glide vs Diphthong Analysis** `hiatus-and-diphthongs`  
Vowel sequences across syllable boundaries, glide epenthesis to resolve hiatus, and the analysis of ay/uy/oy/aw/iw/ew as coda-glide (VC) rather than true diphthongs.  
Sections: V.V sequences across syllable boundaries; hiatus resolution by glide epenthesis; The claim that Ainu has no true diphthongs; Coda-glide (VC) vs diphthong analysis of ay/uy/oy/aw/iw/ew; Consequences for accent placement and syllable weight (cross-ref prosody part)  
Sources: okuda2025; sato2008; nakagawa2024; bugaeva2022; tamura1996; refsing1986  
Gap/novel: Corpus-grounded resolution of the diphthong-vs-coda-glide question, drawing directly on Okuda (2025) on vowel sequences.  

**23. The (C)V(C) Syllable Template and Obligatory Onset** `syllable-template`  
The canonical (C)V(C) syllable, the requirement that every syllable have an onset (glottal-stop default), and the syllabification of internal sequences.  
Sections: The canonical (C)V(C) template and its inventory of shapes; Obligatory onset and the glottal-stop default; whether onsetless syllables exist underlyingly; Syllabification of CVCCV; absence of complex onsets; Comparison with Japanese moraic/CV structure  
Sources: sato2008; nakagawa2024; bugaeva2022; tamura1996; shibatani1990; refsing1986  
Gap/novel: A formal templatic/OT syllabification model with explicit comparison to Japanese moraic phonology, beyond the informal statements in existing grammars.  

**24. Coda Phonotactics, Clusters, Word-Edge Constraints, and Loanword Adaptation** `coda-phonotactics-and-loanword-adaptation`  
The permitted-coda inventory and its asymmetry with onsets, heterosyllabic clusters, word-initial/final constraints, the citation-vs-bound shape mismatch, and the adaptation of Japanese loans.  
Sections: The coda inventory (p t k s m n r w y h) and onset/coda asymmetry; coda neutralizations; Tautosyllabic vs heterosyllabic clusters; the ban on complex onsets; Word-edge phonotactics and the citation-vs-combining (concept/affiliative) shape mismatch; Loanword adaptation: vowel epenthesis repairing Japanese clusters and codas; Corpus phonotactic statistics and dialect microvariation  
Sources: sato2008; nakagawa2024; bugaeva2022; tamura1996; refsing1986; shibatani1990; fukazawa2025; utari1994; ijas2023  
Gap/novel: Corpus-derived phonotactic statistics for codas and clusters, plus a systematic account of Japanese-loan repair patterns, neither of which is quantified in prior grammars.  

## Part 4. Part IV — Prosody and the Pitch-Accent System

**25. The Pitch-Accent Placement Rule and the Accented/Accentless Dialect Split** `pitch-accent-placement-rule`  
States the synchronic high-pitch placement generalization and divides Hokkaido into accented and accentless dialect classes.  
Sections: Tamura's generalization: H on the first syllable if it is heavy/closed (has a coda) or the word is monosyllabic-heavy; otherwise H on the second syllable; Worked paradigms from Saru and Chitose; treatment of monosyllables and onsetless/epenthetic-onset words; Accented (Saru, Chitose, Shizunai) vs accentless/level dialects (parts of the Ishikari/northern area) as accent classes; Residual exceptions, lexical leakage, and the limits of full predictability  
Sources: tamura1996; nakagawa2024; sato2008; shibatani1990; bugaeva2022; refsing1986  
Gap/novel: Tamura's rule restated with corpus counts of conforming vs exceptional items and an explicit accented/accentless dialect-class map, which most English sketches omit.  

**26. The Prosodic Unit and the Accent-versus-Tone Analysis** `mora-syllable-accent-vs-tone-analysis`  
The theoretical analysis of the system: what bears prominence and whether Ainu prosody is culminative accent or a tonal melody.  
Sections: Mora-counting vs syllable-counting analyses of placement, and the role of the coda in weight; Culminative pitch-accent (one prominence per word) vs autosegmental tonal-melody (L-H...) treatments; H realization, spreading, and the phonetic L/H targets across the prosodic word; Typological placement against Japanese pitch-accent systems (Shibatani vs Tamura framing)  
Sources: shibatani1990; tamura1996; nakagawa2024; bugaeva2022; sato2008  
Gap/novel: Adjudicates the long-contested accent-vs-tone and mora-vs-syllable questions side by side, which no English grammar lays out explicitly; ties the unit choice to the syllable-template chapter in Part III.  

**27. Lexical/Contrastive Accent and Minimal Pairs** `lexical-contrastive-accent-minimal-pairs`  
How much accent is rule-derived versus lexically specified, demonstrated through pitch-only minimal and near-minimal pairs.  
Sections: Rule-derived (predictable) vs lexically stored unpredictable accent; Minimal and near-minimal pairs distinguished solely by pitch placement; Functional load of pitch and its low contrastive yield; Accent of loanwords, proper names, and reduplicated/ideophonic forms  
Sources: tamura1996; nakagawa2024; sato2008; bugaeva2022  
Gap/novel: Quantifies the genuinely contrastive residue against the predictable majority, separating true lexical accent from rule output.  

**28. Accent in Compounds and under Affixation and Cliticization** `accent-in-compounds-and-affixation`  
How prosodic-word formation reorganizes accent in compounds and when affixes and clitics attach.  
Sections: Compound prosodic-word formation and the de-accenting of second members; Accentual behavior of personal affixes and nominal/adverbial prefixes; Plural -pa, possessive/affiliative -hV, and other suffixes as accent-shifting vs accent-neutral; Prosodic diagnostics for clitic vs affix vs independent-word status (interface with Part V sandhi)  
Sources: nakagawa2024; tamura1996; sato2008; bugaeva2022; refsing1986  
Gap/novel: Brings together Nakagawa's person-affix and compound accent rules with a prosodic-word model that doubles as a clitichood diagnostic feeding the morphophonology in Part V.  

**29. Phrasal and Utterance Intonation** `phrasal-and-utterance-intonation`  
Intonational contours above the word: declarative vs interrogative tunes, phrasing, and an f0 corpus study.  
Sections: Declarative vs interrogative and continuation contours; Phrase-final lengthening, downdrift, and prosodic phrasing of clauses; Intonation of sentence-final particles and focus/emphasis prosody; f0 corpus methodology (NINJAL Glossed Audio Corpus) and measurement protocol  
Sources: nakagawa2024; bugaeva2022; tamura1996  
Gap/novel: Near-virgin territory: phrasal/utterance intonation is essentially undocumented for Ainu, so an instrumental f0-corpus contour study is a genuine value-add rather than a synthesis of prior description.  

**30. Verse-Line Meter, Recitation Pitch, and the Reconstruction of Accent** `verse-meter-and-proto-accent-reconstruction`  
Prosody in its literary and historical extensions: yukar meter and sakehe, sung versus linguistic pitch, and proto-Ainu accent reconstruction.  
Sections: Syllable-count meter of the yukar/kamuy-yukar verse line and the sakehe refrain/burden; Melodic (sung) pitch of recitation vs lexical pitch-accent; Proto-Ainu accent-class reconstruction and dialect reflexes; The Sakhalin vowel-length correspondence to Hokkaido pitch and its diachronic implications  
Sources: kindaichi1933; nakagawa2024; itabashi2001; shiratori2026; bugaeva2022; murasaki2025  
Gap/novel: Gathers the two outward-facing prosodic topics — verse meter (full treatment cross-referenced to Part XIX) and accent diachrony (Part XX) — using Itabashi's Sakhalin-length-to-Hokkaido-pitch correspondence as the bridge between the synchronic system and proto-accent reconstruction.  

## Part 5. Part V — Morphophonology and Sandhi

**31. Coda /r/ Assimilation and Sonorant Sandhi** `coda-r-assimilation-sonorant-sandhi`  
The single most morphophonologically active segment: regressive assimilation of coda /r/ to a following coronal or nasal across morpheme, compound, and word junctures, with total-vs-partial outcomes and register-conditioned optionality.  
Sections: Coda /r/ as the most active sandhi trigger; positional realization and release vowels; Regressive total assimilation r + n/t/c/s (kor ruwe, kor pe; -r=an junctures) and resulting geminates; Partial assimilation, resyllabification, and the gemination-vs-cluster output question; Domains of application: prefix–stem, stem–stem (compounds), word–word clitic groups; Optionality, register, and dialect microvariation, corpus-quantified; Sakhalin -rV verb comparison  
Sources: tamura1996; sato2008; nakagawa2024; bugaeva2022; refsing1986; tangiku1998; fukuda1956  
Gap/novel: First corpus-quantified statement of coda-/r/ assimilation rates by boundary type and register, integrating Tangiku 1998's Sakhalin -rV verb data; resolves the Tamura-vs-Nakagawa difference over how fully the rule is stated.  

**32. Nasal/Place Assimilation and Consonant-Cluster Simplification** `nasal-place-assimilation-cluster-simplification`  
Place assimilation of coda nasals (n→m before labials, velar-context outputs) and the simplification, degemination, and juncture-gemination of heterosyllabic clusters at morpheme and word boundaries.  
Sections: Coda-nasal place assimilation: n→m /_labial and velar-context realizations; Place assimilation and neutralization of other codas at junctures; Heterosyllabic cluster simplification at affix, compound, and word boundaries; Degemination and juncture gemination; the phonology-vs-lexicalization boundary; Optionality, productivity, and Hokkaido dialect variation (corpus-quantified)  
Sources: tamura1996; sato2008; nakagawa2024; bugaeva2022; refsing1986; kirikae1984; shibatani1990  
Gap/novel: Separates productive (phonological) from lexicalized cluster outputs using the compound-noun literature (Kirikae 1984, Sato 2008 Chitose compounds); supplies the cluster-simplification statistics absent from print grammars.  

**33. Glide Epenthesis and Vowel-Hiatus Resolution** `glide-epenthesis-hiatus-resolution`  
Insertion of [w]/[y] transitional glides to break vowel hiatus at affixal, compound, and phrasal junctures, and the underlying-vs-epenthetic glide question at the morphophonology–phonetics interface.  
Sections: Vowel hiatus across morpheme and word boundaries; when hiatus is tolerated vs repaired; y-/w-epenthesis conditioned by flanking vowel quality (a=i, ku=V, compound V.V); Underlying vs epenthetic glides: stems in -w/-y and prefix-final vowels; Interface with coda-glide sequences (ay/uy/aw) analyzed in Part III; Phonetics of transitional glides and quantified epenthesis-vs-retention optionality  
Sources: okuda2025; tamura1996; sato2008; nakagawa2024; bugaeva2022; refsing1986  
Gap/novel: Builds on Okuda 2025's instrumental study of glides and vowel sequences to give the first quantified treatment of when hiatus is repaired by epenthesis vs retained, distinguishing underlying from inserted glides.  

**34. Echo Vowels and the Affiliative Vowel-Copy** `echo-vowels-affiliative-vowel-copy`  
The vowel-copy mechanism producing echo/release vowels on coda consonants and the vowel quality of the affiliative -hV/-V suffix, treated as the morphophonology that feeds the possessive system (its morphosyntax is Part VII).  
Sections: Echo/release vowels on coda /r/ and other codas; copy directionality; Affiliative -hV / -VhV vowel quality as stem-vowel copy (sapa-ha, kema-ha, sik-ihi); The -i / -u affiliative classes and where copy fails (cross-ref Part VII); Synchronic vowel-copy vs Chiri's diachronic 'vowel harmony' analysis; Conditioning, exceptions, and corpus class-frequencies  
Sources: chiri1952; sato2008; nakagawa2024; bugaeva2022; bugaeva2021; tamura1996; refsing1986  
Gap/novel: Reframes Chiri 1952's 'vowel harmony' as a synchronic vowel-copy rule and ties echo-vowel phonetics directly to affiliative vowel quality; cleanly partitions the mechanism (here) from the affiliative-class morphosyntax (Part VII).  

**35. Citation vs Combining Stem Shapes and Support Vowels** `citation-vs-combining-stem-shapes`  
The systematic mismatch between a morpheme's citation (concept) shape and its bound combining shape — final-consonant support vowels, stem-final truncation, and consonant alternations exposed only under affixation or compounding.  
Sections: The citation (concept) form vs combining form distinction as a general alternation type; Final-consonant 'support vowel' in citation forms and its loss in combination; Stem-final vowel deletion vs retention under suffixation; Stem-boundary consonant alternations (p~h, final-h, -rV stems); Inventory of stems with divergent citation/combining shapes; dialect variation  
Sources: tamura1996; sato2008; nakagawa2024; bugaeva2022; refsing1986; tangiku1998; fukuda1956  
Gap/novel: Unifies scattered descriptions of concept-form/combining-form mismatches into a single alternation typology with a corpus inventory; foregrounds the final-h/citation-artifact problem that recurs in the phonology and diachrony parts.  

**36. Personal-Affix Junctural Sandhi, =an/a= Allomorphy, and Connected-Speech Reduction** `personal-affix-sandhi-connected-speech-reduction`  
The junctural sandhi triggered by personal affixes (ku= before vowels, en=, un=, ci=, eci=), the =an/-an and a=/an= allomorphy as a morphophonological problem, and casual-register contraction, elision, and cliticization.  
Sections: Personal-prefix junctural effects: ku= before vowels/consonants; en=, un=, ci=, eci= sandhi; The =an / -an indefinite and a= ~ an= allomorphy treated as morphophonology, not a list; Affix-stack sandhi and the prefix-template interface (cross-ref Part IX); Connected-speech reduction: contraction, vowel/consonant elision, cliticization; Speech-rate and register effects; corpus-quantified optionality across genres  
Sources: tamura1971; tamura1972; nakagawa2009; sato2008; nakagawa2024; bugaeva2022; refsing1986; sakaguchi2024  
Gap/novel: Recasts the =an/a= allomorphy as a derivable morphophonological alternation and supplies the first quantified account of fast-speech reduction at affix/clitic junctures across spoken and narrative genres — a domain the digest flags as 'almost untouched in print grammars.'  

**37. Reduplication Phonology and Rule Interaction** `reduplication-phonology-rule-interaction`  
Base-copy templates in ideophones, intensives, and pluractionals, and how reduplication interacts with the assimilation and epenthesis processes to diagnose rule ordering and the morphology–phonology interface.  
Sections: Reduplication templates: full vs partial base copy and template shape; Reduplication in ideophones/sound symbolism, intensives, and pluractionals (cross-ref Part X); Copy of codas and feeding/bleeding interaction with coda-/r/ and cluster sandhi; Reduplication as a rule-ordering diagnostic (copy before vs after assimilation); Productivity, lexicalization, and corpus optionality; the part-wide rule-ordering synthesis  
Sources: kobayashi2017; sato2008; nakagawa2024; bugaeva2022; tamura1996; refsing1986  
Gap/novel: Uses the reduplication↔sandhi interaction as a synchronic rule-ordering diagnostic — a formalization (OT/ordering) absent from existing grammars — and closes the part with the digest's targeted rule-ordering and corpus-optionality synthesis; draws reduplicative-template data from Kobayashi 2017.  

## Part 6. Part VI — Word Classes and Nominal Morphology

**38. The Word-Class Inventory and the Noun/Verb Bipartition** `word-class-inventory-and-diagnostics`  
The full parts-of-speech inventory of Hokkaido Ainu, the dominant noun/verb split, the morphological and distributional diagnostics that define each class, and noun↔verb category conversion.  
Sections: The inventory: nouns, verbs, and the minor classes (adverbs, adnominals, postpositions, particles, conjunctions, interjections, numerals); The noun/verb bipartition as the primary division; person-affixing vs predicate-only diagnostics; Distributional/morphological tests: possessive inflection, person prefixes, modification, predicability; Category gradience and noun↔verb (word↔phrase) conversion / zero-derivation; Typological placement: a noun-verb-dominant language with weak minor classes; pointers to later parts for each minor class  
Sources: nakagawa2024; sato2008; bugaeva2022; tamura1996; tamura1997; refsing1986; shibatani1990; kindaichi1936; chiri1942; sato2020  
Gap/novel: First English treatment offering an explicit, corpus-grounded distributional test battery for each class plus a feature-based taxonomy; integrates Sato 2020's word↔phrase / verb↔noun conversion data, normally absent from reference grammars.  

**39. The 'No Adjective Class' Thesis: Property Concepts as Stative Verbs** `no-adjective-class-property-verbs`  
Why pirka, poro, and other property words are analysed as stative intransitive verbs rather than adjectives, and whether any residual adjectival/quality-noun subclass survives.  
Sections: The standard analysis: property concepts as patientive/stative intransitive verbs (predicative and attributive uses); Diagnostic evidence: person-marking, negation with somo, nominalization, adverbial -no; The candidate counter-class: adnominals (連体詞), 'quality nouns', and Chiri's versus modern treatments; Comparison/degree as a verbal, not adjectival, strategy (cross-ref Part XVIII); Typological framing: adjective-class typology (Dixon, Stassen) and Ainu's verb-coded property concepts  
Sources: bugaeva2022; sato2008; tamura1996; tamura1997; shibatani1990; nakagawa2024; chiri1942; refsing1986  
Gap/novel: Turns an often-asserted claim into a tested one: a corpus diagnostic battery weighing the 'no adjective' thesis against a possible quality-noun residue, with the adnominal class delimited explicitly.  

**40. Nominal Subclasses and Obligatorily-Possessed (Bound) Nouns** `nominal-subclasses-and-bound-nouns`  
The internal taxonomy of nouns — concrete vs abstract, common vs proper, and the class of 'incomplete'/bound nouns that cannot stand without a possessor.  
Sections: Common vs proper nouns; concrete vs abstract; mass/collective tendencies; The obligatorily-possessed / 'incomplete' noun class (body-part, kin, part-whole, relational stems); Diagnostics for boundness: ungrammaticality of the bare concept form; default possessor strategies; Membership lists, gradience, and reclassification across dialects; Bridges forward: possession (Part VII), relational/locative nouns and pronouns (Part VIII)  
Sources: nakagawa2024; sato2008; bugaeva2022; tamura1997; refsing1986; chiri1942  
Gap/novel: Establishes 'obligatorily-possessed noun' as a formal lexical subclass with explicit membership and corpus frequency, rather than treating boundness only as a fact about possession morphology.  

**41. The Formal / Defective Noun Set (ruwe, hawe, siri, humi, hi, pe, kur)** `formal-defective-nouns`  
The closed set of bound 'formal' nouns that head nominalized and evidential constructions, defined here as a morphosyntactic subclass with shared diagnostics.  
Sections: The set: ruwe, hawe, siri, humi, hi, pe/p, kur and their core senses; Diagnostics distinguishing formal nouns from ordinary nouns (obligatory modification, no independent reference); Their dual life as clause-nominalizers and evidential/sentence-final heads; Internal differentiation: 'thing/person/place' heads vs 'trace/voice/appearance/feeling' heads; Cross-references: evidentiality (Part XIII), nominalization & complementation (Part XVI)  
Sources: nakagawa2024; sato2008; bugaeva2022; dalcorso2018; hirosawa2026; takahashi2013; tamura1997  
Gap/novel: Treats the formal-noun set as a unified word-class subcategory with explicit membership criteria up front — the morphological anchor that later evidential/nominalization chapters presuppose but rarely define in one place.  

**42. Verbal Subclasses: A Valence-Based Word-Class Taxonomy** `verbal-subclasses-taxonomy`  
A word-class-level survey of verb subclasses by valence — intransitive (agentive vs patientive), transitive, ditransitive, and 'complete/incomplete' verbs — with detailed transitivity deferred to Part X.  
Sections: Intransitive verbs split into agentive (A-set) and patientive (O-set) subclasses; Transitive and ditransitive verbs; the 'complete' vs 'incomplete' (kamuy ne-type) distinction; Diagnostics: which person set a verb selects; valence frames as class membership; Light/pro-verbs (ki, ne, an) flagged as a special verbal subclass; Scope boundary: full transitivity, ambitransitivity, and verbal number treated in Part X  
Sources: nakagawa2024; sato2008; bugaeva2022; refsing1986; tamura1997; shibatani1990; kobayashi2015; sato2023  
Gap/novel: Provides a clean class-level verb taxonomy keyed to person-set selection (feeding the alignment debate in Part IX) while explicitly handing off detailed valency/transitivity to Part X, avoiding the usual conflation.  

**43. Derivational Morphology on Nouns: Diminutive, Augmentative, and Size Modification** `nominal-derivation-diminutive-augmentative`  
Noun-internal derivation, principally the diminutive -po and augmentative/evaluative strategies, plus the pon/poro size-modifier boundary between morphology and syntax.  
Sections: The diminutive -po (and -po affection/young-of) — form, semantics, productivity; Augmentative and evaluative derivation; collective/abstract derivates; pon 'small' / poro 'big' modification: prefixal compounding vs attributive verb; Kinship-term and address/vocative morphology; Productivity statistics and lexicalization  
Sources: nakagawa2024; sato2008; tamura1997; bugaeva2022; refsing1986; kayano1987  
Gap/novel: Quantifies the productivity of -po and resolves the pon/poro modification boundary (derivation vs attributive stative verb), a point usually left implicit in pedagogical grammars.  

**44. Noun–Noun Compounding: Headedness, Linking, and Semantics** `noun-noun-compounding`  
Productive N-N compound formation, its headedness and morphophonological linking, and the semantic typology of compounds, drawn from the dedicated Ainu compound-noun literature.  
Sections: Compound vs syntactic NP (合成名詞 vs noun phrase); constituency diagnostics; Headedness, right-headed default, and affiliative/linking morphophonology at the juncture; Semantic patterns: endocentric, attributive, and the animal/plant-name compound type; Compounding feeding and overlapping with noun incorporation (cross-ref Part XI); Corpus productivity and degree of lexicalization  
Sources: kirikae1984; sato2008_compounds; yamaguchi2006; nakagawa2024; sato2008; bugaeva2022; tamura1997; chiri1959  
Gap/novel: Synthesizes the scattered Ainu compound-noun studies (Kirikae 1984; Sato 2008 Chitose; Yamaguchi 2006 animal names; Chiri 1959) into a single semantic-typological account with explicit constituency tests separating compounds from incorporation.  

**45. Deverbal and Denominal Noun Derivation (Lexical Nominalizer Morphology)** `deverbal-denominal-noun-derivation`  
The morphology of forming nouns with -p/-pe, -i/-hi, and -kur, treated here as lexical word-formation, with syntactic nominalization/relativization deferred to Part XVI.  
Sections: Agent/patient/thing nominalizer -p/-pe; the 'one who/that which' pattern at word level; Fact/place/manner nominalizer -i/-hi; the -i vs -hi conditioning question; Lexical head nominalizers kur 'person', usi/uske 'place', and lexicalized derivates; Denominal nouns and the noun↔verb conversion interface (cross-ref Ch. 1); Lexical vs syntactic nominalization boundary; grammaticalization cline and the Sakhalin innovation contrast  
Sources: nakagawa2024; sato2008; bugaeva2022; bugaeva2016; takahashi2018; sato2020; refsing1986; tamura1997  
Gap/novel: Cleanly separates lexical nominalizer morphology (this chapter) from clausal nominalization/relativization (Part XVI), and folds in Takahashi 2018's grammaticalization data and Bugaeva 2016's Hokkaido–Sakhalin innovation contrast.  

**46. Nominal Number: Transnumerality, -utar, and the Locus of Plurality** `nominal-number-utar-transnumerality`  
The nominal number system — bare-noun general number/transnumerality, the human pluralizer -utar/utar(i), and the division of labour between nominal and verbal plurality.  
Sections: General number / transnumerality: bare nouns unspecified for number; The human-collective pluralizer -utar(i) and collective utar; selectional restrictions; Quantifier-based and distributive plurality (opitta 'all', numerals); Locus of plurality: nominal -utar vs verbal -pa and suppletive plural stems (cross-ref Part X); Typology (Corbett); areal plural marking and the Sakhalin -ahcin/utar contrast  
Sources: nakagawa2024; sato2008; bugaeva2022; sakaguchi2020; baek2021; tamura1997; refsing1986  
Gap/novel: Frames Ainu within Corbett's number typology and explicitly maps the nominal-vs-verbal locus-of-plurality division, with Sakaguchi 2020 (utar / -ahcin) and Baek 2021 supplying the areal/Sakhalin comparison usually omitted from Hokkaido grammars.  

## Part 7. Part VII — Possession and the Affiliative System

**47. The Alienable/Inalienable Split and Possessive Classification** `alienable-inalienable-split`  
Hokkaido Ainu's binary possessive split — obligatorily possessed inalienable nouns vs. periphrastically possessed alienable nouns — its semantic classes, gradience, and place on the alienability-typology map.  
Sections: Semantic classes of inalienables (body parts, kin, part–whole, spatial relations, products/excretions); Alienable nouns and the periphrastic strategy (preview of kor); Gradience, reclassification, and dual-class nouns; Typological placement: obligatory vs. optional possession and the alienability hierarchy (Nichols, Stolz)  
Sources: sato2008; nakagawa2024; bugaeva2022; tamura1997; refsing1986; shibatani1990; bugaeva2021  
Gap/novel: Maps Ainu onto the cross-linguistic alienability hierarchy with corpus class-frequencies and tabulates dual-class/reclassifying nouns rarely systematized in prior grammars.  

**48. Concept Form vs. Affiliative (Possessed) Form** `concept-form-affiliative-form`  
The functional opposition between the bare concept form (概念形) and the affiliative/possessed form (所属形), and the rule that inalienable nouns are obligatorily affiliative when possessed.  
Sections: The 概念形/所属形 terminology and the functional contrast; Obligatory affiliative marking under possession; bare nouns as non-possessed; Non-possessive uses of the affiliative (definiteness/anaphoric, idiomatic); Interaction with number and with predicative use  
Sources: nakagawa2024; sato2008; tamura1997; refsing1986; bugaeva2022; chiri1942  
Gap/novel: Separates the syntactic/functional concept-vs-affiliative opposition from its morphophonology (next chapter) and quantifies the non-possessive, definiteness-like uses of the affiliative.  

**49. Morphophonology of the Affiliative Suffix (-hV, -ihi, -uhu, -V)** `affiliative-suffix-morphophonology`  
The intricate inflectional sub-system forming the affiliative: vowel-copy -hV, the -ihi/-uhu/-VhV classes, consonant-stem -V, and the disputed conditioning of class membership.  
Sections: Vowel-copy + h: the -aha/-eha/-oha/-ihi/-uhu paradigm; Consonant-final stems and the -V/-i suffix; stem-shape conditioning; Phonological vs. lexical class membership; Tamura/Nakagawa/Sato disagreements; Internal reconstruction and diachronic source of -hV (final-h / Sakhalin-length tie-in; cross-ref Part XX)  
Sources: tamura1997; tamura1996; sato2008; nakagawa2024; bugaeva2022; refsing1986; chiri1942  
Gap/novel: Consolidates the competing affiliative class-inventories of three reference grammars into one comparative table and integrates the internal-reconstruction account of -hV usually quarantined in the historical chapters.  

**50. Adnominal Possession: Double Marking and the Appositive Construction** `adnominal-possession-double-marking`  
NP-internal possession marked by a personal possessor prefix plus the affiliative suffix (ku= sapa-ha 'my head'), and the appositive/juxtaposed possessor-NP construction (sisam kotanuhu).  
Sections: Personal possessive prefixes (ku=, e=, ci=, a=…) on inalienable nouns; Head-marking + dependent affiliative: the double-marking pattern; The appositive/juxtaposed possessor-NP construction (Bugaeva's appositive possession); Person-prefix sandhi and accent on possessed nouns  
Sources: bugaeva2021; nakagawa2024; sato2008; bugaeva2022; refsing1986; tamura1997  
Gap/novel: Brings Bugaeva's (2021) appositive-possession analysis and its Pacific-areal typology into the reference grammar, with a formal head-marking/double-marking characterization.  

**51. Alienable Possession and the Possessive Verb kor** `alienable-possession-kor`  
Possession of alienable nouns via the transitive verb kor 'have/possess', adnominal kor-modification, and predicative vs. adnominal 'have'.  
Sections: kor as transitive possessive verb; adnominal kor-modification; Alienable nouns made possessable; the affiliative-vs-kor choice; Predicative possession ('have') and its negation via isam (cross-ref Part XIV); Subjectivity and pragmatics in the kor/affiliative alternation  
Sources: sato2008; nakagawa2024; bugaeva2022; refsing1986; tamura1997; huber2025  
Gap/novel: Integrates Huber (2025) on subjectivity to explain speaker choice between kor and the affiliative, and links predicative possession to the existential/negative isam system.  

**52. Possessed Forms of Relational and Locative Nouns** `affiliative-relational-locative-nouns`  
The affiliative morphology of spatial/relational nouns (or-o, ka-si, corpok-i, sam-a, tum-…), the obligatorily-possessed locative-noun class, and its bridge to the local-case system.  
Sections: Spatial/relational nouns as obligatorily possessed (1st- vs. 2nd-class locative nouns); Affiliative shapes of or, ka, corpok, sam, etc.; Possessed relational noun + postposition layering (or ta, sam ta) — preview of Part VIII; Relational-noun possession with non-3rd persons  
Sources: sato2021; nakagawa2024; sato2008; bugaeva2022; refsing1986; tamura1997  
Gap/novel: Treats locative-noun possession as a distinct affiliative class (drawing on Sato 2021 on or), separating its possessive morphology here from its adpositional syntax in Part VIII.  

**53. External Possession and Possessor Raising** `external-possession-possessor-raising`  
Constructions in which the possessor of an (inalienable) noun is realized as a core clausal argument (en=…sik 'my eye'), and their relation to possessor-stranding noun incorporation.  
Sections: Possessor-raising with body-part objects (object affix indexes the possessor); External-possession vs. internal (adnominal) possession diagnostics; Possessor stranding under subject incorporation (sik-pirka; cross-ref Part XI); Affectedness/animacy conditioning and discourse motivation  
Sources: bugaeva2022; sato2008; nakagawa2024; shibatani1990; kobayashi2025  
Gap/novel: Connects external possession to the possessor-stranding incorporation literature (Kobayashi 2025 on subject incorporation and affiliative-like e-/o-) and supplies external-vs-internal possession diagnostics absent from existing Ainu grammars.  

**54. Kinship and Honorific Possession** `kinship-honorific-possession`  
Idiosyncrasies of kinship-term possession (irregular/suppletive affiliatives, vocatives) and honorific possession that marks esteemed possessors via the indefinite/fourth person.  
Sections: Kinship terms as inalienables; irregular/suppletive affiliative forms; Vocative and address kin-forms; Honorific possession via the 4th/indefinite person (cross-ref Part IX); Register/genre distribution of honorific possession in oral literature  
Sources: nakagawa2024; sato2008; tamura1997; bugaeva2022; refsing1986; huber2025  
Gap/novel: Pulls kinship and honorific possession together as one sub-system and quantifies 4th-person honorific-possession usage by genre, linking it to the personal-affix and register chapters.  

## Part 8. Part VIII — Pronouns, Demonstratives, Postpositions, and Numerals

**55. Independent Personal Pronouns** `independent-personal-pronouns`  
The free/independent personal pronouns, their internal morphology, and their emphatic and contrastive use alongside the obligatory bound affixes.  
Sections: Inventory by person/number: kani (1sg), eani (2sg), cóka/cioka (1pl.excl), aoka(y) (1pl.incl/4th), ecioka (2pl), sinuma (3sg), and the -utar collective plurals; Internal morphology: person prefix + an/oka 'be' base; degrees of transparency and synchronic derivability across the paradigm; Functional load: free pronouns as emphatic/contrastive only; the obligatory bound affixes carry argument reference (pro-drop); Number, the inclusive/fourth-person free form, and dialect variation (Saru vs Sakhalin sinuma/3rd-person forms)  
Sources: tamura1971; tamura1972; nakagawa2024; sato2008; refsing1986; bugaeva2022; tamura1996; shibatani1990  
Gap/novel: Quantifies free-pronoun vs zero-anaphor choice in corpus and maps the morphological transparency of each free pronoun against its bound-affix source cell.  

**56. Reflexive and Emphatic Pronouns** `reflexive-and-emphatic-pronouns`  
Reflexive and emphatic 'self' nominals used as NP arguments, distinct from the verbal reflexive prefix treated under voice.  
Sections: The reflexive nominal and 'by oneself' expressions (yaykota and related yay-/si- based forms) as clausal arguments; Emphatic/intensifier '-self' uses and their interaction with the contrastive free pronouns; Distinction from the valency-changing verbal reflexive yay-/si- prefix (cross-ref Part XI), and the reflexive-possessive 'one's own'; Logophoric/narrator self-reference and dialect variation  
Sources: sato2007; kobayashi2010; nakagawa2024; sato2008; refsing1986; bugaeva2022  
Gap/novel: Separates the pronominal/emphatic 'self' from the homophonous valency prefix as a distinct NP category and gives a corpus inventory of reflexive-nominal forms.  

**57. Demonstratives, Anaphora, and Definiteness** `demonstratives-anaphora-definiteness`  
The exophoric demonstrative distance system, the anaphoric/recognitional 'aforementioned' demonstrative, and definiteness in an article-less language.  
Sections: Exophoric demonstratives: tan/taan 'this' (proximal) vs toan 'that' (distal); adnominal vs pronominal forms (ta/to + an); the two-way vs three-way distance question; Anaphoric/recognitional nea, ne 'the aforementioned' and reference tracking in discourse; Definiteness without articles: demonstratives as functional definite/specific markers; Demonstrative adverbs and the deictic field (tani, tane, te-/ta-/to- locatives); Tokachi and other dialect systems  
Sources: takahashi2011; nakagawa2024; sato2008; refsing1986; tamura1996; bugaeva2022  
Gap/novel: Places the system on the Diessel exophoric/anaphoric/recognitional typology and supplies a corpus anaphora-tracking study of definiteness without articles.  

**58. Interrogative Pro-forms and Content Questions** `interrogative-pro-forms`  
The interrogative word set and the syntax of content-question formation.  
Sections: Inventory: hunna 'who', hemanta/nep 'what', hempak 'how many', hunak/hunta 'where', makanak/neun 'how', hempara 'when', nekon 'what kind'; In-situ vs fronted wh; interaction with sentence-final interrogative particles ya/he (cross-ref Part XVIII); Interrogatives as the morphological base for indefinites and free-choice items (cross-ref next chapter); Case-marking and person/number on interrogatives; the nep/hemanta animacy doublet; dialect variants (Saru, Tokachi, Sakhalin)  
Sources: nakagawa2024; sato2008; refsing1986; tamura1996; bugaeva2022; takahashi2011  
Gap/novel: Content-question typology with corpus distribution of interrogative pro-forms and analysis of the nep/hemanta 'what' animacy split.  

**59. Indefinite and Negative-Polarity Pronouns** `indefinite-and-npi-pronouns`  
Indefinite and negative-polarity pronouns built on interrogative + ka and their licensing across affirmative and negative contexts.  
Sections: Formation: interrogative + ka (nen ka 'someone/anyone', nep ka 'something/anything', hunak ka 'anywhere'); Negative-polarity use under somo / isam negation 'no one, nothing' (cross-ref Part XIV); Specific vs non-specific existential and free-choice readings; Scalar/additive particles (ka 'also/even', patek 'only') interacting with the indefinite series  
Sources: nakagawa2024; sato2008; refsing1986; bugaeva2022; takahashi2016  
Gap/novel: Maps the Ainu indefinite series onto Haspelmath's functional space and analyses NPI licensing relative to the negation system.  

**60. Relational and Spatial (Locative) Nouns** `relational-and-spatial-nouns`  
The obligatorily possessed relational/spatial noun system that forms the core of local-spatial expression.  
Sections: Inventory and semantics: or 'place', ka/kasi 'top/surface', corpok(i) 'under', sam 'side', tum 'midst', etok 'ahead', os 'behind', kotor; Obligatory possession and affiliative forms (oro, kasi); Nakagawa's first-class vs second-class locative-noun split; Noun-vs-adposition status and the relational-noun + postposition layering (or ta, sam ta) as a bridge to case; The pivotal, semantically bleached status of or 'place' and its drift toward a general locative (Sato 2021)  
Sources: sato2021; nakagawa2024; sato2008; refsing1986; bugaeva2022; tamura1996  
Gap/novel: Relational-noun typology with corpus frequency per spatial noun and a focused treatment of or as an emergent general locative case-marker.  

**61. Postpositions, Local Case, and Motion-Event Encoding** `postpositions-local-case-and-motion-events`  
Postpositions proper, the local-case relations they encode, and the encoding of motion events (goal, source, path).  
Sections: Postposition inventory: ta 'at/in', un 'to/toward', wa 'from', peka 'along/through', pakno 'up to/until', orun, kotor; Postposition vs case-clitic vs relational noun; the constituency of the layered or ta / X un construction; Goal/source/location and the directional system (allative un, ablative wa); temporal extensions of local postpositions; Motion-event encoding and path: satellite- vs verb-framed typology (Talmy) and path verbs combined with directionals  
Sources: nakagawa2024; sato2008; refsing1986; sato2021; bugaeva2022; tamura1996  
Gap/novel: Applies local-case and Talmian motion-event typology to Ainu, resolves the constituency of or ta, and maps spatial semantics from corpus.  

**62. Comitative and Instrumental Relations** `comitative-and-instrumental`  
Comitative and instrumental marking via tura and ani/ari, on the boundary between postposition and applicative.  
Sections: Comitative tura '(together) with' across the verb / postposition / applicative gradience, and its coordinating 'and' use; Instrumental and means ani ~ ari 'with, by means of'; manner extensions; Relation to the ko- applicative and to comitative/instrument incorporation (cross-ref Part XI); Dialect variants and the postposition↔applicative continuum  
Sources: bugaeva2006; kobayashi2020; nakagawa2024; sato2008; refsing1986; bugaeva2022  
Gap/novel: Situates Ainu comitative/instrumental syncretism on the postposition-to-applicative continuum with corpus support.  

**63. The Vigesimal Numeral System** `vigesimal-numeral-system`  
The base-20 cardinal numeral system, its subtractive/additive arithmetic morphosyntax, and its diachrony.  
Sections: Cardinals 1–10 (sine, tu, re, ine, asikne, iwan, arwan, tupesan, sinepesan, wan) and the competing 'one' forms (sine/sinep) (Kirikae); The vigesimal core: hotne '20', its multiples (tu hotne '40'), and tens formed by subtractive 'e-' counting (wan e tu hotne '30'); Downward (subtractive) vs upward (additive) counting and the historical shift away from upper-base reckoning (Ochiai); Large numbers, decimal layering and Japanese contact, and the Sakhalin contrast (Murasaki, Sakaguchi)  
Sources: ochiai2021; ochiai2023; kirikae2006; murasaki2009; sakaguchi2022; nakagawa2024; sato2008; refsing1986; bugaeva2022  
Gap/novel: Numeral-system typology (Comrie) plus reconstruction of the vigesimal structure and the downward→upward reanalysis, with areal/contact effects.  

**64. Numeral Classifiers, Ordinals, and Quantifier Syntax** `numeral-classifiers-ordinals-and-quantifier-syntax`  
Numeral classifiers, derived numeral categories, and the syntax of quantification and quantifier float.  
Sections: Classifiers: -p/-pe for things (sinep, tup) vs -n/-iw for persons (sinen, tun, ren) and their selection; Derived numerals: ordinals, distributives, multiplicatives, and fractions; Numeral + classifier syntax, quantifier position and float, and interaction with nominal -utar and verbal number (cross-ref Part VI/X); Universal/collective and approximative quantifiers (opitta/obitta 'all', usa 'various')  
Sources: nakagawa2024; sato2008; refsing1986; ochiai2021; sakaguchi2022; bugaeva2022; tamura1996  
Gap/novel: Classifier-system typology and a quantifier-float analysis that ties together the three loci of plurality (nominal -utar, verbal number, quantifiers).  

## Part 9. Part IX — The Personal-Affix System and Alignment

**65. Architecture of the Personal-Affix System: The Four Persons and the S/A/O Paradigms** `person-marking-architecture`  
The master chapter laying out the whole personal-affix system — the four 'persons', the subjective (A/S) vs objective (O) sub-paradigms, prefix vs suffix exponents, and the terminological wars.  
Sections: The four-person inventory (1, 2, 3=zero, indefinite/4th) and the prefix-clitic vs suffix split; The master paradigm table: subjective (A/S) cells vs objective (O) cells, set out cell by cell; Prefix (ku=, e=, a=, ci=, eci=, en=, un=, i=) vs suffix (=an, =as) exponence and the clitic-vs-affix question; Terminology and labeling debates: 'indefinite' vs 'fourth person' vs '1pl.inclusive'; subjective/objective vs nominative/accusative naming; Pro-drop, zero third person, and free pronouns as emphatic doublets (cross-ref Part VIII)  
Sources: tamura1971; tamura1972; tamura1996; refsing1986; shibatani1990; sato2008; bugaeva2022; nakagawa2024; kindaichi_chiri1936  
Gap/novel: Presents the entire paradigm as a single typologically-labelled table reconciling Tamura's, Refsing's, Sato's, and Bugaeva's competing cell-labels, with corpus token-frequencies per cell as an organizing spine.  

**66. First- and Second-Person Singular Affixes (ku=/en=, e=/e=)** `first-second-person-singular-affixes`  
The SAP-singular core: 1sg subjective ku= vs objective en=, and 2sg e= (syncretic across A/S/O), with their morphophonology and distribution.  
Sections: 1sg ku= (A/S) vs en= (O): the basic split-intransitive exponent pair; 2sg e= and its A/S/O syncretism (the absence of a distinct 2sg object form); Junctural sandhi: ku= before vowels/consonants, en= assimilation (cross-ref Part V); Free-pronoun reinforcement (kani, eani) and contrastive/emphatic use; Corpus frequency of 1sg/2sg cells across conversational vs narrative genres  
Sources: tamura1971; tamura1972; sato2008; refsing1986; nakagawa2024; bugaeva2022  
Gap/novel: Quantifies the en= vs ku= patientive/agentive split on a verb-by-verb basis from corpus, testing the Split-S classification against actual token distributions.  

**67. First-Person Plural and the Clusivity Question (ci=/=as, un=)** `first-person-plural-and-clusivity`  
The exclusive 1pl set — subjective ci=/=as and objective un= — and the contested inclusive/exclusive opposition with the indefinite person.  
Sections: Exclusive 1pl: subjective ci= (A) vs suffix =as (S), and whether these are one morpheme; Objective un= (1pl.O) and its overlap with the indefinite object; The clusivity debate: is the indefinite =an/a= the genuine 1pl.inclusive, making a two-cell first-person-plural system?; Dialect variation in the exclusive set (Saru, Chitose, Tokachi) and Sakhalin contrast; Number resolution: 1pl as plural-of-speaker vs associative plural  
Sources: takahashi2015; tamura1972; sato2008; nakagawa2024; bugaeva2022; refsing1986; sakaguchi2024  
Gap/novel: Takahashi's Tokachi inclusive/1st-person findings are integrated with Saru and Sakhalin data to give the first cross-dialectal statement of the clusivity opposition in an English grammar.  

**68. The eci= Portmanteau (1A→2O) and Second-Person Plural Syncretism** `eci-portmanteau-and-second-plural`  
The cumulative eci= exponent encoding a 1sg subject acting on a 2nd-person object, and its syncretism with the 2pl subject/object marker eci=.  
Sections: eci= as cumulative SAP-on-SAP exponence (1sg.A → 2.O); eci= as 2pl subject and 2pl object: the syncretism pattern; Disambiguation strategies and the directionality/inverse-like reading; Analyses: portmanteau-vs-decomposition (e=+ci=) and the typology of SAP-cumulation; Frequency and genre distribution of the ambiguous eci= cell  
Sources: tamura1972; sato2008; bugaeva2022; refsing1986; nakagawa2024; shibatani1990  
Gap/novel: Frames the eci= syncretism within SAP-portmanteau and inverse-marking typology, linking it forward to the Nom-Neutral-Inverse alignment analysis (Dal Corso 2025) of the broader system.  

**69. Object Indexing in the Monotransitive Clause (en=, i=, un=, e=)** `object-indexing-monotransitive`  
How the single object of a transitive verb is indexed by the objective affix set, and the asymmetries with subject indexing.  
Sections: The objective (O) affix set cell by cell: en= 1sg, e= 2sg, un= 1pl, eci= 2pl, i= indefinite, 3=zero; Object indexing vs subject indexing asymmetries (which persons mark O distinctly); Zero third-person object and the licensing of object pro-drop; Position of object affixes relative to subject affixes (preview of the template); The i= indefinite/generic object and its relation to the detransitivizing i- (cross-ref Part XI)  
Sources: tamura1971; sato2008; bugaeva2022; refsing1986; nakagawa2024  
Gap/novel: Draws a sharp boundary between object-indexing i= (Part IX) and the antipassive/incorporating prefix i- (Part XI), a distinction often blurred in the descriptive literature.  

**70. Ditransitive and Double-Object Indexing** `ditransitive-indexing`  
How three-place verbs index their two non-subject arguments, and whether the system is secundative or indirective.  
Sections: Three-place verbs (kore 'give', epakasnu 'teach') and which object the affix indexes; Secundative vs indirective object alignment in the indexing slot; Co-occurrence of two object affixes and resolution when both are SAP; Applicative-derived ditransitives and their indexing (cross-ref Part XI); Corpus survey of three-place frames and their indexing patterns  
Sources: sato2023; sato2008; bugaeva2022; nakagawa2024; refsing1986  
Gap/novel: Sato 2023's valency/ditransitive findings are recast as an indexing-alignment question, quantifying recipient-vs-theme indexing preferences from corpus and placing Ainu on the secundative/indirective map.  

**71. The Indefinite / Fourth Person: Forms and Referential Uses** `indefinite-fourth-person-paradigm`  
The morphology of the indefinite person (subjective a=/an=/=an, objective i=) and its referential range — generic 'one', inclusive 'we', and definite fourth-person reference.  
Sections: The exponents: transitive subject a=~an=, intransitive subject =an, object i=, and their allomorphy; Referential uses: generic/impersonal 'one', 1pl.inclusive 'we', and definite 4th-person reference to a discourse participant; The hortative/optative 'let's' use of the indefinite subject (cross-ref Part XII); The labeling controversy: 'indefinite' vs 'fourth person' vs 'inclusive' as the basic value; Sakhalin (Enciw) cognate forms and the diachrony of the a=/an= split  
Sources: tamura1972; takahashi2015; sato2008; bugaeva2022; nakagawa2024; refsing1986; sakaguchi2024; murasaki2025  
Gap/novel: Treats the multifunctional indefinite person as a single polysemous category whose readings are corpus-disambiguated, rather than splitting it into homophonous morphemes; integrates Sakhalin reflexes.  

**72. The Indefinite Subject as Agent-Defocusing 'Passive' and Impersonal** `indefinite-person-impersonal-passive`  
The a=/an= indefinite-subject construction used to background or suppress the agent, and the debate over whether this constitutes a true passive.  
Sections: Agent-defocusing function: a= transitive subject with a topical patient ('it was V-ed'); Impersonal/generic-agent readings and their pragmatics; The passive question: indefinite-agent construction vs a dedicated passive voice (Sato 1995); Comparison with the i- antipassive/detransitive and with reflexive/middle voices (cross-ref Part XI); Genre distribution of the agent-defocusing use (narrative vs conversation)  
Sources: sato1995; bugaeva2022; sato2008; nakagawa2024; shibatani1990; refsing1986  
Gap/novel: Adjudicates the long-running 'does Ainu have a passive?' debate by locating the a= construction on the agent-defocusing/voice continuum with quantified corpus evidence.  

**73. Honorific and Respectful Use of the Fourth Person** `fourth-person-honorific`  
The use of the indefinite/fourth person to refer respectfully to esteemed humans, kamuy, and elders, as a politeness register.  
Sections: Fourth person as honorific reference to a respected third party; Interaction with kinship, ritual, and divine reference (kamuy); Register and gender/age conditioning of the honorific use; Boundary with the logophoric-narrator use and with generic 'one'; Distribution across conversational politeness vs ritual/oral-literature registers  
Sources: nakagawa2024; sato2008; bugaeva2022; tamura1996; refsing1986; kindaichi_chiri1936  
Gap/novel: Pulls the honorific function out as a discrete politeness phenomenon and connects it to the register/honorific system of Part XIX, with corpus exemplification by genre.  

**74. Logophoric and First-Person-Narrator Use in Oral Literature (the Hero's 'I')** `fourth-person-logophoric-narration`  
The fourth person as the self-reference device of the first-person narrator in yukar and prose tales, and whether this is logophoricity proper.  
Sections: The first-person-narration (一人称体) convention: the hero/protagonist as fourth-person 'I'; Logophoric reference in reported discourse and embedded speech; Is it logophoricity? Nikitina & Bugaeva's 'logophoric speech is not indirect' analysis; Genre signatures: yukar, kamuy yukar, uwepeker (cross-ref Part XIX); Diachrony and the relation between the narrator-'I' and the honorific fourth person  
Sources: bugaeva2008; nikitina_bugaeva2021; sato2004; kindaichi1933; nakagawa2024; bugaeva2022  
Gap/novel: Synthesizes Bugaeva's logophoricity work with Sato's 一人称体 study to give a unified account of the narrator-'I' as a logophoric strategy, with quantified genre distribution.  

**75. The Personal-Affix Template: Position Classes and Affix Ordering** `personal-affix-template-and-ordering`  
The ordering of subject and object personal affixes relative to each other, to valency prefixes, and to the verb stem — the personal-affix portion of the verb template.  
Sections: Linear order: subject affix > object affix > valency prefixes > stem (and exceptions); Interaction of personal affixes with applicative/reflexive/antipassive prefixes (cross-ref Part XI); Prefix vs suffix exponence and the split position of =an/=as; Mismatches between morphological order and scope/argument structure; Position-class formalization and corpus-attested morpheme-order statistics  
Sources: nakagawa2009; sato2008; bugaeva2022; refsing1986; nakagawa2024; shibatani1990  
Gap/novel: Isolates the personal-affix ordering from the full verbal template (Part X), giving a position-class model tested against corpus morpheme sequences.  

**76. Person–Number Interactions and Plural Agreement** `person-number-interactions`  
How the personal affixes interact with number marking — the -pa plural, the =as suffix, and agreement resolution across A, S, and O.  
Sections: Plural -pa triggered by plural participants vs pluractional event number (cross-ref Part X); Which argument (A/S/O) controls -pa agreement and resolution when several are plural; The =as plural-subject suffix and its relation to ci=; Areal patterns of third-person and plural marking (Baek 2021) and Sakhalin number (Sakaguchi 2024); Corpus quantification of optional vs obligatory plural agreement  
Sources: baek2021; sakaguchi2024; sato2008; nakagawa2024; bugaeva2022; refsing1986  
Gap/novel: Disentangles the agreement (participant-number) role of -pa from its pluractional (event-number) role at the person-marking interface, with cross-ref to verbal number in Part X.  

**77. The Split-Intransitive (Active–Stative) Core** `alignment-split-intransitive`  
The foundational alignment fact: intransitive subjects split between the agentive (A-set) and patientive (O-set) exponents, and the Split-S vs Fluid-S question.  
Sections: Sa (ku=/e=…) vs So (en=/i=…) and the semantic basis (control/volitionality/affectedness); Split-S (lexically fixed) vs Fluid-S (semantically variable) verbs; Diagnostics and borderline verbs; reflexive/middle effects on S-class; Placement in the active-language sample (Donohue & Wichmann; Mithun); Corpus Split-S vs Fluid-S test: how many verbs allow both S-classes  
Sources: shibatani1990; bugaeva2022; sato2008; nakagawa2024; refsing1986; dalcorso2025  
Gap/novel: Provides the first quantified Split-S/Fluid-S inventory for Ainu, classifying each attested intransitive by its corpus S-marking rather than relying on illustrative lists.  

**78. Tripartite vs Nominative-Accusative: The 1sg and Indefinite Cells** `alignment-tripartite-vs-accusative`  
How the 1sg (ku=/en=) and indefinite (a=/=an/i=) persons display distinct A, S, and O exponents, and whether this is genuine tripartite alignment.  
Sections: The tripartite cells: distinct A vs S vs O forms in 1sg and the indefinite person; Nominative-accusative readings of the rest of the paradigm (2sg syncretism, zero 3); Person-conditioned alignment splits: which cells are tripartite, accusative, or neutral; Competing analyses (Shibatani vs Sato vs Bugaeva) of the mixed cell-by-cell picture; Corpus cell-frequencies as evidence for the basic vs derived alignment value  
Sources: shibatani1990; bugaeva2022; dalcorso2025; sato2008; refsing1986; nakagawa2024  
Gap/novel: Maps alignment type onto each paradigm cell and weights the analysis by corpus cell-frequency, showing which alignment pattern dominates in actual usage.  

**79. Hierarchical/Mixed Alignment, the Central Alignment Debate, and Ditransitive/Clause-Type Alignment** `alignment-hierarchical-and-the-debate`  
The system-wide alignment synthesis: hierarchical/inverse characterizations, the active-stative-vs-tripartite-vs-nom-acc controversy, and alignment in ditransitives and dependent clauses.  
Sections: The whole-paradigm picture: hierarchical/person-driven and Dal Corso's Nominative-Neutral-Inverse analysis (Sakhalin) vs Hokkaido; The central debate: active-stative vs tripartite vs nominative-accusative-with-patientive-class (Shibatani, Bugaeva, Sato); Ditransitive alignment (secundative vs indirective) revisited at system level; Alignment in nominalizations and dependent/relative clauses: any clause-type splits; Corpus cell-frequencies and the diachrony of the split; areal placement (Baek 2021)  
Sources: dalcorso2025; bugaeva2022; shibatani1990; sato2008; nakagawa2024; baek2021; refsing1986  
Gap/novel: Brings Dal Corso's 2025 Nominative-Neutral-Inverse Sakhalin analysis into direct dialogue with the Hokkaido active-stative/tripartite tradition, adjudicating the central typological debate with quantified cell-frequency data.  

## Part 10. Part X — The Verb: Structure, Transitivity, and Verbal Number

**80. The Verb Word and Its Position-Class Template** `verb-word-template`  
The internal architecture of the Ainu verb word as an ordered sequence of prefix, stem, and suffix position classes.  
Sections: Prefix zone: personal affixes, then valency prefixes (e-/ko-/o-, i-, yay-, si-, u-) and their relative order; Stem zone: roots, derived stems, incorporated material, and stem-internal structure; Suffix zone: plural -pa, causative -re/-e/-te, and derivational suffixes; affix-ordering constraints; Templatic (position-class) vs scope-based ordering; the degree of synthesis / polysynthesis index; Corpus morpheme-order statistics and edge cases (variable vs fixed slots)  
Sources: nakagawa2024; sato2008; bugaeva2022; refsing1986; shibatani1990; nakagawa2009; fukuda1956; tamura1997  
Gap/novel: A formalized position-class (slot) model of the verb word with corpus morpheme-order frequencies and an explicit measurement of Ainu's degree of synthesis; no existing grammar lays out the template as a quantified slot system. Valency prefixes are catalogued here only for their ordering — their function is treated in Part XI.  

**81. Light Verbs, Pro-Verbs, and the Auxiliary-Verb Construction** `light-and-pro-verbs`  
The 'do' pro-verbs ki/iki, the structural support uses of ne and an, and the general auxiliary-verb (complex-predicate) construction.  
Sections: The pro-verb ki 'do' and iki: anaphoric and periphrastic verbal support (somo ki, ne ... ki); ne and an as light/support verbs — their structural role (semantics cross-ref Part XV copula/existential); The auxiliary-verb construction: the V wa AUX schema and the complex-predicate template; Inventory of auxiliary verbs (isam, okere, kor, kore, anu, inkar, inu) as a structural class (semantics cross-ref Part XII); Juncture, cohesion, and constraints in complex predicates; corpus frequency  
Sources: nakagawa2024; sato2008; tamura1960; kishimoto2016; kishimoto2018; bugaeva2022; refsing1986; shibatani1990  
Gap/novel: A unified structural treatment of the auxiliary-verb construction as a complex predicate (drawing on Kishimoto 2016/2018), explicitly separating the pro-verb ki from the copula ne and existential an, with TAM/modal content deferred to Parts XII and XV.  

**82. Denominal and Deverbal Verb Derivation** `denominal-deverbal-verb-derivation`  
Non-valency processes that build verbs from nouns and from other verbs, including verb-verb compounding and noun/verb conversion.  
Sections: Denominal verbalization (noun → verb) patterns and their productivity; Deverbal, non-valency stem-forming derivation (verb → verb); Verb-verb compounding and lexicalized compound verbs; Noun↔verb conversion and the word/phrase boundary (Sato 2020); Productivity statistics and lexicalization clines  
Sources: nakagawa2024; sato2008; sato2020; fukuda1956; nakagawa2009; refsing1986; bugaeva2022; tamura1997  
Gap/novel: Productivity quantification plus integration of Sato's (2020) category-conversion account (word vs phrase, verb vs noun); valency-changing derivation (causative, applicative, reflexive) is held over to Part XI, leaving this chapter for genuine word-formation.  

**83. The Adverbializer -no and Adverb Formation from Verbs** `adverbializer-no`  
The suffix -no deriving manner/degree adverbs from stative (property) verbs, set against related adverb-forming strategies.  
Sections: -no on stative/property verbs → manner adverbs (pirka 'be good' → pirka-no 'well'); Semantic range: manner, degree, and resultative/depictive readings; -no vs -nu and competing adverbializing strategies (Tamura 1974); Tie-in to the 'no adjective class' thesis (property words as stative verbs; cross-ref Part VI); Distribution, restrictions, and corpus frequency  
Sources: tamura1974; nakagawa2024; sato2008; refsing1986; bugaeva2022; tamura1996  
Gap/novel: Brings Tamura's (1974) -no/-nu analysis into an English reference frame with corpus support, and links the adverbializer directly to the analysis of property words as stative verbs.  

**84. Transitivity and Valence Classes** `transitivity-and-valence-classes`  
Lexical classification of verbs by valence: intransitive (agentive vs patientive S), transitive, ditransitive, and the complete/incomplete distinction.  
Sections: Intransitive verbs and the agentive-S vs patientive-S split (alignment cross-ref Part IX); Transitive (two-place) verbs and their argument frames; Ditransitive / three-place verbs and secundative vs indirective object marking (Sato 2023); 'Complete' vs 'incomplete' verbs (the ne/an-type and kamuy ne class; Chiri); A corpus-based valence-frame inventory and its distribution  
Sources: kobayashi2015; sato2023; yoshikawa2024; nakagawa2024; sato2008; chiri1942; bugaeva2022; refsing1986; shibatani1990  
Gap/novel: A corpus valence-frame inventory with explicit treatment of ditransitive object-marking type (secundative vs indirective); the alignment basis of the S-split is cross-referenced to Part IX rather than re-argued here.  

**85. Ambitransitive (Labile) Verbs and Transitivity Pairs** `ambitransitivity-and-transitivity-pairs`  
Verbs usable both intransitively and transitively, and the system of morphologically related transitive/intransitive (有対) verb pairs.  
Sections: S=A (agentive) lability vs S=O (patientive) lability; Morphological transitivity pairs (有対動詞) and their derivational marking; Reduplication and stem alternation in paired verbs (Kobayashi 2017); Lability vs derived voice (causative/anticausative cross-ref Part XI); Dialect microvariation (Mukawa) and corpus rates of each pattern  
Sources: kobayashi2014; kobayashi2017; kobayashi2015; bugaeva2025; yoshikawa2024; sato2008; nakagawa2024; bugaeva2022  
Gap/novel: Quantifies labile vs derived transitivity pairs and maps the paired-verb derivational morphology; Bugaeva's (2025) anticausative diachrony is cited for the pair relationships while the synchronic voice derivations are deferred to Part XI.  

**86. Verbal Number I — Suppletive Singular/Plural Stems** `suppletive-verbal-number`  
The closed set of verbs with distinct singular and plural stems whose choice is controlled by the number of a core argument.  
Sections: The suppletive pairs: an/oka, arpa/paye, ek/arki, as/roski, a/rok, ray/ronnu, rayke; Which argument controls number (S of intransitives, O of transitives); Participant number vs event number; interaction with the suffix -pa; Typological placement (Veselinova, Corbett verbal-number theory); Corpus inventory of the pairs and Hokkaido dialect variation  
Sources: bugaeva2022; nakagawa2024; sato2008; shibatani1990; refsing1986; tamura1996; baek2021  
Gap/novel: A complete corpus inventory of suppletive pairs with explicit statement of their controller argument (S vs O), placed on the verbal-number/suppletion typology map (Veselinova, Corbett) rather than left as a lexical list.  

**87. Verbal Number II — The Pluractional -pa and Distributive Number** `pa-pluractional`  
The plural suffix -pa marking participant/event plurality, with distributive and iterative verbal-number distinctions and the agreement-vs-aspect debate.  
Sections: -pa: argument-number plurality vs pluractional (event/iterative) semantics; Double marking: -pa stacking with suppletive plural stems; Distributive readings and reduplication as a plurality strategy (Kobayashi 2017); -pa as plural agreement vs pluractional aspect (the locus-of-plurality debate); Division of labor between verbal -pa and nominal -utar (cross-ref Part VI); corpus frequency  
Sources: nakagawa2024; sato2008; bugaeva2022; refsing1986; kobayashi2017; sakaguchi2020; baek2021; shibatani1990  
Gap/novel: Adjudicates the -pa-as-agreement vs -pa-as-pluractional question with corpus data, and treats the verbal -pa / nominal -utar division of labor plus double-marking with suppletive stems — interactions usually left unstated.  

## Part 11. Part XI — Valency, Voice, and Noun Incorporation

**88. The Morphological Causative -re / -e / -te** `causative-morphological-re-e-te`  
The productive transitivizing causative suffix and its stem-conditioned allomorphy -re/-e/-te, encoding direct/manipulative causation.  
Sections: Form and allomorphy: -re, -e, -te conditioned by stem-final shape; Transitivizing/causativizing function on intransitive bases; Semantic value: direct/contact/manipulative causation and any residue across allomorphs; Productive vs lexicalized causatives  
Sources: sato2008; nakagawa2024; tamura1996; refsing1986; shibatani1990; bugaeva2014; bugaeva2022; takahashi2017  
Gap/novel: Quantify the -re/-e/-te allomorph distribution from the corpus and place the suffix on the compactness/direct-causation scale (Dixon; Shibatani & Pardeshi), which print grammars state only impressionistically.  

**89. The Transitivizer -ka and Lexical Valency Pairs** `transitivizer-ka-valency-pairs`  
The transitivizer/causative -ka on stative bases, and the system of labile and suppletive causative–inchoative verb pairs.  
Sections: -ka as transitivizer on stative/property verbs; causative vs separate-transitivizer status; Labile (ambitransitive) and suppletive causative–inchoative pairs; Reduplication and paired-verb derivation; -ka vs -re division of labor  
Sources: sato2008; nakagawa2024; kobayashi2014; kobayashi2017; bugaeva2025; shibatani1990; bugaeva2022  
Gap/novel: Compile a corpus inventory of paired (有対) verbs and resolve whether -ka is a causative or an independent transitivizer; integrate Kobayashi's Mukawa paired-verb data with the anticausative-diachrony account.  

**90. Causee Marking, Ditransitive and Double Causatives** `causee-marking-ditransitive-double-causative`  
How causativization of transitives builds three-place frames, the marking/indexing of the causee, and double causatives.  
Sections: Causative of transitives → three-place frames; causee case and indexing; Object-vs-causee indexing competition and the ditransitive alignment of causatives; Double causatives (-re-re) and causative stacking; Lexical vs morphological causation contrast  
Sources: sato2008; sato2023; nakagawa2024; bugaeva2014; kobayashi2015; refsing1986; bugaeva2022  
Gap/novel: Place Ainu causee marking within causative-alignment typology and connect it to the ditransitive-indexing facts; corpus check on the rarity/productivity of double causatives.  

**91. The Permissive/Sociative Causative -yar** `permissive-sociative-causative-yar`  
The indirect/permissive causative -yar 'let/have someone do' and the directive-vs-sociative split it forms with -re/-e/-te.  
Sections: Form and 'let/have someone do' (indirect/permissive) semantics; Sociative vs directive split: -re/-e/-te vs -yar; Productivity and register/genre distribution; Synthesis: Ainu causatives on the direct/indirect, manipulative/directive map  
Sources: sato2008; nakagawa2024; bugaeva2014; tamura1996; shibatani1990; bugaeva2022  
Gap/novel: Position -yar on the van der Auwera/Dixon causative-semantics space and quantify the directness contrast with the morphological causative across genres.  

**92. The Applicative System: Overview and the Preverb-vs-Applicative Debate** `applicative-system-overview`  
Bugaeva's reanalysis of e-/ko-/o- as applicatives promoting obliques to object, with the diagnostics and the terminological controversy.  
Sections: e-/ko-/o- as object-promoting applicatives (Bugaeva's reanalysis); Promotion diagnostics: object indexing, valency increase, relativization access; Terminological history: 'preverb/locative prefix/derivation' (Tamura, Refsing) vs 'applicative'; Productivity and lexicalization across the three prefixes  
Sources: bugaeva2006; sato2008; nakagawa2024; nakagawa2009; tamura1996; refsing1986; shibatani1990; bugaeva2022  
Gap/novel: Reconcile the prefix-vs-applicative framings explicitly, place Ainu on Peterson's applicative-typology map, and give a corpus productivity baseline against which the three prefix chapters are read.  

**93. The e- Applicative** `applicative-e`  
The e- applicative promoting content/theme, instrument, reason and 'about/concerning' obliques to object.  
Sections: Semantics: content/theme, instrument, reason, 'about/concerning'; The argument licensed and its object indexing; Lexicalized e- verbs vs productive applicative use; e- at the ditransitive and relativization interface  
Sources: bugaeva2006; sato2008; nakagawa2024; tamura1996; refsing1986; bugaeva2022  
Gap/novel: Map e- semantic roles from the corpus and locate it within instrument/content applicative typology, separating productive from lexicalized e- statistically.  

**94. The ko- Applicative** `applicative-ko`  
The ko- applicative promoting goal/recipient, comitative and adversative ('to/with/against') obliques to object.  
Sections: Semantics: goal/recipient, comitative, 'to/with/against', adversative; Object indexing and valency increase; ko- with verbs of speech, giving and fighting; lexicalized ko-; The comitative/applicative boundary (tura vs ko-)  
Sources: bugaeva2006; sato2008; nakagawa2024; tamura1996; refsing1986; bugaeva2022  
Gap/novel: Corpus-quantify the recipient/comitative/adversative split of ko- and clarify its boundary with the comitative verb tura.  

**95. The o- Applicative** `applicative-o`  
The o- applicative promoting locative/source/goal ('at, from, into') obliques, the spatial applicative, and allied spatial valency operators.  
Sections: Semantics: locative/source/goal 'at, from, into'; the spatial applicative; Object indexing and its relation to the locative noun o(r)-; Allied spatial valency operators (-ta, otke, kamu); Lexicalized o- verbs vs productive use  
Sources: bugaeva2006; sato2008; nakagawa2024; kobayashi2020; kobayashi2024; refsing1986; bugaeva2022  
Gap/novel: Integrate Kobayashi's space-argument and -ta applicative studies, situating o- in spatial-applicative typology and linking it to the relational-noun system.  

**96. Applicative Stacking, Ordering, and the Feeding of Relativization** `applicative-stacking-relativization-feeding`  
How multiple applicatives stack and order, and how applicative promotion extends the relativization accessibility hierarchy and feeds incorporation.  
Sections: Stacking (e-ko-, e-o-, …) and prefix ordering; Applicative + base-object interactions and double-object outputs; Applicatives extending the Keenan–Comrie hierarchy (oblique access); Applicatives feeding noun incorporation  
Sources: bugaeva2006; dalcorso2020; bugaeva2015; sato2008; nakagawa2024; bugaeva2022  
Gap/novel: Test the accessibility hierarchy on the corpus, showing obliques relativize only after e-/ko-/o- promotion, and quantify attested applicative-stacking combinations.  

**97. The Antipassive / Detransitive i-** `antipassive-detransitive-i`  
The prefix i- 'something/someone' absorbing the object and detransitivizing, with the antipassive-vs-incorporation debate and its origin.  
Sections: i- 'something/someone' absorbing the object → intransitive; Antipassive vs object-incorporation vs indefinite-object analyses; Relation to the object affix i= and to noun incorporation; Lexicalized i- verbs (ipe 'eat', etc.) and the diachronic origin of i-  
Sources: nam2021; sato2008; nakagawa2024; shibatani1990; bugaeva2022; refsing1986  
Gap/novel: Adjudicate the antipassive/incorporation analysis with corpus diagnostics and integrate Nam's diachronic origin account, placing i- in antipassive typology.  

**98. The Reflexive yay-** `reflexive-yay`  
The reflexive prefix yay- 'self', its A/O coreference and detransitivization, and its autobenefactive/emotive extensions.  
Sections: yay- 'self': coreference of A and O, intransitivizing; Autobenefactive/emotive and 'do to oneself' extensions; yay- with causatives (yay-…-re) and applicatives; Lexicalization (yaynu 'think', etc.)  
Sources: sato2007; kobayashi2010; sato2008; nakagawa2024; bugaeva2022; shibatani1990  
Gap/novel: Situate yay- in a unified reflexive-voice paradigm and quantify its productivity vs lexicalization, separating it cleanly from si- (next chapter).  

**99. The Reflexive-Possessive si- and the yay-/si- Division** `reflexive-possessive-si`  
The prefix si- 'oneself / one's own / by itself' and its division of labor with yay- in argument identification.  
Sections: si- 'oneself / one's own / by itself': reflexive-possessive and anticausative-like uses; yay- vs si- division of labor (argument-identification function); si- feeding subject incorporation (si- + e-/o-); Dialect variation in the yay-/si- split  
Sources: sato2007; kobayashi2010; kobayashi2025; sato2008; nakagawa2024; bugaeva2022  
Gap/novel: Give a formal argument-identification analysis of the yay-/si- split (after Kobayashi 2010) and corpus-quantify the division across dialects, linking si- to possessor-stranding incorporation.  

**100. The Reciprocal u-** `reciprocal-u`  
The reciprocal prefix u- 'each other/mutually', its collective/associative readings, and its interaction with plurality.  
Sections: u- 'each other / mutually': reciprocal and collective/associative; Reciprocal with plural stems and the pluractional -pa; u- in lexicalized nominals (uko-, u-…) and compounds; Reciprocal vs 'together/mutual' associative readings  
Sources: sato2008; nakagawa2024; bugaeva2022; tamura1996; shibatani1990  
Gap/novel: Place u- in reciprocal/associative typology (Nedjalkov) and survey u- + applicative/incorporation combinations from the corpus.  

**101. Middle, Anticausative, and the (Non-)Passive Question** `middle-anticausative-passive`  
Middle/spontaneous and anticausative uses of si-/yay- and detransitives, and whether the a=/an= indefinite-agent construction constitutes a passive.  
Sections: Middle/spontaneous and anticausative uses of si-/yay- and detransitives; Anticausative diachrony and the inchoative–causative interface; The a=/an= indefinite-agent construction as a functional passive; Does Ainu have a true passive? Voice-system synthesis  
Sources: bugaeva2025; sato1995; sato2008; nakagawa2024; shibatani1990; bugaeva2022  
Gap/novel: Unify reflexive/reciprocal/antipassive/middle/anticausative as one voice paradigm and resolve the passive debate against corpus distribution, drawing on Bugaeva's anticausative diachrony.  

**102. Object (Patient) Noun Incorporation** `noun-incorporation-object`  
Productive object incorporation (N+V → intransitive), its diagnostics, and its interaction with the antipassive and valency prefixes.  
Sections: Productive N+V → intransitive object incorporation; Diagnostics: productivity, separability, stranding, doubling; Interaction with the antipassive i- and with valency prefixes; Semantic effects: institutionalized activity, object backgrounding  
Sources: shibatani1988; sato2016; yoshida2013; sato2008; nakagawa2024; bugaeva2022; shibatani1990  
Gap/novel: Apply modern NI diagnostics to the corpus, quantify productivity, and place object NI within Mithun's Type I/II against Sato's classification.  

**103. Subject Incorporation and Possessor-Stranding** `noun-incorporation-subject-possessor-stranding`  
Subject incorporation with unaccusative verbs (sik-pirka 'eyes-be.good') and the possessor-stranding pattern — the classic Type IV test case.  
Sections: Subject incorporation with unaccusative verbs (sik-pirka 'eyes-be.good'); Possessor-stranding: external possessor retained as argument; Mithun's Type IV; the si-/affiliative-prefix (e-/o-) derivation; Interaction with possession and the relational-noun system  
Sources: kobayashi2025; sato2016; shibatani1988; nakagawa2024; sato2008; bugaeva2022  
Gap/novel: Formalize possessor-stranding NI as Mithun Type IV and integrate Kobayashi's (2025) analysis of subject incorporation via e-/o- affiliative-prefix derivation.  

**104. Oblique Incorporation and the Syntactic-vs-Lexicalist Debate** `noun-incorporation-oblique-polysynthesis-debate`  
Adverbial/oblique incorporation, its feeding of relativization, and the central syntactic-NI vs lexical-compounding controversy.  
Sections: Adverbial/oblique (manner, instrument, location) incorporation; Incorporation feeding relativization and interacting with applicatives; Syntactic NI (Baker/Shibatani) vs lexical compounding (Sato/Tamura); Polysynthesis index and cross-linguistic placement (Iroquoian, Chukotko-Kamchatkan)  
Sources: shibatani1988; sato2016; dalcorso2020; barrie_mathieu2021; kirikae1984; nakagawa2024; sato2008; bugaeva2022  
Gap/novel: Re-adjudicate the syntactic-vs-lexicalist fault line with corpus-based productivity and separability data and a DM/lexicalist verdict, situating Ainu NI cross-linguistically.  

## Part 12. Part XII — Tense, Aspect, Mood, and Modality

**105. Tenselessness and the Time-Reference System** `tenselessness-and-time-reference`  
Hokkaido Ainu lacks a grammatical tense category; temporal location is inferred from aspect, discourse anchoring, and temporal adverbs.  
Sections: The absence of a tense category and the unmarked 'narrative now'; Relative (discourse-anchored) vs absolute time reference; Temporal adverbs and time-point expressions as the overt locators; How aspect plus context fixes past/present/future interpretation; Typological placement among tenseless languages  
Sources: sato2008; nakagawa2024; bugaeva2022; machangcheng2024; refsing1986; tamura1997  
Gap/novel: Provides explicit formal time-reference modeling for a tenseless language and corpus quantification of how aspect+adverb combinations fix temporal interpretation — not done in prior grammars; integrates Ma Changcheng's time-point adverb study.  

**106. The Existential-Aspect System: an / oka Auxiliaries** `existential-aspect-an-oka`  
Overview of the existential verbs an (SG) and oka (PL) recruited as aspectual auxiliaries, unifying kor an and wa an as one 'existential aspect' category.  
Sections: an/oka as existential verbs vs aspectual auxiliaries (cross-ref Part XV); Singular/plural suppletion and subject-number agreement in the auxiliary; The 'existential aspect' (Yoshikawa) as a unifying category over kor an and wa an; Grammaticalization cline: existence > stative/durative aspect  
Sources: sato2006; yoshikawa2020; yoshikawa2019; nakagawa2024; sato2008; bugaeva2022  
Gap/novel: Synthesizes Yoshikawa's 存在型アスペクト dissertation as a single typological category, with the grammaticalization path made explicit and genre-based corpus distribution; serves as the genus chapter for the two species (kor an, wa an).  

**107. The Progressive and Continuative kor an** `progressive-kor-an`  
V + kor an / kor oka encodes ongoing, progressive, and 'keep V-ing' continuative situations.  
Sections: Form: V + kor (converb) + an/oka; subject number agreement; Progressive vs continuative/durative readings; Aktionsart interactions and stative-verb restrictions; Dialect variant kane an (Shizunai) and the kor/kane alternation; Resolving the verb-vs-auxiliary status of an in the construction  
Sources: sato2006; yoshikawa2019; yoshikawa2022; yoshikawa2021; nakagawa2024; sato2008; tamura1960  
Gap/novel: Quantifies the progressive/continuative semantics and the kor/kane dialect alternation across Saru, Chitose, and Shizunai; settles the auxiliary status of an as flagged in the part scope.  

**108. The Resultative-Perfect wa an / wa oka** `resultative-perfect-wa-an`  
V + wa an / wa oka expresses a resultant state and perfect of result.  
Sections: Form: converb wa + existential auxiliary; number marking with wa oka; Resultative vs perfect-of-result vs stative readings; Telicity/aktionsart conditioning and the contrast with kor an; Layering and stacking with other aspectual forms; Evidential extensions of the perfect (boundary with Part XIII)  
Sources: sato2006; yoshikawa2019; yoshikawa2020; yoshikawa2021; nakagawa2024; sato2008; bugaeva2022  
Gap/novel: Sharpens the resultative-vs-perfect distinction with corpus aktionsart tests and integrates Yoshikawa's perfect-evidentiality findings while keeping the evidential payoff cross-referenced to Part XIII.  

**109. The Perfective/Anterior Particle a (a, a…a, aan)** `perfective-anterior-a`  
Postverbal a marks completion and anteriority ('already, have V-ed'), with reduplicated a…a and the anterior-stative aan.  
Sections: a as perfective/anterior marker; the a…a intensive/iterative pattern; aan (a + an) anterior-stative and its evidential drift (cross-ref Part XIII); Taxis: relative anteriority in clause chains; Combination with continuative forms (continuative + perfect); Categorial status: aspect particle vs verb vs the homophonous indefinite a=  
Sources: machangcheng2021; machangcheng2023; yoshikawa2018; yoshikawa2020; sato2008; nakagawa2024; tamura1960  
Gap/novel: Disentangles perfective a from the homophonous indefinite/4th-person a=, frames a as an anterior/taxis marker via Ma Changcheng's comparison with Chinese 過, and pins its verb-vs-particle status — a long-standing source dispute.  

**110. The 'Appearance' Continuative: siran, siri…, and kane an** `continuative-siri-siran-kane-an`  
siri/siran-based forms express durative, ongoing situations framed as observable appearance.  
Sections: siran 'be in such a state/appearance' as a durative continuative; siri … constructions and the visual/appearance continuative; kane an (Shizunai/Saru) continuative with stative verbs; Overlap with and separation from the evidential siri (the aspect/evidential boundary)  
Sources: yoshikawa2021; nakagawa2024; sato2008; bugaeva2022; dalcorso2018  
Gap/novel: Separates the aspectual (durative) siri/siran from the evidential siri of Part XIII and treats kane an as a distinct continuative form, a boundary not cleanly drawn in earlier descriptions.  

**111. Phasal, Iterative, and Habitual Aspect** `phasal-iterative-habitual-aspect`  
Inceptive and terminative phasal aspect via auxiliary verbs, plus iterative and habitual marking.  
Sections: Inchoative/inceptive ('begin to') with hopuni-type and oka-/-an forms; Terminative/completive auxiliaries wa isam, wa okere, okere; Iterative/frequentative: ramma, reduplication, and the -pa pluractional (cross-ref Part X); Habitual readings and their interaction with tenselessness; Auxiliary-verb constructions (Nakagawa ch. 15) as the phasal locus  
Sources: nakagawa2024; sato2008; yoshikawa2020; kishimoto2016; kishimoto2018; bugaeva2022; refsing1986  
Gap/novel: First unified inventory of phasal auxiliary-verb constructions (wa isam, wa okere) alongside iterative/habitual strategies, with the Aktionsart classes laid out against Bybee/Dahl gram types.  

**112. Imperative and Prohibitive (Directive Mood)** `imperative-and-prohibitive`  
Bare-stem imperatives, the -yan plural/polite imperative, and the iteki prohibitive form one directive-mood system.  
Sections: Bare-stem 2nd-person imperative and person-affix dropping; The -yan plural/polite imperative and e=…wa patterns; Prohibitive iteki + V (and eyaykus); the negative imperative; Softened/indirect directives and imperative intonation; Cross-reference: prohibitive within negation typology (Part XIV)  
Sources: nakagawa2024; sato2008; tamura1997; refsing1986; ijas2023; takahashi2016; bugaeva2022  
Gap/novel: Treats imperative and prohibitive as a single directive-mood system and explicitly coordinates with Part XIV's symmetric/asymmetric-negation account to avoid double-handling the iteki prohibitive.  

**113. Hortative, Optative, and Cohortative** `hortative-and-optative`  
First-person hortative/cohortative built on =an plus clause-final particles, alongside optative and wish constructions.  
Sections: Cohortative/hortative on =an (indefinite/4th person) 'let us'; Optative and wish constructions with clause-final particles (ro, etc.); Hortative vs imperative vs desiderative boundaries; Person and number resolution in hortatives  
Sources: nakagawa2024; sato2008; tamura1997; refsing1986; ijas2023; bugaeva2022  
Gap/novel: Disentangles the =an hortative from the homophonous indefinite/4th-person subject (cross-ref Part IX) and assembles the clause-final hortative/optative particle set, scattered across prior sources.  

**114. The Desiderative rusuy** `desiderative-rusuy`  
Postverbal rusuy expresses 'want to' and desire, raising the verb-vs-auxiliary question central to the part.  
Sections: Form: V + rusuy; argument structure and person marking; rusuy as full verb vs auxiliary (complex-predicate diagnostics); Desiderative of transitives and i-rusuy detransitivized desire; Scope interactions with negation and aspect  
Sources: nakagawa2024; sato2008; tamura1960; kishimoto2016; kishimoto2018; refsing1986; bugaeva2022  
Gap/novel: Resolves the verb/auxiliary status of rusuy with Kishimoto's complex-predicate diagnostics and documents the i-rusuy detransitivization pattern with corpus argument-structure frequencies.  

**115. Abilitative easkay / eaykap (Ability and Possibility)** `abilitative-easkay-eaykap`  
easkay 'be able to' and its lexicalized negative counterpart eaykap 'cannot' encode root ability and possibility.  
Sections: The easkay 'be able to' construction and its complement; eaykap 'cannot' and the ability-negation asymmetry; Participant-internal vs circumstantial/deontic possibility readings; Categorial status (verb vs auxiliary) and complementation pattern; Related negative-ability predicates (eramiskari) — cross-ref Part XIV  
Sources: nakagawa2024; sato2008; tamura1997; refsing1986; kishimoto2016; bugaeva2022; ijas2023  
Gap/novel: Treats easkay/eaykap as a modal ability pair mapped onto the van der Auwera–Plungian possibility space, clarifying that eaykap is a lexicalized negation rather than somo + easkay.  

**116. Deontic Necessity and Obligation (kuni ne, kus ne)** `deontic-necessity`  
Necessity and obligation are expressed periphrastically via nominalized kuni ne / kunine and kus ne.  
Sections: kuni ne / kunine 'should, must' (nominalizer kuni + copula ne); kus ne necessity/destined readings vs the prospective (cross-ref epistemic chapter); Deontic vs circumstantial/teleological necessity; Negative necessity and the prohibition interface (cross-ref Part XIV); Grammaticalization from the formal noun/complementizer kuni (cross-ref Part XVI)  
Sources: nakagawa2024; sato2008; sato2009; bugaeva2022; tamura1997; refsing1986  
Gap/novel: Links deontic kuni ne to the kuni complementizer and nominalization system (Part XVI), reading necessity as a grammaticalized formal-noun construction and placing it on the modality-typology map.  

**117. Epistemic Modality, Dubitative, Intentive, and Irrealis** `epistemic-irrealis-modality`  
Probability nankor, the dubitative ya, intentive kusu ne, and counterfactual/irrealis interactions, plus the modal–evidential boundary.  
Sections: Epistemic/probability nankor(o) 'probably, will'; Dubitative ya / hawe ya and the interrogative–epistemic overlap (cross-ref Part XIII); Intentive/prospective kusu ne / kus ne 'be about to, intend to' (cross-ref purpose, Part XVII); Irrealis and counterfactual interactions (yak…nankor, ciki conditional-modal; cross-ref Part XVII); Non-volitional/spontaneous modality (Kirikae's '作意の見えない' forms); The modal–evidential boundary (nankor vs ruwe ne; cross-ref Part XIII)  
Sources: nakagawa2024; sato2008; sato2009; kirikae2017; bugaeva2022; dalcorso2018; tamura1997; refsing1986  
Gap/novel: Integrates epistemic nankor, dubitative, intentive, and irrealis into a single modality field, incorporates Kirikae's spontaneous/non-volitional forms, and stakes out the modal–evidential boundary that is fully developed in Part XIII.  

## Part 13. Part XIII — Evidentiality and Mirativity

**118. The Nominalization-plus-Copula Evidential Schema** `evidential-schema-overview`  
The architecture of the Ainu evidential system: a clause-nominalizing formal noun (ruwe/siri/hawe/humi) plus the copula ne/an encodes the speaker's source of information.  
Sections: The schema FORMAL-NOUN + ne/an: clause nominalization feeding a copular predicate; The formal-noun set as a four-way information-source paradigm (visual-trace, situational, reportative, non-visual sensory); Boundary with the wider formal-noun/nominalizer set (hi, pe, kur) and with aspect/modality; The compositional (noun + copula) vs grammaticalized-evidential-paradigm debate; Typological placement: Ainu as a textbook nominalization-based evidentiality system (Aikhenvald, San Roque); Genre and corpus distribution overview: clause-final dominance in folktale prose  
Sources: dalcorso2018; nakagawa2024; sato2008; bugaeva2022; takahashi2013; shibatani1990; tamura1997  
Gap/novel: Reconciles Nakagawa's Japanese 形式名詞/文末句 (formal-noun sentence-final) treatment with Dal Corso's English morphosyntactic-evidential account; adds a corpus-quantified genre layer and explicitly scores Ainu against the nominalization-based-evidential type, which no existing grammar does systematically.  

**119. ruwe ne — the Inferential / Visual-Trace Evidential** `ruwe-ne-inferential`  
The default assertive-evidential ruwe ne ('it is the trace/fact that'), marking inference from evidence or established fact, the most frequent and most grammaticalized term of the paradigm.  
Sections: ruwe as formal noun: 'trace, mark, fact, the case'; Inferential / reasoned-from-evidence semantics and the assertive-default function in narrative; Variants and frames: ruwe an, ruwe ne wa, ruwe tapan; Aspect/person inside the nominalized clause under ruwe; Grammaticalization to the clause-final -ruwe / ruwe particle  
Sources: hirosawa2026; dalcorso2018; nakagawa2024; sato2008; takahashi2013  
Gap/novel: Foregrounds Hirosawa (2026), the first dedicated usage study of ruwe ne, and adjudicates the tension between the strict-inferential analysis (Dal Corso) and the assertive-default reading (descriptive grammars), with corpus frequency.  

**120. siri ne — the Direct-Perception / Situational Evidential** `siri-ne-situational`  
siri ne ('it is the appearance/scene that'), marking directly observed situations and visible states, with a close interface to the siran situational-continuative and a mirative lean.  
Sections: siri as formal noun: 'appearance, sight, scene, situation, weather'; Direct visual-perceptual evidence and observed states; The siri an / siran situational-continuative and its aspect-evidential overlap; siri's tendency toward mirative/surprise readings; Interrogative siri ya / siri an?  
Sources: dalcorso2018; nakagawa2024; sato2008; bugaeva2022; tamura1997  
Gap/novel: Disentangles the evidential siri ne from the progressive/situational siran (where siri straddles aspect and evidentiality), and documents siri as the prime locus of the evidential-to-mirative extension, with corpus support.  

**121. hawe ne — the Reportative / Hearsay Evidential** `hawe-ne-reportative`  
hawe ne ('it is the voice/report that'), marking information acquired through speech or hearsay, distinct from but adjacent to the sekor quotative and reported-discourse system.  
Sections: hawe as formal noun: 'voice, word, report'; Reportative / hearsay / verbal-source evidence; hawe ne vs the sekor quotative and the reported-discourse/logophoric system; Reported speech vs general hearsay; first-hand-of-speech vs second-hand; Interrogative/confirmational hawe as, hawe un; reduction to the hawe particle  
Sources: dalcorso2018; nakagawa2024; sato2008; bugaeva2022; bugaeva2008; tamura1997  
Gap/novel: Draws the precise line between reportative-evidential hawe ne and the quotative/logophoric reported-speech machinery (cross-referencing Bugaeva 2008 on reported discourse), a boundary blurred in earlier descriptions; adds corpus distribution by genre.  

**122. humi ne — the Non-Visual Sensory Evidential** `humi-ne-sensory`  
humi ne ('it is the sound/feeling that'), marking evidence from non-visual senses — non-verbal sound and bodily/internal sensation — and inference from such cues.  
Sections: humi as formal noun: 'sound, noise, sensation, feeling'; Non-visual sensory evidence: non-verbal auditory and proprioceptive/bodily sensation; Inference from a non-visual cue and the ruwe-vs-humi inferential boundary; Mirative/surprise readings grounded in bodily sensation; Interrogative humi an; lexical restrictions and corpus rarity  
Sources: dalcorso2018; nakagawa2024; sato2008; tamura1997  
Gap/novel: Clarifies humi's internal split between non-verbal auditory and bodily-feeling sources, fixes its semantic boundary against ruwe (the two inferentials), and quantifies its corpus rarity relative to the other three terms.  

**123. Interrogative and Confirmational Evidential Constructions** `evidential-interrogative-confirmational`  
The evidential paradigm in questions and tags (ruwe un?, hawe ya?, siri ya?, …ne ya), where information-source marking shifts to query or confirm the addressee's evidence.  
Sections: The four-term paradigm in polar questions (ruwe un?, hawe ya?, siri ya?, humi ya?); Confirmational / tag constructions: …ne ya, ruwe ne ya; an/as/un allomorphy of the copular element under interrogation; The evidence-source flip: querying the addressee's information source (origo shift); Answer particles and question-answer evidential matching  
Sources: dalcorso2018; nakagawa2024; sato2008; bugaeva2022; takahashi2013  
Gap/novel: Formalizes the interrogative 'evidential flip' (deictic origo shifting from speaker to addressee) and treats the confirmational subsystem as a distinct construction, with a corpus inventory of evidential question types.  

**124. Mirativity, Evidential Scope, and Grammaticalization to Sentence-Final Particles** `mirativity-scope-grammaticalization`  
System-level interactions: the evidential-to-mirative extension, evidential stacking and scope over negation and modality, aspect/perfect-based evidential strategies, and the cline from formal noun to sentence-final particle.  
Sections: Mirativity / surprise as the evidential→mirative extension (siri, humi, ruwe); Evidential stacking and scope (formal-noun sequences; evidential over epistemic modality); Interaction with negation (somo) and modality (nankor, kusu ne); Aspect/perfect-based evidential strategies beyond the paradigm (aan, perfective a); Grammaticalization cline: formal noun → clause-final evidential → sentence-final particle (ruwe, hawe, na, wa); Diachronic source in nominalizers/formal nouns (cross-ref historical-grammaticalization)  
Sources: dalcorso2018; takahashi2013; yoshikawa2018; yoshikawa2020; nakagawa2024; sato2008; bugaeva2022  
Gap/novel: Establishes mirativity as a recognized category for Ainu, runs quantified scope/negation tests, and integrates Yoshikawa's aspect/perfect evidential strategies (aan, a) with the formal-noun paradigm under a single grammaticalization pathway — a synthesis absent from prior grammars.  

## Part 14. Part XIV — Negation

**125. Standard Clausal Negation with somo** `negation-somo-standard-clausal`  
The preverbal standard negator somo: its position, scope, periphrastic somo ki construction, and placement in symmetric/asymmetric negation typology.  
Sections: somo as the preverbal standard negator: position relative to the verb word, scope over the predicate, and clitic-vs-particle vs prefix status; The somo ... ki ('do not do') periphrasis and emphatic/contrastive/metalinguistic negation; Relative scope of somo with TAM, modality, and the evidential ruwe/hawe/siri/humi system; Symmetric vs asymmetric standard negation (Miestamo) and where Hokkaido Ainu sits; Discourse functions of negative clauses; dialect and diachronic notes (Tokachi; the Sakhalin drift toward analytic negatives)  
Sources: tamura1996; sato2008; bugaeva2022; nakagawa2024; refsing1986; shibatani1990; takahashi2016; dalcorso2025; dalcorso2021; nurmi2024  
Gap/novel: No existing English grammar gives somo an explicit Miestamo symmetric/asymmetric classification or quantifies its corpus scope behavior; this chapter adds corpus-grounded scope diagnostics and contrasts the conservative Hokkaido particle-negation with the innovative Sakhalin analytic negatives (Dal Corso).  

**126. Negative Existential and Possessive: isam** `negation-existential-possessive-isam`  
isam as the suppletive negative counterpart of the existentials an/oka, its 'not have' possessive use, and the privative sak.  
Sections: isam as the suppletive negative of the existentials an (SG) / oka (PL): 'not be present, not exist, be gone'; Possessive negation ('not have'): isam vs kor ... somo and the existential-based 'have' construction; The privative verb sak '(be) without' and the -sak derivational privative; Typology of negative existentials (Veselinova) and the existential-negation/standard-negation interface (cross-ref nonverbal-predication chapters)  
Sources: sato2008; nakagawa2024; bugaeva2022; tamura1996; refsing1986; shibatani1990  
Gap/novel: Treats isam and sak together as a coherent suppletive/lexical negation subsystem and places them on Veselinova's negative-existential typology, rather than as scattered lexical entries as in prior grammars.  

**127. Negative Predicates of Ability and Cognition** `negation-ability-cognition-predicates`  
Lexically suppletive negative modal/cognition predicates — eaykap 'cannot', eramiskari 'not know how/never', erampewtek 'not understand' — versus analytic somo negation.  
Sections: eaykap 'cannot' vs easkay 'can': suppletive negation in the abilitative domain; Negative-cognition predicates: eramiskari 'not know how / have never', erampewtek 'not understand/not know'; Analytic vs lexicalized negation of modals (somo easkay vs eaykap) and the choice between them; The boundary with the Part XII modality system and with the prohibitive  
Sources: sato2008; nakagawa2024; bugaeva2022; tamura1996; refsing1986; takahashi2016  
Gap/novel: Isolates the asymmetric, lexically suppletive negation of ability/knowledge (where Ainu uses dedicated negative predicates instead of somo + modal) as a distinct phenomenon, a granular split not made in existing reference grammars.  

**128. Negative-Polarity Indefinites and the Scope of Negation** `negation-polarity-items-scope`  
The ka-indefinite/NPI series under somo, negative concord, constituent vs clausal negation, and the negation of nominal predicates (somo ... ne).  
Sections: The ka-indefinite/NPI series nen ka, nep ka, hunak ka under somo ('nobody / nothing / nowhere'); NPI licensing conditions and negative concord / multiple negation; Constituent (sub-clausal) negation vs clausal negation and their scope effects; Negation of nominal predicates: the somo ... ne construction and copular negation  
Sources: sato2008; nakagawa2024; bugaeva2022; tamura1996; refsing1986; takahashi2016; nurmi2024  
Gap/novel: Provides the first explicit NPI-licensing and negative-concord analysis for Ainu, linking the ka-indefinite series (cross-ref the pronoun/indefinite chapters) to clausal vs constituent scope and to copular negation.  

**129. The Prohibitive Subsystem: iteki and Negative Directives** `negation-prohibitive-iteki`  
The dedicated prohibitive iteki, its asymmetry with declarative negation, apprehensive 'lest' uses, and links to the imperative/hortative system.  
Sections: iteki + verb: the prohibitive ('don't'), with person marking and the plural/polite imperative endings; Prohibitive vs declarative negation: structural asymmetry in the directive domain; Apprehensive / 'lest' and other negative-directive strategies (eyaykus, somo ... -wa); Relation to the imperative/hortative/optative system (Part XII) and dialect variation  
Sources: sato2008; nakagawa2024; bugaeva2022; tamura1996; refsing1986; takahashi2016; dalcorso2025  
Gap/novel: Frames iteki as a typologically interesting dedicated prohibitive distinct from standard somo negation (Miestamo & van der Auwera prohibitive typology), with apprehensive extensions and dialect variation rarely consolidated in prior descriptions.  

## Part 15. Part XV — The Simple Clause and Nonverbal Predication

**130. The Copula ne and Predicate-Nominal Clauses** `copula-ne-predicate-nominals`  
Equational and class-membership predication with the copula ne, its person indexing, and its disputed verb-vs-particle status.  
Sections: Noun + ne: equational ('X is Y') and proper-inclusion ('X is a Y', kamuy ne) predicate nominals; Person indexing on the copula (ku=…ne, e=…ne, …ne ruwe) and predicate-nominal agreement; Identity (equation) vs class membership; ne with proper nouns and pronominal complements; ne and its homophones: the demonstrative/anaphoric ne(a), conjunctive newa, prospective/modal ne; The copula as a two-place 'incomplete' verb taking a nominal complement (verb vs particle analysis)  
Sources: nakagawa2024; sato2008; sato2025-basic-sentence-structures; bugaeva2022; refsing1986; tamura1996; ijas2023; shibatani1990  
Gap/novel: Places Ainu on Stassen's nonverbal-predication map (copula strategy for the nominal type); resolves the ne-as-verb vs ne-as-particle dispute with distributional/indexing evidence; corpus frequency of ne-clauses by genre.  

**131. Existential and Locational Clauses (an / oka)** `existential-locational-an-oka`  
The existential/locational predicates an (SG) and oka (PL), their number suppletion, presentational use, and the isam negative.  
Sections: Existential predication 'there is/exists': an (SG) vs oka~okay (PL) and animacy/number sensitivity; Locational predication 'be (located) at': subject + locative/postpositional phrase + an/oka; The existential–locational–copular split and suppletion shared with verbal number and aspect auxiliaries (cross-ref Parts X, XII); Presentational/scene-setting an/oka in narrative openings ('there once lived…'); Negative existential isam and the exist-negation suppletion (cross-ref Part XIV)  
Sources: nakagawa2024; sato2008; sato2025-basic-sentence-structures; bugaeva2022; refsing1986; tamura1996; sato2021-relational-noun-or; ijas2023  
Gap/novel: Unifies the existential/locational/copular paradigms on Stassen's locational-existential mapping; quantifies presentational an/oka by genre; explicitly links the an/oka suppletion to verbal number (Part X) and existential aspect (Part XII).  

**132. Predicative Possession (kor, Existential Possession, isam)** `predicative-possession-clauses`  
Clause-level 'have/belong' predication: the transitive verb kor, existential-based possession, and negative isam, in possessive typology.  
Sections: 'Have' possession with transitive kor (possessor = A, possessum = O) and possessor indexing; Existential/belong-type possession (possessum + possessor's affiliative/relational form + an); Negative possession: isam ('not have') and somo kor; the have-not suppletion; Predicative (clausal kor) vs attributive (affiliative possessed-form) possession — division of labor (cross-ref Part VII); Animacy and alienable/inalienable effects on which possessive construction is selected  
Sources: nakagawa2024; sato2008; bugaeva2022; refsing1986; tamura1996; bugaeva2021-appositive-possession; huber2025-possession-subjectivity; sato2021-relational-noun-or  
Gap/novel: Positions Ainu in Stassen's predicative-possession typology (have/belong/existential strategies); articulates the interface between clausal kor-possession and the nominal affiliative system of Part VII; corpus split of the competing strategies.  

**133. Property-Concept (Adjectival) Predication without a Copula** `property-concept-predication`  
Predicate 'adjectives' as intransitive stative verbs taking person indexing — the clause-level consequence of the no-adjective-class thesis.  
Sections: Property concepts predicated as stative intransitive verbs (pirka, poro, wen) — no copula, no adjective class; Predicate-adjective clauses as ordinary verbal clauses (person indexing directly on the property verb); Contrast of strategies: zero/verbal predication for properties vs the ne-copula for nominals; Attributive vs predicative use of property words (prenominal modification vs predication; pon/poro); Degree and intensification in predication (sonno, ruwe…) and the absence of a dedicated comparative (cross-ref Part XVIII)  
Sources: nakagawa2024; sato2008; bugaeva2022; refsing1986; tamura1996; shibatani1990; chiri1942; ijas2023  
Gap/novel: Recasts the 'no-adjective-class' thesis as a predication-typology point (Stassen/Wetzer verb-encoding vs noun-encoding of property concepts); places Ainu firmly in the verb-encoding type; gives corpus diagnostics separating predicate-nominal from predicate-adjective clauses.  

**134. TAM, Evidentiality, and Negation on Nonverbal Predicates** `nonverbal-predicate-tam-negation`  
How copular and other nonverbal predicates host the full sentence-final aspect, evidential, and negation apparatus through ne.  
Sections: Aspect on nonverbal predicates: ne + an/oka, ne kor an, ne a (the copula taking aspectual auxiliaries); Evidential/modal stacking: …ne ruwe ne, …ne nankor — the formal-noun + copula chain (foreshadows Part XIII); Negating nonverbal predicates: somo …ne (predicate-nominal negation) vs preverbal somo on property verbs; Interrogative and confirmational nonverbal predicates (…ne ya, …ne ruwe?, …ne hawe?); The copula as structural host for the whole clause-final TAM–evidential–negation stack (cross-ref Parts XII–XIV)  
Sources: nakagawa2024; sato2008; bugaeva2022; refsing1986; dalcorso2018-evidentiality; hirosawa2026-ruwe-ne; takahashi2016-negation; dalcorso2025-negation  
Gap/novel: Systematizes nonverbal predicates as hosts of the full TAM-evidential-negation stack; shows the ne-clause as the structural base of the nominalization-plus-copula evidential system (Part XIII); genre-quantified distribution of nominal-predicate clause-finals.  

**135. Basic Constituent Order and Head-Final Syntax** `constituent-order-head-final`  
Rigid verb-final (S)OV clause order and pervasive head-finality, scored against Greenbergian word-order correlations.  
Sections: Basic order: AOV / SOV, with the verb (verb complex) clause-final; Head-finality across the grammar: postpositions, prenominal modifiers/relatives, genitive-before-noun, post-head auxiliaries; Placement of obliques and adverbials relative to the core arguments; Ditransitive constituent order (recipient/theme sequencing) and finality of the verb complex; Greenbergian/WALS correlations and the few non-final residues (sentence-final particles, afterthought/right-dislocation)  
Sources: sato2025-basic-sentence-structures; nakagawa2024; sato2008; bugaeva2022; refsing1986; shibatani1990; tamura1996; furukawa1967-sakhalin-syntax  
Gap/novel: Explicit WALS/Greenbergian word-order-correlation scoring for Ainu; corpus measurement of order rigidity; contrasts rigid verb-finality with flexible pre-verbal NP order, bridging to the argument-realization chapter.  

**136. Argument Realization: Affix Indexing and Free NP Order** `argument-realization-indexing`  
Grammatical relations encoded by bound person affixes rather than case or fixed position, with free, pragmatically governed NP order.  
Sections: Grammatical relations carried by bound A/S/O person affixes, not by case or fixed NP position (cross-ref Part IX); Free order and pragmatic (information-structure) reordering of full NPs before the verb; Zero case-marking of core arguments; obliques set off by postpositions/relational nouns; Cross-indexing and overt-NP doubling: when full NPs co-occur with the affixes; Recovering A/S/O when NPs are reordered or absent (reliance on the affix paradigm)  
Sources: sato2025-basic-sentence-structures; nakagawa2024; sato2008; bugaeva2022; refsing1986; shibatani1990; tamura1996; sato2023-ditransitives  
Gap/novel: Corpus quantification of NP-order variability and overt-NP-vs-affix co-occurrence rates; frames the agreement-vs-pronominal-argument question and ties argument identification to the alignment system of Part IX.  

**137. Oblique and Adjunct Syntax; Verbless and Presentational Clauses** `oblique-adjunct-verbless-clauses`  
The syntax of postpositional/relational-noun obliques and adjuncts, plus minor verbless and presentational clause types.  
Sections: Oblique syntax: postpositional phrases (ta, un, wa, or ta…) and their placement; Relational/locative-noun obliques (or, ka, sam + postposition) as the principal oblique strategy (cross-ref Part VIII); Adjunct adverbials, temporal phrases, and instrument/comitative (ari/ani, tura) positioning; Verbless and minor clause types: vocatives, exclamatives, labels, equational fragments; Presentational and existential-presentational clauses in discourse openings (cross-ref existential chapter)  
Sources: nakagawa2024; sato2008; sato2025-basic-sentence-structures; bugaeva2022; refsing1986; sato2021-relational-noun-or; kobayashi2020-space-place-valency  
Gap/novel: Maps the division of labor among oblique-marking strategies (postposition vs relational noun vs applicative promotion, cross-ref Part XI); Talmy motion-event framing; corpus inventory of verbless/minor clause types that print grammars rarely catalogue.  

**138. Pro-Drop, (Non)configurationality, and the Pronominal-Argument Debate** `nonconfigurationality-pronominal-argument`  
Argument ellipsis and null anaphora, and whether the bound affixes are the true arguments (Jelinek/Baker) — Ainu on the configurationality cline.  
Sections: Argument ellipsis / pro-drop: core NPs routinely null, recovered from affixes and discourse; Null anaphora and zero-topic continuity across clauses (cross-ref Parts XVII, XIX); The pronominal-argument hypothesis (Jelinek): affixes as arguments, full NPs as adjuncts?; (Non)configurationality diagnostics: free word order, null anaphora, discontinuous NPs — does Ainu project a VP?; Polysynthesis framing (Baker) and Shibatani's assessment; corpus-grounded verdict for Ainu  
Sources: shibatani1990; shibatani1988-polysynthesis; bugaeva2022; sato2008; sato2025-basic-sentence-structures; refsing1986; nakagawa2024  
Gap/novel: First explicit, corpus-grounded evaluation of the pronominal-argument and (non)configurationality hypotheses for Ainu; quantifies null-argument and NP-discontinuity rates; positions Ainu on the configurational↔nonconfigurational cline relative to other polysynthetic languages.  

## Part 16. Part XVI — Nominalization, Relativization, and Complementation

**139. The -p / -pe Nominalizer ("the one that")** `nominalization-p-pe`  
The participant-nominalizer -p (~ -pe) deriving agent/patient "headless-relative" nouns from verbs and whole clauses.  
Sections: Form and distribution: -p after vowels, -pe after consonants / full pe; the po 'thing, child' source; Argument-role reading: agent vs patient/theme 'the one who/that', fixed by the verb's argument structure; Headless-relative function and the nominalization–relativization continuum; Lexicalised -p/-pe nouns (aep 'food', ipe-p, kor-pe) and productivity; Internal TAM, number, and person marking inside the nominalised clause  
Sources: tamura1996; refsing1986; sato2008; nakagawa2024; bugaeva2022; shibatani1990; bugaeva2016  
Gap/novel: Corpus-quantified -p vs -pe split and agent/patient ratio; place -p/-pe as the headless pole of one continuum with the gap relative clause (Ch. prenominal-gap), using Shibatani's nominalization-vs-relativization framework explicitly.  

**140. The -i / -hi Nominalizer (event, place, time, and fact)** `nominalization-i-hi`  
The abstract/event nominalizer -i (~ -hi) forming 'the V-ing / the place / time / fact that', and its affinity with the affiliative and formal-noun hi.  
Sections: Form: -i ~ -hi allomorphy and its relation to the affiliative -hi and the formal noun hi; Semantic outputs: event/fact, place (uske/usi overlap), time, and manner readings; Clausal (sentential) nominalization feeding complements and the evidential system (cross-ref Parts XIII, XVI complementation); The -i vs -hi unity debate; nominalizer-vs-possessed-noun analyses; Insubordination: nominalized clauses recruited as main clauses (Tokachi 脱従属節化)  
Sources: tamura1996; refsing1986; sato2008; nakagawa2024; bugaeva2022; takahashi2014; takahashi2018; bugaeva2016  
Gap/novel: Treat -i/-hi as the hinge among nominalization, the formal-noun/evidential system, and complementation; integrate Takahashi's grammaticalization and insubordination findings, a diachronic-pragmatic dimension absent from the reference grammars.  

**141. Lexical-Head and Formal-Noun Nominalization (kur, uske, ruwe/hawe/siri/humi)** `lexical-head-formal-noun-nominalization`  
Nominalization headed by lexical nouns (kur 'person', uske/usi 'place', ike) and by the grammaticalized formal-noun set (ruwe, hawe, siri, humi, hi, pe) acting as clause-nominalizing heads.  
Sections: kur 'person who' and animate-head nominalization vs -p/-pe; uske/usi 'place where', ike, and other semi-lexical heads; The formal-noun set (ruwe, hawe, siri, humi, hi, pe) as bleached clause-nominalizing heads; Grammaticalization cline: lexical noun → formal noun → evidential / sentence-final particle (cross-ref Parts XIII, XVIII); Action/result and lexicalized nominalizations; noun↔verb category conversion  
Sources: nakagawa2024; sato2008; sato2020; bugaeva2022; tamura1996; refsing1986; takahashi2018  
Gap/novel: Unify the formal-noun set under a single nominalization analysis and chart its grammaticalization toward the evidentials (Part XIII) and SFPs (Part XVIII); deploy Sato 2020's word/phrase and noun/verb conversion framing as the analytic backbone.  

**142. Prenominal Gap Relative Clauses** `prenominal-gap-relative-clauses`  
The basic head-final, relativizer-less gap relative clause, in which a finite modifying clause is juxtaposed before its head noun.  
Sections: Structure: [ ... V ] N, no relativizer, gap strategy, prenominal/head-final order; Person and TAM retained inside the RC; the verb's finite form; Restrictive vs non-restrictive readings; stacking of relative clauses; Distinguishing RCs from adnominal/genitive modification and from N-N compounding; Pro-drop and the gap-vs-null-pronoun (vs resumptive) analysis  
Sources: refsing1986; tamura1996; sato2008; nakagawa2024; bugaeva2022; shibatani1990  
Gap/novel: Corpus typing of relativized head-roles and an explicit gap-vs-resumptive/gap-vs-pro analysis rarely stated for Ainu; establishes the continuum with headless -p/-pe nominalization.  

**143. Relativization and the Accessibility Hierarchy (applicative-mediated oblique access)** `relativization-accessibility-applicative`  
Which positions relativize — subject/object directly, obliques only after e-/ko-/o- applicative promotion — plus possessor, locative/temporal, and standard-of-comparison relativization.  
Sections: Subject and object relativization (direct gap strategy); Oblique relativization requires applicative promotion (e-/ko-/o-): the Keenan–Comrie cutoff (cross-ref Part XI); Possessor relativization and possessor-raising strategies; Locative/temporal relativization (uske/usi, hi heads); Standard-of-comparison relativization (Bugaeva 2015)  
Sources: bugaeva2015; bugaeva2006; dalcorso2020; sato2008; nakagawa2024; bugaeva2022; refsing1986  
Gap/novel: Full Keenan–Comrie hierarchy test on a Hokkaido corpus; formalize the applicatives as a relativization-extending strategy (a typologically notable interaction) and integrate Bugaeva 2015's comparison-standard RC, which the reference grammars omit.  

**144. Headless, Internally-Headed, and Noun-Modifying Clause Analyses** `headless-internally-headed-noun-modifying-clauses`  
The analytic question of whether Ainu adnominal clauses are externally-headed RCs, headless/internally-headed relatives, or a unified 'general noun-modifying clause' type.  
Sections: Headless relatives and their overlap with -p/-pe and -i/-hi nominalization; The internally-headed relative analysis: evidence and problems; The general noun-modifying-clause (Matsumoto / Japanese-style) unified analysis; Relative vs complement vs adverbial modifying clauses: one construction or many?; Interaction of relativization with noun incorporation (Dal Corso 2020; cross-ref Part XI)  
Sources: dalcorso2020; sato2008; nakagawa2024; bugaeva2022; shibatani1990; bugaeva2016  
Gap/novel: Adjudicate the externally-headed vs internally-headed vs GNMCC debate with corpus data and tie the RC / nominalization / complement continuum into a single structural through-line distinctive to this grammar.  

**145. Quotative Complementation and Reported Speech (sekor)** `quotative-complementation-sekor`  
The dominant complementation strategy: framing a (direct-form) clause with the quotative sekor under verbs of speech, cognition, and intention.  
Sections: sekor (~ hawe, itak) as quotative complementizer; direct-speech framing; Matrix-verb range: utterance, cognition ('think'), intention, naming; Direct vs indirect speech and the logophoric fourth person (cross-ref Part IX); 'Logophoric speech is not indirect': the Nikitina–Bugaeva analysis; Embedded dialogue, quote stacking, and discourse function (cross-ref Part XIX)  
Sources: bugaeva2008; nikitina-bugaeva2021; sato2004; nakagawa2024; sato2008; refsing1986; bugaeva2022  
Gap/novel: Bring the logophoricity-as-non-indirect theory to bear on complementation and give genre-quantified distribution of sekor framing in folktale dialogue, connecting it to the narrator-viewpoint system (Part XIX).  

**146. Nominalized Complements and Control/Raising** `nominalized-complements-control-raising`  
Complement clauses formed by nominalization (hi, -i, ruwe) under perception, cognition, and evaluative predicates, and the control/raising diagnostics of same-subject complex predicates.  
Sections: Nominalized object/subject complements: hi / -i / ruwe + matrix verb; Complement-taking predicate classes: perception, cognition, evaluative, phasal; Control (equi) vs raising in same-subject complex predicates; Complex predicates and auxiliary-verb constructions (Kishimoto) as the control locus; Finiteness and the complement–nominalization continuum  
Sources: sato2008; nakagawa2024; kishimoto2016; kishimoto2018; bugaeva2022; refsing1986; tamura1996  
Gap/novel: Apply Noonan/Dixon complementation typology and explicit control/raising diagnostics — never systematically done for Ainu — and link Kishimoto's complex-predicate findings to a worked control analysis.  

**147. The kuni Complementizer and Purpose Complements** `kuni-complementizer-purpose-complements`  
The irrealis complementizer/nominalizer kuni and the purposive kus(u) / kuni ne, marking future-oriented complements of manipulation, desire, and purpose.  
Sections: kuni as complementizer vs (formal) noun: status and origin; Irrealis/future-oriented complements: manipulation, desiderative, deontic (cross-ref Part XII); Purpose clauses kus(u) and kuni ne; the purpose–complement overlap; kuni ne 'should/must' deontic uses and grammaticalization; Subject control in kuni complements; contrasts with sekor and nominalized complements  
Sources: nakagawa2024; sato2008; sato2009; bugaeva2022; refsing1986; tamura1996  
Gap/novel: Separate the complement vs purpose functions of kuni/kus(u), chart kuni's grammaticalization (noun → complementizer → deontic) with corpus frequencies, and clarify the realis/irrealis split feeding complementation vs adverbial linkage (cross-ref Part XVII).  

## Part 17. Part XVII — Clause Linkage and Adverbial Subordination

**148. Clause Linkage in Ainu: Typology and Inventory** `clause-linkage-overview`  
Framing chapter mapping Ainu clause combining onto the coordination–cosubordination–subordination continuum and laying out the full inventory of clause-linking morphemes.  
Sections: The coordination / subordination / cosubordination continuum and nexus–juncture parameters (Foley & Van Valin; Bickel) applied to Ainu; Inventory of linkers: connectives (wa, hine, akusu), conjunctive particles (kor, kusu, yakka, korka), and conditional/temporal forms (yak(un), ciki); Conjunctive particle vs. connective/formal noun vs. verb serialization: the morphosyntactic status question; Finiteness, symmetric vs. asymmetric linkage, and the (near-)absence of dedicated converb morphology; Interface with nominalization and complementation (cross-ref Part XVI) and with discourse cohesion (cross-ref Part XIX)  
Sources: nakagawa2024; sato2008; bugaeva2022; refsing1986; shibatani1990; kishimoto2018  
Gap/novel: No existing Ainu grammar plots its clause linkage on the Bickel / Foley–Van Valin parameter space; this overview supplies that typological scaffold plus a single consolidated linker inventory feeding the rest of the part.  

**149. Sequential wa and Clause Chaining** `sequential-wa-and-clause-chaining`  
The default connective wa 'and (then)', multi-clause event chains, and the culminative linker aine, disambiguated from the homophonous resultative/perfect wa.  
Sections: wa as the unmarked sequential/coordinating connective; medial-clause chaining and event sequencing; wa vs. hine: degree of clause integration and discourse function; The culminative chaining linker aine 'and finally / until at last'; Long chains, medial-vs-final verb behaviour, and chain prosody; Disambiguating connective wa from resultative wa an, instrumental ari/ani, and sentence-final wa (cross-ref Parts XII, XVIII)  
Sources: nakagawa2024; sato2008; refsing1986; tamura1961; bugaeva2022; machangcheng2021  
Gap/novel: Separates the homophonous wa (connective, resultative auxiliary, final particle) with corpus frequencies and treats aine as a grammaticalized culminative converb seldom isolated in prior grammars.  

**150. The hine/akusu Contrast and Switch-Reference-Like Linkage** `hine-akusu-switch-reference`  
The sequential connectives hine and akusu and the long-running debate over whether they encode same-/different-subject (switch-reference) or discourse (un)expectedness.  
Sections: hine 'and (then)' as the unmarked tight-sequential connective; akusu 'and then, whereupon' and its discovery/surprise/non-continuity semantics; The switch-reference hypothesis vs. the expectedness / discourse-continuity analysis; Related junctures: a(w)a, kor kane, and the wa / hine / akusu paradigm; Typological assessment against canonical switch-reference and reference-tracking systems  
Sources: refsing1986; nakagawa2024; sato2008; bugaeva2022; tamura1961; chiri1942  
Gap/novel: Adjudicates the switch-reference vs. expectedness debate against a systematic corpus count of subject continuity across hine/akusu junctures — a diagnostic never run methodically for Ainu.  

**151. Simultaneous kor 'while' and Overlapping-Event Clauses** `simultaneous-kor-clauses`  
The conjunctive particle kor marking temporal overlap, distinguished from the homophonous possessive verb kor and the progressive auxiliary kor an.  
Sections: kor 'while, as' marking simultaneous/background events; Same-subject simultaneity and the boundary with progressive kor an (cross-ref Part XII); kor kane and reduplicated/distributive simultaneity; Disambiguating conjunctive kor from possessive verb kor and from conditional/temporal uses; Temporal overlap vs. sequence: kor vs. wa/hine  
Sources: nakagawa2024; sato2008; refsing1986; tamura1960; bugaeva2022; machangcheng2024  
Gap/novel: Disentangles the three kor (connective, possessive verb, progressive auxiliary) and quantifies the same-subject bias of simultaneous kor.  

**152. Conditional, Temporal, and Concessive Clauses** `conditional-temporal-concessive-clauses`  
The yak(un)/ciki conditionals, their temporal 'when' uses and realis/irrealis split, and the morphologically related concessives yakka 'even if' and korka 'although'.  
Sections: yak / yakun conditional 'if/when' and its irrealis orientation; ciki conditional and the realis (factual) vs. irrealis (hypothetical) split; Temporal 'when' readings and the conditional/temporal overlap; Concessive yakka 'even if/though' (yak + ka) and adversative/concessive korka 'but, although'; Counterfactual and modal interactions (yak…nankor; cross-ref Parts XII, XIV)  
Sources: sato2009; nakagawa2024; sato2008; refsing1986; bugaeva2022; tamura1961  
Gap/novel: Integrates Sato (2009) on conditionals into an explicit realis/irrealis parameterization and exhibits the yak-conditional → yakka-concessive morphological cline, treating korka adversative coordination alongside concessive subordination.  

**153. Causal and Purpose Clauses (kusu)** `causal-and-purpose-clauses`  
The polyfunctional kusu/gusu marking reason 'because' and purpose 'in order to', its formal-noun origin, and its division of labour with the kuni purpose complementizer.  
Sections: kusu 'because' reason clauses (preposed, finite); kusu '(in order) to' purpose clauses and the reason/purpose polysemy; kusu ne intentive/prospective and the modal boundary (cross-ref Part XII); Purpose kuni (ne) and the kusu vs. kuni division of labour (cross-ref Part XVI); Negative purpose and 'before/lest' (etoko / etokus type) strategies  
Sources: nakagawa2024; sato2008; refsing1986; bugaeva2022; tamura1961; kishimoto2016  
Gap/novel: Unifies reason / purpose / intentive kusu under one grammaticalized item and maps the kusu-vs-kuni purpose split with corpus distribution, a division not quantified in existing grammars.  

**154. Manner and Degree Adverbial Clauses** `manner-and-degree-adverbial-clauses`  
Manner clauses, the clause-linking -no adverbializer, and degree/extent clauses (pakno 'to the extent that'), framed against Ainu comparison strategies.  
Sections: The -no adverbializer deriving manner adverbials from verbs/clauses (cross-ref Part X); Manner '(in the way) that' clauses and the depictive/secondary-predication overlap; Degree/extent pakno 'as far as, to the extent that' and proportional clauses; Equative and standard-of-comparison degree linkage (cross-ref Parts XVI, XVIII); Simile and 'as if' manner comparison (koraci and related forms)  
Sources: tamura1974; nakagawa2024; sato2008; bugaeva2015; bugaeva2022; machangcheng2024  
Gap/novel: First focused treatment of degree/extent (pakno) and manner adverbial clauses as a clause-linkage type, connecting them to Bugaeva (2015) on the comparison-of-standard construction.  

**155. Tail-Head Linkage and Narrative Clause Cohesion** `tail-head-linkage-and-narrative-cohesion`  
Recapitulative tail-head linkage, the discourse connective orowa(no) 'and then (from there)', and the anaphoric clause-linkage that structures Ainu oral narrative.  
Sections: Tail-head (recapitulative) linkage: re-opening a clause by repeating the prior verb; orowa(no) 'and then, after that' and inter-sentential discourse connectives; Anaphoric linkage with nea / ne plus a recapitulated predicate; Genre distribution: tail-head linkage in uwepeker prose vs. yukar verse (cross-ref Part XIX); Functions: thematic continuity, narrative pacing, and the oral-performance basis  
Sources: nakagawa2024; bugaeva2008; sato2008; refsing1986; otani_texts; nurmi2024  
Gap/novel: Quantifies tail-head-linkage frequency by genre using the Nakagawa and Otani narrative corpora — a discourse-grammar phenomenon essentially absent from reference grammars of Ainu.  

## Part 18. Part XVIII — Information Structure, Sentence-Final Particles, and Minor Classes

**156. Topic and Contrastive Topic: anak(ne)** `topic-marking-anakne`  
The topic/contrastive-topic particle anak ~ anakne, its discourse functions, and its (non)parallel with Japanese wa.  
Sections: Form and distribution of anak vs anakne; Thematic (aboutness) vs contrastive topic readings; Topic vs grammatical subject; optionality and co-occurrence with case/postpositions; Topic chains and referent tracking across discourse; Typological comparison with Japanese wa and areal topic-marking  
Sources: nakagawa2024; sato2008; bugaeva2022; bugaeva2012; refsing1986; tamura1961  
Gap/novel: No corpus study of anakne distribution exists; quantify the thematic-vs-contrastive split and topic continuity by genre, and situate anakne within information-structure typology (aboutness/QUD topics) rather than treating it as a mere wa-equivalent.  

**157. Focus, Restriction, and Scalar/Additive Particles: patek and ka** `focus-restrictive-additive-particles`  
The focus-sensitive particles patek 'only', ka 'also/even', and related operators marking restrictive, additive, and scalar focus.  
Sections: Restrictive patek 'only': scope and position; Additive–scalar ka 'also, even' and its NPI use under negation (nen ka … somo); Other focus/emphatic operators (eun, hike, emphatic clitics); Interaction of focus particles with case-marking and topic; Focus association, alternatives, and scope ambiguities  
Sources: tamura1961; nakagawa2024; sato2008; bugaeva2022; refsing1986  
Gap/novel: Recast Tamura's 副助詞 inventory as focus-sensitive operators (alternative semantics); unify the additive-focus and negative-polarity-indefinite uses of ka, which grammars list separately, and give corpus scope statistics.  

**158. Cleft, Pseudocleft, and Nominalization-Based Focus** `cleft-nominalization-focus`  
Identificational and predicate-focus constructions built on nominalization plus the copula (…p ne, …hi ne) and their relation to the evidential schema.  
Sections: Nominalization-plus-copula clefts (-p/-pe ne, -i/-hi ne); Identificational vs predicate focus; exhaustivity effects; Pseudoclefts and headless-relative focus; Overlap and disambiguation with the formal-noun/evidential ruwe ne construction; Insubordination and the focus → assertion drift  
Sources: bugaeva2016; nakagawa2024; sato2008; bugaeva2022; takahashi2014; takahashi2018; dalcorso2018  
Gap/novel: Few grammars isolate cleft focus from the homophonous evidential ruwe ne; disentangle them, test exhaustivity, and link to Bugaeva's nominalization-innovation and Takahashi's insubordination findings.  

**159. Pragmatic Word-Order Permutation, Dislocation, and Argument Ellipsis** `pragmatic-word-order-dislocation`  
Departures from basic verb-final order for information-structural ends — scrambling, left/right dislocation, afterthought, and given-argument ellipsis.  
Sections: Pragmatic reordering of free NPs around the verb complex; Left-dislocation/topicalization and right-dislocation/afterthought; Given-argument ellipsis and zero anaphora as an IS strategy; Postposing and presentational orders; Information structure under the pronominal-argument analysis (cross-ref Part XV)  
Sources: sato2025; nakagawa2024; shibatani1990; refsing1986; bugaeva2022  
Gap/novel: Word-order freedom is described but never IS-annotated for Ainu; quantify permutation triggers (given/new, contrast) in narrative vs conversation and connect to the (non)configurationality debate.  

**160. The Sentence-Final Particle System and Illocutionary Force** `sentence-final-particles-illocutionary-force`  
The inventory of clause-final particles (na, wa, ya, nankor, …) encoding assertion, emphasis, confirmation, and softening, and their grammaticalization from formal nouns.  
Sections: Assertive/emphatic particles na and wa and their illocutionary force; Confirmation, softening, and modal particles (ya, nankor, ke …); Clitic vs particle vs word status; ordering of clause-final elements; The evidential → sentence-final-particle cline (ruwe ne › ruwe); Speech-act mapping and areal comparison with Japanese SFPs  
Sources: tamura1961; tamura1960; nakagawa2024; sato2008; bugaeva2022; dalcorso2018; hirosawa2026  
Gap/novel: Build a unified SFP inventory with explicit illocutionary labels and a grammaticalization map (formal noun → evidential → particle); the East-Asian SFP areal comparison is rarely drawn for Ainu.  

**161. Interrogative Strategies and Question Particles** `interrogative-strategies-question-particles`  
Polar and content questions — the particles ya/he, in-situ wh-words, evidential questions (ruwe un, hawe un), and biased/confirmational questions.  
Sections: Polar questions: particles ya, he, and rising intonation; Content questions: in-situ interrogative words (cross-ref Part VIII); Evidential and formal-noun questions (ruwe un? hawe un? siri un?); Alternative, tag, and confirmational/biased questions; Indirect/embedded questions and their marking  
Sources: nakagawa2024; sato2008; bugaeva2022; refsing1986; dalcorso2018; tamura1961  
Gap/novel: Integrate the evidential-interrogative paradigm (ruwe un etc.) with ordinary question marking, which most grammars treat in separate chapters; add corpus distribution of question types by genre.  

**162. Gendered Speech and Pragmatic Registers** `gendered-register-speech`  
Sex-of-speaker and register differences in final particles, interjections, and politeness, and the documentation gaps surrounding them.  
Sections: Men's vs women's sentence-final particles and interjections; Politeness, deference, and softening strategies in conversation; Age/status registers and honorific reference (overview; cross-ref Part XIX); Reliability of and gaps in the gendered-speech record; Sociolinguistic variation and revitalization-era leveling  
Sources: nakagawa2024; tamura1996; kayano1987; bugaeva2022; ijas2023  
Gap/novel: Separate well-attested gendered SFPs from anecdotal claims; flag the thin empirical base and quantify what the conversational corpora actually support, kept distinct from the oral-literature ritual/poetic register of Part XIX.  

**163. Adverbs, Degree Words, and Comparison Strategies** `adverbs-degree-comparison`  
The adverb word-class, the -no adverbializer, intensifiers, and the periphrastic encoding of comparison (Ainu has no dedicated comparative).  
Sections: Adverb subclasses: temporal, locative, manner, degree; Deadjectival/deverbal adverbs via -no and bare adverbs; Degree and intensity words (sonno, ruwe, poro …); Comparison: periphrastic 'exceed/surpass' strategies and the standard marker; Equative, superlative, and the absence of a morphological comparative (typology)  
Sources: nakagawa2024; sato2008; refsing1986; bugaeva2022; bugaeva2015; tamura1996; shibatani1990  
Gap/novel: Ainu's lack of a morphological comparative is noted but never systematized; map its periphrastic comparison onto Stassen's comparative typology and fold in Bugaeva (2015) on the standard of comparison expressed via relativization.  

**164. Conjunctions and Discourse Connectives** `conjunctions-discourse-connectives`  
NP-coordinating conjunctions (newa, tura) and clause-edge discourse connectives (orowano, nah …) as a minor class, distinct from the converbal clause-linkers of Part XVII.  
Sections: NP/phrasal coordination: newa, tura, and bare juxtaposition; Disjunction and the 'or' strategies; Discourse connectives at clause edges (orowa(no), nah, newaanpe …); Connective vs converb/clause-linker boundary (cross-ref Part XVII); Grammaticalization of connectives from verbs and relational nouns  
Sources: nakagawa2024; sato2008; refsing1986; bugaeva2022; tamura1960  
Gap/novel: Carve out coordination and discourse connectives as a class distinct from the subordinating linkers; trace orowano-type connectives to their relational-noun sources and give corpus frequencies at episode boundaries.  

**165. Interjections, Response Words, Ideophones, and Sound Symbolism** `interjections-ideophones-sound-symbolism`  
The expressive minor classes — interjections and conversational formulae, ideophones/mimetics, and size/intensity sound-symbolic gradation.  
Sections: Interjections and response words (irankarapte, hioy'oy, e/ruwe …); Conversational formulae and greetings; Ideophones/mimetics: phonological templates and reduplication; Sound-symbolic vowel/consonant gradation for size and intensity; Ideophones and refrains in oral literature (cross-ref Part XIX)  
Sources: nakagawa2024; sato2008; tamura1996; bugaeva2022; kindaichi1933; chiri1942  
Gap/novel: Ainu ideophones and sound symbolism are largely uncatalogued; build a first template-and-gradation inventory (Dingemanse-style) and distinguish lexical interjections from depictive ideophones.  

## Part 19. Part XIX — Discourse and the Grammar of Oral Literature

**166. The Oral-Literature Genre System and Its Grammatical Signatures** `oral-literature-genre-taxonomy`  
The taxonomy of Ainu oral-narrative genres and the bundle of grammatical features that indexes each one.  
Sections: The genre inventory: uwepeker/tuytak (prose folktale), yukar/sakorpe (human heroic epic), kamuy yukar (god-song), oina/oyna (ancestral sacred narrative), inonno-itak (prayer), upaskuma (oral tradition/lore); Classifying parameters: sung vs spoken/recited, first-person vs third-person narrator, divine vs human protagonist, presence/absence of refrain; Grammatical signatures per genre: person-system choice, default clause-final evidential, register lexicon, metrical packaging; Dialectal variation in genre terminology and inventory (Saru, Chitose, Tokachi, Horobetsu, Sakhalin)  
Sources: nakagawa2024; kindaichi1933; bugaeva2022; sato2008; refsing1986; nakagawa-oral-text-corpus  
Gap/novel: First English reference grammar to present genre-as-grammar as a feature matrix with corpus-genre quantification rather than a literary-studies inventory; isolates which features are grammatical signatures vs stylistic.  

**167. First-Person Narration, the Logophoric Fourth Person, and Reported Discourse** `logophoric-narration-and-reported-discourse`  
The grammaticalized narrator viewpoint in sung epic and the logophoric/reported-speech system as deployed across genres.  
Sections: First-person epic narration: the hero's/deity's 'I' and the autobiographical recitation mode of yukar and kamuy yukar; The fourth person (a=/=an) as logophoric narrator voice and its overlap with the honorific fourth person; Reported discourse in narrative: embedded dialogue, nested/stacked quotation, and person-shift under sekor framing; Logophoric speech is not indirect: the Nikitina-Bugaeva analysis and its consequences for the person paradigm  
Sources: sato2004; bugaeva2008; nikitina-bugaeva2021; nakagawa2024; refsing1986; bugaeva2022  
Gap/novel: Integrates the 'logophoric-is-not-indirect' analysis with corpus person-shift data and ties the fourth-person narrator device explicitly to genre; cross-refs Part IX (affix paradigm) and Part XVI (sekor complementation) without duplicating them.  

**168. The Sakehe Refrain and the Structure of Sung Verse** `sakehe-refrain-and-sung-verse-structure`  
The sakehe burden and the metrical/structural organization of sung genres treated as performance grammar.  
Sections: The sakehe (refrain/burden): formal types, placement, and genre-defining function in kamuy yukar and oina; Verse-line segmentation, the metrical unit, and syllable/mora counting in recitation; Melodic vs linguistic pitch in performance; line-initial and line-final framing formulae; Reciter structuring devices and performance technique as organizing grammar  
Sources: nakagawa2024; kindaichi1933; kindaichi1936; bugaeva2022; okuda2019  
Gap/novel: Cleanly separates the genre-structural refrain system (this chapter) from the linguistic-prosody meter/f0 analysis (Part IV); offers a corpus typology of sakehe forms and their distribution by genre.  

**169. Parallelism, Couplets, and Word-Pair Doublets** `parallelism-couplets-and-word-pairs`  
Syntactic-semantic parallelism, the verse couplet, and lexical doublets analyzed as structural rhetoric rather than mere style.  
Sections: Line-couplet parallelism and the two-line distich as the basic verse unit; Semantic word-pairs and doublets (synonym and antonym pairing) as a productive poetic device; Repetition, anaphora, and incremental repetition in narrative build-up; Parallelism as syntax: shared argument frames and ellipsis across paired lines  
Sources: nakagawa2024; kindaichi1933; bugaeva2022; chiri1942  
Gap/novel: Formalizes parallelism/couplet pairing as a grammatical (constraint-governed) phenomenon with a combined ethnopoetic-and-syntactic account, going beyond the literary descriptions in Kindaichi and Nakagawa.  

**170. The Elevated/Poetic Register: Archaic Morphology and Formulaic Diction** `poetic-archaic-elevated-register`  
The grammar and lexicon of the elevated (雅語) register — archaic forms, verse-restricted morphology, and fixed formulae.  
Sections: Everyday vs elevated (雅語) lexicon: paired registers and poetic synonym sets; Archaic and poetic morphology: affixes, stem shapes, and constructions restricted to verse; Formulaic expressions (常套表現) and fixed narrative phrases; Register selection conditioned by genre and by character/voice within a narrative  
Sources: nakagawa2024; kindaichi1933; chiri1942; bugaeva2022; tamura1996  
Gap/novel: First English consolidation of Nakagawa's 雅語/常套表現 treatment paired with an explicit inventory of archaic/poetic morphology, distinguishing genuinely grammatical archaisms from lexical poeticisms.  

**171. Honorific, Ritual, and Taboo Registers** `honorific-ritual-and-taboo-registers`  
Referent/addressee honorification, the language of prayer, and hunting/taboo avoidance speech as register-specific grammar.  
Sections: Referent and addressee honorification; the fourth-person honorific in respectful and ritual speech; The language of prayer (inonno-itak): deity vocatives, address forms, and ritual formulae; Hunting taboo-speech and avoidance/substitution vocabulary; Gender- and age-graded register in oral-literature performance (cross-ref Part XVIII)  
Sources: nakagawa2024; kitahara2012; kitahara2013; okuda2019; bugaeva2022  
Gap/novel: Brings ritual-prayer and taboo-avoidance registers into a reference grammar with a worked honorific-fourth-person tie-in; scoped to ritual/oral-literature register so as not to duplicate the general gendered sentence-final particles of Part XVIII.  

**172. Narrative TAM and Evidential Patterning by Genre** `narrative-tam-evidential-patterning-by-genre`  
Genre-quantified distribution of tense-aspect and the evidential clause-final system in connected narrative discourse.  
Sections: The folktale-default ruwe ne clause-final and the narrative evidential baseline; Tenseless/historical-present narration and aspectual sequencing in storyline vs backgrounded clauses; Evidential and final-particle distribution contrasted across genres (uwepeker vs yukar vs prayer); Negation and other clause-types in narrative discourse and their genre conditioning  
Sources: dalcorso2018; hirosawa2026; takahashi2013; nakagawa2024; sato2008; nurmi2024; nakagawa-oral-text-corpus  
Gap/novel: Provides corpus-quantified genre profiles of evidential and TAM clause-finals — frequency numbers across genres that no existing grammar supplies; applies (not re-derives) the TAM/evidential systems of Parts XII–XIII at the discourse level.  

## Part 20. Part XX — Diachrony, Reconstruction, and Dialectology

**173. Proto-Ainu Segmental Reconstruction and the Hokkaido Reflexes** `proto-ainu-segmental-reconstruction`  
Reconstruction of the Proto-Ainu consonant and vowel inventory, the correspondence sets linking it to the modern Hokkaido segments, and the principal reconstruction disputes.  
Sections: Consonant correspondences and Hokkaido reflexes; the status of medial clusters and the rhotic *r; Vowel reconstruction and Shiratori's proposed Proto-Ainu *ia behind the palatalized-consonant series; Relative chronology of sound changes and the layering of lexical strata; Evaluating Vovin (1993): comparative method, criticisms, and what is securely reconstructable  
Sources: vovin1993; shiratori2026; bugaeva2022; nakagawa2024; itabashi2001; dalcorso2024; fukazawa2025  
Gap/novel: Most English grammars omit reconstruction entirely; this chapter lays out explicit correspondence sets and integrates Shiratori 2026's *ia revision of the palatalization account, a 2026 advance no prior grammar reflects.  

**174. Proto-Ainu Accent Classes and Their Dialect Reflexes** `proto-ainu-accent-reconstruction`  
Reconstruction of the proto-accentual system and the split between accented and accentless Hokkaido dialects, with the Sakhalin length correspondence.  
Sections: The accented-vs-accentless Hokkaido dialect split and its implications for the proto-system; Reconstructing proto-accent classes; mora- vs syllable-based positing of the original contrast; The diachronic correspondence between Sakhalin vowel length and Hokkaido pitch-accent (Itabashi)  
Sources: itabashi2001; bugaeva2022; nakagawa2024; tamura1996; shibatani1990  
Gap/novel: Ties the synchronic prosody chapters (Part IV) to comparative reconstruction; accent-class reconstruction is treated in almost no existing grammar and never in English.  

**175. The Final-h Problem and Its Sakhalin Vowel-Length Reflex** `final-h-history-and-sakhalin-length-reflex`  
The diachrony of word-final and coda -h, the Hokkaido final-h controversy, and its systematic correspondence to phonemic vowel length in Sakhalin Ainu.  
Sections: The Hokkaido final-h controversy: phoneme, citation/affiliative artifact, or nothing; Coda-h diachrony and the internal evidence from the affiliative -hV suffix; The Sakhalin reflex: final-h to phonemic vowel length, the key dialect correspondence; Typological and orthographic consequences of the final-h analysis  
Sources: itabashi2001; dalcorso2024; bugaeva2022; sato2008; murasaki2025  
Gap/novel: Resolves the cross-reference between the Part III segmental final-h question and Sakhalin length in one place; foregrounds Itabashi's diachronic correspondence as the deciding external evidence.  

**176. Internal Reconstruction and Grammaticalization Pathways** `internal-reconstruction-and-grammaticalization-pathways`  
Internal reconstruction from synchronic morphophonemic alternations, together with the major grammaticalization clines that feed the modern grammar.  
Sections: Internal reconstruction from the affiliative -hV suffix and suppletive verb-number pairs; Formal nouns to evidentials: the ruwe/siri/hawe/humi ne nominalization-plus-copula cline; Verbs to auxiliaries/aspectuals and nouns to postpositions/relational nouns; Diachrony of valency morphology: the antipassive i-, anticausatives, and Sakhalin nominalization innovation  
Sources: bugaeva2022; bugaeva2016; bugaeva2025; nam2021; takahashi2018; dalcorso2018; sato2008; ochiai2023  
Gap/novel: Makes grammaticalization the explanatory backbone (the formal-noun-to-evidential story is the signature Ainu cline) rather than quarantining diachrony; folds in Nam 2021 (antipassive origin) and Bugaeva 2025 (anticausative diachrony) that no reference grammar yet incorporates.  

**177. Hokkaido Dialect Classification and Dialectometry** `hokkaido-dialect-classification-and-dialectometry`  
The internal dialect divisions of Hokkaido Ainu, the classification debate, and the new statistical/dialectometric reanalyses.  
Sections: The traditional Eastern/Western division and Asai (1974)'s 'major division'; Statistical and dialectometric reanalyses (Ono 2020; Fukasawa & Ono 2024; Kasuga 2026's 75-locality study); The named dialects (Saru, Chitose, Horobetsu, Asahikawa, Shizunai, Tokachi, Kushiro, Soya) and their primary sources; Classification disputes, isogloss bundling, and data unevenness across the island  
Sources: ono2020; fukasawa-ono2024; kasuga2026; asai1974; bugaeva2022; nakagawa2024  
Gap/novel: First English-language synthesis of the post-2020 dialectometric turn (Ono, Fukasawa-Ono, Kasuga), which overturns the classic Asai bipartition; provides a unified comparative-dialect apparatus none of the existing grammars offers.  

**178. Phonological Microvariation Across Hokkaido Dialects** `hokkaido-phonological-microvariation`  
Inter-dialectal variation in segments and prosody within Hokkaido: the s~š alternation, coda treatment, and accent-class membership.  
Sections: The s~š (sisam/sisam) alternation and its dialect conditioning; Coda and cluster treatment; final-segment realization differences; Accented vs accentless dialect classes and their geographic distribution; Vowel-quality and lenition microvariation, mapped to the comparative lexical record  
Sources: fukazawa2025; bugaeva2022; nakagawa2024; tamura1996; sato2008  
Gap/novel: Pulls scattered phonological isoglosses into a single chapter keyed to Fukazawa 2025's multi-dialect Chiri vocabulary dataset; no English grammar maps Hokkaido-internal phonological variation at this granularity.  

**179. Morphosyntactic Microvariation Across Hokkaido Dialects** `hokkaido-morphosyntactic-microvariation`  
Dialect-internal variation in inflectional and constructional morphosyntax: personal-affix forms, third-plural marking, plural strategies, and evidential inventories.  
Sections: Personal-affix microvariation (Saru vs Chitose vs Shizunai vs Tokachi vs Horobetsu paradigms); Third-plural -hci and the distribution of plural-marking strategies; Dialect differences in the evidential and aspectual inventory; Causative-suffix and valency-construction variation; the Shiranuka and Mukawa profiles  
Sources: refsing1986; sato2008; takahashi2015; takahashi2017; kobayashi2014; tamura-masashi2011; baek2021; bugaeva2022; nakagawa2024  
Gap/novel: Synthesizes the dialect-specific descriptive literature (Refsing/Shizunai, Sato/Chitose, Takahashi/Tokachi-Horobetsu, Kobayashi/Mukawa, Tamura Masashi/Shiranuka) into one comparative morphosyntactic survey; an inline microvariation apparatus existing grammars lack.  

**180. Lexical Dialectology and the Dialect Atlas** `hokkaido-lexical-dialectology-and-the-dialect-atlas`  
Lexical microvariation across Hokkaido, the comparative dictionaries and Swadesh-style datasets, and the dialect atlas underpinning classification.  
Sections: Lexical isoglosses and basic-vocabulary differentiation across dialects; The comparative apparatus: Hattori (1964) dialect dictionary and Chiri's basic-vocabulary survey table (Fukazawa 2025); Semantic-field variation (animal/plant names, kinship, toponymic vocabulary); How lexical data feed dialectometric classification (cross-reference)  
Sources: fukazawa2025; hattori1964; chiri1959; fukasawa-ono2024; asai1974; bugaeva2022  
Gap/novel: Exploits Fukazawa 2025's structured TSV of Chiri Mashiho's 200-item survey across Yakumo/Oshamanbe/Horobetsu as primary data; presents the first English lexical-dialectology overview tied to a machine-readable comparative dataset.  

**181. Sakhalin and Kuril Ainu: The External Comparison** `sakhalin-and-kuril-ainu-contrast`  
Systematic contrast of Hokkaido with Sakhalin (Enciw) Ainu and the fragmentary Kuril record, framing the dialect-vs-language question.  
Sections: Sakhalin phonology: phonemic vowel length, the final-h to length reflex, and h-prosody; Sakhalin morphosyntax: distinct affixes, the nominative-neutral-inverse alignment, and nominalization innovation; The Kuril (Shumshu/northern) fragmentary record and what can be reconstructed; Hokkaido vs Sakhalin vs Kuril: comparative synopsis and the dialect-vs-language debate  
Sources: murasaki2025; chiri1942; pilsudski1912; dalcorso2024; dalcorso2025; dalcorso2021; sakaguchi2024; bugaeva2016; bugaeva2022  
Gap/novel: Brings Dal Corso's 2024/2025 Sakhalin phonology and alignment work and Sakaguchi's 2024 person/number dissertation into a single contrast chapter; the integrated Hokkaido-Sakhalin-Kuril synopsis at this depth exists in no current English grammar.  

## Part 21. Part XXI — Language Contact and the Lexicon

**182. Japanese Loanwords in Ainu: Strata, Cultural Vocabulary, and Numerals** `japanese-loanwords-in-ainu`  
Lexical borrowing from Japanese into Ainu — its chronological strata, the trade/cultural/ritual vocabulary borrowed, and contact effects on counting.  
Sections: Chronological strata: early/medieval contact vs Edo-period trade (akinai, the basho system) vs Meiji-and-later modern loans; Semantic domains of borrowing: trade goods, metals/tools, rice-and-sake/agriculture, administration, and religious vocabulary; Numeral and decimal-counting borrowing layered over the inherited vigesimal base (cross-ref Part VIII numerals); Etymological method and a worked case study (sikerpe and Japanese-loan reflexes); Degrees of lexicalization and the boundary between loan, calque, and inheritance  
Sources: nakagawa2024; sato2008; bugaeva2022; ochiai2026; ochiai2021; ochiai2023; refsing1986; tamura1996  
Gap/novel: First English treatment that dates and stratifies the Japanese-loan layer against a borrowing scale and quantifies its share of the lexicon by semantic field, rather than listing loans unsystematically.  

**183. Loanword Phonological Adaptation** `loanword-phonological-adaptation`  
How Japanese (and other) loanwords are nativized to Ainu syllable structure and prosody — coda/cluster repair, segment mapping, and accent assignment.  
Sections: Repair of illicit codas and clusters: vowel epenthesis and echo vowels (cross-ref Part III coda phonotactics); Vowel mapping (Japanese five-vowel → Ainu) and consonant substitution (voiced→voiceless, z/d/g adaptations); Pitch-accent assignment to loanwords (cross-ref the accent system); Morphological integration: verbalization, gender/possession-class assignment, and reanalysis; Adaptation patterns as a relative-chronology diagnostic for loan strata  
Sources: nakagawa2024; sato2008; bugaeva2022; tamura1996; ochiai2026  
Gap/novel: Formalizes loan adaptation as live evidence for the synchronic phonotactic grammar and as a dating diagnostic — a systematic treatment absent from prior reference grammars.  

**184. Ainu Loanwords and Toponymy in Japanese** `ainu-loanwords-and-toponymy-in-japanese`  
Ainu's imprint on Japanese — animal/fish/plant loanwords in standard and northern-dialect Japanese, and the Ainu (substrate) toponymy of Hokkaido and northern Honshu.  
Sections: Ainu loans in standard Japanese (rakko, tonakai, shishamo, etc.) and in Tōhoku/Hokkaido dialects; The morphology of Ainu place-names: nay 'stream', pet 'river', nupuri 'mountain', and the -us(i)/o-/-un/-ot formatives; Distribution: dense Hokkaido toponymy vs the northern-Honshu substrate gradient; The substrate-toponym debate: depth, dating, and the extent of pre-Japanese Ainu(-like) settlement; Methodological cautions: folk etymology, re-Japanization, and secure vs speculative attributions  
Sources: nakagawa2024; bugaeva2022; chiri1959; yamaguchi2006; ochiai2026; chiri1956; batchelor1905  
Gap/novel: Brings toponymic and Ainu→Japanese loan evidence into the grammar proper with explicit etymological criteria, separating secure attributions from the long tail of speculative place-name etymologies.  

**185. Northern Contact: Nivkh, Tungusic, and Manchu** `northern-contact-nivkh-tungusic-manchu`  
The Sakhalin/Amur contact zone — Nivkh and Tungusic (Uilta/Orok, Nanai)/Manchu lexical and structural contact, with Sakhalin Ainu as the principal locus.  
Sections: Nivkh (Gilyak)–Ainu contact on Sakhalin: lexical loans and candidate structural effects; Tungusic (Uilta/Orok, Nanai) and Manchu trade-route loans (cultural and commercial vocabulary); Areal convergence in person and number marking across the lower-Amur/Sakhalin Sprachbund; Sakhalin-Ainu innovations attributable to contact vs inheritance (cross-ref Part XX diachrony); The evidence base and its limits (Piłsudski's corpus, post-war records)  
Sources: bugaeva2022; murasaki2025; pilsudski1912; baek2021; tangiku1998; bugaeva2016; sakaguchi2024  
Gap/novel: Consolidates the scattered Sakhalin-contact literature into a single areal account framed by the lower-Amur Sprachbund, distinguishing contact-induced Sakhalin features from inherited ones.  

**186. Macro-Comparison and Deep-Contact Controversies** `macro-comparison-and-deep-contact-controversies`  
A critical, method-driven survey of proposed external genetic relationships and deep-contact scenarios for Ainu, framed by borrowing-scale and areal typology.  
Sections: Ainu as a genetic isolate: the default position and its evidential basis (cross-ref Part I); Japonic–Ainu proposals: shared morphology vs a contact/areal account; 'Altaic', Nostratic, and other long-range proposals and their reception; Vovin's Austronesian-contact and substrate hypotheses, clearly flagged as speculative; The Thomason–Kaufman borrowing scale and the inheritance/contact/chance triage; Areal-typological placement of Ainu in Northeast Asia  
Sources: vovin1993; shibatani1990; bugaeva2022; nakagawa2024; sato2008; patrie1982  
Gap/novel: Applies an explicit borrowing-scale and areal-typology framework to adjudicate (and largely set aside) macro-comparison claims, replacing assertion-driven survey with reproducible method.  

**187. Synopsis of Lexical-Semantic Fields** `lexical-semantic-fields-synopsis`  
A field-by-field synopsis of the Ainu lexicon — its semantic organization, the classified-dictionary tradition, and culturally salient vocabulary domains.  
Sections: Organizing the lexicon: Chiri's classified dictionary and basic-vocabulary semantics; Natural environment: fauna, flora, landscape, and weather terms; Person-centred fields: body parts, kinship, and social/ritual vocabulary; Colour, dimension, and property concepts (cross-ref the 'no adjective class' thesis); Sound-symbolic, ritual, and poetic lexical strata (cross-ref ideophones and oral literature); Lexical typology and culture-specific vocabulary (kamuy, ramat) with corpus frequency  
Sources: chiri1959; sato1996; sato1997; yamaguchi2006; nakagawa2024; bugaeva2022; chiri1953  
Gap/novel: First English semantic-field synopsis keyed to Chiri's classified-dictionary categories and quantified against corpus frequency, explicitly bridging lexicon and grammar (property words, classifiers, evidential nouns).  

## Part 22. Part XXII — Glossed Texts

**188. A Glossed Uwepeker (Prose Folktale)** `uwepeker-prose-tale`  
A complete uwepeker prose folktale presented in four-tier interlinear gloss with running grammatical commentary cross-referenced clause-by-clause to the analytic chapters.  
Sections: The text and its source: speaker, dialect, recording, and edition provenance (Shirasawa Nabe / Nakagawa text collection); Four-tier interlinearization (phonemic line, morpheme parse, Leipzig-style gloss, free translation) and the cross-reference key tying each line to its grammar chapter; Running commentary on prose-narrative syntax: hine/akusu clause-chaining, wa-sequencing, tail-head linkage, and quotative sekor framing; Narrative TAM and information packaging: the folktale-default ruwe ne clause-finals, kor an / -a aspect, 4th-person narration, and argument ellipsis  
Sources: nakagawa2024; bugaeva2022; otani_prose_tales; sato2008; tamura1996; refsing1986  
Gap/novel: First English fully-glossed uwepeker with per-clause cross-references into the analytic chapters; quantifies the prose-narrative default ruwe ne and hine/akusu distribution against the corpus rather than presenting the text as an unannotated appendix.  

**189. Glossed Verse: A Yukar Heroic Epic and a Kamuy Yukar God-Song** `heroic-and-divine-verse`  
Two glossed verse texts — a yukar heroic-epic passage and a kamuy yukar divine self-narration with sakehe refrain — set side by side with comparative commentary on meter, refrain, and the first-person/logophoric narrator.  
Sections: The yukar passage: source and metrical lineation; the human hero's first-person (4th-person logophoric) narration and archaic epic lexicon; The kamuy yukar passage: source; the sakehe burden/refrain and its placement; the god as first-person narrator; Verse-specific grammar: poetic/archaic morphology, lexical doublets, parallelism and couplet structure; Comparative commentary: prosody and narrator-person across the two sung genres, cross-referenced to the oral-literature, person-affix, and evidentiality chapters  
Sources: nakagawa2024; kindaichi1933; bugaeva2008; sato2004; fujita_kannarimatsu; sato2009; sato2010; bugaeva2022  
Gap/novel: Side-by-side glossed yukar vs kamuy yukar making the narrator-person and refrain contrast explicit, tying the logophoric 4th person and the sakehe to verse register — a comparison no existing English grammar lays out in interlinear form.  

**190. A Glossed Inonno-itak (Ritual Prayer)** `inonno-itak-ritual-prayer`  
A ritual prayer (inonno-itak) text glossed and annotated, showcasing the elevated/honorific register, formulaic parallelism, and direct benedictive address to the kamuy.  
Sections: The prayer text and source: ceremony context and edition (Kitahara ritual-prayer editions); Interlinear gloss and free translation with notes on fixed openings and closings; Ritual-register grammar: honorific 4th person, elevated/ceremonial lexicon, and optative/hortative–benedictive modality; Formulaic structure: parallelism and couplets cross-referenced to the register, modality, and minor-class chapters  
Sources: kitahara2012; kitahara2013; okuda2019; nakagawa2024; bugaeva2022; sato2008  
Gap/novel: A genre rarely glossed in English; documents the prayer register's honorific-person and optative/benedictive profile with explicit chapter cross-references, integrating ritual language into the reference grammar rather than leaving it to ethnography.  

**191. A Glossed Everyday-Conversation Text** `everyday-conversation-text`  
A passage of recorded everyday conversation glossed and annotated to illustrate spontaneous spoken syntax, sentence-final particles, and connected-speech reduction.  
Sections: The conversation and its source: speakers, dialect, and recording (Kayano / Akor Itak / recorded dialogue); Interlinear gloss with turn structure and free translation; Conversational grammar: sentence-final particles and illocutionary force, interrogative strategies, and gendered/register speech; Spoken-language features: pervasive pro-drop/argument ellipsis, fast-speech sandhi, response words and interjections  
Sources: kayano1987; utari1994; tamura1996; tamura1961; nakagawa2024; bugaeva2022  
Gap/novel: Fills the standard reference-grammar gap of conversational glossed data, cross-referencing the sentence-final-particle, argument-ellipsis, and connected-speech-sandhi chapters and contrasting spontaneous register with the literary genres.  

**192. A Glossed Sakhalin (Enciw) Text with Hokkaido Contrast** `sakhalin-contrast-text`  
A Sakhalin Ainu text glossed and annotated against Hokkaido norms, foregrounding phonemic vowel length, the final-h reflex, and divergent person, number, and negation morphology.  
Sections: The Sakhalin text and source: dialect, recording, and edition (Piłsudski / Sakaguchi / Murasaki); Interlinear gloss and free translation; Sakhalin-specific phonology: phonemic vowel length, final-h → length, and prosodic contrast with Hokkaido; Morphosyntactic contrasts: person/number marking, analytic negation, and nominalization, each cross-referenced to the dialectology and diachrony chapters  
Sources: pilsudski1912; murasaki2025; sakaguchi2024; chiri1942; dalcorso2024; dalcorso2025; bugaeva2022  
Gap/novel: A glossed Sakhalin text embedded in a Hokkaido reference grammar as a systematic contrast set keyed to the dialectology and reconstruction chapters — a comparative apparatus not offered by any existing English grammar.  

## Part 23. Part XXIII — Reference Apparatus (Back Matter)

**193. Glossary of Grammatical Terms** `glossary-grammatical-terms`  
An alphabetical, validated glossary of the grammatical terminology used throughout the grammar, with trilingual equivalents and cross-references to the chapters that define each term.  
Sections: Alphabetical entries: English term, definition, Japanese and native-tradition equivalent, and chapter cross-reference; Ainu-specific terms validated and disambiguated: affiliative/possessed form (所属形) vs concept form, formal/defective noun, fourth person/indefinite, pluractional, applicative; Reconciliation of competing terminologies across the Kindaichi–Chiri, Tamura/Sato, and Bugaeva/typological traditions; Cross-linking each entry to its defining chapter and to the controlled Itak-uoeroskip terminology database  
Sources: bugaeva2022; sato2008; nakagawa2024; tamura1996; refsing1986; shibatani1990; kindaichi1936; chiri1942  
Gap/novel: Entries are validated against and cross-linked to the project's controlled Ainu grammatical-terminology database (itak.aynu.org), yielding a trilingual (English/Japanese/Ainu) term concordance that resolves the terminological mismatches between traditions — present in no single existing grammar.  

**194. Abbreviations and Glossing-Symbol Conventions** `abbreviations-glossing-symbols`  
The tables of interlinear-gloss abbreviations, morpheme-boundary symbols, and notation conventions used in the grammar, with a concordance reconciling divergent conventions across the source literature.  
Sections: Leipzig Glossing Rules base set as used throughout, plus the morpheme-boundary symbols (- affix, = clitic, . portmanteau); Ainu-specific gloss extensions: 4/IND fourth person, LOG logophoric, AFF affiliative, PLU/pluractional, applicative and detransitive labels; Notation conventions: reconstruction asterisk, ungrammaticality mark, dialect tags, citation-locus format; Cross-source glossing concordance mapping incompatible abbreviations used by the English (Bugaeva, Refsing) vs Japanese (Sato, Nakagawa) and Sakhalin (Dal Corso) traditions  
Sources: bugaeva2022; refsing1986; tamura1996; sato2008; shibatani1990; nakagawa2024  
Gap/novel: Provides a cross-source glossing concordance that explicitly reconciles the incompatible abbreviation sets of the English and Japanese descriptive traditions, so that examples drawn from heterogeneous sources can be read under one normalized convention.  

**195. Consolidated References and Bibliography** `consolidated-references-bibliography`  
The unified, type-classified bibliography of all grammars, articles, text editions, and dictionaries consulted, with a critical apparatus flagging key works not directly available.  
Sections: Unified alphabetical reference list with a romanization and citation-key system for Japanese-language sources; Type-classified sub-listings: reference grammars, theoretical/analytic articles, oral-literature text editions, dictionaries, and computational/NLP works; Critical apparatus: annotated gap list flagging foundational must-cite works not consulted directly (Tamura 2000, Dal Corso 2021, Murasaki 1979, Hattori 1964, Batchelor); Sakhalin and Edo-period philological sources segregated for the diachronic and contrast chapters  
Sources: nakagawa2024; sato2008; bugaeva2022; refsing1986; shibatani1990; tamura1996; chiri1942; kindaichi1936; pilsudski1912; murasaki2025; ijas2023  
Gap/novel: Integrates the full ~218-article plus 15-book corpus, including OCR-recovered Japanese sources and the Sakhalin-contrast literature, and supplies an annotated gap list of high-priority works that exist but were unavailable — a transparency apparatus absent from prior grammars.  

**196. Index of Subjects** `index-of-subjects`  
An alphabetical topic and concept index keyed to chapter and section, with a parallel typological-feature sub-index for cross-linguistic look-up.  
Sections: Alphabetical subject/concept index keyed to chapter and section numbers, with see/see-also cross-references; Typological-feature sub-index keyed to canonical-typology and WALS-style parameters (alignment, head-marking, polysynthesis, number); Index of named controversies and debates (final-h, alignment value of the indefinite, syntactic vs lexicalist incorporation, mora vs syllable accent); Cross-references binding subject entries to the glossary and the morpheme index  
Sources: bugaeva2022; shibatani1990; nakagawa2024; sato2008  
Gap/novel: Adds a parallel typological-feature index keyed to canonical-typology parameters, enabling a typologist to enter the grammar by cross-linguistic feature rather than by Ainu-internal term — not available in existing Ainu grammars.  

**197. Index of Grammatical Morphemes and Affixes** `index-of-grammatical-morphemes`  
An exhaustive finding list of every bound morpheme, clitic, and grammatical particle, organized by form with gloss, class, dialect variants, and section reference, doubling as a reverse-lookup grammar dictionary.  
Sections: Form-keyed finding list of affixes, clitics, and particles (e-, ko-, o-, i-, yay-, si-, u-, -re/-e/-te, -pa, =an, =as, eci=, ruwe, hawe, siri, humi, somo, sekor, hine, akusu); Each entry tagged with gloss, word-class/position, and the chapter that treats it; Allomorph and variant grouping, with Saru/Chitose/Shizunai/Tokachi/Sakhalin dialect variants noted; Reverse index by grammatical function (category → exponent) for onomasiological look-up  
Sources: nakagawa2024; sato2008; bugaeva2022; tamura1996; refsing1986  
Gap/novel: A corpus-validated, exhaustive morpheme finding list carrying attested-frequency and dialect-variant tags; functions as a reverse-lookup grammatical-morpheme dictionary, a tool no current Ainu reference grammar provides.  

**198. Index of Cited Examples, Source Texts, and Dialects** `index-of-examples-sources-dialects`  
A citation index of every quoted example by source edition and locus, organized further by genre, narrator/transcriber, and dialect, cross-referenced to the glossed-texts corpus.  
Sections: Index of every cited example by source edition and page/line locus; Source-text index by genre (uwepeker, yukar, kamuy yukar, oina, inonno-itak, recorded conversation) and by narrator/transcriber; Dialect index (Saru, Chitose, Shizunai, Tokachi, Horobetsu, Mukawa, Shiranuka, Samani, Sakhalin/Enciw); Cross-reference table linking each example to the glossed-texts corpus (Part XXII) and to its bibliography entry  
Sources: nakagawa2024; kayano1987; utari1994; pilsudski1912; murasaki2025; refsing1986; sato2008  
Gap/novel: Every example is tagged by dialect and genre, permitting dialect- and genre-filtered retrieval, and consolidates the dispersed text-edition corpus (Nakagawa's 24-volume テキスト集, Otani, Fujita, and Sakaguchi's Sakhalin editions) into a single citable apparatus.  

---

### Coherence review (to apply during authoring)

Verified Batchelor and the core grammars exist in the project source DB (so they are attachable); the targeted-name searches (Patrie, Dal Corso, Asai) returned nothing, but the DB's keyword search is weak so I treat those as "confirm availability" items rather than confirmed absences. Findings below.

---

**(a) GAPS — phenomena deserving a chapter but missing**

- **Noun-phrase internal structure / adnominal modifier ordering** has no home. Demonstratives (57), numerals/quantifier-float (64), relatives (142), possession (50) are all separate, but nothing consolidates NP constituent order (Dem–Num–RelCl–N), apposition, and NP-internal coordination. Add an "Internal Structure of the Noun Phrase" chapter (logically in Part VIII or opening Part XVI).
- **Participant reference / zero-anaphora tracking in discourse** is split across 57 (anaphora), 138 (pro-drop), 155 (tail-head), 167 (logophoric) but never treated as a system. Part XIX should have a dedicated reference-tracking chapter (switch-reference-like linkage in 150 presupposes it).
- **Mood/modality overview** is absent: Part XII jumps straight into tenselessness (105) with no architecture chapter, unlike Parts IX (65), XIII (118), XVII (148) which each open with an overview. Add a TAM-system overview to open Part XII.
- **Valency/voice overview**: Part XI opens on the causative (88) with only an *applicative*-scoped overview at 92. Add a short "valency-changing operations: inventory and interactions" opener so causatives/applicatives/reflexive/reciprocal/NI are framed together.
- **Contact-induced structural change / calquing in modern & neo-Ainu**: Part XXI (182–186) covers lexical/phonological borrowing and macro-comparison but no grammatical (syntactic/constructional) Japanese contact effects, despite ch4 raising neo-Ainu. Worth a chapter or explicit section.
- **The verb kar 'make/do'** as a productive denominal verbalizer / light verb is only implicit in 81–82; given its frequency it deserves explicit treatment (at minimum a named section in 82).

**(b) OVERLAPS / DUPLICATES to merge or re-scope**

- **52 (affiliative relational-locative nouns) vs 60 (relational & spatial nouns)** both inventory or/ka/corpok/sam, the first-/second-class locative split, and "or as emergent locative." Collapse the inventory into 60; restrict 52 strictly to possessive morphophonology.
- **34 (echo vowels & affiliative vowel-copy) vs 49 (affiliative-suffix morphophonology)** both describe the -aha/-ihi/-uhu vowel-copy paradigm. Merge or hard-split (34 = phonetic mechanism only; 49 = class membership/paradigm).
- **51 (alienable possession kor) vs 132 (predicative possession clauses)** both cover kor 'have' + isam negation. Re-scope 51 to the noun-level affiliative/kor choice; let 132 own clausal predicative possession.
- **39 (no-adjective thesis) vs 133 (property-concept predication)** substantially duplicate "property concepts as stative verbs." Keep 39 = word-class status, 133 = predication typology, and trim the shared diagnostic battery.
- **74 (hero's 'I' logophoric narration) vs 167 (logophoric 4th person & reported discourse)** are near-identical (same sources sato2004/bugaeva2008/nikitina-bugaeva2021). Merge, or make 74 = the affix-paradigm fact and 167 = the discourse deployment, with no re-statement of the "logophoric-is-not-indirect" analysis in both.
- **123 (evidential interrogative/confirmational) vs 161 (interrogative strategies & question particles)** both integrate the ruwe un?/hawe ya? paradigm. De-duplicate: 123 owns the evidential flip, 161 references it.
- **59 (indefinite & NPI pronouns) vs 128 (NPI indefinites & scope)** overlap on the ka-indefinite series under negation. Keep 59 = formation/semantic map, 128 = licensing/scope only.
- **30 (verse meter + proto-accent)** duplicates **168 (sakehe & sung verse)** and **174 (proto-accent reconstruction)**. As a Part IV "bridge" it pre-empts both; either cut it to a forward-pointer or move its content wholesale into 168/174.
- **6 (history of description) vs 7 (written sources)** both walk through Kindaichi/Chiri→Refsing→Tamura→Sato→Bugaeva→Nakagawa. Keep 6 = periodized historiography, 7 = source-criticism/reliability audit, and stop re-listing the same grammars in both.
- **5 (genetic position/isolate) vs 186 (macro-comparison)** overlap on isolate status + Vovin. Acceptable as survey vs method, but tighten so 5 is a pointer and 186 does the adjudication.
- **24's "Loanword Adaptation" section vs 183 (Loanword Phonological Adaptation)** — same content in two places; drop it from 24 (keep only the cross-ref).

**(c) ORDERING PROBLEMS**

- **Part XV is mis-ordered**: nonverbal predication (130–134) precedes the basic clause foundation (135 constituent order, 136 argument realization). Put 135–136 *first* in the part, then build copular/existential/possessive/property predication on top.
- **Part III**: the syllable template (23) and coda phonotactics (24) come *after* glides/hiatus/diphthong analysis (21–22), which depend on syllable/coda structure. Move the (C)V(C) template before the hiatus and coda-glide-vs-diphthong chapters.
- **Part VI**: the no-adjective/property-verb chapter (39) sits between the word-class inventory (38) and nominal subclasses (40–41), ahead of verbal subclasses (42), even though it is a verbal-subclass argument. Place 39 adjacent to 42.

**(d) GRANULARITY INCONSISTENCIES**

- **The indefinite/4th person is split into four chapters (71 forms, 72 impersonal-passive, 73 honorific, 74 logophoric)** — heavier granularity than, e.g., the entire vowel system (16) or the whole imperative+prohibitive (112). Consider consolidating 73+74 (honorific/logophoric uses) into one.
- **24 bundles four distinct topics** (coda inventory, clusters, word-edge constraints, loanword adaptation) in one chapter, while comparable phonological domains each get standalone chapters (17–22) and loanword adaptation *recurs* at 183 — uneven splitting.
- **Overview-chapter pattern is applied inconsistently**: present for the affix system (65), evidentiality (118), clause linkage (148), applicatives (92), but absent for TAM (Part XII) and valency/voice as a whole (Part XI) and nominalization (Part XVI). Standardize.
- **189 bundles two glossed texts (yukar + kamuy yukar)** while every other Part XXII genre gets its own chapter — minor, but flag against the one-text-per-chapter pattern.

**(e) SLUG / NUMBERING ISSUES**

- **Double "Part" labeling**: every part header reads "Part N. Part I — …" (assembler index + roman numeral). Collapse to one scheme.
- Chapter numbering 1–198 is continuous with no gaps across all 23 parts (verified at every part boundary) — OK.
- **Citation-key style is not normalized.** Two patterns coexist: bare `authorYEAR` and `authorYEAR-descriptive-suffix`. The *same* works appear under both, e.g. `dalcorso2018` vs `dalcorso2018-evidentiality`; `hirosawa2026` vs `hirosawa2026-ruwe-ne`; `sato2021` vs `sato2021-relational-noun-or`; `bugaeva2021` vs `bugaeva2021-appositive-possession`; `huber2025` vs `huber2025-possession-subjectivity`; `sato2025` vs `sato2025-basic-sentence-structures`; `sato2023` vs `sato2023-ditransitives`; `takahashi2016` vs `takahashi2016-negation`; `dalcorso2025` vs `dalcorso2025-negation`; `shibatani1988` vs `shibatani1988-polysynthesis`; `kobayashi2020` vs `kobayashi2020-space-place-valency`; `sato2008` vs `sato2008_compounds`. Pick one form.
- **Same source, two keys**: `nikitina_bugaeva2021` (ch74) vs `nikitina-bugaeva2021` (145, 167); `kindaichi1936` vs `kindaichi_chiri1936` (65, 73); `fukazawa2017` (ch6) vs `fukasawa2017` (ch7) — and the Fukazawa/Fukasawa romanization wobbles again at `fukazawa2025` vs `fukasawa-ono2024` (177). Normalize the romanization and the joint-author keys.
- **Text-edition "keys" break the authorYEAR convention**: `otani_prose_tales` (188) vs `otani_texts` (155) for the same Otani series; `fujita_kannarimatsu`, `nakagawa-oral-text-corpus`, `senuma-aizawa`, and `yasuoka` carry no year and mix snake_case/kebab. Assign proper dated keys.

**(f) MUST-CITE SOURCES NOT ATTACHED**

- **Batchelor** is confirmed present in the project DB (the 1905/2018 Ainu-English-Japanese Dictionary incl. grammar, and the Chamberlain–Batchelor grammar) but is attached *only* to ch184. It is discussed in prose at ch6 (history), ch11 (romanization variants), and ch15 (the "voiced-stop" notation) without a key in those Sources lines — attach it there.
- **Patrie 1982** (Ainu genetic-relationship monograph) is cited only at ch186; the genetic-position chapter (ch5) discusses exactly this material but omits the key. Attach to ch5.
- **Asai 1974** (dialect "major division") is named in prose at ch9 ("Asai reanalysis") but keyed only at 177/180. Attach `asai1974` to ch9.
- **Hattori 1964** dialect dictionary is named in prose at ch7 and ch9 but keyed only at 180/195. Attach there.
- **Internal contradiction on availability**: ch7 lists **Dal Corso 2021** and **Bugaeva 2004 (Chitose)** as "cited-but-absent," yet `dalcorso2021` is attached as a working source at ch125 and ch181 (and Bugaeva's Chitose material is covered via `bugaeva2012`). Reconcile the gap-list with what is actually cited.
- The DB slug scheme (`2008-sato`, `1942-chiri`, `2018-john-batchelor-…`) does not match the outline's `authorYEAR` keys; before final assembly, add an explicit key→DB-slug crosswalk so every attached key resolves (the consolidated-bibliography chapter 195 is the place to enforce this).

---

## 4. Source Apparatus and Bibliography Strategy

The mandate — "cite every Ainu material ever" — is operationalized through three layers: an **ingest inventory**, a **canonical bibliographic store**, and a **generated runtime module** with build-time validation.

### 4.1 The corpus of sources

- **15 book-length sources** under `ainu-grammar/books/` (Piłsudski 1912 → Murasaki 2025), all OCR'd to a usable `all.txt`. The Hokkaido backbone: **Nakagawa 2024** (the 2×-exceed benchmark; full `all.txt` + clean TOC + partial Typst transcription), **Sato 2008** (top-tier modern JP reference grammar), **Bugaeva 2022 Handbook** (the single most important English source; full `pandoc.txt`), **Refsing 1986** (the only book-length English descriptive grammar in the repo; Shizunai), **Shibatani 1990** (authoritative English sketch).
- **~218 articles** + 2 presentations in `inventory.jsonl` (235 items total, 1912–2026). Of these, ~95 are analytic linguistics, ~85 are oral-literature text editions (the discourse/register example corpus, cited for data not analysis), ~30 are computational/NLP (a corpus-method appendix track, not core grammar). The article domain map (phonology, person/alignment, valency, incorporation, TAM, evidentiality, negation, nominalization, relativization, possession, numerals, dialectology, historical, philology, sociolinguistics) seeds each chapter's `Sources:` line.
- **Key works NOT physically held but must be cited:** Tamura 2000 *The Ainu Language* (the standard English Saru grammar — highest-priority gap; only the JP 1997 version is held), Tamura 1996 Saru dictionary, **Bugaeva 2004** Chitose grammar, Dal Corso 2021 West Sakhalin, Murasaki 1979, **Chiri 1953–62 分類アイヌ語辞典**, Hattori 1964, Nakagawa 1995 / Kayano 1996 dictionaries, Batchelor, Dettmer 1989–97. These get bibliography keys flagged `reported` / not-held.

### 4.2 The bibliographic backbone — `ainu-sources` → db.aynu.org

The Ainu Textual Sources Database is the canonical place to cite every Ainu material. Each citation key maps **1:1 to a stable db.aynu.org slug** (e.g. `1875-dobrotvorsky-ainu-russian-dictionary`). Per-source machine-readable citation endpoints exist (`/sources/<slug>/cite.bib`, `/cite.json`); it is seeded from the sibling repos including `ainu-grammar/{books,articles}` (the descriptive-literature records where the grammar's own citations resolve). Programmatic access via MCP `sources_search` → `source_get`. **Caveat:** the seed is destructive/idempotent — treat db.aynu.org as the live canonical store, not the seed script; redistribution rights are per-source.

### 4.3 The generation pipeline (canonical CSL-JSON → typed module)

```
ainu-sources (db.aynu.org)                 ainu-grammar/inventory.jsonl (235 records)
   │  /sources/<slug>/cite.json                   │  descriptive-literature keys
   │  + MCP sources_search / source_get            │
   ▼                                                ▼
scripts/sync-bibliography.ts ──────────►  data/sources.csl.json   (CSL-JSON, canonical, committed)
                                                     │  keyed by db.aynu.org slug
                                                     ▼
                                  scripts/gen-bibliography.ts
                                                     ▼
                          src/lib/grammar/bibliography.generated.ts  (Record<key, BibEntry>)
                                                     ▼
                          <Ref>/<Ex cite> compile-time key validation + references page
```

80 hand-typed entries already fill 945 lines in the reference; ~300 would be ~3,500 error-prone lines. The decision: **keep the runtime `Record<key, BibEntry>` shape and the grouped hanging-indent references page** (they give compile-time key validation + grouping), but **generate the module** from a committed CSL-JSON single source of truth synced off db.aynu.org. CSL-JSON buys dedup, consistent `citeAuthor`/`year`, and a path to a real citation style later.

### 4.4 The bibliography schema (`BibEntry`, lifted + extended)

```ts
export interface BibEntry {
  author: string; citeAuthor: string; year: string;
  title: string; titleTr?: string; container?: string; editor?: string;
  pages?: string; publisher?: string; place?: string; url?: string; lang?: string; note?: string;
  region: 'hokkaido' | 'sakhalin' | 'kuril' | 'proto' | 'general';   // Hokkaido is now core
  topic?: 'dialectology' | 'phonology' | 'morphosyntax' | 'history' | 'lexicography' | …;
  slug?: string;       // db.aynu.org canonical id
  reported?: boolean;  // cited second-hand / not held
}
```

The `region` taxonomy is **inverted from the Sakhalin sketch** (Hokkaido is now core, not the contrast bucket), and a `topic` facet is added for a Hokkaido-centric ~300-entry list.

### 4.5 Citation conventions and discipline

- **In-text:** `<Ref k="nakagawa2024" p="§12.1"/>` → `Nakagawa (2024: §12.1)`, linked to `/grammar/references#nakagawa2024`. Each chapter auto-generates a "References cited in this chapter" list from the reactive `cited` set; a consolidated references page groups by region and sorts by author+year.
- **Cite the original work, never the aggregator.** `cite`/`k` keys may never be "ainu-corpora" or "ainu-dictionaries"; corpus examples are attributed to the underlying source via the sentence `uri`/author → its db.aynu.org corpus-collection slug, and dictionary glosses cite the underlying dictionary (Tamura 1996, Kayano 1996…). Enforced by lint (Quality Bar 9).
- **Framework keys must be attached.** The outline names many typological frameworks in prose but leaves them unkeyed; Phase 1 attaches a bibliography key to each before authoring the relevant chapter: Mithun 1984, Baker 1988/96, Keenan & Comrie 1977, Talmy 1985/2000, Peterson 2007, Aikhenvald 2000 (classifiers) / 2004 (evidentiality), Corbett 2000, Veselinova 2006, Anderson 2006, König & Siemund, Haspelmath 1997, Himmelmann, Svorou/Levinson, Stolz et al., Payne & Barshi 1999, Donohue & Wichmann, Jelinek 1984; and for the to-build parts: Comrie 1976, Bybee–Perkins–Pagliuca 1994, van der Auwera & Plungian 1998, Stassen 1997, Cristofaro 2003, Comrie & Thompson, Noonan, Dixon, Haiman & Munro, Longacre, Lambrecht 1994, Dingemanse, Miestamo 2005, Thomason & Kaufman. Plus the Ainu must-cites Bugaeva 2004 and Chiri 1953–62.
- **Audits:** `scripts/audit-apparatus.ts` scans all chapters for `cite=`/`k=` keys and **fails on any missing key, warns on unused entries** (dead entries proliferate at 300 sources).

---

## 5. Technical Architecture

A **grammar-only** SvelteKit site that lifts the proven grammar machinery from `aynu-itah` near-verbatim and re-engineers the six subsystems that do not survive the jump from a 27-chapter Sakhalin sketch to a ~170-leaf-chapter grammar. **Decisions are final, not menus.**

### 5.1 The decisive fossil finding

The reference project **already migrated mdsvex → `.svelte`**. Two generations exist in its tree: Generation 1 (DEAD) — mdsvex `.svx` chapters wrapped by `ChapterLayout.svelte`, with `BIBLIOGRAPHY`/`GLOSS_ABBREVS` generated into `glossing.ts`; the `.grammar-build/{validate,audit,gen}.ts` scripts reference paths that **no longer exist** (0 `.svx` files, no `ChapterLayout`, no `glossing.ts`). Generation 2 (LIVE) — hand-authored `src/lib/grammar/chapters/<slug>.svelte`, loaded by `import.meta.glob`, using `<Ex>/<Ref>/<Xr>/<S>/<A>` and a hand-written `bibliography.ts`. `mdsvex` lingers in devDependencies but is **not** wired into `svelte.config.js`. This dated migration is the strongest available signal: **stay on `.svelte`.**

### 5.2 Stack

SvelteKit 2 + Svelte 5 (runes) + TypeScript + `@sveltejs/adapter-vercel` + Bun + Vite 6 + Tailwind 3 (+ typography) + Paraglide (inlang) for UI-chrome i18n + `unplugin-icons` + `ainconv` + `maplibre-gl` + `bits-ui`. Build-time tooling: Pagefind (search), `node-html-parser` + Playwright (example-index + PDF scrape), CSL processing. **No mdsvex, no `remark-gfm`, no `rehype-slug`. No dictionary dependencies.** Config files (`svelte.config.js`, `vite.config.ts`, `tailwind.config.ts` incl. the **`borderRadius`-forced-to-`0`** block, `postcss.config.js`, `tsconfig.json`, Paraglide `project.inlang/settings.json`) are lifted verbatim; the only edits are dropping `svx` from content globs.

### 5.3 What is lifted from `aynu-itah` (near-verbatim)

| Asset | Lift policy |
|---|---|
| **`context.ts`** (numbering contexts) | **Verbatim.** `GRAMMAR_CTX {chapter, ex:{v}, cited:SvelteSet}` + `SECTION_CTX {path[], counter}` — the single-pass render-order numbering engine. |
| **`toc.ts`** (TOC model) | Lift `ChapterMeta`, array-position-derived `chapterNumber()`, `chapterBySlug()`, `FRONT_MATTER:Set`, `appendices`. **Restructure** for sub-parts and **split per part** (§5.4). |
| **`[slug]/+page.ts`** (loader) | **Verbatim** mechanism: `import.meta.glob('$lib/grammar/chapters/*.svelte')` + `EntryGenerator` + dynamic import → per-chapter code-splitting for free. |
| **`ChapterShell.svelte`** | Lift. Seeds contexts; renders `Chapter N · title`, abstract, body, auto-generated "References cited in this chapter" from the reactive `cited` set. |
| **`Ex.svelte`** (interlinear example) | Lift + extend. Keep the full prop API (`m,g,ain,orig,origLang,tr,lit,cite,dial,place,note,id,constructed`) and the render-time throws (word-count match; gloss-atom in `abbreviations`; `cite` keys in `bibliography`). Extend: chapter-qualified `(N.m)` display; multi-tag `dial`; compositional atom validation; centralized link-out builder. |
| **`Ref` / `Xr` / `S` / `A`** | Lift; `S` verbatim (self-nesting `§N.m.k`); `A` re-targeted through the link-out builder. |
| **Bibliography + abbreviations apparatus** | Lift `BibEntry` and the references/abbreviations pages; **change data source** to generated module; extend with compositional atoms. |
| **Maps/figures** (`DialectMap`, `RegionLocator`, `HistoricalFigure`, `places.ts`, `mapStyle.ts`) | Lift **contracts + accessibility patterns only** (`<details>` fallback, `aria-hidden` canvas, rgba markers). `HistoricalFigure` verbatim. Rebuild all geography for Hokkaido. |
| **Routing + design system** | Lift the cover, breadcrumb/JSON-LD, prev/next nav, and the **entire `:global(.g-main)` book-typography CSS** (~300 lines: serif stack, heading scale, `.sec-num`, `.ex*` interlinear flex columns, small-caps `<abbr>`, ruled tables, the full dark-mode mirror). **Change `+layout.ts` from SSR-only to prerender.** |
| **Paraglide wiring** | Lift `createI18n` (`prefixDefaultLanguage:'always'`, PDF/sitemap excludes, `seo.noAlternateLinks`), the `<ParaglideJS>` wrapper, canonical + `hreflang` cluster (x-default → English). Messages hold **UI chrome only**. |
| **PDF pipeline** | Lift the build→preview→fetch-rendered-HTML→Typst `#ex()` + pandoc approach. Expect rework (parallelize; per-part incremental; out-of-band). |

### 5.4 The six re-engineered subsystems

1. **Prerender + build-time validation + Pagefind search (highest priority).** Flip grammar routes to `prerender = true` (the `EntryGenerator` already enumerates slugs), so `vite build` renders every chapter and any `Ex`/`Ref`/`Xr`/`Gl` throw **fails the build** — without this, a bad gloss never fails CI (SSR-only fires throws only at request time). Prerendered HTML also feeds Pagefind (`pagefind --site .vercel/output/static`, faceted by part/dialect) and the example-index/PDF scrape. A standalone render-all test gives a faster inner loop.
2. **Generated bibliography** from committed CSL-JSON synced off db.aynu.org (§4).
3. **New validated glossary apparatus.** `glossary.ts` (`{term, definition, see?, category?, chapters?}`) + an inline `<Gl term="ergative">` that links to `/grammar/glossary#ergative` and **throws on an undefined term** (same contract as `Ex`). A **separate, grammar-internal store** — NOT the itak.aynu.org modern glossary (that is Ainu lexicon, used read-only as a link-out for vetting modern vocabulary).
4. **Typed multi-tag dialect tree + compositional gloss-atom validation + rebuilt Hokkaido maps.** `dialects.ts` models a `DialectNode {id, label, group:'sw'|'ne'|'sakhalin'|'kuril', region, parent?}` tree after Asai 1974 / Hattori 1964; `Ex.dial` becomes `string | string[]`. Gloss validation replaces pure table-lookup with a decomposer (`/^([1-4])(SG|PL|DU)?(EXCL|INCL)?(A|S|O)?$/`) so portmanteaux validate compositionally without a combinatorial table. Maps rebuilt for Hokkaido geography (new gazetteer: Saru valley, Chitose, Ishikari, Tokachi, Horobetsu, Shizunai, Mukawa, Asahikawa, Yakumo) — recommended to switch to a **tile-based MapLibre-only** map to bound the work.
5. **`<ExRef>` example cross-references** backed by a build-time `static/example-index.json` (`gen-example-index.ts` renders each chapter and harvests `id → "(N.m)"`); `<ExRef ex="some-id"/>` reads the map and throws on a dangling id. This is the one place the single-pass model genuinely needs extension.
6. **`<Xr>`-only cross-referencing with a hardcoded-number lint.** Mandate `<Xr ch="slug" s="anchor"/>`; `audit-apparatus.ts` greps for `\bChapter \d` / `§\s*\d` literals and **fails the build**, enforced from day one (reorders into the 11 empty parts are guaranteed). `chapterNumber` precomputed into a `Map<slug, number>` at module load. Slugs are the primary key, never array index; book-wide sequential numbering, parts as pure grouping (no part-relative "IV.3").

### 5.5 Ecosystem integration (build-time generate or link-out; never a runtime service dependency)

| Grammar need | Resource | Access | Citation target |
|---|---|---|---|
| Cite any Ainu material | `ainu-sources` / db.aynu.org | `sources_search`→`source_get`; `/sources/<slug>/cite.bib` | the original work (slug) |
| Attested examples | `ainu-corpora` (~196k) | `corpus_search` (local `data.jsonl` fallback) | **original source via `uri`/author**, not "ainu-corpora" |
| Glossing / valency / incorporation | `ainu-morpheme-database` (mdb.aynu.org) | `morpheme_decompose`, `morphology_forms` | tag provenance; **flag `rule` forms with no `attested_ref` as predicted-but-unattested** |
| Word-order claims | `ainu-word-order` + Nakagawa 2024 §10.2 | Typst article (WIP) | Nakagawa for the qualitative claim; ainu-word-order numbers only once finalized |
| Lemma lookups | `ainu-dictionaries` (80 dicts) | `dictionary_lookup`/`entry_research` | the underlying dictionary; private/mixed rights — link, don't copy |
| Multi-script rendering | `ainconv` | `convert_script`/`script_all`/`separate()` | **Latin canonical; Katakana lossy, never round-tripped** |
| Modern vocabulary | `ainu-glossary` (itak.aynu.org) | `glossary_*` (read-only) | flag coinages |
| Architecture / contrast | `aynu-itah` (itah.aynu.org) | read `src/lib/grammar/` | Sakhalin contrast; don't claim "first" |

A single `src/lib/grammar/links.ts` URL builder parameterizes every external target and **degrades to plain text** when none is configured, so chapters are never hard-wired to a backend that may not exist.

### 5.6 Directory layout (abridged)

```
ainu-grammar-hokkaido/
├─ data/sources.csl.json                    # canonical bibliography, synced from db.aynu.org
├─ scripts/{sync-bibliography,gen-bibliography,gen-example-index,audit-apparatus,gen-grammar-pdf}.ts
├─ static/example-index.json                # generated id → "(N.m)"
└─ src/lib/grammar/
   ├─ context.ts  links.ts  dialects.ts  abbreviations.ts  glossary.ts  bibliography.generated.ts
   ├─ places.ts  mapStyle.ts                # Hokkaido gazetteer (rebuilt)
   ├─ toc/{types.ts, index.ts, part-01-setting.ts … part-23-apparatus.ts}
   ├─ components/{index.ts, ChapterShell, S, Ex, Ref, Xr, A, Gl, ExRef, DialectMap, RegionLocator, HistoricalFigure}
   └─ chapters/<slug>.svelte                # ~170 leaf chapters
   src/routes/grammar/{+layout.ts(prerender), +layout.svelte, +page.svelte, [slug]/…, references/, abbreviations/, glossary/, search/}
```

### 5.7 Design-system rules (non-negotiable, from DESIGN.md)

No rounded corners anywhere (system-enforced `borderRadius=0`; never add raw `border-radius`); neutral paper palette with a single blue accent; first-class dark mode (`media` strategy + scoped-CSS mirror; test both schemes); scholarly/document-like (serif body, ruled tables, small-caps `<abbr>`, hanging-indent references, headless `bits-ui` primitives, `prefers-reduced-motion`); English prose, multilingual chrome only, with three-script `lang`-tagging discipline (`ain-Latn`/`ain-Kana`/`ain-Cyrl`, `ja`/`ru`) on every inline Ainu form.

---

## 6. Editorial Methodology

Every leaf chapter is produced by the same **seven-step pipeline**, a directed flow that writes durable artifacts so authoring is resumable, auditable, and parallelizable.

```
src/lib/grammar/chapters/<slug>.svelte     ← steps (iii)–(vii) output (the chapter)
authoring/<slug>/dossier.json              ← step (i) evidence dossier
authoring/<slug>/claims-matrix.md          ← step (ii) claims-and-disagreements matrix
authoring/<slug>/examples.jsonl            ← step (iv) verified, glossed examples
authoring/<slug>/open-problems.md          ← step (vi) original-analysis notes
```

**Step (i) — Gather every source treatment.** Build an evidence dossier from: the descriptive literature (`grammar_search(include_transcribed=true)`, `grammar_list` over the Hokkaido shelf + the chapter's `Sources:` keys, with page anchors); corpus attestations (`corpus_search`, `corpus_stats`, `corpus_frequency_list`) to scope "common vs rare" with numbers; morphology (`morpheme_decompose`, `morphology_*`, checking `source`/`confidence`/`attested_ref`); and bibliographic resolution (`sources_search`→`source_get`, BibTeX from `/cite.bib`). The chapter's `Sources:` keys are the **minimum** set and must all be cited or consciously discharged.

**Step (ii) — Build the claims-and-disagreements matrix.** Reduce the dossier to one `claims × sources` table — the analytic spine. Rows = sub-claims/contested points; columns = each source **plus a "Corpus" column**; cells = each source's position with a page anchor; trailing columns = **Disagreement?** and **Our resolution / analysis**. This turns a literature pile into an *integrated* description and makes the chapter's `Gap/novel` claim falsifiable — the novelty must be a filled "Our resolution" cell no source column holds.

```
| Claim / sub-phenomenon | Tamura 1996 | Sato 2008 | Nakagawa 2024 | Bugaeva 2022 | Corpus (MCP) | Disagree? | Our resolution |
```

**Step (iii) — Draft integrated English prose citing all sources.** Every nontrivial claim carries a `<Ref>`; consensus claims cite the agreeing cluster; contested claims name positions and adjudicate. Honesty constraint: comprehensiveness, not priority; "first English treatment to X" only when literally true.

**Step (iv) — Add ATTESTED corpus examples with full interlinear glosses.** Each `<Ex>` (Leipzig four-tier): retrieve an attested sentence (`corpus_search` + metadata); segment/gloss (`morpheme_decompose`, `morphology_forms`, cross-checked against `dictionary_lookup`/`entry_research`); render the katakana line **from canonical Latin** via `convert_script`/`script_all` (never hand-typed, never round-tripped; `separate()` for syllabification); tag `dialect` and `source` (the **original** work, never "ainu-corpora"); mark `constructed` if no attested token exists; flag any provenance-`rule` form with no `attested_ref` as predicted-but-unattested.

**Step (v) — Add typological and historical-comparative framing.** Two standing sub-sections where applicable: a **typological placement** box (the named framework, cited) and a **diachrony/Sakhalin-contrast** box (internal reconstruction, grammaticalization pathway, Hokkaido↔Sakhalin/Kuril contrast, using `aynu-itah` as the structural contrast source).

**Step (vi) — Flag open problems and offer original analysis.** Each chapter ends with an **Open Problems / Re-analysis** block from the matrix's unresolved rows and corpus-exposed gaps — where "find what previous studies missed" lives (a corpus-quantified test separating two conflated categories, a reconciliation of divergent class-counts, a typological score nobody computed). Tagged for the continuous-improvement loop.

**Step (vii) — Wire cross-references and glossary terms.** Replace every "see Chapter N" with `<Xr ch="<slug>"/>`; register every metalanguage term and gloss atom into the glossary/abbreviations apparatus; link forms out to mdb.aynu.org / the relevant dictionary. Dangling slugs, unknown atoms, and unregistered terms fail the build.

### Quality bars (mechanically enforced where marked)

| # | Quality bar | Enforcement |
|---|---|---|
| 1 | Every example cited or explicitly constructed | `<Ex>` requires `cite` or `constructed={true}`; build fails otherwise |
| 2 | Every citation resolves | `<Ref k>`/`<Ex cite>` keys must resolve in `bibliography.generated.ts` → a db.aynu.org slug; dangling keys fail the build |
| 3 | Every gloss abbreviation documented | `<Ex>` validates each atom against the compositional Leipzig set (`1SG.A` → 1 + SG + A); unknown atoms fail the build |
| 4 | Glosses align with morphemes | `<Ex>` checks 1:1 token counts between morphemic and gloss tiers |
| 5 | Every nontrivial claim sourced | Review-time against the step-(ii) matrix; each substantive paragraph carries ≥1 `<Ref>` |
| 6 | Dialect labeled | `<Ex>` requires a `dial` resolvable in the dialect ontology; multi-tagging allowed |
| 7 | Consistent romanization (Latin canonical) | Latin stored; katakana/Cyrillic rendered by ainconv at build, so it cannot drift or smuggle lossy ambiguities |
| 8 | Predicted forms flagged | Morphology-engine `rule` forms with no `attested_ref` render with an "unattested/predicted" marker |
| 9 | Original source, never the aggregator | Review + lint: `cite` keys may not be "ainu-corpora"/"ainu-dictionaries" |

The `<Ex>` component is therefore the principal quality gate: a chapter that compiles has, by construction, only cited-or-constructed, dialect-tagged, gloss-validated, Latin-canonical examples with derived katakana.

---

## 7. Execution Roadmap

Authoring order ≠ presentation order: author in **dependency order** (foundations first) so cross-references point backward; the TOC presents the book in designed order. The single most important ordering correction: **the copula `ne` / existential `an`,`oka` (Part XV) and nominalization basics (Part XVI) are authored BEFORE the operator categories TAM/Evidentiality/Negation (Parts XII–XIV)**, because the evidential paradigm *is* nominalization + copula.

### Do this FIRST (immediately after plan approval)

1. **Phase 0 scaffold:** port `aynu-itah/src/lib/grammar/` (TOC, `<Ref>`/bibliography, `abbreviations`, `<Ex>`/`<Xr>`/`<A>`/`<S>`/`ChapterShell`), stand up the build with Quality-Bar validators 1–4, 6–8 wired into `<Ex>`, and **flip grammar routes to `prerender = true`** so validation fails CI.
2. **Encode the now-frozen outline** as the slug-based modular `toc/` (23 parts; all 198 leaf chapters enumerated — the Phase 0.4 enumeration of the remaining parts is **complete**, so no placeholder slugs remain), Part-4 heading and slug normalizations applied.
3. **Encode conventions config:** the dialect ontology, the compositional gloss-atom set, the romanization policy, and the citation-key ↔ db.aynu.org-slug map seeded from `ainu-sources`.
4. **Wire the MCP authoring harness:** a script that, given a slug + query terms, calls `corpus_search`/`corpus_stats`/`morpheme_decompose`/`morphology_*`/`grammar_search`/`sources_search` and emits the step-(i) `dossier.json`; ainconv (`convert_script`/`separate`) wired into the `<Ex>` build.
5. **Author one vertical-slice pilot chapter end-to-end** through all seven steps to validate every gate before fan-out — recommend **Ch 16 `consonant-inventory`** (corpus quantification, instrumental data, `convert_script`, a real source-disagreement) and/or **Ch 98 `ruwe-ne-inferential-evidential`** (the matrix, the compositional-vs-grammaticalized adjudication, genre-stratified counts). Only after the pilot compiles clean and passes review do Phases 1 → 2…N begin.

### Phase 1 — Apparatus + front matter

Stand up the **bibliography** seeded from db.aynu.org, including the currently-unattached typological-framework keys and the Ainu must-cites (Bugaeva 2004, Chiri 1953–62) (§4.5). Populate **abbreviations** and the **validated grammatical-terms glossary** (both stay living — every chapter appends). Author the **Part II conventions chapters** now (the pipeline depends on them); author Part I orientation as stubs, finalized in continuous improvement (they summarize the finished book).

### Phases 2…N — Chapter-authoring waves (dependency-ordered)

| Wave | Parts | Domain | ~Chapters |
|---|---|---|---|
| 2 — Phonological foundation | III, IV, V | Segmental phonetics/phonotactics; prosody/pitch-accent; morphophonology/sandhi | ~23 |
| 3 — Nominal foundation | VI | Word classes, the no-adjective thesis, nominal derivation/number, diminutive/evaluative | ~5–7 *(to build)* |
| 4 — Nominal periphery | VII, VIII | Possession/affiliative; pronouns, demonstratives, postpositions, numerals | ~20 |
| 5 — Clause spine (moved early) | XV, XVI(basics) | Copula ne, existential an/oka, nonverbal predication, word order, pro-drop; nominalization basics | ~7–10 *(to build)* |
| 6 — Person & alignment | IX | Four-person paradigms, fourth person, alignment debate | ~14 |
| 7 — Verb & valency (theory-magnet) | X, XI | Verb template, transitivity, verbal number; causatives, applicatives, voice, noun incorporation | ~24 |
| 8 — Relativization & complementation | XVI(rest) | Accessibility hierarchy, headless/IHRC, sekor/kuni, control/raising | ~6–9 *(to build)* |
| 9 — Operators | XII, XIII, XIV | TAM & modality; evidentiality & mirativity; negation | ~24 *(XII to build)* |
| 10 — Linkage & pragmatics | XVII, XVIII | Clause linkage / switch-reference; information structure, SFPs, minor classes, ideophones | ~12–15 *(to build)* |
| 11 — Discourse, diachrony, contact | XIX, XX, XXI | Oral-literature register grammar; reconstruction/dialectology; contact & lexicon | ~12–20 *(to build)* |
| 12 — Texts & back matter | XXII, XXIII | Glossed texts; glossary, abbreviations, references, indexes | ~10 |

**Parallelization model.** Within a wave, chapters are independent once the wave's foundations exist, so authoring fans out to many concurrent chapter-agents. Steps (i)–(ii) and (iv) are embarrassingly parallel (each agent hits the MCP for its own slug). The only shared mutable state is three **append-only** registries — `bibliography`, `abbreviations`, the glossary; agents append, never rewrite, and the build validator (Bars 2–3) is the merge gate. **Wave discipline:** a wave's foundational chapter (Wave 5's copula/existential; Wave 7's verb-template Ch 73) is authored first and serially; the rest fans out against it. **Coherence sweep at every wave boundary** enforces the §3 delimitation table and re-checks ordering/forward-references.

### Continuous-improvement loop (ongoing)

Re-quantify as the corpus/morpheme DB grow (re-run queries, promote newly-attested forms out of "predicted"); open-problems triage; source intake (new publications and finalized `ainu-word-order` numbers get db.aynu.org keys); coherence regression (renumbering is a non-event because everything is slug-based); front-matter refresh (Part I re-synced to the built book).

---

## 8. Novel Contributions — How This Surpasses Tamura / Sato / Bugaeva / Nakagawa

The decisive completeness differentiators against all predecessors:

1. **Granularity ≥ 2× the benchmark.** 198 leaf chapters across 23 parts vs Nakagawa 2024's 28 top-level chapters / ~150 subsections — splitting Nakagawa's combined nodes (his single tense+aspect chapter, four-voice chapter, word-formation+incorporation chapter) into separately developed chapters, and adding domains the Sakhalin sketch and most predecessors lack: instrumental phonetics, pitch-accent (a Hokkaido flagship), the no-adjective thesis and formal/defective nouns, applicatives and noun incorporation, the four-term ruwe/siri/hawe/humi evidential paradigm, SFPs/gendered speech/ideophones, oral-literature register grammar, proto-Ainu reconstruction, full Hokkaido dialectology, and a validated glossary of grammatical terms.
2. **A full corpus-quantified layer** (the primary differentiator). No predecessor reports frequencies of affix cells, evidentials by genre, alignment splits, NI productivity, or sandhi optionality. This book attaches numbers from a ~196k-sentence aligned corpus to every "common vs rare" claim.
3. **Integrated diachrony + grammaticalization per chapter** (proto-form + source inline), not quarantined — the only English grammar to do this systematically (Vovin 1993, Itabashi 2001, Shiratori 2026, Bugaeva 2016/2025, Nam 2021, Dal Corso negation/alignment).
4. **Explicit typological scoring** against named samples/frameworks (WALS/Grambank features; Mithun NI types, Keenan–Comrie hierarchy, Talmy motion, Miestamo negation, Aikhenvald evidentiality/classifiers, Peterson applicatives, Corbett/Veselinova verbal number, Anderson AVC) — consolidated in a single orientation feature-profile (Ch 2) that prior grammars scatter or omit.
5. **Systematic Hokkaido-internal microvariation + Sakhalin/Kuril contrast boxes** for every phenomenon, on one explicit dialect ontology (Asai 1974 / Hattori 1964, updated by 2020–2026 dialectometry) — a unified comparative apparatus in English that exists nowhere at this granularity.
6. **An optional formal-analysis layer** for the five theory-magnet domains (alignment, applicatives, noun incorporation, evidentiality, switch-reference-like linkage) — adjudicating the field's central debates (active-stative vs tripartite alignment; syntactic vs lexicalist NI; antipassive vs incorporation for i-; compositional vs grammaticalized evidentials; switch-reference vs continuity for hine/akusu) with corpus evidence rather than assertion.
7. **Machine-verifiable apparatus.** Build-time validation that fails on a bad gloss, a dangling citation/cross-reference/example, an undocumented gloss atom, or an undefined glossary term — a level of citation rigour and self-consistency no print grammar can offer; plus provenance discipline that flags every predicted-but-unattested form.
8. **The modern revival register described as a synchronic variety** (standardized orthography + flagged coinages) alongside the traditional oral corpus — a first for a reference grammar.

The book claims **comprehensiveness, not priority**: Tamura, Sato 2008, Nakagawa 2024, and Bugaeva (ed.) 2022 exist and are the constant cross-references; the contribution is integration, granularity, quantification, and machine-verifiable rigour at a scale none of them attempted.

---

## 9. Open Questions for the User to Decide

1. **Target chapter count — keep the fuller 198-chapter outline, or apply the coherence review's merge candidates to trim to ≤180 (closer to the stated envelope)?** The outline is complete and frozen either way; this decides only whether to consolidate the flagged overlap/granularity pairs (§3 coherence review) for a tighter book of **≤180** chapters versus retaining all **198**.

2. **Title.** Confirm *A Comprehensive Reference Grammar of Hokkaido Ainu* (vs. e.g. *A Reference Grammar of Hokkaido Ainu*, or a title foregrounding the corpus-quantified/typological stance).

3. **Map strategy.** Approve the recommendation to **descope to a single tile-based MapLibre-only** Hokkaido map (rather than rebuilding the bespoke SVG coastline + affine projection per region). If richer per-dialect locator maps are wanted, that is budgeted as real additional work.

4. **Dialect ontology — the schema commitment.** Lock the dialect tree (groups SW/Saru-Chitose vs NE/Ishikari-Tokachi after Asai 1974 / Hattori 1964, updated by Ono 2020 / 2024–2026 dialectometry) and confirm **multiple dialect tags per example** are allowed, **before** tagging thousands of examples (retagging later is expensive).

5. **mdsvex escape hatch for Part XXII (Texts).** Default is `.svelte` throughout. Approve or reject allowing mdsvex **only** for the narrative Texts part (lighter prose) at the cost of maintaining two toolchains. Recommendation: reject; keep `.svelte` everywhere.

6. **Glossary store.** Confirm the grammatical-terms glossary is a **separate, grammar-internal store** (not the itak.aynu.org modern-vocabulary glossary, which stays a read-only link-out target).

7. **Example numbering display.** Confirm **chapter-qualified per-chapter** example numbering (e.g. "(71.4)", reset each chapter) over book-wide sequential example numbers.

8. **PDF cadence.** Confirm the Typst PDF is generated **out-of-band** (on-demand / nightly, parallelized, per-part incremental) rather than on every `vite build`.

9. **Computational/NLP track.** Confirm the ~30 computational/NLP articles are treated as a **corpus-method appendix / methodology citations only**, not core grammar chapters.

10. **Sakhalin/Kuril depth.** Confirm Sakhalin and Kuril are handled as **contrast boxes + one comparative part (XX)**, not expanded into their own descriptive parts (the `aynu-itah` Sakhalin grammar is the structural contrast source).

11. **`ainu-word-order` citations.** Confirm the policy of citing **Nakagawa 2024 §10.2 for the qualitative word-order claims** and deferring `ainu-word-order`'s quantitative numbers until that WIP study is finalized.

12. **Authoring automation posture.** Confirm the degree of LLM-agent fan-out for chapter authoring (per the parallelization model) and whether human review is required per chapter PR or per wave — given the build-time validators catch mechanical errors but Bars 5 and 9 are review-time.