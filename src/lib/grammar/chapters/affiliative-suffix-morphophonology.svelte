<!-- src/lib/grammar/chapters/affiliative-suffix-morphophonology.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The short and long affiliative: the vowel-copy principle" id="overview">
	<p>
		The <Xr ch="concept-form-affiliative-form">affiliative (possessed) form</Xr> of a common
		noun differs from its concept form by a suffix whose vowel echoes the final vowel of the
		stem. The suffix appears in two lengths: a <em>short</em> form consisting of the copy vowel
		alone (for vowel-final stems this adds nothing visible to the concept form), and a
		<em>long</em> form consisting of copy vowel + /h/ + copy vowel again, notated
		<em>-hV₁</em> where V₁ is the stem's last vowel
		<Ref k="nakagawa2024" p="226–228" />; <Ref k="sato2008" p="152–153" />. The two lengths
		carry no semantic distinction; the choice between them is governed by prosody and speaker
		rhythm, and Satō describes the usage split as "unclear"
		<Ref k="sato2008" p="152" /> ‹contested›.
	</p>
	<p>
		The possessive person-prefix that co-occurs with the affiliative form belongs to the
		transitive-subject (A) prefix set — identical to the verbal A paradigm — as set out in
		<Xr ch="person-marking-architecture" />; the full double-marking construction is treated in
		<Xr ch="adnominal-possession-double-marking" />. This chapter addresses only the
		morphophonology of the suffix: its shape, the conditioning environments of its three
		consonant-final classes, the irregulars, and the diachronic source of the /h/ element.
	</p>
	<p>
		The conditioning sorts into three groups by the stem's final segment. Vowel-final stems
		(type ①) produce the most transparent echo: the long form adds <em>-hV₁</em>, the short
		form adds nothing. Glide-final stems (type ②) take the uniform suffix <em>-e(he)</em>.
		Consonant-final stems other than glides (type ③) belong to one of three lexically listed
		sub-classes: the default <em>-i(hi)</em>, a minority echo-vowel class <em>-V(hV)</em>,
		and a further minority <em>-u(hu)</em> class restricted to stems whose last vowel is /a/
		<Ref k="nakagawa2024" p="226–228" />.
	</p>
</S>

<S t="Type ①: vowel-final stems" id="vowel-final">
	<p>
		When the concept form ends in a vowel, the short affiliative is identical to the concept
		form; a bare third-person (zero-prefix) vowel-final noun is therefore ambiguous between
		concept and affiliative readings and requires context for interpretation
		<Ref k="nakagawa2024" p="227" />; <Ref k="sato2008" p="152" />. The long form adds
		<em>-hV₁</em>, repeating the stem-final vowel:
	</p>

	<table>
		<thead>
			<tr>
				<th>concept form</th>
				<th>gloss</th>
				<th>short affiliative</th>
				<th>long affiliative</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">sapa</i></td>
				<td>head</td>
				<td><i lang="ain-Latn">sapa</i></td>
				<td><i lang="ain-Latn">sapa-ha</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">etu</i></td>
				<td>nose</td>
				<td><i lang="ain-Latn">etu</i></td>
				<td><i lang="ain-Latn">etu-hu</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ure</i></td>
				<td>leg (literary)</td>
				<td><i lang="ain-Latn">ure</i></td>
				<td><i lang="ain-Latn">ure-he</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">totto</i></td>
				<td>breast; mother (some dialects)</td>
				<td><i lang="ain-Latn">totto</i></td>
				<td><i lang="ain-Latn">totto-ho</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">po</i></td>
				<td>child, son</td>
				<td><i lang="ain-Latn">po</i></td>
				<td><i lang="ain-Latn">po-ho</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kema</i></td>
				<td>leg, foot</td>
				<td><i lang="ain-Latn">kema</i></td>
				<td><i lang="ain-Latn">kema-ha</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		In each row the suffix vowel is identical to the stem-final vowel: /a/, /u/, /e/, /o/
		respectively. Because the short affiliative coincides with the concept form, corpus
		string-searches cannot separate them; frequency figures for long forms —
		<i lang="ain-Latn">sapaha</i> 203 tokens <Ref k="nakagawa2024" p="227" /> — are the only
		clean affiliative counts for this class.
	</p>

	<Ex
		m="ku=kema-ha ka arka ku=tek-ehe ka arka"
		g="1SG.A=leg-POSS also hurt 1SG.A=hand-POSS also hurt"
		tr="My leg hurts too; my hand hurts too."
		ain="ku=kemaha ka arka, ku=tekehe ka arka."
		cite="utari1994"
		dial="HK"
		place="アコㇿイタㇰ ch. 5 [akor-itak/005#8]"
		note="kema-ha: type ①, V₁=/a/, long affiliative. tek-ehe: type ③-2, V₁=/e/, long affiliative. Both with 1SG.A possessor. The same sentence contrasts two different suffix classes."
	/>
