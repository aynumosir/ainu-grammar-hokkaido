<!-- src/lib/grammar/chapters/accent-in-compounds-and-affixation.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The prosodic word and accent reapplication" id="prosodic-word">
	<p>
		In all standard-accent dialects of Hokkaido Ainu, high pitch is assigned to σ1 when σ1 is
		closed (has a coda), and to σ2 otherwise — with a memorized set of lexical exceptions (see
		<Xr ch="pitch-accent-placement-rule" />). Accent placement depends on the
		<em>prosodic word</em> and on the type of morphological combination. Nakagawa applies
		the placement rules to the whole derivative when derivational prefixes are added;
		for compounds, he describes retention of the first element's accent as a tendency
		with exceptions <Ref k="nakagawa2024" p="53–54" />. Shiraishi reports that later
		accents in closely combined forms may become secondary and often disappear
		<Ref k="shiraishi2022" p="§5.2" />. Person markers differ in whether they shift the
		stem accent. Bugaeva uses this difference together with their syntactic behavior to
		distinguish prefixes from clitics <Ref k="bugaeva2012" p="472–473" />. The
		Yakumo irregular system, where 原則2 shifts one position further right, produces different
		surface outputs for the same derivations but applies the same prosodic-word logic; its
		characterization is given in <Xr ch="pitch-accent-placement-rule" />.
	</p>
</S>

<S t="Compound words: first-element priority" id="compounds">
	<p>
		Nakagawa describes compound accent as incompletely understood and states two broad
		tendencies: the first element's accent remains, and a monosyllabic first element
		bears the accent. He explicitly notes that these patterns do not apply to every
		compound <Ref k="nakagawa2024" p="54" />. The following forms illustrate
		first-element priority.
	</p>

	<table>
		<caption>Examples of first-element priority in compound accent</caption>
		<thead>
			<tr>
				<th>front element</th>
				<th>accent</th>
				<th>compound</th>
				<th>compound accent</th>
				<th>gloss</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">kamuy</i></td>
				<td><i lang="ain-Latn">kamúy</i></td>
				<td><i lang="ain-Latn">kamuy+nomi</i></td>
				<td><i lang="ain-Latn">kamúynomi</i></td>
				<td>'pray to a deity'</td>
				<td><Ref k="nakagawa2024" p="54" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">horka</i></td>
				<td><i lang="ain-Latn">hórka</i></td>
				<td><i lang="ain-Latn">horka+reye+p</i></td>
				<td><i lang="ain-Latn">hórkareyep</i></td>
				<td>'crayfish'</td>
				<td><Ref k="nakagawa2024" p="54" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">cise</i></td>
				<td><i lang="ain-Latn">cisé</i></td>
				<td><i lang="ain-Latn">cise+kor+kur</i></td>
				<td><i lang="ain-Latn">cisékorkur</i></td>
				<td>'householder'</td>
				<td><Ref k="aynucorporadiscord" /> (nukopoli 2024-12-09)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kotan</i></td>
				<td><i lang="ain-Latn">kotán</i></td>
				<td><i lang="ain-Latn">kotan+kor+kur</i></td>
				<td><i lang="ain-Latn">kotánkorkur</i></td>
				<td>'village chief'</td>
				<td><Ref k="aynucorporadiscord" /> (nukopoli 2024-12-09)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ni</i> (monosyllabic)</td>
				<td><i lang="ain-Latn">ní</i></td>
				<td><i lang="ain-Latn">ni+tek</i></td>
				<td><i lang="ain-Latn">nítek</i></td>
				<td>'branch'</td>
				<td><Ref k="nakagawa2024" p="54" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The accent positions follow from the placement rules applied to the front element in
		isolation. <i lang="ain-Latn">kamúy</i> has open σ1 (<i lang="ain-Latn">ka</i>) → 原則2
		→ accent on σ2 <i lang="ain-Latn">muy</i>; that accent is the sole high syllable of
		<i lang="ain-Latn">kamúynomi</i>. <i lang="ain-Latn">hórka</i> has closed σ1
		(<i lang="ain-Latn">hor</i>) → 原則1 → accent on <i lang="ain-Latn">hór</i>; that accent
		survives in <i lang="ain-Latn">hórkareyep</i>. The monosyllabic
		<i lang="ain-Latn">ni</i> carries the single available accent, giving
		<i lang="ain-Latn">nítek</i>.
	</p>

	<p>
		For <i lang="ain-Latn">cisékorkur</i> and <i lang="ain-Latn">kotánkorkur</i>, a tentative community
		observation reports second-syllable accent with no later peak in either form
		<Ref k="aynucorporadiscord" /> (nukopoli 2024-12-09) ‹corpus-suggested›. The assignments
		follow from the principle: <i lang="ain-Latn">cise</i> 'house' has open σ1
		(<i lang="ain-Latn">ci</i>) → 原則2 → accent on <i lang="ain-Latn">sé</i>, which becomes
		the sole peak of <i lang="ain-Latn">cisékorkur</i> 'householder';
		<i lang="ain-Latn">kotan</i> 'village' has open σ1 (<i lang="ain-Latn">ko</i>) → 原則2 →
		accent on <i lang="ain-Latn">tán</i>, retained in <i lang="ain-Latn">kotánkorkur</i>
		'village chief'.
	</p>

	<p>
		Shiraishi describes second-syllable accent in some compounds whose first element is
		CVC and whose second element begins with a vowel. His examples include
		<i lang="ain-Latn">hasínaw</i> 'a type of ritual wand',
		<i lang="ain-Latn">cepétu</i> 'fish snout', and
		<i lang="ain-Latn">nayétok</i> 'source of a stream'. He reports Kindaichi and
		Chiri's interpretation that such forms have become lexicalized and are felt to be
		non-complex <Ref k="shiraishi2022" p="§5.2" />. The analysis of syllable weight
		is treated in <Xr ch="mora-syllable-accent-vs-tone-analysis" />, and accent contrasts
		in <Xr ch="lexical-contrastive-accent-minimal-pairs" />.
	</p>
