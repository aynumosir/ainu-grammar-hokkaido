<!-- src/lib/grammar/chapters/hokkaido-phonological-microvariation.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		The thirteen Hokkaido Ainu localities surveyed by <Ref k="hattorichiri1960" /> show
		fine-grained phonological differences that cross-cut — and in some cases run orthogonal to —
		the northeast/southwest bipartition established by <Ref k="tamura1988" />.
		<Ref k="nakagawafukazawa2022" /> §3 catalogues these systematically in a set of isogloss
		tables whose data derive ultimately from <Ref k="hattorichiri1960" /> and
		<Ref k="hattori1964" />. Four domains carry the phonological distinctiveness: suprasegmental
		type (pitch-accent vs unaccented), word-initial consonant elision, consonant-cluster
		assimilation, and a pair of well-known segmental alternations
		(<i lang="ain-Latn">pa-</i> ~ <i lang="ain-Latn">ca-</i> and
		<i lang="ain-Latn">-iw</i> ~ <i lang="ain-Latn">-uy</i>). Vowel quality and the
		distribution of a few morphophonological alternations add further dimensions.
		None of the isoglosses coincides precisely with the others, which is why
		<Ref k="fukazawaono2024" /> prefer a framework of gradient boundary dialects over a
		partition into discrete named groups.
	</p>
	<p>
		The consonant inventory common to all Hokkaido dialects is set out in
		<Xr ch="consonant-inventory" />; the vowel system in <Xr ch="vowel-inventory" />;
		pitch-accent placement rules of the dominant standard type in
		<Xr ch="pitch-accent-placement-rule" />; and the overarching dialectometric classification
		in <Xr ch="hokkaido-dialect-classification-and-dialectometry" />. Proto-Ainu
		reconstructions invoked here are from <Xr ch="proto-ainu-segmental-reconstruction" />.
	</p>
</S>

