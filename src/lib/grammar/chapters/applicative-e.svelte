<!-- src/lib/grammar/chapters/applicative-e.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Valency effect and position" id="overview">
	<p>
		The prefix <i lang="ain-Latn">e-</i> belongs to the <Xr ch="applicative-system-overview"
			>applicative</Xr
		> series together with <Xr ch="applicative-ko"><A w="ko-" gl="applicative ko-" /></Xr> and
		<Xr ch="applicative-o"><A w="o-" gl="applicative o-" /></Xr>. An overview of all three
		and their place in the valency architecture is given in <Xr ch="valency-voice-overview" />.
		Its function is to add one participant to the verb's argument set: an intransitive
		becomes transitive and a transitive becomes a double-object verb, consistently raising
		arity by one regardless of the semantic role of the added argument <Ref
			k="nakagawa2024"
			p="192–194"
		/>; <Ref k="bugaeva2006" p="186–188" />. The valency-class diagnostic of
		<Xr ch="transitivity-and-valence-classes" /> confirms the change: after
		<i lang="ain-Latn">e-</i> attaches to an intransitive, the verb takes the prefixal agent
		indexes <i lang="ain-Latn">ci=</i> and <i lang="ain-Latn">a=</i> and resists the
		intransitive S suffixes <Ref k="nakagawa2024" p="137, 140" />.
	</p>

	<p>
		Positionally, <i lang="ain-Latn">e-</i> occupies the slot between the outer person prefix
		and the root: <em>person — applicative — root — forming-suffix — causative-suffix —
		suffixal-person</em> <Ref k="nakagawa2024" p="210–212" />. The prefix and root together
		form a single accentual unit; Nakagawa analyses the applicative-plus-verb sequence as one
		word for prosodic purposes, a pattern the community archive documents with forms such as
		<i lang="ain-Latn">kotán</i> → <i lang="ain-Latn">ekótanne</i> (nukopoli, aynu-corpora
		Discord 2024) <Ref k="aynucorporadiscord" />; <Ref k="nakagawa2024" p="192–194" />
		‹consensus›. Among the three applicatives, <i lang="ain-Latn">ko-</i> is the most
		frequent, followed by <i lang="ain-Latn">e-</i> and then <i lang="ain-Latn">o-</i>;
		by Bugaeva's estimate, applicative-derived verbs account for roughly one-third of all
		Ainu verbs and up to seven percent of the total lexicon <Ref k="bugaeva2006" p="188" />.
	</p>

	<p>
		The instrument sub-type (see §2 below) offers the most direct illustration of the +1
		arity effect. The verb <A w="tuye" gl="cut" /> is transitive in its base form and takes
		one object (the thing cut); <i lang="ain-Latn">e-tuye</i> raises it to a three-place verb
		whose new object position is occupied by the cutting instrument.
	</p>

	<Ex
		m="sirkorkamuy emus e-tuye"
		g="standing.tree sword APPL-cut"
		tr="He cut the standing tree with a sword."
		cite="nakagawa2024:193"
		dial="SAR"
		place="Nakagawa ex. 173, after Monbetsu-chō 1969: 237"
		note="The instrument emus 'sword' is the applied object licensed by e-, which raises tuye from a two-place to a three-place verb. Both objects — tree and sword — are core arguments marked by person affixes in a three-person frame."
	/>
</S>

