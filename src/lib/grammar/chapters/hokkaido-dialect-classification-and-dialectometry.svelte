<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The Hokkaido dialect landscape" id="overview">
	<p>
		The Ainu communities documented across Hokkaido in the late nineteenth and twentieth
		centuries show both continuous gradient variation and a set of discrete isoglosses whose
		distributions do not coincide. Three research traditions have engaged this situation on
		different terms: pre-war geography-based groupings; post-war quantitative lexicostatistics
		producing numerical similarity matrices and dendrograms; and more recent statistical
		reanalyses of those same matrices with spectral clustering and correspondence analysis,
		which contest the canonical groupings at several points.
	</p>
	<p>
		This chapter traces the classification debate and the phonological and morphological
		isoglosses that underlie it. Phonological microvariation below the isogloss level —
		consonantal allophony, vowel reduction patterns, and prosodic sandhi — is treated in
		<Xr ch="hokkaido-phonological-microvariation" />; the pitch-accent placement rules in
		<Xr ch="pitch-accent-placement-rule" />; the consonant inventory in
		<Xr ch="consonant-inventory" />. Word-geographic distributions of individual lexical
		items and the dialect dictionary materials belong to
		<Xr ch="hokkaido-lexical-dialectology-and-the-dialect-atlas" />. The proportional
		weighting of each variety in the aligned corpus used throughout this grammar is specified
		in <Xr ch="dialect-sample-and-corpus-method" />.
	</p>
</S>

<S t="The founding lexicostatistic study" id="hattori-chiri">
	<p>
		<Ref k="hattorichiri1960" /> applied a 200-item Swadesh-based word list to
		<strong>nineteen localities</strong>: thirteen Hokkaido sites — Yakumo, Oshamambe,
		Horobetsu, Biratori, Nukibetsu, Niikappu, Samani, Obihiro, Kushiro, Bihoro, Asahikawa,
		Nayoro, and Sōya — together with six Sakhalin sites and Torii's 1903 Kuril materials.
		Cognacy was scored ternarily: matched, unmatched, or uncertain (uncertain = 0.5), and
		lexical similarity was then the percentage of shared items. A practical constraint limits
		the analysis: only 91 of the 200 items actually entered the count, since the remainder
		showed no cross-dialect stem difference and were uninformative for comparison
		<Ref k="nakagawafukazawa2022" p="§2.1–2.3" />.
	</p>
	<p>
		Four conclusions emerged from the Hattori–Chiri matrix
		<Ref k="nakagawafukazawa2022" p="§2.1" />. The gap between Hokkaido and Sakhalin
		varieties constituted the sharpest division in the data. Within Hokkaido, Sōya was the
		variety closest to Sakhalin. Internal Hokkaido varieties clustered into groupings:
		&#123;Yakumo, Oshamambe&#125;; &#123;Nukibetsu, Biratori, Niikappu&#125;; and &#123;Obihiro, Kushiro, Bihoro&#125;.
		An east–west gap opened at the <strong>Shizunai–Niikappu line</strong> — the same
		boundary that had demarcated the eastern
		<i lang="ain-Latn">Menas un kur</i> 'people of the east' from the western
		<i lang="ain-Latn">Sum un kur</i> 'people of the west' during Shakushain's War in 1669
		<Ref k="nakagawafukazawa2022" p="§2.1" />.
	</p>
</S>

<S t="Asai 1974 and the three-way Major Division" id="asai">
	<p>
		<Ref k="asai1974" /> recalculated the Hattori–Chiri data by cluster analysis, adding
		Chitose, and proposed the grouping known as the <strong>Major Division</strong>. The
		first split placed &#123;Hokkaido + North Kuril&#125; against &#123;Sakhalin&#125;; Hokkaido itself divided
		into four zones: North (Sōya), East (Obihiro / Kushiro / Bihoro / Asahikawa / Nayoro),
		Central-South (Yakumo / Oshamambe / Horobetsu / Biratori / Nukibetsu / Niikappu), and
		a marginal position for Samani <Ref k="nakagawafukazawa2022" p="§2.2" />. The North
		Kuril group appeared closer to the NE-Hokkaido cluster than to the Central-South cluster.
	</p>
	<p>
		Several features of the dataset limit what the cluster analysis can show
		<Ref k="nakagawafukazawa2022" p="§2.4" />. The Sea-of-Japan and Sea-of-Okhotsk coasts
		have almost no post-Meiji speech records, and several "dialect" rows represent a single
		consultant's idiolect rather than a community variety. The site matrix is therefore
		geographically skewed and thin at the margins ‹contested›.
	</p>
</S>

<S t="Tamura's Northeast–Southwest bipartition" id="tamura">
	<p>
		The most widely cited informal classification, <Ref k="tamura1988" />, moves beyond
		lexicostatistics to incorporate morphological and particle-level indicators. Tamura
		divides Hokkaido into two broad zones, with Shizunai on the boundary line:
	</p>
	<ul>
		<li>
			<strong>Northeast</strong>: North (Sōya), Central (Teshio, Ishikari), East (Tokachi,
			Kitami, Kushiro, Eastern Hidaka);
		</li>
		<li>
			<strong>Southwest</strong>: South (Western Hidaka, Eastern Iburi), West (Shiribeshi).
		</li>
	</ul>
	<p>
		The NE/SW axis also tracks the distribution of culture-hero names in oral literature —
		<i lang="ain-Latn">Okikurmi</i> in the southwest,
		<i lang="ain-Latn">Samayekur</i> in the northeast — and, more broadly, the genre
		designations that differ between the two halves
		<Ref k="nakagawafukazawa2022" p="§2.3, §6" />. Whether the literary distribution
		reflects linguistic divergence, independent areal diffusion, or some combination is
		not settled by the available sources ‹speculative›.
	</p>
