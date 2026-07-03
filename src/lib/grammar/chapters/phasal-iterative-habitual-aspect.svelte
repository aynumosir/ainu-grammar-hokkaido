<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Phasal and iterative strategies in the auxiliary system" id="overview">
	<p>
		Three aspectual domains occupy the periphery of the core existential-aspect system. Completive
		aspect — the marking that an event has been carried through to its endpoint — is expressed by
		the pair verbs <i lang="ain-Latn">wa isam</i> and <i lang="ain-Latn">wa okere</i>, which
		draw on the lexical content of <A w="isam" gl="not exist, be absent" /> and
		<A w="okere" gl="finish" /> respectively. Iterative aspect, marking that an event or state
		recurs, is expressed by the reduplicated perfective auxiliary
		<i lang="ain-Latn">a&nbsp;…&nbsp;a</i> and by the dedicated auxiliary
		<A w="ranke" gl="do repeatedly, again and again" />. Habitual and generic readings arise from
		<i lang="ain-Latn">kor an</i> in appropriate temporal or frequentative contexts. The
		recent-perfect auxiliary <A w="nisa" gl="just completed" /> marks an event as already
		finished and still current at the moment of speech.
	</p>
	<p>
		All these strategies recruit the auxiliary and pair-verb frames whose architecture is laid out
		in <Xr ch="tam-overview" />. The progressive <i lang="ain-Latn">kor an</i> and the resultative
		<i lang="ain-Latn">wa an</i> are treated as the core existential-aspect system in
		<Xr ch="existential-aspect-an-oka" />; the perfective auxiliary <i lang="ain-Latn">a</i>
		and its admirative counterpart <i lang="ain-Latn">aan</i> are treated in
		<Xr ch="perfective-anterior-a" />.
	</p>
	<table>
		<thead>
			<tr>
				<th>aspect domain</th>
				<th>form</th>
				<th>value</th>
				<th>frame type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>inceptive</td>
				<td><i lang="ain-Latn">kor an</i> (extension)</td>
				<td>change underway, endpoint in view</td>
				<td>pair verb</td>
			</tr>
			<tr>
				<td>completive (disappearance)</td>
				<td><i lang="ain-Latn">wa isam</i></td>
				<td>action completes with subject or outcome gone</td>
				<td>pair verb</td>
			</tr>
			<tr>
				<td>completive (throughput)</td>
				<td><i lang="ain-Latn">wa okere</i></td>
				<td>action carried through to its end</td>
				<td>pair verb</td>
			</tr>
			<tr>
				<td>iterative (reduplication)</td>
				<td><i lang="ain-Latn">a … a</i></td>
				<td>completed event occurs repeatedly</td>
				<td>auxiliary reduplication</td>
			</tr>
			<tr>
				<td>iterative (auxiliary)</td>
				<td><i lang="ain-Latn">ranke</i></td>
				<td>action done again and again</td>
				<td>auxiliary</td>
			</tr>
			<tr>
				<td>habitual</td>
				<td><i lang="ain-Latn">kor an</i> + frequentative frame</td>
				<td>customary or repeated action</td>
				<td>pair verb</td>
			</tr>
			<tr>
				<td>recent perfect</td>
				<td><i lang="ain-Latn">nisa</i></td>
				<td>event just finished, result current</td>
				<td>auxiliary</td>
			</tr>
		</tbody>
	</table>
</S>

