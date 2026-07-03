<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Hokkaido Ainu numerals fall into three grammatical categories — numeral prenominals
		(数連体詞), numeral nouns (数名詞), and a counting-off form (数え上げ) — and the three are
		not interchangeable in syntax <Ref k="nakagawa2024" p="461" />. Underlying all three is a
		shared set of numeral roots from 1 to 10, with the integer 20 (<i lang="ain-Latn">hotne</i>)
		serving as the base of a vigesimal counting system: even decades are formed
		multiplicatively from <i lang="ain-Latn">hotne</i>, while the odd tens (30, 50, 70, 90) are
		built subtractively, expressing how many units fall short of the next even decade
		<Ref k="nakagawa2024" p="462–463" />; <Ref k="refsing1986" p="110–111" />.
	</p>
	<p>
		The vigesimal base sets Saru–Chitose Hokkaido Ainu apart from the surrounding Japanese
		decimal system and from several of its own dialects — Asahikawa and Sōya use a decimal
		base with the same root <i lang="ain-Latn">hot</i> at the value of ten rather than twenty
		<Ref k="nakagawa2024" p="467" />. Sakhalin Ainu is also decimal. A shift in modern usage
		away from the subtractive architecture and toward simpler additive or decimal expressions
		is documented by <Ref k="ochiai2021" />.
	</p>
	<p>
		This chapter covers the numeral roots and their three form classes, the multiplicative and
		subtractive decade structure, the syntax of numeral phrases, the debate over classifier
		status, and the dialect geography of the base. Ordinals, the interaction of numerals with
		quantifier syntax, and the day- and time-counting constructions are treated in the sibling
		chapter <Xr ch="numeral-classifiers-ordinals-and-quantifier-syntax" />; numeral phrases and
		the noun suffix <i lang="ain-Latn">-utar</i> are set out in
		<Xr ch="nominal-number-utar-transnumerality" />.
	</p>
</S>

