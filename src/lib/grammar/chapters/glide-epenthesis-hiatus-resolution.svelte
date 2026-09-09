<!-- src/lib/grammar/chapters/glide-epenthesis-hiatus-resolution.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Morpheme composition in Hokkaido Ainu frequently places two vowels in adjacent position
		across a prefix or morpheme boundary. Four main strategies resolve such hiatus sequences,
		each conditioned by the type of boundary and the phonological shape of the adjacent
		morphemes: (1) <em>glide epenthesis</em>, insertion of a transitional [y] or [w] between
		the boundary vowels; (2) <em>vowel weakening</em>, in which a stem-initial high vowel /i/
		or /u/ reduces to a glide after a preceding prefix; (3) <em>glottal insertion</em>, in
		which [ʔ] marks the syllable onset; and (4) <em>vowel deletion</em>, in which one of the
		adjacent vowels is elided. The present chapter covers strategies (1) and (2), together with
		the phonotactic constraint that blocks both of them in certain environments. The
		glottal-insertion strategy is treated in <Xr ch="glottal-stop" />, and vowel deletion in
		the context of personal-prefix sandhi is covered in
		<Xr ch="personal-affix-sandhi-connected-speech-reduction" />.
	</p>
	<p>
		Glide epenthesis applies only after specific prefixes — the
		indefinite/antipassive prefix <A w="i-" gl="ANTIP" />, the reciprocal
		<A w="u-" gl="RECP" />, and variably the reflexive <A w="si-" gl="REFL" /> — and only
		at a prefix boundary, not at a compound morpheme boundary. Vowel weakening is also
		prefix-conditioned. Both are blocked when a glide before a closed syllable would create an
		illicit onset cluster, because the (C)V(C) syllable canon of Hokkaido Ainu forbids
		consonant clusters within a single syllable: see <Xr ch="syllable-template" />
		<Ref k="nakagawa2024" p="41–42" />.
	</p>
</S>

<S t="The glide transition (わたり) and its non-phonemic status" id="glide-watari">
	<p>
		Nakagawa <Ref k="nakagawa2024" p="34" /> defines わたり 'glide, transition' as the sound
		produced while the vocal tract reconfigures between two successive phonemic targets in
		normal-tempo speech. In his analysis of Saru and Chitose, this transition is not an
		independent phoneme. The word <i lang="ain-Latn">iyomante</i> 'the bear-spirit-sending
		ceremony' — phonemically /i-omante/ (&lt; the indefinite-object prefix
		<A w="i-" gl="ANTIP" /> + <A w="omante" gl="send away" />) — is pronounced [iyomante]
		in connected speech, but the [y] between prefix and stem is a nonphonemic transition that
		standard orthography does not treat as a separate segment <Ref k="nakagawa2024" p="34" />.
		Likewise <i lang="ain-Latn">uwepeker</i> 'tell each other stories' is phonemically
		/u-epeker/ (&lt; <A w="u-" gl="RECP" /> + <i lang="ain-Latn">epeker</i>, a stem posited by
		the analysis and not attested as a free word ‹speculative›), and the [w]
		at the prefix–stem juncture is a transitional sound rather than a grammatically independent
		consonant.
	</p>
	<p>
		Two diagnostics establish non-phonemic status for Saru and Chitose. The nominalizer
		allomorphy test: morphemes ending in a genuine /y/ or /w/ take the consonant-allomorph
		<i lang="ain-Latn">-pe</i> of the nominalizer (e.g. <i lang="ain-Latn">okay-pe</i>,
		<i lang="ain-Latn">siw-pe</i>), while vowel-initial stems take <i lang="ain-Latn">-p</i>
		even when preceded by an epenthetic glide: <i lang="ain-Latn">iyomante-p</i>, not
		*<i lang="ain-Latn">iyomante-pe</i> <Ref k="shiraishi2022" p="§3" />;
		<Ref k="nakagawa2024" p="34" />. The double-glide test (described in §5 below) provides a
		second criterion for vowel-weakening contexts. The general analysis of /y/ and /w/ as
		consonant phonemes in the inventory — and the diagnostics that establish root-phoneme /y/
		/w/ — is developed in <Xr ch="glides-w-y" />. Whether the transition [y]/[w] at morpheme
		boundaries is phonemic in varieties other than Saru and Chitose is a genuinely contested
		question, treated in §8.
	</p>
