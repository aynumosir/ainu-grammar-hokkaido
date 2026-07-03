# Calibration Audit — 3 Chapters, Candidate Problems Only (nothing fixed)

Verification aids used: bibliography key check (`src/lib/grammar/bibliography.ts`), Ainu dictionary MCP, corpus-frequency MCP. Absolute paths below; line numbers from the current files.

---

## 1. `/home/mkpoli/projects/Ainu/ainu-grammar-hokkaido/src/lib/grammar/chapters/alignment-hierarchical-and-the-debate.svelte`

### (a) Internal inconsistencies
- **L229–231 vs other chapters (HIGH severity):** "the 1990 work in which an active characterisation may appear **was not available to verify**" — but `shibatani1990` is in bibliography.ts with a db.aynu.org URL, and is cited **with page numbers** in applicative-e.svelte (L320 `p="65"`, L370 `p="62, 66"`) and the loanwords chapter (L25 `p="§1"`). The book both claims and disclaims access to Shibatani 1990.
- **L116–119 vs Ex L122–130:** prose claims the tripartite row is "verifiable **in a single utterance**", and the note (L129) says "with a= for A and =an for S, all three roles are kept formally distinct" — but the utterance `i=erampokiwen i=rewsire wa i=kore` contains **only** `i=` (O). No `a=` or `=an` occurs in it.
- **L123–124 gloss under-segmentation:** `i=rewsire` glossed `4.O=lodge` — the causative `-re` (rewsi + -re 'cause to lodge') is unsegmented and unglossed; `wa i=kore` glossed literal `CONJ 4.O=give` while tr "give me lodging" reflects the benefactive `V wa kore` construction.
- **Example-number vs page mismatch:** L299 `cite="nakagawa2024:175"` + `place="Nakagawa ex. 140"` vs L317 `cite="nakagawa2024:174"` + `place="Nakagawa ex. 145"` — higher ex. number on the *earlier* page; at least one locator is wrong.
- **L73 vs L86–87:** table hedges "S=A=O; **zero or absent**", but prose asserts third person "carr[ies] **the same form**" — prejudging the zero-vs-absent debate the chapter itself marks ‹contested› at L348–358.
- **Tag misuse:** L231 and L241 attach ‹speculative› to the author's own access/reporting statements, not to claims.

### (b) Suspicious factual claims
- **L90–91:** verbatim quote `"mixed (but basically tripartite)"` attributed to Bugaeva 2012 p. 472, 498 — quote-accuracy risk (needs source check).
- **L165, 177 "Okuda 2015"; L189 "Satō 2014"; L195/L445 "Satō 2024":** plain-text author-years with **no bibliography entries** (bibliography has only `okuda2022`, `okuda2025`); all second-hand "via Dal Corso" — classic hallucination surface.
- **L279–281:** dialect-specific claim "Saru and Chitose suppress the expected second-person subject prefix and use bare *en=* for 2SG→1SG; **Chitose extends the bare form to 2PL→1SG**" — exactly the kind of detail that gets flipped between dialects; verify against Nakagawa 2024:170,173 / Satō 2008:146–147.
- **L140:** `sakaguchi2024 p="ix, 62–64, 77–85"` — a front-matter page "ix" plus broad spans reads like padded pagination.

### (c) Citation problems
- `ijas2023` cited **pageless** three times (L364, L373, L382).
- **L231:** second `shibatani1988 p="210–211"` cite attached to the statement that *a different work* (1990) was unavailable — decorative; a cite cannot support that.
- **L341–344, L434–435:** "the **factbase-verified** five-use analysis ... and the **directly read** combination data" — cites the QA pipeline's own status as if it were evidence.
- Multi-ref pileups (L25–26: 4 refs for one table; L260–261: 4 refs for one sentence) make per-claim attribution unfalsifiable.

