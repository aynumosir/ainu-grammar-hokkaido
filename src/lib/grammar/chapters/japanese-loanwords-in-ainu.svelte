<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The Japanese contact layer" id="overview">
	<p>
		Vovin characterizes the lexical impact of Japanese on Hokkaido Ainu as making modern Ainu
		"inundated by loanwords from Japanese" <Ref k="vovin2022" p="§1" />. The flow has been
		almost entirely one-directional for the modern period: domestic animals, trade goods,
		administrative vocabulary, and — from the Meiji era onward — the full terminology of modern
		institutions all entered Ainu from Japanese. The reverse direction, Ainu elements entering
		Japanese through place names and regional vocabulary, is treated in
		<Xr ch="ainu-loanwords-and-toponymy-in-japanese" />; contact with Nivkh and Uilta, which
		shaped the Sakhalin lexicon but has no Hokkaido counterpart, is discussed in
		<Xr ch="northern-contact-nivkh-tungusic-manchu" />.
	</p>
	<p>
		Vovin himself acknowledges that "there is no comprehensive study" of Japanese loanwords in
		Ainu <Ref k="vovin2022" p="§1" />. The account below draws on the etymology tags in Chiri's
		classified dictionary <Ref k="chiri1953" />, the word-formation remarks in Nakagawa
		<Ref k="nakagawa2024" p="§1.3" />, and attested corpus examples. Ainu is a language isolate
		with no genetic relationship to Japanese (see <Xr ch="genetic-position-macro-comparison" />),
		so the loans are a contact phenomenon and bring Japanese phonological structures that require
		systematic restructuring to fit the Ainu syllable canon.
	</p>
</S>

