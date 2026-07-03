<!-- src/lib/grammar/chapters/nonverbal-predicate-tam-negation.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		All three non-dynamic predicate types that occupy the predicate slot in a Hokkaido Ainu simple
		clause — the <Xr ch="copula-ne-predicate-nominals">copula <i lang="ain-Latn">ne</i></Xr>, the
		<Xr ch="existential-locational-an-oka"
			>existential <i lang="ain-Latn">an</i> (sg) / <i lang="ain-Latn">oka(y)</i> (pl)</Xr
		>, and
		<Xr ch="property-concept-predication">property-concept verbs</Xr> — are verbs, and TAM and
		negation attach to them through the same clausal mechanisms that operate on action verbs <Ref
			k="nakagawa2024"
			p="132, 359–361"
		/>; <Ref k="sato2008" p="20–22" />. The full TAM and aspect system is described in
		<Xr ch="tam-overview" />; the evidential formal-noun frame in
		<Xr ch="evidential-schema-overview" />; the person-marking that each predicate type takes in
		<Xr ch="person-marking-architecture" />. This chapter maps the interface: where each predicate
		type departs from the verbal default in its negation strategy, how the perfect auxiliary
		<i lang="ain-Latn">a</i> attaches, how the inchoative reading arises without any dedicated
		morphology, and how the <i lang="ain-Latn">ne</i> / <i lang="ain-Latn">an</i> alternation at
		the clause edge encodes illocutionary force on non-dynamic predicates.
	</p>

	<p>
		The three predicate types diverge most sharply in their negation strategies. The copula
		<i lang="ain-Latn">ne</i> has a dedicated frame, <i lang="ain-Latn">X ka somo ne</i>, that
		inserts the focus particle <i lang="ain-Latn">ka</i> and the negator
		<i lang="ain-Latn">somo</i> between the predicate complement and the copula. The existential
		draws on the suppletive lexical negative <i lang="ain-Latn">isam</i>. Property-concept verbs,
		being ordinary intransitive stative verbs, take the standard clausal negation described in
		<Xr ch="negation-somo-standard-clausal" />. Possessive <A w="kor" gl="have" /> similarly has
		the suppletive negative <A w="sak" gl="lack" />; that construction is treated in
		<Xr ch="predicative-possession-clauses" />.
	</p>

	<table>
		<caption>Negation strategies by non-dynamic predicate type</caption>
		<thead>
			<tr>
				<th>predicate type</th>
				<th>affirmative</th>
				<th>negation strategy</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>copula <i lang="ain-Latn">ne</i></td>
				<td><i lang="ain-Latn">[Compl] ne</i></td>
				<td><i lang="ain-Latn">[Compl] ka somo ne</i></td>
				<td><Ref k="sato2008" p="22" />; <Ref k="nakagawa2024" p="407" /></td>
			</tr>
			<tr>
				<td>existential <i lang="ain-Latn">an</i> / <i lang="ain-Latn">oka(y)</i></td>
				<td><i lang="ain-Latn">an</i> / <i lang="ain-Latn">oka(y)</i></td>
				<td>suppletive <i lang="ain-Latn">isam</i>; alternatively <i lang="ain-Latn">somo an</i></td>
				<td><Ref k="nakagawa2024" p="450" />; <Ref k="kanazawa1898" /></td>
			</tr>
			<tr>
				<td>property-concept verb</td>
				<td><i lang="ain-Latn">PROP-V</i></td>
				<td>
					<i lang="ain-Latn">somo PROP-V</i> / <i lang="ain-Latn">PROP-V ka somo ki</i>
				</td>
				<td><Ref k="nakagawa2024" p="127" /></td>
			</tr>
			<tr>
				<td>possessive <i lang="ain-Latn">kor</i></td>
				<td><i lang="ain-Latn">[Possessor] [Possessed] kor</i></td>
				<td>suppletive <i lang="ain-Latn">sak</i></td>
				<td><Ref k="nakagawa2024" p="323" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		Typologically, the distribution maps onto the hierarchy of non-dynamic predication that
		<Ref k="stassen1997" paren /> identifies: equative/classificatory (copula
		<i lang="ain-Latn">ne</i>), locational/existential (<i lang="ain-Latn">an</i>/<i lang="ain-Latn"
			>oka(y)</i>), and attributive (property verbs) each carry a distinct negation exponent. The
		recourse to dedicated negative lexemes for the existential and possessive types, alongside a
		frame strategy for the copula, is consistent with the cross-linguistic pattern whereby
		existential and possessive predicates frequently recruit non-standard negation
		<Ref k="miestamo2005" paren /> ‹consensus›.
	</p>
</S>