</S>

<S t="Dialectometric reanalyses" id="dialectometry">
	<S t="Ono 2020: spectral clustering" id="ono2020-analysis">
		<p>
			<Ref k="ono2020" /> reanalyses Asai's cognacy matrix (110 items over 21 lects) with
			Spectral Clustering (MinmaxCut / Mcut algorithm). The methodological argument is that
			Asai's matrix is a <em>commutative monoid</em>: only addition and comparison of
			cognacy percentages are linguistically meaningful; converting them to "dissimilarity"
			by subtraction destroys information. Ono further shows that both of Asai's clustering
			methods (large-linkage, small-linkage) lack <em>identifiability</em> — they produce
			identical dendrograms for very different matrices because they ignore mid-range values.
			Spectral Clustering does not share this limitation.
		</p>
		<p>
			The result is two groups, not three: <strong>Hokkaido (including North Kuril)</strong>
			versus <strong>Sakhalin</strong>. The three-way Major Division is not statistically
			supported ‹contested›. Within the Hokkaido cluster, North Kuril patterns most strongly
			with the northeast Hokkaido group — Samani, Obihiro, Kushiro, Bihoro, Sōya — while
			southwest Hokkaido forms a second tier. Ono notes this converges with earlier work
			placing North Kuril close to northeast Hokkaido, while a separate observation by Satō
			and Bugaeva (via <Ref k="ono2020" p="§4" />) clusters 19th-century Kuril items with
			the Saru/Chitose zone — a tension the 2020 study does not resolve ‹contested›. Ono
			also cautions that Asai's cluster analysis may never have been intended to
			<em>establish</em> a canonical classification; its standard status in subsequent
			literature may exceed its original scope.
		</p>
	</S>

	<S t="Fukazawa and Ono 2024: boundary dialects" id="fukazawa-ono-2024">
		<p>
			<Ref k="fukazawaono2024" /> takes a further methodological step: rather than
			assigning dialects to groups — which forces a decision about where "boundary
			dialects" belong — the framework selects a <em>reference dialect</em>, computes
			similarity from all other lects to that centre, and visualises each variety's
			"central-dialect-likeness" via <strong>correspondence analysis</strong> (対応分析)
			and <strong>projection pursuit</strong> (射影追跡法). Applied to Ainu with Sōya (the
			Sakhalin-facing margin) and Asahikawa (the NE–SW junction) as reference centres, the
			approach reframes these "boundary dialects" as analytically primary objects rather
			than residue from a grouping procedure. The published abstract reports that the
			isogloss topology around Sōya and Asahikawa is more complex than any single
			bipartition captures; the full empirical dataset has not been assessed here
			‹speculative›.
		</p>
	</S>

	<S t="Kasuga 2026: 75-locality quantitative classification" id="kasuga2026-analysis">
		<p>
			<Ref k="kasuga2026" /> extends the quantitative tradition to <strong>75 localities</strong>,
			substantially broadening the geographic coverage of the Hattori–Chiri / Asai matrix. The
			study — published in Japanese — has not been assessed in full for this chapter; its
			specific sub-groupings and methodological choices remain to be synthesised ‹speculative›.
		</p>
	</S>
</S>

<S t="Classification traditions compared" id="traditions-compared">
	<table>
		<thead>
			<tr>
				<th>Study</th>
				<th>Method</th>
				<th>Primary split</th>
				<th>Internal Hokkaido grouping</th>
				<th>Assessment</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><Ref k="hattorichiri1960" /></td>
				<td>Lexicostatistics (200-item list, 19 sites)</td>
				<td>HA vs SA (large gap)</td>
				<td>SW cluster; NE cluster; Shizunai boundary</td>
				<td>Foundational data; only 91/200 items informative; site coverage skewed</td>
			</tr>
			<tr>
				<td><Ref k="asai1974" /></td>
				<td>Cluster analysis (Hattori–Chiri + Chitose)</td>
				<td>&#123;HA + KA&#125; vs SA</td>
				<td>North (Sōya) / East / Central-South / Samani (marginal)</td>
				<td>‹contested›: statistical method questioned by Ono 2020</td>
			</tr>
			<tr>
				<td><Ref k="tamura1988" /></td>
				<td>Typological survey (morphology + particles)</td>
				<td>NE vs SW within HA</td>
				<td>NE &#123;Sōya; Ishikari; Tokachi/Kitami/Kushiro/E.Hidaka&#125; vs SW &#123;W.Hidaka/E.Iburi; Shiribeshi&#125;</td>
				<td>Widely used descriptive baseline; incorporates morphological indicators absent from lexicostatistic studies</td>
			</tr>
			<tr>
				<td><Ref k="ono2020" /></td>
				<td>Spectral clustering (Asai 1974 matrix)</td>
				<td>HA (+KA) vs SA</td>
				<td>NE-HA + N.Kuril cluster; SW-HA second tier</td>
				<td>‹contested›: Major Division not supported; N.Kuril affiliation within HA remains unresolved</td>
			</tr>
			<tr>
				<td><Ref k="fukazawaono2024" /></td>
				<td>Correspondence analysis + projection pursuit</td>
				<td>Sōya and Asahikawa as reference centres</td>
				<td>In progress; boundary-dialect topology primary</td>
				<td>‹speculative›: boundary-dialect reframing; full empirical dataset not yet assessed</td>
			</tr>
			<tr>
				<td><Ref k="kasuga2026" /></td>
				<td>Quantitative classification (75 localities)</td>
				<td>Not yet assessed</td>
				<td>75 sites; substantially expands geographic coverage of prior matrices</td>
				<td>‹speculative›: sub-groupings and methodology not yet synthesised here</td>
			</tr>
		</tbody>
	</table>
