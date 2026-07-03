<!-- src/lib/grammar/chapters/noun-noun-compounding.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Hokkaido Ainu forms compound nouns by combining two or more roots into a single phonological
		and morphological word. The process is productive across the lexicon and supplies much of the
		vocabulary for tools, animals, plants, social roles, and place names
		<Ref k="nakagawa2024" p="261–272" />. Its dedicated structural study is
		<Ref k="kirikae1984" />, whose framework Nakagawa (2024: 261–272) reworks in terms of the
		valency of the constituent roots.
	</p>
	<p>
		The base structural type is the concatenation of two nominal concept forms: a modifier root
		followed by a head root, the head carrying the compound's semantic class. Because intransitive
		verbs and nouns share the same form in Hokkaido Ainu — the same root functions as either class
		without morphological change (see <Xr ch="word-class-inventory-and-diagnostics" />) — roots of
		any valency can serve as compound constituents. Nakagawa identifies six surface input patterns;
		all reduce to the same underlying N+N type once intransitive roots are treated as nominal
		<Ref k="nakagawa2024" p="267" />.
	</p>
	<p>
		The resulting compound is right-headed: the head is the rightmost constituent, which determines
		the grammatical class of the whole and hosts the
		<Xr ch="concept-form-affiliative-form">affiliative (possessed) suffix</Xr> and personal
		possessive affixes. The diminutive <i lang="ain-Latn">-po</i> is explicitly excluded from
		compound formation — it is a derivational suffix on a finished noun, not a compound constituent
		(see <Xr ch="nominal-derivation-diminutive-augmentative" />) <Ref k="nakagawa2024" p="265" />.
	</p>
</S>

