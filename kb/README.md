# kb — canonical data of the grammar knowledge base

The knowledge base holds what the sources say about Hokkaido Ainu grammar, as records with identifiers, and the site renders projections of it (topic pages, source pages, the network view, the coverage and disagreement views, and the reading path that serialises each topic's claims into cited text). `docs/knowledge-base/PLAN.md` gives the design; this directory is its canonical layer: plain text in git, compiled by `scripts/kb/build.ts` into `static/kb/`.

## Layout

| Path | Records |
| --- | --- |
| `schema/kb.schema.json` | JSON Schema (draft 2020-12) with one definition per record type; `scripts/kb/validate.ts` checks every file against it and resolves every reference |
| `registries/topics.jsonl` | topics: parts, chapters and sections of the first edition as candidate topics, and topics added afterwards |
| `registries/sources.jsonl` | sources: one row per bibliography key, with the db.aynu.org slug, the evidentiary role and the local OCR path where held |
| `registries/doculects.jsonl` | doculects: the slash-path dialect taxonomy with labels and Glottocodes |
| `registries/agents.jsonl` | agents: people, pipelines and communities that assert, extract or review |
| `assets/<key>.json` | assets: one frozen text of a source, cut into leaves, with its page map (leaf to printed label). A scanned book or article has one leaf per scan page and its labels are read from the running heads and footers, kept where they climb in order; a leaf that shows a spread carries both pages (`462–463`). A text dump without page breaks is cut into pieces of about 3,000 characters under `imports/ocr/<key>/` and carries no printed label. The Handbook of the Ainu Language is cut into one leaf per section under `imports/handbook-2022/pages/`, labelled `chapter.section`, with one asset per chapter key |
| `imports/book-v1/` | the first edition of the book as sentence records, with a manifest naming the book revision and the parser version |
| `examples/<origin>.jsonl` | interlinear examples as tiered records with their citations, dialect and origin |
| `statements/<key>.jsonl` | statements extracted from one source: what the source commits to at one locus, anchored to the OCR text |
| `claims/<chapter>.jsonl` | claims: propositions grouped from the statements of all sources under one chapter topic, with each member's stance and the relations between claims |
| `narrative/<chapter>.jsonl` | narrative units: one passage per section of a chapter, written from its claims; the text carries a marker `⟦claim:…⟧` after every sentence naming the claims it rests on, and the unit records the claims it left uncovered and the sentences that carry no claim |
| `activities/*.jsonl` | extraction, verification and review runs, with model, prompt version, date and cost |

## Identifiers

```
claim:person/first-second-person-singular-affixes--ku-marks-first-singular-subject   a claim grouped under a chapter
topic:person/first-second-person-singular-affixes            a chapter
topic:person/first-second-person-singular-affixes--paradigm   a section of that chapter
topic:person/part-10                                          a part
source:nakagawa2024                                           a source (bibliography key; db.aynu.org slug on the record)
doculect:hokkaido/southwest/saru                              a doculect
ex:book-v1/applicative-e#roles/2                              an example printed in the first edition
book-v1:applicative-e#roles/p3/s2                             a sentence record of the first edition
stmt:nakagawa2024@gemini-3-flash-preview/l0132-03             a statement anchored to leaf 132 of that OCR dump
stmt:endo2022@handbook-epub/l0044-02                          a statement anchored to a section leaf of the Handbook
asset:nakagawa2024@gemini-3-flash-preview                     the OCR dump the statement was read from
asset:dalcorso2018@pdftotext-pieces                           a page-less text dump cut into pieces
agent:pipeline/extract-v1                                     an extraction pipeline
```

The domain prefix of a topic id (`person`, `valency`, `tam`, …) is naming metadata fixed when the record is minted; the hierarchy lives in the `broader` field. Identifiers are never reused; renames go through `registries/aliases.jsonl`.

## Status of a record

Every record that a pipeline produced carries the activity that produced it and a `status`: `extracted` (a model proposed it), `anchored` (its quote was found in the OCR text), `checked` (a second model judged the passage to entail it), `reviewed` (a person recorded a verdict). Records of the first edition carry `origin: book-v1` and count as an inventory of what the book said, never as evidence for a claim.

## Commands

```
bun scripts/kb/import-first-edition.ts   # chapters → topics, sentence records, examples
bun scripts/kb/import-sources.ts         # bibliography + citation registry → sources.jsonl
bun scripts/kb/import-assets.ts          # OCR dumps and text dumps → assets/ (page maps from running heads and footers)
bun scripts/kb/import-handbook.ts        # the Handbook's EPUB text → section leaves and one asset per chapter
bun scripts/kb/validate.ts               # schema and reference checks
bun scripts/kb/build.ts                  # → static/kb/ (index, graph, topics, sources)
bun scripts/kb/extract.ts <key>          # OCR dump → statements/<key>.jsonl (resumable)
bun scripts/kb/verify.ts <key>           # second-family entailment check → status checked
bun scripts/kb/route.ts [<key> …]        # statements → section topics inside their chapter
bun scripts/kb/questions.ts              # the question each chapter and section answers
bun scripts/kb/group.ts [<chapter> …]    # statements of all sources → claims/<chapter>.jsonl
bun scripts/kb/write.ts [<chapter> …]    # claims of a chapter → narrative/<chapter>.jsonl (passages with claim markers)
```

Every pipeline step writes atomically and resumes from what exists, so a run that is interrupted loses at most its in-flight batch.
