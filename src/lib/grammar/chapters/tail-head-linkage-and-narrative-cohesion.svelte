<!-- src/lib/grammar/chapters/tail-head-linkage-and-narrative-cohesion.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Narrative clause chains and cohesion" id="overview">
	<p>
		Oral narrative in Hokkaido Ainu — both prose tales (<i lang="ain-Latn">uwepeker</i>) and
		verse epics (<i lang="ain-Latn">kamuy yukar</i> / <i lang="ain-Latn">yukar</i>) — is built
		from extended chains of fully finite clauses linked by post-predicate particles. The
		inventory of those particles and the structural principle of finite-clause chaining are set
		out in <Xr ch="clause-linkage-overview" />. The present chapter focuses on the devices
		through which those chains produce discourse cohesion over longer stretches: the
		recapitulative (tail-head) repetition of a preceding verb at a chain juncture, the
		recapitulative formal-noun frame <i lang="ain-Latn">pe ne hike</i>, the pattern by which
		the evidential <i lang="ain-Latn">ruwe ne</i> plus a connective marks the close of a
		narrative episode, and the free discourse connective
		<A w="orowa" gl="and then, from there" />(<i lang="ain-Latn">no</i>) that links sentences
		across episode boundaries.
	</p>

	<p>
		The distribution of cohesion devices is genre-sensitive.
		<A w="hine" gl="and (then), neutral clause-chaining" /> is the unmarked clause-chaining
		particle in prose <i lang="ain-Latn">uwepeker</i> and is more frequent in folk tales than
		in colloquial speech <Ref k="refsing1986" p="242" />; <Ref k="nakagawa2024" p="338" />.
		The discovery connective <A w="awa" gl="and then, whereupon (verse)" /> characterises verse
		narration in Saru, while its prose counterpart
		<A w="akusu" gl="and then, whereupon (prose)" /> dominates in
		<i lang="ain-Latn">uwepeker</i> and in several eastern dialects; the distribution is
		treated in <Xr ch="hine-akusu-switch-reference" /> and the broader genre system in
		<Xr ch="oral-literature-genre-taxonomy" /> <Ref k="nakagawa2024" p="345" />;
		<Ref k="sato2008" p="47–48" />. The table below summarises the genre and dialect profile
		of the main cohesion devices.
	</p>

	<table>
		<thead>
			<tr>
				<th>device</th>
				<th>primary genre</th>
				<th>dialect distribution</th>
				<th>function</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">hine</i> multi-clause chain</td>
				<td>prose <i lang="ain-Latn">uwepeker</i></td>
				<td>pan-Hokkaido (absent in 本別; <i lang="ain-Latn">hinne</i> ‹TOK›)</td>
				<td>event enumeration, scene-setting opening frame</td>
			</tr>
			<tr>
				<td>tail-head verb repetition + <i lang="ain-Latn">awa</i></td>
				<td>verse <i lang="ain-Latn">kamuy yukar</i> / <i lang="ain-Latn">yukar</i></td>
				<td>Saru verse, 幌別, 石狩</td>
				<td>recapitulation across episode juncture</td>
			</tr>
			<tr>
				<td>tail-head verb repetition + <i lang="ain-Latn">akusu</i></td>
				<td>prose narrative</td>
				<td>静内, 十勝, general prose</td>
				<td>recapitulation across episode juncture</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">pe ne hike</i> recapitulative frame</td>
				<td>prose <i lang="ain-Latn">uwepeker</i> opening sections</td>
				<td>primarily SAR</td>
				<td>chain-close recap, pivot into new narrative segment</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ruwe ne</i> + connective</td>
				<td>prose + verse</td>
				<td>pan-Hokkaido</td>
				<td>episode close, scene transition</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">orowa(no)</i></td>
				<td>any narrative</td>
				<td>pan-Hokkaido</td>
				<td>inter-sentential forward link, macro-structure</td>
			</tr>
		</tbody>
	</table>
</S>

