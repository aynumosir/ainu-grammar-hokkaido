<script lang="ts">
	import { S, Ex, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="The alignment question" id="question">
	<p>
		Hokkaido Ainu encodes the S/A/O distinction through person indexes that appear on the
		finite verb — head-marking in the sense of <Ref k="nichols1986" paren />. The
		architecture of the four formal persons and the combination rules are set out in
		<Xr ch="person-marking-architecture" />; the present chapter evaluates the typological
		labels that have been applied to the paradigm and assesses how far hierarchical and
		inverse analyses bear on the Hokkaido data. The split-intransitive question — whether
		the S position subdivides by agentivity — belongs to
		<Xr ch="alignment-split-intransitive" />. Free-NP realization and the relationship
		between indexing and nominal argument structure are taken up in
		<Xr ch="argument-realization-indexing" />.
	</p>
</S>

<S t="Row-wise alignment" id="sao-alignment">
	<p>
		Reading the person-indexing paradigm cell by cell, the morphological alignment is
		mixed. The standard Saru–Chitose forms, cited directly in Bugaeva, Nakagawa, Tamura,
		and Satō, yield four distinct row patterns
		<Ref k="bugaeva2012" p="471–472" />; <Ref k="nakagawa2024" p="165–169" />;
		<Ref k="tamura1972" p="17–39" />; <Ref k="sato2008" p="31–32" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>person cell</th>
				<th>A: transitive subject</th>
				<th>S: intransitive subject</th>
				<th>O: object</th>
				<th>row alignment</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1SG</td>
				<td><i lang="ain-Latn">ku=</i></td>
				<td><i lang="ain-Latn">ku=</i></td>
				<td><i lang="ain-Latn">en=</i></td>
				<td>S=A≠O; nominative–accusative</td>
			</tr>
			<tr>
				<td>1PL.EXCL</td>
				<td><i lang="ain-Latn">ci=</i></td>
				<td><i lang="ain-Latn">=as</i></td>
				<td><i lang="ain-Latn">un=</i></td>
				<td>S≠A≠O; tripartite</td>
			</tr>
			<tr>
				<td>2SG</td>
				<td><i lang="ain-Latn">e=</i></td>
				<td><i lang="ain-Latn">e=</i></td>
				<td><i lang="ain-Latn">e=</i></td>
				<td>S=A=O; neutral</td>
			</tr>
			<tr>
				<td>2PL</td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td><i lang="ain-Latn">eci=</i></td>
				<td>S=A=O; neutral</td>
			</tr>
			<tr>
				<td>3</td>
				<td><i lang="ain-Latn">Ø</i></td>
				<td><i lang="ain-Latn">Ø</i></td>
				<td><i lang="ain-Latn">Ø</i></td>
				<td>S=A=O; zero or absent</td>
			</tr>
			<tr>
				<td>4 / INDEF</td>
				<td><i lang="ain-Latn">a=</i> (dialectally <i lang="ain-Latn">an=</i>)</td>
				<td><i lang="ain-Latn">=an</i></td>
				<td><i lang="ain-Latn">i=</i></td>
				<td>S≠A≠O; tripartite</td>
			</tr>
		</tbody>
	</table>

	<p>
		Bugaeva's characterisation follows from the table: 1SG is nominative–accusative
		(S=A, distinct from O); second and third person are neutral (all three roles carry
		the same form); the first plural exclusive and the indefinite/fourth-person rows
		are tripartite, because each uses a distinct form for S, A, and O. She summarises
		the language as "mixed (but basically tripartite)"
		<Ref k="bugaeva2012" p="472, 498" />; <Ref k="bugaeva2008" p="32" />.
	</p>

	<p>
		The tripartite character of those two rows rests on a positional split: the 1PL.EXCL
		A form <i lang="ain-Latn">ci=</i> and the fourth-person A form
		<i lang="ain-Latn">a=</i> are prefixes on the transitive stem, while the S
		counterparts <i lang="ain-Latn">=as</i> and <i lang="ain-Latn">=an</i> are suffixes
		on the intransitive stem; the O forms <i lang="ain-Latn">un=</i> and
		<i lang="ain-Latn">i=</i> are prefixal but formally distinct from both
		<Ref k="nakagawa2024" p="166–167" />; <Ref k="bugaeva2012" p="472" />. The Tokachi
		example places the 1PL.EXCL A and S exponents within a single clause chain ‹consensus›:
	</p>

	<Ex
		m="kuruma an wa ci=o tek arki=as"
		g="car exist CONJ 1PL.EXCL.A=board then come.PL=1PL.EXCL.S"
		tr="There was a car, and we boarded it and came."
		cite="takahashi2015:206"
		dial="TOK"
		place="Takahashi ex. 2"
		note="The exclusive group is marked as A by the prefix ci= on the transitive o 'board' and as S by the suffix =as on the intransitive plural arki 'come'; the object counterpart un= is not triggered in this chain."
	/>

	<p>
		The fourth-person O prefix <i lang="ain-Latn">i=</i> indexes the undergoer in oral
		narrative — including the narrating protagonist — and together with <i lang="ain-Latn">a=</i>
		for A and <i lang="ain-Latn">=an</i> for S makes the tripartite character of that row
		verifiable in a single utterance <Ref k="nakagawa2024" p="169" />:
	</p>

	<Ex
		m="i=erampokiwen i=rewsire wa i=kore"
		g="4.O=pity 4.O=lodge CONJ 4.O=give"
		tr="Take pity on me and give me lodging."
		cite="nakagawa2024:171"
		dial="SAR"
		place="Nakagawa ex. 127"
		note="The fourth-person O prefix i= indexes the narrative protagonist three times; with a= for A and =an for S, all three roles are kept formally distinct within the same paradigm row."
	/>

	<p>
		Bugaeva's three-way gradation of the indexes by prosodic and separability tests —
		word-like <i lang="ain-Latn">=an</i> and <i lang="ain-Latn">=as</i>, clitic-like
		<i lang="ain-Latn">a=</i> and <i lang="ain-Latn">eci=</i>, full prefixes such as
		<i lang="ain-Latn">ku=</i> and <i lang="ain-Latn">en=</i> — and Nakagawa's independent
		identification of <i lang="ain-Latn">=an</i> as separable from the verb by particles
		reflect a cline of morphological tightness that is orthogonal to the alignment classification
		<Ref k="bugaeva2012" p="472–473" />; <Ref k="nakagawa2024" p="49, 183" />;
		<Ref k="sakaguchi2024" p="ix, 62–64, 77–85" /> ‹contested›. The ordering diagnostics
		belong to <Xr ch="personal-affix-template-and-ordering" />.
	</p>
</S>

<S t="Catalogue of analyses" id="catalogue">
	<p>
		The literature assigns different labels because it addresses different questions:
		synchronic Hokkaido exponence, historical reconstruction, Sakhalin comparison, and
		the referential structure of the fourth-person set. The table below collects the
		principal positions; attributions via Dal Corso are second-hand for this grammar.
	</p>

	<table>
		<thead>
			<tr>
				<th>analysis</th>
				<th>principal locus</th>
				<th>domain</th>
				<th>status for Hokkaido</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>mixed nominative–neutral–tripartite</td>
				<td>Bugaeva (read directly); Okuda 2015 (reported via Dal Corso)</td>
				<td>Hokkaido person-indexing morphology</td>
				<td>best-supported synchronic label for the paradigm ‹consensus›</td>
			</tr>
			<tr>
				<td>mixed nominative–neutral–inverse</td>
				<td>Dal Corso 2025</td>
				<td>‹SA› Sakhalin person indexing</td>
				<td>contrastive; Dal Corso warns the diachrony and hierarchical analysis may not apply to Hokkaido ‹contested›</td>
			</tr>
			<tr>
				<td>ergative stage → neutral → nominative</td>
				<td>Okuda 2015, as reported by Dal Corso</td>
				<td>reconstructed Proto-Ainu</td>
				<td>diachronic hypothesis; not a synchronic label for the attested paradigm ‹speculative›</td>
			</tr>
			<tr>
				<td>hierarchical / participant-referentiality-mismatch</td>
				<td>Dal Corso 2023/2025</td>
				<td>chiefly ‹SA›, the fourth-person dimension</td>
				<td>typologically suggestive for interaction cells; not demonstrated as replacing row-wise tripartite for Hokkaido ‹contested›</td>
			</tr>
			<tr>
				<td>inverse as ancient pan-Ainu feature (remnants in eci=)</td>
				<td>Satō 2014, reported by Dal Corso</td>
				<td>Proto-Ainu diachrony</td>
				<td>reported diachronic proposal ‹speculative›</td>
			</tr>
			<tr>
				<td>second-person neutrality as original (empathy / deferred control)</td>
				<td>Satō 2024, reported by Dal Corso</td>
				<td>history of the 2SG/2PL rows</td>
				<td>diachronic account of one row; synchronic neutrality is uncontested ‹contested›</td>
			</tr>
			<tr>
				<td>zero third-person affix required</td>
				<td>Satō 2023/2025; Bugaeva's Ø notation is compatible</td>
				<td>Hokkaido valency and the two-affix cap</td>
				<td>live disagreement against Nakagawa's no-affix analysis ‹contested›</td>
			</tr>
		</tbody>
	</table>

	<p>
		Dal Corso's mixed nominative–neutral–inverse account is formulated for ‹SA› Sakhalin.
		He dismisses the tripartite component for Sakhalin by arguing that the S and A forms
		sharing common origin belong to a nominative sub-system rather than tripartite cells,
		while the fourth-person or participant-referentiality-mismatch dimension is analysed as
		inverse <Ref k="dalcorso2025align" p="187, 207, 213" />. He is explicit that this
		diachrony may not extend to Ainu as a whole and that the hierarchical analysis
		may not apply to Hokkaido <Ref k="dalcorso2025align" p="188, 200" /> ‹contested›.
		The Hokkaido description accordingly retains Bugaeva's cell-based tripartite label
		for the two rows in which S, A, and O carry distinct forms and distinct sides of
		attachment.
	</p>
</S>

<S t="The active attribution" id="active">
	<p>
		An "active" or split-intransitive characterisation of Ainu person marking appears in
		the secondary literature and is commonly attributed to Shibatani. The text accessible
		for this grammar is the 1988 LSJ abstract, which treats noun incorporation and argues
		that the incorporable nominal corresponds to the patient subject of an intransitive
		clause or to a transitive object — explicitly invoking an unaccusative analysis
		<Ref k="shibatani1988" p="210–211" />. The abstract assigns no alignment label to the
		person-indexing paradigm, and the 1990 work in which an active characterisation may
		appear was not available to verify <Ref k="shibatani1988" p="210–211" /> ‹speculative›.
	</p>

	<p>
		The person-indexing paradigm itself does not partition the intransitive subject by
		agentivity. Agentive intransitives and patientive or change-of-state intransitives take
		the same S-form set once the verb is intransitive; the conditioning factor is valency,
		not semantic role <Ref k="nakagawa2024" p="126–127" />. Satō's 2025 characterisation
		places Ainu with head-marking languages in the sense of <Ref k="nichols1986" paren />
		and develops the argument-indexing system without assigning an alignment label
		<Ref k="sato2025a" p="361, 373–374" /> ‹speculative›. The split that the literature
		pursues under the active or split-intransitive name surfaces in verb classes,
		incorporation, and valency-changing morphology, and is treated in
		<Xr ch="alignment-split-intransitive" />.
	</p>
</S>

<S t="Hierarchical effects in person combinations" id="hierarchy">
	<p>
		Two aspects of the paradigm are better described in hierarchical or referential terms
		than in a flat S/A/O frame: the speech-act-participant combination cells and the
		referential range of the fourth-person set.
	</p>

	<p>
		The second-plural prefix <i lang="ain-Latn">eci=</i> serves as the portmanteau for
		all combinations in which a first-person A acts on a second-person O —
		1SG.A→2SG.O, 1SG.A→2PL.O, 1PL.EXCL.A→2SG.O, and 1PL.EXCL.A→2PL.O — using a
		single prefix where a sequence of first- and second-person indexes might be expected
		<Ref k="tamura1972" p="27–28" />; <Ref k="bugaeva2008" p="38" />;
		<Ref k="bugaeva2012" p="474" />; <Ref k="nakagawa2024" p="170, 173" />.
		The cell and its ambiguity with the plain 2PL marker are developed in
		<Xr ch="eci-portmanteau-and-second-plural" />.
	</p>

	<Ex
		m="nep ka eci=kasuy pe an ya"
		g="something even 1SG.A>2SG.O=help NMLZ exist Q"
		tr="Is there anything I can help you with?"
		cite="nakagawa2024:174"
		dial="SAR"
		place="Nakagawa ex. 128, after Honda 2001: 44"
		note="The single prefix eci= encodes 1SG.A acting on 2SG.O; no separate first- and second-person indexes co-occur. The form is homophonous with the plain 2PL index in A, S, and O."
	/>

	<p>
		The 2→1 direction is irregular in a different way. Most dialectal combination tables
		carry a second-person A index followed by the first-person object form, but Saru and
		Chitose suppress the expected second-person subject prefix and use bare
		<i lang="ain-Latn">en=</i> for 2SG→1SG; Chitose extends the bare form to 2PL→1SG
		as well <Ref k="nakagawa2024" p="170, 173" />; <Ref k="sato2008" p="146–147" />.
	</p>

	<p>
		The fourth-person set adds a second hierarchical dimension through its referential
		range. Five uses cluster in the same form-set: the inclusive first plural, the
		honorific address to a respected second person, the indefinite or agent-defocused
		transitive subject, the narrative first person in oral literature, and logophoric
		reference inside a quotation <Ref k="nakagawa2024" p="174–179" />;
		<Ref k="tamura1972" p="18–20, 28, 34" />; <Ref k="bugaeva2008" p="40–43" />.
		The honorific use brings the hierarchy most plainly into view: one addressee is
		indexed with the fourth-person suffix on a plural verb stem.
	</p>

	<Ex
		m="hunak wa arki=an ru-we an"
		g="where from come.PL=4.S track-POSS exist"
		tr="Where have you come from?"
		cite="nakagawa2024:177"
		dial="CHI"
		place="Nakagawa ex. 140, woman addressing an adult man"
		note="The addressee is a single person, yet the fourth-person S suffix =an selects the plural stem arki. The plural signals honorific elevation rather than number of referents."
	/>

	<p>
		The fourth-person A prefix defocuses the transitive agent while the patient remains
		the grammatical object; Ainu has no subject-promoting passive. The same prefix
		participates in the indefinite construction that Japanese or English translations
		often render passively <Ref k="tamura1972" p="34" />; <Ref k="sato2008" p="203–205" />;
		<Ref k="nakagawa2024" p="176–177" />.
	</p>

	<Ex
		m="wen kamuy a=maketa wa a=rayke ru-we ne"
		g="bad god 4.A=defeat CONJ 4.A=kill track-POSS COP"
		tr="The evil kamuy was defeated and killed."
		cite="nakagawa2024:178"
		dial="CHI"
		place="Nakagawa ex. 145"
		note="The fourth-person prefix a= fills the A position and defocuses the agent; the lexical patient remains the object of both transitive verbs. The passive-flavoured English translation reflects agent-defocusing, not a voice alternation in the Ainu."
	/>

	<p>
		Bugaeva analyses the inclusive and quotation uses as unified by a logophoric function:
		the set organises participant reference from a discourse perspective, with the singular
		pronoun <i lang="ain-Latn">asinuma</i> glossed by native speakers as 'oneself' rather
		than 'I' <Ref k="bugaeva2008" p="40–43" />; <Ref k="bugaeva2012" p="474–476" />.
		Dal Corso's participant-referentiality-mismatch framing for ‹SA› Sakhalin treats the
		same dimension as a referential hierarchy of speech-act participants, but explicitly
		limits that analysis to Sakhalin data
		<Ref k="dalcorso2025align" p="196–200" /> ‹contested›.
	</p>

	<p>
		The Hokkaido evidence supports a synthesis: person indexing is row-wise mixed in
		morphological alignment, while the fourth-person set and the <i lang="ain-Latn">eci=</i>
		portmanteau and 2→1 irregular cells display a referential-participant hierarchy
		overlaid on the S/A/O frame. This overlay does not replace the tripartite exponence
		of the 1PL.EXCL and fourth-person rows; both dimensions are operative in the same
		paradigm ‹original-needs-review›. The basis is the factbase-verified five-use
		analysis of the fourth person and the directly read combination data
		(<Ref k="nakagawa2024" p="174–179" />; <Ref k="tamura1972" p="27–28, 34" />;
		<Ref k="bugaeva2008" p="38, 40–43" />); the synthesis is offered as an integrative
		label for an existing pattern, not as a new theoretical commitment.
	</p>
</S>

<S t="Third person and the two-affix cap" id="third-person">
	<p>
		The third-person row is formally uniform — Ø for A, S, and O — but the
		interpretation is contested. Nakagawa treats third person as the absence of any affix:
		a bare noun phrase satisfies the verb's valency position without triggering a marker
		<Ref k="nakagawa2024" p="169" />. Satō argues for a zero third-person affix, required
		to account for the cap of two personal indexes per verb and the ungrammaticality of
		three-index combinations in causative and ditransitive configurations
		<Ref k="sato2023b" p="39" />; <Ref k="sato2025a" p="369" />. Bugaeva's paradigm
		table writes Ø in the third row, describing the surface form without adjudicating
		between the two analyses <Ref k="bugaeva2012" p="471" /> ‹contested›.
	</p>

	<p>
		Ijäs's learner grammar presents the same operational generalization for L2 learners:
		a finite verb obligatorily indexes its non-third participants while third-person
		arguments surface as bare noun phrases <Ref k="ijas2023" />. Her presentation is
		compatible with both sides of the zero-versus-absent debate.
	</p>

	<Ex
		m="seta cep nukar"
		g="dog fish see"
		tr="The dog sees the fish."
		constructed
		cite="ijas2023"
		dial="HK"
		note="Constructed following Ijäs's pedagogical model (L2–L3); both arguments are third person and no personal index appears on the verb. Nakagawa's analysis requires no third-person affix here; Satō's analysis posits a zero affix for each third-person role."
	/>

	<p>
		Ijäs's fixed-order statement for ditransitives — indirect object between subject and
		object — is a teaching simplification. Nakagawa's three-place-verb examples show
		that the two object phrases and the subject are not locked in a single linear order
		<Ref k="nakagawa2024" p="363–365" />; <Ref k="ijas2023" />.
	</p>

	<p>
		The ditransitive evidence bears directly on alignment. Satō argues that the object
		index in three-place verbs such as <i lang="ain-Latn">kore</i> 'give' ordinarily
		identifies the human recipient while the theme stays unindexed — a secundative
		pattern in the indexing slot <Ref k="sato2008" p="147" />;
		<Ref k="sato2023b" p="40, 47" />. Nakagawa describes the same verbs through valency,
		with two bare object phrases when both are third person
		<Ref k="nakagawa2024" p="363–365" />. Both accounts converge on the generalization
		that a verb hosts at most one subject index and one object index; the difference is
		whether the unfilled third-person position contains a zero marker ‹contested›.
	</p>

	<Ex
		m="topenpe hekattar ku=kore"
		g="sweets children 1SG.A=give"
		tr="I gave the children sweets."
		cite="nakagawa2024:128"
		dial="SAR"
		place="Nakagawa ex. 11a"
		note="The 1SG.A subject is indexed; both non-subject participants are third person and appear as bare noun phrases with no object index. Satō's analysis posits a zero third-person object for the recipient; Nakagawa's analysis requires no zero."
	/>

	<p>
		The full object-indexing system and its relationship to
		<Xr ch="transitivity-and-valence-classes">valency classes</Xr> are treated in
		<Xr ch="argument-realization-indexing" />.
	</p>
</S>

<S t="Synthesis" id="synthesis">
	<p>
		The most defensible synchronic label for Hokkaido Ainu person-indexing is
		person-conditioned mixed morphological alignment. Row by row: 1SG is
		nominative–accusative (S=A≠O), second and third persons are neutral (S=A=O), and
		the 1PL.EXCL and fourth-person rows are tripartite (S≠A≠O, with side of attachment
		realising the S/A distinction) ‹consensus›. A language-level label such as active,
		ergative, or inverse characterises at most one row accurately: the active label is
		unverified for the agreement paradigm
		<Ref k="shibatani1988" p="210–211" />; the ergative analysis is a diachronic
		reconstruction for Proto-Ainu; and the inverse label is Dal Corso's analysis of
		‹SA› Sakhalin, explicitly limited by its author to that variety
		<Ref k="dalcorso2025align" p="187–188, 213" />.
	</p>

	<p>
		Above the row-wise pattern, a hierarchical overlay is operative in the fourth-person
		set and in the <i lang="ain-Latn">eci=</i> portmanteau and 2→1 irregular cells. This
		overlay encodes referential distinctions — inclusive versus exclusive, honorific versus
		plain, logophoric versus direct report — that fall outside the binary S/A/O frame. The
		overlay is grounded in the factbase-verified five-use analysis of the fourth person and
		the directly read combination data, and is presented as an integrative account of the
		competing labels rather than a new theoretical proposal ‹original-needs-review›.
	</p>

	<p>
		Several questions remain open. Whether the positional contrast that grounds the
		tripartite label (prefix for A, suffix for S) warrants a tripartite classification
		or is better captured diachronically, as Dal Corso proposes for ‹SA›, is a live
		disagreement <Ref k="dalcorso2025align" p="207, 213" /> ‹contested›. The origin of
		second-person neutrality — whether it reflects an original non-distinction or a lost
		S/A≠O pattern — is unresolved; Satō (2024, as reported by Dal Corso) argues for the
		original account, while most earlier work assumes a later merger
		<Ref k="dalcorso2025align" p="194–195" /> ‹contested›. The zero-versus-absent debate
		for third person remains open between Nakagawa and Satō ‹contested›.
	</p>
</S>
