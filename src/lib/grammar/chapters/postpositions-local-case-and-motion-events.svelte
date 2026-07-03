<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Two classes of adpositional elements" id="overview">
	<p>
		Hokkaido Ainu marks local relations — location, source, goal, and path — through two
		formally distinct classes. Satō groups both under the label <em>postpositions</em>
		(後置詞) and draws a sharp internal split: <em>case particles</em> (格助詞) require a
		preceding locative nominal (a ⟨place⟩-type noun) and are bound to it; <em>postpositional
		adverbs</em> (後置副詞) are distributionally autonomous, take any preceding nominal, and
		several carry person prefixes of their own
		<Ref k="sato2008" p="34–36" />; <Ref k="nakagawa2024" p="280, 294–296" />.
		Ijäs 2023 presents the same two-class organization <Ref k="ijas2023" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>property</th>
				<th>case particle (格助詞)</th>
				<th>postpositional adverb (後置副詞)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>requires ⟨place⟩ head?</td>
				<td>yes (the four local ones)</td>
				<td>no — takes any NP (<i lang="ain-Latn">unarpe eun</i> 'to auntie')</td>
			</tr>
			<tr>
				<td>can open a phrase alone?</td>
				<td>no (bound; needs an antecedent)</td>
				<td>yes (<i lang="ain-Latn">eun k=arpa</i> 'I go there')</td>
			</tr>
			<tr>
				<td>takes object person prefix?</td>
				<td>no</td>
				<td>some do: <i lang="ain-Latn">en=akkari</i> 'more than me',
				<i lang="ain-Latn">i=os</i> 'after me'</td>
			</tr>
			<tr>
				<td>core members</td>
				<td><i lang="ain-Latn">ta, wa, un, peka, ne</i></td>
				<td><i lang="ain-Latn">ani, tura, kari, pakno, akkari, eun, os …</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		The structural pivot of the case-particle system is the locative noun
		<A w="or" gl="place, interior of" /> (long form <A w="oro" gl="place, interior of" />),
		which converts a common noun into a ⟨place⟩-argument able to take a case particle:
		<i lang="ain-Latn">atuy or un</i> 'to the sea' (<i lang="ain-Latn">atuy</i> 'sea' +
		<i lang="ain-Latn">or</i> 'place-of' + <i lang="ain-Latn">un</i> allative). Its syntax
		and possessed morphology are examined in <Xr ch="relational-and-spatial-nouns" />;
		the inalienability of locative nouns is set out in <Xr ch="alienable-inalienable-split" />.
	</p>
</S>

