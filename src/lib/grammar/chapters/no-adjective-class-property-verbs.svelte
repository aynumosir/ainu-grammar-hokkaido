<!-- src/lib/grammar/chapters/no-adjective-class-property-verbs.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Words expressing property concepts —
		<A w="pirka" gl="be good, be beautiful" />,
		<A w="hure" gl="be red" />,
		<A w="poro" gl="be big, grow" />,
		<A w="pon" gl="be small" />,
		<A w="wen" gl="be bad, be poor" />,
		<A w="tanne" gl="be long" />,
		<A w="pewre" gl="be young" />,
		<A w="méan" gl="be cold" /> — are intransitive verbs in Hokkaido Ainu.
		They take the nominative person affixes of the intransitive-subject set,
		predicate without a copula, derive manner adverbs with the suffix
		<i lang="ain-Latn">-no</i>, and enter the same causative and applicative
		morphology as action verbs. No separate adjective class is warranted
		<Ref k="nakagawa2024" p="118" />; <Ref k="nakagawa2022pos" p="474" />;
		<Ref k="sato2008" p="2" />; <Ref k="shibatani1990" p="19" />;
		<Ref k="refsing1986" p="76" /> ‹consensus›.
	</p>

	<table>
		<caption>Representative property verbs with 4.S predication and prenominal collocates (Saru baseline)</caption>
		<thead>
			<tr>
				<th>form</th>
				<th>gloss</th>
				<th>4.S predication</th>
				<th>prenominal collocate</th>
				<th>inchoative</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">pirka</i></td>
				<td>'be good, be beautiful'</td>
				<td><i lang="ain-Latn">pirka=an</i></td>
				<td><i lang="ain-Latn">pirka menoko</i> 'beautiful woman'</td>
				<td>same form (contextual)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hure</i></td>
				<td>'be red'</td>
				<td><i lang="ain-Latn">hure=an</i></td>
				<td><i lang="ain-Latn">hure cep</i> 'red fish'</td>
				<td>same form 'become red'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">poro</i></td>
				<td>'be big, be large'</td>
				<td><i lang="ain-Latn">poro=an</i></td>
				<td><i lang="ain-Latn">poro cise</i> 'big house'</td>
				<td>same form 'grow, become big'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">pon</i></td>
				<td>'be small'</td>
				<td><i lang="ain-Latn">pon=an</i></td>
				<td><i lang="ain-Latn">pon hekaci</i> 'small child'</td>
				<td>same form 'become small'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">wen</i></td>
				<td>'be bad, be poor'</td>
				<td><i lang="ain-Latn">wen=an</i></td>
				<td><i lang="ain-Latn">wen kamuy</i> 'bad deity'</td>
				<td>same form</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">tanne</i></td>
				<td>'be long'</td>
				<td><i lang="ain-Latn">tanne=an</i></td>
				<td><i lang="ain-Latn">tanne ni</i> 'long stick'</td>
				<td>same form 'lengthen'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">pewre</i></td>
				<td>'be young'</td>
				<td><i lang="ain-Latn">pewre=an</i></td>
				<td><i lang="ain-Latn">pewre menoko</i> 'young woman'</td>
				<td>same form</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">méan</i></td>
				<td>'be cold'</td>
				<td><i lang="ain-Latn">méan=an</i></td>
				<td>—</td>
				<td>same form 'become cold'</td>
			</tr>
		</tbody>
	</table>

	<p>
		The clause-level consequences — property verbs predicating without a copula,
		the person-index frame, the interaction with negation — are treated in
		<Xr ch="property-concept-predication" />. The word-class system as a whole,
		including the diagnostic criteria that separate verbs from nouns, adverbs, and
		adnouns, is established in <Xr ch="word-class-inventory-and-diagnostics" />.
		The <i lang="ain-Latn">-no</i> adverbializer is documented in
		<Xr ch="adverbializer-no" />; causative counterparts of property verbs
		(e.g. <A w="pirka-re" gl="make good, cure" />) are treated in
		<Xr ch="transitivizer-ka-valency-pairs" />.
	</p>
</S>