<S t="Diagnostics: compound vs syntactic noun phrase" id="diagnostics">
	<p>
		A two-root sequence might be either a compound noun or a syntactic noun phrase (attributive
		verb or modifier noun + head noun). Nakagawa (2024: 261–264) gives four diagnostics, all
		exploiting positional differences between one-word and two-word structures
		<Ref k="nakagawa2024" p="261–264" />.
	</p>

	<S t="Person-affix position" id="diag-person-affix">
		<p>
			A possessive personal affix attaches at the left edge of the word it marks. In a syntactic
			phrase it appears on the head noun alone; in a compound it appears outside the entire
			compound. The pair below has the same referent but different morphological structure.
		</p>

		<Ex
			m="poro a=yupi"
			g="big 4.A=elder.brother"
			tr="his distinguished elder brother (modifier and noun are separate words)"
			cite="nakagawa2024:261"
			dial="HK"
			note="Syntactic phrase: the possessive affix a= precedes yupi alone; poro is an independent attributive verb."
		/>

		<Ex
			m="a=poro-yupi"
			g="4.A=big-elder.brother"
			tr="his/one's great elder brother (compound, lexicalized as a title)"
			cite="nakagawa2024:261"
			dial="HK"
			note="Compound: the possessive affix a= precedes the entire compound poro-yupi, which behaves as a single morphological word."
		/>

		<p>
			In the compound both <i lang="ain-Latn">poro</i> and <i lang="ain-Latn">yupi</i> appear in
			their concept (bare) forms; the affix is placed outside both.
		</p>
	</S>

	<S t="Affiliative-suffix position" id="diag-affiliative">
		<p>
			The <Xr ch="concept-form-affiliative-form">affiliative (possessed) suffix</Xr> marks the
			noun it heads. In a syntactic phrase it attaches to the head noun, leaving the modifier
			unsuffixed; in a compound it attaches to the outermost right edge of the whole compound.
		</p>

		<Ex
			m="a=mac-i utar"
			g="4.A=woman-POSS people"
			tr="his wife's companions / his wives (two words: affiliative on the head mac)"
			cite="nakagawa2024:262"
			dial="HK"
			note="Phrase: affiliative suffix -i attaches to mac (the concept-form stem of mat 'woman, wife'), and utar 'people/companions' is a separate syntactic head."
		/>

		<Ex
			m="a=mat-utar-i"
			g="4.A=woman-people-POSS"
			tr="his wives (compound: affiliative on the outermost edge)"
			cite="nakagawa2024:262"
			dial="HK"
			note="Compound: mat appears in its concept form inside the compound; the affiliative -i attaches to the right edge of the whole matutar unit."
		/>
	</S>

	<S t="Lexicalization and non-compositional meaning" id="diag-lexicalization">
		<p>
			When the meaning of the combination is not predictable from its parts, the sequence is
			necessarily a compound. <A w="retar" gl="be white" />{' '}<A w="cikap" gl="bird" /> is a
			transparent syntactic phrase meaning 'a white bird'; <A w="retatcir" gl="swan" /> (where
			<i lang="ain-Latn">retat</i> is a sandhi reduction of <i lang="ain-Latn">retar</i> and
			<i lang="ain-Latn">cir</i> does not occur as a free form) is a lexicalized compound meaning
			specifically 'swan' <Ref k="nakagawa2024" p="263" />. The bound status of the second
			element and the non-compositional meaning together confirm the compound analysis.
		</p>
	</S>

	<S t="The concept-form rule" id="diag-concept">
		<p>
			The most practical criterion is the observation that two nominal concept forms placed in
			immediate sequence without intervening morphology always form a compound: the absence of
			any overt linker or predicative marking removes any phrase-level analysis
			<Ref k="nakagawa2024" p="263–264" />. The series built on the head
			<A w="kap" gl="skin, bark" /> illustrates the pattern.
		</p>

		<Ex
			m="sik-kap"
			g="eye-skin"
			tr="eyelid"
			cite="nakagawa2024:263"
			dial="HK"
			note="sik 'eye' and kap 'skin, bark' are both in concept form; their immediate concatenation yields the compound 'eyelid'."
		/>

		<p>
			The same head <i lang="ain-Latn">kap</i> combines with <A w="ni" gl="tree, wood" /> to
			give <i lang="ain-Latn">ni-kap</i> 'bark', and with <A w="cep" gl="fish" /> to give
			<i lang="ain-Latn">cep-kap</i> 'fish scales / fish skin' — a productive derivational
			series <Ref k="nakagawa2024" p="263–264" />. Because property verbs such as
			<A w="retar" gl="be white" /> occur in concept form without any morphological marking, the
			only reliable way to distinguish a compound from an attributive phrase in ambiguous cases is
			the positional diagnostics above.
		</p>
	</S>
</S>

<S t="Headedness, morphological linking, and accent" id="headedness">
	<p>
		Hokkaido Ainu compound nouns are head-final (right-headed): the right constituent is both the
		semantic and morphological head. This follows directly from the diagnostics: person affixes and
		affiliative suffixes mark the word-level node — the compound as a whole — not the internal
		head constituent alone <Ref k="nakagawa2024" p="261–264" />.
	</p>
	<p>
		At the constituent juncture the modifier typically appears in its concept (bare) form, with no
		linking morpheme; this is the default for the N+N, 1-arg-V+N, and N+1-arg-V types. In type ⑤
		below the modifier appears in the affiliative (possessed) form instead. The
		morphophonological behavior of the affiliative suffix at such junctures is treated in
		<Xr ch="affiliative-suffix-morphophonology" />.
	</p>
	<p>
		Prosodically the compound constitutes a single phonological word with a single accent peak.
		Community observation (nukopoli, aynu-corpora Discord, 2024-12-09) records that
		<i lang="ain-Latn">cisekorkur</i> 'head of household' and
		<i lang="ain-Latn">kotankorkur</i> 'village chief' each carry their accent on the second
		syllable of the compound as a single word, with no secondary peak on either internal
		constituent <Ref k="aynucorporadiscord" /> ‹contested›. The general account of compound
		prosody is in <Xr ch="accent-in-compounds-and-affixation" />.
	</p>
</S>