<S t="Case particles" id="case-particles">
	<p>
		Nakagawa identifies six case particles for the Saru baseline
		<Ref k="nakagawa2024" p="296–303" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>particle</th>
				<th>case name</th>
				<th>gloss</th>
				<th>⟨place⟩?</th>
				<th>notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">ta</i></td>
				<td>locative 位格</td>
				<td>at, in, on; arrival goal; temporal</td>
				<td>yes</td>
				<td>with basic <i lang="ain-Latn">or</i> fuses to <i lang="ain-Latn">otta</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">wa</i></td>
				<td>ablative 起点格</td>
				<td>from (source); <i lang="ain-Latn">wano</i> (temporal source)</td>
				<td>yes</td>
				<td>marks source, not path; path through a route uses <i lang="ain-Latn">kari</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">un</i></td>
				<td>allative 向格</td>
				<td>to, toward</td>
				<td>yes</td>
				<td>dialect-split: <i lang="ain-Latn">un</i> (日高西部–西), <i lang="ain-Latn">en</i>
				(日高東部–十勝), <i lang="ain-Latn">(e)ne</i> (道東・石狩)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">peka</i></td>
				<td>perlative 経由格</td>
				<td>through, over, around (a spread area)</td>
				<td>yes</td>
				<td>variant <i lang="ain-Latn">pekano</i>; requires ⟨place⟩ unlike postpositional adverb <i lang="ain-Latn">kari</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ne</i></td>
				<td>translative 転成格</td>
				<td>as, become</td>
				<td>no</td>
				<td>also links numerals to copular predication; see <Xr ch="copula-ne-predicate-nominals" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">un</i> (adnominal)</td>
				<td>adnominal/genitive 連体格</td>
				<td>of, belonging to</td>
				<td>(yes)</td>
				<td>pan-HA invariant; etymologically distinct from allative <i lang="ain-Latn">un</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		The locative <A w="ta" gl="at, in, on" /> covers both existence-location
		(<i lang="ain-Latn">ta</i> with an existential verb) and arrival goal
		(<i lang="ain-Latn">ta</i> as the endpoint of a motion event), and also marks temporal
		reference-points <Ref k="nakagawa2024" p="296–297" />:
	</p>

	<Ex
		m="cip pet-ka ta an"
		g="boat river-top LOC exist"
		tr="The boat is on the river."
		cite="sato2008:37"
		dial="CHI"
		note="pet-ka = river-surface (the locative noun ka 'top/surface' heads the ⟨place⟩ phrase). Locative ta marks existence at a location."
	/>

	<Ex
		m="tanto Ukurmem ta ku=sirepa"
		g="today Ukurmem LOC 1SG.A=arrive"
		tr="Today I arrived at Ukurmem."
		cite="sato2008:37"
		dial="CHI"
		note="Locative ta marks the endpoint of arrival, identical in form to existence-location ta."
	/>

	<p>
		The ablative <A w="wa" gl="from (source)" /> marks the source of a motion event, not
		the path traversed. Nakagawa draws this directly: going out through a door or window
		requires the postpositional adverb <A w="kari" gl="through, via" />, not
		<i lang="ain-Latn">wa</i> <Ref k="nakagawa2024" p="297" />. The temporal source form
		<i lang="ain-Latn">wano</i> extends the same locative source semantics into the time
		domain:
	</p>

	<Ex
		m="nupuri or wa a=ek"
		g="mountain place ABL 4.A=come"
		tr="They came from the mountains."
		constructed
	/>

	<p>
		The allative <A w="un" gl="to, toward" /> marks directed movement toward a goal, and
		the contrast with locative <i lang="ain-Latn">ta</i> is a direction/arrival distinction:
		<i lang="ain-Latn">un</i> indicates a direction-headed-toward while <i lang="ain-Latn">ta</i>
		marks the completed arrival point. Nakagawa illustrates with
		<i lang="ain-Latn">ni ka ta hemesu=an</i> 'I climbed onto the tree' (arrival:
		<i lang="ain-Latn">ta</i>) versus
		<i lang="ain-Latn">cikuni kasi un hemesu=an</i> 'I climb toward the tree-top' (direction:
		<i lang="ain-Latn">un</i>) <Ref k="nakagawa2024" p="298–299" />:
	</p>

	<Ex
		m="atuy or un cip ani paye=an p ne"
		g="sea place ALLAT boat INS go=4.S NMLZ COP"
		tr="(She) always went to the sea by boat."
		cite="biratori1969"
		dial="SAR"
		place="Hiraga Sadamo, 'Urayushiunhur', Biratori Ainu oral literature"
		note="atuy or un = 'to the sea' (allative); cip ani = 'by boat' (instrumental postpositional adverb ani)."
	/>

	<p>
		The allative also appears as a case-frame on interrogative place-words:
		<i lang="ain-Latn">hunak un</i> 'to where', <i lang="ain-Latn">hunak wa</i> 'from where',
		<i lang="ain-Latn">hunak ta</i> 'where (at)' — the three-case paradigm on the one place-root
		<Ref k="nakagawa2024" p="413" />.
		Interrogative pro-forms are examined in <Xr ch="interrogative-pro-forms" />.
	</p>

	<p>
		The perlative <A w="peka" gl="through, over an area" /> marks traversal of a spatially
		spread area. It differs from the postpositional adverb <i lang="ain-Latn">kari</i> in
		requiring a ⟨place⟩ head and in denoting a diffuse area rather than a single passage point
		<Ref k="nakagawa2024" p="299" />:
	</p>

	<Ex
		m="ne kenas or peka ekimne=an kor"
		g="DEM forest place PERL hunt=4.S while"
		tr="While hunting through that forest, …"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker folktale 7, ILCAA Ainu materials (aa-irc/005)"
		note="ne kenas or peka = 'through that forest area'; peka here covers the whole region, not a linear route. Simultaneous kor 'while' links the clause."
	/>

	<p>
		The translative <A w="ne" gl="become, as" /> predicts conversion to a state or category
		and does not require a ⟨place⟩ head. It also appears with numerals in copular
		predications (e.g., <i lang="ain-Latn">ren a=ne wa oka=an</i> 'we lived, being three')
		<Ref k="nakagawa2024" p="300–301" />:
	</p>

	<Ex
		m="aynu ne yaykar"
		g="human TRANSL transform"
		tr="(It) transformed into a human."
		cite="nakagawa2024:300"
		dial="SAR"
	/>

	<p>
		The adnominal <i lang="ain-Latn">un</i> forms a genitive construction linking a locative
		or place-name to a following noun, expressing origin or affiliation:
		<i lang="ain-Latn">kim un kamuy</i> 'mountain deity (bear)', <i lang="ain-Latn">Sinutapka
		un kur</i> 'person of Shinutapka' <Ref k="nakagawa2024" p="301–302" />. This
		<i lang="ain-Latn">un</i> is pan-Hokkaido invariant across all dialects, which Nakagawa
		takes as evidence that it is etymologically distinct from the allative <i lang="ain-Latn">un</i>,
		which varies dialectally <Ref k="nakagawa2024" p="301–302" />. The genitive construction
		is treated in detail in <Xr ch="adnominal-possession-double-marking" />.
	</p>