</S>

<S t="Glide epenthesis at the i- and u- prefix boundary" id="glide-insertion">
	<p>
		Glide epenthesis operates at the juncture of a vowel-final prefix and a
		vowel-initial stem. The relevant prefixes are the indefinite-object/antipassive
		<A w="i-" gl="ANTIP" /> and the reciprocal prefix <A w="u-" gl="RECP" />
		<Ref k="kindaichi1936" p="13" />; <Ref k="shiraishi2022" p="§4.3" />. After /i/ a
		[y]-glide appears; after /u/ a [w]-glide. The rules:
	</p>
	<p>
		<strong>R1</strong>&ensp;∅ → y / i- ___ V &ensp;(at a prefix boundary)<br />
		<strong>R2</strong>&ensp;∅ → w / u- ___ V &ensp;(at a prefix boundary)
	</p>

	<table>
		<caption>Table 1. Glide epenthesis at the i- and u- prefix boundary</caption>
		<thead>
			<tr>
				<th>prefix</th>
				<th>stem</th>
				<th>phonemic form</th>
				<th>surface form</th>
				<th>gloss</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">i-</i> ANTIP</td>
				<td><i lang="ain-Latn">omante</i></td>
				<td>/i-omante/</td>
				<td>[iy.o.man.te]</td>
				<td>'sends it away'</td>
				<td><Ref k="nakagawa2024" p="34" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">i-</i> ANTIP</td>
				<td><i lang="ain-Latn">oikir</i></td>
				<td>/i-oikir/</td>
				<td>[iy.oi.kir]</td>
				<td>'piles things up'</td>
				<td><Ref k="shiraishi2022" p="§4.3" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">i-</i> ANTIP</td>
				<td><i lang="ain-Latn">ekarkar</i></td>
				<td>/i-ekarkar/</td>
				<td>[iy.ek.kar.kar]</td>
				<td>'makes things'</td>
				<td><Ref k="shiraishi2022" p="§4.3" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">i-</i> ANTIP</td>
				<td><i lang="ain-Latn">uta</i></td>
				<td>/i-uta/</td>
				<td>[iy.u.ta]</td>
				<td>'quarrels with someone'</td>
				<td><Ref k="shiraishi2022" p="§4.3" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">u-</i> RECP</td>
				<td><i lang="ain-Latn">epeker</i></td>
				<td>/u-epeker/</td>
				<td>[uw.e.pe.ker]</td>
				<td>'tell each other stories'</td>
				<td><Ref k="nakagawa2024" p="34" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">u-</i> RECP</td>
				<td><i lang="ain-Latn">ekarkar</i></td>
				<td>/u-ekarkar/</td>
				<td>[uw.ek.kar.kar]</td>
				<td>'make things together'</td>
				<td><Ref k="shiraishi2022" p="§4.3" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">u-</i> RECP</td>
				<td><i lang="ain-Latn">atte</i></td>
				<td>/u-atte/</td>
				<td>[uw.at.te]</td>
				<td>'help each other'</td>
				<td><Ref k="shiraishi2022" p="§4.3" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">u-</i> RECP</td>
				<td><i lang="ain-Latn">osurpa</i></td>
				<td>/u-osurpa/</td>
				<td>[uw.os.sur.pa]</td>
				<td>'cross together'</td>
				<td><Ref k="shiraishi2022" p="§4.3" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The epenthetic glide is determined by the prefix vowel — /i/ triggers [y], /u/ triggers
		[w] — independently of the quality of the following stem vowel. Table 1 shows y-insertion
		before /o/, /oi/, /e/, and /u/, and w-insertion before /e/ and /o/. A derivation for the
		canonical pair:
	</p>

	<table>
		<caption>Derivation: /i-omante/ → [iyomante]</caption>
		<thead>
			<tr>
				<th>step</th>
				<th>form</th>
				<th>rule</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>underlying</td>
				<td>/i-omante/</td>
				<td>—</td>
			</tr>
			<tr>
				<td>R1 applied</td>
				<td>/i-<strong>y</strong>omante/</td>
				<td>∅ → y / i- ___ V</td>
			</tr>
			<tr>
				<td>surface</td>
				<td>[iy.o.man.te]</td>
				<td>syllabification</td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="i-omante"
		ain="iyomante"
		g="ANTIP-send.away"
		tr="sends it away; (ceremonially) performs the bear-spirit-sending"
		note="The [y] glide is epenthetic at the prefix–stem boundary. Phonemic form /i-omante/. Nominalizer takes the V-allomorph: iyomante-p, not *iyomante-pe, confirming the stem is phonemically vowel-initial."
		constructed
		dial="SAR"
	/>

	<Ex
		m="u-epeker"
		ain="uwepeker"
		g="RECP-tell.story"
		tr="tell each other stories; tell stories together"
		note="The [w] glide is epenthetic at the prefix–stem boundary. Phonemic form /u-epeker/. The variant spelling uepeker (without the written glide) occurs in some orthographic traditions."
		constructed
		dial="SAR"
	/>

	<S t="The compound-boundary block" id="boundary-block">
		<p>
			Satō (1996, 2003, cited in Shiraishi 2022 §4.3) establishes on Chitose data that R1
			and R2 are morphosyntactically conditioned: they apply only at a productive prefix
			boundary — after <A w="i-" gl="ANTIP" />, <A w="u-" gl="RECP" />, and variably
			<A w="si-" gl="REFL" /> — and not after the second-person-plural prefix
			<A w="eci-" gl="2PL.A" />, after <A w="ru-" gl="in a half way" />, nor at the juncture
			between an incorporated noun and its verbal host
			<Ref k="shiraishi2022" p="§4.3" />.
		</p>
		<p>
			Satō's Chitose examples provide direct evidence for the morphological restriction.
			He contrasts insertion after indefinite <i lang="ain-Latn">i-</i> and reciprocal
			<i lang="ain-Latn">u-</i> with <i lang="ain-Latn">turi-ecipo</i> 'propel a boat
			with a pole', which has no [y] at the boundary after <i lang="ain-Latn">turi</i>
			'pole'. His <i lang="ain-Latn">ru-emina</i> 'smile' similarly lacks [w] after
			<i lang="ain-Latn">ru-</i>. He reports spectrographic evidence for these
			differences and treats the inserted glides as phonemes at a surface level
			<Ref k="sato2006glides" p="47–49" />.
		</p>
		<Ex
			m="turi-ecipo"
			ain="turiecipo"
			g="pole-propel.boat.with"
			tr="Propel a boat with a pole."
			cite="sato2006glides:48"
			dial="CHI"
			note="Satō reports no [y] between the final /i/ of turi and the initial /e/ of ecipo. He relates this to the morphological status of the preceding noun stem."
		/>
		<p>
			The December 11 community exchange raises further comparisons. Gengojiro asks
			whether <i lang="ain-Latn">i-o-ci</i> would lack [y]; nukopoli juxtaposes
			<i lang="ain-Latn">iyocispare</i> and <i lang="ain-Latn">niocire</i>
			<Ref k="aynucorporadiscord" /> (2023-12-11) ‹corpus-suggested›.
			The exchange leaves the proposed comparison unresolved. These forms require
			independent analysis before they can establish a boundary-conditioned rule.
		</p>

		<p>
			The bear-ceremony word <i lang="ain-Latn">iyomante</i> is informative here. Nakagawa
			<Ref k="nakagawa2024" p="34" />, Okuda <Ref k="okuda2025" />, and Satō all assign a
			glide-bearing form to this word because the <i lang="ain-Latn">i-</i> +
			<i lang="ain-Latn">omante</i> boundary retains sufficient compositional productivity
			for R1 to apply (cf. <i lang="ain-Latn">kamuy-omante</i> 'god-sending'). Okuda (2025)
			notes that in Shizunai, morphologically transparent instances may surface without the
			glide, as <i lang="ain-Latn">iomante</i>. The debate over this word is therefore
			incidental to the blocking question; it is the morphosyntactic conditioning, not this
			specific form, that divides the analyses.
		</p>
		<p>
			Whether <A w="si-" gl="REFL" /> consistently triggers R1 across dialects is uncertain.
			Satō (1996/2003, via Shiraishi 2022 §4.3) includes it in the trigger class, while
			community discussion notes dialectal variation in its behavior
			<Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-11) ‹corpus-suggested›. For the
			reflexive prefix itself, see <Xr ch="reflexive-possessive-si" />.
		</p>
	</S>
