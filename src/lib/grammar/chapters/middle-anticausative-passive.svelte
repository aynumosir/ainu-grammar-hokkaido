<!-- src/lib/grammar/chapters/middle-anticausative-passive.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The ci- middle prefix" id="middle-ci">
	<p>
		Among the arity-decreasing voice prefixes, <A w="ci-" gl="middle prefix (object-resultative)" />
		presents an event from the affected side and yields an intransitive verb whose sole argument is the
		entity undergoing the action <Ref k="nakagawa2024" p="190–191" />. Nakagawa labels the output
		<span lang="ja">中動態</span> (middle voice) and gives the underlying semantics as "expressing,
		from the affected side, an action one thing performs on another" <Ref k="nakagawa2024" p="190" />.
		The Handbook glosses the same prefix object-resultative (<span class="sc">RES</span>), emphasising
		the affected argument's endpoint state <Ref k="bugaevakobayashi2022" p="§4.2.4" />. Both labels
		address the same morphosyntactic fact: the base transitive loses its agent position, arity drops
		by one, and the base object surfaces as the intransitive subject. The terminological difference
		between "middle" and "object-resultative" is not analytical ‹contested›.
	</p>

	<p>
		The prefix reduces arity by exactly one. <A w="cari" gl="scatter something" /> (transitive, +2)
		gives <i lang="ain-Latn">ci-cari</i> 'be scattered' (intransitive, +1);
		<A w="sina" gl="tie something" /> (transitive) gives <i lang="ain-Latn">ci-sina</i> 'be tied'.
		The prefixed form takes suffixal S-argument indexes (fourth-person <i lang="ain-Latn">=an</i>,
		first-plural exclusive <i lang="ain-Latn">=as</i>) in place of the A-argument prefixes of the
		transitive base — the standard transitivity diagnostic of <Xr ch="valency-voice-overview" />.
		The following table gives a selection of attested pairs.
	</p>

	<table>
		<thead>
			<tr>
				<th>base (vt)</th>
				<th>gloss</th>
				<th>ci- form (vi)</th>
				<th>gloss</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">cari</i></td>
				<td>scatter something</td>
				<td><i lang="ain-Latn">ci-cari</i></td>
				<td>be scattered, lie scattered</td>
				<td><Ref k="nakagawa2024" p="190" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">sina</i></td>
				<td>tie something</td>
				<td><i lang="ain-Latn">ci-sina</i></td>
				<td>be tied</td>
				<td><Ref k="nakagawa2024" p="190" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">koyki</i></td>
				<td>hunt, catch something</td>
				<td><i lang="ain-Latn">ci-koyki</i></td>
				<td>be caught (→ <i lang="ain-Latn">cikoykip</i> 'game animal')</td>
				<td><Ref k="nakagawa2024" p="191" />; <Ref k="kayano1996" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">car</i></td>
				<td>scatter something</td>
				<td><i lang="ain-Latn">ci-car-i</i></td>
				<td>be scattered (possessive-form variant)</td>
				<td><Ref k="bugaevakobayashi2022" p="§4.2.4" /></td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="aynu kam ka upas ka ta ci-cari kamuyasi kam ka ci-cari kor"
		g="human flesh even snow even LOC RES-scatter evil.spirit flesh even RES-scatter while"
		tr="Human flesh and snow lay scattered on the ground; the evil spirit's flesh too lay scattered, and …"
		cite="nakagawa2024:189"
		dial="CHI"
		place="Nakagawa ex. 167"
		note="Third-person subjects are morphologically zero; the intransitive form ci-cari takes no object. Both clauses show the affected entity (flesh, snow) as sole argument — the defining property of the ci- middle."
	/>

	<Ex
		m="kem-ihi ci-car-i uske-he"
		g="blood-POSS RES-scatter-POSS place-POSS"
		tr="the place where blood lay scattered"
		cite="bugaevakobayashi2022:§4.2.4"
		dial="SAR"
		place="Handbook ex. 28, after Tamura 1996: 48"
		note="The possessed-form variant ci-car-i in a nominalised relative clause; ci-cari and ci-car-i are morphological doublets, the latter appearing in nominalised or attributive positions."
	/>

	<p>
		Typologically, middle voice marks spontaneous, patient-initiated, or affectee-oriented events
		across many of the world's languages — the semantic space where a passive would otherwise be
		expected but no agent is expressed <Ref k="shibatani1990" p="41–48" />. In Hokkaido Ainu,
		<i lang="ain-Latn">ci-</i> occupies that niche: the source event is agentive (someone scatters,
		someone ties), but the prefix profiles its outcome from the affected participant's perspective,
		suppressing the agent position entirely.
	</p>
