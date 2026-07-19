<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The (C)V(C) template" id="template">
	<p>
		The Hokkaido Ainu syllable has the shape (C)V(C): an optional onset consonant, a single
		vowel nucleus, and an optional coda consonant <Ref k="nakagawa2024" p="41" />;
		<Ref k="sato2008" p="§2.3" />; <Ref k="shiraishi2022" p="§4.1" />. Four syllable types
		result:
	</p>

	<table>
		<thead>
			<tr>
				<th>shape</th>
				<th>template</th>
				<th>example</th>
				<th>IPA</th>
				<th>gloss</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>bare vowel</td>
				<td>V</td>
				<td><i lang="ain-Latn">a</i></td>
				<td>[a]</td>
				<td>perfective particle; 'oh'</td>
			</tr>
			<tr>
				<td>open</td>
				<td>CV</td>
				<td><i lang="ain-Latn">ka</i></td>
				<td>[ka]</td>
				<td>'thread'</td>
			</tr>
			<tr>
				<td>checked (VC)</td>
				<td>VC</td>
				<td><i lang="ain-Latn">ik</i></td>
				<td>[ik̚]</td>
				<td>'go up'</td>
			</tr>
			<tr>
				<td>closed (CVC)</td>
				<td>CVC</td>
				<td><i lang="ain-Latn">pet</i></td>
				<td>[pet̚]</td>
				<td>'river'</td>
			</tr>
		</tbody>
	</table>

	<p>
		Every syllable contains exactly one vowel. Two or more consonants in sequence occur only
		at a syllable boundary, never within a single syllable: the shapes CCVC, CVCC, and CVVC
		are all excluded <Ref k="nakagawa2024" p="42" />; <Ref k="shiraishi2022" p="§4.1" />.
		The word <i lang="ain-Latn">toop</i> 'far away', which looks like CVVC in the Latin
		transcription, parses as two syllables <i lang="ain-Latn">to.op</i> (CV.VC), the syllable
		boundary falling between the two successive vowels <Ref k="nakagawa2024" p="42" />.
		The phonemic vowel inventory is described in <Xr ch="vowel-inventory" /> and the consonant
		inventory in <Xr ch="consonant-inventory" />.
	</p>

	<p>
		Nakagawa (2024: 25) characterizes Hokkaido Ainu as having relatively few phonemes and a
		straightforward syllable structure, noting that the five-vowel inventory is constant across
		all Hokkaido dialects — dialect differences are comparatively small. In contrast, Sakhalin
		Ainu (SA) allows a long-vowel nucleus alongside a coda consonant, producing CVVC syllables
		absent from Hokkaido: SA <i lang="ain-Latn">aa</i>, <i lang="ain-Latn">ruu</i> correspond
		to Hokkaido <i lang="ain-Latn">a</i>, <i lang="ain-Latn">ru</i>, and the SA length
		contrast <i lang="ain-Latn">niisah</i> : <i lang="ain-Latn">nisah</i> corresponds to
		the Hokkaido pitch-accent contrast <i lang="ain-Latn">nísap</i> : <i lang="ain-Latn">nisáp</i>
		<Ref k="nakagawa2024" p="42–43" />. The diachronic SA-length ↔ HA-pitch correspondence
		is treated in <Xr ch="mora-syllable-accent-vs-tone-analysis" />.
	</p>

	<p>
		Whether every vowel-initial syllable has an underlying glottal stop /ʔ/ is disputed. Under
		the /ʔ/-as-phoneme view (Hattori 1961; Tamura, earlier work) the template reduces to just
		CV and CVC, eliminating V and VC shapes. Nakagawa rejects this on the grounds that no
		minimal pair exists in monomorphemic forms and that positing /ʔ/ requires many costly
		deletion rules <Ref k="nakagawa2024" p="31–33" />, a judgement shared by Refsing
		<Ref k="refsing1986" /> and Chiri (1942) as reported by <Ref k="shiraishi2022" p="§4.3" />.
		The debate is covered in <Xr ch="glottal-stop" />; the majority position — /ʔ/ as a
		phonetic boundary element rather than a phoneme — is followed here, retaining V and VC
		syllable shapes in the template ‹contested›.
	</p>
</S>

