<!-- src/lib/grammar/chapters/phrasal-and-utterance-intonation.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="Rising-nucleus accent in utterance context" id="rising-nucleus">
	<p>
		Hokkaido Ainu has a pitch-accent system in which the phonologically distinctive unit is the
		syllable at which F0 <em>rises</em> — a rising-nucleus (上り核アクセント) system — in
		contrast with Standard Japanese, whose falling-nucleus system marks the syllable at which F0
		subsequently drops <Ref k="nakagawa2024" p="48–49" />; <Ref k="shiraishi2022" p="§5" />.
		The word-level placement rules for the accent nucleus are stated in
		<Xr ch="pitch-accent-placement-rule" />; the theoretical question of whether the system is
		best analysed as culminative accent or as an autosegmental tonal melody is addressed in
		<Xr ch="mora-syllable-accent-vs-tone-analysis" />.
	</p>
	<p>
		The rising-nucleus property means that F0 may remain high or drop after the accented syllable
		without changing the lexical identity of a word — only the position of the rise is
		phonologically distinctive. For the Saru minimal pair <i lang="ain-Latn">nísap</i> 'suddenly'
		vs <i lang="ain-Latn">nisáp</i> 'shin', <i lang="ain-Latn">nísap</i> may be realized with
		sustained high pitch on both syllables (<i lang="ain-Latn">nísáp</i>) without shifting to
		<i lang="ain-Latn">nisáp</i>; only a realization in which the lowest F0 point falls at σ1
		would misidentify the word <Ref k="nakagawa2024" p="48–49" />. Community discussion
		illustrates the same point with the pronoun <i lang="ain-Latn">ku=ani</i> 'I', whose accent
		falls on <i lang="ain-Latn">á</i> (σ2, by regular rule): ku↗ani and ku↗a↘ni are both
		acceptable; ku↘ani, with the F0 minimum at the accented syllable, is not
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-09).
	</p>

	<table>
		<caption>
			Accent minimal pairs (Saru): position of the F0 rise (↗ marks the nucleus)
		</caption>
		<thead>
			<tr>
				<th>Form A</th>
				<th>accent</th>
				<th>meaning</th>
				<th>Form B</th>
				<th>accent</th>
				<th>meaning</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">nísap</i></td>
				<td>↗ σ1 (exception)</td>
				<td>'suddenly'</td>
				<td><i lang="ain-Latn">nisáp</i></td>
				<td>↗ σ2 (regular CV#)</td>
				<td>'shin'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">nína</i></td>
				<td>↗ σ1 (exception)</td>
				<td>'gather firewood'</td>
				<td><i lang="ain-Latn">niná</i></td>
				<td>↗ σ2 (regular)</td>
				<td>'crush'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">útur</i></td>
				<td>↗ σ1 (exception)</td>
				<td>'western side of house'</td>
				<td><i lang="ain-Latn">utúr</i></td>
				<td>↗ σ2 (regular)</td>
				<td>'between'</td>
			</tr>
		</tbody>
	</table>

	<p>
		(<Ref k="nakagawa2024" p="51" />; <Ref k="shiraishi2022" p="§5.1" />.) Words in the
		exception class — which includes <i lang="ain-Latn">nísap</i>, <i lang="ain-Latn">nína</i>,
		<i lang="ain-Latn">húre</i> 'red', <i lang="ain-Latn">sísam</i> 'Japanese person', and a
		score of others — have σ1 open (CV) yet accent σ1 instead of the regular σ2. Their Sakhalin
		cognates show a corresponding long vowel at σ1: ‹SA› <i lang="ain-Latn">niisah</i> vs
		<i lang="ain-Latn">nisah</i>, <i lang="ain-Latn">huure</i>, <i lang="ain-Latn">siisam</i>
		(Nakagawa 2024: 27, 51). The diachronic relationship between Hokkaido accent and Sakhalin
		vowel length is discussed in <Xr ch="hokkaido-phonological-microvariation" />;
		additional minimal pairs are catalogued in <Xr ch="lexical-contrastive-accent-minimal-pairs" />.
	</p>
	<p>
		The accented syllable is slightly lengthened in polysyllabic words, more markedly in
		north-eastern dialects (Asai 1972/1976, reported via <Ref k="shiraishi2022" p="§5" />). This
		allophonic lengthening explains older Japanese-script representations such as ユーカラ for
		<i lang="ain-Latn">yukar</i>, where the long vowel corresponds to the accent on σ1
		<Ref k="nakagawa2024" p="26" />.
	</p>
</S>

<S t="The accent-dialect split" id="dialect-split">
	<p>
		Lexically contrastive pitch is found only in the accent dialects. Nakagawa and Fukazawa
		<Ref k="nakagawafukazawa2022" p="§3.1" /> distinguish three prosodic classes: the
		<em>standard-accent</em> dialects (Saru, Chitose, Horobetsu, Asahikawa, Nayoro, Obihiro,
		Sōya), the <em>irregular-accent</em> dialects (Yakumo, Oshamambe, where the accent shifts one
		syllable rightward when both σ1 and σ2 are open), and the <em>unaccented</em>
		(無アクセント) varieties (Shizunai, Urakawa, Samani, Bihoro, Kushiro, Shiranuka), in which
		pitch is not lexically distinctive <Ref k="nakagawa2024" p="49–50" />. The dialect
		classification is treated in <Xr ch="hokkaido-dialect-classification-and-dialectometry" />.
		The utterance-intonation descriptions below rest on data from Saru and, to a lesser extent,
		Chitose; their applicability to the unaccented varieties is undocumented.
	</p>
</S>

<S t="Declarative and continuation contours" id="declarative">
	<p>
		In Saru declarative utterances, F0 follows a natural declining course from the beginning to the
		end of the utterance, without a sentence-final intonation gesture — neither a terminal rise
		nor a marked fall (Tamura 1996: 4, reported via <Ref k="shiraishi2022" p="§7" />). Acoustic
		measurements on Saru speech confirm this pattern (Tamura and Motohashi 2002b; Makarova 2002,
		both reported via <Ref k="shiraishi2022" p="§7" />). Within this declination, the successive
		rising-nucleus accents of individual words produce a series of local F0 elevations against a
		gradually lowering baseline.
	</p>
	<p>
		Simeon (1968, reported via <Ref k="shiraishi2022" p="§7" />) characterizes the prosodic
		status of non-final clause boundaries in Ainu: a level or falling contour signals that the
		utterance is not yet complete and more follows, while a rising terminal marks the utterance as
		prosodically finished. Under this description the default Saru declarative — ending with
		gradual declination but no added terminal gesture — has the profile of a continuation contour,
		and a clause that ends with a terminal rise (as in a polar interrogative or an exclamatory
		utterance) is the marked, utterance-final form.
	</p>
</S>

<S t="Interrogative contours and sentence-final particles" id="interrogative">
	<p>
		Polar interrogatives in Saru carry a rising final intonation, with the F0 and intensity
		peak localized on the sentence-final particle. An acoustic study of 35 Saru interrogative
		utterances found that the peak falls on the last word, normally one of the interrogative
		particles <i lang="ain-Latn">hawe</i>, <i lang="ain-Latn">ya</i>,
		<i lang="ain-Latn">a</i>, or <i lang="ain-Latn">he</i> (Makarova 2002, reported via
		<Ref k="shiraishi2022" p="§7" />). Tamura's Saru description extends the rising pattern to
		any utterance in which the speaker expects a reaction — a question, a report from the
		listener, a request, or an invitation (Tamura 1996: 4, reported via
		<Ref k="shiraishi2022" p="§7" />). The sentence-final particles themselves are described in
		<Xr ch="sentence-final-particles-illocutionary-force" />; interrogative strategies and the
		question particles are treated in
		<Xr ch="interrogative-strategies-question-particles" />.
	</p>
	<p>
		One exception: the particle <i lang="ain-Latn">ya</i> appears to select a falling rather than
		a rising contour in some Saru data. A form transcribed as
		<i lang="ain-Latn">amkir_a</i> (from <i lang="ain-Latn">amkir ya</i> 'have you been?') was
		realized with falling pitch at the utterance end (Tamura and Motohashi 2002b, reported via
		<Ref k="shiraishi2022" p="§7" />). A contact explanation is plausible: Hokkaido Japanese
		uses falling intonation even in yes/no questions, and this influence has been suggested for
		some falling interrogative realizations in Ainu
		<Ref k="shiraishi2022" p="§7" /> ‹contested›. Whether the falling realization of
		<i lang="ain-Latn">ya</i>-questions is a property of the particle, a speaker variable, or a
		contact phenomenon is not settled on current evidence.
	</p>
	<p>
		A further contour type is documented when the sentence ends in a nominalized or conjunctive
		form without a final predicate verb. In such cases the final F0 is level or falling, and the
		utterance communicates incompleteness or a request for confirmation rather than a settled
		assertion (<Ref k="shiraishi2022" p="§7" />, drawing on Tokachi data). This aligns with the
		Simeon generalization noted above: absence of a terminal rise leaves the utterance
		prosodically open.
	</p>

	<table>
		<caption>
			Utterance type and final F0 contour (Saru; based on <Ref k="shiraishi2022" p="§7" />
			and Tamura 1996: 4)
		</caption>
		<thead>
			<tr>
				<th>utterance type</th>
				<th>terminal F0</th>
				<th>notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Declarative</td>
				<td>↘ gradual declination; no added terminal gesture</td>
				<td>default; speaker asserts without expecting a reaction</td>
			</tr>
			<tr>
				<td>
					Interrogative (particles <i lang="ain-Latn">he</i>,
					<i lang="ain-Latn">a</i>, <i lang="ain-Latn">hawe</i>)
				</td>
				<td>↗ rise on the final particle</td>
				<td>F0/intensity peak on the last word</td>
			</tr>
			<tr>
				<td>Particle <i lang="ain-Latn">ya</i></td>
				<td>↘ falling at utterance end</td>
				<td>exception; possibly Japanese-contact ‹contested›</td>
			</tr>
			<tr>
				<td>Exclamatory / wish</td>
				<td>↑ whole-utterance F0 elevation; ↗↘ terminal</td>
				<td>elevated register throughout; lengthened final rise-fall</td>
			</tr>
			<tr>
				<td>Nominalized / conjunctive sentence-final</td>
				<td>level or ↘</td>
				<td>communicates incompleteness or request for confirmation</td>
			</tr>
		</tbody>
	</table>
</S>

<S t="Exclamatory and wish prosody" id="exclamatory">
	<p>
		Exclamatory and optative utterances in Saru are produced at a pitch level elevated above the
		normal declarative baseline throughout, with the final syllable or syllables carrying a
		lengthened rise-fall (Tamura 1996: 4, reported via <Ref k="shiraishi2022" p="§7" />). The
		elevation is applied to the whole utterance, not only to the final position, so it interacts
		with the lexical accents of each word without displacing them. The following Chitose example,
		drawn from Nakagawa's grammar, illustrates the construction:
	</p>

	<Ex
		m="kera=an hum-i"
		g="delicious=4.S sound-POSS"
		tr="How delicious!"
		cite="nakagawa2024:395"
		dial="CHI"
		note="Exclamatory utterance. The whole pitch level is elevated above the declarative baseline, and the final syllable carries a lengthened rise-fall. The formal noun hum-i, possessed form of hum 'sound, feeling', functions as an exclamative complement to the finite clause kera=an 'it is delicious'. Tamura 1996: 4 (reported via Shiraishi 2022: §7) characterizes this pattern; the form keraan shows vowel sequence from kera + =an without glide insertion (Nakagawa 2024: 43)."
	/>

	<p>
		The same elevated-register pattern extends to optative and invitation utterances, which share
		the whole-utterance F0 raise without necessarily carrying the lengthened final gesture.
	</p>
</S>

<S t="Phrasal grouping and prosodic domains" id="phrasal-domains">
	<p>
		No published instrumental study addresses intermediate prosodic phrasing in Hokkaido Ainu —
		the question of whether there are prosodic phrase boundaries between the word and the full
		utterance at which F0 resets, phrase-final lengthening occurs, or pauses are inserted
		systematically. The available descriptions treat the utterance as the domain of F0 declination
		and the prosodic word as the domain of accent.
	</p>
	<p>
		Two word-level prosodic facts bear on this question. First, the person-affix paradigm
		distinguishes clitics by their degree of prosodic integration with the following stem.
		Affixes <i lang="ain-Latn">ku=</i>, <i lang="ain-Latn">e=</i>, and
		<i lang="ain-Latn">ci=</i> form a single prosodic word with their host and shift the stem's
		accent; <i lang="ain-Latn">a=</i> and <i lang="ain-Latn">eci=</i> do not shift accent and
		are prosodically less integrated (Kindaichi 1931; Tamura 1970, both reported via
		<Ref k="shiraishi2022" p="§5.1" />; <Ref k="nakagawa2024" p="52–53" />). This clitic-class
		distinction is treated in <Xr ch="person-marking-architecture" /> and
		<Xr ch="accent-in-compounds-and-affixation" />; it constitutes a gradient of prosodic
		bonding that may correlate with phrase-boundary placement in connected speech.
	</p>
	<p>
		Second, personal suffixes such as <i lang="ain-Latn">=as</i> (exclusive 1pl) and
		<i lang="ain-Latn">=an</i> (4th person S) carry a secondary accent alongside the primary
		stem accent in open-syllable stems: <i lang="ain-Latn">iˈruska=ˌas</i> 'we (excl.) are
		angry', <i lang="ain-Latn">ipˈe=ˌan</i> (Kindaichi 1931; Tamura 1970, reported via
		<Ref k="shiraishi2022" p="§5.1" />). The secondary accent is lost when the stem ends in a
		closed syllable: <i lang="ain-Latn">ˈcis=an</i> 'we cry', <i lang="ain-Latn">ˈsap=an</i>.
		The prosodic word template and the suffix interactions are treated in
		<Xr ch="verb-word-template" />.
	</p>
</S>

<S t="Typological comparison: Hachijō intonation" id="hachijo">
	<p>
		Community discussion of Ainu prosody has noted that the intonation patterns of Hachijō-shima
		Japanese feel "very close to Ainu" (<Ref k="aynucorporadiscord" /> nukopoli, 2024-12-08).
		Hachijō Japanese is known from the Japanese dialectological literature to have a rising-nucleus
		pitch-accent system, making it structurally parallel to the Hokkaido Ainu standard-accent
		dialects and distinct from the falling-nucleus system of Standard Japanese. The perceived
		intonational resemblance is therefore typologically plausible — both languages share the
		consequence that the declarative default involves gradual F0 decline without a marked terminal
		gesture, and that interrogative intonation involves a terminal rise — but no published
		comparative acoustic study of Hachijō and Ainu intonation has been consulted for this grammar.
		The observation is reported here at community grade: asserted and typologically grounded, but
		awaiting instrumental verification ‹corpus-suggested›.
	</p>
</S>
