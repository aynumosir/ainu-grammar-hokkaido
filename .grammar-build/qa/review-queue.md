# Ainu Grammar — Human Review Queue

_Generated 2026-07-20T15:09:28.278Z — 1420 open findings (69 already decided)._

## How to give feedback

Reply in chat with verdicts, e.g.:

```
DOCTRINE-abc123: keep   (it's a cited analysis of Nam's)
DOCTRINE-def456: reword → "person-marker boundary"
ATTEST-ghi789: fix
SCAN-ai-jkl012: skip
```

Or describe a whole category, e.g. "all cite-pageless for community sources → keep".

The `decide.ts` tool records verdicts to `decisions.jsonl`; they persist across loop cycles.

---

## 🟡 Non-Ainu letter in example morpheme — 6

### `CAN-EX-kn2p64`
- **Chapter**: `citation-vs-combining-stem-shapes`:392  ·  **source**: canonical-chapters
- **Issue**: non-Ainu letter "g" in m-token "hangan"
- **Suggested fix**: This m-token contains a non-Ainu letter — likely a loanword. Add it to the loanword allowlist or restructure the example

### `CAN-EX-t82ff7`
- **Chapter**: `clause-linkage-overview`:376  ·  **source**: canonical-chapters
- **Issue**: non-Ainu letter "b" in m-token "kaboca"
- **Suggested fix**: This m-token contains a non-Ainu letter — likely a loanword. Add it to the loanword allowlist or restructure the example

### `CAN-EX-cjk7yz`
- **Chapter**: `first-person-plural-and-clusivity`:110  ·  **source**: canonical-chapters
- **Issue**: non-Ainu letter "b" in m-token "sanbyakugojuen"
- **Suggested fix**: This m-token contains a non-Ainu letter — likely a loanword. Add it to the loanword allowlist or restructure the example

### `CAN-EX-1lvkuf9`
- **Chapter**: `japanese-loanwords-in-ainu`:295  ·  **source**: canonical-chapters
- **Issue**: non-Ainu letter "b" in m-token "terebi"
- **Suggested fix**: This m-token contains a non-Ainu letter — likely a loanword. Add it to the loanword allowlist or restructure the example

### `CAN-EX-14ad8vk`
- **Chapter**: `object-indexing-monotransitive`:170  ·  **source**: canonical-chapters
- **Issue**: non-Ainu letter "b" in m-token "sanbyakugojuen"
- **Suggested fix**: This m-token contains a non-Ainu letter — likely a loanword. Add it to the loanword allowlist or restructure the example

### `CAN-EX-eokrdt`
- **Chapter**: `suppletive-verbal-number`:122  ·  **source**: canonical-chapters
- **Issue**: non-Ainu letter "d" in m-token "kiwkode"
- **Suggested fix**: This m-token contains a non-Ainu letter — likely a loanword. Add it to the loanword allowlist or restructure the example

## 🟡 Gloss/word boundary misalignment — 29

