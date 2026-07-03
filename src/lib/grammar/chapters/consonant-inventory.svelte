<script lang="ts">
	import { S, Ex, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="The phoneme inventory" id="phonemes">
	<p>
		Hokkaido Ainu has eleven consonant phonemes: /p t k c s h m n r y w/
		<Ref k="nakagawa2024" p="27" />; <Ref k="sato2008" p="§2.2" />; <Ref k="shiraishi2022" p="§2" />.
		The inventory is organized by a straightforward place-and-manner grid. A twelfth segment,
		the glottal stop [ʔ], is posited as a phoneme in some analyses and treated as a syllable-boundary
		phonetic element in others; that debate and its implications for the syllable canon are addressed
		in <Xr ch="syllable-template" />.
	</p>

	<table>
		<thead>
			<tr>
				<th></th>
				<th>labial</th>
				<th>coronal</th>
				<th>dorsal</th>
				<th>glottal</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>stop</td>
				<td><i lang="ain-Latn">p</i></td>
				<td><i lang="ain-Latn">t</i></td>
				<td><i lang="ain-Latn">k</i></td>
				<td>([ʔ])</td>
			</tr>
			<tr>
				<td>affricate</td>
				<td></td>
				<td><i lang="ain-Latn">c</i> [tɕ~tʃ]</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>fricative</td>
				<td></td>
				<td><i lang="ain-Latn">s</i></td>
				<td></td>
				<td><i lang="ain-Latn">h</i></td>
			</tr>
			<tr>
				<td>nasal</td>
				<td><i lang="ain-Latn">m</i></td>
				<td><i lang="ain-Latn">n</i></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>rhotic</td>
				<td></td>
				<td><i lang="ain-Latn">r</i></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>glide</td>
				<td><i lang="ain-Latn">w</i></td>
				<td><i lang="ain-Latn">y</i> [j]</td>
				<td></td>
				<td></td>
			</tr>
		</tbody>
	</table>

	<p>
		Two consonants are excluded from syllable-final position: /c/ and /h/ never occur as
		codas in Hokkaido Ainu <Ref k="nakagawa2024" p="27" />; <Ref k="sato2008" p="§2.3" />;
		<Ref k="shiraishi2022" p="§3" />. All other consonants appear in both onset and coda,
		subject to the phonotactic constraints set out in <Xr ch="syllable-template" />. The vowel
		inventory that these consonants pair with is described in <Xr ch="vowel-inventory" />.
	</p>
</S>

<S t="Onset realizations" id="onset">
	<p>
		In syllable-initial position the consonants realize as follows
		<Ref k="nakagawa2024" p="28" />; <Ref k="shiraishi2022" p="§3" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>phoneme</th>
				<th>onset realization</th>
				<th>notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>/p/</td>
				<td>[p]</td>
				<td>unaspirated; frequently perceived as [b] by Japanese listeners (see <a href="#voicing">§ Voicing</a>)</td>
			</tr>
			<tr>
				<td>/t/</td>
				<td>[t] dental</td>
				<td>dental articulation; perceived as [d] in voiced environments</td>
			</tr>
			<tr>
				<td>/k/</td>
				<td>[k]</td>
				<td>velar; voicing less frequent than for /p/ and /t/ (see <a href="#voicing">§ Voicing</a>)</td>
			</tr>
			<tr>
				<td>/c/</td>
				<td>[tɕ]~[tʃ]; [ts] before /u/</td>
				<td>the [ts] allophone before /u/ caused older Japanese transcriptions to write <i lang="ain-Latn">cu</i> as ツ</td>
			</tr>
			<tr>
				<td>/s/</td>
				<td>[s] (laminal [s̻]); [ɕ] before /i/</td>
				<td>old records wrote <i lang="ain-Latn">si</i> as シ and <i lang="ain-Latn">sa su</i> as シャ・シュ</td>
			</tr>
			<tr>
				<td>/h/</td>
				<td>[h] before /a e o/; [ç] before /i/; [ɸ] before /u/</td>
				<td>colouring is weaker than in Japanese, especially in older speakers</td>
			</tr>
			<tr>
				<td>/m/</td>
				<td>[m]</td>
				<td></td>
			</tr>
			<tr>
				<td>/n/</td>
				<td>[n] dental</td>
				<td>see <a href="#nasals">§ Nasals</a> for coda assimilation</td>
			</tr>
			<tr>
				<td>/r/</td>
				<td>[ɾ] alveolar flap</td>
				<td>also trill [r] and [d]-like articulations in some speakers; see <a href="#rhotic">§ Rhotic</a></td>
			</tr>
			<tr>
				<td>/y/</td>
				<td>[j]</td>
				<td></td>
			</tr>
			<tr>
				<td>/w/</td>
				<td>[w]</td>
				<td></td>
			</tr>
		</tbody>
	</table>

	<p>
		The affricate /c/ has a secondary realization [ts] before /u/. Native Ainu writers consistently
		avoided the palatalized kana (チャ・チュ・チェ) for the syllables
		<i lang="ain-Latn">ca cu ce</i>; Kirikae attributes this to the absence of a genuine
		palatalization contrast at the /c/ position <Ref k="kirikae1997" p="102" />. Recordings from
		Chitose illustrate the conditioned [ts] allophone: the form
		<i lang="ain-Latn">eci=kay</i> 'you (pl.) do' surfaces as [et͡sɨ̥kaj] with concurrent vowel
		devoicing <Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-20;
		corroborated by <Ref k="shiraishi2022" p="§3" />).
	</p>

	<p>
		The fricative /s/ is laminal, with its precise place of articulation conditioned by the
		following segment. Before /i/ — whether as onset or coda — /s/ palatalizes to [ɕ]
		<Ref k="nakagawa2024" p="28" />; <Ref k="shiraishi2022" p="§3" />. Community recordings
		suggest the palato-alveolar realization before /i/ is phonetically distinct from Japanese [ɕ],
		with less hissing and a blade rather than lamino-palatal contact
		<Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-11) ‹corpus-suggested›; this granularity
		is not addressed in the read academic sources.
	</p>

	<p>
		For /h/, colouring by the following vowel is well established
		<Ref k="nakagawa2024" p="28" />; <Ref k="shiraishi2022" p="§3" />, but the degree is weaker
		in Ainu than in Japanese. Speakers born around 1900 showed particularly reduced colouring,
		with /h/ before /u/ approaching a pure glottal articulation rather than the bilabial [ɸ]
		(Tamura 1998, reported via <Ref k="shiraishi2022" p="§3" />). The suggestion that
		[ɸ]~/u/ reflects Sprachbund contact with Japanese phonology has been raised in community
		discussion but not established in published instrumental work
		<Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-11) ‹speculative›.
	</p>
