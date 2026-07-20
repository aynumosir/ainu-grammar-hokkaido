<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		The particle <A w="wa" gl="and (then), so (connective)" /> is the most versatile and most
		frequent of Hokkaido Ainu's conjunctive particles. Its core function, in Tamura's formulation
		as transmitted by Nakagawa, is to gather two events E1 and E2 into one coherent action and
		present them as a single sentence-unit
		<Ref k="nakagawa2024" p="342" />. Where <i lang="ain-Latn">hine</i> merely lists events in
		temporal order, <i lang="ain-Latn">wa</i> asserts a closer bond: the first event supplies the
		result-state, the manner, or the cause that licenses the second. The three semantic readings
		share the surface form and overlap in natural speech; the context, the verb's aktionsart, and
		the presence of reinforcing adverbs (such as the sequence-marker
		<i lang="ain-Latn">orowa(no)</i>) determine which reading is primary in any given clause pair
		<Ref k="nakagawa2024" p="339–342" />; <Ref k="sato2008" p="45" />. The system as a whole is
		laid out in <Xr ch="clause-linkage-overview" />; the present chapter treats
		<i lang="ain-Latn">wa</i> and its culminative companion <i lang="ain-Latn">ayne</i>
		specifically.
	</p>
</S>

<S t="Three semantic readings" id="readings">
	<p>
		Satō identifies three uses of <i lang="ain-Latn">wa</i>: sequential continuation (often
		reinforced by <i lang="ain-Latn">orowa</i> 'and then'), cause-to-effect (reinforced by
		<i lang="ain-Latn">kusu</i> 'therefore'), and attendant circumstance or manner
		<Ref k="sato2008" p="45" />. Nakagawa adds a unifying temporal criterion: the first VP must be
		at its result-state stage — the action has concluded and that result-state frames E2 — rather
		than ongoing (simultaneity, <i lang="ain-Latn">kor</i>) or stative-negated (absence of change,
		<i lang="ain-Latn">no</i>) <Ref k="nakagawa2024" p="341" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>particle</th>
				<th>phase of first VP</th>
				<th>core reading</th>
				<th>minimal example</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">wa</i></td>
				<td>result-state after an action</td>
				<td>sequence; manner; cause–effect</td>
				<td>
					<i lang="ain-Latn">ipe wa soyne</i>
					<br />'ate, then went out'
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kor</i></td>
				<td>during the action</td>
				<td>simultaneity</td>
				<td>
					<i lang="ain-Latn">ipe kor soyne</i>
					<br />'went out while eating'
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">no</i></td>
				<td>stative or negated action</td>
				<td>'in the state of'; 'without doing'</td>
				<td>
					<i lang="ain-Latn">somo ipe no soyne</i>
					<br />'went out without eating'
				</td>
			</tr>
		</tbody>
	</table>

	<p>
		The minimal triad comes from Nakagawa's analysis of the Saru particle system
		<Ref k="nakagawa2024" p="341" />; for <i lang="ain-Latn">kor</i> and <i lang="ain-Latn">no</i>
		see <Xr ch="simultaneous-kor-clauses" />. Nakagawa also notes that the result-state account
		alone does not predict every <i lang="ain-Latn">wa</i> collocation: the fixed phrase
		<i lang="ain-Latn">apkas wa arpa</i> 'walk-and-go' shows <i lang="ain-Latn">wa</i> marking
		walking as the route or method of going, even though the walking partly overlaps the going.
		Tamura's integration criterion (via Nakagawa) accommodates this under a "state/method/reason"
		cluster that subsumes all three readings <Ref k="nakagawa2024" p="342" />. The manner reading
		appears clearly in the following Saru corpus example:
	</p>

	<Ex
		m="corpokke a=eapkas wa arpa=an ayne"
		g="beneath.it 4.A=walk.along CONJ go=4.S CONJ"
		tr="Walking beneath it, I went along, and then…"
		cite="nakagawa2024:339"
		dial="SAR"
		place="Nakagawa ex. 605, after Kayano 1974a: 68"
		note="wa marks the walking as manner and route of the going; ayne is the culminative particle treated in §5 below."
	/>

	<p>The cause–effect reading is clearest when E1 directly occasions E2:</p>

	<Ex
		m="hokure pirkano e=ipere wa mimus yakne"
		g="INTERJ properly 2SG.A=feed CONJ get.fat COND"
		tr="Now, feed her well so that, once she has fattened up…"
		cite="nakagawa2024:339"
		dial="SAR"
		place="Nakagawa ex. 604"
		note="wa links the feeding (E1, cause) to the fattening (E2, effect); the subsequent conditional yakne opens a premise on the result-state."
	/>
