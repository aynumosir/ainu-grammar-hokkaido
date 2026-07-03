<!-- src/lib/grammar/chapters/verbal-subclasses-taxonomy.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="A valence-based taxonomy" id="taxonomy">
	<p>
		Verbs are the class of words that head clausal predicates and carry person-marking for their
		arguments <Ref k="nakagawa2024" p="116" />; <Ref k="sato2008" p="2" />. The class inventory and
		its formal diagnostics are established in <Xr ch="word-class-inventory-and-diagnostics" />.
		Within the verbal class, Nakagawa organizes the subclasses along two partially independent axes:
		<em>argument count</em> (how many core nominal arguments the verb governs) and <em>affix set</em>
		(which portion of the person paradigm the verb admits)
		<Ref k="nakagawa2024" p="116–117" />; <Ref k="nakagawa2022pos" p="473" />.
		<Ref k="sato2008" p="2–3" /> works within the same bipartite framework with slightly different
		labelling; both follow the scheme of <Ref k="tamura2000" paren />. <Ref k="refsing1986"
			p="74–76"
		/> places Ainu verbs in a broader macro-class (Verbals) that covers what the present taxonomy
		separates into intransitive, transitive, and copular verbs, without further subdivision by
		valence internally. The pedagogical account in <Ref k="ijas2023" /> uses the person-affix set
		as its primary classificatory criterion, organizing the verb inventory in the same way.
	</p>

	<table>
		<caption>Hokkaido Ainu verbal subclasses (Nakagawa 2024: 116–117)</caption>
		<thead>
			<tr>
				<th>subclass</th>
				<th>argument count</th>
				<th>affix set</th>
				<th>representative verbs</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>intransitive (vi)</td>
				<td>1-place (S)</td>
				<td>S affixes: <i lang="ain-Latn">ku=</i>, <i lang="ain-Latn">=an</i>, …</td>
				<td>
					<A w="arpa" gl="go" />, <A w="ek" gl="come (SG)" />, <A w="pirka" gl="be good" />,
					<A w="mina" gl="laugh" />
				</td>
			</tr>
			<tr>
				<td>transitive (vt)</td>
				<td>2-place (A + O)</td>
				<td>A + O affixes: <i lang="ain-Latn">ku=</i> (A), <i lang="ain-Latn">en=</i> (O), …</td>
				<td>
					<A w="e" gl="eat" />, <A w="nukar" gl="see" />, <A w="respa" gl="rear, raise" />,
					<A w="ramu" gl="think about (something)" />
				</td>
			</tr>
			<tr>
				<td>three-place (vd)</td>
				<td>3-place (A + O₁ + O₂)</td>
				<td>A + one O affix; second object unindexed when 3rd person</td>
				<td>
					<A w="kore" gl="give" />, <A w="kar" gl="make for" />, <A w="ye" gl="say to" />
				</td>
			</tr>
			<tr>
				<td>copula (<i lang="ain-Latn">ne</i>)</td>
				<td>2-place (A + predicate nominal)</td>
				<td>A affixes only; predicate nominal not indexed</td>
				<td><A w="ne" gl="be, become (copula)" /></td>
			</tr>
			<tr>
				<td>existential (<i lang="ain-Latn">an</i> / <i lang="ain-Latn">oka</i>)</td>
				<td>1-place (S)</td>
				<td>S affixes</td>
				<td><A w="an" gl="exist, be" />, <A w="oka" gl="exist, be (alternate / often plural)" /></td>
			</tr>
			<tr>
				<td>negative existential (<i lang="ain-Latn">isam</i>)</td>
				<td>1-place (S) or predicating</td>
				<td>S affixes in predicative use</td>
				<td><A w="isam" gl="not exist, be absent" /></td>
			</tr>
			<tr>
				<td>avalent (0-place)</td>
				<td>0-place</td>
				<td>no argument-affix slot</td>
				<td>impersonal predicates (see <Xr ch="transitivity-and-valence-classes" />)</td>
			</tr>
		</tbody>
	</table>

	<p>
		Two further structural types cross-cut the table: locative-object verbs (場所目的語動詞), which
		take a locative phrase in the O position, and serial predicates (連動詞), in which two stems
		share argument slots. Both are introduced below and described in depth in
		<Xr ch="transitivity-and-valence-classes" />. The valency-changing morphology that moves verbs
		between classes — applicatives, causative affixes, the antipassive prefix
		<i lang="ain-Latn">i-</i>, and the transitivizer <i lang="ain-Latn">-ka</i> — is treated in
		<Xr ch="valency-voice-overview" />.
	</p>