</S>

<S t="Phonological isoglosses" id="phonological-isoglosses">
	<p>
		The isogloss data in this section draw on
		<Ref k="nakagawafukazawa2022" p="§3, Tables 3–15" />, whose underlying documentation
		comes from <Ref k="hattori1964" /> and <Ref k="hattorichiri1960" /> (both reported
		sources). The pitch-accent placement rules are developed in
		<Xr ch="pitch-accent-placement-rule" />.
	</p>

	<S t="Pitch-accent types" id="accent-types">
		<p>
			Three accent types are attested across Hokkaido
			<Ref k="nakagawafukazawa2022" p="§3.1" />:
		</p>
		<ul>
			<li>
				<strong>Standard</strong> (Saru, Chitose, Horobetsu, Asahikawa, Nayoro, Obihiro,
				Sōya): two placement rules — a closed first syllable takes high pitch on σ1; an
				open first syllable takes high pitch on σ2.
			</li>
			<li>
				<strong>Irregular</strong> (Yakumo, Oshamambe): when both σ1 and σ2 are open,
				high pitch falls on σ3. Saru <i lang="ain-Latn">ipérekut</i> corresponds to
				Yakumo <i lang="ain-Latn">iperékut</i>; Saru
				<i lang="ain-Latn">hopúni</i> to Yakumo <i lang="ain-Latn">hopuní</i>.
			</li>
			<li>
				<strong>Unaccented</strong> (Shizunai, Urakawa, Samani, Bihoro, Kushiro,
				Shiranuka): pitch is non-distinctive. Samani tends toward final-syllable high;
				Shizunai shows no syllable-position relation to pitch at all. The origin of the
				unaccented type in Hokkaido differs from the Sakhalin unaccented system, where
				the driver is loss of vowel length rather than loss of pitch (see
				<Xr ch="final-h-history-and-sakhalin-length-reflex" />).
			</li>
		</ul>
	</S>

	<S t="Word-initial h-elision" id="h-elision">
		<p>
			In the eastern standard-accent dialects, initial
			<i lang="ain-Latn">h</i> is elided when the pitch accent falls on the second syllable
			<Ref k="nakagawafukazawa2022" p="§3.2, Table 4" />: Saru/Horobetsu
			<i lang="ain-Latn">huráye</i> 'wash' →
			<i lang="ain-Latn">uráye</i> in Asahikawa/Nayoro; Saru
			<i lang="ain-Latn">hokú</i> 'husband' → <i lang="ain-Latn">okú</i>;
			<i lang="ain-Latn">hekáci</i> 'child' → <i lang="ain-Latn">ekáci</i>. The
			conditioning is accentual and areal: Horobetsu, Biratori, Nukibetsu, Niikappu,
			Samani, and Sōya retain initial <i lang="ain-Latn">h</i>, while Obihiro, Kushiro,
			Bihoro, Asahikawa, and Nayoro do not.
		</p>
	</S>

	<S t="Regressive consonant assimilation" id="consonant-assimilation">
		<p>
			The eastern dialects, most extensively Bihoro, show regressive consonant assimilation
			at morpheme and compound boundaries
			<Ref k="nakagawafukazawa2022" p="§3.3, Table 5" />:
			<i lang="ain-Latn">hotke</i> 'lie' →
			<i lang="ain-Latn">hokke</i> (Obihiro, Kushiro, Bihoro);
			<i lang="ain-Latn">sirsesek</i> 'hot' →
			<i lang="ain-Latn">sissesek</i> (Bihoro, Asahikawa, Nayoro);
			<i lang="ain-Latn">tupte</i> → <i lang="ain-Latn">tutte</i> (Bihoro);
			<i lang="ain-Latn">upsor</i> → <i lang="ain-Latn">ussor</i> 'bosom'. The active
			patterns include <i lang="ain-Latn">tk → kk</i>,
			<i lang="ain-Latn">pt → tt</i>,
			<i lang="ain-Latn">rs → ss</i>,
			<i lang="ain-Latn">ps → ss</i>,
			<i lang="ain-Latn">kp → pp</i>, and
			<i lang="ain-Latn">kt → tt</i>.
			<Ref k="nakagawafukazawa2022" /> treats these as historical word-form changes rather
			than productive synchronic sandhi rules. A community reading, noting that Bihoro's
			patterns are non-conditional and lexeme-specific, proposes them as evidence for a
			distinct underlying Proto-Ainu consonant series
			<Ref k="aynucorporadiscord" /> (antitwilight, November 2024); the proposal goes
			beyond the read sources and awaits verification ‹speculative›.
		</p>
	</S>

	<S t="The par/car pseudo-correspondence" id="par-car">
		<p>
			A small set of words in the mouth-region semantic field shows a geographic alternation:
			<i lang="ain-Latn">par</i> (southwest) : <i lang="ain-Latn">car</i> (northeast and
			Kuril) for 'mouth'; <i lang="ain-Latn">papus / patoy</i> :
			<i lang="ain-Latn">capus / catoy</i> for 'lip'. Nayoro and Asahikawa attest both
			forms. The alternation affects the labial–alveolar onset position within this
			semantic field only; there is no comparable <i lang="ain-Latn">p-/c-</i> alternation
			for <i lang="ain-Latn">e-, i-, o-, u-</i>initial words, which is why
			<Ref k="nakagawafukazawa2022" p="§3.4, §5.1" /> call it a
			<em>pseudo-correspondence</em> rather than a sound correspondence in the comparative
			linguistic sense.
		</p>
		<p>
			Place-name evidence from <Ref k="kirikae1994" /> supplies a geographic profile: in
			the Ishikari watershed, <i lang="ain-Latn">par</i>-type toponyms predominate (11 : 0
			against <i lang="ain-Latn">car</i>-type), while Nemuro–Kushiro coast place names are
			exclusively <i lang="ain-Latn">car</i>-type (13 occurrences). Community observation
			independently noted that place names favour <i lang="ain-Latn">car</i> broadly
			across the northeast and the Kuril data
			<Ref k="aynucorporadiscord" /> (nishiyasu, May 2026), consistent with
			<Ref k="kirikae1994" /> ‹corpus-suggested›.
		</p>
		<p>
			Four analyses of the alternation appear in the literature, and they are genuinely
			incompatible ‹contested›:
		</p>
		<ul>
			<li>
				<strong>Diachronic merger</strong> (Kindaichi, Chiri, Naert 1958, via
				<Ref k="nakagawafukazawa2022" p="§3.4" />): either
				<i lang="ain-Latn">pa- &gt; ca-</i> historically, or both trace to a single
				proto-form <i lang="ain-Latn">*Xa-</i>.
			</li>
			<li>
				<strong>Two lexical items from the start</strong> (Kirikae 1994, via
				<Ref k="nakagawafukazawa2022" p="§3.4" />): Proto-Ainu already had distinct
				<i lang="ain-Latn">p-</i> and <i lang="ain-Latn">c-</i> 'mouth' words, later
				sorted geographically.
			</li>
			<li>
				<strong><i lang="ain-Latn">ca-</i> as older</strong> (Nakagawa 1996, via
				<Ref k="nakagawafukazawa2022" p="§3.4" />):
				<i lang="ain-Latn">ca-</i> is attested inside
				<i lang="ain-Latn">par</i>-region place names (e.g.
				<i lang="ain-Latn">sanca or ta</i>), suggesting it was the earlier form in that
				area too.
			</li>
			<li>
				<strong>Separate morphemes ab initio</strong> (Fukazawa 2014/2017, via
				<Ref k="nakagawafukazawa2022" p="§3.4" />):
				<i lang="ain-Latn">ca-</i> and <i lang="ain-Latn">pa-</i> are independent
				morphemes throughout their full distribution —
				<i lang="ain-Latn">pa-</i> also means 'head'; irreducible lexical pairs exist
				(<i lang="ain-Latn">can : pan</i> 'thin',
				<i lang="ain-Latn">cas : pas</i> 'run').
			</li>
		</ul>
		<p>
			<Ref k="alonso2022" p="§2.2.6" /> adds a reconstruction perspective: the split
			reflects a palatalized series in Proto-Ainu, with
			<i lang="ain-Latn">*pʸaɾ</i> as the reconstructed form and
			<i lang="ain-Latn">*pʸ &gt; ca-</i> in one regional stream,
			<i lang="ain-Latn">*p &gt; pa-</i> in another. This account integrates the
			two-morpheme view with the palatalized-series hypothesis (see
			<Xr ch="proto-ainu-segmental-reconstruction" />), but Alonso himself flags the full
			palatalized series as typologically motivated rather than philologically forced
			‹speculative›.
		</p>
	</S>

	<S t="Further phonological alternations" id="other-phonological">
		<p>
			Additional phonological isoglosses documented by
			<Ref k="nakagawafukazawa2022" p="§3.5–3.8, Tables 7–17" /> include:
		</p>
		<ul>
			<li>
				<strong><i lang="ain-Latn">-iw : -uy</i> metathesis</strong> — Bihoro and
				Kushiro: <i lang="ain-Latn">siwnin</i> → <i lang="ain-Latn">suynin</i> 'green';
				<i lang="ain-Latn">ciw</i> → <i lang="ain-Latn">cuy</i> 'stab';
				<i lang="ain-Latn">nociw</i> → <i lang="ain-Latn">nocuy</i> 'star' (Kushiro);
				<i lang="ain-Latn">riwka</i> → <i lang="ain-Latn">ruyka</i> 'bridge'.
			</li>
			<li>
				<strong>Vowel alternations</strong> — <i lang="ain-Latn">u:o</i> (Sōya
				<i lang="ain-Latn">opas</i> : standard <i lang="ain-Latn">upas</i> 'snow');
				<i lang="ain-Latn">o:e</i> (Yakumo <i lang="ain-Latn">etop</i> :
				<i lang="ain-Latn">otop</i> 'hair');
				<i lang="ain-Latn">V(e,u):i</i> (Samani / eastern
				<i lang="ain-Latn">sitá</i> : <i lang="ain-Latn">setá</i> 'dog').
			</li>
			<li>
				<strong>Consonant alternations</strong> — <i lang="ain-Latn">y:w</i> (Yakumo
				<i lang="ain-Latn">puwar, nuwe</i> vs standard
				<i lang="ain-Latn">puyar, nuye</i>); <i lang="ain-Latn">n:m</i>
				(<i lang="ain-Latn">nimak : mimak</i> 'tooth' — Yakumo, Nukibetsu, and Niikappu
				use <i lang="ain-Latn">mimak</i>; Sōya
				<i lang="ain-Latn">ónke</i> : <i lang="ain-Latn">ómke</i> 'cough').
			</li>
			<li>
				<strong><i lang="ain-Latn">-y</i> elision and extension</strong> — Saru/Chitose:
				plural existential <i lang="ain-Latn">okay</i> →
				<i lang="ain-Latn">oka</i>, extended to the pronoun
				<i lang="ain-Latn">ciokay</i> → <i lang="ain-Latn">coka</i>. Eastern dialects
				(Obihiro, Kushiro, Bihoro) show the inverse: particles
				<i lang="ain-Latn">ka</i> and <i lang="ain-Latn">korka</i> acquire
				<i lang="ain-Latn">-kay</i> extensions
				<Ref k="nakagawafukazawa2022" p="§3.7, Table 17" />. Community observation
				confirms <i lang="ain-Latn">ka → kay</i> as a Kushiro-diagnostic marker
				<Ref k="aynucorporadiscord" /> (thegodofneet, February 2026) ‹corpus-suggested›.
			</li>
		</ul>

		<table>
			<caption>Selected phonological isoglosses by variety group</caption>
			<thead>
				<tr>
					<th>Feature</th>
					<th>Yakumo / Oshamambe</th>
					<th>Horobetsu / Biratori</th>
					<th>Saru / Chitose</th>
					<th>Shizunai / Samani</th>
					<th>Tokachi / Ishikari</th>
					<th>Asahikawa / Nayoro</th>
					<th>Bihoro / Kushiro</th>
					<th>Sōya</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Accent type</td>
					<td>irregular (σ3)</td>
					<td>standard</td>
					<td>standard</td>
					<td>unaccented</td>
					<td>standard</td>
					<td>standard</td>
					<td>unaccented (Bih/Kus); Obihiro standard</td>
					<td>standard</td>
				</tr>
				<tr>
					<td>Initial <i lang="ain-Latn">h-</i></td>
					<td>retained</td>
					<td>retained</td>
					<td>retained</td>
					<td>retained (Sam)</td>
					<td>retained</td>
					<td>elided (σ2-accent)</td>
					<td>elided</td>
					<td>retained</td>
				</tr>
				<tr>
					<td>Consonant assimilation</td>
					<td>—</td>
					<td>limited</td>
					<td>limited</td>
					<td>—</td>
					<td>—</td>
					<td>partial</td>
					<td>strong (Bih)</td>
					<td>partial</td>
				</tr>
				<tr>
					<td>'mouth' (<i lang="ain-Latn">par/car</i>)</td>
					<td><i lang="ain-Latn">par</i></td>
					<td><i lang="ain-Latn">par</i></td>
					<td><i lang="ain-Latn">par</i></td>
					<td>boundary</td>
					<td><i lang="ain-Latn">par</i> (Ish)</td>
					<td>both / <i lang="ain-Latn">car</i> place names</td>
					<td><i lang="ain-Latn">car</i></td>
					<td>both</td>
				</tr>
			</tbody>
		</table>
		<p>
			No phonological isogloss replicates the NE/SW bipartition exactly; each cuts the map
			at a slightly different line, which is the fundamental reason that
			"bundle of isoglosses" descriptions are more accurate than a single dividing line.
		</p>
	</S>
