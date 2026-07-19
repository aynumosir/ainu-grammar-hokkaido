<script lang="ts">
	import { S, Ex, Ref, Xr, A, FreqChart } from '$lib/grammar/components';
</script>

<S t="Place in the evidential paradigm" id="paradigm">
	<p>
		Hokkaido Ainu marks the speaker's source of information periphrastically: a finite clause is
		nominalized by a bound <em>formal noun</em> and the result is predicated with the copula
		<i lang="ain-Latn">ne</i>. The language has no dedicated evidential verbal affix. Four formal
		nouns build the core paradigm, each
		the possessed form of a sensory noun: <i lang="ain-Latn">ruwe</i> (&lt; <A
			w="ru"
			gl="track, path"
		/>), <i lang="ain-Latn">siri</i> (&lt; <A w="sir" gl="visible appearance, land, weather" />),
		<i lang="ain-Latn">hawe</i> (&lt; <A w="haw" gl="voice" />), and
		<i lang="ain-Latn">humi</i> (&lt; <A w="hum" gl="sound, feeling" />)
		<Ref k="nakagawa2024" p="258, 392" />; <Ref k="hirosawa2026" p="64" />. Mapped onto the
		typology of <Ref k="aikhenvald2004" p="63–65" paren />, the system is of the
		<em>C1</em> type — visual, non-visual sensory, inferred, and reported — realized analytically,
		through a native nominalization-plus-copula construction
		<Ref k="hirosawa2026" p="64" />; <Ref k="takahashi2013" p="129" />. The architecture common to
		all four terms is set out in <Xr ch="evidential-schema-overview" />; the present chapter
		treats the central member <i lang="ain-Latn">ruwe ne</i>, and its siblings in
		<Xr ch="siri-ne-situational">the situational evidential</Xr>,
		<Xr ch="hawe-ne-reportative">the reportative</Xr>, and
		<Xr ch="humi-ne-sensory">the sensory evidential</Xr>. The closed class of formal nouns that
		makes the construction possible is defined in <Xr ch="formal-defective-nouns" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>formal noun</th>
				<th>possessed morphology</th>
				<th>source noun</th>
				<th>information source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">ruwe</i></td>
				<td><i lang="ain-Latn">ru-we</i> ‘the trace of —’</td>
				<td><A w="ru" gl="track, path" /></td>
				<td>fact recognized through knowledge, reasoning, or an assimilated trace</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">siri</i></td>
				<td><i lang="ain-Latn">sir-i</i></td>
				<td><A w="sir" gl="appearance, land" /></td>
				<td>directly visible situation</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hawe</i></td>
				<td><i lang="ain-Latn">haw-e</i></td>
				<td><A w="haw" gl="voice" /></td>
				<td>verbal report or hearsay</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">humi</i></td>
				<td><i lang="ain-Latn">hum-i</i></td>
				<td><A w="hum" gl="sound, feeling" /></td>
				<td>non-visual sensation</td>
			</tr>
		</tbody>
	</table>

	<p>
		Dal Corso resolves these four direct terms into an eight-form system whose indirect
		counterparts replace the copula with the existential <i lang="ain-Latn">an</i>, the verb
		<i lang="ain-Latn">ki</i> ‘do’, or <i lang="ain-Latn">as</i> ‘stand’, organized by two
		parameters, source <em>reliability</em> and event <em>accessibility</em>; within it
		<i lang="ain-Latn">ruwe ne</i> is the highest-reliability direct form, and the trace-noun
		<i lang="ain-Latn">ru</i> forms direct evidentiality alone — the southern dialects have no
		indirect <i lang="ain-Latn">*ru</i>-counterpart to <i lang="ain-Latn">siri an</i>
		<Ref k="dalcorso2018" p="304, 309, 337" />.
	</p>

	<p>
		<i lang="ain-Latn">ruwe ne</i> also dominates the paradigm quantitatively. In Dal Corso's
		Hokkaido reference texts it supplies 1508 of 2232 evidential tokens — roughly two thirds of the
		eight-form system, and far ahead of <i lang="ain-Latn">hawe ne</i>,
		<i lang="ain-Latn">siri ne</i>, and <i lang="ain-Latn">humi ne</i> <Ref
			k="dalcorso2018"
			p="72"
		/>. The present Hokkaido corpus of 167,890 sentences makes the skew sharper. A string search
		returns 16,350 tokens of <i lang="ain-Latn">ruwe ne</i> beside 796 <i lang="ain-Latn">hawe ne</i>,
		607 <i lang="ain-Latn">siri ne</i>, and 200 <i lang="ain-Latn">humi ne</i> among the direct
		forms, and 304 <i lang="ain-Latn">siri an</i>, 395 <i lang="ain-Latn">hawe as</i>,
		210 <i lang="ain-Latn">humi as</i>, and 218 <i lang="ain-Latn">siri ki</i> among the indirect:
		some 86% of the eight forms together, and about 91% of the four direct ones (the two corpora are
		compared below). The string count folds in the homophonous lexical noun
		<i lang="ain-Latn">ruwe</i> and the reduced final particle, so 86% is an upper bound on the
		evidential proper. The asymmetry is far too large to follow from that conflation, and it confirms
		the descriptive consensus that <i lang="ain-Latn">ruwe ne</i> is the unmarked, most
		grammaticalized term of the four ‹corpus-confirmed›.
	</p>

	<FreqChart
		title="Evidential-frame frequencies across two Hokkaido corpora"
		note="Raw string-match counts. The ruwe ne total includes the homophonous lexical noun ruwe and the reduced final particle, so its share is an upper bound on the evidential proper."
		labelLang="ain-Latn"
		series={[
			{ key: 'ours', label: 'This corpus (Hokkaido, 167,890 sentences)' },
			{ key: 'dalcorso', label: 'Dal Corso 2018: 72' }
		]}
		data={[
			{ label: 'ruwe ne', values: { ours: 16350, dalcorso: 1508 } },
			{ label: 'hawe ne', values: { ours: 796, dalcorso: 298 } },
			{ label: 'siri ne', values: { ours: 607, dalcorso: 149 } },
			{ label: 'humi ne', values: { ours: 200, dalcorso: 45 } },
			{ label: 'siri an', values: { ours: 304, dalcorso: 59 } },
			{ label: 'hawe as', values: { ours: 395, dalcorso: 94 } },
			{ label: 'humi as', values: { ours: 210, dalcorso: 37 } },
			{ label: 'siri ki', values: { ours: 218, dalcorso: 42 } }
		]}
	/>
