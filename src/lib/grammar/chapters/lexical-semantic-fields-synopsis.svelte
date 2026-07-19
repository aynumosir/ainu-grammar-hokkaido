<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		The native core of the Hokkaido Ainu lexicon is organized around a small number of semantic
		fields whose internal structure feeds directly into the grammar. Kinship terms and body-part
		nouns constitute the <Xr ch="nominal-subclasses-and-bound-nouns">obligatorily-possessed (bound)
		noun</Xr> class. Motion verbs supply the primary paradigm of singular/plural stem suppletion.
		Colour terms and property-denoting natural-world vocabulary are encoded as stative verbs, with
		no separate adjectival category. Demonstratives, locative nouns, and postpositions combine into
		a layered spatial-deictic system anchored to river orientation. The table below maps each field
		to its grammatically active sub-structure and to the chapters that give the full account. For
		vocabulary lookup, the Itak dictionary carries the attested lexicon; this chapter is a finding
		aid, not a word list. <Ref k="bugaeva2022" p="§5.1.1" />
	</p>

	<table>
		<thead>
			<tr>
				<th>semantic field</th>
				<th>grammatically relevant feature</th>
				<th>treated in depth in</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>kinship terms</td>
				<td>
					obligatorily possessed; irregular/suppletive affiliatives; honorific possession via
					4th/indefinite person
				</td>
				<td>
					<Xr ch="kinship-honorific-possession" />,
					<Xr ch="alienable-inalienable-split" />
				</td>
			</tr>
			<tr>
				<td>body-part nouns</td>
				<td>
					obligatorily possessed; possessed forms feed external possession and S-incorporation
					(valency-retaining)
				</td>
				<td>
					<Xr ch="external-possession-possessor-raising" />,
					<Xr ch="noun-incorporation-subject-possessor-stranding" />
				</td>
			</tr>
			<tr>
				<td>natural-world vocabulary</td>
				<td>
					<A w="sir" gl="land, appearance" />-incorporation with natural-phenomenon subjects
					(valency-canceling); lexicalized <A w="kina" gl="edible plant" />/<A
						w="mun"
						gl="weed, inedible plant"
					/> folk-taxonomy distinction
				</td>
				<td>
					<Xr ch="noun-incorporation-object" />,
					<Xr ch="noun-incorporation-subject-possessor-stranding" />
				</td>
			</tr>
			<tr>
				<td>motion and directional verbs</td>
				<td>SG/PL stem suppletion; path/directional semantics; river-anchored orientation</td>
				<td>
					<Xr ch="suppletive-verbal-number" />,
					<Xr ch="postpositions-local-case-and-motion-events" />
				</td>
			</tr>
			<tr>
				<td>colour terms</td>
				<td>encoded as stative verbs predicated without a copula; no separate adjective class</td>
				<td>
					<Xr ch="no-adjective-class-property-verbs" />,
					<Xr ch="property-concept-predication" />
				</td>
			</tr>
			<tr>
				<td>spatial demonstratives and locative nouns</td>
				<td>
					three-term deictic contrast; obligatorily-possessed locative nouns; postpositional
					layering
				</td>
				<td>
					<Xr ch="demonstratives-anaphora-definiteness" />,
					<Xr ch="relational-and-spatial-nouns" />
				</td>
			</tr>
		</tbody>
	</table>

	<p>
		The contact stratum — Japanese loans clustering in the domains of domestic animals, trade goods,
		administration, and modern institutions — is treated in the contact-lexicon chapter. Loanword
		phonological adaptation (voicing neutralization, cluster break-up, epenthesis) is treated in
		<Xr ch="syllable-template" />. The vigesimal numeral system and its classifier constructions
		belong to <Xr ch="vigesimal-numeral-system" /> and <Xr ch="numeral-classifiers-ordinals-and-quantifier-syntax" />;
		the genetic position and typological profile implied by the native core lexicon are discussed in
		<Xr ch="genetic-position-macro-comparison" />.
	</p>
