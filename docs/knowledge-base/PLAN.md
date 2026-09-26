# The Hokkaido Ainu grammar as a claim-centric knowledge base

Design and staged plan. Revision of 2026-09-10. Prior art with sources is in `PRIOR-ART.md`.

## 1. Purpose

grammar.aynu.org holds a reference grammar of Hokkaido Ainu written chapter by chapter. The chapters are the primary artefact, and every fact in them exists only as prose. This plan replaces that arrangement with a knowledge base whose primary records are statements attributed to sources at a locus, grouped into claims, organised under topics, and linked to corpus examples, lemma records and bibliographic records. The reference grammar becomes one projection of that base: an ordered reading path through the topics, with prose that is generated from claims, edited by people, and traceable back to claims clause by clause.

The same base serves machine readers. Every claim, example and topic is addressable, typed and cited, so retrieval tools, MCP clients and evaluation harnesses consume the grammar as data.

The design continues a line of work in linguistics that goes back to Nordhoff (2008, 2012) and Good (2012), who argued that a descriptive grammar is a database of linked descriptive units curated from distinct sources, and that the printed book is one linearisation of it. It borrows its record model from the claim and evidence systems of other fields (nanopublications, micropublications, Wikidata statements, ORKG templates, GRADE) and its comparative layer from typological databases coded from grammars (Grambank, AUTOTYP, CLDF). The nearest working precedent for a proposition-centred store of grammatical knowledge is GrammarXiv (§3).

## 2. The chapter-first build

| Measure | Value |
| --- | --- |
| Chapter files | 178 |
| Sections with frozen ids | 1,409 |
| Paragraphs | 3,830 |
| Tables | 379 |
| Prose (words, markup excluded) | about 304,000 |
| Sentences | 11,098 |
| Sentences carrying at least one citation | 4,469 |
| Sentences carrying no citation, grade or cross-reference | 4,784 |
| Inline citations in paragraphs | 6,172 |
| Inline citations without a page | 1,573 |
| Interlinear examples | 967 |
| Examples marked constructed | 172 |
| Examples citing a source with a locus | 535 |
| Examples citing a source without a locus | 295 |
| Cross-references between chapters | 6,030 |
| Dictionary links | 1,966 |
| Bibliography entries | 182 |
| Evidence-grade tags in prose | 1,201 |

Citations by source, top of the list:

| Key | Citations | Without page |
| --- | --- | --- |
| nakagawa2024 | 1,789 | 37 |
| sato2008 | 500 | 17 |
| aynucorporadiscord | 440 | 440 |
| ijas2023 | 196 | 196 |
| bugaeva2012 | 172 | |
| shiraishi2022 | 165 | |
| refsing1986 | 163 | 21 |
| endo2022 | 161 | 58 |
| shibatani1990 | 126 | |
| dalcorso2018 | 116 | |

QA findings against that text as of 2026-08-13: 1,505 findings, of which 973 are citations without a page, 415 are forms not found in the corpus or the morpheme database, and 116 have a human verdict. A locator audit found 67 of 199 checkable example-number and page pairs correct before repair and 195 after. A finding is a flag for review; the error rate per release is unknown until each class has a denominator.

Three structural causes stand behind the findings.

- A fact stated in two chapters is two independent strings. The same morpheme is glossed `1SG.O` in one chapter and `4.O` in another, and a source is cited with pages in one chapter and called unavailable in another, because nothing joins the two statements.
- A citation is decoration on a sentence. Nothing checks that the cited page contains the claim, and page numbers drift because they were produced from an offset constant instead of being read from the page footers.
- Regeneration is impossible. A corrected fact cannot propagate; every fix is a hand edit to prose, and prose is what is expensive to produce.

The house style did ask for source matrices, evidence grades and sign-off on foundational chapters, and the factbases hold page-cited inventories. What was missing was an enforceable shared representation with reliable identities and an acceptance gate. A schema does not repair a gate that is ignored, so the gate is the first design object of the plan (§8).

## 3. The field

Keywords that name the design space: electronic grammaticography, digital reference grammar, grammar as database, form-meaning pair, descriptive categories and comparative concepts, structural decomposition, autotypologising, CLDF and CLLD, Grambank feature coding, interlinear glossed text, Ligt and linguistic linked open data, nanopublication, micropublication, statement-level provenance, evidence ontology, discourse graph, scholarly knowledge graph, living systematic review, evidence gap map, claim extraction and verification, attributed generation, data-to-text generation, intelligent textbook, prerequisite graph. Japanese and Chinese equivalents are listed in `PRIOR-ART.md` §1.

What the traditions teach:

| Tradition | Representative work | What carries over |
| --- | --- | --- |
| Electronic grammaticography | Nordhoff 2008, 2012; Good 2004, 2012; Musgrave and Thieberger 2012 | The grammar is a set of encapsulated descriptive units indexed by form and by function; the book is one linearisation. Decomposition alone loses coverage (completeness, coextensivity) and coherence (consistency, consonance, compatibility), and each needs its own check. |
| Typological databases | Grambank, WALS, APiCS, AUTOTYP, TerraLing, CLDF | A datapoint names its language, parameter, value, source with pages, coder and comment; an example is attached to a value; unknown is distinct from absent; categories are recorded as encountered and mapped to comparative types afterwards; releases are versioned. |
| Comparative concepts | Haspelmath 2010, 2020; Good and Hendryx-Parker 2006 | A source's category is that source's; a topic is a comparative concept; the mapping between them is an attributed record with a stated relation; contested categorisations stay contested. |
| Claim and evidence models | nanopublications, micropublications, SEPIO, ECO, EVI, Wikidata statements, CiTO, OpenCitations, PROV-O, CIDOC CRM E13 and CRMinf | Assertion, provenance and assessment are separate objects; the citation act is an entity with the locus on it; evidence types are a closed vocabulary; lines of evidence are graded separately; challenges propagate; contradiction is a typed link. |
| Evidence synthesis | GRADE, living systematic reviews, evidence gap maps, PICO | Certainty belongs to the evidence for a question and decomposes into named reasons; a living work has an update protocol and dated states; a question-by-source matrix makes absence visible. |
| Claim extraction and verification | SciFact, FActScore, attributed question answering, argumentative zoning, contradiction detection | A verdict returns the passage it used; generated text is decomposed into atomic facts and checked for attribution; extraction starts from sentences in the author's own voice; most apparent contradictions dissolve into a difference of scope. |
| Interlinear text as data | Leipzig Glossing Rules, Xigt, Ligt, ODIN, GlossLM, the Tromsø Recommendations | Examples are tiered records aligned by identifiers; source gloss labels and normalised labels coexist; an example resolves to a corpus item with a persistent identifier. |
| Language models and grammars | MTOB, Aycock et al. 2024, Zhang et al. 2024 and 2025, GrammaMT, LingGym, AutoTypologist | Parallel examples drive translation gains and prose drives feature identification, so a retrieval unit carries both; rule retrieval is the bottleneck, so rules are individually addressable and, where possible, executable; a no-context baseline is required because models may already know Ainu from the web. |
| Generated reference works | Scholia, Abstract Wikipedia, Lsjbot, STORM, intelligent textbooks | A page can be a view over a graph; outline curation is its own stage; generated volume without editorial acceptance is disowned by its community. |
| Working digital grammars | Matter's lingdocs and cldf-ldd (Yawarana), Lau 2021 (Abesabesi), East Cree, Language Science Press | Descriptive text that references a dataset instead of retyping examples, CLDF components for morphs and lexemes, a paradigm database behind explanatory pages. |
| Japanese precedents | 小川ほか2022 (TEI text layer with RDF graph layer), UniDic (lexicon and corpus referring to each other by entry id), はごろも (a grammatical item with attested examples and a separately rated difficulty), GrammarXiv | A passage has a position in a text layer and a statement is abstract in a graph layer; attributes added on one side of an identifier link reach the other; the item, its examples and its assessment are separate fields. |
| Chinese precedents | 谭晓平ほか2015 (121 grammar points with 21 attributes in four groups, each value with a corpus frequency), 汉语方言语法特征语料库 (22 categories by 711 sentences by 29 dialect points), 汉语语法点查询系统 (one grammar point, many attributed textbook explanations), 王晓光・宋宁远2017 (nanopublication against micropublication) | A topic template with frequencies per attribute; a fixed category table and a fixed sentence table make cross-dialect comparison a query; one point with many attributed explanations is the claim layer; the argument block belongs in the record. |

