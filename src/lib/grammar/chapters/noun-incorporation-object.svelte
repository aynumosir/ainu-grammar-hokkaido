<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Object incorporation in the valency system" id="object-ni-construction">
	<p>
		Object noun incorporation takes a nominal stem and absorbs it into a transitive verb as its
		Patient argument, producing a single verb word that expresses subject, incorporated object, and
		predicate together <Ref k="nakagawa2024" p="480–483" />; <Ref k="satoni2022" p="§1–2" />.
		In Nakagawa's arity calculus the transitive host carries arity +2 — one slot for a subject
		argument, one for an object argument. The incorporated noun fills the object slot at arity −1,
		and the resulting compound has arity +1: an intransitive verb
		<Ref k="nakagawa2024" p="137, 480" />.
		<A w="cep" gl="fish" /> and <A w="koyki" gl="catch, strike" /> yield
		<i lang="ain-Latn">cep-koyki</i> 'fish-catch': the nominal is inside the verb word and the
		object argument position is saturated.
	</p>

	<p>
		The criterion for wordhood is the outer position of the person index
		<Ref k="nakagawa2024" p="482–483" />; <Ref k="satoni2022" p="§2" />. With a phrasal object
		the index attaches to the verb alone: <i lang="ain-Latn">cep ku=koyki</i> has the 1SG prefix
		on <i lang="ain-Latn">koyki</i>, with <i lang="ain-Latn">cep</i> as a separate noun phrase.
		Under incorporation the index precedes the entire noun-verb complex:
		<i lang="ain-Latn">ku=cep-koyki</i> 'I fish-catch'. With 4th-person marking the diagnostic is
		decisive: <i lang="ain-Latn">cep-koyki=an</i> can only be one intransitive word, because the
		transitive root <i lang="ain-Latn">koyki</i> cannot host the intransitive S suffix
		<i lang="ain-Latn">=an</i> on its own
		<Ref k="nakagawa2024" p="482–483" />. The overview of the valency system in
		<Xr ch="valency-voice-overview" /> introduces this diagnostic; the present chapter develops
		object-type incorporation specifically: the detransitivizing morphology, the semantic vocabulary
		of incorporated nouns, and the typological position of Hokkaido Ainu Object NI.
	</p>
</S>

