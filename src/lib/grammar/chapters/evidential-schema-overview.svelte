<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The nominalization-plus-copula schema" id="schema">
	<p>
		Hokkaido Ainu encodes the speaker's source of information through a productive construction:
		a finite verb phrase is nominalized by a bound <em>formal noun</em> and the result is
		predicated with the copula <i lang="ain-Latn">ne</i> or an existential or posture verb.
		The language has no dedicated evidential verbal affix. The four formal nouns that build the
		construction — <i lang="ain-Latn">ruwe</i>, <i lang="ain-Latn">siri</i>,
		<i lang="ain-Latn">hawe</i>, and <i lang="ain-Latn">humi</i> — are each the possessed form
		of a common sensory noun, and they carry their sensory origin into their evidential meaning
		<Ref k="nakagawa2024" p="258, 390–392" />; <Ref k="hirosawa2026" p="64" />.
	</p>
	<p>
		The structural template is [CLAUSE]-FORMAL.NOUN + <i lang="ain-Latn">ne</i>: the nominalized
		event is presented as the possessed trace, appearance, voice, or feeling of something, and the
		copula closes the predication. The formal noun specifies the information channel; the copula
		anchors the proposition to the speaker's direct or reflective perspective. Four
		<em>direct</em> evidential forms use the copula <i lang="ain-Latn">ne</i>; a parallel set of
		indirect counterparts replaces it with the existential <i lang="ain-Latn">an</i>, the action
		verb <i lang="ain-Latn">ki</i>, or the posture verb <i lang="ain-Latn">as</i>
		<Ref k="dalcorso2018" p="304–314" />. The construction belongs to the broader nominalization
		system treated in <Xr ch="nominalization-p-pe" /> and
		<Xr ch="lexical-head-formal-noun-nominalization" />; the formal-noun word class that makes
		it possible is defined in <Xr ch="formal-defective-nouns" />.
	</p>

	<Ex
		m="tap a=ye katu Piratur sekor a=ye haw-e ne"
		g="this 4.A=say manner Piraturu QUOT 4.A=say voice-POSS COP"
		tr="This way of saying it is called Piraturu, so they say."
		cite="nakagawa2024:393"
		dial="SAR"
		place="Nakagawa ex. 778; underlying source: Kawamura 1985: 30"
		note="hawe (haw-e, 'the voice of —') nominalizes the embedded clause; ne closes it as a direct reportative evidential. The doubled a=ye sequence illustrates the quotation-plus-report structure typical of hawe ne."
	/>
</S>

<S t="The four formal nouns: morphological sources and evidential values" id="formal-nouns">
	<p>
		Tamura's Saru dictionary records the source nouns, their regular possessed forms, and the
		evidential formal nouns derived from them <Ref k="tamura1996" p="s.v. ru, sir, haw, hum, ruwe, siri, hawe, humi" />.
		Nakagawa tabulates the evidential values <Ref k="nakagawa2024" p="258" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>formal noun</th>
				<th>source noun</th>
				<th>possessed gloss</th>
				<th>original meaning</th>
				<th>evidential value</th>
				<th>chapter</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">ruwe</i></td>
				<td><A w="ru" gl="track, path" /></td>
				<td>'the trace of —'</td>
				<td>跡・道 track, path</td>
				<td>fact recognized through knowledge or reasoning</td>
				<td><Xr ch="ruwe-ne-inferential" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">siri</i></td>
				<td><A w="sir" gl="appearance, land, weather" /></td>
				<td>'the appearance of —'</td>
				<td>様子・天候・大地 appearance, weather, land</td>
				<td>directly visible situation</td>
				<td><Xr ch="siri-ne-situational" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hawe</i></td>
				<td><A w="haw" gl="voice" /></td>
				<td>'the voice of —'</td>
				<td>声 voice</td>
				<td>verbal report or hearsay</td>
				<td><Xr ch="hawe-ne-reportative" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">humi</i></td>
				<td><A w="hum" gl="sound, feeling" /></td>
				<td>'the sound/feeling of —'</td>
				<td>音・感じ sound, feeling</td>
				<td>non-visual sensation (sound, smell, taste, touch, bodily sense)</td>
				<td><Xr ch="humi-ne-sensory" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The regular possessed forms of the source nouns may carry an additional ending —
		<i lang="ain-Latn">ruwe(he)</i>, <i lang="ain-Latn">humi(hi)</i> — but the evidential
		formal nouns block this extension: <i lang="ain-Latn">*ruwehe</i> and
		<i lang="ain-Latn">*humihi</i> are ungrammatical in the evidential function
		<Ref k="tamura1996" p="s.v. ruwe, humi" />. Whether the concept form
		(<i lang="ain-Latn">sir</i>, <i lang="ain-Latn">haw</i>) and the corresponding possessed
		form carry a usage or nuance difference is explicitly left unresolved in Tamura's dictionary
		<Ref k="tamura1996" p="s.v. sir" /> ‹speculative›. The possessed morphology is significant
		in its own right: a noun in its possessed form grammatically presupposes an antecedent, so
		these nominalizers formally encode that the speaker already has the relevant situation in hand
		<Ref k="sato2008" p="135" />.
	</p>