</S>

<S t="Morphology: ruwe is ru-we, ‘the trace of —’" id="morphology">
	<p>
		The head <i lang="ain-Latn">ruwe</i> is the
		<Xr ch="concept-form-affiliative-form">possessed form</Xr> of the noun
		<A w="ru" gl="track, path" />. In Tamura's Saru dictionary the ordinary possessed form is
		<i lang="ain-Latn">ruwe(he)</i> ‘the track that — passed along, the path made by —’s passing’,
		and the evidential formal noun is analysed as <i lang="ain-Latn">ru-e</i>, the noun plus a
		possessive ending <Ref k="tamura1996" p="s.v. ru, ruwe" />. For glossing this is decisive: the
		morpheme is the possessed <i lang="ain-Latn">ru-we</i>, ‘the trace of —’, whose implicit
		possessor is the event described by the nominalized clause. The same
		possessed-noun pattern underlies <i lang="ain-Latn">sir-i</i>,
		<i lang="ain-Latn">haw-e</i>, and <i lang="ain-Latn">hum-i</i> <Ref
			k="nakagawa2024"
			p="258, 390"
		/>. A subtle point distinguishes the evidential from the full noun: the lexical possessed forms
		may carry an extra ending (<i lang="ain-Latn">ruwehe</i>, <i lang="ain-Latn">humihi</i>),
		whereas the evidential formal nouns block it (<i lang="ain-Latn">*ruwehe</i> is ungrammatical
		as the evidential) <Ref k="tamura1996" p="s.v. ruwe" />.
	</p>

	<p>
		The construction is therefore a copular predication over a nominalized clause —
		<i lang="ain-Latn">[clause] ruwe</i> ‘the trace/fact that [clause]’, closed by the copula
		<i lang="ain-Latn">ne</i> treated in <Xr ch="copula-ne-predicate-nominals" />. It is not,
		however, an ordinary relative-clause head plus a copula. The head has lost the syntax of a free
		noun: it admits no demonstrative or attributive modifier of its own (contrast a true lexical
		head such as <i lang="ain-Latn">pirka menoko</i> ‘a beautiful woman’), it cannot head a common
		noun (<i lang="ain-Latn">*pirka ruwe ne kewtum</i>), and it is fixed in linear position —
		<i lang="ain-Latn">kusu ne ruwe ne</i> is well formed but <i lang="ain-Latn">*ruwe ne kusu ne</i>
		is not <Ref k="nakagawa2024" p="393" />; <Ref k="dalcorso2018" p="24–25" />. The accurate
		synchronic label is thus a <em>partially</em> grammaticalized formal-noun evidential,
		intermediate between a fused verbal suffix and a fully lexical noun, and it is best analysed
		alongside the
		formal-noun nominalization treated in <Xr ch="lexical-head-formal-noun-nominalization" /> and
		the general clausal nominalizers of <Xr ch="nominalization-p-pe" /> ‹consensus›.
	</p>

	<Ex
		m="eci=ekanok kusu ek=an ru-we ne"
		g="2PL.O=meet PURP come=4.S track-POSS COP"
		tr="I came to meet you."
		cite="dalcorso2018:24"
		dial="CHI"
		place="Ito Oda, Chitose; Dal Corso siglum BUG:126"
		note="Dal Corso ex. 21. The indefinite/fourth person =an serves as the narrative first person; ek=an ruwe ne presents the speaker's own arrival as an established fact, the reasoning-based direct value (DIR.RSN) in Dal Corso's terms."
	/>