<S t="The numeral roots 1–10 and the three form classes" id="roots-form-classes">
	<p>
		Each numeral value from 1 to 10, and 20, is represented in three paradigmatic shapes. The
		prenominal precedes the noun directly; the numeral noun stands after the noun or alone; and
		the counting-off form is used for reckoning aloud in sequence
		<Ref k="nakagawa2024" p="461, 464–466" />; <Ref k="refsing1986" p="110" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>value</th>
				<th>prenominal (数連体詞)</th>
				<th>numeral-noun, things (<i lang="ain-Latn">-p/-pe</i>)</th>
				<th>numeral-noun, humans (<i lang="ain-Latn">-n/-iw</i>)</th>
				<th>counting-off (Saru/Chitose)</th>
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
				<td><i lang="ain-Latn">hot</i> (bare root)</td>
			</tr>
		</tbody>
	</table>

	<p>
		The suffix <i lang="ain-Latn">-p</i> (after vowel-final stems 1–5) and
		<i lang="ain-Latn">-pe</i> (after consonant-final stems 6–10) are instances of the formal
		noun <A w="p" gl="thing" /> treated in <Xr ch="concept-form-affiliative-form" />.
		The human counterparts <i lang="ain-Latn">-n</i> and its suppletive partner
		<i lang="ain-Latn">-iw</i> (6–10) are the same <i lang="ain-Latn">-n</i> that appears in
		the interrogative <i lang="ain-Latn">nen</i> 'who' and in
		<i lang="ain-Latn">hempak-iw</i> 'how many people' — see
		<Xr ch="interrogative-pro-forms" />
		<Ref k="nakagawa2024" p="464" />. The choice between <i lang="ain-Latn">-p</i> and
		<i lang="ain-Latn">-n</i> for human referents is weak: <i lang="ain-Latn">-p</i> is
		described as "more brusque" but neither is ungrammatical with persons
		<Ref k="nakagawa2024" p="464" />. The community observation that the numeral-noun form
		<i lang="ain-Latn">rep</i> cannot be placed before its noun — that 'three worlds' must be
		<i lang="ain-Latn">re mosir</i>, not
		<i lang="ain-Latn">*rep mosir</i> — is consistent with Nakagawa's syntactic description
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2024-11-09);
		<Ref k="nakagawa2024" p="461" />.
	</p>

	<p>
		A secondary '1' root <i lang="ain-Latn">ar-</i> appears before certain nouns:
		<i lang="ain-Latn">ar-suy</i> (also <i lang="ain-Latn">assuy</i>) 'once',
		<i lang="ain-Latn">ar-itak</i> 'one word'
		<Ref k="nakagawa2024" p="461" />. The same element appears in
		<i lang="ain-Latn">arwan</i> (7) and in the iteratives <i lang="ain-Latn">arsuy</i>,
		<i lang="ain-Latn">tusuy</i>, <i lang="ain-Latn">resuy</i> 'once, twice, three times'
		<Ref k="refsing1986" p="108" />.
	</p>

	<p>
		The etymology of roots 6–9 is historical, not synchronic. Working from Chiri's
		finger-counting data and Patrie's comparative materials, Refsing analyses these as old
		"ten-minus" compounds: <i lang="ain-Latn">iwan</i> (6) &lt;
		<i lang="ain-Latn">i(ne)</i>+<i lang="ain-Latn">wan</i> "4+ten";
		<i lang="ain-Latn">arwan</i> (7) &lt; <i lang="ain-Latn">ar</i>+<i lang="ain-Latn">wan</i>
		(where <i lang="ain-Latn">ar</i> is glossed as an old '3' or old '1' — contested);
		<i lang="ain-Latn">tupesan</i> (8) and <i lang="ain-Latn">sinepesan</i> (9) as
		<i lang="ain-Latn">tu/sine</i>+<i lang="ain-Latn">pesan</i>, or in Patrie's reconstruction
		<i lang="ain-Latn">tu-upis</i>/<i lang="ain-Latn">sine-upis</i>, with
		<i lang="ain-Latn">upis</i> an old '10' attested in Kuril Ainu
		<Ref k="refsing1986" p="111" />. These reconstructions are ‹speculative›; synchronically
		the forms are opaque roots. The root <i lang="ain-Latn">hot</i> (20) is analysed as 'a set'
		— a full complement of fingers and toes, the somatic basis commonly attributed to vigesimal
		systems <Ref k="refsing1986" p="111" />.
	</p>
</S>

