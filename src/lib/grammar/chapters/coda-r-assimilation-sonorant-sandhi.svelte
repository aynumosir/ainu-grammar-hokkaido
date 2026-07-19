<!-- src/lib/grammar/chapters/coda-r-assimilation-sonorant-sandhi.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Hokkaido Ainu has two intersecting regressive assimilation systems operating across morpheme,
		compound, and word junctures: coda <em>/r/-sandhi</em> and coda <em>/n/-sandhi</em>. In
		/r/-sandhi, the coda /r/ of one morpheme is deleted and the following consonant geminates;
		/r/ is thereby the most morphophonologically productive segment in the language
		<Ref k="nakagawa2024" p="35–38" />; <Ref k="shiraishi2022" p="§6.1" />;
		<Ref k="kindaichi1936" />. Independently, the coda nasal /n/ undergoes two distinct
		processes: it assimilates in place of articulation to a following labial or velar
		(an allophonic rule), and before following continuants /s/, /y/, and /w/ it triggers a
		morphophonological change — /n/-sandhi proper — which is more restricted in domain than
		/r/-sandhi <Ref k="nakagawa2024" p="30, 36–37" />; <Ref k="shiraishi2022" p="§3, §6.1" />.
		A third, dialect-specific set of cluster simplifications is attested in eastern varieties,
		most prominently Bihoro, but Nakagawa (2024: 36) treats these as historically fixed rather
		than productive <Ref k="nakagawafukazawa2022" p="§3.3" />.
	</p>
	<p>
		All rules described here are regressive: the coda segment adapts to the following onset.
		None are notated in the standard romanization orthography, which writes underlying forms
		(<i lang="ain-Latn">ran wa</i>, not <i lang="ain-Latn">ram ma</i>); both sandhi types are
		nonetheless fully productive in speech <Ref k="nakagawa2024" p="37–38" />. The phoneme
		/r/ and its coda release are described in <Xr ch="rhotic-r" />; glide insertion at vowel
		hiatus is treated in <Xr ch="glide-epenthesis-hiatus-resolution" />; the interaction of
		these rules with personal-affix clitics is treated in
		<Xr ch="personal-affix-sandhi-connected-speech-reduction" />.
	</p>
</S>

