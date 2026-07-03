<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Hokkaido Ainu has one rigid clause-level constraint: the verb phrase — together with any
		evidential — comes last, and all other elements precede it <Ref k="nakagawa2024" p="363" />.
		Within the preverbal domain, however, the relative sequence of nominal and adverbial phrases
		is not grammatically fixed. Because grammatical roles are indexed on the verb by obligatory
		person affixes (see <Xr ch="person-marking-architecture" />), and overt NPs stand in an
		appositional relation to those affixes rather than filling assigned slots (see
		<Xr ch="argument-realization-indexing" />), the preverbal domain is available for information
		structure to impose its own ordering — independently of the S/A/O distinctions encoded
		morphologically.
	</p>
	<p>
		Several distinct operations occupy this space. Topical elements tend to appear at the left
		edge of the preverbal sequence, most visibly when marked by the topic particle
		<A w="anakne" gl="as for (topic marker)" />. A contrastively stressed indirect object may be
		fronted and receive an allative postposition it would otherwise lack. An adverbial complex can
		appear in any order relative to the NPs around it. And a third-person NP can be placed
		<em>after</em> the verb and re-predicated by the light verb <A w="ki" gl="do" /> — a
		right-dislocation strategy that Bugaeva connects to processing and to the disambiguating
		function that verb-initial order performs in other head-marking languages
		<Ref k="bugaeva2022" p="ch.1 §4.3" />.
	</p>
	<p>
		This chapter describes those positional operations and the discourse conditions that license
		each. The topic-particle system — <i lang="ain-Latn">anak(ne)</i>, the additive-focus
		particle <A w="ka" gl="also; even" />, and the exclusive-focus adverb
		<A w="patek" gl="only, just" /> — is treated in full in
		<Xr ch="topic-marking-anakne" />; cleft and nominalization-based focus constructions belong
		to <Xr ch="cleft-nominalization-focus" />. Argument ellipsis proper — the conditions under
		which a recoverable NP is simply omitted — is covered in
		<Xr ch="argument-realization-indexing" /> and <Xr ch="reference-tracking" />; what this
		chapter addresses is how ellipsis conditions the use (and non-use) of fronting and
		dislocation.
	</p>
</S>