</S>

<S t="Reported accent in somo and somósomo" id="somo">
	<p>
		The negative adverb <A w="somo" gl="not" /> occurs before a predicate or in the frame
		V (<i lang="ain-Latn">ka</i>) <i lang="ain-Latn">somo ki</i>. Nakagawa describes
		both constructions and notes that <i lang="ain-Latn">ka</i> is optional in the latter
		<Ref k="nakagawa2024" p="407" />. The construction is treated in
		<Xr ch="negation-somo-standard-clausal" />.
	</p>
	<p>
		A community listening note reports second-syllable accent on
		<i lang="ain-Latn">somó</i> in the string <i lang="ain-Latn">ka somó ki</i>.
		The same note gives the doubled form as <i lang="ain-Latn">somósomo</i>, with
		second-syllable accent and no later peak, and interprets it as a single word
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-20) ‹corpus-suggested›.
		The reported accent pattern is limited to these forms; the note does not establish
		a prosodic-word count for the whole string <i lang="ain-Latn">ka somó ki</i>.
	</p>
</S>

<S t="Derivational prefixes" id="derivational">
	<S t="The reflexive prefix yay-" id="yay">
		<p>
			Nakagawa applies the accent rules to the whole derivative after prefixation. His
			example <i lang="ain-Latn">yáykoytak</i> 'talk to oneself', from
			<i lang="ain-Latn">yay-ko-itak</i>, begins with the closed syllable
			<i lang="ain-Latn">yay</i>, which receives the accent under 原則1
			<Ref k="nakagawa2024" p="53" />. This account depends on the shape of the whole
			derivative; it does not assign <i lang="ain-Latn">yay-</i> an invariant position
			at the beginning of every prefixed form.
		</p>
		<p>
			A community listening note reports accent on <i lang="ain-Latn">yáy-</i> before
			both consonants and vowels, including the variants
			<i lang="ain-Latn">yáy.esiru</i> and <i lang="ain-Latn">yáyesiru</i>. The
			contributor bases the generalization on a few examples heard and excludes
			individually lexicalized forms <Ref k="aynucorporadiscord" />
			(nukopoli, 2024-11-10) ‹corpus-suggested›. In Nakagawa's Chitose dictionary,
			<i lang="ain-Latn">yayesiru</i> means 'rub one's body against (a place or surface)'
			<Ref k="nakagawa1995" p="s.v. yayesiru, siru" />. The distribution of
			<i lang="ain-Latn">yay-</i> and <i lang="ain-Latn">si-</i> is treated in
			<Xr ch="reflexive-yay" /> and <Xr ch="reflexive-possessive-si" />.
		</p>
	</S>

	<S t="Nominal and applicative e-" id="applicatives">
		<p>
			Nakagawa illustrates derivational accent with <i lang="ain-Latn">puní</i>
			'lift (something)' → <i lang="ain-Latn">epúni</i> 'lift the head of (something)'
			<Ref k="nakagawa2024" p="53" />. Here <i lang="ain-Latn">e-</i> forms an
			initial open syllable (V), so 原則2 places the accent on the following syllable.
			This <i lang="ain-Latn">e-</i> is a nominal prefix referring to the object's head;
			it leaves the verb's valence unchanged. Nakagawa distinguishes it from the
			argument-adding applicative <i lang="ain-Latn">e-</i>
			<Ref k="nakagawa2024" p="191–193" />.
		</p>

		<table>
			<caption>Accent in derivatives with nominal or applicative e- (standard-accent dialects)</caption>
			<thead>
				<tr>
					<th>free / phrasal form</th>
					<th>accent</th>
					<th>e- form</th>
					<th>accent</th>
					<th>gloss (e- form)</th>
					<th>source</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">puni</i></td>
					<td><i lang="ain-Latn">puní</i></td>
					<td><i lang="ain-Latn">e-puni</i></td>
					<td><i lang="ain-Latn">epúni</i></td>
					<td>'lift the head of (something)'</td>
					<td><Ref k="nakagawa2024" p="53" /></td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">kotan ne</i> (phrase)</td>
					<td><i lang="ain-Latn">kotán ne</i></td>
					<td><i lang="ain-Latn">e-kotan-ne</i></td>
					<td><i lang="ain-Latn">ekótanne</i></td>
					<td>'live in someone's village'</td>
					<td><Ref k="aynucorporadiscord" /> (nukopoli 2024-11-10)</td>
				</tr>
			</tbody>
		</table>

		<p>
			The <i lang="ain-Latn">ekótanne</i> example is a community proposal based on
			treating the derivative as one accentual word: initial <i lang="ain-Latn">e</i>
			is open, and 原則2 places the accent on <i lang="ain-Latn">kó</i>
			<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-10) ‹corpus-suggested›.
			Tamura analyses <i lang="ain-Latn">ekotanne</i> as
			<i lang="ain-Latn">e-kotan-ne</i> 'at (a place)–village–be', with the meaning
			'live in someone's village' <Ref k="tamura1996" p="s.v. ekotanne" />.
			The morphology and syntax of the applicative prefixes are treated in
			<Xr ch="applicative-system-overview" />.
		</p>
	</S>

	<S t="Causative suffixes and the lexicalized koré" id="causative-kore">
		<p>
			Derivational suffixes generally do not displace accent in Hokkaido Ainu
			<Ref k="nakagawa2024" p="53" />. The causative suffixes <i lang="ain-Latn">-re</i>,
			<i lang="ain-Latn">-te</i>, <i lang="ain-Latn">-e</i> attached to monosyllabic bases
			retain the base accent: <i lang="ain-Latn">e</i> → <i lang="ain-Latn">ére</i>;
			<i lang="ain-Latn">ku</i> → <i lang="ain-Latn">kúre</i>;
			<i lang="ain-Latn">kar</i> → <i lang="ain-Latn">káre</i>.
		</p>

		<p>
			Nakagawa derives <i lang="ain-Latn">koré</i> 'give' from
			<i lang="ain-Latn">kor</i> 'have' and causative <i lang="ain-Latn">-e</i>.
			Retention of the base accent would give initial accent, but the bare form has
			second-syllable accent. He attributes this to weakened awareness of the derivation,
			allowing the ordinary rule for an open initial syllable to apply
			<Ref k="nakagawa2024" p="53" />. The surface syllables are
			<i lang="ain-Latn">ko.re</i>, both open; stem-accent retention and the resulting
			form's syllable structure are separate parts of the explanation. Shiraishi reports
			the same lexicalization account <Ref k="shiraishi2022" p="§5.2" />.
		</p>
		<p>
			A community message proposes <i lang="ain-Latn">koré</i> &lt;
			<i lang="ain-Latn">korpare</i> without developing a phonological or accentual
			account <Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-26) ‹speculative›.
			Tamura lists <i lang="ain-Latn">korpare</i> as the plural counterpart of
			<i lang="ain-Latn">kore</i> and analyses it as <i lang="ain-Latn">kor-pa-re</i>
			'have–plural–cause' <Ref k="tamura1996" p="s.v. korpare" />.
			These analyses are discussed in <Xr ch="citation-vs-combining-stem-shapes" />.
			The accent marks in the following example are present in Hamada's published
			transcription of Kawakami Matsuko's speech:
		</p>

		<Ex
			m="topenpe atay poka ka somo a=kore"
			ain="tópenpe atay póka ka somo a=koré."
			g="sweet price even also NEG 4.A=give"
			tr="She couldn't even be given the price of one sweet."
			cite="ilcaa1976"
			dial="SAR"
			place="Kawakami Matsuko, isoytak 2; Hamada Takashi transcription, publisher line 106 [aa-irc/004#105]"
			note="The daughter helped with the stage performance but received no payment. The accent marks reproduce Hamada's transcription; they establish the transcribed form, not its historical derivation."
		/>
	</S>
