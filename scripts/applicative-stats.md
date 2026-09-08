# Applicative inventory statistics

`applicative-stats.ts` calculates role distributions from MDB's
`morpheme_db/applicatives.json`. The aggregate report records the source commit
and SHA-256 of the complete input file. Input annotations remain in MDB;
this repository publishes the calculation and aggregate counts.

Recount from an MDB checkout:

```sh
bun run stats:applicatives --mdb-root ../ainu-morpheme-database
bun run stats:applicatives --mdb-root ../ainu-morpheme-database --check
bun run test:applicatives
```

`AINU_MDB_ROOT` can specify the checkout instead. The default is the sibling
`../ainu-morpheme-database`. The applicative input must match its committed
version. `--check` compares the source identity and computed report with the
published aggregate without modifying it. To reproduce an older report, use
an MDB checkout at the commit recorded in its `source.revision` field.

The report is `src/lib/grammar/data/mdb-applicative-stats.json`; chapter tables
read it directly. Counts use only per-entry annotations. MDB's
`reference_shares` (published percentages) do not enter the calculation.

## Counting unit and selection

1. Retain entries with `status: attested` and `form: verb`.
2. Group by `(prefix, verb_lemma)`, collapsing person-marked citation forms.
   Follow the recorded lemma keys; do not guess further synonym or number-form
   equivalences. Reject conflicting role or base-lemma annotations within a group.
3. Count each group once under its recorded role. Preserve the least confident
   annotation if confidence differs among its citation forms.
4. Divide each role count by the number of retained verb lemmas for that prefix.
   Round percentages to one decimal place. Rounded totals may differ from 100%.

The input contains 107 entries: 7 coined, 1 uncertain, 3 excluded, and
4 attested nominalizations are omitted. The remaining 92 verb entries collapse
to 91 verb lemmas (43 e-, 34 ko-, 14 o-). These totals are specific to the source
revision recorded in the report.

## Interpretation and verification

These are descriptive counts of a selected annotated inventory. Attested status
can reflect dictionary evidence; it does not mean that a corpus token was found.
High/medium/low are MDB's annotation labels, not independently calibrated
probabilities. Recounting does not independently verify the segmentation or role
assigned to each entry. Roles absent from the table have no retained annotation
in this input; the language can still express them.

The source combines dictionary and corpus evidence, including Sakhalin examples,
without a complete per-entry dialect classification. This count therefore makes
no claim to estimate a particular Hokkaido dialect, speech-token frequency,
whole-lexicon coverage, or productivity. In particular, the selected inventory's
e- > ko- > o- size order cannot establish a language-wide frequency order.

No structured base-valency field is present in this applicative dataset. The
derived word's POS cannot substitute for the valency of its base. Base-valency
percentages require separately checked annotations before they can be computed.

CI checks counting rules with synthetic data and checks consistency within the
published aggregate. Reproduction against the actual source requires access to
the MDB input and is performed with `--check`. The source commit and checksum
make a changed input detectable.