<S t="The vigesimal counting architecture" id="vigesimal-architecture">
	<p>
		The counting system above 10 operates in three zones: an additive zone for 11–29, a
		multiplicative zone for even decades, and a subtractive zone for odd decades
		<Ref k="nakagawa2024" p="462–463" />; <Ref k="refsing1986" p="111" />.
	</p>

	<p>
		<strong>11–19</strong> are formed by adding a unit prenominal to the verb
		<A w="ikasma" gl="exceed, surpass" /> followed by <i lang="ain-Latn">wan</i> '10': 11 =
		<i lang="ain-Latn">sine ikasma wan</i>, 13 =
		<i lang="ain-Latn">re ikasma wan</i>, 19 =
		<i lang="ain-Latn">sinepesan ikasma wan</i>. The construction frames each value as the
		amount by which the count surpasses the last decade — 'three exceeds ten' <Ref
			k="nakagawa2024"
			p="462"
		/>.
	</p>

	<Ex
		ain="rep ikasma wan to ta"
		m="re-p ikasma wan to ta"
		g="three-NMLZ exceed ten day LOC"
		tr="on the thirteenth (day)"
		cite="ainukoraci1991"
		dial="CHI"
		place="萱野志朗, アイヌタイムズ (沙流・千歳)"
		note="re-p ikasma wan = 13 (3 + exceed + 10). The noun to 'day' and locative ta follow the numeral phrase. Here the numeral-noun form rep occurs as a free numeral expression rather than in apposition to a counted noun."
	/>

	<p>
		<strong>20 = <i lang="ain-Latn">hotne</i></strong>, the vigesimal base. <strong>21–29</strong>
		replace <i lang="ain-Latn">wan</i> with <i lang="ain-Latn">hotne</i>:
		<i lang="ain-Latn">sine ikasma hotne</i> (21) through
		<i lang="ain-Latn">sinepesan ikasma hotne</i> (29).
	</p>

	<Ex
		ain="sinepesan pa ikasma hotne pa"
		m="sinepesan pa ikasma hotne pa"
		g="nine year exceed twenty year"
		tr="twenty-nine years old"
		cite="ainukoraci1991"
		dial="CHI"
		place="平石清隆, アイヌタイムズ (沙流・千歳)"
		note="sinepesan (9) + ikasma (exceed) + hotne (20) = 29. The noun pa 'year/spring' is repeated after each numeral component in this age expression."
	/>

	<p>
		<strong>Even decades</strong> from 40 to 100 are multiplicative: the unit prenominal
		compounds directly with <i lang="ain-Latn">hotne</i>, yielding
		<i lang="ain-Latn">tuhotne</i> (2×20=40), <i lang="ain-Latn">rehotne</i> (3×20=60),
		<i lang="ain-Latn">inehotne</i> (4×20=80), and <i lang="ain-Latn">asiknehotne</i>
		(5×20=100) <Ref k="nakagawa2024" p="463" />. The 100-value
		<i lang="ain-Latn">asiknehotnep</i> is independently confirmed ‹corpus-confirmed›
		<Ref k="aynucorporadiscord" /> (palestine_2026, aynu-corpora Discord, 2026-06-08).
	</p>

	<Ex
		ain="asikne-hotnen asir cise or ta uekarpa"
		m="asikne-hotne-n asir cise or ta uekarpa"
		g="five-twenty-HUM.NMLZ new house inside LOC gather"
		tr="A hundred people gathered in the new house."
		cite="ainukoraci1991"
		dial="CHI"
		place="萱野志朗, アイヌタイムズ (沙流・千歳)"
		note="asikne-hotne-n = asikne (5) × hotne (20) = 100; the human numeral-noun suffix -n marks the referents as persons. The locative noun or 'place-of' precedes the case particle ta."
	/>

	<p>
		<strong>Odd decades</strong> are subtractive. The pattern is
		<i lang="ain-Latn">wan</i> + the prefix <i lang="ain-Latn">e-</i> + the next even decade:
		<i lang="ain-Latn">wan etuhotne</i> = "ten toward forty" = 30;
		<i lang="ain-Latn">wan erehotne</i> = 50; <i lang="ain-Latn">wan einehotne</i> = 70;
		<i lang="ain-Latn">wan easiknehotne</i> = 90. The prefix
		<i lang="ain-Latn">e-</i> marks the following even decade as the reference point from which
		ten units are counted off; this is the defining property that the literature labels
		vigesimal subtractive counting (二十進法; 下方算法)
		<Ref k="nakagawa2024" p="463" />; <Ref k="ochiai2021" />.
	</p>

	<Ex
		ain="wan etuhotne"
		m="wan e-tu-hotne"
		g="ten toward-two-twenty"
		tr="thirty (lit. ten short of forty)"
		constructed
		note="Subtractive odd decade: wan (10) + e- (toward/short of) + tuhotne (2×20=40). The prefix e- is formally identical to the applied-object prefix treated elsewhere in the grammar; its numeral function is directional — marking the following even decade as the target quantity."
	/>

	<p>
		The community discussion of the subtractive pattern (aomidori_cs_, aynu-corpora Discord,
		2024-05-28) independently corroborates Nakagawa's 30 and 50 formulas; the same contributor
		extends the pattern analogically to propose expressions for negative quantities
		(<i lang="ain-Latn">*sine e-isam</i> for −1, combining <i lang="ain-Latn">e-</i> with
		<i lang="ain-Latn">isam</i> 'be absent'), but that extension is a modern coinage
		‹speculative› and lies outside the attested system
		<Ref k="aynucorporadiscord" />.
	</p>

	<p>
		In the counting-off form, the bare root <i lang="ain-Latn">hot</i> replaces
		<i lang="ain-Latn">hotne</i>: 20 = <i lang="ain-Latn">hot</i>, 30 =
		<i lang="ain-Latn">wanpe etuhot</i>, 40 = <i lang="ain-Latn">tuhot</i>
		<Ref k="nakagawa2024" p="466" />.
	</p>

	<table>
		<caption>Decade structure of the vigesimal system (prenominal forms, Saru–Chitose)</caption>
		<thead>
			<tr>
				<th>value</th>
				<th>formula</th>
				<th>prenominal form</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>11</td>
				<td>1 + exceed + 10</td>
				<td><i lang="ain-Latn">sine ikasma wan</i></td>
			</tr>
			<tr>
				<td>19</td>
				<td>9 + exceed + 10</td>
				<td><i lang="ain-Latn">sinepesan ikasma wan</i></td>
			</tr>
			<tr>
				<td>20</td>
				<td>base</td>
				<td><i lang="ain-Latn">hotne</i></td>
			</tr>
			<tr>
				<td>21</td>
				<td>1 + exceed + 20</td>
				<td><i lang="ain-Latn">sine ikasma hotne</i></td>
			</tr>
			<tr>
				<td>29</td>
				<td>9 + exceed + 20</td>
				<td><i lang="ain-Latn">sinepesan ikasma hotne</i></td>
			</tr>
			<tr>
				<td>30</td>
				<td>10 toward 2×20</td>
				<td><i lang="ain-Latn">wan etuhotne</i></td>
			</tr>
			<tr>
				<td>40</td>
				<td>2×20</td>
				<td><i lang="ain-Latn">tuhotne</i></td>
			</tr>
			<tr>
				<td>50</td>
				<td>10 toward 3×20</td>
				<td><i lang="ain-Latn">wan erehotne</i></td>
			</tr>
			<tr>
				<td>60</td>
				<td>3×20</td>
				<td><i lang="ain-Latn">rehotne</i></td>
			</tr>
			<tr>
				<td>70</td>
				<td>10 toward 4×20</td>
				<td><i lang="ain-Latn">wan einehotne</i></td>
			</tr>
			<tr>
				<td>80</td>
				<td>4×20</td>
				<td><i lang="ain-Latn">inehotne</i></td>
			</tr>
			<tr>
				<td>90</td>
				<td>10 toward 5×20</td>
				<td><i lang="ain-Latn">wan easiknehotne</i></td>
			</tr>
			<tr>
				<td>100</td>
				<td>5×20</td>
				<td><i lang="ain-Latn">asiknehotne</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		For composite numeral-noun phrases above 29, each component stands as an independent noun
		form: "31 things" is <i lang="ain-Latn">sinep ikasma wanpe etuhotnep</i>; "11 loads" is
		<i lang="ain-Latn">sinep ikasma wan sike</i>
		<Ref k="nakagawa2024" p="466" />. Nakagawa observes that composites above 10 "almost never
		appear in recorded classical texts"; the attested vigesimal compounds in the broader corpus
		are concentrated in modern <span lang="ja">アイヌタイムズ</span> prose from the 1990s–2000s
		<Ref k="nakagawa2024" p="468" />.
	</p>