</S>

<S t="Person-affix accent" id="person-affix">
	<S t="The shifting class: ku=, e=, ci=, en=" id="shifting">
		<p>
			The person-marking prefixes <i lang="ain-Latn">ku=</i> (1SG agent/subject),
			<i lang="ain-Latn">e=</i> (2SG), and <i lang="ain-Latn">ci=</i> form
			a single prosodic word with their base
			<Ref k="nakagawa2024" p="52" />; <Ref k="shiraishi2022" p="§5.1" />. Before contraction or glide formation,
			each prefix contributes an open σ1 (CV for <i lang="ain-Latn">ku=</i> and
			<i lang="ain-Latn">ci=</i>, V for <i lang="ain-Latn">e=</i>); 原則2 applies
			and the accent falls on σ2 of the new word — one position earlier than the base accent
			when the base's own σ1 was open:
		</p>

		<table>
			<caption>Accent shift under person prefixes of the shifting class</caption>
			<thead>
				<tr>
					<th>base</th>
					<th>accent</th>
					<th>prefixed form</th>
					<th>accent</th>
					<th>gloss</th>
					<th>source</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">hopuni</i></td>
					<td><i lang="ain-Latn">hopúni</i></td>
					<td><i lang="ain-Latn">ku=hopuni</i></td>
					<td><i lang="ain-Latn">ku=hópuni</i></td>
					<td>'I rise'</td>
					<td><Ref k="nakagawa2024" p="52" /></td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">nanu</i></td>
					<td><i lang="ain-Latn">nanú</i></td>
					<td><i lang="ain-Latn">e=nanu</i></td>
					<td><i lang="ain-Latn">e=nánu</i></td>
					<td>'your face'</td>
					<td><Ref k="nakagawa2024" p="52" /></td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">yupihi</i></td>
					<td><i lang="ain-Latn">yupíhi</i></td>
					<td><i lang="ain-Latn">ku=yupihi</i></td>
					<td><i lang="ain-Latn">ku=yúpihi</i></td>
					<td>'my brother'</td>
					<td><Ref k="shiraishi2022" p="§5.1" /></td>
				</tr>
			</tbody>
		</table>

		<p>
			In each case the base has open σ1 and accents σ2; after the open-syllable prefix is added, σ1 of
			the new prosodic word is the prefix itself (open) and σ2 — which is the original σ1 of
			the base — receives the high pitch.
		</p>

		<p>
			In Saru and Chitose, <i lang="ain-Latn">ku=</i> and <i lang="ain-Latn">ci=</i>
			additionally lose their vowel before a base-initial vowel other than
			<i lang="ain-Latn">i</i>. The conditions for this vowel deletion are described in
			<Xr ch="personal-affix-sandhi-connected-speech-reduction" /> and
			<Xr ch="glides-w-y" />. The accent shift precedes deletion, so the shifted accent
			survives in the contracted surface form: <i lang="ain-Latn">ku=</i> +
			<i lang="ain-Latn">omáre</i> → accent shift → <i lang="ain-Latn">ku=ómare</i> → vowel
			deletion → <i lang="ain-Latn">k=ómare</i>; <i lang="ain-Latn">ci=</i> +
			<i lang="ain-Latn">etú</i> → <i lang="ain-Latn">c=étu</i>
			<Ref k="nakagawa2024" p="52" />. Nakagawa also includes Mukawa among the dialects
			with this contraction; most other dialects retain the uncontracted form.
		</p>

		<p>
			In Saru and Chitose, base-initial <i lang="ain-Latn">i</i> can become
			<i lang="ain-Latn">y</i> after <i lang="ain-Latn">ku=</i> or
			<i lang="ain-Latn">e=</i>. The glide closes the first syllable, which bears the accent:
			<i lang="ain-Latn">ku=ipe</i> is pronounced /<i lang="ain-Latn">kúype</i>/ and
			<i lang="ain-Latn">e=itak</i> /<i lang="ain-Latn">éytak</i>/.
			When the base's initial syllable is closed, this change would create three consecutive
			consonants and is blocked: <i lang="ain-Latn">ku=inkar</i> is pronounced
			/<i lang="ain-Latn">kuínkar</i>/, with accent on σ2
			<Ref k="nakagawa2024" p="52–53" />.
		</p>

		<p>
			The 1SG object prefix <i lang="ain-Latn">en=</i> contributes a closed σ1
			(VC), so 原則1 places the accent on the prefix. Bugaeva includes
			<i lang="ain-Latn">en=</i> among the prefixes whose accent follows the general
			placement rule <Ref k="bugaeva2012" p="473" />. A community note also reports
			<i lang="ain-Latn">wa én=kore</i> from an unspecified textbook by Nakagawa
			<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-05); that report does not identify
			the edition or page.
		</p>
	</S>

	<S t="The non-shifting class: a=, eci=" id="non-shifting">
		<p>
			The indefinite-person prefix <i lang="ain-Latn">a=</i> and the 2PL prefix
			<i lang="ain-Latn">eci=</i> leave the accent of the base unchanged
			<Ref k="nakagawa2024" p="53" />; <Ref k="shiraishi2022" p="§5.1" />:
		</p>

		<table>
			<caption>Accent retention under person prefixes of the non-shifting class</caption>
			<thead>
				<tr>
					<th>base</th>
					<th>accent</th>
					<th>a= / eci= form</th>
					<th>accent</th>
					<th>gloss</th>
					<th>source</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">omare</i></td>
					<td><i lang="ain-Latn">omáre</i></td>
					<td><i lang="ain-Latn">a=omare</i></td>
					<td><i lang="ain-Latn">a=omáre</i></td>
					<td>'someone puts X into Y'</td>
					<td><Ref k="nakagawa2024" p="53" /></td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">etu</i></td>
					<td><i lang="ain-Latn">etú</i></td>
					<td><i lang="ain-Latn">eci=etu</i></td>
					<td><i lang="ain-Latn">eci=etú</i></td>
					<td>'your (pl.) nose'</td>
					<td><Ref k="nakagawa2024" p="53" /></td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">onaha</i></td>
					<td><i lang="ain-Latn">onáha</i></td>
					<td><i lang="ain-Latn">a=onaha</i></td>
					<td><i lang="ain-Latn">a=onáha</i></td>
					<td>'my father (in folktales)'</td>
					<td><Ref k="shiraishi2022" p="§5.1" /></td>
				</tr>
			</tbody>
		</table>

		<p>
			Bugaeva classifies <i lang="ain-Latn">a=</i> and <i lang="ain-Latn">eci=</i> as
			clitics because they are inseparable from the stem, lack an independent accent, and
			preserve the stem's accent. Her analysis classifies the accent-shifting markers as
			prefixes <Ref k="bugaeva2012" p="472–473" />. The classification draws on both
			phonological and syntactic evidence. The notation <i lang="ain-Latn">=</i> itself
			has no phonological significance in Nakagawa's account
			<Ref k="nakagawa2024" p="52" />. For the person paradigm and its morphological
			analyses, see <Xr ch="person-marking-architecture" /> and
			<Xr ch="verb-word-template" />.
		</p>
	</S>

	<S t="Secondary accent on person suffixes" id="secondary">
		<p>
			Shiraishi describes an accent on the person suffixes <i lang="ain-Latn">=an</i>
			and <i lang="ain-Latn">=as</i> alongside the stem accent, following Tamura;
			Kindaichi calls it a secondary accent <Ref k="shiraishi2022" p="§5.1" />.
			His examples include <i lang="ain-Latn">irúska=àn</i> 'we (inclusive) are angry'
			and <i lang="ain-Latn">ipé=às</i> 'we (exclusive) eat'. Acute and grave marks here
			represent primary and secondary accent respectively. The suffix loses its secondary
			accent when the stem consists of a single closed syllable, (C)VC:
			<i lang="ain-Latn">cís=an</i> 'we (inclusive) cry' and
			<i lang="ain-Latn">sáp=an</i> 'we (inclusive) go downstream'
			<Ref k="shiraishi2022" p="§5.1" />. The person paradigm and the other functions of
			these markers are described in <Xr ch="person-marking-architecture" />.
		</p>
	</S>
