<script lang="ts">
	import { S, Ex, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="Reading an example" id="interlinear-format">
	<p>
		An interlinear example presents an Ainu expression, an aligned gloss, and an English
		translation. The gloss identifies the parts of the expression; the translation conveys its
		meaning in context. The format follows the Leipzig Glossing Rules
		<Ref k="comrie2015" />, with a separate convention for marking person forms explained below.
	</p>
	<Ex
		m="topenpe hekattar ku=kore"
		g="sweets children 1SG.A=give"
		tr="I gave the children sweets."
		cite="nakagawa2024:127, ex. 11a"
		dial="HK"
		note="English glosses and translation supplied here. The source does not identify a dialect for this example."
	/>
	<p>
		The first two words are glossed with English lexical equivalents. In the verb,
		<i lang="ain-Latn">ku=</i> identifies a first-person singular subject:
		<code>1SG.A=give</code> reads “first-person singular transitive subject + give.” The past-tense form “gave” belongs to the English translation; no separate past-tense marker
		appears in the Ainu example.
	</p>
	<p>
		Some examples also show the unsegmented pronunciation, the source's katakana spelling, or a
		literal translation. These additions help where a morphological division is difficult to recover
		from the pronounced form, or where an idiomatic translation conceals a useful structural
		parallel.
	</p>
</S>

<S t="Boundaries and combined labels" id="boundary-conventions">
	<table>
		<thead><tr><th>Sign</th><th>Meaning in an example</th></tr></thead>
		<tbody>
			<tr
				><td><code>-</code></td><td
					>A morpheme boundary within a word, including derivational and possessive suffix
					boundaries</td
				></tr
			>
			<tr
				><td><code>=</code></td><td
					>The boundary between a person marker and the expression it attaches to</td
				></tr
			>
			<tr
				><td><code>.</code></td><td
					>A division between labels assigned to the same segment, as in <code>1SG.A</code></td
				></tr
			>
		</tbody>
	</table>
	<p>
		Hyphens and equals signs in the Ainu line are matched in the gloss. A dot occurs within a gloss:
		it lets several labels describe one form without dividing that form into smaller pieces <Ref
			k="comrie2015"
		/>.
	</p>
	<p>
		The equals sign follows Nakagawa's convention for making person markers visible while leaving
		the stem easy to identify. He explains that it originated as a way of distinguishing person
		marking from derivation <Ref k="nakagawa2024" p="59–61" />. In the Leipzig rules, the same sign
		marks a clitic boundary; its use here therefore needs this qualification. Whether a particular
		person marker behaves as an affix or a clitic is a grammatical question treated in <Xr
			ch="personal-affix-template-and-ordering"
			s="boundary-status"
		/>.
	</p>
</S>

<S t="Grammatical abbreviations" id="gloss-atoms">
	<p>
		Lexical meanings appear in lower case, such as <code>give</code> and <code>children</code>.
		Grammatical labels appear in capitals or small capitals. The complete list is in
		<Xr ch="abbreviations-glossing-symbols" />. Frequently used labels include the following:
	</p>
	<table>
		<thead><tr><th>Label</th><th>Meaning</th></tr></thead>
		<tbody>
			<tr><td><code>S</code></td><td>The single argument of an intransitive verb</td></tr>
			<tr><td><code>A</code></td><td>The agent-like argument of a transitive verb</td></tr>
			<tr
				><td><code>O</code></td><td>The object or patient-like argument of a transitive verb</td
				></tr
			>
			<tr
				><td><code>1SG, 1PL, 2SG, 2PL</code></td><td>First or second person, singular or plural</td
				></tr
			>
			<tr><td><code>4</code></td><td>The indefinite or fourth-person series</td></tr>
			<tr><td><code>APPL, CAUS</code></td><td>Applicative and causative</td></tr>
			<tr><td><code>POSS, NMLZ, COP</code></td><td>Possessive form, nominalizer, and copula</td></tr
			>
		</tbody>
	</table>
	<p>
		The labels S, A, and O identify argument roles without assuming that Ainu treats all subjects
		alike <Ref k="bugaeva2012" p="471" />. Likewise, <code>4</code> identifies a series of forms
		whose interpretation varies with the construction. Its uses include indefinite reference and
		person reference in narration; see <Xr ch="indefinite-fourth-person-paradigm" />. A gloss is a
		compact analysis of a form. The accompanying discussion explains ambiguities that a short label
		cannot express.
	</p>
</S>

<S t="Dialect and speaker attribution" id="dialect-attribution">
	<p>
		Dialect tags identify the provenance of examples. <code>HK</code> means Hokkaido without a more specific
		identification; it does not mean that a form has been documented throughout Hokkaido. Locality and
		speaker information, when available, appears separately.
	</p>
	<table>
		<thead><tr><th>Tag</th><th>Variety</th><th>Tag</th><th>Variety</th></tr></thead>
		<tbody>
			<tr><td>HK</td><td>Hokkaido, unspecified</td><td>SAR</td><td>Saru</td></tr>
			<tr><td>CHI</td><td>Chitose</td><td>ISH</td><td>Ishikari</td></tr>
			<tr><td>TOK</td><td>Tokachi</td><td>HOR</td><td>Horobetsu</td></tr>
			<tr><td>SHI</td><td>Shizunai</td><td>ASA</td><td>Asahikawa</td></tr>
			<tr><td>YAK</td><td>Yakumo</td><td>SA</td><td>Sakhalin, for comparison</td></tr>
			<tr><td>KU</td><td>Kuril, for comparison</td><td></td><td></td></tr>
		</tbody>
	</table>
	<p>
		An attested example cites the work or recording in which it occurs. An example composed to
		illustrate a pattern carries the label <em>constructed example</em>. Such an illustration cannot
		establish that a speaker used that sentence. The limitations of dialect and corpus sampling are
		discussed in <Xr ch="dialect-sample-and-corpus-method" />.
	</p>
</S>

<S t="Following a citation" id="citation-format">
	<p>
		Citations give the author, publication year, and, where relevant, a page, section, or example
		number. Opening a citation shows the bibliographic entry. The references at the end of each
		chapter list its cited works; <Xr ch="consolidated-references-bibliography" /> collects the bibliography
		for the grammar.
	</p>
	<p>
		A <em>reported</em> badge identifies a work cited through another source. Where an example comes from
		such a quotation, its note identifies the intermediary. This matters when checking spelling, glosses,
		or interpretation: a later author's transcription may differ from the original edition. Adapted boundaries,
		glosses, and translations are identified in example notes when needed to understand the relationship
		to the source.
	</p>
</S>

<S t="Evidence labels" id="evidence-grades">
	<p>
		A label in angle brackets at the end of a claim describes its evidential status. Ordinary
		unmarked exposition presents established descriptions. The labels distinguish disagreement,
		findings from a specified corpus sample, and hypotheses requiring further support.
	</p>
	<table>
		<thead><tr><th>Label</th><th>Meaning</th></tr></thead>
		<tbody>
			<tr
				><td>consensus</td><td>A well-established description on which the major sources agree</td
				></tr
			>
			<tr><td>contested</td><td>A question on which published analyses disagree</td></tr>
			<tr><td>corpus-confirmed</td><td>A claim checked against the stated corpus sample</td></tr>
			<tr
				><td>corpus-suggested</td><td
					>An interpretation supported by limited or indirect corpus evidence</td
				></tr
			>
			<tr><td>speculative</td><td>A hypothesis that remains unverified</td></tr>
			<tr
				><td>original-needs-review</td><td
					>An analysis proposed in this grammar that still requires independent review</td
				></tr
			>
		</tbody>
	</table>
	<p>
		A corpus label applies within the limits of the sample described. It does not turn the absence
		of a form in that sample into evidence that the form is impossible in the language.
	</p>
</S>