</S>

<S t="Coda realizations" id="coda">
	<p>
		The stops /p t k/ are unreleased in coda position — [p̚ t̚ k̚] — a property resembling
		Korean final stops and distinct from English released codas
		<Ref k="nakagawa2024" p="29" />; <Ref k="shiraishi2022" p="§3" />. Community recordings
		note that some older archival speakers produced fully released coda stops, with the implosive
		realization more consistent for /p/ than for /k/
		<Ref k="aynucorporadiscord" /> (aomidori, 2023-12-05) ‹corpus-suggested›.
	</p>

	<p>
		Coda /s/ shows allophony conditioned by the preceding vowel. After /i/, coda /s/ surfaces as
		[ɕ]; after other vowels it is [sʲ]~[s]
		<Ref k="nakagawa2024" p="29–30" />; <Ref k="shiraishi2022" p="§3" />. The contrast appears
		in <i lang="ain-Latn">cis</i> 'cry' (→ [tɕiɕ]) vs <i lang="ain-Latn">as</i> 'stand'
		(→ [asʲ]~[as]). Before the particle <i lang="ain-Latn">wa</i>, coda /s/ retains plain [s]
		regardless of the preceding vowel: <i lang="ain-Latn">as wa</i> 'standing, then' → [as wa],
		with no palatalization <Ref k="aynucorporadiscord" /> (aomidori, 2023-12-11; attributed to
		Tamura 1996 Saru dictionary front matter, not directly verified here ‹asserted›).
	</p>

	<p>
		Coda /m/ is invariant [m]. Coda /n/ undergoes place assimilation addressed below. Coda /r/
		carries a vocalic release treated in <a href="#rhotic">§ The rhotic /r/</a>. The glides /y/
		and /w/ appear as coda off-glides [i̯] and [u̯], which contributes to the argument for their
		consonant status (see <a href="#glides">§ Glides</a>).
	</p>
