<!-- src/lib/grammar/chapters/perfective-anterior-a.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Form, etymology, and the number alternation" id="form">
	<p>
		Two auxiliaries of anterior or perfective value form a closely related pair in the
		Hokkaido Ainu auxiliary system: <A w="a" gl="sit (SG)" /> (singular) and
		<A w="rok" gl="sit (PL)" /> (plural). Both are grammaticalized forms of the suppletive
		intransitive verb pair <i lang="ain-Latn">a</i> / <i lang="ain-Latn">rok</i> 'sit (SG/PL)',
		and they retain the number-sensitivity of that source pair: <i lang="ain-Latn">a</i> appears
		when the clause subject is singular, <i lang="ain-Latn">rok</i> when it is plural
		<Ref k="nakagawa2024" p="307" />; <Ref k="yoshikawa2022" />; <Ref k="bugaeva2012" p="493" />.
		Ijäs's Lesson 9 catalogues the <i lang="ain-Latn">a</i> / <i lang="ain-Latn">rok</i>
		suppletive pair as a morphological special form alongside <i lang="ain-Latn">ek</i> /
		<i lang="ain-Latn">arki</i> 'come' and <i lang="ain-Latn">an</i> /
		<i lang="ain-Latn">oka</i> 'exist', without connecting the pair directly to the
		grammaticalized auxiliary <Ref k="ijas2023" />. The suppletive pair and its role in verbal
		number are treated in <Xr ch="suppletive-verbal-number" />.
	</p>

	<p>
		Structurally, <i lang="ain-Latn">a</i> and <i lang="ain-Latn">rok</i> belong to the
		auxiliary-verb frame: the shape is <i lang="ain-Latn">V AUX</i>, with no conjunctive
		particle between the lexical verb and the auxiliary. Person marking falls on the preceding
		lexical verb; the auxiliary carries none. This single-indexed structure sets the
		construction apart from the pair-verb frames (<i lang="ain-Latn">kor an</i>,
		<i lang="ain-Latn">wa an</i>), where each predicate bears its own person index because
		each constitutes a finite clause in its own right
		<Ref k="nakagawa2024" p="306, 439–443" />; <Ref k="bugaeva2012" p="492–495" />. The
		overall periphrastic architecture is set out in <Xr ch="tam-overview" />; the
		existential-aspect pair verbs in <Xr ch="existential-aspect-an-oka" />.
	</p>

	<Ex
		m="tane pakno a=e=tumam wa hotke=an a korka"
		g="now until 4.A=2SG.O=embrace CONJ lie.down=4.S PFV although"
		tr="Until now I had held you in my arms and lain down with you, but —"
		cite="nakagawa2024:305"
		dial="SAR"
		place="Nakagawa ex. 448"
		note="Person marking (4.A=, =4.S) falls on the lexical verbs tumam 'embrace' and hotke 'lie down'; the auxiliary a carries no person index. The contrast particle korka signals that this clause supplies the background to a subsequent reversal — a discourse environment typical of a." />

	<p>
		When the subject is plural, <i lang="ain-Latn">rok</i> replaces
		<i lang="ain-Latn">a</i>. The plural verb stem and the plural auxiliary track the same
		subject-number value independently:
	</p>

	<Ex
		m="arki=an rok"
		g="come.PL=4.S PFV.PL"
		tr="They came."
		constructed
		note="rok replaces a when the subject is plural; the suppletive plural verb stem arki simultaneously replaces singular ek. The fourth-person suffix =an indexes the subject on the lexical verb; rok carries no person marking. Compare the singular ek=an a 'she came'." />
</S>

