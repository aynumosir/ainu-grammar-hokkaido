<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The genre system: parameters and macro-categories" id="overview">
	<p>
		No single Ainu term covers oral-literary activity as a whole; the domain is delimited
		descriptively. The most widely adopted modern taxonomy, developed by Nakagawa and
		followed by <Ref k="endo2022" />, organizes oral activity into four macro-categories by
		communicative purpose: <strong>songs</strong> (seated <i lang="ain-Latn">upopo</i>, dance
		songs <i lang="ain-Latn">rimse</i> / <i lang="ain-Latn">horippa</i>, lyric
		<i lang="ain-Latn">yaysama</i>, lullabies), <strong>word play</strong>
		(<i lang="ain-Latn">kikinasi</i> bird-cry mimicry, tongue-twisters, riddles),
		<strong>chants</strong> directed to gods or humans (prayer
		<i lang="ain-Latn">kamuy nomi itak</i> / <i lang="ain-Latn">inonno itak</i>,
		incantation, dispute-speech <i lang="ain-Latn">caranke</i>, funeral words, greeting
		words), and <strong>narrative</strong> (prose tales, divine epics, heroic epics, legend).
		Within the narrative category the formal parameters that differentiate genres are: presence
		or absence of melody; presence or absence of a <A w="sakehe" gl="refrain (of a kamuy yukar)" />
		refrain; rhythmic tapping (<A w="rep" gl="beat time" />) with a stick
		(<A w="repni" gl="rhythm-stick" />); typical length; and narrator gender
		<Ref k="endo2022" />; <Ref k="sato2008" p="259" />.
	</p>
	<p>
		The table below gives the Chitose-based three-way split of the narrative genres and its
		primary formal diagnostics, which constitute the empirical baseline from which dialect
		variants and contested cases depart <Ref k="sato2008" p="259" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>genre (Ainu)</th>
				<th>melody</th>
				<th>sakehe</th>
				<th>repni tapping</th>
				<th>length</th>
				<th>narrator (traditional)</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">yukar</i> (heroic epic)</td>
				<td>yes</td>
				<td>no</td>
				<td>yes</td>
				<td>long</td>
				<td>men</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">kamuy yukar</i> (divine epic)</td>
				<td>yes</td>
				<td>yes</td>
				<td>no</td>
				<td>short</td>
				<td>women (and men)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">uwepeker</i> (prose tale)</td>
				<td>no</td>
				<td>no</td>
				<td>no</td>
				<td>medium</td>
				<td>women (and men)</td>
			</tr>
		</tbody>
	</table>

	<p>
		The table identifies the sakehe as the primary formal divide between yukar and kamuy
		yukar: both are sung genres with melody, but yukar carries no sakehe while kamuy yukar
		does. A fourth narrative form, <i lang="ain-Latn">irupaye</i>, presents yukar content in
		a prose frame with no melody or refrain; it was available to women narrators for whom
		verse yukar was conventionally restricted <Ref k="sato2008" p="259" />. Two further
		genres stand outside the main three: <i lang="ain-Latn">upaskuma</i> /
		<i lang="ain-Latn">ucaskuma</i> (oral tradition, legend, historical lore), which makes
		no fixed verse or performance demands, and the coastal-Hidaka/Iburi
		<i lang="ain-Latn">oyna</i> (culture-hero epic with a distinct protagonist class), treated
		separately below. The grammatical consequences of the sung/prose distinction —
		person-marking conventions, evidential defaults, and metrical packaging — are surveyed in
		<Xr ch="narrative-tam-evidential-patterning-by-genre" />.
	</p>
</S>

