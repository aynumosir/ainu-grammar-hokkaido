<!-- src/lib/grammar/chapters/interjections-ideophones-sound-symbolism.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Word-class status" id="overview">
	<p>
		Interjections (間投詞) occupy the most peripheral position in Hokkaido Ainu's part-of-speech
		system. The diagnostic is syntactic: an interjection enters no grammatical relation with any
		other clause element and constitutes a complete utterance by itself
		<Ref k="nakagawa2024" p="290" />; <Ref k="sato2008" p="2–3" />. This separates them
		from <Xr ch="adverbs-degree-comparison">adverbs</Xr>, which share the arity-zero slot but
		modify a VP, and from particles, which attach to an autonomous element. The six-class system
		and its diagnostics are laid out in <Xr ch="word-class-inventory-and-diagnostics" />.
	</p>
	<p>
		Refsing, working on Shizunai, treated interjections as a member of a single nominal
		macro-class together with conjunctions and adverbs, rather than as an independent class
		<Ref k="refsing1986" p="74, 76" />. Nakagawa and Satō reject the lumping: adverbs and
		conjunctions enter syntactic relations; canonical interjections do not
		<Ref k="nakagawa2024" p="290" />. The categories do, however, grade into each other at the
		margin — directive words like <i lang="ain-Latn">hetak</i> and <i lang="ain-Latn">hokure</i>
		can immediately precede an imperative verb, functioning as manner adverbs, while retaining
		their classification as interjections in Nakagawa's analysis ‹contested›
		<Ref k="nakagawa2024" p="292" />.
	</p>
	<p>
		The class is large and heavily dialect-specific: the same expressive domain may be covered by
		phonologically unrelated forms in different Hokkaido varieties, and many items have no
		straightforward equivalents across dialects <Ref k="nakagawa2024" p="290–292" />.
	</p>
</S>

