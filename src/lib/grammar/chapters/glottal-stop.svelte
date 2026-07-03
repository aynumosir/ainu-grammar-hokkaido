<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Laryngeal consonants" id="overview">
	<p>
		Hokkaido Ainu has one laryngeal phoneme, /h/, and a phonetically audible glottal closure [ʔ]
		whose phonological status divides analysts. The two laryngeal elements have distinct
		distributional profiles: /h/ occupies the onset of its syllable with vowel-conditioned
		allophony; [ʔ] marks the onset of vowel-initial syllables as a phonetically automatic boundary
		cue in the majority analysis, though it functions as a lexically contrastive phoneme in the
		accentless Shizunai dialect
		<Ref k="nakagawa2024" p="31–33" />; <Ref k="shiraishi2022" p="§4.3" />;
		<Ref k="okuda2025" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>segment</th>
				<th>phonological status</th>
				<th>syllable position</th>
				<th>note</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>/h/</td>
				<td>phoneme (consensus)</td>
				<td>onset only</td>
				<td>
					three allophones conditioned by the following vowel; absent as a coda in HA
					<Ref k="nakagawa2024" p="27" />
				</td>
			</tr>
			<tr>
				<td>[ʔ]</td>
				<td>
					allophone / boundary marker in accent dialects (dominant analysis); phoneme /ʔ/ in
					Shizunai <Ref k="okuda2025" />
				</td>
				<td>vowel onsets at word-initial and juncture positions</td>
				<td>
					phonemic contrast with [w] demonstrated for Shizunai; no monomorphemic minimal pair in
					accent-dialect varieties <Ref k="nakagawa2024" p="31–33" />
				</td>
			</tr>
		</tbody>
	</table>
</S>

