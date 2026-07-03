<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview: the directive mood" id="overview">
	<p>
		The directive mood of Hokkaido Ainu distinguishes singular from plural or
		polite addressees, positive from negative directives, and direct from softened
		commands through a small set of formally separable constructions. The simplest
		directive is the bare verb with no second-person subject prefix — the singular
		imperative. The final particle <A w="yan" /> marks the plural or polite
		imperative; number-sensitive verbs require the plural stem alongside it. The
		adverbial particle <A w="hani" /> softens the command into a polite reminder,
		and the preverbal adverb <A w="iteki" /> (and its dialect equivalents) converts
		any imperative into a prohibitive
		<Ref k="nakagawa2024" p="421–426" />; <Ref k="sato2008" p="72–73" />;
		<Ref k="ijas2023" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>construction</th>
				<th>function</th>
				<th>addressee / force</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">V</i></td>
				<td>singular imperative</td>
				<td>singular, direct</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V.PL yan</i></td>
				<td>plural / polite imperative</td>
				<td>plural or polite, direct</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V hani</i> / <i lang="ain-Latn">V yan hani</i></td>
				<td>softened imperative</td>
				<td>any, mitigated</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V wa en=/un= kore</i></td>
				<td>benefactive request</td>
				<td>any, request</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">iteki V</i></td>
				<td>prohibitive</td>
				<td>any, negative direct</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V yak pirka / yakka pirka</i> etc.</td>
				<td>advice, permission (indirect)</td>
				<td>2nd person, mitigated</td>
			</tr>
		</tbody>
	</table>

	<p>
		The hortative particles <i lang="ain-Latn">ro</i>, <i lang="ain-Latn">rok</i>,
		and <i lang="ain-Latn">no</i>, which build inclusive 'let us' directives on the
		fourth-person verb, are treated in <Xr ch="hortative-and-optative" />. The
		detailed relationship of the prohibitive to sentential negation, its apprehensive
		extension, and its position in prohibitive typology are developed in
		<Xr ch="negation-prohibitive-iteki" />. The overview of how directive mood
		fits within the broader TAM and clause architecture is in
		<Xr ch="tam-overview" />.
	</p>
</S>

<S t="The bare-stem singular imperative" id="singular">
	<p>
		A directive to a single addressee is the bare verb with no second-person subject
		prefix. Object prefixes — <i lang="ain-Latn">en=</i>
		(1<span class="sc">sg</span>.<span class="sc">o</span>),
		<i lang="ain-Latn">un=</i> (1<span class="sc">pl</span>.<span class="sc">o</span>),
		<i lang="ain-Latn">i=</i> (4.<span class="sc">o</span>) — remain on the verb;
		only the subject prefix is suppressed
		<Ref k="nakagawa2024" p="421–422" />. The surface form is therefore
		identical to a third-person or subjectless clause and receives its directive
		reading from context and intonation.
	</p>

	<Ex
		m="hetak pusu wa inkar"
		g="INTERJ dig CONJ look"
		tr="Come on, dig it up and look!"
		cite="nakagawa2024:422"
		dial="CHI"
		place="Nakagawa ex. 911"
		note="Two bare-stem verbs (pusu, inkar) linked by the sequential particle wa. The absence of any second-person subject prefix is the sole formal mark of the singular imperative."
	/>

	<p>
		Adding a second-person subject prefix to an imperative verb is ungrammatical
		‹consensus› <Ref k="ijas2023" />. A community exchange confirms the restriction:
		the bare imperative of
		<i lang="ain-Latn">un=epunkine</i> 'guard [us]' carries only the beneficiary
		object prefix <i lang="ain-Latn">un=</i> and no subject marker; a form
		<i lang="ain-Latn">e=un=epunkine</i> or <i lang="ain-Latn">a=un=epunkine</i>
		is ungrammatical as an imperative (siljamimimii, aynu-corpora Discord,
		2024-11-17) <Ref k="aynucorporadiscord" /> ‹corpus-confirmed›.
	</p>

	<p>
		Ishikari alone attaches a sentence-final particle <A w="ya" /> to signal the
		singular imperative, a form that the southern and central dialects lack
		<Ref k="nakagawa2024" p="422" />.
	</p>
</S>