</S>

<S t="The person-marking diagnostic" id="person-marking-diagnostic">
	<p>
		Assigning a verb to a subclass amounts to determining which argument roles its affixes encode.
		The Hokkaido Ainu personal-affix paradigm distinguishes three roles: S (sole argument of an
		intransitive), A (subject of a transitive), and O (object of a transitive). The full paradigm
		and its mixed alignment are set out in <Xr ch="person-marking-architecture" />; what matters
		here is its use as a classificatory probe. A verb whose subject takes S affixes and permits no O
		affix is intransitive. A verb whose subject takes A affixes and whose object takes O affixes is
		transitive. A verb that takes A affixes on its subject but licenses no O-affix slot is copular.
	</p>

	<p>
		The first singular provides the sharpest probe because 1SG distinguishes S=A (<i lang="ain-Latn"
			>ku=</i
		>) from O (<i lang="ain-Latn">en=</i>). At fourth person the contrast is still more transparent:
		the intransitive subject bears the suffix <i lang="ain-Latn">=an</i>, the transitive subject
		the prefix <i lang="ain-Latn">a=</i>, and the transitive object the prefix
		<i lang="ain-Latn">i=</i> — three distinct exponences for three distinct roles
		<Ref k="nakagawa2024" p="163–167" />; <Ref k="bugaeva2012" p="471–472" />.
	</p>

	<p>
		Subclass membership is grammatical, not semantic. The verb <A w="ramu" gl="think about (something)" />
		is transitive — it licenses A and O affixes — even though its meaning is stative. The verb
		<A w="yaynu" gl="think, feel (intransitively)" /> is intransitive for the same semantic domain.
		The diagnostic difference is purely morphological. This contrast was highlighted in community
		discussion: <i lang="ain-Latn">*sekor a=ramu an</i> is ungrammatical because
		<i lang="ain-Latn">ramu</i> requires the transitive A prefix <i lang="ain-Latn">a=</i>, not
		the intransitive S suffix <i lang="ain-Latn">=an</i>
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-09) ‹corpus-confirmed›.
	</p>
</S>