<S t="Sub-types and semantic roles of the applied object" id="semantic-roles">
	<p>
		Nakagawa distinguishes four sub-types of <i lang="ain-Latn">e-</i> by the paraphrase
		properties of the applied-object slot <Ref k="nakagawa2024" p="195" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>sub-type</th>
				<th>adpositional paraphrase</th>
				<th>semantic reading</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>(1) instrument</td>
				<td><i lang="ain-Latn">ani</i> / <i lang="ain-Latn">ari</i> 'by means of'</td>
				<td>'〜で以て' (instrument, means)</td>
			</tr>
			<tr>
				<td>(2) purpose</td>
				<td><i lang="ain-Latn">kusu</i> 'for, in order to'</td>
				<td>'〜するために' (purpose, goal)</td>
			</tr>
			<tr>
				<td>(3) content / theme</td>
				<td>— (no adpositional equivalent)</td>
				<td>'〜について / 〜を / 〜が' (content, theme-patient)</td>
			</tr>
			<tr>
				<td>(4) locative</td>
				<td>
					<i lang="ain-Latn">ta</i> / <i lang="ain-Latn">un</i> /
					<i lang="ain-Latn">peka</i> 'at, to, along'
				</td>
				<td>'〜〈場所〉に/で/を' (location, path)</td>
			</tr>
		</tbody>
	</table>

	<p>
		Bugaeva's corpus study of the Chitose and Saru dialects supplies percentage figures across
		all attested applied-object roles <Ref k="bugaeva2006" p="190" />. The intr/tr column
		records what proportion of each role class is derived from an intransitive versus a
		transitive base.
	</p>

	<table>
		<thead>
			<tr>
				<th>role of the applied object</th>
				<th>%</th>
				<th>intr-base / tr-base</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Content</td>
				<td>39</td>
				<td>91 / 9</td>
			</tr>
			<tr>
				<td>Theme-Patient</td>
				<td>17</td>
				<td>96 / 4</td>
			</tr>
			<tr>
				<td>Means-Instrument (<i lang="ain-Latn">ani</i>)</td>
				<td>13</td>
				<td>84 / 16</td>
			</tr>
			<tr>
				<td>Cause</td>
				<td>8</td>
				<td>83 / 17</td>
			</tr>
			<tr>
				<td>Location (<i lang="ain-Latn">ta</i>)</td>
				<td>5</td>
				<td>75 / 25</td>
			</tr>
			<tr>
				<td>Range</td>
				<td>4</td>
				<td>72 / 28</td>
			</tr>
			<tr>
				<td>Manner (<i lang="ain-Latn">kor</i>)</td>
				<td>3</td>
				<td>100 / 0</td>
			</tr>
			<tr>
				<td>Purpose (<i lang="ain-Latn">kusu</i>)</td>
				<td>2</td>
				<td>100 / 0</td>
			</tr>
			<tr>
				<td>Path (<i lang="ain-Latn">peka</i>)</td>
				<td>2</td>
				<td>100 / 0</td>
			</tr>
			<tr>
				<td>Benefactive / Comitative / Malefactive</td>
				<td>7</td>
				<td>80 / 20</td>
			</tr>
		</tbody>
	</table>

	<p>
		The instrument sub-type (type 1, 13%) has a clear <i lang="ain-Latn">ani</i>-paraphrase.
		A straightforward instance is a general capability statement using the motion verb
		<A w="apkas" gl="walk" />:
	</p>

	<Ex
		m="a=kemaha a=e-apkas easkay"
		g="4.POSS=foot 4.A=APPL-walk can"
		tr="One can walk on one's own feet."
		cite="nakagawa2024:194"
		dial="CHI"
		place="Nakagawa ex. 176"
		note="The fourth-person prefix a= marks both the possessed noun (a=kemaha 'one's foot/leg') and the agent of the derived transitive (a=e-apkas 'one walks by means of'). The foot is the instrument applied object, paraphrasable as kemaha ani apkas."
	/>

	<p>
		The purpose sub-type (type 2, 2%) takes a goal or activity noun that can be replaced by
		a <i lang="ain-Latn">kusu</i>-phrase:
	</p>

	<Ex
		m="turepta e-arpa"
		g="lily.bulb APPL-go"
		tr="go to dig lily-bulbs"
		cite="nakagawa2024:195"
		dial="SAR"
		place="Nakagawa ex. 180"
		note="Verbal phrase. The applied object turepta encodes the purpose of the motion, paraphrasable as turepta kusu arpa 'go for the purpose of digging lily-bulbs'. Both Manner and Path roles (each 2%) derive exclusively from intransitive bases."
	/>

	<p>
		Locative applied objects (type 4, combining Location 5% and Path 2%) take a place or
		postpositional noun, paraphrasable with <i lang="ain-Latn">ta</i>,
		<i lang="ain-Latn">un</i>, or <i lang="ain-Latn">peka</i>:
	</p>

	<Ex
		m="to teksama e-an"
		g="lake edge APPL-be"
		tr="to be at the lake's edge"
		cite="nakagawa2024:195"
		dial="CHI"
		note="The place noun to teksama 'lake edge' is the locative applied object; paraphrasable as to teksama ta an 'be at the lake's edge'. The base an 'be, exist' is intransitive; e- makes it transitive with the location as its sole object."
	/>

	<p>
		Path applied objects carry a directional relation along a route rather than a static
		location. The example below has a postpositional noun bearing the first-person object
		prefix as the applied object:
	</p>

	<Ex
		m="i=corpokke e=e-hoyupu yak pirka na"
		g="1SG.O=under 2SG.A=APPL-run COND good FIN"
		tr="You had better run under me."
		cite="nakagawa2024:196"
		dial="SAR"
		place="Nakagawa ex. 184"
		note="The postpositional noun corpokke 'under' carries the 1SG object prefix i=, yielding i=corpokke 'under me' as the path applied object. The outer second-person agent prefix e= precedes the applicative e- and the root hoyupu 'run' in the single verb word e=e-hoyupu."
	/>
