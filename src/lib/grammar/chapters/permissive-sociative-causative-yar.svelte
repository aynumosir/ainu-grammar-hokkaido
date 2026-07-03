<!-- src/lib/grammar/chapters/permissive-sociative-causative-yar.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Place in the causative system" id="overview">
	<p>
		Hokkaido Ainu derives causative verbs by two principal suffix types that differ in their
		effect on the argument frame. The productive causative
		<i lang="ain-Latn">-re/-te/-e</i>, treated in <Xr ch="causative-morphological-re-e-te" />,
		raises verb arity by one: a new causer takes the subject position and the original subject
		is demoted to object. The suffix <i lang="ain-Latn">-yar</i>, and its allomorph
		<i lang="ain-Latn">-ar</i>, introduces a causer as the new subject but suppresses the
		causee entirely — the party that carries out the caused action is neither expressed as a
		separate argument nor cross-referenced on the verb, so the net argument count of the derived
		form equals that of its base <Ref k="nakagawa2024" p="201–202" />;
		<Ref k="bugaevakobayashi2022" p="§4.3.1" />; <Ref k="kobayashi2015" p="12" />.
		Nakagawa's label for this type is <span lang="ja">不定使役</span> 'indefinite causative'
		<Ref k="nakagawa2024" p="201" />; the Handbook chapter on verbal valency places it among
		the valency-neutral alternations alongside the
		<Xr ch="reciprocal-u">sociative <i lang="ain-Latn">uko-/uwe-</i></Xr>
		<Ref k="bugaevakobayashi2022" p="§4.3.1" />. The broader
		<Xr ch="valency-voice-overview">arity calculus</Xr> that frames all valency operations
		is set out in the overview chapter; causee marking and double causatives are in
		<Xr ch="causee-marking-ditransitive-double-causative" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>type</th>
				<th>suffix</th>
				<th>arity</th>
				<th>causee</th>
				<th>label</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>productive causative</td>
				<td><i lang="ain-Latn">-re / -te / -e</i></td>
				<td>+1</td>
				<td>expressed as direct object; cross-referenced by a person index</td>
				<td><span lang="ja">使役</span></td>
			</tr>
			<tr>
				<td>indefinite causative</td>
				<td><i lang="ain-Latn">-yar / -ar</i></td>
				<td>0</td>
				<td>unexpressed; cannot be cross-referenced</td>
				<td><span lang="ja">不定使役</span></td>
			</tr>
		</tbody>
	</table>

	<p>
		A causative suffix that leaves argument count unchanged is typologically unusual
		<Ref k="nakagawa2024" p="201–202" />; <Ref k="bugaevakobayashi2022" p="§4.3.1" />.
		Within the arity system the outcome is coherent: <i lang="ain-Latn">-yar</i> encodes
		a new causal event while the causee is structurally absorbed, in the same way that
		noun incorporation satisfies an argument slot from inside the verb word without
		expanding external valency <Ref k="nakagawa2024" p="201" />.
	</p>
</S>

<S t="Form and allomorphy" id="form">
	<p>
		The suffix surfaces as <i lang="ain-Latn">-yar</i> after a vowel or a glide and as
		<i lang="ain-Latn">-ar</i> after other consonants
		<Ref k="bugaevakobayashi2022" p="§4.3.1" />; <Ref k="nakagawa2024" p="202" />.
		The conditioning environment mirrors that of the productive causative, where
		vowel- and glide-final stems take <i lang="ain-Latn">-re</i>, most consonant-final
		stems take <i lang="ain-Latn">-te</i>, and <i lang="ain-Latn">r</i>-final stems take
		<i lang="ain-Latn">-e</i> <Ref k="nakagawa2024" p="200–201" />. The canonical
		<i lang="ain-Latn">-yar</i> form is <A w="nu" gl="hear (something)" /> →
		<i lang="ain-Latn">nu-yar</i> 'make someone unspecified hear something, tell'. The
		allomorph <i lang="ain-Latn">-ar</i> would surface on consonant-final bases such as
		a hypothetical <i lang="ain-Latn">sinot-ar</i> 'have someone play'; the allomorphy is
		stated in the Handbook but no consonant-final form is attested in the read corpus
		sources <Ref k="bugaevakobayashi2022" p="§4.3.1" /> ‹corpus-suggested›.
	</p>
	<p>
		Nakagawa's slot table places <i lang="ain-Latn">-yar/-ar</i> in the causative suffix
		position, after the stem and any forming material and before the suffixal person index
		<Ref k="nakagawa2024" p="200, 210–211" />. Any suffixal person index on the derived
		form marks the new causer-subject, not the suppressed causee.
	</p>
</S>

