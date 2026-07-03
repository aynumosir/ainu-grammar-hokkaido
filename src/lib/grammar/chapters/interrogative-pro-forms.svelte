<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="Overview" id="overview">
	<p>
		Hokkaido Ainu has a set of interrogative pro-forms covering the semantic slots that in other
		languages are filled by wh-words: things, persons, places, manners, times, quantities, and
		identity. They are not a uniform part of speech. Nouns (<i lang="ain-Latn">hemanta</i>
		'what', <i lang="ain-Latn">hunna</i> 'who', <i lang="ain-Latn">hunak</i> 'where'), adverbs
		(<i lang="ain-Latn">makanak</i> 'how', <i lang="ain-Latn">hempara</i> 'when'), and prenominals
		(<i lang="ain-Latn">hempak</i> 'how many', <i lang="ain-Latn">inan</i> 'which') all figure in
		the paradigm, each with distinct syntactic distribution
		<Ref k="nakagawa2024" p="411" />. The same forms — or a set of <i lang="ain-Latn">n</i>-initial
		cognates — serve as indefinite pro-forms ('something', 'anyone', 'somewhere') when embedded in
		non-interrogative clauses or combined with focus particles. Across Hokkaido, two competing root
		families divide the dialects: an <i lang="ain-Latn">hem-/hun-</i> series in Saru and Chitose,
		and an <i lang="ain-Latn">nep/nen/ney/nekon</i> series in most other varieties
		<Ref k="nakagawa2024" p="415" />. The clausal mechanisms that convert these wh-words into
		questions — the existential question frame, question particles, intonation — are treated in
		<Xr ch="interrogative-strategies-question-particles" />; the present chapter covers the
		forms themselves, their morphological structure, their dialect distribution, and their
		indefinite function.
	</p>
</S>

