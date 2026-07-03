# Fact-checking source inventory — Ainu grammar (Hokkaido)

## 1. Book dumps — /home/mkpoli/projects/Ainu/ainu-grammar/books/

| Path (under books/) | Work | Format | Size | Page-cited? | Verifies |
|---|---|---|---|---|---|
| 1912_Pilsudski/*.ocr/pdftotext/all.txt | Pilsudski, *Materials* | txt (single dump) | 544K | no (one blob) | example attestation, citations (coarse) |
| 1933_Kindaichi/*.ocr/ | 金田一『アイヌ文学』 | per-page txt+png (46 pp) + all.txt | 43M | yes (page-NNNN) | grammatical claims, citations |
| 1936_Kindaichi/ | 金田一・知里『アイヌ語法概説』 | pdf + per-page OCR (250 pp) + all.txt | 236M | yes | grammatical claims, lexical forms, citations |
| 1942_Chiri/ | 知里『アイヌ語法研究』 | per-page OCR (75 pp) | 927M | yes | grammatical claims, citations |
| 1986_Refsing/ | Refsing, *Shizunai Dialect* | per-page OCR (268 pp; partly garbled) | 473M | yes | grammatical claims, examples, citations |
| 1987_Kayano/ | 萱野『アイヌ語会話 初級編』 | pdf + pdftotext all.txt | 6.5M | no | examples, lexical forms |
| 1990_Shibatani/ | *Languages of Japan* | pdf + per-page OCR (44 pp) | 185M | yes | grammatical claims, citations |
| 1994_HokkaidoUtariKyokai/ | 『アコㇿイタㇰ』 | pdf + pdftotext all.txt | 2.4M | no | examples, lexical forms |
| 1996_Tamura/ | 田村『アイヌ語入門』 (NB: NOT the Saru dictionary) | pdf + per-page OCR (73 pp) + all.txt | 19M | yes | grammatical claims, examples |
| 2008_Sato/ | 佐藤『アイヌ語文法の基礎』 | pdf + per-page OCR (415 pp, clean gemini) + all.txt | 69M | yes | grammatical claims, examples, citations |
| 2022_Bugaeva/ + books/ocr/*.pandoc.txt | *Handbook of the Ainu Language* | epub + 2.1M pandoc txt | 3.6M | partial (in-text p. refs only, no print folios) | grammatical claims, citations (covers all ~10 Handbook-chapter bib keys) |
| **2023_Ijas/** | **Ijäs, aynuitak.org grammar (SPECIAL — "removal" source)** | site mirror + markdown/all.md + 25 per-page .md | 14M (884K md) | yes (per page/lesson) | grammatical claims, constructed examples; the sentence-by-sentence incorporation target |
| 2024_Nakagawa/ | 中川『アイヌ語広文典』 — PRIMARY | pdf + per-page OCR (657 pp) + transcribed/ Typst re-keying (main.md/html/pdf) | 1.2G | yes (printed = OCR page + 4, verified) | grammatical claims, examples, lexical forms, citations |
| 2025_Fukazawa/ | 知里 basic-vocab survey table | TSV (17 lines) | 36K | n/a | lexical forms (machine-readable) |
| 2025_Murasaki/ | 村崎『エンチウ語会話入門』改訂版 | per-page OCR (125 pp) | 68M | yes | ‹SA› contrast claims, examples |

Sibling dir **articles/**: 332 entries / 235-record inventory.jsonl, ~1.0G — per-article .ocr dirs (+pdf) incl. Bugaeva 2006/2008/2012/2014/2016, Takahashi 2011–2016 (incl. takahashi2016 negation), Dal Corso 2018/2020/2021/2024/2025, Tamura 1960/1971/1972/1997, Fukuda 1956/1961, Shibatani 1988, Kirikae 1984, Satō papers. Page-cited via per-page OCR. Verifies grammatical claims + citations for most article bib keys.

## 2. Build apparatus — ainu-grammar-hokkaido

| Path | Type | Size | Page-cited? | Verifies |
|---|---|---|---|---|
| .grammar-build/factbase/*.md | 18 domain factbases | 1.1M total (40–85K each) | yes — every nontrivial claim carries page citation or [UNVERIFIED]; sources-read ledger per file | grammatical claims, citations, example provenance (narrator+document) |
| .grammar-build/ijas-removal/ | PLAN.md + lesson-01.md worklist | 7K | per-lesson | claim-by-claim Ijas verification protocol (only lesson-01 worklisted so far; 25 pages in scope) |
| .grammar-build/discord/INCORPORATION.md | worklist | 3.7K | n/a | community-knowledge incorporation tracking |
| .grammar-build/drafts/ | 38 chapter-draft dirs + BRIEFs | 32M | inherits factbase cites | drafted prose vs. factbase |
| REVIEW-SYNTHESIS.md (repo root) | dual-Codex plan review synthesis | 5.7K | n/a | process constraints (evidence grades, citation-key CI, "reported" sources) |
| reviews/ (repo root) | codex-gpt-5.5.md, codex-fugu-ultra.md, design-review-gpt55.md, design-review.log, _review-brief.md | ~180K | n/a | review provenance |
| src/lib/grammar/bibliography.ts | 159 keyed BibEntry records, 1786 lines | — | keys validated by Ref/Ex components | citation-key existence (not content) |

## 3. Machine-readable corpora/dictionaries (script-usable, no LLM)

| Path | Type | Size | Verifies |
|---|---|---|---|
| /home/mkpoli/projects/Ainu/ainu-corpora/data.jsonl | 196,184 sentence records: id, text, translation, dialect (3 levels), document, narrator/author, URI | 136M | example attestation, frequency claims, dialect distribution (this is what the Ainu MCP corpus_search serves) |
| /home/mkpoli/projects/Ainu/ainu-corpora/texts/ | ~40 per-collection source dirs/yaml | (in 1.3G repo) | per-text provenance |
| /home/mkpoli/projects/Ainu/ainu-dictionaries/ | 96 dictionary dirs, 72 with original.tsv + manifest.json (lemma/gloss field maps) — incl. 1996_Tamura_Ainu-Saru-Dialect-Dictionary (= bib tamura1996!), 1898_Kanazawa, 1905/1938_Batchelor, 1964_Hattori, 1987_Chiri_Categorized (chiri1953 reprint), 1995_Nakagawa_Chitose, 1996_Kayano | 1.1G | lexical forms, dictionary-cited senses (no page numbers — entry-level) |
| /home/mkpoli/projects/Ainu/ainu-morpheme-database/registry/lemmas.jsonl (+aliases) | 15,839 lemma IDs w/ POS | 1.5M | lemma/POS sanity checks |
| /home/mkpoli/projects/Ainu/ainu-morpheme-database/comparative/*.json, sakhalin/*.json | dialect correspondences, sound changes, evidence | small | dialectology/diachrony claims |
| /home/mkpoli/projects/Ainu/ainu-stopwords, ainu-glossary | wordlists/glossary | small | lexical cross-checks |

## 4. Bib keys with NO local dump (spot-checked ~20 of 159)

**Missing entirely (fact-check via secondary citation only):** tamura2000 (*The Ainu Language*, ILCAA English sketch), asai1969, asai1974, murasaki1979 (カラフトアイヌ語 文法篇), kindaichi1931, kindaichi1935, chiri1955, tamura1973, kirikae1994, chamberlain1887, refsing2011, hattorichiri1960, peng1970, kaiser1998, huber2025 — plus ALL ~18 typological-framework keys (comrie1976/2015, mithun1984, baker1988, keenancomrie1977, foleyvanvalin1984, aikhenvald2004, bybee1994, talmy2000, peterson2007, corbett2000, miestamo2005, haspelmath1997, stassen1997, nichols1986, givon1978, croft1991, hoppertraugott2003, diessel1999).

**Caveats:** tamura1988 (アイヌ語 sketch) exists only as the 1997 reprint dump (articles/1997_田村すゞ子_アイヌ語, 92 pp — page numbers differ from the 1988 printing cited); chiri1953 exists only as entry-level TSVs (1987 reprint, no pagination); books/1996_Tamura is アイヌ語入門, NOT bib tamura1996 (Saru dictionary — that lives in ainu-dictionaries as TSV). `nurmi2024` is demanded by the negation factbase but is in neither bibliography.ts nor any local dump. Handbook-2022 chapter keys (nakagawa2022, okuda2022, endo2022, vovin2022, janhunen2022, tangiku2022, alonso2022, shiraishi2022, shiraishitangiku2022, bugaevakobayashi2022) are all covered by the 2022_Bugaeva epub/pandoc dump but without reliable print pagination.