</S>

<S t="Numeral syntax" id="numeral-syntax">
	<p>
		Prenominals precede the head noun directly, without an intervening classifier or particle;
		numeral nouns follow the head noun in apposition or stand alone; and the counting-off forms
		are used only for enumerating in sequence, without an NP head
		<Ref k="nakagawa2024" p="461–465" />; <Ref k="refsing1986" p="115–117" />.
	</p>

	<Ex
		ain="sine okkaypo ek a wa"
		m="sine okkaypo ek a wa"
		g="one youth come PFV CONJ"
		tr="A young man came."
		cite="sato2008:257"
		dial="CHI"
		note="The prenominal sine precedes the noun okkaypo directly. No postposition or classifier intervenes."
	/>

	<Ex
		ain="toonta pon kamuy rep an ma"
		m="toonta pon kamuy re-p an ma"
		g="there small bear three-NMLZ exist FIN"
		tr="There are three young bear cubs over there."
		cite="sato2008:256"
		dial="CHI"
		note="The numeral noun rep (re-p, 'three-thing') follows the head noun kamuy in apposition. The prenominal construction *re kamuy rep would be redundant; the head noun takes the prenominal form alone (re kamuy 'three bears') or the postposed numeral-noun alone (kamuy rep 'bears, three')."
	/>

	<p>
		The error of placing the numeral-noun form before the noun — <i lang="ain-Latn">*sinep tuki</i>
		for 'one cup' instead of <i lang="ain-Latn">sine tuki</i> or
		<i lang="ain-Latn">tuki sinep</i> — is explicitly flagged as a common learner mistake
		<Ref k="nakagawa2024" p="465" />. The [noun + postposed numeral-noun + verb] construction,
		as in <i lang="ain-Latn">pasuy sinep uk</i> 'take one chopstick', is common and has been
		noted as productive — arguably more so than its Japanese near-counterpart
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2024-12-12);
		<Ref k="refsing1986" p="116" /> ‹corpus-suggested›. Whether a modifier can intervene between
		a head noun and its following numeral-noun is undocumented: Satō notes that no such example
		appears in his data and flags the question as open
		<Ref k="sato2008" p="256" /> ‹contested›.
	</p>

	<S t="Numerals with the copula ne" id="numeral-copula">
		<p>
			A numeral noun combined with the copula <i lang="ain-Latn">ne</i> — treated in
			<Xr ch="copula-ne-predicate-nominals" /> — predicates a count or produces a count-adverbial.
			The case particle <i lang="ain-Latn">ne</i> here is the translative copula; the numeral noun
			takes its ordinary form:
		</p>

		<Ex
			ain="ren a=ne wa oka=an"
			m="re-n a=ne wa oka=an"
			g="three-HUM.NMLZ 4.A=COP CONJ exist.PL=4.S"
			tr="Three of us lived."
			cite="nakagawa2024:301"
			dial="SAR"
			note="The numeral noun re-n (three-human) predicates the count via copula ne; the conjunctive wa links to the following existential plural oka=an. The translative copula ne appears here in a count predication, distinct from its use as an anaphoric demonstrative."
		/>

		<p>
			A frozen copular numeral produces the adverb
			<i lang="ain-Latn">sinenne</i> 'alone' (&lt; <i lang="ain-Latn">sinen</i> +
			<i lang="ain-Latn">ne</i>), and the same pattern yields
			<i lang="ain-Latn">tup ne ukosaraye</i> 'divide in two'
			<Ref k="refsing1986" p="117" />.
		</p>
	</S>

	<S t="Numerals and plural marking" id="numeral-plural">
		<p>
			When a count greater than one is specified with a prenominal, the head noun may take
			the associative plural suffix <i lang="ain-Latn">-utar</i>:
			<i lang="ain-Latn">sine hekaci</i> 'one child' but
			<i lang="ain-Latn">tu hekattar</i> (&lt; <i lang="ain-Latn">hekaci-utar</i>) 'two children'
			<Ref k="refsing1986" p="117" />. The conditions for its omission versus realization, and
			its interaction with the transnumerality of Ainu nouns, are set out in
			<Xr ch="nominal-number-utar-transnumerality" />.
		</p>
		<p>
			Small, specified numbers (2, 3) take singular verb agreement; six or more, or unspecified
			plurals, take plural agreement <Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora
			Discord, 2024-11-17, attributed to Satō) ‹corpus-suggested›; this is consistent with
			Refsing's numeral syntax data
			<Ref k="refsing1986" p="117" />. The person-number agreement system is described in
			<Xr ch="nonconfigurationality-pronominal-argument" />.
		</p>
	</S>