<S t="Topic-initial order and left-fronting" id="topicalization">
	<p>
		The most consistently stated pragmatic generalization in the literature on Ainu word order
		is that topical NPs tend to come first <Ref k="bugaeva2012" p="472" />. Nakagawa frames the
		same observation structurally: rather than a subject-before-object preference, the preverbal
		sequence is organized by information status, so that the element made topic by
		<i lang="ain-Latn">anak(ne)</i> or <i lang="ain-Latn">ka</i> tends to occupy the initial
		position <Ref k="nakagawa2024" p="364" />. His Chitose paradigm — the same ditransitive
		event narrated with the three arguments of <A w="epakasnu" gl="teach" /> in three different
		orders — makes the point directly: the order shifts with the topic-marking, and order alone
		cannot determine which argument is agent or recipient (Nakagawa 2024: 363, exx.700–702; see
		<Xr ch="constituent-order-head-final" />).
	</p>
	<p>
		Three corpus examples from different narrators and registers show the range of what can be
		fronted:
	</p>

	<Ex
		m="a=kor seta anakne i=oyakke oma ka somo ki p ne kusu i=sam ta ukasuy ipe=an"
		g="4.A=have dog TOP 4.O=leave approach even NEG do NMLZ COP PURP 4.O=side LOC together eat=4.S"
		tr="My dog, as for it, never left my side, so it ate with me."
		cite="ilcaa1976"
		dial="SAR"
		place="川上まつ子, AA研アイヌ語資料, 沙流"
		note="The possessed subject a=kor seta 'my dog' is fronted and marked with anakne; the complex predicate 'never even approached leaving me' follows with the result clause."
		id="ex-topic-possessor"
	/>

	<Ex
		m="ku=nukar seta anakne ney ta ne yakka a=nukar seta ne noyne siran"
		g="1SG.A=see dog TOP where LOC COP even 4.A=see dog COP seem exist"
		tr="The dog I saw looked like a dog you would see anywhere."
		cite="ainukoraci1991"
		dial="SAR"
		place="丸野和子, アイヌタイムズ, 沙流・千歳"
		note="A relative-clause head (ku=nukar seta 'the dog I saw') is fronted and marked with anakne before the comment clause."
		id="ex-topic-relhead"
	/>

	<Ex
		m="Seta anakne a=kor ikor ne kusu onne wa isam pakno pirkano kasi a=oyki kuni p ne na"
		g="dog TOP 4.A=have treasure COP PURP die.old CONJ absent until well properly 4.A=care COMP NMLZ COP FIN"
		tr="Dogs are our treasure, so one must care for them well until they die of old age."
		cite="ainukoraci1991"
		dial="SAR"
		place="神崎雅好, アイヌタイムズ, 沙流・千歳"
		note="A bare lexical noun seta 'dog' heads a generic statement under anakne topic marking."
		id="ex-topic-generic"
	/>

	<p>
		All three share the positional structure — topic + <i lang="ain-Latn">anak(ne)</i> at the
		left edge — but the fronted constituent varies: a possessed noun phrase, a relative-clause
		head, and a bare lexical noun. The register likewise varies: oral narrative, a modern written
		newsletter, and a generic statement in the same newsletter. The <i lang="ain-Latn">anak(ne)</i>
		particle itself appears in different clause types and carries a pragmatic weight closer to
		Japanese '～に関しては (as for, regarding —)' than to the bare thematic は; once a topic is
		established in discourse, re-marking with <i lang="ain-Latn">anak</i> on a continuing topic
		is unnecessary <Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord 2024-11-09;
		asserted; consistent with <Ref k="shibatani1990" p="38" paren />). The full distributional
		and functional account of <i lang="ain-Latn">anak(ne)</i> is in
		<Xr ch="topic-marking-anakne" />.
	</p>
	<p>
		The <i lang="ain-Latn">anak</i> form is etymologically transparent: Tamura's Saru dictionary
		derives it from <i lang="ain-Latn">an-yak</i> 'if it is so / as for it being' (reported in
		<Ref k="aynucorporadiscord" />, nukopoli, aynu-corpora Discord 2023-12-08, asserted; after
		<Ref k="tamura1996" />). This diachronic source is consistent with the particle's evidential
		weight and its less-grammaticalized status relative to Japanese は ‹speculative›.
	</p>
	<p>
		Topic-initial order occurs without the overt particle when context already establishes the
		topic. The particle-free pattern is indistinguishable in position from neutral order or from
		unmarked focus preposing, and in practice it is the particle that signals topicalization as
		distinct from simple preverbal adjacency to the verb.
	</p>
</S>