<S t="Syllabification" id="syllabification">
	<p>
		Nakagawa (2024: 43) provides a three-step algorithm for assigning syllable boundaries
		in the Latin transcription:
	</p>

	<ol>
		<li>Split between two adjacent <strong>vowels</strong>: VV → V.V.</li>
		<li>Split between two adjacent <strong>consonants</strong>: CC → C.C.</li>
		<li>In a VCV sequence, split <strong>before</strong> the consonant: VCV → V.CV.</li>
	</ol>

	<p>
		The algorithm applied to several representative words: <Ref k="nakagawa2024" p="§1.3" />
	</p>

	<table>
		<thead>
			<tr>
				<th>word</th>
				<th>syllabification</th>
				<th>shape sequence</th>
				<th>gloss</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">teeta</i></td>
				<td>te.e.ta</td>
				<td>CV.V.CV</td>
				<td>'long ago'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">aynu</i></td>
				<td>ay.nu</td>
				<td>CVC.CV</td>
				<td>'human'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kamuy</i></td>
				<td>ka.muy</td>
				<td>CV.CVC</td>
				<td>'deity'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">cepkoyki</i></td>
				<td>cep.koy.ki</td>
				<td>CVC.CVC.CV</td>
				<td>'swim upstream'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">irankarapte</i></td>
				<td>i.ran.ka.rap.te</td>
				<td>V.CVC.CV.CVC.CV</td>
				<td>'greet (someone)'</td>
			</tr>
		</tbody>
	</table>

	<p>
		(Nakagawa 2024: 43.) The algorithm treats /y/ and /w/ as consonants, so
		<i lang="ain-Latn">aynu</i> = ay.nu (CVC.CV) and
		<i lang="ain-Latn">kamuy</i> = ka.muy (CV.CVC). The arguments for treating /-y/ and /-w/
		as coda consonants rather than as the second element of a diphthong are presented in
		<Xr ch="glides-w-y" />.
	</p>

	<p>
		A minimal pair that turns on syllable count exists in Saru and Chitose:
		<i lang="ain-Latn">yayrayke</i> 'commit suicide' = yay.ray.ke (CVC.CVC.CV, three
		syllables) versus <i lang="ain-Latn">yairayke</i> 'give thanks' = ya.i.ray.ke
		(CV.V.CVC.CV, four syllables). The sequence -<i lang="ain-Latn">ay</i>- in the first word
		is a single closed syllable (CVC); the -<i lang="ain-Latn">ai</i>- in the second is two
		syllables separated by a morpheme boundary. These words carry different accent patterns
		that follow from the syllable count <Ref k="nakagawa2024" p="42" />, a distribution
		governed by the iambic placement rule in <Xr ch="pitch-accent-placement-rule" />.
	</p>

	<p>
		Syllabification applies across morpheme boundaries through resyllabification: a coda
		consonant on one morpheme is re-parsed as the onset of a following vowel-initial morpheme.
		The compound <i lang="ain-Latn">mat-ikor</i> (woman + possessions) thus surfaces as
		<i lang="ain-Latn">macikor</i> [ma.ʨi.kor], with the underlying coda /t/ shifting to
		the onset of the second syllable and palatalizing before /i/
		<Ref k="kindaichi1936" p="1" />; <Ref k="nakagawa2024" p="36" />:
	</p>

	<Ex
		m="mat-ikor"
		g="woman-treasure"
		ain="macikor"
		tr="women's possessions"
		note="The underlying boundary mat|ikor resyllabifies to ma.ci.kor [ma.ʨi.kor] (CV.CV.CVC). The coda /t/ shifts to onset position and undergoes the obligatory t+i → [ʨi] palatalization. The same surface form is attested throughout the Saru corpus, e.g. usa macikor usa tamasay 'various women's treasures and bead-necklaces'."
		cite="nakagawa2024:36"
		dial="SAR"
	/>

	<p>
		The palatalization rule t+i → [ʨi] is categorically obligatory wherever the coda /t/ of
		one morpheme and the onset /i/ of the next come into contact; it is covered in detail in
		<Xr ch="coda-r-assimilation-sonorant-sandhi" />. Resyllabification is blocked when the
		following vowel bears secondary accent or when the boundary separates a reduplicant from
		its base, where a glottal boundary element appears instead
		<Ref k="shiraishi2022" p="§4.4" />. The interaction of resyllabification with the
		morphophonology of personal affixes is treated in
		<Xr ch="personal-affix-sandhi-connected-speech-reduction" />.
	</p>
</S>