### (d) Copyediting
- **Internal editorial tags shipped in prose:** `‹original-needs-review›` at L340 and L436.
- **Pipeline register leaks:** "factbase-verified" (L341, L434), "read directly" (L165), "directly read" (L342, L435).
- **‹SA› tag collision:** "‹SA› Sakhalin person indexing" (L173, L184, L209, L328, L425, L443) uses the identical bracket style as epistemic tags ‹contested›/‹speculative›; "‹SA› Sakhalin" is also redundant.
- **Spelling drift within one chapter:** "characterisation" (L86, L238), "summarises" (L89) vs "generalization" (L362, L392).
- Repetition: "head-marking in the sense of Nichols (1986)" at L7–8 and again L239–240.

### (e) Orthography/formatting (Ainu text)
- m-line segmentation inconsistent: `ru-we` hyphenated (L296, L314) while `erampokiwen`, `rewsire`, `arki=as` are unsegmented; elsewhere the book writes `ruwe` solid.
- L70–72: `Ø` wrapped in `<i lang="ain-Latn">` — metalinguistic symbol marked as Ainu text.
- L374: `dial="HK"` on the constructed example vs SAR/CHI/TOK elsewhere — inconsistent dial-code vocabulary.

---

## 2. `/home/mkpoli/projects/Ainu/ainu-grammar-hokkaido/src/lib/grammar/chapters/applicative-e.svelte`

### (a) Internal inconsistencies
- **L195 note vs table (HIGH):** "Both Manner and Path roles (**each 2%**) derive exclusively from intransitive bases" — table L145 gives **Manner 3%** (Purpose and Path are the 2% rows). Numeric self-contradiction.
- **L373–375 vs L189:** `turepta-e-arpa` presented as an **incorporated** form — but L189 presents the identical string as a two-word phrase `m="turepta e-arpa"` with a free applied object (Nakagawa ex. 180). Same data, two incompatible analyses; morphologically, an incorporated noun preceding the applicative prefix is also anomalous.
- **L53 note:** "Both objects — tree and sword — are core arguments **marked by person affixes**" — no person affix appears in `sirkorkamuy emus e-tuye` (all 3rd person = zero/absent); contradicts the surface form and silently takes Satō's side of the zero-affix debate the alignment chapter marks ‹contested›.
- **L190 gloss vs tr:** `g="lily.bulb APPL-go"` vs `tr="go to dig lily-bulbs"` — `turepta` = turep 'lily bulb' + ta 'dig'; the gloss drops the 'dig' morpheme that the translation includes. Similarly L174: `a=kemaha` glossed `4.POSS=foot` hides the possessive suffix `-ha`.
- **L262–265 vs table L73–94:** "the adpositional alternative **simply does not exist**" — the chapter's own sub-type table exists to list the `ani/kusu/ta/un/peka` adpositional paraphrases for types 1, 2, 4.
- **L219–226 vs alignment chapter paradigm (HIGH):** `i=corpokke` glossed `1SG.O=under`, note "carries the **1SG** object prefix i=" — but alignment-hierarchical L44 defines 1SG.O as `en=` and `i=` as **4.O** (narrative first person). Cross-chapter gloss-convention contradiction.
- **L287–294:** affiliative introduced as "*e-* 'head of'", then the minimal pair is "*he-puni* ... versus *e-puni*" — `he-` appears from nowhere; as written the reader cannot tell which member is affiliative.

