<!-- src/lib/grammar/chapters/headless-internally-headed-noun-modifying-clauses.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Hokkaido Ainu builds noun-modifying clauses prenominally: a finite verb phrase precedes a
		head noun with no relative pronoun and no change to the verb's morphology; the relativized
		argument's role is recovered from a gap in argument structure and from any postpositions
		retained inside the clause <Ref k="nakagawa2024" p="503" />; <Ref k="bugaeva2015" p="47" />;
		<Ref k="shibatani1990" p="39" />. When no lexical noun is available or intended as the head,
		a member of the closed class of <Xr ch="formal-defective-nouns">formal nouns</Xr> fills
		that role, supplying a generic semantic type — 'person', 'thing', 'people', 'place', 'time'
		— while the clause itself names the referent. In continuous Hokkaido Ainu text these
		formal-noun heads appear more often than common-noun heads in relativization contexts
		<Ref k="bugaeva2015" p="47" />.
	</p>
	<p>
		Two further analytical questions organize the later sections. The first is whether any
		Hokkaido Ainu constructions approach the internally-headed pattern of noun modification —
		in which the notional head is expressed inside the modifying clause rather than outside it
		— and whether that pattern involves a form of
		<Xr ch="noun-incorporation-object">noun incorporation</Xr>. Dal Corso raises this for
		southern Hokkaido Ainu indirect evidential constructions and proposes a
		classificatory-incorporation analysis <Ref k="dalcorso2020" p="47, 51–52" />. The second
		is whether the perception-complement constructions built with possessed sensory formal nouns
		are biclausal — an external formal noun heading a relative clause — or whether they have
		grammaticalized toward monoclausal complex predicates. Both questions remain contested in
		the literature ‹contested›.
	</p>
	<p>
		The <A w="p" gl="thing (nominalizer)" /> ~ <A w="pe" gl="thing (nominalizer)" /> formal
		noun in its RC-head and complementizer uses is treated in <Xr ch="nominalization-p-pe" />;
		the gap strategy, the accessibility hierarchy, and postposition stranding in
		<Xr ch="prenominal-gap-relative-clauses" />; lexicalized forms that crystallized from
		headless relative clauses in <Xr ch="lexical-head-formal-noun-nominalization" />; and the
		evidential clause-final uses of the sensory formal nouns in
		<Xr ch="evidential-schema-overview" /> and in <Xr ch="ruwe-ne-inferential" />.
	</p>
</S>

