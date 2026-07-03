<script lang="ts">
	import { S, Ex, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Reference tracking in Hokkaido Ainu discourse rests on a cluster of mechanisms that work in
		concert: obligatory verbal person indices, pervasive zero anaphora, the referential properties of
		the fourth-person form-set, the lexical class of <em>location</em> nouns, and constructional
		signals of topic continuity and scene transition. There is no morphological switch-reference
		system. The bound person indices do not encode same-subject versus different-subject across clause
		junctions, and the clause-linking particles carry no built-in reference-change signal; participant
		continuity is inferred from index identity and from discourse structure, not marked by a dedicated
		morpheme <Ref k="bugaeva2022" />; <Ref k="sato2025a" p="359–371" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>mechanism</th>
				<th>level</th>
				<th>function in tracking</th>
				<th>primary source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>bound person indices</td>
				<td>morphological</td>
				<td>identify participants per clause; obligatory on every finite verb</td>
				<td><Ref k="sato2025a" p="359–361" />; <Ref k="bugaeva2012" p="472" /></td>
			</tr>
			<tr>
				<td>zero anaphora</td>
				<td>pragmatic/syntactic</td>
				<td>default anaphor for contextually recoverable referents; no pronoun used</td>
				<td><Ref k="nakagawa2024" p="361" />; <Ref k="bugaeva2022" /></td>
			</tr>
			<tr>
				<td>fourth-person indexing</td>
				<td>morphological</td>
				<td>tracks story-internal first person distinct from narrating speaker; logophoric in quotations</td>
				<td><Ref k="nakagawa2024" p="174–179" />; <Ref k="bugaeva2008" p="40–43" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">&lt;location&gt;</i> noun class</td>
				<td>lexical/semantic</td>
				<td>disambiguates role of two zero-marked third-person arguments</td>
				<td><Ref k="nakagawa2022pos" />; <Ref k="bugaeva2022" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">anak(ne)</i> topic-fronting</td>
				<td>pragmatic</td>
				<td>marks a referent as discourse topic at (re)introduction or contrast</td>
				<td><Ref k="nakagawa2024" p="364" />; <Ref k="shibatani1990" p="38–39" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">a p</i> / <i lang="ain-Latn">a korka</i></td>
				<td>constructional</td>
				<td>signals scene or actor change at narrative episode boundaries</td>
				<td><Ref k="bugaeva2022" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The formal person paradigm, the S/A/O sets, and the fourth-person cell are treated in
		<Xr ch="person-marking-architecture" />; the semantics of the fourth-person form-set in
		<Xr ch="indefinite-fourth-person-paradigm" /> and <Xr ch="fourth-person-honorific" />;
		clause-chaining and the <i lang="ain-Latn">wa</i>/<i lang="ain-Latn">hine</i> relationship in
		<Xr ch="sequential-wa-and-clause-chaining" />; topicalization and <i lang="ain-Latn">anakne</i>
		in <Xr ch="topic-marking-anakne" />; logophoric narration and reported speech in
		<Xr ch="logophoric-narration-and-reported-discourse" />.
	</p>
</S>

<S t="Zero anaphora" id="zero-anaphora">
	<p>
		Because every finite verb obligatorily indexes its arguments through bound person markers, an
		overt NP is an optional supplement to the cross-reference already present on the verb. An NP
		recoverable from context is simply absent, with no pronoun in its place: "it is not necessary in
		Ainu for a noun phrase that is clear from the context to appear in a sentence, and such a noun
		phrase is not even represented by a pronoun" <Ref k="nakagawa2024" p="361" />;
		<Ref k="bugaeva2022" />. The result is that participant continuity across a narrative is
		maintained principally through the identity of the person indices across successive verbs, not
		through a chain of co-referring pronouns.
	</p>

	<p>
		Even when the person indices cannot identify an argument — specifically, when a three-place
		(ditransitive) verb's two-affix cap leaves the theme unindexed — the verb's valency guarantees
		the anaphoric reading without any overt NP or pronoun. The theme of
		<i lang="ain-Latn">kore</i> 'give' is zero in the following pair of sentences; its reference to
		the sweet just mentioned is resolved by the verb's own argument-structure requirement
		<Ref k="sato2025a" p="368–369" />:
	</p>

	<Ex
		m="tan-pe topen-pe ne na ekasi ku=kore na"
		g="DEM-NMLZ sweet-NMLZ COP FIN old.man 1SG.A=give FIN"
		tr="This is a sweet. I'll give it to the old man."
		cite="sato2025a:368–369"
		dial="CHI"
		note="Satō ex. 21 (two sentences). The theme 'it' of the second clause is zero — no pronoun, no person index — yet its reference to the sweet of the first clause is unambiguous because kore's valency requires a theme argument."
	/>

	<p>
		Overt NP mention is reserved for participant (re)introduction, contrast, or a shift in discourse
		topic. When an NP does appear alongside a person index, it stands in an appositional relation to
		that index: the index constitutes the argument; the NP specifies or highlights it
		<Ref k="sato2025a" p="363–365" />; <Ref k="bugaeva2012" p="472" />. The NP's position within
		the preverbal field is set by pragmatic prominence; argument realization and appositional NPs are
		treated in <Xr ch="argument-realization-indexing" /> and
		<Xr ch="pragmatic-word-order-dislocation" />.
	</p>
</S>

<S t="The fourth person in reference tracking" id="fourth-person-tracking">
	<p>
		The fourth-person form-set — intransitive subject suffix
		<i lang="ain-Latn">=an</i>, transitive subject prefix <i lang="ain-Latn">a=</i> (dialectally
		<i lang="ain-Latn">an=</i> in Tokachi and Ishikari), and object prefix <i lang="ain-Latn">i=</i>
		— does substantial reference-tracking work in oral narrative genres. Its functions in this domain
		fall into two related types: narrating the story-world protagonist's actions (narrative first
		person), and marking the reported speaker's first person inside a quotation (logophoric use).
		Both are documented principally for Saru and Chitose
		<Ref k="nakagawa2024" p="174–179" />; <Ref k="bugaeva2008" p="40–43" />.
	</p>

	<S t="Narrative first person" id="narrative-first-person">
		<p>
			In <i lang="ain-Latn">kamuy yukar</i> (divine verse) and <i lang="ain-Latn">uwepeker</i>
			(prose tales) narrated in the first person, the protagonist-narrator who is the hero of the
			story uses the fourth-person set rather than the everyday first-person
			<i lang="ain-Latn">ku=</i>/<i lang="ain-Latn">=an</i>/<i lang="ain-Latn">en=</i>.
			Nakagawa analyses this as a viewpoint distinction tied to text type: the protagonist inhabits
			the story world and addresses it from within, and the fourth-person form signals that
			inner-story perspective to the audience <Ref k="nakagawa2024" p="174–179" />. Satō derives the
			same usage from a first-person-plural origin: the fourth-person form encompasses the narrator
			and any hearer who identifies with the protagonist, making it an inclusive strategy
			<Ref k="sato2008" p="259–262" />; <Ref k="sato2004" p="179–184" /> ‹contested›. The
			tracking function is real regardless of which analysis is adopted: wherever a narrator reserves
			<i lang="ain-Latn">a=</i>/<i lang="ain-Latn">=an</i>/<i lang="ain-Latn">i=</i> for the
			hero's actions and <i lang="ain-Latn">ku=</i>/<i lang="ain-Latn">en=</i> for her own
			narrating voice, the two form-sets constitute a formal contrast between two discourse roles.
		</p>

		<Ex
			m="i=erampokiwen i=rewsire wa i=kore"
			g="4.O=pity 4.O=lodge CONJ 4.O=give"
			tr="Take pity on me and give me lodging."
			cite="nakagawa2024:171"
			dial="SAR"
			place="Nakagawa ex. 127"
			note="The fourth-person object prefix i= indexes the narrator-protagonist as recipient across three chained predicates. In kamuy yukar, i= here tracks the protagonist's first-person reference within the story world."
		/>

		<p>
			A community-observed instance corroborates the formal contrast in an attested narration. In an
			<i lang="ain-Latn">uwepeker</i> told by Sadamo, the narrator alternates
			<i lang="ain-Latn">a=</i> for the story-internal protagonist's speech and
			<i lang="ain-Latn">ku=</i> for her own voice as the framing narrator — the two person
			form-sets tracking two distinct discourse roles simultaneously (thegodofneet, aynu-corpora
			Discord, 2024-07-04, asserted; <Ref k="aynucorporadiscord" />) ‹corpus-confirmed›.
		</p>
	</S>

	<S t="Logophoric use in quotations" id="logophoric">
		<p>
			Within a direct quotation, the reported speaker's first person is indexed by the fourth-person
			set rather than by <i lang="ain-Latn">ku=</i>. Bugaeva analyses this as a <em>logophoric</em>
			function: the form marks the participant whose speech or thought is being reported, who is not
			identical to the narrating speaker at the time of utterance
			<Ref k="bugaeva2008" p="40–44" />; <Ref k="nikitina2021" />. The switch from
			<i lang="ain-Latn">ku=</i> to <i lang="ain-Latn">a=</i>/<i lang="ain-Latn">=an</i> at a
			quotation boundary is therefore a reference-change signal — "speaker in quote ≠ narrating
			speaker" — even though it is realized through the person paradigm rather than through a
			quotative morpheme. This use is attested for Saru and Chitose and is treated fully in
			<Xr ch="logophoric-narration-and-reported-discourse" />
			<Ref k="nakagawa2024" p="470–471" />.
		</p>
	</S>

	<S t="Characterization as obviation or switch-reference" id="fourth-person-grade">
		<p>
			The fourth person has been described as "obviative-like," and the functional analogy has
			substance: like an obviative, it marks a participant (the story-internal first person) as
			formally distinct from both the ordinary third person and the plain first person, functioning
			as "the other first person" in the narrative <Ref k="nakagawa2024" p="177–179" />.
		</p>

		<p>
			The analogy does not constitute a category equivalence ‹contested›. Algonquian obviation is a
			grammaticalized noun-phrase category that applies systematically to any third-person
			participant ranked below the proximate in a referential hierarchy, independent of text type;
			the Ainu fourth person applies to a specific set of referential roles — the narrative
			protagonist, the honorific addressee, the inclusive referent, the reported speaker — without
			encoding a proximate/obviative hierarchy on nouns or noun phrases. The form-set belongs to the
			person paradigm; its reference-tracking properties are a consequence of those referential
			roles, not of an independent grammaticalized tracking category.
		</p>

		<p>
			Characterizing the fourth person as a switch-reference device is less apt still ‹contested›.
			Switch-reference systems mark whether the subject of a dependent clause is co-referential with
			the subject of the adjacent main clause, typically by morphology on the clause-linking element.
			The Ainu fourth person is marked on the finite verb itself, not on a connective; it does not
			encode a same-subject versus different-subject opposition across clause junctions. The apparent
			reference-change at a quotation boundary follows from the logophoric function analyzed by
			Bugaeva <Ref k="bugaeva2008" p="40–44" />, not from switch-reference morphology. The
			clause-linkage chapters provide the detailed comparison: see
			<Xr ch="hine-akusu-switch-reference" /> and <Xr ch="clause-linkage-overview" />.
		</p>
	</S>