<S t="Coda /r/-sandhi" id="r-sandhi">
	<p>
		When a /r/-final morpheme immediately precedes a consonant-initial morpheme, the coda /r/ is
		deleted and the following consonant is lengthened, yielding a surface geminate. The rule
		applies word-internally, at compound boundaries, and across word boundaries; it is not
		blocked by pauses within an utterance, and it crosses sentence boundaries without
		restriction (§4.1 below) <Ref k="nakagawa2024" p="35–37" />; <Ref k="shiraishi2022" p="§6.1" />.
	</p>
	<p>
		Shiraishi (2022: §6.1), drawing on Shiraishi (2001), characterizes the trigger consonants as
		the coronal class — /n/, /c/, /t/, /r/ — with /s/ and /y/ also attested as triggers in
		northern dialects (Chiri 1956: 343, cited in <Ref k="shiraishi2022" p="§6.1" />). The
		assimilation can thus be stated as:
	</p>
	<p>
		/r/ → C / _C[+coronal, ≠r]: the coda rhotic is deleted before a following coronal onset,
		which then geminates.
	</p>

	<table>
		<thead>
			<tr>
				<th>underlying sequence</th>
				<th>surface</th>
				<th>phonetic</th>
				<th>example (underlying → surface form)</th>
				<th>gloss</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>/r/ + /t/</td>
				<td>tt</td>
				<td>[tt]</td>
				<td>
					<i lang="ain-Latn">ku=kor tar</i> → <i lang="ain-Latn">kukot tar</i>
				</td>
				<td>'a bag (that one has)'</td>
				<td><Ref k="nakagawa2024" p="36" />; <Ref k="shiraishi2022" p="§6.1" /></td>
			</tr>
			<tr>
				<td>/r/ + /t/</td>
				<td>tt</td>
				<td>[tt]</td>
				<td>
					<i lang="ain-Latn">ar teyne</i> → <i lang="ain-Latn">at teyne</i>
				</td>
				<td>'once, that way'</td>
				<td><Ref k="nakagawa2024" p="36" />; <Ref k="shiraishi2022" p="§6.1" /></td>
			</tr>
			<tr>
				<td>/r/ + /c/</td>
				<td>tc</td>
				<td>[t̚c]</td>
				<td>
					<i lang="ain-Latn">ku=kor cise</i> → <i lang="ain-Latn">kukot cise</i>
				</td>
				<td>'my house'</td>
				<td><Ref k="nakagawa2024" p="36" />; <Ref k="shiraishi2022" p="§6.1" /></td>
			</tr>
			<tr>
				<td>/r/ + /c/</td>
				<td>tc</td>
				<td>[t̚c]</td>
				<td>
					<i lang="ain-Latn">retar cikap</i> → <i lang="ain-Latn">retat cikap</i>
				</td>
				<td>'swan' (lit. white bird)</td>
				<td><Ref k="nakagawa2024" p="36" />; <Ref k="shiraishi2022" p="§6.1" /></td>
			</tr>
			<tr>
				<td>/r/ + /n/</td>
				<td>nn</td>
				<td>[nn]</td>
				<td>
					<i lang="ain-Latn">ku=kor nima</i> → <i lang="ain-Latn">kukon nima</i>
				</td>
				<td>'my relative'</td>
				<td><Ref k="nakagawa2024" p="35" />; <Ref k="shiraishi2022" p="§6.1" /></td>
			</tr>
			<tr>
				<td>/r/ + /s/</td>
				<td>ss</td>
				<td>[ss]</td>
				<td>
					<i lang="ain-Latn">ar suy</i> → [assuy]
				</td>
				<td>'once more'</td>
				<td><Ref k="nakagawa2024" p="36" />; <Ref k="shiraishi2022" p="§6.1" /></td>
			</tr>
			<tr>
				<td>/r/ + /y/ (Chitose)</td>
				<td>yy</td>
				<td>[jj]</td>
				<td>
					<i lang="ain-Latn">ku=kor yupi</i> → <i lang="ain-Latn">kukoy yupi</i>
				</td>
				<td>'my elder brother' (Chitose)</td>
				<td><Ref k="nakagawa2024" p="37" />; <Ref k="shiraishi2022" p="§6.1" /></td>
			</tr>
			<tr>
				<td>/r/ + /r/ (dissimilation)</td>
				<td>n</td>
				<td>[n]</td>
				<td>
					<i lang="ain-Latn">ku=kor rusuy</i> → <i lang="ain-Latn">kukon rusuy</i>
				</td>
				<td>'I want it'</td>
				<td><Ref k="nakagawa2024" p="35" /></td>
			</tr>
		</tbody>
	</table>

	<S t="Dissimilation: /r/ before /r/" id="r-dissimilation">
		<p>
			The sequence /r/+/r/ does not geminate to [rr] but dissimilates: the coda /r/ surfaces
			as [n] before a following rhotic onset. Nakagawa (2024: 35) identifies
			<i lang="ain-Latn">ku=kor rusuy</i> 'I want it' → [kukonrusuy] as the only published
			Hokkaido example of this dissimilation. The complementary statement alongside the
			assimilation rule is: <Ref k="nakagawa2024" p="§1.2.1" />
	</p>
		<p>
			/r/ → n / _r (dissimilation — avoidance of adjacent rhotics at syllable margins).
		</p>
		<p>
			This dissimilatory outcome is the single exception within the /r/-sandhi system; all other
			coronal triggers yield total assimilation.
		</p>
	</S>

	<S t="Derivation walkthroughs" id="r-derivation">
		<p>
			The derivations below move from underlying (orthographic) representations to surface
			phonetic forms. Boundaries: <em>=</em> marks clitic attachment, space marks word boundary. <Ref k="nakagawa2024" p="§1.2.1" />
	</p>

		<table>
			<caption>/r/-sandhi: underlying to surface</caption>
			<thead>
				<tr>
					<th>underlying</th>
					<th>rule</th>
					<th>surface</th>
					<th>gloss</th>
					<th>boundary type</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>/ku=kor nispa/</td>
					<td>/r/ + /n/ → [nn]</td>
					<td>[kukonnispa]</td>
					<td>'a wealthy man (of one)'</td>
					<td>word</td>
				</tr>
				<tr>
					<td>/ar suy/</td>
					<td>/r/ + /s/ → [ss]</td>
					<td>[assuy]</td>
					<td>'once more'</td>
					<td>word</td>
				</tr>
				<tr>
					<td>/retar cikap/</td>
					<td>/r/ + /c/ → [t̚c]</td>
					<td>[retat̚cikap]</td>
					<td>'swan'</td>
					<td>compound</td>
				</tr>
				<tr>
					<td>/ku=kor tar/</td>
					<td>/r/ + /t/ → [tt]</td>
					<td>[kukottar]</td>
					<td>'a bag (that one has)'</td>
					<td>word</td>
				</tr>
				<tr>
					<td>/ku=kor rusuy/</td>
					<td>/r/ + /r/ → [n] (dissim.)</td>
					<td>[kukonrusuy]</td>
					<td>'I want it'</td>
					<td>word</td>
				</tr>
			</tbody>
		</table>

		<Ex
			m="ku=kor nispa"
			g="1SG.A=have wealthy.person"
			tr="a wealthy man (of one's)"
			ain="[kukonnispa]"
			note="Productive /r/+/n/ → [nn]: the coda /r/ of kor assimilates to the following /n/ of nispa, yielding a geminate [nn] at the word boundary. Standard orthography writes ku=kor nispa."
			constructed
		/>

		<Ex
			m="ku=kor tar"
			g="1SG.A=have bag"
			tr="a bag (that one has)"
			ain="[kukottar]"
			note="Productive /r/+/t/ → [tt]: the coda /r/ of kor assimilates to the following /t/ of tar, yielding [tt]. Standard orthography writes ku=kor tar."
			constructed
		/>
	</S>