What stalled, and why it matters here: GOLD and the ISO data-category registry did not become dependable shared vocabularies, and the CLARIN registry that followed moves slowly, so the topic vocabulary is owned locally, defined, versioned, and mapped outward. The claim-graph systems of the 2000s (ScholOnto, SWAN, HypER) had sound models and little sustained authoring, because entry needed modelling skill and the tools sat apart from where writing happened. Nordhoff's authoring platform left no public artefact. Lsjbot's millions of generated articles were eventually refused by the communities that received them. The Academia Sinica archive of Formosan languages closed with its project and survives as a snapshot, which is the argument for canonical data in open formats kept apart from any one site.

GrammarXiv (グラマカイブ, grammarxiv.net) is the open-access database of "linguistic truths" led by 成田広樹 at Tokai University, developed from 2021 with KAKENHI support and in regular web operation since January 2024. Its unit of record is the proposition. Unit propositions include observational data (an acceptability judgement with its example), hypotheses and theories; relational propositions link them (a hypothesis that explains a datum, a hypothesis incompatible with a datum, a publication or user supporting or rejecting a proposition), and a relation can itself receive further relations and evaluations. The project's 2021 report enumerates hypothesis, data, phenomenon or topic, literature and relation entries. Registered users vote truevote, falsevote or uncertainvote on entries; the store is a Neo4j graph queried in Cypher. A 2024 study registered exhaustively the examples and hypotheses about the reflexive 自分 in three handbooks and examined which acceptability judgements the handbook arguments rest on. Three things transfer: the proposition as unit, the relation vocabulary, and the demonstration that an inferential relation (this datum explains that hypothesis) can be assessed independently of the datum and the hypothesis, which is why relations in this design have identity, provenance and assessments of their own. Three things differ: GrammarXiv merges a publication with its theory, where this design keeps source, statement at a locus and proposition apart; its assessment is a vote by users, where this design derives support from source statements and signs editorial assessments; and it has no corpus evidence, no page anchoring and no generated prose, which are the parts a reference grammar cannot do without. Entries there are written by hand by trained users, and the project runs entry-writing workshops, which is the adoption problem seen from the other side. Its production schema and export facilities were not examined; the publications establish the conceptual model and nothing more is assumed.

## 4. Principles

The program-wide principles carry over unchanged: facts are grounded by retrieval, identifiers are names and are minted once, storage has three layers (canonical text in git, a compiled serving database, regenerated artefacts), machine output enters as flagged records and a human promotes it, and the MCP server is the single surface through which models consume the data.

Eight further principles are specific to a claim base.

1. Proposition, source statement, evidence and assessment are four separate records. What is asserted, who asserted it and where, what supports it, and how far the project accepts it never merge into one field.
2. A statement without a locus is a candidate. It may exist in the base, but it is never cited by generated prose.
3. Sources disagree, and the base records the disagreement as a relation between claims with the dimension along which they differ. It does not resolve disagreements by deleting one.
4. The book is a projection. Prose derives from claims and can be regenerated; a human edit to prose is a signed activity with a diff and a reason.
5. Topics are a controlled vocabulary with frozen identifiers, phrased as questions. Each source's own categories are recorded as that source's categories, and the mapping from a category to a topic is an attributed record.
6. Every stored claim reads back as a sentence. The structured payload exists beside the sentence, never instead of it.
7. Not inspected, inspected and not found, and denied by a source are three different records, and the gap map shows all three; the default for a topic nobody has looked at is not inspected.
8. Length is not a target. The next edition may be shorter than the first, uneven in depth, and explicit about what is unknown; its measure is how much of it a reader can check.

## 5. Data model

### 5.1 Layers

| Layer | Records | Role |
| --- | --- | --- |
| Entities | topic, category, mapping, form, construction, doculect, comparative concept | What is talked about |
| Evidence | example, corpus query, survey, source, asset, page map, quotation | What supports it, and what was looked for and not found |
| Claims | statement, claim, relation, assessment | Who says what, and how far the project accepts it |
| Organisation | topic links, reading path, release | How topics hang together, in which order a reader meets them, and which revisions an edition contains |
| Narrative | narrative unit | The generated and edited prose, clause by clause |
| Index | lemma link, sentence link, source link, external id, alias, split | How records join the rest of the ecosystem and the outside world |
| Agents | agent, activity | Who asserts, who extracts, who reviews, and when |

A file is a container, never an identity. Every record has a global id and can be referenced from any file. Provenance follows the entity, activity, agent pattern of PROV-O: an extraction run is an activity with a model, a prompt version and a date; a review is an activity with a person, a date, the revisions it looked at and its verdict. Display flags (checked, reviewed, stale) are derived from activities and never stored as independent fields.

### 5.2 Identifiers

```
topic:person/fourth-person-an          claim:person/no-agentivity-split-in-s-marking
stmt:2024-nakagawa-ainugo-kobunten@scan-2026-06/l0132-03
stmt:2022-bugaeva-handbook@epub-2026-06/s7.3-02
stmt:aynu-corpora-discord@export-2026-07/m1229355242446131221-01
ex:2024-nakagawa-ainugo-kobunten@scan-2026-06/l0134-ex4
query:corpus/an-per-genre-2026-09      survey:2008-sato-ainugo-bunpo@scan-2026-06/same-subject-wa
narr:person/fourth-person-an#3         path:reference-grammar
category:tamura1996/所属形             mapping:tamura1996-shozokukei-to-affiliative
doculect:hokkaido/southwest/saru       agent:editorial
```

- Topic, claim and narrative ids carry a home-domain prefix (`sources`, `phon`, `prosody`, `nominal`, `person`, `verb`, `valency`, `tam`, `evidential`, `negation`, `clause`, `complex`, `discourse`, `register`, `diachrony`, `contact`). The prefix is naming metadata chosen when the record is minted and never changed; no consumer derives topic membership, routing, permissions or file placement from it, so a topic moves without changing its id. A neutral prefix `misc` serves records whose home is undecided, and no taxonomy decision is required to mint one.
- Statement, example and survey ids name the source slug from db.aynu.org, the frozen asset the extraction read (a scan and OCR revision, an EPUB build, a markdown snapshot, a chat export), and a locator whose form depends on the asset: a scan leaf `l0132`, an EPUB section `s7.3`, a markdown line `L120`, a message id `m…`. Two scans of the same work can put different material on one leaf, so the asset is part of the identity.
- Source ids are db.aynu.org slugs; the base mints no source identifiers. Lemma ids come from the morpheme database registry. Corpus sentence ids are the corpus's `{collection}/{doc}#{idx}`, recorded with the transcription revision; whether those ids stay stable under resegmentation is unverified and is the first question for the corpus maintainers (§7, stage 0).
- Renames and merges go through `aliases.jsonl`. A split is its own record, one old id to several successors, and a consumer that meets a split has to choose a successor; an alias would hide the choice.
- A claim keeps its id through corrections of wording; a change of scope or commitment is a new proposition linked by `supersedes` or `refines`.

