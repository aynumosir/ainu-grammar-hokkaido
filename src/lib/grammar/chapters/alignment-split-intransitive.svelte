<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="What split-intransitive alignment predicts" id="scope">
	<p>
		A split-intransitive, or active–stative, alignment divides intransitive subjects into two
		agreement classes: subjects that pattern with transitive A, and subjects that pattern with
		transitive O. The conditioning factor is typically control, volition, or affectedness
		<Ref k="stassen1997" p="23–28" paren />; <Ref k="foleyvanvalin1984" p="29–37" paren />.
		The Hokkaido Ainu finite person-index system makes no such division. A predicate's
		transitivity class — zero-place, one-place, two-place, or three-place — fixes which indexes
		appear on the verb; within the one-place class, no further agentivity distinction feeds the
		morphology <Ref k="nakagawa2024" p="124–128" />; <Ref k="bugaeva2012" p="471–472" />.
	</p>

	<p>
		The morphological architecture, including the full S/A/O paradigm and the side-encoding
		that makes the 1PL.EXCL and fourth-person rows tripartite, is described in
		<Xr ch="person-marking-architecture">the personal-affix architecture chapter</Xr>. This
		chapter addresses the narrower diagnostic: whether the intransitive S column itself splits
		by agentivity. It also explains where an active-looking division genuinely occurs — in
		lexical classification, incorporation diagnostics, and valency-changing morphology — and
		why that domain does not constitute an agreement-level split ‹consensus›.
	</p>

	<table>
		<thead>
			<tr>
				<th>domain</th>
				<th>organising axis</th>
				<th>Hokkaido pattern</th>
				<th>treated in</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>finite person indexes</td>
				<td>transitivity class and formal person</td>
				<td>one S set per person row; no agentivity split within S</td>
				<td><Xr ch="person-marking-architecture">personal-affix architecture</Xr></td>
			</tr>
			<tr>
				<td>person-row alignment</td>
				<td>cell in the person paradigm</td>
				<td>1SG accusative; 2/3 neutral; 1PL.EXCL and 4 tripartite</td>
				<td><Xr ch="alignment-hierarchical-and-the-debate">alignment debate</Xr></td>
			</tr>
			<tr>
				<td>lexical classification</td>
				<td>semantic role and event structure</td>
				<td>patient-like S patterns with O for incorporation diagnostics</td>
				<td><Xr ch="transitivity-and-valence-classes">valence classes</Xr></td>
			</tr>
			<tr>
				<td>valency-changing morphology</td>
				<td>derivational template</td>
				<td>transitivity changed first; ordinary S/A/O indexes assigned to the result</td>
				<td><Xr ch="verb-word-template">verb word template</Xr></td>
			</tr>
		</tbody>
	</table>
</S>