</S>

<S t="Syllable structure and blocked vowel weakening" id="cvvc-block">
	<p>
		Nakagawa describes weakening of stem-initial /i/ after personal prefixes in Saru
		and Chitose. In <i lang="ain-Latn">ku=ipe</i> → /kúype/ 'I eat a meal', /i/
		becomes the coda /y/ of the preceding syllable: /kuy.pe/, CVC.CV. With
		<i lang="ain-Latn">e=itak</i> → /éytak/ 'you speak', the first syllable is /ey/,
		VC <Ref k="nakagawa2024" p="52" />. The stem-initial syllables /i/ in
		<i lang="ain-Latn">ipe</i> and <i lang="ain-Latn">itak</i> are open, of shape V.
	</p>
	<p>
		Nakagawa's contrasting examples are <i lang="ain-Latn">inkar</i> 'look' and
		<i lang="ain-Latn">ikka</i> 'steal', with initial closed syllables /in/ and /ik/
		(VC). Weakening would produce /kuynkar/ and /kuykka/, containing three consecutive
		consonants, /ynk/ and /ykk/. Under the (C)V(C) syllable pattern, these cannot be
		distributed between a coda and the next onset. Nakagawa gives /kuínkar/ and /kuíkka/,
		with /i/ retained <Ref k="nakagawa2024" p="53" />. This restriction concerns the
		consonant sequence created by weakening; glide insertion adds an onset without
		removing a vowel nucleus and has its own conditions
		<Ref k="shiraishi2022" p="§4.3" />.
	</p>
	<Ex
		m="ku=inkar"
		ain="kuínkar"
		g="1SG.S=look"
		tr="I look."
		cite="nakagawa2024:53"
		place="Saru and Chitose"
		note="Nakagawa gives /kuínkar/. Initial /i/ remains a vowel; weakening would produce the three-consonant sequence /ynk/ in /kuynkar/."
	/>
	<table>
		<caption>Table 2. Nakagawa's person-prefix examples (2024: 52–53)</caption>
		<thead><tr><th>input</th><th>first syllable of stem</th><th>reported result</th><th>weakening</th></tr></thead>
		<tbody>
			<tr><td><i lang="ain-Latn">ku=ipe</i></td><td>/i/, V</td><td>/kúype/</td><td>/i/ → /y/</td></tr>
			<tr><td><i lang="ain-Latn">e=itak</i></td><td>/i/, V</td><td>/éytak/</td><td>/i/ → /y/</td></tr>
			<tr><td><i lang="ain-Latn">ku=inkar</i></td><td>/in/, VC</td><td>/kuínkar/</td><td>blocked: would create /ynk/</td></tr>
			<tr><td><i lang="ain-Latn">ku=ikka</i></td><td>/ik/, VC</td><td>/kuíkka/</td><td>blocked: would create /ykk/</td></tr>
		</tbody>
	</table>
	<p>
		A community discussion extends this explanation to <i lang="ain-Latn">ku=ikra</i>
		and the lexical verb <i lang="ain-Latn">eikra</i> 'send'. It gives
		<i lang="ain-Latn">eíkra</i>, <i lang="ain-Latn">k(u)=éikra</i>, and
		<i lang="ain-Latn">a=eíkra</i>, with person markers preceding the whole verb.
		The same message proposes comparisons with <i lang="ain-Latn">eytasa</i>
		(&lt; <i lang="ain-Latn">e- + itasa</i>) and <i lang="ain-Latn">eywanke</i>
		(&lt; <i lang="ain-Latn">e- + iwanke</i>)
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-28) ‹corpus-suggested›.
		Tamura lists <i lang="ain-Latn">eikra</i> as a transitive verb 'send',
		<i lang="ain-Latn">eytasa</i> as an adverb 'too; very', and
		<i lang="ain-Latn">eywanke</i> as a transitive verb 'use'
		<Ref k="tamura1996" p="s.vv. eikra, eytasa, eywanke" />.
		These lexical entries establish the forms and meanings; the proposed derivational
		comparison belongs to the community discussion.
	</p>
	<p>
		Glide insertion is also sensitive to morphology. Shiraishi reports that
		<i lang="ain-Latn">eci-</i> does not trigger it in Satō's account
		<Ref k="shiraishi2022" p="§4.3" />. In a discussion of spelling normalization,
		thegodofneet reports knowing no source that writes <i lang="ain-Latn">ecioka</i>
		as <i lang="ain-Latn">eciyoka</i> and questions a uniform replacement rule
		<Ref k="aynucorporadiscord" /> (2025-04-24) ‹corpus-suggested›.
		This is a reported observation about insertion, not a corpus-wide count or an
		instance of the three-consonant restriction on vowel weakening.
	</p>