</S>

<S t="Special number uses and lexicalized expressions" id="special-uses">
	<p>
		Several numeral roots carry extended or bleached meanings in fixed constructions beyond their
		cardinal count function.
	</p>
	<p>
		<i lang="ain-Latn">iwan</i> (6) functions as an intensifier glossable as 'many' in oral
		literary registers and fixed expressions. The expression
		<i lang="ain-Latn">iwan suy</i> means 'many times', and the form
		<i lang="ain-Latn">noiwan</i> is an intensified variant
		<Ref k="nakagawa2024" p="469" />.
	</p>

	<Ex
		ain="iwan suy a=i=hotuyekar hine"
		m="iwan suy a=i=hotuyekar hine"
		g="six time 4.A=ANTIP=call.out CONJ"
		tr="called out many times"
		cite="nakagawa2024:469"
		dial="SAR"
		note="iwan suy: the cardinal 6 is used with the force of 'many/several'. This use is restricted to fixed collocations; a compositional 'six times' reading is also possible in context."
	/>

	<p>
		The pair <i lang="ain-Latn">tu</i> / <i lang="ain-Latn">re</i> in oral-literary formulaic
		contexts carries the sense 'many' rather than exactly 'two' or 'three':
		<i lang="ain-Latn">tu cup ka re cup</i> 'many months',
		<i lang="ain-Latn">tu ray onkami / re ray onkami</i> 'bow many times'
		<Ref k="nakagawa2024" p="468" />. By contrast, <i lang="ain-Latn">tutko rerko</i> '2–3 days'
		genuinely denotes a short span <Ref k="nakagawa2024" p="468" />.
	</p>
	<p>
		Day-counting uses the combining form <i lang="ain-Latn">-ko</i>:
		<i lang="ain-Latn">tutko</i> '2 days', <i lang="ain-Latn">rerko</i> '3 days', then
		<i lang="ain-Latn">ine rerko</i> '4 days', <i lang="ain-Latn">asikne rerko</i> '5 days'.
		In the last two expressions <i lang="ain-Latn">rerko</i> has bleached from 'three-day-span'
		to a general 'days' noun <Ref k="nakagawa2024" p="465" />.
	</p>
	<p>
		The animal count noun <i lang="ain-Latn">atuyta</i> is lexically restricted to Saru/Chitose
		and denotes 10 head of animals in Saru but 20 head in Chitose — a lexical split internal to
		the same dialect cluster
		<Ref k="nakagawa2024" p="467" />.
	</p>
