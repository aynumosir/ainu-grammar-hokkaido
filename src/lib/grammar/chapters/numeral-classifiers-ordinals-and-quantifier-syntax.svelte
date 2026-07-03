<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The three numeral word-classes and the classifier alternation" id="overview">
	<p>
		Hokkaido Ainu numerals appear in three formally distinct word-classes. The
		<em>numeral prenominal</em> (数連体詞) is the bare cardinal stem that directly
		precedes a head noun: <i lang="ain-Latn">tu cip</i> 'two boats',
		<i lang="ain-Latn">iwan kosonte</i> 'six robes'. The <em>numeral noun</em> (数名詞)
		is the cardinal stem carrying one of two suffixes — <i lang="ain-Latn">-p/-pe</i> for
		non-human referents or <i lang="ain-Latn">-n/-iw</i> for human referents — and it
		occupies a post-nominal appositional position: <i lang="ain-Latn">tuki sinep</i>
		'one cup (post-nominal)', <i lang="ain-Latn">tun katkemat</i> 'two women'. A third
		class, the <em>counting-off form</em> (数え上げ), is used in enumeration sequences
		as an interjection-like particle and is not treated here
		<Ref k="nakagawa2024" p="461, 465–466" />.
	</p>

	<p>
		The present chapter covers the numeral noun suffixes and their syntax, the periphrastic
		ordinal strategies, quantifier float, and the universal and approximative quantifiers.
		The cardinal system, the vigesimal arithmetic, and the 1–20 paradigm are treated in
		<Xr ch="vigesimal-numeral-system" />; nominal <i lang="ain-Latn">-utar</i> plurality
		and transnumerality in <Xr ch="nominal-number-utar-transnumerality" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>value</th>
				<th>prenominal (数連体詞)</th>
				<th>thing-counting (<i lang="ain-Latn">-p/-pe</i>)</th>
				<th>person-counting (<i lang="ain-Latn">-n/-iw</i>)</th>
				<th>counting-off (Saru)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td><i lang="ain-Latn">sine</i></td>
				<td><i lang="ain-Latn">sinep</i></td>
				<td><i lang="ain-Latn">sinen</i></td>
				<td><i lang="ain-Latn">sinep</i></td>
			</tr>
			<tr>
				<td>2</td>
				<td><i lang="ain-Latn">tu</i></td>
				<td><i lang="ain-Latn">tup</i></td>
				<td><i lang="ain-Latn">tun</i></td>
				<td><i lang="ain-Latn">tup</i></td>
			</tr>
			<tr>
				<td>3</td>
				<td><i lang="ain-Latn">re</i></td>
				<td><i lang="ain-Latn">rep</i></td>
				<td><i lang="ain-Latn">ren</i></td>
				<td><i lang="ain-Latn">rep</i></td>
			</tr>
			<tr>
				<td>4</td>
				<td><i lang="ain-Latn">ine</i></td>
				<td><i lang="ain-Latn">inep</i></td>
				<td><i lang="ain-Latn">inen</i></td>
				<td><i lang="ain-Latn">inep</i></td>
			</tr>
			<tr>
				<td>5</td>
				<td><i lang="ain-Latn">asikne</i></td>
				<td><i lang="ain-Latn">asiknep</i></td>
				<td><i lang="ain-Latn">asiknen</i></td>
				<td><i lang="ain-Latn">asik</i></td>
			</tr>
			<tr>
				<td>6</td>
				<td><i lang="ain-Latn">iwan</i></td>
				<td><i lang="ain-Latn">iwanpe</i></td>
				<td><i lang="ain-Latn">iwaniw</i></td>
				<td><i lang="ain-Latn">iwan</i></td>
			</tr>
			<tr>
				<td>7</td>
				<td><i lang="ain-Latn">arwan</i></td>
				<td><i lang="ain-Latn">arwanpe</i></td>
				<td><i lang="ain-Latn">arwaniw</i></td>
				<td><i lang="ain-Latn">arwan</i></td>
			</tr>
			<tr>
				<td>8</td>
				<td><i lang="ain-Latn">tupesan</i></td>
				<td><i lang="ain-Latn">tupesanpe</i></td>
				<td><i lang="ain-Latn">tupesaniw</i></td>
				<td><i lang="ain-Latn">tupes</i></td>
			</tr>
			<tr>
				<td>9</td>
				<td><i lang="ain-Latn">sinepesan</i></td>
				<td><i lang="ain-Latn">sinepesanpe</i></td>
				<td><i lang="ain-Latn">sinepesaniw</i></td>
				<td><i lang="ain-Latn">sinepes</i></td>
			</tr>
			<tr>
				<td>10</td>
				<td><i lang="ain-Latn">wan</i></td>
				<td><i lang="ain-Latn">wanpe</i></td>
				<td><i lang="ain-Latn">waniw</i></td>
				<td><i lang="ain-Latn">wan</i> (Chitose: <i lang="ain-Latn">wanpe</i>)</td>
			</tr>
			<tr>
				<td>20</td>
				<td><i lang="ain-Latn">hotne</i></td>
				<td><i lang="ain-Latn">hotnep</i></td>
				<td>—</td>
				<td><i lang="ain-Latn">hot</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		Sources: <Ref k="nakagawa2024" p="461, 464" />; <Ref k="sato2008" p="256–257" />;
		<Ref k="refsing1986" p="110–111" />.
	</p>