</S>

<S t="Typological placement: the C1 system" id="c1-type">
	<p>
		Mapped onto Aikhenvald's evidential typology <Ref k="aikhenvald2004" p="63–65" />, the Ainu
		system belongs to the <em>C1</em> type: visual, non-visual sensory, inferred, and reported
		sources of information are grammatically distinguished
		<Ref k="hirosawa2026" p="64" />; <Ref k="takahashi2013" p="129" />. The type is realized
		analytically through a nominalization-plus-copula construction, not through dedicated verbal
		affixes — this makes Ainu a textbook case of the nominalization-based evidential strategy
		<Ref k="dalcorso2018" p="24–25" />; <Ref k="takahashi2022" /> ‹consensus›.
	</p>
	<p>
		The cell assignments are approximate. <i lang="ain-Latn">ruwe ne</i> covers the
		<em>inferred</em> cell (information from reasoning or assimilated knowledge),
		<i lang="ain-Latn">siri ne</i> the <em>visual</em> cell,
		<i lang="ain-Latn">humi ne</i> the <em>non-visual sensory</em> cell, and
		<i lang="ain-Latn">hawe ne</i> the <em>reported</em> cell. The boundary between the visual
		(<i lang="ain-Latn">siri</i>) and the knowledge-from-trace (<i lang="ain-Latn">ruwe</i>)
		cells is contested in the recent literature and is discussed in
		<Xr ch="ruwe-ne-inferential" s="visual-puzzle">the ruwe ne chapter</Xr> <Ref k="dalcorso2018" p="311–312" />; <Ref k="hirosawa2026" p="81" /> ‹contested›.
	</p>
</S>