</S>

<S t="The location noun class as role disambiguator" id="location-nouns">
	<p>
		When two third-person participants share the same zero marking, the lexical class of
		<em>location</em> nouns provides a means of role assignment. Nouns designating places or spatial
		relations — <i lang="ain-Latn">or</i> 'inside/place', <i lang="ain-Latn">ka</i> 'above',
		<i lang="ain-Latn">sam</i> 'near', <i lang="ain-Latn">corpok</i> 'below', and others — are
		semantically constrained to the Location argument of a predicate. When one participant is or
		includes a location noun, it is unambiguously the Location role, and the other must be theme or
		patient. Role is resolved without case marking or fixed word order
		<Ref k="nakagawa2022pos" />; <Ref k="bugaeva2022" />.
	</p>

	<Ex
		m="cep saranip or a=oma-re"
		g="fish basket LOC 4.A=put.in-CAUS"
		tr="She put the fish into the basket."
		constructed
		note="Constructed to illustrate location-noun role assignment. The NP saranip or (basket + locative noun or 'inside') is unambiguously the Goal; cep (fish) must be the theme. Without or, both NPs would be semantically eligible for either argument role when both are zero-indexed."
	/>

	<p>
		The attested test case from Nakagawa's Handbook chapter is the contrast between
		<i lang="ain-Latn">saranip or oma-re</i> 'put into the basket' (where <i lang="ain-Latn">or</i>
		flags the goal) and the ambiguous <i lang="ain-Latn">saranip oma-re</i> without it, where the
		basket could be either theme or goal <Ref k="nakagawa2022pos" />. Bugaeva takes the location
		class as evidence that argumenthood is shared between the bound person index and the
		coreferential NP, since only a semantically contrastive NP can bear this tracking weight
		<Ref k="bugaeva2022" />.
	</p>

	<p>
		The mechanism is a lexical resource, not a grammatical one: it operates only when one of the
		participants is a location noun, which leaves the common case of two ordinary-noun third-person
		arguments to plausibility and discourse context <Ref k="nakagawa2024" p="363" />. Its full
		treatment is in <Xr ch="constituent-order-head-final" /> and
		<Xr ch="nonconfigurationality-pronominal-argument" />.
	</p>