### 5.3 Topics, categories, mappings

A topic is a descriptive question about the language, phrased so that claims from any source attach to it without presupposing an answer.

```yaml
id: topic:person/fourth-person-an
label: {en: The suffix =an, ja: 接尾辞=an}
question: >-
  Which subject does =an index, under which readings (indefinite, first-person
  plural inclusive, honorific, narrative first person), and what conditions
  the readings?
includes: [readings of =an, distribution by genre, co-occurrence with a=]
excludes: [the prefix a= as such, plural =as]
broader: [topic:person/fourth-person, topic:discourse/narration]   # acyclic, several allowed
related: [topic:valency/antipassive-i]
contrasts_with: [topic:sakhalin/person-an-ahci]
comparative_concepts: [concept:grambank/GB030]
source_categories: [category:tamura1996/不定人称, category:bugaeva2012/fourth-person]
template: [readings, conditioning, dialect_distribution, frequency_by_genre]
grouping: phenomenon            # optional presentation label; carries no semantics
steward: agent:editorial
```

- `broader` is polyhierarchical and acyclic. Possession sits under nominal morphology and under argument structure; evidential nominalisation sits under nominalisation and under evidentiality. A single parent would hide one of the two relationships. A topic reaches a reader through several routes under one identity.
- Reading prerequisites belong to reading paths (§5.6), because what a reader needs first depends on the audience. A claim's `depends_on` is a premise used by an analysis. `related` and `contrasts_with` are navigation. The four meanings stay apart.
- The template lists the properties claims on the topic are expected to cover, so that the topic page renders as a source-by-property table. A template slot is satisfied by a reviewed disposition: a supported account, a documented disagreement, a bounded gap (inspected, nothing found), or an explicit exclusion of scope. Honest incompleteness is a valid state of a slot.
- `grouping` (domain, cluster, phenomenon, facet, or nothing) is a presentation label for interfaces that want one. In the project's own words a domain is a galaxy, a cluster a star system, a phenomenon a planet and a facet a moon; nothing in the data depends on the label, and no curator has to decide it before minting a topic.

Categories belong to their sources. A category record carries the source's label and any aliases the source uses; a separate term record exists only when one label has several referents or is cited independently. A mapping is an attributed record with a stated relation.

```yaml
category: {id: category:tamura1996/所属形, source: 1996-tamura-ainugo-nyumon, labels: [所属形], defined_at: {asset: scan-2026-06, locator: l0041}}
mapping:
  id: mapping:tamura1996-shozokukei-to-affiliative
  from: category:tamura1996/所属形
  to: category:bugaeva2012/affiliative-form
  relation: equivalent_within_scope     # equivalent_within_scope | narrower | broader | overlaps | distinct | unresolved
  scope: {doculects: [doculect:hokkaido/southwest/saru]}
  by: agent:reviewer-a
  evidence: [stmt:2012-bugaeva-southern-hokkaido-ainu@scan-2026-06/l0473-02]
```

Nothing asserts that two sources mean the same thing unless a mapping says who asserted it, and a mapping is required only where two categories are asserted to correspond; one category may be relevant to several topics without any mapping. The same rule covers gloss conventions: `AFF` names an exponent in one glossing tradition and 所属形 names a nominal category in another, and the two need not denote the same kind of object. Notation is a transformation, never a claim: rewriting a hyphen as `=` when quoting Satō or Ijäs is a transcription transformation recorded on the example, and the `=` of the Nakagawa lineage carries no assertion about clitic status.

### 5.4 Statements, claims, relations, assessments

Extraction produces statements: what one source commits to at one locus, in normalised form, with its own scope and payload and with the passage that anchors it. Curation groups statements into claims: propositions that several sources may assert, propose, doubt or reject. A statement is immutable evidence with revisions; a claim is an editorial object. The statement keeps its own scope so that grouping can be checked for widening a source's commitment, and attribution is assessed on the statement revision, never on the claim.

```yaml
# statement (one source, one asset, one locus; revisions are appended, never rewritten)
id: stmt:2024-nakagawa-ainugo-kobunten@scan-2026-06/l0132-03
revision: 1
source: 2024-nakagawa-ainugo-kobunten
asset: asset:2024-nakagawa-ainugo-kobunten/scan-2026-06      # frozen scan and OCR revision, with its page map
locator: {leaf: l0132, section: "8.3", example: null}          # printed labels come from the page map
anchor:                                                        # text-quote selector, stored privately
  exact: "…"
  prefix: "…"
  suffix: "…"
  match: 0.97
statement: {en: "…", ja: "…"}
type: distribution
payload: {construction: intransitive person indexing, environment: one-place verbs, splits_by: null}
scope: {doculects: [doculect:hokkaido], quantifier: all, modality: actual, conditions: [], exclusions: []}
stance: asserts                  # asserts | proposes | doubts | rejects | reports | presupposes
hedge_original: null
reported: null                   # {agent, source, stance} when stance is reports
extracted_by: act:extract-2026-10-01-r3
inspected_original: false
```

```yaml
# claim (proposition; curated; owns the links to statements and evidence)
id: claim:person/no-agentivity-split-in-s-marking
revision: 2
type: distribution
statement: {en: "Hokkaido Ainu intransitive subject indexing does not split by agentivity; all one-place verbs take the S set."}
payload: {construction: intransitive person indexing, environment: one-place verbs, splits_by: null}
scope:
  doculects: [doculect:hokkaido]
  speakers: null
  period: null
  genres: null
  registers: null
  conditions: []
  exclusions: []
  quantifier: all                # all | none | exists | generic | usually | measured | example_only | unstated
  modality: actual               # necessary | possible | actual | unstated
topics: [topic:person/alignment-and-agentivity]
statements:
  - {id: stmt:2024-nakagawa-ainugo-kobunten@scan-2026-06/l0132-03, revision: 1}
  - {id: stmt:2012-bugaeva-southern-hokkaido-ainu@scan-2026-06/l0473-02, revision: 1}
evidence:                        # lines of evidence, each with its own kind; roles belong to the link
  - kind: author-statement-with-example
    items: [{ex: "ex:2024-nakagawa-ainugo-kobunten@scan-2026-06/l0132-ex2", role: positive_instance}]
  - kind: corpus-attestation
    items: [{query: "query:corpus/s-marking-agentive-vs-patientive-2026-09", role: no_counterexample}]
relations:
  - {kind: contrasts, claim: claim:valency/lexical-agentivity-in-incorporation, differs_in: level-of-analysis, by: agent:reviewer-a}
discovered_in: [book-v1:alignment-split-intransitive#uniform-s/p1/s1]   # coverage link; never provenance
```

Claim types form a closed list, each with a payload schema enforced by the validator; the variants are implemented as the pilot exercises them, and a type without a schema yet is stored with a free payload and flagged.

| Type | Payload asserts |
| --- | --- |
| `existence` | a form, category or construction exists in a doculect |
| `form-function` | a form or construction expresses a function, with argument roles |
| `membership` | a lexeme or form belongs to a category, by a diagnostic |
| `distribution` | environment, licensing conditions, exceptions |
| `ordering` | slots, precedence, adjacency, optionality, repetition |
| `paradigm-cell` | the exponent of a cell (person, number, role, …); paradigms are rendered from cells, with the source's table kept as evidence |
| `alternation` | an alternation and its conditioning, including sandhi |
| `frequency` | population, counted event, numerator, denominator, value, method (source-reported or analysis run) |
| `variation` | a variable, its alternatives, and their conditioning across doculects, speakers, genres or periods |
| `diachrony` | input, output, proposed process, chronology |
| `analysis` | a higher-level position (alignment type, wordhood, clitic status), with its premises as `depends_on` and its derivation rule stated |
| `judgement` | grammaticality or acceptability of an example: the example, the intended interpretation, the context, the judge or source, the method |
| `absence` | a source states that something does not exist or does not occur |