</S>

<S t="Morphological isoglosses" id="morphological-isoglosses">
	<S t="Person-marking type" id="person-marking-type">
		<p>
			The sharpest morphological isogloss separates <strong>Saru and Chitose</strong> from
			every other Hokkaido variety. In Saru and Chitose, transitive-verb person marking is
			carried entirely by prefixes; all other Hokkaido dialects use
			<strong>circumfixes</strong> — an object prefix before the stem and a subject suffix
			after it <Ref k="nakagawafukazawa2022" p="§4.1" />. The 'I give to you' cell
			illustrates the contrast: Saru/Chitose
			<i lang="ain-Latn">eci=kore</i> (prefix only) versus Horobetsu
			<i lang="ain-Latn">e=kore=as</i> and Ishikari
			<i lang="ain-Latn">e=kore=an</i> (circumfix in both).
		</p>

		<Ex
			m="eci=kore"
			g="1SG.A>2SG.O=give"
			tr="I give it to you."
			constructed
			dial="SAR"
			note="Saru-Chitose prefix-only transitive person marking: the portmanteau eci= is the sole marker for all first-person-A–second-person-O combinations. Horobetsu uses the circumfix e=kore=as; Ishikari e=kore=an. After Nakagawa & Fukazawa (2022: §4.1)."
		/>

		<p>
			The implication is that Horobetsu patterns morphologically with the geographically
			distant Ishikari and Tokachi varieties, not with the adjacent Saru region
			<Ref k="nakagawafukazawa2022" p="§4.1" /> ‹contested›. The basic-vocabulary
			lexicostatistic matrix does not capture this: Hattori–Chiri's 200-item list excluded
			grammatical words and inflectional paradigms, so the morphological and lexical
			isogloss pictures diverge at this point. Horobetsu is lexically Central-South but
			morphologically northeast. The full person-marking paradigm and the architectural
			implications are treated in <Xr ch="person-marking-architecture" />.
		</p>
	</S>

	<S t="Plural marking" id="plural-marking">
		<p>
			The verbal plural morpheme shows a three-way geographic split
			<Ref k="nakagawafukazawa2022" p="§4.2" />:
		</p>
		<ul>
			<li>
				<strong>Sakhalin</strong>:
				<i lang="ain-Latn">(a)hci</i> / <i lang="ain-Latn">hcin</i> (the ‹SA› form; see
				<Xr ch="sakhalin-and-kuril-ainu-contrast" />);
			</li>
			<li>
				<strong>Shizunai, Horobetsu, Shiranuka</strong>:
				<i lang="ain-Latn">ci</i>;
			</li>
			<li>
				<strong>Saru, Chitose, Ishikari</strong>:
				<i lang="ain-Latn">pa</i>.
			</li>
		</ul>
		<p>
			The historical direction is recoverable:
			<i lang="ain-Latn">ci</i> is the older Hokkaido form, cognate with Sakhalin
			<i lang="ain-Latn">(a)hci</i>, and <i lang="ain-Latn">pa</i> is an innovation that
			spread within the Saru–Ishikari corridor, displacing
			<i lang="ain-Latn">ci</i> there
			<Ref k="nakagawafukazawa2022" p="§4.2" />. The verbal number system that houses
			these morphemes and their interaction with the
			<Xr ch="concept-form-affiliative-form">possessed form</Xr> paradigm are treated in
			<Xr ch="person-marking-architecture" />.
		</p>
	</S>

	<S t="Particles and grammatical words" id="particles">
		<p>
			Several grammatical morphemes distribute along isoglosses that match neither the
			NE/SW bipartition nor the lexicostatistic clusters, illustrating how the different
			layers of dialectal organisation fail to converge
			<Ref k="nakagawafukazawa2022" p="§4.3, Tables 21–24" />.
		</p>
		<p>
			The <strong>allative particle</strong> ('toward') takes four attested forms:
		</p>
		<ul>
			<li>
				<i lang="ain-Latn">un</i> — Yakumo, Horobetsu, Chitose, Biratori, Shizunai;
			</li>
			<li>
				<i lang="ain-Latn">en</i> — Urakawa, Tokachi, Eastern Hidaka;
			</li>
			<li>
				<i lang="ain-Latn">(e)ne</i> — Shiranuka, Kushiro, Nemuro, Bihoro, Asahikawa,
				Sōya, and also Sakhalin and Kuril;
			</li>
			<li>
				<i lang="ain-Latn">ekota</i> — an Asahikawa alternative form.
			</li>
		</ul>
		<p>
			The examples below illustrate two of the attested allative forms in running discourse:
		</p>

		<Ex
			m="mac-ihi sapa-ha or un inkar"
			g="wife-POSS head-POSS LOC ALLAT look"
			tr="(He) looked toward his wife's head."
			cite="nakagawafukazawa2022"
			dial="HOR"
			note="Horobetsu allative un. Nakagawa & Fukazawa (2022: ex. 4), from a Chiri-lineage Horobetsu text."
		/>

		<Ex
			m="nean nupuri or en oman kor"
			g="that mountain LOC ALLAT go CONJ"
			tr="when (we) went toward that mountain"
			cite="nakagawafukazawa2022"
			dial="TOK"
			note="Tokachi allative en. Nakagawa & Fukazawa (2022: ex. 5), from Sawai 1995: 61."
		/>

		<p>
			The <strong>juxtapositional particle</strong>
			<i lang="ain-Latn">newa</i> (and/with) is absent in Saru and Chitose, where bare
			juxtaposition does the same work. The <strong>successive particle</strong>
			<i lang="ain-Latn">tek</i> functions as a conjunction ('and then') in Shizunai,
			Samani, Tokachi, Kushiro, Shiranuka, and Ishikari, but as an auxiliary meaning 'do
			briefly' in Saru, Chitose, and Horobetsu; the Sakhalin cognate
			<i lang="ain-Latn">teh</i> is the older form (see
			<Xr ch="final-h-history-and-sakhalin-length-reflex" />). The
			<strong>conditional particle</strong> shows a three-way split:
			<i lang="ain-Latn">ko</i> (Abuta, Horobetsu, Samani, Kushiro, Shiranuka) vs
			<i lang="ain-Latn">kor</i> (Tokachi, Ishikari, Saru, Chitose) vs Shizunai
			<i lang="ain-Latn">konno</i> (&lt; <i lang="ain-Latn">kor-no</i>);
			<i lang="ain-Latn">ko</i> is reconstructed as the older form
			<Ref k="nakagawafukazawa2022" p="§4.3" />. The
			<strong>cohortative particle</strong> is <i lang="ain-Latn">ro</i> in Saru, Chitose,
			Horobetsu, Yakumo, Asahikawa, Nayoro, and Sōya;
			<i lang="ain-Latn">rok</i> in Asahikawa, Nayoro, and Obihiro; and
			<i lang="ain-Latn">no</i> in Urakawa and Samani.
		</p>
		<p>
			The <strong>imperative particle</strong>
			<i lang="ain-Latn">ya</i> (singular) is specific to Ishikari — another morphological
			feature that cross-cuts the lexical clusters
			<Ref k="nakagawafukazawa2022" p="§4.3" />.
		</p>
	</S>
