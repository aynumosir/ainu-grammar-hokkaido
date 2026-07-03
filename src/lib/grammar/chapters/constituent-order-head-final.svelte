<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The head-final profile" id="profile">
	<p>
		Hokkaido Ainu is verb-final. Every non-verbal element of the clause — nominals, adverbials,
		negators, subordinate clauses — precedes the verb phrase, and the verb phrase occupies the
		rightmost position in the sentence. This verb-finality holds without exception: no
		grammatical process moves a finite verb to a non-final position
		<Ref k="nakagawa2024" p="363" />. The same head-final logic ramifies down into the noun
		phrase — modifiers, relative clauses, and property verbs precede the head noun — and upward
		into clause-level relations — subordinate clauses precede main clauses, and markers that
		relate an NP to the predicate follow the NP as postpositions. Bugaeva gives the canonical
		summary: "the basic constituent order in Ainu is SV/AOV. Modifiers are prepositive, and
		subordinate clauses come before main clauses. All particles are postpositional. Topical NPs
		tend to come first" <Ref k="bugaeva2012" p="472" />.
	</p>
	<p>
		The deep typological fact behind these orders is head-marking. Satō frames the profile
		through Nichols's <Ref k="nichols1986" paren /> head-marking / dependent-marking
		distinction: the verb, as clausal head, bears obligatory person-indexing suffixes and
		prefixes that already satisfy all argument slots; overt NPs are accordingly optional, and
		when present they are appositional to those indexes rather than positional carriers of
		grammatical role <Ref k="sato2025a" p="359–361" />. The surface resemblance to Japanese —
		both verb-final, both postpositional — therefore conceals a fundamental typological
		difference: Japanese is dependent-marking, with case particles on the NP encoding
		grammatical relations; Ainu is head-marking, with person markers on the verb doing that
		work <Ref k="sato2025a" p="359–360" />; <Ref k="bugaeva2012" p="466" />.
	</p>
	<p>
		For the person-indexing apparatus that underpins this system, see
		<Xr ch="person-marking-architecture" />. For the question of whether optional and freely
		ordered overt NPs license a nonconfigurational / pronominal-argument analysis of Ainu,
		and for the Ainu-internal counter-evidence from the
		<i lang="ain-Latn">〈location〉</i>-noun class, see
		<Xr ch="nonconfigurationality-pronominal-argument" /> and
		<Xr ch="argument-realization-indexing" />. For the overall typological placement of
		Hokkaido Ainu, see <Xr ch="typological-profile" />.
	</p>
</S>

