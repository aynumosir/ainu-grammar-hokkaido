# QA Campaign Plan v2 — copyedit, fact-check, cross-reference, discover

**Object:** the 176-chapter Hokkaido Ainu grammar (grammar.aynu.org), ~449k words of prose,
904 `<Ex>` interlinear examples, 159 bibliography entries. Authored by Sonnet 5 / Opus 4.8.
**Constraint:** lowest cost. Fable 5 designs the harness, builds tooling, adjudicates
disagreements, and audits samples — it does not read 176 chapters.

**Review state:** v1 reviewed by Codex gpt-5.5 (2026-07-04, `reviews/qa-plan-review-gpt55.md`) —
all P0s and most P1/P2s folded into this v2. **Fugu Ultra review PENDING** (usage limit resets
Jul 6 09:00) — run it on this v2 before Phase 1+ execution begins. Phase 0a (safety rails) may
start immediately; it is review-independent.

---

## 0. Ground truth from recon (2026-07-04)

### Error profile (calibration audit of 3 chapters: alignment-debate, applicative-e, loanwords/toponymy)
~75 candidate issues in 3 chapters (~25/chapter in high-risk chapters). Category ranking:
1. **Suspicious factual claims** (~25) — concentrated in fact-heavy periphery (a 9-row Vovin
   Man'yōshū table is the single riskiest block found) and quantitative claims (Bugaeva
   percentages, frequency orderings).
2. **Citation problems** (~15) — pageless `ijas2023`/Discord cites, epistemic-tag inflation
   (‹consensus› on Discord posts), decorative cites, inconsistent locator granularity.
3. **Copyediting** (~14, low severity) — signature tic is **pipeline-register leakage**
   ("factbase-verified", "read sources", literal `‹original-needs-review›` shipped in prose).
4. **Internal inconsistencies** (~13, highest severity) — Shibatani 1990 cited with pages in one
   chapter, "not available to verify" in another; `i=` glossed `1SG.O` in applicative-e vs `4.O`
   in the alignment chapter; 2%-vs-3% table/prose contradiction; ex-number/page mismatches.
5. **Orthography/formatting drift** (~10) — segmentation hyphens, romanization, macrons.

**Split:** ~25% scripts, ~35% cheap model + house-style sheet (chapter-local), ~40% needs source
retrieval — and a mid-tier model wired to the dictionary/corpus MCP + page-cited dumps reclaims
about half of that bucket. Retrieval beats raw model IQ. The pipeline is NOT uniformly
hallucinating (corpus figures matched exactly) — suspicion must be targeted.

### Verification assets
- **Page-cited OCR dumps** in `/home/mkpoli/projects/Ainu/ainu-grammar/books/`: Nakagawa 2024
  (657 pp; printed = OCR page + 4, verified), Satō 2008 (415 pp, clean), Refsing 1986, Kindaichi
  1936, Chiri 1942, Tamura 1996 (=アイヌ語入門, NOT the Saru dictionary), Bugaeva 2022 Handbook
  (epub/pandoc, no print folios), Ijäs 2023 (per-page md), Murasaki 2025, Shibatani 1990.
  Plus `articles/`: 332 page-cited article dumps (Bugaeva, Takahashi, Dal Corso, Tamura, Satō…).
- **Machine-readable, script-usable:** `ainu-corpora/data.jsonl` (196,184 sentences w/ dialect/
  document/narrator), `ainu-dictionaries/` (72 dirs with original.tsv incl. Tamura 1996 Saru
  dictionary, Hattori 1964, Batchelor, Nakagawa 1995 Chitose), `ainu-morpheme-database/registry/
  lemmas.jsonl` (15,839 lemmas + POS), comparative sound-change JSONs.
- **The book's own factbases:** `.grammar-build/factbase/*.md` (18 domains, page-cited or
  `[UNVERIFIED]`) — chapters diffable against the factbase they were authored from.
