<!-- src/lib/grammar/chapters/rhotic-r.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The phoneme /r/ in the consonant inventory" id="overview">
	<p>
		Hokkaido Ainu has one rhotic phoneme, /r/, the sole coronal sonorant that is neither a nasal
		(/m/, /n/) nor a glide (/y/, /w/) in the eleven-consonant system described in
		<Xr ch="consonant-inventory" />
		<Ref k="nakagawa2024" p="27" />; <Ref k="shiraishi2022" p="§3" />;
		<Ref k="sato2008" p="§2.2" />. The phoneme occurs in both onset and coda positions within the
		canonical <Xr ch="syllable-template">(C)V(C) syllable</Xr>, and its coda realization —
		carrying a distinctive vocalic release and triggering a dense assimilation system — makes it
		the most morphophonologically active segment in the language. The full assimilation rules are
		given in <Xr ch="coda-r-assimilation-sonorant-sandhi" />; the present chapter covers the
		phoneme's phonetic realization, the echo-vowel phenomenon, and the diagnostics that separate
		/r/-final syllables from genuine /rV/ syllables.
	</p>
</S>

<S t="Onset realization and positional variants" id="onset">
	<p>
		In syllable-onset position /r/ is realized as an alveolar flap [ɾ]
		<Ref k="nakagawa2024" p="28" />; <Ref k="shiraishi2022" p="§3.1" />. Speaker variation and
		historical change produce a broader allophonic range; the table below collects documented
		realizations.
	</p>

	<table>
		<thead>
			<tr>
				<th>position</th>
				<th>realization</th>
				<th>conditions / notes</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>onset — general</td>
				<td>[ɾ] alveolar flap</td>
				<td>predominant realization across Hokkaido dialects</td>
				<td>
					<Ref k="nakagawa2024" p="28" />; <Ref k="shiraishi2022" p="§3.1" />
				</td>
			</tr>
			<tr>
				<td>onset — speaker variation</td>
				<td>[r] trill or [d]-like</td>
				<td>
					trill and dental-approximant realizations attested in some speakers; Tamura (1988b:
					13) reports [l] and [d] allophones
				</td>
				<td><Ref k="shiraishi2022" p="§3.1" /></td>
			</tr>
			<tr>
				<td>onset — older recordings</td>
				<td>[ɹ] approximant</td>
				<td>
					approximant realization noted in early recordings; more recent speakers favour [ɾ]
					‹corpus-suggested›
				</td>
				<td><Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-05)</td>
			</tr>
			<tr>
				<td>coda — general</td>
				<td>[ɾ] + vocalic echo</td>
				<td>flap released into an echo-vowel copying the syllable nucleus (§3 below)</td>
				<td>
					<Ref k="nakagawa2024" p="30" />; <Ref k="shiraishi2022" p="§3.2" />
				</td>
			</tr>
			<tr>
				<td>coda — after onset /k p t/</td>
				<td>[ɾ̥] devoiced flap</td>
				<td>
					voicelessness of the onset stop spreads to the coda rhotic; e.g.
					<i lang="ain-Latn">nukar</i> [nukaɾ̥] ‹corpus-suggested›
				</td>
				<td><Ref k="aynucorporadiscord" /> (aomidori, 2023-12-11)</td>
			</tr>
		</tbody>
	</table>

	<p>
		The allophonic range — flap, trill, dental-approximant — places Ainu /r/ in a different
		perceptual space from Japanese ラ行, whose typical word-initial and post-nasal realization
		leans lateral. Tamura's Saru dictionary grammar is reported by community members to emphasize
		this perceptual distance explicitly
		<Ref k="aynucorporadiscord" /> (aomidori, 2023-12-11, citing Tamura 1996) ‹speculative›;
		the source most directly available, Shiraishi (2022: §3.1), records [l] and [d] as
		occasional allophones attributed to Tamura (1988b: 13) rather than as the default, which
		remains the flap [ɾ]. In Sakhalin Ainu the cognate of Hokkaido /r/ is described as retroflex
		[ʈ], acoustically close to [t] and distinct from the Hokkaido flap
		<Ref k="shiraishi2022" p="§3.1" />.
	</p>
