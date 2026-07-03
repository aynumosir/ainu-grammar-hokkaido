<!-- src/lib/grammar/chapters/eci-portmanteau-and-second-plural.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="The two functions of eci=" id="two-functions">
	<p>
		The prefix <i lang="ain-Latn">eci=</i> occupies two cells in the Hokkaido Ainu
		personal-index system. As the second-person plural index it marks the agent, subject,
		or object of a predicate whose addressee participant is plural, in parallel with the
		second-person singular <i lang="ain-Latn">e=</i>. As the portmanteau for first-to-second
		combinations it simultaneously indexes the subject and the object when a first-person
		agent — singular or exclusive plural — acts on a second-person object, singular or plural.
		The two functions share a single surface form, producing a syncretism that surrounding
		context consistently resolves <Ref k="nakagawa2024" p="166–173" />; <Ref
			k="tamura1972"
			p="27–28"
		/>; <Ref k="bugaeva2012" p="471–474" />.
	</p>

	<p>
		The full S/A/O paradigm and its alignment patterns are set out in <Xr
			ch="person-marking-architecture"
		/>. The present chapter develops the two functions of <i lang="ain-Latn">eci=</i>, the
		syncretism between them, and the interaction with Hokkaido plural marking. Adjacent paradigm
		material belongs to <Xr ch="first-second-person-singular-affixes" /> for <i lang="ain-Latn"
			>e=</i
		> and <i lang="ain-Latn">en=</i>, to <Xr ch="object-indexing-monotransitive" /> for the
		two-index cap and ditransitive object choice, and to <Xr ch="person-number-interactions" />
		for plural agreement.
	</p>

	<table>
		<thead>
			<tr>
				<th>structural environment</th>
				<th>function of <i lang="ain-Latn">eci=</i></th>
				<th><i lang="ain-Latn">e=</i> counterpart</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>intransitive predicate</td>
				<td>2PL.S</td>
				<td><i lang="ain-Latn">e=</i> 2SG.S</td>
			</tr>
			<tr>
				<td>transitive predicate, O = 3rd person</td>
				<td>2PL.A</td>
				<td><i lang="ain-Latn">e=</i> 2SG.A</td>
			</tr>
			<tr>
				<td>transitive predicate, A = 3rd person, O = 2nd person plural</td>
				<td>2PL.O</td>
				<td><i lang="ain-Latn">e=</i> 2SG.O</td>
			</tr>
			<tr>
				<td>transitive predicate, A = 1st person (any number), O = 2nd person (any number)</td>
				<td>1→2 portmanteau: indexes A and O simultaneously</td>
				<td><i lang="ain-Latn">eci=</i> (no separate 2SG-only form exists for this cell)</td>
			</tr>
		</tbody>
	</table>
</S>

<S t="Second-person neutrality: e= and eci=" id="second-neutral">
	<p>
		Both <i lang="ain-Latn">e=</i> and <i lang="ain-Latn">eci=</i> carry no subject–object
		distinction: the same form appears whether the addressee is the agent of a transitive verb,
		the sole argument of an intransitive verb, or the object of a transitive verb with a
		third-person agent <Ref k="bugaeva2012" p="471–472" />; <Ref k="sato2008" p="31–32" />;
		<Ref k="tamura1972" p="27" />. Tamura's formulation is explicit: the second-person affix
		marks the subject and the object without distinction <Ref k="tamura1972" p="27" />. The
		S=A=O patterning places second person in the neutral column of the mixed alignment system,
		alongside the zero third person, and against the nominative–accusative 1SG and the
		tripartite 1PL.EXCL and fourth person ‹consensus›.
	</p>

	<table>
		<thead>
			<tr>
				<th>role</th>
				<th>2SG</th>
				<th>2PL (Saru–Chitose baseline)</th>
				<th>2PL (Ishikari, Tokachi)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>S: intransitive subject</td>
				<td><i lang="ain-Latn">e=</i></td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td><i lang="ain-Latn">es=</i></td>
			</tr>
			<tr>
				<td>A: transitive subject, O = 3rd person</td>
				<td><i lang="ain-Latn">e=</i></td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td><i lang="ain-Latn">es=</i></td>
			</tr>
			<tr>
				<td>O: object, A = 3rd person</td>
				<td><i lang="ain-Latn">e=</i></td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td><i lang="ain-Latn">es=</i></td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="sinen ne e=oman wa e=ray yakun"
		g="one COP 2SG.S=go CONJ 2SG.S=die COND"
		tr="If you go alone and die, ..."
		cite="nakagawa2024:167"
		dial="SHI"
		place="Nakagawa ex. 106"
		note="Both intransitive verbs oman and ray carry e= because the addressee is singular; the role is the same (2SG.S) in both clauses."
	/>

	<Ex
		m="eci=paye tek nean cise oro eci=epa cik anakne"
		g="2PL.S=go.PL CONJ that house LOC 2PL.A=reach COND TOP"
		tr="When you (plural) go and reach that house, ..."
		cite="nakagawa2024:168"
		dial="TOK"
		place="Nakagawa ex. 116, after Sawai 1996: 69"
		note="eci= marks 2PL.S on the intransitive paye in the first clause and 2PL.A on the transitive epa in the second: one form across two distinct syntactic roles within one sentence."
	/>

	<p>
		Nakagawa's combination tables record <i lang="ain-Latn">eci=</i> as the 2PL index in
		Saru, Chitose, Horobetsu, and Shizunai, while Ishikari and Tokachi also show
		<i lang="ain-Latn">es=</i> in the second-plural row <Ref k="nakagawa2024" p="166–172" />.
		Where a dialect supplies <i lang="ain-Latn">es=</i>, it fills the same neutral paradigm
		cell with the same functional range.
	</p>