</S>

<S t="The thing-counting suffix -p/-pe" id="thing-counting">
	<p>
		The thing-counting suffix derives from the formal noun
		<A w="p" gl="thing (formal noun)" /> (alternant <i lang="ain-Latn">pe</i>) that also
		functions as the general thing-nominalizer treated in
		<Xr ch="nominalization-p-pe" />. On the numeral stem it creates a counting noun whose
		referential domain is any non-human entity, though it can extend to humans in brusque
		register (see below). The phonological conditioning is regular: the allomorph
		<i lang="ain-Latn">-p</i> follows vowel-final stems (values 1–5: <i lang="ain-Latn">sine,
		tu, re, ine, asikne</i>), and <i lang="ain-Latn">-pe</i> follows consonant-final stems
		(values 6–10: <i lang="ain-Latn">iwan, arwan, tupesan, sinepesan, wan</i>)
		<Ref k="nakagawa2024" p="464" />; <Ref k="refsing1986" p="110" />.
	</p>

	<p>
		The numeral noun carrying <i lang="ain-Latn">-p/-pe</i> occupies the post-nominal
		appositional position — it follows the noun it quantifies. This is in complementary
		distribution with the prenominal position of the bare stem. The prenominal precedes the
		head directly:
	</p>

	<Ex
		m="sine okkaypo ek a wa"
		g="one youth come PFV CONJ"
		tr="A youth came, …"
		cite="sato2008:257"
		dial="CHI"
		note="Prenominal sine immediately before the head noun okkaypo. Satō 2008: 257, Chitose; the sentence continues."
	/>

	<p>
		The numeral noun follows:
	</p>

	<Ex
		m="tuki sine-p"
		g="cup one-CL"
		tr="one cup"
		cite="nakagawa2024:464"
		dial="SAR"
		note="Nakagawa 2024: 464. The numeral noun sinep is post-nominal. The inverted order *sinep tuki is ungrammatical: the numeral noun cannot precede its head (Nakagawa 2024: 465)."
	/>

	<Ex
		m="toonta pon kamuy re-p an ma"
		g="there small bear three-CL exist FIN"
		tr="There are three bear cubs over there."
		cite="sato2008:256"
		dial="CHI"
		note="Satō 2008: 256, Chitose. The numeral noun rep follows the modified NP pon kamuy 'small/young bear'."
	/>

	<p>
		When the referent is contextually recoverable, the numeral noun can stand alone as the
		head of an NP without an overt co-argument:
	</p>

	<Ex
		m="aoka sine-p ka a=tuye somo ki"
		g="we one-CL even 4.A=cut NEG do"
		tr="We did not cut even one (of them)."
		cite="nakagawa2024:464"
		dial="SAR"
		note="sinep heads the NP with the focus particle ka 'even'; no overt noun antecedent."
	/>

	<p>
		Nakagawa characterises the <i lang="ain-Latn">-p/-n</i> split as the native thing/person
		dichotomy — comparable to Japanese <i lang="ja">ひとつ</i> vs <i lang="ja">ひとり</i> and
		contrasting with Sinitic classifier systems that require an intervening counter word
		between any numeral and any noun. The parallel with Nivkh, another non-Sinitic language
		of the region, is also noted <Ref k="nakagawa2024" p="464" />.
	</p>