<S t="Negation of copular predicates: the ka somo ne frame" id="copula-negation">
	<p>
		The standard negation of a predicate-nominal clause is
		<i lang="ain-Latn">X ka somo ne</i>, where the focus particle
		<i lang="ain-Latn">ka</i> 'even/also' and the negator <i lang="ain-Latn">somo</i> insert
		between the complement nominal and the copula <Ref k="sato2008" p="22" />;
		<Ref k="nakagawa2024" p="407" />:
	</p>

	<Ex
		m="tan pe anak seta ka somo ne wa"
		g="this NMLZ TOP dog even NEG COP CONJ"
		tr="This is not a dog."
		cite="sato2008:22"
		dial="SAR"
	/>

	<p>
		The alternative frame <i lang="ain-Latn">*ne ka somo ki</i> — negating
		<i lang="ain-Latn">ne</i> via the standard verbal pattern <i lang="ain-Latn">V ka somo ki</i>
		— is ungrammatical <Ref k="sato2008" p="22" />; <Ref k="nakagawa2024" p="407" />. Both Satō
		and Nakagawa treat this as the defining idiosyncrasy that sets the copula apart from ordinary
		verbs: its negation is expressed by modifying the complement position, not by post-verbal
		negation of the verb itself. In the affirmative, the copula takes the transitive-subject
		person set — <i lang="ain-Latn">okkayo ku=ne</i> 'I am a man' — because it is analysed as a
		2-place verb with a nominal complement <Ref k="nakagawa2024" p="132" />;
		<Ref k="refsing1986" p="145" />. In the <i lang="ain-Latn">ka somo ne</i> frame, the copula
		frequently carries no overt subject affix; this person-marking loss in the negated copular
		frame is noted but not explained by any read primary source ‹speculative› (nukopoli,
		aynu-corpora Discord 2023; <Ref k="aynucorporadiscord" />). The observation is consistent with
		the third-person zero realisation that <i lang="ain-Latn">ne</i> shows in affirmative clauses
		with 3rd-person subjects, but its extension to other persons in the negative frame is a
		genuine micro-gap. Person marking on the copula is set out in
		<Xr ch="person-marking-architecture" /> and
		<Xr ch="copula-ne-predicate-nominals" />.
	</p>

	<p>
		Separate from inner-scope <i lang="ain-Latn">ka somo ne</i>, the construction
		<i lang="ain-Latn">ruwe somo ne</i> is an outer rhetorical frame in which
		<i lang="ain-Latn">somo ne</i> scopes over the evidential formal noun
		<i lang="ain-Latn">ruwe</i> rather than over the complement of the copula; it is treated in
		<Xr ch="ruwe-ne-inferential" />.
	</p>
</S>