<S t="hine as the primary narrative chaining particle" id="hine-narrative">
	<p>
		Among the conjunctive particles, <A w="hine" gl="and (then), neutral clause-chaining" />
		is the one most characteristic of oral narrative prose. Nakagawa identifies it as the
		particle of pure temporal enumeration: it lists events in sequence without taking a stance
		on how those events are causally or aspectually related, and it occurs heavily in the
		opening segments of prose tales, where the narrator sketches the circumstances of the story
		world <Ref k="nakagawa2024" p="338" />. Refsing corroborates the genre bias for Shizunai:
		<i lang="ain-Latn">hine</i> is more frequent in folk tales than in everyday speech
		<Ref k="refsing1986" p="242" />. The looser bond of <i lang="ain-Latn">hine</i> relative
		to <A w="wa" gl="and, sequential/result-state connector" /> — which integrates two acts
		into one coherent event — makes it the preferred chainer when the narrator wants to
		preserve the distinctness of each action; the structural contrast is treated in
		<Xr ch="sequential-wa-and-clause-chaining" />.
	</p>

	<p>
		The stock opening of a Saru <i lang="ain-Latn">uwepeker</i> exploits this characteristic
		directly. The formula presents the narrator's family setting through a chain of bare
		existential predicates joined by <i lang="ain-Latn">hine</i>, arriving at the existential
		<A w="oka" gl="exist (plural), live" /><i lang="ain-Latn">=an</i> that marks the narrative
		present:
	</p>

	<Ex
		m="a=onaha an a=unuhu an hine oka=an"
		g="4.POSS=father exist 4.POSS=mother exist CONJ exist.PL=4.S"
		tr="My father was there, my mother was there, and we lived."
		cite="nakagawa2024:338"
		dial="SAR"
		place="Nakagawa ex. 601; stock uwepeker opening"
		note="The fourth-person prefix a= on the possessed kinship nouns marks the protagonist's father and mother. The formula [kin-NP exist, kin-NP exist hine, oka=an] recurs across Saru uwepeker narrations as a standard framing device."
	/>

	<p>
		The same particle sustains longer chains through the body of a narrative. Multi-clause
		<i lang="ain-Latn">hine</i> chains serve a pacing function: each clause delivers one
		distinct action, and the chain as a whole presents those actions as a continuous, unified
		segment. The following example shows three consecutive
		<i lang="ain-Latn">hine</i> junctures carrying a single household scenario:
	</p>

	<Ex
		m="nea su ka itanki ka pirkano huraye hine rorunso or ta kor wa arpa hine ukao hine oka=an"
		g="DEM pot also bowl also well wash CONJ upper.seat at LOC carry CONJ go CONJ put.away CONJ exist.PL=4.S"
		tr="(She) washed those pots and bowls cleanly, brought them to the seat of honour, stored them away, and they lived on."
		cite="nakagawa2024:338"
		dial="SAR"
		place="Nakagawa ex. 599"
		note="Three consecutive hine junctures form one narrative segment. Fourth-person prefixes on the transitives huraye 'wash' and kor 'carry' are not displayed in the source transcription; they surface phonologically in performance as reduced a=. The chain closes with the narrative existential oka=an."
	/>

	<p>
		The prosodic autonomy of <i lang="ain-Latn">hine</i> — a speaker may close the preceding
		clause with full sentence-final intonation, pause, and only then produce the particle and
		the following clause — allows the narrator to control pacing: each
		<i lang="ain-Latn">hine</i> juncture is a potential breathing point in the performance
		<Ref k="nakagawa2024" p="514" />; <Ref k="refsing1986" p="238" />. This prosodic
		flexibility, shared across the bound conjunctive particles but exploited most visibly by
		<i lang="ain-Latn">hine</i> in multi-clause narrative chains, allows extended episodes to
		be calibrated to the speed and emphasis the narrator wants in the moment.
	</p>
</S>