</S>

<S t="Nasals and nasal assimilation" id="nasals">
	<p>
		Hokkaido Ainu has two nasal phonemes: /m/ (bilabial) and /n/ (dental). In onset position both
		are phonetically invariant. As codas, /m/ remains [m], while /n/ undergoes regressive place
		assimilation <Ref k="nakagawa2024" p="30" />; <Ref k="shiraishi2022" p="§3" />:
	</p>

	<ul>
		<li>
			/n/ → [ŋ] / __ /k/ (dorsal assimilation):
			<i lang="ain-Latn">honkor</i> 'be pregnant' → [hoŋkor];
			<i lang="ain-Latn">kimunkamuy</i> 'mountain deity' → [ki.muŋ.ka.muy]
			<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-16;
			corroborated by <Ref k="nakagawa2024" p="30" />).
		</li>
		<li>
			/n/ → [m] / __ /p m/ (labial assimilation):
			<i lang="ain-Latn">anpe</i> 'true thing' → [ampe]
			<Ref k="nakagawa2024" p="30" />.
		</li>
	</ul>

	<p>
		These rules apply to /n/ only. The bilabial nasal /m/ does not shift to [ŋ] before /k/:
		a form such as <i lang="ain-Latn">okamkir</i>, containing underlying /m/ before /k/, retains
		[m] <Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-11) ‹contested›. The orthographic
		implication is that /m/ and /n/ remain distinctly spelled before dorsals — a practice
		consistent across the standard Romanization — though the systematic phonetic documentation
		of this non-assimilation across dialects and lexical items is not available in the sources
		read for this grammar.
	</p>

	<Ex
		m="honkor"
		g="be.pregnant"
		tr="be pregnant"
		note="Coda /n/ of the first syllable assimilates to the place of the following dorsal /k/, yielding surface [hoŋkor]. Contrast anpe [ampe], where coda /n/ assimilates to following labial /p/."
		cite="nakagawa2024:30"
		dial="SAR"
	/>

	<p>
		The sandhi extension of these nasal assimilation rules across morpheme and word boundaries —
		including /n/ + /s/ → [y] + /s/ (e.g. <i lang="ain-Latn">pon seta</i> → [poy seta]
		'puppy') — is treated in <Xr ch="coda-r-assimilation-sonorant-sandhi" />.
	</p>
</S>

<S t="Voicing" id="voicing">
	<p>
		Hokkaido Ainu has no phonemic voicing contrast among obstruents. The pairs /p/~[b],
		/t/~[d], /k/~[g], /s/~[z] are non-contrastive, and the phonemic transcription uses the
		voiceless symbol throughout
		<Ref k="nakagawa2024" p="25, 27" />; <Ref k="sato2008" p="§2.2" />;
		<Ref k="shiraishi2022" p="§3.1" />. The form <i lang="ain-Latn">hapo</i> 'mother' and its
		allophonic variant <i lang="ain-Latn">habo</i> are the same phonemic form; similarly,
		<i lang="ain-Latn">pet</i> 'river' surfaces as [pet] or [bet] depending on context and speaker.
	</p>

	<p>
		Voiced allophones arise in three phonetic environments
		<Ref k="nakagawa2024" p="25, 27" />; <Ref k="shiraishi2022" p="§3.1" />:
		(i) intervocalic position (<i lang="ain-Latn">hapo</i> ~ [habo]);
		(ii) post-nasal position (<i lang="ain-Latn">tampe</i> ~ [tambe]);
		(iii) post-/r/ position (<i lang="ain-Latn">unarpe</i> ~ [unarbe]).
		Of these, post-nasal voicing is the most frequent: Yamashita (2000) measured approximately 40%
		application in that environment (reported via <Ref k="shiraishi2022" p="§3.1" />). Voicing
		likelihood also varies by place of articulation: labial /p/ voices most readily, velar /k/
		least. Asai (1969) observed that <i lang="ain-Latn">ape</i> 'fire' frequently voices to [abe]
		while <i lang="ain-Latn">cikap</i> 'bird' seldom voices to [tɕigap] (reported via
		<Ref k="nakagawa2024" p="28" />). Voicing additionally correlates with speaker sex; male
		speakers voice more frequently than female speakers (Kindaichi 1928, reported via
		<Ref k="nakagawa2024" p="27" />).
	</p>

	<p>
		Voice onset time measurements from a Chitose recording session give approximate values of
		+8 to +15 ms for /p/ and +20 ms for /k/ in onset position; an aspirated [kʰ] variant
		reached +30 to +43 ms <Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-20)
		‹corpus-suggested›. These figures are consistent with an absence of contrastive aspiration
		and substantial speaker latitude; a published acoustic VOT study of Hokkaido Ainu has not
		been consulted for this grammar.
	</p>