<S t="Five competing analyses of a" id="analyses">
	<p>
		What <i lang="ain-Latn">a</i> marks is genuinely disputed, and the five positions in
		circulation represent substantive rather than merely terminological disagreements
		<Ref k="nakagawa2024" p="306–307" />; <Ref k="bugaeva2012" p="493" />;
		<Ref k="yoshikawa2022" /> ‹contested›.
	</p>

	<table>
		<thead>
			<tr>
				<th>position</th>
				<th>holder(s)</th>
				<th>core claim</th>
				<th>grade</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>Perfective / past</strong></td>
				<td>
					Kindaichi 1931 via <Ref k="bugaeva2012" p="493" />;
					<Ref k="tamura2000" /> (gloss <span class="sc">past</span>)
				</td>
				<td>
					<i lang="ain-Latn">a</i> marks a completed or past event; the language defaults to
					a past-tense frame
				</td>
				<td>‹contested›</td>
			</tr>
			<tr>
				<td><strong>Perfect (kanryō)</strong></td>
				<td>
					<Ref k="chiri1942" p="157" /> via <Ref k="bugaeva2012" p="493" />
				</td>
				<td>
					<i lang="ain-Latn">a</i> marks a past event whose result is relevant at the current
					moment, or possibly simply past
				</td>
				<td>‹contested›</td>
			</tr>
			<tr>
				<td><strong>Actional perfect</strong></td>
				<td>
					<Ref k="bugaeva2012" p="493" />; <Ref k="sato2006" p="63" />
				</td>
				<td>
					<i lang="ain-Latn">a</i> is an action-predicate perfect; it cannot co-occur with
					negation, and the stative / resultative perfect belongs to
					<i lang="ain-Latn">wa an</i>
				</td>
				<td>‹contested›</td>
			</tr>
			<tr>
				<td><strong>Background-event contrast</strong></td>
				<td>Yoshikawa 2015 via <Ref k="nakagawa2024" p="306" /></td>
				<td>
					<i lang="ain-Latn">a</i> marks the event that forms the contrasted background to a
					subsequent event; its function is discourse-structural rather than strictly
					temporal or aspectual
				</td>
				<td>‹contested›</td>
			</tr>
			<tr>
				<td><strong>Perfective + direct evidential</strong></td>
				<td><Ref k="yoshikawa2022" /></td>
				<td>
					<i lang="ain-Latn">a</i> combines perfective aspect with direct evidentiality
					(witnessed reminiscence), paralleling Classical Japanese
					<span lang="ja">き</span>; the "exceptional <i lang="ain-Latn">a</i>" on
					time-invariant constants is reanalysed as a certainty marker anchored to the
					speaker's direct knowledge
				</td>
				<td>‹contested›</td>
			</tr>
		</tbody>
	</table>

	<p>
		The perfective / past and perfect readings (positions 1 and 2) capture the most frequent
		translation equivalence. Their limitation surfaces in what Yoshikawa calls "exceptional
		<i lang="ain-Latn">a</i>": time-invariant constants and self-evident truths on which
		<i lang="ain-Latn">a</i> appears but a past reading is unmotivated, pointing toward a
		non-temporal account <Ref k="yoshikawa2022" />.
	</p>

	<p>
		The actional-perfect restriction (position 3) carries the sharpest distributional claim.
		Satō argues that <i lang="ain-Latn">a</i> marks a completed action as still affecting the
		current situation, and negating the action removes that link; hence
		<i lang="ain-Latn">a</i> cannot scope over a negated predicate. The stative or resultative
		perfect — 'V-ed (and is still in that state)' — is expressed by
		<i lang="ain-Latn">wa an</i> instead
		<Ref k="sato2006" p="63" />; <Ref k="bugaeva2012" p="493" />. The stative-resultative
		frame is treated in <Xr ch="existential-aspect-an-oka" />.
	</p>

	<p>
		The background-event analysis (position 4), following Yoshikawa 2015, draws on discourse
		distribution. Clause-final <i lang="ain-Latn">a</i> recurrently precedes a reversal
		connector — <i lang="ain-Latn">korka</i> 'but/although', sequential
		<i lang="ain-Latn">wa</i>, or the nominalizer <i lang="ain-Latn">p</i> in an adversative
		frame — marking the preceding event as contrasted background. Nakagawa takes this as
		evidence that <i lang="ain-Latn">a</i> is primarily discourse-structural, and any past-tense
		reading a contextual by-product <Ref k="nakagawa2024" p="306–307" /> ‹contested›.
	</p>

	<p>
		Yoshikawa's 2022 Handbook analysis (position 5) integrates the distributional and discourse
		observations: <i lang="ain-Latn">a</i> combines perfective aspect with direct evidentiality
		and witnessed-reminiscence modal value. The "exceptional <i lang="ain-Latn">a</i>" on
		time-invariant truths is reanalysed as direct evidentiality marking the speaker's certain
		knowledge. Yoshikawa explicitly acknowledges that the analysis rests heavily on
		fourth-person narrative data, with few third-person-subject examples, and he marks the
		evidential dimension as warranting further investigation <Ref k="yoshikawa2022" /> ‹contested›.
	</p>

	<p>
		Positions 4 and 5 are partly complementary: the background-event account is a
		synchronic-discourse claim about the typical environments of <i lang="ain-Latn">a</i>,
		while the direct-evidential account is a semantic one about its grammatical value. An event
		marked as the speaker's directly witnessed background is precisely the configuration that
		both accounts predict <Ref k="nakagawa2024" p="306–307" />; <Ref k="yoshikawa2022" /> ‹original-needs-review›.
	</p>
