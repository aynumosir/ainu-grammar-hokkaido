<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Transnumerality: nouns unspecified for number" id="transnumerality">
	<p>
		Hokkaido Ainu nouns carry no grammatical number. A bare noun names a referent without
		specifying whether one or several are intended: <A w="suma" gl="stone" /> is the form for
		'a stone', '(the) stone', and 'stones' alike; the same holds for
		<A w="cep" gl="fish" />, <A w="cise" gl="house" />, and
		<A w="kamuy" gl="spirit, deity" /> <Ref k="nakagawa2024" p="259" />;
		<Ref k="kindaichi1936" p="30" />. In Corbett's typology this is the <em>transnumeral</em>
		pattern: the noun is underspecified for number rather than syncretically encoding a
		singular or plural value through a single form
		<Ref k="corbett2000" p="9–11" paren />. Obligatory singular/plural agreement of the kind
		found in English or French is absent.
	</p>

	<Ex
		m="suma"
		g="stone"
		tr="a stone / the stone / stones"
		note="The bare transnumeral form; no morphological distinction between singular and plural readings."
		constructed
	/>

	<p>
		Plurality may be made explicit by the
		<Xr ch="formal-defective-nouns">formal noun</Xr>
		<A w="utar" gl="plural; relatives, people" />, but this addition is strictly optional. In
		the 209,878-sentence Hokkaido corpus <i lang="ain-Latn">utar</i> records 8,051 tokens
		(rank 30 among distinct types) — high frequency reflecting pragmatic salience, not
		grammatical compulsion ‹corpus-confirmed›.
	</p>
</S>

<S t="The formal noun utar — distributional status" id="utar-formal-noun">
	<p>
		<i lang="ain-Latn">utar</i> belongs to the closed class of formal nouns — weakly
		autonomous items that form an NP only when preceded by another element
		<Ref k="nakagawa2024" p="257–258" />; <Ref k="nakagawa2022pos" p="481–482" />. Its
		syntactic distribution is uniquely wide within that class. Whereas
		<i lang="ain-Latn">hi</i> ('thing/matter') takes only a VP host, and
		<i lang="ain-Latn">p/pe</i> ('thing/one') takes a VP or prenominal,
		<i lang="ain-Latn">utar</i> follows a VP, a bare common noun, or a prenominal — the
		only formal noun that can immediately follow a noun without an intervening predication
		<Ref k="nakagawa2024" p="258" />; <Ref k="nakagawa2022pos" p="482" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>formal noun</th>
				<th>meaning</th>
				<th>follows VP</th>
				<th>follows bare NP</th>
				<th>follows prenominal</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">hi</i></td>
				<td>thing / matter / time</td>
				<td>✓</td>
				<td>✗</td>
				<td>✗</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">p/pe</i></td>
				<td>thing / one</td>
				<td>✓</td>
				<td>✗</td>
				<td>✓</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kur</i></td>
				<td>person</td>
				<td>✓</td>
				<td>✗</td>
				<td>✓</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">utar</i></td>
				<td>plural / people</td>
				<td>✓</td>
				<td><strong>✓</strong></td>
				<td>✓</td>
			</tr>
		</tbody>
	</table>

	<p>
		Sources: <Ref k="nakagawa2024" p="257–258" />; <Ref k="nakagawa2022pos" p="482" />.
	</p>

	<p>
		When following a bare noun, <i lang="ain-Latn">utar</i> adds a collective or associative
		plural reading without predicational content:
	</p>

	<Ex
		m="cikap-po utar"
		g="bird-DIM ASS"
		tr="small birds"
		cite="nakagawa2024:258"
		dial="SAR"
		note="Bare-NP host: cikappo is a noun; utar follows directly without a finite predicate. Nakagawa ex. 333."
	/>

	<p>
		The broader distribution of formal nouns is treated in
		<Xr ch="formal-defective-nouns" />. For the <i lang="ain-Latn">p/pe</i> nominalizer
		in clausal contexts see <Xr ch="nominalization-p-pe" />.
	</p>
</S>