</S>

<S t="Meaning: fact from knowledge, not raw perception" id="semantics">
	<p>
		Four framings of <i lang="ain-Latn">ruwe ne</i> compete, and they are best read as describing
		one form from different angles. The oldest, the <em>mood</em> tradition, classed
		<i lang="ain-Latn">ruwe</i> as the <span lang="ja">確説法</span>/<span lang="ja">事実法</span>
		‘assertive / fact mood’, with Chiri deriving it diachronically from ‘there is a trace of X’ to
		‘there is the fact of X’ <Ref k="kindaichi1936" />; <Ref k="hirosawa2026" p="65–68" />. The
		<em>evidential</em> framing, now standard, retains a source semantics: Nakagawa defines
		<i lang="ain-Latn">ruwe ne</i> as marking that the speaker recognizes the clause content
		<em>as fact</em> <Ref k="nakagawa2024" p="392" />, and Dal Corso treats it as a direct
		evidential of reasoning or knowledge (glossed <span class="sc">dir.rsn</span> /
		<span class="sc">dir.knw</span>), the highest-reliability direct source. This reliability is a
		matter of source, not of epistemic modality: it names the psychophysical or cognitive channel
		of acquisition and says nothing about the speaker's degree of certainty, and the original
		stimulus is typically backgrounded once the information has been assimilated into personal
		knowledge <Ref k="dalcorso2018" p="305, 327, 335, 339" />.
	</p>

	<p>
		Satō's question data refine what that channel is. Among the four nominalizers,
		<i lang="ain-Latn">ruwe</i> applies where the relevant content is an abstract state of affairs,
		recognized only indirectly through the exercise of understanding — the domain left once
		<i lang="ain-Latn">hawe</i> takes an utterance, <i lang="ain-Latn">siri</i> a visible ongoing
		scene, and <i lang="ain-Latn">humi</i> a sensation <Ref k="sato2008" p="134–135" />. He further
		notes that the very fact that these nominalizers stand in the <em>possessed</em> form
		presupposes an antecedent — a possessed noun needs something to belong to — so the form
		grammatically encodes that the speaker already has the relevant situation in hand
		<Ref k="sato2008" p="135" />. The diagnostic case is a predicate whose truth no sense can
		deliver:
	</p>

	<Ex
		m="tan cise e=uni ne ru-we"
		g="this house 2SG.POSS=home COP track-POSS"
		tr="Is this house yours?"
		cite="sato2008:131, 135"
		dial="CHI"
		note="Whether a house ‘is one's own’ is an abstract relation, not a perceptible state; hence ruwe, not the visual siri. The bare clause-final ruwe is the polar-interrogative reduction discussed in the section on frames."
	/>

	<p>
		The fourth framing is Hirosawa's, who relocates <i lang="ain-Latn">ruwe ne</i> into
		information structure. He argues it marks discourse-<em>new</em> information much as Japanese
		<span lang="ja">のだ</span> does, and more generally declares the content to lie inside the
		speaker's <em>territory of information</em> (情報のなわ張り); since <i lang="ain-Latn">ruwe</i>
		references processed <em>knowledge</em> (知識), this reconciles its two
		apparently opposite uses — introducing brand-new information and ‘summing up’ (前方統括)
		information already developed in the discourse <Ref k="hirosawa2026" p="75–81, 89" />. The
		self-identification below involves no inference and no perceptual source at all; the sea-god
		simply supplies his identity to the protagonists as new information:
	</p>

	<Ex
		m="atuy kor kamuy a=ne hine an=an ru-we ne"
		g="sea have god 4.A=COP CONJ exist=4.S track-POSS COP"
		tr="I am the god who holds the sea."
		cite="hirosawa2026:77"
		dial="SAR"
		place="Wateke, Tamura audio materials 05-02 ‘Folktale 1’: 6"
		note="Hirosawa ex. 16. The fourth-person transitive prefix a= marks the copula and the suffix =an the existential; a self-identification packaging discourse-new information for the addressee."
	/>

	<p>
		The same mechanism lets a narrator assert events of the story world that she could not have
		witnessed, presenting them under <i lang="ain-Latn">ruwe ne</i> as traditional, shared
		knowledge — the use that makes it the default predicate of the narrative frame-text
		<Ref k="dalcorso2018" p="331" />; <Ref k="hirosawa2026" p="75" />:
	</p>

	<Ex
		m="pananpe an penanpe an hine sir-an pe ne ru-we ne hike"
		g="Pananpe exist Penanpe exist CONJ appearance-exist thing COP track-POSS COP although"
		tr="There were Panampe and Penampe, and …"
		cite="hirosawa2026:75"
		dial="SAR"
		place="Wateke, Tamura audio materials 05-02 ‘Folktale 1’: 4"
		note="Hirosawa ex. 13; the storyteller's frame-text presents a story-world state of affairs under ruwe ne as established narrative fact."
	/>

	<p>
		These accounts are not interchangeable, and at one point they genuinely conflict: Hirosawa
		builds his analysis on territory-of-information, whereas Dal Corso explicitly argues that the
		territory-of-information theory is inapplicable to Hokkaido direct evidentiality
		<Ref k="dalcorso2018" p="335–337" />; <Ref k="hirosawa2026" p="89" /> ‹contested›. The
		synthesis adopted here is that <i lang="ain-Latn">ruwe ne</i> grammatically encodes
		<em>epistemic incorporation</em>: the clause is predicated as a possessed trace
		(<i lang="ain-Latn">ru-we</i>, ‘the trace of —’) whose possessor is the described event, so
		that the proposition is offered as content already taken into the speaker's knowledge and
		thereby made assertable. This single device derives both Dal Corso's
		observation that the stimulus is backgrounded once information enters personal knowledge and
		Hirosawa's that the form marks new information and claims it for the speaker's territory:
		incorporation is exactly what lets a freshly perceived, inferred, remembered, or just-narrated
		state of affairs be presented as a fact the speaker now owns. The possessed morphology — which,
		as Satō notes, presupposes an antecedent — is the formal anchor of this account, and it
		explains why the older ‘fact mood’ label, the modern source label, and the discourse-new label
		each capture a true facet of the same form ‹speculative›.
	</p>