</S>

<S t="The person-counting suffix -n/-iw" id="person-counting">
	<p>
		The person-counting suffix parallels the thing-counting suffix in its allomorphy:
		<i lang="ain-Latn">-n</i> after vowel-final stems (values 1–5) and
		<i lang="ain-Latn">-iw</i> after consonant-final stems (values 6–10)
		<Ref k="nakagawa2024" p="464" />. The suffix <i lang="ain-Latn">-n/-iw</i> is
		otherwise rare in the Hokkaido Ainu morphological inventory; its other occurrence is
		in the interrogative <i lang="ain-Latn">hempakiw</i> 'how many people' (from
		<i lang="ain-Latn">hempak-iw</i>) — see <Xr ch="interrogative-pro-forms" />.
	</p>

	<p>
		The primary domain of <i lang="ain-Latn">-n/-iw</i> is human beings:
		<i lang="ain-Latn">tun katkemat</i> 'two women',
		<i lang="ain-Latn">asiknen okkayo</i> 'five men'. Nakagawa notes that
		<i lang="ain-Latn">-p/-pe</i> can also count human referents, but carries a brusquer
		register; in practice the distinction is weak and speakers vary
		<Ref k="nakagawa2024" p="464, exx. 1070–1071" />. The person-counting suffix extends to
		composite vigesimal numerals. For 100 (= 5×20), the suffix attaches to the whole
		compound <i lang="ain-Latn">asiknehotne</i>:
	</p>

	<Ex
		m="asiknehotne-n asir cise or ta uekarpa"
		g="five.twenty-HUM new house inside LOC gather"
		tr="A hundred people (5×20) gathered in the new house."
		cite="ainukoraci1991"
		dial="SAR"
		note="Kayano Shirō (萱野志朗), Ainu Times (アイヌタイムズ) vol. 3 no. 2; Saru/Chitose dialect. asiknehotne = 5×20 = 100 (see vigesimal chapter); the person-counting suffix -n attaches to the compound."
	/>

	<p>
		The numeral noun with <i lang="ain-Latn">-n/-iw</i> also combines with the translative
		copula <i lang="ain-Latn">ne</i> to form a predicative or adverbial phrase expressing
		numerical composition. In this use the numeral noun functions without any overt head noun:
	</p>

	<Ex
		m="re-n a=ne wa oka=an"
		g="three-HUM 4.A=COP CONJ exist.PL=4.S"
		tr="We were three and lived (together)."
		cite="nakagawa2024:300"
		dial="SAR"
		note="Nakagawa 2024: 300–301, exx. 431–433. ren ne is a predicative phrase 'being three (persons)'; wa links it to the main predicate oka=an 'we existed'. The 4th-person forms index the narrator + others."
	/>

	<p>
		See also the parallel <i lang="ain-Latn">sinenne</i> 'alone' derived by the same
		copular contraction, discussed in the ordinals section below.
	</p>
</S>