</S>

<S t="Person restriction and the ci= / ci- homophony" id="person-restriction">
	<p>
		The middle prefix <i lang="ain-Latn">ci-</i> is restricted to third-person subjects. The form
		<i lang="ain-Latn">*ku=ci-montapire</i> ('I was informed') is ungrammatical; a first-person
		affected participant instead requires the indefinite-agent construction with objective
		cross-referencing: <i lang="ain-Latn">a=en=montapire</i> 'the indefinite agent informed me as
		object' <Ref k="nakagawa2024" p="190" />. This restriction distinguishes
		<i lang="ain-Latn">ci-</i> sharply from the reflexive
		<A w="yay-" gl="REFL" /> and the antipassive
		<A w="i-" gl="antipassive" />, which are available across persons.
	</p>

	<p>
		The prefix is homophonous with the first-person plural exclusive A-index
		<i lang="ain-Latn">ci=</i>, and both reduce arity by one — the index by filling the subject slot
		with a specific 1PL.EXCL argument, the middle by suppressing the agent entirely. Nakagawa treats
		them as "probably related but synchronically distinct" and notes a shared phonological behaviour:
		before <i lang="ain-Latn">a</i>, <i lang="ain-Latn">e</i>, <i lang="ain-Latn">o</i> the
		<i lang="ain-Latn">i</i> drops, yielding surface <i lang="ain-Latn">ca-</i>,
		<i lang="ain-Latn">ce-</i>, <i lang="ain-Latn">co-</i> (<i lang="ain-Latn">ci-opirasa</i> →
		<i lang="ain-Latn">copirasa</i>) <Ref k="nakagawa2024" p="190–191" />. Disambiguation in context
		relies on person morphology and arity: a middle verb takes suffixal S-indexes, while a first-plural
		A-prefix takes the O-indexes typical of transitives.
	</p>

	<p>
		Several <i lang="ain-Latn">ci-</i> forms have lexicalized as uninflected bases. The noun
		<A w="cikoykip" gl="game animal, prey" /> — 'thing that is hunted' — freezes the middle of
		<A w="koyki" gl="hunt, catch something" />, no longer perceived as a productive derivational
		composite by speakers <Ref k="nakagawa2024" p="191" />. Lexicalized middles of this type document
		the prefix's historical productivity; the set of active, synchronically transparent pairs is smaller.
	</p>
</S>

<S t="Community analysis: ci- as a productive middle" id="community-ci">
	<p>
		Discussion in the aynu-corpora Discord has proposed that <i lang="ain-Latn">ci-</i> functions as
		a systematically productive middle/anticausative across a wider set of lexemes than the published
		literature has catalogued (nukopoli, aynu-corpora Discord, 2023–2024)
		<Ref k="aynucorporadiscord" />. The proposal analyses several opaque-looking forms as transparent
		middle derivations: <i lang="ain-Latn">copirasa</i> 'spread out, widen (intr)' as
		<i lang="ain-Latn">ci=opirasa</i> (from transitive
		<A w="opirasa" gl="spread something out" />);
		<i lang="ain-Latn">ceosmare</i> 'dash forward, plunge in' as
		<i lang="ain-Latn">ci=e-osma-re</i> (from an applicative-causative 'cause to thrust into'); and
		<i lang="ain-Latn">cikarkarpe</i> as <i lang="ain-Latn">ci=kar-kar-pe</i> 'things being made'
		<Ref k="aynucorporadiscord" /> ‹contested›.
	</p>

	<p>
		The same line of analysis was applied to <i lang="ain-Latn">ci-koykarkar</i>. On this reading the
		<i lang="ain-Latn">ci-</i> in <i lang="ain-Latn">hattoho ci-koykarkar</i> is the middle prefix,
		yielding a passive-like meaning 'restrictions are imposed on [us]', rather than the first-plural
		A-index <i lang="ain-Latn">ci=</i>, which would give 'we impose restrictions together'
		(nukopoli, aynu-corpora Discord, 2024) <Ref k="aynucorporadiscord" /> ‹contested›. The
		disambiguation requires pragmatic and discourse context; surface form alone does not decide it.
	</p>

	<p>
		These community analyses are leads rather than established findings: they extend the attested middle
		use productively to forms the peer-reviewed descriptive literature has not formally analysed under
		this label. The core claim — that <i lang="ain-Latn">ci-</i> is a productive middle prefix —
		is supported by Nakagawa and the Handbook; the community contribution is the extension to a broader
		set of lexemes and the identification of middle <i lang="ain-Latn">ci-</i> in forms previously
		treated as first-plural-exclusive or as unanalysed compounds. A further diachronic hypothesis that
		<i lang="ain-Latn">ci-</i> derives from an earlier passive-like <i lang="ain-Latn">*ti</i>,
		distinct in origin from the person index, was proposed but disputed on phonological grounds —
		the affricate <span class="ipa">[t͡s]</span> realised as
		<i lang="ain-Latn">c</i> also appears in non-palatalizing environments, casting doubt on a
		straightforward palatalization account (nukopoli and aomidori, aynu-corpora Discord, 2023)
		<Ref k="aynucorporadiscord" /> ‹speculative›.
	</p>