</S>

<S t="The ruwe ne / siri ne puzzle" id="visual-puzzle">
	<p>
		The hardest boundary in the system is between <i lang="ain-Latn">ruwe ne</i> and
		<i lang="ain-Latn">siri ne</i>, because both can rest on what the speaker sees. Dal Corso states
		plainly that a sense-channel hierarchy does not predict the split: if both are ‘visual’, it
		fails to say why Ainu so often chooses the trace-form where sight is available, and he leaves
		the question open, suspecting a driver beyond elicitation <Ref
			k="dalcorso2018"
			p="311–312, 335–336"
		/>. Hirosawa's response is to separate raw sight from processed knowledge —
		<i lang="ain-Latn">siri</i> profiles the visible situation, <i lang="ain-Latn">ruwe</i> the
		knowledge the situation yields — but he offers this as an explicit hypothesis (仮説), not a
		settled result <Ref k="hirosawa2026" p="81, 89" /> ‹contested›.
	</p>

	<p>
		The double-evidential distribution gives a positive argument that resolves part of the puzzle.
		When two evidentials stack, the indirect visual <i lang="ain-Latn">siri an</i> is reinforced
		specifically by <i lang="ain-Latn">ruwe ne</i>, and not by <i lang="ain-Latn">siri ne</i>
		<Ref k="dalcorso2018" p="326–327, 331–333" />. Were <i lang="ain-Latn">ruwe</i> and
		<i lang="ain-Latn">siri</i> two co-equal visual channels this would be unmotivated; it follows
		naturally if <i lang="ain-Latn">ruwe</i> is not a fourth sense parallel to sight, sound, and
		speech, but a higher knowledge-from-trace operator that ratifies the output of another
		evidential as established fact. On this reading Dal Corso's unresolved ‘why
		<i lang="ain-Latn">ruwe</i> and not <i lang="ain-Latn">siri</i> when sight is available’
		<Ref k="dalcorso2018" p="311–312" /> and Takahashi's Tokachi finding that individual-level —
		cognitively stable — properties take <i lang="ain-Latn">ru</i> while transient scenes take
		<i lang="ain-Latn">sir</i> <Ref k="takahashi2013" p="131–133" /> become two faces of one
		contrast: <i lang="ain-Latn">siri</i> profiles the accessible appearance, and
		<i lang="ain-Latn">ruwe</i> the cognized fact extracted from it ‹speculative›. The
		boundary with <i lang="ain-Latn">hawe</i> is similarly non-rigid — Hirosawa cites near-identical
		sentences alternating <i lang="ain-Latn">hawe ne</i> and <i lang="ain-Latn">ruwe ne</i>, which
		fits a form that can absorb information of any original channel once it has become knowledge
		<Ref k="hirosawa2026" p="81" />.
	</p>
