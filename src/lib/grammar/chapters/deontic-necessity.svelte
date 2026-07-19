<!-- src/lib/grammar/chapters/deontic-necessity.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The deontic field" id="overview">
	<p>
		Hokkaido Ainu expresses necessity and obligation periphrastically. There is no bound deontic
		affix; instead, three distinct constructions carry the semantic load. The auxiliary
		<A w="easirki" gl="must, have to" /> expresses strong obligation. The auxiliary
		<A w="kuni" gl="should, be supposed to" /> — the same element that heads purpose-complement
		clauses — expresses normative expectation or scheduled necessity; combined with the copula
		<i lang="ain-Latn">ne</i> it forms the predicate <i lang="ain-Latn">kuni ne</i>, the
		principal deontic proposition form. A set of conditional predicates — <A w="yak pirka" />,
		<A w="yak wen" />, <A w="yakka pirka" />, <A w="yakka wen" /> — provides a gradient from
		advice to permission to futility <Ref k="nakagawa2024" p="309–310, 423–424" />;
		<Ref k="bugaeva2012" p="493–494" />. The prospective <i lang="ain-Latn">kus(u) ne</i>,
		treated fully in <Xr ch="epistemic-irrealis-modality" />, acquires a near-command reading
		with a second-person subject and the final particle <i lang="ain-Latn">na</i>
		<Ref k="nakagawa2024" p="423" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>form</th>
				<th>shape</th>
				<th>deontic value</th>
				<th>Nakagawa 2024</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">easirki</i></td>
				<td><i lang="ain-Latn">V easirki</i> (bare auxiliary)</td>
				<td>strong obligation — must, have to</td>
				<td>309, 表74</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kuni (ne)</i></td>
				<td><i lang="ain-Latn">V kuni</i> / <i lang="ain-Latn">V kuni ne</i></td>
				<td>normative expectation — should, be supposed to, be scheduled to</td>
				<td>310, 表74</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">yak pirka</i></td>
				<td><i lang="ain-Latn">V yak pirka (na)</i></td>
				<td>advice — would be good to, should</td>
				<td>423</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">yak wen</i></td>
				<td><i lang="ain-Latn">V yak wen (na)</i></td>
				<td>negative advice — should not, it would be bad to</td>
				<td>423–424</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">yakka pirka</i></td>
				<td><i lang="ain-Latn">V yakka pirka</i></td>
				<td>permission — may, it is all right to</td>
				<td>424</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">yakka wen</i></td>
				<td><i lang="ain-Latn">V yakka wen</i></td>
				<td>futility — no use even if, pointless</td>
				<td>424</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kus(u) ne na</i></td>
				<td><i lang="ain-Latn">V kus(u) ne na</i></td>
				<td>near-command (2nd person) — you will/should … won't you</td>
				<td>423</td>
			</tr>
		</tbody>
	</table>

	<p>
		All of these forms occupy the pre-evidential slot in the clause. The scope ordering that
		<Xr ch="tam-overview" /> establishes — <i lang="ain-Latn">kusu ne ruwe ne</i> (grammatical)
		vs <i lang="ain-Latn">*ruwe ne kusu ne</i> (ill-formed) — holds for deontic modals
		equally: deontic meaning is expressed inside the evidential predicate
		<Ref k="nakagawa2024" p="393" />. The imperative and the prohibitive, which express
		directive force through the bare-stem form and the preverbal adverb
		<i lang="ain-Latn">iteki</i>, are treated in <Xr ch="imperative-and-prohibitive" />.
	</p>
</S>

<S t="easirki — obligation" id="easirki">
	<p>
		<A w="easirki" gl="must, be obliged to" /> is listed in Nakagawa's table of core Saru
		auxiliaries (本来的な助動詞) alongside <i lang="ain-Latn">nankor</i>,
		<i lang="ain-Latn">kuni</i>, and <i lang="ain-Latn">rusuy</i>
		<Ref k="nakagawa2024" p="306–309, 表74" />. Like other core auxiliaries it carries no
		person index of its own; only the preceding main verb is inflected. Bugaeva glosses it as
		"deontic mood (must)" and places it in the modal paradigm alongside
		<i lang="ain-Latn">nankor</i> (probability) and <i lang="ain-Latn">rusuy</i>
		(desiderative) <Ref k="bugaeva2012" p="493" />. The strength of the obligation it
		expresses — "must, cannot avoid" — places it at the stronger end of the deontic scale,
		above the advisory <i lang="ain-Latn">yak pirka</i>.
	</p>

	<Ex
		m="paye=an easirki p mak e=iki hawe an"
		g="go.PL=4.S must NMLZ what 2SG.A=do voice-POSS exist"
		tr="I have to go — what are you doing?"
		cite="nakagawa2024:308"
		dial="CHI"
		place="Nakagawa ex. 457"
		note="The nominalizer p closes the easirki clause. The final mak e=iki hawe an is a rhetorical question in the hawe-frame existential evidential; the fourth-person =an functions as the narrative first person."
	/>

	<p>
		The auxiliary is invariant; no plural or evidential inflection attaches to it. Its position
		is immediately after the main verb, with no conjunctive particle between them — the frame
		shared by <i lang="ain-Latn">nankor</i>, <i lang="ain-Latn">rusuy</i>, and
		<i lang="ain-Latn">nisa</i>. The frequency of <i lang="ain-Latn">easirki</i> in the
		Hokkaido corpus is substantially lower than that of <i lang="ain-Latn">nankor</i>
		(approximately 2402 tokens) ‹corpus-suggested›, consistent with the stronger deontic
		commitment it expresses and its restriction to contexts of genuine obligation.
	</p>