<S t="Dialect-area variation in genre vocabulary" id="dialect-variation">
	<p>
		The Ainu genre vocabulary is not uniform across Hokkaido. Terms shift across dialect areas
		in ways that reflect both sound change and the independent naming of genre categories by
		distinct communities. The principal dialect correspondences, as documented by
		<Ref k="endo2022" /> and <Ref k="chiri1955" />, are:
	</p>

	<table>
		<thead>
			<tr>
				<th>genre type</th>
				<th>SW Hokkaido (Saru / Chitose)</th>
				<th>E / Central Hokkaido</th>
				<th>Samani</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>heroic epic</td>
				<td><i lang="ain-Latn">yukar</i></td>
				<td><i lang="ain-Latn">sakorpe</i></td>
				<td><i lang="ain-Latn">yayerap</i></td>
			</tr>
			<tr>
				<td>divine epic</td>
				<td><i lang="ain-Latn">kamuy yukar</i></td>
				<td><i lang="ain-Latn">oyna</i></td>
				<td><i lang="ain-Latn">tuytak</i></td>
			</tr>
			<tr>
				<td>prose tale</td>
				<td><i lang="ain-Latn">uwepeker</i></td>
				<td><i lang="ain-Latn">tuytak</i> (Ishikari, Teshio, Kitami, Kushiro, Tokachi, E Hidaka)</td>
				<td><i lang="ain-Latn">isoytakki</i></td>
			</tr>
			<tr>
				<td>sacred biography / culture-hero epic</td>
				<td><i lang="ain-Latn">oyna</i> (coastal Hidaka / Iburi)</td>
				<td>—</td>
				<td>—</td>
			</tr>
			<tr>
				<td>legend / oral tradition</td>
				<td><i lang="ain-Latn">upaskuma</i> / <i lang="ain-Latn">ucaskuma</i></td>
				<td>(idem)</td>
				<td>—</td>
			</tr>
		</tbody>
	</table>

	<p>
		Two naming collisions make this geography analytically difficult ‹contested›. First, the
		term <i lang="ain-Latn">oyna</i> covers different genres in different areas: in Tokachi and
		Sakhalin it functions as a synonym of <i lang="ain-Latn">kamuy yukar</i> (a divine epic
		with sakehe), while in coastal Hidaka and Iburi it designates a distinct genre whose
		protagonist is a culture-hero (Aynurakkur / Okikurmi / Oynakamuy) and which uses no sakehe
		<Ref k="endo2022" />; <Ref k="nakagawa1995" p="s.v. oyna" />. Second, the term
		<i lang="ain-Latn">tuytak</i> means 'prose tale' across most of eastern Hokkaido but
		'divine epic' in Samani — the same form names metrically and functionally opposite genres
		depending on locality <Ref k="endo2022" />. These are not irregular synonymies; they
		reflect genre systems that were named independently in different dialect communities, a
		distribution that Nakagawa treated as a problem in dialect linguistic geography
		<Ref k="endo2022" />.
	</p>
	<p>
		The classification also shifts within a single dialect tradition. In Tamura's Saru materials,
		informant 平賀サダモ (Sadamo) does not use <i lang="ain-Latn">oyna</i> as a genre label at
		all: the divine and culture-hero epics that Kindaichi and Kubodera classed as
		<i lang="ain-Latn">oyna</i> are subsumed under <i lang="ain-Latn">yúkar</i> in her usage
		<Ref k="tamura1996" />; <Ref k="endo2022" />. This shows that even the yukar/kamuy-yukar
		boundary, presented as basic in the Chitose table above, is not imposed uniformly on all
		bearers of the Saru tradition.
	</p>
	<p>
		<Ref k="kayano1996" /> provides a metalinguistic definition of <i lang="ain-Latn">yukar</i>
		as a practice of imitation and transmission: "誰かが聞かせてくれた長い長い物語，それを真似て次に誰か
		に聞かせる，それをユカㇻと言う" ('the long story that someone told you, which you imitate and
		tell the next person — that is called yukar'). The same entry records the dream-transmission
		convention: a yukar heard in a dream (<i lang="ain-Latn">wentarap or ta a=nu yukar</i>)
		must be retold at once or it is lost.
	</p>

	<Ex
		m="oyna ne ciki yukar-i ne ciki"
		g="oyna COP COND yukar-POSS COP COND"
		tr="whether it be an oyna or a yukar"
		cite="ilcaa1976"
		dial="SAR"
		place="川上まつ子, AA研「uwepeker 民話8(その1)」[aa-irc/006#301]"
		note="A prose narration passage in which the narrator uses oyna and yukar in a generic conditional frame. The possessed form yukar-i marks the noun in predicative position before ne; both genre terms appear as interchangeable labels for sung epic here."
	/>
</S>