<S t="Verb-finality and the sentence template" id="verb-final">
	<p>
		Nakagawa (2024: 361, §10.1) schematizes the Ainu sentence as a left-to-right sequence:
	</p>
	<p style="margin-left:2em; font-style:italic;">
		[adverbials 0…x] &nbsp; [NPs 0…n] &nbsp; [verb phrase (n)] &nbsp; [(evidential frame)]
		&nbsp; (sentence-final particle)
	</p>
	<p>
		Within the preverbal field, "there is no fixed rule for the order of NP–NP and
		NP–adverbial; both need only be before the verb phrase"
		<Ref k="nakagawa2024" p="361" />. An evidential frame (<i lang="ain-Latn">ruwe ne</i>,
		<i lang="ain-Latn">hawe ne</i>, and the rest: see <Xr ch="evidential-schema-overview" />)
		attaches to the right of the verb phrase; clause-linking particles
		(<i lang="ain-Latn">wa</i>, <i lang="ain-Latn">hine</i>: see
		<Xr ch="clause-linkage-overview" />) extend further right. Only a connective that
		introduces the next sentence sits outside the sentence boundary.
	</p>
	<p>
		Head-finality applies at every level of structure. The following table — adapted from the
		Shibatani (1990: 23–24) inventory — shows the major construction types:
	</p>

	<table>
		<thead>
			<tr>
				<th>construction</th>
				<th>order</th>
				<th>example</th>
				<th>gloss</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>noun + postposition</td>
				<td><strong>N – Postp</strong></td>
				<td><i lang="ain-Latn">cise ta</i></td>
				<td>'at home'</td>
			</tr>
			<tr>
				<td>property verb + noun</td>
				<td><strong>PV – N</strong></td>
				<td><i lang="ain-Latn">pirka kewtum</i></td>
				<td>'good heart'</td>
			</tr>
			<tr>
				<td>genitive / possessor + noun</td>
				<td><strong>Gen – N</strong></td>
				<td><i lang="ain-Latn">sapo ninkarihi</i></td>
				<td>'sister's earrings'</td>
			</tr>
			<tr>
				<td>demonstrative + noun</td>
				<td><strong>Dem – N</strong></td>
				<td><i lang="ain-Latn">toan seta</i></td>
				<td>'that dog'</td>
			</tr>
			<tr>
				<td>numeral + noun</td>
				<td><strong>Num – N</strong></td>
				<td><i lang="ain-Latn">sine aynu</i></td>
				<td>'one person'</td>
			</tr>
			<tr>
				<td>relative clause + noun</td>
				<td><strong>Rel – N</strong></td>
				<td><i lang="ain-Latn">[beko reska] sisam</i> ‹ISH›</td>
				<td>'a Japanese who raises cows'</td>
			</tr>
			<tr>
				<td>adverb + verb</td>
				<td><strong>Adv – V</strong></td>
				<td><i lang="ain-Latn">turasno paye</i></td>
				<td>'go quickly'</td>
			</tr>
			<tr>
				<td>main verb + auxiliary</td>
				<td><strong>V – Aux</strong></td>
				<td><i lang="ain-Latn">a=e rusuy</i></td>
				<td>'want to eat'</td>
			</tr>
			<tr>
				<td>standard + equative + property verb</td>
				<td><strong>Std – Eq – PV</strong></td>
				<td><i lang="ain-Latn">menoko kasuno okirasnu</i></td>
				<td>'stronger than a woman'</td>
			</tr>
			<tr>
				<td>clause + question particle</td>
				<td><strong>Cl – Q</strong></td>
				<td><i lang="ain-Latn">pirka-p ne ya</i></td>
				<td>'is (it) something good?'</td>
			</tr>
		</tbody>
	</table>
	<p>
		<Ref k="shibatani1990" p="22" paren /> notes one structural feature that sits awkwardly
		with the "ideal SOV" characterization: Ainu is simultaneously verb-final and heavily
		prefixing, with person-marking affixes, applicative prefixes, and incorporated nouns
		attaching to the left of the verb root. In the Greenbergian correlates of SOV order,
		postpositions, Rel–N, and Gen–N are harmonic, but prefixing morphology is not
		<Ref k="shibatani1990" p="22" />. The prefixing pattern follows directly from
		head-marking: the clausal head hosts its argument indexes and derivational material to the
		left of the root, independently of the clause's surface word order ‹contested›.
	</p>
</S>

