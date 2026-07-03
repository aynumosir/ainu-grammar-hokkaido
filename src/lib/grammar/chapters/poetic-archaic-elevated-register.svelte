<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview: atomte-itak and yayan-itak" id="overview">
	<p>
		Hokkaido Ainu distinguishes two named registers:
		<i lang="ain-Latn">atomte-itak</i> (アトゥㇺテイタㇰ, lit. 'decorated/ornamented
		speech'; Japanese 雅語, the elegant or poetic register) and
		<i lang="ain-Latn">yayan-itak</i> (ヤヤニタㇰ, lit. 'ordinary speech'; 口語/日常語,
		the everyday register) <Ref k="endo2022" p="§3" />; <Ref k="kindaichi1935" paren />.
		The term <i lang="ain-Latn">atomte-itak</i> is attested in metalinguistic use by
		native speakers and in modern community discussion, where it is explicitly applied
		to the speech of verse and prayer genres
		<Ref k="aynucorporadiscord" /> (成田英敏 / asirso, 2024). The distinction is
		grammar-diagnostic across four dimensions: (1) applicative prefixes replace
		postpositional case particles; (2) the fourth-person suffix
		<i lang="ain-Latn">=an</i> co-occurs with singular verb stems that exclude it in
		conversation; (3) words are longer and more morphologically elaborated; (4) a
		verse-specific vocabulary replaces everyday lexemes
		<Ref k="sato2008" p="263–264" />; <Ref k="endo2022" p="§3" />.
	</p>
	<p>
		The boundary between the two registers is not categorical. Nakagawa argues that
		elegant and everyday Ainu are stages on a continuum keyed to two axes —
		verse vs prose, and fixed vs improvised — rather than two discrete levels
		‹contested› <Ref k="endo2022" p="§3.4" />. He further proposes that a
		classification by genre (yukar-vocabulary vs prayer-vocabulary) may prove more
		analytically useful than the single-level
		<i lang="ain-Latn">atomte-itak</i> label <Ref k="endo2022" p="§3.4" />. Genre
		taxonomy and the performance context of each verse genre are described in
		<Xr ch="oral-literature-genre-taxonomy" />; the metrical and refrain structure
		of verse in <Xr ch="sakehe-refrain-and-sung-verse-structure" />; the parallel
		and formulaic rhetoric of verse in <Xr ch="parallelism-couplets-and-word-pairs" />.
	</p>
</S>

<S t="Genre density and the elegant-language gradient" id="genre-density">
	<p>
		Kindaichi established that elegant-language density varies across chant and verse
		genres in a consistent gradient, rising from greeting speech through prayer
		(<i lang="ain-Latn">kamuy nomi itak</i>) and incantation to dispute
		negotiation (<i lang="ain-Latn">caranke</i>), with the heroic epic
		(<i lang="ain-Latn">yukar</i>) carrying the highest concentration of
		<i lang="ain-Latn">atomte-itak</i> features
		<Ref k="kindaichi1935" />; <Ref k="endo2022" p="§3" />. Prose folktale
		(<i lang="ain-Latn">uwepeker</i>) falls largely in the everyday register;
		the sub-genre of divine-protagonist prose tales
		(<i lang="ain-Latn">kamuy uwepeker</i>) is an exception, narrated in elegant
		language throughout <Ref k="endo2022" p="§3" />.
	</p>
	<p>
		Two parameters drive the gradient. The first is fixity: incantations are
		word-for-word memorised and deploy dense elegant morphology; prayers are
		improvised — "not memorised like scripture; spun out by improvisation,
		different each time", in Nakagawa's characterisation
		<Ref k="endo2022" p="§2.3" /> — yet draw on the same feature inventory with
		more personal melody. The second is the verse/prose divide: all melodic,
		sung genres (yukar, kamuy yukar, prayer) signal their generic status partly
		through grammar, not only through melody and metre
		<Ref k="sato2008" p="259–264" />. The heroic and divine epics are described
		in <Xr ch="heroic-and-divine-verse" />. The formal/ceremonial evidential frame
		<i lang="ain-Latn">ruwe tapan</i>, which Tamura's dictionary registers as
		register-marked, is one illustration of how elegance inflects evidential choice
		across genres; it is analysed in <Xr ch="ruwe-ne-inferential" /> and situated
		among genre-conditioned TAM choices in
		<Xr ch="narrative-tam-evidential-patterning-by-genre" />.
	</p>
</S>

<S t="Grammatical features of atomte-itak" id="grammatical-features">
	<p>
		Satō lists four grammatical hallmarks of the poetic register
		<Ref k="sato2008" p="263–264" />, which align with Nakagawa's four defining
		traits of <i lang="ain-Latn">atomte-itak</i> as reported in Endō
		<Ref k="endo2022" p="§3" />: (1) applicative case-marking in place of
		particles; (2) number-agreement override; (3) greater polysynthetic complexity
		and periphrasis; (4) a distinct verse/prayer lexicon. Features (1) and (2) are
		directly grammar-diagnostic.
	</p>

	<S t="Applicative case-marking" id="appl-case">
		<p>
			In everyday speech, oblique relations — location, direction, goal — are
			expressed by postpositional particles: <i lang="ain-Latn">ta</i> (locative),
			<i lang="ain-Latn">un</i> (allative), and others. In
			<i lang="ain-Latn">atomte-itak</i>, the same relations are instead encoded
			by applicative prefixes on the verb:
			<A w="e-" gl="goal/locative applicative" />,
			<A w="ko-" gl="sociative/goal applicative" />,
			<A w="o-" gl="body-contact applicative" />. The register diagnostic is the
			substitution of prefix for particle, which simultaneously increases syllabic
			weight — a functional fit with both the metrical preference for longer units
			and the 5-syllable line
			<Ref k="sato2008" p="263" />; <Ref k="okuda2022" p="§3" />.
		</p>

		<Ex
			m="tanto Ukurmem ta ku=sirepa"
			g="today Ukurmem LOC 1SG.S=arrive"
			tr="I arrived at Ukurmem today."
			constructed
			dial="CHI"
			note="Everyday (yayan-itak) pattern: locative marked by the particle ta. After Satō 2008: 263."
		/>

		<Ex
			m="kamuy menoko uni-hi tane anakne a=ko-sirepa na"
			g="goddess woman house-POSS today TOP 4.A=APPL-arrive FIN"
			tr="Now I arrived at the goddess's house."
			constructed
			dial="CHI"
			note="Elegant (atomte-itak) pattern: the locative goal is marked by the applicative prefix ko- on the verb in place of the particle ta. The fourth-person prefix a= marks the hero-narrator. After Satō 2008: 263, ex. 20."
		/>

		<p>
			Prayer text is particularly applicative-dense. Endō's example from a
			Monbetsu prayer (鍋澤モトゾウ / Motoanrek) shows stacked applicative layers
			within a single verb: <i lang="ain-Latn">ku=e-ko-pase-</i> and
			<i lang="ain-Latn">k=e-ko-onkami</i> '(I) reverently worship'
			<Ref k="endo2022" p="§2.3" />. The applicative morphemes and their
			stacking interactions are described in
			<Xr ch="applicative-system-overview" />,
			<Xr ch="applicative-e" />, and <Xr ch="applicative-ko" />.
		</p>
	</S>

	<S t="Number-agreement override" id="number-override">
		<p>
			In Saru and Chitose everyday speech, the fourth-person intransitive suffix
			<i lang="ain-Latn">=an</i> attaches only to plural verb stems: suppletive
			plural <i lang="ain-Latn">arki</i> 'come.PL' gives
			<i lang="ain-Latn">arki=an</i> 'we/they come', while singular
			<i lang="ain-Latn">ek</i> 'come.SG' does not combine with
			<i lang="ain-Latn">=an</i> in conversation
			<Ref k="sato2008" p="263" />. In the poetic register this restriction is
			suspended: the hero-narrator uses the singular stem together with
			<i lang="ain-Latn">=an</i>, yielding <i lang="ain-Latn">ek=an</i> 'I came',
			a formulaic feature of first-person verse narration throughout Saru and
			Chitose ‹consensus›.
		</p>

		<Ex
			m="ek=an"
			g="come.SG=4.S"
			tr="I came."
			constructed
			dial="SAR"
			note="Elegant number-agreement override: the singular stem ek combines with the fourth-person suffix =an. In everyday Saru/Chitose this combination is blocked; arki=an (plural stem) is the everyday fourth-person plural form. After Satō 2008: 263."
		/>

		<p>
			The override is confined to varieties that use
			<i lang="ain-Latn">a=</i>/<i lang="ain-Latn">=an</i> for the hero-narrator
			(Saru, Chitose). Outside those varieties,
			<i lang="ain-Latn">=an</i> attaches only to plural stems without exception,
			so this pattern is simultaneously a register and a dialect marker
			<Ref k="sato2008" p="263" />. Suppletive plural verb pairs are described in
			<Xr ch="suppletive-verbal-number" />; the fourth-person paradigm in
			<Xr ch="indefinite-fourth-person-paradigm" />.
		</p>
	</S>

	<S t="Polysynthetic expansion and periphrasis" id="polysynthetic">
		<p>
			The third hallmark is the formation of morphologically heavier words than
			everyday speech permits, achieved partly through periphrasis — spreading an
			everyday lexeme across a complex verbal construction. Two attested
			examples from Satō illustrate the device
			<Ref k="sato2008" p="264" />:
		</p>

		<table>
			<thead>
				<tr>
					<th>everyday (<i lang="ain-Latn">yayan-itak</i>)</th>
					<th>elegant (<i lang="ain-Latn">atomte-itak</i>)</th>
					<th>gloss</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><i lang="ain-Latn">soyne</i></td>
					<td><i lang="ain-Latn">soyna-sanma o=si-ray-e</i></td>
					<td>'go outside'</td>
				</tr>
				<tr>
					<td><i lang="ain-Latn">kamuy</i></td>
					<td><i lang="ain-Latn">kamuy ne manu p</i></td>
					<td>'god; a divine being'</td>
				</tr>
			</tbody>
		</table>

		<p>
			The periphrasis <i lang="ain-Latn">kamuy ne manu p</i> (lit. 'what is said
			to be a god') inserts an evidential distancing element
			(<i lang="ain-Latn">manu</i> 'it is said/alleged') between predicate and
			nominalized head, simultaneously filling the 5-syllable metrical target and
			conferring a deferential, distanced quality on divine reference. Satō also
			documents the poetic use of <i lang="ain-Latn">kane</i> 'as if, to the extent
			that' as a simile device in the Abuta (虻田/Iburi) yukar of narrator
			遠島タンケ — <i lang="ain-Latn">urar ruyka a=turi kane</i> 'stretching the mist
			as if it were a bridge' (l. 136) — where <i lang="ain-Latn">kane</i> shades
			from its circumstantial into a comparative-poetic value
			<Ref k="sato2009yukar" p="§2.2" />. The interaction of periphrasis with
			couplet structure is treated in
			<Xr ch="parallelism-couplets-and-word-pairs" />.
		</p>
	</S>
</S>

<S t="The hero-narrator person system" id="hero-narrator">
	<p>
		The person set used for the narrative hero is the most salient grammatical
		marker of verse register. All three primary narrative genres are performed from
		the protagonist's viewpoint in the first person, but the affix set used for the
		hero differs from everyday <i lang="ain-Latn">ku=</i>/<i lang="ain-Latn">=en</i>.
		The full paradigm and its logophoric analysis are treated in
		<Xr ch="person-marking-architecture" /> and
		<Xr ch="logophoric-narration-and-reported-discourse" />; what concerns
		this chapter is the register conditionality of the choice.
	</p>
	<p>
		In Saru and Chitose, the hero-narrator uses the fourth-person prefix
		<i lang="ain-Latn">a=</i> and suffix <i lang="ain-Latn">=an</i> rather than
		the everyday first person <Ref k="sato2008" p="260–261" />;
		<Ref k="endo2022" p="§2.4" />. A framing utterance outside the narration uses
		ordinary <i lang="ain-Latn">ku=</i>:
	</p>

	<Ex
		m="sine kamuy-yukar ku=ye so"
		g="one divine.epic 1SG.A=tell SOFT"
		tr="Let me tell one divine epic."
		cite="sato2008"
		dial="CHI"
		note="Speaker's framing utterance uses everyday first person ku=. Inside the narration, the hero-narrator switches to the fourth-person a=/=an. From the reading-text frame in Satō 2008, chapter 21 (千歳)."
	/>

	<p>
		Satō explains the hero's non-everyday person marking through what he terms the
		"indirection principle" (<span lang="ja">間接性の原理</span>): oral literature was
		framed — in his hypothesis — as a god's telling inside a dream, and the
		avoidance of ordinary first-person marking increases indirectness, softening the
		taboo of a divine being addressing a living human directly
		‹speculative› <Ref k="sato2008" p="259–261" />. The competing "shamaness-oracle
		origin" account (<span lang="ja">巫女の託宣</span>), which Satō dissents from, locates
		the origin in shamanic ritual; neither is established ‹contested›
		<Ref k="sato2008" p="259" />; <Ref k="endo2022" p="§2.4" />.
	</p>
	<p>
		The Iburi kamuy yukar collected by Chiri Yukie — <Ref k="chiri1923" />, the
		first published Ainu-language oral-literature collection — uses a distinct
		convention: the hero-narrator employs the exclusive first-person plural
		<i lang="ain-Latn">ci=</i>/<i lang="ain-Latn">=as</i> consistently as a
		singular, throughout each text <Ref k="sato2008" p="261" />;
		<Ref k="sato2004" />. In Chitose, <i lang="ain-Latn">ci=</i> may appear at the
		opening and then give way to <i lang="ain-Latn">a=</i>/<i lang="ain-Latn">=an</i>
		<Ref k="sato2008" p="261" />. The hero-person marker is therefore
		simultaneously genre-conditioned (narrative verse, not prayer or conversation),
		dialect-conditioned (Saru/Chitose vs Iburi), and register-conditioned (verse
		or verse-grade prose, not everyday speech) ‹consensus›.
	</p>
	<p>
		The pronoun set of elegant language likewise draws on the fourth-person and
		honorific domain: Satō lists <i lang="ain-Latn">asinuma</i>,
		<i lang="ain-Latn">aoka(y)</i>, <i lang="ain-Latn">eani</i>, and
		<i lang="ain-Latn">ecioka(y)</i> as the elegant-register free-pronoun set, the
		same forms that function as second-person honorifics in conversation
		<Ref k="sato2008" p="261" />. The convergence of elevated and honorific function
		in the fourth-person paradigm is described in
		<Xr ch="fourth-person-honorific" />.
	</p>
</S>

<S t="The register lexicon" id="register-lexicon">
	<p>
		The distinctive verse and prayer vocabulary is documented across the read sources
		in scattered but consistent testimony. The table below collects attested
		everyday–elegant word pairs with genre specification and source attribution.
	</p>

	<table>
		<thead>
			<tr>
				<th>everyday (<i lang="ain-Latn">yayan-itak</i>)</th>
				<th>elegant / genre-specific (<i lang="ain-Latn">atomte-itak</i>)</th>
				<th>reference gloss</th>
				<th>genre restriction</th>
				<th>source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<i lang="ain-Latn">hapo</i> / <i lang="ain-Latn">haca</i>
					<br />(colloquial; heavy dialect variation)
				</td>
				<td>
					<i lang="ain-Latn">ona</i> 'father',
					<i lang="ain-Latn">unu</i> 'mother'
				</td>
				<td>parental terms</td>
				<td>verse / prayer (文語的雅語)</td>
				<td>
					<Ref k="endo2022" p="§3" />;
					nukopoli, <Ref k="aynucorporadiscord" /> (2026-06-15, asserted)
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">soyne</i> 'go outside'</td>
				<td><i lang="ain-Latn">soyna-sanma o=si-ray-e</i></td>
				<td>'go outside' (periphrastic)</td>
				<td>heroic / divine epic</td>
				<td><Ref k="sato2008" p="264" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kamuy</i> 'god'</td>
				<td>
					<i lang="ain-Latn">kamuy ne manu p</i>
					<br />(lit. 'what is said to be a god')
				</td>
				<td>'god' (periphrastic, deferential)</td>
				<td>heroic / divine epic</td>
				<td><Ref k="sato2008" p="264" /></td>
			</tr>
			<tr>
				<td>
					<i lang="ain-Latn">ape huci</i>
					<br />'fire grandmother'
				</td>
				<td>
					<i lang="ain-Latn">i-resu huci</i> /
					<i lang="ain-Latn">i-resu kamuy</i>
					<br />'(the goddess) who raised me'
				</td>
				<td>fire deity</td>
				<td>prayer (not heroic/divine epic)</td>
				<td><Ref k="endo2022" p="§1, §3.4" /></td>
			</tr>
			<tr>
				<td>
					<i lang="ain-Latn">ape huci</i>
				</td>
				<td>
					<i lang="ain-Latn">mosir kor huci</i>
					<br />'grandmother who holds the land'
				</td>
				<td>fire deity (address epithet)</td>
				<td>prayer only (not attested elsewhere)</td>
				<td><Ref k="endo2022" p="§2.3" /></td>
			</tr>
			<tr>
				<td>
					<i lang="ain-Latn">kamuy</i> 'god' (noun)
				</td>
				<td>
					<i lang="ain-Latn">kamuy</i> as modifier
					= 'splendid, magnificent'
				</td>
				<td>intensifying adnominal</td>
				<td>heroic epic (absent from prayer)</td>
				<td><Ref k="endo2022" p="§3.4" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The elegant parental terms <i lang="ain-Latn">ona</i> 'father' and
		<i lang="ain-Latn">unu</i> 'mother' are confirmed as literary register forms
		by community discussion: nukopoli (aynu-corpora Discord, 2026-06-15) asserts
		that both are 文語的雅語 contrasting with colloquial
		<i lang="ain-Latn">haca</i>/<i lang="ain-Latn">hapo</i>, and that the plural
		forms <i lang="ain-Latn">onautari</i>/<i lang="ain-Latn">unuutari</i> can extend
		to mean 'parents together' <Ref k="aynucorporadiscord" />. The observation
		aligns with Endō's characterisation of a distinct verse lexicon (§3 characteristic 4)
		without being independently stated there ‹corpus-suggested›. The possessed-form
		morphology of forms like <i lang="ain-Latn">i-resu huci</i>
		('the-one-who-raised-me grandmother') is described in
		<Xr ch="kinship-honorific-possession" />.
	</p>
	<p>
		The fire-deity substitutions reveal a genre division within
		<i lang="ain-Latn">atomte-itak</i> itself. The everyday address
		<i lang="ain-Latn">ape huci</i> is the default in heroic and divine epic;
		prayer substitutes <i lang="ain-Latn">i-resu huci</i>, foregrounding the
		personal bond between worshipper and deity, and adds the prayer-exclusive epithet
		<i lang="ain-Latn">mosir kor huci</i> 'grandmother who holds the land',
		documented for the Monbetsu (Biratori) prayer tradition and described as absent
		from every other genre <Ref k="endo2022" p="§2.3" />. Conversely, the
		adnominal <i lang="ain-Latn">kamuy</i> = 'splendid' appears in heroic epic but
		is absent from prayer, where a deferential petitionary address would not employ
		such a modifier <Ref k="endo2022" p="§3.4" />. The taboo and honorific
		extensions of the prayer address system are treated in
		<Xr ch="honorific-ritual-and-taboo-registers" />.
	</p>
	<p>
		Within the verse lexicon, hero-praise formulae are also genre-specific.
		The formula <i lang="ain-Latn">tuk-no pinni si-kopa-yar aynu pito</i>
		'a fine person like a grown Manchurian-ash tree' — containing
		<i lang="ain-Latn">si-kopa-yar</i> 'like', a form not attested in everyday
		speech — is used for hero description in heroic and divine epics and is not
		productive outside that genre <Ref k="endo2022" p="§4" />.
	</p>
</S>

<S t="Prayer as a sub-register of atomte-itak" id="prayer-subregister">
	<p>
		Prayer (<i lang="ain-Latn">kamuy nomi itak</i>,
		<i lang="ain-Latn">inonno itak</i>) is improvised rather than memorised, which
		distinguishes it formally from incantation (fixed word-for-word) and from the
		more formulaic yukar. Despite this improvisation, prayer deploys
		<i lang="ain-Latn">atomte-itak</i> features throughout: heavy applicative-prefix
		stacking in place of postpositions, the elegant vocabulary set, and verse-grade
		prosody <Ref k="endo2022" p="§2.3" />; <Ref k="sato2008" p="263" />.
	</p>
	<p>
		The address structure of prayer is genre-governed and register-distinctive in
		its own right: the fire deity (<i lang="ain-Latn">ape huci</i> /
		<i lang="ain-Latn">i-resu huci</i>) is addressed first in every prayer, acting
		as intermediary to the other gods <Ref k="endo2022" p="§2.3" />. Genre-conditioned
		connective inventory is an additional sub-register signal: Endō notes that
		conjunctive-phrase distributions differ across heroic epic, kamuy yukar, and prayer
		in ways that go beyond vocabulary differences (Endō 2015, as cited in
		<Ref k="endo2022" p="§3.4" />). Prayer is the domain in which the restriction
		of <i lang="ain-Latn">kamuy</i> as 'splendid' is blocked (§ <a href="#register-lexicon">register lexicon</a> above),
		and in which the applicative stacking is densest. The sentence-final particles
		associated with formal and ceremonial illocution in prayer are treated in
		<Xr ch="sentence-final-particles-illocutionary-force" />.
	</p>
</S>

<S t="Debates" id="debates">
	<p>
		<strong>Register as dichotomy or continuum.</strong> Kindaichi's framing treats
		elegant and everyday as two discrete levels
		<Ref k="kindaichi1935" />; <Ref k="endo2022" p="§3" />. Nakagawa dissents: the
		gradient runs continuously through multiple genres, and a
		yukar-vocabulary/prayer-vocabulary classification may be more tractable than the
		single <i lang="ain-Latn">atomte-itak</i> rubric
		<Ref k="endo2022" p="§3.4" /> ‹contested›. The practical implication is that
		claims about "elegant language" should specify which genre is the source.
	</p>
	<p>
		<strong>Origin of non-everyday person marking in verse.</strong> Two accounts
		compete for the historical motivation behind the hero's use of fourth-person
		affixes: the "shamaness-oracle origin" theory (the consensus framing) and
		Satō's "indirection/dream-framing" hypothesis. Both treat the fourth-person
		marking as motivated by an avoidance principle, but their reference to
		different social institutions makes them empirically distinct
		<Ref k="sato2008" p="259–261" />; <Ref k="endo2022" p="§2.4" /> ‹contested›.
		The honorific dimension of the fourth-person paradigm that underlies both
		accounts is described in <Xr ch="fourth-person-honorific" />.
	</p>
	<p>
		<strong>Residual refrain in yukar.</strong> The opening formula
		<i lang="ain-Latn">eyororpe</i> in yukar is read by Satō as a vestige of a
		former refrain, suggesting that heroic and divine epics diverged from a
		common refrain-bearing ancestor <Ref k="sato2008" p="259" /> ‹speculative›.
		The claim is an inference, not independently supported by text-comparative
		evidence. The sakehe system is described in
		<Xr ch="sakehe-refrain-and-sung-verse-structure" />.
	</p>
</S>