</S>

<S t="Accent-neutral suffixes: -pa and the affiliative -hV" id="neutral-suffixes">
	<p>
		The plural suffix <i lang="ain-Latn">-pa</i> and the affiliative (possessed) suffix
		<i lang="ain-Latn">-hV</i> — realizing as <i lang="ain-Latn">-hi</i>,
		<i lang="ain-Latn">-he</i>, <i lang="ain-Latn">-ha</i> etc. according to the vowel-copy
		rule — are both accent-neutral: the stem's placement-rule accent survives into the
		suffixed form without adjustment <Ref k="nakagawa2024" p="53" />;
		<Ref k="tamura1996" />. They attach outside the prosodic word of the stem and do not
		produce the reapplication that the prefixal and applicative morphology triggers. The
		morphophonology of the affiliative suffix and the echo-vowel alternation are treated in
		<Xr ch="affiliative-suffix-morphophonology" />.
	</p>
</S>

<S t="Prosodic-word status as a morphological diagnostic" id="diagnostics">
	<p>
		Accent contributes to the analysis of person markers together with evidence about
		their attachment and syntactic separability. Bugaeva's distinction between
		accent-shifting prefixes and the clitics <i lang="ain-Latn">a=</i> and
		<i lang="ain-Latn">eci=</i> combines these criteria
		<Ref k="bugaeva2012" p="472–473" />. Accent reduction also provides evidence about
		prosodic grouping. Shiraishi's survey includes compounds, modifier–noun combinations,
		and verb–auxiliary combinations; later accents may remain secondary or disappear
		<Ref k="shiraishi2022" p="§5.2" />. The number of audible accent peaks therefore needs
		to be considered together with the construction.
	</p>

	<p>
		The compound formation discussed here and the sandhi processes of Part V share the same
		domain boundary. Coda assimilation (<i lang="ain-Latn">r+t→tt</i>,
		<i lang="ain-Latn">n+s→ys</i>, etc.) applies most consistently within the prosodic word;
		the accent test provides an independent means of determining which phonological domain a
		given morpheme occupies before examining the assimilation data. These interactions are
		taken up in <Xr ch="coda-r-assimilation-sonorant-sandhi" /> and
		<Xr ch="personal-affix-sandhi-connected-speech-reduction" />. The underlying prosodic unit
		and the weight analysis are addressed in
		<Xr ch="mora-syllable-accent-vs-tone-analysis" />.
	</p>
</S>
