# AUTHORING.md — house style for the Hokkaido Ainu reference grammar

This is the **binding** authoring guide for all ~176 chapters. It defines the
per-chapter pipeline, the quality bars, the evidence-grade vocabulary, the citation
apparatus, and how to drive the Svelte components. If a chapter and this guide
disagree, this guide wins. Read it before writing prose; keep it open while you do.

The apparatus it sits on top of:

| File | Role |
|---|---|
| `src/lib/grammar/bibliography.ts` | The **registered** bibliography (`<Ref>`/`<Ex cite>` validate every key against it). |
| `src/lib/grammar/citation-registry.ts` | Per-key **evidentiary** crosswalk: `dbSlug`, `sourceRole`, `heldLocally`, `path`. |
| `src/lib/grammar/abbreviations.ts` | Gloss-atom table + Hokkaido `dialectLabels` (`<Ex>` validates against it). |
| `rights.json` (+ `rights.README.md`) | Per-source quotation / example-reuse / attribution policy. |

---

## 1. Scope and the grammar-only boundary

This is a **grammar**, not a dictionary, encyclopedia, or ethnography.

- Describe **structure**: phonology, morphology, syntax, and the meaning/discourse
  systems that grammar encodes (TAM, evidentiality, information structure, register).
- Do **not** write lexicography: no dictionary sense-listings, no word-by-word
  glossaries, no etymological dictionaries. Lexical material appears only as
  **grammatical evidence** (an example, a paradigm cell, a class diagnostic). The
  `lexical-semantic-fields-synopsis` chapter and any morpheme index are **finding
  aids**, not dictionaries — they point into the grammar, they do not define words.
- Word lookups link **out** to the dictionary via `<A>` and the `<Ex>` morpheme
  links; the grammar holds no internal lexicon.
- Modern coinages / neo-Ainu are **out of baseline scope**: confine them to the
  sociolinguistic/revitalization chapter and clearly tagged contrast boxes (cite
  `ijas2023b`), and exclude them from corpus frequency counts.

---

## 2. The per-chapter pipeline

Every chapter is built in this fixed order. Do not skip stages; the later stages
depend on the artifacts of the earlier ones.

**Stage 1 — Gather all source treatments.**
From the domain map (sources-digest / PLAN §4) assemble every source that treats the
phenomenon: the foundational grammars (Tamura, Refsing, Shibatani, Satō 2008,
Bugaeva 2022 Handbook, Nakagawa 2024) **plus** the key per-domain articles. Pull the
held text from `../ainu-grammar/` (path in `citation-registry.ts`); for not-held
must-cites, work from the intermediating source and mark `reported`.

**Stage 2 — Build the claims / disagreements matrix.**
Before any prose, tabulate, per source: its analysis, the terminology it uses, and
where it **agrees or disagrees** with the others. Assign each source its **per-chapter
evidentiary role** (primary-data / prior-analysis / typological-framework /
philological-witness / background — see §7); the registry holds the *default* role,
the matrix records the *role in this chapter*. Foundational chapters
(person-marking, verb template, valency, TAM, evidentiality, negation,
nominalization, clause-linkage) require a **human editorial sign-off on this matrix
before** dependent chapters are drafted.

**Stage 3 — Write integrated English prose that cites all of them.**
Synthesize, don't summarize source-by-source. Triangulate the standard analysis,
state the disagreements explicitly, and cite **every** relevant treatment with
`<Ref>`. Cited keys must already exist in `bibliography.ts`.

**Stage 4 — Ground every claim in attested examples.**
Each phenomenon gets attested corpus examples with **full Leipzig interlinear
glosses** (§9). Every `<Ex>` is either `cite`d to its source (the original work,
never an aggregator — §11) **or** explicitly marked `constructed`. There is no third
option: an unmarked, uncited example fails review.

**Stage 5 — Frame it typologically and diachronically.**
Place the phenomenon against a named framework (attach its key: `mithun1984`,
`baker1988`, `keenancomrie1977`, `aikhenvald2004`, `comrie1976`, `peterson2007`,
`corbett2000`, `miestamo2005`, `stassen1997`, `talmy2000`, `nichols1986`,
`bybee1994`, …) and give its diachrony / grammaticalization source where known
(`vovin1993`, `bugaeva2025`, `nam2021`, `itabashi2001`, …). Sakhalin/Kuril contrast
goes in a tagged contrast box.