</S>

<S t="Subject continuity: statistical preference without a constraint" id="subject-continuity">
	<p>
		In Refsing's Shizunai material, approximately ninety percent of the clause pairs joined by
		<i lang="ain-Latn">wa</i> share a subject <Ref k="refsing1986" p="240" />. The preference
		reflects the particle's integration semantics: if E1 is the manner or prior stage of E2, the
		same actor typically performs both. Yet the preference is not a syntactic rule. Satō shows
		that the two clauses joined by <i lang="ain-Latn">wa</i> may have different subjects — unlike
		Japanese <span lang="ja">〜て</span>, which requires coreference — and that fact bears on its
		analysis as a conjunctive particle rather than a same-subject converb
		<Ref k="sato2008" p="45–46" />; <Ref k="bugaeva2022" />.
	</p>

	<Ex
		m="hekaci suma osura wa ontaro hokus"
		g="child stone throw CONJ barrel fall.over"
		tr="The child threw a stone, and the barrel fell over."
		cite="sato2008:45"
		dial="SAR"
		note="The thrower (child) is the A of the first clause; the barrel is the S of the second. Satō uses this example to show that wa carries no same-subject requirement."
	/>

	<p>
		Reference tracking across a <i lang="ain-Latn">wa</i> chain rests on the obligatory person
		indices that each finite verb carries independently. The statistical same-subject preference,
		combined with the absence of a formal constraint, places <i lang="ain-Latn">wa</i> in the
		configuration that the cosubordination typology of
		<Ref k="foleyvanvalin1984" paren /> describes — finite clause-chaining without converb
		morphology and without a grammaticalized same/different-subject opposition. The comparison with
		<i lang="ain-Latn">hine</i> and <i lang="ain-Latn">akusu</i>, and the broader question of
		whether any Hokkaido particle encodes subject continuity in a switch-reference-like way, belong
		to <Xr ch="hine-akusu-switch-reference" />.
	</p>
</S>

<S t="Multi-clause chains in narrative" id="narrative-chains">
	<p>
		Hokkaido Ainu prose narrative strings several <i lang="ain-Latn">wa</i>-linked clauses into
		a single chain. Each medial predicate closes on its own person indexing followed by
		<i lang="ain-Latn">wa</i>, before the chain continues to the next step. The result presents a
		process as an integrated sequence of stages:
	</p>

	<Ex
		m="sikerpeni kapu a=sospa wa siwnin pe a=uyna wa kusuri ne a=kar"
		g="Phellodendron bark 4.A=peel CONJ yellow.bark NMLZ 4.A=take CONJ medicine COP 4.A=make"
		tr="She peeled the bark of the Phellodendron tree, took the yellow inner bark, and made it into medicine."
		cite="ainukoraci1991"
		dial="SAR"
		place="横山裕之, 'sikerpeni', Ainu Times no. 18/3, text 12; corpus ainu-times/018/3#12"
		note="A three-step wa-chain; each step is a completed result-state enabling the next. pe after siwnin nominalizes the NP; the fourth-person a= carries the narrating subject."
	/>

	<p>
		The free connective adverb <i lang="ain-Latn">orowa(no)</i> 'and then, from there after' can
		follow a <i lang="ain-Latn">wa</i>-marked clause to make the sequential boundary more prominent
		<Ref k="nakagawa2024" p="516" />; <Ref k="ijas2023" />. This stacking — connective particle
		before, connective adverb after — is one of the clearest diagnostics separating the two word
		classes. The treatment of <i lang="ain-Latn">orowa(no)</i> as a discourse boundary marker
		belongs to <Xr ch="tail-head-linkage-and-narrative-cohesion" />.
	</p>
</S>

