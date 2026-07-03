<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The delimiting-particle (副助詞) layer" id="overview">
	<p>
		Hokkaido Ainu encodes information structure — topic, focus, and contrast — through a class of
		<em>delimiting particles</em> (副助詞) that adjoin to a noun phrase, postpositional phrase, or
		verb phrase and add meaning without changing the host's grammatical category
		<Ref k="nakagawa2024" p="316, §9.4" />; <Ref k="fukuda1961" p="§2" />;
		<Ref k="sato2008" p="61, §7.1" />. The language carries no morphological case on core
		arguments and no topic or focus inflection on the verb; the agreement a verb shows with its
		arguments is governed by valency, not by whether one of those arguments has been focus- or
		topic-marked <Ref k="nakagawa2024" p="316–319" />. The word-order consequences of topic
		marking — the strong tendency for a topicalized phrase to occur clause-initially, and the
		patterns of left- and right-dislocation — are treated in
		<Xr ch="pragmatic-word-order-dislocation" />; the present chapter is restricted to the
		particles themselves and their semantic scope.
	</p>
	<p>
		One structural property shared by all delimiting particles is that they cannot host a
		clause-linking suffix directly when they follow a verb phrase. The verb phrase must first be
		re-verbalised by the dummy light transitive <A w="ki" gl="do" /> before the connective
		attaches (<em>ki</em>-support). Fukuda's foundational treatment of the Saru particle system
		already identifies this as the single clearest diagnostic of the 副助詞 class
		<Ref k="fukuda1961" p="§2" />; <Ref k="nakagawa2024" p="317, 320" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>particle</th>
				<th>function</th>
				<th>attachment</th>
				<th>dialect note</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">anak</i> / <i lang="ain-Latn">anakne</i></td>
				<td>topic / contrastive topic 'as for …'</td>
				<td>NP, PP, VP</td>
				<td>pan-Hokkaido</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">patek</i></td>
				<td>restrictive focus 'only, nothing but'</td>
				<td>NP, VP (ki-support), AdvP</td>
				<td>pan-Hokkaido</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">takup</i> / <i lang="ain-Latn">takupi</i></td>
				<td>'only' (more noun-like; see §)</td>
				<td>NP, VP (ne-support)</td>
				<td>W. Hokkaido (Horobetsu, Saru, Chitose)</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">poka</i> / <i lang="ain-Latn">pokay</i></td>
				<td>minimal threshold 'at least, if not more'</td>
				<td>NP</td>
				<td>
					<i lang="ain-Latn">poka</i> W. Hokkaido; <i lang="ain-Latn">pokay</i> Samani,
					Tokachi, Shiranuka, Asahikawa
				</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">ka</i> / <i lang="ain-Latn">kay</i></td>
				<td>additive / scalar focus 'also, even'</td>
				<td>NP, VP</td>
				<td><i lang="ain-Latn">kay</i> Samani / Tokachi / Shiranuka / Kushiro</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hem</i> / <i lang="ain-Latn">hemem</i></td>
				<td>plain additive 'also, and'</td>
				<td>NP</td>
				<td>Saru / Chitose; <i lang="ain-Latn">hemem</i> mostly Horobetsu</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">hene</i> / <i lang="ain-Latn">ene</i></td>
				<td>'for example; or … or …'</td>
				<td>NP</td>
				<td><i lang="ain-Latn">ene</i> Tokachi</td>
			</tr>
		</tbody>
	</table>

	<p>
		Sources for all rows: <Ref k="nakagawa2024" p="320–330, §9.4.2" />; <Ref k="fukuda1961" p="§4–14" />;
		<Ref k="sato2008" p="62–68" />. The kakari-musubi emphatic concord particles
		(<i lang="ain-Latn">ta</i>, <i lang="ain-Latn">tasi</i>, <i lang="ain-Latn">tap</i>) and the
		focus-concord sentence-final particles that pair with them are treated in
		<Xr ch="sentence-final-particles-illocutionary-force" />; the nominalization-based focus
		construction (<i lang="ain-Latn">…p ne</i>, <i lang="ain-Latn">…hi ne</i>) is in
		<Xr ch="cleft-nominalization-focus" />.
	</p>
</S>