</S>

<S t="Coda-nasal place assimilation" id="nasal-place">
	<p>
		The coda nasal /n/ assimilates in place of articulation to a following labial or velar
		consonant: it surfaces as [m] before /p/ and /m/, and as [ŋ] before /k/. These are
		allophonic realizations fully predictable from the following context. The coda /m/ does not
		undergo velar assimilation before /k/ and remains [m] in that environment
		<Ref k="nakagawa2024" p="30" />; <Ref k="shiraishi2022" p="§3" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>rule</th>
				<th>formal statement</th>
				<th>example (underlying)</th>
				<th>surface</th>
				<th>gloss</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>labial assimilation</td>
				<td>/n/ → [m] / _&#123;p, m&#125;</td>
				<td><i lang="ain-Latn">an=pe</i></td>
				<td>[ampe]</td>
				<td>'true thing'</td>
				<td><Ref k="nakagawa2024" p="30" /></td>
			</tr>
			<tr>
				<td>velar assimilation</td>
				<td>/n/ → [ŋ] / _k</td>
				<td><i lang="ain-Latn">hon=kor</i></td>
				<td>[hoŋkor]</td>
				<td>'be pregnant'</td>
				<td><Ref k="nakagawa2024" p="30" /></td>
			</tr>
			<tr>
				<td>velar assimilation</td>
				<td>/n/ → [ŋ] / _k</td>
				<td><i lang="ain-Latn">hanku</i></td>
				<td>[haŋku]</td>
				<td>'navel'</td>
				<td>
					<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-16), citing Tamura (1996)
					‹corpus-confirmed›
				</td>
			</tr>
			<tr>
				<td>/m/ — no velar assimilation</td>
				<td>/m/ → [m] / _k</td>
				<td><i lang="ain-Latn">okamkir</i></td>
				<td>[okamkir]</td>
				<td>(verbal form)</td>
				<td>
					<Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-11) ‹corpus-suggested›
				</td>
			</tr>
		</tbody>
	</table>

	<p>
		The orthography consistently writes /n/ in all environments
		(<i lang="ain-Latn">an=pe</i>, <i lang="ain-Latn">hon=kor</i>,
		<i lang="ain-Latn">hanku</i>), never the allophonic surface values [m] or [ŋ]. Nakagawa
		(2024: 30) and Shiraishi (2022: §3) both treat [m], [n], [ŋ] as allophonic realizations of
		the two phonemes /m/ and /n/, with /n/ conditioned by the following consonant and /m/
		invariant.
	</p>
	<p>
		Whether /n/ and /m/ are phonemically neutralized before labials is a point of orthographic
		debate. Forms such as <i lang="ain-Latn">matanpus</i> ~ <i lang="ain-Latn">matampus</i>
		are written with /n/ or /m/ before /p/ depending on the source; no consensus across
		dictionaries and authors has been established ‹contested›
		<Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-05). The loanword
		<i lang="ain-Latn">kampi</i> 'paper' (from Japanese <em lang="ja">kami</em>) raises the
		same issue: an etymological <i lang="ain-Latn">kanpi</i> versus a phonetically
		assimilated <i lang="ain-Latn">kampi</i>
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-11-16) ‹contested›.
	</p>
