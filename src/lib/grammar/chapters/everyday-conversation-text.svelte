<!-- src/lib/grammar/chapters/everyday-conversation-text.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The passage and its source" id="source">
	<p>
		The passage glossed in this chapter is drawn from the Asahikawa section of
		<Ref k="utari1994" />, a conversational textbook produced by the Hokkaidō Utari Kyōkai to
		accompany a set of VHS recordings. Two speakers are documented: Sugimura Fusa (杉村フサ)
		and Kawamura Tome (川村トメ), both of Asahikawa (旭川市). The exchange depicts a
		neighbour's visit — calling at the door, being invited in, exchanging a well-being greeting,
		and closing with a weather remark — and brings into a single connected stretch several
		constructions that are analysed in separate chapters of this grammar: the polar-question
		frame of the evidential, the 1SG and 2SG person prefixes, the causal connective
		<i lang="ain-Latn">kusu</i>, and the inferential auxiliary
		<i lang="ain-Latn">nankor</i>. The dialect is Asahikawa (<Ref k="nakagawa2024" p="82–83"
		/>), a northern Hokkaido variety; the transcription uses the romanization conventions of the
		original publication, with small-kana codas rendered as their consonant values.
	</p>

	<p>
		The register is everyday colloquial speech, sharply distinct from the elevated
		vocabulary of oral-literature genres (<Xr ch="uwepeker-prose-tale" />;
		<Xr ch="inonno-itak-ritual-prayer" />) and from the gendered-register differences
		documented in <Xr ch="gendered-register-speech" />. The published source is
		<Ref k="utari1994" p="2–3" />; Asahikawa section, speakers Sugimura Fusa and Kawamura Tome.
	</p>
</S>

<S t="Arrival and entry" id="arrival">
	<p>
		Sugimura calls through the closed door, addressing her friend as <i lang="ain-Latn">sapo</i>
		(older sister, a close-kin address term). The existential verb
		<A w="an" gl="exist, be" /> appears without a person prefix: in Hokkaido Ainu, the 3rd
		person is zero-marked (<Xr ch="person-marking-architecture" />), and the intended referent
		— the woman inside — is a 3rd-person entity from the caller's perspective. The
		formal noun <A w="ruwe" /> in its bare clause-final position, without the following copula
		<i lang="ain-Latn">ne</i>, builds the polar-question frame rather than the declarative
		evidential (<Xr ch="ruwe-ne-inferential" s="frames">the polar-question frame</Xr>).
	</p>

	<Ex
		m="sapo an ru-we"
		g="older.sister exist track-POSS"
		tr="Older sister, are you there?"
		orig="サポ、アン ルウェ？"
		origLang="ain-Kana"
		cite="utari1994:2"
		dial="ASA"
		place="Sugimura Fusa, Asahikawa"
		note="Polar question via bare ruwe (without ne). The argument of an is zero-marked (3rd person, the sister inside the house). The same formula with an explicit 2SG.S prefix appears later in the same exchange (see §3 below)."
	/>

	<p>
		Kawamura responds and invites her visitor in. The directive particle
		<A w="ya" gl="please (softener)" /> in Asahikawa corresponds to
		<A w="yan" /> in Saru and most other varieties (a difference noted in a footnote of the
		original publication <Ref k="utari1994" p="2" />); it functions as a polite imperative
		softener, not as the default bare imperative
		(<Xr ch="sentence-final-particles-illocutionary-force" />). The motion verb
		<A w="ahun" gl="enter" /> is the singular form; its suppletive plural is
		<A w="ahup" />. A single visitor is addressed, hence the singular
		(<Xr ch="suppletive-verbal-number" />).
	</p>

	<Ex
		m="o ahun ya"
		g="INTERJ enter SOFT"
		tr="Come on in, please."
		orig="オ、アフン ヤ。"
		origLang="ain-Kana"
		cite="utari1994:2"
		dial="ASA"
		place="Kawamura Tome, Asahikawa"
		note="o is a non-lexical interjection (Japanese sā 'well then' equivalent). ya in ASA functions as the imperative softener yan of other dialects; the footnote in the source makes this explicit."
	/>
</S>

