<!-- src/lib/grammar/chapters/causee-marking-ditransitive-double-causative.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		The productive causative suffix <i lang="ain-Latn">-re</i>/<i lang="ain-Latn">-te</i
		>/<i lang="ain-Latn">-e</i> raises arity by one. Applied to an intransitive base it
		creates a two-place transitive; applied to a transitive base it creates a three-place
		ditransitive; applied a second time to a derived causative stem it produces a
		four-place verb. The chapter follows the causee — the participant who is made or
		permitted to act — through each of these steps: its expression as the O of a derived
		transitive, the priority it takes over the theme when both objects compete for the
		single O-index slot, and the behaviour of double causatives under the two-slot
		ceiling. The allomorphy and the productive versus non-productive distribution of
		causative morphology are developed in <Xr ch="causative-morphological-re-e-te" />.
		The indefinite causative <i lang="ain-Latn">-yar</i>/<i lang="ain-Latn">-ar</i>,
		which adds a causer while leaving the causee both unexpressed and unindexed, is
		treated in <Xr ch="permissive-sociative-causative-yar" />.
	</p>
</S>

<S t="The causee as object" id="causee-as-object">
	<p>
		When <i lang="ain-Latn">-re/-te/-e</i> derives a transitive verb from an intransitive
		base, the former intransitive subject becomes the O of the causative verb. Person
		marking shows this shift directly. The intransitive <A w="sinot" gl="play (intr)" />
		takes the first-person A prefix <i lang="ain-Latn">ku=</i>; once the causative
		<i lang="ain-Latn">-te</i> is added, that same participant reappears as the
		first-person object <i lang="ain-Latn">en=</i>, and the new causer —
		<i lang="ain-Latn">hapo</i> 'mother' — occupies the A position, unmarked because
		third-person A is zero <Ref k="nakagawa2024" p="431" />.
	</p>

	<Ex
		m="ku=sinot"
		g="1SG.A=play"
		tr="I play."
		cite="nakagawa2024:431"
		dial="SAR"
		place="Nakagawa ex. 954, after Tamura 1984"
	/>

	<Ex
		m="hapo en=sinot-te"
		g="mother 1SG.O=play-CAUS"
		tr="Mother made me play."
		cite="nakagawa2024:431"
		dial="SAR"
		place="Nakagawa ex. 955"
		note="The base subject ku= (1SG.A) reappears as the causee en= (1SG.O) of the causative; hapo 'mother' is the new causer, indexed by zero (third-person A is not marked)."
	/>

	<p>
		The causee bears no case particle. Ainu objects are invariably unmarked, so the
		causee surfaces as a bare NP alongside any O-set affix that cross-references it,
		in exactly the same way the patient of any transitive does
		<Ref k="bugaeva2014" p="142" />; <Ref k="nakagawa2024" p="201" />. The same
		principle carries into the three-place frame that arises when a transitive base is
		causativized: the marking type does not change, only the number of competitors for
		the single O-index slot increases.
	</p>
</S>

<S t="Causative of a transitive: the three-place frame" id="three-place-frame">
	<p>
		When <i lang="ain-Latn">-re/-te/-e</i> applies to a transitive verb (arity +2), the
		result has arity +3. The new causer fills the A position, the original transitive
		subject (now the causee) fills one O position, and the original patient or theme
		fills a second O position. Bugaeva (2014: 142) characterizes the causee in this frame
		as an unmarked direct object in a double-object construction, parallel in its coding
		to a recipient in an applicative-derived ditransitive
		<Ref k="bugaeva2014" p="142" />; <Ref k="bugaevakobayashi2022" p="§4.1.2" />.
	</p>

	<p>
		A corpus example from the Saru texts in the Nakagawa archive illustrates all three
		participants at once. The base verb is <A w="tuy-e" gl="cut (transitive)" />, the
		transitivized member of the <i lang="ain-Latn">tuy</i>/<i lang="ain-Latn">tuy-e</i>
		pair; adding the causative <i lang="ain-Latn">-re</i> raises arity to three. The
		causer is indexed by <i lang="ain-Latn">a=</i> (fourth person, functioning as
		narrative first person), the causee 'you' by <i lang="ain-Latn">e=</i> (2SG.O), and
		the theme appears as a bare NP without any person affix on the verb:
	</p>

	<Ex
		m="a=e=tuy-e-re"
		g="4.A=2SG.O=cut-TRVZ-CAUS"
		tr="I made you cut the grapevines."
		cite="bugaevakobayashi2022:§4.1.2"
		dial="SAR"
		place="Nakagawa corpus K7803233UP.144; Handbook ex. 6c"
		note="Attested form in context: ki kusu hat punkar a=e=tuy-e-re wa. The theme 'grapevines' (hat punkar) is a bare NP with no index on the verb; only the causer and causee are cross-referenced."
	/>

	<p>
		Ijäs (Basic Lesson 3) uses the label 'ditransitive' for three-place verbs such as
		<A w="epakasnu" gl="teach" /> and <A w="kore" gl="give" />, and correctly identifies
		a three-argument structure. Her accompanying claim that the indirect object falls
		between subject and direct object in a fixed position is a pedagogical simplification:
		Nakagawa's data show the two objects of a ditransitive in variable order
		<Ref k="ijas2023" />; <Ref k="nakagawa2024" p="363–365" /> ‹consensus›.
	</p>

	<p>
		The table below tracks arity through the causative chain. The third row covers double
		causatives, taken up in §<span class="sc">5</span>.
	</p>

	<table>
		<thead>
			<tr>
				<th>base verb</th>
				<th>type</th>
				<th>arity</th>
				<th>causative output</th>
				<th>output arity</th>
				<th>participant frame</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">sinot</i> 'play'</td>
				<td>vi</td>
				<td>+1</td>
				<td><i lang="ain-Latn">sinot-te</i></td>
				<td>+2</td>
				<td>causer (A-affix), causee (O-affix)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">tuy-e</i> 'cut sth'</td>
				<td>vt</td>
				<td>+2</td>
				<td><i lang="ain-Latn">tuy-e-re</i></td>
				<td>+3</td>
				<td>causer (A-affix), causee (O-affix), theme (bare NP)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">omare</i> 'put X in Y'</td>
				<td>vd</td>
				<td>+3</td>
				<td><i lang="ain-Latn">omare-re</i></td>
				<td>+4</td>
				<td>causer (A-affix), causee (O-affix), theme (NP), place (NP)</td>
			</tr>
		</tbody>
	</table>