<S t="All intransitive subjects use the S set" id="uniform-s">
	<p>
		Nakagawa's valence chapter gives the decisive test. Hokkaido intransitive verbs with an
		acting, controlling subject and intransitive verbs whose sole argument is a patient,
		experiencer, or affected entity alike take the intransitive S forms. Agentive intransitives
		and patientive ones are both one-place verbs; the personal-index system responds to the
		valence count, not to the semantic role <Ref k="nakagawa2024" p="126–127" />. His own
		examples pair a zero-place ambient predicate — which bears no person index at all — with an
		experiential predicate whose sole argument is an affected experiencer indexed by the
		fourth-person S suffix <i lang="ain-Latn">=an</i>, the same suffix an agentive subject of
		the same person would carry.
	</p>

	<Ex
		m="mean cuk ne pe merayke=an ka somo ki no"
		g="be.cold autumn COP thing feel.cold=4.S FOC NEG do ADV"
		tr="It was a cold autumn, but I did not feel cold."
		cite="nakagawa2024:130"
		dial="SAR"
		place="Nakagawa ex. 15, after Kayano 1974a"
		note="The ambient predicate mean 'be cold (of weather)' is zero-place and indexes no participant. The experiential predicate merayke 'feel cold' is one-place; its affected experiencer carries the fourth-person S suffix =an, the same form an agentive fourth-person subject would carry."
	/>

	<p>
		A force-of-nature predicate provides the same diagnostic from a different angle. In
		<A w="rittursere" gl="be rolled by waves" />, the wave element is incorporated into the
		stem and the human undergoer is the sole grammatical subject. That undergoer is indexed by
		<i lang="ain-Latn">=an</i>; the fourth-person object form <i lang="ain-Latn">i=</i> does
		not appear. A patient-like meaning does not move the index toward the O set
		<Ref k="nakagawa2024" p="126–127" />.
	</p>

	<Ex
		ain="rittursere=an kor mom=an ruwe ene an hi ne hine"
		m="rir-tursere=an kor mom=an ru-we ene an hi ne hine"
		g="wave-roll=4.S while flow=4.S track-POSS thus exist NMLZ COP CONJ"
		tr="I was rolled by the waves and drifted along, and so …"
		cite="nakagawa2024:490"
		dial="CHI"
		place="Nakagawa ex. 1119"
		note="Surface rittursere is segmented as rir-tursere following Nakagawa's analysis of the incorporated wave element. Both patientive intransitives carry =an, not the object form i=."
	/>

	<p>
		The first singular supplies a complementary diagnostic. The 1SG row is
		nominative-accusative: <i lang="ain-Latn">ku=</i> serves as both A and S, opposed to the
		object <i lang="ain-Latn">en=</i> <Ref k="bugaeva2012" p="472" />; <Ref k="bugaeva2008"
		p="32" />. A 1SG agentive intransitive and a 1SG experiential intransitive look identical
		in their person index; the object form <i lang="ain-Latn">en=</i> appears only when the
		participant is the O of a transitive verb. The identity belongs to the 1SG row of the
		paradigm and is not tracking control ‹consensus›.
	</p>
	<Ex
		m="Sapporo or un ku=arpa ka somo ki; ku=sesek humi!"
		g="Sapporo ALLAT LOC 1SG=go also NEG COP; 1SG=be.hot INTERJ!"
		tr="I won't go to Sapporo; I'm hot!"
		cite="nakamoto2009"
		dial="CHI"
		place="CD Express Ainugo"
		note="A 1SG agentive intransitive (arpa, controllable 'go') and a 1SG experiential intransitive (sesek, uncontrollable 'be hot') both index the subject with the same ku=. The identical person form is exactly what the claim above predicts: the 1SG row does not distinguish control."
	/>
</S>

<S t="Lexical classes, the unaccusative diagnostic, and incorporation" id="lexical-classes">
	<p>
		Within the intransitive class, a semantically motivated distinction is widely recognized.
		Intransitive verbs whose subject is a semantic agent — labelled <em>S<sub>a</sub></em> —
		behave differently from those whose subject is a semantic patient or undergoer
		(<em>S<sub>o</sub></em>) with respect to certain derivational and syntactic operations
		<Ref k="foleyvanvalin1984" p="29–37" paren />; <Ref k="mithun1984" p="854–856" paren />.
		In Hokkaido Ainu the distinction operates at the lexical and derivational level; it does
		not feed finite person-index assignment.
	</p>

	<p>
		The clearest evidence for an S<sub>a</sub>/S<sub>o</sub> cut comes from noun
		incorporation. The accessible Shibatani source is the 1988 conference abstract, which
		states that the incorporable nominal is the patient subject of an intransitive clause and
		the object of a transitive clause — an unaccusative framing stated in terms of semantic
		role and grammatical relation <Ref k="shibatani1988" p="210–211" />. The abstract
		contains no alignment-type term. A broader active-alignment characterisation sometimes
		associated with <Ref k="shibatani1990" /> cannot be attributed on the basis of the pages
		read; that book could not be independently consulted for this grammar ‹speculative›. The
		noun-incorporation domain, including the patient-subject diagnostic, is developed in
		<Xr ch="noun-incorporation-object">noun incorporation</Xr>.
	</p>

	<p>
		The S<sub>a</sub>/S<sub>o</sub> distinction is therefore a valence and lexical-class
		diagnostic, not an agreement-level split. A patientive intransitive subject is eligible
		for certain derivational processes — notably the unaccusative-style incorporation
		Shibatani describes — that agentive subjects are not. Once the predicate's transitivity
		class is fixed, its sole argument takes the S set regardless of whether that argument is
		an agent, experiencer, or undergoer.
	</p>