<S t="Completive aspect: wa isam and wa okere" id="completive">
	<p>
		Both <i lang="ain-Latn">wa isam</i> and <i lang="ain-Latn">wa okere</i> belong to the
		pair-verb frame introduced in <Xr ch="tam-overview" />: the second member remains a fully
		finite verb, and both predicates in <i lang="ain-Latn">V wa V₂</i> carry their own subject
		affixes. The bracketing is therefore
		<i lang="ain-Latn">[V]<sub>VP</sub> wa [V₂]<sub>VP</sub></i>, formally two clauses joined by
		the sequential conjunctive <i lang="ain-Latn">wa</i>, in contrast to the bare auxiliaries
		that attach directly without a conjunction
		<Ref k="nakagawa2024" p="450–451" />; <Ref k="bugaeva2012" p="495" />. The table below
		situates the two completives alongside <i lang="ain-Latn">wa anu</i>, which carries a
		related but distinct value.
	</p>
	<table>
		<thead>
			<tr>
				<th>form</th>
				<th>second verb</th>
				<th>value</th>
				<th>Japanese gloss</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">wa isam</i></td>
				<td><i lang="ain-Latn">isam</i> 'not exist, be absent'</td>
				<td>completion with disappearance or adverse outcome</td>
				<td><span lang="ja">〜てしまう</span></td>
				<td><Ref k="nakagawa2024" p="452" />; <Ref k="bugaeva2012" p="495" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">wa okere</i></td>
				<td><i lang="ain-Latn">okere</i> 'finish'</td>
				<td>action carried through to completion</td>
				<td><span lang="ja">〜てしまう / 〜おえる</span></td>
				<td><Ref k="nakagawa2024" p="452–453" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">wa anu</i></td>
				<td><i lang="ain-Latn">anu</i> 'put, place'</td>
				<td>leave the result in place (concrete objects)</td>
				<td><span lang="ja">〜ておく</span></td>
				<td><Ref k="nakagawa2024" p="453" /></td>
			</tr>
		</tbody>
	</table>
	<p>
		<i lang="ain-Latn">wa isam</i> marks completion of the event with the added sense that the
		subject or its outcome disappears or turns out badly; the second verb
		<i lang="ain-Latn">isam</i> 'not exist, be absent' retains its concrete lexical force while
		grammaticalising into the completion marker. Nakagawa's Japanese gloss is
		<span lang="ja">〜てしまう</span>, and Bugaeva gives it the label "completive"
		<Ref k="nakagawa2024" p="452" />; <Ref k="bugaeva2012" p="495" />.
	</p>
	<Ex
		m="tane rikin wa isam pe okake ta"
		g="now ascend CONJ be.gone NMLZ after LOC"
		tr="Now, after (the god) had ascended and vanished,"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 7 [aa-irc/005#251]"
		note="rikin wa isam: the subject rises and then is absent — isam retains its lexical sense 'be absent'. pe okake ta nominalizes the wa isam clause and frames it temporally."
	/>
	<Ex
		m="iyos onne pa wa isam"
		g="then grow.old PL CONJ be.gone"
		tr="Then they grew old and passed away."
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 8 (part 2) [aa-irc/007#438]"
		note="The postverbal plural clitic pa marks a plural subject; wa isam closes the sequence with the lexical force of disappearance."
	/>
	<Ex
		m="caricari wa isam ru-we ne kuni a=ramu kor"
		g="be.scattered CONJ be.gone track-POSS COP COMP 4.A=think while"
		tr="(while she was) thinking that (things) had been scattered and vanished,"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 9 [aa-irc/009#127]"
		note="wa isam is embedded inside a nominalized complement (ru-we ne) governed by ramu 'think'; kuni is the complementizer."
	/>
	<p>
		<i lang="ain-Latn">wa okere</i> uses <i lang="ain-Latn">okere</i> 'finish' as its second
		predicate and foregrounds thoroughness of completion rather than disappearance of the outcome.
		With stative predicates in Saru and Horobetsu, the construction shifts into an
		intensive-stative reading 'be extremely Adj', a transparent extension of 'finish being in a
		state' <Ref k="nakagawa2024" p="452–453" />.
	</p>
	<Ex
		m="e=kar wa okere"
		g="2SG.A=make CONJ finish"
		tr="You finished making it."
		constructed
		note="wa okere foregrounds completion of the action; there is no sense of loss or disappearance as in wa isam."
	/>
	<p>
		The pair-verb form <i lang="ain-Latn">wa okere</i> contrasts with the bare auxiliary
		<i lang="ain-Latn">okere</i> used without the conjunctive <i lang="ain-Latn">wa</i>:
		the conjunction-bearing version carries a nuance of regret or dismay at the completion,
		while the bare auxiliary is unmarked for affect <Ref k="takahashi2022" />. Nakagawa's
		Table 74 lists bare <i lang="ain-Latn">okere</i> as approximating
		<i lang="ain-Latn">wa okere</i> in meaning, confirming that the conjunctive version is the
		emotionally marked option <Ref k="nakagawa2024" p="453" />.
	</p>
	<p>
		Bugaeva notes a structural parallel between the pair-verb set and Japanese aspectual
		periphrases: <i lang="ain-Latn">wa isam</i> ≈ <span lang="ja">〜てしまう</span>,
		<i lang="ain-Latn">wa okere</i> ≈ <span lang="ja">〜おえる</span>,
		<i lang="ain-Latn">wa anu</i> ≈ <span lang="ja">〜ておく</span>. Nakagawa resists a
		simple calque account, pointing to <i lang="ain-Latn">wa inu</i> 'try by hearing/tasting'
		as a type that lacks a Japanese structural model
		(<span lang="ja">*〜て聞く</span>), suggesting the pair-verb frame is native and certain
		Japanese-facing semantic expansions developed under contact
		<Ref k="bugaeva2012" p="495" />; <Ref k="nakagawa2024" p="455" /> ‹contested›.
	</p>
</S>

<S t="Inceptive extensions of kor an" id="inceptive">
	<p>
		The progressive <i lang="ain-Latn">kor an</i>, whose core function is described in
		<Xr ch="existential-aspect-an-oka" />, extends into an inceptive domain when the predicate
		denotes a change of state and the temporal perspective falls near the onset of the change.
		Satō's examples make the extension concrete: <i lang="ain-Latn">sirpeker kor an</i> 'it is
		getting light' describes the sky as in the process of lightening before full daylight is
		established; the change is under way and its endpoint is in view
		<Ref k="sato2008" p="197" />. Bugaeva and Nakagawa both list the inceptive as one of the
		readings available to <i lang="ain-Latn">kor an</i> alongside the progressive core
		<Ref k="bugaeva2012" p="494" />; <Ref k="nakagawa2024" p="441" />.
	</p>
	<Ex
		m="sirpeker kor an"
		g="dawn.break while exist.SG"
		tr="Dawn is breaking; it is getting light."
		cite="sato2008:197"
		dial="HK"
		note="kor an with a change verb in its inceptive extension: the transition to daylight is ongoing and approaching its endpoint."
	/>
	<Ex
		m="epuykehe tane sipuske kor oka"
		g="bud-POSS now open while exist.PL"
		tr="The buds are now about to open."
		cite="sato2008:85"
		dial="HK"
		note="kor oka (plural existential) with a plural subject; the inceptive reading: the opening is under way with completion imminent."
	/>
	<p>
		No dedicated inceptive auxiliary exists in Saru or Chitose. The inceptive reading of
		<i lang="ain-Latn">kor an</i> is driven by verb type and discourse context, not by a
		distinct grammatical form. Prospective readings tied to intention or imminence —
		<A w="etokus" gl="be about to" />, <A w="etokoyki" gl="be getting ready to" />,
		<A w="oasi" gl="surely will" /> — are treated in <Xr ch="epistemic-irrealis-modality" />.
	</p>
</S>

<S t="Iterative aspect" id="iterative">
	<S t="The reduplicated a … a construction" id="reduplicated-a">
		<p>
			The perfective auxiliary <A w="a" gl="perfective/anterior (SG)" /> (plural
			<A w="rok" gl="perfective/anterior (PL)" />) reduplicates to mark iterative or
			emphatic-continuative aspect. The construction <i lang="ain-Latn">V a V a</i> signals
			that the event occurred repeatedly; when the subject is fourth person, the person clitic
			<i lang="ain-Latn">=an</i> migrates to the second auxiliary rather than remaining solely
			on the lexical verb <Ref k="nakagawa2024" p="307–308" />.
		</p>
		<Ex
			m="onkami=an a =an a"
			g="worship=4.S PFV =4.S PFV"
			tr="(I) worshipped again and again."
			cite="nakagawa2024:308"
			dial="SAR"
			place="ex. 453"
			note="Reduplicated a … a with a fourth-person subject: =an attaches to the second a. Only the person clitic reduplicate with a fourth-person subject, not the full stem."
		/>
		<p>
			Bugaeva labels this pattern "emphatic continuative" <Ref k="bugaeva2012" p="493" />.
			Ijäs, in her Lesson 9, treats prolonged continuity without connecting the pattern to the
			auxiliary <i lang="ain-Latn">a</i>; the correspondence is established by Nakagawa
			<Ref k="ijas2023" />; <Ref k="nakagawa2024" p="307" /> ‹corpus-confirmed›. The full
			treatment of <i lang="ain-Latn">a</i> — its morphological source, its contrast with
			<i lang="ain-Latn">aan</i>, and its range of values — belongs to
			<Xr ch="perfective-anterior-a" />.
		</p>
		<p>
			Lexical reduplication, a distinct phenomenon, operates inside roots and derivational
			suffixes: <i lang="ain-Latn">-rototke</i> encodes a violent repeating sound or act, and
			<i lang="ain-Latn">-atki</i> encodes repetition or persistence, both lexically restricted
			to certain phonological shapes <Ref k="nakagawa2024" p="204–208" />. That root-bound
			reduplication is not a productive auxiliary strategy; it is treated alongside the other
			Aktionsart suffixes in the lexical-aspect section of <Xr ch="tam-overview" />.
		</p>
	</S>
	<S t="The iterative auxiliary ranke" id="ranke">
		<p>
			The auxiliary <A w="ranke" gl="do repeatedly, again and again" /> attaches directly to
			the lexical verb and marks iterative or habitual repetition:
			<span lang="ja">何度も〜する</span> <Ref k="nakagawa2024" p="312" />. Bugaeva lists it
			as item 5 in her Saru auxiliary inventory with the label "iterative/habitual"
			<Ref k="bugaeva2012" p="493" />. Like the other auxiliaries in Nakagawa's Table 74,
			<i lang="ain-Latn">ranke</i> takes no person marking; the lexical verb carries the
			subject index. The following example shows <i lang="ain-Latn">ranke</i> inserted between
			the lexical verb and a progressive frame, stacking iterativity with a continuing
			situation:
		</p>
		<Ex
			m="arpa ranke kor oka=an"
			g="go ITR while exist.PL=4.S"
			tr="(They) keep going again and again."
			cite="nakagawa2024:312"
			dial="SAR"
			place="exx. 471–472"
			note="ranke follows arpa 'go' and precedes kor oka=an; ranke takes no person marking. The combination marks repeated habitual going."
		/>
		<p>
			The auxiliary <i lang="ain-Latn">tek</i> (Saru/Chitose) covers adjacent ground —
			brief or momentary action ('do briefly/suddenly') — and is listed alongside
			<i lang="ain-Latn">ranke</i> in Nakagawa's Table 74
			<Ref k="nakagawa2024" p="309–313" />. The iterative-durative overlap between
			<i lang="ain-Latn">ranke</i> and the continuative forms
			<i lang="ain-Latn">kane an</i> and <i lang="ain-Latn">kan an</i> is addressed in
			<Xr ch="continuative-siri-siran-kane-an" />.
		</p>
	</S>
</S>

<S t="Habitual and generic aspect" id="habitual">
	<p>
		Hokkaido Ainu has no dedicated habitual morpheme. Habitual and generic readings arise from a
		combination of <i lang="ain-Latn">kor an</i>, frequentative adverbs or temporal frames, and
		the event-plural marker <i lang="ain-Latn">pa</i>. The progressive and habitual are formally
		identical; it is the temporal expression in the clause that licenses the habitual reading
		<Ref k="nakagawa2024" p="441" />; <Ref k="sato2008" p="197" />; <Ref k="bugaeva2012" p="494" />.
	</p>
	<Ex
		m="sittokap kor pon seta turano sinot=an kor an=an ayne"
		g="noon while little dog together play=4.S while exist=4.S as"
		tr="Every noon she would play with the puppy,"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 9 [aa-irc/009#14]"
		note="sittokap kor 'whenever noon (comes)' provides the frequentative temporal frame; sinot=an kor an=an is the habitual kor an construction. ayne marks the clause as background to what follows."
	/>
	<p>
		The postverbal plural clitic <i lang="ain-Latn">pa</i> (the pa₂ of
		<Xr ch="suppletive-verbal-number" />) contributes event-plural or pluractional force in
		habitual and iterative contexts. Following a predicate whose participant plurality is already
		marked by a suppletive stem, <i lang="ain-Latn">pa</i> shifts the reading toward repetition
		across occasions rather than a single plural event. The interaction of
		<i lang="ain-Latn">pa</i> with suppletive stems and the personal-agreement system is
		treated in <Xr ch="suppletive-verbal-number" /> and <Xr ch="person-number-interactions" />.
	</p>
	<p>
		The auxiliary <i lang="ain-Latn">ranke</i> (§ above) marks the habitual more explicitly
		when the repeating character of the situation is foregrounded. Together these resources —
		<i lang="ain-Latn">kor an</i> with frequentative context, <i lang="ain-Latn">ranke</i>, and
		event-plural <i lang="ain-Latn">pa</i> — occupy the space that a dedicated habitual
		morpheme fills in languages where habituality is morphologically distinct from aspect
		<Ref k="bybee1994" paren />; <Ref k="comrie1976" paren />.
	</p>
</S>

<S t="The recent perfect nisa" id="nisa">
	<p>
		The auxiliary <A w="nisa" gl="just completed; recent perfect" /> marks an event as already
		finished and still current at the moment of speech:
		<span lang="ja">すでに起こってしまったことを表す</span>
		<Ref k="nakagawa2024" p="312" />. Bugaeva calls it "recent perfect aspect
		<i lang="ain-Latn">nisa</i> (just finished)" and lists it as item 7 of the Saru auxiliary
		inventory <Ref k="bugaeva2012" p="493" />. Nakagawa also groups <i lang="ain-Latn">nisa</i>
		with the completion and past strategies — alongside <i lang="ain-Latn">a</i> and
		<i lang="ain-Latn">wa isam</i> — as optional devices for anchoring a situation before the
		moment of utterance <Ref k="nakagawa2024" p="436" />.
	</p>
	<p>
		Like the other auxiliaries in Table 74, <i lang="ain-Latn">nisa</i> takes no person marking;
		the lexical verb before it carries the subject index. It may be followed by the evidential
		frame <i lang="ain-Latn">ruwe ne</i>, where the recent-perfect value and the
		fact-asserting evidential combine naturally.
	</p>
	<Ex
		m="arwenkamuy ne an=an nisa ru-we ne na"
		g="truly.evil.kamuy COP exist=4.S PRF.REC track-POSS COP FIN"
		tr="(I) have now truly become an evil kamuy."
		cite="nakagawa2024:312"
		dial="SAR"
		place="ex. 470"
		note="nisa follows the existential an=an and precedes the evidential ruwe ne; the recent-perfect value and the fact-evidential reinforce each other."
	/>
	<p>
		Within the completion field, three forms target different facets of the endpoint.
		<i lang="ain-Latn">nisa</i> foregrounds recency: the event is recent and its result is
		present now. The auxiliary <i lang="ain-Latn">a</i> foregrounds the event as a background to
		what follows and carries direct-evidential force (treated in
		<Xr ch="perfective-anterior-a" />). <i lang="ain-Latn">wa isam</i> foregrounds
		disappearance and belongs to the pair-verb frame; it adds the affective colouring of loss or
		adverse outcome. Unlike <i lang="ain-Latn">wa isam</i>, <i lang="ain-Latn">nisa</i> is a
		bare auxiliary — no conjunctive particle, no second person-indexed predicate — so the
		construction belongs to the auxiliary frame, not to the pair-verb frame.
	</p>
	<p>
		The surface token <i lang="ain-Latn">nisa</i> returns 3,355 hits in the present corpus of
		196,184 sentences (rank 71 by frequency), but the token is homophone-prone — bare nouns and
		other elements sharing this phonological shape are not systematically distinguished at the
		surface-string level — so the count is indicative of high frequency rather than an accurate
		auxiliary tally.
	</p>
</S>
