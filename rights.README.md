# `rights.json` — source rights matrix

A per-source rights matrix for the corpus, dictionaries, and text/grammar editions
the reference grammar draws on. It answers, per source, **how much may be quoted,
whether attested examples may be reproduced, and whom to attribute** — the
reviewers' P0 on copyright/fair-use exposure (REVIEW-SYNTHESIS §4).

## Shape

```jsonc
{
  "version": 1,
  "note": "...",
  "fields": ["source", "copyrightHolder", "quotationPolicy",
             "exampleReusePolicy", "translationStatus", "attributionRequired"],
  "matrix": [ { /* one row per source, with the six fields */ } ]
}
```

`matrix` is seeded for the aligned corpus (`ainu-corpora`), the Glossed Audio
Corpus, db.aynu.org, the local `ainu-grammar` OCR corpus, the major grammars
(Nakagawa 2024, Satō 2008, the Bugaeva 2022 Handbook), the main dictionaries
(Tamura/Kayano/Nakagawa), the oral-literature text editions, the public-domain
classics (Piłsudski 1912, Batchelor 1905), the modern glossary, and a catch-all
`_default` row.

## How to use it (binding rules)

1. **Cite the original, never the aggregator.** For any corpus example, attribute
   the underlying narrator/edition (its db.aynu.org slug via `citation-registry.ts`),
   never `ainu-corpora` / `ainu-dictionaries` / `itak.aynu.org`. This is enforced by
   the apparatus audit (AUTHORING.md, Quality Bar on attribution).
2. **Short cited excerpts only.** Reproduce individual attested sentences/clauses as
   `<Ex cite>`d examples; never long continuous passages, whole tables, or sections.
   The Part-XXII glossed-texts are the highest-exposure material — keep cited
   passages minimal and attributed.
3. **Match the row, else `_default`.** If a source has no explicit row, apply
   `_default` (assume all rights reserved; short excerpts; full attribution).
4. **Translations are editorial unless quoted.** English glosses/free translations
   the grammar writes are our own and marked as such; when a published translation
   is reproduced, attribute it.
5. **Public-domain sources** (Piłsudski 1912, Batchelor 1905) still require scholarly
   attribution; Batchelor additionally carries a reliability caveat
   (`philological-witness`).

`source` keys in the matrix correspond to bibliography keys where one exists, so a
chapter author can look up a `<Ref k>` key and find its reuse policy directly.
This file is advisory scaffolding for editorial discipline, not legal advice.