<S t="The standard analysis: three lines of evidence" id="standard-analysis">
	<p>
		Three independently sufficient lines of evidence converge on the verbal
		classification of property words
		<Ref k="nakagawa2022pos" p="474–476" />; <Ref k="nakagawa2024" p="118" />.
	</p>

	<S t="Syntactic identity: the person-marking frame" id="person-marking-frame">
		<p>
			Property verbs occupy the predicate slot and receive the intransitive-subject
			(S) person prefix — the same prefix set as action intransitives, and
			distinct from the transitive-subject (A) set that nouns cannot host in this
			position at all.
			<A w="pewre" gl="be young" /> and <A w="mina" gl="laugh" /> both take
			<i lang="ain-Latn">ku=</i> as their first-singular subject:
		</p>

		<Ex
			m="sonno ku=pewre or ta ku=nu yukar ne ru-we ne"
			g="truly 1SG.S=be.young inside LOC 1SG.A=hear yukar COP track-POSS COP"
			tr="That is truly a yukar I heard back when I was young."
			cite="nakagawa2024:118"
			dial="SAR"
			note="Nakagawa ex. 1. The property verb pewre 'be young' takes the first-singular intransitive prefix ku= in the same slot as the action verb nu 'hear'; no morphological difference marks one as stative and the other as active."
		/>

		<p>
			Third-person predication is zero-marked — the same zero as on all
			third-person intransitive predicates, with no copula:
		</p>

		<Ex
			m="toan nupuri ri"
			g="that mountain be.tall"
			tr="That mountain is high."
			cite="shibatani1990:19"
			dial="HK"
			note="Shibatani ex. 13b. The property verb ri 'be tall/high' predicates the third-person subject nupuri 'mountain' with zero person marking and no copula."
		/>

		<Ex
			m="rera ruy"
			g="wind be.strong"
			tr="The wind is strong."
			cite="shibatani1990:19"
			dial="HK"
			note="Shibatani ex. 13c."
		/>

		<p>
			The same pattern holds prenominally: a property verb precedes the noun
			without any morphological change, identical to an action verb in attributive
			position. <i lang="ain-Latn">pon hekaci</i> 'small child'
			(property verb <A w="pon" gl="be small" /> + noun
			<A w="hekaci" gl="child" />) deploys the same verb-before-noun construction
			as <i lang="ain-Latn">apkas utar arki ruwe ne</i>
			'the walking people came' (action verb <A w="apkas" gl="walk" /> prenominally)
			<Ref k="nakagawa2022pos" p="475" />. In neither case does the verb carry
			an attributive morpheme or particle.
		</p>
	</S>

	<S t="Morphological identity: causative and applicative morphology" id="morphological-identity">
		<p>
			The causative suffix <i lang="ain-Latn">-re</i> (and its allomorphs
			<i lang="ain-Latn">-e</i>, <i lang="ain-Latn">-ka</i>) attaches to
			property verb stems when the semantics licenses a causative reading,
			producing transitive counterparts exactly as it does from action intransitives
			<Ref k="nakagawa2022pos" p="476" />.
			<A w="pirka-re" gl="make good, make beautiful, cure" /> is derived from
			<A w="pirka" gl="be good" /> and
			<A w="wen-re" gl="make bad" /> from <A w="wen" gl="be bad" />.
			Even roots that are predominantly stative in corpus use feed the causative:
			<A w="kiyanne" gl="be older, be senior" /> yields
			<A w="kiyanne-re" gl="treat as a senior, defer to as an elder" />,
			showing that a latent inchoative channel is available even where spontaneous
			onset is infrequent <Ref k="nakagawa2024" p="119" />. The full transitivizer
			system is treated in <Xr ch="transitivizer-ka-valency-pairs" />.
		</p>
	</S>

	<S t="Semantic identity: the stative–inchoative duality" id="stative-inchoative">
		<p>
			Ainu intransitive verbs encode both the state and the transition into the
			state in a single form
			<Ref k="nakagawa2024" p="118–119" />;
			<Ref k="nakagawa2022pos" p="477" />;
			<Ref k="shibatani1990" p="19" />.
			<A w="poro" gl="be big; become big, grow" /> reads as stative in one
			context and as inchoative in another; the same holds for
			<A w="hure" gl="be red; become red" /> and
			<A w="méan" gl="be cold; become cold" />.
			This is not a property peculiar to property words: the copula
			<A w="ne" gl="be; become" />, the existential
			<A w="an" gl="exist; come into being" />, and
			<A w="siknu" gl="be alive; revive" /> show the same duality
			<Ref k="nakagawa2024" p="118–119" />.
			The inchoative imperative of a property verb therefore takes the bare
			stem directly:
		</p>

		<Ex
			m="tunasno pirka"
			g="quickly be.good"
			tr="Get well quickly!"
			cite="shibatani1990:19"
			dial="HK"
			note="Shibatani (1990: 19). The bare property verb pirka 'be good / be healthy' receives an inchoative reading under the imperative frame. No dedicated inchoative form exists; the reading 'become good/healthy' is forced by context."
		/>

		<p>
			The periphrastic inchoative with the copula is blocked.
			<i lang="ain-Latn">*hure ne</i> for 'become red' and
			<i lang="ain-Latn">*poro ne</i> for 'become big' are ungrammatical:
			the inchoative reading is already carried by the bare property verb, and
			the copula <i lang="ain-Latn">ne</i> in that position constructs a
			nominal predicate ('be/become a —'), a structurally distinct construction
			treated in <Xr ch="copula-ne-predicate-nominals" />
			<Ref k="nakagawa2024" p="119" />; <Ref k="nakagawa2022pos" p="477" />.
		</p>
	</S>