Support is derived at build time from the statements a claim lists, with stance and lineage rules applied: a count of publications and a count of independent lines of evidence are two different numbers, and five reproductions of one recorded utterance are one lineage. Nothing stores support totals canonically.

Assessments are activities that target a specific revision.

| Target | Question | Verdicts |
| --- | --- | --- |
| statement revision | does this represent the source faithfully | verified, corrected, split, insufficient, report-only |
| claim revision and its evidence | what support and what limits does the project recognise | accepted, plausible, open, doubtful, rejected, indeterminate |
| relation | does the inferential relation hold (this datum explains, this example challenges) | holds, partial, fails |
| narrative revision | is this wording an acceptable account of the positions it cites | approved, revise |

Each verdict carries reasons from a closed list (`independent-sources-agree`, `corpus-consistent`, `corpus-contradicts`, `single-source`, `constructed-examples-only`, `framework-dependent`, `dated-fieldwork`, `reported-not-inspected`, …), the agent, the date, and the revisions examined. A verified statement of a rejected proposition is a normal state: "Author A proposes P" can be approved for attributed reporting while P is not endorsed. Narrative uses are therefore typed: a clause may cite a claim as `endorsed` (the project holds it), `reported` (an attributed position), or `contested` (presented with its alternatives), and only an accepted claim may be cited as endorsed.

The six-grade vocabulary used in the chapters (consensus, contested, corpus-confirmed, corpus-suggested, speculative, original-needs-review) becomes a display mapping over derived support, evidence kinds and the latest assessment, so that a grade can no longer contradict the citations under it.

Evidence kinds are a closed list: `corpus-attestation`, `elicited-datum`, `speaker-judgement`, `author-statement-with-example`, `author-statement-without-example`, `repeated-from-another-source`, `editorial-inference`.

Relations between claims: `supports`, `contradicts`, `refines`, `supersedes`, `depends_on`, `instantiates`, `contrasts`, `retracts`. Every relation has an id, an author and, where reviewed, an assessment. `contradicts` requires incompatible commitments over overlapping scope and carries `differs_in` (`dialect`, `period`, `register`, `framework`, `level-of-analysis`, `scope`, or `unresolved`); most apparent contradictions between descriptions of Ainu dissolve into a difference of dialect base or analytic framework, and the link is where that finding is recorded. Two analyses can share every observation and still differ in diagnostics or assumptions, so a difference in premises is one explanation among several and `unresolved` is an honest value; what `unresolved` never licenses is prose that asserts both sides without qualification. `supersedes` records replacement within a stated analysis or editorial history and says nothing about the merit of a newer publication.

Challenges propagate. When a statement is withdrawn (its source proves unreliable, its example is re-transcribed, a reviewer records a failed attribution), every claim that lists it and every narrative unit that cites that claim is flagged in the next build. A failed anchor match against a newly generated OCR revision is a re-anchoring task, never a withdrawal: the old evidence stays anchored to the revision it was verified against.

Frequency claims keep unknown denominators unknown. A percentage reported by a source is `method: source_reported` and is scoped to the material the source describes; it is neither recomputed nor extended to the whole language.

### 5.5 Evidence

Examples are tiered records aligned by identifiers, never column-aligned prose.

```yaml
id: ex:2024-nakagawa-ainugo-kobunten@scan-2026-06/l0134-ex4
tiers:
  text:   {value: "mean cuk ne pe merayke=an ka somo ki no", notation: nakagawa-2024}
  kana:   {value: "…"}
  morphs: [{id: m1, form: mean, lemma: lemma:mean.vi}, {id: m2, form: cuk, lemma: lemma:cuk.n}, …, {id: m6, form: "=an", lemma: lemma:an.pers}]
  gloss:  [{morph: m1, source_label: "寒い", normalised: be.cold}, …, {morph: m6, source_label: "4.S", normalised: "4.S"}]
  translation: {ja: "…", en: "…"}
origin: attested                  # attested | elicited | constructed
doculect: doculect:hokkaido/southwest/saru
derivations:                      # explicit links, each naming the tiers it affects
  - {from: {source: 2024-nakagawa-ainugo-kobunten, asset: scan-2026-06, locator: {leaf: l0134, example: 4}}, tiers: [text, gloss, translation], transformations: [renotation-hyphen-to-equals]}
  - {from: {source: <text-edition slug>, locator: {…}}, tiers: [text, translation], verified: false}
  - {from: {sentence: "chiba-358/4/2-2#0", transcription_revision: "…", span: [tok4, tok9]}, tiers: [text]}
  - {from: {recording: <recording id>, segment: {start_s: 120.4, end_s: 128.9}, speaker: person:…}, tiers: [text], verified: false}
media: null
rights: rights:2024-nakagawa-ainugo-kobunten/excerpt
```

The text, the translation, the segmentation and the glosses of one example can derive from different inputs, so derivation is a set of links with endpoints and affected tiers; a single chain could not represent it. An example's evidential role (positive instance, counterexample, judgement) lives on its link from a claim, because the same example can support one proposition and challenge another. Each morph keeps the source's gloss label and a normalised label. A lemma link is an accepted analysis with a method and an agent, distinct from a lookup candidate; a registered lemma attests a form, never the phrase or the construction the example is said to demonstrate. New tiers are added without rewriting old ones.

Corpus queries are activities with pinned inputs and retained results, and the build reads the retained results.

```yaml
id: query:corpus/an-per-genre-2026-09
tool: corpus_frequency_list
implementation: corpus-api@2026.9.2
inputs: {corpus_revision: "data.jsonl@a1b2c3", annotation_revision: "morph_gloss@2026-08"}
params: {pattern: "=an", group_by: genre, dialect: hokkaido}
result: {rows: 4, total: 1834, retained: "queries/results/an-per-genre-2026-09.json"}
run_at: 2026-09-20
run_by: agent:pipeline/corpus-v1
```

A frequency claim cites a query. Refreshing a query against a new corpus revision is a separate activity whose diff is reviewed before any claim cites the new result; a deterministic site build never acquires new evidence. A pinned, inspected occurrence is sufficient evidence for a claim of existence; a non-empty query result certifies neither a universal generalisation nor coverage of the documentary record, and no validator pretends otherwise.

Surveys record bounded searches that found nothing, so that a non-finding is a dated fact.

```yaml
id: survey:2008-sato-ainugo-bunpo@scan-2026-06/same-subject-wa
question: Does this source state a same-subject restriction on wa-linked clauses?
inspected: [{section: "第6課"}, {leaves: [l0060, l0073]}]
search_terms: [同一主語, 主語が同じ]
method: keyword_search_plus_section_reading
result: not_found_in_inspected_material   # explicitly_denied | explicitly_unresolved | not_found_in_inspected_material | unreadable | unavailable
by: agent:reviewer-a
date: 2026-10-03
```