### `CAN-EX-178dubj`
- **Chapter**: `causative-morphological-re-e-te`:316  ·  **source**: canonical-chapters
- **Issue**: "ruwe" (0 boundaries) ~ "track-POSS" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-lo98c1`
- **Chapter**: `cleft-nominalization-focus`:139  ·  **source**: canonical-chapters
- **Issue**: "katu" (0 boundaries) ~ "manner-POSS" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-1w1il8u`
- **Chapter**: `concept-form-affiliative-form`:494  ·  **source**: canonical-chapters
- **Issue**: "ruwe" (0 boundaries) ~ "track-POSS" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-127fc66`
- **Chapter**: `deontic-necessity`:103  ·  **source**: canonical-chapters
- **Issue**: "hawe" (0 boundaries) ~ "voice-POSS" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-1jdz9f1`
- **Chapter**: `deverbal-denominal-noun-derivation`:359  ·  **source**: canonical-chapters
- **Issue**: "ruwe" (0 boundaries) ~ "track-POSS" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-1u98dge`
- **Chapter**: `existential-locational-an-oka`:301  ·  **source**: canonical-chapters
- **Issue**: "ruwe" (0 boundaries) ~ "track-POSS" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-zlv8i6`
- **Chapter**: `formal-defective-nouns`:326  ·  **source**: canonical-chapters
- **Issue**: "ruwe" (0 boundaries) ~ "track-POSS" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-11p27rf`
- **Chapter**: `genetic-position-macro-comparison`:314  ·  **source**: canonical-chapters
- **Issue**: "-p" (1 boundaries) ~ "NMLZ" (0)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-1a73zt3`
- **Chapter**: `independent-personal-pronouns`:326  ·  **source**: canonical-chapters
- **Issue**: "anak=ne" (1 boundaries) ~ "TOP" (0)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-1a73zt3`
- **Chapter**: `independent-personal-pronouns`:407  ·  **source**: canonical-chapters
- **Issue**: "anak=ne" (1 boundaries) ~ "TOP" (0)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-4qfhya`
- **Chapter**: `inonno-itak-ritual-prayer`:185  ·  **source**: canonical-chapters
- **Issue**: "ruwe" (0 boundaries) ~ "track-POSS" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-lt7mq0`
- **Chapter**: `japanese-loanwords-in-ainu`:246  ·  **source**: canonical-chapters
- **Issue**: "a=nepkire" (1 boundaries) ~ "4.A=work-CAUS" (2)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-1mxm5ek`
- **Chapter**: `japanese-loanwords-in-ainu`:295  ·  **source**: canonical-chapters
- **Issue**: "ruwe" (0 boundaries) ~ "track-POSS" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-tilsok`
- **Chapter**: `kinship-honorific-possession`:314  ·  **source**: canonical-chapters
- **Issue**: "ruwe" (0 boundaries) ~ "track-POSS" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-11s04a2`
- **Chapter**: `manner-and-degree-adverbial-clauses`:180  ·  **source**: canonical-chapters
- **Issue**: "hawe" (0 boundaries) ~ "voice-POSS" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-rsuj7e`
- **Chapter**: `middle-anticausative-passive`:255  ·  **source**: canonical-chapters
- **Issue**: "ruwe" (0 boundaries) ~ "track-POSS" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-fg9u1n`
- **Chapter**: `middle-anticausative-passive`:297  ·  **source**: canonical-chapters
- **Issue**: "nikekke" (0 boundaries) ~ "wood-break" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-1ntt8lt`
- **Chapter**: `nominal-number-utar-transnumerality`:191  ·  **source**: canonical-chapters
- **Issue**: "hekattar" (0 boundaries) ~ "child-ASS" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-q5bwn`
- **Chapter**: `noun-incorporation-object`:244  ·  **source**: canonical-chapters
- **Issue**: "ruwe" (0 boundaries) ~ "track-POSS" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-1ma9f6h`
- **Chapter**: `noun-incorporation-oblique-polysynthesis-debate`:168  ·  **source**: canonical-chapters
- **Issue**: "pirka-no" (1 boundaries) ~ "well" (0)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-17pmtvr`
- **Chapter**: `numeral-classifiers-ordinals-and-quantifier-syntax`:432  ·  **source**: canonical-chapters
- **Issue**: "a=acautari" (1 boundaries) ~ "4.POSS=uncle-ASS" (2)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-19kgcdk`
- **Chapter**: `numeral-classifiers-ordinals-and-quantifier-syntax`:456  ·  **source**: canonical-chapters
- **Issue**: "sinen" (0 boundaries) ~ "one-HUM" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-19qqjsy`
- **Chapter**: `oral-literature-and-spoken-corpora`:243  ·  **source**: canonical-chapters
- **Issue**: "kamuyyukar" (0 boundaries) ~ "kamuy-yukar" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-mvgmb`
- **Chapter**: `personal-affix-template-and-ordering`:384  ·  **source**: canonical-chapters
- **Issue**: "=an" (1 boundaries) ~ "4.S" (0)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-1kvtyyb`
- **Chapter**: `phasal-iterative-habitual-aspect`:221  ·  **source**: canonical-chapters
- **Issue**: "epuykehe" (0 boundaries) ~ "bud-POSS" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-16ua7yu`
- **Chapter**: `poetic-archaic-elevated-register`:232  ·  **source**: canonical-chapters
- **Issue**: "kamuy-yukar" (1 boundaries) ~ "divine.epic" (0)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-giorg7`
- **Chapter**: `prenominal-gap-relative-clauses`:110  ·  **source**: canonical-chapters
- **Issue**: "turepta" (0 boundaries) ~ "dig.uba-lily" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-1whg7e7`
- **Chapter**: `reflexive-possessive-si`:199  ·  **source**: canonical-chapters
- **Issue**: "k=an" (1 boundaries) ~ "IPFV" (0)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

### `CAN-EX-1dpaug1`
- **Chapter**: `verbal-subclasses-taxonomy`:144  ·  **source**: canonical-chapters
- **Issue**: "kim" (0 boundaries) ~ "mountain-ward" (1)
- **Suggested fix**: Align the gloss boundaries with the Ainu form (each gloss word should map 1:1 to a morpheme boundary)

## 🟡 Bibliography entry never cited — 1

### `CAN-BIB-6001x2`
- **Chapter**: `(bibliography)`  ·  **source**: canonical-chapters
- **Issue**: "sato2023a" never cited in-text
- **Suggested fix**: Bibliography entry "sato2023a" is never cited — cite it in-text or remove it

## ⚪ Pageless citation — 968

### `CAN-CITE-skmnql`
- **Chapter**: `abbreviations-glossing-symbols`:210  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "bugaeva2012"
- **Suggested fix**: Add a page locator to Ref "bugaeva2012", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-skmoha`
- **Chapter**: `abbreviations-glossing-symbols`:238  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "bugaeva2022"
- **Suggested fix**: Add a page locator to Ref "bugaeva2022", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-hzuefb`
- **Chapter**: `abbreviations-glossing-symbols`:243  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "bugaeva2021antip"
- **Suggested fix**: Add a page locator to Ref "bugaeva2021antip", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-hzuefb`
- **Chapter**: `abbreviations-glossing-symbols`:427  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "bugaeva2021antip"
- **Suggested fix**: Add a page locator to Ref "bugaeva2021antip", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-44777r`
- **Chapter**: `abbreviations-glossing-symbols`:494  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "refsing1986"
- **Suggested fix**: Add a page locator to Ref "refsing1986", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-ygrt7q`
- **Chapter**: `abbreviations-glossing-symbols`:499  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "sato2008"
- **Suggested fix**: Add a page locator to Ref "sato2008", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-155ds0i`
- **Chapter**: `abilitative-easkay-eaykap`:271  ·  **source**: canonical-chapters
- **Issue**: pageless cite "ijas2023"
- **Suggested fix**: Add a page locator to Ref "ijas2023", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-1m118xs`
- **Chapter**: `abilitative-easkay-eaykap`:207  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "ijas2023"
- **Suggested fix**: Add a page locator to Ref "ijas2023", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-1m118xs`
- **Chapter**: `abilitative-easkay-eaykap`:268  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "ijas2023"
- **Suggested fix**: Add a page locator to Ref "ijas2023", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-1m118xs`
- **Chapter**: `abilitative-easkay-eaykap`:296  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "ijas2023"
- **Suggested fix**: Add a page locator to Ref "ijas2023", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-1l6r4u7`
- **Chapter**: `accent-in-compounds-and-affixation`:159  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "nakagawa2024"
- **Suggested fix**: Add a page locator to Ref "nakagawa2024", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-je2qf2`
- **Chapter**: `accent-in-compounds-and-affixation`:162  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "sato2007"
- **Suggested fix**: Add a page locator to Ref "sato2007", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-1ohwd3l`
- **Chapter**: `accent-in-compounds-and-affixation`:172  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "bugaeva2006"
- **Suggested fix**: Add a page locator to Ref "bugaeva2006", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-1l6r4u7`
- **Chapter**: `accent-in-compounds-and-affixation`:354  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "nakagawa2024"
- **Suggested fix**: Add a page locator to Ref "nakagawa2024", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-jtn1bd`
- **Chapter**: `adnominal-possession-double-marking`:167  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "ijas2023"
- **Suggested fix**: Add a page locator to Ref "ijas2023", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-mn7n09`
- **Chapter**: `adnominal-possession-double-marking`:293  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "tamura2000"
- **Suggested fix**: Add a page locator to Ref "tamura2000", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-1i72xq7`
- **Chapter**: `adverbializer-no`:59  ·  **source**: canonical-chapters
- **Issue**: pageless cite "ijas2023"
- **Suggested fix**: Add a page locator to Ref "ijas2023", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-h7esvn`
- **Chapter**: `adverbializer-no`:42  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "ijas2023"
- **Suggested fix**: Add a page locator to Ref "ijas2023", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-h7esvn`
- **Chapter**: `adverbializer-no`:88  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "ijas2023"
- **Suggested fix**: Add a page locator to Ref "ijas2023", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-h7esvn`
- **Chapter**: `adverbializer-no`:94  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "ijas2023"
- **Suggested fix**: Add a page locator to Ref "ijas2023", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-h7esvn`
- **Chapter**: `adverbializer-no`:100  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "ijas2023"
- **Suggested fix**: Add a page locator to Ref "ijas2023", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-h7esvn`
- **Chapter**: `adverbializer-no`:109  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "ijas2023"
- **Suggested fix**: Add a page locator to Ref "ijas2023", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-h7esvn`
- **Chapter**: `adverbializer-no`:187  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "ijas2023"
- **Suggested fix**: Add a page locator to Ref "ijas2023", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-11hxltz`
- **Chapter**: `adverbs-degree-comparison`:167  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "ijas2023"
- **Suggested fix**: Add a page locator to Ref "ijas2023", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-k31hwg`
- **Chapter**: `affiliative-suffix-morphophonology`:228  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "itabashi2001"
- **Suggested fix**: Add a page locator to Ref "itabashi2001", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-euotos`
- **Chapter**: `affiliative-suffix-morphophonology`:525  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "ijas2023"
- **Suggested fix**: Add a page locator to Ref "ijas2023", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-c3u9y`
- **Chapter**: `affiliative-suffix-morphophonology`:538  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "chiri1952"
- **Suggested fix**: Add a page locator to Ref "chiri1952", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-k31hwg`
- **Chapter**: `affiliative-suffix-morphophonology`:565  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "itabashi2001"
- **Suggested fix**: Add a page locator to Ref "itabashi2001", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-19c86g2`
- **Chapter**: `affiliative-suffix-morphophonology`:569  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "vovin1993"
- **Suggested fix**: Add a page locator to Ref "vovin1993", or mark it PAGELESS_OK if the source is unpaginated

### `CAN-CITE-cfqp3n`
- **Chapter**: `affiliative-suffix-morphophonology`:591  ·  **source**: canonical-chapters
- **Issue**: pageless Ref "kindaichi1936"
- **Suggested fix**: Add a page locator to Ref "kindaichi1936", or mark it PAGELESS_OK if the source is unpaginated

_…and 938 more in this category._

## ⚪ Unattested form (canonical) — 416

### `ATTEST-r3maxy`
- **Chapter**: `abilitative-easkay-eaykap`:142  ·  **source**: canonical-attestation
- **Issue**: unattested form "easkayan" at Ex site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-11zhbwh`
- **Chapter**: `abilitative-easkay-eaykap`:169  ·  **source**: canonical-attestation
- **Issue**: unattested form "sikunuan" at Ex site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-e6rloe`
- **Chapter**: `abilitative-easkay-eaykap`:214  ·  **source**: canonical-attestation
- **Issue**: unattested form "soynean" at Ex site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-949vyj`
- **Chapter**: `accent-in-compounds-and-affixation`:437  ·  **source**: canonical-attestation
- **Issue**: unattested form "hv" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-e730t0`
- **Chapter**: `adnominal-possession-double-marking`:153  ·  **source**: canonical-attestation
- **Issue**: unattested form "what" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-y0zkzo`
- **Chapter**: `adnominal-possession-double-marking`:267  ·  **source**: canonical-attestation
- **Issue**: unattested form "ohawe" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-oaxev5`
- **Chapter**: `adverbializer-no`:155  ·  **source**: canonical-attestation
- **Issue**: unattested form "kamuyoritak" at Ex site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-c52nya`
- **Chapter**: `adverbializer-no`:174  ·  **source**: canonical-attestation
- **Issue**: unattested form "iteke" at Ex site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-1dnj3uc`
- **Chapter**: `adverbs-degree-comparison`:441  ·  **source**: canonical-attestation
- **Issue**: unattested form "enakkari" at Ex site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-1ox3c3z`
- **Chapter**: `adverbs-degree-comparison`:215  ·  **source**: canonical-attestation
- **Issue**: unattested form "erepasi" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-1ox3c3z`
- **Chapter**: `adverbs-degree-comparison`:265  ·  **source**: canonical-attestation
- **Issue**: unattested form "erepasi" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-f0c7wu`
- **Chapter**: `adverbs-degree-comparison`:372  ·  **source**: canonical-attestation
- **Issue**: unattested form "enakkari" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-5533ba`
- **Chapter**: `adverbs-degree-comparison`:373  ·  **source**: canonical-attestation
- **Issue**: unattested form "ensam" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-1o8qrxw`
- **Chapter**: `affiliative-suffix-morphophonology`:501  ·  **source**: canonical-attestation
- **Issue**: unattested form "moru" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-phauha`
- **Chapter**: `alienable-inalienable-split`:381  ·  **source**: canonical-attestation
- **Issue**: unattested form "wehe" at Ex site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-1lutogg`
- **Chapter**: `alienable-inalienable-split`:410  ·  **source**: canonical-attestation
- **Issue**: unattested form "kosonde" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-56mzcu`
- **Chapter**: `alignment-split-intransitive`:78  ·  **source**: canonical-attestation
- **Issue**: unattested form "meraykean" at Ex site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-15bw5d4`
- **Chapter**: `alignment-split-intransitive`:97  ·  **source**: canonical-attestation
- **Issue**: unattested form "turserean" at Ex site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-emip1o`
- **Chapter**: `antipassive-detransitive-i`:42  ·  **source**: canonical-attestation
- **Issue**: unattested form "rian" at Ex site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-16udlhy`
- **Chapter**: `antipassive-detransitive-i`:25  ·  **source**: canonical-attestation
- **Issue**: unattested form "combines" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-u2t3pc`
- **Chapter**: `antipassive-detransitive-i`:32  ·  **source**: canonical-attestation
- **Issue**: unattested form "vt" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-lkn80g`
- **Chapter**: `antipassive-detransitive-i`:329  ·  **source**: canonical-attestation
- **Issue**: unattested form "hv" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-ddv77k`
- **Chapter**: `antipassive-detransitive-i`:335  ·  **source**: canonical-attestation
- **Issue**: unattested form "kha" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-1mhqmuv`
- **Chapter**: `antipassive-detransitive-i`:350  ·  **source**: canonical-attestation
- **Issue**: unattested form "ihka" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-o1qmbz`
- **Chapter**: `antipassive-detransitive-i`:389  ·  **source**: canonical-attestation
- **Issue**: unattested form "ceosmare" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-3vbfyx`
- **Chapter**: `applicative-stacking-relativization-feeding`:338  ·  **source**: canonical-attestation
- **Issue**: unattested form "wh" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-axu9oa`
- **Chapter**: `applicative-system-overview`:240  ·  **source**: canonical-attestation
- **Issue**: unattested form "kaunu" at inline site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-1vuy636`
- **Chapter**: `causal-and-purpose-clauses`:88  ·  **source**: canonical-attestation
- **Issue**: unattested form "ninaan" at Ex site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-1rebu2c`
- **Chapter**: `causative-morphological-re-e-te`:171  ·  **source**: canonical-attestation
- **Issue**: unattested form "ensinot" at Ex site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

### `ATTEST-16v6wnk`
- **Chapter**: `causative-morphological-re-e-te`:287  ·  **source**: canonical-attestation
- **Issue**: unattested form "sioran" at Ex site
- **Suggested fix**: Add corpus/morpheme-DB attestation, or register an exception in attestation-exceptions.ts

_…and 386 more in this category._