</S>

<S t="Distribution types in linguistic geography" id="distribution-types">
	<p>
		<Ref k="nakagawafukazawa2022" p="§5" />, drawing on Nakagawa 1996, classifies the
		geographic distribution patterns of Hokkaido isoglosses into six types:
	</p>
	<ul>
		<li>
			<strong>Eastern–Western</strong> (approximating the NE/SW bipartition):
			<i lang="ain-Latn">par / car</i> 'mouth';
			<i lang="ain-Latn">hempak / nempak</i> 'how many';
			<i lang="ain-Latn">hempara / nempara</i> 'when'. The western form
			<i lang="ain-Latn">nempara</i> itself derives by analogy with the
			<i lang="ain-Latn">ne-</i> indefinite root (<i lang="ain-Latn">h- → n-</i>) and is
			therefore a secondary innovation even within the western zone.
		</li>
		<li>
			<strong>ABA</strong> (peripheral conservatism, central innovation):
			<i lang="ain-Latn">aw</i> (peripheral) vs <i lang="ain-Latn">parunpe</i> (central)
			'tongue'. The compound <i lang="ain-Latn">parunpe</i> (lit. 'mouth-inside-thing')
			spread from the <i lang="ain-Latn">par</i>-region and displaced
			<i lang="ain-Latn">aw</i> in the centre while the older form survived at the edges.
		</li>
		<li>
			<strong>Saru–Chitose island</strong>: interrogatives
			<i lang="ain-Latn">hemanta</i> 'what', <i lang="ain-Latn">hunna</i> 'who'; plural
			existential <i lang="ain-Latn">oka</i>; indefinites
			<i lang="ain-Latn">nep / nen</i>; prefix-only person marking. These features cluster
			in Saru–Chitose but are absent or replaced in surrounding varieties.
		</li>
		<li>
			<strong>Saru–Chitose + Sakhalin</strong>: the interrogative
			<i lang="ain-Latn">hemata</i> 'what' and the prefix
			<i lang="ain-Latn">eci-</i> '1→2' appear in Saru–Chitose and distant Sakhalin but
			not in the geographically intervening Hokkaido varieties — a bridge distribution that
			<Ref k="nakagawafukazawa2022" p="§5" /> describe as "hard to believe independent",
			though the historical mechanism is unresolved ‹speculative›.
		</li>
		<li>
			<strong>Pacific Coast</strong>: <i lang="ain-Latn">mici</i> 'father' in a strip
			running from the Kuriles through Horobetsu, crossing the east–west divide; the
			place-name cluster <i lang="ain-Latn">koyka / koypok</i> (Yamada 1982) follows a
			similar path.
		</li>
		<li>
			<strong>Ishikari Watershed</strong>: isolated innovations within an inland corridor,
			e.g. <i lang="ain-Latn">iyapo</i> 'father' at the Saru river mouth.
		</li>
	</ul>
	<p>
		The interrogative morphology receives special attention in
		<Ref k="nakagawafukazawa2022" p="§5.2" />: most Hokkaido interrogatives are
		historically indefinite pronouns repurposed via focus particles, while Saru and Chitose
		retain a two-stem system with a distinct interrogative root
		<i lang="ain-Latn">hVm / hVn</i> and an indefinite root
		<i lang="ain-Latn">ne-</i>. Community discussion independently segmented
		<i lang="ain-Latn">hunna</i> as <i lang="ain-Latn">hun + na</i>,
		<i lang="ain-Latn">hunak</i> as <i lang="ain-Latn">hun + yak</i>, and
		<i lang="ain-Latn">hempak</i> as <i lang="ain-Latn">hem + pak</i>
		<Ref k="aynucorporadiscord" /> (nukopoli, December 2023), corroborated by the sources.
	</p>
	<p>
		A community-proposed case for a 'bone' ABA distribution is worth noting:
		<i lang="ain-Latn">pone</i> in Hokkaido versus
		<i lang="ain-Latn">poni</i> in Sakhalin and Kuril, with La Pérouse 1787
		<i lang="ain-Latn">Pauni</i> as a candidate early Sakhalin attestation
		<Ref k="aynucorporadiscord" /> (antitwilight, June 2026 ‹speculative›). The ABA
		reasoning is methodologically sound, but the forms and site attestations require
		independent verification before the proposal can be taken further.
	</p>
