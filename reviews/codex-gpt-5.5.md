**P0.** The outline is “frozen” before its own coherence review has been applied, so authoring will lock in duplicated chapters and unstable dependencies. Unfreeze once: add TAM overview, valency/voice overview, NP-internal structure, and reference-tracking chapters, then merge the named duplicate clusters before any chapter work.

**P0.** Keep neither 198 nor a vague “maybe trim”: the plan’s target says 120-180, and 198 is already showing duplication. Trim to about 175 by merging `73`+`74`, `52` into `60`, `34` into `49`, `51` into `132`, `30` into `168`/`174`, `123` into `161`, and tightening `5`/`186`, `6`/`7`, `24`/`183`.

**P0.** The source strategy is overbroad as phrased: “cite every Ainu material ever” confuses bibliographic completeness with evidentiary relevance. Make the bibliography exhaustive, but require chapter dossiers to classify sources as primary data, prior analysis, typological framework, philological witness, or background-only.

**P0.** The plan under-specifies copyright handling for corpus examples, text editions, dictionary-derived glosses, and OCR material. Add a rights matrix per source with allowed quotation length, example reuse policy, translation status, and whether only short cited excerpts may be displayed.

**P0.** Citation keys are not yet a stable contract, and duplicate key styles will corrupt automated validation at scale. Before authoring, create a canonical key-to-db-slug registry, normalize all current outline keys, and fail CI on aliases.

**P0.** The per-chapter “all source treatments” pipeline is rigorous but unrealistic for 198 chapters without triage. Require a dossier template with “must read in full,” “consult for examples,” and “background” tiers, otherwise minor chapters will consume the same editorial budget as alignment, evidentiality, or incorporation.

**P0.** Original-analysis ambition is too unconstrained, especially for corpus quantification, phonetics, typology scoring, and diachrony. Add an evidence-grade label to every novel claim: descriptive synthesis, corpus-confirmed, corpus-suggested, speculative, or original analysis requiring external review.

**P0.** The technical plan assumes Svelte render-time validation will substitute for editorial validation. Keep the build gates, but add human review gates for claims matrices, example selection, source interpretation, and all “first/novel” claims.

**P0.** Cross-reference and example numbering across 175-198 `.svelte` chapters will not scale if IDs are hand-managed. Define mandatory stable IDs for every section, example, table, figure, and glossary term before pilot authoring, with generated indexes committed only from scripts.

**P0.** Start with apparatus and one vertical slice, but not `consonant-inventory` alone because instrumental phonetics may create a data-acquisition blocker. Use `ruwe-ne-inferential` or `standard-clausal-negation-somo` as the first pilot because it exercises bibliography, examples, corpus counts, terminology, cross-refs, and contested analysis without requiring new lab phonetics.

**P1.** Part XV is structurally backward because basic clause order and argument realization come after nonverbal predication. Move `constituent-order-head-final` and `argument-realization-indexing` to the front of Part XV.

**P1.** Part XVI lacks the overview pattern used elsewhere, which will make nominalization, relativization, and complementation feel like disconnected mechanisms. Add a short architecture chapter before `nominalization-p-pe`.

**P1.** The grammar-only boundary is weakened by `lexical-semantic-fields-synopsis` and the morpheme index, which risk becoming dictionary substitutes. Keep them as grammatical finding aids only: no open-ended lexical listings, no dictionary senses except where required for grammatical analysis.

**P1.** Modern revival Ainu is in scope but not structurally protected from contaminating traditional corpus claims. Require every neo-Ainu form or coined vocabulary item to carry a revival/register tag and exclude it by default from historical or native-speaker frequency counts.

**P1.** Hokkaido dialect tagging is central but the ontology is still presented as a decision question. Freeze the dialect tree, uncertainty labels, and multi-tag semantics before any examples are imported.

**P1.** The bibliography omits or under-attaches several foundational works in the actual chapter source lines, even where prose mentions them. Attach Batchelor, Chamberlain, Patrie, Asai, Hattori, Chiri’s classified dictionary, Tamura 2000, Bugaeva 2004, Murasaki 1979, and Dettmer systematically where relevant, with `reported` status when not directly held.

**P1.** Pagefind and prerender search are useful, but in-book search needs grammar-specific facets, not generic full text. Index by chapter, part, dialect, genre, morpheme, gloss abbreviation, source, and example ID from the same generated metadata used for validation.

**P1.** `.svelte` chapters are defensible, but authoring prose-heavy reference chapters directly in Svelte will slow editors and increase markup noise. Provide snippets/macros and a chapter skeleton generator so ordinary prose, examples, refs, and sections are mechanically easy to write.

**P1.** Parallel authoring is safe only after terminology and analysis decisions are frozen for core systems. Serialize the overview/foundation chapters for person, verb template, valency, TAM, evidentiality, negation, nominalization, and clause linkage; parallelize only subordinate chapters after those are reviewed.

**P2.** The glossed-text part is slightly inconsistent because `heroic-and-divine-verse` contains two genres while other text chapters are one genre each. Split yukar and kamuy yukar if the book retains high granularity; otherwise keep merged as part of the trimming policy.

**P2.** The map plan is appropriately descoped, but dialectology chapters will still need static reproducible maps for print/PDF. Generate map snapshots at build time and store figure metadata so web and PDF do not diverge.

**P2.** The typological profile risks becoming a checklist of database labels rather than an argument. Limit Ch. 2 to defensible, cited feature values and move disputed scoring notes into the relevant analytic chapters.

Overall verdict: the plan is impressive but not ready to execute as “frozen.” Its biggest weakness is not coverage but control: too many duplicate chapters, unstable citation keys, and ambitious original-analysis promises are being pushed downstream to authoring. The single most important improvement is a pre-authoring normalization pass that trims the outline to about 175 chapters, freezes the citation/dialect/ID apparatus, and pilots one contested chapter end to end before parallel work begins.