<S t="Semantics: associative reading and the animacy debate" id="animacy-debate">
	<p>
		The meaning of <i lang="ain-Latn">utar</i> in pluralizing use is associative rather than
		strictly additive. Kindaichi and Chiri's example <i lang="ain-Latn">acha utar arki</i>
		translates as 'uncle and his group came', not 'several uncles came': the form implies a
		cluster of associates gathered around the named referent, potentially including members of
		different categories
		<Ref k="kindaichi1936" p="30" />. Ijäs's pedagogical grammar presents the same
		associative reading <Ref k="ijas2023" />.
	</p>

	<p>
		Whether <i lang="ain-Latn">utar</i> is restricted to animate referents is a genuine
		disagreement ‹contested›. Kindaichi and Chiri state that <i lang="ain-Latn">utar</i>
		applies to persons and animals (<i lang="ain-Latn">kamuy utar</i>,
		<i lang="ain-Latn">ainu utar</i>, <i lang="ain-Latn">seta utar</i> 'dogs',
		<i lang="ain-Latn">cikap utar</i> 'birds'), and that
		<i lang="ain-Latn">suma utar</i> 'stones' and <i lang="ain-Latn">ni utar</i> 'trees'
		are disallowed unless the referent is personified
		<Ref k="kindaichi1936" p="30–31" />. Nakagawa, working from Saru material, takes the
		opposite position: <i lang="ain-Latn">utar</i> freely pluralizes inanimates
		(<i lang="ain-Latn">suma utar</i>, <i lang="ain-Latn">ni utar</i>,
		<i lang="ain-Latn">rus utar</i> 'furs', <i lang="ain-Latn">coypep utar</i>
		'lacquerware'), the extension to all entities motivated by the animist conception that
		every being carries a spirit <Ref k="nakagawa2024" p="259" />. The Saru corpus attests
		inanimate <i lang="ain-Latn">utar</i> directly:
	</p>

	<Ex
		m="a=kor rus utar"
		g="4.A=have fur ASS"
		tr="(one's) furs"
		cite="biratori1969"
		dial="SAR"
		place="Kawakami Matsuko, 'Sisam ni nare ta oyaji' (1986); National Ainu Museum archive [nam-archive/kawakami-minwa/13]"
		note="utar on the inanimate host rus 'fur/pelt' — corpus evidence against the animacy restriction. Corresponds to Nakagawa 2024: 259 ex. 334."
	/>

	<p>
		The discrepancy most likely reflects dialect variation rather than a uniform pan-Hokkaido
		norm: the animacy restriction appears stronger in eastern and classical-norm speech,
		while Saru extends <i lang="ain-Latn">utar</i> to inanimates within the animist
		conceptual frame. The two textbook illustrations do not fare alike in the corpus:
		<i lang="ain-Latn">suma utar</i> 'stones' does not occur, but
		<i lang="ain-Latn">ni utar</i> 'trees' does, in a Saru/Chitose prose report —
		<i lang="ain-Latn">nítay or ta ni utar ka poronno a=momka</i> 'in the forest many
		trees too were swept away'. The inanimate extension therefore has attested support,
		thin though it is: two occurrences against none for the stone example
		‹corpus-confirmed›.
	</p>

	<Ex
		m="hinak wa arki wen cikap-po utar"
		g="where from come.PL bad bird-DIM ASS"
		tr="the bad little birds that had come from somewhere"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, 'uwepeker minwa 15'; ILCAA Ainu materials [aa-irc/022]"
		note="utar follows the diminutive-marked noun cikappo 'small bird' as an animate host."
	/>
</S>

<S t="The lexicalized plural hekattar" id="hekattar">
	<p>
		One nominal has grammaticalized a dedicated plural form through phonological fusion with
		<i lang="ain-Latn">utar</i>: <A w="hekaci" gl="child" /> + <i lang="ain-Latn">utar</i>
		contracts to <A w="hekattar" gl="children" />, which serves as the fixed plural of
		'child' <Ref k="kindaichi1936" p="31" />; <Ref k="nakagawa2024" p="259" />. The corpus
		records 297 tokens of <i lang="ain-Latn">hekattar</i> (rank 509), confirming
		lexicalization ‹corpus-confirmed›. The fused form can itself be followed by another
		<i lang="ain-Latn">utar</i> — <i lang="ain-Latn">hekattar utar</i> — for additional
		collective emphasis <Ref k="kindaichi1936" p="31" />.
	</p>

	<Ex
		m="inne hekattar arki"
		g="many child-ASS come.PL"
		tr="many children came"
		cite="kindaichi1936:31"
		dial="HK"
		note="hekattar is the lexicalized fusion of hekaci + utar. The suppletive plural verb arki cross-indexes a plural subject. Kindaichi & Chiri §37."
	/>

	<p>
		A separate nominal strategy for inherent plurality is reduplication:
		<i lang="ain-Latn">chaichai</i> 'twigs', <i lang="ain-Latn">kaukau</i> 'hailstones',
		<i lang="ain-Latn">kankan</i> 'intestines', and <i lang="ain-Latn">ramram</i> 'scales'
		carry plural semantics through their reduplicated structure without requiring
		<i lang="ain-Latn">utar</i>
		<Ref k="kindaichi1936" p="31" />. These are lexicalized; reduplication is not a
		productive synchronic plural strategy. The productive resource for ad hoc pluralization
		remains <i lang="ain-Latn">utar</i> or the verbal number morphology described in
		<Xr ch="suppletive-verbal-number" />.
	</p>