<S t="Direct and indirect evidentiality: the eight-form system" id="eight-form">
	<p>
		Dal Corso's morphosyntactic account resolves the four formal nouns into an
		<em>eight-form</em> system organized by two parameters: <em>source reliability</em> (REL)
		and <em>event accessibility</em> (ACCES) <Ref k="dalcorso2018" p="304–337" />. The four
		<em>direct</em> forms use the copula <i lang="ain-Latn">ne</i> (internal, speaker-anchored
		perspective); the four <em>indirect</em> forms replace it with the existential
		<i lang="ain-Latn">an</i>, the action verb <i lang="ain-Latn">ki</i>, or the posture verb
		<i lang="ain-Latn">as</i> (external perspective; 2018: 313–314). Source reliability is
		not epistemic modality: it specifies the psychophysical or cognitive channel of acquisition
		and says nothing about the speaker's degree of certainty
		<Ref k="dalcorso2018" p="339" />.
	</p>

	<table>
		<thead>
			<tr>
				<th></th>
				<th>ACCES+ (direct, copula <i lang="ain-Latn">ne</i>)</th>
				<th>ACCES− (indirect, <i lang="ain-Latn">an</i> / <i lang="ain-Latn">ki</i> / <i lang="ain-Latn">as</i>)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>REL+ (highest reliability)</td>
				<td><i lang="ain-Latn">ruwe ne</i></td>
				<td>— (no indirect <i lang="ain-Latn">*ru</i>-form in southern Hokkaido)</td>
			</tr>
			<tr>
				<td></td>
				<td><i lang="ain-Latn">siri ne</i></td>
				<td><i lang="ain-Latn">siri an</i>, <i lang="ain-Latn">siri ki</i></td>
			</tr>
			<tr>
				<td></td>
				<td><i lang="ain-Latn">humi ne</i></td>
				<td><i lang="ain-Latn">humi as</i></td>
			</tr>
			<tr>
				<td>REL− (lowest reliability)</td>
				<td><i lang="ain-Latn">hawe ne</i></td>
				<td><i lang="ain-Latn">hawe as</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		The underlying sense hierarchy runs Sight > Smell/Taste–Touch > Hearing, yielding a
		coarser visual/non-visual split: <i lang="ain-Latn">ruwe ne</i> and
		<i lang="ain-Latn">siri ne</i> are the higher-reliability direct members,
		<i lang="ain-Latn">humi ne</i> and <i lang="ain-Latn">hawe ne</i> the lower
		<Ref k="dalcorso2018" p="312" />. A structural asymmetry distinguishes the
		<i lang="ain-Latn">ru</i>-series: in Saru, Chitose, and Biratori the trace-noun enters
		only direct evidentiality, and there is no indirect <i lang="ain-Latn">*ru an</i> counterpart
		to <i lang="ain-Latn">siri an</i> <Ref k="dalcorso2018" p="309, 326" />. The
		<i lang="ain-Latn">hawe as</i> indirect form has, moreover, nearly fully specialized as a
		<em>reportative</em> — for quotation when the source is overt and for hearsay when it is
		absent — while <i lang="ain-Latn">humi as</i> is never reportative
		<Ref k="dalcorso2018" p="328–330" />. The per-form indirect semantics are treated in
		<Xr ch="siri-ne-situational" />, <Xr ch="hawe-ne-reportative" />, and
		<Xr ch="humi-ne-sensory" />.
	</p>
</S>

<S t="Token frequencies" id="frequencies">
	<p>
		<i lang="ain-Latn">ruwe ne</i> dominates the paradigm quantitatively. In Dal Corso's Hokkaido
		reference texts it accounts for 1508 of 2232 evidential tokens — roughly two thirds of all
		eight forms, and more than five times the next most frequent form
		(<i lang="ain-Latn">hawe ne</i>, 298 tokens) <Ref k="dalcorso2018" p="72" />. The asymmetry
		is independently noted by Tamura and by Yoshikawa: <i lang="ain-Latn">ruwe ne</i> outstrips
		the other forms in oral-narrative (口承文芸) registers, where it functions as the default
		frame-text predicate <Ref k="hirosawa2026" p="73" />. Community discussion characterizes
		<i lang="ain-Latn">ruwe ne</i> in the same terms — frequent especially in oral narratives and
		legends, functioning like Japanese <span lang="ja">のだ</span> to close narrative segments
		and mark topic shifts (nukopoli, aynu-corpora Discord, 2024-11-09)
		<Ref k="aynucorporadiscord" />.
	</p>

	<table>
		<caption>Token frequencies in Dal Corso's Hokkaido reference corpora <Ref k="dalcorso2018" p="72" /></caption>
		<thead>
			<tr>
				<th>form</th>
				<th>tokens</th>
				<th>% of eight-form total</th>
			</tr>
		</thead>
		<tbody>
			<tr><td><i lang="ain-Latn">ruwe ne</i></td><td>1508</td><td>67.56%</td></tr>
			<tr><td><i lang="ain-Latn">hawe ne</i></td><td>298</td><td>13.35%</td></tr>
			<tr><td><i lang="ain-Latn">siri ne</i></td><td>149</td><td>6.68%</td></tr>
			<tr><td><i lang="ain-Latn">hawe as</i></td><td>94</td><td>4.21%</td></tr>
			<tr><td><i lang="ain-Latn">siri an</i></td><td>59</td><td>2.64%</td></tr>
			<tr><td><i lang="ain-Latn">humi ne</i></td><td>45</td><td>2.02%</td></tr>
			<tr><td><i lang="ain-Latn">siri ki</i></td><td>42</td><td>1.88%</td></tr>
			<tr><td><i lang="ain-Latn">humi as</i></td><td>37</td><td>1.66%</td></tr>
		</tbody>
	</table>

	<p>
		These counts derive from Dal Corso's specific reference texts (Kayano, Tamura, Nakagawa,
		Bugaeva), not from the full Hokkaido corpus, and should be treated as indicative of the
		skew rather than as absolute proportions <Ref k="dalcorso2018" p="41" /> ‹corpus-suggested›. The dominance of
		<i lang="ain-Latn">ruwe ne</i> is consistent with its status as the unmarked, most
		grammaticalized member of the paradigm. The genre distribution of evidential usage across
		narrative registers is treated in <Xr ch="narrative-tam-evidential-patterning-by-genre" />.
	</p>