<S t="Pitch-accent microvariation" id="pitch-accent">
	<p>
		The most fundamental suprasegmental split within Hokkaido divides the field into three
		accent types: a <em>standard</em> type shared by the majority of documented localities,
		an <em>irregular</em> type in the far southwest, and a set of <em>unaccented</em> varieties
		on the east coast and in part of the west
		<Ref k="nakagawafukazawa2022" p="§3.1" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>type</th>
				<th>localities</th>
				<th>accent-placement rule</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><strong>Standard</strong></td>
				<td>Saru, Chitose, Horobetsu, Asahikawa, Nayoro, Obihiro, Sōya</td>
				<td>σ1 closed → σ1 high; σ1 open → σ2 high</td>
			</tr>
			<tr>
				<td><strong>Irregular</strong></td>
				<td>Yakumo, Oshamambe</td>
				<td>σ1 and σ2 both open → σ3 high (rather than σ2)</td>
			</tr>
			<tr>
				<td><strong>Unaccented</strong></td>
				<td>Shizunai, Urakawa, Samani, Bihoro, Kushiro, Shiranuka</td>
				<td>pitch non-contrastive lexically; Samani tends final-high; Shizunai shows no positional pattern</td>
			</tr>
		</tbody>
	</table>

	<S t="The standard accent type" id="accent-standard">
		<p>
			In the standard type, a closed first syllable draws the high pitch to σ1; an open first
			syllable places it on σ2. The rules operate on the bare lexical stem; cliticized person
			prefixes shift the accent domain (see <Xr ch="accent-in-compounds-and-affixation" />).
			The Saru–Chitose instantiation of this type is the baseline described by
			<Ref k="ijas2023" /> and the system treated in <Xr ch="pitch-accent-placement-rule" />.
		</p>
		<p>
			The geographic spread of the standard type is non-contiguous. The Saru–Chitose group in
			south-central Hokkaido, Horobetsu on the west coast, the inland Asahikawa–Nayoro corridor,
			and the eastern Obihiro dialect share identical accent rules despite the intervening
			unaccented belt. Sōya, at the northern tip of Hokkaido, also belongs here — a significant
			fact given that Sōya is the Hokkaido locality most closely cognate to Sakhalin in the
			lexicostatistic matrices of <Ref k="hattorichiri1960" /> and the dialectometric reanalysis
			of <Ref k="ono2020" />.
		</p>
	</S>

	<S t="The Yakumo–Oshamambe irregular type" id="accent-irregular">
		<p>
			When both the first and second syllables of a word are open, Yakumo and Oshamambe place
			the high pitch on the <em>third</em> syllable rather than the second. The contrast with
			the standard type is audible on identical lexical stems
			<Ref k="nakagawafukazawa2022" p="§3.1" />:
		</p>
		<Ex
			m="ipérekut"
			g="spatula"
			tr="wooden spatula"
			constructed
			dial="SAR"
			note="Standard accent type: open σ1 forces accent to σ2. Accent mark (´) marks the onset of the high-pitch domain. Comparative form from Nakagawa & Fukazawa 2022 §3.1."
		/>
		<Ex
			m="iperékut"
			g="spatula"
			tr="wooden spatula"
			constructed
			dial="YAK"
			note="Irregular accent type: open σ1 and σ2 force accent to σ3. Same lexeme as the Saru form, differing only in accent position. Data from Nakagawa & Fukazawa 2022 §3.1."
		/>
		<p>
			The contrast recurs in verbs: Saru <i lang="ain-Latn">hopúni</i> 'fly' vs Yakumo
			<i lang="ain-Latn">hopuní</i>. Whether the irregular pattern is a phonological
			innovation at Yakumo/Oshamambe or an archaic retention from a stage before the standard
			rule spread has not been settled; neither has any synchronic account of what structural
			property of consecutive open syllables triggers the shift ‹contested›
			<Ref k="nakagawafukazawa2022" p="§3.1" />.
		</p>
	</S>

	<S t="Unaccented varieties" id="accent-unaccented">
		<p>
			Six localities — Shizunai, Urakawa, Samani, Bihoro, Kushiro, and Shiranuka — have been
			described as lacking phonologically contrastive pitch at the lexical level. The description
			requires qualification: Samani tends toward a final-high pattern in practice; Shizunai
			shows no stable positional pattern across the lexicon
			<Ref k="nakagawafukazawa2022" p="§3.1" />.
		</p>
		<p>
			These varieties did not lose their accent through the same mechanism as Sakhalin Ainu,
			where the absence of pitch correlates with the retention of vowel length (and a
			long-vowel/high-pitch correspondence with the standard Hokkaido type; see
			<Xr ch="final-h-history-and-sakhalin-length-reflex" />). In Hokkaido, the unaccented
			dialects appear to represent a secondary pitch-neutralization within a variety that had
			already developed the pitch-accent system — the opposite direction from Sakhalin's
			retention of length as the suprasegmental distinction ‹contested›
			<Ref k="nakagawafukazawa2022" p="§3.1" />; <Ref k="itabashi2001" />.
			The broader prosodic comparison with Sakhalin is taken up in
			<Xr ch="mora-syllable-accent-vs-tone-analysis" />.
		</p>
	</S>
</S>