<S t="Word-classifiers: to 'day' and suy 'time/turn'" id="word-classifiers">
	<p>
		Outside the <i lang="ain-Latn">-p/-pe</i> and <i lang="ain-Latn">-n/-iw</i> paradigm,
		two free nouns function as mensural elements when preceded by a numeral:
		<A w="to" gl="day" /> and <A w="suy" gl="time, turn" />.
	</p>

	<p>
		<i lang="ain-Latn">to</i> 'day' follows a numeral prenominal to form a temporal span
		noun: <i lang="ain-Latn">sine to</i> 'one day'. For values 2 and 3, the idiomatic forms
		<i lang="ain-Latn">tutko</i> '2 days' and <i lang="ain-Latn">rerko</i> '3 days' are
		common; from value 4 onwards the additive pattern <i lang="ain-Latn">ine rerko</i>
		'4 days', <i lang="ain-Latn">asikne rerko</i> '5 days' shows that
		<i lang="ain-Latn">rerko</i> has bleached from '3 days' to the general day-span slot
		<Ref k="nakagawa2024" p="465" />.
	</p>

	<p>
		<i lang="ain-Latn">suy</i> 'time, turn' forms the iterative series. The element for 'once'
		draws on the archaic root <i lang="ain-Latn">ar</i> 'one' (also seen in
		<i lang="ain-Latn">ar-itak</i> 'one word' and the counting-off base) rather than the
		regular prenominal <i lang="ain-Latn">sine</i>:
		<i lang="ain-Latn">arsuy</i> 'once', <i lang="ain-Latn">tusuy</i> 'twice',
		<i lang="ain-Latn">resuy</i> 'three times'. Intensive reduplication with
		<i lang="ain-Latn">o-</i> yields <i lang="ain-Latn">otusuy</i> and
		<i lang="ain-Latn">oresuy</i> 'over and over'
		<Ref k="refsing1986" p="108, 111" />; <Ref k="nakagawa2024" p="461" />.
		The numeral 6 (<i lang="ain-Latn">iwan</i>) has a secondary 'many' meaning in oral
		literary contexts; <i lang="ain-Latn">iwan suy</i> therefore typically means 'many times'
		rather than a precise six:
	</p>

	<Ex
		m="iwan suy a=i=hotuyekar hine"
		g="many time 4.A=4.O=call.out CONJ"
		tr="(They) called out many times, …"
		cite="nakagawa2024:469"
		dial="SAR"
		note="Nakagawa 2024: 469, ex. 1080. iwan functions as 'many' in fixed expressions; suy follows as the mensural element. See also the quantifier section below."
	/>
</S>

<S t="Classifier or counter? The terminological debate" id="classifier-debate">
	<p>
		Whether <i lang="ain-Latn">-p/-pe</i>, <i lang="ain-Latn">-n/-iw</i>,
		<i lang="ain-Latn">to</i>, and <i lang="ain-Latn">suy</i> constitute "numeral
		classifiers" is unresolved in the literature, partly because the disagreement is
		terminological ‹contested›.
	</p>

	<p>
		Nakagawa argues that Hokkaido Ainu has no numeral classifiers (助数詞) in any
		meaningful sense. Prenominal numerals attach directly to the noun without an intervening
		counting word — <i lang="ain-Latn">tu cip</i> 'two boats',
		<i lang="ain-Latn">re nupuri</i> 'three mountains' — just as English
		<em>two ships</em> does. The <i lang="ain-Latn">-p</i> vs <i lang="ain-Latn">-n</i>
		contrast is the native thing/person dichotomy, found in many non-Sinitic numeral systems
		and present cross-linguistically without Sinitic influence
		<Ref k="nakagawa2024" p="461–462, 464" />.
	</p>

	<p>
		The typology chapter of <Ref k="bugaeva2022" /> frames the picture differently: it
		refers to <i lang="ain-Latn">-p/-pe</i> and <i lang="ain-Latn">-n/-iw</i> as
		"counters" and to <i lang="ain-Latn">to</i> and <i lang="ain-Latn">suy</i> as
		"word-classifiers", speculating that these may be remnants of a formerly more elaborate
		noun-classifier system (Handbook 2022, epub — chapter and page are uncalibrated in the
		current reading). Refsing takes a middle position, calling the suffixes "a rudimentary
		system of 'classifiers' or 'counters'" while reserving "numeral" for the bare prenominal
		stem and "number" for the stem plus counter <Ref k="refsing1986" p="110–111" />.
	</p>

	<p>
		The pivot of the disagreement is the definition of "classifier". In the Sinitic sense
		a classifier is an obligatory mediating element: Mandarin requires <i lang="zh">本</i>
		in <i lang="zh">三本書</i> 'three-CL-book'; no numeral can attach directly to the noun.
		Hokkaido Ainu has no such requirement: the prenominal numeral combines with any noun
		without an intervening element. On this definition — Nakagawa's — the suffixes are not
		classifiers because they are post-nominal, suffixal, and optional relative to the
		prenominal. On Refsing's and the Handbook's definition they are, because they encode a
		semantic categorization of the counted entity. Authors citing either view must specify
		which sense of "classifier" they intend.
	</p>
</S>