</S>

<S t="The Saru–Chitose group and its standing" id="saru-chitose-group">
	<p>
		Saru and Chitose emerge from all classification approaches as a coherent subgroup,
		though the extent to which this distinguishes them from all other Hokkaido varieties or
		only from their immediate neighbours remains contested. The lexicostatistic matrix places
		Saru and Chitose together with Biratori, Nukibetsu, and Niikappu in the Central-South
		cluster. Morphological features — prefix-only transitive marking, plural
		<i lang="ain-Latn">pa</i>, the contracted pronouns
		<i lang="ain-Latn">kani</i> (&lt; <i lang="ain-Latn">kuani</i>) and
		<i lang="ain-Latn">coka</i> (&lt; <i lang="ain-Latn">ciokay</i>), distinct interrogative
		stems, and the 4th-person singular pronoun
		<i lang="ain-Latn">asinuma</i> — constitute a cluster that maps poorly onto the lexical
		groupings <Ref k="nakagawafukazawa2022" p="§4.1, §5" /> ‹contested›.
	</p>
	<p>
		The Saru–Chitose + Sakhalin bridge (shared
		<i lang="ain-Latn">hemata</i>, <i lang="ain-Latn">eci-</i>) is the outstanding puzzle
		in the classification. Parallel independent retention of an archaic form, coastal-route
		areal contact, or early divergence before the northeast varieties had innovated are all
		consistent with the distribution. The genetic relationship between Hokkaido and Sakhalin
		and the historical branching order are discussed in
		<Xr ch="sakhalin-and-kuril-ainu-contrast" /> and
		<Xr ch="internal-reconstruction-and-grammaticalization-pathways" />.
	</p>