<S t="Preverbal NP order: free or fixed?" id="np-order">
	<p>
		Whether the ordering of agent (A) and object (O) NPs among the preverbal positions is
		grammatically fixed is the central word-order debate in Ainu studies. Two readings of the
		same data have been sustained in the literature.
	</p>
	<p>
		Shibatani (1990: 22) argues that word order encodes grammatical role: "Since there are no
		case inflections on nouns, word order plays as important a role as in English in determining
		the grammatical functions of certain nouns." He presents the following pair as a minimal
		role-contrast ‹contested›:
	</p>

	<Ex
		m="kamuy aynu rayke"
		g="bear person kill"
		tr="The bear killed the man."
		cite="shibatani1990:22"
		dial="HK"
		note="Shibatani ex. 23a. The verb rayke carries no overt person marker (both arguments are third person, zero-indexed). On Shibatani's reading, the first NP is agent and the second is object by linear position alone."
	/>

	<Ex
		m="aynu kamuy rayke"
		g="person bear kill"
		tr="The man killed the bear."
		cite="shibatani1990:22"
		dial="HK"
		note="Shibatani ex. 23b. With the NPs reversed, the person is now the agent and the bear the object. Shibatani allows OSV inversion when context or semantics prevents misinterpretation."
	/>

	<p>
		Nakagawa counters with the observation that the same speaker, in the same session,
		produces three distinct orderings of the three arguments of the four-place verb
		<i lang="ain-Latn">epakasnu</i> 'teach', all describing the same scene: 'my wife taught
		our daughter women's work' <Ref k="nakagawa2024" p="363" />; reproduced in English in
		<Ref k="nakagawa2022pos" paren />:
	</p>

	<table>
		<thead>
			<tr>
				<th>ex.</th>
				<th>NP order</th>
				<th>Ainu (Chitose)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>700</td>
				<td>IO – A – DO</td>
				<td><i lang="ain-Latn">menoko ne hike &nbsp; a=macihi &nbsp; menoko monrayke &nbsp; epakasnu</i></td>
			</tr>
			<tr>
				<td>701</td>
				<td>IO – DO – A</td>
				<td><i lang="ain-Latn">menoko ne hike &nbsp; menoko monrayke &nbsp; a=macihi &nbsp; epakasnu</i></td>
			</tr>
			<tr>
				<td>702</td>
				<td>A – IO – DO</td>
				<td><i lang="ain-Latn">a=macihi anakne &nbsp; menoko-po &nbsp; menoko monrayke &nbsp; epakasnu</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		A further ordering (DO – A – IO) appears in a Saru instance by the same speaker
		<Ref k="nakagawa2024" p="363–364" />. Nakagawa concludes that "which one is the subject
		cannot be grammatically determined" from word order or NP morphology; common sense — the
		plausibility that a wife teaches a daughter, not the reverse — is what rules out the
		inverted reading <Ref k="nakagawa2024" p="363" />. Bugaeva independently states the same
		finding: Ainu "does not show the syntactic relations subject and object either by case
		marking or by word order" <Ref k="nakagawa2022pos" /> ‹contested›.
	</p>
	<p>
		Satō (2008: 2) holds a middle ground: roles are signalled by "語順 or 文脈 (word order
		or context)", allowing that either mechanism may operate without assigning priority to
		either.
	</p>
	<p>
		Refsing's Shizunai data present a third position <Ref k="refsing1986" paren />, §2.4,
		reporting Chiri (1936: 167): a default SOV order when both subject and object are full NPs,
		with systematic deviation to O–S–V when the subject is a prefixal person marker (the object
		NP then precedes the prefix-bearing verb). Three-place clauses show "flexible" ordering,
		with IO before DO as the most frequent pattern when the subject is a prefix (§13.4.3).
		These regularities match Nakagawa's Chitose data as statistical tendencies, not as
		categorical rules ‹contested›.
	</p>
	<p>
		The zero-marking of third-person arguments — the bare verb stem simultaneously serves as
		the third-person and citation form — means that when both A and O are third persons, no
		index disambiguates the roles, and interpretation falls entirely to common sense or to the
		<i lang="ain-Latn">〈location〉</i>-noun class of one of the NPs
		<Ref k="sato2025a" p="369" />. The third person bears no overt affix in the standard
		Saru–Chitose paradigm; a possessive construction already concedes that third-person indexing
		is zero-marked (nukopoli, <Ref k="aynucorporadiscord" /> 2024-12-25, asserted, consistent
		with <Ref k="sato2025a" p="369" />). See <Xr ch="indefinite-fourth-person-paradigm" /> for
		the fourth-person form-set and its contrast with the zero-marked third person;
		<Xr ch="independent-personal-pronouns" /> for the free pronouns.
	</p>
</S>