</S>

<S t="Analytical frameworks" id="frameworks">
	<p>
		Four analytical traditions describe the same construction from different angles, and they
		partially conflict.
	</p>
	<p>
		The oldest is the <em>mood</em> (法) tradition. Kindaichi identified seven distinctive moods
		in Ainu; within that taxonomy <i lang="ain-Latn">siri</i> is the
		<span lang="ja">見説法</span> (seeing-speech mood), <i lang="ain-Latn">hawe</i> the
		<span lang="ja">聞説法</span>, <i lang="ain-Latn">humi</i> the
		<span lang="ja">感説法</span>, and <i lang="ain-Latn">ruwe</i> the
		<span lang="ja">確説法</span> / <span lang="ja">事実法</span>
		<Ref k="kindaichi1936" />; <Ref k="hirosawa2026" p="65–68" />. The mood label captures the
		speaker-oriented, assertive character of these forms but does not isolate their source
		semantics.
	</p>
	<p>
		The modern <em>evidentiality</em> framing, now standard in the descriptive literature,
		places the system in the typological framework of information-source encoding
		<Ref k="aikhenvald2004" paren />. It is adopted by Takahashi
		<Ref k="takahashi2013" p="129" />, Dal Corso <Ref k="dalcorso2018" />, Nakagawa
		<Ref k="nakagawa2024" p="392" />, and Hirosawa <Ref k="hirosawa2026" p="64" />. Dal
		Corso's is the most detailed morphosyntactic account (§<em>Direct and indirect evidentiality</em> above).
	</p>
	<p>
		The <em>predication-type</em> framing (Takahashi 2013) adds a dimension orthogonal to source
		channel: in Tokachi, the visual nominalizer <i lang="ain-Latn">sir</i> is restricted to
		stage-level (transient, scene-describing) predication, and individual-level (permanent)
		properties take <i lang="ain-Latn">ru</i> regardless of the information channel
		<Ref k="takahashi2013" p="131–133" />. The ontological type of the predicate thus
		independently constrains the available evidential ‹consensus›.
	</p>
	<p>
		The <em>information-structure</em> framing is Hirosawa's (2026). He argues that
		<i lang="ain-Latn">ruwe ne</i> additionally marks discourse-new information, parallel to
		Japanese <span lang="ja">のだ</span>, and unconditionally declares the content to lie inside
		the speaker's territory of information <Ref k="hirosawa2026" p="75–81, 89" />. Dal Corso
		explicitly argues that the territory-of-information account is inapplicable to Hokkaido
		direct evidentiality <Ref k="dalcorso2018" p="335–337" />. These two recent treatments
		disagree on the right framework for <i lang="ain-Latn">ruwe ne</i> ‹contested›. Community
		discussion, summarizing Yoshikawa (2020), characterizes <i lang="ain-Latn">ruwe ne</i> as
		semantically unmarked relative to the other forms — lacking their specific evidentiary
		highlighting — and as functioning to close a narrative segment and transition to the next
		(場面転換・統括), consistent with Hirosawa's analysis (nukopoli, aynu-corpora Discord,
		2024-03-17) <Ref k="aynucorporadiscord" />; this observation is treated here as
		corroboration of the literature rather than an independent authority.
	</p>
	<p>
		Ijäs's pedagogical grammar presents the system under the evidentiality framing without
		adopting any of the specific theoretical positions above
		<Ref k="ijas2023" />. The pedagogical description aligns with the standard evidential
		account and is useful for language learners but does not adjudicate the analytical disputes.
	</p>