</S>

<S t="The counter and classifier question" id="classifier-debate">
	<p>
		Whether <i lang="ain-Latn">-p/-pe</i> and <i lang="ain-Latn">-n/-iw</i> constitute numeral
		classifiers depends on the criterion applied. Nakagawa's answer is unambiguous: Ainu has no
		numeral classifiers (助数詞) of the Sinitic type; quantification uses the prenominal plus
		noun directly, analogous to English counting, and the thing/person suffix pair is instead the
		native derivational contrast parallel to Japanese <span lang="ja">ひとつ/ひとり</span>, a
		trait shared with the neighbouring Nivkh
		<Ref k="nakagawa2024" p="461–462, 464" />. Refsing explicitly calls
		<i lang="ain-Latn">-p(e)</i> and <i lang="ain-Latn">-n/-iw</i> "a rudimentary system of
		'classifiers' or 'counters'" and reserves 'numeral' for the bare stem
		<Ref k="refsing1986" p="110–111" />. The Handbook goes further, applying the label
		"word-classifiers" to <i lang="ain-Latn">to</i> 'X days' and
		<i lang="ain-Latn">suy</i> 'X times', and speculates about remnants of an earlier, more
		elaborate classifier system — though the passage is labelled as speculation in the source
		<Ref k="bugaeva2022" />.
	</p>
	<p>
		The disagreement reduces to a terminological question: Nakagawa's criterion requires
		Sinitic-style morphological obligatoriness and categorial specificity (absent in Ainu);
		Refsing's and the Handbook's criterion requires only semantic categorization in regular
		numeral co-occurrence (present in Ainu)
		<Ref k="refsing1986" p="110" />; <Ref k="nakagawa2024" p="461" /> ‹contested›. The fuller
		treatment of the classifier debate, the status of <i lang="ain-Latn">to</i> and
		<i lang="ain-Latn">suy</i>, and the day-counting constructions are reserved for
		<Xr ch="numeral-classifiers-ordinals-and-quantifier-syntax" />.
	</p>
