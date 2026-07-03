<!-- src/lib/grammar/chapters/mirativity-scope-grammaticalization.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Three properties of the Hokkaido Ainu evidential system are treated here because they apply
		across all four formal-noun evidentials rather than belonging to any single term: the
		expression of mirativity and its structural separation from the evidential nominalizers; the
		scope of the evidential predicate over the TAM-marked clause it closes; and the
		grammaticalization cline by which ordinary sensory nouns become clause-final formal-noun
		evidentials. Double-evidential stacking is treated alongside grammaticalization because it
		reveals the hierarchical position that <i lang="ain-Latn">ruwe ne</i> has reached on that
		cline. The individual evidentials are described in <Xr ch="evidential-schema-overview" />,
		<Xr ch="ruwe-ne-inferential" />, <Xr ch="siri-ne-situational" />,
		<Xr ch="hawe-ne-reportative" />, and <Xr ch="humi-ne-sensory" />.
	</p>
</S>

<S t="Mirativity and the auxiliary aan" id="mirativity-aan">
	<p>
		Surprise at the content of a proposition — mirativity — is not encoded by any of the four
		formal-noun evidentials. The mirative value in the Hokkaido corpus attaches instead to the
		perfective auxiliary <A w="aan" /> and to the related form <A w="anan" />
		<Ref k="hirosawa2026" p="90" />. <Ref k="dalcorso2018" p="336" /> states this explicitly:
		Hokkaido Ainu shows no systematic evidence that the evidential paradigm itself generates
		mirative meanings, in contrast to some Sakhalin configurations. The mirative reading arises
		from <i lang="ain-Latn">aan</i>/<i lang="ain-Latn">anan</i>, not from the choice of
		evidential nominalizer.
	</p>

	<p>
		<Ref k="yoshikawa2018" /> argues that <i lang="ain-Latn">aan</i> encodes not just mirativity
		but also indirect evidentiality — placing the information at a remove from the speaker's
		direct epistemic access — and that the two meanings are inseparable in this auxiliary
		<Ref k="hirosawa2026" p="90" /> ‹contested›. <Ref k="dalcorso2018" p="336" />, working from
		a different theoretical framing, finds no grounds for aligning
		<i lang="ain-Latn">aan</i> with the indirect evidential paradigm and treats its mirative
		effect as pragmatic. The debate turns on sources consulted second-hand; Yoshikawa's two
		studies are cited here via <Ref k="hirosawa2026" p="90" />. What the accessible sources
		agree on is the descriptive fact: <i lang="ain-Latn">aan</i>/<i lang="ain-Latn">anan</i>
		is the element that contributes mirativity ‹corpus-suggested›.
	</p>

	<p>
		Within a clause the two elements can divide the semantic labour.
		<Ref k="hirosawa2026" p="90" /> (ex. 33) analyses a Saru narrative example in which
		<i lang="ain-Latn">aan</i> places content outside the speaker's prior epistemic territory —
		the structural basis of the surprise — while a following
		<i lang="ain-Latn">ruwe ne</i> reclaims that same content as established fact, producing the
		'it turned out that…' reading. Hirosawa reads the sequence as a territory-conflict pattern
		parallel to Japanese <span lang="ja">みたい</span> followed by <span lang="ja">のだ</span>:
		outward epistemic displacement, then incorporation ‹contested›.
	</p>

	<Ex
		m="pirka menoko a=ne aan ru-we ne"
		g="good woman 4.A=COP MIR track-POSS COP"
		tr="She turned out to be a beautiful woman!"
		constructed
		note="Constructed after the attested pattern in Hirosawa 2026: 90 (ex. 33), Tamura audio materials 02-06: 42 (Saru). The auxiliary aan contributes the mirative reading; ruwe ne closes the proposition as established knowledge. The evidential itself is not the source of the surprise."
	/>

	<p>
		The same <i lang="ain-Latn">anan</i> follows double-evidential constructions when a mirative
		reading accompanies an indirect evidential stacked under
		<i lang="ain-Latn">ruwe ne</i>:
	</p>

	<Ex
		m="supuya at kor sir-an ru-we ne anan"
		g="smoke rise while appearance-exist track-POSS COP MIR"
		tr="Smoke was rising — it turned out!"
		cite="dalcorso2018:327"
		dial="HK"
		place="Nakagawa text; Dal Corso siglum NGF: 176"
		note="Dal Corso ex. 268. The indirect visual siri an is layered under ruwe ne; anan follows the entire complex and contributes the surprise reading. The mirative is anan, not the evidential predicate it follows. On the double-evidential construction siri an ruwe ne, see §5 below."
	/>

	<p>
		An early attestation of the mirative tail with the non-visual sensory evidential is preserved
		in <Ref k="kindaichi1936" p="192" />:
		<i lang="ain-Latn">rupus humi ne awan</i> 'it had completely hardened and frozen', where the
		past-mirative tail <i lang="ain-Latn">awan</i> (a form historically related to or identical
		with <i lang="ain-Latn">aan</i>) follows <i lang="ain-Latn">humi ne</i>. This pattern — any
		of the four direct evidentials followed by a mirative tail — recurs in the corpus, confirming
		that mirativity is an independent layer above the evidential rather than a property of any
		particular nominalizer.
	</p>

	<p>
		The pedagogical grammar <Ref k="ijas2023" /> presents the evidential nominalizers alongside
		perfective and mirative auxiliaries without foregrounding the structural distinction between
		them. The primary analyses <Ref k="dalcorso2018" p="336" />;
		<Ref k="hirosawa2026" p="90" /> agree that this distinction is grammatically real, even where
		they diverge on the semantics of <i lang="ain-Latn">aan</i> itself.
	</p>