</S>

<S t="The rhotic /r/" id="rhotic">
	<p>
		The phoneme /r/ realizes primarily as the alveolar flap [ɾ]. In some speakers trill [r] and
		[d]-like articulations occur as well; Sakhalin varieties have a retroflex [ʈ] that may be
		hard to distinguish from [t] (reported via <Ref k="shiraishi2022" p="§3" />). Archival
		recordings reportedly show /r/ with an approximant quality, and /s/ palatalizing more broadly
		than before /i/ alone
		<Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-05). Community discussion, citing the
		front-matter phonology of Tamura's Saru dictionary, stresses that Ainu /r/ 'does not resemble
		[l] at all' (aomidori, <Ref k="aynucorporadiscord" />, 2023-12-11); Shiraishi, by contrast,
		lists [l] alongside [d] as possible realizations <Ref k="shiraishi2022" p="§3" />. The
		community characterization could not be page-verified in sources read for this grammar and is
		reported here as a community assertion ‹asserted›.
	</p>

	<p>
		In coda position /r/ carries a vocalic release — described as 'resounding' by Kindaichi
		(1931, reported via <Ref k="shiraishi2022" p="§3.2" />), 'parasitic vowel' by Peng (1970,
		reported via <Ref k="shiraishi2022" p="§3.2" />), and 'echo vowel' by Tamura (1988b,
		reported via <Ref k="shiraishi2022" p="§3.2" />) — whose quality roughly copies the
		preceding vowel: <i lang="ain-Latn">pirka</i> 'good' → [pirĭka],
		<i lang="ain-Latn">arki</i> 'come (pl.)' → [arĭki]
		<Ref k="nakagawa2024" p="30" />;
		<Ref k="shiraishi2022" p="§3.2" />. This release distinguishes /-r/ from /-rV/ sequences.
		The minimal pair <i lang="ain-Latn">etor</i> [etoro] 'snot' vs
		<i lang="ain-Latn">etoro</i> [etoːro] 'to snore' — where the /-rV/ word has a measurably
		longer pre-rhotic vowel (Asai 1976, reported via <Ref k="shiraishi2022" p="§3.2" />) — is
		now well established
		<Ref k="nakagawa2024" p="30" />; <Ref k="shiraishi2022" p="§3.2" />.
	</p>

	<p>
		After voiceless stops /k p t/, coda /r/ devoices: <i lang="ain-Latn">nukar</i> 'look at'
		may surface as [nukaɾ̥ɨ̥h] <Ref k="aynucorporadiscord" /> (aomidori, 2023-12-11)
		‹corpus-suggested›. The sandhi diagnostics for /-r/ vs /-rV/ — resyllabification behavior,
		nominalizer allomorphy, and the cross-word assimilation rules — are treated in
		<Xr ch="coda-r-assimilation-sonorant-sandhi" />.
	</p>
</S>

