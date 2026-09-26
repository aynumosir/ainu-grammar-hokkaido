<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Structural profile" id="typological-place">
	<p>
		Hokkaido Ainu combines verb-final constituent order with extensive prefixation, verbal person
		marking, and noun incorporation. Its morphology is predominantly agglutinating: a verb may
		contain several elements whose functions can be distinguished, including person indexes,
		valency-changing prefixes, and an incorporated noun. These properties underlie its description
		as a polysynthetic, predominantly head-marking language
		<Ref k="bugaeva2012" p="461–463" />; <Ref k="bugaeva2022" p="Ch.1 §1" />.
	</p>
	<p>
		Ainu's classification as a language isolate concerns the absence of an established relationship
		with another language family <Ref k="bugaeva2012" p="461" />. Typological comparison asks a
		different question: how its structures resemble those of other languages. Bugaeva relates the
		concentration of head-marking features to languages around the Pacific Rim and discusses its
		historical implications <Ref k="bugaeva2022" p="Ch.1 §7" />. The proposed external relationships
		and the evidence offered for them are examined in <Xr ch="genetic-position-macro-comparison" />.
	</p>
</S>

<S t="Person marking on the verb" id="head-marking">
	<p>
		In a head-marking construction, morphology on the head expresses a relation to its dependents
		<Ref k="nichols1986" />. Ainu verbs illustrate this through their person indexes. The prefix
		<i lang="ain-Latn">ku=</i> identifies a first-person singular subject,
		<i lang="ain-Latn">en=</i>
		a first-person singular object, and <i lang="ain-Latn">e=</i> a second-person singular argument.
		Third person has no overt index. Independent nouns and pronouns used as subjects and objects
		lack nominative and accusative inflection
		<Ref k="bugaeva2022" p="Ch.1 §4.1" />; <Ref k="nakagawa2024" p="163–169" />.
	</p>
	<Ex
		m="topenpe hekattar ku=kore"
		g="sweets children 1SG.A=give"
		tr="I gave the children sweets."
		cite="nakagawa2024:127"
		dial="HK"
		place="Nakagawa ex. 11a"
		note="The two objects are bare noun phrases. The verb indexes its first-person subject; its third-person objects have no overt index. The source does not specify a dialect for this example."
	/>
	<p>
		Person marking permits an argument to remain unexpressed when its reference is recoverable.
		Overt noun phrases identify participants, introduce them into discourse, or give them emphasis.
		Since third person is zero-marked and some other indexes serve more than one grammatical role,
		person morphology alone does not resolve every interpretation
		<Ref k="bugaeva2022" p="Ch.1 §§4.1, 4.3" />. Argument expression and constituent order are
		treated in <Xr ch="argument-realization-indexing" /> and
		<Xr ch="constituent-order-head-final" />.
	</p>
	<p>
		The lack of core case inflection coexists with postpositions expressing spatial and other
		peripheral relations. Bugaeva describes this as borderline case marking and distinguishes
		postpositional particles from a less uniform group of postpositional adverbs
		<Ref k="bugaeva2022" p="Ch.1 §4.4" />. At the level of complex sentences, her analysis
		identifies dependent-marking patterns in relative clauses and most subordinate clauses
		<Ref k="bugaeva2022" p="Ch.1 §6" />. The term
		<em>predominantly head-marking</em> allows for this variation between constructions.
	</p>
</S>

