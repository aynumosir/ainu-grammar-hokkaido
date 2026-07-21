<!-- src/lib/grammar/chapters/applicative-stacking-relativization-feeding.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Two feeding relations connect the applicative prefixes to other grammatical operations of the
		verb word. Oblique nominals — instrumentals, locatives, goals, purpose arguments — cannot
		incorporate directly into the verb; an applicative prefix must first promote the oblique to
		core-object status, after which incorporation can proceed
		<Ref k="shibatani1990" p="62, 66" />; <Ref k="nakagawa2024" p="484" />;
		<Ref k="satoni2022" p="§1" />. Bare obliques are equally inaccessible to the prenominal
		gap strategy that Hokkaido Ainu uses in relative clauses; applicative promotion again opens
		the relativization path by moving the nominal to the direct-object tier of the accessibility
		hierarchy <Ref k="kaiser1998" />; <Ref k="dalcorso2020" />;
		<Ref k="keenancomrie1977" paren />. Both relations turn on the same structural shift: from a
		postposition-marked peripheral role to an unmarked core object whose position is targetable
		by later grammatical operations ‹speculative›. This synthesis — grounded in the
		convergent evidence of Shibatani (1990), Nakagawa (2024), Kaiser (1998), and Dal Corso
		(2020) on the promotion logic — is a proposal original to this grammar.
	</p>
	<p>
		The chapter also treats applicative stacking — the co-occurrence of two applicative prefixes
		on one verb — together with the two feeding relations, since stacking creates the complex
		valency frames in which both paths may apply simultaneously. The individual prefixes
		<A w="e-" gl="about / by means of / at" />, <A w="ko-" gl="toward / together with" />, and
		<A w="o-" gl="into / toward a place" /> are treated in
		<Xr ch="applicative-e" />, <Xr ch="applicative-ko" />, and the system as a whole in
		<Xr ch="applicative-system-overview" />.
	</p>
</S>

<S t="Applicative stacking" id="stacking">
	<p>
		Up to two applicative prefixes appear on one verb simultaneously, each raising arity by one
		<Ref k="bugaeva2014" />; <Ref k="bugaevakobayashi2022" p="§4.1.1" />. The most productive
		double-applicative patterns pair <i lang="ain-Latn">e-</i> (Content, Instrument, Location,
		Purpose) with <i lang="ain-Latn">ko-</i> (Addressee, Goal, Comitative), in either order
		— <i lang="ain-Latn">e-ko-</i> or <i lang="ain-Latn">ko-e-</i>. Bugaeva and Kobayashi
		report no visible semantic difference between the two orders; in both,
		<i lang="ain-Latn">e-</i> contributes a Content or Instrument object and
		<i lang="ain-Latn">ko-</i> an Addressee or Goal
		<Ref k="bugaevakobayashi2022" p="§4.1.1" /> ‹contested›. Nakagawa places applicative
		prefixes in the single slot immediately inside the person index and before the root, so
		whether order encodes any semantic scope remains open
		<Ref k="nakagawa2024" p="211" /> ‹speculative›.
	</p>

	<p>
		With <A w="isoytak" gl="speak, tell" />, the double applicative yields a three-place frame
		— an Addressee (<i lang="ain-Latn">ko-</i>) and a Content argument
		(<i lang="ain-Latn">e-</i>) alongside the base Agent:
	</p>

	<Ex
		m="e-ko-isoytak"
		g="APPL-APPL-speak"
		tr="tell stories to someone about something"
		cite="bugaeva2006:188"
		dial="HK"
		note="e- contributes the Content participant; ko- contributes the Addressee. Both applied objects are unmarked bare NPs cross-referenced by a single O-index. Nakagawa 2024: 211 gives e-yay-e-isoytak, with reflexive yay- filling the ko-slot."
	/>

	<p>
		The example documented by Shibatani — attributed to Chiri (1936: 169) — combines two
		applicatives with one reflexive proper, one reflexive-possessive prefix, an adverbial
		element, and an incorporated object on a single root:
	</p>

	<Ex
		m="usa-oruspe a=e-yay-ko-tuyma-si-ram-suy-pa"
		g="various-rumor 4.A=APPL-REFL-APPL-far-REFL.POSS-heart-sway-PL"
		tr="We keep wondering about various rumours."
		lit="we sway our hearts afar and toward ourselves over various rumours"
		cite="shibatani1990:73; bugaeva2014"
		dial="HK"
		place="after Chiri 1936: 169; Shibatani ex. 131 / Bugaeva ex. 1"
		note="Root suy-pa 'sway (PL)' carries e- and ko- (both applicative), yay- and si- (both reflexive), the adverbial tuyma 'far', and the incorporated object ram 'heart'. The valency and template bookkeeping in Xr:valency-voice-overview holds at every step."
	/>

	<p>
		Bugaeva and Kobayashi's second example demonstrates re-intransitivization through stacking:
		a frame extended by two applicatives is collapsed back to bivalent by incorporating one
		applied object and reflexivizing the other
		<Ref k="bugaevakobayashi2022" p="§4.1.1" />:
	</p>

	<Ex
		m="yay-ipe-e-ko-sunke"
		g="REFL-food-APPL-APPL-lie"
		tr="eat meagre meals"
		cite="bugaevakobayashi2022:§4.1.1"
		dial="HK"
		note="ipe 'food' is incorporated as the e-object (Content); yay- fills the ko-object slot (Addressee = reflexive self). The resulting verb is transitive with a single indexed object."
	/>

	<p>
		A text-attested case of comitative incorporation via <i lang="ain-Latn">ko-</i> is visible
		in the following Chitose passage, where the comitative objects are incorporated in sequence
		with their respective verbs:
	</p>

	<Ex
		m="a=mun-ko-tata a=toy-ko-tata ayne"
		g="4.A=grass-APPL-chop 4.A=soil-APPL-chop then"
		tr="chopping along with the grass, chopping along with the soil, and then …"
		cite="nakagawa2024:197"
		dial="CHI"
		place="Nakagawa ex. 190"
		note="mun 'grass/weeds' and toy 'soil' are comitative objects first promoted by ko-, then incorporated. The implied patient (the demon's flesh) is cross-referenced by a=. Each verb-word is the output of the applicative-then-incorporation feeding sequence."
	/>
