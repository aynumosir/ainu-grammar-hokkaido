<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The interlinear format" id="interlinear-format">
	<p>
		Examples of Ainu data follow the three-line interlinear format of the Leipzig Glossing Rules
		<Ref k="comrie2015" paren />. The <em>morphemic</em> line segments each Ainu word at morpheme
		and person-marker boundaries; the <em>gloss</em> line aligns one label with each morpheme; the
		<em>free translation</em> gives an idiomatic English rendering. A fourth line, the <em>literal
		translation</em>, is supplied where the morpheme-by-morpheme reading illuminates an opaque or
		partially grammaticalized form.
	</p>

	<p>
		Two further lines may precede the morphemic line. A <em>surface</em> line gives the unsegmented
		written form when phonological alternation produces a surface string that differs from the
		underlying segmentation — for example, when a stem-initial vowel triggers reduction of a
		preceding person prefix. A <em>source-script</em> line gives the original katakana (or other)
		orthography when an example is transcribed from a katakana source, and is accompanied by the
		romanized segmentation immediately below it. The Latin phonemic transcription is described in
		<Xr ch="latin-phonemic-transcription" /> and the katakana conventions in
		<Xr ch="katakana-and-small-kana-codas" />.
	</p>

	<p>
		The morphemic and gloss lines must contain the same number of space-delimited tokens; each token
		groups one Ainu word together with its prefixes and suffixes, and the corresponding gloss token
		mirrors that internal structure using boundary symbols described below. A mismatch in token count
		causes a build error.
	</p>

	<Ex
		m="ku=nu ru-we ne"
		g="1SG.A=hear track-POSS COP"
		tr="I heard it."
		note="Illustrates the format: the morphemic line segments at person-marker (=) and affix (-) boundaries; the gloss line aligns one label per morpheme. The possessed evidential formal noun ruwe (ru-we, 'the trace of —') is discussed in the evidential chapters."
		constructed
	/>
</S>

<S t="Morpheme boundary conventions" id="boundary-conventions">
	<p>
		Three boundary symbols appear within tokens in the morphemic and gloss lines:
	</p>

	<table>
		<thead>
			<tr>
				<th>symbol</th>
				<th>use</th>
				<th>morphemic</th>
				<th>gloss</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><code>-</code></td>
				<td>affix boundary (derivational and nominal)</td>
				<td><i lang="ain-Latn">ru-we</i></td>
				<td>track-<span class="sc">poss</span></td>
			</tr>
			<tr>
				<td><code>=</code></td>
				<td>person-marker boundary (orthographic convention, all personal indexes)</td>
				<td><i lang="ain-Latn">ku=nu</i></td>
				<td><span class="sc">1sg.a</span>=hear</td>
			</tr>
			<tr>
				<td><code>.</code></td>
				<td>portmanteau: two grammatical values fused in one gloss atom</td>
				<td><i lang="ain-Latn">a=</i></td>
				<td><span class="sc">4.a</span>=</td>
			</tr>
		</tbody>
	</table>

	<p>
		The <code>=</code> symbol is used for all personal-index morphemes as an orthographic
		convention of the Nakagawa lineage, not as Leipzig clitic notation — Nakagawa states
		explicitly that his <code>=</code> is unrelated to the general-linguistic affix/clitic
		display convention, and adopted it to keep inflectional person marking apart from
		derivation and the dictionary headword recoverable <Ref k="nakagawa2024" p="58–60" />.
		Satō and Ijäs notate the same morphemes with hyphens. Morphologically the set is mixed:
		at least two members — the intransitive-subject markers <i lang="ain-Latn">=an</i> and
		<i lang="ain-Latn">=as</i> — show degrees of independence that set them apart from typical
		inflectional affixes <Ref k="nakagawa2024" p="49, 183" />;
		<Ref k="bugaeva2012" p="472–473" />, while the prefixal markers pattern with ordinary
		affixes. The choice of <code>=</code> throughout is thus deliberately neutral on which
		markers are true clitics and which are affixes; that classification is examined in
		<Xr ch="personal-affix-template-and-ordering" s="boundary-status" /> ‹contested›.
	</p>

	<p>
		The dot records a portmanteau — two grammatical values encoded in a single exponence — without
		claiming that they form a morphologically complex unit. In the fourth-person paradigm the prefix
		<i lang="ain-Latn">a=</i> encodes the fourth person acting as the agent of a transitive verb;
		it is glossed <span class="sc">4.a</span>, where <span class="sc">4</span> marks person and
		<span class="sc">a</span> marks the <Xr ch="person-marking-architecture">S/A/O role</Xr>.
		Each component of every portmanteau is listed independently in the abbreviation set, so that
		<span class="sc">4.a</span>, <span class="sc">1sg.a</span>, and <span class="sc">2pl.o</span>
		are all resolvable atom by atom.
	</p>