<S t="Phonological adaptation" id="phonological-adaptation">
	<p>
		Nakagawa states the diagnostic plainly: free lexical words of three or more syllables are
		often loanwords (<span lang="ja">3音節以上の自立語は外来語であることが多い</span>), citing
		<A w="tampaku" gl="tobacco" /> as a typical case <Ref k="nakagawa2024" p="§1.3" />. The
		underlying phonological mismatch is clear: Japanese contrasts voiced and voiceless
		obstruents; Ainu has no phonemic voicing (see <Xr ch="syllable-template" />). Japanese also
		permits nasal-mora and long-vowel mora types that fall outside the Ainu (C)V(C) canon.
		Every borrowed form is therefore reshaped by one or more of the following repair operations,
		documented in Chiri's etymology tags <Ref k="chiri1953" /> and in Nakagawa
		<Ref k="nakagawa2024" p="§1.3" />.
	</p>

	<table>
		<thead>
			<tr>
				<th>Japanese source</th>
				<th>Ainu output</th>
				<th>Repair</th>
				<th>Source</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><i lang="ja">neko</i> 'cat'</td>
				<td><A w="meko" gl="cat" /></td>
				<td>initial <i lang="ain-Latn">n → m</i> (place assimilation before labial-vowel sequence)</td>
				<td><Ref k="chiri1953" /> §266 [&lt;Jap. <i lang="ja">neko</i>] 胆振・日高</td>
			</tr>
			<tr>
				<td><i lang="ja">uma</i> / <i lang="ja">muma</i> 'horse'</td>
				<td><A w="umma" gl="horse" /></td>
				<td>gemination <i lang="ain-Latn">m → mm</i>; creates heavy σ1 determining accent placement</td>
				<td><Ref k="chiri1953" /> §293 [&lt;日本語ウマ]; <Ref k="kayano1996" /></td>
			</tr>
			<tr>
				<td><i lang="ja">tabako</i> 'tobacco'</td>
				<td><A w="tampaku" gl="tobacco" /></td>
				<td>medial <i lang="ain-Latn">b → mp</i> (prenasalized stop); <i lang="ain-Latn">a → a</i>, <i lang="ain-Latn">o → u</i></td>
				<td><Ref k="chiri1953" /> §061 [&lt;日本語たばこ] 幌別; <Ref k="nakagawa2024" p="§1.3" /></td>
			</tr>
			<tr>
				<td><i lang="ja">kami</i> 紙 'paper'</td>
				<td><A w="kampi" gl="paper, document" /></td>
				<td>final <i lang="ain-Latn">m → mp</i>; nasal assimilation before labial stop</td>
				<td><Ref k="ijas2023b" />; <Ref k="aynucorporadiscord" /></td>
			</tr>
			<tr>
				<td><i lang="ja">kosode</i> 小袖 'short-sleeved robe'</td>
				<td><A w="kosonte" gl="kimono, short-sleeved robe" /></td>
				<td>medial <i lang="ain-Latn">d → nt</i></td>
				<td><Ref k="bugaeva2022" p="Ch.1 §4.1" /></td>
			</tr>
			<tr>
				<td><i lang="ja">kasa</i> 傘 'umbrella'</td>
				<td><A w="kasa" gl="umbrella" /></td>
				<td>no repair (already CV.CV)</td>
				<td><Ref k="aynucorporadiscord" /> (nukopoli, 2024)</td>
			</tr>
		</tbody>
	</table>

	<p>
		The obstruent repairs reflect Ainu's lack of phonemic voicing: Japanese voiced stops surface
		voiceless or prenasalized (<i lang="ain-Latn">b → p</i> /
		<i lang="ain-Latn">mp</i>, <i lang="ain-Latn">d → t</i> /
		<i lang="ain-Latn">nt</i>, <i lang="ain-Latn">g → k</i>). Prenasalization is the
		preferred repair for medial voiced stops in a nasal-compatible environment, as both
		<A w="tampaku" gl="tobacco" /> and <A w="kampi" gl="paper" /> confirm
		‹corpus-confirmed›. Consonant clusters outside the (C)V(C) template are broken by
		epenthesis; the default epenthetic vowel is <i lang="ain-Latn">o</i> or a copy vowel —
		a pattern attested in community comparisons of loanword shapes from multiple source
		languages ‹contested› <Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord,
		2024-12-11 [227]). A further substitution affects the Japanese rhotic: Japanese /r/ has
		an [l]-allophone that maps to Ainu <i lang="ain-Latn">n</i> rather than to Ainu
		<i lang="ain-Latn">r</i> (a flap with no lateral allophone) ‹contested›
		<Ref k="aynucorporadiscord" /> (antitwilight, aynu-corpora Discord, 2025-01-02 [400]).
	</p>
	<p>
		The nasal spelling of prenasalized loans is an active orthographic debate. Nakagawa's
		convention writes the etymological labial nasal (hence
		<i lang="ain-Latn">tampaku</i>, <i lang="ain-Latn">kampi</i>,
		<i lang="ain-Latn">umma</i>), because /n/ and /m/ neutralize to [m] before /p/ and /m/.
		Kana orthography uses ン throughout since kana encodes a single nasal mora. The choice
		between <i lang="ain-Latn">kampi</i> and <i lang="ain-Latn">kanpi</i> reflects an
		etymological or neutralization-based orthographic stance, not a phonological difference
		‹contested› <Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2024-11-16
		[216, 217]).
	</p>
	<p>
		One community-proposed case suggests that voicing may occasionally survive in a borrowed
		form: the garment term <i lang="ain-Latn">cinciri</i> has been proposed as a loan of
		Japanese <i lang="ja">綴れ</i> (<i lang="ja">tsuzure</i>) with the voiced affricate
		retained ‹speculative› <Ref k="aynucorporadiscord" /> (scheuewsuiski, aynu-corpora
		Discord, 2024-11-05 [215]). The etymology is unverified against a primary dictionary
		source.
	</p>
</S>

