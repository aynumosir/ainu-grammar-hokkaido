<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The Five-Vowel System" id="inventory">
	<p>
		Hokkaido Ainu has five vowel phonemes: <strong>/a/, /e/, /i/, /o/, /u/</strong>
		<Ref k="nakagawa2024" p="26" />; <Ref k="sato2008" p="§2.1" />; <Ref
			k="shiraishi2022"
			p="§2"
		/>. The inventory is triangular, symmetric, and stable: no Hokkaido dialect reduces it
		to four vowels or expands it to six
		<Ref k="nakagawa2024" p="25" />. Phonemic vowel length is absent from all Hokkaido dialects,
		distinguishing them from Sakhalin Ainu, which maintains contrastive length <Ref
			k="nakagawa2024"
			p="27"
		/>. The length/accent diachrony is discussed in <Xr ch="pitch-accent-placement-rule" /> and <Xr
			ch="mora-syllable-accent-vs-tone-analysis"
		/>.
	</p>

	<table>
		<caption>Vowel phonemes of Hokkaido Ainu</caption>
		<thead>
			<tr>
				<th>phoneme</th>
				<th>phonetic target</th>
				<th>approximate articulatory description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>/a/</td>
				<td>[a]</td>
				<td>open, unrounded; cross-dialect stable</td>
			</tr>
			<tr>
				<td>/e/</td>
				<td>[e̞]–[ɛ̝]</td>
				<td>mid front, slightly lowered; phonetically equivalent to Japanese え</td>
			</tr>
			<tr>
				<td>/i/</td>
				<td>[i]</td>
				<td>close front, unrounded</td>
			</tr>
			<tr>
				<td>/o/</td>
				<td>[o̞]–[ɔ̝]</td>
				<td>mid back, slightly lowered; phonetically equivalent to Japanese お</td>
			</tr>
			<tr>
				<td>/u/</td>
				<td>[ɯ̹]</td>
				<td>close back, with stronger lip rounding than Japanese /ɯ/; auditorily near [o]</td>
			</tr>
		</tbody>
	</table>
</S>

<S t="Phonetic Realization" id="phonetics">
	<p>
		Formant measurements of the five vowels are available from Obata &amp; Teshima (1933; three
		male speakers, Asahikawa and Sakhalin, the first acoustic study of Ainu) and Ōhashi (1985; two
		female Saru speakers, spectrographic analysis), consolidated and discussed in
		<Ref k="shiraishi2022" p="§2" />. A nine-speaker study (Saru, Mukawa, Kushiro) by Tamura &amp;
		Motohashi (2002a), also reported in <Ref k="shiraishi2022" p="§2" />, confirms the main
		findings: /i/ and /e/ have closely spaced F1–F2 values, and /u/ has a markedly lower F2 than
		Japanese [ɯ].
	</p>

	<S t="The mid vowels e and o" id="mid-vowels">
		<p>
			Neither /e/ nor /o/ occupies the higher position often assumed in traditional transcriptions.
			At least in the well-recorded Saru (Hioka Sadamo) speech, /e/ is realized as [e̞] to [ɛ̝]
			and /o/ as [o̞] to [ɔ̝] — positions equivalent to the standard Japanese mid vowels え and お
			<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-08; corroborated by the Obata &amp;
			Teshima and Ōhashi formant data, per <Ref k="shiraishi2022" p="§2" />). The close F-space
			proximity of /i/ and /e/ accounts for the observation, recurring in older descriptions, that
			the two vowels are auditorily difficult to distinguish
			<Ref k="shiraishi2022" p="§2" />. Similarly, /u/ and /o/ are hard to separate in unaccented,
			lax positions <Ref k="sato2008" p="§2.1" />.
		</p>
	</S>

	<S t="The back vowel u" id="u-quality">
		<p>
			/u/ is a close back vowel with lip rounding distinctly stronger than Japanese /ɯ/, and a
			lower F2, placing it further back in the vowel space than Japanese /u/
			<Ref k="nakagawa2024" p="26" />; <Ref k="sato2008" p="§2.1" />; <Ref
				k="shiraishi2022"
				p="§2"
			/>. Nakagawa characterizes it as 円唇後舌母音 ('rounded back vowel'), and
			<Ref k="sato2008" p="§2.1" /> notes that /o/ is also protruded, making the distinction
			between /o/ and /u/ difficult in casual speech. To Japanese-speaking ears, /u/ sounds close to
			[o], which is why early Japanese records transcribed <i lang="ain-Latn">aynu</i> 'person' as
			アイノ and <i lang="ain-Latn">inaw</i> 'ritual stick' as イナオ
			<Ref k="nakagawa2024" p="26" />.
		</p>

		<Ex
			m="aynu"
			g="person"
			tr="person; human being"
			ain="[ái̯nʊ]"
			cite="nakagawa2024:26"
			dial="HK"
			note="The historical Japanese transcription as アイノ reflects the back-rounded quality of /u/, which Japanese listeners perceived as near [o]."
		/>
	</S>