<S t="Possession" id="possession">
	<p>
		A possessed noun can carry both an index of its possessor and a
		<Xr ch="concept-form-affiliative-form">possessed form</Xr>, also called an affiliative form. In
		<i lang="ain-Latn">ku=yup-ihi</i>
		'my elder brother', the first-person prefix identifies the possessor and
		<i lang="ain-Latn">-ihi</i>
		marks the possessed form. A third-person possessor has no overt person prefix
		<Ref k="bugaeva2022" p="Ch.1 §5.1.1" />.
	</p>
	<Ex
		m="ku=yup-ihi kani en=kik"
		g="1SG.POSS=elder.brother-POSS 1SG 1SG.O=hit"
		tr="My elder brother hit me."
		cite="bugaeva2022:Ch.1 §4.1, ex. 5"
		dial="SAR"
		note="After Tamura (1993 [1979]: 15), reproduced by Bugaeva. The independent pronoun kani is optional in the cited example. Boundaries and glosses follow the conventions used here."
	/>
	<p>
		Possessive constructions depend on the noun. Bugaeva distinguishes obligatorily possessed nouns,
		including many body-part terms and some kin terms, from nouns that express ownership through <A
			w="kor"
			gl="have"
		/>. The latter construction contains a prenominal clause, as in
		<i lang="ain-Latn">ku=kor cep</i> 'my fish', literally 'fish that I have'
		<Ref k="bugaeva2022" p="Ch.1 §5.1" />. Even within kin terminology, the two patterns occur;
		semantic labels such as 'body part' or 'relative' are insufficient to predict every noun's
		behaviour. See <Xr ch="alienable-inalienable-split" /> and
		<Xr ch="kinship-honorific-possession" />.
	</p>
</S>

<S t="Polysynthesis and incorporation" id="polysynthesis">
	<p>
		Person indexes and derivational morphology can combine with lexical material within the verb.
		The applicative prefixes <i lang="ain-Latn">e-</i>,
		<i lang="ain-Latn">ko-</i>, and
		<i lang="ain-Latn">o-</i> introduce an additional object with a role determined by the prefix
		and the base verb. Incorporation places a noun within a verbal complex. The two processes can
		interact: an applicative object may itself be incorporated
		<Ref k="bugaeva2022" p="Ch.1 §§4.5–4.6" />. The individual constructions are described in
		<Xr ch="applicative-system-overview" /> and <Xr ch="noun-incorporation-object" />.
	</p>
	<p>
		Incorporation has several effects on argument structure. Incorporating an object can remove the
		corresponding independent object position. Incorporation of a noun denoting a natural phenomenon
		can produce a verb with no remaining argument; body-part incorporation may leave an argument
		referring to the possessor. Bugaeva also discusses incorporation of a transitive subject in
		constructions involving natural or supernatural forces and insects
		<Ref k="bugaeva2022" p="Ch.1 §§4.6–4.7" />. These differences are examined in
		<Xr ch="noun-incorporation-subject-possessor-stranding" />.
	</p>
	<Ex
		m="sir-wen yakun somo k=arpa"
		g="appearance-be.bad if NEG 1SG.S=go.SG"
		tr="If the weather is bad, I will not go."
		cite="hattori1964:322; bugaeva2022:Ch.1 §4.6, ex. 35"
		dial="HK"
		note="Hattori's example as reproduced by Bugaeva. The noun sir is incorporated into wen, giving a weather predicate with no remaining independent argument. The source passage consulted does not identify the dialect. Boundaries, glosses, and translation follow the conventions used here."
	/>
	<p>
		Shibatani describes polysynthetic formations as especially characteristic of epic language, with
		more analytic expression in colloquial speech <Ref k="shibatani1990" p="16" />. Bugaeva's
		account of open head-marking emphasizes the range of lexical and grammatical material that a
		verb can contain <Ref k="bugaeva2022" p="Ch.1 §4.7" />. The label <em>polysynthetic</em>
		therefore describes a structural capacity; its frequency and elaboration vary across registers. Questions
		of productivity and syntactic analysis belong to
		<Xr ch="noun-incorporation-oblique-polysynthesis-debate" />.
	</p>
</S>