</S>

<S t="The scope of the evidential predicate" id="evidential-scope">
	<p>
		All four formal-noun evidentials share the same scope geometry: the evidential predicate
		(formal noun + copula or existential verb) closes a fully finite, TAM-marked clause. The
		constituent before the evidential carries its own person marking, suppletive number
		alternations, aspect and perfective auxiliaries, and propositional negation; the evidential
		then takes scope over the entire embedded clause
		<Ref k="nakagawa2024" p="392–393" />; <Ref k="takahashi2022" />.
	</p>

	<p>
		Propositional negation — the denial of the embedded proposition — is expressed by negating
		the verb <em>before</em> the formal noun; the pattern
		<i lang="ain-Latn">…somo ki ruwe ne</i> predicates the negative proposition as a recognized
		fact, with <i lang="ain-Latn">ruwe ne</i> outside the scope of
		<i lang="ain-Latn">somo</i>. The same holds for all four siblings:
		<i lang="ain-Latn">…somo ki siri ne</i>, <i lang="ain-Latn">…somo ki hawe ne</i>,
		<i lang="ain-Latn">…somo ki humi ne</i>. The outer rhetorical frame
		<i lang="ain-Latn">ruwe somo ne</i> is categorically different — it negates the evidential
		predication as a whole — and is discussed in
		<Xr ch="ruwe-ne-inferential" s="frames" /> <Ref k="nakagawa2024" p="393" />.
	</p>

	<Ex
		m="paye somo ki ru-we ne"
		g="go NEG do track-POSS COP"
		tr="(It is established that he) did not go."
		constructed
		note="Negation somo ki scopes over the embedded verb paye; ruwe ne predicates the resulting negative proposition as an established fact, outside the scope of somo. The parallel pattern holds for siri ne, hawe ne, and humi ne (e.g. …somo ki siri ne)."
	/>

	<p>
		The ordering of the evidential with respect to other clause-level material follows a fixed
		hierarchy. For <i lang="ain-Latn">ruwe ne</i>, the clause-linkers
		<i lang="ain-Latn">wa</i>, <i lang="ain-Latn">hine</i>, <i lang="ain-Latn">akusu</i>,
		<i lang="ain-Latn">kusu</i>, and nominal heads <i lang="ain-Latn">hi</i>,
		<i lang="ain-Latn">p</i> all follow the evidential; the purposive modal
		<i lang="ain-Latn">kusu ne</i> takes the evidential as its complement
		(<i lang="ain-Latn">kusu ne ruwe ne</i> is grammatical) but cannot follow it
		(<i lang="ain-Latn">*ruwe ne kusu ne</i> is ungrammatical) <Ref k="nakagawa2024" p="393" />.
		The community discussion at aynu-corpora Discord <Ref k="aynucorporadiscord" /> (nukopoli,
		2024-11-09) restates this as a layer-hierarchy principle — modal heads sit above the
		evidential, taking it as complement rather than the reverse — a formulation corroborated by
		Nakagawa's paradigm data ‹corpus-confirmed›. The evidential therefore occupies a position
		above clause-internal aspect but below the clause-linking and modal projections that take a
		finite clause as their argument.
	</p>

	<Ex
		m="kamuy ek ru-we ne wa paye=an"
		g="god come track-POSS COP CONJ go=4.S"
		tr="A god came, and (we) went."
		constructed
		note="The clause-linker wa follows ruwe ne in the post-evidential slot, showing that clause-linking material attaches outside the evidential predicate. The embedded verb ek and the person marker =an carry the clause-internal TAM and agreement; ruwe ne scopes over all of it."
	/>

	<p>
		Person and number agreement inside the evidential clause is independent of anything outside
		it. Suppletive verbal number alternations are resolved inside the evidential: the contrast
		<i lang="ain-Latn">íne nispa ek ruwe ne</i> (singular <i lang="ain-Latn">ek</i> 'come')
		vs. <i lang="ain-Latn">íne nispa arki ruwe ne</i> (plural <i lang="ain-Latn">arki</i>)
		turns on agreement within the embedded clause. The formal noun and copula carry no agreement
		of their own <Ref k="nakagawa2024" p="393" />.
	</p>

	<p>
		The formal status of the nominalized clause embedded under the evidential is not settled in
		the sources read directly for this grammar. Its finiteness is evident from its TAM and person
		marking. <Ref k="dalcorso2018" p="314–315" /> observes that the copula
		<i lang="ain-Latn">ne</i> of the direct forms expresses an internal, speaker-anchored
		viewpoint while the existential and posture verbs of the indirect forms express an external
		perspective, but stops short of a formal constituency analysis. Whether the embedded
		constituent constitutes a full finite nominalization, a predicate-phrase nominalization, or a
		construction-specific projection remains ‹speculative›. The general nominalization strategy
		underlying the construction is treated in <Xr ch="nominalization-p-pe" /> and
		<Xr ch="lexical-head-formal-noun-nominalization" />; the perfective auxiliary that may follow
		the evidential is treated in <Xr ch="perfective-anterior-a" />.
	</p>