<S t="The heroic epic: yukar and sakorpe" id="heroic-epic">
	<p>
		The <i lang="ain-Latn">yukar</i> is the longest and formally most demanding of the sung
		genres: an epic sung to a melody that is specific to the narrator (not fixed to the story
		and subject to change mid-performance), stretching from a single evening to several nights
		<Ref k="endo2022" />. Its defining formal features in the Saru/Chitose baseline are the
		absence of a sakehe refrain and the presence of rhythmic tapping with a
		<A w="repni" gl="rhythm-stick" /> on the hearth-rim throughout the performance
		<Ref k="sato2008" p="259" />. Listeners may add a chorus call
		(<A w="hetce" />). The narrator is traditionally a man; women conventionally told the
		prose form <i lang="ain-Latn">irupaye</i> when they wished to narrate yukar content
		<Ref k="sato2008" p="259" />, though modern documentation records women reciting verse
		yukar knowingly against that convention <Ref k="endo2022" />.
	</p>
	<p>
		The protagonist is a parentless superhuman youth — in Saru texts canonically
		<i lang="ain-Latn">Poy-ya-un-pe</i> or <i lang="ain-Latn">Pon Sinutapka-un-kur</i>, in
		eastern Hokkaido <i lang="ain-Latn">Pon Otasam-un-kur</i> — who flies, dives, travels
		underground, and battles without moral framing (heroes may annihilate whole villages; the
		worldview is entertainment, not instruction) <Ref k="endo2022" />. The sub-genre
		<i lang="ain-Latn">menoko yukar</i> ('women's heroic epic') keeps the format but replaces
		battle with marriage as its thematic core; female heroes wield shamanistic power
		(<i lang="ain-Latn">tusu</i>) and foresight <Ref k="endo2022" />. A speaker of the Saru
		dialect, 川上まつ子, recorded an explicit account of the menoko yukar genre: the genre is
		told with a sakehe refrain (sakekoye), but the narrator herself preferred to deliver it
		without the sakehe, as an <i lang="ain-Latn">uwepeker</i>
		<Ref k="ilcaa1976" />.
	</p>
	<p>
		In eastern and central Hokkaido — Tokachi and adjacent areas — the heroic epic is named
		<i lang="ain-Latn">sakorpe</i> (the eastern term for this genre; its internal morphology
		is debated) <Ref k="endo2022" />. For the lexical domain of 'hero', the noun
		<A w="rametok" gl="bravery; brave person (rametok &lt; ram-etok 'spirit-tip')" /> can stand
		alone as 'brave person / hero' in epic contexts, attested with modifiers such as
		<i lang="ain-Latn">kamuy rametok</i> and <i lang="ain-Latn">sonno rametok</i>; a further
		term <i lang="ain-Latn">cipapa</i> appears in <Ref k="chiri1923" /> but is absent from
		other dictionaries and texts (gengojiro, aynu-corpora Discord 2024-02-13;
		<Ref k="aynucorporadiscord" />) ‹speculative›.
	</p>
	<p>
		A Saru narrative records the genre terms in disjunctive alternation, with the narrator
		uncertain whether the performance was <i lang="ain-Latn">yukar</i> or <i lang="ain-Latn">oyna</i>:
	</p>
	<Ex
		m="ipinu pa katu ka a=erampewtek no yukar he oyna he ki pa kor"
		g="hear PFV but FOC 4=know.NEG COND yukar DISJ oyna DISJ do PFV CONJ"
		tr="I did not know whether they were listening secretly, but I heard them doing yukar or oyna."
		cite="ilcaa1976"
		dial="SAR"
		place="川上まつ子, AA研「uwepeker 民話8(その2)」[aa-irc/007#149]"
		note="The disjunctive particle he…he… ('or…or…') coordinates the two genre terms, treating them as interchangeable alternatives in the narrator's uncertainty. The fourth-person a= on erampewtek 'know' indexes the narrative protagonist. The light verb ki 'do' takes the genre nouns as its complement, showing that yukar and oyna function as activity nouns (cf. ukooyna, ukoyukara 'do oyna/yukar reciprocally' in aa-irc/007#136)."
	/>
	<p>
		The Abuta dialect (Iburi, 虻田) yukar narrated by 遠島タンケ attests the same aspectual and
		comparative apparatus as Saru/Chitose verse narrative, including durative
		<i lang="ain-Latn">kor okay</i>, resultative <i lang="ain-Latn">wa okay</i> /
		<i lang="ain-Latn">wa an</i>, and the comparative particle
		<A w="kane" gl="as if; to the extent that" />. The prospective
		<A w="anki" gl="about to" /> is also documented. A striking lexical item in this text is
		the genre-specific verb <i lang="ain-Latn">sakehawki</i> 'to sing / recite a yukar' —
		a denominal verb built on the eastern heroic-epic root
		<Ref k="sato2009yukar" p="§2.2" />.
	</p>
	<p>
		A residual opening formula, the <i lang="ain-Latn">eyororpe</i>, may repeat at the start
		of a yukar performance. <Ref k="sato2008" p="259" /> reads this as a possible vestige of
		a refrain that yukar once possessed — an inference rather than an established fact
		‹speculative›.
	</p>
</S>

<S t="The divine epic: kamuy yukar, the sakehe refrain, and oyna" id="divine-epic">
	<p>
		The <i lang="ain-Latn">kamuy yukar</i> is shorter than the yukar (from a few minutes to
		around an hour), told mainly by women, and sung to a melody fixed per story — in contrast
		to the narrator-specific melody of the heroic epic <Ref k="endo2022" />. Its protagonist
		is a <A w="kamuy" gl="god; divine being" /> (animal, plant, fire, water, weather,
		household object) narrating its own experiences in the first person. The genre's primary
		formal diagnostic is the <strong>sakehe</strong> (折り返し, burden, refrain): a fixed string,
		typically inserted after every line or every few lines, fixed per story <Ref k="endo2022" />;
		<Ref k="sato2008" p="259" />.
	</p>
	<p>
		<A w="sakehe" gl="refrain (of a kamuy yukar); the sake of —" /> is the possessed form of
		<i lang="ain-Latn">sake</i>; <Ref k="tamura1996" p="s.v. sákehe" /> marks the refrain
		sense with a distinct pitch accent (<i lang="ain-Latn">sákehe</i>) to distinguish it from
		the homophonous 'for the sake of —'. Sakehe range from transparent onomatopoeia (the
		cuckoo-god's sakehe <i lang="ain-Latn">han kakkok kakkok</i> imitates the bird's cry;
		the thunder-god's <i lang="ain-Latn">hum pakpak</i> is the sound of rain or thunder,
		glossed by its narrator as <i lang="ain-Latn">humihiruy</i> 'it's a loud sound'
		<Ref k="biratori1969" />) to completely opaque compounds such as the long sakehe recorded
		by <Ref k="kayano1996" />: <i lang="ain-Latn">tunoyake renoyake kutunke kamuyke kamuy
		cikappo hum hum hum</i>.
	</p>

	<table>
		<thead>
			<tr>
				<th>sakehe</th>
				<th>story type</th>
				<th>narrator / area</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">hum pakpak</i></td>
				<td>thunder-god self-narration</td>
				<td>貝澤とぅるしの, Biratori (Saru)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hancikiki</i></td>
				<td>sparrow's sake feast</td>
				<td>鍋澤ねぷき, Biratori (Saru)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">tusunapanu</i></td>
				<td>marlin-tuna (Saru variant)</td>
				<td>鍋沢ネブキ, Biratori (Saru)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">tussay turi tussay matu</i></td>
				<td>marlin-tuna (Horobetsu variant)</td>
				<td>(Horobetsu)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">nissō</i></td>
				<td>marlin-tuna (Chitose variant, protagonist changed)</td>
				<td>(Chitose)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">han kakkok kakkok</i></td>
				<td>cuckoo-god</td>
				<td>Hatozawa Fujino, Biratori (Saru)</td>
			</tr>
		</tbody>
	</table>

	<p>
		The Biratori examples are from <Ref k="biratori1969" />; the three marlin-tuna variants
		and the cuckoo sakehe are cited via <Ref k="endo2022" />.
	</p>
	<p>
		The function of the sakehe is disputed ‹contested›. <Ref k="nakagawa2001b" /> proposed
		that sakehe originally served as an index of the protagonist. Against this, the marlin-tuna
		data above show that the same story-type can carry different sakehe in different
		performance areas, and that the protagonist may shift between variants (Chitose changes the
		fish species and replaces the sakehe). The correspondence between story-type and sakehe is
		therefore not fixed, and many sakehe cannot be related to the protagonist through any
		recoverable semantic link <Ref k="endo2022" />.
	</p>

	<Ex
		m="sine kamuy-yukar ku=ye so"
		g="one divine-epic 1SG.A=tell FIN"
		tr="Let me tell one kamuy yukar."
		cite="sato2008"
		dial="CHI"
		place="Satō 2008, chapter 21 reading frame (Chitose)"
		note="The sentence-final particle so marks deliberative or hortative intent. ku= is the 1SG A-series prefix on the verb ye 'tell, say'."
	/>

	<p>
		The <i lang="ain-Latn">Ainu Shin'yōshū</i> (<Ref k="chiri1923" />) — Iburi (Horobetsu)
		kamuy yukar compiled and translated into Japanese by 知里幸惠 (Chiri Yukie, 1903–1922) — is
		the canonical first published Ainu-language oral-literature collection and remains a primary
		grammatical resource for Iburi kamuy yukar. Its narrator consistently uses the exclusive
		first-person plural prefix <i lang="ain-Latn">ci=</i> / suffix <i lang="ain-Latn">=as</i>
		as a <em>singular</em> hero-narrator marker, throughout every text
		<Ref k="sato2008" p="261" />; <Ref k="sato2004" />. Table-of-contents titles in the
		collection such as <i lang="ain-Latn">AEKIRUSHI</i> have been morphologically reanalysed
		as <i lang="ain-Latn">a=e-kir-usi</i> 'the place one has memory of' (0penke, aynu-corpora
		Discord 2024-03-19, after 片山龍峯 2003; <Ref k="aynucorporadiscord" />; ‹contested›) rather
		than the earlier parsing from <i lang="ain-Latn">ekiru</i> 'turn back'.
	</p>
	<p>
		The coastal-Hidaka/Iburi <i lang="ain-Latn">oyna</i> is a distinct genre with a
		culture-hero protagonist (Aynurakkur, Okikurmi, Oynakamuy) and no sakehe, making it
		formally closer to the yukar than to the kamuy yukar <Ref k="endo2022" />;
		<Ref k="nakagawa1995" p="s.v. oyna" />. It should not be conflated with the eastern use
		of <i lang="ain-Latn">oyna</i> as a synonym of kamuy yukar. The grammatical analysis of
		the logophoric narrator's voice (the protagonist's first-person perspective) and the
		evidence for classifying the narrator function as logophoric rather than indirect is in
		<Xr ch="logophoric-narration-and-reported-discourse" />.
	</p>
