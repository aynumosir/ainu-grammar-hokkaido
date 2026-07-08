<!-- src/lib/grammar/chapters/reduplication-phonology-rule-interaction.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Hokkaido Ainu reduplication places a phonological copy of a verbal base alongside that
		base. The process is most visible in iterative and distributive-plural forms, but this
		chapter is restricted to its <em>phonological</em> dimension: the shape the reduplicant
		takes, what happens at the boundary between reduplicant and base, how the general
		resyllabification and hiatus-resolution rules interact with that boundary, and how the
		sandhi assimilations documented in <Xr ch="coda-r-assimilation-sonorant-sandhi" /> bear
		on the juncture when a suffix follows the reduplicated complex. Aspect and iterative
		semantics belong to <Xr ch="phasal-iterative-habitual-aspect" />; verbal-number
		pluractionality to <Xr ch="suppletive-verbal-number" />; nominalizer allomorphy
		consulted in §5 to <Xr ch="nominalization-p-pe" />. Live morphological decompositions of
		reduplicated forms — full-copy, VC-echo (<i lang="ain-Latn">cirir</i>), and
		final-syllable (<i lang="ain-Latn">hepokiki</i>) types with their argument-structure
		annotations — are browsable in the Ainu morpheme database (mdb.aynu.org/processes).
	</p>
</S>

<S t="The phonological shape of the reduplicant" id="shape">
	<p>
		Hokkaido Ainu reduplication is characteristically <em>full</em>: the reduplicant copies
		the complete syllable or CVC template of the base
		<Ref k="nakagawa2024" p="204–208" />. The syllable canon is (C)V(C), so each copy is
		an independently well-formed syllable
		(<Ref k="shiraishi2022" p="§4.1" />; <Ref k="nakagawa2024" p="41–42" />); consonant
		clusters at the juncture arise only when an assimilation rule applies (§§3–4 below),
		not from the copying itself.
	</p>
	<p>
		The copying preserves coda consonants: a CVC base yields a CVC reduplicant; a CV base
		yields a CV reduplicant. The coda shape of the copy is identical to the coda shape of
		the source form (see §5 on how coda alternation in the source propagates into the
		reduplicant). The table below shows canonical mappings; phonetic representations are
		supplied in §3 where the boundary is discussed.
	</p>
	<table>
		<thead>
			<tr>
				<th>base</th>
				<th>underlying RED ~ BASE</th>
				<th>surface</th>
				<th>meaning</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">ay</i></td>
				<td>/ay ~ ay/</td>
				<td>[ˈay.ʔay]</td>
				<td>'baby'</td>
				<td>
					Tamura (1998: 41–42), reported in
					<Ref k="shiraishi2022" p="§4.4" />
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">para</i></td>
				<td>/para ~ para/</td>
				<td>[paˈraparak-]</td>
				<td>'cry' (CVCV base)</td>
				<td>
					Tamura (1998: 41–42), reported in
					<Ref k="shiraishi2022" p="§4.4" />
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ket</i></td>
				<td>/ket ~ ket/</td>
				<td>[ˈketket-]</td>
				<td>(base in <i lang="ain-Latn">ketketcep</i>; §4.1)</td>
				<td>
					<Ref k="aynucorporadiscord" /> (antitwilight, 2025-11-03)
				</td>
			</tr>
		</tbody>
	</table>
	<p>
		Accent follows the general iambic rule (<Xr ch="pitch-accent-placement-rule" />): if
		the first syllable of the reduplicated complex is closed, it carries the primary accent;
		if open, the accent falls on the second syllable
		<Ref k="nakagawa2024" p="50" />. In <i lang="ain-Latn">ketketcep</i> the first
		syllable is the closed <i lang="ain-Latn">ket</i>, giving [ˈketketcep]. Lexicalized
		compounds with reduplicated elements follow the first-element priority rule governing
		all compounds (<Xr ch="accent-in-compounds-and-affixation" />;
		<Ref k="nakagawa2024" p="54" />).
	</p>
</S>