<S t="The glottal stop [ʔ]" id="glottal">
	<S t="Phonetic distribution" id="distribution">
		<p>
			A glottal onset [ʔ] is phonetically present before every vowel-initial syllable in Hokkaido
			Ainu — word-initially and at internal morpheme and word junctures.
			<Ref k="nakagawa2024" p="31" /> traces the earliest systematic observation to Kindaichi
			(1928), a Tōhoku-Japanese speaker who characterized Ainu as inserting a glottal closure
			before each vowel-initial syllable. The stop's auditory salience varies with phonetic
			context. Tamura (1970: 586–587, cited via <Ref k="shiraishi2022" p="§4.3" />) distinguishes
			a perceptible stop — arising when the following vowel carries lexical accent and/or occurs
			in a closed syllable — from a barely perceptible transition that amounts to no more than the
			syllable-division point. Attested forms in which the stop is clearly audible include
			[aˈʔep] 'food', [aˈʔoypep] 'tableware', [oˈʔatteke], [eˈʔunpipka], and [teˈʔeta]
			'long ago' (Tamura 1970: 586, cited via <Ref k="shiraishi2022" p="§4.3" />).
		</p>

		<table>
			<thead>
				<tr>
					<th>phonetic environment</th>
					<th>realization</th>
					<th>source</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>vowel-initial syllable; following vowel accented and/or in a closed syllable</td>
					<td>[ʔ] clearly audible</td>
					<td>Tamura 1970: 586, cited via <Ref k="shiraishi2022" p="§4.3" /></td>
				</tr>
				<tr>
					<td>vowel-initial syllable; following vowel unaccented and/or in an open syllable</td>
					<td>[ʔ] minimal or absent; gradual onset tension</td>
					<td>Tamura 1970: 586–587, cited via <Ref k="shiraishi2022" p="§4.3" /></td>
				</tr>
				<tr>
					<td>after a coda consonant that resyllabifies onto the following vowel</td>
					<td>[∅]; coda consonant fills the onset slot</td>
					<td>
						<Ref k="nakagawa2024" p="43" />; see <Xr ch="syllable-template" />
					</td>
				</tr>
			</tbody>
		</table>

		<p>
			The HA syllable canon (C)V(C) permits at most one onset consonant per syllable
			(see <Xr ch="syllable-template" />). When a preceding morpheme ends in a consonant, that
			consonant resyllabifies as the onset of the following vowel-initial syllable:
			<i lang="ain-Latn">cip-o</i> → [ci.po] 'board a boat',
			<i lang="ain-Latn">mat-ak</i> → [ma.tak] 'younger sister'
			<Ref k="nakagawa2024" p="43" />. No [ʔ] appears in those resyllabified forms, because the
			onset slot is already filled. The glottal closure thus marks syllables whose onset position
			remains empty — a phonetically automatic default rather than a lexically specified segment.
		</p>
	</S>

	<S t="Phonemic status" id="phonemicity">
		<p>
			Whether [ʔ] constitutes an underlying phoneme /ʔ/ in Hokkaido Ainu is contested
			<Ref k="shiraishi2022" p="§4.3" />. Two positions have been held since the mid-twentieth
			century:
		</p>

		<table>
			<thead>
				<tr>
					<th>analysis</th>
					<th>proponents</th>
					<th>principal arguments</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>phonemic /ʔ/</strong></td>
					<td>Hattori (1961); Tamura (early work)</td>
					<td>
						(i) Positing /ʔ/ reduces the syllable canon to only CV and CVC — an economy gain.
						(ii) The distribution of [w] versus [ʔ] at some junctures resists full derivation from
						higher-level rules alone <Ref k="nakagawa2024" p="31" />.
					</td>
				</tr>
				<tr>
					<td><strong>allophonic [ʔ], non-phonemic</strong></td>
					<td>
						Chiri (1942: 461) <Ref k="chiri1942" />; Refsing (1986: 68)
						<Ref k="refsing1986" />; Nakagawa (2024) <Ref k="nakagawa2024" />
					</td>
					<td>
						(i) No minimal pair exists in monomorphemic words: word-initial [e] and [ʔe] never
						contrast. (ii) Positing /ʔ/ forces widespread deletion rules wherever resyllabification
						applies. (iii) In accent dialects, the accent on
						<i lang="ain-Latn">parúnpe</i> (accent on <i>-un-</i>, not σ1) is incompatible with
						an underlying /ʔ/ filling the σ1 onset, which would make σ1 closed and predict accent
						there by 原則1 (see <Xr ch="pitch-accent-placement-rule" />)
						<Ref k="nakagawa2024" p="32–33, 44" />.
					</td>
				</tr>
			</tbody>
		</table>

		<p>
			The accent argument applies only in pitch-accent varieties. In the accentless Shizunai
			dialect it does not hold, and phonemic /ʔ/ has been demonstrated there (§ below). The
			non-phonemic analysis stands for the accent-dialect majority and is adopted here for those
			varieties ‹contested›.
		</p>
	</S>

	<S t="Juncture gradation and prosodic integration" id="juncture">
		<p>
			The phonetic realization of [ʔ] at morpheme and word boundaries varies with the prosodic
			integration of the flanking elements. Three degrees of boundary tightness are audible in a
			single compound across careful and casual speech. In
			<i lang="ain-Latn">itakorapiru=an</i> 'be telling the story in full', the most separated
			pronunciation is [itak|orapiru…] with a full juncture stop; an intermediate version shows
			[itak⁀orapiru…] with partial resyllabification alongside an audible [ʔ]; and the most
			integrated realization is [ita.ko.rapiru…] with full resyllabification and no glottal.
			Acoustic measurement confirms that the presence or absence of a voiceless interval between
			the coda /k/ and the following /o/ distinguishes the [−C.ʔV] and [+C.V] realizations
			‹corpus-suggested›
			(<Ref k="aynucorporadiscord" />, nukopoli, 2024-12-21).
		</p>

		<p>
			The suffix <i lang="ain-Latn">=an</i> (fourth-person intransitive subject) provides a clear
			test after a stop-final stem. After <A w="sap" gl="depart, leave" /> the suffix
			<i lang="ain-Latn">=an</i> does not trigger resyllabification of the coda /p/ onto the
			following vowel; a juncture [ʔ] appears instead, yielding [sapʔan]
			‹corpus-suggested›
			(<Ref k="aynucorporadiscord" />, nukopoli, 2023-12-27).
		</p>

		<Ex
			m="sap=an"
			g="depart=4.S"
			tr="(we/they) depart"
			constructed
			note="Illustrates the C + =an juncture. The suffix =an does not trigger resyllabification of the preceding stop; juncture [ʔ] appears before the vowel, yielding [sapʔan] rather than *[sa.pan]. Compare the tighter-bound ku=, e=, ci= prefixes where resyllabification applies."
		/>

		<p>
			The prefixes <i lang="ain-Latn">ku=, e=, ci=</i> are prosodically integrated with their
			stem, forming a single prosodic word and triggering vowel-deletion and accent-shift processes
			(see <Xr ch="personal-affix-sandhi-connected-speech-reduction" /> and
			<Xr ch="pitch-accent-placement-rule" />). The prefix <i lang="ain-Latn">a=</i>, which does
			not shift lexical accent, is accordingly less tightly bound
			<Ref k="nakagawa2024" p="53" />.
			Acoustic observation of <i lang="ain-Latn">a=kor itak</i> 'there is speech' yields
			[a.ko.rəʔi.tak]: the echo vowel [ə] follows coda /r/ in
			<i lang="ain-Latn">kor</i>, and [ʔ] appears at the compound boundary before
			<i lang="ain-Latn">itak</i>, while the a=–kor boundary shows no juncture stop
			‹corpus-suggested›
			(<Ref k="aynucorporadiscord" />, nukopoli, 2024-03-18).
		</p>

		<Ex
			m="a=kor itak"
			g="4.A=have speech"
			tr="(someone) speaks; there is speech"
			constructed
			note="Pronounced [a.ko.rə.ʔi.tak]: the echo vowel [ə] follows coda /r/ in kor, and [ʔ] marks the compound boundary before itak. The person-prefix boundary a=–kor shows no juncture stop. The a= prefix does not trigger the accent shift that ku= and e= trigger, consistent with weaker prosodic integration."
		/>

		<p>
			These observations together point to a gradient of boundary tightness within the
			person-marking system: the productive object/agent prefix class
			(<i lang="ain-Latn">ku=, e=, ci=</i>) is the most integrated; the
			<i lang="ain-Latn">a=</i> boundary is tighter than a compound word boundary but looser than
			the productive-prefix class; and the <i lang="ain-Latn">=an</i> suffix boundary is the
			least integrated of the person-marking elements examined here. Glide insertion at hiatus
			and the broader juncture phonology are treated in
			<Xr ch="glide-epenthesis-hiatus-resolution" />.
		</p>
	</S>

	<S t="The Shizunai minimal pair" id="shizunai">
		<p>
			The accentless Shizunai dialect (静内; classified as 無アクセント by
			<Ref k="nakagawa2024" p="50" />; see <Xr ch="hokkaido-phonological-microvariation" />)
			presents an environment in which [ʔ] and [w] carry lexical contrast. Okuda (2025), drawing
			on fieldwork by 志賀雪湖, reports a minimal pair for juncture types that in accent varieties
			are kept distinct by pitch placement rather than by the laryngeal itself
			<Ref k="okuda2025" />:
		</p>

		<Ex
			m="suwat"
			g="pothook"
			tr="pothook (hook above the hearth for suspending pots)"
			cite="okuda2025"
			dial="SHI"
			note="Pronounced [suwat]. An opaque compound; the /w/ belongs to the fossilized root and does not derive from the compositional glide-epenthesis rule."
		/>

		<Ex
			m="su at"
			g="pot cord"
			tr="pot handle (the wire bail of a pot)"
			cite="okuda2025"
			dial="SHI"
			note="Pronounced [suʔat]. A transparent compound of su 'pot, kettle' and at 'rope, cord'. In Shizunai the juncture [ʔ] at the su–at boundary is in contrastive distribution with the /w/ of suwat above."
		/>

		<p>
			Because Shizunai lacks distinctive pitch accent, the contrast [suwat] : [suʔat] cannot be
			attributed to accent-placement differences as it would be in an accent dialect.
			Okuda (2025) concludes that in Shizunai both the glide /w/ and the [ʔ] at transparent
			compound boundaries are phonemic, and adds the explicit caution that this finding does not
			generalize: "one cannot say, without specifying dialect, that the transitional glide y/w is
			non-phonemic" <Ref k="okuda2025" />.
			Parallel contrasts are reported for /u<i>ʔ</i>a/ : /u<i>w</i>a/ and
			/i<i>ʔ</i>o/ : /i<i>y</i>o/ in Shizunai <Ref k="okuda2025" /> ‹contested›.
			The glide phonemicity question across Hokkaido dialects is examined in
			<Xr ch="glides-w-y" />.
		</p>
	</S>