<S t="The interjection inventory" id="inventory">
	<p>
		Nakagawa organises the inventory under three functional types: response words, calls, and
		emotion expressions <Ref k="nakagawa2024" p="290–293" />. The following table synthesizes
		the forms attested in the best-documented Hokkaido varieties, drawing on Nakagawa and Tamura
		for Saru <Ref k="nakagawa2024" p="290–293" />; <Ref k="tamura1996" />, and the pedagogical
		grammar of Ijäs for the broader revitalization inventory <Ref k="ijas2023" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>Form</th>
				<th>Function</th>
				<th>Distribution</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">e</i></td>
				<td>yes (assent; response to a statement)</td>
				<td>all Hokkaido</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ho</i></td>
				<td>yes (response to being called)</td>
				<td>all Hokkaido</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">irankarapte</i></td>
				<td>greeting ('hello')</td>
				<td>all Hokkaido (formal/written standard)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ikatay</i></td>
				<td>greeting</td>
				<td>Shizunai</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">iyairaykere</i></td>
				<td>thank you (formal)</td>
				<td>Saru, Chitose, and general Hokkaido</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hioy'oy</i></td>
				<td>thanks (light acknowledgment)</td>
				<td>Saru, Chitose</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hinna</i> / <i lang="ain-Latn">hunna</i></td>
				<td>thanks (women's register; given with gifts or food)</td>
				<td>upper-stream Saru <i lang="ain-Latn">hinna</i>; lower-stream <i lang="ain-Latn">hunna</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hetak</i></td>
				<td>hurry (directive)</td>
				<td>Saru, Chitose; <i lang="ain-Latn">etak</i> in some eastern varieties</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hokure</i></td>
				<td>come on; get going (directive call)</td>
				<td>Saru, Chitose</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">coco</i></td>
				<td>here (call to a dog)</td>
				<td>attested across Hokkaido varieties</td>
			</tr>
		</tbody>
	</table>

	<p>
		The two response words <i lang="ain-Latn">e</i> and <i lang="ain-Latn">ho</i> are
		distinguished by their discourse trigger: <i lang="ain-Latn">e</i> responds to a proposition
		(assent), while <i lang="ain-Latn">ho</i> responds to a direct call or address. Both are
		monomorphemic and stand alone as complete utterances.
	</p>

	<Ex
		m="e"
		g="INTERJ"
		tr="Yes."
		constructed
		dial="HK"
		note="Assent particle responding to a proposition. Homophonous with the transitive verb e 'eat (something)', which is distinguished by its syntactic position and person-marking behaviour." />

	<Ex
		m="ho"
		g="INTERJ"
		tr="Yes? / Coming."
		constructed
		dial="HK"
		note="Response to being called by name or address; distinct from the propositional assent e." />
</S>

<S t="Greeting formulae and their morphological structure" id="greetings">
	<p>
		<A w="irankarapte" gl="greetings" /> is the pan-Hokkaido greeting formula in the modern
		documentary record and is the form standard in revitalization pedagogy
		<Ref k="nakagawa2024" p="290–291" />; <Ref k="ijas2023" />. The Shizunai variety uses
		<i lang="ain-Latn">ikatay</i> in the same function; community discussion reports that
		Asahikawa speakers use a phonologically distinct greeting not shared by southern varieties
		(palestine_2026, aynu-corpora Discord, 2025-09-22, asserted;
		<Ref k="aynucorporadiscord" />). This strong dialect-specificity in the expressive vocabulary
		extends to the whole interjection class <Ref k="nakagawa2024" p="290" />.
	</p>

	<Ex
		m="irankarapte"
		g="INTERJ"
		tr="Greetings!"
		constructed
		dial="HK"
		note="Pan-Hokkaido greeting formula. Morphologically opaque when treated as an interjection; a proposed decomposition is discussed below." />

	<p>
		The morphological structure of <i lang="ain-Latn">irankarapte</i> is not decomposed in the
		descriptive grammars consulted, which treat it as a frozen formula. A community analysis
		proposes <i lang="ain-Latn">i=rankarap-te</i>, applying an <i lang="ain-Latn">i=…-te</i>
		causative construction to the verb <i lang="ain-Latn">rankarap</i> 'approach, greet formally',
		yielding something like 'let me greet you / the act of greeting' (nukopoli, aynu-corpora
		Discord, 2024-11-25; <Ref k="aynucorporadiscord" />) ‹contested›. The same analysis is
		proposed for <A w="iyairaykere" gl="thank you (formal)" /> as
		<i lang="ain-Latn">i=yairayke-re</i> from <A w="yairayke" gl="be grateful" />, analogous to
		the pattern 'the thing one ought to be grateful for' — a parallel noted there with English
		<i>excited / exciting</i> ‹contested›. Neither proposal has been tested against corpus
		attestations of the component morphemes, and they are best treated as working hypotheses.
	</p>

	<p>
		Among the thank-you forms, a pragmatic scale runs from informal to formal. Community
		discussion documents the Saru hierarchy as: <i lang="ain-Latn">hioy'oy</i> — a light
		acknowledgment appropriate for ordinary exchanges — is less formal than
		<i lang="ain-Latn">hinna</i> (lower-stream Saru <i lang="ain-Latn">hunna</i>), which in
		turn is reinforced by reduplicated <i lang="ain-Latn">hinna hinna</i> for greater warmth,
		with <i lang="ain-Latn">iyayiraykere</i> as the most formal register expression (nukopoli,
		aynu-corpora Discord, 2024-12-26, asserted; <Ref k="aynucorporadiscord" />) ‹corpus-suggested›.
		The form <i lang="ain-Latn">hinna</i> is specifically associated with women's speech and
		accompanies the gesture <i lang="ain-Latn">raymik</i> (touching the index finger beneath the
		nose) when receiving gifts or food; the corresponding male gesture is
		<i lang="ain-Latn">onkami</i> (both hands). The gender-register conditioning of these forms
		is treated in <Xr ch="gendered-register-speech" />.
	</p>

	<Ex
		m="hioy'oy"
		g="INTERJ"
		tr="Thanks!"
		constructed
		dial="SAR"
		note="Light informal acknowledgment in Saru and Chitose. Less formal than hinna or iyayiraykere." />

	<p>
		The affirmative response word in dialogue is typically the bare assent particle
		<i lang="ain-Latn">e</i>, but the reduced formal-noun form
		<i lang="ain-Latn">ruwe</i> appears in some spoken contexts as a compact affirmative response
		— a final-particle use of the same element that heads the inferential evidential construction.
		Its relation to the full evidential predicate is treated in <Xr ch="formal-defective-nouns" />.
	</p>
</S>

<S t="Directive and affective interjections" id="directives">
	<p>
		<A w="hetak" gl="hurry; quickly" /> and <A w="hokure" gl="come on; get going" /> are
		directive interjections urging speed or movement
		<Ref k="nakagawa2024" p="292" />. Both appear most commonly as standalone utterances, but
		<i lang="ain-Latn">hetak</i> can also precede an imperative verb, where it functions as a
		manner adverb rather than as a pure interjection. Old documentary sources include sequences
		interpretable as <i lang="ain-Latn">hetak ek</i> 'come quickly' and
		<i lang="ain-Latn">hetak hosipi</i> 'go home quickly', where
		<i lang="ain-Latn">hetak</i> modifies the following imperative (nukopoli, aynu-corpora
		Discord, 2024-11-24, proposed; <Ref k="aynucorporadiscord" />) ‹contested›.
	</p>

	<Ex
		m="hetak"
		g="INTERJ"
		tr="Hurry!"
		constructed
		dial="SAR"
		note="Standalone directive interjection. The initial h is absent in some eastern Hokkaido varieties (etak)." />

	<Ex
		m="hetak ek"
		g="quickly come"
		tr="Come quickly!"
		constructed
		dial="SAR"
		note="Adverbial use of hetak before the imperative ek 'come'; a boundary case between the interjection and adverb classes. The 2SG imperative of ek is the bare stem." />

	<p>
		The animal call <i lang="ain-Latn">coco</i> — used to summon a dog — is phonologically
		stable across the documented Hokkaido varieties <Ref k="nakagawa2024" p="292" />. Its CVCV
		shape is shared with the reduplicative mimetics discussed in the following section,
		though no etymological connection is documented ‹speculative›.
	</p>
</S>

<S t="Ideophones and reduplicative mimetics" id="ideophones">
	<p>
		A small set of nouns encodes inherent plurality or collective multiplicity through
		reduplication — what Kindaichi and Chiri's grammar calls 疊語法 (reduplicative word
		formation). The following inventory is drawn from their survey of Hokkaido forms
		<Ref k="kindaichi1936" p="31" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>Form</th>
				<th>Meaning</th>
				<th>Semantic domain</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">chaichai</i></td>
				<td>twigs, small branches</td>
				<td>dispersed plant material</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kaukau</i></td>
				<td>hail</td>
				<td>multiple falling objects</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kankan</i></td>
				<td>intestines</td>
				<td>coiled, multiple-stranded tissue</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ramram</i></td>
				<td>fish scales</td>
				<td>repeated small surface elements</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">taktak</i></td>
				<td>balls, rounded objects</td>
				<td>multiple discrete round things</td>
			</tr>
		</tbody>
	</table>

	<p>
		These are nouns, not adverbs or particles; they occur as arguments of the verb rather than
		as depictive adjuncts. Their shared morphological character — a CVC(V) base doubled to form
		a disyllabic or tetrasyllabic whole — encodes the dispersed or multiple nature of the
		referent: twigs as opposed to a single branch, hailstones as a mass, intestines as a coiled
		plurality. Kindaichi and Chiri note that some inherently-plural nouns of this kind trigger a
		plural verb form in the governing predicate, though the reduplicative noun itself carries no
		obligatory agreement marking <Ref k="kindaichi1936" p="31" />. The cross-chapter treatment
		of reduplication phonology — including the templates, base-copy processes, and their
		interaction with morphophonological sandhi — is in <Xr ch="reduplication-phonology-rule-interaction" />.
	</p>

	<Ex
		m="kankan a=e"
		g="intestines 4.A=eat"
		tr="They eat intestines."
		constructed
		note="Reduplicative noun kankan as a direct object. The 4th-person transitive agent a= marks unspecified human participants. Constructed to illustrate the argument-noun status of reduplicative mimetics." />

	<p>
		These lexically closed reduplicative nouns are distinct from two other reduplication phenomena
		in the language: verbal reduplication, which encodes iterativity or distributive plurality
		(see <Xr ch="reduplication-phonology-rule-interaction" />), and pragmatic intensification by
		repetition of an interjection or adverb (as in <i lang="ain-Latn">hinna hinna</i> above).
		The reduplicative nouns do not extend to new bases by productive rule; they are individually
		listed in dictionaries rather than derived by a synchronic morphological operation
		<Ref k="tamura1996" />; <Ref k="nakagawa2024" p="264–265" />.
	</p>