Sources are modelled at two levels. A source is the work (the db.aynu.org record). An asset is a frozen thing that was read: a scan with its OCR revision, an EPUB build, a markdown snapshot, a chat export. A scan asset carries a page map: one row per leaf with the printed label read from the footer (Arabic, Roman, unnumbered, duplicated or missing). Printed page labels are derived from the selected page-map revision at display time and are never stored on statements, so an offset constant exists nowhere. The need is concrete: two working documents in the project record the Nakagawa 2024 offset as +3 and as +4, both marked verified, and the Satō 2008 offset was calibrated at +12 by probe voting when the footers show +17.

Quotations follow a publication mode per source: `record` (full text may appear), `excerpt` (short attributed quotation), `pointer` (locus only), `internal` (never displayed). Anchor quotes that verify statements are private canonical data; every public projection carries the locus and the normalised statement. Under the Japanese Copyright Act a quotation must be justified in extent and attributed (Articles 32 and 48), and there is no safe word count in either Japanese or English; the rights table decides per source, and cumulative extraction of examples and tables from one source is reviewed as a whole.

### 5.6 Narrative, reading paths, releases

A narrative unit is one paragraph of prose attached to a topic, with the claims each clause rests on, bound to the exact text of that revision.

```yaml
id: narr:person/fourth-person-an#3
revision: 4
topic: topic:person/fourth-person-an
path: path:reference-grammar
bundle: {revision: sha256:…, required_claims: [claim:…, claim:…], required_disagreements: [claim:…]}
text_hash: sha256:…
sentences:
  - id: s1
    text: "The suffix =an indexes an intransitive subject whose identity the speaker leaves open."
    role: empirical
    coverage:
      - {fragment: "indexes an intransitive subject whose identity the speaker leaves open", claim: claim:person/an-marks-indefinite-s, claim_revision: 2, use: endorsed}
  - id: s2
    text: "In narrative it is the ordinary first-person form, and the two readings are distinguished by context alone."
    role: empirical
    coverage:
      - {fragment: "it is the ordinary first-person form", claim: claim:discourse/an-narrative-first-person, claim_revision: 1, use: endorsed}
      - {fragment: "distinguished by context alone", claim: claim:discourse/an-reading-disambiguation, claim_revision: 1, use: reported}
  - id: s3
    text: "The prefix a= is treated in the next section."
    role: navigation
    target: topic:person/a-prefix
generated_by: act:draft-2026-11-02
```

Coverage is recorded per clause, as a text fragment of the exact revision, where a sentence combines commitments; "both", "only", "therefore" and "never" introduce claims of their own even when every noun already has a citation. Editing any text, including a heading, caption, table cell or translation, invalidates the coverage it carried. A claim id on a fragment is a traceability link; a separate review activity establishes that the claim entails the clause, and the build reports recorded verdicts and unresolved findings without claiming to have proved entailment. Sentences with the role `navigation` or `transition` carry no claim and are limited to connective text. Editorial synthesis that goes beyond the sources becomes an attributed `analysis` claim with its premises and its author, never a sentence that appears during prose polishing. Every human edit is one signed activity carrying the diff and a reason; there is no separate edit log.

A reading path specifies an audience, a scope, the topics in order, prerequisites within that path, the required questions and disagreements per topic, the permitted depth, and waypoint text.

```yaml
id: path:reference-grammar
audience: linguists
label: {en: A Reference Grammar of Hokkaido Ainu}
order:
  - {domain: sources}
  - {domain: phon, order: [topic:phon/consonants, topic:phon/vowels, topic:phon/s-palatalisation, …]}
  - {domain: person, depth: full}
  …
prerequisites:
  - {before: topic:person/affix-architecture, after: topic:person/fourth-person-an, strength: hard}
waypoints:
  - {before: topic:person/fourth-person-an, narr: narr:path/reference-grammar/why-fourth-person}
```

The current 23-part, 176-chapter outline becomes the first reading path. Other paths (a learner's course, a typologist's tour, a corpus-first walk) reuse the same topics and narrative units in a different order. A path is authored; it is never a traversal of graph edges.

A release is a membership record: which approved statement, claim and narrative revisions appear in which edition of which path, with the source, schema, terminology and path revisions pinned. A claim can appear in several releases while its current assessment changes; "published" is a property of a release, never the final state of a claim.

### 5.7 Storage, build, validators

- Canonical, in git: `registries/*.jsonl` (topics, categories, mappings, concepts, doculects, agents, aliases, splits, source crosswalk, rights), `assets/<source-slug>/*.jsonl` (assets and page maps), `statements/<source-slug>.jsonl`, `claims/<domain>/*.jsonl`, `examples/<source-slug>.jsonl`, `queries/*.jsonl` with retained results, `surveys/*.jsonl`, `activities/*.jsonl`, `narrative/<domain>/*.yaml`, `paths/*.yaml`, `releases/*.yaml`. Immutable inputs live under `imports/<slug>/` with a manifest, and the first edition of the book is one such import.
- Compiled: one SQLite database built deterministically from the canonical files, with full-text indexes over statements, claims and narrative and with the reverse indexes (which claims use this example, which statements belong to this claim) that the canonical files do not store. It is shipped to the serving layer and read by the site and the MCP server. Every build is pinned to a source revision, a schema revision, a terminology revision and a path revision.
- Public projection is an export allowlist applied to every output at once: the SQLite delivery, JSON and CLDF exports, search indexes and MCP responses. Private anchors are excluded everywhere by the same rule. Statements are public at every status, and every projection shows the status beside the statement, so that a reader sees how far each record has been checked.
- Artefacts: the site, a Typst-rendered PDF per released path, CLDF and JSON-LD exports once a consumer exists for them, the gap map, coverage tables, drift reports, staleness lists. Regenerated on every build, never edited; released builds are archived with their inputs, because re-running a model is not reproducible publication.

The validator runs on every commit and reports under Good's headings as an organising device for the report, with each check stated as what it establishes and no more.

| Check | What it establishes |
| --- | --- |
| schema | every record matches its type; ids resolve; alias chains terminate; splits have successors |
| anchor | every statement's selector matches the asset revision it names, with the check chosen by asset type; a scan locator has a page-map row |
| completeness | every template slot of a released topic has a reviewed disposition |
| coextensivity | every corpus-attestation line names a pinned occurrence or a retained query result |
| consistency | every asserted correspondence between categories has a mapping record |
| consonance | no released claim has a retained query result listing counterexamples without an assessment that mentions them |
| compatibility | no two released claims are linked by `contradicts` without `differs_in` and a reviewed joint presentation |
| attribution | every empirical fragment in a released narrative revision cites a claim revision it was reviewed with, at a permitted use, and has a recorded entailment verdict |
| staleness | no released narrative rests on a bundle whose hash has changed |
| projection | no public output contains a record outside the allowlist |

## 6. Pipelines

### 6.1 Sources into statements

Sources are processed by section from frozen assets, against page maps built from footers.