</S>

<S t="Prose narration: uwepeker, tuytak, and ucaskuma" id="prose-narration">
	<p>
		The prose tale — <A w="uwepeker" /> in Saru/Chitose, <A w="tuytak" /> in most of eastern
		Hokkaido — uses no verse, no melody, and no sakehe. Length is intermediate. The narrative
		range runs from near-conversational to lightly elevated prose; corpus token counts give
		<i lang="ain-Latn">uwepeker</i> 104 tokens and <i lang="ain-Latn">tuytak</i> 24 tokens
		in the aligned Hokkaido corpus (the counts conflate metalinguistic and performance
		contexts).
	</p>
	<p>
		<Ref k="endo2022" /> identifies four sub-genres within the prose tradition:
	</p>
	<ol>
		<li>
			<strong>Human prose tales</strong> (the default): an unnamed human protagonist narrates
			in the first person within a 'real event' frame, typically with a reward-virtue /
			punish-vice arc.
		</li>
		<li>
			<strong>Kamuy prose tales</strong> (<i lang="ain-Latn">kamuy uwepeker</i>): a deity
			narrates; the register leans toward elegant language
			(<i lang="ain-Latn">atomte itak</i>), paralleling kamuy yukar in prose form.
		</li>
		<li>
			<strong>Japanese-borrowed prose tales</strong>: Ainu-ized versions of Japanese story
			types, told in the third person.
		</li>
		<li>
			<strong>Pananpe–Penanpe tales</strong>: the dyadic pair 'downstream-dweller' /
			'upstream-dweller', opening with the formula
			<i lang="ain-Latn">pananpe an penanpe an hine …</i> 'there were Panampe and Penampe,
			and …', told in the third person and recognized as a children's genre.
		</li>
	</ol>
	<p>
		The standard human prose tale is bracketed by formulaic structure: an opening that
		establishes the protagonist's family and lifestyle ("I had father, mother, elder brother;
		father hunted bear and deer; we lacked nothing…") and a closing identification formula in
		which the first-person narrator discloses its own identity via the reportative quotative
		frame <i lang="ain-Latn">sekor … isoytak</i> / <i lang="ain-Latn">ye</i> ('so X said /
		told'), revealing retrospectively who the "I" was throughout <Ref k="endo2022" />. This
		closure connects to the broader system of narrative reference tracking treated in
		<Xr ch="reference-tracking" />.
	</p>
	<p>
		The opening move of a Saru uwepeker shows the narrator naming the genre in the first
		person before the tale proper begins — the performative self-announcement that frames
		the prose narration:
	</p>
	<Ex
		m="uwepeker ku=ye kusu ne a korka"
		g="prose.tale 1SG.A=say because COP 4 CONJ"
		tr="I will tell a uwepeker, but…"
		cite="ilcaa1976"
		dial="SAR"
		place="川上まつ子, AA研「uwepeker 民話20」[aa-irc/029#0]"
		note="The narrator announces the genre with the 1SG agent prefix ku= on ye 'say'. The fourth-person a= in ne a korka marks the narrative voice that follows. Contrast the Shizunai narrator Oda Suteno's shorter frame takne uwepeker ku=ye 'I will tell a short uwepeker' (aa-irc/026#0)."
	/>
	<p>
		<i lang="ain-Latn">Ucaskuma</i> / <i lang="ain-Latn">upaskuma</i> designates a looser
		genre of oral tradition, legend, and historical account; it imposes no fixed verse or
		performance constraints and covers knowledge about places, events, and customs passed down
		across generations <Ref k="endo2022" />.
	</p>
	<p>
		The intonational profile of prose narration differs observably from conversation.
		<Ref k="tamura1996" /> reports that uwepeker narration uses a one-directional, low-variation
		melodic line, contrasting with the rising contour of conversation that seeks a response;
		within the Saru basin, upper-Saru (mid-river) narration tends toward near-monotone, while
		lower-Saru shows more pitch undulation (nukopoli, aynu-corpora Discord 2024-11-16;
		<Ref k="aynucorporadiscord" />) ‹corpus-suggested›. The full TAM and evidential patterning
		by genre is in <Xr ch="narrative-tam-evidential-patterning-by-genre" />.
	</p>
</S>

<S t="Genre-conditioned grammar: person marking and number in sung epic" id="grammar-signatures">
	<p>
		All three principal narrative genres are told in the first person from the protagonist's
		viewpoint, but the person prefix used for that first person is not the everyday
		<i lang="ain-Latn">ku=</i>. In Saru and Chitose both verse and prose narrative, the
		protagonist is indexed by the fourth-person prefix/suffix
		<i lang="ain-Latn">a=</i> / <i lang="ain-Latn">=an</i> — the form that in conversational
		Ainu marks an indefinite or inclusive-plural subject or, with a second-person referent, a
		deferential addressee <Ref k="sato2008" p="260–261" />; <Ref k="endo2022" />;
		<Ref k="bugaeva2008" />. The full paradigm and typological analysis of this device are
		in <Xr ch="indefinite-fourth-person-paradigm" />, <Xr ch="fourth-person-honorific" />, and
		<Xr ch="person-marking-architecture" />; the present section notes only the
		genre-conditioned contrasts.
	</p>
	<p>
		<Ref k="sato2008" p="259–261" /> names the use of non-everyday person marking in oral
		literature the "indirection principle" (<em>間接性の原理</em>): on his hypothesis, the
		narrative was originally framed as a god or spirit speaking to a human inside a dream, and
		the non-everyday first-person signals the taboo-laden indirectness of that divine address.
		The competing "shamaness-oracle-origin" account holds that the form arose from a ritual
		medium's stance <Ref k="sato2008" p="259–260" /> ‹contested›. The relationship between
		this narrator-perspective device and typological logophoricity is analysed by
		<Ref k="nikitina2021" />, who argue that logophoric speech constructions in Ainu are
		direct — not indirect — reported speech; the consequences for the genre-narration system
		are pursued in <Xr ch="logophoric-narration-and-reported-discourse" />.
	</p>
	<p>
		Region and genre interact on the person marking. In Iburi (Horobetsu) kamuy yukar — the
		tradition documented in <Ref k="chiri1923" /> — the hero-narrator consistently uses the
		exclusive first-person plural forms <i lang="ain-Latn">ci=</i> /
		<i lang="ain-Latn">=as</i> as a <em>singular</em> narrator throughout each text
		<Ref k="sato2008" p="261" />. In Chitose, <i lang="ain-Latn">ci=</i> /
		<i lang="ain-Latn">=as</i> may appear only at the narrative opening, with the body
		of the text reverting to <i lang="ain-Latn">a=</i> / <i lang="ain-Latn">=an</i>
		<Ref k="sato2008" p="261" />. The hero-person choice is thus both genre-conditioned (verse
		vs prose may condition the choice in Chitose) and region-conditioned (Iburi vs Saru/Chitose
		use different forms throughout).
	</p>
	<p>
		A second genre-conditioned morphological feature is the number-agreement override. In
		everyday Saru/Chitose, the suffix <i lang="ain-Latn">=an</i> never co-occurs with a
		singular verb root: one says <i lang="ain-Latn">k=ek</i> 'I come.SG' in conversation, and
		<i lang="ain-Latn">=an</i> appears only with the suppletive plural
		(<i lang="ain-Latn">arki=an</i> 'we come.PL'). In the elegant register of sung epic, the
		combination is grammatical:
	</p>

	<Ex
		m="ek=an"
		g="come=4.S"
		tr="I came. (hero's voice, singular)"
		constructed
		dial="SAR"
		note="In elegant narrative (atomte itak), the fourth-person suffix =an combines with the singular verb root ek 'come.SG'. In conversational Saru/Chitose this combination is ungrammatical; the everyday first-person singular would be k=ek 'I come'. The singular + 4.S combination is a diagnostic of the elegant register (Satō 2008: 263)."
	/>

	<p>
		The broader elegant-register morphology (applicative case-marking by prefixes
		<i lang="ain-Latn">e-</i> / <i lang="ain-Latn">o-</i> / <i lang="ain-Latn">ko-</i>
		rather than particles, more polysynthetic words, genre-specific lexicon) is covered in
		<Xr ch="poetic-archaic-elevated-register" />.
	</p>
</S>

<S t="Verse structure: the two metres" id="verse-structure">
	<p>
		Verse in Hokkaido Ainu is not organized by rhyme. <Ref k="kindaichi1931" /> noted the
		absence of systematic rhyme; <Ref k="okuda2022" />, following Philippi (1979), confirms
		that repetition in Ainu poetry largely reflects the small vowel inventory and widespread
		reduplication rather than a prosodic constraint ‹contested›. Against this consensus,
		Tangiku (2020) argues that an 18th-century yukar text
		(<i lang="ain-Latn">ルウェサニウンクㇽ</i>) uses deliberate head-rhyme, end-rhyme, and
		imperfect rhyme — a finding that, if sustained, would require revising the standard
		account (nukopoli, aynu-corpora Discord 2023-12-13; <Ref k="aynucorporadiscord" />)
		‹contested›.
	</p>
	<p>
		<Ref k="okuda2022" /> argues that Hokkaido Ainu verse deploys two metrically distinct
		systems, genre-differentiated. The first, <strong>syllable-count orientation</strong>,
		targets five syllables per line as basic (four-to-seven is the attested range), as
		described by <Ref k="kindaichi1931" p="165" /> and <Ref k="tamura1973" p="56" />;
		it is characteristic of lyric songs (<i lang="ain-Latn">yaysama</i>). The second,
		<strong>accent orientation</strong>, places the first pitch accent in a fixed rhythmic
		slot (the first disyllabic foot) and admits four-syllable lines when the accent is
		line-initial; it characterizes divine epics (<i lang="ain-Latn">kamuy yukar</i>). Heroic
		epics (<i lang="ain-Latn">yukar</i>) use both systems depending on the musical rhythm of
		the performance <Ref k="okuda2022" /> ‹contested›. Okuda reports no other language in
		which one reciter alternates between two distinct metrical systems — a typological claim
		that rests on an argument from the present state of the literature rather than exhaustive
		survey ‹speculative›.
	</p>
	<p>
		Techniques for achieving the five-syllable target in syllable-count verse include: the
		insertion of the light verb <A w="ki" gl="do" /> between a verb and a following element,
		uncontracted person prefixes, a prefixed initial <i lang="ain-Latn">u-</i>, and retention
		of vowels that elide in conversational speech <Ref k="sato2008" p="264" />;
		<Ref k="okuda2022" />. These techniques are also poetic-register diagnostics; they are
		analysed as part of the couplet and formulaic system in
		<Xr ch="parallelism-couplets-and-word-pairs" />.
	</p>
</S>

<S t="Competing taxonomies and contested genre boundaries" id="competing-taxonomies">
	<p>
		Each major scholar of Ainu oral literature has organized the genre system around different
		primary criteria. <Ref k="kindaichi1933" /> and Kubodera classified the corpus primarily
		by protagonist type (human vs divine vs culture-hero). Chiri Mashiho
		(<Ref k="chiri1955" />) supplied the dialect-distribution data that revealed the naming
		mismatches across regions. <Ref k="tamura1996" /> showed that the Saru category of
		<i lang="ain-Latn">oyna</i> is absent from at least one primary narrator's repertoire.
		<Ref k="nakagawa2001b" /> established the four-function classification adopted by
		<Ref k="endo2022" /> and followed here. These schemes are not mutually falsifying — they
		weight different parameters — but they produce different genre maps and different
		descriptions of what counts as a variant of what.
	</p>
	<p>
		At the level of individual texts, genre boundaries can be indeterminate. A kamuy yukar
		from the Shizunai collection narrated by 織田ステノ, titled "怠け者の子供" ('The lazy
		child'), carries a long sakehe (<i lang="ain-Latn">manayta sanke tar panke tar
		kocupu</i>) but is shorter than typical kamuy yukar and concludes as a
		<i lang="ain-Latn">yayeisoytak</i> (first-person self-narration) by a single human boy
		rather than a divine protagonist. Having melody rules out classification as prose, yet the
		text fits neither standard kamuy yukar (wrong protagonist type) nor yukar (carries a
		sakehe) (gengojiro, aynu-corpora Discord 2025-12-12; <Ref k="aynucorporadiscord" />)
		‹contested›. Such cases show that the sakehe-vs-no-sakehe and divine-vs-human-protagonist
		parameters do not always co-vary as the taxonomy predicts.
	</p>
	<p>
		The elegant-vs-everyday register distinction (see <Xr ch="poetic-archaic-elevated-register" />)
		raises a related question. <Ref k="kindaichi1935" p="381–382" /> ranked the density of
		elegant-language features across genres from least to most: greeting &lt; prayer &lt;
		incantation &lt; <i lang="ain-Latn">caranke</i> &lt; yukar, treating the gradation as
		qualitative differences. Nakagawa (2001a[1987]: 222, cited via <Ref k="endo2022" />)
		argues instead that elegant and everyday language are points on a continuum keyed to
		verse/prose and fixedness/improvisation, and proposes further that a genre-phrase
		classification (yukar-phrase vs prayer-phrase) may be more analytically effective than the
		elegant/everyday binary ‹contested›. That proposal predicts that the register differences
		between yukar and prayer, though real, are not of the same kind as the difference between
		elegant and everyday language generally; the evidential and TAM consequences of this
		distinction are tracked in <Xr ch="narrative-tam-evidential-patterning-by-genre" />.
	</p>
	<p>
		The Ijäs pedagogical grammar (<Ref k="ijas2023" />) does not present a systematic genre
		taxonomy and is focused on spoken, conversational Ainu rather than the verse tradition.
		Where vocabulary or constructions associated with the oral-literature register appear in
		that work, the present chapter routes the reader to the philological and descriptive
		literature treated here.
	</p>
</S>