</S>

<S t="Anticausative semantics and the si- overlap" id="anticausative-si">
	<p>
		The reflexive prefix <A w="si-" gl="AUTOC/ANTIC/REFL" /> covers a semantic domain that
		overlaps partially with the middle. Under Satō's analysis, adopted by Nakagawa and the Handbook,
		<i lang="ain-Latn">si-</i> marks the subject's indirect involvement — through another agent,
		through circumstance, or through a force outside the subject's direct control <Ref
			k="sato2007"
			p="31–39"
		/>; <Ref k="nakagawa2024" p="188–189" />; <Ref k="bugaevakobayashi2022" p="§4.2.2" />. The
		minimal pair <i lang="ain-Latn">yay-pusu</i> 'float up volitionally (by swimming)' against
		<i lang="ain-Latn">si-pusu</i> 'float up of itself' illustrates the anticausative semantics of
		<i lang="ain-Latn">si-</i>: the event is profiled as spontaneous, with an affected participant
		rising without an expressed agent <Ref k="sato2007" p="31–32" />. Similarly, the transitive
		<A w="turi" gl="lay something down, stretch something" /> yields <i lang="ain-Latn">si-turi</i>
		'stretch, lie down (of itself)', which Tamura analyses as a pure intransitivizing derivation
		<Ref k="tamura1996" p="622" />. Kobayashi groups such pairs under "anticausativization" — a
		transitivity alternation in which the causer is suppressed and the event presented as spontaneous
		<Ref k="kobayashi2015" p="33" />.
	</p>

	<p>
		The morphological and person-marking properties of <i lang="ain-Latn">ci-</i> and
		<i lang="ain-Latn">si-</i> remain distinct despite the semantic overlap.
		<i lang="ain-Latn">ci-</i> suppresses the agent position entirely and is restricted to
		third-person contexts; <i lang="ain-Latn">si-</i> fills the object slot with a self-participant
		coreferent with the clause subject and is available across all persons. Spontaneous or
		agent-backgrounded events with a first- or second-person participant therefore surface with
		<i lang="ain-Latn">si-</i>, not <i lang="ain-Latn">ci-</i>. The full treatment of the
		<i lang="ain-Latn">yay-</i> / <i lang="ain-Latn">si-</i> opposition belongs to
		<Xr ch="reflexive-yay" /> and <Xr ch="reflexive-possessive-si" />; the present section records
		only the semantic intersection with the anticausative domain.
	</p>

	<p>
		Bugaeva's diachronic study of anticausatives in Ainu concentrates on two markers:
		the primary anticausative / intransitivizing suffix <i lang="ain-Latn">-ke</i>, and
		<i lang="ain-Latn">si-</i>, whose path is REFLEXIVE &gt; AUTOCAUSATIVE &gt;
		ANTICAUSATIVE <Ref k="bugaeva2025" p="§1.2, §3.1.2, §5" />. The inchoative-causative
		interface — where a stem such as <A w="rewke" gl="be bent" /> /
		<A w="rewe" gl="bend something" /> pairs a spontaneous intransitive with a transitive — is
		treated in <Xr ch="transitivizer-ka-valency-pairs" />. The prefix
		<i lang="ain-Latn">ci-</i> is therefore best kept as a separate MID/RES resultative prefix:
		it suppresses an agent and profiles an affected result, but it is not the same historical
		problem as Bugaeva's <i lang="ain-Latn">si-</i> anticausative path.
	</p>
