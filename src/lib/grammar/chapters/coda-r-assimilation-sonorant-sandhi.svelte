<script lang="ts">
	import { S, Ex, Ref, Xr } from '$lib/grammar/components';
</script>

<S t="Consonants in connected speech" id="overview">
	<p>
		A consonant at the end of an Ainu syllable can change before the next sound. The best described
		cases involve final /r/ and /n/, and occur both within words and across word boundaries.
		Descriptions use the term <em>sandhi</em> for these changes
		<Ref k="shiraishi2022" p="§§6.1–6.2" />.
	</p>
	<p>
		The patterns have different conditions. Some concern articulation, some are restricted to
		particular grammatical forms, and some distinguish dialectal word shapes. Satō and Nakagawa both
		caution that many alternations vary by speaker or occurrence
		<Ref k="sato2008" p="12–13" />; <Ref k="nakagawa2024" p="36–38" />. A table of possible changes
		should therefore not be read as an instruction to apply every change in every utterance.
	</p>
</S>

<S t="Changes involving final /r/" id="r-sandhi">
	<p>
		The usual patterns include /rt/ becoming [tt], /rc/ becoming [tc], and /rn/ becoming [nn].
		Nakagawa illustrates them with the following combinations; the pronunciation column uses his
		segmental notation <Ref k="nakagawa2024" p="36" />:
	</p>
	<table>
		<thead
			><tr
				><th>Sequence</th><th>Underlying combination</th><th>Pronunciation</th><th>Meaning</th></tr
			></thead
		>
		<tbody>
			<tr
				><td>/r+t/</td><td lang="ain-Latn">ku=kor tar</td><td lang="ain-Latn">kukot tar</td><td
					>my carrying strap</td
				></tr
			>
			<tr
				><td>/r+c/</td><td lang="ain-Latn">retar cikap</td><td lang="ain-Latn">retat cikap</td><td
					>white bird</td
				></tr
			>
			<tr
				><td>/r+n/</td><td lang="ain-Latn">ku=kor nima</td><td lang="ain-Latn">kukon nima</td><td
					>my wooden bowl</td
				></tr
			>
		</tbody>
	</table>
	<p>
		Satō's Chitose examples show the same three environments, and Shibatani describes them in his
		survey <Ref k="sato2008" p="12–13" />;
		<Ref k="shibatani1990" p="§2.4" />. Further changes before /s/ or /y/ have narrower
		distributions. Nakagawa explicitly identifies the pronunciation
		<i lang="ain-Latn">kukoy yupi</i> from <i lang="ain-Latn">ku=kor yupi</i>
		“my elder brother” as Chitose <Ref k="nakagawa2024" p="36" />.
	</p>
	<S t="Final /r/ before another /r/" id="r-dissimilation">
		<p>
			Before /r/, final /r/ can become [n]: <i lang="ain-Latn">kor rusuy</i> is pronounced
			<i lang="ain-Latn">kon rusuy</i> “want to have.” This is traditionally described as
			dissimilation, since the adjacent rhotics become less alike
			<Ref k="sato2008" p="13" />; <Ref k="nakagawa2024" p="37" />. Shiraishi also gives
			<i lang="ain-Latn">kon rametok</i>
			“his bravery” from
			<i lang="ain-Latn">kor rametok</i>
			<Ref k="shiraishi2022" p="§6.1, example 27g" />.
		</p>
		<p>
			Shiraishi compares this traditional account with his proposal that /r/-sandhi generally avoids
			a rhotic followed by another coronal consonant. That proposal groups outcomes otherwise
			described separately as assimilation and dissimilation
			<Ref k="shiraishi2022" p="§6.1" /> ‹contested›.
		</p>
	</S>
	<S t="Recognizing a changed final consonant" id="r-derivation">
		<Ex
			m="retar cikap"
			g="be.white bird"
			tr="a white bird"
			cite="nakagawa2024:36"
			dial="HK"
			note="Nakagawa gives the sandhi pronunciation retat cikap. The example uses the underlying forms; English glosses are supplied here."
		/>
		<p>
			In this example, the /r/ of the descriptive word changes before the affricate beginning the
			next word. The resulting [t] belongs to the same syllable that contained /r/. This behavior
			helps distinguish a final rhotic from a rhotic followed by a full vowel
			<Ref k="nakagawa2024" p="38" />. See <Xr ch="rhotic-r" /> for the related evidence from vowel-like
			releases and suffix selection.
		</p>
	</S>