<S t="Focus preposing and allative-marked IO fronting" id="focus-preposing">
	<p>
		Left-fronting is available to focused constituents as well as to topics. Refsing observes
		that an indirect object, normally embedded among the preverbal NPs without any postpositional
		marking, "may, when stressed, be moved to the beginning of the sentence and marked with an
		allative case postposition" <Ref k="refsing1986" /> (§13.4.3, Shizunai data). The allative
		marking is the diagnostic: core arguments are never flagged by a case postposition in neutral
		order, so when one appears on a fronted IO it signals a positional operation driven by focus
		or contrast, not by grammatical role ‹contested›.
	</p>

	<Ex
		m="ku=macihi orun topenpe ku=kore"
		g="1SG.A=wife ALLAT sweets 1SG.A=give"
		tr="To my wife I gave the sweets (not to anyone else)."
		constructed
		dial="SHI"
		note="Constructed to illustrate IO fronting with the allative postposition orun under contrastive stress, as described in Refsing (1986, §13.4.3) for Shizunai. In neutral order the IO ku=macihi would appear without orun."
	/>

	<p>
		This pattern is phonologically and semantically driven — it signals narrow focus on the
		indirect-object referent. Content-question words, by contrast, remain in situ: they occupy
		the same preverbal position as the corresponding non-question constituent, and "questions do
		not involve any distinctive word order" <Ref k="bugaeva2012" p="498" />. No wh-movement
		applies. The interrogative system — including the question particles
		<i lang="ain-Latn">ya</i> and <i lang="ain-Latn">ya an</i> and the content-question
		pro-forms (<i lang="ain-Latn">hunna</i> 'who', <i lang="ain-Latn">hemanta</i> 'what',
		<i lang="ain-Latn">hunak</i> 'where') — is treated in
		<Xr ch="interrogative-strategies-question-particles" />.
	</p>
	<p>
		In the majority of cases, focus is conveyed in situ through the focus particle
		<i lang="ain-Latn">ka</i> 'also/even/indeed' or the exclusive adverb
		<i lang="ain-Latn">patek</i> 'only', rather than by a positional operation. When a cleft or
		pseudocleft construction is used to identify a focus referent, the nominalization-based
		apparatus described in <Xr ch="cleft-nominalization-focus" /> is employed; this chapter
		does not treat those constructions.
	</p>
</S>

<S t="Right-dislocation and the afterthought construction" id="right-dislocation">
	<p>
		The mirror image of topic-initial order is a pattern documented by Bugaeva in which the
		predicate comes first and the disambiguating subject or object NP appears after the verb,
		re-predicated by the light verb <A w="ki" gl="do" /> <Ref k="bugaeva2022" p="ch.1 §4.3" />.
		Bugaeva analyses this as right-dislocation: a discourse or processing device that "mimics
		the verb-initial strategy of establishing relations at the outset" even in a verb-final
		language, allowing the hearer to know the event-type before the participant-identities are
		supplied. The following passage from a Chitose narrative has the predicate phrase
		<i lang="ain-Latn">he=tuk-pa pa</i> 'they all grew (plural, perfective)' before the two
		subject NPs, which are then introduced as afterthoughts via the <i lang="ain-Latn">ki</i>
		construction:
	</p>

	<Ex
		m="he=tuk-pa pa a=mat-ne-po-utar-i a=po-utar-i ki pa pe ne kusu"
		g="body=grow-PL PFV 4.A=wife-COP-child-ASS-POSS 4.A=child-ASS-POSS do PFV NMLZ COP PURP"
		tr="They all grew up — the daughters and the children — because the children did so."
		cite="bugaeva2022"
		dial="CHI"
		place="Bugaeva 2022 ch.1 ex.19, NINJAL corpus K8109171UP.296"
		note="The verb phrase he=tuk-pa pa 'grew (plural, perfective)' precedes the two dislocated subject NPs a=matnepoutari (daughters) and a=poutari (sons/children); the light verb ki re-predicates them in an afterthought clause. Translation follows Bugaeva 2022."
		id="ex-right-disloc"
	/>

	<p>
		Bugaeva connects this pattern typologically to Nichols's observation that head-marking
		languages, in which relations are established on the verb rather than on NPs, have the
		greatest freedom to put the verb first — "establishing relations at the outset" — and that
		this is the functional pay-off of verb-initial order in many head-marking families
		<Ref k="nichols1986" p="104" paren />. Verb-final Ainu achieves a structurally parallel
		effect through right-dislocation: the event is predicated and the argument-tracking indices
		are on the verb; the NP appears afterward as a lexical specification that allows the hearer
		to recover participant identity <Ref k="bugaeva2022" p="ch.1 §7" />.
	</p>
	<p>
		The pattern is attested but not quantified: only two examples are documented in the read
		sources (Bugaeva 2022 ch.1, exx.18–19), both from Chitose narrative texts, so its frequency
		and range are open ‹corpus-suggested›. No right-dislocation marker has grammaticalized; the
		<i lang="ain-Latn">ki</i> that closes the afterthought is the ordinary light verb 'do', and
		the construction has no dedicated morphological signature distinct from any other
		<i lang="ain-Latn">ki</i>-predicated clause. Its identification as right-dislocation rests
		on the discourse position of the NP relative to the preceding predicate.
	</p>
	<p>
		The fourth-person affixes are central to what makes right-dislocation functional in Ainu
		narration. Third-person arguments carry a zero index — no morphological trace of their
		identity — and it is precisely this zero-marking that motivates the afterthought: the hearer
		cannot identify the participant from the affix and so the lexical NP is supplied after the
		fact. See <Xr ch="indefinite-fourth-person-paradigm" /> for the agent-defocusing and
		narrator-tracking functions of the fourth person, and
		<Xr ch="logophoric-narration-and-reported-discourse" /> for the broader discourse role of
		the <i lang="ain-Latn">a=</i>/<i lang="ain-Latn">=an</i> forms in oral narrative.
	</p>