</S>

<S t="Postpositional adverbs" id="postpositional-adverbs">
	<p>
		Nakagawa organizes the postpositional adverbs into two etymological strata
		<Ref k="nakagawa2024" p="280–282" />. The first, <em>originally adverbial</em> forms
		(本来型), includes <A w="pakno" gl="until, as far as" />, <A w="os" gl="after" />,
		<A w="koraci" gl="like, as if" />, and <A w="epitta" gl="throughout" />.
		The second, <em>derived from transitive verbs</em> (他動詞転換型), includes
		<A w="ani" gl="with, by means of" /> (instrumental), <A w="tura" gl="together with" />
		(comitative), <A w="kari" gl="through, via" /> (perlative), <A w="akkari" gl="more than" />,
		<A w="eun" gl="to(ward)" /> (animate allative), and <A w="hekote" gl="facing" />.
		The verb-origin class retains the structural memory of its source: these forms take the
		transitive-object person prefix (<i lang="ain-Latn">en=akkari</i> 'more than me',
		<i lang="ain-Latn">i=os</i> 'after me') <Ref k="sato2008" p="34–36" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>form</th>
				<th>gloss</th>
				<th>origin class</th>
				<th>person prefix?</th>
				<th>⟨place⟩ required?</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">ani</i></td>
				<td>with, by means of (INS)</td>
				<td>transitive verb</td>
				<td>no</td>
				<td>no</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">tura(no)</i></td>
				<td>together with (COMIT)</td>
				<td>transitive verb</td>
				<td>yes (obj. affix)</td>
				<td>no</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kari</i></td>
				<td>through, via (PERL)</td>
				<td>transitive verb</td>
				<td>yes</td>
				<td>no</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">pakno</i></td>
				<td>until, as far as</td>
				<td>original adverb</td>
				<td>no</td>
				<td>no</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">akkari</i></td>
				<td>more than, beyond</td>
				<td>transitive verb</td>
				<td>yes (obj. affix)</td>
				<td>no</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">eun</i></td>
				<td>to(ward) (animate goal)</td>
				<td>transitive verb</td>
				<td>yes</td>
				<td>no</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">os(i)</i></td>
				<td>after, following</td>
				<td>original adverb</td>
				<td>yes (obj. affix)</td>
				<td>no</td>
			</tr>
		</tbody>
	</table>

	<p>
		The contrast between case-particle <i lang="ain-Latn">peka</i> and postpositional-adverb
		<i lang="ain-Latn">kari</i> is a key diagnostic for the two-class split.
		<i lang="ain-Latn">peka</i> requires a ⟨place⟩-type noun
		(<i lang="ain-Latn">kim or peka</i> 'through the mountains'); <i lang="ain-Latn">kari</i>
		takes any nominal and does not require the locative noun <i lang="ain-Latn">or</i>
		(<i lang="ain-Latn">ruyka kari</i> 'across the bridge', <i lang="ain-Latn">puyar kari</i>
		'through the window') <Ref k="nakagawa2024" p="282" />. The test sentence from Satō also
		illustrates that <i lang="ain-Latn">kari</i> heads a full motion event without any locative
		noun:
	</p>

	<Ex
		m="ru kari arpa"
		g="road PERL go"
		tr="(He/she) went along the road."
		cite="sato2008:38"
		dial="CHI"
		note="ru 'road' is a common noun, not a locative noun; kari therefore does not require the intervening or that peka would demand."
	/>

	<Ex
		m="ruyka kari saramanto kari soyne=an akusu"
		g="bridge PERL skylight PERL go.outside=4.S when"
		tr="Going out through the bridge and the skylight, …"
		cite="nakagawa2024:282"
		dial="SAR"
		note="Both ruyka 'bridge' and saramanto 'skylight' are common nouns; kari licenses them directly without or."
	/>

	<p>
		The limitative <A w="pakno" gl="until, as far as" /> sets a terminal boundary — spatial
		or degree — on the action of its clause:
	</p>

	<Ex
		m="Tokiyo pakno k=arpa rusuy"
		g="Tokyo until 1SG.S=go want"
		tr="I want to go as far as Tokyo."
		cite="sato2008:36"
		dial="CHI"
	/>

	<p>
		The instrumental <A w="ani" gl="with, by means of" /> is the standard tool-marking device,
		corresponding to Japanese <span lang="ja">で</span> in this function. The comitative
		<A w="tura" gl="together with" /> is among the most frequent items in the corpus
		<Ref k="nakagawa2024" p="280–282" /> and may head an independent motion-clause constituent
		(<i lang="ain-Latn">macihi tura ku=ek</i> 'I came with (my) wife').
		The distinction between animate-goal <i lang="ain-Latn">eun</i> and place-goal
		<i lang="ain-Latn">un</i> mirrors Satō's minimal pair: <i lang="ain-Latn">Satporo un</i>
		requires the place-name (<i lang="ain-Latn">*unarpe un</i> is ill-formed), whereas
		<i lang="ain-Latn">unarpe eun</i> 'to auntie' is well-formed because <i lang="ain-Latn">eun</i>
		is a postpositional adverb <Ref k="sato2008" p="34–35" />.
	</p>