</S>

<S t="Valency-changing morphology and the S set" id="valency-morphology">
	<p>
		Valency-changing morphology moves predicates across transitivity classes before person
		indexing is assigned. The antipassive or indefinite-object prefix <A w="i-"
		gl="antipassive / something" /> detransitivises a transitive verb whose object is
		indefinite or backgrounded; the resulting predicate is intransitive, and its sole
		argument — which is an agent — takes the S set, formally identical to that of any
		intransitive experiencer <Ref k="tamura1972" p="35" />; <Ref k="nam2021" p="62–74" />.
		Reflexive <i lang="ain-Latn">yay-</i> and reciprocal <i lang="ain-Latn">u-</i> fill the
		object position and reduce transitivity in the same way. Applicatives and causatives add
		object positions, moving a predicate from intransitive to transitive class
		<Ref k="nakagawa2024" p="196–199" />; <Ref k="sato2023b" p="40" />.
	</p>

	<p>
		The antipassive <i lang="ain-Latn">i-</i> is the case most directly relevant to the
		split-S question, because applying it to a semantically transitive stem produces an
		intransitive whose subject is an agent yet whose S index is formally identical to that of
		an intransitive experiencer. The prefix must also be distinguished from the fourth-person
		object pronoun <i lang="ain-Latn">i=</i>, which is an O-form of the indefinite/fourth
		series alongside A-form <i lang="ain-Latn">a=</i> and S-form <i lang="ain-Latn">=an</i>;
		the two are kept apart by the transitivity class of their host, not by the meaning of
		the argument <Ref k="nam2021" p="62–64" />; <Ref k="bugaeva2021antip" p="235–239" />.
		The antipassive and its origin debate are treated in
		<Xr ch="antipassive-detransitive-i">the detransitive <i lang="ain-Latn">i-</i></Xr>.
	</p>
</S>

<S t="Zero-place predicates and the valence boundary" id="zero-place">
	<p>
		The boundary between zero-place and one-place predicates marks the outer limit of S-set
		assignment. Ambient weather predicates such as <A w="sirsesek" gl="be hot (weather)" />
		and <A w="mean" gl="be cold (weather)" /> are zero-place: they index no participant
		<Ref k="nakagawa2024" p="127–129" />. Felt-temperature predicates such as
		<A w="sesek" gl="feel hot" /> and <A w="merayke" gl="feel cold" /> are one-place and
		carry a person index on their experiencer subject. The zero-place/one-place boundary
		separates argument-free from argument-bearing predicates; it is a valence distinction,
		not an agentivity one.
	</p>

	<p>
		Ijäs treats weather expressions as avalent and places ambient forms in that category;
		Nakagawa agrees on the category but leaves <i lang="ain-Latn">apto as</i> 'rain falls'
		analytically uncertain, since <i lang="ain-Latn">apto</i> 'rain' is an autonomous noun
		that can function as a subject in other constructions <Ref k="nakagawa2024" p="128–130" />;
		<Ref k="ijas2023" /> ‹contested›. Property-concept predicates —
		<A w="pirka" gl="be good" />, <A w="poro" gl="be big" />,
		<A w="hure" gl="be red / become red" /> and related items — are one-place intransitives
		in the baseline Hokkaido analysis. Ijäs notes that descriptive verbs also carry inchoative
		readings, so a single lexeme spans a stative and its onset without changing the person
		index. Both uses index the sole argument as S. Their predication syntax is treated in
		<Xr ch="property-concept-predication" />.
	</p>