</S>

<S t="Scene-shift in narrative" id="discourse">
	<p>
		Cutting across the semantic debate, there is broad agreement on
		<i lang="ain-Latn">a</i>'s function as a narrative scene-shift signal. The pattern
		<i lang="ain-Latn">[event] a p</i> (perfective + nominalizer) or
		<i lang="ain-Latn">[event] a korka</i> recurrently marks the point at which the scene,
		topic, or acting participant changes
		<Ref k="yoshikawa2022" />; <Ref k="nakagawa2024" p="307" />. The genre-level
		distribution of <i lang="ain-Latn">a</i> across narrative, ceremonial, and conversational
		texts is treated in <Xr ch="narrative-tam-evidential-patterning-by-genre" />; the
		temporal reference context in <Xr ch="tenselessness-and-time-reference" />.
	</p>
</S>

<S t="Iterative reduplication: the ~a ~a / ~rok ~rok pattern" id="reduplication">
	<p>
		The auxiliary may reduplicate to express an iterative or prolonged-continuity reading —
		'went on V-ing, V-ed over and over'. The pattern repeats the verb-plus-auxiliary unit:
		<i lang="ain-Latn">V a V a</i> (singular) or <i lang="ain-Latn">V rok V rok</i> (plural).
		With a fourth-person subject, the person clitic may stand alone in the second occurrence
		(<i lang="ain-Latn">=an a =an a</i>), abbreviating the repeated verb base
		<Ref k="nakagawa2024" p="307–308" />; <Ref k="bugaeva2012" p="493" />.
	</p>

	<Ex
		m="apkas a apkas a"
		g="walk PFV walk PFV"
		tr="[she] walked on and on."
		constructed
		note="The verb-plus-auxiliary unit apkas a repeats to form the iterative; rok rok patterns identically with a plural subject. Nakagawa's attested form is onkami=an a =an a 'worshipped over and over' (Nakagawa 2024: 308, ex. 453), where =an abbreviates the repeated verb base in the second occurrence." />

	<p>
		Bugaeva labels the pattern "emphatic continuative" <Ref k="bugaeva2012" p="493" />. Ijäs
		records an <i lang="ain-Latn">a … a</i> pattern glossed 'verb and verb (prolonged
		continuity)' but does not connect it to the auxiliary <Ref k="ijas2023" />; the connection
		is established by Nakagawa's glossed corpus examples ‹corpus-confirmed›. The iterative
		and habitual periphery shared with other aspect forms is treated in
		<Xr ch="phasal-iterative-habitual-aspect" />.
	</p>
</S>

<S t="nisa: the recent-perfect companion" id="nisa">
	<p>
		The auxiliary <A w="nisa" gl="just-finished; recent perfect" /> marks an event as just
		completed — closer to a terminative or hot-news perfect than the general anterior value
		of <i lang="ain-Latn">a</i>, and rendered in Japanese as '〜てしまった' with a freshness
		nuance <Ref k="nakagawa2024" p="312, 436" />; <Ref k="bugaeva2012" p="493" />. Like
		<i lang="ain-Latn">a</i>, <i lang="ain-Latn">nisa</i> belongs to the auxiliary-verb
		frame and takes no person marking; unlike <i lang="ain-Latn">a</i> it shows no
		number alternation. The two forms overlap in signalling a past event but differ in
		aspectual profile: <i lang="ain-Latn">nisa</i> foregrounds the just-completed endpoint,
		while <i lang="ain-Latn">a</i> in its primary use foregrounds the contrast with what
		follows.
	</p>
</S>