**Stage 6 — Original analysis only where licensed; grade every nontrivial claim.**
Original re-analysis is permitted **only in the five theory-magnet domains** (§5).
Everywhere else, report and synthesize the literature. Every nontrivial or novel
claim carries an **evidence-grade label** (§4).

**Stage 7 — Wire cross-references and glossary terms.**
Link related chapters with `<Xr>` (never a hardcoded "Chapter 12" / "§3.2"). Link
technical terms to the glossary. Add a chapter-final "References cited" list — it is
generated automatically by `ChapterShell` from what you actually cited, so just cite
correctly.

---

## 3. Quality bars (a chapter is not done until all pass)

1. **Every example is cited or constructed.** `<Ex>` has a `cite` (resolving to a
   real bibliography key) or `constructed`. No exceptions.
2. **Every gloss atom is documented.** Each ALL-CAPS gloss tag exists in
   `abbreviations.ts`; `<Ex>` throws at build otherwise (do not weaken it — add the
   abbreviation instead).
3. **Every `<Ref>`/`<Xr>` resolves.** Unknown bib key or chapter slug throws.
4. **Cite the original, never the aggregator** (§11). No `ainu-corpora` /
   `ainu-dictionaries` / `itak.aynu.org` as a citation target.
5. **Framework keys are attached.** A named typological framework gets a bibliography
   key, not a bare prose name.
6. **Every nontrivial claim is graded** (§4); novel claims outside the five domains
   are not allowed (§5).
7. **No priority claims** ("first", "only", "unique", "never before") — §6.
8. **Neo-Ainu is contained** to the revitalization chapter + tagged boxes.
9. **Dialect tags come from the fixed set** (§10); no ad-hoc dialect labels.
10. **Two-script `lang` discipline** (Hokkaido — **no Russian, no Cyrillic**): every
    inline Ainu form is `lang`-tagged `ain-Latn` (canonical) or `ain-Kana`; contrast
    glosses are Japanese `ja` or English only. Never `ain-Cyrl`, never `ru`. Sakhalin
    *Ainu* contrast forms stay in Latin/Katakana. `<A>` and `<Ex>` handle the tagging;
    raw inline forms must do it by hand.
11. **Grammar-only boundary** (§1) is respected — no lexicography.
12. **Foundational-chapter matrices are signed off** before dependents are drafted.
13. **Every printed form is attested or registered.** Every Ainu form in `<A w>`,
    `<Ex m>`, and `<i lang="ain-Latn">` must resolve to a corpus token or a
    morpheme-database entry: run `bun run attest:gen` to (re)build the attestation
    cache, then `bun run attest`. An unattested form at an `<A>` site is an error
    (the dictionary link it renders is dead by construction); at `<Ex>`/inline sites
    it is a warning. Legitimate gaps — Sakhalin/Kuril contrast forms, quoted
    historical spellings, schematic notation — are registered with their reason in
    `src/lib/grammar/attestation-exceptions.ts`.

---

## 4. Evidence-grade labels

Every nontrivial/novel claim is tagged with exactly one grade. The set is closed:

| Grade | Use it when… |
|---|---|
| **consensus** | All major sources agree; uncontroversial, well-attested. |
| **contested** | Sources genuinely disagree; present the positions, take none as settled. |
| **corpus-confirmed** | A claim we **checked against the corpus** and the data bear out. |
| **corpus-suggested** | The corpus **points toward** it but the evidence is thin/indirect. |
| **speculative** | A plausible but unverified idea (diachronic guess, gap-filling). |
| **original-needs-review** | **Our own** new analysis (allowed only in the five domains, §5), flagged for editorial review. |

**How to mark inline.** End the claim with an evidence-grade tag. Until the checked
`<Eg>` component lands, author it as a literal small-caps token in guillemets, placed
at the end of the sentence or clause it scopes:

```
The indefinite a= is best analysed as an agent-defocusing device rather than a
true passive ‹contested›. In the Saru corpus it never co-occurs with an overt
agent phrase ‹corpus-confirmed›.
```

Rules: one grade per claim; put it at the **end** of the claim it scopes; default
unmarked prose is treated as **consensus** (so only mark what is *not* consensus,
plus anything you want to foreground). `original-needs-review` **must** be paired
with the reasoning and the source matrix that motivated it.

---

## 5. Original analysis — the five theory-magnet domains only

New, original re-analysis (and therefore the `original-needs-review` grade) is
permitted **only** in:

1. **Alignment** (split-intransitive / hierarchical; person paradigm)
2. **Applicatives** (`e-`, `ko-`, `o-`)
3. **Noun incorporation / polysynthesis**
4. **Evidentiality** (the `ruwe`/`hawe`/`siri`/`humi` system)
5. **Clause-linkage** (the `hine`/`akusu` switch-reference-like opposition)

In every **other** chapter, the job is to **report, synthesize, and triangulate** the
existing literature — not to innovate. This is a hard constraint from the reviewers
(REVIEW-SYNTHESIS §6): "novel analysis in every chapter" is explicitly dropped.

---

## 6. Comprehensiveness, not priority (honesty rule)

The grammar's differentiator is **comprehensiveness and integration**, stated
honestly — never priority. Do **not** write "the first English grammar to…", "the
only description of…", "never before analysed", "unique". If a comparison is truly
load-bearing, it must carry a source audit and survive editorial override; the
build-time priority-claim lint flags these tokens. Prefer: "the most comprehensive
treatment to date integrates X, Y, Z" — and only if you can cite X, Y, Z. Don't
disparage or "first"-claim against the sibling Sakhalin sketch (`aynu-itah`) either.

---

## 7. Citation keys and source roles

**Citation-key scheme** (also documented at the top of `bibliography.ts`):

> `key = lastnameYEAR` — all-lowercase ASCII, no diacritics, no spaces. Surname only,
> romanised; Japanese authors by romanised surname with macrons stripped (佐藤知己 →
> `sato`, 中川裕 → `nakagawa`, 切替英雄 → `kirikae`). Multi-author → first author's
> surname. `YEAR` is the 4-digit year (ranges keep the start). Same-surname+year
> collisions get suffix `a`,`b`,`c…` in order of first citation, **or** a short
> topical suffix when clearer (`bugaeva2021poss` vs `bugaeva2021antip`) — one
> convention per author-year.
> Examples: `tamura1996`, `sato2008`, `nakagawa2024`, `kirikae1989`.

Adding a source: add the `BibEntry` to `bibliography.ts` **and** its `RegistryEntry`
to `citation-registry.ts` in the same change. Run `auditRegistry()` (exported from the
registry) to confirm the two key-sets match.

**Source roles** (the registry's `sourceRole`; the *per-chapter* role lives in the
claims matrix, §2):

- **primary-data** — attested language data: corpora, dictionaries-as-data, text
  editions, recordings.
- **prior-analysis** — descriptive/analytic studies and reference grammars of Ainu.
- **typological-framework** — general-linguistic frameworks applied to Ainu.
- **philological-witness** — early records / old documents valued as witnesses
  (Batchelor, Edo-period, Kaga-ke), cited with a reliability caveat.
- **background** — history-of-research, sociolinguistics, revitalization, orientation.

`reported: true` (in `bibliography.ts`) flags works cited second-hand or not consulted
directly (Tamura 2000, Hattori 1964, Chiri 1953, Murasaki 1979, the frameworks);
they render with a "reported" badge.

---

## 8. Authoring components

Chapters are `src/lib/grammar/chapters/<slug>.svelte`. The body is rendered inside
`ChapterShell`, which seeds the numbering contexts and auto-builds the title,
abstract, and chapter-final reference list. Import what you use:

```svelte
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>
```

### `<S>` — numbered section (self-nesting → §N.m.k)

```svelte
<S t="The detransitive prefix i-" id="i-prefix">
	<p>…prose…</p>
	<S t="Productivity and lexicalization">
		<p>…nested subsection, auto-numbered…</p>
	</S>
</S>
```

`t` (title, required), `id?` (anchor for `<Xr>`/links). Numbering is automatic from
render order — never hardcode "§4.2".

### `<Ref>` — in-text citation

```svelte
<Ref k="tamura2000"/>            <!-- Tamura (2000) -->
<Ref k="bugaeva2006" p="813"/>   <!-- Bugaeva (2006: 813) -->
<Ref k="shibatani1988" paren/>   <!-- (Shibatani 1988) -->
<Ref k="nakagawa2024" p="§13.2" paren/>  <!-- (Nakagawa 2024: §13.2) -->
```

`k` (bib key, required — throws if unknown), `p?` (page/§), `paren?` (fully
parenthesised). Citing here also adds the key to the chapter's auto reference list.

### `<Ex>` — interlinear example