1. Assets and page maps. For each source, resolve the work, the edition or printing, the scan and the OCR revision, or the digital build; build the page map for scans; record access conditions. Author-year strings are insufficient identity.
2. Segmentation. Leaves or sections are grouped using the source's own headings; each section is one extraction unit with its locator range, including paragraph continuations, footnotes, examples and full table structure.
3. Zoning. Sentences are labelled by rhetorical role: the author's own claim, a report of another author, a contrast with another author, background, commentary on an example. Extraction concentrates on the author's own claims and contrasts; reports become statements with `stance: reports` and a pointer to the reported source.
4. Extraction. A cheap model reads the section and emits statements with their own scope, payload, stance and hedge, and selects the exact span that anchors each from the section text. The model selects spans; it never produces page numbers.
5. Anchor verification. The span is matched deterministically against the asset revision, with prefix and suffix; a scan locator is checked against the page map; the payload is validated against the type schema. A failure goes to a repair queue with the failing check named, before any linguistic review time is spent.
6. Image check. Statements involving forms, gloss alignment, tables, negation or numerals are checked against the page image, because a matching OCR string proves only that the OCR string exists. The disposition is pass, fail or not applicable; there is no blank.
7. Entailment verification. A model of a different family sees the anchored passage and the statement and returns a verdict (yes, partial, no) with the words of the passage it relied on, recorded as an activity. Only `yes` passes to `checked`; `partial` and `no` go to review. Ambiguous Japanese, indirect reports and competing analyses are escalated to a stronger bilingual model or a person.
8. Deduplication. Candidates are retrieved by normalised entities, terminology mappings, lexical search and embeddings; scope and bidirectional entailment are compared before two statements share a claim; every statement keeps its own source, locus and scope, and the claim lists them.
9. Routing. Each statement is assigned to topics by similarity to topic questions and existing claims, with a review queue for low-confidence assignments and for statements that fit no topic, which is the signal that a topic is missing.
10. Absence and unknowns. A topic with no statement from a source is `not inspected` for that source until a survey records a bounded inspection, after which it is `not found in inspected material`; a source's explicit denial becomes an `absence` claim. The gap map never invents knowledge about the literature from the mere absence of extraction.
11. Provenance. Every statement records the extraction activity (prompt version, model, date) and the verification activities, so that a later audit can re-run the same step.

Precision is measured on a stratified sample of the full extraction runs, with independent human annotation and adjudication, including quiet sections, tables, poor OCR, indirect citations and genuine disagreements:

| Measure | Definition |
| --- | --- |
| statement precision | sampled statements that represent the source correctly |
| field accuracy | forms, scope, stance, doculect and locus assessed separately |
| joint accuracy | every required field correct |
| recall | human enumeration of statements in random source blocks, including blocks the extractor skipped |
| merge precision | proposed equivalences that preserve meaning and scope |
| abstention | material left unresolved |
| editorial effort | total review, repair, adjudication and audit minutes divided by accepted statements that remain correct after audit |

Model agreement is a triage signal, never acceptance: the QA campaign's agreed-lane precision of about 80 percent shows its limit. Confidence intervals are reported with cluster sampling by source, and the thresholds for passing to `checked` are set from the measured sample, not in advance.

Order of sources for the first pass, chosen by how often the first edition leaned on them and by dialect coverage:

| Priority | Source | Pages | Reason |
| --- | --- | --- | --- |
| 1 | 中川裕2024『アイヌ語広文典』 | 652 | the fullest current description; 1,789 citations in the first edition |
| 1 | 佐藤知己2008『アイヌ語文法の基礎』 | 415 | second full grammar; Chitose base |
| 1 | Refsing 1986, Shizunai grammar | 269 | full English grammar of a third dialect |
| 1 | Bugaeva ed. 2022, Handbook | epub | typological framing, many authors; loci are section ids |
| 2 | Shibatani 1990, Ainu chapter | 214 | the standard English sketch |
| 2 | 田村すず子1996 and the Saru dictionary | 73 | the Saru tradition and its terminology |
| 2 | 金田一・知里1936, 知里1942 | 250, 75 | the classical descriptions and their categories |
| 3 | 218 articles | 7,916 | per-phenomenon studies |
| 3 | Ijäs 2023 online grammar | markdown | pedagogical description, constructed examples |
| 3 | Discord knowledge items | 569 | community observations, by handle and date, promoted only after their evidence is inspected |

### 6.2 The first edition as an input

The 178 chapters are already structured: sections with ids, examples with source and page, citations with keys, cross-references with slugs, grade tags. A script turns them into a document model without any model call: sentence records with stable ids frozen against the book revision and the parser version, for sections, paragraphs, sentences, table cells, examples and citation occurrences, with containment and original text preserved. A sentence record is a sentence; it may contain several commitments or none, and tables and captions hold commitments of their own, so the count of records is a structural inventory and never an assertion count.

| Chapter element | Record produced |
| --- | --- |
| section | candidate topic question |
| paragraph and sentence | sentence record, with its heading, table and citation context |
| example | example record, cited source and page preserved, `constructed` preserved |
| inline citation | a citation candidate on the enclosing sentence record |
| cross-reference | a `related` candidate between two candidate topics |
| dictionary link | a lemma link candidate |
| grade tag | an assessment candidate signed `book-v1` |

The document model is a discovery aid and a work queue, never a source of claims. Three rules follow.

- A sentence record is never promoted to a claim by itself and supports nothing. When source-anchored claims exist for a topic, the sentence records of the corresponding sections are matched to them, and each match receives a verdict: fully supported, partly supported, contradicted, or retired. The result is a coverage measure of what the first edition asserted and what now rests on a located source.
- The first edition's citations are hints for where to look and never loci. Two thirds of its example loci were wrong before repair.
- The first edition's headings are candidate questions, never categories. The outline lists split-intransitive alignment as a foundational chapter while the chapter itself denies a split in finite person indexing; a heading extracted as an established category would carry that error into the base. Questions are seeded from the book, and source evidence revises them.

Semantic decomposition of the whole import, topic merging across all 1,400 candidate questions and matching of all 11,098 sentence records wait until a source slice or a released section needs them. The figure of 700 to 900 topics is an estimate of where merging ends, never a migration target.

### 6.3 Linking

- Examples to corpus sentences: exact and normalised text match against the 196,184 sentences, using the attestation tooling already in the repository; a match records the sentence id, the transcription revision and the span; a non-match stays `unattested` and is listed.
- Forms to lemma ids: every morph in an example and every form named in a payload resolves against the morpheme database registry; the existing decomposition tool proposes candidates; an accepted link records its method and agent.
- Sources to db.aynu.org slugs: the bibliography crosswalk exists; unmatched keys are resolved or registered, and pageless whole-work citations are kept as whole-work citations.
- Community items and the pedagogical grammar become statements with the member handle or author as agent, dated, at `excerpt` publication mode; a community item is promoted only after its evidence has been inspected, and its author is credited as the source.
- Derivations of examples are recorded as far as the evidence allows, and a link that a source only mentions is recorded as unverified, with no invented detail.

### 6.4 Organisation and review

Topics are merged, split and placed by a person working from the candidate registry and the routing residue, with a model proposing merges and a report of orphan statements.

The review queue follows a small explicit policy.

1. Published material at risk: credible challenges, failed dependencies and corrections affecting a current release.
2. Obligations of the next release: the statements and premises the next selected section needs, with relevant counterevidence at the same priority as the proposition it challenges.
3. Everything else demanded, ranked by the number of distinct editorial obligations resolved per estimated review minute; shared propositions count, repetitions of the first edition do not.
4. An audit reserve, initially 15 percent of review time, for stratified sampling of accepted items, skipped source blocks and low-confidence material; the share is calibrated in the pilot.

Within a priority, work is grouped by contiguous source passages. Anchor failures and unresolved source identities go to the repair queue before they reach a linguist. An item that exceeds a five-minute first inspection receives a recorded question and an adjudication slot, and remains a release blocker when it must.

The primary review surface is a source passage with a small batch of proposed statements: the page image beside searchable OCR with paragraph, footnote and table context; each statement's normalised wording with its scope, negation, quantifier, stance and exceptions shown as separate fields; the proposed shared claim and the exact difference from its current wording; the intended narrative use and any relevant challenge; extraction metadata and model verdicts folded away, so that the reviewer reaches a first judgement without being led. Actions are separate: faithful, corrected, split, insufficient, report-only, escalate. Routine acceptance is a signed decision over named revisions with a standard reason; free text is required only for exceptional judgements. The topic table (claims, statements, sources, stances, derived support, assessments, disagreements with `differs_in`, examples, queries, surveys, narrative units) is the overview, and the decide-and-apply tooling the QA campaign already uses records every verdict as an activity.