<S t="Consonant microvariation" id="consonant-variation">
	<S t="Word-initial h-elision" id="h-elision">
		<p>
			In eastern standard-accent dialects — Obihiro, Kushiro, Bihoro, Asahikawa, and
			Nayoro — a word-initial <i lang="ain-Latn">h</i> is absent when the accent falls
			on σ2, that is, when σ1 is open. The elision environment is exactly the standard-type
			accent context where the initial consonant carries no pitch-peak information; western and
			southern dialects (Horobetsu, Biratori, Nukibetsu, Niikappu, Samani, Sōya) retain
			<i lang="ain-Latn">h</i> throughout
			<Ref k="nakagawafukazawa2022" p="§3.2, Table 4" />:
		</p>

		<table>
			<thead>
				<tr>
					<th>word</th>
					<th>gloss</th>
					<th><i lang="ain-Latn">h</i>-retaining dialects</th>
					<th>eastern (elision) dialects</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">huraye</i></td>
					<td>'wash'</td>
					<td><i lang="ain-Latn">huráye</i></td>
					<td><i lang="ain-Latn">uráye</i></td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">hoku</i></td>
					<td>'husband'</td>
					<td><i lang="ain-Latn">hokú</i></td>
					<td><i lang="ain-Latn">okú</i></td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">hekaci</i></td>
					<td>'child'</td>
					<td><i lang="ain-Latn">hekáci</i></td>
					<td><i lang="ain-Latn">ekáci</i></td>
				</tr>
			</tbody>
		</table>

		<p>
			The synchronic status of the glottal onset that phonetically precedes the initial vowel
			in some realizations of the eastern forms varies by dialect and speaker and connects to
			the analysis of <Xr ch="glottal-stop" />; the relevant point here is that
			<i lang="ain-Latn">h</i> is absent as a segment, not merely reduced
			‹corpus-suggested› <Ref k="nakagawafukazawa2022" p="§3.2" />.
		</p>
	</S>

	<S t="Regressive cluster assimilation" id="cluster-assimilation">
		<p>
			The most geographically concentrated consonant alternation in the Hokkaido field is a
			set of regressive assimilation processes converting heterorganic clusters at morpheme
			junctions into geminates or homorganic sequences. The alternations are confined to
			the northeast and are most extensive in Bihoro
			<Ref k="nakagawafukazawa2022" p="§3.3, Table 5" />:
		</p>

		<table>
			<thead>
				<tr>
					<th>cluster</th>
					<th>result</th>
					<th>base form</th>
					<th>assimilated form</th>
					<th>gloss</th>
					<th>localities</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">tk</i></td>
					<td><i lang="ain-Latn">kk</i></td>
					<td><i lang="ain-Latn">hotke</i></td>
					<td><i lang="ain-Latn">hokke</i></td>
					<td>'lie (down)'</td>
					<td>Obihiro, Kushiro, Bihoro</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">rs</i></td>
					<td><i lang="ain-Latn">ss</i></td>
					<td><i lang="ain-Latn">sirsesek</i></td>
					<td><i lang="ain-Latn">sissesek</i></td>
					<td>'hot (of weather)'</td>
					<td>Bihoro, Asahikawa, Nayoro</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">pt</i></td>
					<td><i lang="ain-Latn">tt</i></td>
					<td><i lang="ain-Latn">tupte</i></td>
					<td><i lang="ain-Latn">tutte</i></td>
					<td>'hang up'</td>
					<td>Bihoro</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">ps</i></td>
					<td><i lang="ain-Latn">ss</i></td>
					<td><i lang="ain-Latn">upsor</i></td>
					<td><i lang="ain-Latn">ussor</i></td>
					<td>'bosom'</td>
					<td>Bihoro</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">kp</i></td>
					<td><i lang="ain-Latn">pp</i></td>
					<td><i lang="ain-Latn">sirpopke</i></td>
					<td><i lang="ain-Latn">sirpokke</i></td>
					<td>'warm'</td>
					<td>Bihoro, Sōya</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">kp</i></td>
					<td><i lang="ain-Latn">pp</i></td>
					<td><i lang="ain-Latn">hayokpe</i></td>
					<td><i lang="ain-Latn">hayoppe ~ ayoppe</i></td>
					<td>'armor'</td>
					<td>Bihoro</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">kt</i></td>
					<td><i lang="ain-Latn">tt</i></td>
					<td><i lang="ain-Latn">ioyamokte</i></td>
					<td><i lang="ain-Latn">ioyamotte</i></td>
					<td>'be anxious'</td>
					<td>Bihoro</td>
				</tr>
			</tbody>
		</table>

		<p>
			<Ref k="nakagawa2024" /> treats these as historically altered word-forms specific
			to those localities — lexical entries in the Bihoro dialect — rather than as the output
			of a productive synchronic sandhi rule applying across the board.
			A community discussant takes a different interpretive direction, suggesting that the
			geographic concentration of the pattern in Bihoro points to an underlying "proto-phoneme"
			(an ancestor consonant distinct from both of the modern alternants) whose collapse
			produced the heterorganic clusters later simplified by assimilation ‹speculative›
			<Ref k="aynucorporadiscord" /> (antitwilight, 2024-11-17). The relationship of the
			assimilated forms to the broader coda-sandhi phenomena described in
			<Xr ch="coda-r-assimilation-sonorant-sandhi" /> has not been worked out.
		</p>
	</S>

	<S t="The pa-:ca- alternation" id="pa-ca">
		<p>
			One of the most discussed phonological isoglosses in the Hokkaido field is the
			distribution of <i lang="ain-Latn">pa-</i> and <i lang="ain-Latn">ca-</i> in a small
			set of words related to 'mouth':
			<i lang="ain-Latn">par</i> (southwest) and <i lang="ain-Latn">car</i> (northeast)
			'mouth', <i lang="ain-Latn">papus</i> ~ <i lang="ain-Latn">capus</i> ~
			<i lang="ain-Latn">patoy</i> ~ <i lang="ain-Latn">catoy</i> 'lip'. Nayoro and
			Asahikawa attest both forms, marking the interior transition zone
			<Ref k="nakagawafukazawa2022" p="§3.4" />.
		</p>
		<p>
			The phenomenon is formally restricted: there is no comparable
			<i lang="ain-Latn">pe-</i>/<i lang="ain-Latn">ce-</i>,
			<i lang="ain-Latn">pi-</i>/<i lang="ain-Latn">ci-</i>, or
			<i lang="ain-Latn">po-</i>/<i lang="ain-Latn">co-</i> correspondence in the
			lexicon, which is why <Ref k="nakagawafukazawa2022" p="§3.4" /> call it a
			"pseudo-correspondence" rather than a sound correspondence in the strict sense.
			Place-name evidence corroborates the geographic split:
			<Ref k="kirikae1994" /> records eleven <i lang="ain-Latn">par</i>-type place names
			against zero <i lang="ain-Latn">car</i>-type in Ishikari; in Nemuro and Kushiro the
			ratio reverses (thirteen <i lang="ain-Latn">car</i>-type). The Kuril attestations —
			Krasheninnikov 1738 and Golovnin 1811 — record <i lang="ain-Latn">car</i> for
			'mouth', consistent with the northeastern and eastern distribution.
			<Ref k="tamura1996" /> gives <i lang="ain-Latn">par</i> as the Saru concept-form,
			with the possessed form <i lang="ain-Latn">paro-ho</i>.
		</p>
		<p>
			Four analyses of the alternation have been proposed ‹contested›:
		</p>
		<ul>
			<li>
				Kindaichi, Chiri, and Naert 1958 (via <Ref k="nakagawafukazawa2022" p="§3.4" />):
				a diachronic change <i lang="ain-Latn">pa</i> → <i lang="ain-Latn">ca</i>, or the
				reconstruction of a single Proto-Ainu syllable <i lang="ain-Latn">*Xa</i>
				(with an indeterminate initial consonant).
			</li>
			<li>
				<Ref k="kirikae1994" />: Proto-Ainu already had two distinct 'mouth' lexemes; the
				<i lang="ain-Latn">par</i> and <i lang="ain-Latn">car</i> forms are not cognates
				but separate vocabulary items with overlapping reference.
			</li>
			<li>
				Nakagawa 1996 (via <Ref k="nakagawafukazawa2022" p="§3.4" />): the
				<i lang="ain-Latn">ca-</i> form is the older one, evidenced by its appearance in
				place-names and formulaic expressions (<i lang="ain-Latn">sanca or ta</i>) inside
				otherwise <i lang="ain-Latn">par</i>-using regions — an ABA distribution where a
				central innovation displaced the peripheral retention.
			</li>
			<li>
				<Ref k="fukazawa2017" />: <i lang="ain-Latn">ca-</i> and <i lang="ain-Latn">pa-</i>
				were always distinct morphemes, with irreducible minimal pairs
				<i lang="ain-Latn">can</i>:<i lang="ain-Latn">pan</i> 'thin' and
				<i lang="ain-Latn">cas</i>:<i lang="ain-Latn">pas</i> 'run' coexisting in the
				same dialects with distinct phonological histories.
			</li>
		</ul>
		<p>
			<Ref k="alonso2022" /> §2.2.6 reconstructs PA <i lang="ain-Latn">*pʸaɾ</i> for 'mouth',
			treating the <i lang="ain-Latn">p</i>/<i lang="ain-Latn">c</i> split as a relic of a
			Proto-Ainu palatalized consonant series in which <i lang="ain-Latn">*pʸ</i> shifted
			toward <i lang="ain-Latn">c</i> in the northeast; this reconstruction is
			typologically motivated rather than philologically forced ‹speculative›. A community
			discussant proposes a related but distinct mechanism: that the alternation reflects a
			Proto-Ainu syllable <i lang="ain-Latn">*ti</i>, whose labialized variant underwent
			palatalization via an intermediate glide (*<i lang="ain-Latn">pj</i> →
			*<i lang="ain-Latn">tj</i> → <i lang="ain-Latn">c</i>), overlapping with Alonso's
			palatalized-series account but positing a glide intermediate ‹speculative›
			<Ref k="aynucorporadiscord" /> (nukopoli, 2023-12-08). None of the four analyses
			has achieved consensus.
		</p>
	</S>

	<S t="Metathesis: -iw and -uy" id="metathesis">
		<p>
			Bihoro and Kushiro show a systematic alternation in which the sequences
			<i lang="ain-Latn">-iw</i> and <i lang="ain-Latn">-uy</i> are transposed relative to
			the forms recorded elsewhere <Ref k="nakagawafukazawa2022" p="§3.5, Table 7" />:
		</p>

		<table>
			<thead>
				<tr>
					<th>base form</th>
					<th>Bihoro/Kushiro form</th>
					<th>gloss</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">siwnin</i></td>
					<td><i lang="ain-Latn">suynin</i></td>
					<td>'green'</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">ciw</i></td>
					<td><i lang="ain-Latn">cuy</i></td>
					<td>'stab, prick'</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">nociw</i></td>
					<td><i lang="ain-Latn">nocuy</i></td>
					<td>'star' (Kushiro)</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">riwka</i></td>
					<td><i lang="ain-Latn">ruyka</i></td>
					<td>'bridge'</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">icaniw</i></td>
					<td><i lang="ain-Latn">icanuy</i></td>
					<td>'Dolly Varden trout'</td>
				</tr>
			</tbody>
		</table>

		<p>
			The base form has a glide following the vowel (<i lang="ain-Latn">iw</i>); the
			Bihoro/Kushiro form has the vowel following the glide
			(<i lang="ain-Latn">uy</i> = <i lang="ain-Latn">u</i> + <i lang="ain-Latn">y</i>).
			The alternation is limited to these two unaccented eastern dialects;
			standard-accent dialects do not participate.
		</p>
		<p>
			Additional, lexically specific metatheses occur in other dialects without forming a
			regular alternation: <i lang="ain-Latn">piyar</i> / <i lang="ain-Latn">puyar</i> /
			<i lang="ain-Latn">puray</i> 'window' (three variants across the field),
			<i lang="ain-Latn">nipek</i> / <i lang="ain-Latn">nupek</i> /
			<i lang="ain-Latn">nikep</i> 'light', and
			<i lang="ain-Latn">askepet</i> / <i lang="ain-Latn">aspeket</i> 'finger' (Horobetsu)
			<Ref k="nakagawafukazawa2022" p="§3.5, Table 8" />. Their relationship to the
			<i lang="ain-Latn">-iw</i>/<i lang="ain-Latn">-uy</i> set is unclear.
		</p>
	</S>

	<S t="Other consonant alternations: y/w and n/m" id="other-consonant">
		<p>
			Two further consonant alternations are documented across the dialect field.
			First, <i lang="ain-Latn">y</i> and <i lang="ain-Latn">w</i> alternate in a small
			set of lexical items in the Yakumo area:
			<i lang="ain-Latn">puyar</i> and <i lang="ain-Latn">nuye</i> where most dialects
			have <i lang="ain-Latn">puwar</i> and <i lang="ain-Latn">nuwe</i>
			<Ref k="nakagawafukazawa2022" p="§3.6, Table 12" />. This remains lexically specific.
		</p>
		<p>
			Second, <i lang="ain-Latn">n</i> and <i lang="ain-Latn">m</i> vary in particular
			words and localities: <i lang="ain-Latn">nimak</i> ~
			<i lang="ain-Latn">mimak</i> 'tooth' (Yakumo, Nukibetsu, and Niikappu favour
			<i lang="ain-Latn">mimak</i>); and
			<i lang="ain-Latn">ómke</i> ~ <i lang="ain-Latn">ónke</i> 'cough' at Sōya versus
			other dialects
			<Ref k="nakagawafukazawa2022" p="§3.6, Tables 13–14" />.
			A community discussant observes that the change
			<i lang="ain-Latn">mi</i> → <i lang="ain-Latn">ni</i> (or its inverse) appears broadly
			in Hokkaido and suggests the epicentre may lie in the Horobetsu area, where long-distance
			assimilation could be the operative mechanism ‹corpus-suggested›
			<Ref k="aynucorporadiscord" /> (nukopoli, 2024-12-06). That hypothesis is consistent
			with the <i lang="ain-Latn">nimak</i>/<i lang="ain-Latn">mimak</i> distribution but
			requires systematic corpus verification before it can be stated as established.
		</p>
		<p>
			An isolated consonant-copying phenomenon produces Sōya
			<i lang="ain-Latn">purár</i> against the more widespread
			<i lang="ain-Latn">puwar</i> 'fog/mist'; and the alternation
			<i lang="ain-Latn">hútne</i> ~ Bihoro <i lang="ain-Latn">húpne</i> 'narrow'
			represents a <i lang="ain-Latn">C:p</i> correspondence that remains
			lexically isolated <Ref k="nakagawafukazawa2022" p="§3.6, Table 15" />.
		</p>
	</S>