</S>

<S t="The shared clause-final frame paradigm" id="frames">
	<p>
		All four formal nouns participate in a shared set of clause-final frames that vary the
		following element and the sentence type. Nakagawa arranges these into a paradigm of four
		patterns <Ref k="nakagawa2024" p="392–396" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>frame</th>
				<th>sentence type</th>
				<th>note</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">NMLZ + ne</i></td>
				<td>declarative (平叙文)</td>
				<td>direct evidential; may be followed by <i lang="ain-Latn">a</i>, <i lang="ain-Latn">nankor</i>, final particles, clause-linkers</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">NMLZ + an</i></td>
				<td>content question (内容疑問文, with question word)</td>
				<td>existential replaces copula; the formal noun stays in position</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">NMLZ</i> (bare)</td>
				<td>polar question / exclamation</td>
				<td>insubordinated nominalized clause; Saru reinforces as <i lang="ain-Latn">ruwe he an?</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">NMLZ + un</i></td>
				<td>affirmative answer</td>
				<td><i lang="ain-Latn">un</i> is a final particle, not itself evidential</td>
			</tr>
		</tbody>
	</table>

	<p>
		The bare polar-question frame is an instance of <em>insubordination</em> — a
		once-embedded nominalized clause promoted to main-clause use
		<Ref k="takahashi2013" p="132" />. Negation operates inside the evidential scope: the
		predicate is negated with <i lang="ain-Latn">somo</i> before the formal noun, while the
		formal noun remains outside the scope of negation
		(<i lang="ain-Latn">…somo ki ruwe ne</i> 'it is a fact that [one does not …]')
		<Ref k="nakagawa2024" p="393" />. The interrogative frames are treated in
		<Xr ch="interrogative-strategies-question-particles" />; the existential frame in
		<Xr ch="existential-locational-an-oka">the existential <i lang="ain-Latn">an</i> chapter</Xr>.
	</p>

	<Ex
		m="usey ku=ku wa keraan hum-i"
		g="tea 1SG.A=drink CONJ be.delicious sound-POSS"
		tr="I drank tea — how delicious!"
		cite="nakagawa2024:396"
		dial="CHI"
		place="Nakagawa ex. 793"
		note="The bare formal noun hum-i as an exclamatory main clause, without ne. The insubordinated nominalized clause carries the exclamatory value alone; the copula is absent."
	/>

	<Ex
		m="arki=an pa sir-i ne na"
		g="come.PL=4.S now appearance-POSS COP FIN"
		tr="(We) have now arrived!"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsu, ILCAA Ainu materials 007: 44"
		note="siri ne declarative with the sentence-final particle na. The suppletive plural come-form arki (vs. singular ek) encodes number inside the nominalized clause; the evidential scopes over the whole clause including this number distinction."
	/>
</S>