<S t="Formation types" id="formation-types">
	<p>
		Nakagawa (2024: 267–272), building on <Ref k="kirikae1984" />, distinguishes six input
		patterns by the valency of the constituent roots. The classification is arity-based: because
		intransitive verbs freely convert to nouns in Hokkaido Ainu, types ②–④ surface as the same
		N+N morphological structure as type ① <Ref k="nakagawa2024" p="267" />. Types ⑤ and ⑥
		are morphologically distinct: ⑤ uses the affiliative form of the first element, and ⑥ places
		a transitive verb in the head position.
	</p>

	<table>
		<thead>
			<tr>
				<th>Type</th>
				<th>Input pattern</th>
				<th>Example</th>
				<th>Gloss</th>
				<th>Meaning</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>①</td>
				<td>N + N</td>
				<td><i lang="ain-Latn">sik-kap</i></td>
				<td>eye–skin</td>
				<td>eyelid</td>
			</tr>
			<tr>
				<td>②</td>
				<td>1-arg-V + N</td>
				<td><i lang="ain-Latn">rep-ni</i></td>
				<td>be.offshore–tree</td>
				<td>driftwood</td>
			</tr>
			<tr>
				<td>③</td>
				<td>N + 1-arg-V</td>
				<td><i lang="ain-Latn">menoko-monrayke</i></td>
				<td>woman–work</td>
				<td>women's work</td>
			</tr>
			<tr>
				<td>④</td>
				<td>1-arg-V + 1-arg-V</td>
				<td>—</td>
				<td>—</td>
				<td>reduces to types ①–③</td>
			</tr>
			<tr>
				<td>⑤</td>
				<td>N.<span class="sc">poss</span> + 1-arg-V</td>
				<td><i lang="ain-Latn">ami-tanne</i></td>
				<td>claw.POSS–be.long</td>
				<td>crab</td>
			</tr>
			<tr>
				<td>⑥</td>
				<td>N + 2-arg-V</td>
				<td><i lang="ain-Latn">cikap-koyki</i></td>
				<td>bird–catch</td>
				<td>hawk</td>
			</tr>
		</tbody>
	</table>

	<p>
		For types ②③ the intransitive root — including property verbs such as
		<A w="poro" gl="be big" /> and <A w="retar" gl="be white" /> — appears in what is
		synchronically a nominal concept form, since no verbal morphology is available inside the
		compound <Ref k="nakagawa2024" p="267–268" />.
	</p>

	<S t="Type ⑤: affiliative modifier" id="type-five">
		<p>
			In type ⑤ the modifier appears in the affiliative (possessed) form, giving the compound
			a relative-clause reading: 'the one whose N V-s'. The two examples below share the same
			head verb <A w="tanne" gl="be long, be tall" />.
		</p>

		<Ex
			m="ami-tanne"
			g="claw.POSS-be.long"
			tr="crab (lit. 'the one whose claw is long')"
			cite="nakagawa2024:269"
			dial="HK"
			note="ami is the affiliative form of am 'claw'; the compound names the crab by a characteristic body feature. Type ⑤: N.POSS + 1-arg-V."
		/>

		<Ex
			m="teke-tanne"
			g="hand.POSS-be.long"
			tr="thief (lit. 'the one whose hand reaches far')"
			cite="nakagawa2024:269"
			dial="HK"
			note="teke is the affiliative form of tek 'hand'. The compound lexicalizes the thief as someone whose reach is long. Type ⑤: N.POSS + 1-arg-V."
		/>

		<p>
			The affiliative morphology of the first constituent makes the compound inherently
			relational: the head noun functions as an implicit argument of the modifier verb. This
			pattern overlaps with the external-possession construction treated in
			<Xr ch="external-possession-possessor-raising" />.
		</p>
	</S>

	<S t="Type ⑥: incorporated transitive object" id="type-six">
		<p>
			In type ⑥ the first element is a concept-form noun serving as the implicit object of a
			transitive verbal head. The compound names the entity characterized by performing that
			action on that object type.
		</p>

		<Ex
			m="cikap-koyki"
			g="bird-catch"
			tr="hawk (lit. 'one that catches birds')"
			cite="nakagawa2024:271"
			dial="HK"
			note="cikap 'bird' in concept form is the implicit object of the transitive verb koyki 'catch, seize'; the compound names the hawk by its characteristic predatory action. Type ⑥: N + 2-arg-V."
		/>

		<p>
			Type ⑥ is structurally close to noun incorporation (see
			<Xr ch="noun-incorporation-object" />), the distinction being that the result here is a
			lexicalized nominal, not a predicate frame with an internal incorporated argument
			<Ref k="nakagawa2024" p="271" />.
		</p>
	</S>