</S>

<S t="Content and Theme-Patient: the dominant and non-oblique uses" id="content">
	<p>
		Content (39%) and Theme-Patient (17%) together constitute more than half of all attested
		<i lang="ain-Latn">e-</i> forms and derive almost entirely from intransitive bases
		(91% and 96% respectively). These roles correspond to Nakagawa's type (3): the applied
		object has no adpositional paraphrase, and <i lang="ain-Latn">e-</i> here functions as
		direct transitivization rather than oblique promotion <Ref k="bugaeva2006" p="191" />;
		<Ref k="nakagawa2024" p="195–196" />. The verb <A w="simpay" gl="worry" /> is
		intransitive in its base form; the thing worried about enters as a Content applied object:
	</p>

	<Ex
		m="nep e-simpay"
		g="what APPL-worry"
		tr="worry about something"
		cite="nakagawa2024:195"
		dial="CHI"
		place="Nakagawa ex. 181"
		note="The applied object nep 'what/something' is the content of the worry. No adpositional paraphrase exists; e- is the sole grammatical strategy for licensing this object."
	/>

	<p>
		The derivational chain <A w="ikka" gl="steal (intransitive base)" /> →
		<i lang="ain-Latn">e-ikka</i> 'steal something' →
		<i lang="ain-Latn">ko-e-ikka</i> 'steal something from someone' illustrates successive
		applicativization: each step adds one argument <Ref k="bugaeva2006" p="191" />. The
		<i lang="ain-Latn">e-ikka</i> step adds the stolen item as a Theme-Patient applied object
		with no adpositional equivalent.
	</p>

	<p>
		Bugaeva draws a typological inference from these data: most Ainu <i lang="ain-Latn">e-</i>
		applicatives are the only grammatical means of expressing a given participant relation, so
		they are obligatory in the sense that the cross-linguistic option of an adpositional
		alternative simply does not exist <Ref k="bugaeva2006" p="187, 191–196" />. The Peterson
		typology of applicative constructions provides the comparative frame for this
		characterization <Ref k="peterson2007" paren />.
	</p>

	<p>
		A periphrastic pattern complementary to the morphological applicative exists for the
		instrumental reading: the construction <i lang="ain-Latn">ani X p</i> ('the thing with
		which one does X') expresses instrumentality as a nominalization rather than through the
		<i lang="ain-Latn">e-</i> prefix — for example, <i lang="ain-Latn">ani e=kanpinuye p</i>
		'a thing with which one writes' (= pencil) or <i lang="ain-Latn">ani humi a=aste p</i>
		'a thing with which one produces sound' (= musical instrument; nukopoli, aynu-corpora
		Discord 2026) <Ref k="aynucorporadiscord" /> ‹corpus-confirmed›. The two constructions
		serve different functions: the morphological applicative frames the instrument inside
		the verbal predicate; the <i lang="ain-Latn">ani ... p</i> nominalization names the
		instrument as a noun.
	</p>
</S>

<S t="Lexicalized forms and the preverb question" id="lexicalization">
	<p>
		Three homophonous prefixes occupy the same surface slot and require the arity computation
		for disambiguation: the applicative <i lang="ain-Latn">e-</i> (+1), the affiliative
		<i lang="ain-Latn">e-</i> 'head of' (0), which fills a body-part position while
		retaining its own possessor, and the second-person agent clitic <i lang="ain-Latn">e=</i>
		(a person index, effective −1 on the available slots) <Ref
			k="nakagawa2024"
			p="192–193"
		/>; <Ref k="bugaevakobayashi2022" p="§4.3.3" />. The minimal contrast between the
		applicative and the affiliative — <i lang="ain-Latn">he-puni</i> 'lift one's own head'
		versus <i lang="ain-Latn">e-puni</i> 'lift someone's head' — is set out in
		<Xr ch="applicative-system-overview" />.
	</p>

	<p>
		Many verbs carry a lexicalized <i lang="ain-Latn">e-</i> whose applicative analysis is
		opaque in current usage. A community-proposed decomposition treats <A
			w="eykaun"
			gl="surpass, exceed"
		/> as applicative <i lang="ain-Latn">e-</i> applied to <i lang="ain-Latn">kaun</i>
		derived from the postpositional phrase <i lang="ain-Latn">ka un</i> 'be on top of'
		(nukopoli, aynu-corpora Discord 2024) <Ref k="aynucorporadiscord" /> ‹speculative›. The
		etymology is semantically motivated but cannot be verified against the diachronic record
		from the read sources; synchronically, <i lang="ain-Latn">eykaun</i> functions as a
		transitive base.
	</p>

	<p>
		The analytical question of whether some <i lang="ain-Latn">e-</i> forms are better
		described as lexical preverbs (case-relation prefixes) than as applicatives in the
		cross-linguistic sense is not engaged by the principal read sources. Bugaeva treats all
		three markers as applicatives throughout and positions the older labels — 充当相
		(Kindaichi and Chiri 1936) and case-prefix 格の関係を表わす接頭辞 (Chiri 1942) — as
		historical precursors rather than competing analyses <Ref k="bugaeva2006" p="186" />;
		<Ref k="nakagawa2024" p="192–193" />. Baker's incorporation analysis, which treats
		applicative formation as P-incorporation in the syntax, is the nearest theoretical
		alternative present in the read literature <Ref k="baker1988" paren />; <Ref
			k="shibatani1990"
			p="65"
		/> ‹contested›. A dedicated assessment appears in <Xr ch="applicative-system-overview" />.
	</p>
</S>

<S t="Stacking, re-applicativization, and the feeding of noun incorporation" id="stacking">
	<p>
		<i lang="ain-Latn">e-</i> stacks freely with <i lang="ain-Latn">ko-</i> in both orders,
		<i lang="ain-Latn">ko-e-</i> and <i lang="ain-Latn">e-ko-</i>, with no documented
		meaning difference between the two sequences on the same verb type. In
		<A w="e-ko-isoytak" gl="tell stories to someone about something" />,
		<i lang="ain-Latn">e-</i> contributes the Content applied object (the stories told) and
		<i lang="ain-Latn">ko-</i> the Addressee (the person addressed) <Ref
			k="bugaevakobayashi2022"
			p="§4.1.1"
		/>; <Ref k="bugaeva2006" p="188" />. The ordering constraints on stacked applicatives
		and their interaction with reflexive and reciprocal morphology are developed in
		<Xr ch="applicative-stacking-relativization-feeding" />.
	</p>

	<p>
		<i lang="ain-Latn">e-</i> may apply to a verb that has already been
		<Xr ch="antipassive-detransitive-i">antipassivized</Xr> with <A
			w="i-"
			gl="antipassive"
		/>, restoring transitivity while the antipassive's absorbed participant remains
		unexpressed. The compound <A w="e-i-kasuy" gl="help people with something" /> illustrates
		this: <i lang="ain-Latn">i-kasuy</i> 'do helping' is intransitive (the beneficiaries
		absorbed by <i lang="ain-Latn">i-</i>), and <i lang="ain-Latn">e-</i>
		re-applicativizes it to take a Content object encoding the nature of the help.
	</p>

	<Ex
		m="tokaci wa ek pewre kur monrayke e-i-kasuy"
		g="Tokachi from come young man work APPL-ANTIP-help"
		tr="A young man who came from Tokachi helped with the work."
		cite="bugaevakobayashi2022:§4.2.3"
		dial="SAR"
		place="Sunazawa 1983: 160; Handbook ex. 25c"
		note="The antipassive i- absorbs the unspecified beneficiaries of kasuy 'help'; e- then re-applicativizes the resulting intransitive, taking monrayke 'work' as the Content applied object. The relative clause tokaci wa ek pewre kur 'young man who came from Tokachi' modifies the subject."
	/>

	<p>
		The +1 arity effect of <i lang="ain-Latn">e-</i> also opens the path to oblique noun
		incorporation. Instruments, locations, and purpose arguments cannot incorporate directly,
		because they are adjuncts, not core arguments; once <i lang="ain-Latn">e-</i> promotes
		them to object status, the derived object becomes incorporable. Shibatani formulates the
		dependency as a general condition: oblique incorporation in Ainu is invariably mediated
		by a prior applicative <Ref k="shibatani1990" p="62, 66" />; <Ref
			k="nakagawa2024"
			p="484"
		/>. The incorporated forms <i lang="ain-Latn">at-e-uk</i> 'catch with a net' (instrument;
		cf. <i lang="ain-Latn">at ani uk</i>) and <i lang="ain-Latn">turepta-e-arpa</i> 'go to
		dig lily-bulbs' (purpose) both rest on the same <i lang="ain-Latn">e-</i>
		applicativization illustrated above. Kaiser's analysis of the applicative-incorporation
		interaction provides a formal account of the feeding relation <Ref k="kaiser1998" paren
		/>. The incorporation patterns that result are treated in
		<Xr ch="noun-incorporation-object" /> and
		<Xr ch="noun-incorporation-oblique-polysynthesis-debate" />.
	</p>
</S>