</S>

<S t="Emphatic glottal insertion" id="emphatic">
	<p>
		A morphologically conditioned process inserts [ʔ] to break a repeated vowel in emphatic or
		intensified word forms, shifting or heightening the form's meaning. The set of participating
		roots is lexically restricted. Kindaichi (1931, cited via
		<Ref k="shiraishi2022" p="§2.2" />) documents the pattern in Saru:
	</p>

	<table>
		<thead>
			<tr>
				<th>base form</th>
				<th>emphatic form</th>
				<th>gloss shift</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">wen</i> [wen]</td>
				<td><i lang="ain-Latn">weʔen</i> [weʔen]</td>
				<td>'bad' → 'very bad'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">to</i> [to]</td>
				<td><i lang="ain-Latn">toʔo</i> [toʔo]</td>
				<td>'far away' → 'far away (emphatic)'</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">teta</i> [teta]</td>
				<td><i lang="ain-Latn">teʔeta</i> [teʔeta]</td>
				<td>'a few days ago' → 'long ago'</td>
			</tr>
		</tbody>
	</table>

	<p>
		The [ʔ] in emphatic forms carries semantic weight and is invariant under conditions that
		suppress the boundary glottal elsewhere. This distinguishes it from the phonetically automatic
		onset [ʔ] discussed above, which yields to resyllabification.
	</p>