</S>

<S t="Vowel alternations" id="vowel-alternations">
	<p>
		Vowel quality shows inter-dialectal variation without organizing into simple geographic
		zones. <Ref k="nakagawafukazawa2022" /> §3.5 (Tables 9–11) documents three vowel-pair
		alternations:
	</p>

	<table>
		<thead>
			<tr>
				<th>vowel pair</th>
				<th>base form</th>
				<th>variant form</th>
				<th>gloss</th>
				<th>distribution</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">u</i> ~ <i lang="ain-Latn">o</i></td>
				<td><i lang="ain-Latn">upas</i></td>
				<td>Sōya <i lang="ain-Latn">opas</i></td>
				<td>'snow'</td>
				<td>Sōya <i lang="ain-Latn">o-</i> vs most HA <i lang="ain-Latn">u-</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">u</i> ~ <i lang="ain-Latn">o</i></td>
				<td><i lang="ain-Latn">okuyma</i></td>
				<td>NE <i lang="ain-Latn">okoyma</i></td>
				<td>—</td>
				<td>NE <i lang="ain-Latn">o</i> vs default <i lang="ain-Latn">u</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">o</i> ~ <i lang="ain-Latn">e</i></td>
				<td><i lang="ain-Latn">otop</i></td>
				<td>Yakumo <i lang="ain-Latn">etop</i></td>
				<td>'hair'</td>
				<td>Yakumo tendency toward <i lang="ain-Latn">e</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">o</i> ~ <i lang="ain-Latn">e</i></td>
				<td><i lang="ain-Latn">menoko</i></td>
				<td>Sōya <i lang="ain-Latn">menéko</i></td>
				<td>'woman'</td>
				<td>Sōya <i lang="ain-Latn">e</i> ~ general <i lang="ain-Latn">o</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">e/u</i> ~ <i lang="ain-Latn">i</i></td>
				<td><i lang="ain-Latn">seta</i></td>
				<td>Samani <i lang="ain-Latn">sitá</i> ~ <i lang="ain-Latn">setá</i></td>
				<td>'dog'</td>
				<td>eastern/Samani <i lang="ain-Latn">i</i> vs southwest <i lang="ain-Latn">e</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">u</i> ~ <i lang="ain-Latn">i</i></td>
				<td><i lang="ain-Latn">supuya</i></td>
				<td>Yakumo <i lang="ain-Latn">sipuyá</i></td>
				<td>'smoke'</td>
				<td>Yakumo <i lang="ain-Latn">i-</i> vs general <i lang="ain-Latn">u-</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">u</i> ~ <i lang="ain-Latn">i</i></td>
				<td><i lang="ain-Latn">kumi</i></td>
				<td>Bihoro <i lang="ain-Latn">kimi</i></td>
				<td>'mold'</td>
				<td>Bihoro <i lang="ain-Latn">i</i> vs general <i lang="ain-Latn">u</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		These vowel variations do not produce a coherent geographic split comparable to the
		accent types or the h-elision isogloss. Sōya (northwest) and Yakumo (southwest) both
		show <i lang="ain-Latn">o</i>/<i lang="ain-Latn">e</i> alternations but in different
		lexical items and different directions; Bihoro (northeast unaccented) and Samani (east
		unaccented) share <i lang="ain-Latn">i</i>-raising in different words.
		The irregularity is consistent with the lexicostatistic picture: only 91 of the 200
		Swadesh-list items used by <Ref k="hattorichiri1960" /> showed any cross-dialect stem
		differentiation, meaning that the majority of the basic vocabulary is shared across all
		localities without alternation <Ref k="nakagawafukazawa2022" p="§2.3" />.
	</p>
	<p>
		One fine-phonetic observation, currently unsystematically documented, concerns the
		Mukawa recordings, where <i lang="ain-Latn">i</i> is realized as [e] and
		<i lang="ain-Latn">e</i> as [ɛ] throughout — a general-lowering pattern not reported
		from other localities and suggesting a dialect-level phonetic shift beyond the
		sporadic lexical alternations above ‹corpus-suggested›
		<Ref k="aynucorporadiscord" /> (nukopoli, 2024-03-18).
	</p>
