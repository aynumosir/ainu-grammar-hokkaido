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
		their morphological and phonological conditions. The
		glottal-insertion strategy is treated in <Xr ch="glottal-stop" />, and vowel deletion in
		the context of personal-prefix sandhi is covered in
		<Xr ch="personal-affix-sandhi-connected-speech-reduction" />.
	</p>
	<p>
		In Satō's account, as summarized by Shiraishi, productive glide insertion is
		conditioned by a subset of prefixes, including indefinite-person
		<A w="i-" />, reciprocal <A w="u-" gl="RECP" />, and reflexive
		<A w="si-" gl="REFL" />. Incorporated stems do not trigger it in the same way
		<Ref k="shiraishi2022" p="§4.3" />. This restriction does not exclude glides in
		lexicalized compounds: Okuda's Shizunai evidence includes
		<i lang="ain-Latn">suwat</i> 'pothook' <Ref k="okuda2025" p="41" />.
		Vowel weakening has separate conditions, discussed below.
	</p>
</S>

<S t="Analyses of the glide transition (わたり)" id="glide-watari">
	<p>
		Nakagawa describes わたり 'transition' as a sound produced between successive
		phonemic targets. In his analysis, the [y] in [iyomante] 'bear-spirit-sending
		ceremony' is absent from the phonological representation /iomante/ and from his
		spelling. Similarly, he treats the [w] after initial /u/ in
		<i lang="ain-Latn">uenewsar</i> 'talk together' as transitional, while retaining
		the lexical /w/ within <i lang="ain-Latn">newsar</i>
		<Ref k="nakagawa2024" p="34–35" />.
	</p>
	<p>
		This account is disputed, including for Chitose. Okuda explains how Satō's
		analysis introduces glides within phonology, after some prefix derivations,
		without requiring them at the deepest underlying level
		<Ref k="okuda2025" p="42–43" />. The derivational argument discussed below must
		therefore be evaluated against the ordering of processes in each account.
		For the status of lexical and syllable-final /y/ and /w/, see
		<Xr ch="glides-w-y" />; for the dialect evidence, see the final section below.
	</p>
</S>