<S t="The culminative ayne" id="ayne-culminative">
	<p>
		The particle <A w="ayne" gl="and finally, at last (after a protracted action)" /> closes a
		stretch of sustained effort and points to the eventual outcome. Where
		<i lang="ain-Latn">wa</i> integrates events step by step, <i lang="ain-Latn">ayne</i> marks
		the endpoint of a duration — a process that went on and finally yielded a result
		<Ref k="nakagawa2024" p="346" />; <Ref k="sato2008" p="44" />. Refsing notes a nuance of
		impatient delay ('and then at last') absent from the neutral chainer
		<i lang="ain-Latn">hine</i> <Ref k="refsing1986" p="247" />.
	</p>

	<p>
		The most characteristic environment is the intensifier pattern
		<i lang="ain-Latn">V a V a ayne</i>, in which the perfective auxiliary
		<i lang="ain-Latn">a</i> reduplicates the verb to signal repeated iteration before the
		particle closes the stretch:
	</p>

	<Ex
		m="ku=cis a ku=cis a ayne"
		g="1SG.S=cry PFV 1SG.S=cry PFV CONJ"
		tr="Crying and crying, and finally…"
		cite="ainukoraci1991"
		dial="SAR"
		place="丸野和子, '&quot;Kuma&quot; turano k=an', Ainu Times no. 15/1, text 24 (excerpt)"
		note="The V a V a ayne intensifier pattern: the perfective a marks each iteration; ayne closes the protracted stretch and points to the outcome. The full sentence continues with the result clause."
	/>

	<p>
		The particle <i lang="ain-Latn">easir</i> 'only then, at that point' frequently follows
		<i lang="ain-Latn">ayne</i> to mark the delay before the outcome
		<Ref k="sato2008" p="44" />; <Ref k="ijas2023" />. The pattern
		<i lang="ain-Latn">wa…wa…ayne</i> is common in narrative: a run of
		<i lang="ain-Latn">wa</i>-chained steps leads up to a final <i lang="ain-Latn">ayne</i>
		that marks the point of resolution, as in the manner example above
		(<i lang="ain-Latn">corpokke a=eapkas wa arpa=an ayne</i>).
	</p>

	<p>
		The etymology is transparent: durative auxiliary <i lang="ain-Latn">a</i> plus the neutral
		chainer <i lang="ain-Latn">hine</i>, grammaticalized into a separate particle (Chiri 1936;
		Tamura, via <Ref k="refsing1986" p="247–248" />). Tokachi uses
		<i lang="ain-Latn">ahinne</i> (occasionally <i lang="ain-Latn">ainne</i>), and some Tokachi
		varieties such as Honbetsu lack the form altogether, distributing its function across
		<i lang="ain-Latn">hine</i> and <i lang="ain-Latn">wa</i>
		<Ref k="nakagawa2024" p="346–347" />. With a negated preceding clause,
		<i lang="ain-Latn">ayne</i> shifts to a 'before having V-ed' reading (negated-protraction),
		attested in Chitose <Ref k="nakagawa2024" p="347" />.
	</p>
</S>

<S t="wa as a gateway to the auxiliary system" id="auxiliary-bridge">
	<p>
		<i lang="ain-Latn">Wa</i> is the conjunctive particle most recruited as the pivot of Ainu's
		periphrastic aspect constructions <Ref k="refsing1986" p="240" />. The result-state reading
		extends naturally into a family of analytic forms in which the result-state of a closed event
		is overlaid by an existential or auxiliary verb, yielding a resultative, a terminative, a
		prospective, an attemptive, or a benefactive nuance. Nakagawa's §15 (pp. 452–455) lists the
		principal forms; the full aspectual analysis belongs to
		<Xr ch="existential-aspect-an-oka" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>construction</th>
				<th>glossed structure</th>
				<th>core value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">V wa an / V wa oka</i></td>
				<td>V CONJ exist.SG / exist.PL</td>
				<td>resultative state: 'be in the state resulting from V-ing'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V wa isam / V wa okere</i></td>
				<td>V CONJ be.no.more / finish</td>
				<td>terminative/completive: 'have V-ed (to completion)'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V wa anu</i></td>
				<td>V CONJ put.aside</td>
				<td>prospective: 'do V in preparation, keep V-ed for future use'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V wa inkar / V wa inu</i></td>
				<td>V CONJ try.seeing / try.hearing</td>
				<td>attemptive: 'try V-ing'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V wa kore</i></td>
				<td>V CONJ give</td>
				<td>benefactive: 'do V for someone'</td>
			</tr>
		</tbody>
	</table>

	<p>
		The resultative <i lang="ain-Latn">wa an</i> — where the preceding verb closes on its
		result-state and the existential <i lang="ain-Latn">an</i> predicates that state as ongoing —
		produces a modifier-head construction interpretable as a resultative relative clause:
	</p>

	<Ex
		m="racitke wa an tuki"
		g="hang CONJ exist cup"
		tr="a hanging cup"
		cite="nakagawa2024:339"
		dial="SAR"
		place="Nakagawa ex. 607"
		note="racitke wa an is the attributive resultative: 'the cup that hangs / is in the state of being hung'. The construction modifies tuki as a head noun."
	/>

	<p>The terminative <i lang="ain-Latn">wa isam</i> foregrounds completion rather than persistence:</p>

	<Ex m="arpa wa isam" g="go CONJ be.no.more" tr="S/he has gone." constructed />

	<p>
		In all these constructions <i lang="ain-Latn">wa</i> is the conjunctive particle, the same
		item that links finite clauses in the sequential reading; the boundary with the connective use
		is syntactic (an auxiliary follows immediately and predicates only aspect) rather than formal.
		The perfective auxiliary <i lang="ain-Latn">a</i> that often precedes
		<i lang="ain-Latn">wa</i> in scene-switch positions adds a further layer, completing the
		situation before the chain continues; that interaction is treated in
		<Xr ch="perfective-anterior-a" />.
	</p>
