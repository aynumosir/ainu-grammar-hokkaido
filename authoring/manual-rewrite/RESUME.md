# Grammar rewrite continuation — 2026-09-27

The user resumed the rewrite after merging PR #46 and requesting its deployment. That deployment completed from main commit 760f33fab39a762af31f2b6126c0432df9a121e8, with production checks passing. The current task is to finish the remaining chapters; it does not include another merge or deployment.

## Scope and authorization

All 178 original grammar chapters remain in scope. The primary author writes prose directly from the KB’s underlying primary sources. No external LLM generation pipeline or `scripts/gen-grammar.ts`. Independent agents review evidence and technical/editorial accuracy; they do not author chapter prose. The foundational matrices and editorial treatment were approved on 2026-09-26; do not ask for sign-off again. Apply AUTHORING.md and de-ai-style. Preserve dialect differences, provenance, competing analyses and source uncertainty.

The user’s Satō 2021 quasi-incorporation emphasis has been incorporated in 52/90 with bridges in 47/56/104/116. Preserve its distinction from other pseudo-incorporation proposals.

## Current checkout and progress

- Task worktree: `../worktrees/ainu-grammar-hokkaido-manual-rewrite`, relative to the original checkout. Preserve unrelated changes in the original checkout.
- New continuation branch: `docs/manual-grammar-rewrite-final`, based on merged `origin/main` 760f33f. The former `docs/manual-grammar-rewrite` branch and PR #46 are complete.
- Chapters 1–150 have replacement prose and independent source review. **150 complete; 28 remaining. Chapter 151 is next.** Evidence matrices through 178 already exist.
- Resumed work fixed 143’s teskar gloss (`1SG=inform`) and restored cautious recollective yo coverage; rewrote 144–150; completed metadata and formatting for 139–150. The source-specific question patterns, register distinctions, mimetic morphology, genre names and quotation alternatives have passed review.
- Review corrections applied:145 tomo=middle.POSS;147 piye=seed.POSS, asama=bottom.POSS;148 assent e versus call-response ho confirmed by scan;149 legend/lore and eastern heroic names restored from Endō.
- Metadata helper: `python3 authoring/manual-rewrite/update-chapter-metadata.py`, run at repository root. Dictionary now through 150. It extracts sections/references and updates `toc-final.json` and `src/lib/grammar/toc.ts`. Add each new batch's titles/summaries; do not format the whole TOC.
- Prettier config: `authoring/manual-rewrite/prettier.json`; use explicit chapter file lists, `--ignore-path /dev/null --plugin prettier-plugin-svelte`.

## Verification and reviews

Build through 150 passed. Svelte check found 0 errors and 18 existing warnings in 4 files. The built sitemap check passed with 182 URLs returning 200. Attestation validation found 0 errors and 1,301 warnings across 138 chapters. KB validation after the Satō2025a registry correction passed:0 errors and 0 warnings; 190 sources, 84 assets, 8,199 statements, 7,455 claims, 202 narrative units, 13,807 sentences, 1,610 topics, and 24 doculects. The exact latest results belong in the continuation PR body.

Independent reviewers: review_evidence (143–144; preparing 151–153), review_technical (145–147; prepared 154–156 and preparing 157–159), review_editorial (148–150). No prose written by reviewers. CodeRabbit skipped former draft PR #46; obtain independent final review and the available PR review when the full continuation is ready.

Checks: `bun run build`, `bun run check`, `bun run attest`, `bun run kb:validate`, and `bun scripts/test-sitemap-built.mjs` after build. Build regenerates deterministic apparatus/search/KB output. Restore only transient tracked QA reports before commit: `.grammar-build/qa/audit-report.json`, `.grammar-build/qa/attestation-report.json`. No dev server is needed.

## Source access and next source notes

Read each `kb/assets/<key>.json` root/dir. Missing/books roots resolve through `../../ainu-grammar/`; kb roots through `../../ainu-grammar-hokkaido/kb/`. Handbook source pages: `../../ainu-grammar-hokkaido/kb/imports/handbook-2022/pages/`. Read primary passages, using OCR only as a finding aid; check ambiguous text against scans. Source examples retain intermediaries and dialect labels. Never expose local home usernames; use relative paths, non-login shells and output redaction.

Nakagawa 2024 offsets: p=leaf+3 early; +4 from about359; +6 from around525. Satō 2008 p=leaf−17; leaf 297 quarantined. Use Xr prop `s`, not `sec`; look up actual slugs. Gloss atoms are registered in abbreviations.ts; `4.SG`, not4SG. EVID normally for grammatical ruwe; aspect a’s competing analyses are explained in 111.

151–153: existing matrix is source-reviewed. Nakagawa579(1246) scan confirms CICI sequence with5/5/7 syllables including refrain, not all five. Tamura 1996 sákehe includes whole performance manner. Nakagawa590,597 scans checked. Satō 2008 rhetoric is§34.4p264. Okuda, Handbook ch. 11 runs pages 0068–0072; named sample counts are author-reported, not new analysis. Preserve four-syllable initial-accent exceptions.

154–156: existing matrix plus reviewer notes. Kitahara 2013 Monbetsu City prayers differ from lower-Saru Monbetsu sources; a=keytumu honorific interpretation is speaker-specific (p238n6), and apehucikamuy occurs, disproving the old ban. Hirosawa 2026 ex13p76 is the narrative opening, ex16p77 the sea god’s dialogue; original is Tamura1988 Audio Materials5, not the encyclopedia article under the existing tamura1988 key. DalCorso p39 gives a rough exploratory genre comparison; Table4 is his mostly-prose selected corpus. Alonso’s RPA Table7 columns are *hd,*g,*s; preserve competing reconstruction accounts and internal count/prosody discrepancies.

## Later work that must not be missed

- Chapters 175–178: `scripts/gen-apparatus.ts` currently overwrites their article files, including introductions. Fix the generation boundary so hand-authored prose survives and only deterministic lookup data are generated, before rewriting those chapters.
- Their matrices also flag whole-word entries mislabeled as morphemes, person-marker terminology, constructed examples mislabeled attested, absent dialect labels treated as Hokkaido, overlapping counts, same-author/year disambiguation, and witness/intermediary distinctions.
- Remove reader-facing workflow notes from bibliography entries `endo2022`, `okuda2022`, and `shiraishitangiku2022`. Check stale holdings paths for Simeon1968 and Hattori1964 against the 175–178 matrix.
- Chapter157: `ipere kut` is an esophagus, not a wooden spatula; check Tangiku’s `r` → `ro` discussion against the source.
- Chapter159: Hattori1964’s original nine locations are Yakumo, Horobetsu, Saru, Asahikawa, Obihiro, Bihoro, Nayoro, Soya, and Raichishka. Kuril material from Torii1903 makes the tenth comparison; see the matrix’s source disagreement.
- Chapter164: `rakko` and `shishamo` are supported; `sake/shake` etymology is uncertain.
- Chapter165: Japanese `hasami` and Manchu `hasaha` require distinct borrowing discussions.
- Chapter168 must include a complete four-tier uwepeker passage, not a stitched excerpt. Candidate: Nakagawa2025 Text3 pp.159–160, N9305231UP, Shirasawa Nabe, 1993-05-23, Pananpe/Penanpe story. Consult its matrix and primary source.
- Ochiai2026 treats `*siwkorpe` (p.194) as a reconstruction and `sikerpe` (p.195) as opaque; preserve that distinction.