</S>

<S t="Grammatical glosses and the abbreviation set" id="gloss-atoms">
	<p>
		Every morpheme in the gloss line receives either a <em>lexical gloss</em> in lower case —
		an ordinary English word for a stem or root (e.g. <code>hear</code>, <code>house</code>,
		<code>track</code>) — or a <em>grammatical gloss</em> in
		<span class="sc">small capitals</span>. Each small-capitals item is an <em>abbreviation atom</em>
		drawn from the fixed set tabulated in <Xr ch="abbreviations-glossing-symbols" />; no ad-hoc
		or unlisted atom is permitted. When a grammatical category appearing in the data lacks a
		registered atom, the atom is added to that table before the example enters any chapter. The
		set is validated at build time: an unregistered capital-letter sequence in a gloss line causes
		a build error.
	</p>

	<p>
		The role labels <span class="sc">s</span>, <span class="sc">a</span>, and
		<span class="sc">o</span> follow the usage of <Ref k="bugaeva2012" p="471" />:
		<span class="sc">s</span> is the single argument of an intransitive verb,
		<span class="sc">a</span> is the agent-like argument of a transitive verb, and
		<span class="sc">o</span> is the patient-like argument. Person is identified by the numerals
		<span class="sc">1</span>, <span class="sc">2</span>, <span class="sc">3</span>, and
		<span class="sc">4</span> in the sense of <Ref k="nakagawa2024" p="163" />: the numerals
		are form-class labels, not an inherent claim about the semantic content of each form.
		The fourth-person set — whose referential range covers the indefinite agent-defocusing use,
		the narrative first person, the addressee-inclusive 'we', the honorific second person, and
		the logophoric subject of reported speech — is the subject of
		<Xr ch="indefinite-fourth-person-paradigm" /> and <Xr ch="fourth-person-honorific" />.
	</p>

	<p>
		Evidential glosses follow the abbreviation set directly: <span class="sc">evid</span> marks
		a generic evidential category, <span class="sc">infr</span> the inferential, and
		<span class="sc">rep</span> the reportative. The formal nouns that build the
		nominalization-plus-copula evidential constructions (<i lang="ain-Latn">ruwe</i>,
		<i lang="ain-Latn">siri</i>, <i lang="ain-Latn">hawe</i>, <i lang="ain-Latn">humi</i>) are
		glossed by their compositional morpheme labels (<span class="sc">poss</span>, <span class="sc">cop</span>)
		rather than by a holistic evidential tag, since the grammaticalization of those forms is partial
		and the morpheme-level analysis remains transparent <Ref k="dalcorso2018" p="24–25" />; this
		choice is consistent with the convention of <Ref k="nakagawa2024" p="258" />. The evidential
		system is described in <Xr ch="evidential-schema-overview" />.
	</p>
</S>