### (b) Suspicious factual claims
- **L33–36:** "ko- is the most frequent, followed by e- and then o-; ... roughly **one-third of all Ainu verbs** and up to **seven percent of the total lexicon** (Bugaeva 2006: 188)" — frequency ranking + the paired statistics are prime misremember targets; Bugaeva's published applicative counts are usually from her 2010 *Studies in Language* paper.
- **Percentages table L105–165:** all role percentages and intr/tr splits (91/9, 96/4, 84/16, 83/17, 75/25, 72/28…). They do sum to 100 (checked), but each cell needs checking against Bugaeva's actual table.
- **L306–308:** "synchronically, *eykaun* functions as a **transitive base**" — **checked against Nakagawa's dictionary via MCP:** eykaun = 優勢である 'be dominant' (intransitive-like), with *ko-eykaun* supplying the object ('prevail over someone'). Likely wrong.
- **L252:** `ikka` glossed "steal (**intransitive base**)" — attested plainly as 'steal' (Kanazawa 1898 盗む); the intransitivity claim rides entirely on the Bugaeva cite.
- **L373:** "*at-e-uk* 'catch with a **net**'" — *at* is 'cord/string (elm-bark thread)'; 'net' is *ya*. Gloss suspicious.
- **L52:** "after Monbetsu-chō 1969: 237" — hyper-specific town-history provenance; hallucination-prone.
- **Overconfident universals:** L328–330 "stacks **freely** ... **no documented** meaning difference"; L369–370 "**invariably** mediated by a prior applicative".
- **L30–32:** accent claim `kotán → ekótanne` sourced to a Discord post yet tagged **‹consensus›**.

### (c) Citation problems
- L32, L276: Discord posts co-cited with academic sources then tagged ‹consensus›/‹corpus-confirmed› — epistemic inflation of community material.
- `bugaevakobayashi2022` cited by bare section symbols (`§4.3.3`, `§4.1.1`, `§4.2.3`) while all other sources get pages — inconsistent locator granularity.
- L377: "Kaiser's analysis ... provides a formal account <Ref kaiser1998 paren/>" — decorative one-liner (key itself is real: Lizanne Kaiser, *Yearbook of Morphology 1997* — verified in bibliography.ts L920).

### (d) Copyediting
- Pipeline register: "principal **read sources**" (L314), "the **read literature**" (L320).
- **L289:** "the second-person agent clitic e= (a person index, **effective −1 on the available slots**)" — opaque pseudo-arithmetic; person indexes don't change arity.
- Terminology drift: "double-object verb" (L14) / "three-place verb" (L42) / "ditransitive" (alignment ch.) for the same class.
- L40: hard-coded "(see §2 below)" — fragile against section renumbering.
- Japanese metalanguage ('〜で以て', '〜するために') in the L63–96 table — only place in these three chapters mixing Japanese glosses into an English table; check house convention.

### (e) Orthography/formatting
- L31: accented `kotán`, `ekótanne` — the only pitch-accented Ainu forms in all three chapters; no accent policy elsewhere.
- L273: `kanpinuye` — kampi vs kanpi spelling; check site-wide nasal-assimilation convention.
- Hyphenation policy drift: `e-ikka` hyphenated in prose but `eykaun` solid although claimed to contain the same `e-` (L252 vs L303).

---

## 3. `/home/mkpoli/projects/Ainu/ainu-grammar-hokkaido/src/lib/grammar/chapters/ainu-loanwords-and-toponymy-in-japanese.svelte`

### (a) Internal inconsistencies
- **L333–335 vs L350–351:** proto-form given as `*siw kor pe` (with w-deletion) then two paragraphs later as "loans from Ainu **\*si kor pe**, borrowed before the Ainu vowel change to **\*si ker pe** had completed" — the *w* silently vanishes from the reconstruction.
- **Duplicated passage:** the *iruka* claim with the identical quote "isolated in Japonic; cf. Saru *rika* / Kuril *rika* 'whale meat'" appears at **L302–305 and again L425–429**.
- **L86 table row:** 新冠 Niikappu listed as illustrating the `-ushi/-us` reflex, but the Japanese surface has **no us reflex** (it is deleted) — the example contradicts its own "Japanese reflex" column. Emphasis also wrong: `U<em>su</em>` highlights "su" not "Us"; `Nii<em>kappu</em>` highlights the ni-kap part.
- **L356–358:** "this gives a **terminus ante quem** for the Ainu historical phonology" — the argument (Japanese preserves /o/ → borrowing preceded the change) yields a terminus **post** quem for the sound change; as phrased, backwards.
- **L159 note:** "The *san* direction also underlies the *panke/penke* 'downstream/upstream' spatial terms" — panke/penke derive from *pan/pen* 'lower/upper' (cf. pana/pena), not from *san*; uncited and contrary to standard etymology.