</S>

<S t="utar and utari(hi): the form–meaning distinction" id="utar-utari">
	<p>
		The string <i lang="ain-Latn">utar</i> covers two related but functionally distinct
		items. The first is the formal noun pluralizer described above. The second is a full
		common noun meaning 'relatives, kin, companions', with its own
		<Xr ch="concept-form-affiliative-form">affiliative form</Xr>
		<A w="utari" /> (long form <i lang="ain-Latn">utarihi</i>), which surfaces under
		possession <Ref k="nakagawa2024" p="250–252" />:
	</p>

	<Ex
		m="ku=kor utari"
		g="1SG.A=have kin"
		tr="my relatives / my family"
		note="utari is the affiliative form of utar 'relatives/group'; ku=kor is the alienable-possession construction. The first-person referent is not included in the group (Nakagawa 2024: 251)."
		constructed
	/>

	<p>
		The referential scope of <i lang="ain-Latn">k=utari</i> is strictly third-person: in
		<i lang="ain-Latn">k=utari ku=tura</i> 'I took my family', the speaker does not belong
		to the group named. Likewise, <i lang="ain-Latn">a=utari opitta totek wa oka</i> 'is
		your family all well?' takes a third-person verb because the referent is the addressee's
		relatives, not an inclusive 'you all' <Ref k="nakagawa2024" p="251" />. The
		<i lang="ain-Latn">-utari</i> that enters Tokachi <i lang="ain-Latn">anutari</i> 'we
		(inclusive)' combined with a fourth-person verb edges toward pronominal function —
		Nakagawa characterises the form as 'halfway between pronoun and common noun'
		<Ref k="nakagawa2024" p="252" /> — but the full treatment of pronominal
		<i lang="ain-Latn">-utari</i> belongs to
		<Xr ch="independent-personal-pronouns" />.
	</p>

	<p>
		The corpus records 1,501 tokens of <i lang="ain-Latn">utari</i> (rank 130), mainly as
		a possessed group or kinship noun. Community analysis has proposed that the affiliative
		form is nearly obligatory in this function because 'companions belonging to no one' is
		semantically anomalous — the noun almost always surfaces possessed
		<Ref k="aynucorporadiscord" /> (thegodofneet, 2025) ‹contested›. This aligns with the
		general behaviour of the affiliative form across the Ainu noun paradigm: the possessed
		shape presupposes a contextually available referent to which the named entity belongs
		<Ref k="nakagawa2024" p="251–252" />.
	</p>

	<Ex
		m="okkaypo utari ne yakka"
		g="young.man group COP even.though"
		tr="even though they are young men"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, 'uwepeker minwa 7'; ILCAA Ainu materials [aa-irc/005]"
		note="utari in a collective predication: 'young men (as a group)'. Extract from a larger sentence; ne is the copula."
	/>

	<p>
		The semantics of <i lang="ain-Latn">utar</i> as a common noun extends to kinship idioms.
		<i lang="ain-Latn">utar ni nare</i> 'become <i lang="ain-Latn">utar</i> with someone'
		carries the meaning 'to marry (into a family)', since marriage incorporates one into a
		kin group <Ref k="aynucorporadiscord" /> (thegodofneet, 2025) ‹corpus-suggested›.
		Kinship compounds on <i lang="ain-Latn">-utari</i> can also name a pair rather than a
		plurality of the base: <i lang="ain-Latn">onautari</i> and
		<i lang="ain-Latn">unuutari</i> (literally 'father-group' and 'mother-group') denote
		'parents' collectively <Ref k="aynucorporadiscord" /> (nukopoli, 2026)
		‹corpus-suggested›. For kinship-term morphology in detail see
		<Xr ch="kinship-honorific-possession" />.
	</p>
</S>