</S>

<S t="The grammaticalization cline" id="grammaticalization-cline">
	<p>
		The four formal-noun evidentials derive from the
		<Xr ch="concept-form-affiliative-form">possessed forms</Xr> of ordinary sensory nouns: the
		path-noun <A w="ru" gl="track, path" /> yields the possessed form
		<i lang="ain-Latn">ru-we</i> 'the trace of —', the appearance-noun
		<A w="sir" gl="appearance, land" /> yields <i lang="ain-Latn">sir-i</i>, the voice-noun
		<A w="haw" gl="voice" /> yields <i lang="ain-Latn">haw-e</i>, and the sound/feeling-noun
		<A w="hum" gl="sound, feeling" /> yields <i lang="ain-Latn">hum-i</i>. The shift from
		sensory noun to clause-final marker was recognized in the earliest grammatical descriptions
		<Ref k="kindaichi1936" p="155–165" /> and is confirmed morphologically by Tamura's dictionary
		entries and Chiri's etymology: <i lang="ain-Latn">ruwe</i> derives from 'there is a trace of
		X', shifted to 'there is the fact of X'
		<Ref k="tamura1996" p="s.v. ru, ruwe" />; <Ref k="hirosawa2026" p="65" />. On the
		typological framework of <Ref k="hoppertraugott2003" paren />, the Ainu evidentials represent
		an intermediate point on the layered cline from lexical noun to grammatical marker.
	</p>

	<p>
		<Ref k="dalcorso2018" p="24–25" /> stresses that the result remains only partially
		grammaticalized: source-noun semantics are still active in the synchronic distribution (each
		form retaining a distinct sensory channel), the post-nominal predicate choice still matters
		for the direct/indirect distinction, and the formal nouns have lost full noun-phrase syntax —
		they admit no demonstrative or attributive modifier, block the extra possessive ending
		(<i lang="ain-Latn">*ruwehe</i>, <i lang="ain-Latn">*humihi</i> as evidentials), and are
		fixed in linear position <Ref k="tamura1996" p="s.v. ruwe" />. The Ainu system as a whole is
		a graded category; no Hokkaido form approaches the full grammaticalization of the Sakhalin
		particle <i lang="ain-Latn">manu</i> ‹consensus›.
	</p>

	<p>
		Within Hokkaido, the grammaticalization has advanced differently across dialects. Three stages
		are directly attested in the sources, yielding an intra-areal cline ‹original-needs-review›:
	</p>

	<table>
		<thead>
			<tr>
				<th>stage</th>
				<th>clause-final form</th>
				<th>representative dialect(s)</th>
				<th>primary sources</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>I — concept form as clause-final marker</td>
				<td><i lang="ain-Latn">ru / sir / haw / hum</i> (bare, uninflected)</td>
				<td>Tokachi; frequently Ishikari</td>
				<td>
					<Ref k="nakagawa2024" p="110, 390" />; <Ref k="takahashi2013" p="129–131" />
				</td>
			</tr>
			<tr>
				<td>II — possessed form as formal-noun evidential</td>
				<td><i lang="ain-Latn">ruwe / siri / hawe / humi</i> + copula/existential verb</td>
				<td>Saru, Chitose, Biratori</td>
				<td><Ref k="dalcorso2018" p="304–337" /></td>
			</tr>
			<tr>
				<td>III — possessed form as adverbial/conjunctive marker</td>
				<td>
					<i lang="ain-Latn">ruwe / siri / hawe / humi</i> (bare, clause-internal, no
					following copula)
				</td>
				<td>Horobetsu</td>
				<td><Ref k="takahashi2018" p="107–112" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		In Stage I dialects the bare concept form closes the clause where Saru uses the possessed
		form: Tokachi <i lang="ain-Latn">iruska haw ne</i> 'she was angry',
		<i lang="ain-Latn">tuk ru ne</i> 'it emerged', alongside Saru
		<i lang="ain-Latn">iruska hawe ne</i> and <i lang="ain-Latn">tuk ruwe ne</i>
		<Ref k="takahashi2013" p="130–131" />; <Ref k="nakagawa2024" p="110" />. The allomorphs
		<i lang="ain-Latn">sin</i> (for <i lang="ain-Latn">sir</i>) and
		<i lang="ain-Latn">aw</i> (for <i lang="ain-Latn">haw</i>) are Tokachi-specific
		<Ref k="takahashi2013" p="130–131" />. Stage I and Stage II represent a morphological
		difference — concept form vs. possessed form — rather than a semantic one; the four-way
		source distinction is present at both stages.
	</p>

	<p>
		Stage III, the Horobetsu development, takes the possessed-form nominalizer a step further.
		<Ref k="takahashi2018" p="108, 111" /> documents uses in which the nominalizers function not
		as complement-clause heads but as adverbial-clause markers — subordinating-conjunction-like
		elements — without a following copula. The adversative use is the clearest instance:
	</p>

	<Ex
		m="sinki siri suke ki wa"
		g="be.tired appearance cook do CONJ"
		tr="Though tired, (she) cooked."
		constructed
		dial="HOR"
		note="Constructed after the adversative siri use documented in Horobetsu and in early records (Chiri 1923: 86, cited by Takahashi 2018: 108). The bare formal noun siri without a following ne functions as an adversative/concessive clause marker, a use not attested in well-described Saru. Takahashi 2018: 111 treats this as a further step in the grammaticalization of the possessed-form nominalizers."
	/>

	<p>
		<Ref k="takahashi2018" p="111–112" /> notes that this versatile adverbial use is anticipated
		in Kindaichi &amp; Chiri's 1936 description of nominalizers as conjunctive particles
		<Ref k="kindaichi1936" p="155–160" />, suggesting the Stage III path is of some age within
		Horobetsu rather than a recent innovation. Takahashi connects this to what Noonan termed
		'versatile nominalization' — a nominalization strategy that extends across both
		complement-clause and adverbial-clause functions.
	</p>

	<p>
		One dialect fact complicates a simple Stage I → II reading of the cline. In Asahikawa and
		Shiranuka the trace-form <i lang="ain-Latn">ru</i> enters the existential frame as an
		inferential (<i lang="ain-Latn">ru an</i>), apparently in complementary distribution with
		the <i lang="ain-Latn">siri an</i> of the southern dialects
		<Ref k="dalcorso2018" p="326" />. This gives <i lang="ain-Latn">ru</i> an
		indirect-evidential function that the southern varieties lack for this stem; it may reflect
		convergence toward the Sakhalin existential pattern
		(<i lang="ain-Latn">ruwehe ʔan</i>), but the sources are thin and Dal Corso flags the
		comparison as requiring a wider-dialect study ‹speculative›.
	</p>

	<p>
		The grammaticalization trajectory also bears on the frequency asymmetry within the direct
		paradigm. <Ref k="yoshikawa2020" /> characterizes <i lang="ain-Latn">ruwe ne</i> as
		semantically unmarked among the four direct forms, capable of summarizing and marking scene
		transitions much as Japanese <span lang="ja">のだ</span> does — a discourse function
		consistent with its being the most grammaticalized direct member
		<Ref k="hirosawa2026" p="73" />. The community discussion at aynu-corpora Discord
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-03-17) summarizes the same Yoshikawa 2020
		characterization and notes the high frequency of <i lang="ain-Latn">ruwe ne</i> in narrative
		and its summative/transitional function, a point corroborated by Dal Corso's corpus counts
		<Ref k="dalcorso2018" p="72" /> ‹corpus-confirmed›. Genre-specific evidential patterning is
		treated in <Xr ch="narrative-tam-evidential-patterning-by-genre" />.
	</p>
