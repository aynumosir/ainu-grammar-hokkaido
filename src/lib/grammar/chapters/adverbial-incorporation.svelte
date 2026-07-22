<!-- src/lib/grammar/chapters/adverbial-incorporation.svelte -->
<script lang="ts">
	import { S, Ex, Ref, Xr, A } from '$lib/grammar/components';
</script>

<S t="The construction and the -no diagnostic" id="overview">
	<p>
		A verb stem may carry, immediately before its root, a second, non-head verb stem that reads
		as a manner: <A w="pirka-resu" gl="raise well" />, <A w="tomte-resu" gl="raise with care" />.
		The mechanism is the one Shibatani sets out for what he calls adverb incorporation: the
		adverbial suffix <i lang="ain-Latn">-no</i> drops, and the bare stem sits against the verb
		root, inside the person index <Ref k="shibatani1990" p="71–72" />; <Ref
			k="nakagawa2024"
			p="484, 492"
		/>. The minimal pair on <A w="pirka" gl="be good, fine" /> shows the one-word result:
	</p>

	<Ex
		m="pirka-no a=ipere"
		g="well 4.A=feed"
		tr="(I) fed them well."
		constructed
		note="Phrasal: pirka-no 'well' is an adverb outside the verb word, and the person prefix a= sits on ipere alone."
	/>

	<Ex
		m="a=pirka-ipere"
		g="4.A=well-feed"
		tr="(I) fed them well."
		cite="shibatani1990:72"
		dial="HK"
		note="Incorporated: -no is dropped and a= precedes the whole pirka-ipere sequence, so it is one word."
	/>

	<p>
		The person-index test that identifies noun incorporation (§<Xr
			ch="noun-incorporation-object"
		/>) carries over: an index before the whole stem, not between modifier and root, marks the
		sequence as a single verb. This chapter takes the manner variety on its own terms, because
		what fills the modifier slot turns out not to be an adverb.
	</p>
</S>