<S t="Modifier order inside the NP" id="np-internal">
	<p>
		All prenominal modification is head-final: property verbs, relative clauses, demonstratives,
		genitives, and numerals all precede the head noun. Nakagawa (2024: §10.5) builds the NP
		compositionally, and the following table summarises the major modifier types:
	</p>

	<table>
		<thead>
			<tr>
				<th>modifier type</th>
				<th>order</th>
				<th>example</th>
				<th>gloss</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>property verb (attributive)</td>
				<td>PV – N</td>
				<td><i lang="ain-Latn">pirka kewtum</i></td>
				<td>'good heart'</td>
				<td><Ref k="shibatani1990" p="23" /></td>
			</tr>
			<tr>
				<td>N + N (concept + concept), compound</td>
				<td>N₁ – N₂</td>
				<td><i lang="ain-Latn">cironnup sar</i></td>
				<td>'fox tail (generic)'</td>
				<td><Ref k="nakagawa2024" p="379–381" /></td>
			</tr>
			<tr>
				<td>N + N (possessor + possessed NP)</td>
				<td>N₁ – N₂<sub>POSS</sub></td>
				<td><i lang="ain-Latn">cironnup saraha</i></td>
				<td>'that specific fox's tail'</td>
				<td><Ref k="nakagawa2024" p="381–382" /></td>
			</tr>
			<tr>
				<td>demonstrative + noun</td>
				<td>Dem – N</td>
				<td><i lang="ain-Latn">toan seta</i></td>
				<td>'that dog'</td>
				<td><Ref k="shibatani1990" p="23" /></td>
			</tr>
			<tr>
				<td>numeral-adnoun + noun</td>
				<td>Num – N</td>
				<td><i lang="ain-Latn">tu okkaypo</i></td>
				<td>'two young men'</td>
				<td><Ref k="nakagawa2024" p="383–384" /></td>
			</tr>
			<tr>
				<td>noun + numeral-noun</td>
				<td>N – Num</td>
				<td><i lang="ain-Latn">ponmenoko sinep</i></td>
				<td>'one young woman'</td>
				<td><Ref k="nakagawa2024" p="383–384" /></td>
			</tr>
			<tr>
				<td>relative clause + noun (gap-based)</td>
				<td>Rel – N</td>
				<td><i lang="ain-Latn">[a=kor kusu ne] menoko</i></td>
				<td>'the woman I am to marry'</td>
				<td><Ref k="nakagawa2024" p="385" /></td>
			</tr>
			<tr>
				<td>finite clause + formal noun</td>
				<td>[Cl] – FN</td>
				<td><i lang="ain-Latn">[kikir rek] haw</i></td>
				<td>'the sound of an insect crying'</td>
				<td><Ref k="nakagawa2024" p="386" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The two N + N types differ in syntactic status. When both nouns are in the concept
		(non-possessed) form, the construction is a compound and the two elements cannot be
		separated: <i lang="ain-Latn">*sar tanne cironnup</i> 'tail that-long fox' is
		ungrammatical. When the first noun is in the concept form and the second is in the
		possessed (affiliative) form, the construction is an appositive possessor–possessee pair
		— two NPs — and the possessor can be displaced by relativization or topicalization:
		<i lang="ain-Latn">saraha tanne cironnup</i> 'the tail that is long (of the fox)'
		is well formed <Ref k="nakagawa2024" p="380–382" />. This appositive possession structure,
		where the possessee is obligatorily head-marked and the possessor NP is optionally present
		or absent, is discussed in cross-linguistic perspective by
		<Ref k="bugaeva2021poss" paren />. See <Xr ch="noun-noun-compounding" /> for compound
		nouns and <Xr ch="noun-phrase-structure" /> for the full NP typology.
	</p>

	<p>
		Relativization is prenominal and gap-based: the head noun is placed at the right edge of
		the modifying clause, and the verb's valency identifies which argument is missing. The
		following example shows the Rel–N order in Chitose:
	</p>

	<Ex
		m="a=kor kusu ne menoko"
		g="4.A=have PURP COP woman"
		tr="The woman I am to marry."
		lit="the woman for the purpose of my having"
		cite="nakagawa2024:385"
		dial="CHI"
		note="Nakagawa ex. 753. The relative clause a=kor kusu ne 'that I am to have' precedes the head noun menoko 'woman'. The gap inside the relative clause corresponds to the object of the transitive verb kor. The construction yields a Rel–N order consistent with the general head-final profile."
	/>

	<p>
		The full prenominal relative-clause system — including case-retention inside the relative,
		headless relatives, and the continuum with nominalized complements — is treated in
		<Xr ch="prenominal-gap-relative-clauses" />.
	</p>

	<p>
		Numerals occupy two alternative slots: a numeral-adnoun precedes the noun (Num–N, e.g.,
		<i lang="ain-Latn">sine aynu</i> 'one person') and a numeral-noun follows it (N–Num, e.g.,
		<i lang="ain-Latn">ponmenoko sinep</i> 'one young woman'); the two patterns are largely
		interchangeable for common numerals <Ref k="nakagawa2024" p="383–384" />. In addition, a
		numeral-noun can float away from its head noun, separated from it by a focus particle,
		while both together still fill a single argument slot:
	</p>

	<Ex
		m="toma ka sinep ka isam"
		g="mat FOC one FOC not.exist"
		tr="There is not a single mat either."
		cite="nakagawa2024:383"
		dial="SAR"
		note="Nakagawa ex. 750. The head noun toma 'mat' and the numeral-noun sinep 'one' are separated by the focus particle ka 'also/even'; yet isam 'not exist' is a one-place intransitive, so toma and sinep must together fill the single S slot. Nakagawa analyses [[toma] ka [sinep] ka] as a discontinuous NP — a classic indicator of pragmatically free constituent structure. Community discussion notes that the N + adverbial-numeral + V order (this N ka Num V pattern) appears frequently in Ainu oral texts, perhaps more so than comparable structures in Japanese (nukopoli, aynu-corpora Discord 2024-12-12, proposed ‹contested›)."
	/>

	<p>
		For the numeral and classifier system in full, see
		<Xr ch="numeral-classifiers-ordinals-and-quantifier-syntax" />.
	</p>
