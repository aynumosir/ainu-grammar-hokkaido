<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="kuni in the complementizer system" id="system">
	<p>
		The particle <i lang="ain-Latn">kuni</i> nominalizes a finite VP into a nominal whose content
		is irrealis, prospective, or deontic — what the reporting subject expects, wishes, or presents
		as obligatory. It is a member of the small set of complementizers that take a saturated VP and
		make it the argument of a transitive matrix predicate, forming what Nakagawa calls the
		indirect-speech (<span lang="ja">間接話法</span>) system
		<Ref k="nakagawa2024" p="475–476" />. The complementizer <i lang="ain-Latn">yak</i> marks
		the retrospective or ongoing counterpart; <i lang="ain-Latn">hi</i> and
		<i lang="ain-Latn">p</i> ~ <i lang="ain-Latn">pe</i> nominalize without a temporal restriction
		<Ref k="nakagawa2024" p="475–478" />; <Ref k="sato2008" p="176–177" />. The closed class of
		<Xr ch="formal-defective-nouns">formal nouns</Xr> that includes
		<i lang="ain-Latn">p</i> ~ <i lang="ain-Latn">pe</i> is defined there; the arity arithmetic
		that separates complementizer from relative-clause use is developed in
		<Xr ch="nominalization-p-pe" />.
	</p>

	<p>
		Three construction types exploit <i lang="ain-Latn">kuni</i>. Before
		<A w="ye" gl="say" /> or <A w="ramu" gl="think" />, it nominalizes a VP expressing what the
		reporting subject says will happen, believes should happen, or directs someone to do. Before
		the formal noun <A w="p" gl="thing; (pejorative) person" />, it yields a purposive or deontic
		nominal (<i lang="ain-Latn">kuni p</i>). And before the copula
		<A w="ne" gl="be" /> directly, Classical Ainu data show an expectative predication meaning
		'it must be that' or 'in order that' (<i lang="ain-Latn">kuni ne</i>)
		<Ref k="shibatani1990" p="83–84" />. These three are treated in the sections below.
	</p>

	<p>
		Corpus search returns 6,113 tokens of <i lang="ain-Latn">kuni</i> (rank 36), a figure that
		conflates the complementizer with any phonologically identical material and gives an upper
		bound on the construction's frequency.
	</p>
</S>