<S t="TAM on copular predicates: the perfect and the ne/an clause-edge alternation" id="copula-tam">
	<p>
		The perfect/perfective auxiliary <i lang="ain-Latn">a</i> attaches to the copula in the same
		position as to any verb — after the finite verb and before any following formal-noun evidential
		tail — and yields a completed or previously-true copular state:
	</p>

	<Ex
		m="pon cápe ku=ne a kusu"
		g="small cat 1SG.A=COP PFV PURP"
		tr="Because I was a small cat —"
		cite="ainukoraci1991"
		dial="CHI"
		note="浜田隆史, アイヌタイムズ [ainu-times/024/3#4]. The perfective auxiliary a follows ku=ne, locating the copular state in the past. The clause links to what follows via the purposive-causal kusu."
	/>

	<p>
		All three non-dynamic predicate types share a static ⇄ inchoative duality that is read off
		context without dedicated morphology: <i lang="ain-Latn">ne</i> covers both 'be X' and
		'become X', <i lang="ain-Latn">an</i>/<i lang="ain-Latn">oka(y)</i> both 'exist' and
		'appear/come into being', and property verbs both 'be big' and 'grow big'
		<Ref k="nakagawa2024" p="118–119" />; <Ref k="shibatani1990" p="19" />;
		<Ref k="nakagawa2022pos" p="477" />. The sequence
		<i lang="ain-Latn">[complement] ne</i> + existential <i lang="ain-Latn">an</i> /<i
			lang="ain-Latn">oka=an</i> makes the inchoative reading salient — a community member notes
		that <i lang="ain-Latn">~ne an</i> corresponds to Japanese 〜になる 'become', while
		<i lang="ain-Latn">~ne kor</i> is not idiomatic ‹contested› (thegodofneet, aynu-corpora
		Discord 2024; <Ref k="aynucorporadiscord" />). This is consistent with the general dynamic
		reading that <i lang="ain-Latn">an</i> lends to a preceding predicate in the aspect periphrasis
		(cf. <i lang="ain-Latn">V wa an</i> resultative); the aspect-auxiliary use of the existential
		is treated in <Xr ch="existential-aspect-an-oka" />.
	</p>

	<p>
		The <i lang="ain-Latn">ne</i> / <i lang="ain-Latn">an</i> alternation at the right clause edge
		is grammaticalized into an illocutionary distinction. With the formal-noun evidential frame,
		the copula <i lang="ain-Latn">ne</i> closes the declarative and the existential
		<i lang="ain-Latn">an</i> closes the content question, while the bare formal noun marks polar
		questions and exclamations <Ref k="nakagawa2024" p="392–396, §11.2.1–11.2.4" />. The pattern
		holds identically for non-dynamic predicates and verbal predicates:
	</p>

	<table>
		<caption>Formal-noun frame: illocutionary alternation at the clause edge</caption>
		<thead>
			<tr>
				<th>frame</th>
				<th>illocution</th>
				<th>example</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">NMLZ + ne</i></td>
				<td>declarative</td>
				<td><i lang="ain-Latn">a=ye hawe ne</i> 'it is said (that …)'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">NMLZ + an?</i></td>
				<td>content question (with question word)</td>
				<td><i lang="ain-Latn">hemanta ruwe an?</i> 'why (is it that …)?'</td>
			</tr>
			<tr>
				<td>bare <i lang="ain-Latn">NMLZ?</i></td>
				<td>polar question / exclamation</td>
				<td><i lang="ain-Latn">ruwe?</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">NMLZ + un</i></td>
				<td>affirmative reply</td>
				<td><i lang="ain-Latn">ruwe un</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		The ordering constraint confirms the clause's layered structure: the formal noun and its
		predicate sit outside inner-clause TAM material. The form
		<i lang="ain-Latn">kusu ne ruwe ne</i> 'because (it is a fact that)' is well-formed, but
		<i lang="ain-Latn">*ruwe ne kusu ne</i> is not, because a further
		<i lang="ain-Latn">ne</i>-predication cannot embed over an already-closed evidential
		<Ref k="nakagawa2024" p="393" /> — confirmed against the primary source by a community member
		(nukopoli, aynu-corpora Discord 2024; <Ref k="aynucorporadiscord" />). The
		<Xr ch="concept-form-affiliative-form">possessed form</Xr> morphology of the formal nouns
		(<i lang="ain-Latn">ru-we</i>, <i lang="ain-Latn">haw-e</i>, <i lang="ain-Latn">sir-i</i>,
		<i lang="ain-Latn">hum-i</i>) and the full evidential paradigm are treated in
		<Xr ch="evidential-schema-overview" /> and <Xr ch="ruwe-ne-inferential" />; the interrogative
		system is treated in <Xr ch="interrogative-strategies-question-particles" />.
	</p>
</S>

<S t="The existential an/oka(y) and its suppletive negative isam" id="existential-negation">
	<p>
		The existential <i lang="ain-Latn">an</i> (sg) and <i lang="ain-Latn">oka(y)</i> (pl) do not
		take the <i lang="ain-Latn">somo</i> frame as their primary negation. The lexical verb
		<A w="isam" gl="not exist, be absent" /> is the suppletive negative partner of the existential
		pair <Ref k="nakagawa2024" p="450" />; <Ref k="bugaeva2012" p="496" />. The three-way
		suppletion:
	</p>

	<table>
		<caption>Existential suppletion: singular, plural, negative</caption>
		<thead>
			<tr>
				<th></th>
				<th>singular</th>
				<th>plural</th>
				<th>negative (both numbers)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>form</td>
				<td><i lang="ain-Latn">an</i></td>
				<td><i lang="ain-Latn">oka</i> / <i lang="ain-Latn">okay</i></td>
				<td><i lang="ain-Latn">isam</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		<i lang="ain-Latn">isam</i> is an intransitive verb that takes person affixes normally:
		<i lang="ain-Latn">e=isam</i> 'you are gone/absent'. Historical depth confirms its
		stability: the form <i lang="ain-Latn">isam</i> 'ない' is attested in the 1630
		<em>Matsumae no koto</em> wordlist, making the negative existential one of the oldest recorded
		Ainu predicate forms. The etymological decomposition of
		<i lang="ain-Latn">isam</i> as <i lang="ain-Latn">i-</i> (antipassive) + root
		<i lang="ain-Latn">*sam</i> is ‹speculative› and is proposed independently by
		<Ref k="dalcorso2025neg" p="41–42" paren /> and by <Ref k="ijas2023" /> (lesson 9); see
		<Xr ch="negation-existential-possessive-isam" /> for fuller discussion. The
		<i lang="ain-Latn">somo an</i> construction is available as an alternative where a
		denial reading is required rather than the lexical 'absence' meaning:
	</p>

	<Ex
		m="nisatta somo k=an"
		g="tomorrow NEG 1SG.S=exist"
		tr="I won't be here tomorrow."
		cite="kanazawa1898"
		dial="SAR"
	/>

	<p>
		The existential negative also feeds the aspect system.
		<i lang="ain-Latn">V wa isam</i> expresses that a state of affairs has become absent as the
		result of the preceding event — roughly equivalent to Japanese 〜てしまう 'V and it's gone'
		<Ref k="nakagawa2024" p="452, §15.2.1" />. This mirrors the resultative
		<i lang="ain-Latn">V wa an</i> (〜ている), in which the existential carries the positive
		persistent state. Both the aspect periphrasis and the number suppletion of
		<i lang="ain-Latn">an</i>/<i lang="ain-Latn">oka(y)</i> are treated in
		<Xr ch="existential-aspect-an-oka" />; the full locational and existential semantics in
		<Xr ch="existential-locational-an-oka" />.
	</p>