</S>

<S t="Vowel weakening after personal and applicative prefixes" id="vowel-weakening">
	<p>
		Vowel weakening (母音弱化) converts a stem-initial /i/ or /u/ to a glide after a
		preceding prefix. The initial high vowel becomes a consonantal element and loses the ability
		to bear accent
		<Ref k="nakagawa2024" p="40" />. The process has been verified for Saru and Chitose;
		its distribution in other Hokkaido varieties requires further documentation
		<Ref k="nakagawa2024" p="40" />.
	</p>
	<p>
		Nakagawa summarizes the changes as <strong>R3</strong> /i/ → /y/ and
		<strong>R4</strong> /u/ → /w/ after a preceding element, usually a prefix
		<Ref k="nakagawa2024" p="40" />. The examples below include derivational prefixes;
		the personal-prefix examples and their syllable-structure restriction are given above.
	</p>

	<table>
		<caption>Table 3. Vowel weakening after personal and applicative prefixes (Saru/Chitose)</caption>
		<thead>
			<tr>
				<th>prefix + stem</th>
				<th>surface form</th>
				<th>gloss</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">ko-</i> + <i lang="ain-Latn">itak</i></td>
				<td><i lang="ain-Latn">koytak</i></td>
				<td>talk to someone</td>
				<td><Ref k="nakagawa2024" p="40" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">e-</i> + <i lang="ain-Latn">ikoytupa</i></td>
				<td><i lang="ain-Latn">eykoytupa</i></td>
				<td>envy someone or something</td>
				<td><Ref k="nakagawa2024" p="40" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">e-</i> + <i lang="ain-Latn">ukoytak</i></td>
				<td><i lang="ain-Latn">ewkoytak</i></td>
				<td>talk with each other about something</td>
				<td><Ref k="nakagawa2024" p="40" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">yayko-</i> + <i lang="ain-Latn">uepeker</i></td>
				<td><i lang="ain-Latn">yaykowepeker</i></td>
				<td>ponder what to do in difficulty</td>
				<td><Ref k="nakagawa2024" p="40" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		In <i lang="ain-Latn">koytak</i> (&lt; <i lang="ain-Latn">ko- + itak</i>),
		the initial /i/ of <i lang="ain-Latn">itak</i> 'speak' becomes /y/. In
		<i lang="ain-Latn">yaykowepeker</i>, the initial /u/ of
		<i lang="ain-Latn">uepeker</i> 'tell a story' becomes /w/
		<Ref k="nakagawa2024" p="40" />. Tamura independently gives
		<i lang="ain-Latn">eykoytupa</i> 'envy' as <i lang="ain-Latn">e-ikoytupa</i>
		and <i lang="ain-Latn">ewkoytak</i> 'talk with each other about something' as
		<i lang="ain-Latn">e-uko-itak</i>
		<Ref k="tamura1996" p="s.vv. eykoytupa, ewkoytak" />.
	</p>
	<p>
		A double-glide test distinguishes R3/R4 from the presence of an underlying /y/ or /w/ in
		the stem. If the stem-initial segment were an underlying /y/ or /w/, weakening it to [y]
		or [w] would yield a geminate. The verb <i lang="ain-Latn">iunin</i> 'ache' has a
		phonemic stem-initial /i/ (not */yi/); with the prefix <A w="ku-" gl="1SG.A" /> it
		surfaces in Chitose as [kuyunin], with a single [y], not *[kuyyunin]
		<Ref k="nakagawa2024" p="40" />. The same test in Saru:
		<i lang="ain-Latn">somo eyunin ya?</i> (not *<i lang="ain-Latn">eyyunin</i>). The single
		[y] confirms that R3 weakens a stem vowel rather than inserting a new glide alongside an
		underlying one.
	</p>
	<p>
		The accent consequences of vowel weakening — the nucleus shift when a formerly accentable
		σ1 vowel becomes a non-accentable glide — are treated in
		<Xr ch="accent-in-compounds-and-affixation" />. For the related deletion of the prefix
		vowel in <i lang="ain-Latn">ku-</i> and <i lang="ain-Latn">ci-</i> before non-/i/ vowels
		(ku-omare → k=omare), see <Xr ch="personal-affix-sandhi-connected-speech-reduction" />
		and <Xr ch="person-marking-architecture" />.
	</p>