</S>

<S t="Body-region prefixes he- and ho-" id="body-region">
	<p>
		Two lexical prefixes of noun origin, <i lang="ain-Latn">he-</i> 'head, tip' and
		<i lang="ain-Latn">ho-</i> 'base, bottom', also reduce arity by one by filling the object slot
		with the subject's own body-region <Ref k="nakagawa2024" p="186–187" />;
		<Ref k="bugaevakobayashi2022" p="§4.2.4" />. <A w="puni" gl="lift something" /> (transitive)
		yields <i lang="ain-Latn">he-puni</i> 'raise one's head' (intransitive) and
		<i lang="ain-Latn">ho-puni</i> 'get up, fly up' (intransitive);
		<A w="kiru" gl="turn something" /> yields <i lang="ain-Latn">he-kiru</i> 'turn around';
		<A w="tuye" gl="cut something" /> yields <i lang="ain-Latn">ho-tuye</i> 'shout'
		(semantically opaque) <Ref k="nakagawa2024" p="186–187" />.
	</p>

	<p>
		These prefixes are the arity-decreasing (−1) counterparts of the homophonous affiliative
		<i lang="ain-Latn">e-</i> 'head of' and <i lang="ain-Latn">o-</i> 'base of', which are
		arity-neutral (0) and fill a slot while requiring their own possessor. The minimal pair makes
		the arity contrast concrete: <i lang="ain-Latn">he-puni</i> is intransitive and takes S-indexes,
		while affiliative <i lang="ain-Latn">e-puni</i> 'raise the head/end of something (belonging to
		someone)' remains transitive <Ref k="nakagawa2024" p="192–193" />.
	</p>

	<Ex
		m="he-puni=an kor somo a=nu wa kusu"
		g="head-rise=4.S while NEG 4.A=hear CONJ because"
		tr="When [I] raised my head, [the sound] could no longer be heard."
		cite="nakagawa2024:192"
		dial="SAR"
		place="Nakagawa ex. 171, partial"
		note="The intransitive suffix =an on he-puni confirms that the body-region prefix he- has reduced the arity of puni 'lift' by one; the head-referent fills the object slot. The co-occurring a=nu is the indefinite-agent construction treated below."
	/>

	<Ex
		m="a=unuhu a=e-puni ruwe ne akusu"
		g="4.A=mother.POSS 4.A=head.of-rise track-POSS COP when"
		tr="[I] lifted my mother's head, and then —"
		cite="nakagawa2024:192"
		dial="SAR"
		place="Nakagawa ex. 172, partial"
		note="The affiliative e- 'head of' (arity 0, not the applicative e-) keeps puni transitive; the object argument a=unuhu 'mother' is the entity whose head is being raised. Contrast the intransitive he-puni above, where the subject's own head is raised."
	/>

	<p>
		Bugaeva and Kobayashi group <i lang="ain-Latn">he-</i> and <i lang="ain-Latn">ho-</i> together
		with the <i lang="ain-Latn">ci-</i> middle under the object-resultative heading, noting that they
		"function similarly to O-incorporation" — a body-region semantics fills the object slot and makes
		the verb intransitive <Ref k="bugaevakobayashi2022" p="§4.2.4" />. Many surface forms are
		semantically opaque: <i lang="ain-Latn">ho-tuye</i> 'shout' transparently contains
		<i lang="ain-Latn">tuye</i> 'cut' with <i lang="ain-Latn">ho-</i> 'base', yet the compositional
		meaning is not recoverable <Ref k="nakagawa2024" p="187" />.
	</p>
</S>