<S t="The formal-noun inventory for headless nominalizations" id="headless-inventory">
	<p>
		The formal nouns that serve as generic heads form a compact, closed set. Nakagawa lists
		them as a distinct word class defined by weak lexical autonomy — they follow another element
		to build an NP — and shows that they carry arity −1, on a par with common nouns in their
		citation form <Ref k="nakagawa2024" p="257–258, 261–262" />. This arity value allows a
		formal noun to fill the open argument slot of a clause with total arity ≥ +1 and produce a
		headless relative-clause nominal <Ref k="nakagawa2024" p="261–262, 504" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>formal noun</th>
				<th>semantic type of head</th>
				<th>example</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">p ~ pe</i></td>
				<td>thing; person (generic)</td>
				<td><i lang="ain-Latn">a=e p</i> 'what one eats'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kur</i> (&lt; <A w="kuru" gl="person" />)</td>
				<td>person (polite)</td>
				<td><i lang="ain-Latn">ku=kor-kur</i> 'the one I have; husband'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">utar</i></td>
				<td>people (plural)</td>
				<td><i lang="ain-Latn">arki utar</i> 'the people who came'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hi ~ i</i></td>
				<td>thing, time, place (abstract)</td>
				<td><i lang="ain-Latn">oro ta cise kar hi</i> 'the place where (X) built a house'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">usi ~ uske</i></td>
				<td>place, time</td>
				<td><i lang="ain-Latn">a=nu usi</i> 'a place to ask about'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hike</i></td>
				<td>the one, side (≈ 'one that')</td>
				<td><i lang="ain-Latn">ki hike</i> 'the one that does so'</td>
			</tr>
		</tbody>
	</table>

	<p>
		Among person-type heads, <i lang="ain-Latn">p ~ pe</i> is maximally generic and extends to
		human referents with a pejorative or collective edge in those contexts;
		<i lang="ain-Latn">kur</i> (&lt; <A w="kuru" gl="person" />) selects specifically for a
		personal referent and carries a polite register. Shibatani describes
		<i lang="ain-Latn">-kur</i> as a phrasal nominalizing suffix in Classical/yukar Ainu,
		productive alongside <i lang="ain-Latn">-p(e)</i>
		<Ref k="shibatani1990" p="33–34" />:
	</p>

	<Ex
		m="ku=kor-kur"
		g="1SG.A=have-NMLZ"
		tr="the one I have; my husband"
		cite="shibatani1990:34"
		dial="HK"
		note="Classical Ainu (Itadori/Ishikari data in Shibatani 1990). The person-type suffix -kur (< kuru 'person') attaches to kor 'have' with the first-person agent prefix ku=. The result is a single morphological word."
	/>

	<p>
		The <i lang="ain-Latn">utar</i> head provides person semantics with plurality. Bugaeva's
		accessibility-hierarchy study records it as a headless head for clauses with a plural human
		referent:
	</p>

	<Ex
		m="cise soy pakno arki utar"
		g="house doorway up.to come.PL people"
		tr="the men who came up to the doorway of the house"
		cite="bugaeva2015:47"
		dial="SAR"
		note="arki is the suppletive plural of ek 'come'; 3rd-person subjects have zero person-marking, so the verb appears without a prefix. utar 'people' is the formal-noun head of the headless relative clause."
	/>

	<p>
		The <i lang="ain-Latn">p ~ pe</i> formal noun extends to human agents when context provides
		that reading. Bugaeva attests a pair of parallel headless nominals whose open argument is
		the subject of a motion verb:
	</p>

	<Ex
		m="kem sawot pe tumi sawot pe"
		g="famine flee NMLZ war flee NMLZ"
		tr="those who flee famine, those who flee war"
		cite="bugaeva2015:48"
		dial="SAR"
		note="pe heads two parallel clauses whose argument gap is the S/agent of sawot 'flee'. The thing-type nominalizer pe reads as 'person' by contextual inference; no person prefix appears because the referent is generic/3rd-person."
	/>
</S>

<S t="Headless nominalizations across the accessibility hierarchy" id="headless-accessibility">
	<p>
		The argument positions available to headless nominalizations are the same as those available
		in externally-headed relative clauses. Under the noun-phrase accessibility hierarchy of
		<Ref k="keenancomrie1977" paren />, Hokkaido Ainu relativizes subjects, agents, objects,
		and a range of obliques through the gap strategy; the alienable possessor and the standard
		of comparison resist this because of island constraints and the absence of an accessible
		comparee position respectively <Ref k="bugaeva2015" p="47–49" />. These exclusions carry
		through to the headless type: there is no headless relativization of an alienable possessor
		or a comparison standard in Bugaeva's data.
	</p>
	<p>
		For oblique participants, the governing postposition stays inside the relative clause when
		the head is a formal noun, as it would with a common-noun head. The place-type formal noun
		<i lang="ain-Latn">usi ~ uske</i> heads clauses with a locative, dative, or directional
		gap:
	</p>

	<Ex
		m="eun a=nu usi ka isam"
		g="to 4.A=hear place even NEG.exist"
		tr="there was no place to ask about"
		cite="bugaeva2015:49"
		dial="SAR"
		note="The dative/directional postposition eun 'to, about' remains inside the relative clause; usi fills the gap as the headless place-head. The fourth-person prefix a= marks a generic participant. The construction follows the same postposition-stranding pattern as an externally-headed oblique relative."
	/>

	<p>
		Nakagawa's arity accounting governs the boundary between a headless relative-clause nominal
		and the complementizer use of the same formal noun. When the clause preceding
		<i lang="ain-Latn">p ~ pe</i> or <i lang="ain-Latn">hi</i> is already saturated (arity 0),
		the formal noun nominalizes the event or fact as a whole rather than filling a participant
		gap <Ref k="nakagawa2024" p="261–262, 507" />. The complementizer use is treated in
		<Xr ch="nominalized-complements-control-raising" /> and for
		<i lang="ain-Latn">p ~ pe</i> specifically in <Xr ch="nominalization-p-pe" />.
	</p>
