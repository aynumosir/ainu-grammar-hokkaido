<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Semantics and clause structure" id="overview">
	<p>
		The intransitive verbs <A w="an" gl="exist, be, live (sg)" /> (singular) and
		<A w="oka" gl="exist, be, live (pl)" /> / <A w="okay" gl="exist, be, live (pl)" />
		(plural) are the existential and locational predicates of Hokkaido Ainu. Both animate
		and inanimate subjects appear with them: a single verb covers the domain that Japanese
		divides between <span lang="ja">いる</span> (animate) and <span lang="ja">ある</span>
		(inanimate), so that 'there is a big house' and 'a person is there' are expressed by
		the same predicate <Ref k="yoshikawa2022" p="629–630" />;
		<Ref k="nakagawa2022pos" p="474" />; <Ref k="sato2008" p="3–4" />.
		Placed against the typology of intransitive predication
		<Ref k="stassen1997" paren />, the construction is an
		<em>existential-locational</em> predicate: it asserts that something exists or is
		found at a location, with the location expressed as an oblique.
	</p>
	<p>
		The stative reading 'exist, be located, live' alternates with an inchoative one:
		<i lang="ain-Latn">paykar an</i> 'spring comes / it becomes spring' and
		<i lang="ain-Latn">kunneywa an</i> 'it becomes morning' show the onset-of-existence
		value <Ref k="nakagawa2024" p="118–119" />; <Ref k="nakagawa2022pos" p="477" />.
		The same static–inchoative duality holds for the copula <i lang="ain-Latn">ne</i>
		and for property-concept verbs; neither is morphologically marked for the change
		reading. The division of labour between the copula and the existential is treated in
		<Xr ch="copula-ne-predicate-nominals" />.
	</p>
	<p>
		By raw corpus frequency, <i lang="ain-Latn">an</i> ranks first in the approximately
		1.57 million–token Hokkaido corpus (86,986 occurrences) and <i lang="ain-Latn">oka</i>
		twenty-third (9,637). Both figures fold in the fourth-person intransitive suffix
		<i lang="ain-Latn">=an</i> and the aspect-auxiliary uses treated elsewhere, so they
		are upper bounds on the existential predicate proper; even so, the rank signals how
		load-bearing this predicate type is <Ref k="nakagawa2024" p="146" /> ‹corpus-confirmed›.
	</p>

	<S t="Strict intransitivity and the locational frame" id="valency-frame">
		<p>
			<i lang="ain-Latn">an</i> is strictly intransitive: it takes one NP argument
			(the entity that exists or is located) and no second bare NP. A location is
			expressed as an oblique, canonically the locative postpositional phrase
			<i lang="ain-Latn">N or ta</i> (or bare <i lang="ain-Latn">N ta</i>), not as
			a second NP argument. Satō's diagnostic makes this concrete: a sentence
			modelled on a Japanese double-NP structure,
			<i lang="ain-Latn">*Tokiyo anakne poro cise poronno an</i>
			('Tokyo big-houses many exist', treating Tokyo as a bare NP co-argument),
			is disfavoured; the grammatical form marks the location overtly —
			<i lang="ain-Latn">Tokiyo ot ta anakne poro cise poronno an</i>
			'in Tokyo there are many big houses' <Ref k="sato2008" p="3–4" />.
		</p>
		<p>
			The community formulation of the same rule is direct: <i lang="ain-Latn">an</i>
			is intransitive, so <i lang="ain-Latn">*A B an</i> is ill-formed; 'A is at B'
			is <i lang="ain-Latn">A B or ta an</i>. The transitive locational verb
			<A w="un" gl="be at (transitive)" /> works differently — because it takes the
			location as its object, <i lang="ain-Latn">A B un</i> is well-formed
			<Ref k="aynucorporadiscord" />;
			nukopoli, aynu-corpora Discord, 2024 ‹consensus›.
		</p>
		<p>
			The locative noun <A w="or" gl="place (possessed form of o)" /> in
			<i lang="ain-Latn">or ta</i> is the <Xr ch="concept-form-affiliative-form">possessed /
			affiliative form</Xr> of the spatial root <i lang="ain-Latn">o</i> 'place',
			expressing 'the place of —'. The detailed distribution of
			<i lang="ain-Latn">or</i> vs bare <i lang="ain-Latn">ta</i> in locational
			constructions is documented for the Chitose dialect by
			<Ref k="sato2021" />.
		</p>

		<Ex
			m="poro cise an hine"
			g="big house exist CONJ"
			tr="There was a big house, and —"
			cite="ilcaa1976"
			dial="SAR"
			place="Kawagami Matsuko, 'uwepeker 民話11', AA研アイヌ語資料 [aa-irc/013#85]"
			note="Bare existential predication: a single NP subject; no second argument. The conjunctive hine continues the narrative clause chain."
		/>

		<Ex
			m="orwano ku=cise or ta ku=an kor"
			g="then 1SG.POSS=house place LOC 1SG.S=exist while"
			tr="Then, while I was in my house, —"
			cite="nakagawa2024:164"
			dial="ISH"
			place="Nakagawa ex. 104, after Sunazawa Kura 1983: 75"
			note="Locational predication: the oblique or ta 'at the place of' follows the location NP. The first-person intransitive prefix ku= indexes the subject on the existential stem."
		/>

		<table>
			<thead>
				<tr>
					<th>clause type</th>
					<th>template</th>
					<th>example</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>bare existential (sg)</td>
					<td><i lang="ain-Latn">[SUBJ-NP] an</i></td>
					<td><i lang="ain-Latn">poro cise an</i> 'there is a big house'</td>
				</tr>
				<tr>
					<td>bare existential (pl)</td>
					<td><i lang="ain-Latn">[SUBJ-NP] oka / okay</i></td>
					<td><i lang="ain-Latn">hekattar oka</i> 'there are children'</td>
				</tr>
				<tr>
					<td>locational (sg)</td>
					<td><i lang="ain-Latn">[SUBJ-NP] [LOC or ta] an</i></td>
					<td><i lang="ain-Latn">iwor or ta an</i> 'is in the mountains'</td>
				</tr>
				<tr>
					<td>locational (pl)</td>
					<td><i lang="ain-Latn">[SUBJ-NP] [LOC or ta] oka</i></td>
					<td><i lang="ain-Latn">kotan ta oka</i> 'they are in the village'</td>
				</tr>
				<tr>
					<td>negative existential</td>
					<td><i lang="ain-Latn">[SUBJ-NP] isam</i></td>
					<td><i lang="ain-Latn">nep ka isam</i> 'there is nothing'</td>
				</tr>
				<tr>
					<td>locational transitive (alt.)</td>
					<td><i lang="ain-Latn">[SUBJ-NP] [LOC-NP] un</i></td>
					<td><i lang="ain-Latn">kotan un</i> 'be in the village (transitive <i lang="ain-Latn">un</i>)'</td>
				</tr>
			</tbody>
		</table>
	</S>