<S t="Intransitive verbs" id="intransitive">
	<p>
		One-place predicates assign a single S role. The class is large and semantically heterogeneous:
		it encompasses motion predicates (<A w="arpa" gl="go" />, <A w="ek" gl="come (SG)" />,
		<A w="san" gl="go down, go out" />, <A w="ahun" gl="go in, enter" />), postural predicates
		(<A w="as" gl="stand" />), cognitive and emotional predicates
		(<A w="mina" gl="laugh" />, <A w="yaynu" gl="think, feel" />), and the large class of property
		predicates (<A w="pirka" gl="be good" />, <A w="poro" gl="be big" />,
		<A w="hure" gl="be red" />, <A w="tanne" gl="be long" />) that in other languages would be
		adjectives. All share the S affix set; no O slot is available.
	</p>

	<Ex
		m="kim ta arpa=an akusu"
		g="mountain-ward LOC go=4.S when"
		tr="When (I) went to the mountains…"
		cite="nakagawa2024:246"
		dial="CHI"
		place="Nakagawa ex. 300"
		note="arpa 'go' is intransitive; the fourth-person subject is marked by the S suffix =an following the stem. The type-2 locative noun kim 'mountain-ward' directly heads the locative phrase with the case particle ta."
	/>

	<p>
		Property predicates — stative predicates describing qualities or states — take the identical
		S affixes as action intransitives, and head bare predicates without a copula. The third person is
		zero, so a property verb in a simple declarative clause carries no overt person affix:
	</p>

	<Ex
		m="toan nupuri ri"
		g="DEM mountain be.tall"
		tr="That mountain is high."
		cite="shibatani1990:19"
		dial="HK"
		note="Shibatani ex. 13b. The property predicate ri 'be tall, be high' heads the predicate with zero marking for 3rd person. No copula intervenes between the subject NP and the property predicate."
	/>

	<p>
		The argument for treating property predicates as intransitive verbs rather than as a separate
		adjective class — and the morphological evidence for that analysis — is developed in
		<Xr ch="no-adjective-class-property-verbs" />. The predication of property concepts without a
		copula is treated in <Xr ch="property-concept-predication" />.
	</p>

	<p>
		Within the intransitive class the descriptive literature distinguishes two semantic groupings:
		<em>agentive</em> intransitives, whose S argument is volitional and agent-like (motion, action,
		and activity predicates), and <em>patientive</em> intransitives, whose S argument is an
		experiencer or the subject of a state (property predicates, involuntary experience verbs).
		Crucially, the basic person-affix paradigm does not encode this contrast morphologically: both
		groupings select the same S affix set across all persons
		<Ref k="nakagawa2024" p="126–127" />. The agreement system is therefore not split-intransitive
		in the morphological sense — S-set assignment depends only on valence, not on the
		agent-vs-patient character of the S argument. Whether semantic or lexical criteria support a
		deeper Split-S or Fluid-S analysis ‹contested› is examined in
		<Xr ch="alignment-split-intransitive" /> and <Xr ch="alignment-hierarchical-and-the-debate" />.
	</p>
</S>

<S t="Transitive verbs" id="transitive">
	<p>
		Two-place predicates assign an A role to their subject and an O role to their object. When both
		arguments are non-third-person, each may be person-indexed on the verb. The ceiling is two
		indexes per verb — one A index and one O index — and a third argument is never indexed
		<Ref k="nakagawa2024" p="125–127" />; <Ref k="sato2025a" p="361" />. Third-person arguments
		surface as bare noun phrases.
	</p>

	<Ex
		m="kani ku=respa p anakne"
		g="1SG 1SG.A=rear.raise NMLZ TOP"
		tr="As for those (children) I raised…"
		cite="nakagawa2024:214"
		dial="SAR"
		place="Nakagawa ex. 230"
		note="respa 'rear, raise' is transitive; ku= marks the 1SG.A subject. The object is a relativized clause headed by the formal noun p, whose internal gap is the relativized third-person object — which is why no O affix appears on the verb."
	/>

	<p>
		One morphological consequence of transitivity is that verbal number marks plurality of the
		<em>object</em>, not the subject. The suppletive pair <A w="rayke" gl="kill (O.SG)" /> and
		<A w="ronnu" gl="kill (O.PL)" /> signals how many entities are killed, regardless of how many
		kill: the intransitive S and the transitive O are treated alike for number marking, in an
		ergative-like pattern <Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-12) ‹consensus›. The
		full system of number-sensitive stems and the pluractional suffix <i lang="ain-Latn">-pa</i>
		are treated in <Xr ch="suppletive-verbal-number" />.
	</p>
</S>