<S t="The Saru inventory" id="saru-inventory">
	<p>
		The Saru dialect uses an <i lang="ain-Latn">h</i>-initial series for most interrogative
		slots. The inventory and the part-of-speech classification of each form are given below
		<Ref k="nakagawa2024" p="411" />:
	</p>

	<table>
		<thead>
			<tr>
				<th>meaning</th>
				<th>Saru form(s)</th>
				<th>part of speech</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>what</td>
				<td><i lang="ain-Latn">hemanta</i>, <i lang="ain-Latn">hnta</i>, <i lang="ain-Latn">hinta</i></td>
				<td>noun</td>
			</tr>
			<tr>
				<td>who</td>
				<td><i lang="ain-Latn">hunna</i></td>
				<td>noun</td>
			</tr>
			<tr>
				<td>where</td>
				<td><i lang="ain-Latn">hunak</i>, <i lang="ain-Latn">hinak</i></td>
				<td>noun (locative/〈place〉 class)</td>
			</tr>
			<tr>
				<td>how</td>
				<td><i lang="ain-Latn">makanak</i>, <i lang="ain-Latn">mak</i></td>
				<td>adverb</td>
			</tr>
			<tr>
				<td>when</td>
				<td><i lang="ain-Latn">hempara</i></td>
				<td>adverb</td>
			</tr>
			<tr>
				<td>how many</td>
				<td><i lang="ain-Latn">hempak</i></td>
				<td>prenominal</td>
			</tr>
			<tr>
				<td>which</td>
				<td><i lang="ain-Latn">inan</i>, <i lang="ain-Latn">hinaan</i></td>
				<td>prenominal</td>
			</tr>
			<tr>
				<td>why</td>
				<td>
					<i lang="ain-Latn">hemanta kusu</i>,
					<i lang="ain-Latn">hemanta ne</i>,
					<i lang="ain-Latn">hemanta ne kusu</i>
				</td>
				<td>adverb phrase</td>
			</tr>
		</tbody>
	</table>

	<p>
		<i lang="ain-Latn">hunak</i> belongs to the locative noun (〈place〉) subclass and takes
		case particles directly — <i lang="ain-Latn">hunak ta</i> 'where (at)',
		<i lang="ain-Latn">hunak un</i> 'where (to)', <i lang="ain-Latn">hunak wa</i> 'where
		(from)' — without the intermediate locative noun <i lang="ain-Latn">or</i> 'place-of'
		<Ref k="nakagawa2024" p="413" />. The locative-noun subclass is set out in
		<Xr ch="relational-and-spatial-nouns" />.
	</p>

	<p>
		<i lang="ain-Latn">hemanta</i> and <i lang="ain-Latn">hunna</i> take the existential
		question frame rather than a copular predicate: 'what is it?' is
		<i lang="ain-Latn">hemanta an?</i> and 'who is it?' is
		<i lang="ain-Latn">hunna an?</i> <Ref k="nakagawa2024" p="411–413" />. The sequence
		<i lang="ain-Latn">hemanta ne</i> is occupied by the 'why' periphrasis, where
		<i lang="ain-Latn">ne</i> is the copula; a bare <i lang="ain-Latn">hemanta ne?</i>
		therefore means 'why?' not 'what is it?'.
	</p>

	<Ex
		m="nupuri epunkine kamuy hunna ne ya"
		g="mountain each kamuy who COP FIN"
		tr="Who should be the kamuy to guard each mountain peak?"
		cite="ilcaa1976"
		dial="SAR"
		place="川上まつ子 'uwepeker 民話16', AA研アイヌ語資料, aa-irc/023#178"
		note="hunna 'who' as a copular predicate with ne COP and the question particle ya."
	/>

	<Ex
		m="hemanta ne kusu ene po easir"
		g="what COP PURP like.this somewhat grow.well"
		tr="Why has (he) grown so well like this!"
		cite="ilcaa1976"
		dial="SAR"
		place="川上まつ子 'uwepeker 民話7', AA研アイヌ語資料, aa-irc/005#62"
		note="hemanta ne kusu 'why' (lit. 'what-COP-because'). Three periphrases coexist with no clear distributional difference: hemanta kusu, hemanta ne, hemanta ne kusu (Nakagawa 2024: 412)."
	/>

	<p>
		'Why' has no monomorphemic form. The three periphrases share the core
		<i lang="ain-Latn">hemanta</i> 'what' and differ in what follows it: the bare purposive
		<i lang="ain-Latn">kusu</i>, the bare copula <i lang="ain-Latn">ne</i>, or both together.
		Nakagawa reports "no clear meaning difference" among them
		<Ref k="nakagawa2024" p="412" />. The purposive linker <i lang="ain-Latn">kusu</i> in
		its causal function is treated in <Xr ch="causal-and-purpose-clauses" />.
	</p>

	<p>
		'How many' and 'which' are prenominals: they precede and modify a head noun rather than
		standing alone. <i lang="ain-Latn">hempak</i> 'how many' further grounds
		<i lang="ain-Latn">hempakpe</i> 'how many things', <i lang="ain-Latn">hempakiw</i>
		'how many people', and the intensive <i lang="ain-Latn">inehempak</i> 'ever so many'
		<Ref k="nakagawa2024" p="414, 420" />. The human-count suffix
		<i lang="ain-Latn">-iw</i> and the thing-count suffix <i lang="ain-Latn">-pe</i> are the
		same suffixes found in the numeral system; see <Xr ch="vigesimal-numeral-system" />.
	</p>
</S>

