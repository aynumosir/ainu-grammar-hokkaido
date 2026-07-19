<!-- src/lib/grammar/chapters/abilitative-easkay-eaykap.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The abilitative set and its position in the TAM system" id="overview">
	<p>
		Hokkaido Ainu encodes ability and inability through a set of transitive verbs that
		grammaticalize as auxiliaries. Nakagawa's <span lang="ja">表75</span> inventories eight
		such forms under the label <em lang="ja">他動詞の助動詞的用法</em> 'transitive verbs used
		auxiliarially' <Ref k="nakagawa2024" p="314–319" />; Bugaeva places the same set in
		her third TAM frame beside the true auxiliaries (<i lang="ain-Latn">a</i>,
		<i lang="ain-Latn">nankor</i>) and the pair verbs
		(<i lang="ain-Latn">kor an</i>, <i lang="ain-Latn">wa an</i>), distinguished by the
		property that person affixes fall on the main verb rather than on the ability predicate
		<Ref k="bugaeva2012" p="494" />. The full architecture of these three frames is set
		out in <Xr ch="tam-overview" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>form</th>
				<th>standalone gloss</th>
				<th>auxiliary value</th>
				<th>nuance</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">easkay</i></td>
				<td>be able</td>
				<td>can, is able to</td>
				<td>general ability or possibility</td>
				<td><Ref k="nakagawa2024" p="315" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">eaykap</i></td>
				<td>be unable</td>
				<td>cannot, is unable to</td>
				<td>broad inability (lack of skill or circumstance)</td>
				<td><Ref k="nakagawa2024" p="315" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">koyaykus</i></td>
				<td>—</td>
				<td>cannot (situational)</td>
				<td>inability due to a circumstantial obstacle specifically</td>
				<td><Ref k="nakagawa2024" p="316" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">niwkes</i></td>
				<td>cannot finish</td>
				<td>cannot do to completion</td>
				<td>capacity limit; the task exceeds the agent's resources</td>
				<td><Ref k="nakagawa2024" p="316" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">etoranne</i></td>
				<td>it is tedious, troublesome</td>
				<td>finds it troublesome to; reluctant</td>
				<td>unwillingness; the agent is able but will not</td>
				<td><Ref k="nakagawa2024" p="316" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">nukuri</i></td>
				<td>—</td>
				<td>too draining to do</td>
				<td>the action is too costly or exhausting for the agent</td>
				<td><Ref k="nakagawa2024" p="316" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">amkir</i></td>
				<td>know by acquaintance</td>
				<td>have done, have experience of</td>
				<td>experiential positive</td>
				<td><Ref k="nakagawa2024" p="314" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">eramiskari</i></td>
				<td>not know</td>
				<td>have never done</td>
				<td>experiential negative</td>
				<td><Ref k="nakagawa2024" p="314" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The two highest-frequency members, <A w="easkay" gl="be able to" /> and
		<A w="eaykap" gl="be unable to" />, together rank among the most frequent modal
		forms in the corpus (<i lang="ain-Latn">easkay</i> 1,447 tokens, rank 137;
		<i lang="ain-Latn">eaykap</i> 1,237 tokens, rank 158) ‹corpus-confirmed›. The
		experiential pair <i lang="ain-Latn">amkir</i> and <i lang="ain-Latn">eramiskari</i>
		share the same constructional frame and the same lexical-negation pattern; their
		interaction with the negation system is developed in
		<Xr ch="negation-ability-cognition-predicates" />.
	</p>
</S>