</S>

<S t="The Sakhalin and Kuril branches as comparative benchmarks" id="sa-ka-benchmarks">
	<p>
		Sakhalin and Kuril data appear in the classification literature as calibration points
		for Hokkaido-internal distances. The one result robust across all methods is that the
		Hokkaido cluster is more internally cohesive than its gap from Sakhalin
		<Ref k="ono2020" p="§3" />; <Ref k="janhunen2022" p="§3b" />.
		<Ref k="janhunen2022" p="§3b" /> places Sakhalin's divergence from Common Ainu at
		roughly 800 years and Kuril's at under 600, consistent with the Satsumon-culture
		migration chronology — Kuril is historically as well as structurally closer to Hokkaido.
	</p>
	<p>
		The Sakhalin-specific features that calibrate the gap — final-consonant debuccalization
		(<i lang="ain-Latn">sik</i> 'eye' → ‹SA› <i lang="ain-Latn">sis</i>;
		<i lang="ain-Latn">cup</i> 'sun/moon' → ‹SA› <i lang="ain-Latn">cuh</i>), the
		vowel-length to pitch-accent correspondence, and the Nairo
		<i lang="ain-Latn">r- → t-</i> archaism — are documented in full in
		<Xr ch="sakhalin-and-kuril-ainu-contrast" /> and
		<Xr ch="final-h-history-and-sakhalin-length-reflex" />. The reconstruction of the
		stage from which Hokkaido, Sakhalin, and Kuril all diverged is the subject of
		<Xr ch="proto-ainu-segmental-reconstruction" />. Northern contact (Nivkh, Tungusic,
		Manchu) is primarily a Sakhalin phenomenon and is treated in
		<Xr ch="northern-contact-nivkh-tungusic-manchu" />.
	</p>