</S>

<S t="Postpositions and the marking of obliques" id="postpositions">
	<p>
		Core arguments — the S/A subject and the O object — are never marked by a postposition or
		case particle; their roles are encoded by person-marking on the verb
		<Ref k="bugaeva2012" p="472, 476" />; <Ref k="shibatani1990" p="22" />. Postpositions
		mark only adjunct and oblique relations: locative, ablative, goal, instrumental, and
		comitative. All follow their NP, consistently maintaining the N–Postp order.
	</p>
	<p>
		Nakagawa (2024: 386–389, §10.6) and Bugaeva (2012: 476) distinguish two morphological
		classes. <em>Postpositional adverbs</em> can stand alone without a preceding NP and some
		can take person affixes; many derive from verbs still undergoing grammaticalization, such as
		<A w="ani" gl="with, using" /> (from 'hold') and <A w="tura" gl="together with" />.
		<em>Postpositional particles</em> (格助詞) cannot stand alone, cannot be person-indexed,
		and function as purely relational markers: the locative
		<A w="ta" gl="at, in, on" /> and <A w="un" gl="to, at (inanimate goal)" />, the ablative
		<A w="wa" gl="from" />, and the perlative <A w="peka" gl="across, along" /> belong to
		this class. The translative particle <A w="ne" gl="as, becoming" /> (homophonous with the
		copula) marks the NP-as-role ('as', 'in the role of'). The classes overlap in translation;
		the diagnostic is whether the element can form an adverbial phrase independently
		<Ref k="nakagawa2024" p="388–389" />. Full treatment is in
		<Xr ch="postpositions-local-case-and-motion-events" />.
	</p>
</S>