```svelte
<Ex
	m="poro cep a=e"
	g="big fish 4.A=eat"
	tr="We ate a big fish."
	cite="nakagawa2024:§13.2"
	dial="SAR" place="Nibutani" />

<Ex
	m="seta i-e"
	g="dog ANTIP-eat"
	tr="The dog eats (something)."
	lit="the dog something-eats"
	cite="bugaeva2006; sato2008:45" />

<Ex m="ku=kor" g="1SG.A=have" tr="I have it." constructed />
```

Props: `m` (morphemic line — words by spaces, derivational morphemes by `-`, person markers by `=`; the `=` is the Nakagawa-lineage orthographic convention, NOT a Leipzig clitic claim — see nakagawa2024:58–60),
`g` (gloss line — **one gloss-word per morphemic word**; the counts must match or it
throws), `tr` (free translation), and optional `ain` (surface line when it differs
from the segmentation), `orig`+`origLang` (source script, e.g. `orig="…" origLang="ain-Kana"`),
`lit`, `cite`, `dial`, `place`, `note`, `id`, `constructed`.

`cite` syntax: `"key"`, `"key:pages"`, or several separated by `;` —
`cite="tamura1996; sato2008:45"`. Every key must be in `bibliography.ts`; every
ALL-CAPS gloss atom must be in `abbreviations.ts`. Give attested examples a `cite`;
give illustrations `constructed`. Use `id` on examples you will cross-reference.

### `<Xr>` — cross-reference to another chapter

```svelte
<Xr ch="applicative-e"/>                         <!-- Chapter N (title) -->
<Xr ch="antipassive-detransitive-i" s="i-prefix">the detransitive i-</Xr>
```

`ch` (target slug, required — throws if unknown), `s?` (section anchor), optional
link-text children. **Always** use `<Xr>`; never a literal "Chapter 12" or "§3.2"
(the audit fails the build on hardcoded numbers — chapters get renumbered).

### `<A>` — inline Ainu word (links to the dictionary)

```svelte
The antipassive <A w="i-" gl="something/someone"/> demotes the object, as in
<A w="ipe" gl="eat (a meal)"/>. Compare the bare verb <A w="e">e</A>.
```

`w` (the word, also the dictionary query), `gl?` (gloss shown in quotes), optional
children for display text differing from the query. `<A>` and `<Ex>` morpheme links
handle `lang="ain"` tagging and the dictionary link-out for you.

---

## 9. Glossing rules (Leipzig + the abbreviations table)

- Follow the **Leipzig Glossing Rules**. Three aligned lines minimum: morphemic `m`,
  gloss `g`, translation `tr`; add `ain` (surface) and `orig` (source script) when
  they differ.
- Derivational boundary `-`, person-marker boundary `=` (orthographic convention, not a clitic analysis), fused/portmanteau with `.` inside one
  gloss word (`4.A`, `1SG.A`).
- **One gloss-word per morphemic word** — counts must match exactly.
- Every grammatical category is an **ALL-CAPS atom** from `abbreviations.ts`
  (`ANTIP`, `APPL`, `CAUS`, `REFL`, `RECP`, `NMLZ`, `EVID`, `REP`, `A`, `S`, `O`,
  `1SG`, `4`, …). Lexical glosses stay lowercase. If you need a category that is not
  yet listed, **add it to `abbreviations.ts`** (with a definition) rather than
  weakening the validator.
- Person/number portmanteaux validate atom-by-atom (`4`, `A` are each documented);
  keep them compositional.

---

## 10. Hokkaido dialect tags

`<Ex dial>` takes one tag from `dialectLabels` (`abbreviations.ts`). The fixed set:

| Tag | Variety |
|---|---|
| `HK` | Hokkaido (not further specified) |
| `SAR` | Saru |
| `CHI` | Chitose |
| `ISH` | Ishikari |
| `TOK` | Tokachi |
| `HOR` | Horobetsu |
| `SHI` | Shizunai |
| `ASA` | Asahikawa |
| `YAK` | Yakumo |
| `SA` | Sakhalin (cited for contrast) |
| `KU` | Kuril (cited for contrast) |

Finer locality (e.g. "Nibutani") goes in `place`, not in a new tag. Sakhalin/Kuril
examples are **contrast only** — Hokkaido is the object of description.

---

## 11. Rights and attribution (see `rights.json`)