</S>

<S t="-ay elision and eastern particle extension" id="ay-elision">
	<p>
		In Saru and Chitose, the plural existential <i lang="ain-Latn">okay</i> reduces to
		<i lang="ain-Latn">oka</i> by elision of the final <i lang="ain-Latn">-y</i>; the same
		elision extends to the pronoun <i lang="ain-Latn">ciokay</i> →
		<i lang="ain-Latn">coka</i>
		<Ref k="nakagawafukazawa2022" p="§3.7, Table 16" />. This is not a general rule
		affecting all <i lang="ain-Latn">-ay</i>-final sequences; it is confined to this
		functional item and its derivatives.
	</p>
	<p>
		In the eastern dialects (Obihiro, Kushiro, Bihoro), the pattern runs in the opposite
		direction. Particles that appear as <i lang="ain-Latn">ka</i>,
		<i lang="ain-Latn">yakka</i>, and <i lang="ain-Latn">korka</i> in standard
		dialects acquire a final <i lang="ain-Latn">-y</i>:
		<i lang="ain-Latn">kay</i>, <i lang="ain-Latn">yakkay</i>,
		<i lang="ain-Latn">korkay</i>
		<Ref k="nakagawafukazawa2022" p="§3.7, Table 17" />.
		The geographic separation of the two changes — southwest elision, east extension —
		argues against treating them as a single diachronic development; they are most
		plausibly independent innovations at opposite ends of the dialect field.
	</p>
