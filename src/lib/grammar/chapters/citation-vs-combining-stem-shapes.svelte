<script lang="ts">
	import { S, Ex, Ref, Xr } from '$lib/grammar/components';
	import koreSpellings from '$lib/grammar/data/kore-spelling-counts.json';
</script>

<S t="Forms in isolation and in combination" id="overview">
	<p>
		A word's dictionary form does not specify every pronunciation it takes in a phrase. Final
		consonants can change before the next sound, vowels can contract at a prefix boundary, and a
		consonant can become the onset of a following syllable. Possessive morphology introduces another
		kind of difference between forms
		<Ref k="nakagawa2024" p="30, 36–40, 226–227" />;
		<Ref k="shiraishi2022" p="§§3.2, 4.3–4.5" />.
	</p>
	<p>
		These patterns have separate conditions. A phonetic release after /r/, a contracted person
		prefix, and a possessed noun are not interchangeable instances of one stem alternation. The
		following comparisons distinguish the segmental, morphological, and lexical factors involved.
	</p>
</S>

<S t="Final /r/ in different environments" id="final-r">
	<p>
		Final /r/ often has a short vowel-like release. Its quality can resemble a neighboring vowel and
		can vary within one speaker's speech. Nakagawa describes this variation in
		<i lang="ain-Latn">kor</i> “have,” <i lang="ain-Latn">kar</i> “make,”
		<i lang="ain-Latn">pirka</i> “good,” and <i lang="ain-Latn">arki</i> “come, plural”
		<Ref k="nakagawa2024" p="30" />. The release does not by itself establish a separate final vowel
		phoneme.
	</p>
	<p>
		Before a consonant, final /r/ can undergo sandhi. For example,
		<i lang="ain-Latn">ku=kor tar</i> “my carrying strap” can be pronounced
		<i lang="ain-Latn">kukot tar</i>, and <i lang="ain-Latn">ku=kor nima</i>
		“my wooden bowl” as <i lang="ain-Latn">kukon nima</i>
		<Ref k="nakagawa2024" p="36" />. These are conditioned changes within a combination. Their wider
		distribution is described in <Xr ch="coda-r-assimilation-sonorant-sandhi" />.
	</p>
	<S t="Older spellings of final /r/" id="final-r-drop">
		<p>
			Nakagawa identifies <i lang="ain-Latn">koro</i> and
			<i lang="ain-Latn">kara</i> as older spellings of Hokkaido
			<i lang="ain-Latn">kor</i> and <i lang="ain-Latn">kar</i>
			<Ref k="nakagawa2024" p="30" />. Those spellings reflect the difficulty of recognizing final
			/r/ and its release. They do not establish a general Hokkaido paradigm with an independent
			vowel-final form and a bound consonant-final stem.
		</p>
		<p>
			The grammatical evidence for final /r/ includes suffix selection and consonant alternations <Ref
				k="shiraishi2022"
				p="§3.2"
			/>. It is set out in
			<Xr ch="rhotic-r" /> alongside the genuine distinction between /r/ and /rV/ endings.
		</p>
	</S>
</S>