<S t="Chronological strata" id="chronological-strata">
	<S t="Early contact and Edo-period loans" id="early-loans">
		<p>
			The earliest stratum consists of culture-contact vocabulary that is fully integrated
			into Ainu phonology and morphology. These forms appear in the nineteenth- and
			early-twentieth-century texts collected by Chiri and Batchelor and are attested across
			multiple dialects. The core items are animals not native to pre-contact Hokkaido,
			material-culture goods brought by trade, and administrative terminology tied to the
			Wajin presence.
		</p>

		<table>
			<thead>
				<tr>
					<th>Ainu form</th>
					<th>Japanese source</th>
					<th>Semantic domain</th>
					<th>Dialect attestation</th>
					<th>Source</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><A w="umma" gl="horse" /></td>
					<td><i lang="ja">uma / muma</i></td>
					<td>animals</td>
					<td>北海道・樺太</td>
					<td><Ref k="chiri1953" /> §293</td>
				</tr>
				<tr>
					<td><A w="meko" gl="cat" /></td>
					<td><i lang="ja">neko</i></td>
					<td>animals</td>
					<td>胆振・日高</td>
					<td><Ref k="chiri1953" /> §266</td>
				</tr>
				<tr>
					<td><A w="peko" gl="cattle, cow" /></td>
					<td><i lang="ja">beko</i> (dial.) / <i lang="ja">ushi</i></td>
					<td>animals</td>
					<td>北海道</td>
					<td><Ref k="chiri1953" /></td>
				</tr>
				<tr>
					<td><A w="tampaku" gl="tobacco" /></td>
					<td><i lang="ja">tabako</i></td>
					<td>trade goods</td>
					<td>幌別</td>
					<td><Ref k="chiri1953" /> §061</td>
				</tr>
				<tr>
					<td><A w="kosonte" gl="short-sleeved robe" /></td>
					<td><i lang="ja">kosode</i> 小袖</td>
					<td>clothing</td>
					<td>Saru</td>
					<td><Ref k="bugaeva2022" p="Ch.1 §4.1" /></td>
				</tr>
				<tr>
					<td><A w="kampi" gl="paper, document" /></td>
					<td><i lang="ja">kami</i> 紙</td>
					<td>materials / administration</td>
					<td>北海道</td>
					<td><Ref k="chiri1953" />; <Ref k="ijas2023b" /></td>
				</tr>
				<tr>
					<td><A w="sake" gl="rice wine" /></td>
					<td><i lang="ja">sake</i> 酒</td>
					<td>food and drink</td>
					<td>北海道</td>
					<td><Ref k="chiri1953" /></td>
				</tr>
				<tr>
					<td><A w="tono" gl="lord, official" /></td>
					<td><i lang="ja">tono</i> 殿</td>
					<td>social/administrative titles</td>
					<td>北海道</td>
					<td><Ref k="chiri1953" /></td>
				</tr>
				<tr>
					<td><A w="tunci" gl="interpreter" /></td>
					<td><i lang="ja">tsūji</i> 通事・通詞</td>
					<td>social/administrative titles</td>
					<td>北海道</td>
					<td><Ref k="aynucorporadiscord" /> (thegodofneet, 2024-06-14)</td>
				</tr>
			</tbody>
		</table>

		<p>
			The animal loans — <A w="umma" gl="horse" />, <A w="meko" gl="cat" />,
			<A w="peko" gl="cattle" /> — fill gaps in the Ainu fauna lexicon for mainland
			domestic species absent from Hokkaido before sustained contact. The corpus shows
			<A w="umma" gl="horse" /> with 146 tokens (rank 881 in the full vocabulary), making
			it the most frequent Japanese animal loan by a large margin. The administrative items
			reflect the institutional structure of Wajin–Ainu trade: <A w="tono" gl="lord" />
			titles the Japanese trade-post supervisor, and <A w="tunci" gl="interpreter" /> names
			the bilingual go-between required in formal dealings — plausibly &lt; archaic Japanese
			通事/通詞 <i lang="ja">tsūji</i> ‹asserted›
			<Ref k="aynucorporadiscord" /> (thegodofneet, aynu-corpora Discord, 2024-06-14).
		</p>

		<Ex
			m="tampaku ku=ku rusuy"
			g="tobacco 1SG.A=smoke want"
			tr="I want to smoke (tobacco)."
			cite="chiba2015"
			dial="HK"
			place="新井田セイノ, アイヌ語鵡川方言日本語‐アイヌ語辞典 [chiba-mukawa/0#3048]"
			note="tampaku (< Japanese tabako), corpus frequency 49 tokens (rank 1968). A nativized early loan with full phonological repair (b → mp)."
		/>

		<p>
			Early loans also appear as components in native compound and incorporation structures. The
			corpus records both <i lang="ain-Latn">tampaku-op</i> 'tobacco pouch' and
			<i lang="ain-Latn">toy-ta-tampaku</i> 'home-grown tobacco'
			<Ref k="kayano1996" />. The following example shows two animal loans and an
			administrative loan co-occurring in a single clause:
		</p>

		<Ex
			m="kes to an kor sihainin orowa peko umma koraci a=nepkire"
			g="every day exist while manager from cattle horse like 4.A=work-CAUS"
			tr="Every day I was made to work like cattle and horses by the manager."
			cite="ainukoraci1991"
			dial="SAR"
			place="小松哲郎, アイヌタイムズ「Tamamusi Sadayû」[ainu-times/017/2#14]"
			note="peko (cattle) and umma (horse) are early Japanese animal loans; sihainin (支配人 'manager, overseer') is a later administrative loan. 4.A marks an indefinite/impersonal agent with the narrator as implicit object of the causative."
		/>

		<p>
			The noun <A w="kampi" gl="paper, document" /> is attested in the older sense of
			'written order, official document' in oral-literature contexts, where the Wajin
			administrative apparatus is a recurring plot element:
		</p>

		<Ex
			m="kampi an=euytek pe moyuk tono"
			g="document 4.A=dispatch NMLZ tanuki lord"
			tr="the raccoon-dog lord, dispatched with a written order"
			cite="ilcaa1976"
			dial="SHI"
			place="織田ステノ, AA研アイヌ語資料 uwepeker Moyuk [aa-irc/018#71]"
			note="kampi in the administrative sense 'written order'; tono (< 殿 'lord') titles a supernatural figure cast in a bureaucratic role. an= is the 4.A prefix in Shizunai dialect."
		/>
	</S>

	<S t="Modern borrowings and the untranslated stratum" id="modern-loans">
		<p>
			Meiji-era colonization and the assimilation policy that followed (documented in
			<Xr ch="sociolinguistic-situation-revitalization" />) ended the productive nativization
			of new Japanese vocabulary. Concepts introduced during the decades when Ainu was no
			longer used in daily life simply appear as untranslated Japanese forms:
			<i lang="ain-Latn">terebi</i> 'television', <i lang="ain-Latn">sinbun</i>
			'newspaper', <i lang="ain-Latn">zeikin</i> 'tax', <i lang="ain-Latn">ginkō</i>
			'bank', <i lang="ain-Latn">denwa</i> 'telephone'. Ōno's formulation is precise: "no
			Ainu vocabulary has been found to refer to televisions or computers … during the period
			when these things became widespread, the Ainu language was rarely used in Ainu daily
			lives" <Ref k="ono2022" p="§8.9" />. The untranslated character of modern loans
			distinguishes them from the early stratum: early loans received full phonological
			repair; modern loans often retain Japanese syllable structure intact
			‹corpus-confirmed›.
		</p>
		<p>
			The contrast is visible when modern and early loans appear in the same sentence. An Ainu
			Times text places the fully nativized early loan <A w="umma" gl="horse" /> alongside
			three unrepaired modern loans:
		</p>

		<Ex
			m="terebi sinbun or ta zeikin uk wa umma hok kur oruspe a=nu ruwe ne"
			g="television newspaper place LOC tax take CONJ horse buy person news 4.A=hear track-POSS COP"
			tr="On television and in the newspapers, one hears the story of a person who took tax money and quietly bought a horse."
			cite="ainukoraci1991"
			dial="SAR"
			place="浜田隆史, アイヌタイムズ「zeikin oruspe」[ainu-times/017/5#5] (excerpt)"
			note="Modern loans terebi (TV), sinbun (newspaper), zeikin (tax) retain Japanese phonological form without repair. The early loan umma (horse) is fully nativized. ruwe ne is the inferential evidential treated in the evidential chapters."
		/>

		<p>
			Contrast the handful of <em>native-era coinages</em> for Meiji-period technology, which
			show that Ainu was still spoken when those concepts spread:
			<i lang="ain-Latn">tunas-kampi</i> 'telegram' (literally 'fast paper/letter',
			Asahikawa) and <i lang="ain-Latn">a-e-y-nu-p</i> 'telephone' (literally 'the thing
			with which we hear one another') are built from native and nativized material rather than
			borrowed from Japanese <Ref k="ono2022" p="§8.9" />. Their existence marks the
			relative chronology of language shift across technology domains.
		</p>
	</S>
</S>

<S t="Semantic distribution" id="semantic-distribution">
	<p>
		Loans cluster in the semantic fields where post-contact material and administrative culture
		arrived: domestic animals, trade goods, clothing, tools, money and administration, and in the
		modern stratum technology and institutions <Ref k="nakagawa2024" p="§1.3" />. Core
		vocabulary — body parts, kinship terms, the natural-world lexicon, basic verbs, the native
		numerals one through ten, and pronouns — is native. The vigesimal numeral system treated in
		<Xr ch="vigesimal-numeral-system" /> is entirely native in its derivational base; classifiers
		and ordinals in <Xr ch="numeral-classifiers-ordinals-and-quantifier-syntax" /> likewise draw
		on native morphology. Property-concept predicates in <Xr ch="property-concept-predication" />
		are native verbal predicates. The pattern is the classic "borrow the culture, keep the core"
		profile of contact lexicon.
	</p>
	<p>
		The noun <A w="kampi" gl="paper, document" /> illustrates how a fully nativized loan can
		become a productive morphological base. Borrowed early as 'paper' (&lt; <i lang="ja">kami</i>
		紙), it has generated a set of neologisms for educational and museum contexts in the
		revitalization period: <i lang="ain-Latn">kampi-nukat-cise</i> 'school' (paper–look-at–house),
		<i lang="ain-Latn">kanpi pu</i> 'library' (paper–storehouse),
		<i lang="ain-Latn">imeru-kampi</i> 'email' (lightning–paper)
		<Ref k="ijas2023b" p="§5" />. A loanword functioning as a stem in
		<Xr ch="noun-incorporation-object">noun incorporation</Xr> and in productive compounding
		is indistinguishable in its morphological behavior from a native root.
	</p>
</S>

<S t="Degree of integration" id="integration">
	<p>
		Early loans are fully integrated. They bear Ainu accentuation according to the prosodic
		rules described in <Xr ch="mora-syllable-accent-vs-tone-analysis" />: the geminate in
		<A w="umma" gl="horse" /> creates a heavy first syllable that receives the accent nucleus
		by the default rule for CVC.CV words, so the form sounds native, not Japanese. Early loans
		also participate freely in compounding and incorporation (see examples in §3.1 above).
		Native obligatorily-possessed nouns carry <Xr ch="affiliative-suffix-morphophonology">affiliative
		suffixes</Xr> in possessed contexts; borrowed nouns such as
		<A w="umma" gl="horse" /> and <A w="kampi" gl="paper" /> are not
		obligatorily possessed and do not display this morphology — a diagnostic that separates
		many loans from native inalienable nouns.
	</p>
	<p>
		Modern loans are less integrated. They frequently retain Japanese syllable structure,
		and in the new-speaker texts produced in language-revitalization contexts, the boundary
		between a nativized loanword and a code-switch from Japanese is structurally difficult to
		establish ‹speculative›. The compound <i lang="ain-Latn">umma menoko</i> illustrates how
		native and loan morphology interact productively: the bare juxtaposition is ambiguous
		between 'horse and girl' (appositive) and 'horse-girl' (compound); inserting the copula
		explicitly as <i lang="ain-Latn">umma-ne-menoko</i> removes the ambiguity ‹proposed›
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2023-12-12 [356]).
	</p>