</S>

<S t="Diagnostic evidence" id="diagnostics">
	<p>
		The three arguments above translate into a battery of formal diagnostics that
		separate property verbs from the other word classes in Nakagawa's inventory
		<Ref k="nakagawa2024" p="115–116" />; <Ref k="nakagawa2022pos" p="473" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>diagnostic</th>
				<th>property verb (<i lang="ain-Latn">pirka</i>)</th>
				<th>noun (<i lang="ain-Latn">menoko</i> 'woman')</th>
				<th>adnoun (<i lang="ain-Latn">tan</i> 'this')</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Takes intransitive-S person prefix</td>
				<td>✓ <i lang="ain-Latn">ku=pirka</i></td>
				<td>✗ (predication requires <i lang="ain-Latn">ne</i>)</td>
				<td>✗</td>
			</tr>
			<tr>
				<td>Predicates without copula</td>
				<td>✓ <i lang="ain-Latn">pirka=an</i></td>
				<td>✗ requires <i lang="ain-Latn">kamuy ne</i></td>
				<td>✗</td>
			</tr>
			<tr>
				<td>Negated by <i lang="ain-Latn">somo…ki</i></td>
				<td>✓ <i lang="ain-Latn">pirka somo ki</i></td>
				<td>✗ (nominal negation <i lang="ain-Latn">somo ne</i>)</td>
				<td>N/A</td>
			</tr>
			<tr>
				<td>Derives adverb with <i lang="ain-Latn">-no</i></td>
				<td>✓ <i lang="ain-Latn">pirka-no</i> 'well'</td>
				<td>✗</td>
				<td>✗</td>
			</tr>
			<tr>
				<td>Prenominal modification without morphological change</td>
				<td>✓ <i lang="ain-Latn">pirka menoko</i></td>
				<td>✗ (requires relative clause)</td>
				<td>✓ <i lang="ain-Latn">tan menoko</i></td>
			</tr>
			<tr>
				<td>Takes causative <i lang="ain-Latn">-re/-e/-ka</i></td>
				<td>✓ <i lang="ain-Latn">pirka-re</i></td>
				<td>✗</td>
				<td>✗</td>
			</tr>
			<tr>
				<td>Nominalised by <i lang="ain-Latn">-p/-pe</i></td>
				<td>✓ <i lang="ain-Latn">pirka p</i> 'a good one'</td>
				<td>✓ (head noun directly)</td>
				<td>✓ <i lang="ain-Latn">tan-pe</i> 'this thing'</td>
			</tr>
		</tbody>
	</table>

	<p>
		The first four diagnostics align property verbs with verbs and against
		both nouns and adnouns. Diagnostic five — prenominal modification without
		morphological change — is shared between property verbs and adnouns, which
		accounts for the apparent adjective-like quality of items like
		<A w="pirka" /> and <A w="pon" gl="be small" /> in noun-modifying position.
		Diagnostic seven shows that property verbs also enter the
		<Xr ch="nominalization-p-pe"><i lang="ain-Latn">-p/-pe</i> nominalization</Xr>
		slot exactly as action verbs do.
	</p>

	<p>
		<Ref k="ijas2023" /> presents property verbs as intransitive stative verbs
		throughout the pedagogical guide, with no separate adjective paradigm and with
		stative versus inchoative readings resolved by context.
		<Ref k="sato2008" p="2" /> groups property words in the intransitive verb
		class without an adjective subclass.
		<Ref k="refsing1986" p="76" /> reaches the same conclusion for the Shizunai
		dialect.
	</p>