</S>

<S t="Person indexing: causee priority and secundative alignment" id="person-indexing">
	<p>
		An Ainu verb carries at most two person affixes — one in the A-set and one in the
		O-set — the two-slot ceiling described in <Xr ch="valency-voice-overview" />
		<Ref k="nakagawa2024" p="210–212" />; <Ref k="bugaevakobayashi2022" p="§2" />;
		<Ref k="sato2023b" />. In the three-place causative frame two objects compete for
		the single O-slot. The attested indexing pattern, exemplified by
		<i lang="ain-Latn">a=e=tuy-e-re</i>, gives the O-slot to the causee and leaves the
		theme as a bare NP.
	</p>

	<p>
		This outcome places Ainu causative ditransitives in the secundative column of
		ditransitive indexing typology (see <Xr ch="object-indexing-monotransitive" />): the
		causee, as derived O, patterns with the O of a monotransitive verb for person-marking
		purposes, rather than the original patient claiming that slot
		<Ref k="sato2023b" />; <Ref k="bugaevakobayashi2022" p="§4.1.2" />. The pattern
		mirrors what applies in applicative-derived ditransitives, where the applied object
		— not the original patient — is indexed in the O-position ‹corpus-suggested›.
	</p>

	<p>
		Whether the reverse indexing (theme indexed, causee as bare NP) ever occurs is not
		settled in the sources consulted ‹speculative›.
	</p>

	<p>
		A lexicalized sub-pattern involves the fourth-person object affix
		<i lang="ain-Latn">i=</i> serving as an indefinite causee. Forms such as
		<i lang="ain-Latn">iyairaykere</i> and <i lang="ain-Latn">irankarapte</i> have been
		proposed by nukopoli (aynu-corpora Discord, November 2024) as
		<i lang="ain-Latn">i=</i> + stem + <i lang="ain-Latn">-re/-te</i>, glossable as
		'cause people/someone to be grateful' and 'cause people/someone to greet' respectively.
		On this reading <i lang="ain-Latn">i=</i> occupies the O-slot as an indefinite
		causee, and some lexicalized tokens drift toward an adjectival-modal reading
		analogous to English <em>excit-ing</em> alongside <em>excit-ed</em>. The analysis is
		not yet verified against the corpus and Nakagawa's (2024) treatment of these forms
		has been judged insufficiently detailed by the same discussant
		<Ref k="aynucorporadiscord" /> ‹contested›.
	</p>

	<p>
		If the <i lang="ain-Latn">i=</i>-causee reading is correct, causee expression in the
		productive causative system presents a three-way gradient: a specific causee (named
		NP plus O-set affix on the verb) → an indefinite causee
		(<i lang="ain-Latn">i=</i>-affix, cross-referenced but unspecified) → an unindexed
		causee (<i lang="ain-Latn">-yar</i>, not cross-referenced at all). The antipassive
		prefix <i lang="ain-Latn">i-</i> can similarly fill the causee slot with a generic
		object when applied to a causative-derived stem — Bugaeva's examples
		<i lang="ain-Latn">i-newsar-ka</i> 'amuse people' and
		<i lang="ain-Latn">i-oripak-ka</i> 'make people feel humble', reported via the
		Handbook — and forms a related but distinct indefinite-causee strategy
		<Ref k="bugaevakobayashi2022" p="§4.2.3" /> ‹corpus-suggested›.
	</p>
</S>