<S t="Dialect geography: the h-series and n-series" id="dialect-geography">
	<p>
		Across Hokkaido, the Saru/Chitose <i lang="ain-Latn">hem-/hun-</i> forms are replaced in
		most other varieties by an <i lang="ain-Latn">n</i>-initial series. The boundary follows
		the established dialect division between 日高西部 (Saru, Chitose, Mukawa) and the central
		and northern varieties <Ref k="nakagawa2024" p="415" />;
		<Ref k="nakagawafukazawa2022" />. The full dialect comparison, after Nakagawa's table 78,
		is as follows:
	</p>

	<table>
		<thead>
			<tr>
				<th>meaning</th>
				<th>Saru</th>
				<th>Chitose</th>
				<th>Horobetsu</th>
				<th>Shizunai</th>
				<th>Tokachi</th>
				<th>Bihoro</th>
				<th>Ishikari</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>what</td>
				<td><i lang="ain-Latn">hemanta</i></td>
				<td><i lang="ain-Latn">hemanta</i></td>
				<td><i lang="ain-Latn">nep</i></td>
				<td><i lang="ain-Latn">nep</i></td>
				<td><i lang="ain-Latn">nep</i></td>
				<td><i lang="ain-Latn">nep</i></td>
				<td><i lang="ain-Latn">nep</i></td>
			</tr>
			<tr>
				<td>who</td>
				<td><i lang="ain-Latn">hunna</i></td>
				<td><i lang="ain-Latn">hunna</i></td>
				<td><i lang="ain-Latn">nen</i></td>
				<td><i lang="ain-Latn">nen</i></td>
				<td><i lang="ain-Latn">nen</i></td>
				<td><i lang="ain-Latn">nen</i></td>
				<td><i lang="ain-Latn">nen</i></td>
			</tr>
			<tr>
				<td>where (at)</td>
				<td><i lang="ain-Latn">hunak ta</i></td>
				<td><i lang="ain-Latn">hunak ta</i></td>
				<td><i lang="ain-Latn">ney ta</i></td>
				<td><i lang="ain-Latn">ney ta</i></td>
				<td><i lang="ain-Latn">ney ta</i></td>
				<td><i lang="ain-Latn">ney ta</i></td>
				<td><i lang="ain-Latn">ney ta</i></td>
			</tr>
			<tr>
				<td>where (to)</td>
				<td><i lang="ain-Latn">hunak un</i></td>
				<td><i lang="ain-Latn">hunak un</i></td>
				<td><i lang="ain-Latn">ney un</i></td>
				<td><i lang="ain-Latn">enon</i></td>
				<td><i lang="ain-Latn">enon</i></td>
				<td><i lang="ain-Latn">nene</i></td>
				<td><i lang="ain-Latn">ney ne</i></td>
			</tr>
			<tr>
				<td>how</td>
				<td><i lang="ain-Latn">makanak</i></td>
				<td><i lang="ain-Latn">makanak</i></td>
				<td><i lang="ain-Latn">nekona</i></td>
				<td><i lang="ain-Latn">nekon</i></td>
				<td><i lang="ain-Latn">nekon</i></td>
				<td><i lang="ain-Latn">nekon</i></td>
				<td><i lang="ain-Latn">nekon</i></td>
			</tr>
			<tr>
				<td>when</td>
				<td><i lang="ain-Latn">hempara</i></td>
				<td><i lang="ain-Latn">hempara</i></td>
				<td><i lang="ain-Latn">hempara</i></td>
				<td><i lang="ain-Latn">hempara</i></td>
				<td><i lang="ain-Latn">nempara</i></td>
				<td><i lang="ain-Latn">nempara</i></td>
				<td><i lang="ain-Latn">hempara</i></td>
			</tr>
			<tr>
				<td>how many</td>
				<td><i lang="ain-Latn">hempak</i></td>
				<td><i lang="ain-Latn">hempak</i></td>
				<td><i lang="ain-Latn">hempak</i></td>
				<td><i lang="ain-Latn">hempak</i></td>
				<td><i lang="ain-Latn">nempak</i></td>
				<td><i lang="ain-Latn">nempak</i></td>
				<td><i lang="ain-Latn">hempak</i></td>
			</tr>
			<tr>
				<td>which</td>
				<td><i lang="ain-Latn">inan</i></td>
				<td><i lang="ain-Latn">inan</i></td>
				<td><i lang="ain-Latn">inan</i></td>
				<td><i lang="ain-Latn">inkian</i></td>
				<td><i lang="ain-Latn">inkian</i></td>
				<td><i lang="ain-Latn">inkian</i></td>
				<td><i lang="ain-Latn">nean</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		The most internally fragmented cell is 'where (to)': Shizunai and Tokachi use
		<i lang="ain-Latn">enon</i> / <i lang="ain-Latn">onon</i>, whose
		<i lang="ain-Latn">e-/o-</i> elements may correspond to the 'head/tail' directional
		prefixes but whose <i lang="ain-Latn">-non</i> remains unexplained
		<Ref k="nakagawa2024" p="417" />. The 'whose' or 'of which place' construction uses
		<i lang="ain-Latn">ney un</i> even in h-series dialects, because the
		<i lang="ain-Latn">un</i> there is the two-place relational verb 'belong to', not the
		allative case particle <Ref k="nakagawa2024" p="417" />. The relational-verb
		<i lang="ain-Latn">un</i> is discussed alongside the possession system in
		<Xr ch="relational-and-spatial-nouns" />.
	</p>

	<p>
		The following pair from the アコㇿイタㇰ textbook illustrates the h/n split for 'who':
	</p>

	<Ex
		m="toan kur hunna an"
		g="DEM.DIST person who exist"
		tr="Who is that person?"
		cite="utari1994"
		dial="SAR"
		place="アコㇿイタㇰ 第2章, akor-itak/002#17"
		note="Western (Saru) h-series form: hunna 'who'."
	/>

	<Ex
		m="toan kur nen ta an"
		g="DEM.DIST person who LOC exist"
		tr="Who is that person?"
		cite="utari1994"
		dial="HK"
		place="アコㇿイタㇰ 第2章, akor-itak/002#18"
		note="Eastern/northern n-series form: nen 'who'; ta locative marks the predicative slot. The Japanese gloss is identical to the Saru version above."
	/>

	<p>
		The Shizunai system as described by Refsing <Ref k="refsing1986" p="109" /> gives the
		most explicit formal statement of the demonstrative–interrogative–indefinite grid, aligning
		an anaphoric <i lang="ain-Latn">ne-</i> series, proximal <i lang="ain-Latn">ta-</i> series,
		distal <i lang="ain-Latn">to-</i> series, interrogative <i lang="ain-Latn">ne-</i> root,
		and indefinite <i lang="ain-Latn">…ka</i> forms across person, place, and manner dimensions.
		The overlap of the anaphoric <i lang="ain-Latn">ne</i>, the interrogative
		<i lang="ain-Latn">ne-</i> root, and the copula <i lang="ain-Latn">ne</i> in the
		n-dialects may be "more than coincidence" <Ref k="refsing1986" p="108" /> ‹speculative›.
		The demonstrative and anaphoric <i lang="ain-Latn">ne-</i> system is treated in
		<Xr ch="demonstratives-anaphora-definiteness" />.
	</p>