</S>

<S t="The 1A→2O portmanteau" id="portmanteau">
	<p>
		When a first-person agent acts on a second-person object, <i lang="ain-Latn">eci=</i>
		indexes the complete local-person relation. The four subject/object number combinations —
		1SG acting on 2SG, 1SG acting on 2PL, 1PL.EXCL acting on 2SG, and 1PL.EXCL acting on
		2PL — all receive the same prefix. The stacked sequences
		<i lang="ain-Latn">*ku=e=</i>, <i lang="ain-Latn">*ku=eci=</i>,
		<i lang="ain-Latn">*ci=e=</i>, and <i lang="ain-Latn">*ci=eci=</i> are unattested and
		ungrammatical. Bugaeva enumerates all four covered combinations explicitly; Nakagawa's Saru
		combination table places <i lang="ain-Latn">eci=</i> in every 1→2 cell; Tamura's earlier
		Saru analysis already treats the form as the second-person affix used in the
		first-to-second-person relation <Ref k="bugaeva2008" p="38" />; <Ref
			k="bugaeva2012"
			p="474"
		/>; <Ref k="nakagawa2024" p="170, 173" />; <Ref k="tamura1972" p="27–28" /> ‹consensus›.
	</p>

	<table>
		<thead>
			<tr>
				<th>A: subject</th>
				<th>O: object</th>
				<th>index</th>
				<th>excluded analytic sequence</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1SG</td>
				<td>2SG</td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td><i lang="ain-Latn">*ku=e=</i></td>
			</tr>
			<tr>
				<td>1SG</td>
				<td>2PL</td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td><i lang="ain-Latn">*ku=eci=</i></td>
			</tr>
			<tr>
				<td>1PL.EXCL</td>
				<td>2SG</td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td><i lang="ain-Latn">*ci=e=</i></td>
			</tr>
			<tr>
				<td>1PL.EXCL</td>
				<td>2PL</td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td><i lang="ain-Latn">*ci=eci=</i></td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="nep ka eci=kasuy pe an ya"
		g="what even 1SG.A>2SG.O=help thing exist Q"
		tr="Is there anything I can help you with?"
		cite="nakagawa2024:173"
		dial="SAR"
		place="Nakagawa ex. 128, after Honda 2001: 44"
		note="Nakagawa identifies eci= as the 1SG.A→2SG.O portmanteau. No separate ku= or e= appears; the single prefix satisfies both the agent and object indexing requirements of the transitive predicate kasuy."
	/>

	<p>
		The portmanteau character of the 1→2 form is confirmed by the contrast with the 1→4
		combination. Nakagawa's Saru combination table records <i lang="ain-Latn">eci=i=</i>
		when the agent is first person and the object is fourth person: the agent index
		<i lang="ain-Latn">eci=</i> and the fourth-person object <i lang="ain-Latn">i=</i> appear
		as separate prefixes <Ref k="nakagawa2024" p="170" />. The 1→2 cells merge the two slots
		into one, in keeping with the two-index cap: a verb carries at most one agent index and
		one object index, and the portmanteau satisfies both positions simultaneously. The cap and
		its consequences for three-argument verbs are treated in <Xr ch="object-indexing-monotransitive" />.
	</p>