<S t="The V(ka)Vt frame: morphology and the person locus" id="morphology">
	<p>
		All eight members of the set share the
		<Xr ch="tam-overview">transitive-verb-auxiliary frame</Xr>: the main predicate
		<i lang="ain-Latn">V</i> carries the person affixes, and the ability auxiliary
		<i lang="ain-Latn">Vt</i> follows it person-unmarked. This distinguishes the
		construction from the pair-verb frame (<i lang="ain-Latn">kor an</i>,
		<i lang="ain-Latn">wa an</i>), where both the main verb and the existential carry
		person affixes, and aligns it with the basic auxiliaries
		(<i lang="ain-Latn">a</i>, <i lang="ain-Latn">nankor</i>,
		<i lang="ain-Latn">easirki</i>), which are also person-unmarked
		<Ref k="nakagawa2024" p="314" />; <Ref k="bugaeva2012" p="494" /> ‹consensus›.
	</p>

	<p>
		The particle <A w="ka" gl="even, also" /> may intervene between the main verb and the
		ability auxiliary. This insertion is a feature of the entire transitive-verb-auxiliary
		class and is blocked for the basic auxiliaries <Ref k="nakagawa2024" p="314" />. Under
		inability, <i lang="ain-Latn">ka</i> functions as a scalar amplifier — adding a sense
		of 'not even' — and is especially frequent before <i lang="ain-Latn">eaykap</i> in
		subordinate and causal clauses.
	</p>

	<p>
		The morphological shape of <i lang="ain-Latn">easkay</i> and
		<i lang="ain-Latn">eaykap</i> reflects the
		<Xr ch="applicative-e"><i lang="ain-Latn">e-</i> applicative prefix</Xr>: the roots
		<A w="askay" gl="be able" /> and <A w="aykap" gl="be unable" /> also occur without
		this prefix as intransitive predicates with the same meanings
		<Ref k="nakagawa2024" p="315" />. In the auxiliary function the
		<i lang="ain-Latn">e-</i> is part of the lexical form rather than a live derivational
		operation, and person affixes go exclusively on the main verb.
	</p>

	<p>
		One additional feature separates this class from other auxiliaries: the preceding verb
		root can be incorporated directly into <i lang="ain-Latn">easkay</i>, producing a
		compound to which the person suffix then attaches as a unit:
	</p>

	<Ex
		m="sinotca-easkay=an"
		g="song.compose-be.able=4.S"
		tr="I could compose songs."
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 8(2) [aa-irc/007#380]"
		note="The verb root sinotca 'compose/perform songs' is incorporated into easkay; the fourth-person suffix =an attaches to the whole compound as a unit. The pattern parallels incorporated desideratives such as arpa=rusuy (Nakagawa 2024: 314–315)."
	/>

	<p>
		The compound <i lang="ain-Latn">sinotca-easkay</i> behaves as a single verb stem for
		person-affix attachment; the periphrastic sequence would place the affix on the main
		verb <i lang="ain-Latn">sinotca</i> alone
		<Ref k="nakagawa2024" p="314–315" />.
	</p>
</S>

<S t="easkay: ability and possibility" id="easkay">
	<p>
		<A w="easkay" gl="be able to, can" /> covers general ability — whether rooted in
		acquired skill, physical capacity, or favourable circumstance — and possibility. It
		combines with intransitive and transitive main verbs without distinction
		<Ref k="nakagawa2024" p="315" />. In the example below the main verb is intransitive
		and the scalar <i lang="ain-Latn">ka</i> 'even' intervenes:
	</p>

	<Ex
		m="aoka ka sikunu=an easkay pe ne na"
		g="we even survive=4.S be.able NMLZ COP FIN"
		tr="We too can survive."
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 8(2) [aa-irc/007#127]"
		note="The fourth-person inclusive suffix =an indexes the subject of sikunu 'survive'; easkay is person-unmarked. pe ne na nominalizes the ability clause and predicates it with the copula."
	/>

	<p>
		With a transitive main verb the person affixes reflect the standard agent–object
		alignment of that verb, and <i lang="ain-Latn">easkay</i> remains unmarked:
	</p>

	<Ex
		m="yaykata kina poka a=kar easkay hi neno"
		g="by.oneself greens just 4.A=gather be.able NMLZ since"
		tr="from when she could gather wild greens by herself"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 9 [aa-irc/009#305]"
		note="The fourth-person agent prefix a= marks the transitive verb kar 'gather'; easkay follows without any affix. The nominalized hi neno frames the ability event as a temporal onset point."
	/>

	<p>
		Both examples confirm that the ability construction is a full finite clause: it takes
		the same nominalization apparatus as any other predicate, and the ability auxiliary
		occupies the slot above the main predicate, not a bound morphological position within it.
	</p>
</S>

<S t="eaykap and koyaykus: inability distinguished by source" id="inability">
	<p>
		<A w="eaykap" gl="be unable to, cannot" /> is the dedicated negative counterpart of
		<A w="easkay" />. The relationship is lexical: inability is encoded in
		<i lang="ain-Latn">eaykap</i> as a separate form, and negating
		<i lang="ain-Latn">easkay</i> with <i lang="ain-Latn">somo</i> does not produce the
		same value <Ref k="nakagawa2024" p="315" />; <Ref k="ijas2023" /> ‹consensus›.
		<i lang="ain-Latn">eaykap</i> is semantically neutral as to whether the source of
		inability lies in the agent (lack of skill, physical incapacity) or in external
		circumstance. The scalar <i lang="ain-Latn">ka</i> 'even' frequently precedes it in
		subordinate clauses:
	</p>

	<Ex
		m="soyne=an ka eaykap kusu"
		g="go.out=4.S even be.unable because"
		tr="because I cannot go outside,"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 7 [aa-irc/005#48]"
		note="soyne 'go outside' is intransitive; =an is the fourth-person S affix; ka eaykap is the scalar-amplified inability expression in a causal clause."
	/>

	<Ex
		m="aynu mosir ka ta ney ta pakno an=an ka eaykap kusu"
		g="human land even LOC wherever LOC until exist=4.S even be.unable because"
		tr="because I cannot stay in the human realm indefinitely,"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 7 [aa-irc/005#214]"
		note="The main verb is an 'exist/stay' with fourth-person =an; ka eaykap expresses the inability to continue. The concessive ka ta 'even LOC' before the locative phrase and the second ka before eaykap are both scalar."
	/>

	<p>
		Because <i lang="ain-Latn">ka</i> occupies the slot between the main verb and
		<i lang="ain-Latn">eaykap</i>, the standard clausal negator
		<i lang="ain-Latn">somo</i> can negate the main verb without scoping over the ability
		predicate. The following example denies the main verb action, leaving
		<i lang="ain-Latn">eaykap</i> outside the scope of
		<i lang="ain-Latn">somo</i> and producing a double-negative reading:
	</p>

	<Ex
		m="somo a=ahunke eaykap pe ne na"
		g="NEG 4.A=let.in be.unable NMLZ COP FIN"
		tr="There is no way one cannot let (you) in."
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 8(2) [aa-irc/007#211]"
		note="somo negates the main verb ahunke 'let in'; eaykap 'be unable' lies outside the scope of negation, yielding the reading 'cannot not let in'. The clause-final pe ne na nominalizes and predicates the proposition."
	/>

	<p>
		The scope pattern is the same as for clause-internal negation before
		<i lang="ain-Latn">ruwe ne</i> (see <Xr ch="ruwe-ne-inferential" />): the negator
		targets the inner predicate, and the outer modal or evidential element keeps its
		position above it. The
		<Xr ch="negation-somo-standard-clausal">standard clausal negation</Xr> system
		provides the full treatment of <i lang="ain-Latn">somo</i> scope.
	</p>

	<p>
		<A w="koyaykus" /> narrows the source of inability to the situational dimension: it
		applies when the agent is in principle capable but a circumstance prevents the action,
		rather than when the agent simply lacks skill or capacity
		<Ref k="nakagawa2024" p="316" />. The contrast with
		<i lang="ain-Latn">eaykap</i> is one of reason rather than degree. Ijäs illustrates
		the distinction in a constructed example <Ref k="ijas2023" />:
	</p>

	<Ex
		m="e=ma eaykap yakun atuy or ta e=sus ka koyaykus"
		g="2SG.S=walk be.unable COND sea place LOC 2SG.S=swim even circ.unable"
		tr="If you cannot walk, you cannot even swim in the sea."
		cite="ijas2023"
		constructed
		note="Ijäs Lesson 9 constructed example. eaykap covers intrinsic inability (cannot walk); koyaykus marks a circumstantial obstacle that prevents the swimming. The scalar ka reinforces koyaykus."
	/>

	<p>
		The morphological structure of <A w="koyaykus" /> — comprising the
		<Xr ch="applicative-ko"><i lang="ain-Latn">ko-</i> applicative prefix</Xr>, the
		reflexive <i lang="ain-Latn">yay-</i>, and a root <i lang="ain-Latn">kus</i> — is
		internally visible, but the sources consulted do not derive the circumstantial-obstacle
		semantics compositionally from this decomposition
		<Ref k="nakagawa2024" p="316" /> ‹speculative›.
	</p>
</S>

<S t="Lexical negation and the negation-ability interface" id="lexical-negation">
	<p>
		The ability predicates in this set do not combine with the standard clausal negator
		<A w="somo" gl="not" />. Ability and inability are lexicalized in separate words
		rather than derived by negating a single base, and the same holds for the experiential
		pair <i lang="ain-Latn">amkir</i> / <i lang="ain-Latn">eramiskari</i>
		<Ref k="nakagawa2024" p="314–316" />; <Ref k="ijas2023" /> ‹consensus›. The pattern
		of suppletive ability lexemes — a positive predicate paired with a dedicated negative
		rather than a negated positive — is typologically widespread and consistent with the
		tendency for high-frequency ability expressions to lexicalize negation directly
		<Ref k="bybee1994" paren />.
	</p>

	<p>
		A community observation (nukopoli, aynu-corpora Discord, 2024-11-25) adds that the
		ability periphrases, including <i lang="ain-Latn">easkay</i> and its set, serve in
		the contexts where languages with infinitives would use a bare infinitival complement;
		nominalization by <i lang="ain-Latn">pe</i>, <i lang="ain-Latn">hi</i>, or
		<i lang="ain-Latn">kuni</i> substitutes when a nominal form is required, fitting the
		general head-marking profile of Ainu in which the verb always carries person
		<Ref k="aynucorporadiscord" /> ‹contested›.
	</p>

	<p>
		The relationship between the transitive-auxiliary pair
		<i lang="ain-Latn">easkay</i> / <i lang="ain-Latn">eaykap</i> and their intransitive
		roots <i lang="ain-Latn">askay</i> / <i lang="ain-Latn">aykap</i> parallels the
		<Xr ch="applicative-e">e- applicative</Xr> derivational pattern, but the auxiliary
		function is grammaticalized and the <i lang="ain-Latn">e-</i> is no longer a live
		derivation in this context <Ref k="nakagawa2024" p="315" /> ‹speculative›.
	</p>

	<p>
		The full treatment of lexical negation in ability and cognition predicates — including
		the experiential pair and the role of <i lang="ain-Latn">ka</i> strengthening
		(<i lang="ain-Latn">ka eramiskari</i>) — belongs to
		<Xr ch="negation-ability-cognition-predicates" />. The deontic-necessity forms
		(<i lang="ain-Latn">easirki</i>, <i lang="ain-Latn">kuni</i>,
		<i lang="ain-Latn">yak pirka</i>) are treated in
		<Xr ch="deontic-necessity" />, and the epistemic and intentive auxiliaries
		(<i lang="ain-Latn">nankor</i>, <i lang="ain-Latn">kusu ne</i>,
		<i lang="ain-Latn">rusuy</i>) in <Xr ch="epistemic-irrealis-modality" />.
	</p>
</S>
