<!-- src/lib/grammar/chapters/hortative-and-optative.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The hortative system" id="overview">
	<p>
		A set of sentence-final particles — <i lang="ain-Latn">ro</i>, <i lang="ain-Latn">rok</i>,
		and <i lang="ain-Latn">no</i>, distributed by dialect — attaches to a finite clause and
		converts it into an invitation to joint action. Nakagawa places these under the
		sentence-final particles (終助詞) in the category of 勧誘, 'inducement or invitation',
		seeking the addressee's agreement <Ref k="nakagawa2024" p="333–335" />. In their most
		frequent use the particles follow a clause whose subject is the inclusive fourth person,
		giving the cohortative 'let us …'; with a first-person subject they shift into a
		volitional or deliberative register. The related particle <i lang="ain-Latn">so</i>
		marks self-directed deliberation addressed to no one in particular. Together these uses
		span the domain that descriptive grammars variously call hortative, cohortative, and
		optative.
	</p>
	<p>
		The system sits at the boundary of two adjacent areas. On one side is the directive
		mood — imperative and prohibitive — treated in <Xr ch="imperative-and-prohibitive" />;
		on the other is the desiderative and epistemic-modal field of
		<Xr ch="epistemic-irrealis-modality" />. The hortative differs from the imperative in
		keeping person affixes intact on the finite verb and in proposing participation rather
		than directing it; it differs from the desiderative <A w="rusuy" gl="want to" /> in
		that <i lang="ain-Latn">rusuy</i> predicates an internal desire as an assertion while
		<i lang="ain-Latn">ro</i> addresses an invitation. The broader TAM and directive
		architecture is mapped in <Xr ch="tam-overview" />.
	</p>
</S>

<S t="Dialect distribution of the hortative particles" id="particles">
	<p>
		The three phonological variants share the same function and occur in complementary
		geographic zones across Hokkaido, with partial overlap in Ishikari
		<Ref k="nakagawa2024" p="334–335" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>particle</th>
				<th>dialect region</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">ro</i></td>
				<td>Saru, Horobetsu, Chitose, Shizunai</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">rok</i></td>
				<td>Tokachi, Shiranuka; Ishikari (alongside <i lang="ain-Latn">ro</i>)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">no</i></td>
				<td>Urakawa, Samani</td>
			</tr>
		</tbody>
	</table>

	<p>
		This chapter cites <i lang="ain-Latn">ro</i> as the reference form. Attested examples
		from other dialect regions carry their appropriate dialect tag; the grammatical
		description applies across all three variants.
	</p>
</S>

<S t="The cohortative: inclusive fourth-person subject" id="cohortative">
	<p>
		The canonical hortative clause is a finite predicate carrying the fourth-person subject
		marker — the intransitive suffix <i lang="ain-Latn">=an</i> or the transitive agent
		prefix <i lang="ain-Latn">a=</i> — followed by the hortative particle. The fourth
		person in this environment receives an inclusive reading: it denotes the speaker and
		addressee(s) acting together. This is the primary discourse context in which the
		fourth-person subject functions as an explicit inclusive 'we'; the full paradigm and the
		broader referential range are set out in <Xr ch="indefinite-fourth-person-paradigm" />
		‹consensus›.
	</p>
	<p>
		Number-sensitive suppletive verb pairs select the plural stem when the cohortative
		implies a plural group. The motion verb <i lang="ain-Latn">arpa</i> (singular 'go')
		supplies its plural counterpart <i lang="ain-Latn">paye</i> in a cohortative directed
		at a group of participants <Ref k="nakagawa2024" p="142–145" />.
	</p>

	<Ex
		m="paye=an ro"
		g="go.PL=4.S HORT"
		tr="Let's go."
		constructed />

	<p>
		The particle attaches to clause chains in which each predicate retains its own person
		marking and the sequential conjunctive <i lang="ain-Latn">wa</i> links the component
		clauses:
	</p>

	<Ex
		m="ney ta ka kuruma ani mosir epitta payoka=an wa inkar=an ro"
		g="when LOC even car INS land throughout go.around=4.S CONJ look=4.S HORT"
		tr="Someday let us travel around the whole country by car and see it."
		cite="nakagawa2024:333"
		dial="SAR"
		place="Nakagawa ex. 575, after Honda 2001: 19"
		note="Both finite verbs carry the fourth-person suffix =an, the diagnostic of the pair-verb construction in which wa links two independent finite clauses. The hortative ro scopes over the full conjoined proposition." />

	<p>
		Both verbs in the chain carry <i lang="ain-Latn">=an</i>, the same pattern found in
		existential-aspect pair verbs such as <i lang="ain-Latn">kor an</i> and
		<i lang="ain-Latn">wa an</i> (see <Xr ch="tam-overview" s="existential-aspect" />):
		each predicate is independently person-marked, and the final particle closes the chain
		from outside. The inclusive 'we' reading that distinguishes the cohortative from a
		generic or indefinite fourth-person clause is supplied by context and the hortative
		particle together; the morphology of the fourth person itself is identical across these
		uses.
	</p>
</S>

