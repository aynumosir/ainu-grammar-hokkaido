<!-- src/lib/grammar/chapters/reciprocal-u.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The prefix u- and its arity effect" id="overview">
	<p>
		The prefix <A w="u-" gl="reciprocal" /> is a valency-decreasing derivational morpheme with
		arity −1: it fills the object slot of a transitive verb with a mutual or collective
		participant, detransitivizing the verb <Ref k="nakagawa2024" p="187–188" />;
		<Ref k="bugaevakobayashi2022" p="§4.2.1" />. The derived verb always takes a plural or
		collective subject — only two or more participants can stand in a mutual relation. The
		person-marking diagnostic (the operative test of derived transitivity set out in
		<Xr ch="valency-voice-overview" />) confirms the intransitivization: a verb that takes the
		prefixal A-indexes <i lang="ain-Latn">a=</i> or <i lang="ain-Latn">ci=</i> shifts to the
		suffixal S-indexes <i lang="ain-Latn">=an</i> or <i lang="ain-Latn">=as</i> after
		<i lang="ain-Latn">u-</i> <Ref k="bugaevakobayashi2022" p="§4.2.1" />;
		<Ref k="sato2008" p="232–233" />.
	</p>

	<p>
		The slot <i lang="ain-Latn">u-</i> occupies is the same nominal/applicative position as the
		<Xr ch="reflexive-yay">reflexive prefix</Xr> <A w="yay-" gl="REFL" />,
		<A w="si-" gl="AUTOC/ANTIC/REFL; REFL.POSS" />, and the
		<Xr ch="antipassive-detransitive-i">antipassive</Xr> <A w="i-" gl="antipassive" />; these
		prefixes all decrease or rearrange valency, but their semantic domains differ —
		self-directed action, autocausative/anticausative/reflexive or reflexive-possessive marking, object defocusing, and mutual participation, respectively. The prefix
		is highly productive: it attaches to base transitive verbs, to applicative-prefixed stems,
		and to causativized forms, with the arity calculus predicting the transitivity of each output
		(see <Xr ch="valency-voice-overview" s="inventory" />). A further complication is that
		<i lang="ain-Latn">u-</i> covers not only canonical bilateral reciprocal meaning ('each
		other') but also joint or associative participation ('together'), and the two readings are not
		always distinguishable without context.
	</p>
</S>

<S t="The canonical reciprocal" id="canonical-reciprocal">
	<p>
		In its canonical use, <i lang="ain-Latn">u-</i> expresses mutual action: each participant in
		the plural subject simultaneously acts on and is acted on by the others. The paradigm pair
		<A w="koyki" gl="fight, attack sb" /> (transitive) →
		<A w="u-koyki" gl="fight each other" /> (intransitive), and
		<A w="siru" gl="rub sth" /> → <A w="u-siru" gl="rub each other" />, illustrates the
		productive base pattern <Ref k="nakagawa2024" p="187–188" />.
	</p>

	<Ex
		m="nea nispa utar u-koyki kor oka sir-i a=nukar"
		g="DEM chief ASS RECP-fight CONJ exist.PL appearance-POSS 4.A=see"
		tr="I saw the chiefs fighting each other."
		cite="bugaevakobayashi2022:§4.2.1"
		dial="SAR"
		place="Nakagawa corpus K8010281UP.168"
		note="Bugaeva & Kobayashi 2022 ex. 11a. u-koyki is intransitive and takes no A-prefix; the clause sir-i a=nukar ('the appearance of which was seen') frames the event as a witnessed scene."
	/>

	<p>
		<i lang="ain-Latn">u-</i> also operates on ditransitive (three-argument) bases. When the
		Addressee or Recipient of a ditransitive is the argument filled by the mutual relation, the
		construction is termed indirect reciprocal <Ref k="bugaevakobayashi2022" p="§4.2.1" />. The
		epenthetic glide <i lang="ain-Latn">w</i> surfaces between <i lang="ain-Latn">u-</i> and a
		following vowel-initial prefix:
	</p>

	<Ex
		m="u-w-e-pakasnu"
		g="RECP-EP-APPL-teach"
		tr="teach each other"
		cite="tamura1996:808"
		dial="SAR"
		note="Indirect reciprocal: the Addressee of e-pakasnu 'teach sb sth' is reciprocalized; the Theme content remains as the surviving object. The epenthetic glide w surfaces between u- and the vowel-initial applicative e-."
	/>

	<p>
		The learner grammar of <Ref k="ijas2023" /> (Lesson 9-10) also lists
		<A w="unukar" gl="meet each other" /> (from <A w="nukar" gl="see sb" />) as a standard
		reciprocal, and gives the pair
		<A w="u-hekote" gl="be a married couple (singular)" /> /
		<A w="u-hekotpa" gl="be a married couple (plural suppletive)" />; both are confirmed by the
		primary sources ‹consensus› <Ref k="nakagawa2024" p="187–188" />.
	</p>
</S>

<S t="Joint-participation and collective readings" id="collective-readings">
	<p>
		Several forms with <i lang="ain-Latn">u-</i> do not yield a strictly bilateral 'each other'
		reading. Here <i lang="ain-Latn">u-</i> signals joint involvement or a two-party social
		relation without requiring symmetric action between every pair of participants
		<Ref k="nakagawa2024" p="187–188" />.
	</p>

	<p>
		The clearest instance is <A w="u-tures-kor" gl="be siblings" />, which incorporates the noun
		<A w="tures" gl="sibling of the same sex" /> and the verb <A w="kor" gl="have" />. The
		surface subject may be syntactically singular — a young man described in terms of having a
		sister — yet the verb carries <i lang="ain-Latn">u-</i> because the sibling relation
		inherently involves two parties:
	</p>

	<Ex
		m="Iskar emko ta u-tures-kor okkaypo okay pe"
		g="Ishikari upper LOC RECP-sibling-have young.man exist.PL NMLZ"
		tr="A young man with a sister, up the Ishikari River."
		cite="nakagawa2024:187"
		dial="SAR"
		note="Nakagawa ex. 164. The singular okkaypo 'young man' is the surface subject, yet u-tures-kor carries u- because having a sibling is an inherently two-party relation. The plural existential okay reflects the broader story context."
	/>

	<p>
		Similarly, <A w="u-mina-re" gl="laugh together" /> does not mean 'make each other laugh' but
		'all laugh together' — a sociative reading arising from the arity calculus:
		<i lang="ain-Latn">u-</i> (−1) prefixed to the already-causativized intransitive
		<i lang="ain-Latn">mina-re</i> (arity 2) yields net arity 1 (intransitive), encoding
		collective action rather than imposing a new causer slot <Ref k="nakagawa2024" p="188" />.
		This <i lang="ain-Latn">u-</i> + causative-on-intransitive path to a sociative reading is
		treated further in <Xr ch="reciprocal-u" s="sociative" /> below.
	</p>
</S>

<S t="Semantic types" id="semantic-types">
	<p>
		Bugaeva and Kobayashi identify five constructional types for <i lang="ain-Latn">u-</i>
		reciprocals, organized by the nature of the mutual relation and the morphosyntactic base
		<Ref k="bugaevakobayashi2022" p="§4.2.1" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>type</th>
				<th>base</th>
				<th>example</th>
				<th>translation</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>canonical (subject-oriented)</td>
				<td>2-arg transitive</td>
				<td><i lang="ain-Latn">u-tumam-an</i></td>
				<td>'we held each other'</td>
			</tr>
			<tr>
				<td>indirect (Recipient reciprocalized)</td>
				<td>3-arg ditransitive</td>
				<td><i lang="ain-Latn">u-w-e-pakasnu</i></td>
				<td>'teach each other'</td>
			</tr>
			<tr>
				<td>object-oriented (causativized)</td>
				<td>intransitive reciprocal + <i lang="ain-Latn">-re</i></td>
				<td><i lang="ain-Latn">u-koyki-re</i></td>
				<td>'make them fight each other'</td>
			</tr>
			<tr>
				<td>joining-type</td>
				<td>2-arg transitive with applicative</td>
				<td><i lang="ain-Latn">u-ko-sina</i></td>
				<td>'tie (bow and arrow) together'</td>
			</tr>
			<tr>
				<td>quasi-possessive</td>
				<td><i lang="ain-Latn">u-</i> + [possessed noun + verb]</td>
				<td><i lang="ain-Latn">u-oruspe-nu</i></td>
				<td>"hear each other's stories"</td>
			</tr>
		</tbody>
	</table>

	<p>
		The quasi-possessive type distributes each participant's possessed noun across the group:
		<i lang="ain-Latn">u-tek-kisma</i> 'shake hands' (lit. 'shake each other's hand') and
		<i lang="ain-Latn">u-oruspe-nu</i> are further instances
		<Ref k="bugaevakobayashi2022" p="§4.2.1" />. For the parallel reflexive construction in
		which a possessed noun is incorporated with <i lang="ain-Latn">yay-</i> or
		<i lang="ain-Latn">si-</i>, see <Xr ch="reflexive-possessive-si" />.
	</p>

	<Ex
		m="u-oruspe-nu=an kor oka=an ayne"
		g="RECP-story-hear=4.S CONJ exist.PL=4.S CONJ"
		tr="listening to each other's stories, living on"
		cite="bugaevakobayashi2022:§4.2.1"
		dial="SAR"
		place="Nakagawa corpus K8010291UP.517"
		note="Excerpt from Bugaeva & Kobayashi 2022 ex. 13. In u-oruspe-nu, u- is the reciprocal possessor of incorporated oruspe ‘story’. The resulting predicate is intransitive and takes the fourth-person S suffix =an."
	/>
</S>

<S t="Quasi-possessive reciprocals: formation and motivation" id="quasi-possessive">
	<p>
		The term <em>quasi-possessive reciprocal</em> describes a reciprocal relation located
		inside an incorporated nominal. Its structure is
		<i lang="ain-Latn">[u-N<sub>possessed</sub>]-V</i>: <i lang="ain-Latn">u-</i>
		supplies the possessor of the noun, and the resulting <i lang="ain-Latn">u-N</i> unit is
		incorporated into the verb. The participants therefore act upon one another through a
		relationally possessed entity such as words, stories, strength, or hands
		<Ref k="alpatovbugaevanedjalkov2007" p="1773" />;
		<Ref k="bugaevakobayashi2022" p="§4.2.1" />.
	</p>

	<table>
		<caption>Internal constituency of attested quasi-possessive reciprocals</caption>
		<thead>
			<tr><th>predicate</th><th>internal nominal</th><th>compositional reading</th><th>conventional reading</th></tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ain-Latn">u-oruspe-nu</i></td>
				<td><i lang="ain-Latn">u-oruspe</i> ‘one another’s stories’</td>
				<td>hear one another’s stories</td>
				<td>discuss things together</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">u-tek-kisma</i></td>
				<td><i lang="ain-Latn">u-tek</i> ‘one another’s hands’</td>
				<td>seize one another’s hands</td>
				<td>shake hands</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">u-kiror-nukar</i></td>
				<td><i lang="ain-Latn">u-kiror</i> ‘one another’s strength’</td>
				<td>see or test one another’s strength</td>
				<td>compete in strength</td>
			</tr>
			<tr>
				<td><i lang="ain-Latn">u-itak-nu</i></td>
				<td><i lang="ain-Latn">u-itak</i> ‘one another’s words’</td>
				<td>hear or heed one another’s words</td>
				<td>agree; obey</td>
			</tr>
		</tbody>
	</table>

	<p>
		This constituency explains the arity effect. The incorporated noun fills the Theme position
		of the transitive verb, while <i lang="ain-Latn">u-</i> identifies the noun’s possessor
		reciprocally with the plural or collective subject. The whole complex has one syntactic
		argument and behaves as an intransitive predicate. The bracketing for
		<i lang="ain-Latn">u-itak-nu</i> is therefore
		<i lang="ain-Latn">[[u-itak]-nu]</i>: first ‘one another’s words’, then ‘hear those
		words’. This analysis gives each morpheme one role and directly derives the attested
		intransitive behavior.
	</p>

	<Ex
		m="nep-ene-po u-itak-nu ru-w-e"
		g="how-like.this-DIM RECP-word-hear trace-EP-POSS"
		tr="Oh, how obedient they are indeed!"
		cite="bugaeva2016:103"
		dial="SA"
		place="Bugaeva 2004:119"
		note="Bugaeva segments u-itak-nu as RECP-word-listen. The predicate expresses obedience through the conventional meaning ‘heed one another’s words’."
	/>
</S>

<S t="Bare incorporated nouns and word-internal possessors" id="bare-incorporated-nouns">
	<p>
		Possession elsewhere in Ainu commonly uses a person prefix together with an affiliative form
		of the noun. For example, the concept form <i lang="ain-Latn">tek</i> ‘hand’ has the
		affiliative forms <i lang="ain-Latn">tek-e</i> and <i lang="ain-Latn">tek-e-he</i>, as
		in <i lang="ain-Latn">ku=tekehe</i> ‘my hand’
		<Ref k="nakagawa2024" p="217–231" />. Noun incorporation uses the bare concept stem:
		<i lang="ain-Latn">u-tek-kisma</i> contains <i lang="ain-Latn">tek</i>. Its possessor
		is still recoverable because <i lang="ain-Latn">u-</i> stands immediately before the noun
		inside the verbal word. See <Xr ch="concept-form-affiliative-form" /> for the free nominal
		paradigm and <Xr ch="noun-incorporation-object" /> for the general incorporation pattern.
	</p>

	<p>
		This is especially transparent with nouns whose interpretation invites a possessor. A hand,
		a person’s words, and a person’s inner state naturally raise the question ‘whose?’. The
		word-internal prefixes answer it: <i lang="ain-Latn">u-</i> distributes possessors across
		participants, <i lang="ain-Latn">yay-</i> links the possessor to an intentional subject,
		and possessive <i lang="ain-Latn">si-</i> links it to the subject in the lexical patterns
		that select <i lang="ain-Latn">si-</i>. The bare noun remains inside the predicate, so no
		separate possessed noun phrase is required.
	</p>

	<table>
		<caption>Reciprocal and reflexive-possessive members of one construction family</caption>
		<thead><tr><th>form</th><th>possessor relation</th><th>literal structure</th><th>meaning</th></tr></thead>
		<tbody>
			<tr><td><i lang="ain-Latn">u-tek-kisma</i></td><td>reciprocal</td><td>one another’s-hand-seize</td><td>shake hands</td></tr>
			<tr><td><i lang="ain-Latn">yay-par-oyki</i></td><td>subject-coreferent, intentional</td><td>self’s-mouth-do.about</td><td>feed oneself</td></tr>
			<tr><td><i lang="ain-Latn">yay-cise-koro</i></td><td>subject-coreferent</td><td>self’s-house-have</td><td>have one’s own house</td></tr>
			<tr><td><i lang="ain-Latn">si-etu-uyna</i></td><td>subject-coreferent, spontaneous</td><td>own-nose-take.PL</td><td>hold one’s nose in astonishment</td></tr>
			<tr><td><i lang="ain-Latn">si-hum-nu-yar</i></td><td>subject-coreferent</td><td>own-sound-hear-CAUS.INDEF</td><td>announce one’s presence outside a house</td></tr>
			<tr><td><i lang="ain-Latn">si-ram-suy</i></td><td>subject-coreferent</td><td>own-heart-sway</td><td>have one’s heart moved; wonder or worry</td></tr>
		</tbody>
	</table>

	<p>
		The reflexive examples show the same architectural principle. In
		<i lang="ain-Latn">yay-par-oyki</i> and <i lang="ain-Latn">si-etu-uyna</i>, the prefix
		possesses an incorporated body-part noun <Ref k="bugaevakobayashi2022" p="§4.2.2" />.
		Dal Corso identifies the same construction in Sakhalin
		<i lang="ain-Latn">yay-cise-koro</i> ‘have one’s own house’ and reports
		<i lang="ain-Latn">cise</i> ‘house’, <i lang="ain-Latn">kotan</i> ‘village’,
		<i lang="ain-Latn">cara</i> ‘mouth’, and <i lang="ain-Latn">ram</i> ‘soul’ as recurrent
		incorporated nouns in Piłsudski’s corpus <Ref k="dalcorso2024" p="73–74" />.
		In <i lang="ain-Latn">si-hum-nu-yar</i>, <i lang="ain-Latn">si-hum</i> is ‘one’s own
		sound’, <i lang="ain-Latn">nu</i> is ‘hear’, and <i lang="ain-Latn">-yar</i> introduces
		an indefinite hearer <Ref k="nakagawa2024" p="432" />. The larger
		<i lang="ain-Latn">si-ram</i> family lexicalizes mental activity through movements of one’s
		own <i lang="ain-Latn">ram</i> ‘heart/mind’; its applicative stacks are analyzed in
		<Xr ch="reflexive-possessive-si" /> and <Xr ch="applicative-stacking-relativization-feeding" />.
	</p>
</S>

<S t="From hearing words to agreement and obedience" id="hearing-to-agreement">
	<p>
		The lexical development of <i lang="ain-Latn">u-itak-nu</i> begins with an ordinary social
		event: participants hear and accept words belonging to one another. Mutual uptake supports the
		reading ‘agree’, while successful uptake of another person’s direction supports ‘obey’.
		Tamura defines <i lang="ain-Latn">uitaknu</i> as ‘listen to what each other says; agree/obey’
		and explicitly segments it as <i lang="ain-Latn">u-itak-nu</i>
		<Ref k="tamura1996" p="808" />. Bugaeva’s Sakhalin example above independently confirms the
		obedience reading <Ref k="bugaeva2016" p="103" />.
	</p>

	<table>
		<caption>Crosslinguistic WORD/VOICE + HEAR expressions with obedience readings</caption>
		<thead><tr><th>language</th><th>expression</th><th>compositional sense</th><th>social sense</th></tr></thead>
		<tbody>
			<tr><td>Mandarin</td><td><span lang="zh-Hant">聽話</span>/<span lang="zh-Hans">听话</span> <i>tīnghuà</i></td><td>listen to words</td><td>obey; be compliant</td></tr>
			<tr><td>Japanese</td><td><span lang="ja">言うことを聞く</span></td><td>listen to what someone says</td><td>heed; obey</td></tr>
			<tr><td>Korean</td><td><span lang="ko">말을 듣다</span> <i>mar-eul deutda</i></td><td>listen to words/speech</td><td>heed; obey</td></tr>
			<tr><td>Turkish</td><td><span lang="tr">söz dinlemek</span></td><td>listen to a word/one’s words</td><td>heed advice; obey</td></tr>
			<tr><td>Persian</td><td><span lang="fa" dir="rtl">حرف‌شنوی</span> <i>harf-šenavi</i></td><td>word-hearing</td><td>obedience; compliance</td></tr>
			<tr><td>Biblical Hebrew</td><td><span lang="he" dir="rtl">שמע בקול</span> <i>šāmaʿ bə-qōl</i></td><td>hear/listen to a voice</td><td>obey</td></tr>
		</tbody>
	</table>

	<p>
		Mandarin <i>tīnghuà</i> is defined as ‘comply’ <Ref k="moe2021" />. Turkish dictionaries
		give <i lang="tr">söz dinlemek</i> as an equivalent of ‘obey’
		<Ref k="cambridgeturkish2022" />, and Dehkhoda groups Persian
		<span lang="fa" dir="rtl">حرف‌شنوی</span> with obedience and submission
		<Ref k="dehkhoda1931" />. A corpus study of Biblical Hebrew finds that the valency pattern
		<span lang="he" dir="rtl">שמע בקול</span> regularly triggers ‘obey’
		<Ref k="lealglanz2021" p="209–211" />. These parallels establish a recurrent semantic
		mapping HEAR WORDS/VOICE → HEED → OBEY. They explain the motivation of the Ainu social meaning
		and carry no claim of common origin or borrowing.
	</p>
</S>

<S t="Aeuitaknup: a nominalized quasi-possessive reciprocal" id="aeuitaknup">
	<p>
		The title of Batchelor’s 1897 New Testament contains
		<i lang="ain-Latn">Aeuitaknup</i> ‘covenant, promise, testament’
		<Ref k="batchelor1897" p="title page" />. Batchelor’s 1903 standalone grammar documents the
		contemporary descriptive framework <Ref k="batchelor1903" />; his 1905 dictionary supplies
		the lexical definition ‘a covenant; a promise’ and Japanese
		<span lang="ja">誓約、ケイヤク</span> <Ref k="batchelor1905" p="Aeuitaknup" />.
		Tajima gives the full morphological analysis
		<i lang="ain-Latn">a=e-u-itak-nu-p</i> and translates its nominal core as ‘that one another’s
		words are heard’ <Ref k="tajima1992" p="66" />.
	</p>

	<Ex
		m="asir a=e-u-itak-nu-p oma kampi"
		g="new 4.A=APPL-RECP-word-hear-NMLZ exist.in book"
		tr="the book containing the New Covenant"
		cite="batchelor1897:title page;tajima1992:66"
		dial="HK"
		place="1897 New Testament title page"
		note="Historical spelling: Ashiri Aeuitaknup Oma Kambi. Tajima analyzes the title word as a=e-u-itak-nu-p. The reciprocal possessive constituent is [u-itak], incorporated into nu; -p nominalizes the complex predicate."
	/>

	<p>
		The internal derivation proceeds in three layers. First,
		<i lang="ain-Latn">u-itak</i> denotes ‘one another’s words’. Second,
		<i lang="ain-Latn">[[u-itak]-nu]</i> denotes mutual hearing or acceptance and has the
		lexical reading ‘agree/obey’. Third, the applicative <i lang="ain-Latn">e-</i>, fourth-person
		A marker <i lang="ain-Latn">a=</i>, and nominalizer <i lang="ain-Latn">-p</i> form the
		title noun. Tajima’s 1992 terminology calls <i lang="ain-Latn">a-</i> passive; this grammar
		uses the fourth-person analysis developed in later Ainu descriptions. The quasi-possessive
		constituency of <i lang="ain-Latn">u-itak-nu</i> remains the same under either account.
	</p>
</S>

<S t="The causativized reciprocal" id="causativized">
	<p>
		When the productive causative suffix <i lang="ain-Latn">-re</i> is added to an already-reciprocalized
		intransitive, arity rises by one, and the construction means 'cause sb to do X to each other'.
		The chain is: base transitive (arity 2) → add <i lang="ain-Latn">u-</i> (−1) → intransitive
		(1) → add <i lang="ain-Latn">-re</i> (+1) → transitive (2), with a new causer as subject:
	</p>

	<Ex
		m="u-koyki-re"
		g="RECP-fight-CAUS"
		tr="make them fight each other"
		constructed
		note="Object-oriented causativized reciprocal. Arity: koyki (2) + u- (−1) = 1 (vi); then u-koyki (1) + -re (+1) = 2 (vt). After Bugaeva & Kobayashi 2022 §4.2.1."
	/>

	<p>
		The contrasting sociative reading — 'all do X together' — arises when <i lang="ain-Latn">u-</i>
		is prefixed to a form already causativized from an intransitive base, so that the net arity is
		1 − 1 = 0:
		<A w="u-horip-pa-re" gl="all dance/exorcise together" />,
		<A w="u-kira-re" gl="all escape together" />
		<Ref k="bugaevakobayashi2022" p="§4.3.2" />. The arity of the base verb and the order of
		operations determine which reading obtains; surface form alone is insufficient
		<Ref k="nakagawa2024" p="188" /> ‹corpus-suggested›.
	</p>
</S>

<S t="Lexicalized forms and extension to non-verbal bases" id="lexicalized">
	<p>
		A range of forms with <i lang="ain-Latn">u-</i> have undergone semantic specialization to
		the point where the mutual motivation is conventional. Kin- and social-relation verbs such as
		<A w="u-tures-kor" gl="be siblings" /> and <A w="u-hekote" gl="be a married couple" />
		encode relational membership. <A w="unukar" gl="meet each other" /> is the standard word for
		'meet' in Saru <Ref k="nakagawa2024" p="187–188" />.
	</p>

	<p>
		The prefix extends beyond the verb paradigm to locative nouns, postpositions, and adverbs:
		<A w="u-sam" gl="near each other" />, <A w="u-tura" gl="together" />,
		<A w="u-neno" gl="similar to each other" />
		<Ref k="bugaevakobayashi2022" p="§4.2.1" />.
	</p>

	<p>
		Two further forms show opacity. <A w="uwanpare" gl="gaze intently" /> decomposes as
		<i lang="ain-Latn">u-anpa-re</i> (RECP-carry-CAUS), but the semantic path from 'cause each
		other to carry' to 'observe intently' is unresolved in the sources ‹contested›
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2024).
		<A w="uwatte" gl="multiply, breed (of animals)" /> has been analysed as
		<i lang="ain-Latn">u-w-at-te</i> (RECP-EP-attach-CAUS); the semantic path 'cause each other
		to cling/pair' → 'breed' is plausible for a verb restricted to animal populations, and its
		complement <A w="uwaste" gl="increase (of humans, plants)" /> is semantically differentiated
		<Ref k="aynucorporadiscord" /> (gengojiro, aynu-corpora Discord, 2024) ‹corpus-suggested›.
	</p>
</S>

<S t="The sociative uko- and uwe-" id="sociative">
	<p>
		The prefixes <A w="uko-" gl="together, mutually" /> and <A w="uwe-" gl="together, mutually" />
		are synchronically unitary markers but decompose as
		<i lang="ain-Latn">u-</i> + <Xr ch="applicative-ko"><i lang="ain-Latn">ko-</i></Xr> and
		<i lang="ain-Latn">u-</i> + <Xr ch="applicative-e"><i lang="ain-Latn">e-</i></Xr>
		respectively <Ref k="nakagawa2024" p="208, 211–212" />;
		<Ref k="bugaevakobayashi2022" p="§4.3.2" />. Because the applicative contributes arity +1 and
		<i lang="ain-Latn">u-</i> contributes −1, the net arity change is zero: the sociative is
		valency-neutral. The transitive verb <A w="kor" gl="have" /> starts with arity 2. Plain
		<A w="u-kor" gl="marry (lit. have each other)" /> applies only reciprocal
		<i lang="ain-Latn">u-</i>, so 2 − 1 = 1 and the result is intransitive. In
		<A w="u-ko-kor" gl="have together" />, sociative <i lang="ain-Latn">uko-</i> combines
		<i lang="ain-Latn">ko-</i> (+1) with <i lang="ain-Latn">u-</i> (−1), for a net change of
		0; 2 + 0 = 2, and the result remains transitive <Ref k="nakagawa2024" p="208" />:
	</p>

	<Ex
		m="matkaci a=maci turano a=u-ko-kor hine oka=an wa"
		g="girl 4.POSS=wife together 4.A=RECP-APPL-have CONJ exist.PL=4.S CONJ"
		tr="Together with my wife, I had a daughter, and we went on living."
		cite="nakagawa2024:208"
		dial="SAR"
		note="Nakagawa ex. 218. a=u-ko-kor is transitive because sociative uko- preserves the base verb kor's arity: kor has arity 2, and uko- has net arity change 0. The 4.A prefix a= (narrative first person) on the verb confirms this. Plain reciprocal u-kor 'marry each other' is intransitive because u- reduces arity from 2 to 1 and takes =an."
	/>

	<Ex
		m="kamuy-utar opitta uko-yay-kopuntek"
		g="spirit-ASS all RECP.APPL-REFL-rejoice"
		tr="All the spirits rejoiced together."
		cite="bugaevakobayashi2022:§4.3.2"
		dial="HK"
		place="Nakagawa corpus OI990423KY.066"
		note="Bugaeva & Kobayashi 2022 ex. 34. uko- (= u- + ko-) combines with the reflexive yay-; the whole form is intransitive (arity: uko- = 0, then yay- = −1)."
	/>

	<p>
		<i lang="ain-Latn">uko-</i> is commoner than <i lang="ain-Latn">uwe-</i> in Saru texts,
		reflecting the higher productivity of <i lang="ain-Latn">ko-</i> as an applicative
		<Ref k="bugaeva2006" p="188" />. The two are partially interchangeable in derivationally
		transparent forms (<i lang="ain-Latn">uko-yaykopuntek</i> ~
		<i lang="ain-Latn">uwe-yaykopuntek</i> 'rejoice together'), but
		<i lang="ain-Latn">ko-</i>'s comitative and goal-directed semantics give it the advantage
		where joint orientation toward shared participants is foregrounded
		<Ref k="bugaevakobayashi2022" p="§4.3.2" />. For the full applicative semantics of
		<i lang="ain-Latn">ko-</i> and <i lang="ain-Latn">e-</i>, see
		<Xr ch="applicative-system-overview" />; for their stacking with other prefixes,
		<Xr ch="applicative-stacking-relativization-feeding" />.
	</p>
</S>