</S>

<S t="Number suppletion: an (sg) and oka / okay (pl)" id="number-suppletion">
	<p>
		The existential verb is one of the canonical suppletive number pairs in Hokkaido Ainu
		<Ref k="nakagawa2024" p="146" />, a pattern documented cross-linguistically in
		<Ref k="corbett2000" paren />. The singular stem <i lang="ain-Latn">an</i> is uniform
		across all dialects. The plural stem varies: <i lang="ain-Latn">oka</i> is the prevalent
		form in Saru, Chitose, Shizunai, and Mukawa; <i lang="ain-Latn">okay</i> prevails in
		other dialects and, even within <i lang="ain-Latn">oka</i>-dialects, appears before the
		nominalizer <i lang="ain-Latn">pe</i> / <i lang="ain-Latn">p</i>
		(thus <i lang="ain-Latn">okay pe</i>, not <i lang="ain-Latn">*oka pe</i>)
		<Ref k="nakagawa2024" p="146" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>stem</th>
				<th>number</th>
				<th>dialectal distribution</th>
				<th>notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">an</i></td>
				<td>singular</td>
				<td>all Hokkaido dialects</td>
				<td></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">oka</i></td>
				<td>plural</td>
				<td>Saru, Chitose, Shizunai, Mukawa, and the corpus majority</td>
				<td>rank 23 in the full corpus (9,637 tokens, homonym-mixed)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">okay</i></td>
				<td>plural</td>
				<td>other dialects; before <i lang="ain-Latn">pe</i>/<i lang="ain-Latn">p</i> even
					in <i lang="ain-Latn">oka</i>-dialects</td>
				<td>rank 96 in the full corpus (2,608 tokens, homonym-mixed)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">isam</i></td>
				<td>negative (suppletive)</td>
				<td>all dialects</td>
				<td>replaces <i lang="ain-Latn">an</i>/<i lang="ain-Latn">oka(y)</i> entirely
					in negation; see <a href="#negative-existential-isam">§ below</a></td>
			</tr>
		</tbody>
	</table>

	<p>
		The plural stem is controlled by subject number in straightforward cases: a
		singular subject nominal licenses <i lang="ain-Latn">an</i>, a plural nominal
		licenses <i lang="ain-Latn">oka</i>. The full agreement mechanics are treated in
		<Xr ch="person-number-interactions" />.
	</p>

	<Ex
		m="mippoho tan kotan ta an"
		g="grandchild this village LOC exist"
		tr="My grandchild lives in this village."
		constructed
		note="Singular subject controls singular an. The inalienable-possessed form mippoho encodes 'my grandchild'. Based on Nakagawa (2024: 146)."
	/>

	<Ex
		m="mippoutari tan kotan ta oka"
		g="grandchildren this village LOC exist.PL"
		tr="My grandchildren live in this village."
		constructed
		note="Plural subject mippoutari 'my grandchildren' controls plural oka. Based on Nakagawa (2024: 146)."
	/>

	<p>
		The fourth-person (honorific / narrative / inclusive) paradigm introduces a mismatch
		between referential and grammatical number. When the intransitive fourth-person suffix
		<i lang="ain-Latn">=an</i> is attached, the existential stem is obligatorily the
		<em>plural</em> <i lang="ain-Latn">oka</i> — even when the argument is referentially
		singular. The phrase <i lang="ain-Latn">sinen ne oka=an</i> 'I am living alone'
		(with <i lang="ain-Latn">sinen ne</i> 'being only one, alone') illustrates this
		directly: a singular first-person narrator uses the plural stem because the
		fourth-person suffix requires it. Outside the Saru–Chitose core area, this
		singular-referent / plural-stem pattern is, if anything, the pan-Hokkaido norm
		<Ref k="nakagawa2024" p="160–161, 178" /> ‹corpus-confirmed›.
		The fourth-person paradigm and its number behavior are treated in
		<Xr ch="person-marking-architecture" /> and <Xr ch="person-number-interactions" />.
	</p>

	<Ex
		m="a=kor kotan ta oar sinen ne oka=an wa"
		g="4.A=have village LOC truly one COP exist.PL=4.S CONJ"
		tr="I was living all alone in my village, and —"
		constructed
		dial="SHI"
		note="Singular-referent/plural-verb: the narrative first person triggers the fourth-person suffix =an, which requires plural stem oka, even though oar sinen ne 'truly alone' makes the single referent explicit. Constructed after Nakagawa (2024: 178, exx. 151–152; Shizunai and Kushiro narrators)."
	/>