</S>

<S t="Coda /r/ and the echo-vowel" id="coda-echo">
	<p>
		The coda realization of /r/ carries a vocalic release — known variously in the literature as
		the <em>re-sounding</em>, the <em>echo-vowel</em>, or the <em>echoing vowel</em> — that has
		attracted sustained analysis since the earliest systematic descriptions
		<Ref k="shiraishi2022" p="§3.2" />. In careful speech the release is audible as a short
		vowel copying the nucleus of the syllable: <i lang="ain-Latn">kar</i> [kaɾ(a)],
		<i lang="ain-Latn">kor</i> [koɾ(o)], <i lang="ain-Latn">sir</i> [siɾ(i)]. In recitation
		or emphatic delivery the release extends to a full vowel: [piriˑka], [mokoroˑ]
		<Ref k="shiraishi2022" p="§3.2" />.
	</p>

	<p>
		Batchelor (1905) and the early Kindaichi transcriptions wrote post-/r/ vowels as full
		phonemic segments — hence spellings such as <i lang="ain-Latn">koro</i>,
		<i lang="ain-Latn">pirika</i>, <i lang="ain-Latn">Ainurakkuru</i> — without distinguishing
		a genuine /rV/ syllable from the echo-vowel release of a /r/-final syllable
		<Ref k="batchelor1905" />; <Ref k="shiraishi2022" p="§3.2" />. Yukie Chiri (知里幸恵), in
		correspondence with Kindaichi around 1923, established that /r/-final words form a coherent
		phonological category and that the post-/r/ releases in Batchelor's transcriptions are
		phonologically spurious
		<Ref k="shiraishi2022" p="§3.2" />. She identified three diagnostics that separate
		/r/-final from /rV/-final words
		<Ref k="nakagawa2024" p="30" />; <Ref k="shiraishi2022" p="§3.2" />:
	</p>

	<ol>
		<li>
			<strong>The echo-vowel weakens before a vowel-initial suffix; a genuine final vowel does
			not.</strong> In <i lang="ain-Latn">mokor=an</i> 'sleep.4S' the echo is reduced before
			the suffix, whereas the final /o/ of <i lang="ain-Latn">poro=an</i> 'be.big.4S' remains
			unreduced.
		</li>
		<li>
			<strong>Coda /r/ undergoes morphophonological sandhi; /rV/ does not.</strong> The
			/r/-final verb <i lang="ain-Latn">a=kor</i> 'have' assimilates its coda before the onset
			of a following word (<i lang="ain-Latn">a=kor nispa</i> → [akonˈnispa] 'a wealthy man'),
			whereas a word ending in /rV/ such as <i lang="ain-Latn">poro</i> 'big' shows no
			corresponding change. The sandhi system is treated in
			<Xr ch="coda-r-assimilation-sonorant-sandhi" />.
		</li>
		<li>
			<strong>The nominalizer selects its consonant-allomorph after coda /r/.</strong> The
			nominalizer <A w="-p/-pe" gl="nominalizer" /> surfaces as <i lang="ain-Latn">-pe</i> after
			a consonant and <i lang="ain-Latn">-p</i> after a vowel. A /r/-final stem takes
			<i lang="ain-Latn">-pe</i>:
		</li>
	</ol>

	<Ex
		m="mokor-pe"
		g="sleep-NMLZ"
		tr="a sleeper; something asleep"
		note="The C-allomorph -pe selects after coda /r/, diagnosing mokor as phonemically /r/-final. Contrast poro-p below."
		constructed
	/>

	<Ex
		m="poro-p"
		g="big-NMLZ"
		tr="something big; a large thing"
		note="The V-allomorph -p selects after the vowel-final stem poro, confirming that the stem ends in /o/, not /r/."
		constructed
	/>

	<p>
		The minimal pair <i lang="ain-Latn">etor</i> [etoro] 'snot' versus
		<i lang="ain-Latn">etoro</i> [etoːro] 'to snore' is now well established in the
		literature: in the /rV/-final word the vowel preceding /r/ is measurably longer, whereas the
		echo-vowel in the /r/-final word is audibly shorter
		<Ref k="nakagawa2024" p="30" />; <Ref k="shiraishi2022" p="§3.2" />. Asai (1976)
		confirmed the length difference acoustically <Ref k="shiraishi2022" p="§3.2" />. An
		additional independent diagnostic, noted by Satō (2000), is that in pre-pausal position the
		final vowel is repeated only for /r/-final words <Ref k="shiraishi2022" p="§3.2" />.
	</p>

	<p>
		The direction of vowel-copying is predominantly anticipatory: <i lang="ain-Latn">pirka</i>
		surfaces as [pirĭka] and <i lang="ain-Latn">arki</i> as [ariki], with the echo
		anticipating the following vowel rather than perseverating the preceding one
		<Ref k="nakagawa2024" p="30" />. A perseveratory case, <i lang="ain-Latn">citarpe</i>
		[citarube] (Asai 1976), shows that the copying direction is not categorically fixed
		<Ref k="shiraishi2022" p="§3.2" />. Northern dialect speakers vacillate between
		<i lang="ain-Latn">-r</i> and <i lang="ain-Latn">-rV</i> in certain lexical items
		(<i lang="ain-Latn">kikir</i> ~ <i lang="ain-Latn">kikiri</i>), suggesting ongoing
		redistribution between the two categories in those varieties
		<Ref k="shiraishi2022" p="§3.2" />.
	</p>

	<p>
		One articulatory account of the echo-vowel, proposed within the community, treats it as a
		timing offset: the tongue-tip flap gesture begins before the mouth has finished the preceding
		vowel, so the flap releases into the vowel-gesture and produces an audible copy of the
		nucleus <Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-11) ‹speculative›. Published
		treatments describe the release as a phonological property of coda /r/ without committing to
		a specific articulatory model <Ref k="shiraishi2022" p="§3.2" />.
	</p>

	<p>
		In casual connected speech, word-final /r/ is susceptible to deletion, producing reduced
		forms such as <i lang="ain-Latn">ku</i> for <i lang="ain-Latn">kur</i> 'person' and
		<i lang="ain-Latn">ko</i> for <i lang="ain-Latn">kor</i> 'have', while the verb
		<i lang="ain-Latn">koro</i> tends to stabilize its full form in many contexts
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-11) ‹corpus-suggested›. This casual
		reduction is distinct from the diachronic Sakhalin coda-/r/ → /h/ change treated in
		<Xr ch="final-h-history-and-sakhalin-length-reflex" />.
	</p>