</S>

<S t="The appositive construction and the GNMCC question" id="perception-appositive">
	<p>
		Shibatani identifies a distinct pattern in Classical/yukar Ainu that he calls the
		<em>appositive construction</em>: a clause followed by a bare sensory noun in its
		concept form — without the possessive suffix — where the noun names the perceptual
		character of the event described by the clause
		<Ref k="shibatani1990" p="41" />:
	</p>

	<Ex
		m="aynu ek hum"
		g="person come sound"
		tr="the sound of a man's coming"
		cite="shibatani1990:41"
		dial="HK"
		note="Classical Ainu (Itadori/Ishikari data). The bare concept form hum 'sound' — not the possessed hum-i — takes the preceding clause as its content. Shibatani reads this as a construction intermediate between a relative clause and an evidential nominalization."
	/>

	<Ex
		m="okkayo cis sir"
		g="man cry appearance"
		tr="a sight of a man's crying"
		cite="shibatani1990:41"
		dial="HK"
		note="Again the bare concept form sir 'appearance', not the possessed siri. Compare the evidential siri ne, where the possessed form sir-i heads the clause-final nominalization and is closed by the copula ne."
	/>

	<p>
		In the standard description of the Saru/Chitose perception-complement construction, the
		sensory noun carries the possessive suffix — <i lang="ain-Latn">haw-e</i> 'the voice
		of—', <i lang="ain-Latn">sir-i</i> 'the appearance of—', <i lang="ain-Latn">hum-i</i>
		'the sensation of—' — and the suffix cross-references the preceding finite clause as the
		implicit possessor <Ref k="sato2008" p="175–178" />; <Ref k="nakagawa2024" p="508" />.
		On that analysis the construction is an externally-headed formal-noun relative clause: the
		head carries arity −1, the possessed suffix makes the semantic link between head and clause
		overt, and the possessed formal noun is then an argument of the matrix perception verb or
		the copula.
	</p>
	<p>
		Bugaeva's relativization study and Dal Corso's subsequent work both observe a distributional
		difference when the sensory noun appears in its bare (non-possessed) form alongside an
		existential or posture verb: <i lang="ain-Latn">hum as</i> 'there is a sensation of',
		<i lang="ain-Latn">siri an</i> 'there is an appearance of'
		<Ref k="bugaeva2015" p="100" />; <Ref k="dalcorso2020" p="52" />. In this variant the
		possessed link that sustains the external-RC analysis is absent. Bugaeva reads the
		distribution as showing characteristics of a general noun-modifying clause construction
		(GNMCC) — a type in which a nominal element classifies the clause referent from inside
		rather than standing as an external head:
	</p>

	<Ex
		m="pirka aynu a=ne hum as"
		g="good person 4.A=COP sound exist"
		tr="(someone) felt like a good person"
		cite="bugaeva2015:100"
		dial="SAR"
		note="The bare hum 'sound/sensation' (not the possessed hum-i) combined with the existential as 'stand/exist'. Bugaeva reads this as an emerging GNMCC pattern in which hum classifies the type of sensation rather than heading a gapped external relative clause. Dal Corso 2020: 52 cites the same distributional contrast in his structural analysis."
	/>

	<p>
		The possessed and non-possessed variants have different distributional profiles: the
		possessed head functions as an argument of a matrix perception verb
		(e.g. <A w="nukar" gl="see" />, <A w="nu" gl="hear" />), while the bare-noun variant
		appears as a predication in its own right, typically clause-final. Whether the distributional
		difference warrants a distinct structural analysis — GNMCC versus external RC — or reflects
		a stage of bleaching along the same grammaticalization cline is not settled by the sources
		accessible here ‹corpus-suggested›.
	</p>