<S t="Detransitivization and person-marking consequences" id="detransitivization">
	<p>
		Incorporating the object reduces the verb's argument count by one and shifts its person marking
		from the transitive to the intransitive paradigm. Satō's minimal pair makes the shift visible
		<Ref k="satoni2022" p="§2" />: the transitive <i lang="ain-Latn">pukusa a=ta</i> carries the
		4th-person A prefix <i lang="ain-Latn">a=</i>, which marks an indefinite transitive agent. Once
		<A w="pukusa" gl="lily bulb" /> is incorporated, the predicate becomes intransitive
		<i lang="ain-Latn">pukusa-ta=an</i>, bearing instead the 4th-person S suffix
		<i lang="ain-Latn">=an</i>.
	</p>

	<Ex
		m="pukusa a=ta"
		g="lily.bulb 4.A=dig"
		tr="Someone digs lily bulbs."
		cite="satoni2022:§2"
		note="Transitive: a= marks an indefinite 4th-person agent; pukusa 'lily bulb' is a free NP object external to the verb."
	/>

	<Ex
		m="pukusa-ta=an"
		g="lily.bulb-dig=4.S"
		tr="Someone digs lily bulbs."
		cite="satoni2022:§2"
		note="After object incorporation the intransitive S suffix =an replaces the transitive A prefix a=. The noun pukusa is now inside the verb word and can no longer appear as an external NP."
	/>

	<p>
		The suffix <i lang="ain-Latn">=an</i> is impossible on a transitive verb: a transitive verb
		with an indefinite 4th-person agent must carry the A prefix <i lang="ain-Latn">a=</i>
		<Ref k="sato2008" p="96" />; <Ref k="nakagawa2024" p="137, 140" />. It therefore serves as the
		definitive morphological test for intransitivity after Object NI. The same alternation appears
		with <A w="kinakar" gl="herb-harvest" />: the incorporated intransitive is
		<i lang="ain-Latn">kinakar=an</i>, while the phrasal construction gives the transitive
		<i lang="ain-Latn">kina a=kar</i> with the A prefix; this pair is consistent with the analysis
		in <Ref k="satoni2022" p="§2" /> and has been independently noted in community discussion
		(thegodofneet, aynu-corpora Discord, 2024 <Ref k="aynucorporadiscord" />) ‹corpus-confirmed›.
	</p>

	<p>
		The same intransitivization is attested across the Saru oral corpus. Kawakami Matsuko uses
		<i lang="ain-Latn">cep-koyki=an</i> repeatedly in narrative; the 4th-person S suffix
		<i lang="ain-Latn">=an</i> appears on what is otherwise the transitive root
		<i lang="ain-Latn">koyki</i> <Ref k="ilcaa1976" />:
	</p>

	<Ex
		m="pet or ta ran=an wa suy cep-koyki=an rok ayne"
		g="river place LOC descend.SG=4.S CONJ again fish-catch=4.S PL.PRF then"
		tr="I went down to the river and caught fish again, and at last …"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 13; ILCAA aa-irc/016#14"
		note="The 4.S suffix =an on cep-koyki is the diagnostic: after O-NI the compound is intransitive. The compound cep-koyki 'fish-catch' occurs 144 times in the Hokkaido corpus (rank 848)."
	/>

	<p>
		The person-marking shift is the sole morphological trace of Object NI. There is no overt
		incorporation morpheme, no case suffix on the noun stem, and no change to TAM morphology
		<Ref k="nakagawa2024" p="480–483" />; <Ref k="satoni2022" p="§2" />. The incorporated noun
		leaves no external argument slot: the Patient NP can no longer appear in the clause as a
		co-referential noun phrase. The two-affix ceiling — at most one subject index and one object
		index on any verb — bounds the system: Object NI uses up the object slot, leaving only the
		subject slot available <Ref k="sato2023b" p="39" />; <Ref k="bugaevakobayashi2022" p="§2" />.
	</p>
</S>

<S t="The four NI types and Chitose frequencies" id="ni-type-hierarchy">
	<p>
		Satō classifies Hokkaido Ainu noun incorporation into four types by the grammatical relation of
		the incorporated noun to the base verb
		<Ref k="sato2016" p="83–84" />; <Ref k="satoni2022" p="§3" />; <Ref
			k="nakagawa2024"
			p="483–491"
		/>. The distribution below comes from a count of 517 NI tokens in the Chitose-dialect speech of
		the narrator 白沢ナベ <Ref k="sato2016" p="83–84" />; <Ref k="satoni2022" p="§3" />. No
		pan-Hokkaido NI-type frequency study has been published; the percentages are Chitose-specific
		and derive from a single narrator's corpus ‹corpus-confirmed›.
	</p>

	<table>
		<thead>
			<tr>
				<th>type</th>
				<th>% (CHI)</th>
				<th>n</th>
				<th>Mithun (1984) parallel</th>
				<th>treated in</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>Object NI</strong></td>
				<td><strong>85.9</strong></td>
				<td>444</td>
				<td>Type I — lexical compounding</td>
				<td>this chapter</td>
			</tr>
			<tr>
				<td>Intransitive natural-force subject NI</td>
				<td>6.8</td>
				<td>35</td>
				<td>Type I</td>
				<td rowspan="3"><Xr ch="noun-incorporation-subject-possessor-stranding" /></td>
			</tr>
			<tr>
				<td>Intransitive possessor-requiring subject NI</td>
				<td>5.6</td>
				<td>29</td>
				<td>Type II — manipulates external case</td>
			</tr>
			<tr>
				<td>Transitive natural-force subject NI</td>
				<td>1.7</td>
				<td>9</td>
				<td>(Type I)</td>
			</tr>
		</tbody>
	</table>

	<p>
		Object NI accounts for nearly seven eighths of all incorporation tokens. Its alignment with
		Mithun's Type I — lexical compounding in which the incorporated noun names a general activity
		type rather than a specific referent — is consistent with the Chitose data, though the
		theoretical status of Ainu NI more broadly is a live debate
		<Ref k="mithun1984" paren />; <Ref k="satoni2022" p="§5" />; <Ref k="sato2016" p="83–84" />.
		The three subject-NI subtypes, including the possessor-stranding construction that is
		typologically the most marked, are treated in
		<Xr ch="noun-incorporation-subject-possessor-stranding" />.
	</p>

	<p>
		Ijäs's Lesson 3 introduces the two-argument transitive frame with the constructed example
		<i lang="ain-Latn">numan hekaci cep koyki</i> 'the boy caught some fish'
		<Ref k="ijas2023" />, the phrasal form of the root that appears incorporated as
		<i lang="ain-Latn">cep-koyki</i> above. Her lesson does not treat incorporation; the contrast
		between the phrasal and the incorporated frame is developed here ‹consensus›.
	</p>