</S>

<S t="Clause-final frames and illocution" id="frames">
	<p>
		<i lang="ain-Latn">ruwe</i> heads a small family of sentence-final frames that vary the
		following predicate and particle. Nakagawa arranges them into a paradigm shared by all four
		formal nouns: <i lang="ain-Latn">NMLZ + ne</i> declarative,
		<i lang="ain-Latn">NMLZ + an</i> content question (with a question word),
		bare <i lang="ain-Latn">NMLZ</i> polar question and exclamation, and
		<i lang="ain-Latn">NMLZ + un</i> affirmative answer <Ref k="nakagawa2024" p="392–396" />. The
		bare polar reduction is an instance of insubordination — a once-dependent nominalized clause
		used as a main clause — analysed for the Tokachi cognate by <Ref
			k="takahashi2013"
			p="132"
		/>. These interrogative uses belong with the wider interrogative system in
		<Xr ch="interrogative-strategies-question-particles" />, and the existential frame with
		<Xr ch="existential-locational-an-oka">the existential <i lang="ain-Latn">an</i></Xr>.
	</p>

	<table>
		<thead>
			<tr>
				<th>frame</th>
				<th>value</th>
				<th>note</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">ruwe ne</i></td>
				<td>declarative, recognized fact</td>
				<td>formal noun + copula; may take <i lang="ain-Latn">a</i>, <i lang="ain-Latn">nankor</i>, and final particles</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ruwe an?</i></td>
				<td>content question</td>
				<td>existential frame with a question word; also expanded <i lang="ain-Latn">ruwe an hi an?</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ruwe?</i></td>
				<td>polar question / exclamation</td>
				<td>reduced, insubordinated frame; Saru reinforced <i lang="ain-Latn">ruwe he an?</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ruwe un</i></td>
				<td>affirmative answer</td>
				<td><i lang="ain-Latn">un</i> is a final particle, not the evidential itself</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ruwe tapan</i></td>
				<td>formal / ceremonial assertion</td>
				<td>register-marked frame in Tamura's dictionary, not a separate category</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ruwe somo ne</i></td>
				<td>rhetorical / convictional</td>
				<td>outer frame, distinct from inner-scope <i lang="ain-Latn">somo</i> negation</td>
			</tr>
		</tbody>
	</table>

	<p>
		The content question replaces the copula with the existential and is opened by a question word,
		the formal noun staying in place:
	</p>

	<Ex
		m="mak an pe kusu e=moyre a ru-we an"
		g="how exist NMLZ because 2SG.S=be.late PFV track-POSS exist"
		tr="Why were you late?"
		cite="dalcorso2018:143"
		dial="SAR"
		place="Wateke, Saru; Dal Corso siglum TMA: 12"
		note="Dal Corso ex. 124. The wh-expression mak an pe kusu ‘for what reason’ opens the clause and the existential an replaces the copula; the perfective a closes the embedded predicate before ruwe."
	/>

	<Ex
		m="ku=nu ru-we un"
		g="1SG.A=hear track-POSS FIN"
		tr="Yes, I heard it."
		cite="nakagawa2024:396"
		dial="HK"
		place="Nakagawa ex. 794"
		note="The final particle un forms the affirmative-answer frame while the formal noun is retained."
	/>

	<p>
		Negation belongs <em>inside</em> the evidential: the proposition is denied by negating the
		verb before the formal noun (the pattern <i lang="ain-Latn">… somo ki ruwe ne</i> ‘it is a fact
		that [one does not …]’), which leaves <i lang="ain-Latn">ruwe ne</i> itself outside the scope of
		negation. The rhetorical <i lang="ain-Latn">ruwe somo ne</i> is a separate outer frame, a
		high-scope convictional construction distinct from this inner propositional negation
		<Ref k="nakagawa2024" p="393" />. The interaction of the evidential with the
		sentence-final negation and TAM apparatus on a copular predicate is treated in
		<Xr ch="nonverbal-predicate-tam-negation" />.
	</p>

	<Ex
		m="nep eci=e-sirkirap ka somo ki ru-we ne na"
		g="something 2PL.A=APPL-worry even NEG do track-POSS COP FIN"
		tr="You will not be troubled by anything."
		cite="dalcorso2018:145"
		dial="SAR"
		place="Kaizawa Tsurushino, Biratori; Dal Corso siglum KAY: 2-2,18"
		note="Dal Corso ex. 128. Negation sits inside the evidential: somo ki denies the verb sirkirap, while ruwe ne stays outside the scope of negation and predicates the whole as recognized fact."
	/>