</S>

<S t="Sound symbolism: patterns and limits of the evidence" id="sound-symbolism">
	<p>
		Whether Hokkaido Ainu has a productive phonesthemic system — systematic associations between
		phonological shape and semantic value, of the kind extensively described for Japanese and
		Korean — cannot be established from the descriptive literature accessible for this grammar.
		The reduplicative nouns show that the language uses phonological form to encode distributed
		plurality and collectivity, but whether the individual consonant or vowel choices within those
		forms carry meaning independently of the reduplication is not demonstrated by any primary
		source consulted ‹speculative›.
	</p>
	<p>
		The closest approximation to size or intensity gradation in the available data is pragmatic
		intensification through repetition: the scale
		<i lang="ain-Latn">hioy'oy</i> &lt; <i lang="ain-Latn">hinna</i> &lt;
		<i lang="ain-Latn">hinna hinna</i> represents gradient expressiveness through reduplication
		of the base form rather than through vowel or consonant substitution
		<Ref k="aynucorporadiscord" /> ‹corpus-suggested›. The adverb inventory includes words with
		degree-sensitive semantics (<Xr ch="adverbs-degree-comparison" />), but no primary source
		analyses these as phonesthemic.
	</p>
	<p>
		Ideophones and formulaic refrain syllables in oral poetry — the ritual repetition units of
		<i lang="ain-Latn">kamuy yukar</i> and the formulaic diction of
		<i lang="ain-Latn">uwepeker</i> — constitute a distinct expressive register that intersects
		with this chapter's topic. Their analysis as a poetic and ritual phenomenon belongs to
		<Xr ch="poetic-archaic-elevated-register" />.
	</p>