</S>

<S t="Semantic fields of incorporated objects" id="semantic-fields">
	<p>
		Satō's Chitose count yields a breakdown of the semantic domains from which Object NI compounds
		draw their incorporated nouns <Ref k="satoni2022" p="§3.1" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>semantic field</th>
				<th>share of O-NI tokens (CHI)</th>
				<th>representative examples</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Space / location</td>
				<td>26%</td>
				<td><i lang="ain-Latn">soy-osma</i> 'plunge outside'</td>
			</tr>
			<tr>
				<td>Body parts</td>
				<td>18%</td>
				<td><i lang="ain-Latn">sik-erayke</i> 'stare at'</td>
			</tr>
			<tr>
				<td>Plants</td>
				<td>11%</td>
				<td>
					<i lang="ain-Latn">ni-tuye</i> 'cut trees'; <i lang="ain-Latn">pukusa-ta</i> 'dig lily
					bulbs'
				</td>
			</tr>
			<tr>
				<td>Tools / house</td>
				<td>7%</td>
				<td>
					<i lang="ain-Latn">cise-kar</i> 'house-build';
					<i lang="ain-Latn">wakka-ta</i> 'water-scoop'
				</td>
			</tr>
			<tr>
				<td>Fire</td>
				<td>5%</td>
				<td><i lang="ain-Latn">ape-ari</i> 'make a fire'</td>
			</tr>
			<tr>
				<td>Other / miscellaneous</td>
				<td>33%</td>
				<td><i lang="ain-Latn">kem-eyki</i> 'sew' (lit. 'thread-pierce')</td>
			</tr>
		</tbody>
	</table>

	<p>
		The space category reflects the frequency of spatial compounds in which a location noun
		functions as the direct Patient of the incorporating verb: these are Object NI, with the
		locative noun already in the object grammatical relation. Oblique incorporations — instruments
		and locatives that were first promoted to object position by an applicative before
		incorporating — are a distinct construction treated in
		<Xr ch="noun-incorporation-oblique-polysynthesis-debate" />
		<Ref k="shibatani1990" p="62, 66–67" />; <Ref k="nakagawa2024" p="484" />. Body-part compounds
		cluster around perception and contact verbs; plant, tool, and fire nouns reflect the
		subsistence activities that are most elaborated in Ainu oral narrative. The following Chitose
		example illustrates the tool / house type, with <A w="cise" gl="house" /> absorbed into
		<A w="kar" gl="make, build" />:
	</p>

	<Ex
		m="toy ku=hok wa or-o ta ku=cise-kar wa k=an ruwe ne wa"
		g="land 1SG.A=buy CONJ place-POSS LOC 1SG.S=house-build CONJ 1SG.S=exist track-POSS COP CONJ"
		tr="I bought land, built a house there, and lived on."
		cite="satoni2022:§3.1"
		dial="CHI"
		note="ku=cise-kar: the 1SG prefix is the sole argument index on the compound, showing that cise 'house' has been absorbed and the resulting verb is intransitive. k=an is contracted ku=an 'I exist / live'."
	/>

	<p>
		Satō's corpus attests several NI↔phrase near-pairs —
		<i lang="ain-Latn">apa asi</i> / <i lang="ain-Latn">apa-asi</i> 'close the door',
		<i lang="ain-Latn">cep koyki</i> / <i lang="ain-Latn">cep-koyki</i>,
		<i lang="ain-Latn">wakka ta</i> / <i lang="ain-Latn">wakka-ta</i> — but these alternations are
		few and not systematically productive; most Object NI compounds have no attested phrasal
		counterpart <Ref k="satoni2022" p="§3.1" /> ‹corpus-confirmed›.
	</p>