<S t="The admirative aan and rok(o)ka" id="aan">
	<S t="Form, etymology, and dialect variants" id="aan-form">
		<p>
			Alongside <i lang="ain-Latn">a</i> / <i lang="ain-Latn">rok</i> stands the auxiliary
			<A w="aan" gl="PRF.MIR (SG)" /> (singular) and
			<A w="rokoka" gl="PRF.MIR (PL)" /> (plural), combining perfect aspect with indirect
			evidentiality and a mirative (after-the-fact surprise) value. All major analyses
			decompose the form as <i lang="ain-Latn">a</i> (perfective auxiliary) +
			<i lang="ain-Latn">an</i> (existential 'exist')
			<Ref k="nakagawa2024" p="308" />; <Ref k="yoshikawa2018" />; <Ref k="yoshikawa2022" />.
			The strongest morphological argument is the plural: <i lang="ain-Latn">rok-oka(y)</i>
			pairs the plural of <i lang="ain-Latn">a</i> with the plural of
			<i lang="ain-Latn">an</i>, exactly as <i lang="ain-Latn">[a+an]</i> predicts
			<Ref k="yoshikawa2022" />. Yoshikawa grants that several singular dialect forms admit
			competing segmentations — <i lang="ain-Latn">anan</i> (Chitose) invites
			<i lang="ain-Latn">[an+an]</i>, while <i lang="ain-Latn">haw'an</i> /
			<i lang="ain-Latn">awan</i> (Shizunai, Tokachi, Horobetsu) invite
			<i lang="ain-Latn">[haw+an]</i> — so the unified etymology rests on the plural form
			rather than on every singular surface shape
			<Ref k="yoshikawa2022" /> ‹contested›.
		</p>

		<table>
			<thead>
				<tr>
					<th>dialect</th>
					<th>SG form</th>
					<th>PL form</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Saru (SAR)</td>
					<td><i lang="ain-Latn">aan</i></td>
					<td><i lang="ain-Latn">rok(o)ka(y)</i></td>
				</tr>
				<tr>
					<td>Chitose (CHI)</td>
					<td><i lang="ain-Latn">anan</i></td>
					<td><i lang="ain-Latn">rok(o)ka(y) anan</i> (doubled; no meaning difference)</td>
				</tr>
				<tr>
					<td>Shizunai (SHI)</td>
					<td><i lang="ain-Latn">haw'an</i></td>
					<td>—</td>
				</tr>
				<tr>
					<td>Horobetsu (HOR), Tokachi (TOK)</td>
					<td><i lang="ain-Latn">awan</i> / <i lang="ain-Latn">hawan</i></td>
					<td><i lang="ain-Latn">awokay</i> (HOR)</td>
				</tr>
			</tbody>
		</table>

		<p>
			Sources: <Ref k="nakagawa2024" p="308" />; <Ref k="yoshikawa2022" />;
			<Ref k="yoshikawa2018" />.
		</p>
	</S>

	<S t="Meaning: after-the-fact realization and indirect evidentiality" id="aan-meaning">
		<p>
			Nakagawa characterizes the core meaning as: at some reference point, the speaker
			realizes what an earlier situation actually was — rendered in Japanese as
			'〜だったのだなあ' ('so that's what it was!')
			<Ref k="nakagawa2024" p="307–308" />. Chiri's earlier formulation emphasizes the
			affective dimension: surprise at an unexpected fact or result
			<Ref k="chiri1942" p="158" />. Yoshikawa integrates both under perfect aspect plus
			indirect evidentiality, with mirativity as a contextual extension: the speaker
			asserts a past event known only via inference or retrospective access, and the
			unexpected discovery of that fact yields the surprise reading
			<Ref k="yoshikawa2018" />; <Ref k="yoshikawa2022" />.
		</p>

		<Ex
			m="oripak kamuy poho a=ne aan ru-we ne hine"
			g="noble deity child 4.A=COP PRF.MIR track-POSS COP CONJ"
			tr="it turned out that I was the child of an honored deity, and …"
			cite="biratori1969"
			dial="SAR"
			place="Hiraga Sadamo, ウエペケㇾ ウラユシウンクㇽ [biratori/010/003#421]"
			note="The speaker discovers after the fact that she is the child of a deity; aan encodes indirect, retrospective access to this information. ruwe ne then packages the realized content as established fact." />

		<Ex
			m="mokor=an aan ru-we ne akusu"
			g="sleep=4.S PRF.MIR track-POSS COP when"
			tr="when it turned out that I had fallen asleep,"
			cite="biratori1969"
			dial="SAR"
			place="Kimura Kimi, ウエペケㇾ [biratori/021/004#82]"
			note="aan presents the sleep as discovered retrospectively; the following ruwe ne repackages the discovery as established knowledge." />

		<p>
			The Horobetsu dialect form <i lang="ain-Latn">awan</i> carries the same value:
		</p>

		<Ex
			m="Penanpe kamuy poho ne awan"
			g="Penanpe deity child COP PRF.MIR"
			tr="Penanpe was, surprisingly, the child of a deity."
			cite="chiri1942:158; yoshikawa2018:4"
			dial="HOR"
			note="The Horobetsu form awan carries the after-the-fact surprise (admirative) reading systematically noted by Chiri; the example is preserved in Yoshikawa 2018: 4. The competing segmentation [haw+an] is one of the etymological readings Yoshikawa discusses." />
	</S>
</S>

<S t="The a / aan opposition: aspect, evidentiality, and the Classical Japanese parallel" id="opposition">
	<p>
		Yoshikawa's most productive contribution is treating <i lang="ain-Latn">a</i> and
		<i lang="ain-Latn">aan</i> as a paradigmatic pair along two simultaneous parameters
		<Ref k="yoshikawa2018" />; <Ref k="yoshikawa2022" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>auxiliary</th>
				<th>aspect</th>
				<th>evidentiality</th>
				<th>extended value</th>
				<th>Classical Japanese parallel</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">a</i> / <i lang="ain-Latn">rok</i></td>
				<td>perfective</td>
				<td>direct (witnessed, personally recalled)</td>
				<td>certainty, reminiscence</td>
				<td>
					<span lang="ja">き</span>
					(direct-evidential past / witnessed reminiscence)
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">aan</i> / <i lang="ain-Latn">rokoka</i></td>
				<td>perfect</td>
				<td>indirect (inferred, discovered after the fact)</td>
				<td>mirativity (after-the-fact surprise)</td>
				<td>
					<span lang="ja">けり</span>
					(indirect-evidential past; structurally
					<span lang="ja">き</span>+<span lang="ja">あり</span>
					= <i lang="ain-Latn">a</i>+<i lang="ain-Latn">an</i>)
				</td>
			</tr>
		</tbody>
	</table>

	<p>
		The structural parallel between <i lang="ain-Latn">a+an</i> and Classical Japanese
		<span lang="ja">き+あり</span> &gt; <span lang="ja">けり</span> provides an independent
		argument for the <i lang="ain-Latn">[a+an]</i> etymology: both pairs decompose the
		indirect-past into a direct-past base plus an existential, and both the direct and
		indirect members share a perfective component
		<Ref k="yoshikawa2018" />; <Ref k="yoshikawa2022" />. The same direct / indirect past
		opposition is cross-linguistically attested and is placed in typological perspective by
		<Ref k="bugaeva2012" p="493" /> ‹contested›.
	</p>

	<p>
		The grammaticalization source <i lang="ain-Latn">a</i> / <i lang="ain-Latn">rok</i> 'sit'
		fits a cross-linguistic cline in which posture verbs grammaticalize into aspect markers via
		a resultant-state intermediate <Ref k="bybee1994" paren />. The path 'sit (in the position
		resulting from settling)' &gt; 'be in a completed-state position' &gt; anterior / perfective
		auxiliary is typologically plausible ‹speculative›. The broader diachronic framing of the
		Hokkaido TAM system is in <Xr ch="tenselessness-and-time-reference" />.
	</p>
</S>

<S t="aan stacked with ruwe ne" id="aan-ruwe-ne">
	<p>
		A frequent narrative pattern places <i lang="ain-Latn">aan</i> immediately before the
		inferential evidential <i lang="ain-Latn">ruwe ne</i>: the speaker first signals an
		after-the-fact discovery (<i lang="ain-Latn">aan</i>), then packages that discovery as
		established knowledge (<i lang="ain-Latn">ruwe ne</i>). Hirosawa analyses the sequence as
		a territory-of-information shift: <i lang="ain-Latn">aan</i> places the content outside
		the speaker's territory (the surprising, indirectly-accessed event), while
		<i lang="ain-Latn">ruwe ne</i> reclaims it inside as fact the speaker now owns
		<Ref k="hirosawa2026" p="90" />. Both corpus examples in the preceding section —
		<i lang="ain-Latn">oripak kamuy poho a=ne aan ruwe ne</i> and
		<i lang="ain-Latn">mokor=an aan ruwe ne</i> — show this stacking. The inferential
		evidential is treated in <Xr ch="ruwe-ne-inferential" />; the system-level account of
		evidential stacking and mirativity in <Xr ch="mirativity-scope-grammaticalization" />.
	</p>
</S>