<S t="The well-being exchange" id="wellbeing">
	<p>
		Later in the visit Sugimura enquires after Kawamura's well-being, now with an explicit
		2nd-person prefix on the same existential verb <A w="an" />. The contrast between the
		zero-marked opening question (<i lang="ain-Latn">an ruwe?</i>, §2) and the prefix-marked
		well-being question shows the full range of the person system operating on a single verb
		stem: 3rd-person referents are zero-marked, while 1SG and 2SG carry distinct prefixes
		throughout Hokkaido (<Xr ch="first-second-person-singular-affixes" />).
	</p>

	<Ex
		m="sapo totekno e=an ru-we"
		g="older.sister in.good.health 2SG.S=exist track-POSS"
		tr="Sister, have you been well?"
		orig="サポ、トテクノ エアン ルウェ？"
		origLang="ain-Kana"
		cite="utari1994:2"
		dial="ASA"
		place="Sugimura Fusa, Asahikawa"
		note="e= is the 2SG.S prefix (intransitive subject), marking the addressee as the sole argument of an. totekno (in good health, well) is an adverb modifying the predicate. The polar-question ruwe frame is the same as in §2."
	/>

	<Ex
		m="totekno ku=an wa"
		g="in.good.health 1SG.S=exist CONJ"
		tr="I am well."
		orig="トテクノ クアン ワ。"
		origLang="ain-Kana"
		cite="utari1994:2"
		dial="ASA"
		place="Kawamura Tome, Asahikawa"
		note="ku= is the 1SG.S prefix, mirroring the 2SG.S e= of the question. The clause-linking particle wa (CONJ) closes the turn without a following clause; in conversational Ainu, a wa-final utterance signals a complete turn while leaving the chain formally open (see Nakagawa 2024: 345)."
	/>

	<p>
		Person marking in the Ainu verb is obligatory in careful speech; its omission in the
		opening formula above reflects conversational reduction where the referent is fully
		recoverable from the situation (<Ref k="nakagawa2024" p="163" />; <Ref k="sato2008"
		p="100–101" />). The conjunctive particle <A w="wa" /> connecting or closing clauses is
		treated in <Xr ch="sequential-wa-and-clause-chaining" />.
	</p>
</S>

<S t="A weather exchange" id="weather">
	<p>
		The visit closes with a brief weather exchange. Kawamura's remark is a biclausal
		construction: a causal adverbial clause in <A w="kusu" gl="because" /> followed by a
		main-clause assertion. The causal connective belongs to the pattern treated in
		<Xr ch="causal-and-purpose-clauses" />. The property verb
		<A w="merayke" gl="be cold" /> is an intransitive predicate whose subject — the weather
		— is zero-marked at 3rd person. <Ref k="bugaeva2022" />
	</p>

	<Ex
		m="numan poronno upas as kusu tanto sonno merayke na"
		g="last.night much snow fall because today truly be.cold FIN"
		tr="Because there was a lot of snow last night, today is truly cold."
		orig="ヌマン、ポロンノ ウバシ アシ クス タント ソンノ メライケ ナ。"
		origLang="ain-Kana"
		cite="utari1994:3"
		dial="ASA"
		place="Kawamura Tome, Asahikawa"
		note="The causal clause (numan … kusu) provides the reason; the main clause (tanto … na) asserts the result. as 'stand/fall' is the standard verb for snowfall (upas as = snow falls). The sentence-final particle na is a soft assertion marker."
	/>

	<p>
		Sugimura's agreeing response uses the same property verb
		<A w="merayke" gl="be cold" /> with the 4th-person intransitive suffix
		<A w="=an" />. The 4th / indefinite person, whose S-role clitic is <i lang="ain-Latn">=an</i>,
		shifts the perspective from a specific 3rd-person subject to a general experiencer
		(<Xr ch="indefinite-fourth-person-paradigm" />). The existential-type aspect form
		<i lang="ain-Latn">V=an</i> is the same suffix in its aspectual function, discussed
		in <Xr ch="existential-locational-an-oka" />.
	</p>

	<Ex
		m="sonno merayke=an"
		g="truly be.cold=4.S"
		tr="It really is cold."
		orig="ソンノ メライケアン。"
		origLang="ain-Kana"
		cite="utari1994:3"
		dial="ASA"
		place="Sugimura Fusa, Asahikawa"
		note="merayke=an: the 4th-person intransitive suffix =an attaches to the property verb, yielding a general-experiencer reading ('it is cold out'). Compare merayke na above, where the subject is 3rd-person zero-marked."
	/>

	<p>
		Kawamura rounds off the exchange with a prediction, using the inferential auxiliary
		<A w="nankor" />. Unlike <i lang="ain-Latn">ruwe ne</i>, which presents content as
		already-established knowledge (<Xr ch="ruwe-ne-inferential" />), <i lang="ain-Latn">nankor</i>
		encodes a tentative, inference-based assertion: the speaker reasons from current conditions
		rather than perceiving or reporting the future event directly. The auxiliary is discussed
		as part of the epistemic-modal paradigm in <Xr ch="epistemic-irrealis-modality" /> and at
		the evidential-mirative interface in <Xr ch="mirativity-scope-grammaticalization" />. The
		Asahikawa form undergoes sandhi: <i lang="ain-Latn">nankor</i> followed by the final
		particle <i lang="ain-Latn">na</i> surfaces as <i lang="ain-Latn">nankornā</i>, rendered
		in the source's Katakana as ナンコンナー.
	</p>

	<Ex
		m="nisatta sirpirka nankor na"
		g="tomorrow be.fine.weather INFR FIN"
		tr="Tomorrow will probably be fine."
		orig="ニサッタ シリピリカ ナンコンナー。"
		origLang="ain-Kana"
		cite="utari1994:3"
		dial="ASA"
		place="Kawamura Tome, Asahikawa"
		note="nankor encodes inference-based assertion (INFR): the speaker has no direct evidence about tomorrow's weather and reasons from current conditions. The Katakana ナンコンナー represents the ASA sandhi form nankor + na → nankornā."
	/>