</S>

<S t="Glottal realization at hiatus" id="glottal-insertion">
	<p>
		Shiraishi describes glottal insertion as an available realization when the first
		vowel is non-high or when morphological conditions exclude glide insertion.
		The closure or tension is especially audible when the second vowel bears accent
		or belongs to a closed syllable. If these conditions are not fully met, the
		transition can be gradual <Ref k="shiraishi2022" p="§4.3" />. His examples include
		<i lang="ain-Latn">aˈʔep</i> 'food', <i lang="ain-Latn">aˈʔoypep</i> 'tableware',
		<i lang="ain-Latn">eˈʔikka</i> 'steal', and <i lang="ain-Latn">teˈʔeta</i>
		'ancient times'. He notes that most examples in this set come from his own
		observations of Tamura's Saru recordings <Ref k="shiraishi2022" p="§4.3, example (6), n. 9" />.
	</p>
	<p>
		Shiraishi also mentions /h/-insertion in specific morphological contexts,
		including possessive formation. Citing Kindaichi and Chiri (1974 [1936]: 14),
		he gives <i lang="ain-Latn">onaa</i> → <i lang="ain-Latn">onaha</i> 'one's father'
		and <i lang="ain-Latn">sikii</i> → <i lang="ain-Latn">sikihi</i> 'one's eyes'
		<Ref k="shiraishi2022" p="§4.3, n. 8" />. This account describes a restricted
		morphological process; it does not establish a general /h/-insertion rule for
		adjacent vowels. For the possessive forms, see <Xr ch="affiliative-suffix-morphophonology" />.
	</p>
	<p>
		The phonological representation of glottal realizations is contested; see
		<Xr ch="glottal-stop" /> for segmental and syllable-boundary accounts.
	</p>