</S>

<S t="Vowel Devoicing" id="devoicing">
	<p>
		/i/ and /u/ devoice when flanked by voiceless consonants; /e/ is occasionally affected in the
		same environment. The phenomenon is well documented across Hokkaido dialects, with the earliest
		systematic account in Kindaichi (1931) and detailed treatment in Tamura (1998), both discussed in
		<Ref k="shiraishi2022" p="§2.1" />. Representative forms: <i lang="ain-Latn">ci̥se</i> 'house',
		<i lang="ain-Latn">su̥tu</i> 'root', <i lang="ain-Latn">se̥ta</i> 'dog'.
	</p>

	<p>
		The degree of devoicing shows heavy inter-speaker and inter-dialectal variation. Northern
		dialects devoice more frequently. A longitudinal comparison reported by Tamura (1998) —
		two Saru speakers from different generations — showed the younger speaker (b. 1912)
		devoicing approximately 25 times more often than the older (b. 1890) and in a wider
		range of phonological environments, including closed syllables under accent and
		consecutive vowels (<i lang="ain-Latn">eci̥ci̥snupehe</i> 'your tears'); this is discussed
		in <Ref k="shiraishi2022" p="§2.1" />. The syllable types most prone to devoicing are
		<i lang="ain-Latn">si</i> and <i lang="ain-Latn">ci</i>; the types
		<i lang="ain-Latn">tu</i>, <i lang="ain-Latn">pi</i>, and <i lang="ain-Latn">pu</i> are
		reported never to devoice — a contrast with Japanese, which devoices <i lang="ja">ピ</i> and
		<i lang="ja">プ</i> in the same environment <Ref k="shiraishi2022" p="§2.1" />. A Chitose-dialect
		recording shows <i lang="ain-Latn">eci=kay</i> realized as [et͡sɨ̥kaj], with devoiced [ɨ̥] in
		the <i lang="ain-Latn">ci</i> sequence
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-20) ‹corpus-confirmed›. L2 learners
		influenced by kana spelling tend to over-devoice, applying devoicing beyond its natural
		distribution (Tamura 1998: 55, cited in <Ref k="shiraishi2022" p="§2.1" />).
	</p>

	<p>
		The interaction of devoicing with consonant voicing and the /s/ palatalization pattern
		is discussed in <Xr ch="consonant-inventory" /> and <Xr ch="s-palatalization" />.
	</p>
</S>