</S>

<S t="Property-concept predicates: standard clausal negation" id="property-negation">
	<p>
		Property-concept verbs (<A w="pirka" gl="be good" />, <A w="poro" gl="be big" />,
		<A w="wen" gl="be bad" />, <A w="pon" gl="be small" />, <A w="hure" gl="be red" /> and their
		class) are intransitive stative verbs and take the standard negation that any intransitive verb
		takes: pre-verbal <i lang="ain-Latn">somo V</i>, or the post-verbal frame
		<i lang="ain-Latn">V ka somo ki</i> <Ref k="nakagawa2024" p="127" />:
	</p>

	<Ex
		m="merayke=an ka somo ki no"
		g="feel.cold=4.S even NEG do and"
		tr="I don't feel cold, and …"
		cite="nakagawa2024:127"
		dial="SAR"
		note="Nakagawa ex. 15. The post-verbal ka somo ki no frame negates the property verb merayke 'feel cold'. The 4th-person S suffix =an marks the narrative first person; contrast the 0-place meteorological verb mean 'it is cold (weather)', which has no subject index."
	/>

	<p>
		The divergence between property-verb negation (<i lang="ain-Latn">somo V</i> /
		<i lang="ain-Latn">V ka somo ki</i>) and copula negation (<i lang="ain-Latn">X ka somo ne</i>)
		is the direct morphosyntactic reflex of the difference in predicate class: the copula is a
		special 2-place verb with an idiosyncratic negation frame, while property verbs are ordinary
		intransitives <Ref k="nakagawa2024" p="118, 407" />; <Ref k="nakagawa2022pos" p="474–475" />.
		The error of inserting the copula after a property word — <i lang="ain-Latn">*pirka ne</i>
		'be-good COP' — is flagged by Nakagawa as the characteristic learner mistake, and its
		ungrammaticality confirms that the <i lang="ain-Latn">ka somo ne</i> frame is copula-specific
		and does not extend to the property-verb predicate type
		<Ref k="nakagawa2024" p="119" />. The word-class argument for property verbs as intransitive
		verbs is made in <Xr ch="no-adjective-class-property-verbs" />.
	</p>
</S>

<S t="Scope of negation within the evidential frame" id="negation-scope">
	<p>
		When a non-dynamic predicate is closed by the formal-noun evidential frame, negation sits
		inside the evidential: the predicate is negated before the formal noun, and the
		<i lang="ain-Latn">ruwe ne</i> (or other formal-noun + copula) remains outside the scope of
		negation, predicating the negated content as recognised fact.
	</p>

	<Ex
		m="nep eci=e-sirkirap ka somo ki ru-we ne na"
		g="something 2PL.A=APPL-worry even NEG do track-POSS COP FIN"
		tr="You will not be troubled by anything."
		cite="dalcorso2018:145"
		dial="SAR"
		place="Kaizawa Tsurushino, Biratori; Dal Corso siglum KAY: 2-2,18"
		note="Dal Corso ex. 128. The negation ka somo ki targets the verb sirkirap and sits inside the evidential frame; ruwe ne predicates the whole negated proposition as an established fact."
	/>

	<p>
		For copular predicates under <i lang="ain-Latn">ruwe ne</i>, the expected sequence is
		<i lang="ain-Latn">[complement] ka somo ne ruwe ne</i>: the
		<i lang="ain-Latn">ka somo ne</i> frame negates the copular predication, and the evidential
		closes over it. The layering is confirmed by the same ordering constraint noted above:
		<i lang="ain-Latn">kusu ne ruwe ne</i> is licit because
		<i lang="ain-Latn">kusu ne</i> is inner-clause intentional material, but
		<i lang="ain-Latn">*ruwe ne kusu ne</i> is not, because the evidential cannot be embedded
		under a further copular predication <Ref k="nakagawa2024" p="393" />. The interaction of
		negation and polarity items within the evidential scope is treated in
		<Xr ch="negation-polarity-items-scope" />; the structure of the evidential frame in
		<Xr ch="ruwe-ne-inferential" />.
	</p>
</S>
