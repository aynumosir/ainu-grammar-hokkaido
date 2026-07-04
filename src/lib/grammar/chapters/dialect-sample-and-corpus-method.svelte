<!-- src/lib/grammar/chapters/dialect-sample-and-corpus-method.svelte -->
<script lang="ts">
	import { S, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="The Hokkaido dialect sample" id="dialect-sample">
	<p>
		Hokkaido Ainu was spoken in regionally differentiated forms whose systematic divergences bear
		on morphology, phonology, and lexical semantics alike. The grammar takes the
		<strong>Saru</strong> (SAR) and <strong>Chitose</strong> (CHI) varieties as its descriptive
		core. Saru is the most extensively documented Hokkaido dialect: Tamura's 1996 dictionary
		<Ref k="tamura1996" /> supplies a dense lexical record; Nakagawa's annotated oral-literature
		text collections from Nibutani and Biratori narrators give a genre-diverse discourse corpus
		<Ref k="nakagawatexts2000" />; and Nakagawa's 2024 grammar takes Saru as the default Hokkaido
		reference throughout <Ref k="nakagawa2024" />. Chitose is the second depth-documented variety:
		Nakagawa's 1995 dictionary provides the foundational Chitose lexical record <Ref
			k="nakagawa1995"
		/>; Satō's 2008 grammar integrates Chitose systematically alongside Saru comparisons <Ref
			k="sato2008"
		/>; and the NINJAL Glossed Audio Corpus of Folklore contributes additional Chitose material
		<Ref k="glossedcorpus2016" />. Six further dialect areas enter the description where sources
		allow: Shizunai (SHI), documented most fully by <Ref k="refsing1986" />; Horobetsu (HOR), the
		subject of Takahashi's morphosyntactic studies <Ref k="takahashi2017" /><Ref
			k="takahashi2018"
		/>; Tokachi (TOK), whose dialect is documented in Takahashi's Tokachi example collection <Ref
			k="takahashi2014texts"
		/> and evidentiality and deixis studies <Ref k="takahashi2013" /><Ref k="takahashi2011" />;
		Ishikari (ISH), described by <Ref k="asai1969" />; and the more sparsely attested Asahikawa
		(ASA) and Yakumo (YAK) areas. The tag <strong>HK</strong> marks data not assignable to a
		specific locality. Table 1 summarises the sample, its primary sources, and the relative depth
		of corpus coverage.
	</p>

	<table>
		<caption>Table 1. Hokkaido dialect varieties, primary sources, and corpus coverage</caption>
		<thead>
			<tr>
				<th>Tag</th>
				<th>Variety / area</th>
				<th>Primary descriptive sources</th>
				<th>Coverage depth</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>SAR</td>
				<td>Saru valley (Nibutani, Biratori)</td>
				<td
					><Ref k="tamura1996" />; <Ref k="nakagawatexts2000" />; <Ref k="nakagawa2024"
					/>; NINJAL corpus <Ref k="ninjal2003" /></td
				>
				<td>Descriptive core</td>
			</tr>
			<tr>
				<td>CHI</td>
				<td>Chitose</td>
				<td
					><Ref k="nakagawa1995" />; <Ref k="sato2008" />; <Ref k="glossedcorpus2016"
					/>; Bugaeva topical dictionary <Ref k="bugaeva2015topical" /></td
				>
				<td>Descriptive core</td>
			</tr>
			<tr>
				<td>SHI</td>
				<td>Shizunai (Shinhidaka)</td>
				<td><Ref k="refsing1986" />; ILCAA Saru/Shizunai materials <Ref k="ilcaa1976" /></td>
				<td>Supplementary</td>
			</tr>
			<tr>
				<td>HOR</td>
				<td>Horobetsu (Iburi)</td>
				<td><Ref k="takahashi2017" />; <Ref k="takahashi2018" />; Chiba University materials <Ref k="chiba2015" /></td>
				<td>Supplementary</td>
			</tr>
			<tr>
				<td>TOK</td>
				<td>Tokachi (Obihiro, Honbetsu)</td>
				<td><Ref k="takahashi2014texts" />; <Ref k="takahashi2013" />; <Ref k="takahashi2015" /></td>
				<td>Supplementary</td>
			</tr>
			<tr>
				<td>ISH</td>
				<td>Ishikari</td>
				<td><Ref k="asai1969" /></td>
				<td>Supplementary</td>
			</tr>
			<tr>
				<td>ASA</td>
				<td>Asahikawa</td>
				<td>Scattered attestation; no dedicated grammar</td>
				<td>Cited where documented</td>
			</tr>
			<tr>
				<td>YAK</td>
				<td>Yakumo</td>
				<td>Scattered attestation; no dedicated grammar</td>
				<td>Cited where documented</td>
			</tr>
		</tbody>
	</table>

	<p>
		The Hattori dialect dictionary <Ref k="hattori1964" /> and Satō's 2008 grammar provide
		comparative paradigm data for several of these areas even where no monographic description
		exists; those sources supply the supplementary attestation cited in phonological and
		morphological chapters. Tamura Masashi's grammatical description of the Shiranuka dialect
		<Ref k="tamuramasashi2011" /> adds a further locality for isolated phenomena.
	</p>
</S>

<S t="Dialect classification and the isogloss basis" id="dialect-classification">
	<p>
		The classification of Hokkaido Ainu dialects rests on a sequence of lexicostatistic and
		dialectometric studies beginning with Hattori and Chiri's 1960 founding survey <Ref
			k="hattorichiri1960"
		/>, which applied the 200-item Swadesh list to 19 localities (13 Hokkaido, 6 Sakhalin) and
		established the basic quantitative structure of inter-dialect similarity. Asai's 1974 cluster
		analysis of the same matrix, extended with Chitose data, produced the widely cited major
		bipartition of Hokkaido dialects into a southwestern group centred on Saru and an
		eastern-northern group <Ref k="asai1974" />. Tamura's 1988 encyclopedia article formalised
		this as the NE/SW division <Ref k="tamura1988" />, a terminology adopted in subsequent
		descriptive literature. Ono's reanalysis of the Asai matrix with updated statistical methods
		partially confirms but also complicates that bipartition <Ref k="ono2020" />, and Kirikae's
		place-name isogloss study documents the geographical boundary of the par/car alternation across
		Hokkaido <Ref k="kirikae1994" />. The current state-of-the-art synthesis is Nakagawa and
		Fukazawa's chapter in the 2022 Handbook, which evaluates the evidence for proposed boundaries
		and recommends a cautious multi-feature approach <Ref k="nakagawafukazawa2022" />. Fukazawa
		and Ono's 2024 study reconsiders those boundaries with additional data <Ref
			k="fukazawaono2024"
		/>, and Kasuga's 2026 dialectometric analysis extends coverage to 75 localities <Ref
			k="kasuga2026"
		/> ‹corpus-suggested›. The full treatment of Hokkaido dialect classification and its
		dialectometric basis is given in <Xr ch="hokkaido-dialect-classification-and-dialectometry"
		/>; the phonological microvariation documented in the corpus is discussed in <Xr
			ch="hokkaido-phonological-microvariation"
		/>.
	</p>

	<p>
		For the purposes of chapter-level analysis, dialectal variation is introduced where a
		phenomenon behaves differently across the tagged varieties and where the difference is
		attested in the primary sources. Sporadic attestation for a peripheral area is noted but
		not treated as systematic evidence. Where no source distinguishes dialects, the description
		applies to the Saru–Chitose southern baseline and should be understood as such.
	</p>
</S>

<S t="Sakhalin and Kuril Ainu as external contrast" id="sakhalin-kuril-contrast">
	<p>
		Sakhalin Ainu (sometimes called Enciw; tag <strong>SA</strong>) and Kuril Ainu (tag
		<strong>KU</strong>) are not objects of description in this grammar; they appear as systematic
		external contrast points. Murasaki's 1979 grammar of Sakhalin Ainu <Ref k="murasaki1979" />,
		Dal Corso's 2021 re-edition with translation and grammatical notes <Ref k="dalcorso2021" />,
		Dal Corso's 2024 study of Piłsudski's corpus phonetics and morphosyntax <Ref
			k="dalcorso2024"
		/>, and Tangiku's 2022 Handbook chapter on HA–SA differences <Ref k="tangiku2022" /> supply
		the Sakhalin data used for comparison. Piłsudski's 1912 text collection <Ref
			k="pilsudski1912"
		/> remains the primary philological witness for early-twentieth-century Sakhalin speech and
		contributes the SA examples cited in several chapters. Kuril material is attested only in
		historical sources and enters the grammar for specifically historical comparisons. Cross-dialect
		contrasts (SA or KU examples) are presented in tagged contrast display; their comparative
		status is indicated by the dialect tag alone, without repeated prose announcement. The
		dedicated comparative treatment is in <Xr ch="sakhalin-and-kuril-ainu-contrast" />.
	</p>
</S>

<S t="The attested text corpus" id="attested-corpus">
	<p>
		Examples in this grammar are drawn from a body of attested Hokkaido Ainu discourse totalling
		approximately 167,890 sentences. The Saru sub-corpus is the largest (around 77,964 sentences),
		followed by the Shizunai/southern materials (approximately 43,295 sentences), a Mukawa
		component (approximately 13,424 sentences), and the Chitose sub-corpus (approximately 4,420
		sentences), with smaller contributions from Tokachi, Horobetsu, and other localities; numbers
		reflect the alignment state at the time of authoring and will grow as further editions are
		added. The genre composition of the corpus is described in <Xr
			ch="oral-literature-and-spoken-corpora"
		/>.
	</p>

	<p>
		The component sources are:
	</p>

	<ul>
		<li>
			The NINJAL Corpus of Ainu Oral Literature <Ref k="ninjal2003" />, an aligned Hokkaido
			narrative corpus with audio, covering Saru and Chitose narrators (including 木村きみ and
			小田イト).
		</li>
		<li>
			Nakagawa's annotated oral-literature text collection, volumes 1–24 <Ref
				k="nakagawatexts2000"
			/>, covering uwepeker (prose tales) and kamuy yukar from Saru and Chitose narrators
			principally at Nibutani.
		</li>
		<li>
			The NINJAL Glossed Audio Corpus of Ainu Folklore <Ref k="glossedcorpus2016" />, an online
			morphologically annotated corpus of Chitose and Saru folktales.
		</li>
		<li>
			The ILCAA aligned Saru/Shizunai audio-text materials from recordings of 1976–1984 <Ref
				k="ilcaa1976"
			/>.
		</li>
		<li>
			The Biratori Town Ainu oral-literature archive, Saru-dialect oral literature held by the
			National Ainu Museum <Ref k="biratori1969" />.
		</li>
		<li>
			Chiba University Ainu language materials, covering Horobetsu and adjacent areas, with
			narrators including Kanenari Matsu <Ref k="chiba2015" />.
		</li>
		<li>
			Kayano's conversational Ainu recordings <Ref k="kayano1987" /> and the Hokkaidō Utari
			Kyōkai Akor Itak textbook <Ref k="utari1994" />, contributing conversational and
			pedagogical register.
		</li>
		<li>
			The Ainu Times (Ainu Koraci) learner newsletter <Ref k="ainukoraci1991" />, providing
			Saru and Chitose texts by speakers including 神崎雅好 and 萱野志朗.
		</li>
	</ul>

	<p>
		Each sentence in the corpus is associated with a source identifier, a narrator/author when
		known, and a dialect tag. Where a specific document is cited in a chapter,
		the example carries the appropriate <code>cite</code> attribute pointing to the underlying
		published edition, never to an aggregating platform (see <Xr
			ch="glossing-abbreviations-and-citation"
		/>).
	</p>
</S>

<S t="Corpus-frequency methodology" id="corpus-method">
	<p>
		Frequency claims in this grammar rest on string searches over the aligned corpus described
		above. The primary unit of count is the clause or sentence boundary as aligned in each
		source edition; where alignment is unavailable, the typographic sentence of the published
		text serves as proxy. Counts are reported as raw token frequencies (attestation counts)
		alongside the total search space (number of sentences or clauses in the relevant sub-corpus),
		to allow readers to assess the density and dialect distribution independently.
	</p>

	<p>
		Several caveats govern interpretation. String searches return all surface occurrences of a
		form, including homophonous lexical items; chapters note when a form is polysemous and
		flag the proportion of counts that can be unambiguously assigned to the grammatical use
		under discussion. The corpus is not uniformly dialect-balanced: Saru and Shizunai materials
		predominate, so raw frequency figures reflect that weighting. Where a claim requires
		genre-internal comparison — for instance, comparing evidential token frequencies in yukar
		versus conversational registers — the counts are restricted to the appropriate genre
		sub-corpus and the size of that sub-corpus is stated. Claims based on corpus counts are
		graded <em>‹corpus-confirmed›</em> when the evidence is unambiguous across a sufficient
		token base, and <em>‹corpus-suggested›</em> when the count supports the claim but the
		evidence is thin or restricted to one dialect or genre. The evidence-grade system is
		described in full in <Xr ch="glossing-abbreviations-and-citation" />.
	</p>

	<p>
		Where a chapter reports a specific count, the format is: form, raw count, sub-corpus size,
		and source or genre label (for example, <em>ruwe ne</em>: 16,350 tokens in the 167,890-sentence
		Hokkaido corpus). Normalisation to occurrences per thousand sentences is supplied when
		comparing across sub-corpora of substantially different sizes.
	</p>
</S>

<S t="Attribution: the original-source rule" id="attribution">
	<p>
		Every attested example in this grammar cites its underlying source — the specific published
		edition in which the sentence appears, named with its narrator or author where identified
		— and never a secondary aggregation platform. A sentence extracted from the NINJAL corpus
		cites the underlying text edition and narrator; a sentence from the Biratori archive cites
		the specific document held by the National Ainu Museum; a dictionary gloss cites the
		dictionary (Tamura 1996, Nakagawa 1995, Kayano 1996) in whose pages it appears. Citing
		an aggregating database or web platform in place of the underlying published edition
		obscures evidentiary weight and fails the attribution rule.
	</p>

	<p>
		Constructed examples — sentences composed to illustrate a grammatical point and not drawn
		from any attested source — are explicitly marked <code>constructed</code>. There is no
		intermediate category: an example either carries a <code>cite</code> attribute pointing to
		a resolved bibliography key, or it is marked <code>constructed</code>. A grammaticality
		judgment about a constructed sentence is the author's, derived from established patterns in
		the descriptive literature; where the judgment is uncertain it is marked and sourced to
		the nearest attested parallel. Narrator and locality information, when available, is given
		in the <code>place</code> field of the example and is not repeated in the prose surrounding
		it. The full glossing and citation conventions are set out in <Xr
			ch="glossing-abbreviations-and-citation"
		/>.
	</p>
</S>

<S t="Evidence grading" id="evidence-grading">
	<p>
		Every nontrivial descriptive or analytic claim in the grammar carries an explicit evidence
		grade drawn from a closed set. Uncontroversial, well-attested claims with consensus across
		the major sources carry no inline grade (the default is <em>‹consensus›</em>). Claims that
		the major sources disagree on are marked <em>‹contested›</em>, with the positions named
		and sourced. Claims checked against the corpus data are marked <em>‹corpus-confirmed›</em>
		(evidence robust) or <em>‹corpus-suggested›</em> (evidence thin or indirect). Plausible
		but unverified ideas, typically concerning diachrony or cross-dialectal inference beyond the
		attested record, are marked <em>‹speculative›</em>. Novel re-analyses by this grammar's
		authors, permitted only within the five theory-magnet domains identified in <Xr
			ch="aims-scope-design-philosophy"
		/>, are marked <em>‹speculative›</em> with the supporting reasoning attached.
		Comprehensive grading conventions and examples of each grade are given in <Xr
			ch="glossing-abbreviations-and-citation"
		/>.
	</p>
</S>

<S t="Community observations from the aynu-corpora archive" id="community-leads">
	<p>
		The aynu-corpora Discord community has accumulated a substantial body of grammatical
		observation — morpheme analyses, form-class proposals, productivity assessments,
		distributional generalisations — since approximately 2023 <Ref k="aynucorporadiscord" />.
		These community observations enter the grammar when three conditions hold: the item bears
		on a grammatical point covered in a chapter, it can be responsibly stated within the
		grammar's evidentiary framework, and no prior peer-reviewed treatment addresses the specific
		point. Each incorporated observation is cited with the member handle and date, graded
		according to the confidence level recorded in the archive (<em>asserted</em> items corroborated
		by the corpus or literature receive a standard grade; <em>proposed</em> items are marked
		‹contested›; <em>speculative</em> items are marked ‹speculative›; <em>disputed</em> items
		are noted as community-contested). Community observations are leads, not authorities;
		they supplement rather than displace the peer-reviewed descriptive literature.
	</p>
</S>