</S>

<S t="Coverage and the Hokkaido documentary record" id="gaps">
	<p>
		All quantitative classifications rest on the matrix of
		<Ref k="hattorichiri1960" />, collected at thirteen Hokkaido sites. The matrix has
		documented limitations <Ref k="nakagawafukazawa2022" p="§2.4" />. The Sea-of-Japan
		and Sea-of-Okhotsk coasts lack post-Meiji speech records; only one northern site, Sōya,
		is included, and it was documented from a single consultant. Several "dialect" rows
		represent a single speaker's idiolect rather than a community variety. Place-name
		evidence from <Ref k="kirikae1994" /> supplements documentary records for areas without
		spoken materials, but place-name attestations and 20th-century speech data are
		chronologically incommensurable.
	</p>
	<p>
		The corpus used throughout this grammar (209,878 sentences) is weighted heavily toward
		Saru (77,964 sentences) and Shizunai (43,346), with all other varieties together making
		up the remainder. Eastern and northern forms — Tokachi allative
		<i lang="ain-Latn">en</i>, the Kushiro particle extension
		<i lang="ain-Latn">kay</i> — appear too infrequently for distributional analysis. The
		corpus weighting and its implications for frequency counts are specified in
		<Xr ch="dialect-sample-and-corpus-method" />.
	</p>
	<p>
		The philological programme initiated by <Ref k="fukazawa2017" /> and the Chiri-family
		manuscript archive offer one corrective: historical documents (Kaga-ke, Matsuura,
		Mamiya) and the Hattori 1964 comparative dialect dictionary preserve regional forms not
		captured in post-WWII speech data. Lexical dialectology drawing on these sources is
		treated in <Xr ch="hokkaido-lexical-dialectology-and-the-dialect-atlas" />.
	</p>
</S>