<S t="Scope over TAM and the finiteness of the embedded clause" id="scope-tam">
	<p>
		The constituent nominalized by the formal noun is a finite, clause-sized predication. It
		carries its own person marking, verb suppletion (singular <i lang="ain-Latn">ek</i> vs.
		plural <i lang="ain-Latn">arki</i> 'come'), aspectual auxiliaries, perfective
		<i lang="ain-Latn">a</i>, and negation; the evidential formal noun scopes over that whole
		TAM-marked clause <Ref k="nakagawa2024" p="393" />. The layering is transparent from
		ordering: the formal noun may be followed by aspectual material
		(<i lang="ain-Latn">a</i>, <i lang="ain-Latn">nankor</i>), final particles
		(<i lang="ain-Latn">na</i>, <i lang="ain-Latn">wa</i>), and clause-linkers
		(<i lang="ain-Latn">hine</i>, <i lang="ain-Latn">kusu</i>), but the intentive
		<i lang="ain-Latn">kusu ne</i> ('intends to') cannot follow the evidential:
		<i lang="ain-Latn">kusu ne ruwe ne</i> is well-formed but
		<i lang="ain-Latn">*ruwe ne kusu ne</i> is not
		<Ref k="nakagawa2024" p="393" />. The evidential thus sits above clause-internal aspect
		but below clause-linkers and intentive modality. Community discussion independently observes
		that this ordering follows from the clause hierarchy placing the evidential inside modality
		operators (nukopoli, aynu-corpora Discord, 2024-11-09)
		<Ref k="aynucorporadiscord" />.
	</p>
	<p>
		Dal Corso ties the copula vs. existential/posture-verb choice to perspective: the copula
		<i lang="ain-Latn">ne</i> expresses an internal, speaker-anchored viewpoint and hosts the
		direct forms; <i lang="ain-Latn">an</i>, <i lang="ain-Latn">as</i>, and
		<i lang="ain-Latn">ki</i> express an external viewpoint and host the indirect forms
		<Ref k="dalcorso2018" p="313–315" />. A structural polysemy follows for
		<i lang="ain-Latn">siri an</i>: it is three-way ambiguous between the interrogative
		existential frame, the indirect visual evidential, and an aspectual resultative-progressive —
		a polysemy treated in <Xr ch="siri-ne-situational" /> and
		<Xr ch="continuative-siri-siran-kane-an" />. The interaction of the evidential with the
		wider clause-final TAM and negation apparatus is treated in
		<Xr ch="nonverbal-predicate-tam-negation" /> and
		<Xr ch="copula-ne-predicate-nominals" />.
	</p>
</S>

<S t="Predication type and the Tokachi stage-level constraint" id="predication-type">
	<p>
		In Tokachi the choice among the formal nouns is constrained not only by information source
		but also by the ontological type of the predicate. Takahashi's Tokachi study shows that the
		visual nominalizer <i lang="ain-Latn">sir</i> is restricted to <em>stage-level</em>
		(transient, scene-describing) predication; for <em>individual-level</em> (permanent
		property) predicates — even those known by sight — Tokachi uses <i lang="ain-Latn">ru</i>,
		which is unmarked for information type
		<Ref k="takahashi2013" p="131–133" />. Of the four, only <i lang="ain-Latn">sir</i> carries
		this restriction; <i lang="ain-Latn">hum</i>, <i lang="ain-Latn">haw</i>, and
		<i lang="ain-Latn">ru</i> function at both predication levels.
	</p>

	<Ex
		m="taan imo siwnin ru an"
		g="this potato be.green track exist"
		tr="This potato is green."
		cite="takahashi2013:131–133"
		dial="TOK"
		place="Honbetsu; consultant: Sawai Tomeno"
		note="An individual-level (permanent) property takes the bare concept form ru even though it is visually accessible: sir is barred from individual-level predicates in Tokachi. The existential an replaces the copula ne, as is standard in Tokachi declarative evidential clauses."
	/>

	<p>
		Takahashi parallels the constraint with the ban on individual-level complements of English
		perception verbs; in Ainu the restriction surfaces on the nominalizer rather than on a matrix
		verb. This finding sets bounds on any pure source-channel account of the formal-noun choice:
		the grammar of predication independently constrains the available evidential ‹consensus›.
		Its implications for the <i lang="ain-Latn">ruwe ne</i> / <i lang="ain-Latn">siri ne</i>
		boundary are discussed in <Xr ch="ruwe-ne-inferential" s="predication-type">the
		<i lang="ain-Latn">ruwe ne</i> chapter</Xr>.
	</p>
</S>