<S t="The irrealis complement of ye and ramu" id="indirect-speech">
	<p>
		The matrix verbs that select <i lang="ain-Latn">kuni</i> are
		<A w="ye" gl="say" /> and <A w="ramu" gl="think" />. Each member of the indirect-speech
		complementizer set marks the temporal or epistemic stance the reporting subject takes toward
		the reported content. <i lang="ain-Latn">kuni</i> occupies the prospective end of the
		system: the embedded VP describes what will, should, or is wished to come about
		<Ref k="nakagawa2024" p="476" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>complementizer</th>
				<th>temporal / epistemic value</th>
				<th>matrix verbs</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">kuni</i></td>
				<td>future / inferred / wished / directive</td>
				<td><i lang="ain-Latn">ye</i>, <i lang="ain-Latn">ramu</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kunak</i></td>
				<td>future / inferred</td>
				<td><i lang="ain-Latn">ye</i>, <i lang="ain-Latn">ramu</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">yak</i></td>
				<td>already-happened / ongoing</td>
				<td><i lang="ain-Latn">ye</i>, <i lang="ain-Latn">ramu</i>, <i lang="ain-Latn">takar</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kusu</i></td>
				<td>directive (combined with a causative context)</td>
				<td><i lang="ain-Latn">ye</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		Two syntactic properties hold across all four members. Final particles of the main-clause type
		(<i lang="ain-Latn">na</i>, <i lang="ain-Latn">ya</i>, etc.) cannot appear inside the
		embedded clause; they are anchored to the speaker's own utterance, not to the reported one.
		And the referential perspective inside the embedded clause shifts from the speaker's to the
		reporting subject's: a first-person speaker becomes third or fourth person as the locus of
		predication <Ref k="nakagawa2024" p="475" />. These properties confirm that each
		complementizer heads a nominal object: even <i lang="ain-Latn">yak</i>, originally a
		conditional conjunctive, cannot be followed directly by an intransitive verb
		(*<i lang="ain-Latn">yak hawean</i> 'that someone spoke' is ungrammatical as a standalone),
		because as a nominal it must be the transitive verb's object
		<Ref k="nakagawa2024" p="475–476" />.
	</p>

	<Ex
		m="hosipi=an kuni a=ye"
		g="return=4.S PURP 4.A=say"
		tr="I said I would return."
		cite="nakagawa2024:476"
		dial="HK"
		note="Nakagawa's own example. The fourth-person intransitive suffix =an marks the reported subject (the speaker's self-reference shifted to 4th person inside the embedded clause); kuni nominalizes the prospective VP as the object of ye."
	/>

	<Ex
		m="ahun kuni a=ye akusu toykooripak"
		g="enter PURP 4.A=say CONJ be.very.abashed"
		tr="When I told them to enter, they were very abashed."
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 8 (part 2) [aa-irc/007#213]"
		note="kuni nominalizes the directive ahun 'enter' as the content of ye 'say'; akusu links the result clause temporally."
	/>

	<p>
		<i lang="ain-Latn">ramu</i> 'think' selects the same <i lang="ain-Latn">kuni</i>
		complement when the thinker's belief is prospective or deontic. The following illustration
		conforms to the pattern Nakagawa establishes <Ref k="nakagawa2024" p="476" />:
	</p>

	<Ex
		m="pirka kuni ku=ramu"
		g="be.good PURP 1SG.A=think"
		tr="I think it would be good."
		constructed
		dial="HK"
		note="Constructed to illustrate the kuni complement of ramu; the pattern is established by Nakagawa 2024: 476, which lists both ye and ramu as matrix verbs for kuni."
	/>

	<p>
		The distinction between <i lang="ain-Latn">kuni</i> and <i lang="ain-Latn">kunak</i> within
		the prospective subsystem is the most discussed. Nakagawa assigns the directive reading
		exclusively to <i lang="ain-Latn">kuni</i>: a command or instruction reported under
		<i lang="ain-Latn">ye</i> takes <i lang="ain-Latn">kuni</i>; the two forms are not freely
		interchangeable even in purely inferred contexts
		<Ref k="nakagawa2024" p="476–477" /> ‹corpus-suggested›. The
		<i lang="ain-Latn">kuni</i> / <i lang="ain-Latn">yak</i> contrast is cleaner: the pair
		divides prospective from retrospective content, mirroring a tense–modality divide in the
		reported proposition.
	</p>
</S>

<S t="kuni p: purposive and deontic nominals" id="kuni-p">
	<p>
		When <i lang="ain-Latn">kuni</i> is followed by the formal noun
		<i lang="ain-Latn">p</i> (allomorph <i lang="ain-Latn">pe</i> after a consonant-final stem),
		the compound nominalizes the preceding VP and yields two related readings depending on how
		the head is construed: a purposive nominal 'thing to V / what is to be done', and a deontic
		or propositional nominal 'what will / must happen'. Both are well attested in the Saru corpus.
	</p>

	<p>
		The purposive reading is clearest when <i lang="ain-Latn">kuni p</i> denotes objects or
		activities defined by their intended function. Two parallel purposive nominals appear in a
		single clause:
	</p>

	<Ex
		m="míre kuni p ére kuni p nepki ne ki wa"
		g="clothe PURP NMLZ feed PURP NMLZ task COP do CONJ"
		tr="making things to clothe (the grandchild) and things to feed (the grandchild) her task,"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 7 [aa-irc/005#355]"
		note="Two parallel kuni p nominals ('thing to clothe', 'thing to feed') are predicated as the grandmother's task via nepki ne ki wa; the construction names purpose-defined objects."
	/>

	<p>
		The deontic or propositional reading appears when <i lang="ain-Latn">kuni p</i> is itself
		predicated. Combination with the copula and the inferential formal noun
		<i lang="ain-Latn">ruwe</i> yields the frame
		<i lang="ain-Latn">[VP] kuni p ne ruwe ne</i>, which presents the VP-content as inevitable
		or obligatory and asserts it as established fact (see <Xr ch="ruwe-ne-inferential" />):
	</p>

	<Ex
		m="a=e=túskote kuni p ne ru-we ne na"
		g="4.A=2SG.O=tie.up PURP NMLZ COP track-POSS COP FIN"
		tr="You will surely be tied up."
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, isoytak monologue 2 [aa-irc/004#130]"
		note="The fourth-person agent a= with the second-person object e= yields a passive-like reading; kuni p forms the deontic nominal, ne is the copula predicated over it, and ruwe ne frames the whole as recognized fact."
	/>

	<Ex
		m="nen poka iki wa yayetuytak kuni p ne ru-we ne na"
		g="who even do CONJ make.a.living PURP NMLZ COP track-POSS COP FIN"
		tr="Somehow, (the old man) will surely manage to make a living."
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 10 [aa-irc/010#139]"
		note="The embedded clause nen poka iki wa yayetuytak expresses the desired future outcome; kuni p ne ruwe ne presents its coming-to-pass as deontic and epistemically certain. nen poka 'somehow / by whatever means' is an indefinite expression built on the interrogative nen 'who'."
	/>

	<p>
		The four main patterns built on <i lang="ain-Latn">kuni</i>, ranging from indirect speech
		through purposive nominal to the full epistemic deontic frame, are summarized in the
		following table <Ref k="nakagawa2024" p="476" />; <Ref k="bugaeva2016" p="294" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>pattern</th>
				<th>structural description</th>
				<th>reading</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">[VP] kuni [ye / ramu]</i></td>
				<td><i lang="ain-Latn">kuni</i> nominalizes VP as argument of matrix predicate</td>
				<td>indirect speech / thought with prospective content</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">[VP] kuni p</i></td>
				<td><i lang="ain-Latn">kuni</i> + formal noun <i lang="ain-Latn">p</i></td>
				<td>purposive nominal 'thing to V', 'what is to be done'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">[VP] kuni p ne</i></td>
				<td>deontic nominal + copula</td>
				<td>deontic predication 'is a thing that must / will happen'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">[VP] kuni p ne ruwe ne</i></td>
				<td>deontic nominal + copula + inferential formal noun</td>
				<td>epistemic deontic 'it is surely a thing that must / will happen'</td>
			</tr>
		</tbody>
	</table>

	<p>
		The <i lang="ain-Latn">p</i> of <i lang="ain-Latn">kuni p</i> is the same formal noun
		treated in <Xr ch="nominalization-p-pe" />. Its arity (−1) closes a purposive clause
		with an open participant slot (purposive nominal reading) or nominalizes a saturated
		irrealis clause as a whole (deontic reading). The complement-taking predicates that select
		these nominals are discussed in <Xr ch="nominalized-complements-control-raising" />; the
		overlap with the deontic modal domain in <Xr ch="deontic-necessity" />.
	</p>
</S>

<S t="kuni ne: expectative predication" id="kuni-ne">
	<p>
		Shibatani groups <i lang="ain-Latn">kuni</i> followed directly by the copula
		<i lang="ain-Latn">ne</i> alongside the other formal-noun-plus-copula modal expressions
		(<i lang="ain-Latn">ruwe ne</i>, <i lang="ain-Latn">siri ne</i>,
		<i lang="ain-Latn">hawe ne</i>, <i lang="ain-Latn">humi ne</i>) under the label "expectative
		mood". The form yields two readings in his Classical Ainu data: an epistemic 'it must be
		that [VP]' and a purposive 'in order that [VP]'
		<Ref k="shibatani1990" p="83–84" />.
	</p>

	<p>
		On this account, <i lang="ain-Latn">kuni</i> itself functions as a formal-noun-like head
		nominalizing the preceding VP; the copula predicates that nominalization. The two readings
		correspond directly to the deontic and purposive readings of <i lang="ain-Latn">kuni p ne</i>,
		where the additional formal noun <i lang="ain-Latn">p</i> is present between
		<i lang="ain-Latn">kuni</i> and the copula. Whether bare
		<i lang="ain-Latn">kuni ne</i> and <i lang="ain-Latn">kuni p ne</i> are diachronically
		related variants or a single construction with optionally present
		<i lang="ain-Latn">p</i> is not settled by the sources read here ‹speculative›.
	</p>

	<p>
		Shibatani's data are from Classical epic Ainu (yukar traditions of the Itadori and Ishikari
		areas). No read source provides modern Saru or Chitose corpus examples of bare
		<i lang="ain-Latn">kuni ne</i> without the intervening <i lang="ain-Latn">p</i>; the banked
		Saru corpus examples above all show the <i lang="ain-Latn">kuni p ne</i> form. Nakagawa's
		grammar, based on modern Saru and Chitose, records
		<i lang="ain-Latn">kuni p ne ruwe ne</i> as the productive frame
		<Ref k="nakagawa2024" p="476" />.
	</p>

	<p>
		The formal-noun-plus-copula paradigm underlying both constructions connects
		<i lang="ain-Latn">kuni</i> to the evidential system: Nakagawa observes that clause-final
		evidential phrases (<i lang="ain-Latn">ruwe ne</i>, <i lang="ain-Latn">siri ne</i>, etc.)
		constitute one type of complementizer applied to a main clause, and
		<i lang="ain-Latn">kuni</i> participates in the same nominal architecture
		<Ref k="nakagawa2024" p="508" />. The full paradigm is set out in
		<Xr ch="evidential-schema-overview" />. Purpose clauses built on
		<i lang="ain-Latn">kuni</i> in adverbial position are treated in
		<Xr ch="causal-and-purpose-clauses" />.
	</p>
</S>

<S t="Morphological status and open questions" id="morphology-status">
	<p>
		Two analyses of <i lang="ain-Latn">kuni</i> appear in the literature and make different
		predictions about its internal structure. Nakagawa treats it as a conjunctive particle
		(<span lang="ja">接続助詞</span>) with formal-noun-like behavior
		(<span lang="ja">形式名詞的な用法</span>) — a free form that nominalizes the preceding VP and
		feeds it to a transitive matrix predicate, on the same footing as
		<i lang="ain-Latn">yak</i> and <i lang="ain-Latn">kunak</i>
		<Ref k="nakagawa2024" p="476" />. On this analysis, <i lang="ain-Latn">kuni p</i> is a
		sequence of two free forms: the particle <i lang="ain-Latn">kuni</i> followed by the formal
		noun <i lang="ain-Latn">p</i>.
	</p>

	<p>
		Bugaeva's morphological analysis decomposes <i lang="ain-Latn">kuni-p</i> as
		<i lang="ain-Latn">kun-i-p</i> — an obligation-related root
		<i lang="ain-Latn">kun-</i> (semantics uncertain), a possessive suffix
		<i lang="ain-Latn">-i</i>, and the nominalizer <i lang="ain-Latn">-p</i> — yielding a deontic
		head meaning 'the thing that must be done', without necessarily treating
		<i lang="ain-Latn">kuni</i> and <i lang="ain-Latn">p</i> as syntactically separate
		<Ref k="bugaeva2016" p="294" /> ‹contested›. The lexical source of the root
		<i lang="ain-Latn">kun-</i> remains unverified.
	</p>

	<p>
		The broader constituency question — whether <i lang="ain-Latn">kuni p ne ruwe ne</i> is
		biclausal (a nominalizing particle and formal noun heading the preceding clause, closed by
		the copula) or is grammaticalizing toward a monoclausal complex predicate — runs parallel to
		the same debate for the evidential frame <i lang="ain-Latn">ruwe ne</i>, discussed in
		<Xr ch="nominalization-p-pe" /> and <Xr ch="ruwe-ne-inferential" />. No read source provides
		a constituency test that decides between them for the <i lang="ain-Latn">kuni</i>
		construction specifically ‹contested›
		<Ref k="nakagawa2024" p="476" />; <Ref k="bugaeva2016" p="294" />.
	</p>

	<p>
		Shibatani's Classical data add a historical dimension: his "expectative mood" label groups
		<i lang="ain-Latn">kuni ne</i> with the possessed sensory-noun heads, suggesting the
		formal-noun-like behavior Nakagawa observes reflects a partly grammaticalized noun origin —
		the same diachronic cline by which <i lang="ain-Latn">ruwe</i>,
		<i lang="ain-Latn">siri</i>, and <i lang="ain-Latn">hawe</i> moved from sensory nouns to
		nominalization heads <Ref k="shibatani1990" p="83–84" /> ‹speculative›.
	</p>
</S>