</S>

<S t="The feeding of oblique incorporation" id="incorporation-feeding">
	<p>
		The wordhood diagnostic in <Xr ch="noun-incorporation-object" /> establishes that only core
		objects — nominals that stand in the argument position targeted by the outermost person
		index — can incorporate into the verb word. A nominal held in a postpositional phrase
		(<A w="ani" gl="with (instrumental)" />, <A w="ta" gl="at, in (locative)" />,
		<A w="kusu" gl="for, in order to (purpose)" />) has no such position and cannot incorporate.
		The applicative removes the postposition and assigns the nominal core-object status;
		incorporation then proceeds. Nakagawa gives three parallel derivations
		<Ref k="nakagawa2024" p="484" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>oblique phrase</th>
				<th>applicative stage</th>
				<th>incorporated form</th>
				<th>role of the noun</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">at ani uk</i></td>
				<td><i lang="ain-Latn">at e-uk</i></td>
				<td><i lang="ain-Latn">at-e-uk</i></td>
				<td>Instrument ('net', catching)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">pira or un hokuste</i></td>
				<td><i lang="ain-Latn">pira ko-hokuste</i></td>
				<td><i lang="ain-Latn">pira-ko-hokus-te</i></td>
				<td>Goal/Locative ('cliff', falling toward)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">turepta kusu arpa</i></td>
				<td><i lang="ain-Latn">turepta e-arpa</i></td>
				<td><i lang="ain-Latn">turepta-e-arpa</i></td>
				<td>Purpose ('lily-bulb digging')</td>
			</tr>
		</tbody>
	</table>

	<p>
		The same three-step derivation is spelled out in Shibatani's analysis of a
		comitative-instrument example <Ref k="shibatani1990" p="67" />:
	</p>

	<Ex
		m="nea cep pone tura a=kuykuy"
		g="that fish bone with 4.A=bite"
		tr="I bit the fish together with its bones."
		cite="shibatani1990:67"
		dial="HK"
		note="Stage 1: pone 'bone' is an oblique held by the comitative postposition tura 'with'. It cannot incorporate."
	/>

	<Ex
		m="nea cep pone a=ko-kuykuy"
		g="that fish bone 4.A=APPL-bite"
		tr="I bit the fish together with its bones."
		cite="shibatani1990:67"
		dial="HK"
		note="Stage 2: ko- promotes pone to core object, dropping tura; pone is now an unmarked argument of the three-place verb."
	/>

	<Ex
		m="nea cep a=pone-ko-kuykuy"
		g="that fish 4.A=bone-APPL-bite"
		tr="I bone-bit the fish."
		cite="shibatani1990:67"
		dial="HK"
		note="Stage 3: pone incorporates into the verb word, landing outside ko- but inside the person index a=. The Mirror Principle is satisfied: ko- (morphologically inner, syntactically prior) sits between pone (morphologically outer, syntactically later) and the root kuykuy."
	/>

	<p>
		The affix order in Stage 3 instantiates Baker's Mirror Principle
		<Ref k="baker1988" paren />: the morphological order mirrors the syntactic derivation because
		applicative formation precedes incorporation. Shibatani extends this logic to a wordhood
		diagnostic: the presence of an applicative prefix on a noun-verb sequence that is otherwise
		ambiguous between NI and a phrasal reading resolves it unambiguously as incorporation
		<Ref k="shibatani1990" p="63" />. The form <i lang="ain-Latn">tumi osma</i> 'war began'
		is ambiguous, but <i lang="ain-Latn">o-tumi-osma</i> with the locative applicative
		<i lang="ain-Latn">o-</i> is unambiguously an incorporated word.
	</p>

	<p>
		Several forms in Chiri (1936: 93) place the incorporated noun before rather than after the
		applicative — <i lang="ain-Latn">o-ni-pici</i> alternating with
		<i lang="ain-Latn">ni o-pici</i> 'fall from a tree' — in apparent violation of mirror
		ordering. Shibatani calls this a "minor irregularity" without resolving it
		<Ref k="shibatani1990" p="71" /> ‹corpus-suggested›.
	</p>

	<p>
		Baker's Case-theoretic prediction that applicative formation (P-incorporation) should be
		impossible on unaccusative bases is falsified by Ainu
		<Ref k="baker1988" paren />; <Ref k="shibatani1988" p="210–211" />;
		<Ref k="shibatani1990" p="65–66" />. Verbs such as <i lang="ain-Latn">mokor</i> 'sleep'
		freely combine with <i lang="ain-Latn">e-</i> (<i lang="ain-Latn">mokor a=e-wen</i>
		'I missed sleeping'; <i lang="ain-Latn">sake a=e-niste</i> 'I am strong at wine'), contrary
		to Case-theory's expectation ‹contested›. The implication for the feeding chain is that an
		oblique associated with an intransitive base can be promoted and subsequently incorporated
		or relativized by the same mechanism as one associated with a transitive base.
	</p>
