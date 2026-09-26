# Restart checkpoint — 2026-09-27

The user explicitly asked to stop and save the work. Resume only when requested.

## Scope and authorization

Rewrite all 178 original grammar chapters by hand from the Knowledge Base’s underlying primary sources. The primary author writes the chapter prose directly. Do not use the external LLM generation pipeline or run `scripts/gen-grammar.ts`. Independent agents have been reviewing evidence and technical/editorial issues; they do not write chapter prose.

The user approved the foundational matrices and proposed treatment on 2026-09-26. No further foundational sign-off is needed. Keep dialect differences, attribute disputed analyses, and remove unsupported universal rules and corpus claims. Read `AUTHORING.md` and use the `de-ai-style` skill when resuming.

The user specifically highlighted Satō’s 2021 quasi-incorporation analysis and Tamura’s 連他動詞. This has been incorporated and independently reviewed in chapters 52 and 90, with related discussion in 47, 56, 104, and 116. The 2021 lexical analysis, Dal Corso’s pseudo-incorporation proposal, and Satō’s 2025 account must remain distinct.

## Branch and checkout

- Branch: `docs/manual-grammar-rewrite`.
- Draft PR: https://github.com/aynumosir/ainu-grammar-hokkaido/pull/46
- Task worktree, relative to the original repository: `../worktrees/ainu-grammar-hokkaido-manual-rewrite`.
- The original checkout has unrelated user changes. Preserve them and continue in the task worktree.
- Last completed and checked chapter batch: commit `a8e8a4b` (`docs: rewrite conditional and narrative linkage`), already pushed.
- This checkpoint adds unfinished drafts and their restart information. It does not mark another batch complete.
- Do not merge or deploy. PR creation/push/update are already authorized. Keep the PR draft until the full rewrite is ready.
- Never expose a local home username. Use relative paths and non-login shells; redact any incidental home paths in output.

## Exact progress

**138 chapters complete; 5 additional drafts saved; 35 chapters not yet rewritten.**

Chapters 1–138 have replacement prose and independent source review. Chapters 139–143 have local replacement drafts now saved in this checkpoint. Chapter 144 still contains the old prose and is the next chapter to write. Evidence matrices through chapter 178 are already in this directory.

| Chapter | File in `src/lib/grammar/chapters/` | State |
| --- | --- | --- |
| 139 | `reference-tracking.svelte` | Source review passed; Satō2025a example 21 corrected to printed p.370; Bugaeva’s intermediary provenance identifies Tamura1972/2001 p.377. |
| 140 | `topic-marking-anakne.svelte` | Source review passed; small editorial corrections applied. |
| 141 | `cleft-nominalization-focus.svelte` | Source review passed; Piratur translation now refers to the present name; cross-reference fixed. |
| 142 | `pragmatic-word-order-dislocation.svelte` | Source review passed; removed a misleading attribution of role recovery to grammatical information. |
| 143 | `sentence-final-particles-illocutionary-force.svelte` | Draft reviewed, but fixes below remain unapplied. |
| 144 | `interrogative-strategies-question-particles.svelte` | Old prose remains. Matrix and primary passages have been read; write this next after fixing 143. |

The five drafts have not yet been formatted, added to chapter metadata, built, or checked as a batch. Their generated apparatus/search data still correspond to the last completed batch. Do not count them as complete yet.

## Immediate pending fixes

1. Chapter 143: change the gloss `tell.tales` for `teskar` to `inform`. Satō2008 p.72 and p.163, and Satō2021 p.88 example 17, confirm the meaning. Chitose transitivity was not independently established; `1SG=inform` avoids assigning an unverified S/A label. The currently saved draft still has `1SG.S=tell.tales`.
2. Chapter 143: retain Satō’s cautiously described recollective `yo` after `p/pe` or `hi` (2008 pp.75–76). Read the original passage before adding it; the source explicitly has few examples and uncertain precise usage.
3. Write chapter 144 using `chapter-139-144-evidence.md`. The old chapter contains multiple factual errors; replace it fully.
4. Add 139–144 titles/summaries to `update-chapter-metadata.py`, then run it from the repository root. It updates `toc-final.json` and `src/lib/grammar/toc.ts`, extracting sections and references from actual prose. Its saved dictionary currently ends at 138. It does not write article prose.
5. Format only the changed chapters with the saved `prettier.json`, not the whole TOC or repository.
6. Run the normal batch checks, fix broken incoming section references, and validate the KB registry correction described below.
7. Obtain independent review of 144 and verify the 143 corrections. Only then update the completed count to 144 and continue 145–178.

## Chapter 144 evidence already read

The detailed matrix gives the full comparison and provenance. Key points:

- Rising intonation is not obligatory. Fukuda1961 p.34 note22 explicitly separates questions from rising contours. Satō2008 p.134 gives a tendency. Do not claim an acoustic analysis was performed.
- Fukuda1961 pp.33–34 describes `ya` as softening the corresponding Saru question. Satō2008 pp.134–135 compares bare-verb questions with more polite formal-noun questions in Chitose, describing urgent/intimate uses. Preserve the comparisons and dialects.
- Satō2008 p.136 describes the four formal nouns with bare polar-question endings and `an` in content questions. This is not a universal table: Nakagawa2024 p.410 examples 853–854 have content questions retaining `ruwe ne ya` or `p ne ya`; Fukuda1961 p.35 §32 explicitly compares `hunak un ’e’arpa siri ’an?` with bare `siri` in the same content-question setting.
- `hnta` belongs with `hemanta` ‘what’, not `hunak` ‘where’. `hnta kusu` means ‘why’. Shiranuka `henta` belongs with `enta`, not `hetap`.
- `he` may follow a phrase, a conditional clause, or the final verb. Do not insist that it immediately follows the wh expression.
- Nakagawa2024 p.412 does not give `hemanta ne?` as the ordinary Saru ‘What is it?’ question. It can mean ‘why’; shortened `hnta ne` is separately attested.
- Embedded `ya` includes content questions, not just polar questions. Nakagawa2024 p.333 example 574: `hempak pa ka apkas=an humi ne ya ka a=eramuskari`, ‘I do not know how many years I walked’ (Chitose). Read the primary page again before copying the full interlinear.
- Negative responses include Saru `somo` and Horobetsu `senne` (Nakagawa2024 p.408 examples 840–841). Nominal/adverbial replies with `un` are also documented. Do not claim that answers must repeat a whole predicate.
- Nakagawa2024 p.409 example 843 `cip c=o yakka pirka ruwe?` is Chitose. Example 844 `ha, e=eraman hawe?` is Saru via Tamura1984 p.56. Example 846 `keman hi ta he?` is Saru via Tamura1984 p.26.
- Example 855, p.411, `hnta kusu somo e=ipe he?`, ‘Why are you not eating?’, is Saru. Gloss the first word ‘what’. Example 856 is on p.411, not p.407.
- Satō2008 p.63 has an alternative question with `totto` ‘mother’ and `hápo` ‘father’. Do not normalize those source-specific meanings to another dialect.

## Other changes saved with this checkpoint

- `kb/registries/sources.jsonl`: `source:sato2025a` now identifies *Basic Sentence Structures in Ainu*, *Studia Orientalia* 126, pp.353–376, https://journal.fi/store/article/view/179230 . The incorrect Handbook/De Gruyter container and publisher/place fields were removed. The article and its scan were checked; the grammar bibliography already had the correct container. Run KB validation after this change.
- `chapter-127-132-evidence.md`: Piratur wording corrected to the present name.
- `chapter-139-144-evidence.md`: Saru label for examples 543/855, self-description/reply distinction for 581/582, and Refsing’s fronted indirect-object locator (p.164 §14.5) corrected.

## Checks and review state

For the completed 1–138 batch: build passed; Svelte check had 0 errors and 18 existing warnings in 4 files; attestation check had 0 errors and 1,281 warnings across 134 chapters; the built sitemap check found 182 URLs, all returning 200; `git diff --check` passed. KB validation previously passed with 190 sources, 84 assets, 8,199 statements, 7,455 claims, 202 narrative records, 13,807 sentences, 1,610 topics, and 24 doculects, before the current Satō metadata correction.

Commands used for batches: `bun run build`, `bun run check`, the repository attestation command, the KB validation command, and `bun scripts/test-sitemap-built.mjs` after the build. Check `package.json` for the precise attestation/KB script names. Build regenerates apparatus, audit, search, KB pages, and Vite output. Restore only transient tracked reports before committing: `.grammar-build/qa/audit-report.json` and `.grammar-build/qa/attestation-report.json`.

Independent reviewers were `review_evidence`, `review_technical`, and `review_editorial`. They have been stopped. The 139–142 reviews and the outstanding 143 findings are captured above. Preparation of 145–147 and 148–150 was interrupted; do not assume a new review of those chapters was completed. Use the existing 145–150 matrix.

CodeRabbit skips draft PRs and has not reviewed this PR. At full completion, obtain the required independent final review panel, mark ready when appropriate, and wait for CodeRabbit if available. Report missing reviews accurately. No merge authorization has been given.

## Source access and drafting cautions

Read each `kb/assets/<source-key>.json` for its `root` and `dir`; avoid dumping large page maps. A missing root or `books` root resolves under `../../ainu-grammar/`; `kb` resolves under `../../ainu-grammar-hokkaido/kb/`. Handbook transcriptions are in `../../ainu-grammar-hokkaido/kb/imports/handbook-2022/pages/`. Source OCR is a finding aid; verify ambiguous forms against scans. Do not run the model pipeline or perform unnecessary OCR.

Useful offsets: Nakagawa2024 printed page = OCR leaf +3 in the earlier portion, +4 from about p.359 onward. Satō2008 printed page = leaf −17; leaf297 is quarantined as blank. Satō2025a example21 was visually checked at printed p.370; OCR footer/header placement can mislead. The official PDF is linked from the corrected registry entry.

Use actual chapter slugs from the TOC. `Xr` section prop is `s`, not `sec`. Registered gloss atoms include `ALLAT INS DES FIN ADD CONC EP MID RES TR.SG PST PFV PRF MIR OPT ITR EVID`; use `4.SG`, not `4SG`. `A` denotes actor. Normally gloss grammatical `ruwe` as `EVID`; do not silently assume inferential semantics. Aspect `a` has competing analyses explained in chapter111; gloss choices must be disclosed where relevant. Preserve exact example provenance, dialect, and intermediaries.

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

No task dev server is running. No deployment or merge was performed.