</S>

<S t="Kinship terms" id="kinship">
	<p>
		The kinship vocabulary encodes a four-axis grid: sex and relative age of the referent in
		sibling terms; sex of the referent in lineal terms. All kinship nouns are obligatorily
		possessed: they cannot appear without a possessor prefix, and their possessed
		(<Xr ch="concept-form-affiliative-form">affiliative</Xr>) form is built by the same suffix
		alternation found on body parts and relational nouns (see
		<Xr ch="affiliative-suffix-morphophonology" />) <Ref k="bugaeva2022" p="Ch.1 §5.1" />;
		<Ref k="nakagawa2024" p="§22.2" />. The following table gives the principal Saru-dialect terms
		with their standard meanings; the kinship system and its possessive morphology are treated fully
		in <Xr ch="kinship-honorific-possession" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>term</th>
				<th>meaning (Saru baseline)</th>
				<th>register</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><A w="hapo" gl="mother" /></td>
				<td>mother</td>
				<td>adult colloquial</td>
			</tr>
			<tr>
				<td><A w="totto" gl="mummy (infant speech)" /></td>
				<td>mother (infant-directed)</td>
				<td>infant speech</td>
			</tr>
			<tr>
				<td><A w="michi" gl="father" /> / <A w="aca" gl="father (variant)" /></td>
				<td>father</td>
				<td>adult</td>
			</tr>
			<tr>
				<td><A w="yupo" gl="elder brother" /></td>
				<td>elder brother</td>
				<td>adult</td>
			</tr>
			<tr>
				<td><A w="aki" gl="younger brother" /></td>
				<td>younger brother</td>
				<td>adult</td>
			</tr>
			<tr>
				<td><A w="sapo" gl="elder sister" /></td>
				<td>elder sister</td>
				<td>adult</td>
			</tr>
			<tr>
				<td><A w="matak" gl="younger sister" /></td>
				<td>younger sister</td>
				<td>adult</td>
			</tr>
			<tr>
				<td><A w="huci" gl="grandmother; fire goddess" /></td>
				<td>grandmother; by extension, the fire goddess</td>
				<td>adult</td>
			</tr>
			<tr>
				<td><A w="ekasi" gl="grandfather; elder man" /></td>
				<td>grandfather; elder man (respectful)</td>
				<td>adult</td>
			</tr>
			<tr>
				<td><A w="mat" gl="wife, woman" /></td>
				<td>wife; woman</td>
				<td>adult</td>
			</tr>
			<tr>
				<td><A w="hoku" gl="husband" /></td>
				<td>husband</td>
				<td>adult</td>
			</tr>
			<tr>
				<td><A w="po" gl="child (one's own)" /></td>
				<td>child (one's own)</td>
				<td>adult</td>
			</tr>
		</tbody>
	</table>

	<p>
		The following constructed example shows the obligatory possessor prefix and the affiliative
		suffix on a kinship noun:
	</p>

	<Ex
		m="ku=yup-ihi"
		g="1SG.POSS=elder.brother-POSS"
		tr="my elder brother"
		constructed
		note="The 1SG possessor prefix ku= and the affiliative suffix -ihi co-occur; the possessed form yup-ihi suppresses the final vowel o of the citation form yupo. Third-person possessor is zero-marked: yup-ihi alone = 'his/her elder brother'."
	/>

	<p>
		A register split divides adult and infant-directed forms: <A
			w="totto"
			gl="mummy (infant speech)"
		/> and <A w="popo" gl="big brother (infant speech)" /> are the infant-directed counterparts of
		<A w="hapo" /> and <A w="yupo" />, attested in Nakagawa's infant-speech table for the Horobetsu
		dialect <Ref k="nakagawa2024" p="523" />. Literary and formal registers additionally have
		<A w="ona" gl="father (literary)" /> and <A w="unu" gl="mother (literary)" /> as honorific
		equivalents of the colloquial forms, though their distribution and exact mapping vary by dialect
		(nukopoli, aynu-corpora Discord 2026-06-15; <Ref k="aynucorporadiscord" />).
	</p>

	<p>
		Dialect variation within the kinship field is considerable. <A w="hapo" /> denotes the mother
		in most Hokkaido dialects but the father in Chitose and Horobetsu (thegodofneet, aynu-corpora
		Discord 2026-06-08, asserted; <Ref k="aynucorporadiscord" />; corroborated by
		<Ref k="chiri1953" />) ‹corpus-suggested›, and the Kuril reflex carries a sibling reading. Such
		semantic drift is characteristic of kin terms cross-linguistically. The possessive morphology of
		kinship nouns, including their suppletive affiliative forms and the honorific use of the
		fourth/indefinite person in possession, is treated in <Xr ch="kinship-honorific-possession" />;
		the alienability classification they belong to is in <Xr ch="alienable-inalienable-split" />.
	</p>
</S>

<S t="Body-part terms" id="body-parts">
	<p>
		Body-part nouns are the second major obligatorily-possessed class. Like kinship terms, they
		require a possessor and appear in the <Xr ch="concept-form-affiliative-form">possessed
		(affiliative) form</Xr>; the suffix alternates among <i lang="ain-Latn">-e</i>,
		<i lang="ain-Latn">-i</i>, and <i lang="ain-Latn">-ihi</i> depending on the noun's final
		consonant and vowel quality (see <Xr ch="affiliative-suffix-morphophonology" />)
		<Ref k="bugaeva2022" p="Ch.1 §5.1" />. Core Saru terms include <A w="sik" gl="eye" />,
		<A w="tek" gl="hand" />, <A w="kema" gl="leg" />, <A w="nanu" gl="face" />,
		<A w="sapa" gl="head" />, <A w="kewtum" gl="heart, chest, mind" />,
		<A w="ramu" gl="heart, spirit, mind" />, <A w="honi" gl="belly" />,
		<A w="haw" gl="voice" />, and <A w="etor" gl="snot" />
		<Ref k="tamura1996" p="s.v." />.
	</p>

	<Ex
		m="sik-ihi"
		g="eye-POSS"
		tr="his/her eye (possessed form)"
		constructed
		note="Third-person possessor is zero; the affiliative suffix -ihi appears after consonant-final stems. Contrast tek-e 'his/her hand', where the shorter -e allomorph follows the stem-final k."
	/>

	<Ex
		m="ku=tek-e"
		g="1SG.POSS=hand-POSS"
		tr="my hand"
		constructed
		note="The 1SG possessor prefix ku= combines with the affiliative suffix -e on the body-part noun tek 'hand'."
	/>

	<p>
		Body-part nouns are the primary context for S-type noun incorporation with valency-retaining
		effect: when a body-part noun is incorporated as the S argument of an intransitive verb, the
		possessor of that body part surfaces as an added participant rather than being absorbed, so the
		construction gains a slot rather than losing one <Ref k="bugaeva2022" p="Ch.1 §4.6" />;
		<Ref k="sato2016" />. This contrasts with the valency-canceling O-incorporation typical of
		common object nouns (see <Xr ch="noun-incorporation-object" />). External possession — where
		the possessor of a body-part object is indexed on the verb rather than carried adnominally — is
		treated in <Xr ch="external-possession-possessor-raising" />. The full account of body-part
		S-incorporation is in <Xr ch="noun-incorporation-subject-possessor-stranding" />.
	</p>

	<p>
		The near-synonymous pair <A w="kewtum" gl="heart, chest, mind" /> and
		<A w="ramu" gl="heart, spirit, mind" /> is pervasive in compounds and in oral literature. Their
		distribution is partly dialectal and partly a distinction between the physical chest/heart and a
		more diffuse psychological or spiritual sense; both participate in compounding productively (e.g.
		<i lang="ain-Latn">kewtum-pirka</i> 'be good-hearted', <i lang="ain-Latn">ramu-pok</i>
		'think little of'). A community-proposed internal morphological analysis of
		<A w="esikop" gl="parent" /> as <i lang="ain-Latn">e-sik-o-p</i> 'thing from which eyes come'
		(nukopoli, aynu-corpora Discord 2023-12-11, proposed; <Ref k="aynucorporadiscord" />)
		illustrates the general productivity of body-part roots in derivation, though the specific
		etymology has not been verified in the published literature ‹speculative›.
	</p>
</S>

<S t="The natural world: geography, flora, fauna, and weather" id="natural-world">
	<S t="Geographic vocabulary" id="geography">
		<p>
			Geographic vocabulary is among the richest and highest-frequency sub-fields of the native
			lexicon. The core set includes <A w="kotan" gl="village, settlement" /> (4,210 corpus tokens,
			rank 56), <A w="pet" gl="river (the area's representative river)" /> (1,353 tokens),
			<A w="nay" gl="stream, tributary" /> (559 tokens), <A w="to" gl="lake, pond" />,
			<A w="nupuri" gl="mountain" />, <A w="atuy" gl="sea" />,
			<A w="sir" gl="land, surface, appearance" />, and
			<A w="mosir" gl="world, island, land" /> <Ref k="tamura1996" p="s.v." />;
			<Ref k="nakagawa1995" p="s.v." />.
		</p>

		<p>
			The <A w="pet" />/<A w="nay" /> distinction encodes a cultural-geographic rather than a
			purely scalar opposition. <i lang="ain-Latn">pet</i> designates the main, named river of an
			area — even a small flow, if it is the representative waterway of that locality — while
			<i lang="ain-Latn">nay</i> designates a branch stream or tributary, which may physically exceed
			a local <i lang="ain-Latn">pet</i> in volume. The community corroborates this distinction:
			<i lang="ain-Latn">nay</i> = mountain stream/tributary, <i lang="ain-Latn">to</i> = pond
			(nukopoli, aynu-corpora Discord 2023-12-11, asserted; <Ref k="aynucorporadiscord" />;
			consistent with <Ref k="tamura1996" p="s.v. pet, nay" />) ‹corpus-confirmed›. Both roots are
			morphologically unanalyzable and drive the major toponym substrate of Hokkaido (Japanese
			<i lang="ja">-betsu</i> &lt; <i lang="ain-Latn">pet</i>,
			<i lang="ja">-nai</i> &lt; <i lang="ain-Latn">nay</i>), discussed in
			<Xr ch="genetic-position-macro-comparison" />.
		</p>

		<p>
			<A w="sir" gl="land, surface, appearance" /> is notably polysemous: it covers the physical
			land surface, the external appearance or state of affairs, and the condition of the weather (as
			in compounds <i lang="ain-Latn">sir-pirka</i> 'the weather is good',
			<i lang="ain-Latn">sir-kunne</i> 'it grew dark'). The same root forms the base of the
			situational evidential <i lang="ain-Latn">siri</i> (see
			<Xr ch="siri-ne-situational">the situational evidential</Xr>). The community notes that the
			derived form <A w="sirka" gl="surface, surroundings" /> inherits the full polysemy of the base
			(nukopoli, aynu-corpora Discord 2023-12-15, asserted;
			<Ref k="aynucorporadiscord" />) ‹corpus-confirmed›.
		</p>
	</S>

	<S t="Flora and the kina/mun distinction" id="flora">
		<p>
			The folk-taxonomy of plants is organized around <A w="ni" gl="tree, wood" />,
			<A w="kina" gl="edible or useful plant" />, and
			<A w="mun" gl="inedible plant, weed" />. The <i lang="ain-Latn">kina</i>/<i lang="ain-Latn"
				>mun</i
			> opposition lexicalizes a cultural distinction — useful/edible versus useless/noxious — that
			carries no grammatical reflex but is visible throughout plant names and in compounds with
			<i lang="ain-Latn">kina</i>
			<Ref k="vovin2022" p="Ch.6 n.5" />. The assignment of a plant to one category or the other can
			differ across dialects, depending on local usage and ecology.
		</p>
	</S>

	<S t="Fauna" id="fauna">
		<p>
			Core fauna terms include <A w="cep" gl="fish" />,
			<A w="kamuy" gl="bear; deity, supernatural being" />, <A w="cikap" gl="bird" />, and
			<A w="yuk" gl="deer" />. <A w="kamuy" /> occupies a grammatically and culturally central
			position: in its unmarked referential use it denotes the brown bear as the foremost hunting
			deity, but it extends to any powerful supernatural being, to forces that exceed ordinary
			understanding, and to a range of compounded divine titles
			<Ref k="bugaeva2022" p="Ch.1 §1" />. Its very high corpus frequency reflects its pervasive
			presence in oral literature and ritual language. Domestic animals introduced through contact
			are loanwords: <A w="umma" gl="horse" /> (&lt; Japanese <span lang="ja">うま</span>),
			<A w="meko" gl="cat" /> (&lt; Japanese <span lang="ja">ねこ</span>), and
			<A w="peko" gl="cow" />
			<Ref k="chiri1953" p="§293, §266" />.
		</p>

		<p>
			A community-proposed internal analysis reads <A w="cep" gl="fish" /> as
			<i lang="ain-Latn">ci=e-p</i> 'the thing (p) that one (ci=) eats (e)' — an argument-structure
			nominalization in which the middle-voice prefix fills both subject and object slots (nukopoli,
			aynu-corpora Discord 2023-12-06, proposed;
			<Ref k="aynucorporadiscord" />) ‹speculative›. The analysis is internally consistent with the
			productive nominalizer <i lang="ain-Latn">-p</i>, but the synchronic morphological boundary is
			opaque in the modern form and the etymology has not been verified in the published descriptive
			literature.
		</p>
	</S>

	<S t="Weather and natural-phenomenon vocabulary" id="weather">
		<p>
			Weather vocabulary includes <A w="apto" gl="rain" />, <A w="rera" gl="wind" />, and
			<A w="upas" gl="snow" />. The compound
			<A w="sir-pirka" gl="the weather is good (lit. the land/appearance is good)" /> is the
			standard illustrative example of S-type noun incorporation with a natural-phenomenon subject:
			the incorporated element <A w="sir" /> fills the S slot of the intransitive stative
			<A w="pirka" gl="be good, be beautiful" />, producing a valency-canceling effect in which the
			incorporated noun — not an independent NP — bears the subject role
			<Ref k="bugaeva2022" p="Ch.1 §4.6" />.
		</p>

		<Ex
			m="sir-pirka"
			g="land/appearance-be.good"
			tr="The weather is good."
			constructed
			note="S-incorporation of the natural-phenomenon noun sir 'land, appearance, weather' into the intransitive stative verb pirka 'be good'. The incorporated noun fills the S slot; no independent subject NP appears."
		/>

		<p>
			A community-proposed reconstruction treats the initial vowel of
			<A w="upas" gl="snow" /> as secondary, with <i lang="ain-Latn">*o-</i> as the original form,
			against the folk-etymology parsing it as <i lang="ain-Latn">u-pas</i>
			(antitwilight, aynu-corpora Discord 2024-12-23, proposed;
			<Ref k="aynucorporadiscord" />) ‹speculative›.
		</p>
	</S>
</S>

<S t="Motion and directional verbs" id="motion">
	<p>
		Motion verbs are the primary locus of SG/PL stem suppletion in Hokkaido Ainu. The principal
		suppletive pairs are <A w="arpa" gl="go (SG)" />/<A w="paye" gl="go (PL)" />,
		<A w="ek" gl="come (SG)" />/<A w="arki" gl="come (PL)" />, and
		<A w="an" gl="be, exist (SG)" />/<A w="oka" gl="be, exist (PL)" />
		<Ref k="nakagawa2022" />; <Ref k="bugaeva2022" p="Ch.1 §4.2" />. Number agreement targets the S
		or A argument of the verb; the outer plural suffix
		<i lang="ain-Latn">-pa</i> and the full account of suppletive and suffixal plural strategies are
		in <Xr ch="suppletive-verbal-number" />.
	</p>

	<p>
		The path-encoding set includes <A w="san" gl="go seaward or downstream" /> (movement toward
		the sea or downslope), <A w="yan" gl="go inland, come up onto land" /> (movement away from the
		sea or upslope), <A w="oman" gl="go" />, <A w="hosipi" gl="return" />,
		<A w="ahun" gl="enter" />, and <A w="soyne" gl="go out" />. The
		<i lang="ain-Latn">san</i>/<i lang="ain-Latn">yan</i> pair encodes a coast-relative or
		river-relative directionality: <i lang="ain-Latn">san</i> moves toward the water or its outlet
		and <i lang="ain-Latn">yan</i> moves away from it. These verbs combine with applicative
		prefixes and directional roots to build complex path constructions (see
		<Xr ch="postpositions-local-case-and-motion-events" /> and
		<Xr ch="applicative-system-overview" />) <Ref k="nakagawa2024" p="§6" />.
	</p>

	<p>
		The directional vocabulary extends to adverbial spatial terms:
		<A w="penke" gl="upstream side, upper portion" /> and
		<A w="panke" gl="downstream side, lower portion" /> locate entities relative to water flow
		rather than to the speaker's body axis <Ref k="tamura1996" p="s.v. penke, panke" />. This
		river-anchored orientation appears as a component in Hokkaido place names and governs
		orientation in oral-literature narrative.
	</p>

	<p>
		A morphological alternation recurs in several motion verb bases: beside the
		<i lang="ain-Latn">-n</i>-final form, a parallel <i lang="ain-Latn">-p</i>-final form exists
		(<i lang="ain-Latn">san</i>/<i lang="ain-Latn">sap</i>,
		<i lang="ain-Latn">yan</i>/<i lang="ain-Latn">yap</i>,
		<i lang="ain-Latn">ahun</i>/<i lang="ain-Latn">ahup</i>). The pair is widely noted in Ainu
		linguistics; the origin of the alternation — whether the <i lang="ain-Latn">-p</i> descends
		from the pluractional suffix <i lang="ain-Latn">-pa</i>, from a distinct derivational suffix,
		or from another source — is debated (nukopoli, aynu-corpora Discord 2026-05-18, proposed;
		<Ref k="aynucorporadiscord" />) ‹contested›.
	</p>
</S>

<S t="Colour terms" id="colour">
	<p>
		The basic colour vocabulary of Hokkaido Ainu comprises four stative verbs. Ainu has no separate
		adjective word class (see <Xr ch="no-adjective-class-property-verbs" />): colour terms are
		intransitive stative verbs predicated directly without a copula, and they modify nouns
		attributively in their concept form (see <Xr ch="concept-form-affiliative-form" />)
		<Ref k="nakagawa2024" p="§3" />. The four basic terms and their corpus frequencies are:
	</p>

	<table>
		<thead>
			<tr>
				<th>stative verb</th>
				<th>primary colour range</th>
				<th>extended use</th>
				<th>corpus tokens</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><A w="retar" gl="be white" /></td>
				<td>white</td>
				<td>dawn brightness; purity</td>
				<td>262</td>
			</tr>
			<tr>
				<td><A w="kunne" gl="be black, be dark" /></td>
				<td>black, dark</td>
				<td>nightfall (<i lang="ain-Latn">kunne sir</i> 'it grew dark')</td>
				<td>—</td>
			</tr>
			<tr>
				<td><A w="hure" gl="be red" /></td>
				<td>red</td>
				<td>blood, fire, sunset</td>
				<td>184</td>
			</tr>
			<tr>
				<td>
					<A w="siwnin" gl="be blue-green (grue)" /> / <i lang="ain-Latn">sinnin</i>
				</td>
				<td>blue-green (grue)</td>
				<td>reported also for purple and yellow (see below)</td>
				<td>—</td>
			</tr>
		</tbody>
	</table>

	<p>
		<A w="kunne" /> serves as the predicate of nightfall as well as of the colour black;
		<A w="retar" /> describes the light of dawn as well as the colour white
		<Ref k="tamura1996" p="s.v. kunne, retar" />. The terms thus participate in the
		temporal-lighting vocabulary beyond their core chromatic meanings. A community-proposed internal
		etymology reads <A w="kunne" /> as <i lang="ain-Latn">kur-ne</i> 'to be like a shadow/person'
		(<A w="kur" gl="shadow, person" /> + copula <A w="ne" gl="be (copula)" />) (nukopoli,
		aynu-corpora Discord 2024-06-18, asserted;
		<Ref k="aynucorporadiscord" />). The segmentation is internally consistent — the copula
		<i lang="ain-Latn">ne</i> productively derives stative verbs in Ainu — but has not been
		confirmed in the published philological literature ‹speculative›.
	</p>

	<p>
		<A w="siwnin" /> is typologically notable: it covers the blue-green continuum without a primary
		split, fitting the classic grue pattern of <Ref k="shibatani1990" p="§1" />. Dictionary
		records indicate that the term's range may extend beyond the blue-green merger to include purple
		and possibly yellow in some usage (toracatman, aynu-corpora Discord 2024-05-30, asserted;
		<Ref k="aynucorporadiscord" />) ‹corpus-suggested›, though no systematic colour-category survey
		of Ainu has been conducted. A Tokachi example using <i lang="ain-Latn">siwnin</i> in an
		evidential construction appears in <Xr ch="ruwe-ne-inferential" /> (<i lang="ain-Latn">taan imo
		siwnin ru an</i> 'this potato is green', <Ref k="takahashi2013" p="131–133" />), where the
		individual-level property takes the trace-nominalizer evidential rather than the visual.
	</p>

	<p>
		A community proto-Ainu reconstruction for <A w="retar" gl="be white" /> proposes an earlier
		cluster-initial form <i lang="ain-Latn">*tretar</i>/<i lang="ain-Latn">*dretar</i> on the basis
		of a Taraika Sakhalin reflex <i lang="ain-Latn">tetar</i> (antitwilight, aynu-corpora Discord
		2024-11-24, proposed; <Ref k="aynucorporadiscord" />), consistent with the comparative program
		of <Ref k="vovin1993" paren /> and <Ref k="alonso2022" paren /> ‹speculative›. This is noted as
		a lead for the historical phonology; verification requires the primary comparative data.
	</p>
</S>

<S t="Spatial deixis and locative nouns" id="spatial-deixis">
	<p>
		The spatial deictic system has three interacting layers: a demonstrative series, a set of
		obligatorily-possessed locative nouns, and a small set of postpositions. Their full accounts are
		distributed across <Xr ch="demonstratives-anaphora-definiteness" />,
		<Xr ch="relational-and-spatial-nouns" />, and
		<Xr ch="postpositions-local-case-and-motion-events" />. The synoptic inventory is:
	</p>

	<table>
		<thead>
			<tr>
				<th>layer</th>
				<th>form(s)</th>
				<th>spatial or discourse value</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td rowspan="3">demonstratives</td>
				<td>
					<A w="tan" gl="this (proximal)" /> / <i lang="ain-Latn">taan</i>
				</td>
				<td>proximal (near speaker)</td>
			</tr>
			<tr>
				<td>
					<A w="toan" gl="that (distal)" /> / <i lang="ain-Latn">toon</i>
				</td>
				<td>distal (away from speaker)</td>
			</tr>
			<tr>
				<td>
					<A w="nean" gl="that (anaphoric)" /> / <i lang="ain-Latn">ne</i>
				</td>
				<td>anaphoric (discourse-given referent)</td>
			</tr>
			<tr>
				<td rowspan="6">locative nouns (obligatorily possessed)</td>
				<td><A w="or" gl="place, location" /></td>
				<td>general locative; possessed form <i lang="ain-Latn">oro</i></td>
			</tr>
			<tr>
				<td><A w="ka" gl="top, surface" /></td>
				<td>superessive; possessed form <i lang="ain-Latn">kasi</i></td>
			</tr>
			<tr>
				<td><A w="sam" gl="side, vicinity" /></td>
				<td>proximate lateral</td>
			</tr>
			<tr>
				<td><A w="tum" gl="middle, interior" /></td>
				<td>interior/medial</td>
			</tr>
			<tr>
				<td><A w="pokna" gl="below, under" /></td>
				<td>subessive</td>
			</tr>
			<tr>
				<td><A w="rikun" gl="above" /></td>
				<td>superessive-high</td>
			</tr>
			<tr>
				<td rowspan="3">postpositions</td>
				<td><i lang="ain-Latn">ta</i></td>
				<td>static locative (LOC)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">un</i></td>
				<td>goal/allative</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">wa</i></td>
				<td>source/ablative</td>
			</tr>
		</tbody>
	</table>

	<p>
		The demonstrative series is three-way: proximal
		<i lang="ain-Latn">tan</i>/<i lang="ain-Latn">taan</i> (near speaker), distal
		<i lang="ain-Latn">toan</i>/<i lang="ain-Latn">toon</i> (away from speaker), and anaphoric
		<i lang="ain-Latn">nean</i>/<i lang="ain-Latn">ne</i> (discourse-established referent)
		<Ref k="nakagawa2024" p="§10" />; <Ref k="takahashi2011" />. Within the proximal slot, the
		longer form <i lang="ain-Latn">taan</i> has been proposed to carry greater information content
		or emphasis relative to <i lang="ain-Latn">tan</i>, and a sound-symbolic account has been
		proposed in which narrow front vowels index proximity and broader back vowels index distance
		(nukopoli, aynu-corpora Discord 2025-12-27, proposed;
		<Ref k="aynucorporadiscord" />) ‹contested›. The full discourse-anaphoric and definiteness
		functions of the series are treated in <Xr ch="demonstratives-anaphora-definiteness" />.
	</p>

	<p>
		Locative nouns (<A w="or" />, <A w="ka" />, <A w="sam" />, <A w="tum" />, etc.) are
		obligatorily possessed: a referential head NP must serve as their possessor. The postposition
		<i lang="ain-Latn">ta</i> (LOC) then follows the possessed locative noun to form a spatial
		phrase: <i lang="ain-Latn">pet or ta</i> 'at the river', <i lang="ain-Latn">cise ka ta</i>
		'on top of the house'. Among these, <A w="or" /> shows a grammaticalization drift in the
		corpus, encroaching on the functions of a general locative case marker
		<Ref k="sato2021" />; <Ref k="nakagawa2024" p="§11" />.
	</p>

	<Ex
		m="pet or ta ku=an"
		g="river place LOC 1SG.S=exist"
		tr="I am by the river."
		constructed
		note="The locative noun or 'place' takes the river NP pet as its possessor; the postposition ta marks static location. The possessor relation is adnominal: pet is 'the river's place'. First-person S is marked by the intransitive suffix =an on the existential verb."
	/>

	<p>
		The directional system is river-anchored at the adverbial level:
		<A w="penke" gl="upstream side" /> and <A w="panke" gl="downstream side" /> locate entities
		relative to water flow rather than to the speaker's body axis
		<Ref k="tamura1996" p="s.v. penke, panke" />. This axis governs orientation in narrative and
		appears as a component in Hokkaido place names. Its integration with the postpositional and
		motion-event system — including its interaction with <A w="san" gl="go seaward" /> and
		<A w="yan" gl="go inland" /> — is treated in
		<Xr ch="postpositions-local-case-and-motion-events" />.
	</p>
</S>