</S>

<S t="The feeding of relativization" id="relativization-feeding">
	<p>
		Hokkaido Ainu relative clauses are prenominal and gap-based: the modifying clause precedes
		the head noun and leaves a null gap in the position the head noun would otherwise occupy
		within the clause. Subject and direct-object gaps are both accessible to this strategy
		‹corpus-confirmed›; see <Xr ch="prenominal-gap-relative-clauses" /> for the full
		construction. A nominal in an oblique role — held by a postposition — lies outside the reach
		of gap-formation: Ainu has no mechanism for stranding a postposition in situ while extracting
		its complement as a relative-clause head
		<Ref k="keenancomrie1977" paren />; <Ref k="dalcorso2020" />.
	</p>

	<p>
		Applicative promotion removes the postposition and places the nominal at the direct-object
		tier, where gap-formation is licensed. The applied object then stands in a
		relativization-accessible position, and a prenominal relative clause can be formed with
		that applied object as its head <Ref k="kaiser1998" />; <Ref k="dalcorso2020" />. The
		following constructed example illustrates the pattern, based on the instrument applicative
		<i lang="ain-Latn">e-tuye</i> attested in Nakagawa 2024: 194 (ex. 173):
	</p>

	<Ex
		m="sirkorkamuy a=e-tuye emus"
		g="standing.tree 4.A=APPL-cut sword"
		tr="the sword with which [someone] cut the standing tree"
		constructed
		note="The head noun emus 'sword' is interpreted as the e-object (instrument) of the relative clause. A null gap occupies the applied-object position within the clause; emus appears outside as the head. The construction is possible because e- has promoted emus from the Instrument oblique tier to the Direct Object tier."
	/>

	<p>
		The same promotion operates with <i lang="ain-Latn">ko-</i>. A Goal or Addressee that would
		appear with <i lang="ain-Latn">un</i> 'to' or <i lang="ain-Latn">tura</i> 'with' can head a
		relative clause built on a <i lang="ain-Latn">ko-</i>-derived predicate. Dal Corso documents
		the construction for Southern Hokkaido texts and finds that applied objects — regardless of
		which prefix produced them — pattern identically to base transitive objects in gap-formation
		<Ref k="dalcorso2020" /> ‹corpus-confirmed›.
	</p>

	<p>
		The Keenan–Comrie hierarchy frames the typological significance: Subject > Direct Object >
		Indirect Object > Oblique > Genitive > Comparee <Ref k="keenancomrie1977" paren />. Hokkaido
		Ainu relativization is robustly accessible at Subject and Direct Object; bare Oblique is
		inaccessible; the applicative closes the gap by importing the oblique into the Direct Object
		tier. Kaiser (1998) demonstrates that the resulting applied object is treated as a
		morphosyntactic direct object in the relative clause — there is no distinct 'applied-object
		relativization' mechanism separate from ordinary object relativization
		<Ref k="kaiser1998" />. The synthesis that a single structural promotion underlies both the
		NI-feeding and the relativization-feeding paths is a proposal original to this
		grammar ‹speculative›.
	</p>