<S t="The reduplicant-base boundary: resyllabification blocking and glottal insertion" id="boundary">
	<p>
		A reduplicant and its base do not form a seamless concatenation. Across ordinary
		morpheme boundaries a coda consonant resyllabifies onto a following vowel-initial
		syllable: <i lang="ain-Latn">sik-o</i> → [ˈsi.ko],
		<i lang="ain-Latn">mat-ak</i> → [ˈma.tak]
		(<Ref k="kindaichi1936" p="9" />; <Ref k="shiraishi2022" p="§4.4" />). Two blocking
		conditions suspend this rule and trigger glottal insertion instead:
	</p>
	<ol>
		<li>
			<strong>Secondary accent on the following syllable.</strong> When the vowel of
			σ<sub>n+1</sub> carries secondary accent — as in
			<i lang="ain-Latn">paˈraparak-ʔan</i> 'cry' — the accent domain prevents
			resyllabification; [ʔ] is inserted at the juncture.
		</li>
		<li>
			<strong>The reduplicant-base boundary itself.</strong>
			<i lang="ain-Latn">ˈay-ʔay</i> 'baby' shows glottal insertion at the
			REDUP-BASE juncture independently of whether the base vowel happens to be
			accented.
		</li>
	</ol>
	<p>
		Both conditions are documented by Tamura (1998: 41–42), reported in
		<Ref k="shiraishi2022" p="§4.4" />.
	</p>
	<p>
		Rule statement: <strong>∅ → ʔ / V<sub>RED-final</sub> __ V<sub>BASE-initial</sub></strong>
		at the REDUP-BASE juncture (or when the following V carries secondary accent at any
		juncture); resyllabification is otherwise suspended.
	</p>
	<p>Derivation for <i lang="ain-Latn">ayˈay</i> 'baby':</p>
	<table>
		<thead>
			<tr>
				<th>level</th>
				<th>representation</th>
				<th>operation</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>underlying</td>
				<td>/ay/</td>
				<td>base</td>
			</tr>
			<tr>
				<td>reduplication</td>
				<td>/ˈay ~ ˈay/</td>
				<td>full copy; secondary accent assigned to RED</td>
			</tr>
			<tr>
				<td>resyllabification</td>
				<td>—</td>
				<td>blocked at REDUP-BASE juncture → [ʔ] inserted</td>
			</tr>
			<tr>
				<td>surface</td>
				<td>[ˈay.ʔay]</td>
				<td></td>
			</tr>
		</tbody>
	</table>
	<p>
		Productive glide insertion at person-prefix boundaries — e.g.,
		<i lang="ain-Latn">i=</i> + <i lang="ain-Latn">omante</i> →
		<i lang="ain-Latn">iyomante</i> — is a distinct operation in a different prosodic
		domain; it is morpho-syntactically conditioned and does not extend to the
		reduplicant-base boundary
		(<Ref k="shiraishi2022" p="§4.3" />; <Xr ch="glide-epenthesis-hiatus-resolution" />).
		The glottal option takes over at REDUP-BASE.
	</p>
</S>