</S>

<S t="The candidate counter-class: adnouns, poro and pon, and the historical analysis" id="candidate-counter-class">
	<p>
		Three items have been taken to suggest a residual adjective class: (a) the
		adnoun (連体詞) class proper, (b) the specific items
		<A w="poro" gl="be big, grow" /> and <A w="pon" gl="be small" />, and
		(c) Kindaichi's pre-1942 grammar.
	</p>

	<S t="The adnoun class" id="adnoun-class">
		<p>
			Nakagawa establishes a genuine adnoun class (連体詞) defined by
			morphosyntactic criteria: members modify a noun, cannot serve as a
			predicate, and take no person affix
			<Ref k="nakagawa2024" p="116, 283" />; <Ref k="nakagawa2022pos" p="473" />.
			Its inventory comprises demonstratives
			(<i lang="ain-Latn">tan</i> 'this', <i lang="ain-Latn">toan</i> 'that',
			<i lang="ain-Latn">ne</i> 'the aforementioned'),
			numeric prenominals
			(<i lang="ain-Latn">sine</i> 'one-', <i lang="ain-Latn">tu</i> 'two-'),
			interrogatives (<i lang="ain-Latn">hemanta</i> 'which kind'),
			indefinites, and a residual set of general adnouns —
			<i lang="ain-Latn">oar</i> 'one-of-a-pair',
			<i lang="ain-Latn">kes</i> 'every',
			<i lang="ain-Latn">pinne</i> 'male',
			<i lang="ain-Latn">matne</i> 'female',
			<i lang="ain-Latn">oya</i> 'other'
			<Ref k="nakagawa2024" p="283" />.
			None of these carries a property meaning in the sense relevant to
			adjective typology; class membership rests entirely on the morphosyntactic
			diagnostics above. The demonstrative prenominals and their discourse-anaphoric
			subsets are treated in <Xr ch="demonstratives-anaphora-definiteness" />.
		</p>
	</S>

	<S t="poro and pon: verbs with prominent prenominal distribution" id="poro-pon">
		<p>
			<A w="poro" gl="be big, grow" /> and <A w="pon" gl="be small" /> appear
			as predicates — <i lang="ain-Latn">a=kor cise poro=an</i>
			'my house is big' (constructed) — and as prenominal modifiers —
			<i lang="ain-Latn">poro nupuri</i> 'a big mountain'.
			In prenominal position they are surface-identical to adnouns, because
			neither position displays person-affix morphology. The predicate data,
			however, show that they take S-affixes like other property verbs; Nakagawa
			classifies them as verbs
			<Ref k="nakagawa2024" p="118" />; <Ref k="nakagawa2022pos" p="474" />.
		</p>

		<p>
			Place names attest their prenominal frequency particularly clearly:
			<i lang="ain-Latn">Poro-pet</i> 'big river' and
			<i lang="ain-Latn">Pon-bets</i> 'small river' are compounds of the type
			intransitive-verb-root + noun → nominal
			<Ref k="nakagawa2024" p="267–268" />, the same formation available to
			any intransitive verb root. The broader verb-centredness of Ainu nominal
			derivation — in which nearly every noun has a simultaneous intransitive-verb
			reading and noun-formation operates principally through verbal roots —
			supports classifying <i lang="ain-Latn">poro</i> and
			<i lang="ain-Latn">pon</i> as verbs whose prenominal distribution happens
			to be prominent
			(antitwilight, aynu-corpora Discord, 2026-06-02)
			<Ref k="aynucorporadiscord" /> ‹contested›.
		</p>
	</S>

	<S t="Kindaichi's adjective class and its rejection" id="historical-adjective">
		<p>
			<Ref k="kindaichi1936" /> §189–190 posits a 形容詞 (adjective) class with
			predicative person-inflection (<span lang="ja">形容詞の人稱變化</span>),
			attributive use (<span lang="ja">連体形</span>), and a participial form
			(<span lang="ja">分詞形容詞</span>). The predicative paradigm uses the
			same intransitive-subject prefixes as verbs — the observation that
			ultimately enabled the merger. <Ref k="chiri1942" /> argued that since
			adjective-meaning words and action verbs share their full inflectional
			frame, their person-marking morphology, and their clause-final behaviour,
			positing two classes serves no formal purpose. Chiri coined
			<span lang="ja">用詞</span> (<i>yōshi</i>) for the merged class, and the
			no-adjective analysis has been standard since then ‹consensus›.
			The term 用詞 is no longer in use; the merged class is simply
			動詞 (verb) in current work
			<Ref k="nakagawa2022pos" p="474" />; <Ref k="nakagawa2024" p="118" />.
		</p>

		<p>
			A residual nuance concerns the clause-linking particles
			<i lang="ain-Latn">wa</i> and <i lang="ain-Latn">no</i>.
			<i lang="ain-Latn">wa</i> links clauses whose predicate describes a state
			(<i lang="ain-Latn">pirka wa</i> 'since it is good'), while
			<i lang="ain-Latn">no</i> links clauses describing a dynamic event
			(<i lang="ain-Latn">somo ipe no</i> 'without eating'). Because property
			verbs cluster at the static pole, the contrast was sometimes read as a
			syntactic trace of an adjective/verb boundary.
			<Ref k="nakagawa2022pos" p="479" /> demonstrates that the split tracks the
			static/dynamic semantic axis of the whole VP — it does not mark a
			part-of-speech boundary within the verbal system ‹consensus›. The linking
			contrast is examined in <Xr ch="property-concept-predication" />.
		</p>
	</S>