</S>

<S t="The locative noun or and the ⟨place⟩ requirement" id="locative-noun-or">
	<p>
		The ⟨place⟩ requirement of the four local case particles is satisfied by a small closed
		class of <em>locative nouns</em> (位置名詞) that derive the internal spatial structure of
		a referent. <A w="or" gl="interior, place-of" /> (long form <A w="oro" gl="interior, place-of" />)
		is the most general: it maps any common noun to its associated location or interior.
		Satō 2021 documents its distributional range in Chitose in detail
		<Ref k="sato2021" />.
		The case particle <i lang="ain-Latn">ta</i> fuses with basic <i lang="ain-Latn">or</i>
		to give <i lang="ain-Latn">otta</i>; the longer <i lang="ain-Latn">oro</i> stays separate
		(<i lang="ain-Latn">oro ta</i>) <Ref k="nakagawa2024" p="297" />.
	</p>

	<p>
		Other locative nouns include <A w="ka" gl="top, surface of" /> (upper surface:
		<i lang="ain-Latn">ni ka ta</i> 'onto the tree'), <A w="un" gl="interior, inside of" />
		(interior — this <i lang="ain-Latn">un</i> is a locative noun distinct from both the
		allative particle and the adnominal particle),
		<A w="soy" gl="outside of" /> (exterior: <i lang="ain-Latn">cise soy ta</i> 'outside the
		house'), <A w="kes" gl="end, tip of" />, and <A w="poka" gl="bottom, lower side of" />.
		These interact with the <Xr ch="concept-form-affiliative-form">affiliative/concept-form</Xr>
		morphology: a locative noun heading a possessed ⟨place⟩ phrase takes the affiliative suffix
		that marks inalienable possession, because locative nouns are inalienably related to their
		host noun <Ref k="nakagawa2024" p="241" />.
	</p>

	<p>
		A community discussion (nukopoli, aynu-corpora Discord 2024-11-09) highlights a
		distributional consequence of the ⟨place⟩ requirement: the existential verb
		<A w="an" gl="exist (intransitive)" /> requires a locative noun before the case particle
		(<i lang="ain-Latn">A B or ta an</i> 'A exists at/in B'), while the two-argument verb
		<A w="un" gl="belong to" /> (homophonous with the allative particle) takes a bare nominal
		(<i lang="ain-Latn">A B un</i> 'A belongs to B'). This is corroborated by Nakagawa's
		analysis of adnominal <i lang="ain-Latn">un</i> as etymologically a two-argument predicate
		rather than a case particle
		<Ref k="nakagawa2024" p="301–302" />; <Ref k="aynucorporadiscord" />
		‹corpus-confirmed›.
	</p>
</S>

<S t="Case or adposition? The analytical question" id="case-vs-adposition">
	<p>
		Whether <i lang="ain-Latn">ta / wa / un / peka</i> constitute a <em>local-case system</em>
		or are better analyzed as <em>postpositions</em> turns on how one weighs three
		distributional facts against one morphophonological one.
	</p>

	<p>
		The case-system argument rests on three properties
		<Ref k="nakagawa2024" p="296–303" />; <Ref k="nakagawa2022pos" p="473–475" />.
		First, the four particles form a closed paradigm organized around locative semantic primitives
		(at / from / toward / through) that parallels local-case inventories in languages with overt
		case morphology. Second, the particles alternate on the single place-word <i lang="ain-Latn">hunak</i>
		('where') — <i lang="ain-Latn">hunak ta</i> 'where-at', <i lang="ain-Latn">hunak wa</i>
		'from where', <i lang="ain-Latn">hunak un</i> 'to where' — exactly as case suffixes do in
		case-marking languages. Third, the allative particle shows regular dialectal allomorphy
		(<i lang="ain-Latn">un / en / (e)ne</i>) that patterns as suppletive morphology rather than
		distinct lexical items.
	</p>

	<p>
		The adposition argument notes that the particles remain phonologically independent words,
		never cliticize to their hosts, and that the ⟨place⟩ requirement is satisfied by a separate,
		grammatically active head noun (<i lang="ain-Latn">or</i>) rather than by the noun itself
		taking an affix <Ref k="sato2008" p="34–36" />; <Ref k="refsing1986" p="109" />.
		The case label adopted by Nakagawa and Satō is therefore a functional/semantic label, not
		a morphological one: these are postpositions that constitute a local-case <em>subsystem</em>
		by virtue of their paradigmatic organization and the ⟨place⟩ selection constraint
		‹contested›.
	</p>
</S>

<S t="Motion-event encoding" id="motion-events">
	<p>
		Hokkaido Ainu has a substantial set of motion verbs that lexicalize direction, deictic
		orientation, and vertical or coastal dimension. The most basic Saru–Chitose pair is
		<A w="arpa" gl="go (singular)" /> (go, singular subject) and
		<A w="oman" gl="go (Chitose/north)" /> (go, in northern and eastern dialects); the
		suppletive plurals are <A w="paye" gl="go (plural)" /> and <A w="arpa" gl="go" />'s
		own plural form. For 'come', the singular is <A w="ek" gl="come (singular)" /> with
		suppletive plural <A w="arki" gl="come (plural)" />.
	</p>

	<p>
		Beyond these general verbs, a lexical set encodes deictic path-direction:
		<A w="san" gl="go seaward, go down (out)" /> (move seaward / downhill / out to the open),
		<A w="yan" gl="go inland, go up" /> (move inland / uphill),
		<A w="ahun" gl="enter" /> (enter an enclosed space),
		<A w="rikin" gl="go up, ascend" /> (ascend vertically),
		<A w="ran" gl="come down, descend" /> (descend),
		<A w="soyne" gl="go outside" /> (go out/outside),
		and <A w="repun" gl="go out to sea" /> (go out to sea).
		Each of these lexicalizes a specific path-direction in the verb stem itself.
		Nakagawa 2024 treats these as a distinct lexical class on account of their suppletive
		number alternants and their complementary distribution with postpositional arguments
		<Ref k="nakagawa2024" p="298–299" />.
	</p>

	<p>
		A motion clause typically combines one of these path-encoding verbs with a postpositional
		phrase that specifies the Source (ablative <i lang="ain-Latn">wa</i>) or Goal (allative
		<i lang="ain-Latn">un</i> / locative <i lang="ain-Latn">ta</i>):
	</p>

	<Ex
		m="nupuri or wa k=arpa"
		g="mountain place ABL 1SG.S=go"
		tr="I went away from the mountain."
		constructed
	/>

	<Ex
		m="atuy or un k=arpa"
		g="sea place ALLAT 1SG.S=go"
		tr="I went to the sea."
		constructed
	/>

	<p>
		Path through a specific route is marked by the postpositional adverb
		<i lang="ain-Latn">kari</i> (for a single passage point or linear route) or the case
		particle <i lang="ain-Latn">peka</i> (for a spread area). When both a direction verb and
		a perlative phrase appear together, the verb encodes the terminal direction while the
		perlative phrase encodes the route:
	</p>

	<Ex
		m="kim peka a=tura"
		g="mountain PERL 4.A=accompany"
		tr="(He/she) accompanied (them) over/through the mountains."
		cite="nakagawa2024:299"
		dial="SAR"
		note="kim peka = 'over the mountain area'; a=tura = 4A=accompany. The motion direction (away, toward) is understood from context; the postposition specifies the terrain traversed."
	/>

	<p>
		The morphological alternation between the stem forms of direction verbs is itself a
		coding device for motion: nukopoli notes that motion verbs characteristically show a
		<i lang="ain-Latn">-n</i> / <i lang="ain-Latn">-p</i> stem alternation
		(<i lang="ain-Latn">san/sap</i>, <i lang="ain-Latn">yan/yap</i>,
		<i lang="ain-Latn">ahun/ahup</i>, <i lang="ain-Latn">ran/rap</i>,
		<i lang="ain-Latn">rikin/rikip</i>), where <i lang="ain-Latn">-p</i> is cognate with
		the formal noun <i lang="ain-Latn">pa</i>, though the etymology of <i lang="ain-Latn">-n</i>
		remains unsettled
		<Ref k="aynucorporadiscord" /> (nukopoli, 2026-05-18) ‹speculative›.
		The causative of <A w="rikin" gl="go up" /> is uniquely <i lang="ain-Latn">rikinka</i>;
		<i lang="ain-Latn">*rikipka</i> is unattested, suggesting the <i lang="ain-Latn">-n</i>
		stem is the causative base
		<Ref k="aynucorporadiscord" /> (nukopoli, 2026-04-27) ‹corpus-confirmed›.
	</p>
</S>

<S t="The Talmy typology — verb-framing and path lexicalization" id="typology">
	<p>
		Talmy's distinction between <em>verb-framed</em> languages (where Path is encoded in the
		main verb) and <em>satellite-framed</em> languages (where Path is in a satellite and
		Manner in the verb) provides a useful frame for locating the HA system
		<Ref k="talmy2000" paren />. The HA data are consistent with verb-framed organization
		at the lexical core — the path-direction verbs <i lang="ain-Latn">san</i>,
		<i lang="ain-Latn">yan</i>, <i lang="ain-Latn">ahun</i>, <i lang="ain-Latn">rikin</i>,
		and <i lang="ain-Latn">ran</i> all lexicalize specific Path values in the verb stem —
		while the postpositional system adds goal/source precision through the
		<i lang="ain-Latn">un / wa / ta</i> case particles and contributes a separate perlative
		specification through <i lang="ain-Latn">peka / kari</i>.
	</p>

	<p>
		What makes the Ainu system typologically mixed is that the perlative particles function
		as path-specifying satellites — they add information about the route that is not in the
		verb stem — while the goal and source particles function as standard local-case markers
		that any language, verb-framed or satellite-framed, may employ.
		A manner verb like <A w="ekimne" gl="hunt (going hunting)" /> can occur with a perlative
		phrase (<i lang="ain-Latn">ne kenas or peka ekimne=an kor</i>) in a way that resembles
		satellite framing, but the path-specialized verbs such as <i lang="ain-Latn">san</i> and
		<i lang="ain-Latn">ahun</i> carry Path in the verb itself. The precise typological
		placement of Ainu within the Talmy framework depends on which lexical stratum is taken
		as primary, and the accessible sources do not settle this as an explicit research claim
		‹speculative›.
	</p>

	<p>
		The interaction of postpositions with noun incorporation is treated in
		<Xr ch="noun-incorporation-oblique-polysynthesis-debate" />; argument realization and
		the role of postpositional phrases in oblique positions are examined in
		<Xr ch="nonconfigurationality-pronominal-argument" />.
	</p>