<S t="anak and anakne: the topic particle" id="topic">
	<S t="Form and attachment" id="topic-form">
		<p>
			<A w="anak" /> and <A w="anakne" /> mark the 提題 ('topic-raising') function: a phrase is
			singled out as the current topic of talk and implicitly set in contrast to other possible
			topics <Ref k="nakagawa2024" p="320, §9.4.2①" />. Nakagawa and Satō agree that the two
			forms carry no difference in meaning: "whether <i lang="ain-Latn">anak</i> and
			<i lang="ain-Latn">anakne</i> differ at all is an open question" <Ref k="sato2008" p="64" />;
			<Ref k="nakagawa2024" p="320" />. The particle follows its host immediately. Three attachment
			sites are documented: after a bare noun phrase, after a postpositional phrase (noun + relational
			noun), and after a verb phrase that functions as the topic of the sentence
			<Ref k="nakagawa2024" p="320–321" />. Ijäs's online pedagogical grammar gives a
			learner-oriented account of the same functions <Ref k="ijas2023" />.
		</p>

		<Ex
			m="imi anak neun oka yakka pirka korka e=kewtumu a=ramosma wa ne"
			g="clothes TOP how exist even.if good but 2SG.POSS=heart 4.A=please CONJ COP"
			tr="The clothes, whatever they are like, are fine; your heart is what pleased me."
			cite="nakagawa2024:320"
			dial="SAR"
			place="Nakagawa ex. 515"
			note="anak after a bare NP (imi 'clothes'); the topic phrase is separated from its comment by the adversative korka 'but'."
		/>

		<p>
			The particle does not mark the grammatical role of its host. A topicalized phrase may be the
			agent, the patient, or an oblique of the comment predicate, and the verb's person agreement
			is determined entirely by its valency, not by topic status. This is consistent with the
			absence of morphological case on core arguments and with the head-marking profile of the
			language described in <Xr ch="person-marking-architecture" />: it is the verb that tracks
			participants through its prefixal paradigm, and a separate topic particle does not alter
			that tracking.
		</p>
	</S>

	<S t="Topic versus contrastive topic" id="contrastive-topic">
		<p>
			Satō distinguishes two uses of a single form: plain topic (主題) and contrastive topic
			(対照) <Ref k="sato2008" p="62, §7.2" />. In contrastive use, two phrases each receive
			<A w="anak" /> or <A w="anakne" /> and the comment clauses are set in explicit opposition,
			typically with <A w="korka" gl="but" />:
		</p>

		<Ex
			m="ku=nu hi anak k=eramuan pe ne korka tasa itak anak k=eranpewtek"
			g="1SG.A=hear NMLZ TOP 1SG.S=know NMLZ COP but reply speech TOP 1SG.S=not.know"
			tr="The question I understand, but the answer I don't know."
			cite="sato2008:62"
			dial="CHI"
			note="Two anak-marked phrases in explicit contrast; each heads a separate predicate clause."
		/>

		<p>
			A contrastive pair does not require both members to be overtly topic-marked. In the
			following example the first member (<A w="wakka" gl="water" />) bears
			<A w="anak" />, but the second (<A w="sake" gl="sake" />) carries no particle; the
			contrast is established by the <A w="korka" gl="but" /> connective and the parallel
			structure <Ref k="sato2008" p="62–63" />:
		</p>

		<Ex
			m="wakka anak ku=ku rusuy ka somo ki korka sake ku=ku rusuy wa"
			g="water TOP 1SG.A=drink DES even NEG do but sake 1SG.A=drink DES FIN"
			tr="I don't want to drink water, but I do want to drink sake."
			cite="sato2008:62–63"
			dial="CHI"
			note="First contrastive member (wakka) is topic-marked; the second (sake) is not. The particle ka reinforces the negation on the first member with a scalar 'not even' reading."
		/>
	</S>

	<S t="The given-information restriction" id="topic-givenness">
		<p>
			<A w="anak" /> requires a referent that the hearer can already be assumed to know
			<Ref k="sato2008" p="63" />. Satō illustrates with a pointing context: a demonstrative
			like <i lang="ain-Latn">toan pe</i> 'that thing' is situationally identifiable but is being
			raised as a topic for the first time, so <A w="anak" /> is blocked even though the
			referent is visible. The constraint is sharper than Japanese 「は」, which permits
			'あれは何だ?' in the same situation; Ainu does not allow the equivalent construction
			<Ref k="sato2008" p="63" />; <Ref k="nakagawa2024" p="320" />. A participant already
			mentioned or recoverable from context can freely be topic-marked; given that Hokkaido Ainu
			regularly omits core arguments when they are contextually recoverable (see
			<Xr ch="reference-tracking" />), <A w="anak" /> signals that the referent is being made
			the active topic in contrast to something else, not merely that it is recoverable.
		</p>
	</S>

	<S t="Scope and weight compared with Japanese wa" id="topic-weight">
		<p>
			Nakagawa notes that <A w="anak" /> is used considerably less than Japanese 「は」: a
			word-for-word substitution of 「は」 with <A w="anak" /> produces unnatural Ainu sentences
			<Ref k="nakagawa2024" p="320" />. The particle carries something of the weight of
			'〜というものに関しては' ('as for the thing that is X'), marking a topic that is actively
			contrasted with alternatives. Once a topic has been established in discourse, it need not be
			re-marked on subsequent clauses within the same topic chain. This assessment is corroborated
			by community linguistic discussion: the particle is reserved for contexts where singling-out
			or contrast is genuinely intended, and omitting it when topic continuity is clear from context
			is the natural choice (nukopoli, aynu-corpora Discord 2024-11-09;
			<Ref k="aynucorporadiscord" />) ‹corpus-suggested›.
		</p>
	</S>

	<S t="Person affixes and independent pronouns" id="topic-pronouns">
		<p>
			A delimiting particle cannot attach to a person-agreement prefix. Those prefixes are clitics
			that form a morphological unit with the stem; they are not free words and cannot host a
			postposition or particle. Topicalizing a first- or second-person participant therefore
			requires the free independent pronoun (<A w="kani" gl="I" />,
			<A w="eani" gl="you (sg.)" />, etc.) as the syntactic host
			<Ref k="nakagawa2024" p="253, ex.323" />. The construct
			<i lang="ain-Latn">*ku= anakne</i> or <i lang="ain-Latn">*en= anakne</i>, where the
			particle would attach to a bare prefix, is ungrammatical
			<Ref k="nakagawa2024" p="253" />:
		</p>

		<Ex
			m="kani anakne Sikot ta k=an menoko ka somo ne kusu"
			g="1SG TOP Chitose LOC 1SG.S=be woman even NEG COP because"
			tr="As for me, I am not even a woman from Chitose — (so …)."
			cite="nakagawa2024:253"
			dial="SAR"
			place="Nakagawa ex. 323"
			note="The free 1SG pronoun kani hosts anakne; the clitic ku= could not. The clause is a reason clause; its continuation is implicit in context."
		/>

		<p>
			The same constraint applies to all persons. For the contrastive topicalization of a
			fourth-person or logophoric referent through the free pronoun
			<A w="asinuma" gl="self (logophoric)" />, see
			<Xr ch="indefinite-fourth-person-paradigm" />, and for the full independent-pronoun
			paradigm, <Xr ch="independent-personal-pronouns" />.
		</p>
		<p>
			The corpus supplies further examples with possessed NPs as topic. In the following passage
			the narrator's dog is established as the topic of a multi-clause stretch by
			<A w="anakne" /> on the possessed NP:
		</p>

		<Ex
			m="a=kor seta anakne i=oyakke oma ka somo ki p ne kusu i=sam ta ukasuy ipe=an"
			g="4.A=have dog TOP 4.O=go.far go even NEG do NMLZ COP because 4.O=vicinity LOC together eat=4.S"
			tr="My dog never went far from me, so we ate together beside each other."
			cite="ilcaa1976"
			dial="SAR"
			place="Kawakamu Matsuko (川上まつ子), uwepeker (AA研アイヌ語資料)"
			note="anakne attaches to the possessed NP a=kor seta 'my dog'; the topic discourse-tracks the dog across the following clauses. ka reinforces the negation on the embedded predicate."
		/>
	</S>

	<S t="anak versus anakne and diachrony" id="anak-vs-anakne">
		<p>
			Both forms function identically in the texts, but the frequency picture is contradictory
			across sources. Satō, working from Chitose texts, reports that
			<A w="anakne" /> occurs roughly twice as often as <A w="anak" />
			<Ref k="sato2008" p="64" />, while the whole aligned Hokkaido corpus (over 1.5 million
			tokens) gives the reverse — approximately 9,355 tokens of <A w="anak" /> against 4,789 of
			<A w="anakne" />. Satō's counts cover a single dialect and a small text set; the corpus
			aggregates all Hokkaido varieties without disambiguating functions. Whether there is any
			conditioned distribution between the two forms remains open ‹contested›.
		</p>
		<p>
			Etymologically, <A w="anak" /> derives from <i lang="ain-Latn">an-yak</i> — the
			existential verb <i lang="ain-Latn">an</i> plus the conditional/contrastive particle
			<A w="yak" /> — as recorded in the Saru dictionary <Ref k="tamura1996" p="s.v. anak" />
			(corroborated by nukopoli, aynu-corpora Discord 2023-12-08;
			<Ref k="aynucorporadiscord" />) ‹speculative›. <A w="anakne" /> adds
			<A w="ne" /> (the copula or a reinforcing particle) to the same base. The corresponding
			Sakhalin forms have been proposed as <i lang="ain-Latn">neyke</i> or
			<i lang="ain-Latn">neanpe</i> (nukopoli, aynu-corpora Discord 2024-12-27;
			<Ref k="aynucorporadiscord" />) ‹speculative›; the correspondence remains to be established
			through systematic comparative work.
		</p>
	</S>