</S>

<S t="The negative existential isam" id="negative-existential-isam">
	<p>
		The negative existential <A w="isam" gl="not exist, be absent, die" /> is the
		suppletive lexical negative of <i lang="ain-Latn">an</i> / <i lang="ain-Latn">oka(y)</i>:
		it occupies the same argument slot and takes person affixes normally
		(<i lang="ain-Latn">e=isam</i> 'you are not there / you are absent')
		<Ref k="bugaeva2012" p="496" />; <Ref k="nakagawa2024" p="450" />.
		Its historical depth is notable: <i lang="ain-Latn">isam</i> 'ない' appears in the
		1630 <i>Matsumae no Kotoba</i> wordlist, among the earliest documentary records of
		the language. The full treatment of existential negation, including the
		<i lang="ain-Latn">wa isam</i> completive ('V and be gone'), is in
		<Xr ch="negation-existential-possessive-isam" />; the standard clausal negation
		<i lang="ain-Latn">somo</i> is in <Xr ch="negation-somo-standard-clausal" />.
	</p>
	<p>
		The parallel negative for the possessive predicate <i lang="ain-Latn">kor</i> 'have'
		is the transitive <A w="sak" gl="lack, be without" />, which takes the possessor as
		its subject and the lacked item as its object:
		<i lang="ain-Latn">tamasay ka sak</i> 'has no necklace even'.
		This LACK/HAVE pairing parallels the EXIST/ISAM pairing and shows the same
		suppletive negation strategy across the non-dynamic predicate system.
	</p>

	<table>
		<thead>
			<tr>
				<th>construction</th>
				<th>value</th>
				<th>notes</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">isam</i></td>
				<td>negative existential: 'not exist, be absent, die'</td>
				<td>suppletive; full person-affix paradigm; default negation of <i lang="ain-Latn">an</i>/<i lang="ain-Latn">oka(y)</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">somo an</i></td>
				<td>negated existential</td>
				<td>standard-negation pattern; less common than suppletive <i lang="ain-Latn">isam</i></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">sak</i></td>
				<td>negative possessive: 'lack, be without'</td>
				<td>suppletive negative of <i lang="ain-Latn">kor</i>; transitive (possessor = A, lacked item = O)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">V wa isam</i></td>
				<td>completive / disappearance</td>
				<td>'do V and be gone'; existential-negative as aspect auxiliary; see <Xr ch="existential-aspect-an-oka" /></td>
			</tr>
		</tbody>
	</table>

	<Ex
		m="mak ne hine nea cawan isam isam"
		g="how COP CONJ that bowl not.exist not.exist"
		tr="Where has that bowl gone? Gone?"
		cite="nakagawa2024:410"
		dial="SAR"
		place="Nakagawa ex. 849"
		note="isam as the whole predicate of a content question. The repeated isam in the source text marks rhetorical emphasis."
	/>

	<Ex
		m="sinen ka isam ruwe ne"
		g="one even not.exist track-POSS COP"
		tr="There was not even one."
		cite="ainukoraci1991"
		dial="SAR"
		place="Kanzaki Masayoshi, 'Nibutani kotan ta cip-sanke an', Ainu Times [ainu-times/003/0#21]"
		note="sinen ka isam 'not even one exists': the negative-polarity particle ka 'even' combines with isam to express total absence (NPI construction)."
	/>