<S t="The plural and polite imperative: yan" id="yan">
	<p>
		A directive addressed to multiple persons or framed politely takes the final
		particle <A w="yan" />. For verbs that distinguish a singular from a plural
		stem — intransitives such as <A w="hosipi" gl="return (SG)" /> /
		<A w="hosippa" gl="return (PL)" /> and <A w="ek" gl="come (SG)" /> /
		<A w="arki" gl="come (PL)" /> — the plural stem is obligatory and
		<i lang="ain-Latn">yan</i> cannot be dropped
		<Ref k="nakagawa2024" p="422" />.
	</p>

	<Ex
		m="ku=kor kuruma o wa hosippa yan"
		g="1SG.A=have car board CONJ return.PL IMP"
		tr="Get in my car and go home!"
		cite="nakagawa2024:422"
		dial="CHI"
		place="Nakagawa ex. 914"
		note="hosippa is the suppletive plural stem of hosipi 'return'; both the plural stem and the particle yan are obligatory for a plural or polite addressee. A bare *hosippa without yan is ungrammatical as a command."
	/>

	<p>
		The particle <i lang="ain-Latn">yan</i> is homophonous with the intransitive
		motion verb <A w="yan" gl="go ashore, come up from water" />. A community
		discussion proposes that the imperative particle grammaticalized from this
		motion verb — a path typologically paralleled by English <em>come on</em> and
		Mandarin directional verbs in imperative idioms (antitwilight, aynu-corpora
		Discord, 2024-11-18) <Ref k="aynucorporadiscord" /> ‹speculative›.
		The grammars list the motion verb and the final particle as separate entries
		without deriving one from the other <Ref k="nakagawa2024" p="422" />.
	</p>

	<p>
		When <A w="hani" /> follows <i lang="ain-Latn">yan</i>, the two regularly fuse
		to <i lang="ain-Latn">yanani</i>
		<Ref k="nakagawa2024" p="422–423" />.
	</p>
</S>

<S t="Softeners and benefactive requests: hani and wa kore" id="softeners">
	<p>
		The particle <A w="hani" /> (variant <i lang="ain-Latn">ani</i>) follows the
		imperative verb, or the particle <i lang="ain-Latn">yan</i>, and softens the
		directive into a polite reminder
		<Ref k="nakagawa2024" p="422–423" />.
	</p>

	<Ex
		m="pirkano mokor hani"
		g="well sleep SOFT"
		tr="Please sleep well!"
		cite="tamura2000:242"
		dial="SAR"
		note="hani follows the bare imperative mokor 'sleep' and converts a direct command into a polite wish."
	/>

	<Ex
		m="iteki omkekar yan hani"
		g="PROH shout IMP SOFT"
		tr="Please don't shout."
		cite="sato2008:72"
		dial="SAR"
		note="hani follows yan in a prohibitive context; the sequence iteki … yan hani produces a softened negative directive to a plural or polite addressee."
	/>

	<p>
		A community discussion proposes that <i lang="ain-Latn">hani</i> is
		etymologically related to the motion verb <A w="hanke" gl="come near, approach" />,
		by a grammaticalization path parallel to the one proposed for
		<i lang="ain-Latn">yan</i> (antitwilight, aynu-corpora Discord, 2024-11-18)
		<Ref k="aynucorporadiscord" /> ‹speculative›.
	</p>

	<p>
		The pair verb <A w="wa kore" gl="do for (someone)" /> adds a benefactive
		reading. In this pattern the imperative verb is followed by the sequential
		particle <i lang="ain-Latn">wa</i> and the verb <i lang="ain-Latn">kore</i>
		'give / do-for', which takes an object prefix identifying the beneficiary:
		<i lang="ain-Latn">en=kore</i> 'do it for me',
		<i lang="ain-Latn">un=kore</i> 'do it for us'
		<Ref k="nakagawa2024" p="423, 455" />.
	</p>

	<Ex
		m="suke wa en=kore"
		g="cook CONJ 1SG.O=give"
		tr="Please cook [it] for me."
		constructed
		note="Benefactive request pattern: the lexical verb takes the bare imperative shape, wa links it to kore, and the object prefix en= on kore identifies the beneficiary."
	/>
</S>

<S t="The prohibitive: iteki and its dialect variants" id="prohibitive">
	<p>
		A prohibitive directive places a preverbal adverb before the bare-stem verb.
		The most widespread form in the Saru corpus is <A w="iteki" />, found in Saru,
		Chitose, Horobetsu, and Abuta; other Hokkaido dialects use parallel adverbs
		<Ref k="nakagawa2024" p="424" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>form</th>
				<th>dialect</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">iteki</i></td>
				<td>Saru, Chitose, Horobetsu, Abuta</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">itekke</i></td>
				<td>Shizunai, Samani, Tokachi</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">etekke</i></td>
				<td>Shiranuka, Bibai, Tokachi</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ecik(k)i</i></td>
				<td>Ishikari</td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="iteki ape sam ta ek"
		g="PROH fire side LOC come"
		tr="Do not come near the fire!"
		cite="nakagawa2024:424"
		dial="SAR"
		place="Nakagawa ex. 924"
		note="The prohibitive adverb iteki precedes the verb, which retains the bare imperative shape with no second-person subject prefix."
	/>

	<p>
		<i lang="ain-Latn">iteki</i> is not restricted to bare imperatives: it also
		precedes indirect command forms such as <i lang="ain-Latn">kusu ne na</i> and
		<i lang="ain-Latn">nankor na</i>, and the combination
		<i lang="ain-Latn">iteki … no V</i> expresses 'don't do X; instead do V'
		<Ref k="nakagawa2024" p="425" />. The alternative adverbs
		<A w="ikiya" />, <A w="ika" />, and <A w="inkian" /> take a person-marked,
		non-imperative verb rather than a bare stem ‹consensus›
		<Ref k="nakagawa2024" p="425–426" />.
	</p>

	<p>
		A community analysis proposes a structural distinction between
		<i lang="ain-Latn">iteki</i> and <i lang="ain-Latn">ikiya</i>:
		<i lang="ain-Latn">ikiya</i> is an ordinary adverb compatible with subject
		marking on the following verb
		(<i lang="ain-Latn">ikiya e=honi arka na</i>
		'be careful of [getting] a bellyache'), whereas <i lang="ain-Latn">iteki</i>
		specifically suppresses the subject prefix of the following verb, producing
		the bare imperative shape (nukopoli, aynu-corpora Discord, 2025-12-03)
		<Ref k="aynucorporadiscord" /> ‹contested›. The proposal awaits systematic
		corpus testing.
	</p>

	<p>
		On the Ishikari variant <i lang="ain-Latn">ecik(k)i</i>, a community
		observation notes a possible metathesis path
		(*<i lang="ain-Latn">iteki</i> &gt; <i lang="ain-Latn">etiki</i>
		&gt; <i lang="ain-Latn">eciki</i>; nukopoli, aynu-corpora Discord,
		2023-12-24) <Ref k="aynucorporadiscord" /> ‹speculative›. Nakagawa treats
		the dialect forms as synchronic equivalents without committing to a
		derivational order <Ref k="nakagawa2024" p="424" />.
	</p>

	<p>
		The prohibitive's relationship to the standard sentential negation
		<i lang="ain-Latn">somo</i>, its asymmetric properties across clause types,
		and its apprehensive extension are developed in
		<Xr ch="negation-prohibitive-iteki" />.
	</p>