</S>

<S t="Devoicing of coda /r/ after voiceless-stop onsets" id="devoicing">
	<p>
		When the onset of a CVC syllable is a voiceless stop /k/, /p/, or /t/, the coda /r/ is
		devoiced to [ɾ̥]. The verb <i lang="ain-Latn">nukar</i> 'look at' illustrates the pattern:
		the final syllable <i lang="ain-Latn">kar</i> has onset /k/ and coda /r/, and the rhotic
		surfaces as [ɾ̥], giving [nukaɾ̥]
		<Ref k="aynucorporadiscord" /> (aomidori, 2023-12-11) ‹corpus-suggested›. The pattern is
		phonetically parallel to the partial devoicing of sonorant codas reported for other languages
		after voiceless-onset syllables; Shiraishi's description of /r/ as a flap with
		voicing-conditioned variants <Ref k="shiraishi2022" p="§3.1" /> is consistent with the
		conditioning, though no instrumental study targeting this specific alternation has been found
		in the sources read for this grammar.
	</p>

	<p>
		The devoiced coda in turn affects the echo-vowel: when [ɾ̥] releases, the following vocalic
		copy is likewise voiceless, yielding a realization such as [nukaɾ̥ɨ̥h] in citation-form
		speech <Ref k="aynucorporadiscord" /> (aomidori, 2023-12-11). Vowel devoicing in comparable
		environments — high vowels between voiceless consonants — is independently attested in
		Hokkaido Ainu and is described in <Xr ch="vowel-inventory" />; the rhotic devoicing here
		extends the same voicelessness-spreading dynamic to the coda rhotic of CVC syllables with
		voiceless onsets.
	</p>