<S t="Locus of plurality: utar vs verbal number" id="verbal-number">
	<p>
		When plurality is information-structurally relevant, Hokkaido Ainu has two independent
		resources: nominal <i lang="ain-Latn">utar</i> and the verb's own number morphology —
		suppletive stem alternations (<i lang="ain-Latn">ek</i> /
		<i lang="ain-Latn">arki</i> 'come', <i lang="ain-Latn">arpa</i> /
		<i lang="ain-Latn">paye</i> 'go') and the plural suffix
		<i lang="ain-Latn">-pa</i> <Ref k="nakagawa2024" p="141–159" />. The two are
		independent: a noun phrase can carry <i lang="ain-Latn">utar</i> without triggering a
		plural verb, and a plural verb can appear without nominal
		<i lang="ain-Latn">utar</i>. Certain mass-like nouns — <i lang="ain-Latn">supuya</i>
		'smoke', <i lang="ain-Latn">hura</i> 'smell' — consistently govern plural verb forms
		(<i lang="ain-Latn">supuya at</i>, <i lang="ain-Latn">hura at</i>) even without
		<i lang="ain-Latn">utar</i>, encoding the diffuse nature of the referent at the verb
		rather than the noun <Ref k="kindaichi1936" p="31" />.
	</p>

	<p>
		The plural verb stem is also sensitive to quantitative context. Small, specified counts
		(two, three) regularly co-occur with the singular stem
		(<i lang="ain-Latn">tu hekaci ek</i> 'two children came'), while large or unspecified
		quantities take the plural stem (<i lang="ain-Latn">inne hekattar arki</i> 'many
		children came'); uncountable referents remain with the singular stem even alongside
		'many' <Ref k="aynucorporadiscord" /> (nukopoli, 2024; attributed to Satō)
		‹corpus-suggested›. On transitive verbs the plural stem tracks plurality of the
		<em>object</em>, following the absolutive-aligned pattern:
		<i lang="ain-Latn">rayke</i> (singular object) / <i lang="ain-Latn">ronnu</i> (plural
		object) <Ref k="aynucorporadiscord" /> (nukopoli, 2023) ‹corpus-confirmed›. These
		agreement thresholds and the S/O alignment of verbal number are developed in
		<Xr ch="person-number-interactions" /> and <Xr ch="suppletive-verbal-number" />.
	</p>

	<p>
		In verse, speakers sometimes apply <i lang="ain-Latn">utar</i> to a semantically
		singular referent for metrical reasons, or omit it from a clearly plural one —
		evidence that the form adds meaning rather than enforcing obligatory number agreement
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024) ‹contested›.
	</p>
</S>

<S t="Sakhalin contrast" id="sakhalin-contrast">
	<p>
		The Sakhalin varieties develop the cognate of <i lang="ain-Latn">utar</i> into a more
		morphologically explicit system. West Sakhalin has a suffix
		<i lang="ain-Latn">-(a)hcin</i> (East <i lang="ain-Latn">-(a)hsin</i>) attaching to
		the affiliative form of the noun — <i lang="ain-Latn">eci=setaha-hcin</i> 'your dogs',
		<i lang="ain-Latn">an=niyehe-hcin</i> 'our firewood' — alongside
		<i lang="ain-Latn">-utara</i> as a separate suffix
		<Ref k="murasaki1979" p="85" />; <Ref k="nakagawa2024" p="259–261" />.
		Sakaguchi distinguishes the two Sakhalin suffixes: <i lang="ain-Latn">-(a)hcin</i>
		marks a homogeneous plural (all members standing in the same possessive relation),
		while <i lang="ain-Latn">-utara</i> may mark homogeneous or approximative plurality
		and extends to personal names <Ref k="sakaguchi2024" p="12" />; <Ref k="baek2021"
			p="73"
		/>. Despite the richer morphology, Sakhalin number remains optional and non-obligatory:
		<i lang="ain-Latn">-(a)hcin</i> can attach even to nominalized clauses, so Sakhalin
		too lacks a grammatical number category in the strict typological sense
		<Ref k="nakagawa2024" p="261" />. An etymology linking Sakhalin
		<i lang="ain-Latn">utah</i> to Hokkaido <i lang="ain-Latn">utar</i> through historical
		final <i lang="ain-Latn">*r</i> has been proposed but is disputed on
		comparative-phonological grounds
		<Ref k="aynucorporadiscord" /> (antitwilight, 2024) ‹contested›.
	</p>
</S>
