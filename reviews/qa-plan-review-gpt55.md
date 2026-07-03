**P0**

- `bun run build` gating on “two ✓ built lines, NOT exit code” is unsafe. Exit code must be authoritative. Parsing success text can miss post-build failures, partial builds, deploy hook failures, or stderr-only errors. This can publish a broken book.

- Incremental `wrangler deploy` after each fix batch is too aggressive. There is no stated staging URL, git checkpoint, rollback, or post-deploy crawl. A bad LLM-applied fix can go live immediately. Make deploy a separate promoted step after local build, route crawl, diff review, and ledger reconciliation.

- “Two independent checkers agree” is not enough for contradiction edits. If both see the same incomplete OCR slice, bad page map, bad prompt framing, or wrong convention mapping, they will agree on a false positive. Agreement should be required but not sufficient for destructive edits; the edit packet needs cited evidence, exact affected sentence, proposed replacement, and a reviewer-visible rationale.

- “Not found on cited page” must not imply “false.” It may mean bad page offset, citation locator drift, source table spans adjacent pages, bibliography key mismatch, or the claim is supported elsewhere in the cited work. Treat `not-found-on-page` as citation-defect first, not factual contradiction.

- Phase 0 says “Also fix the ~80 existing mechanical violations” before the ledger workflow. That breaks the plan’s own “findings before fixes” rule. Some “mechanical” items, especially morpheme boundaries, gloss labels, romanization, and example citations, are linguistic content. Auto-fixing them can silently corrupt examples.

- The Sakhalin book cannot be used as an authority source. It is also Fable-authored and has open TODOs in the person-marking area. It is useful as an adversarial checklist only. Any Hokkaido change derived from Sakhalin comparison must be re-grounded in primary Hokkaido sources.

- The convention mapping for Sakhalin diffing is a potential corruption point. Mapping `4 ↔ INDEF` or `PL ↔ COLL` globally may erase real analytical differences. It should be domain-scoped and directional, with “do not compare automatically” zones for person marking until the TODOs are resolved.

- The plan assumes page offsets and local dumps are reliable enough for automated retrieval. Only Nakagawa is explicitly verified. Every dump/page map used for verdicts needs a calibration test before mass checking, or the campaign will manufacture false citation errors.

**P1**

- Cost minimization is underspecified. “Codex/free” may minimize API spend but not total cost if it increases orchestration, retries, adjudication, and wall-clock time. The plan needs a measured pilot: tokens/chapter, findings/hour, precision, recall proxy, adjudication rate, and retry rate for Codex vs Haiku/Sonnet.

- Haiku cross-checking only chapters where Codex finds nothing is weak. “Found nothing” may reflect low-risk content or model blindness. Sample across silence, high-finding chapters, and random normal chapters. Otherwise you measure only one failure mode.

- The 10-chapter Fable audit is not enough unless stratified. It should include Tier A, Tier B, apparatus, one source-heavy historical chapter, one morphology chapter, one chapter with known seeded errors, and one “silent” chapter.

- There is no gold set. Before mass runs, seed a small calibration set from the 75 recon findings plus known false alarms. Measure whether each protocol recovers them and how many bogus findings it creates.

- The claim extractor is doing too much if it treats sentence + citation as the claim unit. Grammar claims often span tables, examples, headings, captions, preceding definitions, or multiple sentences. Extraction needs block-level context and stable source line anchors.

- Uncited factual claims should be triaged before retrieval. Some are definitional, some internal summaries, some source-backed but citation omitted, and some genuinely empirical. Sending all to retrieval will waste cost and raise noise.

- Quantitative claims need provenance rules. Recomputing from `ainu-corpora/data.jsonl` may not match the source’s corpus, filtering, dialect set, tokenization, or definition. A recomputation can contradict a source only if the dataset and method are explicitly the same.

- “Corpus frequency figures matched exactly” should not generalize. Add deterministic scripts for every count/rank/table that can be derived from current repo data, and prohibit LLM verification of arithmetic where scripts can do it.

- Missing deterministic checks: broken `<Ref>` locators against local page files; bibliography keys cited only in generated apparatus; duplicate bib entries by author/year/title; unused bibliography entries; citation locator format normalization; duplicate `<Ex>` IDs across chapters; undefined gloss abbreviations in examples; prose mentions of example numbers that do not exist; source-year inconsistencies such as Tamura 1996 dictionary vs Tamura 1996 intro.

- Missing deterministic checks: all shipped pipeline tokens, not just `‹original-needs-review›`; literal model/tool names; `[UNVERIFIED]`; TODO/FIXME; “as above/below” dangling references; “this chapter” copied from another chapter; malformed guillemets.

- The “pageless cite lint” needs an exception policy. Some citations are intentionally whole-work references. Blocking every pageless citation for page-bearing sources will cause fake cleanup and over-specific bogus locators.

- The ledger schema lacks fields needed to prevent bad fixes: source span, confidence, verifier model/version, retrieval inputs hash, proposed edit, affected file/line, owner, and “requires source access” flag.

- Ledger statuses conflate evidence state and workflow state. `verified-real`, `fixed`, `wontfix`, and `needs-adjudication` are not one dimension. Use separate `verdict`, `disposition`, and `fix_status`.

- “Curl every touched slug for 200” is too shallow. Need HTML content sanity: no SSR error shell, no missing examples, no unresolved anchors, no hydration/runtime console errors if applicable, and no generated apparatus regressions.

- The plan does not protect against LLM fixes introducing uncited replacement claims. Fix prompts should prefer deletion, citation repair, or narrowing language over adding new factual content.

- Tiering by chapter count is vague. Risk should be assigned by claim density, citation density, numeric/table presence, unavailable-source ratio, known recon hit rate, and source type. A “core morphology” chapter can be high-risk if it defines central morphemes used across the book.

- Phase ordering should move whole-book consistency earlier. Cross-chapter contradictions can change how fact-check findings are interpreted. Run morpheme/terminology concordance before or during Tier A, not after most fact-checking.

- The Vovin table needs specialist handling. “Handbook ch. 6 dump” may itself summarize Vovin rather than contain the primary argument. The output should probably be “cite-supported by Handbook” unless original Vovin material is actually present.

- For no-local-dump keys, “verify via secondary citation only” must be marked as lower confidence. Do not turn absence of local source into factual acceptance.

**P2**

- Add a “no semantic edit” mechanical-fix mode: whitespace, duplicate anchors, broken slugs only. Anything touching Ainu forms, glosses, translations, page locators, or terminology enters the ledger.

- Add a diff budget per chapter in Phase 5. Large rewrites should require manual review even if all findings are valid.

- Add source-quality labels: primary text, dictionary, grammar, secondary typology, Discord/personal communication, generated factbase. This would help prevent epistemic-tag inflation.

- Add a “citation downgrade” fix class: replace overconfident prose with weaker wording when evidence is thin, instead of trying to prove or disprove every claim.

- Keep Sakhalin-derived “discoveries” out of the Hokkaido book until after the QA campaign unless they fix clear errors. Comparative expansion is scope creep and can introduce new unverified claims.

- Store prompts and retrieval bundles in versioned files. Otherwise later audits cannot reproduce why a finding was accepted.

- Add a final “changed claims only” pass after fixes. It is cheaper and more useful than rereading full chapters.

- Use staging deploy plus full route crawl before production. Production deploy should be a release step, not part of every QA batch.