<S t="Final /t/ before /i/" id="t-i-junction">
	<p>
		Combining a /t/-final form with a following /i/ can produce /ci/. Nakagawa gives
		<i lang="ain-Latn">mat</i> “woman” plus <i lang="ain-Latn">ikor</i> “treasure” as
		<i lang="ain-Latn">macikor</i>, and <i lang="ain-Latn">nit</i> “handle” plus
		<i lang="ain-Latn">-ihi</i> as <i lang="ain-Latn">nicihi</i>
		<Ref k="nakagawa2024" p="36" />. He distinguishes this regular change from the variable
		consonant alternations discussed on the following pages
		<Ref k="nakagawa2024" p="38" />.
	</p>
	<p>
		Shiraishi treats the pattern together with resyllabification and also gives
		<i lang="ain-Latn">rekut-i</i> becoming <i lang="ain-Latn">rekuci</i>
		“his or her throat” <Ref k="shiraishi2022" p="§4.4, example 9" />. The original final consonant
		precedes the vowel of the next syllable in the combined pronunciation.
	</p>
	<Ex
		m="usa mat-ikor usa tamasay"
		ain="usa macikor usa tamasay"
		g="various woman-treasure various bead.necklace"
		tr="women's treasures and bead necklaces"
		cite="kawakami1986:nam-archive/kawakami-minwa/09#465"
		dial="SAR"
		note="Kawakami Matsuko's 1986 narrative, published in the National Ainu Museum archive. The transcript has macikor; the morphological boundary is supplied here."
	/>
	<p>
		The transcript provides a contextual occurrence of the combined form. The phonological analysis
		follows the descriptions above. Related possessive formations are treated in
		<Xr ch="affiliative-suffix-morphophonology" />.
	</p>
</S>

<S t="Shortened person prefixes" id="prefix-elision">
	<p>
		In the southern varieties described by Nakagawa, <i lang="ain-Latn">ku=</i> and
		<i lang="ain-Latn">ci=</i> lose their vowel before stems beginning with /a, e, o, u/. His
		examples include <i lang="ain-Latn">ku=ómare</i> becoming
		<i lang="ain-Latn">k=ómare</i> “I put something into something,” and
		<i lang="ain-Latn">ci=étu</i> becoming <i lang="ain-Latn">c=étu</i> “our nose”
		<Ref k="nakagawa2024" p="52" />. Satō gives the corresponding pattern in Chitose
		<Ref k="sato2008" p="110–111" />.
	</p>
	<p>
		Stem-initial /i/ behaves differently. With <i lang="ain-Latn">ku=</i> or
		<i lang="ain-Latn">e=</i>, it may become /y/, as in
		<i lang="ain-Latn">kúype</i> “I eat” from <i lang="ain-Latn">ku=ipe</i>. A closed initial stem
		syllable blocks that weakening in examples such as
		<i lang="ain-Latn">kuínkar</i> “I look”
		<Ref k="nakagawa2024" p="52–53" />. Prefix-vowel loss and stem-vowel weakening are described
		separately in <Xr ch="personal-affix-sandhi-connected-speech-reduction" />.
	</p>
</S>

<S t="Lexical forms and proposed etymologies" id="at-rus-attus">
	<p>
		A lexical word can preserve the outcome of an older change without participating in a productive
		modern alternation. For the robe name <i lang="ain-Latn">attus</i>, Tamura's dictionary gives a
		tentative segmentation <i lang="ain-Latn">at-tus</i>, explicitly marked uncertain <Ref
			k="tamura1996"
			p="s.v. attus"
		/> ‹speculative›.
	</p>
	<p>
		<strong>Sakhalin comparison.</strong> Hattori's comparative entry gives Saru
		<i lang="ain-Latn">áttus</i> beside Sakhalin <i lang="ain-Latn">ahrus</i>
		<Ref k="hattori1964" p="item 566" />. The two regional forms differ in the consonant sequence
		following the initial vowel.
	</p>
</S>

