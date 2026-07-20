# STYLE GUIDE — Prose Voice for the Reference Grammar

This guide governs the prose voice of every chapter. It complements `AUTHORING.md`
(citation rules, gloss atoms, doctrine) by defining *how the grammar reads*.

The target register: **a modern reference grammar in the tradition of Chiri, Dal Corso,
and Bugaeva** — scientifically precise, evidence-led, and humane. Not a textbook, not a
blog post, not a marketing page. The reader is a linguist who wants the facts, the
analysis, and the citations, in that order, with no ceremony.

---

## 1. The three commitments

Every sentence earns its place by serving at least one of:

1. **Accuracy** — the analysis is correct and attributed to a source.
2. **Comprehensiveness** — the relevant data, variation, and prior accounts are covered.
3. **Comprehensibility** — a competent linguist can follow the argument on first reading.

When these conflict, accuracy wins. A dense, correctly-cited sentence is better than a
smooth, vague one. But never use "comprehensiveness" as an excuse for padding: covering
more data in fewer words is the goal.

---

## 2. Banned patterns (AI-isms)

These are hallmarks of LLM-generated prose. Remove on sight.

### 2.1 Throat-clearing (delete the lead-in entirely)

| Ban | Why | Fix |
|-----|-----|-----|
| *It is important to note that…* | announces importance instead of demonstrating it | delete the clause; start with the fact |
| *It is worth noting / noting that…* | same | delete |
| *It should be noted that…* | same | delete |
| *Crucially, …* | filler adverb | delete, or keep only if the point is genuinely the crux of an argument |
| *Notably, …* | filler | delete |
| *Indeed, …* | filler | delete unless confirming a just-stated claim |
| *Interestingly, …* | editorializing | delete — let the reader decide what is interesting |
| *Importantly, …* | filler | delete |

**Rule:** if removing the opening words leaves the sentence's meaning unchanged, the
opening words were filler. Remove them.

### 2.2 Editorializing (the grammar does not have feelings)

| Ban | Fix |
|-----|-----|
| *strikingly / remarkably / fascinating(ly)* | delete; state the fact |
| *elegant(ly)* | delete, or replace with the precise structural property |
| *seamless(ly)* | delete |
| *beautifully* | delete |
| *impressive(ly)* | delete |

The grammar reports what the language does. Admiration is the reader's to feel.

### 2.3 Buzzwords (replace with the precise term)

| Ban | Replace with |
|-----|--------------|
| *delve (into)* | *examine, discuss, treat, turn to* |
| *tapestry* | *system, inventory, set* |
| *landscape* (metaphorical) | *system, field, situation* |
| *pivotal* | *central, decisive* — or name *why* it matters |
| *groundbreaking* | delete; cite the work and let it speak |
| *underscore / highlight* (figurative) | *show, indicate, confirm* |
| *showcase* | *illustrate, exemplify* |
| *intricate / meticulous* | delete, or describe the actual complexity |
| *robust* | *attested, consistent, productive* — with the evidence |
| *nuanced* | describe the actual distinction |
| *comprehensive* | only if the chapter genuinely covers the full range; otherwise delete |

### 2.4 Antithesis tics — review, do not blanket-delete

The construction *not X but Y* / *rather than* is **legitimate** when it states a genuine
contrast the reader needs (e.g. "the negative is lexical **rather than** analytic"). It is
an AI-ism only when it is **hedging or redundant**:

- **Keep:** "X is a suffix **rather than** a clitic" — a real analytical contrast.
- **Cut:** "This is **not merely** a curiosity **but** a window into…" — rhetorical inflation.
- **Cut:** "…confirming the analysis **rather than** undermining it" — if there is no live
  doubt, the contrast is filler.

**Rule:** every *rather than / not…but* must oppose two positions a linguist might
genuinely hold. If one side is a straw man, cut it.

### 2.5 Meta / editorial-policy sentences

The grammar describes Ainu. It does **not** describe itself:

- Ban: *"This chapter provides a comprehensive overview of…"* → just give the overview.
- Ban: *"It is beyond the scope of this grammar to…"* → either do it or say nothing.
- Ban: *"As we shall see…" / *"We will return to this…" → use a cross-reference `<Xr>`.
- Ban: *"This grammar adopts the convention that…"* repeated per chapter → state conventions
  once, in the conventions chapter or a footnote.

A short orienting sentence at the top of a chapter is fine (*"This chapter treats X, Y,
and Z"*). What is banned is the self-congratulatory or scope-disclaiming variant.

---

## 3. Positive voice

What the prose *should* sound like.

### 3.1 Lead with the fact or the form

> The negative existential **isam** is suppletive: it has no affirmative counterpart.

Not: *"It is interesting to observe that the language makes use of a suppletive negative
existential, namely isam."*

### 3.2 Attribute every claim in the same sentence

> Chiri analyses **rusuy** as a suffix, on the grounds that it precedes the plural
> *-hci* (Chiri 1942: §26; Tangiku 1998: 231–232).

Citation is not an afterthought in a footnote; it is woven into the clause. A reader
should never have to wonder "says who?"

### 3.3 Vary sentence length for rhythm, not for padding

Short sentences state results. Longer sentences unpack a derivation or a paradigm. Do not
pad a short point into a long sentence, and do not chop a genuinely complex argument into
staccato fragments.

### 3.4 Prefer the active, the concrete, the attested

- Active: *"Bugaeva reconstructs…"* over *"it has been reconstructed by Bugaeva that…"*
- Concrete: name the form, the dialect, the source text.
- Attested: every example sentence comes from the corpus with its original source cited —
  never invented.

### 3.5 Honest hedging

Where the data is thin or contested, say so plainly: *"The evidence is thin; only two
tokens are attested."* Do not soften with buzzwords. A flagged ‹contested› or
‹corpus-suggested› tag plus a candid sentence beats a paragraph of *nuanced* hand-waving.

---

## 4. Doctrine (from AUTHORING.md — restated for prose)

- The `=` boundary is a **Nakagawa-lineage orthographic convention, not a Leipzig clitic
  claim**. The prose must not assert that a person marker "is a clitic" in the grammar's
  own voice. It may *report* a source's clitic analysis (with citation) and may discuss the
  clitic/affix question as an open scholarly matter.
- Neutral terms in the grammar's own voice: **person index / person marker / bound index /
  affix / element** (for the plural `pa` whose status is contested). Reserve *clitic* for
  cited analyses and meta-discussion.

---

## 5. The Fable benchmark

The Sakhalin grammar (aynu-itah, written with multi-model/Fable triage) is the prose
benchmark for this project. Its hallmarks, to be matched:

- **Density:** every sentence carries analysis *and* citation; almost no filler.
- **Zero throat-clearing and editorializing.**
- **Citation woven into the clause**, not footnoted.
- **Candid about evidence and controversy** (‹contested›, "the evidence is thin").
- **"rather than" used only for genuine contrasts.**

When revising a Hokkaido chapter, ask: *"Would this sentence pass in the Sakhalin
grammar?"* If it reads like filler there, cut it here.

---

## 6. Pre-publication checklist (per chapter)

- [ ] No throat-clearing lead-ins (§2.1)
- [ ] No editorializing adverbs (§2.2)
- [ ] No buzzwords left unconverted to precise terms (§2.3)
- [ ] Every *rather than / not…but* states a genuine contrast (§2.4)
- [ ] No self-referential / editorial-policy sentences (§2.5)
- [ ] Every claim carries an in-line citation (§3.2)
- [ ] Every example is attested with its original source cited
- [ ] No voice assertion of clitic status (§4)
- [ ] Passes the Fable-benchmark read-aloud test (§5)
