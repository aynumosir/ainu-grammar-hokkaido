<script lang="ts">
	import { S, Ex, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="Numeral stems, numeral nouns, and counting aloud" id="numeral-classes">
	<p>
		A numeral has different forms according to its grammatical use. Nakagawa distinguishes forms
		that precede a noun, numeral nouns that can identify a quantity independently, and forms used in
		counting aloud. He classifies the last group as interjections <Ref
			k="nakagawa2024"
			p="461–467"
		/>. Satō describes the same functional distinctions in Chitose
		<Ref k="sato2008" p="256–258" />.
	</p>
	<p>
		The following small-number paradigm follows Nakagawa. The two nominal series distinguish general
		counting from specifically human counting. The general series can also count people; its use
		does not in itself imply disrespect <Ref k="nakagawa2024" p="462–464, examples 1070–1071" />.
	</p>
	<table>
		<thead
			><tr
				><th>Value</th><th>Before a noun</th><th>General numeral noun</th><th>Human numeral noun</th
				></tr
			></thead
		>
		<tbody>
			<tr
				><td>1</td><td lang="ain-Latn">sine</td><td lang="ain-Latn">sinep</td><td lang="ain-Latn"
					>sinen</td
				></tr
			>
			<tr
				><td>2</td><td lang="ain-Latn">tu</td><td lang="ain-Latn">tup</td><td lang="ain-Latn"
					>tun</td
				></tr
			>
			<tr
				><td>3</td><td lang="ain-Latn">re</td><td lang="ain-Latn">rep</td><td lang="ain-Latn"
					>ren</td
				></tr
			>
			<tr
				><td>4</td><td lang="ain-Latn">íne</td><td lang="ain-Latn">ínep</td><td lang="ain-Latn"
					>ínen</td
				></tr
			>
			<tr
				><td>5</td><td lang="ain-Latn">asikne</td><td lang="ain-Latn">asiknep</td><td
					lang="ain-Latn">asiknen</td
				></tr
			>
			<tr
				><td>6</td><td lang="ain-Latn">iwan</td><td lang="ain-Latn">iwanpe</td><td lang="ain-Latn"
					>iwaniw</td
				></tr
			>
			<tr
				><td>7</td><td lang="ain-Latn">arwan</td><td lang="ain-Latn">arwanpe</td><td lang="ain-Latn"
					>arwaniw</td
				></tr
			>
			<tr
				><td>8</td><td lang="ain-Latn">tupesan</td><td lang="ain-Latn">tupesanpe</td><td
					lang="ain-Latn">tupesaniw</td
				></tr
			>
			<tr
				><td>9</td><td lang="ain-Latn">sinepesan</td><td lang="ain-Latn">sinepesanpe</td><td
					lang="ain-Latn">sinepesaniw</td
				></tr
			>
			<tr
				><td>10</td><td lang="ain-Latn">wan</td><td lang="ain-Latn">wanpe</td><td lang="ain-Latn"
					>waniw</td
				></tr
			>
		</tbody>
	</table>
	<Ex
		m="toonta pon kamuy rep an ma"
		g="there small bear three.things exist.SG FIN"
		tr="There are three bear cubs over there."
		cite="sato2008:256"
		dial="CHI"
		note="Satō's published example illustrates a numeral noun after the counted noun."
	/>
	<p>
		The adnominal series gives such combinations as
		<i lang="ain-Latn">sine tuki</i> “one cup” and
		<i lang="ain-Latn">tu cip</i> “two boats.” The noun series has
		<i lang="ain-Latn">-p/-pe</i> and <i lang="ain-Latn">-n/-iw</i>: in this paradigm the shorter
		endings follow the vowel-final stems one through five, and the longer endings follow six through
		ten
		<Ref k="nakagawa2024" p="462–464" />. Their syntax is developed in
		<Xr ch="numeral-classifiers-ordinals-and-quantifier-syntax" />.
	</p>
</S>

<S t="Building numbers around twenty" id="vigesimal-composition">
	<p>
		In the chiefly Saru system described by Nakagawa,
		<i lang="ain-Latn">hotne</i> supplies the unit twenty. Multiples of twenty combine a small
		numeral with that unit. Intermediate values use
		<i lang="ain-Latn">ikasma</i> or a construction with
		<i lang="ain-Latn">e</i> and the following multiple of twenty
		<Ref k="nakagawa2024" p="462–463" />.
	</p>
	<table>
		<thead><tr><th>Value</th><th>Form</th><th>Numerical relation</th></tr></thead>
		<tbody>
			<tr><td>11</td><td lang="ain-Latn">sine ikasma wan</td><td>One in addition to ten</td></tr>
			<tr><td>20</td><td lang="ain-Latn">hotne</td><td>One twenty</td></tr>
			<tr
				><td>21</td><td lang="ain-Latn">sine ikasma hotne</td><td>One in addition to twenty</td></tr
			>
			<tr
				><td>30</td><td lang="ain-Latn">wan e tu hotne</td><td>Ten toward the second twenty</td></tr
			>
			<tr><td>40</td><td lang="ain-Latn">tu hotne</td><td>Two twenties</td></tr>
			<tr><td>50</td><td lang="ain-Latn">wan e re hotne</td><td>Ten toward the third twenty</td></tr
			>
			<tr><td>60</td><td lang="ain-Latn">re hotne</td><td>Three twenties</td></tr>
			<tr><td>80</td><td lang="ain-Latn">ine hotne</td><td>Four twenties</td></tr>
			<tr><td>100</td><td lang="ain-Latn">asikne hotne</td><td>Five twenties</td></tr>
		</tbody>
	</table>
	<p>
		The construction referring to the next twenty is called <em>overcounting</em>. Ochiai
		illustrates its logic with 38,
		<i lang="ain-Latn">tupesan ikasma wan e tu hotne</i>: eighteen toward the second twenty, hence
		20 + 18. Treating
		<i lang="ain-Latn">e</i> as a general subtraction sign would instead produce the wrong value, 40
		− 18
		<Ref k="ochiai2023numerals" p="283–285" />. The expression for thirty can be paraphrased
		arithmetically as forty minus ten, as in Nakagawa's explanation, but that paraphrase does not
		describe every overcounting expression
		<Ref k="nakagawa2024" p="463" />.
	</p>
	<p>
		Numeral nouns have corresponding compound forms, such as
		<i lang="ain-Latn">sinep ikasma wanpe</i> “eleven,”
		<i lang="ain-Latn">hotnep</i> “twenty,” and
		<i lang="ain-Latn">wanpe e tu hotnep</i> “thirty”
		<Ref k="nakagawa2024" p="465–466" />. Refsing's Shizunai table gives
		<i lang="ain-Latn">hot</i> in its general series and
		<i lang="ain-Latn">hotnen</i> for twenty people
		<Ref k="refsing1986" p="112" />.
	</p>
</S>

<S t="Enumeration forms" id="enumeration">
	<p>
		Counting aloud has a partially distinct series. Nakagawa gives
		<i lang="ain-Latn">sinep, tup, rep, inep, asik, iwan, arwan, tupes, sinepes</i> for one through
		nine. Ten is Saru
		<i lang="ain-Latn">wan</i> or Chitose
		<i lang="ain-Latn">wanpe</i>. Higher examples include
		<i lang="ain-Latn">hot</i> “twenty,”
		<i lang="ain-Latn">sinep ikasma hot</i> “twenty-one,” and
		<i lang="ain-Latn">tu hot</i> “forty”
		<Ref k="nakagawa2024" p="467" />.
	</p>
	<p>
		Satō gives Chitose <i lang="ain-Latn">sine hot</i> “twenty,”
		<i lang="ain-Latn">tu hot</i> “forty,” and
		<i lang="ain-Latn">tup ikasma sine hot</i> “twenty-two,” while explicitly noting the limited
		higher-number material available in his description
		<Ref k="sato2008" p="258" />.
	</p>
</S>

<S t="Regional bases and large-number forms" id="regional-bases">
	<p>
		Twenty is not the base of every recorded Hokkaido system. In Nakagawa's Asahikawa account, <i
			lang="ain-Latn">hot</i
		>
		has the value ten:
		<i lang="ain-Latn">tu hot</i> is twenty and
		<i lang="ain-Latn">re hot</i> thirty. He also interprets Sōya
		<i lang="ain-Latn">wanhot</i> “hundred” as evidence of a decimal base
		<Ref k="nakagawa2024" p="467–468" />. Refsing's earlier survey singles out Asahikawa within
		Hokkaido and separately identifies decimal counting in Raychishka Sakhalin Ainu <Ref
			k="refsing1986"
			p="113"
		/>.
	</p>
	<p>
		Nakagawa's comparison from Hattori gives “hundred” as
		<i lang="ain-Latn">sineik</i> in Yakumo and Obihiro,
		<i lang="ain-Latn">asiknehot</i> in Horobetsu, Saru, and Nayoro, both <i lang="ain-Latn">ik</i>
		and
		<i lang="ain-Latn">asiknehot</i> in Bihoro, and
		<i lang="ain-Latn">wanhot</i> in Sōya. Another form,
		<i lang="ain-Latn">atuyta</i>, means a hundred in Asahikawa, but counts ten animals in Saru and
		twenty in Chitose
		<Ref k="nakagawa2024" p="467–468" />. A shared word shape can thus have different numerical
		values.
	</p>
</S>

<S t="Historical overcounting" id="historical-overcounting">
	<p>
		Ochiai compares numeral records from seventeenth-century Matsumae with twentieth-century dialect
		materials and proposes that contact contributed to the loss of overcounting in parts of the
		recorded system
		<Ref k="ochiai2023numerals" p="283–296" /> ‹speculative›. Overcounting is a way of expressing an intermediate
		value; vigesimal or decimal describes the numerical base. A historical change in the former therefore
		needs to be distinguished from a change in the latter.
	</p>
</S>