</S>

<S t="Morphophonological activity of coda /r/" id="sandhi-activity">
	<p>
		Coda /r/ is the dominant trigger of the regressive assimilation rules described in
		<Xr ch="coda-r-assimilation-sonorant-sandhi" />. When a /r/-final morpheme or word precedes
		a consonant-initial morpheme or word, the /r/ assimilates to, or is absorbed into a
		geminate with, the following consonant. The principal alternations, drawn from Nakagawa
		(2024: 35–37) and Shiraishi (2022: §6.1), are: /r/ + /t/ → [tt]
		(<i lang="ain-Latn">a=kor tar</i> → [aˈkottar]); /r/ + /n/ → [nn]
		(<i lang="ain-Latn">a=kor nispa</i> → [akonˈnispa]); /r/ + /c/ → [tc]
		(<i lang="ain-Latn">retar cikap</i> → [retatˈcikap] 'swan'); /r/ + /s/ → [ss]
		(<i lang="ain-Latn">ar suy</i> → [asˈsuy] 'once'); and, uniquely, a dissimilatory
		/r/ + /r/ → [nn] (<i lang="ain-Latn">ku=kor rusuy</i> → [kukonˈrusuy] 'I want it')
		<Ref k="nakagawa2024" p="35–37" />; <Ref k="shiraishi2022" p="§6.1" />.
	</p>

	<p>
		Unlike nasal-place assimilation (which is bounded by the phrase in Shiraishi's 2001
		analysis), /r/-sandhi operates across phrasal and sentence boundaries as a postlexical rule
		<Ref k="shiraishi2022" p="§6.2" />;
		<Ref k="aynucorporadiscord" /> (antitwilight, 2024-11-23) ‹corpus-confirmed›. The rules
		are not written in standard orthography, which notates underlying forms; they are fully
		productive in speech <Ref k="nakagawa2024" p="37–38" />. Personal-affix junctures that feed
		the same /r/-sandhi rules are treated in
		<Xr ch="personal-affix-sandhi-connected-speech-reduction" />, and the echo-vowel's
		interaction with possessive-form derivation is treated in
		<Xr ch="affiliative-suffix-morphophonology" />.
	</p>
</S>

<S t="Dialectal variation and the Sakhalin coda-/r/ reflex" id="dialect">
	<p>
		Across Hokkaido varieties, coda /r/ shows at least one documented lexically specific
		neutralization: in some dialects <i lang="ain-Latn">mokor</i> 'sleep' surfaces as
		<i lang="ain-Latn">mokon</i>, with /r/ replaced by [n]
		<Ref k="aynucorporadiscord" /> (keycja, 2024-07-20) ‹speculative›. Nakagawa and Fukazawa's
		dialect classification documents extensive morphophonological isoglosses across the Hokkaido
		area <Ref k="nakagawafukazawa2022" p="§3" />, though the specific /r/ → /n/ change in this
		lexical item has not been mapped to a named dialect zone in the sources read for this
		grammar. The broader picture of dialectal consonant correspondences is taken up in
		<Xr ch="hokkaido-phonological-microvariation" />.
	</p>

	<p>
		In Sakhalin Ainu, coda /r/ has merged with /h/ in syllable-final and word-final position,
		so that Hokkaido <i lang="ain-Latn">kor</i> 'have' corresponds to Sakhalin
		<i lang="ain-Latn">koh</i>. The change is attested in the Sakhalin corpus, and the
		distribution of Sakhalin <i lang="ain-Latn">-h</i> vis-à-vis the retained /rV/ type has
		been the subject of dedicated distributional analysis (cited in
		<Ref k="aynucorporadiscord" /> nukopoli, 2024-12-19). Because the Sakhalin /r/ → /h/ shift
		belongs primarily to the diachronic and comparative treatment, details are routed to
		<Xr ch="final-h-history-and-sakhalin-length-reflex" />. The Sakhalin onset cognate of
		Hokkaido /r/ is the retroflex [ʈ] mentioned in §2 above, distinct both from the Hokkaido
		flap and from the Sakhalin /h/ that the coda reflex produces.
	</p>
</S>
