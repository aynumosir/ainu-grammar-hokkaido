<!-- src/lib/grammar/chapters/adverbializer-no.svelte -->
<!-- Apparatus: no new bib keys or gloss atoms required. All keys and atoms verified
     against bibliography.ts and abbreviations.ts. Cross-ref slugs verified in toc-final.json. -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Form and domain" id="form">
	<p>
		The form <i lang="ain-Latn">no</i> converts a predicate into an adverbial constituent. At the
		word level it appears as a suffix on a descriptive intransitive stem —
		<i lang="ain-Latn">moyre-no</i> 'slowly', <i lang="ain-Latn">tunas-no</i> 'quickly' — and the
		output is a manner or degree adverb. At the predicate level it follows a saturated finite
		predicate phrase, especially a stative predicate or a negated action predicate, and links that
		predicate as an adverbial circumstance to the following one. The two uses share a form; the
		boundary between suffix and post-predicate particle is difficult to draw exactly. Nakagawa
		finds a particle analysis cleaner for the finite-predicate cases but observes that it cannot
		account for the frozen quantity adverb <i lang="ain-Latn">poronno</i> 'many, much', whose
		status as a single, semantically distinct word is well established <Ref
			k="nakagawa2024"
			p="340–341"
		/> ‹contested›.
	</p>

	<p>
		Property meanings belong to the intransitive verb in Ainu. Forms such as
		<A w="poro" gl="be big, become big" /> and <A w="pirka" gl="be good, become good" /> are
		predicates, and a stative reading ordinarily carries an inchoative one alongside it <Ref
			k="nakagawa2024"
			p="124"
		/>; <Ref k="shibatani1990" p="33–34" />; <Ref k="sato2008" p="2" />. The adverbializer takes
		such a predicate as its input. The position of adverbial material relative to valency and
		person morphology is set out in <Xr ch="verb-word-template" />; the broader status of property
		predicates is treated in <Xr ch="no-adjective-class-property-verbs" />.
	</p>
</S>

<S t="Manner and degree adverbs" id="manner-degree">
	<p>
		Descriptive intransitive stems form manner and degree adverbs by suffixation with
		<i lang="ain-Latn">-no</i>. Ijäs gives the learner formulation: <A w="moyre" gl="be slow" />
		yields <i lang="ain-Latn">moyre-no</i> 'slowly' <Ref k="ijas2023" />. Shibatani's example
		illustrates the pattern in a full utterance: <i lang="ain-Latn">tunas-no</i>, from
		<A w="tunas" gl="be fast" />, modifies the property predicate <A
			w="pirka"
			gl="be good; become good"
		/>, which in the imperative carries its inchoative reading <Ref k="shibatani1990" p="33" />.
	</p>

	<Ex
		m="tunas-no pirka"
		g="be.fast-ADV be.good"
		tr="Get well quickly!"
		cite="shibatani1990:33"
		dial="HK"
		note="Shibatani cites the form in his discussion of property predicates as verbs; tunas-no derives the manner modifier from the descriptive intransitive stem tunas, and pirka carries its inchoative 'become well' reading."
	/>

	<Ex
		m="moyre-no"
		g="be.slow-ADV"
		tr="slowly"
		cite="ijas2023"
		constructed
		note="Ijäs's Lesson 3 teaching example, illustrating the regular descriptive-stem-to-adverb derivation."
	/>

	<table>
		<thead>
			<tr>
				<th>input (descriptive vi)</th>
				<th>adverbial form</th>
				<th>value</th>
				<th>evidence status</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">tunas</i> 'be fast'</td>
				<td><i lang="ain-Latn">tunas-no</i></td>
				<td>manner adverb 'quickly'</td>
				<td><Ref k="shibatani1990" p="33" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">moyre</i> 'be slow'</td>
				<td><i lang="ain-Latn">moyre-no</i></td>
				<td>manner adverb 'slowly'</td>
				<td><Ref k="ijas2023" /> (constructed)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">poro</i> 'be big'</td>
				<td><i lang="ain-Latn">poronno</i></td>
				<td>quantity adverb 'many, much'</td>
				<td><Ref k="ijas2023" />; <Ref k="nakagawa2024" p="162" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">pon</i> 'be small'</td>
				<td><i lang="ain-Latn">ponno</i></td>
				<td>quantity adverb 'a little'</td>
				<td><Ref k="ijas2023" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The lexicalized quantity forms <i lang="ain-Latn">poronno</i> and
		<i lang="ain-Latn">ponno</i> are morphophonologically distinct from the transparent derivation.
		Ijäs explicitly records <i lang="ain-Latn">poronno</i> as the correct output and excludes the
		regularized <i lang="ain-Latn">*porono</i> <Ref k="ijas2023" /> ‹consensus›. The quantity
		meaning of <i lang="ain-Latn">poronno</i> brings it into contact with verbal number: subjects
		modified by <i lang="ain-Latn">poronno</i> may co-occur with either plural or singular
		intransitive stems without a mechanical agreement rule <Ref k="nakagawa2024" p="162" />; <Ref
			k="sato2008"
			p="101"
		/> ‹contested›. That interaction is treated in <Xr ch="suppletive-verbal-number" />.
	</p>

	<p>
		Derived adverbs occupy no argument slot and leave the valence of the modified predicate
		unchanged. Nakagawa's arity table assigns arity 0 to adverbial prefixes such as
		<i lang="ain-Latn">ar-</i> 'completely' and <i lang="ain-Latn">ru-</i> 'slightly', which
		occupy the same valence-neutral zone in the verb word <Ref k="nakagawa2024" p="137, 140" />.
		The suffix <i lang="ain-Latn">-no</i> belongs with that side of the template. The
		valence-changing morphology that contrasts with this neutral zone is surveyed in
		<Xr ch="transitivity-and-valence-classes" />.
	</p>