<S t="Ordinal expressions" id="ordinals">
	<p>
		None of the primary Hokkaido Ainu grammars — Nakagawa 2024 §17, Satō 2008 §33,
		Refsing 1986 §12.4, or Kindaichi and Chiri 1936 — describes a dedicated ordinal
		word-class or ordinal paradigm
		<Ref k="nakagawa2024" p="461–469" />; <Ref k="sato2008" p="256–258" />;
		<Ref k="refsing1986" p="110–117" />.
		Ordinal meaning is expressed through several periphrastic strategies, two of which are
		independently attested in the grammars, while others are documented in community
		discussion ‹corpus-suggested›.
	</p>

	<p>
		Two attested expressions involve a numeral noun combined with the translative copula
		<i lang="ain-Latn">ne</i>. The contraction of <i lang="ain-Latn">sinen ne</i> 'being
		one person' to <i lang="ain-Latn">sinenne</i> yields the lexicalized meaning 'alone,
		by oneself':
	</p>

	<Ex
		m="sine-n ne"
		ain="sinenne"
		g="one-HUM COP"
		tr="alone, by oneself"
		cite="refsing1986:117"
		dial="SHI"
		note="Refsing 1986: 117, ex. 105 (Shizunai). sinen ne contracts to sinenne; the translative copula ne gives the meaning 'being one person'."
	/>

	<p>
		The same copular pattern with the thing-counting noun forms a partitive or distributive
		expression:
	</p>

	<Ex
		m="tu-p ne ukosaraye"
		g="two-CL COP split"
		tr="Divide it in two."
		cite="refsing1986:117"
		dial="SHI"
		note="Refsing 1986: 117, ex. 104. tup ne 'being two things' functions as an adverbial predicate specifying how the action is carried out."
	/>

	<p>
		For 'first', the adverb <A w="hoskino" gl="first, at the beginning" /> fills the
		ordinal-adverbial slot. The superlative phrase <i lang="ain-Latn">iyotta hoski</i>
		(where <A w="iyotta" gl="most, superlative" /> intensifies <A w="hoski" gl="beginning" />)
		expresses 'the very first, foremost'. A community discussion notes that ordinals are
		generally avoided in Hokkaido Ainu — the expression <i lang="ain-Latn">sine to</i>
		serves both 'one day' and 'the first day' — and that <i lang="ain-Latn">hoskino</i>
		and <i lang="ain-Latn">iyotta hoski</i> are the standard strategies for 'first';
		for higher ordinals, one attested usage is the sequence
		<i lang="ain-Latn">sine kamuy, tu kamuy, re kamuy</i> 'first, second, third (one)'
		with <i lang="ain-Latn">kamuy</i> as a generic count noun, and the form
		<i lang="ain-Latn">iyeere-p</i> has been reported for 'the third (thing)'
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-09, asserted) ‹speculative›.
		These community-attested strategies await systematic description in the primary grammars.
	</p>

	<p>
		The iterative series <i lang="ain-Latn">arsuy</i> 'once', <i lang="ain-Latn">tusuy</i>
		'twice', <i lang="ain-Latn">resuy</i> 'three times' (§<a href="#word-classifiers">word-classifiers</a>
		above) overlaps functionally with the ordinal domain when it tracks the sequence of
		occurrences.
	</p>
</S>