<S t="Permitted coda consonants" id="coda">
	<p>
		Nine of the eleven consonant phonemes occur in coda position. The two excluded from coda
		position in Hokkaido Ainu are the affricate /c/ [ʨ] and the laryngeal /h/; the remaining
		nine — stops /p t k/, fricative /s/, nasals /m n/, rhotic /r/, and glides /y w/ — all
		appear as codas <Ref k="nakagawa2024" p="27" />; <Ref k="sato2008" p="§2.3" />;
		<Ref k="shiraishi2022" p="§3" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>phoneme</th>
				<th>coda realization</th>
				<th>example</th>
				<th>gloss</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>/p/</td>
				<td>[p̚] unreleased</td>
				<td><i lang="ain-Latn">cep</i></td>
				<td>'fish'</td>
			</tr>
			<tr>
				<td>/t/</td>
				<td>[t̚] unreleased</td>
				<td><i lang="ain-Latn">pet</i></td>
				<td>'river'</td>
			</tr>
			<tr>
				<td>/k/</td>
				<td>[k̚] unreleased</td>
				<td><i lang="ain-Latn">ik</i></td>
				<td>'go up'</td>
			</tr>
			<tr>
				<td>/s/</td>
				<td>[ɕ] after /i/; [sʲ] elsewhere</td>
				<td><i lang="ain-Latn">as</i>, <i lang="ain-Latn">cis</i></td>
				<td>'stand'; 'cry'</td>
			</tr>
			<tr>
				<td>/m/</td>
				<td>[m]</td>
				<td><i lang="ain-Latn">hum</i></td>
				<td>'sound'</td>
			</tr>
			<tr>
				<td>/n/</td>
				<td>[n]; [ŋ] before /k/; [m] before /p/, /m/</td>
				<td><i lang="ain-Latn">pon</i>, <i lang="ain-Latn">honkor</i></td>
				<td>'small'; 'be pregnant'</td>
			</tr>
			<tr>
				<td>/r/</td>
				<td>[ɾ] with vocalic release</td>
				<td><i lang="ain-Latn">kor</i></td>
				<td>'have'</td>
			</tr>
			<tr>
				<td>/y/</td>
				<td>[i̯]</td>
				<td><i lang="ain-Latn">kay</i>, <i lang="ain-Latn">kamuy</i></td>
				<td>'break'; 'deity'</td>
			</tr>
			<tr>
				<td>/w/</td>
				<td>[u̯]</td>
				<td><i lang="ain-Latn">ohaw</i>, <i lang="ain-Latn">paw</i></td>
				<td>'soup'; 'mouth'</td>
			</tr>
		</tbody>
	</table>

	<p>
		The coda stops /p t k/ are realized as unreleased [p̚ t̚ k̚] — closure is maintained but
		no burst follows, a pattern similar to Korean final stops and unlike English
		<Ref k="nakagawa2024" p="29" />; <Ref k="shiraishi2022" p="§3" />. In older recordings,
		a full release was sometimes heard; the degree of implosion also varies across speakers
		<Ref k="aynucorporadiscord" /> (aomidori\_cs\_, 2023-12-05) ‹corpus-confirmed›. The coda
		allophony of /s/ — [ɕ] after the vowel /i/ versus a more front [sʲ] after other vowels —
		is treated in <Xr ch="s-palatalization" />.
	</p>

	<p>
		Coda /n/ undergoes place assimilation: it surfaces as [ŋ] before /k/ and as [m] before
		/p/ or /m/ <Ref k="nakagawa2024" p="30" />. So <i lang="ain-Latn">honkor</i> 'be
		pregnant' is pronounced [hoŋkor] and <i lang="ain-Latn">anpe</i> 'true thing' is
		[ampe]. The orthographic convention records the underlying /n/ throughout.
		Coda /r/ carries a vocalic release — usually a copy of the preceding vowel — that was
		long confused with a final full vowel in early transcriptions; its phonemic status and
		sandhi behavior are covered in <Xr ch="rhotic-r" />.
	</p>
</S>