</S>

<S t="Scope over TAM and the finiteness of the embedded clause" id="scope">
	<p>
		The constituent before <i lang="ain-Latn">ruwe ne</i> is a finite, clause-sized predication. It
		carries its own person marking, number-sensitive verb choice
		(singular <i lang="ain-Latn">ek</i> vs. suppletive plural <i lang="ain-Latn">arki</i> ‘come’,
		so <i lang="ain-Latn">íne nispa ek ruwe ne</i> ‘four men came’), aspect and perfective
		auxiliaries, and negation; the evidential then scopes over that whole TAM-marked clause
		<Ref k="nakagawa2024" p="393" />. This is also why <i lang="ain-Latn">ruwe ne</i> can close a
		non-verbal predicate, as in the copular <i lang="ain-Latn">kamuy a=ne … ruwe ne</i> example
		above. Ordering confirms the layering: the evidential may be followed by aspectual and clausal
		material (<i lang="ain-Latn">a</i>, <i lang="ain-Latn">nankor</i>, <i lang="ain-Latn">na</i>,
		<i lang="ain-Latn">wa</i>, <i lang="ain-Latn">hine</i>, <i lang="ain-Latn">kusu</i>), and it
		sits above clause-internal aspect but below the clause-linkers, so
		<i lang="ain-Latn">kusu ne ruwe ne</i> is grammatical and <i lang="ain-Latn">*ruwe ne kusu ne</i>
		is not <Ref k="nakagawa2024" p="393" />.
	</p>

	<Ex
		m="mat-kor hine oka=an ru-we ne a p"
		g="wife-have CONJ exist.PL=4.S track-POSS COP PFV NMLZ"
		tr="he had taken a wife, and we went on living — and yet,"
		cite="dalcorso2018:196"
		dial="SAR"
		place="Wateke, Saru; Dal Corso siglum TMA: 2"
		note="Dal Corso ex. 170 (excerpt). The perfective a follows ruwe ne in the post-evidential slot, and the nominalizer p carries the adversative ‘but’ that turns the narrative — confirming that aspect and clause-linking material attach above the evidential."
	/>

	<p>
		Dal Corso ties the choice of post-nominal predicate to perspective: the copula
		<i lang="ain-Latn">ne</i> expresses an internal (speaker-anchored) viewpoint and so hosts the
		direct forms, while the existential and posture/action verbs <i lang="ain-Latn">an</i>,
		<i lang="ain-Latn">as</i>, and <i lang="ain-Latn">ki</i> express an external viewpoint and host
		the indirect forms <Ref k="dalcorso2018" p="313–315" />. For <i lang="ain-Latn">ruwe</i> the
		paradigm is asymmetrical — in the southern dialects there is no indirect
		<i lang="ain-Latn">*ru</i> form — so <i lang="ain-Latn">ruwe ne</i> functions as the direct,
		personal-knowledge anchor of the whole system <Ref k="dalcorso2018" p="309, 326" />. What the
		accessible sources do <em>not</em> settle is the formal size of the nominalized clause: that it
		is finite is clear from its TAM and person marking, but no read source provides a constituency
		account that would decide between a finite nominalization, a nominalized predicate phrase, and a
		construction-specific evidential projection ‹speculative›. The complementation side of the same
		formal-noun strategy — <i lang="ain-Latn">ruwe</i> and <i lang="ain-Latn">hi</i> clauses under
		perception and cognition verbs — is taken up in <Xr ch="nominalized-complements-control-raising" />.
	</p>
</S>

