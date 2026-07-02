# Dual-Model Review Synthesis — PLAN.md

Reviewers: Codex **gpt-5.5** and Codex **Fugu Ultra**, each given the full 198-chapter `PLAN.md` and an identical P0/P1/P2 brief. Raw reviews: `reviews/codex-gpt-5.5.md`, `reviews/codex-fugu-ultra.md`.

## Verdict (both, convergent)

The plan is exceptionally thorough but **not ready to execute "frozen."** Its risk is **control, not coverage**: too many fragmented/duplicate chapters, an over-broad "cite everything" mandate, a "novel analysis in every chapter" rule that invites overreach, unstable citation/ID apparatus, and heavy build-time validation. Both reviewers independently demand a **pre-authoring normalization pass** before any chapter is written.

## Where both agree (P0)

1. **Trim 198 → ~175** by applying the coherence-review merges, and **add missing overview chapters** (TAM, valency/voice, NP-internal structure; + reference-tracking). Reopen the TOC before freezing.
2. **Reorder for dependency coherence** — fundamental clause syntax / nominalization should not sit numerically after the operators (TAM/evidentiality) that lean on them. *(Degree disputed — see Decisions.)*
3. **Source discipline:** an exhaustive *registered* bibliography ≠ per-chapter *evidentiary* citation. Classify every source per chapter as primary-data / prior-analysis / typological-framework / philological-witness / background.
4. **Copyright/rights matrix** per source (allowed quotation length, example reuse, translation status); define fair-use thresholds for the Part XXII glossed texts (flagged as severe exposure as written).
5. **Canonical citation keys:** one scheme + a key→db-slug crosswalk + CI that fails on aliases/dangling refs. Attach foundational works named only in prose (Batchelor, Patrie, Asai, Hattori, Chiri classified dict., Tamura 2000, Bugaeva 2004, Murasaki 1979, Dettmer) as `reported` where not held.
6. **Constrain original analysis:** drop "novel analysis in every chapter." Add an **evidence-grade label** to every claim (consensus / contested / corpus-confirmed / corpus-suggested / speculative / original-needs-review) and **limit original re-analysis to the five theory-magnet domains** (alignment, applicatives, incorporation, evidentiality, clause-linkage).
7. **Human editorial gates, not just render-time validation:** a serial sign-off on the claims-matrices of foundational chapters (person-marking, verb template, valency, TAM, evidentiality, negation, nominalization, clause-linkage) **before** parallel prose drafting of dependents.
8. **Contain neo-Ainu:** confine revitalization/coined forms to the sociolinguistic chapter + tagged contrast boxes; exclude from baseline corpus frequency counts.
9. **Stable IDs + offline validation:** assign static IDs to every section/example/table/figure/glossary term in `examples.jsonl`; move gloss validation, ainconv katakana conversion, and ID assignment to an **offline pre-build script emitting static JSON** (running them inside thousands of `<Ex>` at prerender risks OOM/build blowup); single-pass cross-ref resolution; fail CI on dangling targets.
10. **De-number the roadmap:** strip hardcoded chapter numbers (use slugs), fix stale wave counts, regenerate waves from the trimmed TOC.

## Additional (P1/P2)

- **Pilot ONE contested chapter end-to-end** before parallelizing — gpt-5.5 recommends `ruwe-ne-inferential` or `standard-negation-somo`, *not* `consonant-inventory` (instrumental-phonetics data blocker).
- Protect the grammar-only boundary: keep `lexical-semantic-fields-synopsis` + morpheme index as grammatical finding aids only (no dictionary senses/listings).
- Freeze the **dialect ontology** (tree, uncertainty labels, multi-tag semantics) before importing examples.
- Grammar-faceted in-book search (part / dialect / genre / morpheme / gloss-abbr / source / example-ID), not generic full text.
- Provide **Svelte authoring macros + a chapter-skeleton generator** so editors write prose, not markup.
- A **corpus-statistics protocol** (countable units, edition dedup, genre/dialect weighting, manual-validation thresholds) before any frequency claim.
- Build-time **lint for priority claims** ("first/unique/never before") requiring a source-audit override.
- P2: split `heroic-and-divine-verse` (yukar vs kamuy yukar); descope cartography to one MapLibre/tile map; keep Ch. 2 typological profile to cited, defensible feature values.

## Adopted automatically (no scale/structure trade-off)

Items 3, 4, 5, 6, 7, 8, 9, 10 and all P1/P2 above will be folded into the normalization pass without needing a decision.

## Decisions for the user (you have been steering these)

- **D1 — Chapter count:** trim 198 → ~175 (named merges + 4 overviews)?
- **D2 — Outline order:** conventional morphology→syntax (current), targeted fix (move Nominalization before Evidentiality), or full restructure (clause before operators)?
- **D3 — Pilot chapter:** which contested chapter to pilot end-to-end first?

## Proposed normalization pass (first concrete step after sign-off)

1. Apply TOC merges + add overview chapters → **freeze TOC at ~175** with stable slugs.
2. Stand up apparatus: bibliography schema + citation-key registry/crosswalk, dialect ontology, abbreviations, glossary, evidence-grade + rights matrices, ID scheme.
3. Build the offline validation/codegen pipeline (`examples.jsonl` → static JSON; CI gates).
4. Scaffold SvelteKit + port/scale the aynu-itah pipeline + design system + authoring macros/skeleton generator.
5. Pilot the chosen contested chapter end-to-end; review; then open parallel authoring of non-foundational chapters behind the foundational sign-off gate.
