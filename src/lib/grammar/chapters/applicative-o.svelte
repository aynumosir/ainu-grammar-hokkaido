<!-- src/lib/grammar/chapters/applicative-o.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Applied-object roles and the place restriction" id="function">
	<p>
		The prefix <A w="o-" gl="applicative: into/toward a place" /> belongs to the
		<Xr ch="applicative-system-overview">applicative</Xr> series together with
		<Xr ch="applicative-e"><A w="e-" gl="applicative e-" /></Xr> and
		<Xr ch="applicative-ko"><A w="ko-" gl="applicative ko-" /></Xr>; an overview of all three
		and their place in the arity calculus is given in <Xr ch="valency-voice-overview" />.
		Its function is to promote a place-denoting noun into the verb's argument set as a direct
		object, raising arity by one: a base intransitive becomes transitive and a base transitive
		becomes a ditransitive <Ref k="nakagawa2024" p="198–199" />; <Ref k="bugaeva2006" p="186–188" />.
		The applied object of <i lang="ain-Latn">o-</i> is always a spatial noun — a goal, a
		location, or a source — never an animate participant, which separates it from
		<i lang="ain-Latn">ko-</i> <Ref k="nakagawa2024" p="198–199" />; <Ref k="bugaeva2006" p="191" />.
	</p>

	<p>
		Bugaeva's corpus study of the Chitose and Saru dialects supplies a role breakdown for the
		applied objects of <i lang="ain-Latn">o-</i>
		<Ref k="bugaeva2006" p="191" />. All three categories resolve to postpositional expressions
		in <i lang="ain-Latn">ta</i> 'at/to' or <i lang="ain-Latn">or un</i> 'into', making
		<i lang="ain-Latn">o-</i> the only applicative whose applied object is consistently
		paraphrasable by a locative postposition. The intr-base column records how many forms in
		each role class derive from an intransitive base.
	</p>

	<table>
		<thead>
			<tr>
				<th>applied-object role</th>
				<th>%</th>
				<th>postpositional paraphrase</th>
				<th>intr-base / tr-base</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Goal (into / toward a place)</td>
				<td>57</td>
				<td><i lang="ain-Latn">ta</i> / <i lang="ain-Latn">or un</i></td>
				<td>75 / 25</td>
			</tr>
			<tr>
				<td>Location (at a place)</td>
				<td>29</td>
				<td><i lang="ain-Latn">ta</i></td>
				<td>84 / 16</td>
			</tr>
			<tr>
				<td>Source / Theme</td>
				<td>14</td>
				<td><i lang="ain-Latn">wa</i> / —</td>
				<td>100 / 0</td>
			</tr>
		</tbody>
	</table>

	<p>
		The role figures are drawn from a single Chitose/Saru corpus sample; no pan-Hokkaido
		frequency study has been conducted ‹corpus-suggested›. They are consistent with the
		claim, made by Nakagawa on the basis of text distributions, that
		<i lang="ain-Latn">o-</i> is the rarest of the three applicatives and occurs predominantly
		in verse rather than prose or conversational registers
		<Ref k="nakagawa2024" p="199" />; <Ref k="sato2008" p="244" />. Bugaeva's lexical
		frequency order is <i lang="ain-Latn">ko- &gt; e- &gt; o-</i>
		<Ref k="bugaeva2006" p="188" />. The register observation is older than either
		treatment: Fukuda already set <i lang="ain-Latn">o-</i> aside as frequent in
		伝承文学や歌 (oral literature and song) but rare in conversation, surviving there only
		in a handful of 化石化した形式 (fossilized forms) <Ref k="fukuda1956" p="fn. 16" />.
	</p>

	<p>
		The Source row of the table has lexicographic backing in Nakagawa's own dictionary:
		the entry for the prefix gives 〜〈場所〉へ・〜〈場所〉に・〜〈場所〉から (to / at / from a
		place), interchangeable with the postposition <i lang="ain-Latn">un</i>
		<Ref k="nakagawa1995" />. The ablative から sense is thus registered by Nakagawa
		himself, against the narrower goal-and-location-only formulation that Bugaeva reports
		from his earlier work <Ref k="bugaeva2006" p="191" />; the place restriction is
		unaffected — all three senses take place nouns only.
	</p>
</S>