<S t="The indefinite-agent construction: a= as a functional passive" id="a-passive">
	<p>
		When a transitive event is presented with an unspecified or backgrounded agent, Hokkaido Ainu uses
		the fourth/indefinite person prefix <A w="a=" gl="fourth-person / indefinite agent" /> — or the
		dialectal variant <i lang="ain-Latn">an=</i> in Ishikari and some other varieties — as the agent
		argument of the transitive verb. The patient stays in object position; no promotion to subject
		occurs. The construction is valency-neutral: the verb retains its transitive argument frame, with
		the indefinite agent filling the A slot and the patient cross-referenced as O
		<Ref k="nakagawa2024" p="428–429" />; <Ref k="bugaevakobayashi2022" p="§1" />.
	</p>

	<Ex
		m="seta or wa aynu a=kupapa"
		g="dog place from person 4.A=bite"
		tr="A person was bitten by a dog."
		cite="nakagawa2024:428"
		dial="SAR"
		place="Nakagawa ex. 945″"
		note="The dog appears in the or wa 'from' demoted-agent phrase; the indefinite transitive prefix a= occupies the A slot; the patient aynu 'person' remains the grammatical object."
	/>

	<Ex
		m="nikekke wenkur sekor aynu or wa a=reko kor an yakka"
		g="wood-break poor.person QUOT people place from 4.A=call while exist.SG even.though"
		tr="Even though [he] was called 'the wood-breaking pauper' by people —"
		cite="nakagawa2024:429"
		dial="SAR"
		place="Nakagawa ex. 946, after Tamura 1985: 42"
		note="a=reko 'the indefinite agent calls'; aynu or wa provides the demoted agent. The object (the called person) is not cross-referenced here because it is zero-marked third person."
	/>

	<Ex
		m="sonno nispa or wa an=omap"
		g="very respected.man place from 4.A=love"
		tr="[He] was greatly loved by a respected man."
		cite="nakagawa2024:429"
		dial="ISH"
		place="Nakagawa ex. 948, after Sunazawa 1983: 73"
		note="The Ishikari variant an= replaces a= as the indefinite transitive prefix; the construction is otherwise identical. The patient is zero-marked (third person, object)."
	/>

	<p>
		A demoted agent is expressed with the postpositional phrase <i lang="ain-Latn">or(o) wa</i>
		'from', taking the NP that would normally appear as the transitive subject
		<Ref k="nakagawa2024" p="428–429" />. The construction is frequent with unintended or inanimate
		causers and in polite speech where direct naming of the agent is avoided. The full morphology,
		referential range, and dialect distribution of the fourth/indefinite person are treated in
		<Xr ch="indefinite-fourth-person-paradigm" />.
	</p>

	<p>
		Satō's subjecthood diagnostic makes the non-promotion of the patient explicit. If the patient were
		a true intransitive subject, a 'want to be loved' predicate should take bare
		<A w="rusuy" gl="want to, desire" /> with subjective marking. Instead the construction requires
		the nominalizer <i lang="ain-Latn">hi</i> together with objective cross-referencing on the verb
		<Ref k="sato2008" p="205–206" />:
	</p>

	<Ex
		m="huci oro wa a=en=omap hi ku=ki rusuy"
		g="grandmother place from 4.A=1SG.O=love NMLZ 1SG.A=do DES"
		tr="I want to be loved by grandmother."
		cite="sato2008:205"
		dial="CHI"
		note="The patient is cross-referenced as object (en= '1SG.O') on the verb, and the nominalized clause hi is required by the desiderative. A construction with a true passive subject would take subjective marking and bare rusuy without hi — that form is ungrammatical. Satō describes the overall structure as 'a very peculiar passive' (受け身文としては極めて特殊な構造, Satō 2008: 205)."
	/>

	<p>
		The distinction between the <i lang="ain-Latn">ci-</i> middle and the
		<i lang="ain-Latn">a=</i> construction also emerges clearly here: in a
		<i lang="ain-Latn">ci-</i> clause the affected participant surfaces as the intransitive subject
		and no agent may be expressed at all; in the <i lang="ain-Latn">a=</i> clause the patient is
		syntactically the object, an agent may appear in <i lang="ain-Latn">or wa</i>, and the verb is
		transitive by all formal tests <Ref k="nakagawa2024" p="429–430" />.
	</p>
</S>