<S t="The unexpressed causee" id="causee">
	<p>
		The causee — the party who carries out the caused action — is structurally absent from
		the derived verb: no person index cross-references it and no bare NP expresses it as a
		core argument. Satō states that the suffix cannot license a separate causee NP;
		Kobayashi's valency study describes the type as <span lang="ja">不定使役</span> with the
		causee role suppressed and valency unchanged
		<Ref k="sato2008" p="234" />; <Ref k="kobayashi2015" p="12" />. This separates
		<i lang="ain-Latn">-yar</i> from the productive causative, which expresses the causee
		as a direct object, cross-references it with a person index, and produces a double-object
		frame when the base is already transitive <Ref k="nakagawa2024" p="201–202" />.
	</p>
	<p>
		When a speaker wishes to indicate the implied original agent despite its exclusion from
		the verb's argument frame, the postpositions <i lang="ain-Latn">or peka</i>,
		<i lang="ain-Latn">or un</i>, or <i lang="ain-Latn">eun</i> supply a peripheral adjunct
		slot. Nakagawa's Saru examples (exx. 961–963) include
		<i lang="ain-Latn">nispa or peka a=korar</i> 'marry off to a rich man', where
		<i lang="ain-Latn">or peka</i> specifies the intended recipient without making that
		recipient a core verbal argument <Ref k="nakagawa2024" p="429" />. The same option
		appears in oral narrative, where a deity named in an <i lang="ain-Latn">eun</i> phrase
		receives the message conveyed by <i lang="ain-Latn">nu-yar</i> while the verb itself
		indexes no causee <Ref k="biratori1969" />.
	</p>
</S>

<S t="Readings: indefinite, permissive, and sociative" id="semantics">
	<p>
		Three semantic characterisations appear in or near the literature, and the read sources
		converge only on the structural valency facts while leaving the label question open
		<Ref k="nakagawa2024" p="201–202" />; <Ref k="bugaevakobayashi2022" p="§4.3.1" />
		‹contested›.
	</p>
	<p>
		The <em>indefinite-causation</em> reading — the causer causes an event but the party
		who performs it is unspecified (<span lang="ja">誰にでも</span> 'to whoever') — is the
		characterisation that Nakagawa and the Handbook share
		<Ref k="nakagawa2024" p="201–202" />; <Ref k="bugaevakobayashi2022" p="§4.3.1" />.
		It fits the most frequent attested form: <i lang="ain-Latn">nu-yar</i> functions as the
		regular verb for public announcement or reporting, a speech act whose point is precisely
		that the recipient class is left open.
	</p>

	<Ex
		m="a=en=kopisi p anakne opitta ku=ye wa ku=nu-yar"
		g="4.A=1SG.O=ask NMLZ TOP all 1SG.A=say CONJ 1SG.A=hear-CAUS"
		tr="Everything I was asked I told in full — I made it all known."
		cite="nakagawa2024:432"
		dial="SAR"
		place="Nakagawa ex. 959, after Tamura 1984: 12"
		note="ku=nu-yar retains the two-place transitivity of nu 'hear something'; the content made known is the sole object and no causee argument is present."
	/>

	<p>
		The <em>permissive</em> reading surfaces in contexts of polite or deferential causation,
		where the causer enables an action that the unnamed causee has reason or inclination to
		perform. Bugaeva and Kobayashi note that a host may say
		<i lang="ain-Latn">ipe-yar=an ro</i> 'let's have the guest eat' rather than naming the
		guest as a direct causee, producing a softer formulation
		<Ref k="bugaevakobayashi2022" p="§4.3.1" />; <Ref k="tamura2000" p="214" />.
		Bugaeva's Saru study shows that the productive <i lang="ain-Latn">-re/-te/-e</i> also
		covers permissive causation alongside coercive causation, and that ingestive verbs like
		'eat' and 'drink' take both readings with that suffix
		<Ref k="bugaeva2014" p="139, 141–142" />. The structural property of
		<i lang="ain-Latn">-yar</i> — suppression of the causee — is what distinguishes it from
		<i lang="ain-Latn">-re/-te/-e</i> in permissive contexts; the permissive vs coercive
		axis alone does not predict the choice between the two suffix types.
	</p>

	<Ex
		m="ipe-yar=an ro"
		g="eat-CAUS=4.S HORT"
		tr="Let's have (them) eat."
		cite="bugaevakobayashi2022:§4.3.1"
		dial="SAR"
		note="After Tamura 2000[1988]: 214. The intransitive S suffix =an on ipe-yar confirms that the derived verb remains intransitive; the eating party is implied by context but not indexed on the verb."
	/>

	<p>
		The label <em>sociative causative</em> — marking the causer's participation together
		with or on behalf of others — has been mentioned in connection with
		<i lang="ain-Latn">-yar</i> alongside the indefinite and permissive labels. The read
		sources do not adjudicate between the three characterisations. Bugaeva's 2014 causative
		study, the most comprehensive treatment of Ainu causative morphology available, explicitly
		excludes <i lang="ain-Latn">-yar</i> for reasons of space
		<Ref k="bugaeva2014" p="127" />.
	</p>
</S>