<S t="Tail-head (recapitulative) linkage" id="tail-head">
	<p>
		Tail-head linkage is the pattern in which the last predicate of one clause (the
		<em>tail</em>) is repeated as the first predicate of the following clause (the
		<em>head</em>), creating a recapitulative bridge across the juncture. In Hokkaido Ainu
		oral verse the pattern concentrates at <A w="awa" gl="and then, whereupon (verse)" />
		junctures, where the tail verb is resumed in the next clause either in the same form or
		with a complement marker such as <A w="kuni" gl="(that) [complementizer]" />. The
		bridging connective between tail and head is <i lang="ain-Latn">awa</i> in Saru verse,
		<i lang="ain-Latn">akusu</i> in Saru prose and in several eastern dialects
		<Ref k="nakagawa2024" p="345" />; <Ref k="sato2008" p="47–48" />. The following verse
		couplet, transmitted via Nakagawa from 金田一 (1931b), shows the pattern at its clearest:
	</p>

	<Ex
		m="inkar=an awa somosuykusun inkar=an kuni a=ramu rok hi"
		g="look=4.S CONJ beyond.belief look=4.S COMP 4.A=think PRF NMLZ"
		tr="(I) looked — at something beyond all imagining that (I) would look at — so (I) had thought."
		cite="nakagawa2024:345"
		dial="SAR"
		place="Nakagawa ex. 631; verse, after Kindaichi 1931b: 406"
		note="Four verse lines displayed as one morphemic line. The tail verb inkar=an '(I) looked' at the end of line 1 is repeated as the head of line 3 (inkar=an kuni 'that (I) would look'), with the awa discovery connective bridging the juncture. somosuykusun 'something beyond imagining' is a lexical expression whose internal morphology is opaque in the accessible sources; the gloss follows Nakagawa's Japanese rendering まさかそのようなものを. rok is a perfect marker."
	/>

	<p>
		The repetition is structural, not merely stylistic. By re-opening the new clause with the
		same verb that closed the previous one, the narrator first names the action, then suspends
		it across the juncture to frame the unimaginable object, and finally resumes the same verb
		as an embedded complement under <i lang="ain-Latn">a=ramu rok</i> 'had thought'. The
		<i lang="ain-Latn">awa</i> connective marks the whole as a discovery event: a looking that
		encountered something unforeseen. This suspension effect — forcing the listener to hold the
		verb in suspension during the inter-clausal parenthetical and only then receive its
		complement — is a resource of oral poetics in Saru verse ‹corpus-suggested›.
	</p>

	<p>
		In prose <i lang="ain-Latn">uwepeker</i>, the same recapitulative function falls to
		<i lang="ain-Latn">akusu</i> rather than <i lang="ain-Latn">awa</i>, and the bridged
		predicate need not be restated verbatim: a demonstrative or anaphoric phrase may stand for
		the recapitulated content. The <i lang="ain-Latn">awa</i> / <i lang="ain-Latn">akusu</i>
		register split reflects the broader genre-dialect conditioning documented in
		<Xr ch="hine-akusu-switch-reference" />: <i lang="ain-Latn">awa</i> is the expected
		discovery connective in Saru verse and dominates in 幌別 and 石狩 prose;
		<i lang="ain-Latn">akusu</i> is the regular form in Saru prose, 静内, and 十勝
		<Ref k="nakagawa2024" p="345" />.
	</p>
</S>