</S>

<S t="The dialectal allomorph ma" id="allomorph-ma">
	<p>
		When <i lang="ain-Latn">wa</i> immediately follows a stem ending in
		<i lang="ain-Latn">-n</i> or <i lang="ain-Latn">-m</i>, the initial
		<i lang="ain-Latn">w-</i> assimilates to the preceding nasal and the particle surfaces as
		<i lang="ain-Latn">[ma]</i>. Refsing documents the alternation for Shizunai
		<Ref k="refsing1986" p="240" />, and Nakagawa writes the allomorph phonetically in his
		transcriptions: the resultative <i lang="ain-Latn">an wa an</i> appears as
		<i lang="ain-Latn">an ma an</i> <Ref k="nakagawa2024" p="339" />. The pattern is phonological
		and pan-dialectal at the segment level ‹corpus-confirmed›: the standard romanized orthography
		retains <i lang="ain-Latn">wa</i> throughout to represent the underlying form, while katakana
		transcription writes マ in the relevant environment, reflecting the surface pronunciation
		(nukopoli, aynu-corpora Discord 2024; <Ref k="aynucorporadiscord" />).
	</p>
	<p>
		The same assimilation applies before any stem ending in a nasal, including
		<i lang="ain-Latn">an</i> 'be/exist', <i lang="ain-Latn">oman</i> 'go (honorific)', and
		verbs whose final syllable carries <i lang="ain-Latn">-n</i>. The allomorph is predictably
		conditioned; no separate particle <i lang="ain-Latn">ma</i> exists alongside
		<i lang="ain-Latn">wa</i>.
	</p>
</S>

<S t="Disambiguation" id="disambiguation">
	<p>
		The form <i lang="ain-Latn">wa</i> covers at least three distinct grammatical entries, kept
		apart by position and syntactic host rather than by form
		<Ref k="nakagawa2024" p="340" />; <Ref k="ijas2023" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>entry</th>
				<th>grammatical class</th>
				<th>key diagnostic</th>
				<th>example</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">wa</i> sequential</td>
				<td>conjunctive particle</td>
				<td>follows a finite VP; always opens a further clause; swappable for
					<i lang="ain-Latn">hine</i></td>
				<td>
					<i lang="ain-Latn">ipe wa soyne</i>
					<br />'ate and went out'
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">wa(no)</i> ablative</td>
				<td>case particle / postposition</td>
				<td>follows a NP or locative nominal; glossed ABL; extends to
					<i lang="ain-Latn">wano</i></td>
				<td>
					<i lang="ain-Latn">mosir wa</i>
					<br />'from the land'
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">wa</i> sentence-final</td>
				<td>final particle</td>
				<td>clause-final; emphatic or exclamatory; no following clause</td>
				<td>
					<i lang="ain-Latn">pirka wa</i>
					<br />'it's fine! (emph.)'
				</td>
			</tr>
		</tbody>
	</table>

	<p>
		The connective <i lang="ain-Latn">wa</i> always follows a finite verbal predicate and always
		opens a following clause; it never occurs clause-initially. The ablative
		<i lang="ain-Latn">wa(no)</i> attaches to a nominal and typically co-occurs with a spatial or
		temporal noun (cf. <i lang="ain-Latn">orowa</i> = <i lang="ain-Latn">or</i> +
		<i lang="ain-Latn">wa</i> 'from that place'). The sentence-final emphatic is isolable at the
		end of a complete utterance. In natural text the three are rarely ambiguous; glossing discipline
		requires keeping them distinct, since the particle counts for the sequential
		<i lang="ain-Latn">wa</i> are inflated by ablative and final-particle tokens in any raw
		word-form search ‹corpus-suggested›.
	</p>
</S>