</S>

<S t="Synopsis of constructions" id="synopsis">
	<p>
		The seven utterances above cover a cluster of constructions whose full analyses belong
		to separate chapters. The table maps each to its primary grammatical feature.
	</p>

	<table>
		<thead>
			<tr>
				<th>utterance</th>
				<th>primary feature</th>
				<th>treated in</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">sapo an ru-we?</i></td>
				<td>polar-question evidential frame (bare <i lang="ain-Latn">ruwe</i>); 3rd-person zero-marking</td>
				<td><Xr ch="ruwe-ne-inferential" />; <Xr ch="person-marking-architecture" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">o ahun ya</i></td>
				<td>directive with softener <i lang="ain-Latn">ya</i> (ASA ≈ <i lang="ain-Latn">yan</i> elsewhere); suppletive singular <i lang="ain-Latn">ahun</i></td>
				<td><Xr ch="sentence-final-particles-illocutionary-force" />; <Xr ch="suppletive-verbal-number" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">sapo totekno e=an ru-we?</i></td>
				<td>2SG.S prefix <i lang="ain-Latn">e=</i>; polar-question frame</td>
				<td><Xr ch="first-second-person-singular-affixes" />; <Xr ch="ruwe-ne-inferential" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">totekno ku=an wa</i></td>
				<td>1SG.S prefix <i lang="ain-Latn">ku=</i>; clause-linking <i lang="ain-Latn">wa</i></td>
				<td><Xr ch="first-second-person-singular-affixes" />; <Xr ch="sequential-wa-and-clause-chaining" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">numan poronno upas as kusu tanto sonno merayke na</i></td>
				<td>causal clause with <i lang="ain-Latn">kusu</i>; property verb predication</td>
				<td><Xr ch="causal-and-purpose-clauses" />; <Xr ch="property-concept-predication" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">sonno merayke=an</i></td>
				<td>4th-person suffix <i lang="ain-Latn">=an</i>; existential-type aspect</td>
				<td><Xr ch="indefinite-fourth-person-paradigm" />; <Xr ch="existential-locational-an-oka" /></td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">nisatta sirpirka nankor na</i></td>
				<td>inferential auxiliary <i lang="ain-Latn">nankor</i></td>
				<td><Xr ch="epistemic-irrealis-modality" />; <Xr ch="mirativity-scope-grammaticalization" /></td>
			</tr>
		</tbody>
	</table>

	<p>
		The passage also illustrates a characteristic feature of Ainu conversational structure:
		each turn-final predicate controls the evidential or modal framing for the whole turn —
		<i lang="ain-Latn">ruwe</i> in the questions, <i lang="ain-Latn">wa</i> in the
		open-chain response, bare <i lang="ain-Latn">na</i> in the assertions, and
		<i lang="ain-Latn">nankor na</i> in the inference. The parallel between this conversational
		pattern and the evidential-turn structure of oral-literature frame-text is noted in
		<Ref k="nakagawa2024" p="392–396" />; the contrast with oral-literature patterning is
		illustrated in <Xr ch="narrative-tam-evidential-patterning-by-genre" />.
	</p>
</S>
