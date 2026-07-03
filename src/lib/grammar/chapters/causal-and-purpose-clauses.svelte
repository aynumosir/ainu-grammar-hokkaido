<!-- src/lib/grammar/chapters/causal-and-purpose-clauses.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview: kusu in the causal–purposive group" id="overview">
	<p>
		Among Hokkaido Ainu's conjunctive particles, <i lang="ain-Latn">kusu</i> stands out as the
		only member whose primary meaning spans two semantic relations: it marks the preceding clause
		as either the reason or cause of the following event, or the purpose or aim toward which the
		following clause's action is directed. Nakagawa assigns it, together with
		<i lang="ain-Latn">wa kusu</i> and <i lang="ain-Latn">hi kusu</i>, to group ⑥ (原因・目的,
		'cause/purpose') of his seven-way semantic taxonomy of conjunctive particles
		<Ref k="nakagawa2024" p="352–353" />. Refsing places the same particle under her
		"Consequential" grouping alongside <i lang="ain-Latn">kunine</i> and
		<i lang="ain-Latn">na</i> for Shizunai <Ref k="refsing1986" p="238, 251–253" />. Satō
		treats it in the section adjacent to <i lang="ain-Latn">korka</i> 'but', contrasting
		purposive and causal readings <Ref k="sato2008" p="53–54" />. The three sources agree on
		the central fact: the single particle <i lang="ain-Latn">kusu</i> covers both cause and
		purpose, and the reading is determined by context.
	</p>

	<p>
		Two reason-only compound particles restrict the semantic range.
		<i lang="ain-Latn">Wa kusu</i> foregrounds a completed event as the cause of the main
		clause; the sequential <i lang="ain-Latn">wa</i> signals that the preceding event actually
		took place. <i lang="ain-Latn">Hi kusu</i> is the formal-noun construction
		<i lang="ain-Latn">hi</i> ('the fact/time of') + <i lang="ain-Latn">kusu</i> and similarly
		carries reason only <Ref k="nakagawa2024" p="353" />; <Ref k="ijas2023" />. The three
		particles and their properties are given in the table below.
	</p>

	<table>
		<thead>
			<tr>
				<th>particle</th>
				<th>function</th>
				<th>event status of preceding clause</th>
				<th>dialect range</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td
					><i lang="ain-Latn">kusu</i> (variant
					<i lang="ain-Latn">kus</i> with final-vowel devoicing)</td
				>
				<td>reason <em>or</em> purpose</td>
				<td>unrestricted</td>
				<td>pan-Hokkaido</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">wa kusu</i></td>
				<td>reason only</td>
				<td>completed/actualized event required</td>
				<td>pan-Hokkaido</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hi kusu</i></td>
				<td>reason only</td>
				<td>unrestricted</td>
				<td>Saru/Chitose; rare and dialectally variable elsewhere</td>
			</tr>
		</tbody>
	</table>

	<p>
		The final vowel of <i lang="ain-Latn">kusu</i> is frequently devoiced in running speech,
		yielding the variant <i lang="ain-Latn">kus</i>; this is a phonological process, not a
		distinct lexeme. The segmentally identical material also enters the intentive auxiliary
		<i lang="ain-Latn">kusu ne</i> 'be going to; intend to' and the indirect-speech
		complementizer use treated in <Xr ch="kuni-complementizer-purpose-complements" />. The
		inventory context for <i lang="ain-Latn">kusu</i> is established in
		<Xr ch="clause-linkage-overview" s="inventory">the clause-linkage overview</Xr>.
	</p>
</S>