<S t="What is incorporated is a verb, not an adverb" id="property-verb">
	<p>
		Ainu has no adjective or adverb class distinct from the verb: property concepts are stative
		intransitive verbs — <A w="pirka" gl="be good" />, <A w="wen" gl="be bad" />, <A
			w="poro"
			gl="be big"
		/> <Ref k="tamura1996" />; <Ref k="shibatani1990" p="16–20" />. The adverb <i
			lang="ain-Latn">pirka-no</i> is derived from that verb by <i lang="ain-Latn">-no</i>. In
		the incorporated construction it is the bare verb stem <i lang="ain-Latn">pirka</i>, not the
		adverb <i lang="ain-Latn">pirka-no</i>, that joins the head — the same <i lang="ain-Latn"
			>-no</i
		>-drop Shibatani describes. The element inside the word is therefore a verb, and the label
		"adverb" tracks the English gloss rather than the Ainu category ‹speculative›.
	</p>

	<p>
		The modifier need not even be intransitive. <A w="tomte" gl="adorn, make fine" /> is a
		transitive verb (Batchelor's <i lang="ain-Latn">tomtere</i> 'to adorn'), and <A
			w="omap"
			gl="love, cherish"
		/> is transitive, yet both compound before <A w="resu" gl="raise" /> with the same manner
		reading and the same effect on argument structure — none. A stative <i lang="ain-Latn">pirka</i
		> and a transitive <i lang="ain-Latn">tomte</i> behave alike here, which is expected of
		non-head verbs in a compound and not of a lexical adverb ‹speculative›.
	</p>

	<p>
		Because the modifier adds no participant, the head keeps its frame. <i lang="ain-Latn"
			>pirka-resu</i
		> stays a two-place transitive: the manner verb's own single argument is identified with the
		head's subject, in the manner of a depictive secondary predicate, and contributes a relation
		rather than an argument (arity +0). The valency layer records this as a <i lang="ain-Latn"
			>manner_compound</i
		> operation that adds an internal, non-surface slot; see <Xr ch="valency-voice-overview" />.
	</p>
</S>

<S t="The resu family and the applicative interaction" id="resu">
	<p>
		The rearing verbs of the Chitose and Saru corpora give the clearest paradigm. Nakagawa lists
		both compounds as headwords, each analysed as manner + <i lang="ain-Latn">resu</i>: <A
			w="pirka-resu"
			gl="raise well"
		/> from <i lang="ain-Latn">pirka</i> 'good', <A w="tomte-resu" gl="raise finely" /> from <i
			lang="ain-Latn">tomte</i
		> 'finely' <Ref k="nakagawa1995" />. Narration routinely runs the two as a couplet:
	</p>

	<Ex
		m="i=tomteresu i=pirkaresu"
		g="4.O=raise.finely 4.O=raise.well"
		tr="raised me with care and raised me well"
		cite="ilcaa1976"
		dial="SAR"
		note="The paired manner verbs before one head, a verse-register doublet; the object index i= precedes each whole stem."
	/>

	<p>
		A single word can stack both manner verbs: <A w="pirka-tomte-resu" gl="raise well and finely"
		/>. Whether it brackets as <i lang="ain-Latn">[[pirka-tomte]-resu]</i> or <i
			lang="ain-Latn">[pirka-[tomte-resu]]</i
		> is not settled by the few attested tokens ‹corpus-suggested›.
	</p>

	<p>
		The manner verbs sit apart from the valency-changing operations, and the two combine on one
		stem. The instrument applicative <A w="e-" gl="applicative (instrument)" /> promotes the
		means a child is raised on to a core object, giving a three-place stem <i lang="ain-Latn"
			>eresu</i
		> '…を〜で育てる':
	</p>

	<Ex
		m="pirka ipe i=eresu kor an=an"
		g="good food 4.O=raise.on and 4.S=exist"
		tr="they were raising me on good food"
		cite="ilcaa1976"
		dial="SAR"
		note="e- adds the instrument (the food) as an object; the original patient stays. Cf. Batchelor's ae-oresu 'brought up on fish'."
	/>

	<p>
		Applied to the doubled manner stem, the same applicative yields <i lang="ain-Latn"
			>epirkatomteresu</i
		>, which Yoshikawa's Saru valency list places among the verbs of long-term action and glosses
		'…を〜で大事に育てる' <Ref k="yoshikawa2020" />:
	</p>

	<Ex
		m="a=epirkatomteresu kor an pe a=ne ayne"
		g="4.A=raise.well.finely.on and exist NMLZ 4.A=COP CONJ"
		tr="I was one who had been raised well and with care"
		cite="yoshikawa2020"
		dial="SAR"
		note="e- (instrument, +1) over pirka (+0) + tomte (+0) + resu (+2) = a three-place verb. Only the applicative changes arity; the two manner verbs never do."
	/>

	<p>
		The split is the point: <i lang="ain-Latn">pirkatomteresu</i> is two-place and <i
			lang="ain-Latn">epirkatomteresu</i
		> three-place, and the difference is carried entirely by <i lang="ain-Latn">e-</i>. The manner
		verbs modify the event; the applicative rearranges the arguments.
	</p>
</S>

<S t="Stacking, co-incorporation, and the pondering chain" id="stacking">
	<p>
		A noun and a manner verb may incorporate together. Shibatani cites <i lang="ain-Latn"
			>kiraw-riki-kur-roski</i
		> 'raise the horns high', with the noun <i lang="ain-Latn">kiraw</i> 'horn' and the
		element <i lang="ain-Latn">riki</i> 'high, up' both inside one verb <Ref
			k="shibatani1990"
			p="72"
		/>. Where the modifier is a spatial word with no verbal source, like <i lang="ain-Latn"
			>riki</i
		>, the adverb analysis may hold; the productive manner class built on property verbs is the
		part this chapter reanalyses ‹speculative›.
	</p>

	<p>
		The manner verb also composes below the applicatives in the long pondering verbs. In <i
			lang="ain-Latn">eyaykotuymasiramsuypa</i
		> 'ponder deeply about', the core is the noun-incorporation <i lang="ain-Latn"
			>siram-suypa</i
		> 'sway one's mind'; <A w="tuyma" gl="be far" /> — a stative verb, glossed here 'deeply' —
		adds a manner over that core (+0), and only then do the applicative <i lang="ain-Latn">ko-</i
		>, the reflexive <i lang="ain-Latn">yay-</i>, and the applicative <i lang="ain-Latn">e-</i>
		stack outward <Ref k="bugaeva2014" />. The database keeps <i lang="ain-Latn">tuyma</i> here as
		the stative verb rather than a separate adverb entry, so the manner reading follows from its
		non-head position, not from a change of class.
	</p>
</S>

<S t="Typological placement" id="typology">
	<p>
		Incorporation theory is built around the noun. Mithun's four-type developmental scale is a
		typology of noun incorporation, and its implicational steps concern patients and case, not
		manner modifiers <Ref k="mithun1984" />; the syntactic (Baker) and lexicalist (Rosen)
		accounts likewise take N-into-V as the object of study <Ref k="baker1988" />; <Ref
			k="rosen1989"
		/>; <Ref k="gerdts1998" />. "Adverb incorporation" is named in passing rather than
		established as a category parallel to noun incorporation ‹contested›.
	</p>

	<p>
		Read as verb-verb compounding, the Ainu pattern has clearer relatives. A non-head predicate
		expressing manner or result inside one verbal word is the shape of the Chinese resultative
		verb compound (<i lang="zh">养好</i> 'raise-good'); Ainu reverses that order, with the manner
		verb before the lexical head ‹speculative›.
		Bound evaluative morphology of the Inuit type — Inuktitut <i lang="iu-Latn">-tsiaq-</i>
		'well' — translates alike but differs in kind: the postbase is bound from the lexicon, not a
		free verb drawn into the word, so Eskimologists treat it as derivation rather than
		incorporation <Ref k="compton2012" />. Chukchi incorporates degree and quantity stems on a
		comparable path <Ref k="kantarovich2024" />, and Gunwinyguan verbs admit adverbial as well as
		nominal incorporation <Ref k="evans2003" /> ‹contested›.
	</p>

	<p>
		The evaluative counterpart of the manner construction is not compounding at all but the
		applicative on the property verb: <i lang="ain-Latn">e-pirka</i> 'be good with respect to X'
		keeps <i lang="ain-Latn">pirka</i> as the head and adds the ground as an argument, the way
		Japanese <i lang="ja">住みよい</i> 'good to live in' makes the property word the head and the
		verb its ground. Manner <i lang="ain-Latn">pirka-resu</i> does the reverse: the action verb is
		the head and the property verb the modifier. One asks how the event proceeds, the other
		whether a participant is suited to an activity, and Ainu marks the split by which element
		heads the word ‹speculative›.
	</p>
</S>