<S t="Negation, adjuncts, and topic fronting" id="negation-adjuncts">
	<p>
		The standard sentential negator <A w="somo" gl="not" /> and the prohibitive
		<A w="iteki" gl="don't" /> appear before the verb phrase. This is preverbal placement but
		not a special word-order fact: both are adverbs and take no person marker, so their
		preverbal position follows the general Adv–V rule directly
		<Ref k="nakagawa2024" p="365" />; <Ref k="shibatani1990" p="24" />.
	</p>

	<Ex
		m="aynu patek somo ne"
		g="person only NEG COP"
		tr="It is not only humans."
		cite="nakagawa2024:365"
		dial="SAR"
		note="Nakagawa ex. 708. The negator somo occupies the adverb slot immediately before the copula ne; it takes no person marker and cannot predicate independently. Contrast Japanese ～ではない, where the negative element is a predicative auxiliary following the complement."
	/>

	<p>
		Scope interactions of <i lang="ain-Latn">somo</i> with TAM, evidentiality, and
		evidential-outer-frame negation (<i lang="ain-Latn">ruwe somo ne</i>) are treated in
		<Xr ch="negation-somo-standard-clausal" />.
	</p>

	<p>
		The preverbal field as a whole is freely ordered with respect to adjuncts and oblique
		phrases. Time adverbials, manner adverbs, and postpositional phrases can appear in any
		sequence before the verb phrase. Refsing (§2.4) declines to formulate a rule for adjunct
		ordering in Shizunai, finding it "very free"
		<Ref k="refsing1986" paren />.
	</p>
	<p>
		Topical NPs gravitate to sentence-initial position regardless of grammatical role, and they
		are often — though not obligatorily — overtly marked by the topic particle
		<A w="anakne" gl="as for" />:
	</p>

	<Ex
		m="seta anakne pirka"
		g="dog TOP be.good"
		tr="As for the dog, it is in good condition."
		constructed
		note="Constructed for illustration. The referent of seta could be agent, patient, or topical subject of predication depending on wider context; anakne marks pragmatic foreground regardless of role."
	/>

	<p>
		Community discussion confirms that <i lang="ain-Latn">anak/anakne</i> is used more
		sparingly than Japanese <span lang="ja">は</span>: a referent already established in
		discourse need not be re-marked, and the particle carries the weight of '～に関しては (as
		regards ~)' rather than a routine topic reset (nukopoli, <Ref k="aynucorporadiscord" />
		2024-11-09, asserted, consistent with <Ref k="shibatani1990" p="38" />). The full
		distribution of <i lang="ain-Latn">anakne</i> — including its contrast with bare
		topic-initial placement, its scope, and the diachronic origin from
		<i lang="ain-Latn">an-yak</i> — is in <Xr ch="topic-marking-anakne" />. Pragmatic
		reordering beyond topic fronting, including right-dislocation and the afterthought
		construction with light verb <i lang="ain-Latn">ki</i>, is treated in
		<Xr ch="pragmatic-word-order-dislocation" />.
	</p>
	<p>
		Certain adjunct-ordering details show sensitivity to language-contact pressure. The
		traditional sequence <i lang="ain-Latn">ani patek</i> (instrumental
		<i lang="ain-Latn">ani</i> before the focus adverb <i lang="ain-Latn">patek</i> 'only')
		is in retreat in modern use in favour of the reversed
		<i lang="ain-Latn">patek ani</i>. Community analysis argues that
		<i lang="ain-Latn">patek</i> is an adverb and cannot be nominalized as Japanese
		<span lang="ja">だけ</span> can, so placing it first — matching Japanese particle
		ordering — represents Japanese-influenced reordering (nukopoli,
		<Ref k="aynucorporadiscord" /> 2024-12-16, proposed ‹contested›).
	</p>
	<p>
		Questions do not disturb the basic constituent order. Content-question words —
		<A w="hunna" gl="who" />, <A w="hemanta" gl="what" />, <A w="hunak" gl="where" /> —
		remain in situ at the position of the corresponding non-question constituent; there is no
		wh-movement to a pre-clausal position
		<Ref k="bugaeva2012" p="498" />. Polar questions are signalled by the sentence-final
		particle <i lang="ain-Latn">ya</i> or by rising intonation. The full interrogative system
		is in <Xr ch="interrogative-strategies-question-particles" />. For focus-related
		constructions including cleft-nominalization, see <Xr ch="cleft-nominalization-focus" />.
	</p>
</S>