<S t="Dialect tags and example attribution" id="dialect-attribution">
	<p>
		Every attested example carries a dialect tag drawn from the fixed set below. Finer locality —
		village, speaker, or archive signum — is recorded in a separate place field and does not
		modify the tag itself. The tag <span class="sc">hk</span> is used when the source does not
		specify a variety more precisely. Sakhalin (<span class="sc">sa</span>) and Kuril
		(<span class="sc">ku</span>) examples appear exclusively as labelled contrasts; Hokkaido
		is the variety under description throughout. The corpus and the dialect sample are described
		in <Xr ch="oral-literature-and-spoken-corpora" /> and
		<Xr ch="dialect-sample-and-corpus-method" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>tag</th>
				<th>variety</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>HK</td><td>Hokkaido (variety not further specified)</td></tr>
			<tr><td>SAR</td><td>Saru</td></tr>
			<tr><td>CHI</td><td>Chitose</td></tr>
			<tr><td>ISH</td><td>Ishikari</td></tr>
			<tr><td>TOK</td><td>Tokachi</td></tr>
			<tr><td>HOR</td><td>Horobetsu</td></tr>
			<tr><td>SHI</td><td>Shizunai</td></tr>
			<tr><td>ASA</td><td>Asahikawa</td></tr>
			<tr><td>YAK</td><td>Yakumo</td></tr>
			<tr><td>SA</td><td>Sakhalin (labelled contrast)</td></tr>
			<tr><td>KU</td><td>Kuril (labelled contrast)</td></tr>
		</tbody>
	</table>

	<p>
		Each attested example cites the underlying source — the narrator, edition, or author whose
		data it contains — rather than any aggregating database. A corpus example is attributed to the
		edition (<Ref k="nakagawa2024" />, <Ref k="dalcorso2018" />, <Ref k="tamura1996" />) or to the
		narrator and archive slot directly. Works consulted only at second hand are flagged as
		<em>reported</em> in the bibliography and render with a distinguishing badge. An example
		constructed to illustrate a contrast or paradigm that is not directly quotable is marked
		<em>constructed example</em>; every example is either attributed or constructed, with no third
		category.
	</p>
</S>

<S t="Source citation and the bibliography" id="citation-format">
	<p>
		In-text citations use the author–year format, with a colon and page number when a specific
		location matters: <Ref k="nakagawa2024" p="163" /> or <Ref k="bugaeva2012" p="471" paren />.
		All cited keys are registered in a central bibliography; a key that does not appear in the
		registry causes a build error, so the citation apparatus is closed under the set of registered
		works.
	</p>

	<p>
		The key scheme is <em>lastnameYEAR</em>: all-lowercase ASCII, no diacritics, no spaces.
		Japanese authors are keyed by romanised surname with macrons stripped
		(<span lang="ja">中川裕</span> → <code>nakagawa2024</code>;
		<span lang="ja">佐藤知己</span> → <code>sato2008</code>). Multi-author works key on the first
		author's surname. Collisions within the same author and year receive a lower-case suffix letter
		in order of first citation (<code>sato2023a</code>, <code>sato2023b</code>); a topical suffix
		is used instead when it aids orientation (<code>bugaeva2021poss</code>,
		<code>bugaeva2021antip</code>). The complete bibliography is gathered in
		<Xr ch="consolidated-references-bibliography" />.
	</p>

	<p>
		Page references on examples follow the same colon-delimited syntax used in in-text citations,
		and may include section numbers, example numbers, or volume references where pagination is
		absent (e.g. <Ref k="nakagawa2024" p="§13.2" />). Multiple sources may be joined with a
		semicolon within a single citation field.
	</p>
</S>

<S t="Evidence-grade labels" id="evidence-grades">
	<p>
		Claims that go beyond the well-established consensus, or that represent genuinely contested
		positions in the literature, are tagged with a closed set of evidence-grade labels. The label
		is placed at the end of the sentence or clause it scopes over, in guillemets:
		<em>‹corpus-confirmed›</em>. Unmarked prose is treated as consensus-level; only claims that
		depart from that default require a label.
	</p>

	<table>
		<thead>
			<tr>
				<th>grade</th>
				<th>meaning</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><em>consensus</em></td>
				<td>all major sources agree; well-attested and uncontroversial</td>
			</tr>
			<tr>
				<td><em>contested</em></td>
				<td>sources genuinely disagree; the positions are presented without settling the question</td>
			</tr>
			<tr>
				<td><em>corpus-confirmed</em></td>
				<td>a claim verified against the corpus; the data bear it out</td>
			</tr>
			<tr>
				<td><em>corpus-suggested</em></td>
				<td>the corpus points toward the claim but the evidence is thin or indirect</td>
			</tr>
			<tr>
				<td><em>speculative</em></td>
				<td>plausible but unverified, e.g. a diachronic hypothesis or a gap-filling inference</td>
			</tr>
			<tr>
				<td><em>original-needs-review</em></td>
				<td>new analysis advanced in this grammar; flagged for editorial review</td>
			</tr>
		</tbody>
	</table>

	<p>
		The grade <em>original-needs-review</em> is restricted to the five domains in which new
		analysis is permitted: alignment, applicatives, noun incorporation, evidentiality, and
		clause linkage. The corpus-based grades presuppose the corpus described in
		<Xr ch="dialect-sample-and-corpus-method" />.
	</p>
</S>