<S t="Grammaticalization and the nominalization-to-evidential cline" id="grammaticalization">
	<p>
		The formal nouns are partially, not fully, grammaticalized from their source nouns. The
		diachronic path is already stated in the early grammars: the source nouns function first as
		lexical nouns, then as clause-nominalizing heads in embedded complements, then as clause-final
		evidential sentence-enders <Ref k="takahashi2013" p="134" />; <Ref k="takahashi2018" p="111" />.
		At each stage the lexical semantics of the source noun remains visible, but the syntactic
		freedoms of a full noun are progressively lost. The evidential formal nouns admit no
		demonstrative or attributive modifier of their own, cannot head an ordinary common-noun
		relative clause, and are fixed in linear position
		<Ref k="dalcorso2018" p="24–25" />; <Ref k="nakagawa2024" p="393" />.
	</p>
	<p>
		Dal Corso stresses that the degree of grammaticalization varies across the system:
		<i lang="ain-Latn">ruwe ne</i> is the most grammaticalized of the four Hokkaido direct
		forms, with the Sakhalin particle <i lang="ain-Latn">manu</i> at the far end of the cline
		as a fully fused suffix <Ref k="dalcorso2018" p="24–25" />. The Sakhalin nominalization
		innovations and their contrast with Hokkaido are set out in <Ref k="bugaeva2016" paren />.
		The path from noun to nominalizer to clause-final particle belongs to the wider
		nominalization-grammaticalization cline treated in
		<Xr ch="lexical-head-formal-noun-nominalization" />.
	</p>
</S>