</S>

<S t="Adjunct placement and preverbal order" id="adjunct-placement">
	<p>
		Time adverbs, manner adverbs, and postpositional adjunct phrases are all preverbal in Hokkaido
		Ainu, but their order within the preverbal domain is unconstrained. Nakagawa's sentence
		template allows zero to any number of adverbials (副詞句 0…x) in any order relative to one
		another and relative to the argument NPs (名詞句 0…n), with the only requirement being that
		all precede the verb phrase <Ref k="nakagawa2024" p="361" />. Refsing states the same
		freedom empirically: her grammar does not account for adjunct order because she found it
		"very free" <Ref k="refsing1986" /> (§2.4). Negators <A w="somo" gl="not (negating adverb)" />
		and <A w="iteki" gl="don't (prohibitive adverb)" /> likewise precede the verb as adverbs;
		they occupy no fixed structural slot beyond the general Adv–V requirement
		<Ref k="nakagawa2024" p="365" />.
	</p>
	<p>
		One specific pair of adverbial forms illustrates how adjunct order can be sensitive to
		contact-induced change. In traditional Ainu texts the complex
		<i lang="ain-Latn">ani patek</i> '(INS) only' — the instrumental postposition
		<i lang="ain-Latn">ani</i> following its nominal complement and followed by the exclusive
		adverb <i lang="ain-Latn">patek</i> — is the normal sequence. Modern speakers show roughly
		equal frequency of the reverse order <i lang="ain-Latn">patek ani</i>. The reversal is
		attributed to Japanese influence: <i lang="ain-Latn">patek</i> is an adverb and cannot be
		nominalised as Japanese <span lang="ja">丈/だけ</span> can, so the Japanese-modelled
		<i lang="ain-Latn">patek ani</i> sequence imports a word-order pattern that is
		category-inappropriate for the Ainu form <Ref k="aynucorporadiscord" /> (nukopoli,
		aynu-corpora Discord 2024-12-16; proposed) ‹contested›.
	</p>

	<table>
		<thead>
			<tr>
				<th>positional operation</th>
				<th>position</th>
				<th>morphological diagnostic</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Topic-marking with <i lang="ain-Latn">anak(ne)</i></td>
				<td>left edge of preverbal domain</td>
				<td>overt particle; also unmarked topic-initial order in context</td>
				<td><Ref k="nakagawa2024" p="364" />; <Ref k="bugaeva2012" p="472" /></td>
			</tr>
			<tr>
				<td>Contrastive focus on IO with allative <i lang="ain-Latn">orun</i></td>
				<td>leftmost preverbal NP</td>
				<td>allative postposition added; absent in neutral order</td>
				<td><Ref k="refsing1986" /> §13.4.3</td>
			</tr>
			<tr>
				<td>Adjuncts (adverbials, postpositional phrases)</td>
				<td>preverbal, freely ordered among NPs</td>
				<td>no fixed position; template allows 0…x</td>
				<td><Ref k="nakagawa2024" p="361" />; <Ref k="refsing1986" /></td>
			</tr>
			<tr>
				<td>Right-dislocation (afterthought with <i lang="ain-Latn">ki</i>)</td>
				<td>postverbal, clause-final NP + <i lang="ain-Latn">ki</i></td>
				<td>third-person NP re-predicated by light verb <i lang="ain-Latn">ki</i></td>
				<td><Ref k="bugaeva2022" p="ch.1 §4.3" /></td>
			</tr>
			<tr>
				<td>Content-question word (wh-in-situ)</td>
				<td>argument or adjunct position (in situ)</td>
				<td>no movement; position identical to non-question counterpart</td>
				<td><Ref k="bugaeva2012" p="498" /></td>
			</tr>
		</tbody>
	</table>