<S t="Quantifier syntax: three positions" id="quantifier-syntax">
	<p>
		The three numeral categories — prenominal, numeral noun, and pure noun predicate — occupy
		distinct syntactic positions with distinct meaning contributions
		<Ref k="nakagawa2024" p="461, 464–465" />; <Ref k="refsing1986" p="115–117" />.
	</p>

	<S t="Prenominal position" id="prenominal">
		<p>
			The bare numeral stem precedes the head noun. Other modifiers can intervene between
			the numeral and the noun without ungrammaticality: <i lang="ain-Latn">re ku=mataki</i>
			'my three younger sisters' (possessive prefix between numeral and noun),
			<i lang="ain-Latn">tu pon cep</i> 'two small fish' (adjective between numeral and
			noun) <Ref k="refsing1986" p="115" />. The prenominal is the position available to
			all cardinal values, including composite vigesimal numerals.
		</p>
	</S>

	<S t="Post-nominal (appositional) position" id="appositional">
		<p>
			The numeral noun (<i lang="ain-Latn">-p/-pe</i> or <i lang="ain-Latn">-n/-iw</i>)
			follows the noun it quantifies as an appositive count specification. The position
			constraint is categorical: the numeral noun cannot precede the noun
			(<i lang="ain-Latn">*sinep tuki</i> for 'one cup' is ungrammatical)
			<Ref k="nakagawa2024" p="465" />. The NP-internal appositive pattern is discussed
			alongside the possessor-appositive construction in <Xr ch="noun-phrase-structure" />.
		</p>

		<Ex
			m="a=acautari re-n"
			g="4.POSS=uncle-ASS three-HUM"
			tr="my three uncles"
			cite="nakagawa2024:464"
			dial="SAR"
			note="Nakagawa 2024: 464. The 4th-person possessive prefix a= marks the narrator's kin; ren 'three (persons)' follows in the appositional slot."
		/>

		<p>
			Whether a modifier may intervene between the head noun and an appositional numeral noun —
			e.g. <i lang="ain-Latn">noun + adjective + numeral.noun</i> — is documented as an
			open research question: Satō reports no such example in his Chitose data and flags it
			explicitly <Ref k="sato2008" p="256" /> ‹contested›.
		</p>
	</S>

	<S t="Predicative (pure noun) position" id="predicative">
		<p>
			Both numeral noun series can serve as predicates or standalone NP heads without a
			co-occurring noun. The simplest predicative use places the numeral noun as the sole
			argument of an intransitive verb:
		</p>

		<Ex
			m="sinen askay"
			g="one-HUM be.good.at"
			tr="One person is good at it."
			cite="refsing1986:116"
			dial="SHI"
			note="Refsing 1986: 116. sinen is the sole argument of the intransitive predicate askay; no head noun is present."
		/>

		<p>
			The translative copula <i lang="ain-Latn">ne</i> turns the numeral noun into an
			adverbial predicate of composition or manner. The person-counting series:
			<i lang="ain-Latn">ren a=ne wa oka=an</i> 'we were three and lived' (§<a href="#person-counting">§person-counting</a>
			above). The thing-counting series: <i lang="ain-Latn">tup ne ukosaraye</i> 'divide
			it in two' (§<a href="#ordinals">§ordinals</a> above). Both patterns use
			<i lang="ain-Latn">ne</i> as a translative that equates the group or object with a
			numerical value — the same construction treated in the postpositions chapter
			<Ref k="nakagawa2024" p="300–301" />.
		</p>
	</S>
</S>

<S t="Quantifier float and the noun–numeral–verb pattern" id="float">
	<p>
		The appositional numeral noun does not need to remain clause-adjacent to its head noun.
		It can appear after the verb or in a position outside the canonical NP boundary — a
		distribution consistent with the broader pronominal-argument and non-configurational
		character of Hokkaido Ainu discussed in
		<Xr ch="nonconfigurationality-pronominal-argument" />. The pattern illustrated below
		has the object noun followed by the numeral noun and then the verb:
	</p>

	<Ex
		m="pasuy sine-p uk"
		g="chopstick one-CL take"
		tr="Take one chopstick."
		constructed
		note="Community-discussed form (nukopoli, aynu-corpora Discord 2024-12-12, proposed): the noun–numeral.noun–verb sequence is described as at least as common in Hokkaido Ainu as in Japanese. Consistent with the appositional numeral syntax documented in Refsing (1986: 116) and the appositional-possession pattern in Bugaeva (2021)."
	/>

	<p>
		In this construction <i lang="ain-Latn">sinep</i> is the appositional numeral noun
		counting the object <i lang="ain-Latn">pasuy</i>, but the two are separated by the
		verb position. Refsing's Shizunai data include the parallel
		<i lang="ain-Latn">a=kor mici akihi tun, ren an</i> 'my father's brothers were two or
		three', where the numeral noun follows a relational noun phrase rather than a simple
		head <Ref k="refsing1986" p="116" />. The noun–numeral.noun–verb
		pattern is documented as community-observed and structurally consistent with the primary
		sources <Ref k="aynucorporadiscord" /> ‹corpus-suggested›.
	</p>
</S>