<S t="Dialect microvariation" id="dialect-variation">
	<p>
		The semantic organization of the system — four channels, direct vs. indirect — is consistent
		across Hokkaido; its morphosyntactic realization varies. Four dialect-level patterns stand out.
	</p>
	<ul>
		<li>
			<strong>Saru, Chitose, Biratori</strong> (the core of Dal Corso's data) use the possessed
			forms <i lang="ain-Latn">ruwe / siri / hawe / humi</i> and maintain the eight-form
			direct/indirect system <Ref k="dalcorso2018" p="304–337" />.
		</li>
		<li>
			<strong>Tokachi</strong> (and frequently Ishikari) close the clause with the bare concept
			forms <i lang="ain-Latn">ru / sir / haw / hum</i> rather than the possessed forms
			<Ref k="nakagawa2024" p="110, 390" />; <Ref k="takahashi2013" p="129–131" />.
			Allomorphs <i lang="ain-Latn">sin</i> (for <i lang="ain-Latn">sir</i>) and
			<i lang="ain-Latn">aw</i> (for <i lang="ain-Latn">haw</i>) are attested
			<Ref k="takahashi2013" p="130–131" />.
		</li>
		<li>
			<strong>Horobetsu</strong> grammaticalizes the possessed-form nominalizers a step further
			into adverbial-clause markers and conjunction-like particles — a use not reported for
			well-described Saru <Ref k="takahashi2018" p="107–112" />. Kindaichi and Chiri had already
			noted the nominalizers in conjunction-like uses; Takahashi shows Horobetsu has
			systematized this extension, bringing evidentiality into the set of categories expressed in
			adverbial clauses alongside aspect and modality — an instance of 'versatile nominalization'
			<Ref k="takahashi2018" p="112" /> ‹corpus-suggested›.
		</li>
		<li>
			<strong>Asahikawa and Shiranuka</strong> show an inferential <i lang="ain-Latn">ru an</i>,
			with the trace-noun entering the indirect frame in apparent complementary distribution with
			the <i lang="ain-Latn">siri an</i> of the southern dialects
			<Ref k="dalcorso2018" p="326" />. This is the one Hokkaido context where
			<i lang="ain-Latn">ru</i> forms indirect evidentiality; the distribution is flagged by Dal
			Corso as requiring a wider-dialect study ‹corpus-suggested›.
		</li>
	</ul>
	<p>
		Dialect coverage is solid for Saru/Chitose/Biratori and Tokachi; thin or second-hand for
		Ishikari, Asahikawa, Shiranuka, and Shizunai. The dialect classification is set out in
		the dialectology chapters; the TAM-evidential variation across registers is in
		<Xr ch="narrative-tam-evidential-patterning-by-genre" />.
	</p>
</S>

<S t="Double evidentiality" id="double-evidentiality">
	<p>
		Two evidential expressions may stack in one clause; this is more frequent in Hokkaido than
		in Sakhalin <Ref k="dalcorso2018" p="331–333" />. Two constructions recur. In the first,
		a character's indirect source is placed within the narrator's
		<i lang="ain-Latn">ruwe ne</i>, yielding both the character's subjective source and the
		narrator's assertion of the event as traditional knowledge:
	</p>

	<Ex
		m="supuya at kor sir-an ru-we ne anan"
		g="smoke rise while appearance-exist track-POSS COP MIR"
		tr="Smoke was rising — it turned out!"
		cite="dalcorso2018:327"
		dial="HK"
		place="Nakagawa text, Dal Corso siglum NGF: 176"
		note="Dal Corso ex. 268. The indirect visual siri an is embedded under the direct ruwe ne; the admirative tail anan adds the surprised-retrospective value (glossed MIR). The supporting outer form is systematically ruwe ne, never siri ne — evidence that ruwe ne functions as a higher-scope operator that ratifies another evidential's output as established fact."
	/>

	<p>
		In the second pattern, <i lang="ain-Latn">ruwe ne</i> reinforces a lower-reliability direct
		form, boosting epistemic commitment: attested
		<i lang="ain-Latn">hawe ne nankor ruwe ne</i> 'maybe my god secretly let me know'
		<Ref k="dalcorso2018" p="332" />. Other attested combinations include
		<i lang="ain-Latn">hawe as ruwe ne</i>, <i lang="ain-Latn">siri ki siri ne</i>,
		<i lang="ain-Latn">siri an ruwe ne</i>, and
		<i lang="ain-Latn">humi ne humi as</i>
		<Ref k="dalcorso2018" p="331–333" />. The consistent outer position of
		<i lang="ain-Latn">ruwe ne</i> in stacked constructions supports its analysis as the
		epistemic-incorporation operator of the paradigm, a role discussed in
		<Xr ch="ruwe-ne-inferential" />.
	</p>
</S>

<S t="Mirativity and the admirative" id="mirativity">
	<p>
		The four formal nouns do not themselves encode mirativity (意外性). Dal Corso finds no
		evidence that the Hokkaido evidential paradigm systematically generates mirative readings;
		this contrasts with Sakhalin, where personal-knowledge evidentials can trigger mirative
		interpretations through a deictic-gap mechanism
		<Ref k="dalcorso2018" p="336" />. In Hokkaido, mirative value attaches instead to the
		perfective auxiliary <i lang="ain-Latn">aan</i> and to <i lang="ain-Latn">anan</i>
		<Ref k="hirosawa2026" p="90" />. Yoshikawa argues that <i lang="ain-Latn">aan</i>
		signals indirect evidentiality plus mirativity (reported via
		<Ref k="hirosawa2026" p="90" />) <Ref k="yoshikawa2018" /> ‹speculative› (Yoshikawa
		2018 cited second-hand).
	</p>
	<p>
		The two mechanisms can co-occur. When <i lang="ain-Latn">aan</i> places information outside
		the speaker's expected knowledge and <i lang="ain-Latn">ruwe ne</i> follows, the sequence
		expresses surprise then reclamation: the speaker marks the event as unexpected
		(<i lang="ain-Latn">aan</i>) and then declares it recognized fact (<i lang="ain-Latn">ruwe ne</i>).
		Hirosawa parallels this with Japanese <span lang="ja">みたいな + のだ</span>
		<Ref k="hirosawa2026" p="90" />. The full treatment of the evidential-to-mirative interface,
		evidential scope, and the cline from formal-noun evidentials to sentence-final particles is in
		<Xr ch="mirativity-scope-grammaticalization" />.
	</p>
</S>