<S t="Phonotactic gaps in the syllable inventory" id="gaps">
	<p>
		Several syllable shapes that the (C)V(C) template formally permits are absent or
		near-absent from the native lexicon. The best-established gaps, from Nakagawa's
		onset-×-vowel table (2024: 43–45), are the following:
	</p>

	<table>
		<thead>
			<tr>
				<th>prohibited or rare shape</th>
				<th>status</th>
				<th>notes and sources</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">*ti</i></td>
				<td>absent from root inventory</td>
				<td>
					Nakagawa 2024: 43, 45 (Table 1 shows the <i lang="ain-Latn">ti</i> cell
					empty). The surface affricate [ʨi] always derives from underlying /t/ + /i/
					across a morpheme boundary — see <Xr ch="coda-r-assimilation-sonorant-sandhi" />.
					No HA root with stem-internal <i lang="ain-Latn">ti</i> is attested.
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">*yi</i>, <i lang="ain-Latn">*wi</i>, <i lang="ain-Latn">*wu</i></td>
				<td>absent as root-internal syllables</td>
				<td>
					Nakagawa 2024: 43, 45: no word has these as its root; they arise only at
					morpheme boundaries by resyllabification or glide insertion
					<Ref k="nakagawa2024" p="43, 45" />; <Ref k="shiraishi2022" p="§4.2" />.
					Whether they constitute independent phonemic syllables is contested between
					Tamura and Nakagawa — see <Xr ch="glides-w-y" /> ‹contested›.
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">cuC</i>, <i lang="ain-Latn">ceC</i>,
					<i lang="ain-Latn">coC</i></td>
				<td>rare ‹corpus-suggested›</td>
				<td>
					The corpus contains very few tokens of /c/ before /u e o/ followed by a coda;
					Nakagawa (2024: 43) notes that /c/ before /a/ or /u/ aligns more naturally
					with native-speaker perception than before other vowels, suggesting a partial
					front-vowel affinity for the affricate. Systematic frequency data await
					per-segment corpus counting.
				</td>
			</tr>
			<tr>
				<td>-<i lang="ain-Latn">ow</i></td>
				<td>near-absent ‹corpus-suggested›</td>
				<td>
					Corpus survey returns almost no /-ow/ tokens
					<Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-19). A diachronic account
					proposes that earlier *-aw(e) shifted to -ew(e) in most environments
					<Ref k="aynucorporadiscord" /> (antitwilight, 2024-12-19) ‹speculative›.
				</td>
			</tr>
			<tr>
				<td>-<i lang="ain-Latn">m</i> word-finally</td>
				<td>near-zero ‹corpus-suggested›</td>
				<td>
					Orthographic /-m/ before /p/ or /m/ is an assimilation notation for underlying
					/-n/ (see above); a stem-final /-m/ that stays /-m/ before other segments is
					very rare in the corpus
					<Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-19).
				</td>
			</tr>
		</tbody>
	</table>

	<p>
		Among the starred onset+vowel combinations, /-c/ and /-h/ are also categorically excluded
		from coda position (see the preceding section), and the /-c/ exclusion from coda means
		that <i lang="ain-Latn">*-ac</i>, <i lang="ain-Latn">*-ec</i>, etc., are all absent.
		The full discussion of the affricate /c/ and its distribution belongs to
		<Xr ch="consonant-inventory" />.
	</p>
</S>