</S>

<S t="Indirect and mitigated directives" id="indirect">
	<p>
		A family of constructions with person-marked verbs distributes directive force
		along a scale from advice and permission to near-command. All carry the
		second-person subject prefix, which distinguishes them formally from the
		bare-stem imperative
		<Ref k="nakagawa2024" p="423–424" />; <Ref k="ijas2023" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>construction</th>
				<th>value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">V yak pirka</i></td>
				<td>'you should …' (advice)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V yak wen</i></td>
				<td>'you should not …' (negative advice)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V yakka pirka</i></td>
				<td>'you may …' (permission)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V yakka wen</i></td>
				<td>'it is no use [even if] …' (futility)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V kusu ne na</i></td>
				<td>'you will …' (prospective near-command)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V nankor na</i></td>
				<td>'you probably should …' (softened expectation)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ikiya V na</i></td>
				<td>'be careful not to …' (admonitive)</td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="e=ahunke yak pirka na"
		g="2SG.A=let.in COND be.good FIN"
		tr="You should let them in."
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 8(2) [aa-irc/007#211]"
		note="The conditional-advice frame yak pirka na; the second-person subject prefix e= is present, in contrast to the bare-stem imperative which suppresses it."
	/>

	<Ex
		m="e=kor hapo e=nukar nankor"
		g="2SG.A=have mother 2SG.A=see probably"
		tr="You should probably go and check on your mother."
		cite="tamura2000:243"
		dial="SAR"
		note="With a second-person subject, nankor shades from probability into expectation or gentle suggestion; both verbs carry the second-person prefix e=."
	/>

	<Ex
		m="ikiya e=hacir na"
		g="ADM 2SG.S=fall FIN"
		tr="Take care not to fall!"
		cite="tamura2000:177"
		dial="SAR"
		note="The admonitive adverb ikiya precedes a person-marked verb with the 2SG.S prefix e=; the presence of the subject prefix distinguishes this from the bare-stem prohibitive iteki."
	/>

	<p>
		The deontic values encoded by these constructions — obligation, expectation,
		and permission — are treated systematically in
		<Xr ch="deontic-necessity" />.
	</p>
</S>

<S t="Person marking in the directive clause" id="person-marking">
	<p>
		The person-marking properties of the directive system converge on a single
		fact: the bare imperative — both singular and plural/polite — suppresses the
		second-person subject prefix. In declarative clauses the second-person singular
		agent and single-argument subject each take the prefix <i lang="ain-Latn">e=</i>;
		a verb without that prefix occupies the same slot as a subjectless or
		third-person construction. The bare imperative occupies that slot, and the
		addressee is identified pragmatically. Any object prefix that the argument
		structure requires remains on the verb
		<Ref k="nakagawa2024" p="421–423" />. The
		full paradigm of subject and object prefixes is set out in
		<Xr ch="person-marking-architecture" />.
	</p>

	<p>
		The plural and polite particle <i lang="ain-Latn">yan</i> does not restore the
		subject prefix: it marks plurality or politeness through the particle alone,
		leaving the verb stem prefix-free. The indirect-directive constructions —
		<i lang="ain-Latn">yak pirka</i>, <i lang="ain-Latn">nankor na</i>, and their
		kin — carry the second-person subject prefix as their own diagnostic property,
		setting them formally apart from the direct imperative and connecting them to
		the deontic modality system of <Xr ch="deontic-necessity" />
		<Ref k="nakagawa2024" p="423–424" />; <Ref k="ijas2023" /> ‹consensus›.
	</p>
</S>