</S>

<S t="Restrictive focus: patek and its near-synonyms" id="restrictive-focus">
	<p>
		<A w="patek" /> marks the exclusion of all alternatives: the domain of the focus contains
		one item and nothing else <Ref k="nakagawa2024" p="327–328, §9.4.2④" />;
		<Ref k="fukuda1961" p="§9" />; <Ref k="sato2008" p="68" />. The particle has a high degree
		of autonomy: it may attach to a noun phrase, an adverb phrase, or a verb phrase (with
		<em>ki</em>-support before any following connective), and it can carry its own accent and
		appear without a following clause. Tamura (via <Ref k="nakagawa2024" p="327" paren />)
		places <A w="patek" /> at the boundary between adverb and delimiting particle for this
		reason.
	</p>

	<Ex
		m="cis patek a=ki kor an=an pe ne ru-we ne a p"
		g="cry only 4.A=do while exist=4.S NMLZ COP track-POSS COP PFV NMLZ"
		tr="(She) was doing nothing but crying, and yet …"
		cite="nakagawa2024:327"
		dial="SAR"
		place="Nakagawa ex. 548"
		note="patek follows a VP (cis 'cry'); ki-support is required before the sequential connective kor."
	/>

	<p>
		Two near-synonyms with different morphosyntactic behaviour are documented for parts of
		Hokkaido. <A w="takup" /> (possessed form <A w="takupi" />), restricted to western
		Hokkaido (Horobetsu, Saru, Chitose), is more noun-like than <A w="patek" />: after a
		verb phrase it requires <i lang="ain-Latn">ne</i>-support (the copula, not
		<i lang="ain-Latn">ki</i>), it has a possessed-form variant, and it cannot follow an
		adverb phrase — properties that place it between noun, 名助詞, and 副助詞
		<Ref k="nakagawa2024" p="328–329" />; <Ref k="fukuda1961" p="§10" />.
	</p>
	<p>
		<A w="poka" /> (eastern variant <A w="pokay" />) denotes the minimal threshold: 'at
		least, even just this much'. Its use is restricted to contexts where the speaker demands
		realisation of a minimum requirement or embeds it in a negation; it does not appear with
		already-accomplished events <Ref k="nakagawa2024" p="329" />; <Ref k="fukuda1961" p="§7" />.
		<i lang="ain-Latn">poka</i> is the western form; <i lang="ain-Latn">pokay</i> is found at
		Samani, Tokachi, Shiranuka, and Asahikawa <Ref k="nakagawa2024" p="329" />.
	</p>
	<p>
		A community observation notes that traditional Hokkaido Ainu texts favour
		<i lang="ain-Latn">ani patek</i> (instrumental <A w="ani" /> + <A w="patek" />) while
		modern community usage shows increased <i lang="ain-Latn">patek ani</i>. The order reversal
		may reflect the influence of Japanese 「だけ」, which derives from a grammaticalized noun and
		can appear as a free NP before <span lang="ja">に</span>; <A w="patek" /> cannot function
		as a noun headword, so the rising frequency of <i lang="ain-Latn">patek ani</i> is
		interpreted as contact-induced reanalysis (nukopoli, aynu-corpora Discord 2024-12-16;
		<Ref k="aynucorporadiscord" />) ‹contested›. The core point — that <A w="patek" /> does
		not nominalize — is consistent with Nakagawa's and Fukuda's analyses
		<Ref k="nakagawa2024" p="327" />; <Ref k="fukuda1961" p="§9" />.
	</p>