</S>

<S t="Coda /n/-sandhi" id="n-sandhi">
	<p>
		Before the [+continuant] consonants /s/, /y/, and /w/, a coda /n/ does not assimilate in
		place but is replaced by a glide or deleted: before /s/ and /y/ it surfaces as [j]
		(romanized <em>y</em>), yielding an apparent geminate with the following continuant; before
		/w/ the nasal is deleted and only /w/ remains. Shiraishi (2022: §6.1), following Shiraishi
		(2001), characterizes the trigger class as the continuants and describes n-sandhi as the
		spread of the feature [+continuant] from the following onset onto the preceding coda. The
		formal statement is:
	</p>
	<p>
		/n/ → [j] / _&#123;s, y&#125;; /n/ → ∅ / _w
	</p>

	<table>
		<thead>
			<tr>
				<th>underlying sequence</th>
				<th>surface</th>
				<th>example (underlying)</th>
				<th>surface form</th>
				<th>gloss</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>/n/ + /s/</td>
				<td>[js] → ys</td>
				<td><i lang="ain-Latn">pon seta</i></td>
				<td>[poy seta]</td>
				<td>'puppy' (small dog)</td>
				<td><Ref k="nakagawa2024" p="36" />; <Ref k="shiraishi2022" p="§6.1" /></td>
			</tr>
			<tr>
				<td>/n/ + /s/</td>
				<td>[js] → ys</td>
				<td><i lang="ain-Latn">wen sisam</i></td>
				<td>[wey sisam]</td>
				<td>'bad Japanese person'</td>
				<td><Ref k="nakagawa2024" p="36" />; <Ref k="shiraishi2022" p="§6.1" /></td>
			</tr>
			<tr>
				<td>/n/ + /y/</td>
				<td>[jj] → yy</td>
				<td><i lang="ain-Latn">pon yuk</i></td>
				<td>[poy yuk]</td>
				<td>'small deer'</td>
				<td><Ref k="nakagawa2024" p="36" />; <Ref k="shiraishi2022" p="§6.1" /></td>
			</tr>
			<tr>
				<td>/n/ + /y/</td>
				<td>[jj] → yy</td>
				<td><i lang="ain-Latn">wen yupi</i></td>
				<td>[wey yupi]</td>
				<td>'bad elder brother'</td>
				<td><Ref k="nakagawa2024" p="36" />; <Ref k="shiraishi2022" p="§6.1" /></td>
			</tr>
			<tr>
				<td>/n/ + /w/</td>
				<td>[w] (/n/ deleted)</td>
				<td><i lang="ain-Latn">yayan wakka</i></td>
				<td>[yayaw wakka]</td>
				<td>'pure water'</td>
				<td><Ref k="shiraishi2022" p="§6.1" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The coda /m/ does not undergo this rule. The form
		<i lang="ain-Latn">homsu</i> (from <i lang="ain-Latn">hom-su</i>) surfaces as [homsu],
		not *[hoysu], confirming that n-sandhi targets /n/ specifically and not the broader nasal
		class; /m/ and /n/ feed different morphophonological processes before continuants
		‹corpus-suggested›
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-03-06). The /n/+/s/ output [js] — written
		as <em>y</em> in <i lang="ain-Latn">poy seta</i> — behaves phonologically as a coda /y/
		in the resulting syllable.
	</p>

	<S t="Domain asymmetry: /r/-sandhi and /n/-sandhi differ in boundary sensitivity" id="domain-asymmetry">
		<p>
			/r/-sandhi and /n/-sandhi share a regressive direction and a similar output structure
			(gemination or deletion), but they differ fundamentally in the phonological domain over
			which they apply. Shiraishi (2022: §6.2), reporting on Shiraishi (2001), places /n/-sandhi
			within the prosodic phrase: it applies phrase-internally but never crosses a sentence
			boundary. /r/-sandhi carries no such restriction — it is a pure phonological rule that
			applies across all junctures including sentence boundaries.
		</p>
		<p>
			The community independently observed this asymmetry: "r-連声は文境界を跨げるが n-連声は跨げない"
			(r-liaison crosses sentence boundaries; n-liaison does not) ‹corpus-confirmed›
			<Ref k="aynucorporadiscord" /> (antitwilight, 2024-11-23). The same contributor notes
			an account of n-sandhi's locality: because n-sandhi is mediated by nasalization in the
			coda, the sentence boundary disrupts the conditioning context, making the restriction
			predictable from the mechanism. The formulation in Shiraishi (2022: §6.2) frames this
			as a distinction between a P-structure (phrase-internal) rule and a pure phonological
			(domain-free) rule.
		</p>
		<p>
			The practical consequence is that inter-phrase /n/ sequences may or may not undergo
			sandhi depending on whether a phrase boundary intervenes, while /r/ sequences at any
			juncture assimilate in fluent speech regardless. Neither alternation appears in the
			standard romanization <Ref k="nakagawa2024" p="37–38" />.
		</p>
	</S>