</S>

<S t="Vowel deletion as an alternative hiatus strategy" id="vowel-deletion">
	<p>
		Shiraishi lists vowel deletion alongside glide insertion as a hiatus-resolution
		process <Ref k="shiraishi2022" p="§4.3, example (5)" />. His examples are
		<i lang="ain-Latn">keran</i> (&lt; <i lang="ain-Latn">kera-an</i>) 'be delicious',
		<i lang="ain-Latn">sisotta</i> (&lt; <i lang="ain-Latn">siso or_ta</i>) 'be at the
		north seat of a house', and <i lang="ain-Latn">noya noya</i>
		(&lt; <i lang="ain-Latn">noye a noye a</i>) 'twisting and twisting'.
	</p>
	<p>
		These examples illustrate deletion in different morphological and phrasal
		environments. Shiraishi does not give a shared speech-rate condition for the set.
		The vowel deletion involving <i lang="ain-Latn">ku=</i> and
		<i lang="ain-Latn">ci=</i> is treated separately in
		<Xr ch="personal-affix-sandhi-connected-speech-reduction" />.
	</p>
</S>

<S t="The phonemic status of the glide transition across dialects" id="phonemic-status-debate">
	<p>
		Three analyses of the morpheme-boundary [y] and [w] bear on whether they are underlying
		phonemes or surface transitions, and the three rest on genuine cross-dialectal differences.
	</p>
	<p>
		<strong>Nakagawa's non-phonemic analysis (Saru/Chitose).</strong> The transition [y] and
		[w] at prefix boundaries are non-phonemic in Saru and Chitose: their appearance is
		entirely predictable from the shape of the adjacent morphemes, and neither the nominalizer
		allomorphy diagnostic nor the double-glide test provides evidence for underlying /y/ /w/
		at these junctures <Ref k="nakagawa2024" p="34–35" />.
	</p>
	<p>
		<strong>Okuda's phonemic analysis (Shizunai).</strong> In the Shizunai variety, which
		lacks contrastive pitch accent, the glide vs. glottal distinction at a morpheme boundary
		carries lexical weight that accent handles elsewhere. The minimal pair first observed by
		志賀雪湖 (Okuda 2025 <Ref k="okuda2025" />): [suwat] 'pothook' — an opaque, fused compound
		— vs. [suʔat] 'pot bail' — a transparent su- + at with the boundary maintained. In an
		accentless dialect this /w/ vs. /ʔ/ contrast is phonemically distinctive, giving /suwat/
		vs. /suʔat/ (= /suat/). Okuda further documents the pairs /u'a/ ~ /uwa/, /i'o/ ~ /iyo/,
		/i'e/ ~ /iye/ as additional Shizunai minimal pairs, and concludes that "one cannot say,
		without specifying dialect, that わたり /y/ /w/ are non-phonemic"
		<Ref k="okuda2025" /> ‹contested›.
	</p>
	<p>
		<strong>Satō's two-process analysis (Chitose).</strong> Satō (2003, cited in Shiraishi
		2022 §4.3) proposes that in Chitose, [y] and [w] in sequences /ie/, /ia/, /io/, /iu/,
		/ue/, /ua/, /uo/ at a morpheme boundary occur in the same phonetic environment as their
		glottal-stop-bearing counterparts and contrast with them; he therefore posits underlying
		/y/ /w/ phonemes in those contexts. The glide after <i lang="ain-Latn">ku-</i> and
		<i lang="ain-Latn">e=</i> prefixes, by contrast, arises through surface glide formation
		(i → y, u → w) — a distinct process from lexical /y/ /w/. The analysis thus involves two
		interacting processes: underlying phonemes in some contexts, and surface-phonological
		glide formation in others <Ref k="shiraishi2022" p="§4.3" /> ‹contested›.
	</p>
	<p>
		In Saru and Chitose the nominalizer-allomorphy and double-glide diagnostics do not reveal
		evidence for underlying /y/ /w/ at the prefix boundaries treated in §3; the non-phonemic
		analysis is adopted for those varieties. In Shizunai the accentless system exposes a
		contrast masked elsewhere, and the glides there are phonemically distinct from [ʔ]. The
		question is structurally linked to the /ʔ/-phoneme debate — positing /ʔ/ at all
		vowel-initial syllables reanalyses the Shizunai contrasts differently — and both are
		considered together in <Xr ch="glottal-stop" /> ‹contested›.
	</p>
</S>