</S>

<S t="Double-evidential stacking" id="double-evidentiality">
	<p>
		Double evidentials — two formal-noun evidential constructions stacked within a single clause —
		are more frequent in Hokkaido than in Sakhalin <Ref k="dalcorso2018" p="331" />.
		<Ref k="dalcorso2018" p="331–333" /> documents three functional types from the Kayano,
		Tamura, Nakagawa, and Bugaeva corpora:
	</p>

	<table>
		<thead>
			<tr>
				<th>type</th>
				<th>combination</th>
				<th>function</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>A — complementary sources</td>
				<td>
					inner indirect evidential + outer <i lang="ain-Latn">ruwe ne</i>
					(e.g. <i lang="ain-Latn">…hawe as ruwe ne</i>,
					<i lang="ain-Latn">…siri an ruwe ne</i>)
				</td>
				<td>character's reported/indirect source, narrator's knowledge-assertion over the whole</td>
			</tr>
			<tr>
				<td>B — epistemic reinforcer</td>
				<td>
					inner direct evidential + modal + outer <i lang="ain-Latn">ruwe ne</i>
					(e.g. <i lang="ain-Latn">…hawe ne nankor ruwe ne</i>)
				</td>
				<td>
					direct evidential of lower reliability closed by <i lang="ain-Latn">ruwe ne</i>
					as an assertion of the speaker's overall confidence
				</td>
			</tr>
			<tr>
				<td>C — same-stem iteration</td>
				<td>
					direct sensory + indirect sensory of the same stem
					(e.g. <i lang="ain-Latn">…humi ne humi as…</i>)
				</td>
				<td>
					subjective direct sensation and the arising/occurrence of that sensation
					presented as separate evidential moments
				</td>
			</tr>
		</tbody>
	</table>

	<p>
		In Type A the outer <i lang="ain-Latn">ruwe ne</i> functions as a ratifier. An indirect form —
		typically <i lang="ain-Latn">hawe as</i> (reportative indirect) or
		<i lang="ain-Latn">siri an</i> (visual indirect) — presents the content from a character's
		perspective, and <i lang="ain-Latn">ruwe ne</i> closes the utterance from the narrator's
		perspective as traditional, shared knowledge <Ref k="dalcorso2018" p="331" />. Attested Type A
		combinations include <i lang="ain-Latn">hawe as ruwe ne</i>,
		<i lang="ain-Latn">siri an ruwe ne</i>, and <i lang="ain-Latn">siri ki siri ne</i>
		<Ref k="dalcorso2018" p="331–333" />.
	</p>

	<Ex
		m="ek haw-e as ru-we ne"
		g="come haw-POSS stand track-POSS COP"
		tr="(She) reportedly came — and so it was."
		constructed
		note="Constructed after the Type A combinations in Dal Corso 2018: 331 (e.g. Kayano text, ran hawe as ruwe ne; Dal Corso ex. 273, siglum KAY, narrator Kaizawa Tsurushino, Biratori). The inner hawe as (indirect reportative) presents the event from a reported source; the outer ruwe ne frames it as the narrator's established fact."
	/>

	<p>
		The outer form in Types A and B is <em>systematically</em>
		<i lang="ain-Latn">ruwe ne</i> and not <i lang="ain-Latn">siri ne</i>,
		<i lang="ain-Latn">hawe ne</i>, or <i lang="ain-Latn">humi ne</i>. This asymmetry supports
		the analysis developed in <Xr ch="ruwe-ne-inferential" />:
		<i lang="ain-Latn">ruwe ne</i> functions as an epistemic incorporation operator — a form
		that can ratify any already-evidentially-marked proposition as established knowledge —
		rather than as a fourth parallel sensory channel. Among the direct members it is the one
		whose source-noun semantics ('the trace of —') has bleached sufficiently to generalize across
		all sources of evidence once they have been assimilated by the speaker.
	</p>

	<p>
		Type B uses <i lang="ain-Latn">ruwe ne</i> as an epistemic upgrade. A direct evidential of
		relatively lower reliability is reinforced by a final <i lang="ain-Latn">ruwe ne</i> asserting
		the speaker's overall confidence in the proposition.
		<Ref k="dalcorso2018" p="332" /> (ex. 276) cites a narrator's utterance of the form
		<i lang="ain-Latn">hawe ne nankor ruwe ne</i> — the modal
		<i lang="ain-Latn">nankor</i> 'probably' attached to <i lang="ain-Latn">hawe ne</i> is then
		closed by <i lang="ain-Latn">ruwe ne</i>, which does not eliminate the uncertainty
		introduced by <i lang="ain-Latn">nankor</i> but frames the compound as an incorporated fact
		from the speaker's perspective. This use is consistent with
		<i lang="ain-Latn">ruwe ne</i>'s position at the top of the source-reliability hierarchy in
		Dal Corso's analysis.
	</p>

	<p>
		Type C, same-stem iteration, occurs in narrative contexts where the speaker presents both a
		subjective sensation and its arising as separate evidential moments:
	</p>

	<Ex
		m="poro cep a=ne hum-i ne hum-i as orano"
		g="big fish 4.A=COP hum-POSS COP hum-POSS stand after"
		tr="Feeling as though I were a great fish, and as that sensation arose —"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker, ILCAA Ainu materials (AA研アイヌ語資料) 013, line 32"
		note="The direct humi ne presents the speaker's immediate non-visual sensation (feeling as though one is a fish); humi as presents the arising of that same sensation from an external, indirect-sensory standpoint. The two forms cooperate: direct inner experience followed by indirect-sensory report of its occurrence. The sentence continues with a clause describing the speaker swimming after her elder brother."
	/>

	<p>
		<Ref k="dalcorso2018" p="326–327" /> adds a distributional argument bearing on the
		<i lang="ain-Latn">siri</i> forms. When the indirect visual
		<i lang="ain-Latn">siri an</i> appears in a double-evidential construction, the ratifying
		outer form is consistently <i lang="ain-Latn">ruwe ne</i> and never
		<i lang="ain-Latn">siri ne</i>. Were the two simply co-equal visual channels,
		this selection would be unmotivated; it follows naturally if
		<i lang="ain-Latn">ruwe ne</i> occupies a higher position in the evidential hierarchy, one
		at which its source-noun meaning has bleached enough to allow ratification of any other
		evidential type. The distributional gap that Dal Corso's sense-hierarchy account left open
		<Ref k="dalcorso2018" p="311–312" /> is therefore partially resolved by the double-evidential
		distribution itself ‹corpus-confirmed›.
	</p>

	<p>
		The stacking found in mirative contexts (§2 above) should be distinguished from
		double-evidential stacking. In <i lang="ain-Latn">siri an ruwe ne anan</i>, the final
		<i lang="ain-Latn">anan</i> is a mirative auxiliary, not a third formal-noun evidential;
		the stacking is between two evidential predicates and a mirative auxiliary in sequence, not
		among three co-equal evidential forms. Conflating the two construction types would obscure
		the structural difference between the evidential system (formal noun + copula or existential
		verb) and the mirative system (a perfective auxiliary above the evidential layer)
		<Ref k="hirosawa2026" p="90" />; <Ref k="dalcorso2018" p="331, 336" />.
	</p>
</S>