<S t="The *CVVC constraint and glide-blocking" id="cvvc">
	<p>
		The exclusion of CVVC syllables has a direct morphophonological consequence. In southern
		Hokkaido dialects (Saru, Chitose, Mukawa), the vowel /u/ of the first-person agent
		prefix <i lang="ain-Latn">ku=</i> deletes before a stem-initial /a e u o/, and the vowel
		/i/ of an /i/-initial stem weakens to the glide /y/ in the same environment. The
		weakening applies when the stem's first syllable is <em>open</em> (CV onset + vowel):
		<i lang="ain-Latn">ku=ipe</i> 'I eat a meal' surfaces as
		<i lang="ain-Latn">ku=ype</i> [kúype], since the first syllable of <i lang="ain-Latn">ipe</i>
		is open (V) and weakening to /y/ gives the licit shape CVC + CV (<i lang="ain-Latn">ku.ype</i>).
	</p>

	<p>
		When the stem's first syllable is <em>closed</em> (CVC), weakening is blocked. The
		form is <i lang="ain-Latn">ku=ikra</i> [ku.ík.ra], not
		*<i lang="ain-Latn">ku=ykra</i>: if /i/ weakened to /y/, the resulting sequence
		/kuykra/ would be unsyllabifiable under (C)V(C) — the three-consonant cluster /ykr/
		cannot be distributed between two (C)V(C) syllables without creating either a CC onset
		or a CC coda <Ref k="nakagawa2024" p="52–53" />;
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-28) ‹corpus-confirmed›. Nakagawa's
		published example for this blocking is <i lang="ain-Latn">kuínkar</i> (not
		*<i lang="ain-Latn">kuynkar</i>) 'I look' (2024: 53): the first syllable of
		<i lang="ain-Latn">inkar</i> is closed (/in/), so the hiatus is retained rather than
		resolved by weakening.
	</p>

	<p>
		The contrast between the two environments:
	</p>

	<table>
		<caption>
			Weakening across the person-prefix boundary. The
			<i lang="ain-Latn">ku=inkar</i> row is Nakagawa's published example of the blocking
			<Ref k="nakagawa2024" p="53" />; the <i lang="ain-Latn">ku=ikra</i> rows apply the
			same rule to another attested stem.
		</caption>
		<thead>
			<tr>
				<th>prefix</th>
				<th>stem</th>
				<th>first σ of stem</th>
				<th>surface form</th>
				<th>parse</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">ku=</i></td>
				<td><i lang="ain-Latn">ipe</i> 'eat a meal'</td>
				<td>open: /i/ (V)</td>
				<td><i lang="ain-Latn">ku=ype</i> [kúy.pe]</td>
				<td>CVC.CV — licit</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ku=</i></td>
				<td><i lang="ain-Latn">inkar</i> 'look'</td>
				<td>closed: /in/ (VC)</td>
				<td><i lang="ain-Latn">ku=inkar</i> [ku.ín.kar]</td>
				<td>CV.VC.CVC — licit</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ku=</i></td>
				<td><i lang="ain-Latn">ikra</i> 'send'</td>
				<td>closed: /ik/ (VC)</td>
				<td><i lang="ain-Latn">ku=ikra</i> [ku.ík.ra]</td>
				<td>CV.VC.CV — licit</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ku=</i></td>
				<td><i lang="ain-Latn">ikra</i> 'send'</td>
				<td>closed: /ik/ (VC)</td>
				<td>*<i lang="ain-Latn">ku=ykra</i></td>
				<td>*unsyllabifiable — illicit</td>
			</tr>
		</tbody>
	</table>

	<p>
		The same principle holds for the second-person prefix
		<i lang="ain-Latn">e=</i>: <i lang="ain-Latn">e=itak</i> → <i lang="ain-Latn">eytak</i>
		'you speak' (open stem, weakening permitted), but
		<i lang="ain-Latn">e=ikra</i> [e.ík.ra] 'you send' (closed stem, hiatus retained)
		<Ref k="nakagawa2024" p="40, 52–53" />. The full allomorphy paradigm for
		<i lang="ain-Latn">ku=</i>, <i lang="ain-Latn">e=</i>, and
		<i lang="ain-Latn">ci=</i> under vowel deletion and glide-weakening is set out in
		<Xr ch="personal-affix-sandhi-connected-speech-reduction" />.
	</p>
</S>

<S t="Loanword syllable adaptation" id="loanwords">
	<p>
		Loanwords that contain consonant clusters or CVVC structures are adapted to fit the
		(C)V(C) template by vowel epenthesis. The epenthetic segment is typically /o/ or a copy
		of the nearest adjacent vowel
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-11) ‹corpus-suggested›. In Hokkaido
		the donor language is Japanese; Russian borrowings belong to the Sakhalin varieties, so
		the clearest illustration of the repair comes from there ‹SA›:
		<i lang="ain-Latn">potoloko</i> (← Rus. потолок 'ceiling') breaks up both a
		word-initial CC onset (/pt/) and a word-final CC cluster (/lk/) with epenthetic /o/.
		Its single corpus attestation is Sakhalin, in Sentoku Tarōji's letters —
		<i lang="ain-Latn">keta potoloko kasiketa okay=ahci</i> ‹corpus-confirmed›. A hypothetical English loanword like
		<i lang="ain-Latn">Christmas</i> would enter as something like
		<i lang="ain-Latn">kurisumas</i>, with each cluster split by an inserted vowel
		<Ref k="nakagawa2024" p="42" />.
	</p>

	<p>
		The identity of the epenthetic vowel is not always /o/: a copy of the adjacent vowel
		also occurs, and the choice may reflect the phonological neighborhood rather than a
		single underlying default. Loan adaptation across contact periods — Japanese into
		Hokkaido Ainu, Russian into the Sakhalin varieties — shows the (C)V(C) template
		operating as a consistent filter, with epenthesis as the principal repair strategy
		‹corpus-suggested›.
	</p>
</S>
