# Grammar rewrite completion — 2026-09-27

All 178 original grammar chapters have been rewritten directly from the Knowledge Base’s underlying publications. No external LLM writing pipeline or scripts/gen-grammar.ts was used. The primary author wrote chapter prose; three independent reviewers checked sources, editorial treatment, and technical integration. Their verified findings have been corrected.

## Delivery state

- Continuation PR: https://github.com/aynumosir/ainu-grammar-hokkaido/pull/47
- Branch: docs/manual-grammar-rewrite-final, based on main 760f33fab39a762af31f2b6126c0432df9a121e8.
- Task worktree: ../worktrees/ainu-grammar-hokkaido-manual-rewrite, relative to the original checkout. Preserve unrelated changes in the original checkout.
- PR #46 was merged and deployed from the main commit above. PR #47 completes chapters 139–178, including the earlier saved drafts, metadata, source identities, glossary, and indexes.
- No new merge or deployment is authorized. The completed rewrite awaits the PR workflow; no chapter remains to draft.
- CodeRabbit skipped the draft PR. Its ready-for-review result is recorded in the PR; independent source, editorial, and technical reviews remain the substantive review record.

## Verification

The complete production build passes. Svelte checking reports 0 errors and 18 existing warnings in 4 files. KB validation reports 0 errors and 0 warnings: 192 sources, 84 assets, 8,199 statements, 7,455 claims, 202 narrative units, 13,807 sentences, 1,610 topics, and 24 doculects.

Attestation validation reports 0 errors and 1,283 warnings across 140 chapters. These cache misses are not new attestations and do not by themselves invalidate the cited published examples. Do not invent spellings or weaken the validator to eliminate the warning backlog.

Built sitemap integration passes: all 182 URLs return 200. Apparatus tests pass: 5 tests, 206 assertions. Freshness checks pass. The generated data contain 202 registered references, 389 displayed example occurrences, 779 whole example tokens, and 1,177 chapter/section topic entries. Example counts are not corpus frequencies; source groups can overlap, and missing dialect metadata remains distinct from HK.

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