</S>

<S t="Morphology of the wh-roots" id="morphology">
	<p>
		The internal structure of the <i lang="ain-Latn">hem-/hun-</i> forms is not fully
		transparent in the accessible grammars. Nakagawa notes that interrogatives are built on
		two roots (<i lang="ain-Latn">hem-</i> and <i lang="ain-Latn">hun-</i>) plus a third,
		geographically restricted root in <i lang="ain-Latn">mak-</i> (<i lang="ain-Latn">makanak</i>)
		<Ref k="nakagawa2024" p="415" />. The n-series form
		<i lang="ain-Latn">ney</i> 'where/when (n-dialect)' is transparently segmentable:
		<i lang="ain-Latn">ne</i> + <i lang="ain-Latn">hi</i> (the formal noun 'place/time'),
		giving 'which place/time' <Ref k="nakagawa2024" p="416" />. The Shizunai place-form
		<i lang="ain-Latn">neyta</i> adds the locative particle directly to this stem
		<Ref k="refsing1986" p="109" />.
	</p>

	<p>
		A bimorphemic analysis of the h-series has been proposed in the community:
		<i lang="ain-Latn">hunna</i> 'who' = <i lang="ain-Latn">hun</i> + <i lang="ain-Latn">na</i>
		(a human-count suffix); <i lang="ain-Latn">hunak</i> 'where' =
		<i lang="ain-Latn">hun</i> + <i lang="ain-Latn">yak</i> (the conditional
		<i lang="ain-Latn">yak</i>); <i lang="ain-Latn">hempak</i> 'how many' =
		<i lang="ain-Latn">hem</i> + <i lang="ain-Latn">pak</i> (the limitative postposition
		<A w="pak" gl="to the extent of" />); <i lang="ain-Latn">hempara</i> 'when' =
		<i lang="ain-Latn">hem</i> + <i lang="ain-Latn">pa</i> + <i lang="ain-Latn">ara</i>
		(nukopoli, <Ref k="aynucorporadiscord" />, 2023-12-08) ‹contested›. The decomposition
		is internally consistent with the two-root observation and would explain the h/n alternation
		as operating at root level; it remains unverified in the peer-reviewed literature, and
		the grammaticalization paths it requires are not reconstructed in the available sources.
	</p>

	<p>
		The contracted Saru variants <i lang="ain-Latn">hnta</i> and <i lang="ain-Latn">hinta</i>
		(from <i lang="ain-Latn">hemanta</i>) are spoken-register forms. Both allow the existential
		question frame (<i lang="ain-Latn">hnta an?</i> 'what is it?') and the copular why-frame
		(<i lang="ain-Latn">hnta ne?</i> 'why?')
		<Ref k="nakagawa2024" p="411–412" />.
		<i lang="ain-Latn">hemanta</i> also functions as an ordinary noun meaning roughly
		'thing-of-unknown-sort', and in Chitose <i lang="ain-Latn">kor hemanta!</i> serves as
		a term of abuse (lit. 'having a whatnot')
		<Ref k="nakagawa2024" p="412, 415" />. The classical grammar of
		<Ref k="kindaichi1936" p="54–57" /> attests <i lang="ain-Latn">ne-</i>-root interrogative
		compounds — <i lang="ain-Latn">ne-kotan-un-pe</i> 'person of which village',
		<i lang="ain-Latn">ne-moshir-un-pe</i> 'of which land' — and the literary prenominal
		<i lang="ain-Latn">inki</i> 'which' (<i lang="ain-Latn">inki nishpa</i> 'which lord'),
		confirming the antiquity of the interrogative <i lang="ain-Latn">ne-</i> element that the
		modern n-dialects preserve.
	</p>

	<p>
		The 'when' form <i lang="ain-Latn">hempara</i> is treated as original; the Tokachi and
		Bihoro n-series form <i lang="ain-Latn">nempara</i> arose by analogical
		<i lang="ain-Latn">h-</i> → <i lang="ain-Latn">n-</i> replacement under pressure from
		the rest of the n-paradigm <Ref k="nakagawa2024" p="418" /> ‹speculative›.
	</p>