<S t="Purpose: 'in order to'" id="purpose">
	<p>
		When <i lang="ain-Latn">kusu</i> marks purpose, the preceding clause describes the goal or
		aim of the action in the following clause, and the following clause is typically a motion
		verb. This distributional tendency is strong and is explicitly noted by Nakagawa
		<Ref k="nakagawa2024" p="353" />. The purpose-marked clause occupies the adverbial slot of
		a prospective complement: the event it describes has not yet occurred at the time of the
		motion.
	</p>

	<Ex
		m="nina=an kusu soyne=an"
		g="gather.firewood=4.S PURP go.out=4.S"
		tr="(Someone) went out to gather firewood."
		cite="nakagawa2024:354"
		dial="SAR"
		place="Nakagawa ex. 670"
		note="Kusu marks the preceding activity as the purpose of the following motion verb soyne 'go out'. The fourth-person suffix =an indexes the narrator-external agent on both verbs."
	/>

	<p>
		The purposive reading is available whenever the following clause describes a transition,
		displacement, or initiation rather than a completed past event. For purpose complements
		governed by a transitive verb of thinking, saying, or wanting, the complementizer
		<A w="kuni" gl="(purpose/irrealis complementizer)" /> takes over the embedding role; the
		boundary between adverbial <i lang="ain-Latn">kusu</i> and complementizing
		<i lang="ain-Latn">kuni</i> is treated in <Xr ch="kuni-complementizer-purpose-complements" />.
		A rarer purpose-adverbial, <i lang="ain-Latn">kunine</i> (<i lang="ain-Latn">kuni</i> +
		copula <i lang="ain-Latn">ne</i>), is attested in Satō and Refsing but is less productive
		than plain <i lang="ain-Latn">kusu</i> in this function
		<Ref k="sato2008" p="53" />; <Ref k="refsing1986" p="252" />.
	</p>
</S>