</S>

<S t="Dialect variation and the vigesimal-to-decimal shift" id="dialect-variation">
	<p>
		The vigesimal base is the defining property of the Saru–Chitose standard but is not
		pan-Hokkaido. Two dialect areas use a decimal base, and in those the root
		<i lang="ain-Latn">hot</i> takes the value ten rather than twenty.
	</p>
	<p>
		<strong>Asahikawa</strong> is decimal above ten: <i lang="ain-Latn">sinehot</i> = 10,
		<i lang="ain-Latn">tuhot</i> = 20, <i lang="ain-Latn">rehot</i> = 30, and so on. The Sōya
		(宗谷) dialect similarly has <i lang="ain-Latn">wanhot</i> = 100 (decimal
		'ten-ten') <Ref k="nakagawa2024" p="467–468" />. Community records confirm that the
		collision between vigesimal and decimal speakers produced misunderstandings in commercial
		exchange ‹corpus-confirmed› <Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord,
		2024-12-25; Deleted User, 2024-05-13).
	</p>
	<p>
		The form for 100 varies markedly across Hokkaido. Saru, Chitose, Horobetsu, and Nayoro use
		<i lang="ain-Latn">asiknehotne(p)</i> (5×20); Yakumo and Obihiro use
		<i lang="ain-Latn">sineik</i>; Bihoro uses <i lang="ain-Latn">ik</i>; Sōya uses
		<i lang="ain-Latn">wanhot</i>
		<Ref k="nakagawa2024" p="468" />.
	</p>
	<p>
		Sakhalin Ainu is decimal throughout <Ref k="sakaguchi2022" />. The root for 10 is
		<i lang="ain-Latn">kunkutu</i>, plausibly an Itelmen loan
		‹speculative› <Ref k="aynucorporadiscord" /> (antitwilight, aynu-corpora Discord,
		2024-11-22), and 100 is <i lang="ain-Latn">sinetanku</i>, from Tungusic
		<i lang="ain-Latn">tanku</i>
		<Ref k="nakagawa2024" p="468" />. The Tungusic and Itelmen contact reflected in these forms
		has no counterpart in the Hokkaido system.
	</p>
	<p>
		A directional shift in modern usage, from the subtractive architecture toward additive or
		decimal expressions, is documented by Ochiai
		<Ref k="ochiai2021" />. The subtractive structure is complex to produce and rare in classical
		oral texts <Ref k="nakagawa2024" p="468" />, and the pedagogical grammar of
		<Ref k="ijas2023" /> teaches both the vigesimal and a simplified decimal alternative,
		reflecting classroom practice. The direction of change belongs to the sociolinguistics of the
		revitalization context; the attested classical system is as described above.
	</p>
</S>