</S>

<S t="kuni ne — normative expectation" id="kuni-ne">
	<p>
		<A w="kuni" /> appears in Nakagawa's 表74 as a core auxiliary with the semantic range
		"〜はずだ / べきだ / ことになっている": it should be the case that / one ought to /
		it is scheduled or expected that <Ref k="nakagawa2024" p="310" />. The same element is the
		<Xr ch="kuni-complementizer-purpose-complements">irrealis complementizer</Xr> that heads
		purpose complements and the object complements of desiderative and manipulation predicates.
		The deontic auxiliary reading arises when <i lang="ain-Latn">kuni</i> is predicated with
		the copula <i lang="ain-Latn">ne</i> in a main clause — <i lang="ain-Latn">V kuni ne</i>
		— such that the nominalized proposition 'that V' is presented as a normative expectation.
		The grammaticalization path runs from <i lang="ain-Latn">kuni</i> as a formal noun
		nominalizing an irrealis proposition, through its complementizer use, to the main-clause
		modal reading; the complementizer and purpose functions are the primary locus of
		<i lang="ain-Latn">kuni</i>, and the deontic reading is the most grammaticalized end of
		that scale ‹speculative›.
	</p>

	<p>
		In the Saru corpus <i lang="ain-Latn">kuni</i> appears most often in complement position
		before cognition verbs such as <i lang="ain-Latn">ramu</i> 'think'. The aynu-corpora
		Discord records this distribution: <i lang="ain-Latn">kuni a=ramu</i> is the standard
		structure for reported intention, with <i lang="ain-Latn">kuni</i> nominalizing the
		embedded clause before the cognition verb, rather than the unattested
		<i lang="ain-Latn">sekor a=ramu</i>
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2024-11-09) ‹corpus-confirmed›.
	</p>

	<Ex
		m="wente kuni ramu kor an pe ne aan ru-we ne hine"
		g="devastate COMP think while exist NMLZ COP PRF.MIR track-POSS COP CONJ"
		tr="— it turned out there was something thinking to cause devastation, and …"
		cite="biratori1969"
		dial="SAR"
		place="Kaizawa Tsurushino, uwepeker [biratori/005/004#40]"
		note="kuni here is the irrealis complementizer nominalizing wente before the cognition verb ramu kor an 'is thinking'. This is the complement use; the main-clause deontic reading of kuni ne arises when no matrix verb hosts it."
	/>

	<p>
		When <i lang="ain-Latn">kuni ne</i> closes a main clause with no embedding cognition or
		purpose verb, the reading shifts to normative expectation: 'it is the normative case that
		V', which in context yields obligation or convention. This is semantically adjacent to
		<i lang="ain-Latn">easirki</i> at the stronger end and to <i lang="ain-Latn">yak pirka</i>
		at the weaker end, but <i lang="ain-Latn">kuni ne</i> specifically encodes that the
		situation is normatively ordained — by role, rule, or convention — rather than urgently
		commanded <Ref k="nakagawa2024" p="310" />.
	</p>

	<Ex
		m="a=an kuni ne na"
		g="4.A=be should COP FIN"
		tr="One ought to be there."
		constructed
		note="Constructed to illustrate the main-clause deontic use of kuni ne; modeled on Nakagawa 2024: 310 exx. 461–463 for the Saru dialect."
	/>

	<p>
		Interaction with the evidential layer follows the standard scope ordering: the deontic
		predicate sits inside the evidential, so <i lang="ain-Latn">kuni ne ruwe ne</i>
		(obligation as established fact) is well formed and <i lang="ain-Latn">*ruwe ne kuni ne</i>
		is not <Ref k="nakagawa2024" p="393" />. Negation goes inside the deontic operator:
		<i lang="ain-Latn">somo V kuni ne</i> expresses the normative expectation that one does
		not V. Ainu has no infinitive; the nominalization-plus-copula strategy that yields
		<i lang="ain-Latn">kuni ne</i> is the same architecture that covers what infinitives do
		in European languages — a point the aynu-corpora Discord makes explicitly for the
		<i lang="ain-Latn">kuni</i> nominalizer family
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2024-11-25) ‹consensus›.
	</p>