<S t="Contrast with the productive causative" id="contrast">
	<table>
		<thead>
			<tr>
				<th>parameter</th>
				<th><i lang="ain-Latn">-re / -te / -e</i></th>
				<th><i lang="ain-Latn">-yar / -ar</i></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>arity</td>
				<td>+1 (causer added; old subject → object)</td>
				<td>0 (causer added; old subject suppressed)</td>
			</tr>
			<tr>
				<td>causee expression</td>
				<td>direct object; person-indexed</td>
				<td>unexpressed; no person indexing</td>
			</tr>
			<tr>
				<td>specifying the implied agent</td>
				<td>—</td>
				<td><i lang="ain-Latn">or peka / or un / eun</i> adjunct</td>
			</tr>
			<tr>
				<td>causation type</td>
				<td>direct and indirect</td>
				<td>indirect only</td>
			</tr>
			<tr>
				<td>productivity</td>
				<td>high (190 forms in Bugaeva's Saru sample)</td>
				<td>low; few attested forms</td>
			</tr>
		</tbody>
	</table>

	<p>
		The data for this table come from <Ref k="nakagawa2024" p="200–202" />,
		<Ref k="bugaeva2014" p="127, 130, 143" />, and
		<Ref k="bugaevakobayashi2022" p="§4.3.1" />.
	</p>

	<p>
		The pair <i lang="ain-Latn">nu-re</i> / <i lang="ain-Latn">nu-yar</i> makes the
		contrast explicit. The productive causative <i lang="ain-Latn">nu-re</i> 'make someone
		hear something' is a three-place verb: the causer is subject, the causee occupies one
		object slot and receives a person index, and the content heard fills the second object
		slot. The indefinite causative <i lang="ain-Latn">nu-yar</i> keeps the two-place frame
		of the base <A w="nu" gl="hear (something)" />: the causer is subject, the content is
		the sole object, and the recipient is absent from the verb's morphosyntax
		<Ref k="nakagawa2024" p="201–202" />.
	</p>
</S>

<S t="Corpus profile" id="corpus">
	<p>
		Frequency data from the Hokkaido corpus show the suffix active in only a small set of
		forms. The token <i lang="ain-Latn">ipeyar</i> returns approximately 2 hits (rank
		14,619), making it marginal; <i lang="ain-Latn">nuyar</i> is more frequent but the
		absolute total remains small ‹corpus-confirmed›. The distribution reflects lexicalized
		or semi-lexicalized combinations rather than productive attachment across the verb lexicon
		<Ref k="bugaevakobayashi2022" p="§4.3.1" />.
	</p>
	<p>
		<i lang="ain-Latn">nu-yar</i>'s higher frequency follows from its speech-act function.
		The indefinite-causee structure is suited to public announcement: a causer who makes
		something known without restricting who will receive the information has systematic
		recourse to this form wherever the open recipient set is the point. The permissive-polite
		use — <i lang="ain-Latn">ipe-yar=an ro</i> 'let's have the guest eat' — is attested
		but at low frequency ‹corpus-confirmed›.
	</p>
	<p>
		Ijäs's learner grammar does not treat <i lang="ain-Latn">-yar</i>; Lesson 9 on special
		verb forms discusses the causative, reciprocal, and antipassive but covers only
		<i lang="ain-Latn">-re</i> among the causative types <Ref k="ijas2023" />.
	</p>
</S>

<S t="Open questions" id="gaps">
	<p>
		Several questions are unanswered in the read sources. Bugaeva's 387-verb Saru causative
		study — the most comprehensive available — excludes <i lang="ain-Latn">-yar</i> for
		reasons of space <Ref k="bugaeva2014" p="127" />. No source in the present corpus
		offers a distributional account of which verb classes the suffix selects, what semantic
		or pragmatic factors predict the choice between <i lang="ain-Latn">-yar</i> and
		<i lang="ain-Latn">-re/-te/-e</i> on the same base, or how the suffix patterns
		dialectally outside Saru. The structural facts — arity 0, causee unexpressed,
		<i lang="ain-Latn">or peka/or un/eun</i> adjunct option for the implied agent — are
		consistent across the four sources that address the suffix
		<Ref k="nakagawa2024" p="201–202, 429" />; <Ref k="bugaevakobayashi2022" p="§4.3.1" />;
		<Ref k="kobayashi2015" p="12" />; <Ref k="sato2008" p="234" />.
		The semantic label — whether indefinite, permissive, or sociative causation best
		characterises the suffix — remains open ‹contested›.
	</p>
	<p>
		One diachronic proposal treats <i lang="ain-Latn">-yar</i> as descending from a
		pronominal-causative construction <i lang="ain-Latn">*i=a-de</i>, with regular
		intervocalic <i lang="ain-Latn">*d &gt; r</i>; the zero-valency outcome would follow
		from the prior grammaticalization of the indefinite causee pronoun into the verb complex,
		parallel to how the meaning of <i lang="ain-Latn">i=…-re</i> semantically overlaps with
		that of <i lang="ain-Latn">-yar</i>
		(<Ref k="aynucorporadiscord" />; antitwilight, aynu-corpora Discord, 26 May 2026)
		‹speculative›. No peer-reviewed source develops this account.
	</p>
</S>