</S>

<S t="Morphosyntactic integration" id="morphosyntax">
	<p>
		Canonical interjections integrate into discourse by standing outside clause structure entirely;
		they do not head a predicate, fill an argument position, or modify a noun or VP. Mimetic
		words, when used depictively, can integrate at three positions.
	</p>
	<p>
		The most common integration is the <strong>adverbial slot</strong> (arity zero): a mimetic
		word appears immediately before the verb it qualifies, in the same position as a common
		adverb. The adverb class and its arity-zero definition are set out in
		<Xr ch="adverbs-degree-comparison" />. Manner adverbs like
		<A w="moyre" gl="slowly, softly" />, <A w="tunas" gl="immediately" />, and
		<A w="tuyma" gl="far away" /> show that the preverbal modifier slot is productive for
		motion- and manner-qualifying expressions <Ref k="nakagawa2024" p="273–282" />.
	</p>

	<Ex
		m="moyre arpa"
		g="slowly go"
		tr="(Someone) goes slowly."
		constructed
		dial="SAR"
		note="Manner adverb moyre in the preverbal arity-zero slot. Constructed to illustrate the adverbial integration position available to mimetic words." />

	<p>
		A second strategy uses the <strong>quotative postposition</strong>
		<A w="sekor" gl="thus; saying (quotative)" /> followed by a light verb, typically
		<A w="ki" gl="do" />. The construction <i lang="ain-Latn">[depictive] sekor ki</i> predicts
		a depicted action or produced sound as something 'thus performed': the depictive content is
		quoted under <i lang="ain-Latn">sekor</i> and then asserted through the light verb. This is
		the Ainu quotative frame analysed in <Xr ch="quotative-complementation-sekor" />;
		its applicability to sound-depicting content specifically rests on limited corpus evidence
		<Ref k="nakagawa2024" p="280" /> ‹corpus-suggested›.
	</p>

	<Ex
		m="kaukau sekor ki=an"
		g="hail QUOT do=4.S"
		tr="It makes a rattling/pattering sound."
		constructed
		note="Ideophonic use of kaukau in the sekor ki light-verb frame. Constructed to illustrate the depictive quotative integration strategy." />

	<p>
		The third strategy embeds an ideophonic content in the standard
		<strong>nominalization</strong> apparatus — under a formal noun like
		<A w="pe" gl="thing, one" /> or <A w="hi" gl="thing, fact, time" /> — and then uses the
		nominalized clause as a clause argument. This integration route is not specific to ideophones
		and does not mark depictive status specially; it is shared with all clause types. The
		formal-noun complement system is described in <Xr ch="formal-defective-nouns" />.
	</p>
</S>