</S>

<S t="Dal Corso's internally-headed RC and classificatory-incorporation proposal" id="ihrc-proposal">
	<p>
		Dal Corso develops the GNMCC observation into a formal structural claim specific to the
		indirect evidential constructions of southern Hokkaido Ainu. He argues that
		<i lang="ain-Latn">siri ki</i>, <i lang="ain-Latn">siri an</i>,
		<i lang="ain-Latn">hawe as</i>, and <i lang="ain-Latn">humi as</i> are instances of
		internally-headed relative clauses (IHRCs) in which the sensory noun is incorporated
		into the event clause as a classifier rather than serving as an external head
		<Ref k="dalcorso2020" p="47, 51–52" />. The proposal comprises two components: (i) an
		IHRC claim — the notional head is expressed inside the modifying clause — and (ii) a
		classificatory noun incorporation (CNI) claim — the mechanism is a type of noun
		incorporation in which the incorporated noun classifies the event described by the clause
		<Ref k="dalcorso2020" p="52" />.
	</p>
	<p>
		The argument turns on the contrast between direct and indirect evidential pairs. The
		direct forms (<i lang="ain-Latn">siri ne</i>, <i lang="ain-Latn">hawe ne</i>,
		<i lang="ain-Latn">humi ne</i>) carry the possessive suffix and close with the copula
		<i lang="ain-Latn">ne</i>; the possessive suffix cross-references the preceding clause as
		the possessor, sustaining an external-RC analysis. The indirect forms replace
		<i lang="ain-Latn">ne</i> with existential or posture verbs (<i lang="ain-Latn">an</i>,
		<i lang="ain-Latn">as</i>, <i lang="ain-Latn">ki</i>), and the sensory noun appears
		without possessive morphology; Dal Corso reads the absence of possessive marking as a
		diagnostic that the sensory noun is incorporated into the clause as a classifier rather
		than standing as an external head outside it <Ref k="dalcorso2020" p="51–52" />.
	</p>
	<p>
		The analysis has not been adopted by Bugaeva, Satō, or Nakagawa in their accounts of
		Hokkaido Ainu ‹contested›. Bugaeva's relativization study treats the same perception
		complements as noun-complement structures where the possessed nominal head cross-references
		the clause as a whole, and characterizes the non-possessive variant as an emerging GNMCC
		pattern rather than a settled IHRC structure
		<Ref k="bugaeva2015" p="79, 92, 100" />. Nakagawa and Satō describe the sensory formal
		nouns as complementizers of the perception domain without positing an IHRC subcase
		<Ref k="nakagawa2024" p="508" />; <Ref k="sato2008" p="175–178" />. The CNI claim further
		intersects with the broader question of what constitutes noun incorporation in a language
		where the nominalization-to-lexicalization cline already accounts for many apparent
		incorporation effects; the incorporation dimension is taken up in
		<Xr ch="noun-incorporation-object" />.
	</p>
	<p>
		The wider biclausal-versus-monoclausal question — whether <i lang="ain-Latn">[clause]
		ruwe ne</i>, <i lang="ain-Latn">[clause] hawe ne</i>, and their kin are biclausal (an
		external formal noun heading the preceding clause, the copula predicating the result:
		<Ref k="tamura2000" p="227" />; <Ref k="sato2008" p="175" />) or are grammaticalizing
		toward monoclausal complex predicates (<Ref k="bugaeva2016" p="306–315" />;
		<Ref k="dalcorso2018" p="24–25" />) — is addressed with its evidence in
		<Xr ch="nominalization-p-pe" /> and <Xr ch="ruwe-ne-inferential" />. No constituency
		proof in the sources available here settles the question ‹contested›.
	</p>