</S>

<S t="Nasal place assimilation" id="nasal-place">
	<p>
		Final /n/ can take the place of articulation of a following consonant. It is realized as [m]
		before /p/ or /m/, and as [ŋ] before /k/. Nakagawa gives the velar realization in <i
			lang="ain-Latn">honkor</i
		>
		“be pregnant” <Ref k="nakagawa2024" p="30" />. Shibatani illustrates the labial pattern with
		<i lang="ain-Latn">pon menoko</i>
		“small girl,” pronounced with [m] before the second word
		<Ref k="shibatani1990" p="§2.4" />.
	</p>
	<p>
		These are contextual pronunciations of /n/. A phonemic transcription can retain
		<em>n</em> where a phonetic transcription records [m] or [ŋ]. This distinction is especially useful
		when /n/ precedes a form whose initial consonant also changes.
	</p>
</S>

<S t="Final /n/ before continuants" id="n-sandhi">
	<p>
		A separate set of changes involves /n/ before /s/, /y/, and /w/. Before /s/ or /y/, /n/ can
		become [j], written <em>y</em>. The following example is shared by several descriptions
		<Ref k="nakagawa2024" p="36" />; <Ref k="sato2008" p="13" />;
		<Ref k="shiraishi2022" p="§6.1" />:
	</p>
	<Ex
		m="pon seta"
		g="be.small dog"
		tr="a small dog"
		cite="nakagawa2024:36"
		dial="HK"
		note="The source gives poy seta as the sandhi pronunciation. The example preserves underlying forms; English glosses are supplied here."
	/>
	<p>
		Before /w/, [ww] is also documented: Satō gives
		<i lang="ain-Latn">aw wentarap</i> from <i lang="ain-Latn">an wentarap</i>
		<Ref k="sato2008" p="13" />. Shiraishi groups these triggers as continuant consonants and
		analyzes the change in terms of their articulatory properties
		<Ref k="shiraishi2022" p="§6.1" />. The analysis is his account of the shared pattern.
	</p>
	<p>
		The particle <i lang="ain-Latn">wa</i> has another pattern: it can become
		<i lang="ain-Latn">ma</i> after /m/ or /n/, and <i lang="ain-Latn">pa</i> after /p/. Thus
		<i lang="ain-Latn">an wa</i>
		can surface as <i lang="ain-Latn">an ma</i>, pronounced [amma] <Ref k="sato2008" p="13" />.
		Nakagawa restricts this alternation to grammatical uses of <i lang="ain-Latn">wa</i> and notes
		individual variation
		<Ref k="nakagawa2024" p="37" />. It is not a general change of every initial /w/ after a nasal.
	</p>
	<S t="Pauses and sentence boundaries" id="domain-asymmetry">
		<p>
			Shiraishi's study of Saru recordings found a difference between the two sandhi systems.
			/n/-sandhi did not extend across a sentence boundary in the material examined, whereas
			/r/-sandhi did. An actual pause could block either process
			<Ref k="shiraishi2022" p="§6.2" />. Sentence boundaries and pauses therefore have distinct
			roles in this account.
		</p>
		<Ex
			m="kanna ruy-no ye yan. ye yan sekor"
			g="again be.violent-ADV say IMP.POL say IMP.POL QUOT"
			tr="‘Say it again. Say it again.’"
			cite="kayano1998a:74, via Shiraishi 2022 §6.2, example 28c"
			dial="SAR"
			note="Kayano's example as reproduced by Shiraishi. The final /n/ of the first yan does not undergo sandhi before the following ye, despite the reported absence of an intervening pause."
		/>
		<p>
			Shiraishi interprets the difference through distinct domains for the phonological rules. The
			observation is tied to his recording sample; its frequency and dialect coverage should not be
			expanded beyond that evidence <Ref k="shiraishi2022" p="§6.2" />.
		</p>
	</S>