</S>

<S t="Resolving the syncretism" id="resolving-syncretism">
	<p>
		A verb beginning with <i lang="ain-Latn">eci=</i> is formally ambiguous among 2PL.S,
		2PL.A, 2PL.O, and the 1→2 portmanteau. Several cues resolve the ambiguity. On an
		intransitive predicate, which has no object slot, the form can only be 2PL.S. On a
		transitive predicate with an overt third-person subject noun phrase, the 2PL.O reading
		is forced; with an overt third-person object, the 2PL.A reading holds. The portmanteau
		reading arises on a transitive predicate whose agent is a locally tracked first-person
		participant. Ainu discourse tracks participants across turns through the bound indexes and
		does not regularly deploy independent pronouns for reference maintenance; the free forms
		<i lang="ain-Latn">eani</i> (2SG) and <i lang="ain-Latn">ecioka</i> (2PL) add emphasis
		or mark contrast rather than supplying a referent from scratch
		<Ref k="nakagawa2024" p="163–164, 250–251" />; <Ref k="tamura1971" p="3–5" />.
	</p>

	<p>
		The 2→1 configuration presents an asymmetry in Saru and Chitose. Where other Hokkaido
		dialects form 2SG→1SG by combining a second-person agent index with the first-person
		object <i lang="ain-Latn">en=</i>, Saru uses bare <i lang="ain-Latn">en=</i> alone,
		suppressing the expected <i lang="ain-Latn">*e=en=</i>; Chitose extends this to 2PL→1SG,
		making <i lang="ain-Latn">*eci=en=</i> ungrammatical in that variety as well
		<Ref k="nakagawa2024" p="170, 173" />; <Ref k="sato2008" p="146–147" />. The full 2→1
		paradigm and its dialect variation are developed in <Xr ch="first-second-person-singular-affixes" />.
	</p>
</S>

<S t="Plural marking and eci=" id="plural-marking">
	<p>
		The 2PL value carried by <i lang="ain-Latn">eci=</i> is participant-number indexing and is
		independent of verbal number. Hokkaido Ainu expresses verbal plurality through three further
		devices: suppletive stem alternations such as <i lang="ain-Latn">arpa</i> /
		<i lang="ain-Latn">paye</i> 'go', a root-attaching suffix <i lang="ain-Latn">-pa</i>, and
		— in Saru, Chitose, and Ishikari — an outer plural auxiliary that follows the fully
		person-inflected verb <Ref k="nakagawa2024" p="140–159" />; <Ref
			k="bugaeva2012"
			p="471, 481"
		/>; <Ref k="sakaguchi2024" p="12" />. Each device occupies a distinct structural position
		and can co-occur with <i lang="ain-Latn">eci=</i>.
	</p>

	<table>
		<thead>
			<tr>
				<th>device</th>
				<th>domain of plurality</th>
				<th>position</th>
				<th>co-occurrence with <i lang="ain-Latn">eci=</i></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>suppletive plural stem (<i lang="ain-Latn">paye</i>, <i lang="ain-Latn">arki</i>, …)</td>
				<td>S plurality in intransitives; O or event plurality in transitives</td>
				<td>lexical stem selection</td>
				<td>yes; <i lang="ain-Latn">eci=paye</i> = 2PL.S + go.PL</td>
			</tr>
			<tr>
				<td>stem suffix <i lang="ain-Latn">-pa</i></td>
				<td>verbal / event plurality</td>
				<td>inside person suffixes and causatives, attached to root</td>
				<td>independent of the personal index</td>
			</tr>
			<tr>
				<td>outer plural <i lang="ain-Latn">pa</i> (Saru, Chitose, Ishikari)</td>
				<td>agent / participant plurality</td>
				<td>outside the fully person-inflected form</td>
				<td>follows <i lang="ain-Latn">eci=</i>verb when additional plurality is marked</td>
			</tr>
		</tbody>
	</table>

	<p>
		Nakagawa's minimal pair illustrates the ordering diagnostic for the outer auxiliary versus
		the stem suffix: <i lang="ain-Latn">iki=an pa</i> has the outer <i lang="ain-Latn">pa</i>
		following the fourth-person suffix, while <i lang="ain-Latn">iki-pa=an</i> has the stem
		suffix <i lang="ain-Latn">-pa</i> inside the person marker <Ref k="nakagawa2024" p="158" />.
		Sakaguchi formalises the criterion — a marker that attaches to the fully person-inflected
		form is a clitic rather than an affix — for Sakhalin Ainu; the most directly relevant
		Hokkaido evidence is the Saru/Chitose/Ishikari outer <i lang="ain-Latn">pa</i>
		<Ref k="sakaguchi2024" p="77–85, 163" /> ‹contested›. Person–number agreement and the
		selection of plural stems are treated in <Xr ch="person-number-interactions" />.
	</p>