</S>

<S t="Indefinite pro-forms and the particle =ka" id="indefinites">
	<p>
		The interrogative and indefinite ('some-', 'any-') functions are distributed across two
		form-sets in h-series dialects. In Saru, the interrogative uses
		<i lang="ain-Latn">hem-/hun-</i> forms while the indefinite uses the
		<i lang="ain-Latn">n</i>-series: 'who?' = <i lang="ain-Latn">hunna</i> but 'someone/anyone'
		= <i lang="ain-Latn">nen</i>; 'what?' = <i lang="ain-Latn">hemanta</i> but
		'something/anything' = <i lang="ain-Latn">nep</i>; 'where?' =
		<i lang="ain-Latn">hunak</i> but 'somewhere' = <i lang="ain-Latn">ney</i>
		<Ref k="nakagawa2024" p="419" />. The n-dialects have no analogous split: 'what?' and
		'something' are both <i lang="ain-Latn">nep</i>. Two slots are identical for both
		functions in all dialects: 'how many' and 'which'
		<Ref k="nakagawa2024" p="420" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>meaning</th>
				<th>Saru interrogative</th>
				<th>Saru indefinite</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>something/anything</td>
				<td><i lang="ain-Latn">hemanta</i></td>
				<td><i lang="ain-Latn">nep</i> (+ <i lang="ain-Latn">=ka</i>)</td>
			</tr>
			<tr>
				<td>someone/anyone</td>
				<td><i lang="ain-Latn">hunna</i></td>
				<td><i lang="ain-Latn">nen</i> (+ <i lang="ain-Latn">ne yakka</i>)</td>
			</tr>
			<tr>
				<td>somewhere/anywhere</td>
				<td><i lang="ain-Latn">hunak</i></td>
				<td><i lang="ain-Latn">ney</i> (+ <i lang="ain-Latn">ta</i>)</td>
			</tr>
			<tr>
				<td>sometime/anytime</td>
				<td><i lang="ain-Latn">hempara</i></td>
				<td><i lang="ain-Latn">hempara</i> / <i lang="ain-Latn">ney ta</i> (+ <i lang="ain-Latn">=ka</i>)</td>
			</tr>
			<tr>
				<td>however many</td>
				<td><i lang="ain-Latn">hempak</i></td>
				<td><i lang="ain-Latn">hempak</i>, <i lang="ain-Latn">inehempak</i></td>
			</tr>
			<tr>
				<td>whichever</td>
				<td><i lang="ain-Latn">inan</i></td>
				<td><i lang="ain-Latn">inan</i>, <i lang="ain-Latn">hinaan</i></td>
			</tr>
		</tbody>
	</table>

	<p>
		The asymmetry is not absolute. Residual mixing occurs in both directions: h-series forms
		can appear as indefinites in some Saru texts, and Horobetsu — which uses
		<i lang="ain-Latn">nep</i> as its interrogative 'what' — uses
		<i lang="ain-Latn">hemanta</i> as its indefinite, reversing the Saru pattern
		<Ref k="nakagawa2024" p="419" /> ‹corpus-suggested›. These exceptions point to ongoing
		reorganisation rather than a categorical split.
	</p>

	<p>
		Indefinite pro-forms combine with the focus/scalar particle <i lang="ain-Latn">=ka</i>
		'even, also' and the scalar concessive <i lang="ain-Latn">ne yakka</i> 'even if':
		<i lang="ain-Latn">nep ka</i> 'anything (at all)', <i lang="ain-Latn">nen ne yakka</i>
		'anyone (at all)', <i lang="ain-Latn">ney ta ka</i> 'anywhere'
		<Ref k="nakagawa2024" p="419" />. The scalar semantics of <i lang="ain-Latn">=ka</i>
		('even X') combined with an indefinite root yields a free-choice reading; the particle
		itself belongs to the focus system described in
		<Xr ch="cleft-nominalization-focus" />.
	</p>

	<Ex
		m="nep ka a=kar ka etoranne"
		g="something FOC 4.A=do FOC be.troublesome"
		tr="Anything (I) do is a bother."
		cite="nakagawa2024:420"
		dial="SAR"
		note="nep (Saru indefinite 'something') + =ka (focus 'even') gives the free-choice reading 'anything'. Nakagawa ex. 901."
	/>

	<p>
		Typologically, the pattern maps onto the cross-linguistic tendency — documented by
		<Ref k="haspelmath1997" paren /> — for interrogative and indefinite functions to be
		formally related but distinguished by particles or suppletive roots. In Ainu the
		distinction in h-dialects is lexical (two root sets), with
		<i lang="ain-Latn">=ka</i> overlaid on the indefinite root rather than on the interrogative ‹corpus-confirmed›.
	</p>