<S t="Predication type: the Tokachi constraint" id="predication-type">
	<p>
		Takahashi's Tokachi study adds a factor outside the reach of both the mood tradition and a pure
		source typology. In Tokachi the visual nominalizer <i lang="ain-Latn">sir</i> is restricted to
		imperfective, stage-level (transient) predication: it presents a passing scene. For an
		individual-level (permanent) property — even one known by sight — Tokachi instead uses
		<i lang="ain-Latn">ru</i>, which is unmarked for information type. Of the four, only
		<i lang="ain-Latn">sir</i> carries this restriction; <i lang="ain-Latn">hum</i>,
		<i lang="ain-Latn">haw</i>, and <i lang="ain-Latn">ru</i> work at both levels
		<Ref k="takahashi2013" p="131–133" />. The constraint surfaces on the nominalizer itself, which
		Takahashi parallels with the ban on individual-level complements of English perception verbs.
	</p>

	<Ex
		m="taan imo siwnin ru an"
		g="this potato be.green track exist"
		tr="This potato is green."
		cite="takahashi2013:131–133"
		dial="TOK"
		place="Honbetsu; consultant Sawai Tomeno"
		note="In Tokachi the bare concept form ru (not the possessed ruwe) closes the clause, and the existential an replaces the copula. An individual-level property takes ru even though it is visually accessible, because sir is barred from permanent properties."
	/>

	<p>
		For the present form this matters in two ways. First, the <i lang="ain-Latn">ru</i> domain is
		broader than ‘inference’ narrowly understood: it is the unmarked choice where
		<i lang="ain-Latn">sir</i> is blocked by predication type, which is consistent with the
		knowledge-from-trace reading developed above. Second, it shows the Hokkaido system to be
		organized partly by the ontology of the predicate — eventive, stage-level, individual-level —
		alongside source of information; this does not overturn Dal Corso's reliability/accessibility
		account but bounds its domain, marking where the grammar of predication independently
		constrains the available evidential ‹consensus›.
	</p>
</S>

<S t="Mirativity and double evidentiality" id="mirativity">
	<p>
		<i lang="ain-Latn">ruwe ne</i> is often rendered ‘it turned out that …’ in surprising contexts,
		but the surprise is not contributed by <i lang="ain-Latn">ruwe</i>. Mirativity in Hokkaido Ainu
		is carried mainly by the perfective auxiliary <i lang="ain-Latn">aan</i> and by
		<i lang="ain-Latn">anan</i>; <i lang="ain-Latn">ruwe ne</i> then packages the resulting
		proposition as fact <Ref k="hirosawa2026" p="90" />. Dal Corso is explicit that Hokkaido shows
		no evidence of the evidential paradigm itself systematically generating mirative meanings — so
		mirativity may co-occur with <i lang="ain-Latn">ruwe ne</i> but is not its value
		<Ref k="dalcorso2018" p="336" /> ‹contested›. The system-level treatment of the
		evidential-to-mirative interface, evidential stacking, and the cline to sentence-final particles
		is given in <Xr ch="mirativity-scope-grammaticalization" />.
	</p>

	<Ex
		m="supuya at kor sir-an ru-we ne anan"
		g="smoke rise while appearance-exist track-POSS COP MIR"
		tr="Smoke was rising, it turned out!"
		cite="dalcorso2018:327"
		dial="HK"
		place="Nakagawa text, Dal Corso siglum NGF:176"
		note="Dal Corso ex. 268: the indirect visual siri an is layered under ruwe ne, with the admirative tail anan glossed mirative here. The supporting form is systematically ruwe ne, never siri ne."
	/>

	<p>
		Double evidentiality, more frequent in Hokkaido than Sakhalin, confirms the special standing of
		<i lang="ain-Latn">ruwe ne</i> argued for above. Two patterns recur: a character's indirect
		source layered under the narrator's <i lang="ain-Latn">ruwe ne</i> as shared knowledge
		(<i lang="ain-Latn">… hawe as ruwe ne</i>), and <i lang="ain-Latn">ruwe ne</i> reinforcing a
		low-reliability direct form (<i lang="ain-Latn">… hawe ne nankor ruwe ne</i>)
		<Ref k="dalcorso2018" p="331–333" />. In both, <i lang="ain-Latn">ruwe ne</i> is the member
		that can ratify an already evidentially marked proposition as established fact, behaving as a
		knowledge operator that scopes over the other evidentials.
	</p>
</S>

