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
			<A w="eci-" gl="2PL.A" />, after applicative <A w="ru-" />, nor at the juncture
			between an incorporated noun and its verbal host
			<Ref k="shiraishi2022" p="§4.3" />.
		</p>
		<p>
			The contrast between a prefix boundary and a compound morpheme boundary is illustrated
			by a community observation: the compound <i lang="ain-Latn">i-o-ci</i> (roughly 'the
			place where things are many') surfaces as <i lang="ain-Latn">ioci</i>, not
			*<i lang="ain-Latn">iyoci</i>, because the morpheme boundary is a compound juncture
			rather than a productive prefix–stem juncture
			<Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-11) ‹corpus-confirmed›. The pair
			<i lang="ain-Latn">iyocispare</i> vs. <i lang="ain-Latn">niocire</i> further illustrates
			the conditioning: in <i lang="ain-Latn">iyocispare</i> the productive
			<i lang="ain-Latn">i-</i> prefix triggers the glide; at the boundary in
			<i lang="ain-Latn">niocire</i> the conditions for R1 are not met and no glide appears.
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

<S t="The *CVVC constraint as a blocker of glide formation" id="cvvc-block">
	<p>
		The (C)V(C) syllable canon prohibits consonant clusters in onset position and disallows
		more than one vowel per syllable <Ref k="nakagawa2024" p="41–42" />;
		<Ref k="shiraishi2022" p="§4.1" />. When glide formation at a morpheme boundary would
		produce a string that violates this canon, the process is blocked.
	</p>
	<p>
		The first-person-singular agent prefix <A w="ku-" gl="1SG.A" /> before a stem whose
		first syllable is closed (CVC) shows the blocking most directly. In /ku-ikra/ 'I send
		it', weakening the stem-initial /i/ to [y] would place [y] immediately before the coda
		/k/ of <i lang="ain-Latn">ikra</i>'s first syllable, producing *[yk] — an illicit CC
		onset at the following syllable boundary. The vowel is therefore not weakened:
		<i lang="ain-Latn">ku-ikra</i> is the surface form, with the vowel hiatus [ku.ik.ra]
		maintained <Ref k="nakagawa2024" p="52–53" />;
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-28) ‹corpus-confirmed›.
	</p>

	<Ex
		m="ku-ikra"
		g="1SG.A=send"
		tr="I send it/them"
		note="Stem-initial /i/ is not weakened to [y]: *ku-ykra would create the illicit onset cluster [yk]. Surface form: [ku.ik.ra] with vowel hiatus maintained. Contrast ku-ipe → ku-ype (§5), where the stem begins with an open syllable."
		constructed
		dial="SAR"
	/>

	<p>
		The applicative prefix <A w="e=" gl="APPL" /> before the same stem provides a parallel:
		/e=ikra/ cannot surface as *[eykra] because [yk] is an illicit onset. The actual form
		is <i lang="ain-Latn">eíkra</i> [e.ík.ra], where the /i/ of
		<i lang="ain-Latn">ikra</i> bears accent as a syllable nucleus — confirming it has not
		been reduced to a glide <Ref k="nakagawa2024" p="52–53" />;
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-28) ‹corpus-confirmed›. The open-σ1
		stems <i lang="ain-Latn">itasa</i> and <i lang="ain-Latn">iwanke</i> contrast with
		<i lang="ain-Latn">ikra</i>: e= + itasa → <i lang="ain-Latn">eytasa</i>; e= + iwanke
		→ <i lang="ain-Latn">eywanke</i>. The open first syllable (CV) of those stems permits
		the glide without creating a cluster.
	</p>

	<table>
		<caption>Table 2. The *CC-onset block and the open-syllable licence</caption>
		<thead>
			<tr>
				<th>input</th>
				<th>σ1 shape</th>
				<th>would-be surface</th>
				<th>constraint</th>
				<th>actual surface</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>/ku-ikra/</td>
				<td>closed (CVC: <i lang="ain-Latn">ik-</i>)</td>
				<td>*[kuykra]</td>
				<td>*CC onset [yk]</td>
				<td>[ku.ik.ra] ✓</td>
			</tr>
			<tr>
				<td>/e=ikra/</td>
				<td>closed (CVC: <i lang="ain-Latn">ik-</i>)</td>
				<td>*[eykra]</td>
				<td>*CC onset [yk]</td>
				<td>[e.ík.ra] ✓</td>
			</tr>
			<tr>
				<td>/ku-iunin/</td>
				<td>open (CV: <i lang="ain-Latn">iu-</i>)</td>
				<td>[kuyunin]</td>
				<td>— (no cluster)</td>
				<td>[ku.yu.nin] ✓</td>
			</tr>
			<tr>
				<td>/e=itasa/</td>
				<td>open (CV: <i lang="ain-Latn">i-</i>)</td>
				<td>[eytasa]</td>
				<td>— (no cluster)</td>
				<td>[ey.ta.sa] ✓</td>
			</tr>
		</tbody>
	</table>

	<p>
		The constraint has direct practical consequences for corpus normalization. The io→iyo and
		ue→uwe patterns cannot be applied uniformly across all morpheme boundaries: community
		member thegodofneet (2025-04-24, <Ref k="aynucorporadiscord" />) notes that no form
		*<i lang="ain-Latn">eciyoka</i> for <i lang="ain-Latn">eci-oka</i> is attested in the
		corpus ‹corpus-confirmed›. A rule-based normalization that applied io→iyo or ue→uwe at
		every juncture would produce unattested forms. Glide-bearing spellings are appropriate
		only where the morphosyntactic conditions of §3 and the phonotactic licence of §4 are
		jointly satisfied and where corpus evidence confirms the variant.
	</p>