</S>

<S t="Lexicalized sandhi outputs" id="lexicalized">
	<p>
		Several Hokkaido Ainu lexical items preserve a sandhi output as their current lexical form,
		the underlying source either obsolete or reconstructed.
	</p>
	<p>
		The best-documented case is <A w="attus" gl="elm-bark robe" />. The proto-form is
		reconstructed as <i lang="ain-Latn">at-rus</i>; the Saru dialect attests an intermediate
		form <i lang="ain-Latn">ahrus</i> (reflecting lenition rather than full assimilation); the
		general Hokkaido form <i lang="ain-Latn">attus</i> reflects the lexicalization of
		/r/+/s/ → [ss] sandhi at the compound boundary
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-26) ‹corpus-confirmed›. The word
		<i lang="ain-Latn">attus</i> is attested 24 times in the corpus across multiple narrators
		and collections (小松哲郎, 神崎雅好, 相原典明, アイヌタイムズ; 平賀さだも, 平取町アイヌ口承文芸),
		confirming that the geminated form is the current lexical norm throughout Hokkaido.
	</p>
	<p>
		A second piece of evidence for the productivity of /r/+/t/ → [tt] comes from a VITS-based
		Ainu TTS system: the model independently surfaced the sequence
		<i lang="ain-Latn">mosir ta</i> 'land' + locative as [mositta] in generated speech,
		apparently learning the assimilation from training data without explicit phonological rules
		‹corpus-suggested›
		<Ref k="aynucorporadiscord" /> (nukopoli, 2026-05-20). This anecdotal ML observation does
		not add to the primary-source evidence for the rule — established in
		<Ref k="nakagawa2024" p="36" /> and <Ref k="shiraishi2022" p="§6.1" /> — but illustrates
		how pervasive /r/-sandhi is in connected-speech corpora.
	</p>
	<p>
		Among other compound-boundary cases, <i lang="ain-Latn">ar suy</i> 'once more' surfaces as
		[assuy] via /r/+/s/ → [ss]; <i lang="ain-Latn">retar cikap</i> 'swan' surfaces as
		[retat̚cikap] via /r/+/c/ → [t̚c]. The compound-internal
		<i lang="ain-Latn">t+i → ci</i> rule — illustrated by
		<i lang="ain-Latn">mat-ikor</i> → <i lang="ain-Latn">macikor</i> — is the one sandhi rule
		that applies without exception in all Hokkaido dialects
		<Ref k="nakagawa2024" p="36" /> and is treated in <Xr ch="rhotic-r" />.
	</p>
	<p>
		Additional lexicalized forms noted by the community include
		<i lang="ain-Latn">ketketcep</i> (reconstructed from *<i lang="ain-Latn">ket~ket-se-pe</i>)
		and <i lang="ain-Latn">nisatcawot</i> (from <i lang="ain-Latn">nisat-sawot</i>), both
		showing /t/+/s/ → [tc] assimilation at compound junctures ‹speculative›
		<Ref k="aynucorporadiscord" /> (antitwilight, 2025-11-03).
	</p>