</S>

<S t="Grammaticalized uses of an" id="grammaticalized-uses">
	<p>
		Beyond its core existential and locational function, <i lang="ain-Latn">an</i> enters
		several grammaticalized constructions that are cross-referenced here but treated in
		full elsewhere.
	</p>

	<S t="Existential aspect auxiliaries" id="aspect-auxiliaries">
		<p>
			Combining <i lang="ain-Latn">an</i> with a preceding conjunctive particle yields
			the existential-type aspect periphrases:
			<i lang="ain-Latn">V wa an</i> (resultative/continuative, '〜ている'),
			<i lang="ain-Latn">V kor an</i> (progressive),
			<i lang="ain-Latn">V kane an</i>, and <i lang="ain-Latn">V hine an</i>.
			Yoshikawa documents these for the Saru and Chitose dialects and notes that
			<i lang="ain-Latn">an</i> in these constructions retains its concrete existential
			value — it requires a personal affix and participates in subject-number agreement,
			distinguishing it from a fully grammaticalized auxiliary
			<Ref k="yoshikawa2022" p="629" />; <Ref k="sato2008" p="4" />.
			The negative counterpart <i lang="ain-Latn">wa isam</i> (completive, '〜てしまう')
			presses the negative existential <i lang="ain-Latn">isam</i> into the same
			periphrastic slot. The full paradigm of existential-type aspect forms is in
			<Xr ch="existential-aspect-an-oka" />; the TAM overview is in
			<Xr ch="tam-overview" />.
		</p>
		<p>
			Closely related is the stative-possessive <i lang="ain-Latn">kor wa an</i>
			('have-and-be', expressing resultant or persistent possession), where the
			possessive verb <i lang="ain-Latn">kor</i> is followed by resultative
			<i lang="ain-Latn">wa an</i>; this sits at the possession–aspect interface and
			is treated in <Xr ch="predicative-possession-clauses" />.
		</p>
	</S>

	<S t="Ambient predicates: mean = me + an" id="ambient-mean">
		<p>
			The zero-valency ambient predicate <A w="mean" gl="it is cold (weather)" />
			'the weather is cold' is transparently analysable as
			<i lang="ain-Latn">me</i> 'cold' + <i lang="ain-Latn">an</i> 'exist' — literally
			'coldness exists' <Ref k="shibatani1990" p="19" />; <Ref k="nakagawa2024" p="126" />.
			It belongs to a class of ambient meteorological predicates formed by incorporating
			an environmental noun into <i lang="ain-Latn">an</i> or a similar root
			(<i lang="ain-Latn">sirpirka</i> 'the weather is good', from
			<i lang="ain-Latn">sir</i>- 'scene/land' + <i lang="ain-Latn">pirka</i>). These
			are full verbs: the appearance of subjectlessness follows from noun incorporation,
			not from the absence of a predicate. The one-place vs zero-place contrast —
			zero-place <i lang="ain-Latn">mean</i> 'the weather is cold' vs one-place
			<i lang="ain-Latn">merayke=an</i> 'I feel cold' — is developed in
			<Xr ch="property-concept-predication" />.
		</p>
	</S>

	<S t="The ne / an mood alternation in clause-final evidential frames" id="evidential-frame">
		<p>
			In the sentence-final evidential construction, the copula <i lang="ain-Latn">ne</i>
			and the existential <i lang="ain-Latn">an</i> alternate by illocutionary force.
			A formal noun (possessed-form nominalizer) followed by the copula yields a
			declarative — <i lang="ain-Latn">ruwe ne</i>, <i lang="ain-Latn">hawe ne</i>,
			<i lang="ain-Latn">siri ne</i>, <i lang="ain-Latn">humi ne</i> — while the same
			formal noun followed by the existential forms a content question:
			<i lang="ain-Latn">ruwe an?</i>, <i lang="ain-Latn">hawe an?</i>, and so on
			<Ref k="nakagawa2024" p="392–395" />.
			The copula↔existential opposition is thus grammaticalized into a mood distinction
			at the right periphery of the clause. The full evidential-frame paradigm is in
			<Xr ch="evidential-schema-overview" />; the inferential
			<i lang="ain-Latn">ruwe ne</i> is treated in detail in
			<Xr ch="ruwe-ne-inferential" />, and the TAM and negation behavior of these frames
			is in <Xr ch="nonverbal-predicate-tam-negation" />.
		</p>
	</S>

	<S t="Predicative possession: BE-type an and isam" id="predicative-possession">
		<p>
			The existential <i lang="ain-Latn">an</i> (sg) / <i lang="ain-Latn">okay</i> (pl)
			and the negative <i lang="ain-Latn">isam</i> also appear in a BE-type predicative
			possession construction, restricted to
			<Xr ch="concept-form-affiliative-form">affiliative-form</Xr> inalienable nouns
			(body-part and kinship terms in their possessed morphology):
			<i lang="ain-Latn">a=yupi an</i> 'I have an elder brother' (literally
			'my-elder-brother exists'), <i lang="ain-Latn">a=po-ho ka an</i> 'I even have a son'
			<Ref k="huber2025" p="251–253" />.
			This is structurally the same existential <i lang="ain-Latn">an</i> serving a
			possessive reading by virtue of the affiliative-form subject. The HAVE-type
			<i lang="ain-Latn">kor</i> construction handles the majority of predicative
			possession; a community-proposed restriction — that inanimate possessors cannot
			take <i lang="ain-Latn">kor</i> and are paraphrased with the existential instead —
			is a sharpening of the BE/HAVE split that awaits systematic corpus documentation
			<Ref k="aynucorporadiscord" />;
			nukopoli, aynu-corpora Discord, 2024 ‹contested›.
			The full analysis of BE-type vs HAVE-type possession, the
			<i lang="ain-Latn">kor wa an</i> stative-persistence construction, and the role of
			the affiliative form are in <Xr ch="predicative-possession-clauses" /> and
			<Xr ch="adnominal-possession-double-marking" />.
		</p>
	</S>
</S>