<S t="Phonemic Length and Allophonic Lengthening" id="length">
	<p>
		Hokkaido Ainu has no phonemic vowel length. All length observed in performance is allophonic,
		arising from two distinct sources <Ref k="nakagawa2024" p="26–27" />; <Ref
			k="shiraishi2022"
			p="§2.2"
		/>.
	</p>

	<p>
		First, monosyllabic CV words lengthen the vowel in isolation or in pause-final position:
		<i lang="ain-Latn">kaː</i> 'thread', <i lang="ain-Latn">toː</i> 'lake',
		<i lang="ain-Latn">niː</i> 'tree'. Second, the vowel of the accented syllable lengthens in
		polysyllabic words: <i lang="ain-Latn">ˈnuːman</i> 'yesterday',
		<i lang="ain-Latn">poˈroː</i> 'big'. Both processes are automatic and "not conducted
		consciously" by speakers (Kindaichi 1931: 4, cited in <Ref k="shiraishi2022" p="§2.2" />);
		this accent-conditioned lengthening is why the yukar epic was formerly written ユーカラ (accent
		on <i lang="ain-Latn">yu</i>) <Ref k="nakagawa2024" p="26" />.
	</p>

	<p>
		A grammaticalized emphatic lengthening, distinct from the allophonic process, breaks the
		extended vowel with a glottal onset: <i lang="ain-Latn">wen</i> 'bad' →
		<i lang="ain-Latn">weʔen</i> 'very bad'; <i lang="ain-Latn">to</i> 'lake' →
		<i lang="ain-Latn">toʔo</i> 'faraway' (Kindaichi 1931; <Ref k="shiraishi2022" p="§2.2" />).
		The glottal element here marks the emphatic lexical expansion, not a phonemic long vowel.
	</p>

	<p>
		Sakhalin Ainu, by contrast, maintains genuine vowel-length oppositions (e.g. ‹SA›
		<i lang="ain-Latn">niisah</i> vs. <i lang="ain-Latn">nisah</i>) corresponding to the
		Hokkaido pitch-accent contrast (HA <i lang="ain-Latn">nísap</i> 'suddenly' vs.
		<i lang="ain-Latn">nisáp</i> 'shin') <Ref k="nakagawa2024" p="27" />; <Ref
			k="nakagawafukazawa2022"
			p="§3.1"
		/>. The reconstructed diachronic relationship — vowel length as the older opposition, later
		replaced by pitch-accent in Hokkaido — is argued at length in
		<Ref k="itabashi2001" /> and discussed in the prosody chapters
		<Xr ch="pitch-accent-placement-rule" />.
	</p>
</S>

<S t="Vowel Sequences and Coda Glides" id="sequences">
	<p>
		Sequences such as <i lang="ain-Latn">ay</i>, <i lang="ain-Latn">aw</i>,
		<i lang="ain-Latn">uy</i>, <i lang="ain-Latn">ew</i>, and
		<i lang="ain-Latn">oy</i> are phonetically falling diphthongs — [ai̯], [au̯], [ui̯], [eu̯],
		[oi̯] — but their phonological analysis is not as diphthongs in the classical sense. The
		elements <i lang="ain-Latn">-y</i> and <i lang="ain-Latn">-w</i> behave as syllable-coda
		consonants in morphological tests (they trigger the consonant allomorph of the nominalizer
		<i lang="ain-Latn">-pe</i> rather than the vowel allomorph <i lang="ain-Latn">-p</i>:
		<i lang="ain-Latn">okay-pe</i>, <i lang="ain-Latn">siw-pe</i>) and cannot carry accent
		independently <Ref k="nakagawa2024" p="29" />; <Ref k="shiraishi2022" p="§3" />. The full
		analysis — including the phonemic status of /y/ and /w/, glide insertion at hiatus, and the
		diphthong vs. coda-glide question — is given in <Xr ch="glides-w-y" />. Morphophonological
		consequences of vowel hiatus at morpheme boundaries are treated in
		<Xr ch="glide-epenthesis-hiatus-resolution" />.
	</p>
</S>