<S t="Reason and cause: 'because'" id="reason">
	<p>
		The reason/cause reading of <i lang="ain-Latn">kusu</i> treats the preceding clause as the
		motivation, antecedent condition, or cause of the following one. The preceding clause
		typically describes a state of affairs that holds or held at the time the speaker asserts
		the consequent. The following example shows <i lang="ain-Latn">kusu</i> after a
		desiderative clause: the speaker's desire to pursue is the stated reason for preparing the
		boat.
	</p>

	<Ex
		m="kese a=anpa wa arpa=an rusuy kusu cip etoko a=oyki hine"
		g="behind 4.A=pursue CONJ go=4.S DES CONJ boat prow 4.A=prepare CONJ"
		tr="Wanting to pursue and go, (she) made the boat ready."
		cite="nakagawa2024:354"
		dial="SAR"
		place="Nakagawa ex. 671, after Kawamura 1985: 30"
		note="Kusu marks the desiderative clause arpa=an rusuy ('wanting to go in pursuit') as the reason for the preparation. The sequential hine links that preparation to the next event in the narrative chain."
	/>

	<p>
		When the cause is a realized state of affairs, the same <i lang="ain-Latn">kusu</i>
		applies. In the following example a formal-noun predicate (<i lang="ain-Latn">p ne</i>)
		closes the cause clause before <i lang="ain-Latn">kusu</i> introduces the consequence.
	</p>

	<Ex
		m="sisam itak ani ku=respa p ne kusu aynu itak sinep ka erampewtek pa"
		g="Japanese language INS 1SG.A=raise NMLZ COP CONJ Ainu language one EMPH not.understand PL"
		tr="Because I raised them in Japanese, they do not understand a single word of Ainu."
		cite="nakagawa2024:354"
		dial="SAR"
		place="Nakagawa ex. 672"
		note="The formal-noun predicate p ne nominalizes the cause clause; kusu marks it as causal. The plural marker pa on the matrix verb reflects multiple objects. The instrumental ani marks the means of upbringing."
	/>

	<p>
		Refsing documents the same structure in Shizunai: <i lang="ain-Latn">kusu</i> introducing a
		consequence after a stative cause clause ('yesterday since the weather was fine, the three of
		us strolled over the mountain') <Ref k="refsing1986" p="251" />. The cause-clause predicate
		type (desiderative, formal-noun, stative) does not by itself determine the choice of
		<i lang="ain-Latn">kusu</i>; the cause reading is the more accessible one wherever the
		preceding clause describes a completed or persistent state.
	</p>
</S>

<S t="The evidential–kusu scope order" id="evidential-scope">
	<p>
		A conjunctive particle attaches outside the clause-final evidential frame. When a cause
		clause closes on an evidential nominalizer such as <i lang="ain-Latn">ruwe ne</i> or
		<i lang="ain-Latn">hawe ne</i>, <i lang="ain-Latn">kusu</i> follows the evidential rather
		than intervening between the verb and it. Nakagawa states the ordering for all linkers:
		predicate – evidential – connective <Ref k="nakagawa2024" p="393" />. The following
		attested example from Kawakami Matsuko's Saru oral narrative shows the reportative
		evidential <i lang="ain-Latn">haw-e ne</i> followed directly by
		<i lang="ain-Latn">kusu</i>.
	</p>

	<Ex
		m="e=hosipi haw-e ne kusu tane anakne a=eyayramkar pe ne na"
		g="2SG.S=return voice-POSS COP CONJ now TOP 4.A=give.up NMLZ COP FIN"
		tr="Because you came back (as they say), now I give up."
		cite="ilcaa1976:aa-irc/021#271"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 民話 14 [aa-irc/021#271]"
		note="The reportative evidential haw-e ne (voice-POSS COP: 'it is said that') precedes kusu, marking the cause proposition as known by report before kusu signals it as the reason for giving up. The matrix clause closes on a formal-noun predicate pe ne with the final particle na."
	/>

	<p>
		The ordering constraint has a corollary for the intentive auxiliary. When causal
		<i lang="ain-Latn">kusu</i> follows a <i lang="ain-Latn">ruwe ne</i> evidential, the
		string <i lang="ain-Latn">ruwe ne kusu</i> is well formed and frequently attested;
		however, the intentive <i lang="ain-Latn">kusu ne</i> requires an opposite arrangement —
		<i lang="ain-Latn">kusu ne ruwe ne</i> — and is not licensed after
		<i lang="ain-Latn">ruwe ne</i>, making <i lang="ain-Latn">*ruwe ne kusu ne</i>
		ungrammatical <Ref k="nakagawa2024" p="393" />. Nukopoli characterized this as a scope
		hierarchy in which the intentive modal must scope outside the evidential, and the
		characterization is corroborated by the published account
		(<Ref k="aynucorporadiscord" />, nukopoli, aynu-corpora Discord 2024).
		The evidential system and its interaction with clause-linking material is treated in
		<Xr ch="ruwe-ne-inferential">the <i lang="ain-Latn">ruwe ne</i> chapter</Xr>.
	</p>
</S>

<S t="wa kusu and hi kusu: reason-only compounds" id="wa-kusu-hi-kusu">
	<p>
		The compound <i lang="ain-Latn">wa kusu</i> restricts the meaning to cause and reason,
		excluding the purpose reading. The sequential particle <i lang="ain-Latn">wa</i> signals
		that the preceding event is completed and its result-state is in force;
		<i lang="ain-Latn">kusu</i> then marks that actualized event as the cause of the main
		clause <Ref k="nakagawa2024" p="353" />; <Ref k="ijas2023" />. Because the preceding
		event must be actualized for <i lang="ain-Latn">wa</i> to apply, a future or hypothetical
		purpose clause — which by definition has not yet occurred — is incompatible with
		<i lang="ain-Latn">wa kusu</i>. The following constructed example illustrates the
		compound.
	</p>

	<Ex
		m="e=ek wa kusu ku=hosipi"
		g="2SG.S=come CONJ CONJ 1SG.S=return"
		tr="Because you came, I returned."
		constructed
		note="Wa kusu: wa closes the first clause as a completed event; kusu marks it as the cause of the return. The same sentence with plain kusu (e=ek kusu ku=hosipi) is grammatical but leaves the purpose reading marginally open; wa kusu disambiguates in favour of cause. Constructed after Nakagawa (2024: 353) and Ijäs (2023)."
	/>

	<p>
		Satō cites an adversative frame in Chitose where <i lang="ain-Latn">wa kusu</i> occurs
		inside a sentence headed by <i lang="ain-Latn">korka</i> 'but': the speaker wanted to go
		to town but the addressee's arrival (<i lang="ain-Latn">e=ek wa kusu</i>) caused
		the cancellation <Ref k="sato2008" p="53" />. The construction is well represented in
		colloquial speech across Hokkaido.
	</p>

	<p>
		<i lang="ain-Latn">Hi kusu</i> is a distinct compound: the formal noun
		<A w="hi" gl="the fact of; place, time" /> nominalizes the preceding clause ('the fact
		that …'), and <i lang="ain-Latn">kusu</i> marks it as cause. The result closely
		parallels plain <i lang="ain-Latn">kusu</i> in meaning — reason only — but the
		formal-noun nominalizer adds a more explicit factual presupposition. Nakagawa confirms
		the reason-only reading and notes that <i lang="ain-Latn">hi kusu</i> is common in Saru
		and Chitose but rare and dialectally variable outside those varieties
		<Ref k="nakagawa2024" p="353" />.
	</p>

	<p>
		Refsing identifies a set of lexicalized compounds built on
		<i lang="ain-Latn">kusu</i>/<i lang="ain-Latn">kus</i> in Shizunai:
		<i lang="ain-Latn">nekusu</i> 'therefore', <i lang="ain-Latn">wakusu</i> 'so that', and
		the interrogative <i lang="ain-Latn">nepkus</i> 'why' <Ref k="refsing1986" p="252" />.
		These frozen compounds represent the end-point of lexicalization within the same
		grammaticalization pathway that gives rise to the free conjunctive use described in the
		next section.
	</p>
</S>

<S t="The free conjunctive use: 'therefore, that is why'" id="free-use">
	<p>
		An ordinary conjunctive particle is bound to the predicate it closes and does not head a
		sentence. <i lang="ain-Latn">Kusu</i> is exceptional: it can appear sentence-initially as
		a free connective adverb meaning 'therefore; that is why' (Japanese
		<span lang="ja">そのために</span>), straddling the boundary between conjunctive particle and
		conjunction <Ref k="nakagawa2024" p="353" />. This free use is noted in the clause-linkage
		overview; see <Xr ch="clause-linkage-overview" s="finite-linkage">the particle/adverb
		distinction</Xr>. In this position, <i lang="ain-Latn">kusu</i> links a preceding
		discourse unit to the following clause as its consequence or result, functioning as a
		clause-level connective adverb rather than a post-predicate particle.
	</p>

	<p>
		Refsing's lexicalized Shizunai compound <i lang="ain-Latn">nekusu</i> 'therefore' carries
		the same discourse function in more grammaticalized form <Ref k="refsing1986" p="252" />.
		In contemporary teaching Ainu and learner speech the partially translated form
		<i lang="ain-Latn">sorekusu</i> — Japanese <span lang="ja">それ</span> 'that' plus Ainu
		<i lang="ain-Latn">kusu</i> — occupies the same slot as a sentence opener meaning 'that is
		why; therefore' (<Ref k="aynucorporadiscord" />, thegodofneet, aynu-corpora Discord 2025)
		‹contested›. The classical Hokkaido equivalent is the sentence-initial free
		<i lang="ain-Latn">kusu</i> documented by Nakagawa, or its Shizunai counterpart
		<i lang="ain-Latn">nekusu</i>; <i lang="ain-Latn">sorekusu</i> is a revitalization-context
		form that integrates the Japanese demonstrative as a topic antecedent.
	</p>
</S>

<S t="kusu ne: the intentive and prospective construction" id="kusu-ne">
	<p>
		When <i lang="ain-Latn">kusu</i> is followed by the copula
		<A w="ne" gl="be" /> with no person-marking affix, the combination grammaticalizes toward
		an auxiliary meaning 'be going to; intend to' — the intentive or prospective
		<Ref k="nakagawa2024" p="435" />; <Ref k="refsing1986" p="252" />. The absence of
		person marking on <i lang="ain-Latn">ne</i> is the diagnostic: ordinary copular predicates
		carry person indexes, but in <i lang="ain-Latn">kusu ne</i> the copula is a
		grammaticalized element of the complex, and person is already encoded on the preceding
		verb. Ijäs teaches the phonologically reduced form <i lang="ain-Latn">kusne</i> alongside
		the fuller <i lang="ain-Latn">kusu ne</i>, reflecting reduction in everyday speech
		<Ref k="ijas2023" />.
	</p>

	<Ex
		m="paye=an kusu ne na"
		g="go=4.S PURP COP FIN"
		tr="(She) intends to go."
		cite="ilcaa1976:aa-irc/004#51"
		dial="SAR"
		place="Kawakami Matsuko, isoytak monologue 2 [aa-irc/004#51]"
		note="Extracted from the quoted-speech context '…paye=an kusu ne na.' sekor hawean 'she said: I intend to go.' The copula ne bears no person index; paye=an already carries the fourth-person S suffix =an. The final particle na closes the quoted clause."
	/>

	<p>
		The construction's semantics spans intentionality, prospective aspect (an event about to
		occur), and future-oriented modality. Nakagawa places <i lang="ain-Latn">kusu ne</i> in
		the 意志・必然 (volition/necessity) section of his auxiliary inventory
		<Ref k="nakagawa2024" p="435" />. Nukopoli (aynu-corpora Discord, 2024) characterizes
		<i lang="ain-Latn">kusu ne</i> as covering both intentionality and tense, analogous to
		English <em>will</em>; this is a community-proposed extension of the description that
		available published sources do not fully adjudicate
		(<Ref k="aynucorporadiscord" />) ‹speculative›. The modal and deontic extensions — in
		particular the 'must, should' readings — are treated in
		<Xr ch="deontic-necessity" />, and the construction's place in the broader TAM system
		in <Xr ch="tam-overview" />.
	</p>

	<p>
		Refsing additionally reports a Shizunai intentional construction
		<i lang="ain-Latn">kusu ki</i>, where the generic verb <A w="ki" gl="do" /> replaces the
		copula <Ref k="refsing1986" p="252" />. This is a dialect-specific instantiation of the
		same purposive-to-intentive grammaticalization path ‹corpus-suggested›.
	</p>
</S>

<S t="The causal–purpose polysemy: how the readings are resolved" id="polysemy">
	<p>
		Several factors favour the purpose reading of bare <i lang="ain-Latn">kusu</i>: a motion
		or initiation verb in the main clause, a prospective or unrealized event in the marked
		clause, and a goal-oriented relationship between the actor of the marked clause and the
		actor of the main clause. Factors favouring the cause reading include completed or stative
		predicates in the marked clause, an evidential tail before
		<i lang="ain-Latn">kusu</i>, and a disjoint event-time relationship between the two
		clauses.
	</p>

	<p>
		Satō makes the clearest separation: he treats <i lang="ain-Latn">kusu</i> after a
		formal-noun predicate as cause, and in proximity to a motion verb as purpose
		<Ref k="sato2008" p="53–54" />. Nakagawa gives both readings under a single entry and
		notes the motion-verb clustering for purpose <Ref k="nakagawa2024" p="352–353" />. Ijäs,
		following Nakagawa, presents the gloss 'because / so / in order to' as a single continuum
		and identifies motion-verb clustering as the most reliable purpose-cue in text
		<Ref k="ijas2023" />. The polysemy itself is uncontroversial across sources; what the
		accessible sources do not provide is a formal-syntactic account that would predict the
		reading from structure alone ‹speculative›.
	</p>
</S>

<S t="Dialect range and Sakhalin contrast" id="dialect">
	<p>
		Within Hokkaido, the distribution of the three particles is uneven.
		<i lang="ain-Latn">Hi kusu</i> is confirmed for Saru and Chitose; Nakagawa flags it as
		rare and dialectally variable outside those varieties <Ref k="nakagawa2024" p="353" />.
		For Shizunai, Refsing's grammar documents <i lang="ain-Latn">kusu</i> in all the
		functions described here and adds the lexicalized compounds
		<Ref k="refsing1986" p="251–253" />.
	</p>

	<p>
		The Sakhalin varieties present a typologically notable divergence. In Sakhalin Ainu,
		<i lang="ain-Latn">kusu</i> does not mark cause or purpose but instead covers the
		action-continuation and result-state range that Hokkaido splits between
		<i lang="ain-Latn">kor</i> (simultaneous action) and <i lang="ain-Latn">wa</i>
		(result-state after completion) <Ref k="nakagawa2024" p="344" />. The Sakhalin particle
		is therefore a false cognate for Hokkaido purposes: segmentally identical but functionally
		divergent. This contrast is summarized in <Xr ch="clause-linkage-overview" s="dialect-edges" />
		and is relevant to <Xr ch="simultaneous-kor-clauses" />.
	</p>
</S>