</S>

<S t="The phoneme /h/" id="h-phoneme">
	<S t="Onset distribution and allophony" id="h-onset">
		<p>
			The phoneme /h/ occurs only in syllable-onset position in Hokkaido Ainu, categorically
			excluded from the coda
			<Ref k="nakagawa2024" p="27" />; <Ref k="sato2008" p="§2.3" />.
			Three allophones are conditioned by the following vowel
			<Ref k="nakagawa2024" p="28" />; <Ref k="shiraishi2022" p="§3.1" />:
		</p>

		<table>
			<thead>
				<tr>
					<th>environment</th>
					<th>allophone</th>
					<th>example</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>/h/ before /a/, /e/, /o/</td>
					<td>[h]</td>
					<td>
						<i lang="ain-Latn">hapo</i> [hapo] 'mother';
						<i lang="ain-Latn">humi</i> [humi] 'sound, sensation'
					</td>
				</tr>
				<tr>
					<td>/h/ before /i/</td>
					<td>[ç]</td>
					<td><i lang="ain-Latn">hine</i> [çine] 'and then' (conjunctive particle)</td>
				</tr>
				<tr>
					<td>/h/ before /u/</td>
					<td>[ɸ]</td>
					<td><i lang="ain-Latn">huci</i> [ɸuci] 'grandmother, elderly woman'</td>
				</tr>
			</tbody>
		</table>

		<p>
			The conditioning is audible but less categorical than in standard Japanese. Tamura (1998: 41,
			cited via <Ref k="shiraishi2022" p="§3.1" />) reports that speakers born around 1900 showed
			only weak vowel-coloring of /h/, with the [ɸ] before /u/ approaching a glottal quality in
			particular tokens. All three realizations are predictable allophones of a single phoneme /h/;
			no minimal pair distinguishes them for the same following vowel
			(see <Xr ch="consonant-inventory" />).
		</p>
	</S>

	<S t="Coda /h/ and the final-h question" id="h-coda">
		<p>
			Coda /h/ is absent as a synchronic segment in Hokkaido Ainu: no native Hokkaido word
			carries a laryngeal in coda position
			<Ref k="nakagawa2024" p="27" />; <Ref k="sato2008" p="§2.3" />.
			In Sakhalin Ainu, by contrast, a coda breath-release /h/ (realized as a voiceless breath,
			not [x]; Hattori 1964: 34, cited via <Ref k="nakagawa2024" p="27" />) is productive and
			reflects historical HA coda /r/ among other sources
			(see <Xr ch="final-h-history-and-sakhalin-length-reflex" />).
		</p>

		<p>
			Within Hokkaido Ainu, the possessed form
			<i lang="ain-Latn">siki-h-i</i> 'his/her eyes' (from <A w="siki" gl="eye" />) contains
			an epenthetic /h/ inserted before the possessive suffix. This /h/ is a morphological
			insertion restricted to the
			<Xr ch="affiliative-suffix-morphophonology">affiliative formation</Xr> and does not
			represent an underlying coda in the root
			(Kindaichi &amp; Chiri 1936: 14, cited via <Ref k="shiraishi2022" p="n.8" />).
			Whether certain citation forms of stems carry an underlying final /h/, and what diachronic
			relationship that /h/ bears to the Sakhalin coda and to Sakhalin vowel length, is the
			'final-h question' treated in
			<Xr ch="final-h-history-and-sakhalin-length-reflex" />.
		</p>
	</S>
</S>