</S>

<S t="Bihoro and eastern-dialect cluster simplification" id="bihoro">
	<p>
		Nakagawa &amp; Fukazawa (2022: §3.3) document cluster simplifications in the Bihoro dialect
		— and to varying degrees in Obihiro, Kushiro, Asahikawa, and Nayoro — that go beyond the
		productive sandhi rules described above. In these varieties, specific heterorganic sequences
		of two obstruents, or an obstruent plus fricative, are simplified to a geminate in specific
		lexical items.
	</p>

	<table>
		<thead>
			<tr>
				<th>sequence</th>
				<th>Bihoro output</th>
				<th>standard HA form → Bihoro form</th>
				<th>gloss</th>
				<th>attested in</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>/tk/</td>
				<td>[kk]</td>
				<td>
					<i lang="ain-Latn">hotke</i> → <i lang="ain-Latn">hokke</i>
				</td>
				<td>'lie down'</td>
				<td>Obihiro, Kushiro, Bihoro</td>
				<td><Ref k="nakagawafukazawa2022" p="§3.3" /></td>
			</tr>
			<tr>
				<td>/pt/</td>
				<td>[tt]</td>
				<td>
					<i lang="ain-Latn">tupte</i> → <i lang="ain-Latn">tutte</i>
				</td>
				<td>(verbal form)</td>
				<td>Bihoro</td>
				<td><Ref k="nakagawafukazawa2022" p="§3.3" /></td>
			</tr>
			<tr>
				<td>/rs/</td>
				<td>[ss]</td>
				<td>
					<i lang="ain-Latn">sirsesek</i> → <i lang="ain-Latn">sissesek</i>
				</td>
				<td>'hot'</td>
				<td>Bihoro, Asahikawa, Nayoro</td>
				<td><Ref k="nakagawafukazawa2022" p="§3.3" /></td>
			</tr>
			<tr>
				<td>/ps/</td>
				<td>[ss]</td>
				<td>
					<i lang="ain-Latn">upsor</i> → <i lang="ain-Latn">ussor</i>
				</td>
				<td>'bosom'</td>
				<td>Bihoro, Asahikawa, Nayoro</td>
				<td><Ref k="nakagawafukazawa2022" p="§3.3" /></td>
			</tr>
			<tr>
				<td>/kp/</td>
				<td>[pp]</td>
				<td>
					<i lang="ain-Latn">sirpopke</i> → <i lang="ain-Latn">sirpokke</i>
				</td>
				<td>'warm'</td>
				<td>Bihoro, Sōya</td>
				<td><Ref k="nakagawafukazawa2022" p="§3.3" /></td>
			</tr>
			<tr>
				<td>/kt/</td>
				<td>[tt]</td>
				<td>
					<i lang="ain-Latn">i(y)oyamokte</i> → <i lang="ain-Latn">ioyamotte</i>
				</td>
				<td>(verbal form)</td>
				<td>Bihoro</td>
				<td><Ref k="nakagawafukazawa2022" p="§3.3" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		Nakagawa (2024: 36) treats these as historical word-form changes rather than synchronic
		productive rules. The diagnostic is substitution-productivity: a Kushiro speaker who produces
		<i lang="ain-Latn">hokke</i> for 'lie down' does not produce
		*<i lang="ain-Latn">pek kari</i> for <i lang="ain-Latn">pet kari</i> 'the river did' in
		spontaneous speech, showing that the /tk/ → [kk] simplification is lexically specific and
		not a live rule generating [kk] from all /tk/ sequences
		<Ref k="nakagawa2024" p="36" />. The community endorses this analysis: the changes are
		word-specific in Bihoro and may reflect a proto-phoneme issue rather than a productive
		synchronic rule ‹contested›
		<Ref k="aynucorporadiscord" /> (antitwilight, 2024-11-17, citing Nakagawa &amp; Fukazawa
		2022: §3.3). The /rs/ → [ss] Bihoro cases are phonologically parallel to productive
		/r/+/s/ → [ss] sandhi in §2, but speakers do not generalize the alternation to new /rs/
		sequences. The broader dialect typology is treated in
		<Xr ch="hokkaido-phonological-microvariation" />.
	</p>