</S>

<S t="Semantic patterns" id="semantics">
	<p>
		The modifier-head relationship in Hokkaido Ainu compounds is consistently endocentric: the
		head names the class of the referent and the modifier restricts or characterizes it. Three
		sub-patterns recur.
	</p>

	<S t="Attributive-restrictive compounds" id="sem-attributive">
		<p>
			The largest group has a modifier specifying material, origin, location, or a characteristic
			property of the head referent. Place names illustrate the pattern transparently:
			<A w="Poropet" gl="Horobetsu (place name)" /> derives from
			<A w="poro" gl="be big" />+<A w="pet" gl="river" /> ('large river'), and
			<A w="Siretoko" gl="Shiretoko (place name)" /> from
			<A w="sir" gl="appearance, land" />+<A w="etoko" gl="tip, front end" />
			('land's tip, cape') <Ref k="nakagawa2024" p="233" />. The same structure governs
			common-noun compounds: <i lang="ain-Latn">sisam-itak</i> 'the Japanese language (as a
			named category)' is restrictive with <A w="sisam" gl="Japanese person, non-Ainu" /> as
			modifier ‹corpus-confirmed›.
		</p>
	</S>

	<S t="Qualitative-possessive compounds: the N-kor-kur type" id="sem-possessive">
		<p>
			A productive sub-pattern combines a noun, the possession verb
			<A w="kor" gl="have, own, hold" />, and the formal-class noun
			<A w="kur" gl="person" /> to name a person who possesses or is in charge of the first
			noun. This N-kor-kur template is one of the few fully productive three-constituent patterns
			in the language.
		</p>

		<Ex
			m="cise-kor-kur"
			g="house-have-person"
			tr="head of household, houseowner"
			constructed
			note="N-kor-kur compound type; confirmed as a single phonological word by accent data (nukopoli, aynu-corpora Discord, 2024-12-09): accent falls on the second syllable of the whole compound."
		/>

		<p>
			The compound accent data (nukopoli, aynu-corpora Discord 2024,
			<Ref k="aynucorporadiscord" />) confirms that <i lang="ain-Latn">cise-kor-kur</i> and
			<i lang="ain-Latn">kotan-kor-kur</i> are single words with second-syllable accent ‹contested›.
			The same template extends to <i lang="ain-Latn">mosir-kor-kur</i> 'ruler of the land' and
			similar formations. This construction must be distinguished from the syntactic alienable
			possession phrase <i lang="ain-Latn">a=kor cise</i> 'my house', where
			<i lang="ain-Latn">kor</i> is a fully inflected transitive verb taking its own person
			prefix, not a bound medial element <Ref k="nakagawa2024" p="217–218" />. The possession
			constructions are treated in <Xr ch="adnominal-possession-double-marking" />.
		</p>
	</S>

	<S t="Attributive NP vs compound: the scope distinction" id="sem-attribution-scope">
		<p>
			Two surface-similar structures differ in their grammatical and semantic status. The
			syntactic NP <i lang="ain-Latn">kane cise</i> 'a metal house' uses
			<A w="kane" gl="metal, iron" /> as a free-standing attributive noun; the first element
			cannot receive a personal affix for this relationship (<i lang="ain-Latn">*ku=kane cise</i>
			as 'my metal's house' is not a grammatical possessive frame here), and the combination is
			compositional and productive with any house material <Ref k="nakagawa2024" p="218" />. A
			genuine compound, in contrast, passes the person-affix and affiliative-suffix tests and
			typically names a culturally fixed category. The same applies to sequences with
			<A w="kamuy" gl="spirit, deity; bear" />: a contextual phrase
			<i lang="ain-Latn">kamuy cise</i> 'a spirit's house (in this context)' is attributive; a
			lexicalized compound naming a specific object type would be non-compositional and
			semantically restricted.
		</p>
	</S>

	<S t="Coordinate and exocentric compounds" id="sem-other">
		<p>
			Pure coordinate compounds (copulative; both elements of equal rank) and exocentric
			compounds (whose semantic head is not expressed) are marginal in Hokkaido Ainu. Community
			discussion (antitwilight, aynu-corpora Discord, 2026-06-02) proposes that this sparsity
			reflects the verb-centred character of Ainu nominal derivation: because most roots can
			serve as intransitive verbs, noun formation proceeds through verb+noun or noun+verb frames
			rather than noun+noun coordination <Ref k="aynucorporadiscord" /> ‹contested›. The
			attested examples cited in the same discussion —
			<A w="haca-hapo" gl="parents (lit. father and mother)" /> as coordinate and
			<A w="po-at" gl="womb (lit. child-place)" /> as exocentric — function as lexical items
			rather than templates for new formation <Ref k="aynucorporadiscord" />.
		</p>
	</S>
</S>

<S t="The compound–phrase boundary" id="compound-phrase">
	<p>
		Deciding whether a given modifier+noun sequence is a compound or a syntactic phrase has
		direct orthographic and grammatical consequences: compounds are typically written solid (no
		space), phrases with a space between elements. The diagnostics in the preceding section
		provide the formal criteria; their application requires attention to both morphological form
		and meaning.
	</p>
	<p>
		A minimal orthographic contrast illustrates the semantic stake:
		<i lang="ain-Latn">sisam itak</i> (two words) means 'speech/language of a Japanese person
		(in context)', while <i lang="ain-Latn">sisamitak</i> (one compound word) means 'the Japanese
		language (as a named category)' (nukopoli, aynu-corpora Discord, 2024-11-05)
		<Ref k="aynucorporadiscord" /> ‹corpus-suggested›. The compound reading adds a categorical,
		language-name interpretation absent from the phrase. Accent reinforces the distinction: the
		compound bears a single peak, the phrase retains peaks on both members (nukopoli, aynu-corpora
		Discord, 2024-12-20) <Ref k="aynucorporadiscord" />. Full treatment of the prosodic test
		is in <Xr ch="accent-in-compounds-and-affixation" />.
	</p>
	<p>
		<Ref k="ijas2023" /> presents the compound–phrase distinction as a key point for learners of
		Ainu, treating the presence or absence of internal syntactic modification (TAM morphology,
		person marking) on the first element as the diagnostic: a root bearing its own grammatical
		morphology is in a phrase; a root appearing directly before the head with no such morphology
		is a compound constituent. This matches the morphological diagnostics above and makes the
		distinction accessible without reference to accent.
	</p>
	<p>
		The boundary also marks the limit of noun incorporation. The
		<Xr ch="noun-incorporation-object">object incorporation</Xr> construction shares the surface
		appearance of an N+V compound, but the incorporated noun remains an internal verbal argument
		rather than a constituent of a new nominal word. Community discussion (nukopoli, aynu-corpora
		Discord, 2023-12-25) notes that verbs taking an intransitive-type modifier present an
		ambiguity between incorporation and lexicalized compounding that cannot always be resolved by
		surface form alone <Ref k="aynucorporadiscord" /> ‹contested›. Deverbal and denominal noun
		derivation via <i lang="ain-Latn">-p/-pe</i> and related suffixes is treated in
		<Xr ch="deverbal-denominal-noun-derivation" />.
	</p>
</S>