</S>

<S t="The nominalization-to-lexicalization cline" id="nominalization-lexicalization">
	<p>
		Headless relative clauses sit at one end of a cline whose other end is a lexical noun.
		Bugaeva documents a set of Hokkaido Ainu nouns that crystallized historically from
		<i lang="ain-Latn">[VP]–p</i> or <i lang="ain-Latn">[VP]–i</i> nominalizations
		<Ref k="bugaeva2016" p="240–251" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>lexicalized noun</th>
				<th>historical source (morphemes)</th>
				<th>meaning</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><A w="aep" gl="food" /> (&lt; <i lang="ain-Latn">a=e-p</i>)</td>
				<td>4.A=eat-NMLZ</td>
				<td>'food' (lit. 'thing one eats')</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ci=ronnu-p</i></td>
				<td>1PL.A=kill-NMLZ</td>
				<td>'fox' (lit. 'things we kill')</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ape-o-i</i></td>
				<td>fire-enter-NMLZ</td>
				<td>'hearth' (lit. 'place where fire enters')</td>
			</tr>
		</tbody>
	</table>

	<p>
		These forms illustrate Bugaeva's Stage II of Hokkaido Ainu nominalization development: a
		nominalizing word follows a full finite clause and the result gradually freezes into a noun,
		the clause eventually compressing into a stem <Ref k="bugaeva2016" p="243, 385–397" />.
		The productive synchronic counterpart is the headless RC with
		<A w="p" gl="thing (nominalizer)" /> ~ <A w="pe" gl="thing (nominalizer)" />; the line
		between productive construction and lexicalized noun is determined by morphological
		productivity <Ref k="shibatani1990" p="33–34" />.
	</p>
	<p>
		Nakagawa's diagnostic distinguishes an active relative-clause nominalization from a compound
		noun: the nominalization retains the postposition or applicative that marks the head's
		semantic role inside the clause, while a compound leaves the relation between its members
		lexically implicit. The contrast with instruments is sharpest:
		<i lang="ain-Latn">a=e-suke-p</i> 'kitchen utensil' retains the applicative
		<i lang="ain-Latn">e-</i> that licenses the instrument, whereas the plain compound
		<i lang="ain-Latn">sukemakiri</i> 'kitchen knife' does not
		<Ref k="nakagawa2024" p="506–507" />. The lexicalized inventory is treated in
		<Xr ch="lexical-head-formal-noun-nominalization" />.
	</p>
	<p>
		Ijäs observes that place nouns such as <A w="ipeusi" gl="restaurant" /> derive historically
		from headless relative clauses with <A w="usi" gl="place" /> as the head, and that
		lexicalized <i lang="ain-Latn">usi</i>-type nouns need no accompanying relational noun when
		used synchronically, unlike the productive headless-RC construction
		<Ref k="ijas2023" />; <Ref k="nakagawa2024" p="258" />. The observation fits Bugaeva's
		Stage-II account and the productive/fossilized distinction Nakagawa draws
		<Ref k="bugaeva2016" p="245–251" />.
	</p>
	<p>
		Dal Corso's CNI proposal connects the cline back to the IHRC discussion. If the bare
		sensory noun in the indirect evidential constructions is an incorporated classifier, it
		occupies an inside-clause position analogous to the nominalizing element in the
		lexicalization cline, rather than the external-head position of the possessed formal noun.
		The proposal would extend the incorporation-nominalization interface already visible in the
		lexicalized nouns above to a productive grammatical construction, making classificatory
		incorporation a third strategy alongside externally-headed and headless relative clauses.
		Whether this extension is warranted by the southern Hokkaido data, or whether the indirect
		evidential constructions are better handled as partial grammaticalization of the
		external-RC pattern, is among the questions Dal Corso raises without fully settling
		<Ref k="dalcorso2020" p="52" /> ‹contested›.
	</p>
</S>