<S t="The place restriction: spatial goals versus animate goals" id="place-restriction">
	<p>
		The restriction of <i lang="ain-Latn">o-</i>'s applied object to place nouns gives rise to
		a minimal contrast with <i lang="ain-Latn">ko-</i> that is most sharply illustrated by
		the two applicatives on the same base verb. With
		<A w="ek" gl="come (singular)" />, the difference in applied object type triggers the
		choice of prefix: the place goal takes <i lang="ain-Latn">o-</i>, the animate goal takes
		<i lang="ain-Latn">ko-</i>
		<Ref k="nakagawa2024" p="198–199" />; <Ref k="bugaeva2006" p="191" />. The full minimal
		pair and its analytical discussion are in
		<Xr ch="applicative-system-overview" s="ko-o" />.
	</p>

	<Ex
		m="tumi o-ek"
		g="war APPL-come"
		tr="War came to [the village]."
		cite="nakagawa2024:198"
		dial="CHI"
		place="Nakagawa ex. 192"
		note="The place goal (the village, contextually implicit) is the applied object licensed by o-; ek 'come' shifts from intransitive to transitive. The contrast is Nakagawa ex. 193, tumi ko-ek 'war came to [one's] sister', where the animate goal requires ko-."
	/>

	<p>
		The same pattern holds for other motion verbs. Adding <i lang="ain-Latn">o-</i> to
		<A w="arpa" gl="go" /> yields <i lang="ain-Latn">o-arpa</i> 'go to [a place]', a derived
		transitive whose place-goal applied object is paraphrasable as
		<i lang="ain-Latn">X or un arpa</i> 'go toward X (a place)' or
		<i lang="ain-Latn">X ta arpa</i> 'go to X'
		<Ref k="nakagawa2024" p="195" />. The prefixal A index confirms the arity shift to
		transitive:
	</p>

	<Ex
		m="pet ku=o-arpa"
		g="river 1SG.A=APPL-go"
		tr="I went to the river."
		constructed
		note="The place goal pet 'river' is a bare noun in direct-object position — no postposition — because o- has licensed it as a core object. The postpositional paraphrase is pet ta arpa or pet or un arpa. The prefixal 1SG.A index ku= proves the derived transitivity; compare the intransitive base ku=arpa-as (with suffixal S =as), where no place object is licensed."
	/>

	<Ex
		m="kamuy or oarpa hine ora nea menoko a=kor wa"
		g="god place APPL-go CONJ CONJ DEM woman 4.A=have CONJ"
		tr="He went to the place of the kamuy (heaven), and then took that (human) woman as his wife."
		cite="biratori1969"
		dial="SAR"
		place="Kurokawa Teshime [biratori/024/003#145]"
		note="The place goal kamuy or 'the place of the kamuy' is the applied object licensed by o- on arpa; the postposition or co-occurs with the applicative, confirming that o- promotes the locative adjunct to core-object status. The fourth-person agent a= on kor marks an unspecified agent in the narrative."
	/>
</S>

<S t="Lexicalized forms and productive use" id="lexicalization">
	<p>
		Within the attested inventory, a set of motion-verb derivatives stand as effectively
		lexicalized transitive verbs: <A w="o-arpa" gl="go to a place" />,
		<A w="o-ek" gl="come to a place" />, and <A w="o-omante" gl="send away to a place" />
		are all derived by <i lang="ain-Latn">o-</i> applicativization of the corresponding
		intransitive base and carry a stable spatial-goal reading. Their frequency in verse texts
		is higher than the productive applicative uses; Nakagawa's observation that
		<i lang="ain-Latn">o-</i> is a 'mostly verse' prefix reflects this asymmetry rather than
		a blanket restriction on productive application
		<Ref k="nakagawa2024" p="199" />.
	</p>

	<p>
		A community-proposed morphological analysis illustrates the
		<i lang="ain-Latn">o-</i> prefix in a lexicalized nominal form. The noun
		<A w="aoypep" gl="dish, food vessel" /> is analyzed as
		<i lang="ain-Latn">a=o-ipe-p</i>, in which the fourth-person agent
		<i lang="ain-Latn">a=</i>, the applicative <i lang="ain-Latn">o-</i>, the verb
		<A w="ipe" gl="eat" />, and the agent nominalizer <i lang="ain-Latn">-p</i> combine to
		yield 'the thing one eats from / into which one eats' (nukopoli, aynu-corpora Discord,
		December 2024) <Ref k="aynucorporadiscord" />. In this reading, <i lang="ain-Latn">o-</i>
		promotes the container from a locative adjunct to the direct object of
		<i lang="ain-Latn">ipe</i>, and the whole applicative clause is then nominalized to name
		the vessel. Tamura's Saru dictionary enters <i lang="ain-Latn">aoypep</i> 'food vessel'
		without morphological decomposition <Ref k="tamura1996" />; the proposed analysis is
		consistent with the semantic range of <i lang="ain-Latn">o-</i> but is not established
		in the peer-reviewed sources ‹contested›.
	</p>
</S>