- **Cite the original work, never the aggregator.** A corpus example is attributed to
  its underlying narrator/edition (its db.aynu.org slug via `citation-registry.ts`),
  never to `ainu-corpora`; a dictionary gloss cites the underlying dictionary
  (`tamura1996`, `kayano1996`, `nakagawa1995`), never `itak.aynu.org`.
- **Short cited excerpts only.** Individual attested sentences/clauses as `<Ex>`;
  never long continuous passages, whole tables, or sections. The Part-XXII glossed
  texts are the highest-exposure material — keep cited passages minimal.
- **Translations are editorial unless quoted**, and are marked as such.
- Match each source to its `rights.json` row; if none, apply `_default`.

---

## 12. Cross-references and glossary

- Inter-chapter links: `<Xr ch="slug" s="anchor"/>` only.
- Technical terms link to the grammar's own glossary (a grammar-internal store, **not**
  the itak.aynu.org lexicon). Until the checked `<Gl>` component lands, link terms to
  `/grammar/glossary#term`; once it lands, switch to `<Gl term="…">`.
- Example cross-references use a stable `id` on the `<Ex>`; reference them through the
  planned `<ExRef>` (backed by the build-time example index), not a typed-in "(13.2)".

---

## 13. Chapter file skeleton

```svelte
<!-- src/lib/grammar/chapters/<slug>.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Integrated prose citing all treatments — <Ref k="tamura2000"/>,
		<Ref k="sato2008" p="…"/>, <Ref k="bugaeva2022"/> — with disagreements stated
		and graded ‹contested› where they diverge.
	</p>

	<Ex
		m="…" g="…" tr="…"
		cite="…" dial="SAR" />

	<p>
		Typological framing via <Ref k="mithun1984" paren/>; diachrony via
		<Ref k="vovin1993" paren/>. See also <Xr ch="related-slug"/>.
	</p>
</S>
```

The title, one-paragraph abstract, and the auto-generated "References cited in this
chapter" list are supplied by `ChapterShell` — do not hand-write them.

---

## 14. Prose style — academic register, not "AI style"

Write like a descriptive linguist publishing a reference grammar, not like a chatbot.
The single clearest machine-prose tell is the **antithesis tic**: "not X but Y", "X
rather than Y", "neither … nor", "not merely … but", "is less … than it is …", "far
from being …". One genuine contrast in a section is fine; reaching for the frame in
every paragraph is the failure. Rules:

- **Do not** default to "not A but B" or its cousins. State what the form does in a plain
  declarative and cite the evidence. If a contrast is truly needed, make it once,
  concretely, and move on.
- **Cut LLM throat-clearing and filler**: "It is important to note", "Crucially",
  "Interestingly", "Indeed", "It is worth noting", "Notably", hedge-stacks ("seems to
  perhaps suggest"), and summary sentences that merely restate the paragraph just written.
- **Do not** editorialize about the analysis ("strikingly", "remarkably", "elegantly").
  Let the data and citations carry the weight.
- Vary sentence length and opening; avoid marching through parallel "X is …, Y is …,
  Z is …" lists. The target register is Tamura, Satō, Bugaeva, Dal Corso — measured,
  source-anchored, economical.
- **No meta-commentary about the book or its method.** Do not announce scope or approach
  inside the prose ("Sakhalin Ainu is relevant only as a comparison", "which remains the
  object of description", "as we will see", "this grammar treats…", "it is worth noting
  here"). State the linguistics directly. Comparative **Sakhalin/Kuril material is
  presented as data** with its dialect tag (`SA`/`KU`) and a glossed example where it
  illuminates the Hokkaido system; its comparative status is shown by the tag, not
  declared in a sentence.

This is a hard quality bar (add it to §3): a chapter that reads as AI-generated fails,
regardless of factual correctness.

## 15. Linking technical terms (and original-language glosses once)

- Link a technical term to the chapter that **defines** it, on its **first** mention in
  a chapter only, as `<Xr ch="defining-slug">term</Xr>` — e.g. "possessed form" →
  `concept-form-affiliative-form`; "applicative" → `applicative-system-overview`;
  "noun incorporation" → `noun-incorporation-object`. Do **not** link every later mention.
- Give an **original-language term** (所属形, 名詞化辞, 形式名詞, etc.) **once, in the
  chapter that defines the concept** — never repeated in every chapter that uses it.
  Elsewhere use the English term and rely on the `<Xr>` link to the defining chapter.
- General linguistic vocabulary links to the glossary (`/grammar/glossary#term` until the
  `<Gl>` component lands).