<S t="Glide epenthesis at the i- and u- prefix boundary" id="glide-insertion">
	<p>
		Glide epenthesis can occur at the juncture of a vowel-final prefix and a
		vowel-initial stem. The relevant prefixes are the indefinite-object/antipassive
		<A w="i-" gl="ANTIP" /> and the reciprocal prefix <A w="u-" gl="RECP" />
		<Ref k="kindaichi1936" p="13" />; <Ref k="shiraishi2022" p="§4.3" />. In these contexts, /i/ is followed by
		[y], and /u/ by [w]. The insertion patterns can be summarized as follows:
	</p>
	<p>
		<strong>R1</strong>&ensp;∅ → y / i- ___ V &ensp;(at a prefix boundary)<br />
		<strong>R2</strong>&ensp;∅ → w / u- ___ V &ensp;(at a prefix boundary)
	</p>

	<p>
		Shiraishi lists the following forms as examples of glide insertion
		<Ref k="shiraishi2022" p="§4.3, example (4)" />. The table preserves his forms
		and meanings; their presence in this list does not establish a single underlying
		representation or a uniform productive derivation across dialects.
	</p>
	<table>
		<caption>Table 1. Forms illustrating glide insertion in Shiraishi (2022)</caption>
		<thead><tr><th>form</th><th>meaning</th></tr></thead>
		<tbody>
			<tr><td><i lang="ain-Latn">iyekarkar</i></td><td>do to me</td></tr>
			<tr><td><i lang="ain-Latn">iyoikir</i></td><td>treasures</td></tr>
			<tr><td><i lang="ain-Latn">iyuta</i></td><td>grind grains in a mortar</td></tr>
			<tr><td><i lang="ain-Latn">uwekarkar</i></td><td>do to each other</td></tr>
			<tr><td><i lang="ain-Latn">uwepeker</i></td><td>folktale</td></tr>
			<tr><td><i lang="ain-Latn">uwatte</i></td><td>increase</td></tr>
			<tr><td><i lang="ain-Latn">uwosurpa</i></td><td>divorce</td></tr>
		</tbody>
	</table>
	<p>
		In Nakagawa's analysis of the ceremony term, /iomante/ is realized as [iyomante]
		<Ref k="nakagawa2024" p="34" />. Here the inserted [y] belongs to the phonetic
		realization. Satō's account places insertion at a phonological level; the
		comparison below keeps these analyses distinct <Ref k="okuda2025" p="43" />.
	</p>

	<S t="Morphological restrictions and lexicalization" id="boundary-block">
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
			The bear-ceremony term illustrates the disagreement. Nakagawa represents it as
			<i lang="ain-Latn">iomante</i> and treats the [y] in [iyomante] as a phonetic
			transition <Ref k="nakagawa2024" p="34" />. In Orita Suteno's Shizunai speech,
			Okuda reports [ʔiʔomante] ~ [ʔiomante], without [y], and relates this to the
			transparency of <i lang="ain-Latn">i-omante</i>. In his comparison of analyses,
			Satō's Chitose account derives phonological <i lang="ain-Latn">iyomante</i>
			<Ref k="okuda2025" p="41–43" /> ‹contested›.
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
		Nakagawa uses <i lang="ain-Latn">iunin</i> 'ache', pronounced [iyunin], to
		argue for an underlying initial vowel. His Chitose example has
		<i lang="ain-Latn">kuyuninka</i> with one [y]; applying vowel weakening to an
		underlying <i lang="ain-Latn">iyunin</i> would instead predict two. He also cites
		Saru <i lang="ain-Latn">somo eyunin ya?</i> 'Does it not hurt you?'
		<Ref k="nakagawa2024" p="40" />. This supports his treatment of [y] as a
		transition. Okuda cautions that such derivations do not exclude every
		phonological account of glide insertion: in Satō's analysis, insertion follows
		the relevant prefix operations <Ref k="okuda2025" p="42–43" />.
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
		The accounts compared by Okuda differ in both their dialectal evidence and the level
		at which they place glide insertion <Ref k="okuda2025" p="40–43" /> ‹contested›.
		Nakagawa treats the relevant [y] and [w] as phonetic transitions and omits them in
		forms such as <i lang="ain-Latn">iomante</i> and <i lang="ain-Latn">uenewsar</i>
		<Ref k="nakagawa2024" p="34–35" />. This claim concerns transitional glides;
		it does not deny the existence of the consonant phonemes /y/ and /w/.
	</p>
	<p>
		For Shizunai, Okuda argues that some glides have phonological status even when they
		are absent from the etymological components. The pair [suwat] 'pothook' and [suʔat]
		'pot bail', discovered by 志賀雪湖, contrasts in Orita Suteno's variety without
		distinctive pitch accent. Okuda gives /suwat/ beside /su’at/ or /suat/, and also
		describes contrasts such as /i’o/ : /iyo/ whose realizations may overlap through
		weakening <Ref k="okuda2025" p="41" />.
	</p>
	<p>
		In Okuda's account of Satō (2003), Chitose glide insertion occurs at a relatively
		surface level within phonology, after derivation involving person prefixes such as
		<i lang="ain-Latn">ku=</i>. It interacts with vowel-to-glide conversion. Thus an
		inserted glide can have phonological status without being present at the deepest
		level of the derivation <Ref k="okuda2025" p="42–43" />. Shiraishi also reports
		Satō's evidence that the occurrence of glides depends on morphological context
		<Ref k="shiraishi2022" p="§4.3" />.
	</p>
	<p>
		Accent-bearing varieties therefore remain part of the disagreement about glide
		phonemicity. The Shizunai evidence does not establish a general division into
		phonemic glides in accentless varieties and non-phonemic glides in accent varieties.
		Okuda also distinguishes the status of glides from the choice between a laryngeal
		segment and syllable-boundary representations <Ref k="okuda2025" p="43–44" />;
		see <Xr ch="glottal-stop" />.
	</p>
</S>