<S t="Koré: accent and lexical history" id="kore">
	<p>
		Nakagawa relates <i lang="ain-Latn">koré</i> “give” to
		<i lang="ain-Latn">kor</i> “have” plus causative <i lang="ain-Latn">-e</i>. He explains its
		second-syllable accent through diminished awareness of that derivation and the ordinary accent
		pattern of the whole word
		<Ref k="nakagawa2024" p="53" /> ‹speculative›. Shiraishi reports the same kind of lexicalization account
		<Ref k="shiraishi2022" p="§5.2" />.
	</p>
	<p>
		Tamura lists <i lang="ain-Latn">korpare</i>, analyzed as
		<i lang="ain-Latn">kor-pa-re</i>, as the plural counterpart of
		<i lang="ain-Latn">kore</i>
		<Ref k="tamura1996" p="s.v. korpare" />. The plural form retains the causative suffix after
		<i lang="ain-Latn">-pa</i>.
	</p>
	<p>
		The {koreSpellings.snapshot_date} snapshot of {koreSpellings.documents} distinct ILCAA transcripts
		contains {koreSpellings.aligned_units.toLocaleString('en-US')} aligned units. It gives the following
		written-form counts <Ref k="ilcaa1976" /> ‹corpus-confirmed›:
	</p>
	<table>
		<caption>Spellings in the archived ILCAA Saru and Shizunai transcripts</caption>
		<thead><tr><th>Spelling</th><th>Occurrences</th></tr></thead>
		<tbody>
			<tr><td lang="ain-Latn">koré</td><td>{koreSpellings.counts['koré']}</td></tr>
			<tr><td lang="ain-Latn">kóre</td><td>{koreSpellings.counts['kóre']}</td></tr>
			<tr><td lang="ain-Latn">kore</td><td>{koreSpellings.counts.kore}</td></tr>
			<tr><td lang="ain-Latn">korpare</td><td>{koreSpellings.counts.korpare}</td></tr>
		</tbody>
	</table>
	<p>
		The count matches complete written forms after normalizing Unicode spelling and letter case. An
		equals sign can separate a person marker from a counted form; adjacent letters prevent a match.
		Duplicate documents with identical Ainu text and publisher URL count once. Unaccented <i
			lang="ain-Latn">kore</i
		>
		supplies no accent measurement, and the absence of written <i lang="ain-Latn">kóre</i> is not evidence
		that a pronunciation never occurs. The counts describe this collection's spelling practice.
	</p>
</S>

<S t="Possessed noun forms" id="affiliative-note">
	<p>
		Possessed forms involve grammatical morphology with both regular and lexically selected
		patterns. Nakagawa gives <i lang="ain-Latn">tek</i> “hand” with
		<i lang="ain-Latn">teke(he)</i>, and <i lang="ain-Latn">sik</i> “eye” with
		<i lang="ain-Latn">siki(hi)</i>. Parentheses mark an optional longer ending
		<Ref k="nakagawa2024" p="226–227" />.
	</p>
	<p>
		The final vowel of the base restricts some choices, but does not uniquely determine every
		possessive suffix. The suffix belongs to a morphological formation, rather than being a general
		vowel inserted whenever the noun combines with another word
		<Ref k="nakagawa2024" p="227" />. The full patterns are described in
		<Xr ch="concept-form-affiliative-form" /> and <Xr ch="affiliative-suffix-morphophonology" />.
	</p>
</S>

<S t="Comparing the processes" id="summary">
	<table>
		<thead
			><tr><th>Difference between forms</th><th>Relevant condition</th><th>Example</th></tr></thead
		>
		<tbody>
			<tr
				><td>Vowel-like release</td><td>Phonetic realization of final /r/</td><td lang="ain-Latn"
					>kor</td
				></tr
			>
			<tr
				><td>Consonant sandhi</td><td>Following sound and boundary</td><td lang="ain-Latn"
					>ku=kor tar → kukot tar</td
				></tr
			>
			<tr
				><td>/t+i/ alternation</td><td>Combination before /i/</td><td lang="ain-Latn"
					>mat-ikor → macikor</td
				></tr
			>
			<tr
				><td>Prefix contraction</td><td>Prefix, following vowel, and dialect</td><td lang="ain-Latn"
					>ku=omare → k=omare</td
				></tr
			>
			<tr
				><td>Possessive morphology</td><td>Noun class and lexical suffix choice</td><td
					lang="ain-Latn">tek → teke(he)</td
				></tr
			>
		</tbody>
	</table>
	<p>
		Older records also differ in spelling; see <Xr
			ch="historical-orthographies-and-the-batchelor-tradition"
		/>.
	</p>
</S>