</S>

<S t="The genericity restriction and the lexical character of Object NI" id="lexicality">
	<p>
		The incorporated noun must be semantically unbounded: a generic, non-referring stem
		<Ref k="satoni2022" p="§2" />; <Ref k="sato2008" p="225–226" />. A common noun such as
		<i lang="ain-Latn">cep</i> 'fish' incorporates freely into
		<i lang="ain-Latn">cep-koyki</i> 'fish-catch'. A specific proper noun cannot:
		<i lang="ain-Latn">*Sikotpet-tomotuye</i> 'cross the Shikotsu river' is ungrammatical because
		a river name is an inherently referring expression
		<Ref k="satoni2022" p="§2" />; <Ref k="sato2008" p="225–226" />.
	</p>

	<p>
		Ainu Object NI groups with Mithun's Type I — lexical compounding in which the incorporated
		noun names the type of object typically affected rather than a referential argument
		<Ref k="mithun1984" paren />; <Ref k="satoni2022" p="§3.1, §5" />; <Ref
			k="sato2016"
			p="83–84"
		/>. Nakagawa places the same character in a distributional frame: NI compounds are commoner in
		verse than in ordinary prose or conversation, and they represent a lexicalized stratum of the
		verb vocabulary rather than a productive derivational slot
		<Ref k="nakagawa2024" p="480" />. Whether Ainu NI is best analysed as purely lexical, as
		Baker's syntactic head-movement, or as a hybrid that must reference both grammatical relations
		and semantic roles as Shibatani proposes is a dispute the read sources do not resolve; it is
		taken up in <Xr ch="noun-incorporation-oblique-polysynthesis-debate" />
		<Ref k="shibatani1988" paren />; <Ref k="shibatani1990" p="60–66" />; <Ref
			k="baker1988"
			paren
		/> ‹contested›.
	</p>

	<p>
		A small set of verbs permits simultaneous incorporation of two nominal stems, producing rare
		three-element compounds. Nakagawa cites
		<i lang="ain-Latn">cep-ya-o-kuta</i> 'dump fish onto the shore' — incorporands
		<i lang="ain-Latn">cep</i> 'fish' and <i lang="ain-Latn">ya</i> 'shore', mediated by the
		applicative <i lang="ain-Latn">o-</i> — and
		<i lang="ain-Latn">itak-mak-kus-te</i> 'use hidden words' as attested cases
		<Ref k="nakagawa2024" p="488" />. The general limit is one incorporated noun per verb
		<Ref k="shibatani1990" p="72" />, and these forms are marginal in the corpus
		‹corpus-suggested›.
	</p>

	<p>
		NI compounds that have lost any productive phrasal alternant are synchronically lexicalized
		denominal verbs; the derivational pathway that produces them connects to the broader denominal
		processes treated in <Xr ch="denominal-deverbal-verb-derivation" />. A diachronic line also
		links Object NI to the antipassive prefix <A w="i-" gl="antipassive" />: Bugaeva proposes
		that <i lang="ain-Latn">i-</i> arose from grammaticalization of O-incorporation of a generic
		noun, with the 4th-person pronoun <i lang="ain-Latn">i=</i> derived secondarily from the
		antipassive <Ref k="bugaeva2021antip" p="235–239" />, while Nam reconstructs the source as a
		distinct generic-noun stem <Ref k="nam2021" p="63–74" />; the dispute belongs to
		<Xr ch="antipassive-detransitive-i" /> ‹contested›.
	</p>

	<p>
		Where Object NI is blocked — most critically at the possessor-requiring type (impossible because
		an inflectional possessor makes the incorporated noun specific, and no reflexive rescue is
		available) — the function passes to <em>quasi-incorporation</em> (QI), a tight phrasal unit
		that is idiomatic but not yet a single verb word
		<Ref k="satoni2022" p="§4, §6" />; <Ref k="sato2016" p="88–92" />. The QI construction and
		the markedness calculus governing the NI–QI division are developed in
		<Xr ch="noun-incorporation-oblique-polysynthesis-debate" />.
	</p>
</S>