</S>

<S t="Rule inventory and domain summary" id="rule-summary">
	<p>
		The productive rules of this chapter are collected below. Formal statements follow the
		notation X → Y / Z (X undergoes change to Y in environment Z).
	</p>

	<table>
		<thead>
			<tr>
				<th>rule</th>
				<th>formal statement</th>
				<th>trigger class</th>
				<th>domain</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>/r/-sandhi (assimilation)</td>
				<td>/r/ → C / _C[+coronal, ≠r]</td>
				<td>coronal: /t/, /c/, /n/, /s/, /y/ (dialect-variable)</td>
				<td>all boundaries; no restriction</td>
				<td>
					<Ref k="nakagawa2024" p="35–37" />; <Ref k="shiraishi2022" p="§6.1" />
				</td>
			</tr>
			<tr>
				<td>/r/-sandhi (dissimilation)</td>
				<td>/r/ → n / _r</td>
				<td>/r/</td>
				<td>same — no restriction</td>
				<td><Ref k="nakagawa2024" p="35" /></td>
			</tr>
			<tr>
				<td>nasal place — labial</td>
				<td>/n/ → [m] / _&#123;p, m&#125;</td>
				<td>labial onset /p/, /m/</td>
				<td>allophonic; syllable-margin</td>
				<td>
					<Ref k="nakagawa2024" p="30" />; <Ref k="shiraishi2022" p="§3" />
				</td>
			</tr>
			<tr>
				<td>nasal place — velar</td>
				<td>/n/ → [ŋ] / _k</td>
				<td>velar onset /k/</td>
				<td>allophonic; syllable-margin</td>
				<td>
					<Ref k="nakagawa2024" p="30" />; <Ref k="shiraishi2022" p="§3" />
				</td>
			</tr>
			<tr>
				<td>/n/-sandhi before /s/, /y/</td>
				<td>/n/ → [j] / _&#123;s, y&#125;</td>
				<td>continuant: /s/, /y/</td>
				<td>phrase-internal only; blocked at sentence boundary</td>
				<td>
					<Ref k="nakagawa2024" p="36–37" />; <Ref k="shiraishi2022" p="§6.1–6.2" />
				</td>
			</tr>
			<tr>
				<td>/n/-sandhi before /w/</td>
				<td>/n/ → ∅ / _w</td>
				<td>continuant: /w/</td>
				<td>phrase-internal only; blocked at sentence boundary</td>
				<td><Ref k="shiraishi2022" p="§6.1–6.2" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The principal structural asymmetry in the system — /r/-sandhi is domain-free, /n/-sandhi is
		phrase-bounded — is formulated by Shiraishi (2022: §6.2) as the distinction between a pure
		phonological rule and a P-structure rule. Neither is written in the standard romanization;
		both apply in connected speech <Ref k="nakagawa2024" p="37–38" />.
	</p>
	<p>
		These rules interact with the personal-affix system (<i lang="ain-Latn">ku=</i> before
		vowel-initial stems; <i lang="ain-Latn">en=</i> assimilation), treated in
		<Xr ch="personal-affix-sandhi-connected-speech-reduction" />, and with the
		<Xr ch="affiliative-suffix-morphophonology">possessed-form morphophonology</Xr> of nouns.
		The syllable structure that sets coda position is described in
		<Xr ch="syllable-template" />, and the consonant inventory from which all triggering
		segments are drawn is described in <Xr ch="consonant-inventory" />.
	</p>
</S>