<S t="The pe ne hike recapitulative frame" id="pe-ne-hike">
	<p>
		A second recapitulative device operates at the level of a whole clause chain rather than
		a single verb. After a <i lang="ain-Latn">hine</i>-chain narrates the opening
		circumstances, the chain frequently closes on the structure
		<i lang="ain-Latn">pe ne hike</i> — the formal noun
		<A w="p" gl="thing, fact (nominalizer)" /> predicated by the copula
		<A w="ne" gl="be (copula)" /> followed by the connective
		<A w="hike" gl="(loose-link connective) though, and" />. The
		<i lang="ain-Latn">pe ne</i> nominalizes the entire preceding chain as a fact ('it was the
		case that …'), and <i lang="ain-Latn">hike</i> then pivots to the next narrative segment.
		The construction packages everything narrated up to that point as settled background and
		opens the narrative onto the first complication of the story proper. The formal-noun
		grammaticalization cline that underlies this use — relative-head → complement-marker →
		connective — is treated in <Xr ch="nominalization-p-pe" />.
	</p>

	<p>
		The pattern recurs across Saru <i lang="ain-Latn">uwepeker</i> openings. The two examples
		below are from corpus narrations by the same Saru narrator; they share the closing
		<i lang="ain-Latn">pe ne hike</i> but embed different chain lengths before it.
	</p>

	<Ex
		id="pene-hike-1"
		m="a=yupi-hi an hine oka=an pe ne hike"
		g="4.POSS=elder.brother-POSS exist CONJ exist.PL=4.S NMLZ COP CONJ"
		tr="My elder brother was there, and we lived on — and, being that, …"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker no. 21, ILCAA Ainu materials; aa-irc/031#1"
		note="The pe ne hike construction recapitulates the two-clause hine-chain (elder brother existed; narrator and sibling lived on) as an established fact and pivots to the story's opening event. a=yupi-hi: fourth-person possessive prefix a= on the possessed-form noun yupi-hi 'elder brother (possessed form)'."
	/>

	<Ex
		id="pene-hike-2"
		m="rikun kanto ta a=sa-ha i=resu hine oka=an pe ne hike"
		g="be.high heaven LOC 4.POSS=elder.sister-POSS 4.O=raise CONJ exist.PL=4.S NMLZ COP CONJ"
		tr="In the upper sky, my elder sister raised me, and we lived on — and, being that, …"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker no. 15, ILCAA Ainu materials; aa-irc/022#0"
		note="A richer opening: the locative phrase rikun kanto ta 'in the upper sky' establishes the supernatural story world; then a raising-and-living hine-chain closes on pe ne hike. The fourth-person object prefix i= on resu 'raise' indexes the narrator as the protagonist being raised by the sister."
	/>

	<p>
		The recurrence of the <i lang="ain-Latn">… hine oka=an pe ne hike</i> closure across
		multiple narrations by the same speaker, and its attestation for other Saru narrators,
		supports treating it as a formulaic frame rather than a freely variable construction. Corpus
		evidence places the frame consistently at opening boundaries; it is not a device attested
		with the same density mid-narrative ‹corpus-suggested›.
	</p>
</S>

<S t="Episode boundaries: ruwe ne + connective" id="episode-boundary">
	<p>
		The evidential
		<A w="ruwe ne" gl="it is a fact that … (knowledge evidential)" />
		serves a narrative cohesion function beyond its evidential semantics: in oral narration it
		regularly marks the close of a narrative episode before a connective opens the next one.
		Dal Corso identifies <i lang="ain-Latn">ruwe ne</i> as the default predicate of the
		narrative frame-text in Saru Hokkaido narrations — the form through which the narrator
		presents story-world propositions as established, known facts — and traces its dominance in
		the paradigm partly to this function <Ref k="dalcorso2018" p="331" />. The evidential
		architecture underlying that use is treated in <Xr ch="ruwe-ne-inferential" />.
	</p>

	<p>
		Community observation from the aynu-corpora Discord corroborates and extends this picture:
		nukopoli notes that <i lang="ain-Latn">ruwe ne</i> is especially frequent in folktales and
		legends, that it functions for scene transitions and summaries analogously to Japanese
		<span lang="ja">のだ</span>, and that the sequence
		<i lang="ain-Latn">ruwe ne akusu</i> is a common narrative collocation (nukopoli,
		aynu-corpora Discord 2024; <Ref k="aynucorporadiscord" />) ‹corpus-suggested›. This is
		consistent with Dal Corso's finding and with the observation by Satō that
		<i lang="ain-Latn">akusu</i> can attach after a <i lang="ain-Latn">ruwe ne</i> tail —
		a combination that would be anomalous in Japanese, where the factual
		<span lang="ja">と/たら</span> conditionals reject a preceding
		<span lang="ja">のだ</span> <Ref k="sato2009" p="52–53" />.
	</p>

	<p>
		The scope ordering is fixed: the evidential sits above clause-internal aspect but below the
		connective, giving the narrative formula [VP] – <i lang="ain-Latn">ruwe ne</i> –
		connective, where the connective can be <i lang="ain-Latn">akusu</i> (discovery pivot),
		<i lang="ain-Latn">p</i> or <i lang="ain-Latn">hike</i> (loose or adversative link), or
		<i lang="ain-Latn">korka</i> (counter-expectation) <Ref k="nakagawa2024" p="393" />. The
		following Chitose example illustrates the <i lang="ain-Latn">ruwe ne akusu</i>
		episode-pivot:
	</p>

	<Ex
		m="kanpi ku=sanke ru-we ne akusu itasa kanpi ek ru-we ne"
		g="letter 1SG.A=send.out track-POSS COP CONJ in.return letter come track-POSS COP"
		tr="I sent a letter, and (then, it turned out) a reply arrived."
		cite="sato2008:47; sato2009:52"
		dial="CHI"
		note="The ruwe ne tail closes the first event as an established fact before akusu pivots to the discovered consequence. In oral narrative the same sequence marks episode-level transitions, signalling the boundary between what has been established and what unfolds next."
	/>

	<p>
		The perfective auxiliary <A w="a" gl="perfective (completive aspect)" /> may appear
		between the evidential and the connective, adding a signal that the first situation is
		completed and detached from the present. The Handbook's descriptive grammar reports that
		the sequence perfective <i lang="ain-Latn">a</i> plus a connective such as
		<i lang="ain-Latn">korka</i>, <i lang="ain-Latn">wa</i>, or nominal
		<i lang="ain-Latn">p</i> tends to fall at points where the scene, topic, or actor of a
		narrative changes <Ref k="bugaeva2022" /> ‹speculative› (the chapter-and-page attribution is
		unconfirmed). The structure appears in the following Saru example
		from Dal Corso's evidence corpus:
	</p>

	<Ex
		m="mat-kor hine oka=an ru-we ne a p"
		g="wife-have CONJ exist.PL=4.S track-POSS COP PFV NMLZ"
		tr="He had taken a wife, and they went on living — and yet, (now something changed) …"
		cite="dalcorso2018:196"
		dial="SAR"
		place="Wateke, Saru; Dal Corso siglum TMA: 2"
		note="The hine-chain (took a wife; lived on) is nominalized into a ruwe ne predicate, then the perfective a and the connective nominal p mark a narrative turn. The p is not an argument of the following clause — it is at the connective end of the formal-noun grammaticalization cline (see the nominalization chapter). The turn coincides with a change in the narrative state of affairs."
	/>

	<p>
		The <i lang="ain-Latn">ruwe ne a p</i> formula functions as the episode-boundary
		counterpart of the <i lang="ain-Latn">pe ne hike</i> opening frame. Where
		<i lang="ain-Latn">pe ne hike</i> closes a background-setting chain and pivots forward,
		the <i lang="ain-Latn">ruwe ne a p</i> / <i lang="ain-Latn">ruwe ne akusu</i> cluster
		closes a completed narrative segment and marks entry into a new situation. Both depend on
		the grammaticalization of formal nouns (<i lang="ain-Latn">pe</i>, <i lang="ain-Latn"
			>p</i
		>) from relative-head through complement-marker to connective use, as described in
		<Ref k="nakagawa2024" p="507–516" paren />.
	</p>
</S>

<S t="The free discourse connective orowa(no)" id="orowa">
	<p>
		Inter-sentential cohesion — the link between sentences that stand as separate prosodic and
		information units — is carried by free connective adverbs rather than by the bound
		post-predicate particles. The most frequent in oral narrative is
		<A w="orowa" gl="and then, after that, from there" />(<i lang="ain-Latn">no</i>), derived
		from the locative noun <i lang="ain-Latn">or</i> 'place, location' plus the ablative
		<i lang="ain-Latn">wa</i> 'from', with the compositional meaning 'from there onward'.
		Related forms include <i lang="ain-Latn">ora</i> and <i lang="ain-Latn">oraun</i>
		<Ref k="nakagawa2024" p="516–517" />. Ijäs notes <i lang="ain-Latn">orowa</i> as a
		sequence-emphasiser that can follow <i lang="ain-Latn">wa</i> in a compound linking phrase
		<Ref k="ijas2023" />.
	</p>

	<p>
		What distinguishes these free connectives from the bound particles is their syntactic
		freedom: they can begin a new sentence, they need no host predicate, and they can stack
		after a bound particle rather than replacing it. Nakagawa draws the organizing cut between
		bound <span lang="ja">接続助詞</span> (conjunctive particles) and free
		<span lang="ja">副詞句</span> (connective adverb phrases), placing
		<i lang="ain-Latn">orowa(no)</i>, <i lang="ain-Latn">ora</i>, and
		<i lang="ain-Latn">rapok(ke)(ta)</i> 'meanwhile' in the second class
		<Ref k="nakagawa2024" p="516" />; Refsing makes the same cut for Shizunai between bound
		conjunctionalizers and free conjunctions <Ref k="refsing1986" p="238" />. For narrative
		cohesion, this syntactic freedom makes <i lang="ain-Latn">orowa(no)</i> the appropriate
		device when the narrator wants to jump across a topic or scene boundary — where a bound
		particle like <i lang="ain-Latn">hine</i> would imply continuity within the same
		participant chain — and to re-orient the listener from one starting point to a new one.
	</p>
</S>

<S t="Reference tracking across narrative chains" id="reference-chains">
	<p>
		Hokkaido Ainu has no morphological switch-reference system: there are no dedicated
		same-subject or different-subject verb forms, and no converb series whose morphology
		encodes participant continuity <Ref k="bugaeva2022" />. Reference tracking across a clause
		chain therefore rests on the obligatory person indexes on each finite verb and on the
		statistical preferences associated with each connective. The general treatment of this
		mechanism belongs in <Xr ch="reference-tracking" />; the points specific to narrative
		chains are as follows.
	</p>

	<p>
		Within a <i lang="ain-Latn">hine</i>-chain, the participant set established in the opening
		frame tends to persist across junctures. For <i lang="ain-Latn">wa</i>, Refsing finds that
		the predicates it joins share a subject in approximately ninety percent of her Shizunai
		material, making it a same-subject-preferring chainer without a same-subject requirement
		<Ref k="refsing1986" p="240" />. <i lang="ain-Latn">Hine</i> is structurally looser — it
		separates events rather than integrating them as one coherent act — and within an extended
		narrative segment the participant set introduced at the opening tends to carry through its
		junctures ‹corpus-suggested›. The person indexes on each finite verb make any departure from
		that continuity visible: a shift from fourth-person
		<i lang="ain-Latn">a=</i> / <i lang="ain-Latn">=an</i> to first-person
		<i lang="ain-Latn">ku=</i> inside a chain signals a shift of narrated perspective, most
		commonly into a direct-speech quotation or a moment of vivid self-identification within the
		story.
	</p>

	<p>
		Discovery connectives — <i lang="ain-Latn">awa</i> and <i lang="ain-Latn">akusu</i> —
		regularly accommodate reference changes across the junctures they bridge, since their
		semantics (the first event is completed and a new, often unexpected situation is
		encountered) naturally accompanies a shift in the narrated actor or scene. At the macro
		level of episodes, the <i lang="ain-Latn">ruwe ne a p</i> /
		<i lang="ain-Latn">ruwe ne akusu</i> boundary markers identified in the preceding section
		tend in corpus narrative to coincide with just those points where the actor or scene
		changes <Ref k="bugaeva2022" /> ‹speculative› (the chapter-and-page attribution is
		unconfirmed). The interaction of the evidential system with narrative genre is
		pursued further in <Xr ch="narrative-tam-evidential-patterning-by-genre" />.
	</p>
</S>