</S>

<S t="Diagnostics for identifying Japanese loans" id="diagnostics">
	<p>
		Four properties together identify a form as a Japanese loan in Hokkaido Ainu:
	</p>
	<ul>
		<li>
			<strong>Syllable count.</strong> A free lexical root of three or more syllables is a
			strong prior for borrowing <Ref k="nakagawa2024" p="§1.3" />. Native Ainu roots are
			predominantly mono- or disyllabic; polysyllabic roots arise through borrowing or
			through productive — and morphologically transparent — affixal derivation.
		</li>
		<li>
			<strong>Recognizable phonological repair.</strong> Prenasalization of a medial voiced
			stop (<i lang="ain-Latn">-mp-</i>, <i lang="ain-Latn">-nt-</i>), gemination of a
			stem-initial nasal consonant, or an unexpected initial
			<i lang="ain-Latn">m-</i> where a Japanese source has <i lang="ain-Latn">n-</i> all
			point to a Japanese etymon.
		</li>
		<li>
			<strong>Absence of affiliative morphology.</strong> Obligatorily-possessed native nouns
			display a concept/affiliative alternation (所属形; see
			<Xr ch="affiliative-suffix-morphophonology" />). Most Japanese loans are not
			obligatorily possessed and lack this alternation.
		</li>
		<li>
			<strong>Chiri dictionary etymology tags.</strong> The tags [&lt;日本語…] and
			[&lt;Jap.…] in <Ref k="chiri1953" /> mark the identified Japanese-loan inventory
			and remain the most systematic primary record. Vovin notes the lack of a comprehensive
			successor survey <Ref k="vovin2022" p="§1" />.
		</li>
	</ul>
	<p>
		The name for the source language itself illustrates one of the finer integration
		distinctions. The two-word phrase <i lang="ain-Latn">sisam itak</i> 'the speech of the
		Wajin' (a descriptive NP) and the single compound
		<i lang="ain-Latn">sisamitak</i> 'Japanese [language]' (a language name) are argued to
		differ semantically and phonologically: the former has two independent accentual words,
		while the latter functions as a single compound with one accent domain. Writing them
		together obscures the accentuation and conflates the two meanings ‹asserted›
		<Ref k="aynucorporadiscord" /> (nukopoli, aynu-corpora Discord, 2024-11-05 [299];
		2024-12-20 [549]).
	</p>
	<p>
		Ochiai's study of <A w="sikerpe" gl="Amur cork tree fruit (Phellodendron amurense)" />
		demonstrates a methodological corollary from the reverse direction: a Japanese dialect
		tree-name preserving a reconstructible intermediate Ainu form — <i lang="ain-Latn">*si kor pe</i>
		before the change to <i lang="ain-Latn">sikerpe</i> — can be used both to date the
		borrowing and to anchor the proto-Ainu reconstruction
		<Ref k="ochiai2026" p="199" />. The evidence for Ainu loans in Old Japanese, including
		Vovin's Man'yōshū material, is taken up in
		<Xr ch="ainu-loanwords-and-toponymy-in-japanese" /> and
		<Xr ch="macro-comparison-and-deep-contact-controversies" />.
	</p>
</S>