<S t="Does Ainu have a true passive?" id="passive-question">
	<p>
		Hokkaido Ainu has no subject-promoting passive <Ref k="nakagawa2024" p="428" />;
		<Ref k="bugaevakobayashi2022" p="§1" />. Nakagawa states it directly:
		<span lang="ja">それにあたるものはアイヌ語には無い</span> 'there is nothing in Ainu that corresponds
		to it' <Ref k="nakagawa2024" p="428" />. The two constructions that carry the functional load a
		passive would otherwise bear are structurally distinct from each other and from any classic
		subject-promoting passive.
	</p>

	<table>
		<thead>
			<tr>
				<th>construction</th>
				<th>patient's grammatical role</th>
				<th>agent expression</th>
				<th>arity effect</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">ci-</i> middle</td>
				<td>intransitive subject (S)</td>
				<td>impossible</td>
				<td>−1 (vi output)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">a=</i> / <i lang="ain-Latn">an=</i> indefinite-agent</td>
				<td>object (O) — no promotion</td>
				<td>optional, in <i lang="ain-Latn">or wa</i> phrase</td>
				<td>0 (vt output)</td>
			</tr>
			<tr>
				<td>subject-promoting passive (cross-linguistic prototype)</td>
				<td>promoted to subject (S)</td>
				<td>optional, in oblique phrase</td>
				<td>−1 (vi output)</td>
			</tr>
		</tbody>
	</table>

	<p>
		The <i lang="ain-Latn">ci-</i> middle moves the base object into subject position — in that
		respect it is the nearest Ainu analogue to a valency-decreasing passive — but it categorically
		blocks agent expression <Ref k="nakagawa2024" p="430" />. A classic passive combines
		patient-as-subject with an optional by-phrase; no Ainu construction combines these two properties.
		Nakagawa adds that the middle has a verse-register periphrastic use with the causative —
		<i lang="ain-Latn">ci-ra-na-ran-ke</i> (from <A w="ran" gl="descend" />, stretched to five
		syllables) — where meaning is unchanged; this verse device is not available for the
		<i lang="ain-Latn">a=</i> construction <Ref k="nakagawa2024" p="430" />.
	</p>

	<p>
		The Handbook labels the <i lang="ain-Latn">a=</i> / <i lang="ain-Latn">an=</i> construction a
		"valency-neutral impersonal passive" to capture its agent-defocusing function, while recognizing
		that it lacks subject promotion <Ref k="bugaevakobayashi2022" p="§1" /> ‹contested›. Satō's
		preferred formulation — "a half-active, very peculiar passive structure" — likewise foregrounds
		the mismatch with cross-linguistic passive prototypes <Ref k="sato2008" p="205" /> ‹contested›.
		Neither label implies that the construction is a passive in the structural sense; both describe the
		same functional fact from different angles.
	</p>

	<p>
		The functional distribution that results follows from the structural properties. For third-person
		affected participants where no agent is at issue, <i lang="ain-Latn">ci-</i> presents the event
		from the affected side, and the patient-as-subject reading is the natural one. For first- or
		second-person patients, or wherever the agent may need to be expressed,
		<i lang="ain-Latn">a=</i> / <i lang="ain-Latn">an=</i> is used instead, with the patient
		retaining object status and the verb its transitive morphology <Ref k="nakagawa2024" p="429–430" />.
		A by-phrase that co-occurs with patient-as-subject is unattested in the Hokkaido corpus
		‹corpus-confirmed›.
	</p>

	<p>
		Ijäs's learner grammar does not treat the passive question or the <i lang="ain-Latn">ci-</i>
		middle <Ref k="ijas2023" />. The nominalizer <i lang="ain-Latn">hi</i> that anchors Satō's
		subjecthood diagnostic connects this discussion to the nominalization system of
		<Xr ch="nominalization-p-pe" />. The antipassive <i lang="ain-Latn">i-</i>, which defocuses the
		object from the subject's side, is the mirror-image operation and is treated in
		<Xr ch="antipassive-detransitive-i" />. The productive causative
		<i lang="ain-Latn">-re</i> / <i lang="ain-Latn">-te</i> / <i lang="ain-Latn">-e</i>, which
		introduces an agent argument rather than suppressing one, is in
		<Xr ch="causative-morphological-re-e-te" />.
	</p>
</S>