<S t="Sandhi at the reduplicant-affix juncture" id="sandhi">
	<p>
		The blocking in §3 applies specifically at the <em>internal</em> REDUP-BASE boundary.
		The junction between the reduplicated complex and a <em>following affix</em> is an
		ordinary morpheme juncture: sandhi rules operate there as they do everywhere else.
	</p>

	<S t="t + s → c in reduplicated compounds" id="t-s-sandhi">
		<p>
			Progressive assimilation at an underlying /t/ + /s/ juncture yields [c] ([ʨ~ʦ]).
			Nakagawa documents the pattern at compound and historical suffix junctures:
			<i lang="ain-Latn">pet-sam</i> → <i lang="ain-Latn">petcam</i> 'riverbank',
			<i lang="ain-Latn">sinot-sa</i> → <i lang="ain-Latn">sinotca</i> 'improvised
			song' (<Ref k="nakagawa2024" p="37" />).
		</p>
		<p>
			The compound <i lang="ain-Latn">ketketcep</i> (a fish name) has been proposed as
			deriving from an underlying structure
			<i lang="ain-Latn">*ket~ket-se-pe</i>
			(<Ref k="aynucorporadiscord" /> antitwilight, 2025-11-03). Derivation:
		</p>
		<table>
			<thead>
				<tr>
					<th>stage</th>
					<th>form</th>
					<th>rule applied</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>underlying</td>
					<td><i lang="ain-Latn">*ket ~ ket - se - pe</i></td>
					<td>base <i lang="ain-Latn">ket</i>, reduplicated; suffix <i lang="ain-Latn">-se-pe</i></td>
				</tr>
				<tr>
					<td><strong>t + s → c</strong></td>
					<td><i lang="ain-Latn">*ket ~ ket - ce - pe</i></td>
					<td>/t/ of base-final copy + /s/ of suffix → [c]</td>
				</tr>
				<tr>
					<td>contraction (lexicalization)</td>
					<td><i lang="ain-Latn">ketketcep</i></td>
					<td>suffix-boundary reduction; surface string</td>
				</tr>
			</tbody>
		</table>
		<p>
			A parallel non-reduplicated case is <i lang="ain-Latn">nisatcawot</i> ~
			<i lang="ain-Latn">nisat-sawot</i> 'Venus / morning star', the same /t/ + /s/ →
			[c] at a compound boundary. The community analysis proposes that the rule applies
			only at historically underlying /t#/, not to /t/ that arose secondarily; this
			restriction has not been confirmed in a primary phonological source ‹speculative›
			(<Ref k="aynucorporadiscord" /> antitwilight, 2025-11-03).
		</p>
	</S>

	<S t="Palatalization (t + i → ci) at the boundary" id="palatalization">
		<p>
			The palatalization rule <strong>t → c / __ i</strong> applies without exception
			in Hokkaido Ainu: <i lang="ain-Latn">mat</i> + <i lang="ain-Latn">ikor</i> →
			<i lang="ain-Latn">macikor</i>, <i lang="ain-Latn">rekut-i</i> →
			<i lang="ain-Latn">rekuci</i>
			(<Ref k="nakagawa2024" p="36" />; <Ref k="shiraishi2022" p="§6.1" />). The rule
			operates through resyllabification — coda /t/ moves to the onset of the /i/
			syllable — so it shares the feeding mechanism that is blocked at REDUP-BASE (§3).
		</p>
		<table>
			<thead>
				<tr>
					<th>boundary type</th>
					<th>resyllabification</th>
					<th>t + i → ci applies?</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>stem-internal / regular morpheme boundary</td>
					<td>applies</td>
					<td>yes (<i lang="ain-Latn">mat+ikor → macikor</i>)</td>
				</tr>
				<tr>
					<td>REDUP-BASE</td>
					<td>blocked (§3)</td>
					<td>no — feeds on resyllabification</td>
				</tr>
				<tr>
					<td>reduplicated complex + suffix</td>
					<td>applies</td>
					<td>yes (ordinary morpheme junction)</td>
				</tr>
			</tbody>
		</table>
		<p>
			No attested /t/-final + /i/-initial reduplication pair has been identified in the
			sources read for this grammar; the blocking prediction follows from the interaction
			of the independently documented resyllabification block (§3) and the palatalization
			rule (<Ref k="shiraishi2022" p="§4.4, §6.1" />;
			<Ref k="nakagawa2024" p="36" />) ‹speculative›.
		</p>
	</S>

	<S t="r-sandhi at reduplicant codas" id="r-sandhi">
		<p>
			Coda /r/ is the dominant regressive-assimilation trigger across all morpheme
			boundaries (<Xr ch="coda-r-assimilation-sonorant-sandhi" />;
			<Xr ch="rhotic-r" />). In a reduplicated form with a /r/-final base, the coda /r/
			of the reduplicant remains in coda position (resyllabification is blocked at
			REDUP-BASE), and could in principle trigger r-sandhi against the onset of the
			following base copy. Nakagawa documents r-sandhi word-internally and across words
			(<Ref k="nakagawa2024" p="35–37" />), and Shiraishi establishes it as a purely
			phonological rule with no prosodic-domain restriction
			(<Ref k="shiraishi2022" p="§6.2" />). Whether r-sandhi applies at the REDUP-BASE
			juncture is not documented in the sources read here; corpus investigation is needed
			‹speculative›.
		</p>
		<p>
			The lexicalized compound <i lang="ain-Latn">attus</i> (elm-bark robe), deriving
			from an underlying <i lang="ain-Latn">at-rus</i> via r-sandhi (Saru intermediate
			<i lang="ain-Latn">ahrus</i>), is attested 24× in the corpus
			(<Ref k="aynucorporadiscord" /> nukopoli, 2024-12-26) ‹corpus-confirmed›. This
			involves compound-internal r-sandhi, not the REDUP-BASE boundary; it is treated
			in <Xr ch="citation-vs-combining-stem-shapes" />.
		</p>
	</S>

	<S t="Summary: sandhi rule interactions at reduplication boundaries" id="sandhi-summary">
		<table>
			<thead>
				<tr>
					<th>rule</th>
					<th>formal statement</th>
					<th>at REDUP-BASE?</th>
					<th>at REDUP-suffix?</th>
					<th>source</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Resyllabification</td>
					<td>C → onset / V __ # V</td>
					<td>blocked</td>
					<td>applies</td>
					<td>
						<Ref k="shiraishi2022" p="§4.4" />;
						<Ref k="kindaichi1936" p="9" />
					</td>
				</tr>
				<tr>
					<td>Glottal insertion</td>
					<td>∅ → ʔ / V __ V (at blocked boundary)</td>
					<td>applies (replaces resyllab.)</td>
					<td>conditional on accent</td>
					<td>
						Tamura (1998: 41–42) rep. in
						<Ref k="shiraishi2022" p="§4.4" />
					</td>
				</tr>
				<tr>
					<td>Palatalization</td>
					<td>t → c / __ i (via resyllab.)</td>
					<td>blocked (feeds on resyllab.)</td>
					<td>applies</td>
					<td>
						<Ref k="nakagawa2024" p="36" />;
						<Ref k="shiraishi2022" p="§6.1" />
					</td>
				</tr>
				<tr>
					<td>t + s assimilation</td>
					<td>t → c / __ s (at /t#/ junctures)</td>
					<td>n/a</td>
					<td>applies ‹speculative›</td>
					<td>
						<Ref k="nakagawa2024" p="37" />;
						<Ref k="aynucorporadiscord" /> (antitwilight, 2025-11-03)
					</td>
				</tr>
				<tr>
					<td>r-sandhi</td>
					<td>r assimilates to following C</td>
					<td>unknown</td>
					<td>applies</td>
					<td>
						<Ref k="nakagawa2024" p="35–37" />;
						<Ref k="shiraishi2022" p="§6.1–6.2" />
					</td>
				</tr>
				<tr>
					<td>n-sandhi</td>
					<td>n → y / __ &#123;s y w&#125;</td>
					<td>unknown</td>
					<td>applies</td>
					<td>
						<Ref k="nakagawa2024" p="36" />;
						<Ref k="shiraishi2022" p="§6.1" />
					</td>
				</tr>
				<tr>
					<td>Glide insertion after i=/u=</td>
					<td>i → y, u → w / [prefix] __</td>
					<td>does not apply (different domain)</td>
					<td>n/a</td>
					<td><Ref k="shiraishi2022" p="§4.3" /></td>
				</tr>
			</tbody>
		</table>
	</S>
</S>

<S t="Coda alternation in paired reduplicants: rikin and rikip" id="coda-alternation">
	<p>
		Because the reduplicant copies the phonological shape of the source form, any
		alternation visible in the base propagates into the reduplicant. A community
		observation on the verb <A w="rikin" gl="go up, ascend" /> illustrates this point.
	</p>
	<p>
		The verb 'go up / ascend' appears in two forms: <i lang="ain-Latn">rikin</i>, with
		final nasal coda /n/ (attested in corpus; see example below), and
		<i lang="ain-Latn">rikip</i>, with final stop coda /p/. In reduplication, either form
		may serve as the base that is copied, yielding alternant shapes; the alternation is
		summarized as <i lang="ain-Latn">rikin~rikip</i>
		(<Ref k="aynucorporadiscord" /> nukopoli, 2026-04-27) ‹speculative›.
	</p>
	<p>
		The causative suffix <A w="-ka" gl="causative" /> attaches to the nasal-coda form
		only: <i lang="ain-Latn">rikinka</i> is attested; *<i lang="ain-Latn">rikipka</i>
		is not found (<Ref k="aynucorporadiscord" /> nukopoli, 2026-04-27) ‹speculative›.
		This asymmetry indicates that the nasal-coda form is the morphological base for
		further derivation, while the stop-coda form is a secondary shape.
	</p>
	<p>
		The stop-coda form <i lang="ain-Latn">rikip</i> is consistent with the nominalizer
		allomorphy: the nominalizer <A w="-p/-pe" gl="nominalizer" /> surfaces as
		<i lang="ain-Latn">-p</i> after a vowel-final stem
		(<Ref k="shiraishi2022" p="§3" />; <Ref k="nakagawa2024" p="29" />). If the root
		is vowel-final <i lang="ain-Latn">riki-</i>, then <i lang="ain-Latn">riki-p</i>
		= root + nominalizer. The reduplicant then mirrors whichever form of the verb is
		being used as the base — nominalized or plain — without neutralizing or
		canonicalizing it. The coda alternation in the reduplicant is thus an instance of
		morphological conditioning of the base shape feeding into the copying operation.
		For the nominalizer system itself, see <Xr ch="nominalization-p-pe" /> and
		<Xr ch="affiliative-suffix-morphophonology" />.
	</p>

	<Ex
		m="tane rikin wa isam pe okake ta"
		g="now ascend CONJ be.gone NMLZ after LOC"
		tr="Now, after (the god) had ascended and vanished,"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 7 [aa-irc/005#251]"
		note="rikin: the nasal-coda form of the ascent verb in non-reduplicated context. The corpus attestation confirms the form cited in the rikin~rikip alternation (§5); wa isam adds completive force."
	/>
</S>

<S t="Person-prefix attachment to reduplicated stems" id="person-prefix">
	<p>
		Personal prefixes <i lang="ain-Latn">ku=</i>, <i lang="ain-Latn">e=</i>, and
		<i lang="ain-Latn">ci=</i> attach to the full reduplicated complex as if it were a
		single prosodic word. The iambic accent-placement rule — first closed syllable gets
		the nucleus; if the first is open, the second does — applies to the
		[prefix + REDUP + BASE] string as a unit
		(<Ref k="nakagawa2024" p="50–54" />;
		<Xr ch="pitch-accent-placement-rule" />; <Xr ch="accent-in-compounds-and-affixation" />).
	</p>
	<p>
		The vowel-deletion rule of <i lang="ain-Latn">ku=</i> and <i lang="ain-Latn">ci=</i>
		— prefix vowel deletes before stem-initial /a e u o/, but not before /i/
		(<Ref k="nakagawa2024" p="52" />;
		<Ref k="aynucorporadiscord" /> nukopoli, 2024-11-28) ‹corpus-confirmed› — applies at
		the prefix-reduplicant junction exactly as it does before any vowel-initial stem. If
		the first syllable of the reduplicant is vowel-initial, the prefix vowel deletes; if
		consonant-initial, it does not. The full morphophonology is treated in
		<Xr ch="personal-affix-sandhi-connected-speech-reduction" /> and
		<Xr ch="first-second-person-singular-affixes" />.
	</p>
</S>

<S t="Corpus illustration" id="corpus">
	<Ex
		m="caricari wa isam ru-we ne kuni a=ramu kor"
		g="be.scattered CONJ be.gone track-POSS COP COMP 4.A=think while"
		tr="(while she was) thinking that (things) had been scattered and vanished,"
		cite="ilcaa1976"
		dial="SAR"
		place="Kawakami Matsuko, uwepeker 9 [aa-irc/009#127]"
		note="caricari: full CVC reduplication of cari 'be scattered'; the reduplicated form expresses distributive or pluractional scattering; wa isam adds completive force with the sense of disappearance. The syllable structure [ˈca.ri.ca.ri] follows the iambic rule applied to the reduplicated string."
	/>
	<p>
		No sandhi applies at the internal REDUP-BASE boundary in this example: the last syllable
		of the reduplicant (<i lang="ain-Latn">ri</i>) is open, so there is no coda consonant to
		trigger the rules in §4. The following particle <i lang="ain-Latn">wa</i> attaches at the
		right edge of the whole reduplicated form; the only potential sandhi there is the
		progressive nasal-place assimilation documented for this particle
		(<Ref k="nakagawa2024" p="37" />).
	</p>
</S>

<S t="Dialectal variation" id="dialect">
	<p>
		The regressive cluster assimilations of eastern Hokkaido dialects —
		<strong>tk → kk</strong>, <strong>pt → tt</strong>, <strong>rs → ss</strong>
		in Bihoro and related varieties (<Ref k="nakagawafukazawa2022" p="§3.3" />) — are
		treated by Nakagawa as word-specific historical consolidations rather than active
		synchronic rules (<Ref k="nakagawa2024" p="36" />;
		<Ref k="aynucorporadiscord" /> antitwilight, 2024-11-17). No specific reduplicated
		compound showing these eastern assimilations is attested in the sources consulted here
		‹corpus-suggested›. The broader inventory of dialect-specific morphophonological
		isoglosses is treated in <Xr ch="hokkaido-phonological-microvariation" />.
	</p>
</S>