The second adjudicator takes original analyses, consequential merges, unresolved scope disputes and an independent sample of routine acceptances. Universal and negative generalisations get particular scrutiny, because the displayed example usually establishes much less than the proposed wording.

Throughput is measured as total review, repair, adjudication and audit minutes divided by accepted statements that remain correct after audit, with time per distinct claim and per completed section, acceptance yield and difficult-case time reported beside it, so that repeated easy statements cannot make the work look finished while the grammar is not.

### 6.5 Generation and regeneration

For each topic in a path, a generator assembles the bundle (approved and open claims with their permitted uses, examples, retained query results, disagreements, path prerequisites) and drafts narrative units under a template for the topic's kind. Paradigm tables, example blocks, disagreement boxes, frequency tables, indexes and comparison matrices are rendered from records, never drafted. A pilot domain is generated first and compared with the first-edition chapters for the same topics; the comparison is the acceptance test for the template.

Nothing stands between a generated unit and publication except the build. Each empirical fragment is decomposed into atomic facts and every fact is checked for attribution against the claims the fragment cites; a fragment that cites nothing fails the build, and the recorded verdicts and unresolved findings are shown beside the unit. Every unit is published with its status (generated, reviewed) visible. The published first edition is itself machine-generated and wrong in places, so replacing it quickly with traceable text is worth more than withholding text until a reviewer has signed it; review happens on the live pages, and a reviewer's verdict changes the status a reader sees.

Regeneration follows a fixed protocol: pin the source, graph, schema, terminology and path revisions; track dependencies from evidence through claims and bundles to released units; invalidate units whose dependencies changed; produce proposed revisions as semantic diffs; reconcile human edits against the previous generated base, with unresolved conflicts blocking release; archive the released prose with its inputs. A human edit is never silently overwritten and never silently preserved after the claim under it changed.

The delivered product is HTML and a versioned PDF per released path. HTML gives topic pages, the paths, source comparison tables, examples with expandable evidence, and the gap map. Print gives stable numbering, bibliography, indexes and edition-specific claim references. A graph explorer, with or without the astronomy of galaxies and planets, is an optional presentation to be tested later on concrete navigation tasks; it receives no pilot budget and is never the way the grammar is read.

### 6.6 Serving

| Representation | Role |
| --- | --- |
| typed JSON records | canonical interchange and validation |
| claim cards | compact model context: proposition, scope, terminology, examples, exceptions, assessment, permitted use |
| section-level retrieval | explanations, paradigms and interactions that isolated cards omit |
| MCP tools | bounded, task-shaped combinations of the above |
| CLDF | StructureDataset (parameters are topics, values are claims, examples attached), TextCorpus and ExampleTable for the glossed material, Dictionary for the lexicon, with `cldf-ldd` components for morphs and lexemes, emitted once a consumer and a preservation test exist for them |
| JSON-LD | linked-data export with the assertion, provenance and publication split per claim, on the same condition |

New MCP tools: `find_claims`, `get_claim_bundle`, `get_evidence`, `compare_analyses`, `trace_provenance`, `topic_get`, `topic_search`, `claims_for_form`, `gloss_sentence`. Each response identifies revisions, scope, conflicts, permitted use and withheld evidence, and returns prerequisites and counterevidence with the requested claim; every response passes through the same projection allowlist as the site. Lexical retrieval serves forms and example numbers; multilingual semantic retrieval serves explanations; structured filters serve doculect and construction. A claim card ships with its examples, because parallel examples carry translation gains and prose carries feature-identification gains, and a chunking that separates them damages both consumers.

### 6.7 Evaluation

The evaluation separates representation effects from correction effects as far as a bounded design can, and states what it does not establish.

The primary control is flattened vetted text: the approved claim sentences of a topic rendered into ordinary paragraphs by a template that preserves scope, qualifications, attribution, disagreement and examples. It costs one renderer and a sample check of its output. Two comparisons run on it. The presentation comparison selects identical evidence ids first and presents them as flattened text or as claim cards, with any graph relation verbalised in the text condition too, so that the card condition receives no extra knowledge. The retrieval comparison indexes the same vetted knowledge under each representation and compares what each retrieves under the same budget. Together they isolate representation effects conditional on vetted knowledge; they do not estimate the gain from correcting the first edition, and they do not establish superiority over a carefully edited reference grammar written by hand. A small direct correction comparison uses matched passages of the first edition with only the identified factual defects corrected and the organisation preserved, and the first reviewed narrative sections serve as a limited natural-prose control.

| Condition | Purpose |
| --- | --- |
| no context | memorisation baseline, since Ainu is present on the web |
| dictionary and example retrieval only | how much grammar adds at all |
| first-edition prose | the operational baseline |
| flattened vetted text | the representation control |
| claim cards with examples | compact structured context |
| cards with dependencies, disagreements and section context | graph-assisted retrieval |
| human-selected evidence | the ceiling lost to retrieval |

Test selection and lineage exclusions happen before extraction tuning: documents and recording lineages are held out, near-duplicate examples are removed across resources, and the test set is frozen. The initial evaluation is narrow, about 100 tasks in three conditions on two model families, and grows after the first runs; the full seven-condition design over 200 tasks and two families produces 2,800 answers to score and is a later stage. Tasks: translation in both directions (person reference, valence, negation, clause linkage), glossing (segmentation, features, lexical glosses, provenance of alternative analyses), grammaticality with doculect and context and with uncertain answers permitted, and question answering scored on evidence correctness as well as answer correctness (attribution, scope, disagreement, negative evidence, justified abstention). Results are reported per phenomenon with paired uncertainty, retrieval recall, answer support and unsupported-assertion rate, at matched context budgets. The expansion gate declares its primary outcome, a minimum improvement that would matter, and a bound on unsupported assertions before the runs, and editorial-effort comparisons include preparation, rejected candidates, repair and maintenance. A higher translation score does not compensate for fabricated evidence.

## 7. Stages and cost

The schedule is a planning envelope; throughput is measured on the first full runs. It assumes one engineer, one bilingual linguist with protected time, and a second adjudicator. There is no pilot stage: extraction runs over whole sources from the start, and the base is published as it grows.

| Stage | Work | Exit criterion |
| --- | --- | --- |
| 0 Scaffold | schema, validators, registries seeded from the frozen dialect ontology and the bibliography crosswalk; assets with page maps from footers for the calibrated OCR dumps; the first edition imported as sentence records, examples and candidate topics; the compiled projections; the network view and the topic and source pages on the site | validator green; the site serves the base |
| 1 Extraction at scale | every held source through extraction, anchoring, entailment verification and routing: the six calibrated dumps first, then the remaining books, the Handbook (section loci), the 218 articles, the pedagogical grammar and the community items; page maps built from footers for each new dump; precision and effort measured on stratified samples as the runs complete; the review surface and queue policy | every priority-1 and priority-2 source has statements with anchors and verdicts; per-source precision published with intervals |
| 2 Claims and topics | statements grouped into claims across sources; topic questions written; category mappings; the gap map; corpus queries attached to frequency claims; examples matched to corpus sentences and forms to lemma ids | every chapter topic shows its claims, its disagreements and its gaps |
| 3 Generation | narrative units per topic from claim bundles with clause-level coverage; the reference-grammar reading path; HTML and PDF; the first-edition chapters replaced domain by domain | no first-edition chapter remains for a domain whose topics are generated |
| 4 Evaluation | held-out material fixed; the narrow evaluation under §6.7 on the published base; incremental builds with release records | the declared primary outcome met, or the design revised |
| Continuing | scheduled source surveillance, corrections, rights review, dated editions, review verdicts changing statuses on the live pages | each edition names its revisions |