<S t="Volitional and deliberative uses" id="volitional">
	<p>
		Tamura observed that <i lang="ain-Latn">ro</i> is not restricted to the fourth-person
		inclusive base. With a first-person subject it expresses the speaker's own volition as
		a proposal or offer rather than an invitation to joint participation, occupying what
		the typological literature calls the volitional or optative range
		<Ref k="nakagawa2024" p="335" />.
	</p>

	<Ex
		m="k=arpa ro"
		g="1SG.S=go HORT"
		tr="Shall I go? / I'll go then."
		cite="nakagawa2024:334"
		dial="HK"
		place="Nakagawa ex. 578, after Tamura"
		note="With a first-person rather than fourth-person subject, ro shifts from a cohortative 'let us' to a volitional 'shall I / I will', presenting the speaker's intention as a proposal open to the addressee's response." />

	<p>
		The Chitose dialect supplies a parallel transitive construction in which the speaker
		proposes to act for the addressee's benefit. The second-person object prefix is overt;
		the first-person agent is contextually supplied.
	</p>

	<Ex
		m="eci=kay ro"
		g="2SG.O=carry HORT"
		tr="Let me carry you!"
		cite="nakagawa2024:334"
		dial="CHI"
		place="Nakagawa ex. 579"
		note="Chitose form. The second-person object prefix eci= is overt while the first-person agent is contextually implied. Nakagawa analyses this as a 1SG-agent, 2SG-object hortative in which the speaker proposes to act for the addressee." />

	<p>
		The related particle <i lang="ain-Latn">so</i> marks deliberation directed at no one:
		the speaker reasons through a choice aloud, translated roughly as '〜しようかな'
		('I wonder whether I should …'). Whereas <i lang="ain-Latn">ro</i> — even in its
		1SG volitional use — addresses a proposal to the interlocutor,
		<i lang="ain-Latn">so</i> keeps the reasoning internal to the speaker
		<Ref k="nakagawa2024" p="335" />.
	</p>

	<Ex
		m="k=arpa so"
		g="1SG.S=go DEL"
		tr="(Hmm,) shall I go?"
		constructed
		note="Deliberative so with a first-person subject; the speaker reasons aloud without directing the question to another participant. Contrast the cohortative paye=an ro, where the invitation is addressed to the interlocutor." />

	<p>
		Ijäs's pedagogical guide carries a hortative clause in its own title:
		<i lang="ain-Latn">a=eyaypakasnu ro</i> 'let us study [Ainu]', in which the
		fourth-person transitive agent prefix <i lang="ain-Latn">a=</i> heads an inclusive
		proposition and <i lang="ain-Latn">ro</i> expresses the invitation
		<Ref k="ijas2023" /> ‹corpus-confirmed›. The construction matches Nakagawa's
		description of the standard fourth-person cohortative.
	</p>
</S>

<S t="Relationship to the imperative, prohibitive, and desiderative" id="boundaries">
	<p>
		The formal contrast with the imperative is clear. The singular imperative is a bare verb
		carrying no second-person subject prefix: <i lang="ain-Latn">arpa</i> 'go!' The plural
		or polite imperative adds the final particle <i lang="ain-Latn">yan</i> to the plural
		stem, again without a subject person prefix: <i lang="ain-Latn">hosippa yan</i> 'go
		back (all of you)!' The hortative, by contrast, preserves the full person-marking of
		the finite clause — <i lang="ain-Latn">paye=an ro</i> retains <i lang="ain-Latn">=an</i>
		on the verb — and the particle attaches outside that marked predicate
		<Ref k="nakagawa2024" p="421–423, 334" /> ‹consensus›. The illocutionary distinction
		follows from the morphological one: the imperative directs the addressee, while the
		hortative proposes joint participation or the speaker's own contribution.
	</p>
	<p>
		The prohibitive adverb <i lang="ain-Latn">iteki</i> (Saru/Chitose form; dialect
		variants treated in <Xr ch="imperative-and-prohibitive" />) scopes over the bare
		imperative stem and does not combine with the person-marked hortative clause
		<Ref k="nakagawa2024" p="424–425" />. When a speaker wishes to counsel against a joint
		course of action, a conditional or modal construction serves that function rather than
		<i lang="ain-Latn">iteki</i> fronted before a hortative clause.
	</p>
	<p>
		The desiderative auxiliary <A w="rusuy" gl="want to" /> occupies the pre-particle
		auxiliary slot and predicates the speaker's internal desire as an assertion
		<Ref k="nakagawa2024" p="312–313" />. A sentence ending in <i lang="ain-Latn">rusuy</i>
		is a declaration of wanting, not an invitation; <i lang="ain-Latn">ro</i> cannot
		substitute for it in that position, and <i lang="ain-Latn">rusuy</i> cannot occupy
		the final-particle slot where <i lang="ain-Latn">ro</i> sits. The desiderative
		together with the prospective <i lang="ain-Latn">kusu ne</i> and other irrealis and
		epistemic auxiliaries are treated in <Xr ch="epistemic-irrealis-modality" />.
	</p>
</S>