- **Bib keys with NO local dump** (lower-confidence lane — secondary support only, never
  "verified"): tamura2000, asai1969/1974, murasaki1979, kindaichi1931/1935, chiri1955,
  chamberlain1887, refsing2011, huber2025, + ~18 typological-framework keys. Caveats: tamura1988
  only as 1997 reprint (different pagination); `nurmi2024` cited in a factbase but absent from
  bibliography.ts AND dumps.

### The Sakhalin book (aynu-itah) — adversarial checklist, NOT an authority
Fable-authored, 27 chapters / ~54k words / 390 Ex / 76 bib; compile-time-validated markup.
It is itself LLM-authored with 8 open GRAMMAR_TODO decisions in the person-marking area, so:
**no Hokkaido-book edit may cite aynu-itah as its evidence** — a divergence is only ever a
*prompt* to re-ground both sides in primary Hokkaido/Sakhalin sources.
- **Comparison VALID (pan-Ainu architecture):** person-marking architecture & 4th person, valency
  morphology, evidential system shape, verb structure/transitivity, nominalization/relativization
  architecture, vigesimal numerals, possession opposition, Proto-Ainu prosody.
- **Comparison MISLEADING (Sakhalin-specific):** coda neutralization/vowel length, first-person
  inventory details, =ahci(n), TAM exponents, hannehka negation, generalized -he, anah(ka).
- **NO-AUTO-COMPARE zone:** person-marking *details* (glossing of in-/-(y)an/eci-…) until
  aynu-itah's open TODOs are resolved — architecture-level comparison only.
- **~180 explicit Hokkaidō-comparative statements** in aynu-itah (with citations) = ready-made
  checklist. **`data.json`**: 785 Hokkaidō-correspondence records + 45 cognate sets, script-diffable.
- Gloss-convention mapping (4↔INDEF, PL↔COLL, evidential labels) must be **domain-scoped and
  directional**, built before any automated diffing; never applied globally.

### Cost basis
| Runner | Marginal cost | Notes |
|---|---|---|
| Scripts (bun) | $0 | run forever, wire into build |
| Codex gpt-5.5 / Fugu Ultra (subscription) | ~$0, rate-capped | usage limits are real (Fugu hit its cap 2026-07-04 → resets Jul 6); Fugu 1M ctx; different model family from the authors → uncorrelated blind spots |
| Haiku 4.5 | $1/$5 per MTok (½ on Batch) | chapter-local copyedit |
| Sonnet 4.6 | $3/$15 (½ on Batch) | retrieval-grounded verification; also inside Claude Code workflows (subscription cap) |
| Opus 4.8 | $5/$25 | adjudication fallback |
| Fable 5 | $10/$50 | harness design, audits, final adjudication ONLY |

"Free" Codex is not free in total cost (orchestration, retries, wall-clock, adjudication load) —
the **pilot (Phase P) measures** tokens/chapter, findings/hour, precision, adjudication rate per
runner before committing the mass run to any of them.

---

## 1. Principles

1. **Findings before fixes.** Every pass emits structured findings; nothing edits chapters except
   Phase 5 (and Phase 0a's strictly non-linguistic mechanical class). Matches the Ijäs "removal
   approach".
2. **Retrieval over IQ.** Every fact-check call carries the exact OCR pages / dictionary rows /
   corpus lines. **Every source's page-offset map is calibrated first** (sample ≥5 cites/source,
   confirm the cited text actually appears) — an uncalibrated dump manufactures false findings.
3. **Cross-family adversarial checking.** The book was written by Claude models; Codex does the
   first verification pass wherever quality allows.
4. **Agreement is necessary, not sufficient.** Two checkers agreeing on "contradicted" still
   produces only an **edit packet** (affected sentence, source quote, proposed minimal edit,
   rationale) — packets are reviewed (sampled by Fable; high-severity 100%) before application.
5. **`not-found-on-page` ≠ false.** It is a *citation defect* first (offset error, locator drift,
   claim supported elsewhere in the work) — separate verdict lane from "contradicted".