<S t="Three-place verbs" id="three-place">
	<p>
		A lexically small set of predicates takes three argument slots: subject (A), a primary object
		(typically a recipient or addressee), and a secondary object (typically a theme or propositional
		content). The principal members are <A w="kore" gl="give" />, <A w="ye" gl="say to" />, and
		<A w="kar" gl="make for someone" />, along with morphologically complex forms derived from them
		<Ref k="sato2023b" />; <Ref k="bugaevakobayashi2022" />; <Ref k="kobayashi2015" />.
	</p>

	<p>
		Because the verb carries at most two person indexes, the second object is unindexed when it is
		third person. The indexed O slot falls on the recipient or the more animate participant; the
		theme or propositional content remains a bare noun phrase. When both non-subject arguments are
		third person, only A is indexed:
	</p>

	<Ex
		m="topenpe hekattar ku=kore"
		g="sweets children 1SG.A=give"
		tr="I gave the children sweets."
		cite="nakagawa2024:127"
		dial="SAR"
		place="Nakagawa ex. 11a"
		note="kore 'give' is a three-place verb. Both the recipient hekattar 'children' and the theme topenpe 'sweets' are third person and surface as bare noun phrases; only the 1SG.A subject is indexed by ku=. Were the recipient first or second person, an O affix for that participant would appear on the verb."
	/>

	<p>
		A related pattern arises with the serial construction
		<A w="aske uk" gl="invite (lit. take someone's hand)" />: its A role indexes on the action
		verb <A w="uk" gl="take, receive" /> while the recipient role indexes on the relational noun
		<A w="aske" gl="hand (in grip)" />, giving <i lang="ain-Latn">en=aske e=uk</i> 'you invite
		me'. Satō calls this type 連他動詞 (serial transitive); it is the clearest case of a wider
		class of serial predicates in which argument slots are shared between adjacent stems
		<Ref k="sato2008" p="147" />; <Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-17)
		‹corpus-confirmed›.
	</p>

	<p>
		Whether the language is best analysed as secondary-object or secundative for this argument
		pattern, and how three-place structure interacts with applicative morphology, is taken up in
		<Xr ch="transitivity-and-valence-classes" /> and <Xr ch="object-indexing-monotransitive" />.
	</p>
</S>

<S t="The copula and the existential verbs" id="copula-existential">
	<p>
		Three predicates hold a special position in the taxonomy: the copula
		<A w="ne" gl="be, become (copula)" />, the existentials <A w="an" gl="exist, be" /> and
		<A w="oka" gl="exist, be" />, and the negative existential
		<A w="isam" gl="not exist, be absent" />. They function as predication operators and each
		admits a distinctive affix set.
	</p>

	<p>
		The copula <A w="ne" gl="be, become" /> heads equative and classificatory clauses of the
		structure [NP<sub>subject</sub> — NP<sub>predicate</sub> — <i lang="ain-Latn">ne</i>].
		Its affix behaviour places it with the transitive class: the subject takes A-type affixes, not S.
		At first singular this means <i lang="ain-Latn">ku=ne</i> 'I am X', with the same prefix
		<i lang="ain-Latn">ku=</i> that marks the A of a transitive verb. The predicate nominal,
		however, carries no O person index regardless of its person or number. Nakagawa groups this under
		a separate copular affix set — alongside the intransitive and transitive sets — precisely because
		it is A-marked on the subject yet has no object-affix slot
		<Ref k="nakagawa2024" p="116–117" />; <Ref k="sato2008" p="2–3" />.
	</p>

	<Ex
		m="wen menoko ku=ne"
		g="poor woman 1SG.A=COP"
		tr="I am a poor woman."
		constructed
		note="Constructed illustration (cf. Nakagawa 2024: 118; Bugaeva ed. 2022, ch. 14: 474). The copula ne takes the A-type ku= prefix for 1SG; the predicate nominal wen menoko 'poor woman' receives no person index."
	/>

	<p>
		The copula also covers the translative reading 'become X': the same form serves both equative
		and inceptive predication in context <Ref k="nakagawa2024" p="118–119" />. The full treatment
		of copular predication and its TAM and evidential extensions is in
		<Xr ch="copula-ne-predicate-nominals" />.
	</p>

	<p>
		The existential <A w="an" gl="exist, be" /> is strictly intransitive. It takes S affixes, and
		the located entity is its S argument; the locative phrase specifying the location is an oblique
		adjunct, not an O. The diagnostic contrast with the transitive existential-locative
		<A w="un" gl="be located in/at (vt)" /> is crisp: <i lang="ain-Latn">an</i> requires a
		locative-case frame (<i lang="ain-Latn">cise or ta an</i> 'is in the house'), while
		<i lang="ain-Latn">un</i> takes the location as a direct O and may carry an O person affix
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-09) ‹corpus-confirmed›. The existential
		paradigm — <i lang="ain-Latn">an</i>, <i lang="ain-Latn">oka</i>, and their progressive
		and resultative extensions — is treated in <Xr ch="existential-locational-an-oka" />.
	</p>

	<p>
		The negative existential <A w="isam" gl="not exist, be absent" /> predicates non-existence of
		its S argument. In possession frames it serves as the negative counterpart of
		<A w="kor" gl="have, possess" />. Its inflection and possessed-construction interaction are
		treated in <Xr ch="negation-existential-possessive-isam" /> and
		<Xr ch="predicative-possession-clauses" />.
	</p>

	<p>
		One community observation bears noting: in certain negative frames
		(<i lang="ain-Latn">ka somo ne</i> 'it is not the case that…') and occasionally elsewhere,
		<i lang="ain-Latn">ne</i> appears without a person affix. The reason is not settled in the
		accessible sources <Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-25) ‹speculative›. The
		negation–copula interaction is discussed in <Xr ch="copula-ne-predicate-nominals" />.
	</p>