</S>

<S t="Vowel weakening after personal and applicative prefixes" id="vowel-weakening">
	<p>
		Vowel weakening (母音弱化) converts a stem-initial /i/ or /u/ to a glide after a
		preceding prefix. No new segment is inserted; the high vowel already present at the stem
		onset is converted to a consonantal element and loses the ability to bear accent
		<Ref k="nakagawa2024" p="40" />. The process has been verified for Saru and Chitose;
		its distribution in other Hokkaido varieties requires further documentation
		<Ref k="nakagawa2024" p="40" />.
	</p>
	<p>The rules:</p>
	<p>
		<strong>R3</strong>&ensp;/i/ → [y] / V= ___ (stem-initial /i/, open first syllable)<br />
		<strong>R4</strong>&ensp;/u/ → [w] / V= ___ (stem-initial /u/, open first syllable)
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
				<td>APPL-speak 'talk to someone'</td>
				<td><Ref k="nakagawa2024" p="40" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">e-</i> + <i lang="ain-Latn">ikoytupa</i></td>
				<td><i lang="ain-Latn">eykoytupa</i></td>
				<td>APPL-talk.to.each.other</td>
				<td><Ref k="nakagawa2024" p="40" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">e-</i> + <i lang="ain-Latn">ukoytak</i></td>
				<td><i lang="ain-Latn">ewkoytak</i></td>
				<td>APPL-RECP.speak</td>
				<td><Ref k="nakagawa2024" p="40" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">yayko=</i> + <i lang="ain-Latn">uepeker</i></td>
				<td><i lang="ain-Latn">yaykowepeker</i></td>
				<td>REFL.APPL=tell.story</td>
				<td><Ref k="nakagawa2024" p="40" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		In <i lang="ain-Latn">koytak</i> (&lt; ko= + itak), the stem-initial /i/ of
		<i lang="ain-Latn">itak</i> 'speak' weakens to [y]; in
		<i lang="ain-Latn">yaykowepeker</i>, the stem-initial /u/ of
		<i lang="ain-Latn">uepeker</i> weakens to [w]. The open-first-syllable restriction of §4
		applies here: weakening is possible only when the stem's σ1 is open (CV), so no onset
		cluster results.
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

<S t="Glottal insertion when glide cannot appear" id="glottal-insertion">
	<p>
		When the morphosyntactic conditions of §3 do not permit glide epenthesis and the adjacent
		vowel is non-high so that R3/R4 weakening does not apply, [ʔ] fills the hiatus. Tamura
		(1970: 586–587, 1996: xv, cited in Shiraishi 2022 §4.3) notes that the glottal onset is
		most clearly audible when the second vowel is accented or belongs to a closed syllable:
		<i lang="ain-Latn">aˈʔep</i> 'food', <i lang="ain-Latn">aˈʔoypep</i> 'tableware',
		<i lang="ain-Latn">eˈʔikka</i>, <i lang="ain-Latn">teˈʔeta</i> 'a long time ago'. In
		non-prominent environments the transition is gradual rather than sharply glottalized
		<Ref k="shiraishi2022" p="§4.3" />.
	</p>
	<p>
		A morphologically restricted h-insertion applies within the
		<Xr ch="concept-form-affiliative-form">affiliative (possessed) form</Xr> of nouns when
		two vowels would be adjacent: <i lang="ain-Latn">onaa</i> →
		<i lang="ain-Latn">ona-h-a</i> 'his/her father';
		<i lang="ain-Latn">sikii</i> → <i lang="ain-Latn">siki-h-i</i> 'his/her eyes'
		(Kindaichi &amp; Chiri 1936: 14, cited in Shiraishi 2022 §4.3 n.8). This process is
		restricted to possessive derivation and is treated in
		<Xr ch="affiliative-suffix-morphophonology" />.
	</p>
	<p>
		Whether [ʔ] at these junctures constitutes an underlying phoneme /ʔ/ or is a predictable
		boundary marker is contested; the debate is taken up in <Xr ch="glottal-stop" />.
	</p>
</S>

<S t="Vowel deletion as an alternative hiatus strategy" id="vowel-deletion">
	<p>
		Vowel deletion provides a fourth resolution route, particularly for non-high vowels at
		morpheme boundaries where glide formation is unavailable. Shiraishi
		<Ref k="shiraishi2022" p="§4.3" /> documents:
		<i lang="ain-Latn">keran</i> (&lt; <i lang="ain-Latn">kera=an</i> 'is delicious'),
		<i lang="ain-Latn">sisotta</i> (&lt; <i lang="ain-Latn">siso or=ta</i> 'on the fireplace'),
		and <i lang="ain-Latn">noya noya</i> (&lt; <i lang="ain-Latn">noye a noye a</i>). Deletion
		is conditioned by speech rate and prosodic context and is not in free variation with glide
		epenthesis at the same boundary. The full account, including the accent interactions that
		block resyllabification, is in
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