<S t="Constituent order" id="sov">
	<p>
		The basic order is subject–object–verb. Modifying clauses precede their head nouns, and
		postpositions follow their complements. Within this verb-final pattern, the order of overt
		arguments has some flexibility, particularly in double-object constructions
		<Ref k="bugaeva2022" p="Ch.1 §§4.3–4.4" />.
	</p>
	<p>
		Discourse also permits a participant to be specified after an earlier predicate. Bugaeva
		discusses examples in which an initial verb phrase is followed by a noun phrase and the light
		verb <i lang="ain-Latn">ki</i> 'do'. The later phrase clarifies the subject or object of the
		earlier expression <Ref k="bugaeva2022" p="Ch.1 §4.3" />. Such patterns are relevant to
		<Xr ch="pragmatic-word-order-dislocation">dislocation</Xr> and do not require a single rigid order
		for every stretch of speech.
	</p>
</S>

<S t="Alignment and the fourth person" id="alignment">
	<p>
		Alignment describes which grammatical roles share a form. In the person paradigm, S denotes the
		subject of an intransitive verb, A the subject of a transitive verb, and O its object. The Saru
		paradigm combines several patterns
		<Ref k="bugaeva2022" p="Ch.1 §4.1, table 1" />;
		<Ref k="nakagawa2024" p="165–169" />:
	</p>
	<table>
		<thead><tr><th>Person</th><th>S</th><th>A</th><th>O</th><th>Pattern</th></tr></thead>
		<tbody>
			<tr
				><td>First singular</td><td><i lang="ain-Latn">ku=</i></td><td
					><i lang="ain-Latn">ku=</i></td
				><td><i lang="ain-Latn">en=</i></td><td>S=A; O distinct</td></tr
			>
			<tr
				><td>First plural exclusive</td><td><i lang="ain-Latn">=as</i></td><td
					><i lang="ain-Latn">ci=</i></td
				><td><i lang="ain-Latn">un=</i></td><td>Three distinct forms</td></tr
			>
			<tr
				><td>Second singular</td><td><i lang="ain-Latn">e=</i></td><td><i lang="ain-Latn">e=</i></td
				><td><i lang="ain-Latn">e=</i></td><td>S=A=O</td></tr
			>
			<tr
				><td>Second plural</td><td><i lang="ain-Latn">eci=</i></td><td
					><i lang="ain-Latn">eci=</i></td
				><td><i lang="ain-Latn">eci=</i></td><td>S=A=O</td></tr
			>
			<tr><td>Third</td><td>Ø</td><td>Ø</td><td>Ø</td><td>No overt index</td></tr>
			<tr
				><td>Fourth</td><td><i lang="ain-Latn">=an</i></td><td><i lang="ain-Latn">a=</i></td><td
					><i lang="ain-Latn">i=</i></td
				><td>Three distinct forms</td></tr
			>
		</tbody>
	</table>
	<p>
		The first singular has nominative–accusative alignment; the first plural exclusive and fourth
		person distinguish all three roles. Second and third persons are neutral. Combinations of
		persons impose further conditions: in Saru, <i lang="ain-Latn">eci=</i> also expresses a
		first-person subject acting on a second-person object
		<Ref k="bugaeva2022" p="Ch.1 §4.1" />. The full account of these combinations is in
		<Xr ch="person-marking-architecture" /> and <Xr ch="eci-portmanteau-and-second-plural" />.
	</p>
	<p>
		The fourth-person forms have inclusive, indefinite, honorific, and logophoric uses. In oral
		narrative they may identify the protagonist whose speech supplies the narrative perspective; in
		other contexts they can include speaker and addressee or refer to an unspecified participant <Ref
			k="bugaeva2022"
			p="Ch.1 §4.1"
		/>. Sources differ in how they organize and name these functions <Ref
			k="bugaeva2008"
			p="32–43"
		/>. See
		<Xr ch="indefinite-fourth-person-paradigm" /> and
		<Xr ch="logophoric-narration-and-reported-discourse" />.
	</p>
</S>