</S>

<S t="Ijäs's learner grammar and the reference paradigm" id="ijas">
	<p>
		The online learner grammar by Ijäs introduces <i lang="ain-Latn">e=</i> in Lesson 2 as
		the second-person singular index on intransitive verbs; the plural counterpart is deferred
		<Ref k="ijas2023" />. Lesson 5 then presents <i lang="ain-Latn">eci=</i> as the marker
		for a first-person singular agent acting on a second-person singular object, and
		<i lang="ain-Latn">e=</i> as the second-person singular object form with a third-person
		agent <Ref k="ijas2023" />. Her pedagogical scope covers one number combination of the
		portmanteau; the reference sources extend <i lang="ain-Latn">eci=</i> to all four
		first-to-second-person subject/object number combinations and additionally treat it as the
		full 2PL index across A, S, and O ‹consensus›.
	</p>

	<Ex
		m="e=arpa"
		g="2SG.S=go"
		tr="You go."
		cite="ijas2023"
		constructed
		note="Constructed from Ijäs Lesson 2. Her pedagogical hyphen notation (e-arpa) is normalized here to the personal-index boundary =."
	/>

	<Ex
		m="tanpe eci=kore na"
		g="this 1SG.A>2SG.O=give FIN"
		tr="I give this to you."
		cite="ijas2023"
		constructed
		note="Constructed from Ijäs Lesson 5, presenting a 1SG-agent-plus-2SG-object construction. The reference paradigm generalises eci= to all four 1→2 number combinations. As a ditransitive, kore indexes the recipient (2nd person) in the object slot; the thing given (tanpe) is a bare noun phrase."
	/>

	<p>
		Ijäs notes that second-person neutrality creates an interpretive ambiguity: a predicate
		carrying <i lang="ain-Latn">e=</i> alongside a third-person participant can be read with
		the addressee as either agent or object unless additional context fixes the role
		<Ref k="ijas2023" />. The observation matches the structural picture: predicate valence and
		the state of participant tracking supply what the person index alone leaves open.
	</p>
</S>

<S t="Notation" id="notation">
	<p>
		This grammar writes the personal indexes with <i lang="ain-Latn">=</i>, including
		<i lang="ain-Latn">e=</i> and <i lang="ain-Latn">eci=</i>. The symbol is a house
		convention for the personal-index boundary and makes no claim about morphological status.
		Nakagawa writes all person markers with <i lang="ain-Latn">=</i> for convenience,
		explicitly noting that the symbol is unrelated to phonological or syllabic structure
		<Ref k="nakagawa2024" p="49" />. Bugaeva assigns graduated status on prosodic and
		separability grounds: <i lang="ain-Latn">eci=</i> is clitic-like — inseparable from the
		stem and not shifting the accent kernel — while <i lang="ain-Latn">ku=</i>,
		<i lang="ain-Latn">ci=</i>, <i lang="ain-Latn">e=</i>, <i lang="ain-Latn">en=</i>,
		<i lang="ain-Latn">un=</i>, and <i lang="ain-Latn">i=</i> are full prefixes that do shift
		it <Ref k="bugaeva2012" p="472–473" /> ‹contested›. Ijäs writes <i lang="ain-Latn">e-</i>
		and <i lang="ain-Latn">eci-</i> with a hyphen and notes that equal signs are also in
		common use <Ref k="ijas2023" />; the forms in this chapter are normalized accordingly.
		The morphological boundary status of the Hokkaido personal indexes is treated in
		<Xr ch="personal-affix-template-and-ordering" />.
	</p>
</S>