<S t="Diachrony, dialect microvariation, and a Sakhalin contrast" id="diachrony-dialect">
	<p>
		The diachronic path is transparent and is stated already in the earliest grammars: the noun
		<i lang="ain-Latn">ru</i> ‘track, path’ &gt; the possessed formal noun
		<i lang="ain-Latn">ru-we</i> ‘the trace of —’ &gt; the clause-final evidential
		<i lang="ain-Latn">[clause] ruwe ne</i>, part of the larger cline by which
		<i lang="ain-Latn">sir</i>, <i lang="ain-Latn">hum</i>, <i lang="ain-Latn">haw</i>, and
		<i lang="ain-Latn">ru</i> all move from sensory nouns to nominalizers to evidentials
		<Ref k="tamura1996" p="s.v. ruwe" />; <Ref k="hirosawa2026" p="65" />. Dal Corso stresses that
		the result is only <em>partially</em> grammaticalized — the lexical source stays visible and the
		choice of post-nominal predicate still matters — so grammaticalization here is a matter of
		degree <Ref k="dalcorso2018" p="24–25" />; <Ref k="takahashi2018" p="111" />.
	</p>

	<p>
		The endpoint of that cline is reached unevenly across Hokkaido, and the differences are
		morphosyntactic: a single semantic field realized by varied forms, which cautions against
		writing one morphology for all of Hokkaido <Ref k="hirosawa2026" p="144" /> ‹contested›:
	</p>

	<ul>
		<li>
			<strong>Saru, Chitose, Biratori</strong> — the southern core of Dal Corso's data — keep the
			possessed forms <i lang="ain-Latn">ruwe / siri / hawe / humi</i> and the eight-form
			direct/indirect system <Ref k="dalcorso2018" p="304–337" />.
		</li>
		<li>
			<strong>Tokachi</strong> (and frequently Ishikari) close the clause with the bare concept
			forms <i lang="ain-Latn">ru / sir / haw / hum</i> instead of the possessed forms
			<Ref k="nakagawa2024" p="110, 390" />; <Ref k="takahashi2013" p="129–131" />.
		</li>
		<li>
			<strong>Horobetsu</strong> grammaticalizes the possessed-form nominalizers a step further,
			into adverbial-clause and conjunction-like markers — a ‘versatile nominalization’ use not
			reported for well-described Saru <Ref k="takahashi2018" p="107–112" />.
		</li>
		<li>
			<strong>Asahikawa and Shiranuka</strong> have an inferential <i lang="ain-Latn">ru an</i>,
			apparently in complementary distribution with the <i lang="ain-Latn">siri an</i> of the
			south — a genuine exception to the generalization that <i lang="ain-Latn">ru</i> forms direct
			evidentiality alone <Ref k="dalcorso2018" p="326" />.
		</li>
	</ul>

	<p>
		<strong>The Sakhalin reflex.</strong> The Sakhalin varieties split the trace-form where the
		southern Hokkaido system has a single member. Beside the copular
		<i lang="ain-Latn">ruwehe ne(e)</i> they carry an existential <i lang="ain-Latn">ruwehe ʔan</i>,
		and the two divide one inferential field by reliability: the existential encodes inference from a
		less-processed visual stimulus, the copular form inference from a stimulus already worked through,
		the more reliable of the pair <Ref k="dalcorso2018" p="281–284" />. Southern Hokkaido has only
		<i lang="ain-Latn">ruwe ne</i> and admits no existential <i lang="ain-Latn">*ruwe an</i>; the
		<i lang="ain-Latn">ru an</i> of Asahikawa and Shiranuka is the one Hokkaido locus where the
		trace-noun enters the existential frame, and Dal Corso reads it as the Hokkaido counterpart of
		Sakhalin <i lang="ain-Latn">ruwehe ʔan</i> <Ref k="dalcorso2018" p="326, 336" />. The split sits
		within a wider reorganization of nominalization in the Sakhalin variety
		<Ref k="bugaeva2016" paren />.
	</p>

	<Ex
		m="pon nay ohta i-huraye ruwe-he ne"
		g="be.small river LOC 4.O-wash track-POSS COP"
		tr="She washed me in a small river."
		cite="pilsudski1912; dalcorso2018:281"
		dial="SA"
		place="Piłsudski corpus; Dal Corso siglum PLA: 227"
		note="Dal Corso ex. 224. The copular ruwehe ne(e) presents a fully processed, personally witnessed event — the more reliable counterpart of the existential ruwehe ʔan; the indefinite-person object i- here references the narrator. East Sakhalin keeps the possessed -he that the southern Hokkaido evidential drops (ruwe-he, not ru-we)."
	/>

	<Ex
		m="tan husko karauto an ruwe-he an manuy"
		g="this be.old box exist track-POSS exist REP"
		tr="There was this old box."
		lit="there is a trace that this old box is there"
		cite="pilsudski1912; dalcorso2018:284"
		dial="SA"
		place="Piłsudski corpus; Dal Corso siglum PLA: 200"
		note="Dal Corso ex. 226. The inferential is built on the existential an over a clause that itself ends in existential an; the literal ‘there is a trace of —’ stays transparent. Southern Hokkaido lacks this existential ruwehe ʔan and uses only the copular ruwe ne."
	/>
</S>