<S t="Double causatives" id="double-causative">
	<p>
		The productive suffix applies iteratively. A derived causative stem may itself serve
		as the input to a second causativization, and the allomorphy rules apply at each
		step. After the vowel-final first causative <i lang="ain-Latn">-e</i> (the allomorph
		after <i lang="ain-Latn">r</i>), the second causative surfaces as
		<i lang="ain-Latn">-re</i> (the allomorph after a vowel), producing the sequence
		<i lang="ain-Latn">-e-re</i> <Ref k="nakagawa2024" p="200–201" />;
		<Ref k="bugaeva2014" p="134" />.
	</p>

	<p>
		<A w="kor" gl="have, hold (transitive)" /> is a two-place verb. The first causative
		suffix <i lang="ain-Latn">-e</i> (after <i lang="ain-Latn">r</i>) yields
		<A w="kor-e" gl="give (causative of kor: cause to have)" /> (+3): the giver is the
		new A, and the original possessor becomes a causee-beneficiary in the O position. A
		second <i lang="ain-Latn">-re</i> yields <i lang="ain-Latn">kor-e-re</i>
		(have-<span class="sc">caus-caus</span>, +4): an outer causer now makes the giver
		give. Bugaeva (2014: 142–143) records <i lang="ain-Latn">kor-e-re</i> as attested
		once in her 387-verb Saru sample <Ref k="bugaeva2014" p="142–143" />.
	</p>

	<Ex
		m="a=e=kor-e-re"
		g="4.A=2SG.O=have-CAUS-CAUS"
		tr="I caused you to give (something to someone)."
		constructed
		note="The form kor-e-re 'cause to give' (have-CAUS-CAUS) is attested in Bugaeva (2014: 142–143); this constructed illustration shows the person-indexing pattern: the outer causer takes a= (fourth person, narrative first person) and the immediate causee-giver takes e= (2SG.O), while the recipient and the theme given have no index on the verb."
	/>

	<p>
		<A w="omarere" gl="cause someone to put X in Y" /> provides a second documented
		instance. The base <A w="oma" gl="be inside (a place)" /> is a locative verb;
		<A w="omare" gl="put X in Y (causative of oma)" /> is its three-place causative;
		<i lang="ain-Latn">omare-re</i> is the double causative with four participants
		<Ref k="bugaevakobayashi2022" p="§4.1.2" />.
	</p>

	<p>
		The two-slot ceiling limits what can be cross-referenced in any four-place frame.
		Of four participants, only the outer causer (A-slot) and the immediate causee
		(O-slot) can be indexed by person affixes on the verb; the remaining objects must
		be expressed as overt bare NPs. The asymmetry between a morphologically productive
		stacking operation and its restricted expressibility in person marking explains the
		marginal corpus status of double causatives. Bugaeva and Kobayashi observe that the
		licensing of double-object frames and double causatives in Ainu is cross-linguistically
		unusual, most languages blocking iterative morphological causativization
		<Ref k="bugaevakobayashi2022" p="§4.1.2" /> ‹corpus-suggested›.
	</p>
</S>

<S t="Combinatorial limits and related morphology" id="combinatorial-limits">
	<p>
		The causative sits within a broader combinability system in which two applicatives,
		two causatives, two incorporated objects, reflexive, and agreement indexes can
		co-occur on a single verb — surveyed in <Xr ch="valency-voice-overview" />
		<Ref k="bugaeva2014" />; <Ref k="bugaevakobayashi2022" p="§4.1.1" />. The two-slot
		ceiling is the shared operational bound across all combinations
		<Ref k="sato2023b" />; <Ref k="bugaevakobayashi2022" p="§2" />.
	</p>

	<p>
		Kobayashi's argument-structure analysis is relevant background here. She separates
		causative derivation — which always adds an agent-like participant, displacing the
		original subject to O — from applicative derivation, which adds a non-agent participant
		to the object set. The distinction predicts which slot a new participant targets and
		clarifies when applicative and causative are alternatives for expanding the argument
		frame <Ref k="kobayashi2015" p="33" />; <Ref k="kobayashi2020" />. The non-causative
		side is taken up in <Xr ch="applicative-system-overview" />.
	</p>

	<p>
		Takahashi (2017) reports that in Horobetsu the causative suffix acquires an additional
		switch-reference function in clause linkage: in coordinate chains it marks a different
		subject in the following clause; in subordinate chains it marks the same subject.
		This function is not attested in descriptions of Saru or Chitose and does not bear
		directly on causee marking, but it shows the causative suffix to be morphologically
		multifunctional in at least one dialect
		<Ref k="takahashi2017" p="102–106" /> ‹corpus-suggested›.
	</p>

	<p>
		For the non-productive lexical causatives (<i lang="ain-Latn">-V</i>,
		<i lang="ain-Latn">-ke</i>, <i lang="ain-Latn">-ka</i>) and their relationship to
		transitivity pairs, see <Xr ch="transitivizer-ka-valency-pairs" />; for the arity
		classes themselves, <Xr ch="transitivity-and-valence-classes" />.
	</p>
</S>