</S>

<S t="The yak pirka idioms: advice, prohibition, permission, and futility" id="yak-pirka">
	<p>
		A set of clause-final predicates is built on the conditional particles
		<i lang="ain-Latn">yak</i> 'if' and <i lang="ain-Latn">yakka</i> 'even if' followed by
		the evaluative adjectives <A w="pirka" gl="be good" /> or <A w="wen" gl="be bad" />.
		These four expressions cover advice, negative advice, permission, and futility
		<Ref k="nakagawa2024" p="423–424" />; <Ref k="ijas2023" />. Nakagawa groups them among
		indirect and mitigated command forms because they are typically directed at a second-person
		addressee and carry the second-person subject prefix — unlike the bare imperative, which
		has no subject prefix. The illocutionary force follows from the evaluation: 'if you V,
		[the situation] is good' yields advice or permission; 'if you V, [the situation] is bad'
		yields negative advice or futility depending on whether the conditional is simple
		(<i lang="ain-Latn">yak</i>) or concessive (<i lang="ain-Latn">yakka</i>)
		<Ref k="nakagawa2024" p="423" /> ‹consensus›.
	</p>

	<table>
		<thead>
			<tr>
				<th>form</th>
				<th>conditional type</th>
				<th>value</th>
				<th>approximate English</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">V yak pirka (na)</i></td>
				<td>simple conditional + good</td>
				<td>advice, recommendation</td>
				<td>you should V; it would be good if you V</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V yak wen (na)</i></td>
				<td>simple conditional + bad</td>
				<td>negative advice</td>
				<td>you should not V; it would be bad if you V</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V yakka pirka</i></td>
				<td>concessive conditional + good</td>
				<td>permission</td>
				<td>you may V; it is fine even if you V</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V yakka wen</i></td>
				<td>concessive conditional + bad</td>
				<td>futility, dismissal</td>
				<td>there is no use V-ing; even if you V it will do no good</td>
			</tr>
		</tbody>
	</table>

	<p>
		Permission via <i lang="ain-Latn">yakka pirka</i> is negated with
		<i lang="ain-Latn">somo</i> inside the conditional to express 'you need not V' rather
		than 'you must not V'; the latter is expressed by <i lang="ain-Latn">yak wen</i> or, for
		a direct prohibition, by <i lang="ain-Latn">iteki V</i>
		<Ref k="nakagawa2024" p="424" />. The <i lang="ain-Latn">yak</i> and
		<i lang="ain-Latn">yakka</i> particles are the same ones that govern conditional and
		concessive adverbial clauses; their grammar is set out in
		<Xr ch="conditional-temporal-concessive-clauses" />.
	</p>

	<Ex
		m="somo a=ahunke eaykap pe ne na e=ahunke yak pirka na"
		g="NEG 4.A=enter.SG be.unable NMLZ COP FIN 2SG.A=enter.SG if be.good FIN"
		tr="There is nothing stopping you from going in — you should go in."
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 8(2) [aa-irc/007#211]"
		note="The first clause establishes the possibility via double negation (somo eaykap 'it is not the case that one cannot'). The yak pirka na frame delivers the advice as a directive. The final particle na reinforces directive force."
	/>

	<Ex
		m="e=e yakka pirka"
		g="2SG.A=eat even.if be.good"
		tr="You may eat it."
		cite="ijas2023"
		constructed
		note="Ijäs Lesson 10 permission frame, constructed illustration."
	/>

	<Ex
		m="e=sinki yakun e=sini yak pirka"
		g="2SG.S=be.tired if 2SG.S=rest if be.good"
		tr="If you are tired, you should rest."
		cite="ijas2023"
		constructed
		note="Ijäs Lesson 10; yak pirka delivers advice conditional on a stated premise."
	/>
</S>

<S t="kus(u) ne na as near-command" id="kus-ne-deontic">
	<p>
		The prospective auxiliary <i lang="ain-Latn">kus(u) ne</i> — analysed in
		<Xr ch="epistemic-irrealis-modality" /> as the conjunction <i lang="ain-Latn">kusu</i>
		plus the copula <i lang="ain-Latn">ne</i> expressing intention or scheduled future
		<Ref k="nakagawa2024" p="435" />; <Ref k="sato2008" p="85–86" /> — acquires a directive
		reading when the subject is second person and the final particle
		<i lang="ain-Latn">na</i> closes the clause. In that context
		<i lang="ain-Latn">e=arpa kus ne na</i> 'you will go, then' functions as a softened
		instruction <Ref k="nakagawa2024" p="423" />. The same indirect-command function is
		available with <i lang="ain-Latn">nankor na</i> and <i lang="ain-Latn">p ne na</i>
		<Ref k="nakagawa2024" p="423" />. Ijäs presents the same range for
		<i lang="ain-Latn">kus(u) ne</i> — 'be going to, intend to, plan to' — and the
		analysis adopted here keeps the two-morpheme segmentation (conjunction
		<i lang="ain-Latn">kusu</i> + copula <i lang="ain-Latn">ne</i>) against her
		pedagogical one-word spelling <i lang="ain-Latn">kusune</i>
		<Ref k="ijas2023" /> ‹consensus›.
	</p>

	<Ex
		m="kotan wente kus arki kus ne aan ru-we ne wa"
		g="village devastate PURP come.PL PURP COP PRF.MIR track-POSS COP CONJ"
		tr="— it turned out that they had been coming to devastate the village, and …"
		cite="biratori1969"
		dial="SAR"
		place="Kaizawa Tsurushino, uwepeker [biratori/004/002#40]"
		note="kus ne here is the intentional/prospective, not the deontic near-command. The example shows the form in its narrative use, combined with the mirative aan and the inferential ruwe ne. The construction wente kus arki kus ne is a purpose-clause chain: 'coming (in order) to devastate'."
	/>

	<Ex
		m="e=arpa kus ne na"
		g="2SG.S=go.SG PURP COP FIN"
		tr="You should go / you will go, then."
		constructed
		note="Constructed to illustrate the near-command reading of kus ne na with a second-person subject; modeled on Nakagawa 2024: 423."
	/>

	<p>
		The construction <i lang="ain-Latn">iteki … kus ne na</i> extends the prohibitive adverb
		<i lang="ain-Latn">iteki</i> into the mitigated-prohibition frame, producing 'be careful
		not to V'; Nakagawa provides an attested example and Ijäs's rendering
		<i lang="ain-Latn">iteki e=eyruska kus ne na hani!</i> matches it
		<Ref k="nakagawa2024" p="425" />; <Ref k="ijas2023" /> ‹consensus›.
	</p>
</S>

<S t="Scope and the epistemic–deontic boundary" id="scope-negation">
	<p>
		All the deontic forms treated in this chapter occupy the pre-evidential layer. Proposition-level
		negation goes inside the deontic operator: <i lang="ain-Latn">somo V kuni ne</i> expresses
		the normative expectation that one does not V, while <i lang="ain-Latn">kuni ne</i> itself
		remains outside the scope of negation. For the <i lang="ain-Latn">yak</i> idioms, negation
		either enters the antecedent clause (<i lang="ain-Latn">somo V yakka pirka</i> 'need not
		V') or is supplied by switching to the opposed evaluative adjective
		(<i lang="ain-Latn">yak wen</i> for <i lang="ain-Latn">yak pirka</i>)
		<Ref k="nakagawa2024" p="423–424" />.
	</p>

	<p>
		The boundary between epistemic and deontic modality is not categorical. The conjecture
		auxiliary <i lang="ain-Latn">nankor</i>, whose core value is probability, takes on
		expectational coloring equivalent to a softened command when addressed to a second person
		with <i lang="ain-Latn">na</i> <Ref k="nakagawa2024" p="311" />. The prospective
		<i lang="ain-Latn">kus ne</i> straddles intention and near-command. The forms
		<i lang="ain-Latn">easirki</i> and <i lang="ain-Latn">kuni ne</i> carry no epistemic
		probability component: <i lang="ain-Latn">easirki</i> is a judgment of obligation,
		<i lang="ain-Latn">kuni ne</i> is normative expectation. The full treatment of
		<i lang="ain-Latn">nankor</i> and <i lang="ain-Latn">kus(u) ne</i> as epistemic and
		intentive forms belongs to <Xr ch="epistemic-irrealis-modality" />; the relation of the
		<i lang="ain-Latn">kuni</i> complementizer to purpose clauses is in
		<Xr ch="kuni-complementizer-purpose-complements" /> and
		<Xr ch="causal-and-purpose-clauses" />.
	</p>
</S>