<S t="Vowel Frequency" id="frequency">
	<p>
		/a/ is the most frequent vowel in the Hokkaido corpus, a point in common with Japanese. /e/ is
		markedly more frequent than in Japanese, a characteristic that persists when person-affix tokens
		(<i lang="ain-Latn">a=</i>, <i lang="ain-Latn">=an</i>, and related forms) are excluded from
		the count
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-09-25) ‹corpus-suggested›. The corpus tools
		available for this grammar count word tokens rather than phoneme occurrences, so these frequency
		ranks cannot be reproduced from per-segment counts at this writing; the underlying pattern is,
		however, consistent with the high frequency of the participial suffix
		<i lang="ain-Latn">-e</i>, the applicative prefixes, and the evidential formal nouns all
		containing /e/.
	</p>
</S>

<S t="The Vowel Co-occurrence Restriction" id="harmony">
	<p>
		In two morphological contexts — the suffix that derives transitive verbs from intransitives, and
		the vowel suffix that forms the possessed (affiliative) form of nouns — the choice of suffix
		vowel is conditioned by the vowel of the root: <i lang="ain-Latn">kay</i> →
		<i lang="ain-Latn">kay-e</i> 'break (tr.)', <i lang="ain-Latn">mos</i> →
		<i lang="ain-Latn">mos-o</i> 'wake (tr.)', <i lang="ain-Latn">yak</i> →
		<i lang="ain-Latn">yak-u</i> 'crush'; possessed <i lang="ain-Latn">tek</i> →
		<i lang="ain-Latn">tek-e</i> 'hand', <i lang="ain-Latn">nan</i> →
		<i lang="ain-Latn">nan-u</i> 'face' <Ref k="chiri1952" />; <Ref
			k="shiraishi2022"
			p="§4.5"
		/>. Chiri (1952) named this pattern 母音調和 ('vowel harmony'), hypothesizing that the suffix
		was originally <i lang="ain-Latn">-i</i> (the 3sg possessive), which underwent full
		assimilation to the root vowel <Ref k="chiri1952" />.
	</p>

	<p>
		The characterization as vowel harmony is contested. The pattern is confined to two derivational
		contexts; it is absent from the plural suffix <i lang="ain-Latn">-pa</i>
		(<i lang="ain-Latn">kom-pa</i>, not *<i lang="ain-Latn">kom-po</i>), from personal prefixes
		(<i lang="ain-Latn">ku-kor</i>, not *<i lang="ain-Latn">ko-kor</i>), and from underived
		forms; and no backness or tongue-root feature uniformly characterizes the alternating set
		<Ref k="shibatani1990" p="15" />; <Ref k="vovin1993" p="43" />; <Ref
			k="shiraishi2022"
			p="§4.5"
		/>. The phenomenon is therefore better described as a morphologically restricted
		vowel co-occurrence pattern than as productive harmony
		‹contested›. The morphophonological analysis of the possessed-form suffix, including the
		competing accounts of the assimilation mechanism, is pursued in
		<Xr ch="affiliative-suffix-morphophonology" />.
	</p>
</S>

<S t="Dialect Variation in Vowel Quality" id="dialect">
	<p>
		While the five-vowel inventory is constant across Hokkaido dialects, vowel quality shifts are
		attested in individual dialect records. In recordings of the Mukawa dialect (Katayama corpus),
		/i/ is realized as a lowered, fronted vowel approximating [e], and /e/ as a more open [ɛ];
		the shift is general in the recording, though /i/ retains a canonical [i] realization outside
		the affiliative form in some tokens
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-03-18) ‹corpus-suggested›. The pattern is
		consistent with a lowering chain in which the entire front series shifts one step downward;
		whether it is a stable feature of Mukawa or reflects idiolectal or recording conditions is not
		settled by the available evidence.
	</p>

	<p>
		The Shizunai (静内) and Samani dialect areas are accentless (<Xr ch="pitch-accent-placement-rule" />),
		which affects the realization of vowels under accent but does not alter the underlying inventory.
		Systematic acoustic comparisons of vowel space across Hokkaido dialect regions remain a gap in
		the literature <Ref k="nakagawafukazawa2022" p="§3" />.
	</p>
</S>