</S>

<S t="Competing analyses of the applied-object position" id="accessibility">
	<p>
		What grammatical relation the promoted nominal bears — and therefore where it sits on the
		accessibility hierarchy — is contested between two broad analytical traditions
		<Ref k="keenancomrie1977" paren />.
	</p>

	<p>
		A relational account assigns the promoted nominal the relation of direct object from the
		moment of applicative formation. The applied object inherits full direct-object properties,
		including gap-licensability and incorporability, and stands at the Object tier of the
		hierarchy. The primary supporting evidence is morphosyntactic: Ainu marks no case distinction
		between the base Patient-object and the applied object of a ditransitive — both appear as
		bare NPs, both are cross-referenced by the single O-index on the verb
		<Ref k="nakagawa2024" p="192" />; <Ref k="bugaevakobayashi2022" p="§4.1.1" />. Without a
		formal difference between the two objects, assigning them to distinct tiers of the hierarchy
		lacks morphosyntactic grounding.
	</p>

	<p>
		Baker's (1988) head-movement account treats the applicative as P-incorporation: the
		postposition moves into the verb, leaving its complement in a derived specifier position.
		The applied object's accessibility to gap-formation and incorporation would then be a
		secondary consequence of that specifier position — not a primitive direct-object property
		<Ref k="baker1988" paren />. Shibatani identifies the applicativization of intransitive bases
		in Ainu as a direct refutation: Baker's Case-theory predicts this should be impossible, yet
		it is productive in Hokkaido Ainu <Ref k="shibatani1988" p="210–211" />;
		<Ref k="shibatani1990" p="65–66" /> ‹contested›.
	</p>

	<p>
		A community observation reported in the aynu-corpora Discord is consistent with the
		relational account. The verb <i lang="ain-Latn">sir-ko-peker</i> 'spend the night' — where
		<i lang="ain-Latn">ko-</i> interrupts the derivationally closed stem
		<i lang="ain-Latn">sir-peker</i> — has been analysed (attributed to Satō, reported by
		nukopoli, 2024-12-05 <Ref k="aynucorporadiscord" />) as a construction in which the
		<i lang="ain-Latn">ko-</i>-object is promoted to the grammatical subject of the whole
		predicate: <i lang="ain-Latn">ku=sir-ko-peker</i> 'I spend the night' has the experiencer
		— originally the applied object — in the subject index position. Parallel forms
		<i lang="ain-Latn">maw-ko-wen</i> and <i lang="ain-Latn">kur-ko-tunas</i> are noted in
		the same discussion. If the <i lang="ain-Latn">ko-</i>-object can reach the subject
		position in closed-stem environments, promotion to direct object in open-stem environments
		is the weaker operation — collateral support for the relational account ‹contested›.
	</p>

	<p>
		For double-applicative verbs, both applied objects are morphosyntactically equivalent (bare
		NPs, single O-index), and both are in principle accessible to gap-formation or incorporation
		individually. Whether both can independently head distinct relative clauses within a complex
		sentence has not been investigated in the sources consulted ‹speculative›.
	</p>