</S>

<S t="Discourse conditions and the interaction with ellipsis" id="discourse-conditions">
	<p>
		The positional operations described above are not alternatives to one another but
		alternatives to argument ellipsis. An argument NP that is fully recoverable from context —
		whether from a shared index on the verb, from the established discourse referent, or from
		plausibility — is simply absent: "it is not necessary in Ainu for a noun phrase that is
		clear from the context to appear in a sentence, and such a noun phrase is not even
		represented by a pronoun" <Ref k="nakagawa2024" p="361" />. Fronting or topic-marking
		therefore signals something beyond what the obligatory person indices already convey.
		Typically it marks re-establishment of a topic after a scene-switch or topic-lapse, the
		introduction of a new referent that the hearer cannot retrieve from the index alone, or
		contrastive focus on a participant against an alternative set. See
		<Xr ch="reference-tracking" /> for the full system of how participant continuity is
		maintained across clauses.
	</p>
	<p>
		The discourse function of each operation is approximate rather than categorical:
	</p>
	<ul>
		<li>
			<strong>Topic-initial with <i lang="ain-Latn">anak(ne)</i></strong> — marks a
			discourse-topic at the start of a new unit, after a gap, or when shifting from a
			previous topic; the particle has the weight of 'as for (X)' and is not re-applied
			on every subsequent mention of the same topic.
		</li>
		<li>
			<strong>In-situ order</strong> — the default when participants are known and the
			predicate is the communicative center; any preverbal arrangement is grammatical
			as long as roles are recoverable from the indices and context.
		</li>
		<li>
			<strong>Focus preposing with allative</strong> — reserved for the indirect object
			under narrow contrastive focus; the allative postposition is the marker that
			distinguishes this from ordinary topic-initial position.
		</li>
		<li>
			<strong>Right-dislocation with <i lang="ain-Latn">ki</i></strong> — supplies a
			participant lexically after the predicate has committed to an event-type; attested
			in narrative contexts where the third-person zero index is insufficient for
			disambiguation.
		</li>
	</ul>
	<p>
		The interaction between information structure and the nonconfigurationality question is
		addressed in <Xr ch="nonconfigurationality-pronominal-argument" />. The head-marking
		analysis of Ainu (see <Ref k="sato2025a" p="359–365" />; <Ref k="nichols1986" p="104" paren />)
		predicts precisely the observed pattern: because roles are encoded on the predicate, overt NPs
		are free to appear, be omitted, or be placed wherever information structure directs them.
		The clause-chaining apparatus — <i lang="ain-Latn">wa</i>, <i lang="ain-Latn">hine</i>,
		<i lang="ain-Latn">kor</i> — maintains participant continuity across linked clauses and
		thereby reduces the need for topic re-introduction within a chain (see
		<Xr ch="clause-linkage-overview" />). Fronting and dislocation are most active at
		chain boundaries and at discourse transitions, not inside the chain itself.
	</p>
</S>