</S>

<S t="Dialect variation in the allative" id="allative-dialect">
	<p>
		The allative particle is the most dialect-variable of the five case particles. Nakagawa
		maps three main reflexes across Hokkaido
		<Ref k="nakagawa2024" p="302, §9.2.2" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>dialect area</th>
				<th>allative particle</th>
				<th>example</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>日高西部, 西北海道 (Saru, Chitose, Yakumo)</td>
				<td><i lang="ain-Latn">un</i></td>
				<td><i lang="ain-Latn">pet or un</i> 'to the river'</td>
			</tr>
			<tr>
				<td>日高東部, 十勝 (Shizunai, Tokachi)</td>
				<td><i lang="ain-Latn">en</i></td>
				<td><i lang="ain-Latn">pet or en</i></td>
			</tr>
			<tr>
				<td>道東, 石狩, 北部 (Bihoro, Ishikari, Asahikawa)</td>
				<td><i lang="ain-Latn">(e)ne</i></td>
				<td><i lang="ain-Latn">pet or ne</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		Nakagawa traces the historical sequence as
		<i lang="ain-Latn">ne</i> &gt; <i lang="ain-Latn">ene</i> &gt;
		<i lang="ain-Latn">en</i> &gt; <i lang="ain-Latn">un</i>, with the translative/copula
		<i lang="ain-Latn">ne</i> the ultimate source
		<Ref k="nakagawa2024" p="302" />.
		The reanalysis of <i lang="ain-Latn">ne</i> from a translative into an allative marker is
		plausible as a goal-marking grammaticalization, but the intermediate stages are not
		uniformly attested and the direction of the change has not been independently demonstrated
		‹speculative›.
	</p>

	<p>
		The <em>adnominal</em> <i lang="ain-Latn">un</i> ('of, belonging to') does not participate
		in this variation: it is the same <i lang="ain-Latn">un</i> in all dialects, including
		those that use <i lang="ain-Latn">en</i> or <i lang="ain-Latn">ne</i> for the allative.
		Nakagawa takes this pan-HA uniformity as the strongest evidence that the two
		<i lang="ain-Latn">un</i>'s are etymologically distinct, with adnominal
		<i lang="ain-Latn">un</i> deriving from the two-argument possession verb rather than from
		any locative source <Ref k="nakagawa2024" p="301–302" /> ‹consensus›.
		Interrogative-strategy uses of the allative (<i lang="ain-Latn">ney un</i> 'to where' in
		eastern dialects, as opposed to <i lang="ain-Latn">hunak un</i> in western ones) are
		examined in <Xr ch="interrogative-strategies-question-particles" />.
	</p>
</S>