</S>

<S t="Ijäs's L2–L3 claims in this domain" id="ijas">
	<p>
		Ijäs's learner grammar organises valence through the metaphor of verbal "pockets": the
		verb carries participant information obligatorily, while external noun phrases are optional
		cross-references. Analytically this is the head-marking architecture of
		<Ref k="nichols1986" paren />, used also by Satō <Ref k="sato2025a" p="361" />. Her
		Lesson 2 states that intransitive verbs take one argument and Lesson 3 that transitives
		take two; these arity classes align with Nakagawa's zero/one/two/three-place distinctions
		and Satō's valence discussion <Ref k="nakagawa2024" p="124–128" />;
		<Ref k="sato2023b" p="37–47" />; <Ref k="ijas2023" />.
	</p>

	<p>
		Two Ijäs formulations that bear on the split-S question carry caveats. Her Lesson 9
		account of <i lang="ain-Latn">i-</i> as an antipassive filling the object position with a
		generic 'thing/place' meaning aligns in substance with the Bugaeva line; Satō uses a
		derivational-prefix label without the term 'antipassive' <Ref k="ijas2023" />;
		<Ref k="sato2008" p="232–233" />; <Ref k="bugaeva2021antip" p="235–236" /> ‹contested›.
		Her Lesson 3 formulation that the indirect object falls between subject and object in
		ditransitives is a pedagogical word-order simplification; Nakagawa's ditransitive examples
		show no fixed order for the two non-subject noun phrases <Ref k="nakagawa2024"
		p="363–365" />; <Ref k="ijas2023" /> ‹contested›.
	</p>
</S>

<S t="The alignment label and the broader debate" id="debate">
	<p>
		For Hokkaido person indexing, the secure description is mixed morphological alignment by
		person row, with no productive split-S agreement. Bugaeva's formulation remains the
		standard account: neutral alignment in second and third person, nominative-accusative in
		1SG, and tripartite in 1PL.EXCL and the indefinite/fourth person <Ref k="bugaeva2012"
		p="472, 498" />; <Ref k="bugaeva2008" p="32" />. Nakagawa's valence chapter blocks an
		agentivity-conditioned reading of the S column <Ref k="nakagawa2024" p="126–127" />.
		Satō frames the same system as head-marking and argues for a zero third-person affix on
		the basis of the two-index cap and ditransitive restrictions; Nakagawa denies a
		third-person exponent. That dispute affects the model of the zero row but produces no
		active/stative split among the overt S forms <Ref k="nakagawa2024" p="169" />;
		<Ref k="sato2023b" p="39, 47" />; <Ref k="sato2025a" p="369" /> ‹contested›.
	</p>

	<p>
		Sakhalin work sharpens the typological contrast. Dal Corso rejects a tripartite component
		for ‹SA› Sakhalin, proposing a mixed nominative-neutral-inverse analysis, and explicitly
		cautions that his diachrony and hierarchical account may not apply to Hokkaido
		<Ref k="dalcorso2025align" p="187–188, 200, 213" /> ‹contested›. The tripartite,
		hierarchical, and inverse positions are weighed against one another in
		<Xr ch="alignment-hierarchical-and-the-debate" />; the Sakhalin contrast leaves the
		Hokkaido picture intact.
	</p>

	<p>
		The productive-split question has one remaining open edge. The literature does not yet
		provide a verb-by-verb inventory of whether any Hokkaido intransitive verb alternates
		between A-like and O-like S marking according to control or discourse construal. Such an
		inventory would require a raw-token study across the corpus; the normalised frequency layer
		strips personal-affix clitics and cannot supply per-affix counts for individual S forms.
		No example in the material consulted shows an intransitive undergoer indexed by the object forms
		<i lang="ain-Latn">en=</i>, <i lang="ain-Latn">un=</i>, or <i lang="ain-Latn">i=</i>;
		the available evidence supports the uniform-S generalization as the correct synchronic
		description ‹speculative›.
	</p>
</S>
