# Grammar rewrite and research checkpoint — 2026-09-27

All 178 original grammar chapters have been rewritten directly from the Knowledge Base’s underlying publications. No external LLM writing pipeline or scripts/gen-grammar.ts was used. The primary author wrote chapter prose; three independent reviewers checked sources, editorial treatment, and technical integration. Their verified findings have been corrected.

## Delivery state

- All 178 original chapters are rewritten. No chapter remains to draft.
- Grammar PRs [#46](https://github.com/aynumosir/ainu-grammar-hokkaido/pull/46) and [#47](https://github.com/aynumosir/ainu-grammar-hokkaido/pull/47) are merged. PR #47 completes chapters 139–178, including metadata, source identities, the glossary and indexes.
- Grammar PR [#48](https://github.com/aynumosir/ainu-grammar-hokkaido/pull/48) registers the September 2026 research intake. The deployed grammar commit is `aacab0c90b602e36db0dae27b36b32e6544e6a6a`; its [deployment and live-site checks](https://github.com/aynumosir/ainu-grammar-hokkaido/actions/runs/36293665238) passed.
- The catalogue's research intake, source-permission removal and Japanese-description batch are merged in source PRs [#171](https://github.com/aynumosir/ainu-sources/pull/171), [#172](https://github.com/aynumosir/ainu-sources/pull/172) and [#173](https://github.com/aynumosir/ainu-sources/pull/173). Archive policy PR [#5](https://github.com/aynumosir/ainu-archive/pull/5) is merged.
- Production has migrations `0030_japanese_descriptions` and `0031_remove_source_rights`. Archive access uses authenticated roles and revision availability. The five per-source permission flags are absent from the schema and runtime checks.
- The catalogue deployment is `ainu-sources/main` at `85b4bc769af7073c33f95cf7d28648cf771de22a` (Worker version `58642430-2f6b-40c2-b309-2b58fc9ed4db`).
- All 94 Japanese descriptions passed live API checks against `ainu-sources/scripts/data/japanese-descriptions.json`, with original titles and summaries preserved. The import preview reports 94 unchanged records and no pending writes. The importer’s 10 integration tests and the clean production build pass.
- CodeRabbit completed the rewrite's ready-for-review pass. Verified markup, citation punctuation, cross-reference scope and parser findings were corrected. Independent source, editorial and technical reviews are complete. Its later rate limits are recorded in the relevant PRs.
- Preserve unrelated changes in the original checkouts. Use a clean worktree based on current `origin/main` for further changes. Deployment requires merged code.

## September 2026 research intake

The 20 researched works are registered in the catalogue and grammar KB. The intake adds bibliographic records and source assets; it does not incorporate their findings into chapter prose. The resulting KB registry has 222 sources and 96 assets.

The acquisition manifest, `kb/registries/research-2026.json`, describes 15 PDF references across 14 catalogue records. These resolve to 13 unique PDFs in the private archive. The SLE accepted-paper list is stored once under `2026-bugaeva-body-part-incorporation`; that record, `2026-dal-corso-kusu-anankastic-modality` and `2026-izutsu-necessity-ainu-japanese-korean` each link to the same archived PDF. Reuse that file when restoring the holdings. Three current copies would violate the archive's duplicate-file check.

Twelve assets provide 224 relevant text pages in archive search. The CELEA abstract uses PDF leaves 44–45, corresponding to printed pages 43–44; the complete abstract book remains available as a labelled PDF. The SLE list supplies bibliographic evidence. The thesis summary and abstract have separate file slots. The author's manuscript, abstracts, programme and thesis extracts retain their document labels.

All upload hashes, sizes and page counts were checked. Live text retrieval passed for all 12 text assets; six sample downloads passed SHA-256 checks. Search checks include Japanese text, the CELEA abstract and the numeral manuscript. All five archive integrity checks passed. PDF text layers were extracted without model services. Local preparation produced 271 page files; the archive indexes the 224 pages relevant to these works.

## Remaining work

1. Read the new full papers and author manuscript against the affected chapters. Record source passages and disagreements before revising an analysis. Conference programmes and titles provide no evidence for grammatical claims.
2. Reconcile the attestation-cache warnings against published examples; preserve the validation standard described below.
3. Fix the archive CLI's handling of a successful deduplicated upload and its outdated “pending reviewer approval” message. The server makes verified uploads available.
4. Release completed download leases. The current implementation leaves each lease in place for five minutes, so consecutive completed transfers can reach the concurrency limit.

## Rewrite verification

At rewrite completion, the production build passed. Svelte checking reports 0 errors and 18 existing warnings in 4 files. KB validation at that checkpoint reported 0 errors and 0 warnings: 192 sources, 84 assets, 8,199 statements, 7,455 claims, 202 narrative units, 13,807 sentences, 1,610 topics, and 24 doculects.

The rewrite attestation check reported 0 errors and 1,283 warnings across 140 chapters. These cache misses are not new attestations and do not by themselves invalidate the cited published examples. Do not invent spellings or weaken the validator to eliminate the warning backlog.

Built sitemap integration passes: all 182 URLs return 200. Apparatus tests pass: 5 tests, 207 assertions. Freshness checks pass. The generated data contain 202 registered references, 389 displayed example occurrences, 779 whole example tokens, and 1,177 chapter/section topic entries. Example counts are not corpus frequencies; source groups can overlap, and missing dialect metadata remains distinct from HK.

## Editorial decisions to preserve

The user approved the foundational matrices and treatment on 2026-09-26. Preserve documented dialect differences, source provenance, competing analyses, and uncertainty. Do not request the same approval again. AUTHORING.md and de-ai-style remain applicable.

Satō 2021 quasi-incorporation is developed in chapters 52/90, with bridges in 47/56/104/116 and the glossary. Preserve the lexical-unit/morphological-word distinction, the hypothetical extension to locative noun plus case particle, and the comparison with Tamura’s 連他動詞.

The reading chapters distinguish source text from added segmentation, gloss, and English translation. Chapter 168 uses one complete short advice sentence from Nakagawa2025 Text3, not the full protected performance; the official complete edition is linked. The internal chapter-168-text3-line-check.md records the reuse decision and checked annotations without retaining the whole transcription. Do not restore the former full-tale promise or reproduce the entire modern edition without appropriate rights.

Chapter 171 cites ginnoshizukund, the provisional Gin no Shizuku study transcript, with its printed Asahikawa/Sugimura Fusa/Kawamura Tome attribution. utari1994 remains the distinct original book. Chapter 172 identifies Murasaki’s edited teaching dialogue and does not assign its A/B turns to named elder recordings.

## Maintenance

- The metadata helper authoring/manual-rewrite/update-chapter-metadata.py now covers all 178 chapters. It updates chapter titles/summaries, section lists and reference metadata. It does not write prose.
- scripts/gen-apparatus.ts generates only src/lib/grammar/data/apparatus.json. It must never overwrite chapter files. Chapters 175–178 retain authored prose; 177 is a curated index of selected forms and constructions, not an automatic morpheme segmentation of example words.
- Use the local Prettier configuration with explicit file lists. Do not reformat the entire TOC or citation registry incidentally.
- Relevant checks: bun run build; bun run check; bun run attest; bun run kb:validate; bun scripts/test-sitemap-built.mjs; bun test scripts/gen-apparatus.test.ts; bun scripts/gen-apparatus.ts --check.
- Restore only transient tracked QA reports before committing: .grammar-build/qa/audit-report.json and .grammar-build/qa/attestation-report.json.
- No task dev server is running.

Source matrices through 178 contain detailed locators and resolved disagreements. Read the underlying passages before changing an analysis. Satō2008 OCR leaf297 remains quarantined. Keep local home usernames private; use relative paths, non-login shells, and redacted output.