</S>

<S t="Topic marking and participant tracking" id="topic-marking">
	<p>
		A referent that is being introduced as the topic of a sustained passage, or that re-enters
		discourse salience after an interval, is often fronted and marked by the adverbial particle
		<i lang="ain-Latn">anak(ne)</i>. The particle functions comparably to Japanese
		<span lang="ja">は</span> in establishing a topic for the clauses that follow, but it is used
		more sparingly — it carries the weight of "as for (X), specifically" rather than neutral
		givenness marking, and it is not re-applied clause by clause to a topic already active in the
		discourse <Ref k="nakagawa2024" p="364" />; <Ref k="shibatani1990" p="38–39" />. Community
		practice corroborates this: an established topic does not need to be re-marked; omitting
		<i lang="ain-Latn">anakne</i> when the referent is clear from context is normal (nukopoli,
		aynu-corpora Discord, 2024-11-09, asserted; <Ref k="aynucorporadiscord" />) ‹corpus-confirmed›.
	</p>

	<Ex
		m="a=kor seta anakne i=sam ta arpa=an"
		g="4.A=have dog TOP 4.O=near LOC go=4.S"
		tr="As for my dog, it went right beside me."
		constructed
		note="Constructed to illustrate anakne topic-fronting. The possessed NP a=kor seta 'my dog' is marked as topic; subsequent clauses maintain reference by zero anaphora, with the dog as subject (=4.S on intransitives) and the narrator tracked by 4.O."
	/>

	<p>
		The attested corpus contains topicalized possessed-subject NPs of precisely this type. In an
		<i lang="ain-Latn">uwepeker</i> narrated by Kawakami Matsuko, the sentence
		<i lang="ain-Latn">a=kor seta anakne i=oyakke oma ka somo ki p ne kusu i=sam ta ukasuy
		ipe=an</i> — 'my dog, as for it, never left my side, so it ate (together) with me' — introduces
		the dog as topic with <i lang="ain-Latn">anakne</i> and then tracks it by zero anaphora and
		person indices through the remainder of the episode <Ref k="ilcaa1976" />
		(Kawakami Matsuko, AA研アイヌ語資料, Saru [aa-irc/009#393]).
	</p>

	<p>
		The full syntax of <i lang="ain-Latn">anak(ne)</i>, including its scope, its interaction with
		focus particles, and its distributional limits, is treated in <Xr ch="topic-marking-anakne" />
		and <Xr ch="cleft-nominalization-focus" />.
	</p>
</S>

<S t="Scene transition in narrative" id="scene-transition">
	<p>
		Participant continuity within a narrative episode is sustained by clause-chaining with
		<i lang="ain-Latn">wa</i> and <i lang="ain-Latn">hine</i>: where person indices remain constant
		across chained clauses, a single participant is tracked through a sustained sequence. The
		statistical tendency of <i lang="ain-Latn">wa</i> toward same-subject reference — approximately
		90% of <i lang="ain-Latn">wa</i>-chained clauses in Refsing's Shizunai data share their
		subject <Ref k="refsing1986" /> — reflects a discourse-structural preference rather than a
		grammatical constraint; different-subject sequences with <i lang="ain-Latn">wa</i> are attested
		‹corpus-suggested›. See <Xr ch="sequential-wa-and-clause-chaining" />.
	</p>

	<p>
		Episode and actor changes are marked by the construction
		<i lang="ain-Latn">a p</i> / <i lang="ain-Latn">a korka</i>, comprising the perfective auxiliary
		<i lang="ain-Latn">a</i> followed by the nominalizer <i lang="ain-Latn">p</i> or the adversative
		particle <i lang="ain-Latn">korka</i>. Bugaeva describes this construction as marking "the point
		at which the scene, topic, or actor in the story changes," typically followed by the orienting
		adverb <i lang="ain-Latn">tane</i> 'now' <Ref k="bugaeva2022" />. The mechanism operates at the
		narrative-structural level, above the clause-linkage system, and is developed in
		<Xr ch="tail-head-linkage-and-narrative-cohesion" />.
	</p>

	<Ex
		m="oka=an a p tane poro=an wa inkar=an"
		g="exist=4.S PFV NMLZ now grow.up=4.S CONJ look.around=4.S"
		tr="[We] had been living — and now I had grown up and looked around."
		constructed
		note="Constructed to illustrate the a p scene-boundary construction. The fourth-person suffix =an indexes the protagonist-narrator throughout both episodes; a p closes the preceding episode; tane 'now' opens the following one. Based on the pattern described by Bugaeva (2022)."
	/>
</S>

<S t="The absence of morphological switch-reference" id="no-switch-reference">
	<p>
		Ainu has no morphological switch-reference system <Ref k="bugaeva2022" />; <Ref k="sato2025a" p="371" />.
		In switch-reference languages, a clause-linking morpheme encodes whether the subject of the
		dependent clause is the same as or different from the subject of an adjacent clause. No such
		morpheme exists in Ainu. The clause-linking particles
		<i lang="ain-Latn">wa</i>, <i lang="ain-Latn">hine</i>, <i lang="ain-Latn">kor</i>, and
		<i lang="ain-Latn">kane</i> are linkers between finite clauses, not non-finite subordinators
		with an obligatory co-reference specification; and the language has no converbs — non-finite
		verbal forms that typically carry switch-reference morphology — in the relevant typological sense
		<Ref k="bugaeva2022" />; <Ref k="refsing1986" />.
	</p>

	<p>
		The functions that switch-reference systems serve elsewhere are distributed across the cluster of
		mechanisms described in this chapter: the obligatory person indices identify participants at each
		verb; zero anaphora propagates known referents; the fourth-person form signals the story-internal
		perspective and the logophoric reported-speaker; the location noun class resolves two zero-marked
		third-person roles; topic-fronting with <i lang="ain-Latn">anak(ne)</i> re-establishes
		prominence; and the <i lang="ain-Latn">a p</i> construction flags episode boundaries. None of
		these constitutes switch-reference in the typological sense, and the differences matter for
		comparing Ainu with its geographically adjacent languages ‹consensus›.
	</p>

	<p>
		Ijäs correctly describes Ainu reference tracking as a discourse-pragmatic matter without
		positing a switch-reference system, noting the topic particle and the person-form contrast
		without conflating them with morphological switch-reference <Ref k="ijas2023" />. The formal
		typological comparison is available in <Xr ch="hine-akusu-switch-reference" />.
	</p>
</S>