</S>

<S t="Type ②: glide-final stems and the monosyllabic subtype" id="glide-final">
	<p>
		When the concept form ends in the glides /y/ or /w/, the affiliative suffix is uniformly
		<em>-e(he)</em>, regardless of the preceding vowel quality
		<Ref k="nakagawa2024" p="227" />; <Ref k="sato2008" p="152" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>concept form</th>
				<th>gloss</th>
				<th>short affiliative</th>
				<th>long affiliative</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">patoy</i></td>
				<td>lip</td>
				<td><i lang="ain-Latn">patoye</i></td>
				<td><i lang="ain-Latn">patoye-he</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ikkew</i></td>
				<td>waist</td>
				<td><i lang="ain-Latn">ikkewe</i></td>
				<td><i lang="ain-Latn">ikkewe-he</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">haw</i></td>
				<td>voice</td>
				<td><i lang="ain-Latn">hawe</i></td>
				<td><i lang="ain-Latn">hawe-he</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		The affiliative <A w="hawe" gl="voice (possessed form)" /> of
		<A w="haw" gl="voice" /> is attested as both an ordinary possessed noun ('X's voice') and,
		fully grammaticalized, as one of the four formal-noun evidentials treated in
		<Xr ch="concept-form-affiliative-form" />. The two uses are morphologically identical;
		only context separates them <Ref k="nakagawa2024" p="258–259" />.
	</p>

	<Ex
		m="a=yup-ihi an=sa-ha haw-ehe ka isam"
		g="4.A=elder.brother-POSS 4.A=elder.sister-POSS voice-POSS also absent"
		tr="There is no voice from his elder brother or elder sister."
		ain="a=yupihi an=saha hawehe ka isam"
		cite="ilcaa1976"
		dial="SHI"
		place="織田ステノ, uwepeker 民話 Moyuk（前半）, AA研アイヌ語資料 (静内) [aa-irc/017#52]"
		note="haw-ehe: type ②, glide-final /w/, long affiliative -ehe. a=yupihi and an=saha are ③-1 kinship affiliatives; an= is the dialectal variant of 4th-person A prefix a=."
	/>

	<p>
		A formally parallel subtype arises with monosyllabic open-syllable (CV) nouns whose concept
		form ends in /i/ or /u/. These surface as vowel-final but take the type ② suffix
		<em>-e(he)</em> rather than the type ① echo <em>-hV₁</em>, as if an underlying glide
		— absent from the concept form — conditions the suffix
		<Ref k="nakagawa2024" p="229" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>concept form</th>
				<th>gloss</th>
				<th>short affiliative</th>
				<th>long affiliative</th>
				<th>posited underlying stem</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">ci</i></td>
				<td>penis</td>
				<td><i lang="ain-Latn">ciye</i></td>
				<td><i lang="ain-Latn">ciye-he</i></td>
				<td><i lang="ain-Latn">*ciy</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">pi</i></td>
				<td>seed</td>
				<td><i lang="ain-Latn">piye</i></td>
				<td><i lang="ain-Latn">piye-he</i></td>
				<td><i lang="ain-Latn">*piy</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ku</i></td>
				<td>bow (weapon)</td>
				<td><i lang="ain-Latn">kuwe</i></td>
				<td><i lang="ain-Latn">kuwe-he</i></td>
				<td><i lang="ain-Latn">*kuw</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ru</i></td>
				<td>track, path</td>
				<td><i lang="ain-Latn">ruwe</i></td>
				<td><i lang="ain-Latn">ruwe-he</i></td>
				<td><i lang="ain-Latn">*ruw</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		Sakhalin Ainu, which preserves phonemic vowel length, has the corresponding nouns as
		<i lang="ain-Latn">cii</i>, <i lang="ain-Latn">kuu</i> — long-vowel forms plausibly
		reflecting an earlier *Ciy/*Cuw sequence and supporting the underlying-glide analysis
		<Ref k="nakagawa2024" p="229" />; <Ref k="itabashi2001" /> ‹speculative›. The affiliative
		<i lang="ain-Latn">ruwe</i> is by far the most frequent of the four, since its
		grammaticalization as the recognized-fact evidential places it in clause-final position
		across a large share of narrative sentences; a clean affiliative count is not available
		by string-search because <i lang="ain-Latn">ruwe</i> is homophonous with the lexical noun
		and with a reduced final particle <Ref k="nakagawa2024" p="258–259" />.
	</p>
</S>

<S t="Type ③: consonant-final stems" id="consonant-final">
	<p>
		Nouns whose concept form ends in a consonant other than /y/ or /w/ belong to type ③.
		Three suffix shapes compete, and class membership within type ③ is in large part lexically
		determined <Ref k="sato2008" p="153" />; <Ref k="nakagawa2024" p="227–228" />.
	</p>

	<S t="The default: ③-1 (-i/-ihi)" id="consonant-final-default">
		<p>
			The most frequent sub-pattern inserts /i/ before the optional long-form
			<em>-hi</em>, giving <em>-i</em> (short) or <em>-ihi</em> (long) regardless of the
			stem's vowel quality. Kindaichi and Chiri's early description used
			<i lang="ain-Latn">sik</i> / <i lang="ain-Latn">shikihi</i> as the paradigm case of
			the distinction they called 具体形 'concrete form' versus 抽象形 'abstract form'
			<Ref k="kindaichi1936" p="16" />; the present grammar follows
			<Xr ch="concept-form-affiliative-form">Nakagawa's terminology</Xr> (concept/affiliative).
		</p>

		<table>
			<thead>
				<tr>
					<th>concept form</th>
					<th>gloss</th>
					<th>V₁</th>
					<th>short affiliative</th>
					<th>long affiliative</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">am</i></td>
					<td>fingernail, toenail</td>
					<td>/a/</td>
					<td><i lang="ain-Latn">ami</i></td>
					<td><i lang="ain-Latn">ami-hi</i></td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">sik</i></td>
					<td>eye</td>
					<td>/i/</td>
					<td><i lang="ain-Latn">siki</i></td>
					<td><i lang="ain-Latn">siki-hi</i></td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">otop</i></td>
					<td>hair (of the head)</td>
					<td>/o/</td>
					<td><i lang="ain-Latn">otopi</i></td>
					<td><i lang="ain-Latn">otopi-hi</i></td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">yup</i></td>
					<td>elder brother</td>
					<td>/u/</td>
					<td><i lang="ain-Latn">yupi</i></td>
					<td><i lang="ain-Latn">yupi-hi</i></td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">sir</i></td>
					<td>visible appearance, land, weather</td>
					<td>/i/</td>
					<td><i lang="ain-Latn">siri</i></td>
					<td>—</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">hum</i></td>
					<td>sound, feeling</td>
					<td>/u/</td>
					<td><i lang="ain-Latn">humi</i></td>
					<td>—</td>
				</tr>
			</tbody>
		</table>

		<p>
			The kinship term <A w="yup" gl="elder brother" /> takes the same ③-1 suffix as body
			parts, confirming that sub-type membership cuts across semantic domains. The corpus
			attests <i lang="ain-Latn">yupihi</i> at 759 tokens and
			<i lang="ain-Latn">sikihi</i> at 132 tokens <Ref k="nakagawa2024" p="228" />.
			The affiliatives <i lang="ain-Latn">siri</i> and <i lang="ain-Latn">humi</i> are
			lexically frozen in their short forms in the evidential construction; the long forms
			<i lang="ain-Latn">sirihi</i> and <i lang="ain-Latn">humihi</i> appear in the plain
			possessed-noun use only <Ref k="nakagawa2024" p="258–259" />.
		</p>

		<Ex
			m="a=yup-i an a=sa-ha an"
			g="4.A=elder.brother-POSS exist 4.A=elder.sister-POSS exist"
			tr="I have an elder brother; I have an elder sister."
			cite="huber2025:251"
			dial="HK"
			note="Classic story-opening family introduction (Huber 2025: 251, ex. 16). yup-i: ③-1 short affiliative (yup + -i). sa-ha: ① long affiliative (sa + -ha), showing type ① for comparison."
		/>
	</S>

	<S t="The minority echo-vowel sub-patterns: ③-2 and ③-3" id="consonant-final-echo">
		<p>
			A lexically defined set of consonant-final stems takes a suffix whose vowel echoes
			the stem's last vowel (③-2) rather than defaulting to /i/; a smaller set inserts /u/
			regardless of stem vowel quality (③-3, restricted to V₁ = /a/ stems). Both sub-types
			accept the same optional long-form extension. The conditioning matrix after Nakagawa
			2024: 228, 表51: <Ref k="nakagawa2024" p="228" />
	</p>

		<table>
			<thead>
				<tr>
					<th>sub-type</th>
					<th>V₁ = /a/</th>
					<th>V₁ = /i/</th>
					<th>V₁ = /u/</th>
					<th>V₁ = /e/</th>
					<th>V₁ = /o/</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>③-1 (default)</td>
					<td><i lang="ain-Latn">-i(hi)</i></td>
					<td><i lang="ain-Latn">-i(hi)</i></td>
					<td><i lang="ain-Latn">-i(hi)</i></td>
					<td><i lang="ain-Latn">-i(hi)</i></td>
					<td><i lang="ain-Latn">-i(hi)</i></td>
				</tr>
				<tr>
					<td>③-2 (echo vowel)</td>
					<td><i lang="ain-Latn">-a(ha)</i></td>
					<td>—</td>
					<td><i lang="ain-Latn">-u(hu)</i></td>
					<td><i lang="ain-Latn">-e(he)</i></td>
					<td><i lang="ain-Latn">-o(ho)</i></td>
				</tr>
				<tr>
					<td>③-3 (anomalous /u/)</td>
					<td><i lang="ain-Latn">-u(hu)</i></td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
					<td>—</td>
				</tr>
			</tbody>
		</table>

		<p>
			V₁ = the stem's last vowel. The /i/ column of ③-2 is empty because all consonant-final
			stems with V₁ = /i/ belong to ③-1. For V₁ = /a/ stems three outcomes are possible
			(③-1, ③-2, ③-3), with no phonological cue distinguishing them; this is the hardest
			sub-case for morpheme recognition
			<Ref k="nakagawa2024" p="227–228" />; <Ref k="sato2008" p="153" />.
			Nakagawa notes that ③-3 — the insertion of /u/ for V₁ = /a/ stems —
			"cannot be explained historically"
			<Ref k="nakagawa2024" p="228" /> ‹speculative›.
		</p>

		<table>
			<thead>
				<tr>
					<th>concept form</th>
					<th>gloss</th>
					<th>V₁</th>
					<th>short</th>
					<th>long</th>
					<th>sub-type</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">kisar</i></td>
					<td>ear</td>
					<td>/a/</td>
					<td><i lang="ain-Latn">kisara</i></td>
					<td><i lang="ain-Latn">kisara-ha</i></td>
					<td>③-2</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">tek</i></td>
					<td>hand</td>
					<td>/e/</td>
					<td><i lang="ain-Latn">teke</i></td>
					<td><i lang="ain-Latn">tek-ehe</i></td>
					<td>③-2</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">setur</i></td>
					<td>back</td>
					<td>/u/</td>
					<td><i lang="ain-Latn">seturu</i></td>
					<td><i lang="ain-Latn">seturu-hu</i></td>
					<td>③-2</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">osor</i></td>
					<td>buttocks</td>
					<td>/o/</td>
					<td><i lang="ain-Latn">osoro</i></td>
					<td><i lang="ain-Latn">osoro-ho</i></td>
					<td>③-2</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">rar</i></td>
					<td>eyebrow</td>
					<td>/a/</td>
					<td><i lang="ain-Latn">raru</i></td>
					<td><i lang="ain-Latn">raru-hu</i></td>
					<td>③-3</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">nan</i></td>
					<td>face</td>
					<td>/a/</td>
					<td><i lang="ain-Latn">nanu</i></td>
					<td><i lang="ain-Latn">nanu-hu</i></td>
					<td>③-3</td>
				</tr>
			</tbody>
		</table>

		<Ex
			m="ku=tek-ehe piro hi ta ku=kor totto noya ham uk wa"
			g="1SG.A=hand-POSS get.injured NMLZ LOC 1SG.A=have mother mugwort leaf take CONJ"
			tr="When my hand was injured, my mother gathered mugwort leaves …"
			ain="ku=tekehe píro hi ta, ku=kor totto noya ham uk wa …"
			cite="ainukoraci1991"
			dial="SAR"
			place="横山裕之, noya, アイヌタイムズ [ainu-times/024/1#20]"
			note="tek-ehe: type ③-2, V₁=/e/, long affiliative. ku=kor totto 'my mother' takes the alienable kor construction, illustrating the affiliative vs kor split on the same line."
		/>
	</S>
</S>

<S t="The ③-1 default surfaces in compounds" id="compounds">
	<p>
		Sub-type ③-1 is the unmarked pattern. A ③-2 or ③-3 stem that appears as the second
		element of a compound reverts to the ③-1 suffix, regardless of its own lexical class
		<Ref k="nakagawa2024" p="228" />. The noun <A w="at" gl="cord, rope" /> alone takes the
		③-2 long affiliative <i lang="ain-Latn">atu-hu</i> (V₁ = /u/); as the second element of
		<i lang="ain-Latn">tar-at</i> 'carrying-rope cord' the compound takes
		<i lang="ain-Latn">tar-ac-i(hi)</i>, the ③-1 form
		<Ref k="nakagawa2024" p="228" />. This alternation is the clearest synchronic evidence
		that ③-1 is phonologically basic and ③-2/③-3 are lexically marked
		<Ref k="sato2008" p="153" /> ‹corpus-suggested›.
	</p>
	<p>
		The same diagnostic applies to the evidential formal nouns. The noun
		<A w="sir" gl="visible appearance, land" /> alone gives the short ③-1 affiliative
		<i lang="ain-Latn">siri</i>, which grammaticalizes as the situational evidential.
		The formal noun <i lang="ain-Latn">siri</i> blocks the long extension in its evidential
		function — it is always the bare short form, never <i lang="ain-Latn">*sirihi</i> —
		suggesting that grammaticalization has lexically frozen the short form in this use
		<Ref k="nakagawa2024" p="258–259" /> ‹corpus-confirmed›.
	</p>
</S>

<S t="True irregulars" id="irregulars">
	<p>
		Two nouns have affiliative forms that none of the productive rules derives.
		<A w="par" gl="mouth" /> yields <i lang="ain-Latn">paro(ho)</i>, not the expected
		③-1 <i lang="ain-Latn">*parihi</i>. Nakagawa traces this to the word's etymology:
		<i lang="ain-Latn">par</i> is a compound of <i lang="ain-Latn">pa</i> 'upper part' and
		<i lang="ain-Latn">or</i> 'inside, place', so the ending <em>-o(ho)</em> is the locative
		long-form of <i lang="ain-Latn">or</i> rather than an affiliative suffix proper
		<Ref k="nakagawa2024" p="230" />. The second irregular, <A w="mor" gl="temple-hair" />
		→ <i lang="ain-Latn">moru(hu)</i>, is attributed to a morphological re-analysis of an
		earlier stem <i lang="ain-Latn">moru</i> <Ref k="nakagawa2024" p="230" /> ‹speculative›.
	</p>
	<p>
		Kinship terms add further formal idiosyncrasies: address-form vs reference-form pairs
		where the two stems take different affiliative classes (e.g., reference
		<i lang="ain-Latn">yup</i> ③-1 vs the address form <i lang="ain-Latn">yupo</i> ①),
		and frozen dialectal variants. These are treated in
		<Xr ch="kinship-honorific-possession" />.
	</p>
</S>

<S t="Lexical conditioning: what is predictable and what must be memorized" id="conditioning">
	<p>
		Types ① and ② are phonologically predictable from the concept form's final segment:
		any vowel-final stem belongs to ①; any /y/- or /w/-final stem (surface or underlying)
		belongs to ②. Within type ③ the situation is different. Satō states that "there are many
		exceptions … each must be memorised individually"
		<Ref k="sato2008" p="153" />, and Nakagawa 2024 concurs that ③-2 and ③-3 are lexically
		listed. For V₁ = /a/ stems the task is hardest: a given noun may belong to ③-1, ③-2,
		or ③-3 with no phonological predictor. For V₁ = /i/ the situation is simpler — all
		/i/-stem consonant-final nouns take ③-1
		<Ref k="nakagawa2024" p="227–228" />.
	</p>
	<p>
		The pedagogical grammar of <Ref k="ijas2023" /> presents the consonant-final class under
		the label 'belonging form' and treats <em>-ihi</em> as the default suffix, consistent
		with the ③-1 analysis. Ijäs does not distinguish ③-2 from ③-3 as labeled sub-classes;
		body-part forms with non-default suffixes are presented as items to be memorised. For
		the <Xr ch="nominal-subclasses-and-bound-nouns">obligatorily-possessed nouns</Xr> that
		constitute the core affiliative class, the lexical class assignment is part of each
		noun's dictionary entry.
	</p>
</S>

<S t="Diachrony: the source of -hV and the vowel-copy analysis" id="diachrony">
	<p>
		Chiri 1952 described the vowel quality of the affiliative suffix as an instance of
		<em>vowel harmony</em> spreading a feature from the stem <Ref k="chiri1952" />. The
		present description reframes this as <em>vowel copy</em>: the suffix vowel is a
		morphologically triggered copy of the stem's last vowel, not an autosegmental spread.
		The distinction is empirically relevant: in type ③-2 the copy operates across an
		intervening consonant (<i lang="ain-Latn">tek</i> → <em>-e</em>), where a strictly
		local harmony rule would require extra stipulation
		<Ref k="nakagawa2024" p="226–228" /> ‹contested›.
	</p>
	<p>
		The origin of the ③-2 echo-vowel class is addressed separately by Nakagawa 2024:
		228, 247–248, who proposes that it derives from the locative long-form suffix productive
		on relational nouns. The relational noun <A w="sut" gl="behind; grandmother" /> takes
		the locative long form <i lang="ain-Latn">sutu</i>; the same pattern recurs in the
		compound <i lang="ain-Latn">tap-sut</i> 'shoulder' → <i lang="ain-Latn">tap-sut-u(hu)</i>,
		suggesting that the ③-2 suffix in such nouns was originally a locative ending that later
		spread into the common-noun affiliative paradigm. Nakagawa describes the connection as
		"intimately related" <Ref k="nakagawa2024" p="228, 247–248" />, and notes that the
		③-3 pattern (V₁ = /a/ → /u/) "cannot be explained historically"
		<Ref k="nakagawa2024" p="228" /> ‹speculative›. Neither proposal has been independently
		replicated. See <Xr ch="relational-and-spatial-nouns" /> for the relational-noun
		long-form paradigm.
	</p>
	<p>
		The /h/ in the long-form suffix (<em>-hV₁</em>) has a proposed diachronic correlate.
		Sakhalin Ainu, which preserves phonemic vowel length, has long vowels in nouns
		corresponding to Hokkaido affiliatives with <em>-hV</em>; Itabashi 2001 argues that
		proto-Ainu coda consonants were lost in Hokkaido and partially compensated by pitch
		accent, while their trace survives in Sakhalin long vowels <Ref k="itabashi2001" />.
		Under this account the /h/ in <i lang="ain-Latn">sapa-ha</i>,
		<i lang="ain-Latn">siki-hi</i>, etc. reflects a historical boundary consonant or coda
		that became /h/ rather than zero in the possessive environment
		<Ref k="nakagawa2024" p="229" />; <Ref k="vovin1993" paren /> ‹speculative›.
	</p>
</S>

<S t="Sakhalin contrast and the -ike/-hike variant" id="sa-contrast">
	<p>
		Sakhalin Ainu uses the same vowel-copy mechanism but with the extended long form as the
		more consistent default: where Hokkaido freely alternates short
		<i lang="ain-Latn">hawe</i> and long <i lang="ain-Latn">hawehe</i>, Sakhalin typically
		retains the extended shape. A community analysis of Sakhalin data observes that the stem
		<i lang="ain-Latn">san</i> yields <i lang="ain-Latn">sanihi</i> via
		<i lang="ain-Latn">san</i> + insertion /i/ + <em>-hi</em>, and that
		<i lang="ain-Latn">makan</i> similarly yields <i lang="ain-Latn">makanihi</i>; the
		analysis further notes a Sakhalin variant <em>-hike</em> in a subset of forms
		(<i lang="ain-Latn">sani ike</i> alternating with <i lang="ain-Latn">sanihi</i>),
		where <em>-ke</em> may represent an additional nominal element appended to the affiliative
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-16) ‹speculative›. The distributional and
		historical relationship between Sakhalin <em>-hike</em> and Hokkaido <em>-hi</em> has
		not been formally investigated in the accessible sources ‹speculative›.
	</p>
	<p>
		A distinct element <em>-ike</em> appears in a small set of Hokkaido compound nouns where
		Chiri glosses it as 'person (who is X)' <Ref k="kindaichi1936" />. The eastern-dialect
		form <i lang="ain-Latn">onneke(he)</i> 'parent/mother (Tokachi, Nemuro)' has been
		analysed as <i lang="ain-Latn">onne</i> 'old' + <em>-ike</em>, with the compound then
		additionally taking the affiliative suffix (<i lang="ain-Latn">onneke-he</i>), showing
		that <em>-ike</em> here is a stem-forming element and the affiliative suffix is separate
		<Ref k="aynucorporadiscord" /> (antitwilight, 2024-11-15) ‹speculative›. The affiliation
		of this <em>-ike</em> to the affiliative paradigm, if any, is etymological rather than
		synchronic and is not a productive pattern in Hokkaido Ainu.
	</p>
</S>