</S>

<S t="The two-slot ceiling, re-applicativization, and chained feeding" id="ceiling">
	<p>
		The verb word accommodates at most two person indexes — one A-type and one O-type — so the
		ceiling on simultaneously indexed participants is two, regardless of how many applicatives
		stack <Ref k="sato2023b" p="39" />; <Ref k="bugaevakobayashi2022" p="§2" />;
		<Ref k="nakagawa2024" p="210–212" />. Extra applied objects must be reabsorbed by
		reflexivization (<A w="yay-" gl="self (direct)" /> / <A w="si-" gl="self (indirect)" />),
		incorporation, or antipassivization before the verb is finalized.
		The <i lang="ain-Latn">yay-ipe-e-ko-sunke</i> example above instantiates two reabsorption
		strategies on one verb. Bugaeva's (2014 abstract) characterization of Ainu as polysynthetic
		in Baker's sense — with the caveat that it departs from the Mohawk prototype in word order,
		in-situ <i lang="ain-Latn">wh</i>, and unrestricted morphological causatives — places this
		stacking capacity in typological perspective <Ref k="bugaeva2014" />.
	</p>

	<p>
		The feeding chain can extend across multiple derivational steps. Antipassive
		<i lang="ain-Latn">i-</i> reduces a transitive to intransitive by absorbing the object slot
		with a generic argument; re-adding an applicative restores transitive valency with a new
		object, which is then accessible to further incorporation or relativization by the same logic
		as any other applied object
		<Ref k="bugaeva2021antip" />; <Ref k="bugaevakobayashi2022" p="§4.2.3" />:
	</p>

	<Ex
		m="tokaci wa ek pewre kur monrayke e-i-kasuy"
		g="Tokachi from come young man work APPL-ANTIP-help"
		tr="A young man from Tokachi helped with the work."
		cite="bugaevakobayashi2022:§4.2.3"
		dial="SAR"
		place="Sunazawa 1983: 160; Handbook ex. 25c"
		note="i-kasuy 'do helping' (antipassive, intransitive) is re-applicativized by e- (purpose 'with work'); monrayke 'work' becomes the applied e-object, restoring transitivity. This e-object is accessible to incorporation or relativization via the standard feeding logic."
	/>

	<p>
		The chained sequence — applicative, then antipassive, then re-applicativization, then
		relativization or incorporation — is bounded only by the template order (person index |
		nominal/applicative | root | forming suffix | causative | person index;
		<Ref k="nakagawa2024" p="211" />) and the two-slot ceiling. Each step in the chain
		either adds a slot (applicative, causative) or removes one (antipassive, reflexive,
		incorporation), and the feeding paths are open whenever the net result is a nominal
		standing at the direct-object tier ‹contested›.
	</p>

	<p>
		Ijäs's Basic Lessons 3 and 9 do not cover applicative stacking or the feeding relations; the
		lessons treat <i lang="ain-Latn">i-</i> and <i lang="ain-Latn">-re</i> as independent
		operations without addressing their combination with applicatives or with relativization
		<Ref k="ijas2023" />. The learner grammar's entry point — applicatives as independent
		valency-raisers — is the correct starting place, with the stacking behavior and its
		downstream interactions belonging to advanced grammar.
	</p>
</S>