</S>

<S t="Written forms and lexicalized outcomes" id="lexicalized">
	<p>
		Printed texts handle sandhi in several ways. Nakagawa notes that changes inside a word are often
		represented in the spelling, while changes across word boundaries are often left unwritten. He
		also illustrates underscore conventions for indicating the affected boundary <Ref
			k="nakagawa2024"
			p="38"
		/>.
	</p>
	<p>
		For example, <i lang="ain-Latn">retar</i> plus <i lang="ain-Latn">-cir</i> appears as
		<i lang="ain-Latn">retatcir</i>
		“swan.” Across words, a source may write either
		<i lang="ain-Latn">ritur ta</i> or the changed form
		<i lang="ain-Latn">ritut ta</i> “on the way”
		<Ref k="nakagawa2024" p="38" />. Absence of a changed consonant in the spelling does not
		establish its absence from the pronunciation.
	</p>
</S>

<S t="Eastern dialect correspondences" id="bihoro">
	<p>
		Some regional word forms reflect consonant assimilation within the lexical item. Nakagawa and
		Fukazawa contrast widespread <i lang="ain-Latn">hotke</i> “lie down” with
		<i lang="ain-Latn">hokke</i>
		in Obihiro, Kushiro, and Bihoro. Their comparison also includes Bihoro
		<i lang="ain-Latn">tutte</i>
		beside
		<i lang="ain-Latn">tupte</i> “move something” elsewhere
		<Ref k="nakagawafukazawa2022" p="§3.3, table 5" />.
	</p>
	<p>
		Nakagawa treats such established dialectal word shapes separately from productive
		connected-speech alternations. The presence of /kk/ in a Kushiro word does not license a general
		/tk/ → /kk/ rule across adjacent words
		<Ref k="nakagawa2024" p="36–37" />. Broader regional patterns are discussed in
		<Xr ch="hokkaido-phonological-microvariation" />.
	</p>
</S>

<S t="Conditions to keep distinct" id="rule-summary">
	<table>
		<thead
			><tr><th>Pattern</th><th>Relevant condition</th><th>Scope of the description</th></tr></thead
		>
		<tbody>
			<tr
				><td>/r/-sandhi</td><td>Following consonant; pause and dialect</td><td
					>Can extend across sentence boundaries in the cited Saru recordings.</td
				></tr
			>
			<tr
				><td>/n/-sandhi</td><td>Following continuant; sentence boundary and pause</td><td
					>Did not extend across sentence boundaries in that recording sample.</td
				></tr
			>
			<tr
				><td>Nasal place assimilation</td><td>Following consonant's articulation</td><td
					>Phonetic realization can differ from the phonemic spelling.</td
				></tr
			>
			<tr
				><td>Changes of <i lang="ain-Latn">wa</i></td><td
					>Preceding consonant and grammatical identity</td
				><td>Lexically restricted, with speaker variation.</td></tr
			>
			<tr
				><td>Eastern cluster correspondences</td><td>Dialect and lexical item</td><td
					>Established word forms do not entail a productive boundary rule.</td
				></tr
			>
		</tbody>
	</table>
	<p>
		These distinctions follow the source accounts summarized above
		<Ref k="nakagawa2024" p="30, 36–38" />; <Ref k="shiraishi2022" p="§§6.1–6.2" />. Vowel-contact
		phenomena are treated separately in
		<Xr ch="glide-epenthesis-hiatus-resolution" />.
	</p>
</S>
