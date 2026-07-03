# Deterministic-validation inventory — ainu-grammar-hokkaido

Repo: `/home/mkpoli/projects/Ainu/ainu-grammar-hokkaido`. 176 chapter files in `src/lib/grammar/chapters/` (1:1 with the 176 TOC slugs — verified, zero mismatch). 904 `<Ex>` interlinear examples corpus-wide.

## (a) Component attribute contract

All in `src/lib/grammar/components/` (exported via `index.ts`: `S, Ex, Ref, A, Xr, FreqChart`; plus internal `ChapterShell`, `GrammarSearch`, `SectionOutline`).

**`Ex.svelte`** — interlinear example (self-closing tag, double-quoted attrs; all build scripts regex-parse it as such):
| attr | req | semantics |
|---|---|---|
| `m` | yes | Morphemic line. Words separated by spaces, morphemes by `-`, clitics by `=` (e.g. `ku=nu hi anak k=eramuan pe ne`) |
| `g` | yes | Gloss line, exactly one gloss word per `m`-word. ALL-CAPS atoms (regex `(?<![A-Za-z])[0-9]*[A-Z][A-Z0-9]*(?![a-z])`) must exist in `abbreviations`; pure digits exempt; capitalised lexical glosses (`Russian`) exempt via lookarounds |
| `ain` | no (40 uses) | Surface line when it differs from segmentation |
| `orig` / `origLang` | no (7 uses) | Original-orthography line (Cyrillic/katakana) + BCP-47 tag, default `ain` |
| `tr` | yes | Free English translation (rendered in ‘…’) |
| `lit` | no (13) | Literal translation |
| `cite` | no (765) | `'bibKey'`, `'bibKey:pages'`, several joined by `'; '`. Required for attested examples; each key must be in `bibliography`; registered into per-chapter `ctx.cited` |
| `dial` | no (780) | Dialect tag; typed `keyof typeof dialectLabels` but since that's `Record<string,string>` it degrades to `string` — **NOT statically checked**. In-use values: SAR 434, HK 145, CHI 117, SHI 30, TOK 17, ISH 11, SA 10, HOR 8, ASA 7, YAK 1 (all valid; KU declared but unused) |
| `place` | no (441) | Locality/speaker/ex-number detail, e.g. `"Nakagawa ex. 515"` |
| `note` | no (870) | Explanatory note paragraph |
| `id` | no (19) | Anchor id |
| `constructed` | no (175; 36 also carry `cite`) | Boolean; marks non-attested illustration, renders "constructed example" |

Morpheme pieces of `m` are auto-linked to `itak.aynu.org/?q=` (`links.ts`) after stripping `[*()[\]?.,!'"‘’“”…]`; pieces <2 chars or containing digits unlinked. Example numbering `(n)` from `GrammarContext` counter (`context.ts`).

**`S.svelte`**: `t` (title, req), `id` (anchor). Auto-numbers §N.x.y via context; heading level h2–h4.
**`Ref.svelte`**: `k` (bib key, req — throws if unknown), `p` (pages/section), `paren` (bool). Registers into `ctx.cited`.
**`Xr.svelte`**: `ch` (chapter slug, req — throws via `chapterBySlug`), `s` (section anchor — **never validated**), optional children as link text.
**`A.svelte`**: `w` (Ainu word/dictionary query), `gl` (gloss), optional children. No validation at all.
**`FreqChart.svelte`**: `title`, `note?`, `series: {key,label}[]`, `data: {label, values: Record<string,number>}[]`, `labelLang?`. No series-key/data parity validation.
**`ChapterShell.svelte`**: `num`, `title`, `summary`, `component`; renders auto per-chapter reference list from `cited`.

**Prose-level conventions** (from `AUTHORING.md` §4 and chapter `topic-marking-anakne.svelte`): every nontrivial claim ends with an inline evidence-grade token in guillemets — closed set of exactly 6: `‹consensus› ‹contested› ‹corpus-confirmed› ‹corpus-suggested› ‹speculative› ‹original-needs-review›` (unmarked prose = consensus; a checked `<Eg>` component is planned but does not exist). Community attributions follow the pattern `(nukopoli, aynu-corpora Discord YYYY-MM-DD; <Ref k="aynucorporadiscord" />)`. Guillemets are also (separately) used for dialect tags in prose: `‹SA› ‹KU› ‹ISH› ‹TOK› ‹SHI›`.

## (b) Existing validation

1. **Runtime SSR throws only** (the real "validation"): `Ex` throws on m/g word-count mismatch, unknown gloss abbreviation, unknown `cite` key; `Ref` throws on unknown `k`; `Xr` throws on unknown `ch`. Critically, `/grammar/[slug]` is **SSR, not prerendered** (`src/routes/grammar/+layout.ts` — edge-cached SSR), so `vite build` never executes these throws; they surface as request-time 500s. `bun run check` = `svelte-kit sync && svelte-check` — types only; `dial` and all attr *values* pass typecheck.
2. `scripts/gen-apparatus.ts` (runs in `dev`/`build`): regex-scans chapters for `<S>`/`<Ex>`, generates the 4 back-matter index chapters; tolerant, validates nothing (silently drops unknown cite keys into the index as raw labels).
3. `scripts/gen-grammar-search.ts` (runs in `dev`/`build`): deliberately tolerant text extraction → `static/grammar-search.json`; validates nothing.
4. `citation-registry.ts` exports `auditRegistry()` (bibliography↔registry key parity) but **nothing calls it** — the intended `scripts/audit-apparatus.ts` doesn't exist. It currently FAILS: 16 bib keys missing from registry (`alonso2022, chiba2015, chiri1955, chiri1956, diessel1999, hoppertraugott2003, janhunen2022, kindaichi1931, kindaichi1935, nakagawa2001b, ochiai2026, shiraishitangiku2022, tamura1973, tangiku2022, vovin2022, yoshikawa2018`).
5. `lint` = prettier + eslint (style only).