### (b) Suspicious factual claims
- **Vovin table L244–299 (HIGHEST-risk block in all three chapters):** nine EOJ etyma each with exact Man'yōshū locators (14.3401, 14.3503, 20.4324, 14.3529, 14.3399, 14.3407, 14.3409, 14.3561, 14.3382) plus form/gloss triples (`karimba < karinpa`, `matô < mat-po 'girl'`, `sömö < somo`, `Nipë < ni-pet`…). Every cell must be checked against Vovin 2022 ch. 6; note Vovin's known comparandum elsewhere is OJ *kanipa* 'birch/cherry bark', not "karimba".
- **L304/L427:** "Saru *rika* / Kuril *rika*" — identical form cited for two dialects; listing both is pointless unless one form is misremembered.
- **L115–116:** `nupuri → "Nuburi- / Nopporo- (reductions)"`; 野幌 Nopporo < nupuri? — Nopporo is conventionally derived from *nup-or* 'field-place'; "Nuburi-" as a reflex class looks invented (hedged "illustrative", but weakest row).
- **L45 and L449:** "**rendaku** (sequential voicing: pet → -betsu)" — calling loanword-adaptation voicing *rendaku* is linguistically dubious (rendaku is Japanese-internal compound voicing); attribution to Shibatani 1990 §1 needs checking. Claim repeated twice.
- **L468–471:** Korean comparisons for *nay*, *casi* attributed to a Discord user, described as "has not been tested against the comparative literature" — *casi* ~ Korean *cas* **is** in the published literature (Vovin); framing factually off.
- **L459:** "areas with **no documented variety** — Hakodate, Erimo, Rumoi, Otaru" — southern Oshima has Edo-period documentation (e.g. *Moshiogusa* 1792); too absolute.
- **L17:** verbatim quote "it is silently assumed that there are no Ainu loanwords in Japanese" — quote-accuracy risk.
- **L433–435:** Sakhalin loans "went into those languages, **not into Japanese**" — overconfident universal ignoring Japanese fishery-era contact on Sakhalin.
- **L185:** "'place where **bark trees** stand'" — *ni-kap* = 'tree-bark (elm bark)'; "bark trees" garbles the compound.
- **L319:** `o-tum-nay` glossed 'head-middle-stream' — hydronymic *o-* is 'river-mouth / lower end', not 'head'.
- (Verified TRUE, for calibration: L149–151 corpus figures *pet* 1,344/rank 140, *nay* 559/rank 312 — **exactly match** the corpus MCP; *sikerpe*=キハダの実 and dialect Japanese シコロ confirmed in Hattori 1964; *pattaki* 'grasshopper' and *maketa* 'defeat' (Japanese loan, per Nakagawa) confirmed. The pipeline is not hallucinating uniformly — suspicion must be targeted.)

### (c) Citation problems
- **L149–152:** the corpus frequency claim carries **no citation at all** (numbers are right, per MCP check — the defect is the missing cite).
- **L170:** ‹corpus-confirmed› tag on a Discord opinion "corroborating Tamura 1996" — tag/source category mismatch.
- **L19–20:** "echoed in Ijäs's typological overview" `<Ref k="ijas2023" />` — pageless, and a learner grammar echoing a philological claim is dubious; decorative.
- **L41, L186:** bulk `s.v. nay, pet, us, oma, to, sir, nupuri, kotan` (8 headwords, one cite) and `s.v. -us(i)` — does Tamura 1996 have a hyphenated headword `-us(i)`?
- **L233 vs L226/L305:** "after Vovin (2022, **Ch.6 §2**)" vs `p="§1–2"`, `p="§2"` — inconsistent locator style for one source.
- **L398–407:** rakko/tonakai rows say "source form not established here" although *rakko* and *tunakay* are in the dictionaries this chapter cites elsewhere — an easily-closed gap presented as unclosable.