</S>

<S t="Syntactic position and embedding" id="syntax">
	<p>
		Wh-words in Hokkaido Ainu are used in situ: they occupy the argument or adjunct position
		of the constituent they replace and do not move obligatorily to a clause-peripheral slot
		<Ref k="nakagawa2024" p="411" />. This follows from the nonconfigurational properties of
		the language discussed in <Xr ch="nonconfigurationality-pronominal-argument" />, where
		nominal arguments are essentially free adjuncts and the verb indexes their referents
		independently. A locative wh-word such as <i lang="ain-Latn">hunak un</i> therefore
		remains in the goal position of a motion verb:
	</p>

	<Ex
		m="cikap utar hunak un paye wa isam ru-we an"
		g="bird companions where ALLAT go.PL CONJ be.absent track-POSS exist"
		tr="Where could the birds have gone?"
		cite="ainukoraci1991"
		dial="HOR"
		place="成田英敏, アイヌタイムズ, ainu-times/055/0#20"
		note="hunak un 'where to' in situ, in the goal position of paye 'go (pl.)'. The evidential question frame ru-we an? marks the sentence as a content question. The Horobetsu author uses h-series hunak un rather than the expected ney un, illustrating the permeability of the h/n boundary in modern usage ‹corpus-suggested›."
	/>

	<Ex
		m="ne hemanta hunak un arpa"
		g="DEM what where ALLAT go"
		tr="Where did that thing go?"
		cite="ainukoraci1991"
		dial="SAR"
		place="横山裕之 'cakcak kamuy oruspe', アイヌタイムズ, ainu-times/033/2#10"
		note="hunak un 'where to' in situ within an embedded question; ne hemanta functions as an anaphoric pro-noun 'that thing/what-is-it'."
	/>

	<p>
		The clausal mechanisms that convert an in-situ wh-word into a matrix question — the
		existential frame <i lang="ain-Latn">an?</i>, the question particle
		<i lang="ain-Latn">ya</i>, and intonation — are treated in
		<Xr ch="interrogative-strategies-question-particles" />. The wh-word itself takes no
		special morphology in the question context.
	</p>

	<p>
		Wh-words embed freely in indirect questions. The interrogative pro-form stays in situ
		within the embedded clause, which is then nominalized by the clause-final formal noun or
		the nominalizer <i lang="ain-Latn">p</i>/<i lang="ain-Latn">pe</i>. The
		<Xr ch="concept-form-affiliative-form">affiliative/possessed form</Xr> is not triggered
		on the wh-word itself; it applies to the relational nouns that head the embedding. This
		parallels the general nominalization syntax described in
		<Xr ch="nominalized-complements-control-raising" />. Independent personal pronouns —
		including the pro-forms built on the person-affix paradigm — are discussed separately in
		<Xr ch="independent-personal-pronouns" />; the present pro-forms are not personal pronouns
		but belong to the nominal and adverbial parts of speech catalogued above.
	</p>
</S>