</S>

<S t="Comparison and degree" id="comparison-degree">
	<p>
		Degree and comparison are expressed through verbal and adverbial means,
		not through dedicated adjectival morphology. The postpositional adverb
		<A w="akkari" gl="more than (X), exceeding" /> takes an object-marked
		antecedent and frames the comparison with a bare property verb predicate
		unchanged in form: <i lang="ain-Latn">en=pirka akkari pirka=an</i>
		'you are more beautiful than I am' (constructed). Degree adverbs such as
		<A w="earkinne" gl="very, extremely" /> and
		<A w="poronno" gl="greatly, very much" /> modify a property verb directly,
		and the equative uses <A w="neno" gl="similar to, like" />.
		In every pattern, the property verb itself remains morphologically unchanged —
		which follows from its verbal status, since Ainu verbs in general carry
		no degree inflections. These strategies are documented with corpus examples
		in <Xr ch="adverbs-degree-comparison" />. <Ref k="kanazawa1898" />; <Ref k="biratori1969" />
	</p>
</S>

<S t="Typological framing" id="typological">
	<p>
		In the typological survey of intransitive predication, languages range from
		those encoding property concepts in a dedicated open-class adjective
		(English, Russian) to those using a verbal strategy, where property words
		are simply intransitive stative verbs, to those using a nominal strategy
		<Ref k="stassen1997" paren />; <Ref k="nakagawa2022pos" p="474" />.
		Hokkaido Ainu falls squarely in the verbal-encoding type by every formal
		diagnostic: property words pattern with verbs in their morphology and
		predication, and no morphological or syntactic slot is reserved for
		adjectives alone ‹consensus›.
	</p>

	<p>
		This places Ainu with Japanese and Korean, whose <i lang="ja">形容詞</i>
		class is itself a closed verbal category. Nakagawa draws the parallel
		explicitly: Ainu "adjectives" are verb-type — modifying a noun directly
		without an attributive morpheme — in contrast to the noun-type strategy
		where a linking particle or agreement marker intervenes
		<Ref k="nakagawa2022pos" p="475" />.
		<Ref k="shibatani1990" p="19" /> states the outcome concisely:
		"adjective-meaning words become predicates without any copula, in exactly
		the same way as verbs."
	</p>

	<p>
		A community hypothesis in the aynu-corpora discussion archive proposes
		that the existential <A w="an" gl="exist, be present" /> in forms like
		<i lang="ain-Latn">pirka an</i> 'be good; become good' might represent
		a distinct aspect marker for onset of state — parallel to
		<i lang="ain-Latn">ne an</i> 'become X' alongside copular
		<i lang="ain-Latn">ne</i> 'be X' (nukopoli, aynu-corpora Discord, 2024-11-15)
		<Ref k="aynucorporadiscord" /> ‹speculative›.
		The bare corpus data show <i lang="ain-Latn">pirka an</i> collocating with
		inchoative-oriented translations in certain narrative frames, but no primary
		source in the descriptive literature distinguishes a grammaticalized
		onset-of-state use of <i lang="ain-Latn">an</i> here from its ordinary
		existential value. The hypothesis is noted as a lead for further corpus
		investigation.
	</p>
</S>