</S>

<S t="Avalent predicates" id="avalent">
	<p>
		Nakagawa's arity framework reserves a zero-place (完全 / 0項) category for predicates that take
		no referential core argument <Ref k="nakagawa2024" p="116–117" />. The category is defined
		formally: a zero-place predicate has no argument-affix slot, not merely an impersonal or
		unspecified subject. On the arity account, a clause whose total argument count resolves to zero
		takes a complementizer rather than heading a relative-clause nominalization
		<Ref k="nakagawa2024" p="504" />, which connects this class to the complementizer-vs-nominalizer
		distinction treated in <Xr ch="nominalization-p-pe" />.
	</p>

	<p>
		The sources read for this chapter did not bank specific lexical members of the zero-place class
		<Ref k="nakagawa2024" p="116–117" />. A fuller inventory and the syntactic treatment of avalent
		predicates — including weather expressions and impersonal event frames — are provided in
		<Xr ch="transitivity-and-valence-classes" />.
	</p>
</S>

<S t="Locative-object verbs and ambitransitives" id="locative-object-ambitransitive">
	<p>
		Two structural types cut across the valence-based taxonomy and have word-class consequences.
	</p>

	<p>
		<em>Locative-object verbs</em> (場所目的語動詞) take a locative noun phrase in the structural
		position of the O argument, and the locative receives an O-type person affix in the paradigm.
		The subject of these verbs takes A affixes, making them transitive in their affix behaviour even
		though their object is a location rather than an entity. The valency of verbs taking place or
		space as an argument is examined in <Ref k="kobayashi2020" />;
		<Ref k="nakagawa2024" p="116–117" />.
	</p>

	<p>
		<em>Ambitransitive</em> patterns arise where the same stem alternates between an S-marked
		(intransitive) frame and an A-marked (transitive) frame depending on whether an O argument is
		present. The alternation is closely related to the productivity of denominal and deverbal
		derivation: Ainu intransitive verbs freely convert to noun-modifying and compound-forming roots,
		and transitivisers can reinstate a transitive frame
		<Ref k="nakagawa2024" p="267–272" />; <Ref k="sato2016" />.
	</p>

	<p>
		Both types, and the full inventory of valency-alternating morphology, are described in
		<Xr ch="transitivity-and-valence-classes" />. The applicative system that promotes locatives
		into O position is treated in <Xr ch="applicative-system-overview" />, and the antipassive that
		converts transitives to intransitives in <Xr ch="antipassive-detransitive-i" />.
	</p>
</S>