<S t="The verb o, the affiliative o-, and disambiguation by arity" id="disambiguation">
	<p>
		Three distinct elements share the surface form <i lang="ain-Latn">o-</i> and require the
		arity computation for disambiguation. The applicative prefix <i lang="ain-Latn">o-</i>
		adds one argument (arity +1). The affiliative <i lang="ain-Latn">o-</i> 'the bottom/base
		of' (arity 0) fills a body-part slot while retaining its own possessor, leaving net
		valency unchanged; the full homophony set is discussed in
		<Xr ch="applicative-system-overview" s="homophony" />. The third element is the lexical
		verb <A w="o" gl="go into, be placed in" />, which is already a two-argument form in its
		base: the theme (the thing moved or placed) fills the A index position and the destination
		place fills the O index position
		<Ref k="nakagawa2024" p="212–213" />.
	</p>

	<p>
		Ijäs describes <i lang="ain-Latn">o</i> / <i lang="ain-Latn">oma</i> as a 'special
		locative-transitive' in which the subject is the thing placed and the object is the place,
		and identifies the causative form
		<A w="omare" gl="put something into a place" /> as the means of adding an external
		putter to the argument frame <Ref k="ijas2023" /> ‹consensus›. Nakagawa's analysis
		agrees: <i lang="ain-Latn">omare</i> (= <i lang="ain-Latn">oma-re</i>) is a
		three-argument ditransitive derived from the two-argument base by the productive causative
		suffix <i lang="ain-Latn">-re</i>, which promotes the theme argument to object and
		introduces the agent as the new subject
		<Ref k="nakagawa2024" p="212–213" />. The corpus attests the base verb
		<i lang="ain-Latn">o</i> with a place-denoting direct object:
	</p>

	<Ex
		m="wor a=o wa"
		g="there 4.A=put.in CONJ"
		tr="and put [them] into that [water] …"
		cite="ainukoraci1991"
		dial="SAR"
		place="Kanzaki Masayoshi, 'Nisew', Ainu Times no. 66, line 19"
		note="The locative demonstrative wor 'there/that place' is the direct object of the verb o 'put into'; the fourth-person transitive agent a= marks an unspecified agent. The context is extracting bitterness from plant ingredients by submerging them in water. The verb root o here contrasts with the applicative prefix o-, which would derive a new transitive from an intransitive base."
	/>

	<p>
		A community-proposed etymology treats the alternant <A w="oman" gl="go in, enter" /> as
		<i lang="ain-Latn">oma-n</i>, where <i lang="ain-Latn">-n</i> is an intransitivizing
		suffix parallel to other motion-verb formations (nukopoli, aynu-corpora Discord, May 2026)
		<Ref k="aynucorporadiscord" />. The proposal connects <i lang="ain-Latn">oman</i> to the
		base form <i lang="ain-Latn">o</i> and is consistent with the known
		<i lang="ain-Latn">-n</i> / <i lang="ain-Latn">-p</i> alternations on motion verbs, but
		it has not been assessed in the peer-reviewed literature ‹speculative›.
	</p>

	<p>
		The practical disambiguation test is the arity read-off: if an intransitive base acquires
		a prefixal A index after a preceding <i lang="ain-Latn">o-</i>-shaped element, the
		element is the applicative (+1); if the verb is already two-argument in its base form and
		the <i lang="ain-Latn">o</i>-initial sequence is the whole predicate, the element is the
		verb root; if arity is unchanged and the associated noun is a possessively construed
		body-part, the element is the affiliative (0)
		<Ref k="nakagawa2024" p="137, 140, 192–193" />;
		<Ref k="bugaevakobayashi2022" p="§2" />.
	</p>
</S>

<S t="Noun incorporation and allied spatial operators" id="allied">
	<p>
		Oblique place nouns cannot incorporate into the verb word directly; an applicative must
		first promote them to object status, and the derived object then becomes incorporable. For
		spatial goals and locations, <i lang="ain-Latn">o-</i> performs this promotion.
		Shibatani's word-hood test shows the result: <i lang="ain-Latn">o-tumi-osma</i> is
		unambiguously one incorporated word, because the applicative prefix could not attach to a
		bare noun, while <i lang="ain-Latn">tumi osma</i> 'the war began' is structurally
		ambiguous between a phrasal and an incorporated reading
		<Ref k="shibatani1990" p="63" />. The Mirror Principle ordering places the applicative
		inside and the incorporated noun outside, mirroring the syntactic derivation
		<Ref k="shibatani1990" p="70–71" />. The interaction between applicatives and noun
		incorporation is developed in <Xr ch="applicative-system-overview" s="stacking-productivity" />
		and in <Xr ch="noun-incorporation-object" />.
	</p>

	<p>
		A set of spatial verbs that independently select a place noun as a core object —
		including <A w="otke" gl="put, place at" /> and <A w="kamu" gl="cover" /> — presents
		cases where the applicative and causative morphology interact with the verb's spatial
		argument structure. Kobayashi (2020) examines these interactions for
		<i lang="ain-Latn">otke</i> and <i lang="ain-Latn">kamu</i> specifically and argues that
		the argument-structural properties of the place-denoting participant determine which
		valency-increasing operation is available
		<Ref k="kobayashi2020" />. These verbs and the broader spatial valency alternations
		are taken up in <Xr ch="applicative-stacking-relativization-feeding" />.
	</p>
</S>