</S>

<S t="Additive and scalar focus: ka, hem, and hene" id="additive-focus">
	<S t="ka: additive, scalar, and NPI-forming" id="ka-focus">
		<p>
			<A w="ka" /> (southeastern Hokkaido variant <A w="kay" />) adds the host to a
			contextually established set and carries a scalar or contrary-to-expectation force: 'also,
			even, and — perhaps surprisingly'
			<Ref k="nakagawa2024" p="321–322, §9.4.2②" />; <Ref k="fukuda1961" p="§5" />;
			<Ref k="sato2008" p="64–65" />. Fukuda formulates its Saru semantics as 'beyond or
			contrary to expectation' <Ref k="fukuda1961" p="§5" />, and Satō illustrates with
			examples carrying emotional weight: 'even a dog won't eat it'; 'even two or three young men
			came' <Ref k="sato2008" p="64" />. This distinguishes <A w="ka" /> from the plain additive
			<A w="hem" /> (§ below).
		</p>
		<p>
			In negative clauses, <A w="ka" /> reinforces the negation with a scalar 'not even'
			reading. When two or more noun phrases each carry <A w="ka" />, the construction
			lists members of a set all of which fall within the scope of the negation:
		</p>

		<Ex
			m="seta ka nep ka isam"
			g="dog FOC thing FOC not.exist"
			tr="There was neither a dog nor anything at all."
			cite="nakagawa2024:322–323"
			dial="SAR"
			note="Both seta 'dog' and nep (indefinite 'thing/what') are marked with ka; doubled ka under negation yields total exclusion."
		/>

		<p>
			The combination of an indefinite pro-form with <A w="ka" /> produces an indefinite or
			negative-polarity series: <i lang="ain-Latn">nep ka</i> 'something / anything',
			<i lang="ain-Latn">nen ka</i> 'someone / anyone',
			<i lang="ain-Latn">ney ta ka</i> 'somewhere / anywhere'; under negation these shift to
			'nothing / no-one / nowhere'
			<Ref k="nakagawa2024" p="322–323" />; <Ref k="sato2008" p="137" />.
			The interface between <A w="ka" /> and the interrogative pro-form system —
			including the question-word vs indefinite-word distinction — is treated in
			<Xr ch="interrogative-pro-forms" />. For the evidential use of the same pro-forms in
			content questions, see <Xr ch="evidential-schema-overview" />.
		</p>
	</S>

	<S t="hem, hemem, and hene: plain additive and alternative focus" id="hem-hene">
		<p>
			<A w="hem" /> (Saru / Chitose; Horobetsu variant <A w="hemem" />) is the plain additive
			particle: it adds one more item to a list with no scalar or contrary-to-expectation
			implication. In a paired construction <i lang="ain-Latn">X hem Y hem</i> 'both X and Y',
			each member carries <A w="hem" /> and the reading is symmetrical addition
			<Ref k="nakagawa2024" p="321–322" />; <Ref k="fukuda1961" p="§4" />. The particle is
			attested only in Saru and Chitose; elsewhere plain juxtaposition or, in Tokachi and
			Kushiro, the coordinator <A w="usa" /> serves the same function.
		</p>
		<p>
			<A w="hene" /> (Tokachi variant <A w="ene" />) introduces alternatives or illustrative
			examples: 'for example; or … or …'. A repeated <i lang="ain-Latn">hene … hene</i>
			presents two or more members as mutually interchangeable options, as in
			<i lang="ain-Latn">nisatta hene oyasim hene</i> 'tomorrow or the day after'
			<Ref k="nakagawa2024" p="323–324" />; <Ref k="fukuda1961" p="§6" />;
			<Ref k="sato2008" p="65" />.
		</p>
	</S>
</S>