<S t="Numeral–nominal number interactions" id="number-agreement">
	<p>
		A numeral specifying a small count (2 or 3) typically co-occurs with the singular form
		of a noun that otherwise has a human-plural counterpart, while a large numeral (from 6
		upwards), an indefinite quantity, or the quantifier <i lang="ain-Latn">inne</i> 'many'
		co-occurs with the plural form. Satō states the threshold explicitly (via community
		discussion attributed to him); the pattern also coheres with Refsing's data on the
		morphological forms involved:
	</p>

	<table>
		<thead>
			<tr>
				<th>context</th>
				<th>example</th>
				<th>noun form</th>
				<th>verb form</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>small specified (2–3)</td>
				<td><i lang="ain-Latn">tu hekaci ek</i> 'two children came'</td>
				<td>singular <i lang="ain-Latn">hekaci</i></td>
				<td>singular <i lang="ain-Latn">ek</i> 'come'</td>
			</tr>
			<tr>
				<td>large or indefinite</td>
				<td><i lang="ain-Latn">inne hekattar arki</i> 'many children came'</td>
				<td>plural <i lang="ain-Latn">hekattar</i></td>
				<td>plural <i lang="ain-Latn">arki</i> 'come (pl)'</td>
			</tr>
		</tbody>
	</table>

	<p>
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-17, asserted, attributed to Satō);
		corroborated by <Ref k="refsing1986" p="115–117" /> ‹corpus-confirmed›.
	</p>

	<p>
		Mass-like or uncountable referents stay in the singular regardless of quantity. Under a
		specified numeral greater than 1, a human-denoting noun may take the associative-plural
		suffix <i lang="ain-Latn">-utar</i> with phonologically conditioned allomorphy:
		<i lang="ain-Latn">sine hekaci</i> 'one child' but <i lang="ain-Latn">tu hekattar</i>
		'two children' (&lt; <i lang="ain-Latn">hekaci-utar</i>, with assimilation)
		<Ref k="refsing1986" p="117" />. The full <i lang="ain-Latn">-utar</i> paradigm and the
		transnumerality of bare nouns are treated in
		<Xr ch="nominal-number-utar-transnumerality" />; the verbal number interaction belongs
		to <Xr ch="person-marking-architecture" />.
	</p>
</S>

<S t="Universal and approximative quantifiers" id="universal-quantifiers">
	<p>
		Several items outside the numeral paradigm proper function as universal or approximative
		quantifiers.
	</p>

	<p>
		<A w="opitta" gl="all (of), every" /> (variant <i lang="ain-Latn">obitta</i>) is the
		universal quantifier 'all of, every'. Its formal status is that of a postpositional
		adverb — it belongs to the class of originally adverbial postpositions
		<Ref k="nakagawa2024" p="280" /> — and it typically follows the noun phrase or clause
		it scopes over, distinguishing it positionally from the prenominal numeral. The closely
		related <i lang="ain-Latn">epitta</i> 'throughout, across the whole' has partly
		overlapping distribution.
	</p>

	<p>
		<A w="inne" gl="many" /> (also <i lang="ain-Latn">inne ne</i> 'being many') is the
		standard approximative 'many'. It licenses the plural verb form and the plural
		<i lang="ain-Latn">-utar</i> form of the noun in the same way as a large cardinal
		numeral (see §<a href="#number-agreement">numeral–nominal number interactions</a> above).
	</p>

	<p>
		The numeral 6, <i lang="ain-Latn">iwan</i>, has developed a secondary universal-like
		meaning in oral-literary register. Fixed expressions including
		<i lang="ain-Latn">iwan suy</i> 'many times', <i lang="ain-Latn">iwan kosonte</i>
		'many/six robes' (a gift-register formula), and the intensive
		<i lang="ain-Latn">noiwan</i> (&lt; <i lang="ain-Latn">no-iwan</i> 'very many') all draw
		on this conventionalized 'many' reading
		<Ref k="nakagawa2024" p="469, exx. 1080–1083" />. These expressions are genre-marked
		and do not represent a productive grammaticalization of '6' as a plural marker in
		everyday speech ‹corpus-confirmed›.
	</p>

	<p>
		<A w="usa" gl="various, several" /> is an approximative quantifier without a precise
		numerical value. Its syntactic distribution parallels the prenominal numeral in modifier
		position, but it is not a numeral in the classifier-paradigm sense treated above.
	</p>

	<p>
		Distributive plurality and the full three-way interaction among nominal
		<i lang="ain-Latn">-utar</i>, verbal number, and quantifiers is systematically treated
		in <Xr ch="nominal-number-utar-transnumerality" />.
	</p>
</S>