6. **No semantic edits outside the ledger.** Anything touching Ainu forms, glosses, translations,
   page locators, terminology, or claim wording goes through findings → verification → packet.
7. **Fix prompts prefer deletion, citation repair, or hedging over new content.** A fix must never
   introduce a new uncited factual claim. A standing fix class is **citation downgrade**
   (overconfident wording → weaker wording + honest grade tag) when evidence is thin.
8. **Reproducibility.** Prompts, house-style sheet, convention mapping, and per-finding retrieval
   bundles (or their hashes) are versioned in `.grammar-build/qa/`.

## 2. Ledger

`.grammar-build/qa/findings/<chapter-slug>.jsonl`, one finding per line. Three independent
dimensions (per review — don't conflate evidence and workflow):

```json
{"id":"applicative-e#012","chapter":"applicative-e","lines":"195",
 "category":"internal-inconsistency","severity":"high",
 "claim":"note says Manner 2% but table says 3%","evidence":"table L145",
 "found_by":"recon-fable","checked_by":[],"retrieval":"bugaeva2010:tbl4 (pending)",
 "verdict":"open|supported|contradicted|citation-defect|not-verifiable-locally|partial",
 "disposition":"open|fix|wontfix|needs-adjudication|discovery",
 "proposed_edit":null,"fix_status":"none|packeted|applied|verified"}
```

`bun scripts/qa-status.ts` renders the removal-view dashboard (per chapter/category/status).
Seed immediately with the ~75 recon findings (already line-anchored) — they double as the
**gold set** for the pilot.

## 3. Phases

### Phase 0a — Safety rails (immediate; review-independent)
1. **`git init` + initial commit.** The repo is NOT under version control — a mass-edit campaign
   without rollback is the single biggest corruption risk found in review. Commit per fix batch
   thereafter; diff review becomes possible.
2. **Fix the PostHog `ERR_UNHANDLED_REJECTION`** that makes `bun run build` exit 1 on success —
   exit code becomes authoritative; retire the "grep for ✓ built" workaround.
3. **Staging discipline:** workers.dev (uncached) is the staging URL; grammar.aynu.org
   (edge-cached 24h) is production. Deploy = a promoted release step after lint + build + crawl +
   packet reconciliation, NOT an automatic part of every batch.
4. **Page-render crawl script:** curl every `/grammar/<slug>`, assert HTTP 200 **and** content
   sanity (chapter title present, expected `<Ex>` count rendered, no error shell) — a 200 with an
   empty shell must fail.

### Phase 0b — Deterministic lint suite (build once, free forever)
`scripts/audit-chapters.ts`, run standalone + in `build`. The 14 recon checks: build-time mirrors
of the SSR throws (m/g counts, gloss abbreviations, cite keys, Xr slugs); `Xr s=` anchor
resolution (validated nowhere today); dial closed set; Ex needs cite|constructed; morpheme-
boundary alignment (29 hits, warning + whitelist); evidence-grade closed set (~24 violations);
`‹original-needs-review›` blocking outside allowlisted magnet chapters; m-line charset (stray
b/g/j/d/z ×12); `auditRegistry()` parity (16 failures); ex-number/page monotonicity; duplicate-
sentence detection; anchor-id uniqueness; toc parity. Plus review additions: **all pipeline-token
greps** (`[UNVERIFIED]`, TODO/FIXME, model/tool names, malformed guillemets); duplicate bib
entries; unused bib entries; bib keys cited only in generated apparatus; duplicate `<Ex>` ids
across chapters; prose references to nonexistent example numbers; `<Ref>` locators that point
past a source's page range; locator-format normalization. **Pageless-cite lint takes an
allowlist** (whole-work citation is legitimate) — it flags, never blocks.
**Fix policy here:** only strictly non-linguistic mechanical items are fixed directly (registry
parity entries, duplicate anchors, toc drift). Everything touching m/g/tr/cite/grades — including
the 24 bad grade tags and 12 charset hits — becomes ledger findings (an ‹asserted›→? rewrite is a
semantic decision).
*Runner:* Fable/inline; then $0.

### Phase P — Pilot & calibration (gate for everything below)
On a stratified 8-chapter set (1 Tier-A periphery, 1 theory magnet, 2 core morphology, 1 syntax,
1 low-risk, 1 apparatus-adjacent, 1 of the 3 recon-audited chapters as gold):
- Run each candidate runner (Codex gpt-5.5; Haiku; Sonnet) through the Phase 1 and Phase 2
  protocols; score against the gold set: precision, recall, cost, wall-clock, adjudication rate.
- Calibrate page-offset maps for every dump used (script: sample cites → confirm quoted text).
- Fable audits all pilot findings once — this sets the per-runner trust levels that decide the
  final runner mix (open decision #1 resolves on data, not vibes).

### Phase 1 — Chapter-local cheap pass (all 176)
One call per chapter: source + house-style sheet → findings JSONL. Catches register leaks, tag
misuse, table-vs-prose contradictions, gloss-vs-translation mismatches, duplicated passages.
*Runner:* per pilot results (baseline: Codex first pass; Haiku Batch ≈$5–10 as the cross-check on
a **stratified sample** — silent chapters, high-finding chapters, and random ones, not silence
alone). *Fable:* house-style sheet + prompt once; stratified sample audit before mass-run.

### Phase 2 — Retrieval-grounded fact-check (the core, risk-scored)
**Prep (scripts):** claim extractor at **block level** (claim = sentence(s) + owning table/Ex/
heading context + line anchors, not bare sentences); triage of uncited claims (definitional /
internal-summary / needs-cite / empirical) so only the last two go to retrieval; retrieval
resolver (cite key:pages → OCR pages; headword → TSV rows; corpus claim → jsonl lines).
**Risk scoring per chapter (script, not vibes):** claim density, citation density, numeric-table
presence, unavailable-source ratio, recon hit rate → rank; top ~40 = Tier A (dual checker,
100% packet review of high-severity), middle = Tier B (single checker + 10% stratified Fable
audit), generated/front-matter = Tier C (scripts only).
**Protocol:** checker gets claim + exact cited pages → verdict + supporting quote. Quantitative
claims: **scripts recompute wherever repo data can** (LLMs banned from arithmetic); a
recomputation may only contradict a source if dataset + method match — otherwise it files
`not-verifiable-locally`. Verbatim quotes: fuzzy string pre-screen by script.
**Special jobs:** Vovin Man'yōshū table — the Handbook dump is *secondary*; verdict ceiling is
"supported-by-secondary" unless primary Vovin material is present. `nurmi2024` + bib gaps.
No-dump keys: verdict ceiling `not-verifiable-locally`.
*Cost:* Codex-heavy ≈$0 + wall-clock; Sonnet-only ≈$150–350 API (Batch-halved where one-shot).
Mix decided by pilot.

### Phase 3 — Whole-book consistency (MOVED BEFORE the Tier-B mass run)
Cross-chapter contradictions change how per-chapter findings are read — run early.
1. **Concordance (cheap, targeted):** script extracts every prose mention + gloss per grammatical
   morpheme (apparatus already indexes 471 morphemes → chapters) → per-morpheme bundles → one
   cheap call each flags contradictions (the `i=` class). ~471 calls: Haiku Batch ≈$5–15 or Codex.
2. **Terminology registry:** script builds the variant table (ditransitive/double-object/
   three-place; macrons; spellings); one adjudication defines canon; lint enforces thereafter.
3. **Whole-book sweep (free):** stripped prose (~600k tokens) into Fugu Ultra 1M ctx —
   contradictions, redundancies, gaps. Output = candidate findings like everything else.

### Phase 4 — Sakhalin cross-reference & discovery
1. Domain-scoped convention mapping (Fable, once) — respecting the no-auto-compare zone.
2. **~180 comparative claims** (file+line anchors from recon) → retrieve the Hokkaido book's
   treatment → compare → {consistent | prompt-to-recheck-Hokkaido | prompt-to-recheck-aynu-itah |
   open question}. Every "recheck" then goes through the Phase 2 protocol against **primary
   sources** — aynu-itah is never the evidence.
3. **Lexical diff (script):** data.json correspondences/cognates vs Hokkaido-book cited forms.
4. Architecture-level side-by-side (Fugu 1M holds both books' domain treatments) on the VALID
   list only.
*Discoveries:* divergences surviving primary-source checking are (a) fixes, (b) genuine dialectal
contrasts → **deferred backlog** (comparative notes/appendix decided AFTER the QA campaign — no
scope creep of new content mid-campaign), or (c) ‹contested› flags.

### Phase 5 — Fix application & re-verify (rolling, per completed tier)
Edit packets (finding + source quote + minimal proposed edit) applied by Sonnet workflow batches
of ≤7 chapters or by Codex. **Per-chapter diff budget:** oversized diffs escalate to manual/Fable
review regardless of finding validity. After each batch: lint suite → `bun run build` (exit code,
post-0a) → crawl touched slugs (200 + content sanity) → git commit → staging (workers.dev) →
promote to production as a release step. Fable samples 10% of applied fixes; **a final
changed-claims-only pass** re-reads every edited claim in context. Ledger → `applied/verified`.

## 4. Sequencing

Phase 0a (now) → 0b → P (pilot; **wait for Fugu review of this v2, resets Jul 6**) →
1 → 3 (early consistency) → 2 Tier A → 2 Tier B → 4 → 5 rolls after each tier.
Fixes ship incrementally via the staging→promote gate.

## 5. Fable's total budget
Design artifacts (house-style sheet, claim-extraction spec, convention mapping, prompts);
pilot audit + per-phase stratified sample audits; adjudication of disagreements and discovery
classification; final read of the 5 theory-magnet chapters; 100% review of high-severity edit
packets. Nothing else.

## 6. Decisions (RESOLVED 2026-07-04 — user delegated; Fable decided)
1. **Runner mix — DECIDED (updated with OpenRouter):** user supplied an OpenRouter key; local
   LLMs ruled out (GPU already saturated + freeze-risk rule). Sweep tier = 3 cross-family cheap
   models (qwen3-235b-a22b-2507 $0.09/$0.10, deepseek-v4-flash $0.09/$0.18,
   gemini-2.5-flash-lite $0.10/$0.40 — ~$0.15/model for the whole book, multi-sweep by design);
   verify tier = glm-4.7 / kimi-k2.5 / gemini-2.5-flash (~$35–100 for dual-checked Tier A+B)
   + Codex gpt-5.5 (subscription) as the uncorrelated checker; Fugu 1M for whole-book sweeps;
   Fable = design/audit/adjudication only. Phase-1 sweep models are FORBIDDEN from
   memory-based fact-checking (internal consistency + style only).
2. **Fix cadence — DECIDED:** ledger-first, batch fixes, staging (workers.dev) → promote.
3. **Discoveries — DECIDED:** deferred backlog until post-campaign.
4. **Lint blocking — DECIDED:** errors block build (wired); style checks warn.
5. **aynu-itah — DECIDED:** issues filed only; no edits there during this campaign.
6. **git — DONE:** repo committed (authored baseline 12e8ead; Phase-0 3ec7b21).

## 7. Execution log
- 2026-07-04: Phase 0a done — git baseline; PostHog build-crash root-fixed via bun patch
  (`bun run build` now exits 0); crawl script; staging discipline documented.
  Phase 0b done — audit suite live + wired into build (0 errors after 16 registry fixes;
  1,156 warnings recorded); gloss-concordance script replaces the planned 471-call
  Phase-3 concordance (106 inconsistently-glossed morphemes reported, incl. i= and a=
  outlier classes). Ledger seeded (28 recon findings). Phase 1 sweeps launched ×3 models.
  Fugu review of this plan still pending (limit resets Jul 6 09:00).
