<!-- src/lib/grammar/chapters/simultaneous-kor-clauses.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The form and its environments" id="form-environments">
	<p>
		The conjunctive particle <A w="kor" gl="while, as (simultaneous)" /> joins two finite
		clauses in Hokkaido Ainu and carries two distinct linking readings: a
		<em>simultaneous</em> reading ('while, as, at the same time as') and a
		<em>habitual/factual conditional</em> reading ('whenever, when habitually'). The same
		segment is also the transitive verb <A w="kor" gl="have, possess" /> 'have, possess',
		creating a three-way collision of forms that both Nakagawa and Ijäs flag explicitly
		<Ref k="nakagawa2024" p="340, 347" />; <Ref k="ijas2023" />. Word-class and linear
		position resolve the collision: the conjunctive particle follows a finite predicate and
		precedes the next clause; the possession verb carries its own person-index prefixes
		directly (<i lang="ain-Latn">ku=kor</i> 'I have it',
		<i lang="ain-Latn">a=kor huci</i> 'one's grandmother'). As a conjunctive particle,
		<i lang="ain-Latn">kor</i> belongs to the bound post-predicate class
		(<span lang="ja">接続助詞</span>) inventoried in <Xr ch="clause-linkage-overview" />.
	</p>
	<p>
		Whole-corpus token counts place <i lang="ain-Latn">kor</i> at approximately 29,300
		occurrences (rank 5 in the aligned Hokkaido corpus), but that figure conflates the
		possession verb, the simultaneous particle, and the conditional reading, so the raw total
		is an upper bound on any single function ‹corpus-suggested›
		<Ref k="nakagawa2024" p="340" />.
	</p>
</S>

<S t="Overlapping events: the simultaneous reading" id="simultaneity">
	<p>
		The simultaneous reading of <i lang="ain-Latn">kor</i> signals that two events or states
		co-occur: the first predicate is ongoing while the second takes place, or both proceed
		together. Nakagawa's primary gloss is Japanese <span lang="ja">〜しながら</span>
		<Ref k="nakagawa2024" p="340" />; Satō gives the same value for Chitose
		<Ref k="sato2008" p="49" />.
	</p>
	<p>
		Among the temporal-succession connectives of Saru, <i lang="ain-Latn">kor</i> occupies a
		phase-specific slot. Nakagawa draws a three-way contrast according to the temporal phase of
		the first predicate <Ref k="nakagawa2024" p="341" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>particle</th>
				<th>temporal phase of the first predicate</th>
				<th>primary reading</th>
				<th>illustrative pair</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">wa</i></td>
				<td>result-state following completion of the action</td>
				<td><span lang="ja">〜して、〜したあとで</span> 'and then; after doing'</td>
				<td>
					<i lang="ain-Latn">ipe wa soyne</i>
					'ate, then went out'
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kor</i></td>
				<td>action or state ongoing at the time of the second event</td>
				<td><span lang="ja">〜しながら</span> 'while doing; as'</td>
				<td>
					<i lang="ain-Latn">ipe kor soyne</i>
					'went out while eating'
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">no</i></td>
				<td>stative or negated predicate (no temporal change)</td>
				<td>
					<span lang="ja">〜の状態で、〜しないで</span>
					'being X; without doing'
				</td>
				<td>
					<i lang="ain-Latn">somo ipe no soyne</i>
					'went out without eating'
				</td>
			</tr>
		</tbody>
	</table>

	<p>
		Nakagawa notes that the phase account alone does not explain every distribution: the
		fixed collocation <i lang="ain-Latn">apkas wa arpa</i> 'walk and go' resists
		<i lang="ain-Latn">*apkas kor arpa</i>, suggesting that additional manner or cause semantics
		govern some <i lang="ain-Latn">wa</i> collocations (Tamura 1972b: 152, via
		<Ref k="nakagawa2024" p="342" />). The <i lang="ain-Latn">no</i> particle and its
		negation distribution are treated in <Xr ch="manner-and-degree-adverbial-clauses" />;
		sequential <i lang="ain-Latn">wa</i> belongs to
		<Xr ch="sequential-wa-and-clause-chaining" />.
	</p>

	<p>
		The following example from Nakagawa's Saru materials shows the simultaneity construction
		in a narrative sequence. The silver knife descends
		(<i lang="ain-Latn">san</i>) while gleaming
		(<i lang="ain-Latn">mikemike</i>):
	</p>

	<Ex
		m="sirokane otcike or sirokane makiri saya eusi wa kasi mikemike kor san hine"
		g="silver tray place silver small.knife sheath be.with CONJ surface sparkle CONJ descend CONJ"
		tr="The silver knife on the silver tray, with its sheath, came descending while gleaming on the surface."
		cite="nakagawa2024:340"
		dial="SAR"
		place="Nakagawa ex. 610"
		note="The mikemike kor san sequence is the simultaneity construction: gleaming (ongoing) kor descending. The preceding saya eusi wa closes an attendant-state clause ('sheathed, and'); hine continues the chain."
	/>

	<p>
		The simultaneous <i lang="ain-Latn">kor</i> carries no same-subject requirement. Unlike
		Japanese <span lang="ja">〜ながら</span>, which requires coreferential subjects in both
		clauses, Ainu <i lang="ain-Latn">kor</i> permits the two linked predicates to have
		different subjects. Satō demonstrates this with an example where the speaking subjects
		(mother and father) are distinct from the entity that acts in the matrix clause
		<Ref k="sato2008" p="49–50" />; Ijäs makes the same observation, citing a Tamura example
		where the dancer and the looker are different persons <Ref k="ijas2023" />:
	</p>

	<Ex
		m="ku=horipi kor en=nukar"
		g="1SG.S=dance CONJ 1SG.O=look.at"
		tr="While I was dancing, s/he looked at me."
		constructed
		cite="ijas2023"
		note="Different-subject kor clause: the dancer (first person, ku=) and the observer (third person, unexpressed) are distinct. After Tamura 2000: 155, adapted by Ijäs as a teaching example."
	/>

	<p>
		Reference tracking across the chain relies on the obligatory person-index prefixes on
		each finite predicate. Ainu has no morphological switch-reference — no dedicated
		same-subject or different-subject converb morphology — as established in
		<Xr ch="clause-linkage-overview" /> and examined in <Xr ch="hine-akusu-switch-reference" />.
		For the Shizunai cognate <i lang="ain-Latn">kane</i>, Refsing observes a statistical
		tendency toward same-subject co-occurrence in her materials, with documented exceptions
		<Ref k="refsing1986" p="250" />; no equivalent quantitative statement has been made for
		Saru <i lang="ain-Latn">kor</i> ‹corpus-suggested›.
	</p>
</S>

<S t="The progressive: kor followed by an existential" id="progressive">
	<p>
		When the simultaneous <i lang="ain-Latn">kor</i> is followed immediately by the
		existential verb <i lang="ain-Latn">an</i> (singular) or <i lang="ain-Latn">oka</i>
		(plural), the combination functions as the Ainu progressive: the event of the first
		predicate is in progress at the time of reference. Nakagawa gives the paradigmatic Saru
		form and glosses it <span lang="ja">歩いている</span> 'is walking'
		<Ref k="nakagawa2024" p="340" />:
	</p>

	<Ex
		m="apkas kor an"
		g="walk CONJ exist"
		tr="(s/he) is walking"
		cite="nakagawa2024:340"
		dial="SAR"
		note="Paradigmatic progressive: simultaneous kor followed by the existential an. The subject is third/fourth person, zero-marked on both predicates in this canonical form."
	/>

	<p>
		The progressive contrasts directly with the resultative-perfect
		<i lang="ain-Latn">wa an</i>: where <i lang="ain-Latn">wa</i> presents a result-state
		following completion of an action, <i lang="ain-Latn">kor an</i> presents the action as
		still unfolding. This contrast follows directly from the temporal-phase distinction in the
		table above. The example below shows the progressive integrated into a clause where the
		attendant <i lang="ain-Latn">no</i> marks a concurrent negated state:
	</p>

	<Ex
		m="a=onaha somo mokor no kamuyoritak kor an"
		g="4.POSS=father NEG sleep CONJ pray.to.god CONJ exist"
		tr="Father was praying to the gods without sleep."
		cite="nakagawa2024:340"
		dial="SAR"
		place="Nakagawa ex. 614"
		note="no closes the negated somo mokor clause ('without sleeping'); kor an on kamuyoritak forms the progressive 'was praying'. Both no and kor are simultaneous-type connectives, assigned by the temporal phase of their respective first predicates."
	/>

	<p>
		The full distributional and frequency evidence for the <i lang="ain-Latn">kor an</i>
		progressive, its contrast with <i lang="ain-Latn">wa an</i>, and the eight-form
		aspectual paradigm as a whole are developed in <Xr ch="existential-aspect-an-oka" />,
		which draws on Satō's dedicated Chitose aspect study <Ref k="sato2006" paren />. The
		TAM system is surveyed in <Xr ch="tam-overview" />. The cognate
		<i lang="ain-Latn">kane an</i> continuative of Shizunai and the related
		<i lang="ain-Latn">siran</i> forms are treated in
		<Xr ch="continuative-siri-siran-kane-an" />.
	</p>
</S>

<S t="Habitual and factual conditional: the whenever reading" id="habitual-conditional">
	<p>
		The second conjunctive reading of <i lang="ain-Latn">kor</i> expresses general causation
		or habitual recurrence: whenever E1 obtains, E2 follows as a general truth or matter of
		routine. Satō characterizes this as <span lang="ja">一般的因果関係</span>
		<Ref k="sato2009" p="51" />; Nakagawa glosses it
		<span lang="ja">〜すると（たびに）</span> and gives as a stock example
		<i lang="ain-Latn">sironuman kor cikap utar iwak</i>
		'when it gets dark the birds go home' <Ref k="nakagawa2024" p="347" />. The relationship
		is a general truth or a habitual pattern across occasions.
	</p>
	<p>
		Satō's study of Ainu conditionals identifies a mood constraint on this reading: with a
		declarative matrix clause, the habitual <i lang="ain-Latn">kor</i> expresses a general
		truth; for a one-off individual event it is restricted to wh-interrogative matrix clauses
		<Ref k="sato2009" p="51" />. The contrast with the hypothetical conditional
		<i lang="ain-Latn">yakun</i> is stark: <i lang="ain-Latn">yakun</i> applies to one-time
		premises and takes any matrix mood, making it the broadest member of the system. The full
		conditional paradigm, mood constraints, and Satō's cross-linguistic comparison are set out
		in <Xr ch="conditional-temporal-concessive-clauses" />.
	</p>
	<p>
		The following Saru example from Nakagawa illustrates the habitual conditional in a
		narrative context. The sentence additionally presents all three homonymous readings of
		<i lang="ain-Latn">kor</i> within three words: the first two instances are the
		possession verb (<i lang="ain-Latn">a=kor</i> 'one's grandmother/grandfather'), and the
		third is the conditional particle:
	</p>

	<Ex
		m="a=kor huci a=kor ekasi earkinne i=omap wa sirkunne kor i=ukotumam wa hotke=an"
		g="4.A=have grandmother 4.A=have grandfather both 4.O=love CONJ become.night CONJ 4.O=hold.together CONJ sleep=4.S"
		tr="My grandmother and grandfather both loved me, and whenever night came they would hold me close and sleep."
		cite="nakagawa2024:347"
		dial="SAR"
		place="Nakagawa ex. 643"
		note="The first two a=kor are the transitive possession verb 'have' (4th-person A prefix); sirkunne kor is the habitual conditional 'whenever it became night'. The recurrent pattern — night after night — is the core habitual reading."
	/>

	<p>
		A corpus narrative by 丸野和子 in the アイヌタイムズ shows both the habitual conditional and
		the progressive in a single clause, integrated with the
		<i lang="ain-Latn">V a V a ayne</i> durative-reduplication pattern
		<Ref k="nakagawa2024" p="346–347" />:
	</p>

	<Ex
		m="ku=cis a ku=cis a ayne k=esikarun kor ku=cis patek ku=ki kor k=an"
		g="1SG.S=weep PFV 1SG.S=weep PFV CONJ 1SG.S=recall CONJ 1SG.S=weep only 1SG.A=do CONJ 1SG.S=exist"
		tr="I cried and cried, and finally, whenever I recalled it, I was doing nothing but weep."
		cite="ainukoraci1991"
		dial="SAR"
		place="丸野和子, 'Kuma turano k=an', Ainu Times 015/1"
		note="k=esikarun kor: habitual conditional 'whenever I recalled it'. ku=ki kor k=an: progressive 'was continuously doing'. Two distinct kor readings appear within the same clause chain."
	/>
</S>

<S t="Dialect distribution and cognate forms" id="dialect-distribution">
	<p>
		The two linking functions that Saru assigns to a single <i lang="ain-Latn">kor</i> are
		distributed across separate particles in other Hokkaido varieties. Shizunai presents the
		clearest formal split:
	</p>

	<table>
		<thead>
			<tr>
				<th>function</th>
				<th>Saru / Chitose</th>
				<th>Shizunai</th>
				<th>Horobetsu / Kushiro</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>simultaneous 'while, as'</td>
				<td><i lang="ain-Latn">kor</i></td>
				<td><i lang="ain-Latn">kane</i></td>
				<td><i lang="ain-Latn">ko</i></td>
				<td rowspan="3">
					<Ref k="nakagawa2024" p="342, 347–348" />;
					<Ref k="refsing1986" p="248–250" />
				</td>
			</tr>
			<tr>
				<td>habitual / general-causation conditional 'whenever'</td>
				<td><i lang="ain-Latn">kor</i></td>
				<td><i lang="ain-Latn">konno</i> / <i lang="ain-Latn">koonno</i></td>
				<td><i lang="ain-Latn">ko</i></td>
			</tr>
			<tr>
				<td>progressive (<i lang="ain-Latn">V kor an</i>)</td>
				<td><i lang="ain-Latn">kor an</i></td>
				<td><i lang="ain-Latn">kane an</i></td>
				<td><i lang="ain-Latn">ko an</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		In Shizunai, Refsing describes <i lang="ain-Latn">kane</i> as the 'contemporal'
		conjunctionalizer — 'at the same time as' — and assigns <i lang="ain-Latn">konno</i> to
		a separate 'sequential' slot covering inevitable consequence, closer to what Saru expresses
		with the habitual conditional <i lang="ain-Latn">kor</i>
		<Ref k="refsing1986" p="248–250" />. Nakagawa traces the Saru/Shizunai particle split
		to Tamura 1972b: 148 <Ref k="nakagawa2024" p="342" />. The following Shizunai example —
		also cited in <Xr ch="clause-linkage-overview" /> — places the two Shizunai particles
		side by side:
	</p>

	<Ex
		m="a=kor katkemat utar an=oskur kane kesto an konno oka=an"
		g="4.A=have lady PL 4.A=cherish CONJ every.day exist CONJ exist.PL=4.S"
		tr="Cherishing our ladies, we lived on day after day."
		cite="nakagawa2024:342"
		dial="SHI"
		place="Nakagawa ex. 617, after Okuda; Shizunai"
		note="kane marks the simultaneity that Saru kor covers; konno marks the recurrent-time relation that Saru also assigns to kor in its conditional reading. The Shizunai system distributes these functions across two distinct particles."
	/>

	<p>
		The reduced Horobetsu/Kushiro form <i lang="ain-Latn">ko</i> reflects the regular
		reduction of word-final <i lang="ain-Latn">r</i> attested in other Hokkaido environments
		(e.g. <i lang="ain-Latn">kur</i> 'person' → <i lang="ain-Latn">ku</i>) and noted from
		切替 2003: 313 by Nakagawa <Ref k="nakagawa2024" p="348" />. The Shizunai
		<i lang="ain-Latn">kane an</i> continuative and its relationship to the
		<i lang="ain-Latn">siran</i> family of forms are taken up in
		<Xr ch="continuative-siri-siran-kane-an" />.
	</p>
</S>

<S t="kor in derived particles" id="derived-particles">
	<p>
		Two high-frequency conjunctive particles are built on <i lang="ain-Latn">kor</i> and
		inherit its temporal semantics transparently.
	</p>
	<p>
		<A w="korka" gl="but, although (adversative)" />, the adversative conjunctive particle,
		is formed as <i lang="ain-Latn">kor</i> 'when' + <i lang="ain-Latn">ka</i> 'even'
		= 'even when (X, nevertheless Y)' <Ref k="nakagawa2024" p="351" />; <Ref k="ijas2023" />.
		The etymology is stated consistently across Nakagawa, Satō, and Ijäs and is uncontested.
		Adversative <i lang="ain-Latn">korka</i> is treated in
		<Xr ch="conditional-temporal-concessive-clauses" />.
	</p>
	<p>
		<A w="sekor" gl="(quotative complementizer) ~と" />, the quotative complementizer,
		is analysed as <i lang="ain-Latn">se</i> 'say, make a sound' +
		<i lang="ain-Latn">kor</i> 'while' = 'while saying / while making the sound of …',
		with the simultaneous value of <i lang="ain-Latn">kor</i> still transparent in the
		etymology <Ref k="nakagawa2024" p="470" />; <Ref k="ijas2023" />. Community analysis
		corroborates this parsing as an asserted, well-grounded etymology (nukopoli, aynu-corpora
		Discord, 2024 <Ref k="aynucorporadiscord" />). A further community-proposed analysis
		holds that <i lang="ain-Latn">sekor</i> is a specifically Saru innovation and that the
		pan-dialectal <i lang="ain-Latn">ari</i>/<i lang="ain-Latn">ani</i> represents the
		older form — a hypothesis put forward by nukopoli (aynu-corpora Discord, 2024
		<Ref k="aynucorporadiscord" />) ‹contested›; the primary grammars read for this chapter
		do not settle the dialectal priority question. The framing function, person-switch
		mechanism, and dialect distribution of <i lang="ain-Latn">sekor</i> are developed in
		<Xr ch="quotative-complementation-sekor" />.
	</p>
</S>
