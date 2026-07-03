<script lang="ts">
	import { S, Ex, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="Morpheme boundary symbols and the interlinear format" id="boundary-symbols">
	<p>
		The grammar's interlinear examples follow the <strong>Leipzig Glossing Rules</strong>
		<Ref k="comrie2015" paren />, adapted for the morphological structure of Ainu. A
		minimal example has three aligned lines: a morphemic segmentation line (<em>m</em>),
		a gloss line (<em>g</em>), and a free translation (<em>tr</em>). An optional
		surface-form line (<em>ain</em>) appears where the orthographic surface differs from
		the segmentation; an original-script line (<em>orig</em>) preserves katakana source
		text where the segmentation is editorial. The methodology governing source
		attribution, example selection, and the layout of example headers is set out in
		<Xr ch="glossing-abbreviations-and-citation" />.
	</p>
	<p>Three symbols mark morpheme structure within a word:</p>
	<table>
		<thead>
			<tr>
				<th>symbol</th>
				<th>function</th>
				<th>morphemic / gloss pair</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><code>-</code></td>
				<td>affix boundary — derivational morphology or plural stem suffixes</td>
				<td
					><i lang="ain-Latn">ray-ke</i> / die-<span class="sc">caus</span>
					'kill'</td
				>
			</tr>
			<tr>
				<td><code>=</code></td>
				<td>clitic (personal-index) boundary</td>
				<td><i lang="ain-Latn">ku=kor</i> / <span class="sc">1sg.a</span>=have 'I have it'</td>
			</tr>
			<tr>
				<td><code>.</code></td>
				<td>portmanteau dot — joins fused atoms within one gloss position</td>
				<td
					><span class="sc">1sg.a</span>, <span class="sc">4.s</span>, <span class="sc">2pl.o</span>,
					track.<span class="sc">poss</span></td
				>
			</tr>
		</tbody>
	</table>
	<p>
		The personal indexes (<i lang="ain-Latn">ku=</i>, <i lang="ain-Latn">e=</i>,
		<i lang="ain-Latn">eci=</i>, <i lang="ain-Latn">a=</i>, <i lang="ain-Latn">=an</i>,
		<i lang="ain-Latn">=as</i>, and the object prefixes) are uniformly marked with
		<code>=</code> throughout the grammar. The sources agree that they are prosodically
		separable from the stem; their morphological status as clitics versus prefixes is a
		contested analytical question treated in <Xr ch="person-marking-architecture" />.
		Derivational material — applicative prefixes, the causative suffix
		<i lang="ain-Latn">-ke</i>, the reflexive and reciprocal prefixes, and the plural
		stem suffix <i lang="ain-Latn">-pa</i> — is separated with <code>-</code>.
	</p>
	<p>
		The portmanteau dot <code>.</code> joins fused atoms within a single gloss position
		without inserting a morpheme boundary on the morphemic line. Two uses arise: (1)
		person-and-role portmanteaux (<span class="sc">1sg.a</span> for a single morpheme
		encoding both first-person singular and agent), and (2) a lexical-root gloss combined
		with a grammatical atom (<code>track.<span class="sc">poss</span></code> for
		<i lang="ain-Latn">ru-we</i> 'the trace of —'). Every atom in a dot-joined sequence
		must exist in the inventory below.
	</p>
	<Ex
		m="ku=ray-ke"
		g="1SG.A=die-CAUS"
		tr="I kill (something)."
		note="Illustrating the three boundary symbols: = separates the personal-index clitic ku= from the stem; - separates the verb root ray from the CAUS suffix. The portmanteau gloss 1SG.A joins two atoms with the dot, expressing person (1SG) and role (A) from a single morpheme."
		constructed
	/>
</S>

<S t="Gloss abbreviation inventory" id="abbreviation-inventory">
	<p>
		All grammatical-category labels in gloss lines are drawn from the table below. The
		grammar's <code>&lt;Ex&gt;</code> component validates every uppercase token at build
		time and throws if an atom is absent. Lexical glosses — the ordinary English words
		that translate roots and stems — are lowercase and do not require registration.
		The inventory follows the Leipzig Glossing Rules base set <Ref k="comrie2015" paren />
		extended with categories specific to the description of Hokkaido Ainu.
	</p>
	<table>
		<thead>
			<tr>
				<th>abbreviation</th>
				<th>meaning</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>1</td><td>first person</td></tr>
			<tr><td>1PL</td><td>first person plural</td></tr>
			<tr><td>1SG</td><td>first person singular</td></tr>
			<tr><td>2</td><td>second person</td></tr>
			<tr><td>2PL</td><td>second person plural</td></tr>
			<tr><td>2SG</td><td>second person singular</td></tr>
			<tr><td>3</td><td>third person</td></tr>
			<tr><td>3PL</td><td>third person plural</td></tr>
			<tr><td>3SG</td><td>third person singular</td></tr>
			<tr><td>4</td><td>fourth (indefinite/logophoric) person</td></tr>
			<tr><td>A</td><td>agent-like argument of a transitive verb</td></tr>
			<tr><td>ABL</td><td>ablative (source case)</td></tr>
			<tr><td>ADM</td><td>admonitive ('lest')</td></tr>
			<tr><td>ADV</td><td>adverbial(izer)</td></tr>
			<tr><td>ALLAT</td><td>allative</td></tr>
			<tr><td>ANAPH</td><td>anaphoric (discourse-tracking)</td></tr>
			<tr><td>ANTIP</td><td>antipassive</td></tr>
			<tr><td>APPL</td><td>applicative</td></tr>
			<tr><td>ASS</td><td>associative plural</td></tr>
			<tr><td>ATTR</td><td>attributive</td></tr>
			<tr><td>CAUS</td><td>causative</td></tr>
			<tr><td>CL</td><td>classifier (numeral counter suffix)</td></tr>
			<tr><td>COMIT</td><td>comitative</td></tr>
			<tr><td>COMP</td><td>complementizer</td></tr>
			<tr><td>COND</td><td>conditional</td></tr>
			<tr><td>CONJ</td><td>conjunctive (clause-linking) particle</td></tr>
			<tr><td>COP</td><td>copula</td></tr>
			<tr><td>DEL</td><td>deliberative</td></tr>
			<tr><td>DEM</td><td>demonstrative</td></tr>
			<tr><td>DES</td><td>desiderative</td></tr>
			<tr><td>DIM</td><td>diminutive</td></tr>
			<tr><td>DIST</td><td>distal</td></tr>
			<tr><td>EMPH</td><td>emphatic</td></tr>
			<tr><td>EP</td><td>epenthetic segment</td></tr>
			<tr><td>EVID</td><td>evidential (generic label)</td></tr>
			<tr><td>EXCL</td><td>exclusive</td></tr>
			<tr><td>FIN</td><td>final (sentence-final) particle</td></tr>
			<tr><td>FOC</td><td>focus</td></tr>
			<tr><td>GEN</td><td>genitive (adnominal/of-relation)</td></tr>
			<tr><td>HORT</td><td>hortative</td></tr>
			<tr><td>HUM</td><td>human (in classifiers)</td></tr>
			<tr><td>IMP</td><td>imperative</td></tr>
			<tr><td>INCL</td><td>inclusive</td></tr>
			<tr><td>INDEF</td><td>indefinite person</td></tr>
			<tr><td>INFR</td><td>inferential evidential</td></tr>
			<tr><td>INS</td><td>instrumental</td></tr>
			<tr><td>INT</td><td>intensifier</td></tr>
			<tr><td>INTERJ</td><td>interjection</td></tr>
			<tr><td>IPFV</td><td>imperfective</td></tr>
			<tr><td>ITR</td><td>iterative</td></tr>
			<tr><td>LOC</td><td>locative</td></tr>
			<tr><td>MIR</td><td>mirative</td></tr>
			<tr><td>NEG</td><td>negative</td></tr>
			<tr><td>NMLZ</td><td>nominalizer / nominalization</td></tr>
			<tr><td>O</td><td>object (patient-like argument of a transitive verb)</td></tr>
			<tr><td>ORD</td><td>ordinal</td></tr>
			<tr><td>PASS</td><td>passive</td></tr>
			<tr><td>PERL</td><td>perlative (through, along an area)</td></tr>
			<tr><td>PERS</td><td>personal (evidential of personal knowledge)</td></tr>
			<tr><td>PFV</td><td>perfective</td></tr>
			<tr><td>PL</td><td>plural</td></tr>
			<tr><td>POL</td><td>polite</td></tr>
			<tr><td>POSS</td><td>possessive — the "belonging" (affiliative) form of nouns</td></tr>
			<tr><td>PRF</td><td>perfect</td></tr>
			<tr><td>PROG</td><td>progressive</td></tr>
			<tr><td>PROH</td><td>prohibitive</td></tr>
			<tr><td>PROX</td><td>proximal</td></tr>
			<tr><td>PURP</td><td>purposive</td></tr>
			<tr><td>Q</td><td>question particle</td></tr>
			<tr><td>QUOT</td><td>quotative</td></tr>
			<tr><td>REC</td><td>recent</td></tr>
			<tr><td>RECP</td><td>reciprocal</td></tr>
			<tr><td>REFL</td><td>reflexive</td></tr>
			<tr><td>REP</td><td>reportative evidential</td></tr>
			<tr><td>RES</td><td>resultative</td></tr>
			<tr><td>S</td><td>single argument of an intransitive verb</td></tr>
			<tr><td>SG</td><td>singular</td></tr>
			<tr><td>SOFT</td><td>softener (imperative-mitigating particle)</td></tr>
			<tr><td>TOP</td><td>topic</td></tr>
			<tr><td>TRANSL</td><td>translative (as, become)</td></tr>
			<tr><td>TRVZ</td><td>transitivizer</td></tr>
			<tr><td>VBLZ</td><td>verbalizer</td></tr>
		</tbody>
	</table>

	<S t="Notes on role labels A, S, and O" id="aso-labels">
		<p>
			<strong>A</strong>, <strong>S</strong>, and <strong>O</strong> are the core
			argument-role labels of the S/A/O framework used throughout the grammar: A for the
			transitive subject (agent), S for the sole argument of an intransitive verb, and O
			for the transitive object (patient). The choice of these labels over
			<span class="sc">erg</span> and <span class="sc">abs</span> reflects the
			mixed alignment of the Hokkaido paradigm — where 1SG is nominative–accusative (S=A≠O),
			the second and third persons are neutral (S=A=O), and the first-person plural exclusive
			and the fourth person are tripartite (S≠A≠O) — so neither an ergative nor a nominative
			characterization covers the whole system. The paradigm and the alignment question are
			set out in <Xr ch="person-marking-architecture" />.
		</p>
	</S>

	<S t="Notes on the fourth person" id="fourth-person-label">
		<p>
			<strong>4</strong> labels the formal fourth person by form class, following
			Nakagawa's framework of four numbered persons <Ref k="nakagawa2024" p="163–179" />.
			<strong>INDEF</strong> is used when the gloss targets the referential value —
			indefinite or impersonal — rather than the form class. The two atoms may appear in
			portmanteau sequences: 4.A, 4.S, and 4.O index the three role slots of the
			fourth-person form set. The full referential range of the fourth person — inclusive
			'we', impersonal agent-defocusing, honorific second person, narrative first person,
			and logophoric reference — is treated in
			<Xr ch="indefinite-fourth-person-paradigm" />.
		</p>
	</S>

	<S t="Notes on POSS and ANTIP" id="poss-antip-notes">
		<p>
			<strong>POSS</strong> glosses two distinct but related phenomena: the person-possessive
			prefix slot (<i lang="ain-Latn">ku=cise</i>, <span class="sc">1sg.poss</span>=house
			'my house'), and the affiliative/possessed suffix that marks the "belonging form" of
			a noun or that nominalizes a clause-internal constituent (<i lang="ain-Latn">ru-we</i>,
			track-<span class="sc">poss</span>, 'the trace of —'). The concept form versus the
			affiliative (possessed) form is defined in <Xr ch="concept-form-affiliative-form" />;
			the English label POSS here corresponds to what the Japanese tradition calls 所属形
			<em>shozokuei</em>, sometimes rendered AFF (affiliative) in English-medium work
			<Ref k="bugaeva2022" />.
		</p>
		<p>
			<strong>ANTIP</strong> glosses the detransitivizing prefix
			<i lang="ain-Latn">i-</i> throughout the grammar, following Bugaeva's explicit
			antipassive analysis <Ref k="bugaeva2021antip" />. Its analysis and its boundary with
			the homophonous fourth-person object prefix <i lang="ain-Latn">i=</i> are treated in
			<Xr ch="antipassive-detransitive-i" />.
		</p>
	</S>

	<S t="Notes on evidential labels" id="evidential-labels">
		<p>
			Four labels cover the Hokkaido Ainu evidential system: <strong>INFR</strong>
			(inferential), <strong>REP</strong> (reportative), <strong>PERS</strong> (personal
			— evidential of direct personal knowledge), and <strong>EVID</strong> (generic
			evidential, used where the specific type is not at issue or is analytically
			undifferentiated in the source). These map onto the nominalization-plus-copula
			evidential construction described in <Xr ch="evidential-schema-overview" />. The
			relationship to the more fine-grained labeling of Dal Corso (2018) is set out in
			the concordance section below.
		</p>
	</S>
</S>

<S t="Dialect and locality labels" id="dialect-labels">
	<p>
		Every interlinear example carries a dialect tag indicating which variety of Ainu it
		represents. The closed set of recognized tags is listed below; the tag appears in the
		example header as the <em>dial</em> attribute. Finer locality — the specific
		community, speaker, or recording site — is recorded in the <em>place</em> field rather
		than as a new dialect tag. The dialect survey and the principles governing example
		selection are set out in <Xr ch="dialect-sample-and-corpus-method" />.
	</p>
	<table>
		<thead>
			<tr>
				<th>tag</th>
				<th>variety</th>
			</tr>
		</thead>
		<tbody>
			<tr><td>HK</td><td>Hokkaido (dialect not further specified)</td></tr>
			<tr><td>SAR</td><td>Saru</td></tr>
			<tr><td>CHI</td><td>Chitose</td></tr>
			<tr><td>ISH</td><td>Ishikari</td></tr>
			<tr><td>TOK</td><td>Tokachi</td></tr>
			<tr><td>HOR</td><td>Horobetsu</td></tr>
			<tr><td>SHI</td><td>Shizunai</td></tr>
			<tr><td>ASA</td><td>Asahikawa</td></tr>
			<tr><td>YAK</td><td>Yakumo</td></tr>
			<tr><td>SA</td><td>Sakhalin (cited for contrast)</td></tr>
			<tr><td>KU</td><td>Kuril (cited for contrast)</td></tr>
		</tbody>
	</table>
	<p>
		The tag HK is used where a source covers more than one Hokkaido locality or where
		the specific site cannot be determined. Sakhalin (SA) and Kuril (KU) examples appear
		only to illuminate contrasts with the Hokkaido system and are always tagged as such.
		No ad-hoc locality tags are introduced; the <em>place</em> field carries any
		further detail.
	</p>
</S>

<S t="Notation conventions" id="notation">
	<p>Several conventional marks appear outside the three-line gloss proper:</p>
	<table>
		<thead>
			<tr>
				<th>mark</th>
				<th>use</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>*</td>
				<td
					>Placed before a word or morpheme: (a) reconstructed or diachronically
					postulated form (Proto-Ainu); or (b) ungrammatical form in a cited or
					constructed example. Context distinguishes the two uses.</td
				>
			</tr>
			<tr>
				<td>?</td>
				<td>Marginal, degraded, or speaker-variable acceptability.</td>
			</tr>
			<tr>
				<td>Ø</td>
				<td
					>Zero exponent (null morph); used in paradigm tables and in glosses where
					a grammatical category is present but has no phonological realization (third
					person in Hokkaido Ainu is the main case).</td
				>
			</tr>
			<tr>
				<td>‹grade›</td>
				<td
					>Evidence-grade label scoping over the immediately preceding claim. The
					closed set is: ‹consensus›, ‹contested›, ‹corpus-confirmed›,
					‹corpus-suggested›, ‹speculative›, ‹original-needs-review›. Unmarked prose
					is treated as consensus and is not labelled.</td
				>
			</tr>
		</tbody>
	</table>
	<p>
		The Latin-script phonemic transcription — the grammar's primary writing system for
		Ainu forms — is described in <Xr ch="latin-phonemic-transcription" />. Orthographic
		variation, word-division conventions, and the relationship between different
		romanization standards in the literature are covered in
		<Xr ch="orthographic-standardization-and-word-division" />. Technical grammatical
		terms used throughout the grammar are defined in
		<Xr ch="glossary-grammatical-terms" />.
	</p>
</S>

<S t="Cross-source glossing concordance" id="concordance">
	<p>
		The descriptive literature on Hokkaido Ainu uses divergent glossing conventions.
		English-medium typological treatments and Japanese-medium reference grammars do not
		share a unified standard, and examples drawn from these sources and re-glossed
		here may carry different labels than the originals. The table below maps the most
		consequential divergences.
	</p>
	<table>
		<thead>
			<tr>
				<th>category</th>
				<th>this grammar</th>
				<th>Bugaeva (2012, 2022)</th>
				<th>Dal Corso (2018)</th>
				<th>notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>transitive subject (agent)</td>
				<td>A</td>
				<td>A</td>
				<td>A</td>
				<td>S/A/O labels shared across English-medium work</td>
			</tr>
			<tr>
				<td>intransitive subject</td>
				<td>S</td>
				<td>S</td>
				<td>S</td>
				<td></td>
			</tr>
			<tr>
				<td>transitive object (patient)</td>
				<td>O</td>
				<td>O</td>
				<td>O</td>
				<td></td>
			</tr>
			<tr>
				<td>fourth/indefinite person</td>
				<td>4, INDEF</td>
				<td>4, INDEF</td>
				<td>4, INDEF</td>
				<td>Japanese tradition: 不定人称 <Ref k="nakagawa2024" p="163" /></td>
			</tr>
			<tr>
				<td>antipassive prefix <i lang="ain-Latn">i-</i></td>
				<td>ANTIP</td>
				<td>ANTIP</td>
				<td>ANTIP</td>
				<td>
					<Ref k="bugaeva2021antip" />; Japanese tradition: 不定目的語接頭辞 <Ref
						k="sato2008"
						p="78–80"
					/>
				</td>
			</tr>
			<tr>
				<td>possessed/affiliative suffix</td>
				<td>POSS</td>
				<td>AFF</td>
				<td>POSS</td>
				<td>Japanese tradition: 所属形語尾 <em>shozokuei go-bi</em></td>
			</tr>
			<tr>
				<td>nominalizers (<i lang="ain-Latn">-p/-pe</i>, <i lang="ain-Latn">-i/-hi</i>)</td>
				<td>NMLZ</td>
				<td>NMLZ</td>
				<td>NMLZ</td>
				<td>Japanese tradition: 名詞化辞; treated in <Xr ch="nominalization-p-pe" /></td>
			</tr>
			<tr>
				<td>inferential evidential (<i lang="ain-Latn">ruwe ne</i>)</td>
				<td>INFR</td>
				<td>EVID</td>
				<td><span class="sc">dir.rsn</span> / <span class="sc">dir.knw</span></td>
				<td>
					Dal Corso's system distinguishes two direct-evidential types by source
					reliability <Ref k="dalcorso2018" p="304–309" />
				</td>
			</tr>
			<tr>
				<td>reportative evidential (<i lang="ain-Latn">hawe ne</i>)</td>
				<td>REP</td>
				<td>EVID</td>
				<td><span class="sc">ind.rep</span></td>
				<td>indirect-reportative in Dal Corso's eight-term system</td>
			</tr>
			<tr>
				<td>applicative prefixes <i lang="ain-Latn">e-</i>, <i lang="ain-Latn">ko-</i>, <i lang="ain-Latn">o-</i></td>
				<td>APPL</td>
				<td>APPL</td>
				<td>APPL</td>
				<td>treated in <Xr ch="applicative-system-overview" /></td>
			</tr>
			<tr>
				<td>copula <i lang="ain-Latn">ne</i></td>
				<td>COP</td>
				<td>COP</td>
				<td>COP</td>
				<td></td>
			</tr>
		</tbody>
	</table>

	<p>
		The evidential labels warrant the most attention for readers moving between this
		grammar and Dal Corso (2018). Dal Corso employs a fine-grained eight-term system
		organized by two parameters — source reliability and event accessibility — yielding
		<span class="sc">dir.rsn</span> (direct/reasoning), <span class="sc">dir.knw</span>
		(direct/knowledge), <span class="sc">ind.vis</span> (indirect/visual),
		<span class="sc">ind.rep</span> (indirect/reportative), <span class="sc">ind.sens</span>
		(indirect/sensory), and their extensions <Ref k="dalcorso2018" p="304–309" />. This
		grammar uses four simplified labels (INFR, REP, PERS, EVID) that correspond to
		the grammatical construction rather than to Dal Corso's semantic parameters; the
		mapping is discussed alongside the construction in <Xr ch="evidential-schema-overview" />.
	</p>
	<p>
		Refsing (1986) predates the Leipzig Glossing Rules <Ref k="refsing1986" /> and uses
		a non-standardized labeling system with lowercase labels; readers consulting her
		Shizunai paradigm tables should use this grammar's abbreviation inventory as the
		mapping reference. The Japanese-medium grammars of Satō (2008) and Nakagawa (2024)
		work predominantly with Japanese metalanguage rather than Latin-script gloss
		abbreviations <Ref k="sato2008" />; <Ref k="nakagawa2024" />; where they do supply
		English-style labels in comparative sections, these are generally compatible with
		the inventory here.
	</p>
	<p>
		The AFF (affiliative) versus POSS (possessive) difference reflects a genuine
		terminological divergence between traditions. Bugaeva aligns with the Japanese
		所属形 (<em>shozokuei</em>) label — translating it as "affiliative" — while this
		grammar uses POSS to emphasize the morphological category (the "belonging form"
		that the noun takes when possessed or when it heads a nominalized constituent).
		The concept form versus affiliative-form opposition, and the morphological evidence
		bearing on the choice, are defined in <Xr ch="concept-form-affiliative-form" />.
	</p>
</S>