## (c) NEW deterministic checks a script could do (with measured current state)

Static, regex/AST over chapter sources + imported data modules — all verified feasible offline with bun:

1. **m/g word-count match** (mirror of the SSR throw, moved to build time) — currently 0 violations.
2. **Gloss-abbreviation membership** (same ATOM regex vs `abbreviations.ts`) — currently 0.
3. **`cite`/`Ref k` keys resolve to `bibliography`** — currently 0.
4. **`dial` in `dialectLabels` closed set** — currently 0, but *only* runtime-unchecked luck; typing doesn't protect it.
5. **`Xr ch` slugs resolve to TOC** — currently 0. **NEW: `Xr s=` anchors resolve to an `<S id>`/`<Ex id>` in the target chapter** — currently 0, but validated nowhere today (not even at SSR).
6. **Every `<Ex>` has `cite` or `constructed`** — currently 0 violations (36 legitimately have both).
7. **Per-word morpheme-boundary alignment**: count of `-`+`=` in each m-word == in its gloss word (Leipzig rule) — currently **29 mismatches** / 904 (e.g. `ruwe` ~ `track-POSS`, `kamuyyukar` ~ `kamuy-yukar`, `hekattar` ~ `child-ASS`, `=an` ~ `4.S`); some are deliberate portmanteau glosses → warning-level check or whitelist.
8. **Evidence-grade closed set**: `‹…›` tokens must be one of the 6 grades (or a declared dialect tag). Currently **~24 violations**: `‹proposed›`×12, `‹asserted›`×7, `‹disputed›`, `‹community-proposed›`, `‹grade›`, and 2 free-text grades (`‹speculative for those page numbers›`, `‹consensus for the basic semantic descriptions›`).
9. **`original-needs-review` domain restriction** (AUTHORING §5: allowed only in the 5 theory-magnet domains) — a slug allowlist check; currently appears in 10+ chapters incl. `copula-ne-predicate-nominals`, `perfective-anterior-a` — needs adjudication.
10. **Orthography charset for `m=`**: legitimate inventory is `a c e h i k m n o p r s t u w y` + `= - ' .` + accented `á é í ú` + capitals in proper nouns. Corpus currently contains stray `b`(5) `g`(3) `j`(2) `d`(1) `z`(1) — likely loanwords or typos; a whitelist-with-exceptions check would surface them.
11. **`bibliography` ↔ `citationRegistry` parity** via existing `auditRegistry()` — currently **16 failures** (see (b)4). Also checkable: bib key format `^[a-z]+[0-9]{4}[a-z]*$`, `year` consistency with key, `region` enum, `rights.json` coverage of cited sources.
12. **Anchor-id uniqueness per chapter** (`S`/`Ex` ids) — currently 0 duplicates.
13. **Cross-cutting**: chapters/ dir ↔ `toc-final.json` slug parity (currently exact); every chapter imports only exported components; `<Ex>` attrs restricted to the known set (guards regex-parsers against drift); `FreqChart` series-key/data parity; `aynucorporadiscord` citations carry the `(person, aynu-corpora Discord YYYY-MM-DD; …)` attribution pattern; `‹SA›/‹KU›`-tagged forms only in contrast contexts; every generated apparatus chapter is up-to-date (re-run gen-apparatus and diff).
14. **Page-render smoke test** (the only way to catch what SSR throws pre-deploy, per project memory): after `vite build`, curl every `/grammar/<slug>` for HTTP 200 — deterministic, no LLM.

## (d) Structured data files

- `src/lib/grammar/bibliography.ts` — `Record<string, BibEntry>`, **159 entries** (author, citeAuthor, year, title, titleTr?, container?, editor?, pages?, publisher?, place?, url?, lang?, note?, region enum, reported?).
- `src/lib/grammar/citation-registry.ts` — 143 entries (dbSlug?, sourceRole 5-value enum, heldLocally, path?) + unused `auditRegistry()`.
- `src/lib/grammar/abbreviations.ts` — ~80 gloss abbreviations + 11 `dialectLabels`.
- `src/lib/grammar/toc.ts` — GENERATED from `/toc-final.json` (176 chapters, 20 parts) by `scripts/gen-grammar.ts`.
- `/rights.json` (+ `rights.README.md`) — per-source rights matrix (quotationPolicy, exampleReusePolicy, translationStatus, attributionRequired).
- `static/grammar-search.json` — GENERATED search index `{slug num title part summary sections[] text}`.
- `messages/{en,ja,ain-Latn,ain-Kana}.json` — paraglide UI i18n, not corpus.
- **There is no standalone structured corpus of examples** — the 904 `<Ex>` tags in the `.svelte` sources ARE the corpus; all scripts extract them by regex, so a validator can too (attrs are reliably double-quoted, tags self-closing).