Model calls are the small part of the cost. An illustrative scenario for the whole library, at cheap-tier rates for extraction and mid-tier rates for verification and adjudication, comes to a few hundred dollars with a threefold contingency; the OCR of the same library cost about 14 dollars. Human review dominates: at three to six minutes per accepted statement, 10,000 statements are 500 to 1,000 hours, so review is a continuing programme over a published base and never a condition of publication. Extraction price is therefore a poor optimisation target, and the pipeline is designed around review throughput: the queue policy, machine checks that reduce what a reviewer must read, and a review surface that shows the anchored passage beside the statement.

| Input | Size | Extraction tokens (order) |
| --- | --- | --- |
| priority-1 books (OCR) | about 2,000 pages, 2.3M characters | 2M |
| all OCR'd books | 27 books, 5,524 pages, 26M characters (dictionaries included) | up to 20M |
| articles | 218, 7,916 pages, 14M characters | 10M |
| first-edition document model | 304,000 words | 0.5M, script only |

Scripts do citation parsing, page resolution, reference integrity, duplicate candidates and arithmetic. Cheap models do span selection, candidate extraction, terminology discovery and routine wording. Stronger bilingual models handle scope, negation, indirect attribution, competing analyses and difficult tables. People do analytic adjudication, novel generalisations, contested mappings, important examples, permissions and release decisions.

## 8. Decisions and risks

The decision that shapes everything else was taken on 2026-09-10: there is no publication gate. Every record is published with its status, and a review changes the status instead of admitting the record. Review still has four objects, because a verdict has to say which of four things it is about.

| Object | Decision | Recorded as |
| --- | --- | --- |
| statement revision | does it represent the source faithfully | attribution verdict |
| claim revision and evidence | what support and limits does the project recognise | assessment verdict and reasons |
| narrative revision | is the wording an acceptable account of the positions cited, at their permitted uses | approval |
| release | which approved revisions appear in this edition and path | release membership |

Machine-extracted and machine-checked statements are public from the moment they are built, with their status (extracted, anchored, checked, reviewed) and their anchor score beside them, and they feed the support counts, disagreement panels, gap maps and retrieval responses with the same status attached. The published first edition was machine-generated without any of this apparatus, so a base that shows what has been checked is an improvement on it at every status. Whether a status is shown as a label or as a filter is presentation; that it is shown is not.

Other decisions the plan takes, each reversible by editing one registry or one rule:

- Topics are polyhierarchical; reading paths carry the linear order and the prerequisites.
- Claims are propositions shared across sources; statements are per source, per asset and per locus, with their own scope.
- Loci are asset-qualified locators; printed labels come from page maps; offset constants exist nowhere.
- The first edition is an import of sentence records and a work queue, never a source of claims.
- Queries are pinned activities; builds never acquire new evidence.
- Canonical storage is JSONL for records and YAML for narrative, paths and releases; the site reads a compiled database; reverse links live only in the compiled database.

Risks, and what answers them:

- Reviewer overload. The queue policy, machine pre-checks, the review surface, and the measurement of minutes per accepted statement on the first runs.
- Circular evidence. A claim supported by a source that itself repeats another source, or by the first edition, counts once; lineage deduplication and the `repeated-from-another-source` evidence kind keep the count honest.
- Scope loss. Scope, quantifier and modality on every statement and every claim; extraction instructions that forbid narrowing or widening the doculect; grouping checked against the statements' own scope.
- Premature terminology equivalence. Mappings with stated relations and evidence, `unresolved` as a legal value, and no mapping demanded where none is asserted.
- Rights. Publication modes per source, private anchors, cumulative review of extraction from one source, permission fields on sources and examples, and attribution of narrators, transcribers and community authors.
- Another unvalidated representation. The evaluation in stage 4 with its declared outcome, run on the published base.
- The first edition's fluency. Its sentence records are quarantined by construction, and its headings are questions.
- Atomicity as false theory-neutrality. Choosing the entity, the diagnostic, the scope and the mapping is analysis; arguments, paradigms and competing interpretations are kept around the smaller records, `analysis` claims carry their premises and their derivation rule, and every original analysis has an identifiable author and an independent reviewer.

## 9. Ainu-specific notes

- Doculects are the frozen slash-path taxonomy. A claim is recorded at the level its source states, and a source that describes one speaker's Saru is recorded as that, never as Hokkaido.
- Alignment classifications by authors are source statements and are recorded as such. The project's own classification is an `analysis` claim that names its paradigm cells and distribution claims as premises, states its role definitions and its derivation rule, and permits an indeterminate result where the paradigm is incomplete; following AUTOTYP, the primitive facts (which marker indexes which role under which conditions) are recorded first and the label is derived from them. The long disagreement over Ainu alignment then becomes visible as differences in premises, in diagnostics, or in assumptions, whichever it is in each case.
- The terminology layer starts from the concordance the chapters already needed: 概念形 and 所属形 beside conceptual and affiliative form; 不定人称, fourth person and INDEF; 人称接辞 as affix or clitic across sources; 充当 and applicative; 抱合 and incorporation; 自動詞, 他動詞, 複他動詞 and the valence classes; 証拠性 and the nominalisation-plus-copula forms. Each pair is a mapping with its sources.
- Notation is a transformation. The `=` of the Nakagawa lineage is an orthographic convention for person-marker boundaries and carries no clitic claim; Satō and Ijäs write hyphens; Hattori and Tamura write nothing. An example quoted from a hyphen source and renotated with `=` records `renotation-hyphen-to-equals` on its derivation link, and the verification lane never treats that difference as a discrepancy.
- The five domains where original analysis is licensed (alignment, applicatives, noun incorporation, evidentiality, clause linkage) hold `analysis` claims with a named author and an independent reviewer, shown with `original-needs-review` until the reviewer signs.
- Sakhalin and Kuril material enters as claims on their own doculects and reaches the Hokkaido reading path only through `contrasts_with` links, so the Sakhalin grammar project and this base share topics without sharing assertions.
- The glossed audio corpus of folklore (Saru and Chitose) is the one existing Ainu resource whose structure matches the example record, and its derived dataset on Hugging Face is CC BY-SA 4.0, so a redistributable example set can be built on it. The National Ainu Museum archive prohibits reproduction beyond quotation and is cited by reference. The AA研 publication of 田村すゞ子's recordings obtained permission from speakers' families for each item, which is the precedent for a permission field on every source and example record. UD-Ainu (安岡孝一・安岡素子, CC BY-SA 4.0) supplies dependency annotation over several older texts and pretrained taggers, so a first syntactic annotation of an example can be generated and then corrected; the UD label set handles incorporation poorly, so the example record keeps its own morphosyntactic tiers beside any CoNLL-U export.
- 奥田統己's 2022 discussion of what automatic processing of Ainu should and should not do is read before the generation stage is designed, and its limits are recorded as project policy.

The base answers questions the book cannot:

- every claim about one morpheme across all sources, with who agrees, who disagrees, and along which dimension;
- topics described by only one source, topics inspected and not found in a source, and topics a source explicitly denies;
- claims the corpus contradicts, and claims the corpus has never been asked about;
- what a source's own category covers and how each later source re-labelled it;
- dialect variation as a matrix of `variation` claims by topic and doculect;
- how much of a released page rests on located sources at each permitted use, as a number that moves.