### (d) Copyediting
- **L26–27:** quoted fragment "…indicate that **they** might have once lived in that region" — "they" has no antecedent in the sentence (the Ainu never named).
- Duplicated iruka paragraph (see (a)) — repetition.
- **L452–453:** "— 稚内 as 'young interior'? —" stray interrogative inside em-dash parenthetical.
- ‹contested› ×4 in one section (L229, L305, L313, L429) — tag fatigue.
- "sources directly read for this chapter" (L383–384) — pipeline register again.

### (e) Orthography/formatting
- Japanese romanization mixed: kunrei-ish *sikorope, sikoro, sikonohe, siko no ki* (L348–350) vs Hepburn *shishamo, Shiretoko, -ushi, Ashibetsu* elsewhere; both in one cell at L108 "Sire- / Shir-".
- IPA `ɸina` (L370) amid romanized forms.
- Katakana reflex given for some table rows (ナイ, ベツ, ウシ, ト) but not others (-omai, Sire-, Nuburi-, Kotan-).
- Macron inconsistency within the chapter: "Hokkaidō" (L25, L436) vs "Hokkaido" (L151, L199, L459).

---

## Summary: category frequencies and QA-pipeline calibration

**Frequency ranking (candidate count across 3 chapters):**
1. **(b) suspicious factual claims** — ~25 items; concentrated in the fact-heavy periphery chapter (the 9-row Vovin table alone) and quantitative claims (Bugaeva percentages, frequency orderings). Periphery chapters need the heaviest fact-QA.
2. **(c) citation problems** — ~15; signature defects: pageless `ijas2023`/Discord cites, epistemic-tag inflation (‹consensus›/‹corpus-confirmed› on Discord posts), decorative one-liner cites, inconsistent locator granularity.
3. **(d) copyediting** — ~14 but low severity; the distinctive tic here is **not** "crucially/notably" overuse (essentially absent) but **pipeline-register leakage**: "factbase-verified", "read sources", and two literal `‹original-needs-review›` tags shipped in prose.
4. **(a) internal inconsistencies** — ~13, but the **highest-severity** finds live here: the Shibatani-1990 "not available" vs. page-cited contradiction, Manner 2%-vs-3%, turepta phrasal-vs-incorporated, `i=` glossed 1SG.O vs 4.O across chapters, ex-number/page mismatch.
5. **(e) orthography** — ~10, mostly policy drift (segmentation hyphens, romanization systems, macrons, accent marks).

**Frontier-vs-cheap split (of ~75 candidate issues):**
- **~25% script/no-model:** cite-key existence, pageless-Ref detection, epistemic-tag lint (incl. `‹original-needs-review›` in output — should be a build-blocking grep), gloss-vs-morpheme count, percentage-sum checks, ex-number/page monotonicity per source, dial-code vocabulary, macron/romanization/spelling-variant regexes, duplicate-sentence detection (would have caught the iruka repeat), corpus numbers diffed against the corpus MCP.
- **~35% cheap model (small LLM + house-style sheet, chapter-local):** register leaks, dangling "they", tag fatigue, table-vs-prose numeric contradictions (2% vs 3%), gloss-vs-translation semantic mismatch (turepta 'dig'), ‹consensus› on Discord cites, terminological drift.
- **~40% needs frontier — but crucially, frontier *with retrieval*, not frontier alone:** verbatim-quote accuracy, the entire Vovin table, Bugaeva's statistics, ikka/eykaun transitivity, at='net', panke/penke and o- etymologies, rendaku mislabel, terminus-ante-quem logic, and cross-chapter contradictions (Shibatani 1990, i= glossing) which need whole-book context. Note my MCP spot-checks resolved several of these cheaply (eykaun, maketa, pet/nay counts) — a **mid-tier model wired to the dictionary/corpus MCP and the source dump could reclaim perhaps half of this frontier bucket**; pure frontier reasoning without source access resolves only the logic-class items (terminus ante quem, rendaku framing).