</S>

<S t="Isogloss geography and the dialect divisions" id="isogloss-geography">
	<p>
		The isoglosses surveyed above do not partition Hokkaido into a clean binary or ternary
		arrangement. Each phenomenon has its own geographic distribution, and the bundles of
		overlapping isoglosses reproduce only approximately the northeast/southwest bipartition
		of <Ref k="tamura1988" />. A summary of the main isoglosses and their geographic
		alignment:
	</p>

	<table>
		<thead>
			<tr>
				<th>phenomenon</th>
				<th>southwest / standard</th>
				<th>northeast / eastern</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>pitch accent type</td>
				<td>standard (σ1-open→σ2 high) — Saru, Chitose, Horobetsu, Obihiro, Sōya</td>
				<td>unaccented — Bihoro, Kushiro, Shizunai, Samani; standard — Asahikawa, Nayoro</td>
				<td><Ref k="nakagawafukazawa2022" p="§3.1" /></td>
			</tr>
			<tr>
				<td>word-initial <i lang="ain-Latn">h</i></td>
				<td>retained — Horobetsu, Biratori, Niikappu, Sōya</td>
				<td>elided before accented σ2 — Obihiro, Kushiro, Bihoro, Asahikawa, Nayoro</td>
				<td><Ref k="nakagawafukazawa2022" p="§3.2" /></td>
			</tr>
			<tr>
				<td>cluster assimilation <i lang="ain-Latn">tk→kk</i> etc.</td>
				<td>absent</td>
				<td>Bihoro most extensively; Obihiro, Kushiro, Asahikawa, Nayoro partially</td>
				<td><Ref k="nakagawafukazawa2022" p="§3.3" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">par</i>/<i lang="ain-Latn">car</i> 'mouth'</td>
				<td><i lang="ain-Latn">par</i> — Saru, Chitose, Ishikari</td>
				<td><i lang="ain-Latn">car</i> — Nemuro, Kushiro; both — Nayoro, Asahikawa</td>
				<td><Ref k="nakagawafukazawa2022" p="§3.4" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">-iw</i>/<i lang="ain-Latn">-uy</i> metathesis</td>
				<td>absent</td>
				<td>Bihoro, Kushiro</td>
				<td><Ref k="nakagawafukazawa2022" p="§3.5" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">okay</i> → <i lang="ain-Latn">oka</i></td>
				<td>Saru, Chitose</td>
				<td>absent</td>
				<td><Ref k="nakagawafukazawa2022" p="§3.7" /></td>
			</tr>
			<tr>
				<td>particle <i lang="ain-Latn">ka</i> → <i lang="ain-Latn">kay</i></td>
				<td>absent</td>
				<td>Obihiro, Kushiro, Bihoro</td>
				<td><Ref k="nakagawafukazawa2022" p="§3.7" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		Bihoro occupies a distinctive structural position. It is unaccented, shows the
		<i lang="ain-Latn">-iw</i>/<i lang="ain-Latn">-uy</i> metathesis, and carries the most
		extensive cluster assimilation — yet also shares the
		<i lang="ain-Latn">car</i>-type 'mouth' with the northeast and the eastern particle
		extension. The independent prothetic <i lang="ain-Latn">h</i> that Bihoro developed on
		certain vowel-initial forms (Bihoro <i lang="ain-Latn">haspa</i> 'deaf',
		<i lang="ain-Latn">ham</i> 'nail' vs general <i lang="ain-Latn">aspa</i>,
		<i lang="ain-Latn">am</i>) is a separate localized innovation analysed by
		<Ref k="alonso2022" /> §2.2.5 as a prothetic strategy to disambiguate homophones —
		distinct from the original <i lang="ain-Latn">h</i> elided in the surrounding
		eastern dialects.
	</p>
	<p>
		Two "boundary dialect" positions merit specific mention. Sōya (the ‹SA›–HA border) combines
		standard-type accent and <i lang="ain-Latn">h</i>-retention with some northeastern vowel
		forms (<i lang="ain-Latn">opas</i> for 'snow') and one cluster-assimilation form
		(<i lang="ain-Latn">sirpokke</i>), placing it between northeast and northwest on multiple
		phonological parameters simultaneously. Asahikawa (the NE/SW interior border) has standard
		accent, eastern h-elision, both <i lang="ain-Latn">par</i> and <i lang="ain-Latn">car</i>,
		and the <i lang="ain-Latn">rs→ss</i> assimilation — again a profile that spans the main
		isogloss bundles. <Ref k="fukazawaono2024" /> argue that such localities are better treated
		as reference points for measuring gradient similarity than as dialect members to be assigned
		to one group.
	</p>
	<p>
		The <i lang="ain-Latn">car</i>-type's correlation with Kuril forms — Krasheninnikov (1738)
		and Golovnin (1811) ‹KU› both record <i lang="ain-Latn">car</i> — and the Sōya–Sakhalin
		closeness in the lexicostatistic matrices are taken up in
		<Xr ch="sakhalin-and-kuril-ainu-contrast" />.
		The morphological isoglosses that partially parallel the phonological division —
		in particular the Saru/Chitose prefix-only person marking — are described in
		<Xr ch="person-marking-architecture" />.
	</p>
	<p>
		The overall picture is one of overlapping, non-coextensive isoglosses producing a
		dialect continuum rather than discretely bounded varieties. This is consistent with
		<Ref k="ono2020" />'s finding that the three-way "Major Division"
		(Hokkaido/Sakhalin/Kuril) does not survive statistical testing and that even within
		Hokkaido the internal structure is gradient — a conclusion that the multi-parameter
		isogloss geography here supports at the segmental and prosodic levels
		<Ref k="ono2020" />; <Ref k="nakagawafukazawa2022" p="§6" />.
	</p>
</S>