<S t="Further grammatical distinctions" id="unusual-features">
	<S t="Nouns and property predicates" id="noun-classes">
		<p>
			Ordinary nouns and locative nouns differ in spatial expressions. An ordinary noun commonly
			combines with a relational noun before a locative particle; the relational noun specifies a
			place such as the interior, top, or vicinity of the referent
			<Ref k="bugaeva2022" p="Ch.1 §4.4" />. Their distribution is described in
			<Xr ch="relational-and-spatial-nouns" />.
		</p>
		<p>
			Many property concepts are expressed by verbs. A word such as <A w="pirka" gl="be good" />
			can serve as a predicate and modify a noun. Bugaeva includes such forms among intransitive verbs
			<Ref k="bugaeva2012" p="470" />. Their behaviour and the terminology used in different
			descriptions are discussed in <Xr ch="no-adjective-class-property-verbs" />.
		</p>
	</S>
	<S t="Number" id="vigesimal">
		<p>
			Verbal number can distinguish a single participant from several participants, or a single
			result from repeated or multiple results. For intransitive verbs it typically concerns the
			subject; for transitive verbs, the object or the results of the action. Both suppletive stems
			and affixation contribute to these distinctions
			<Ref k="bugaeva2022" p="Ch.1 §4.2" />. See <Xr ch="suppletive-verbal-number" />. The separate
			system of counting expressions is described in <Xr ch="vigesimal-numeral-system" />.
		</p>
	</S>
	<S t="Evidential expressions" id="evidential">
		<p>
			The nouns <i lang="ain-Latn">ruwe</i>, <i lang="ain-Latn">hawe</i>,
			<i lang="ain-Latn">siri</i>, and <i lang="ain-Latn">humi</i> occur after clauses in
			expressions concerning evidence or the basis of a statement. Their lexical associations
			include traces, voice, appearance, and sound or feeling. They can occur with the copula
			<i lang="ain-Latn">ne</i>, but also participate in other constructions
			<Ref k="bugaeva2022" p="Ch.1 §6.2" />. Bugaeva analyses the clause as a complement of a
			possessed noun. The distribution and interpretation of the four forms are treated in
			<Xr ch="evidential-schema-overview" /> and the individual evidential chapters.
		</p>
	</S>
</S>

<S t="Summary of structural properties" id="feature-bundle">
	<table>
		<thead><tr><th>Domain</th><th>Principal pattern</th><th>Further discussion</th></tr></thead>
		<tbody>
			<tr
				><td>Basic constituent order</td><td>Verb-final; commonly SOV</td><td
					><Xr ch="constituent-order-head-final" /></td
				></tr
			>
			<tr
				><td>Core grammatical relations</td><td
					>Person indexes on verbs; no nominative or accusative inflection on nouns</td
				><td><Xr ch="argument-realization-indexing" /></td></tr
			>
			<tr
				><td>Person alignment</td><td>Different patterns in different person rows</td><td
					><Xr ch="person-marking-architecture" /></td
				></tr
			>
			<tr
				><td>Possession</td><td
					>Possessed noun forms and constructions with <i lang="ain-Latn">kor</i></td
				><td><Xr ch="concept-form-affiliative-form" /></td></tr
			>
			<tr
				><td>Valency</td><td>Applicatives, causatives, detransitivization, and incorporation</td><td
					><Xr ch="valency-voice-overview" /></td
				></tr
			>
			<tr
				><td>Spatial relations</td><td>Locative nouns and postpositions</td><td
					><Xr ch="postpositions-local-case-and-motion-events" /></td
				></tr
			>
			<tr
				><td>Verbal number</td><td>Suppletion and affixation</td><td
					><Xr ch="suppletive-verbal-number" /></td
				></tr
			>
			<tr
				><td>Complex sentences</td><td
					>Prenominal modifying clauses and several clause-linking constructions</td
				><td><Xr ch="clause-linkage-overview" /></td></tr
			>
		</tbody>
	</table>
</S>