<S t="Glides /y/ and /w/ as consonants" id="glides">
	<p>
		The glides /y/ [j] and /w/ [w] function as phonemic consonants in both onset and coda
		<Ref k="nakagawa2024" p="29" />; <Ref k="shiraishi2022" p="§3" />. An earlier analysis by
		Kindaichi and Chiri <Ref k="kindaichi1936" /> treated these as the second elements of
		diphthongs; the consonant analysis was established by Nakagawa and Shiraishi on the basis
		of two independent diagnostics.
	</p>

	<p>
		The first diagnostic is nominalizer allomorphy. The nominalizer suffix selects
		<i lang="ain-Latn">-p</i> after a vowel and <i lang="ain-Latn">-pe</i> after a consonant;
		morphemes ending in /y/ or /w/ take the consonant allomorph —
		<i lang="ain-Latn">okay-pe</i>, <i lang="ain-Latn">siw-pe</i> — establishing that /-y/ and
		/-w/ pattern with coda consonants <Ref k="shiraishi2022" p="§3" />;
		<Ref k="nakagawa2024" p="29" />. The second diagnostic is accent: syllables closed by /y/
		or /w/ do not bear independent accent, unlike syllables closed by /i/ or /u/. Thus
		<i lang="ain-Latn">kamuy</i> 'deity' parses as <i lang="ain-Latn">ka.muy</i> (two syllables,
		accent on the second), and <i lang="ain-Latn">aynu</i> 'person' as
		<i lang="ain-Latn">ay.nu</i> <Ref k="nakagawa2024" p="29" />. Community members corroborate
		this analysis through parallel allomorphy: the plural suffix
		(<i lang="ain-Latn">ante</i> → <i lang="ain-Latn">okayte</i>) and causative allomorphs
		(<i lang="ain-Latn">-re/-te</i>) both treat /-y/ as a consonant coda
		<Ref k="aynucorporadiscord" /> (nukopoli, 2025-12-03) ‹consensus›.
	</p>

	<p>
		In onset position, /y/ and /w/ appear before vowels in native morphemes, but the sequences
		<i lang="ain-Latn">*yi</i>, <i lang="ain-Latn">*wi</i>, <i lang="ain-Latn">*wu</i> are
		absent from monomorphemic roots, arising only across morpheme boundaries
		<Ref k="nakagawa2024" p="43–45" />. These phonotactic gaps are part of the syllable
		inventory treated in <Xr ch="syllable-template" />.
	</p>

	<p>
		The phonemic status of onset /y/ and /w/ is dialect-dependent and remains
		unsettled ‹contested›. For Saru and Chitose, Nakagawa treats these as surface glides derived
		at phoneme junctures, not underlying phonemes <Ref k="nakagawa2024" p="34–35" />. In
		Shizunai, the absence of contrastive pitch means that the distinction between [w] and [ʔ] at
		a hiatus position — illustrated by the minimal pair
		<i lang="ain-Latn">suwat</i> 'pothook' vs <i lang="ain-Latn">suʔat</i> 'pot bail' — must
		be carried by the glide itself, making /w/ phonemically contrastive there
		<Ref k="okuda2025" />. Satō (2003) further posits underlying /y w/ in Chitose for
		non-predictable hiatus positions while treating glide appearances after
		<i lang="ain-Latn">ku-</i> and <i lang="ain-Latn">e-</i> as surface-derived (reported via
		<Ref k="shiraishi2022" p="§4.3" />). Okuda concludes that no dialect-neutral statement
		about glide phonemicity is possible <Ref k="okuda2025" />.
	</p>

	<p>
		The accent behavior of syllables closed by /y/ or /w/ is treated in
		<Xr ch="pitch-accent-placement-rule" />. Glide insertion, hiatus resolution, and
		person-affix sandhi involving glides are in
		<Xr ch="personal-affix-sandhi-connected-speech-reduction" />. For dialect-level consonant
		variation — including Bihoro cluster assimilation
		(<i lang="ain-Latn">tk</i>→<i lang="ain-Latn">kk</i>,
		<i lang="ain-Latn">rs</i>→<i lang="ain-Latn">ss</i>) and
		<i lang="ain-Latn">h</i>-elision and insertion in eastern varieties — see
		<Xr ch="hokkaido-phonological-microvariation" />.
	</p>
</S>