</S>

<S t="Stative and negative-manner linkage" id="vp-no">
	<p>
		When <i lang="ain-Latn">no</i> follows a saturated predicate phrase, it links that predicate as
		an adverbial state or manner to the following predicate. Nakagawa places it in the
		temporal-succession connective group alongside <i lang="ain-Latn">wa</i> and
		<i lang="ain-Latn">kor</i>, but with a narrower aspectual profile: <i lang="ain-Latn">wa</i>
		links predicates whose first element delivers a result-state, <i lang="ain-Latn">kor</i> marks
		concurrent action, and <i lang="ain-Latn">no</i> is conditioned on a stative first predicate or
		a negated action predicate <Ref k="nakagawa2024" p="340–341" />. Refsing's Shizunai data show
		the same adverbializing value in that dialect, where the particle follows a prohibitive
		predicate to supply the attendant negative state for the polite imperative <Ref
			k="refsing1986"
			p="241"
		/>.
	</p>

	<p>
		The negative construction is the dominant use. The frame <i lang="ain-Latn">somo … ki no</i> —
		negating a predicate with the standard negative support verb <i lang="ain-Latn">ki</i> 'do' and
		then adverbializing the result with <i lang="ain-Latn">no</i> — yields the 'without doing'
		reading and is near-obligatory in that function; substituting <i lang="ain-Latn">wa</i> or
		<i lang="ain-Latn">kor</i> is unexpected in negated contexts <Ref k="sato2008" p="45–46" />
		‹consensus›. The support construction <i lang="ain-Latn">somo … ki</i> itself is treated in
		<Xr ch="negation-somo-standard-clausal" />.
	</p>

	<Ex
		m="a=ona-ha somo mokor no kamuyoritak kor an"
		g="4.POSS=father-POSS NEG sleep ADV pray CONJ exist"
		tr="My father was praying to the gods without sleeping."
		cite="nakagawa2024:340"
		dial="SAR"
		place="Nakagawa ex. 614"
		note="No adverbializes the negated intransitive predicate somo mokor, making it the attendant circumstance under which the progressive predicate kamuyoritak kor an holds."
	/>

	<Ex
		m="ku=caranke ka somo ki no ku=hosipi"
		g="1SG.S=complain even NEG do ADV 1SG.S=return"
		tr="I went home without complaining."
		cite="sato2008:44"
		dial="SAR"
		note="The negative support frame ka somo ki, including the scalar particle ka, is adverbialised as a unit by no. The following predicate ku=hosipi retains its own first-person subject index."
	/>

	<Ex
		m="iteke ukoyki no tup ne ukosaraye yan"
		g="PROH quarrel ADV two COP share POL"
		tr="Divide it in two and share it without quarrelling!"
		cite="refsing1986:241"
		dial="SHI"
		place="Refsing ex. 418"
		note="Shizunai. No adverbialises the prohibitive predicate iteke ukoyki; the polite imperative yan closes the main predicate."
	/>

	<p>
		Ijäs identifies the same two uses of <i lang="ain-Latn">no</i> and presents a further
		conditioning factor: she describes it as the choice when the linked clauses share a subject,
		with <i lang="ain-Latn">wa</i> favoured when they do not <Ref k="ijas2023" />. The primary
		grammars derive the <i lang="ain-Latn">no</i>/<i lang="ain-Latn">wa</i> alternation from
		aspectual and polarity properties of the first predicate — stative or negated predicates take
		<i lang="ain-Latn">no</i> — and Refsing's Shizunai conjunctionalizer treatment is consistent
		with that account <Ref k="nakagawa2024" p="340–341" />; <Ref k="sato2008" p="45–46" />; <Ref
			k="refsing1986"
			p="241"
		/> ‹contested›. Subject continuity is frequent in negated contexts because a manner condition is
		naturally predicated of the same participant as the following event; the grammars do not extend
		this tendency to a grammatical rule.
	</p>

	<p>
		The connective inventory and the position of <i lang="ain-Latn">no</i> in the wider
		temporal-succession system are treated in <Xr ch="clause-linkage-overview" />; the syntax of
		manner and degree adverbial subordination is in <Xr ch="manner-and-degree-adverbial-clauses" />.
	</p>
</S>
