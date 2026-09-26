/**
 * Table of contents for the reference grammar.
 *
 * GENERATED FILE — produced by scripts/gen-grammar.ts from toc-final.json.
 * Do not edit by hand; edit toc-final.json and re-run the script instead.
 *
 * Chapter numbers are derived from array order (1-based). Each chapter is a
 * Svelte component at `$lib/grammar/chapters/<slug>.svelte`. The two appendix
 * pages (abbreviations, references) are rendered from data modules instead.
 */

export interface ChapterMeta {
	slug: string;
	/** Full chapter title as shown on the page. */
	title: string;
	/** Shorter label for navigation, defaults to title. */
	short?: string;
	/** One-sentence summary for the table of contents. */
	summary: string;
}

export interface Part {
	title: string;
	chapters: ChapterMeta[];
}

export const parts: Part[] = [
	{
		title: "Part I — The Language and Its Setting",
		chapters: [
			{
				slug: "aims-scope-design-philosophy",
				title: "Aims, Scope, and Design Philosophy of This Grammar",
				summary: "The scope of the description, its dialect coverage, and how to read examples, citations, and evidence labels."
			},
			{
				slug: "typological-profile",
				title: "A Typological Profile of Hokkaido Ainu",
				summary: "Constituent order, person marking, possession, incorporation, and other principal structures of Hokkaido Ainu."
			},
			{
				slug: "ainu-people-homeland-history",
				title: "The Ainu People, Their Homeland, and History",
				summary: "The historical distribution of Ainu, the interpretation of its prehistory, and the social setting of the recorded language."
			},
			{
				slug: "sociolinguistic-situation-revitalization",
				title: "The Sociolinguistic Situation: Endangerment and Revitalization",
				summary: "Language shift, community recording and teaching, institutional support, and the use of historical materials in revitalization."
			},
			{
				slug: "genetic-position-macro-comparison",
				title: "The Genetic Position of Ainu: Isolate Status and Macro-Comparison Controversies",
				summary: "Ainu’s external classification, relationships among its varieties, and the evidence used in reconstruction and contact studies."
			},
			{
				slug: "history-of-description-research",
				title: "The History of Ainu Language Description and Previous Research",
				summary: "Early records, Ainu writers, dialect descriptions, and the development of grammatical research and published corpora."
			}
		]
	},
	{
		title: "Part II — Sources, Conventions, Glossing, and Orthography",
		chapters: [
			{
				slug: "written-sources-grammars-dictionaries",
				title: "Written Sources: Grammars, Dictionaries, and the Philological Record",
				summary: "The descriptive grammars, dictionaries, and early records used as evidence, with their dialect coverage and limitations."
			},
			{
				slug: "oral-literature-and-spoken-corpora",
				title: "The Oral-Literature Corpus and Spoken-Language Data",
				summary: "Oral-literature editions and recordings, their speakers and genres, and the limits of the surviving documentary record."
			},
			{
				slug: "dialect-sample-and-corpus-method",
				title: "The Dialect Sample and the Corpus-Quantification Method",
				summary: "Dialect attribution, the scope of comparisons, and the sampling choices needed to interpret corpus evidence."
			},
			{
				slug: "glossing-abbreviations-and-citation",
				title: "Interlinear Glossing, Abbreviations, and Citation Conventions",
				summary: "How to read interlinear examples, grammatical labels, dialect tags, citations, and evidence grades."
			},
			{
				slug: "latin-phonemic-transcription",
				title: "The Latin Phonemic Transcription",
				summary: "Latin letter values, accent and boundary marks, and differences among phonemic transcriptions."
			},
			{
				slug: "katakana-and-small-kana-codas",
				title: "Katakana Orthography and the Extended Small-Kana Codas",
				summary: "Katakana conventions for Ainu syllables, variation in final-consonant spelling, and the interpretation of older sources."
			},
			{
				slug: "cyrillic-and-multiscript-rendering",
				title: "Reading Ainu Across Writing Systems",
				summary: "How source spellings, pronunciation, and grammatical analysis relate when reading Ainu in different writing systems."
			},
			{
				slug: "historical-orthographies-and-the-batchelor-tradition",
				title: "Historical Orthographies and the Batchelor Tradition",
				summary: "Older Latin spelling conventions, the treatment of final r, and the interpretation of historical texts."
			},
			{
				slug: "orthographic-standardization-and-word-division",
				title: "Orthographic Standardization and the Word-Division Problem",
				summary: "Variation in Ainu writing, person-marker notation, word division, and the relationship between spelling and analysis."
			}
		]
	},
	{
		title: "Part III — Segmental Phonetics, Phonology, and Phonotactics",
		chapters: [
			{
				slug: "consonant-inventory",
				title: "The Consonant Inventory and Its Phonetic Realization",
				summary: "The consonant inventory, its positional realizations, and differences among speakers and descriptive analyses."
			},
			{
				slug: "vowel-inventory",
				title: "The Vowel Inventory and Vowel Realization",
				summary: "The five vowels, phonetic duration and devoicing, with Sakhalin vowel length as a separate comparison."
			},
			{
				slug: "s-palatalization",
				title: "/s/ and the s ~ š Palatalization Alternation",
				summary: "Palatalization of /s/ in syllable onsets, codas, and connected speech, with the dialect limits of each description."
			},
			{
				slug: "rhotic-r",
				title: "The Rhotic /r/ and Coda-r",
				summary: "Realizations of /r/, the vowel-like release of final /r/, and grammatical evidence for distinguishing final /r/ from /rV/."
			},
			{
				slug: "glottal-stop",
				title: "Glottal Stops and the Distribution of /h/",
				summary: "Glottal closure, competing phoneme and boundary analyses, and the distribution of /h/ in Hokkaido and Sakhalin."
			},
			{
				slug: "syllable-template",
				title: "Syllable Structure, Phonotactics, and Word-Edge Constraints",
				summary: "Open and closed syllables, permitted codas, resyllabification, and restrictions within roots and across boundaries."
			},
			{
				slug: "glides-w-y",
				title: "Glides, Vowel Hiatus, and the Diphthong Question",
				summary: "Final /y/ and /w/ as codas, diphthong terminology, and competing analyses of glides between vowels."
			}
		]
	},
	{
		title: "Part IV — Prosody and the Pitch-Accent System",
		chapters: [
			{
				slug: "pitch-accent-placement-rule",
				title: "The Pitch-Accent Placement Rule and the Accented/Accentless Dialect Split",
				summary: "Default accent placement, lexical exceptions, and the differences among Saru-type, Yakumo-type, and unaccented varieties."
			},
			{
				slug: "mora-syllable-accent-vs-tone-analysis",
				title: "The Prosodic Unit and the Accent-versus-Tone Analysis",
				summary: "Rising accent kernels, syllable weight, pitch contours, and the scope of phonological analyses across dialects."
			},
			{
				slug: "lexical-contrastive-accent-minimal-pairs",
				title: "Lexical/Contrastive Accent and Minimal Pairs",
				summary: "Published accent-only minimal pairs, lexical exceptions to default placement, and the limits of functional-load claims."
			},
			{
				slug: "accent-in-compounds-and-affixation",
				title: "Accent in Compounds and under Affixation and Cliticization",
				summary: "Accent retention and reassignment in compounds, derivatives, and person-marked forms, with lexical exceptions and competing structural analyses."
			},
			{
				slug: "phrasal-and-utterance-intonation",
				title: "Phrasal and Utterance Intonation",
				summary: "Saru, Shizunai, and Tokachi intonation descriptions, including rising and non-rising questions, exclamations, and phrase boundaries."
			}
		]
	},
	{
		title: "Part V — Morphophonology and Sandhi",
		chapters: [
			{
				slug: "coda-r-assimilation-sonorant-sandhi",
				title: "Assimilation and Cluster Simplification: Coda /r/, Nasals, and Clusters",
				summary: "Changes involving final /r/ and /n/, nasal place assimilation, particle-specific alternations, and the roles of pauses and sentence boundaries."
			},
			{
				slug: "glide-epenthesis-hiatus-resolution",
				title: "Glide Epenthesis and Vowel-Hiatus Resolution",
				summary: "Glide insertion, vowel weakening, glottal realization, and contraction, with their morphological conditions and dialect differences."
			},
			{
				slug: "citation-vs-combining-stem-shapes",
				title: "Citation Forms and Morphophonological Alternations",
				summary: "Final-consonant pronunciation, prefix contraction, possessive morphology, and lexical history, with separate conditions for each pattern."
			},
			{
				slug: "personal-affix-sandhi-connected-speech-reduction",
				title: "Person Markers: Contraction, Accent, and Suffix Boundaries",
				summary: "Dialect-specific person-prefix contraction, initial-vowel weakening, accent behavior, and pronunciation at person-suffix boundaries."
			},
			{
				slug: "reduplication-phonology-rule-interaction",
				title: "Reduplication and Phonological Alternations",
				summary: "Root, partial, and whole-stem reduplication, their lexical restrictions, and documented consonant and boundary effects."
			}
		]
	},
	{
		title: "Part VI — Word Classes and Nominal Morphology",
		chapters: [
			{
				slug: "word-class-inventory-and-diagnostics",
				title: "Word Classes and Their Diagnostics",
				summary: "The major classification schemes and their grammatical diagnostics, including person marking, dependence, modification, and disputed category boundaries."
			},
			{
				slug: "nominal-subclasses-and-bound-nouns",
				title: "Nominal Subclasses and Dependence",
				summary: "Common nouns, locative nouns, pronouns, and formal nouns, compared through possession, independence, modification, and grammatical location."
			},
			{
				slug: "formal-defective-nouns",
				title: "Formal Nouns and Nominalizing Constructions",
				summary: "Dependent nominal heads, their modifiers, and the competing analyses of relative, complement, and evidential uses."
			},
			{
				slug: "verbal-subclasses-taxonomy",
				title: "Verb Classes, Arguments, and Person Marking",
				summary: "Verb subclasses defined through person marking and argument structure, including zero-argument predicates, locative objects, copular complements, and derived higher-valency forms."
			},
			{
				slug: "no-adjective-class-property-verbs",
				title: "Property Predicates and the Adjective Analysis",
				summary: "The verbal morphology and syntax of property predicates, their state and change readings, and the modern and historical classification debates."
			},
			{
				slug: "nominal-derivation-diminutive-augmentative",
				title: "Diminutive and Affective Noun Formation",
				summary: "The suffix -po, lexicalized formations, regional okkaypo meanings, and historical Horobetsu kinship uses."
			},
			{
				slug: "noun-noun-compounding",
				title: "Nominal Compounds and Their Structure",
				summary: "Compound diagnostics, six documented formation patterns, nominal conversion, and lexicalization at the phrase boundary."
			},
			{
				slug: "deverbal-denominal-noun-derivation",
				title: "Noun Formation from Verbs and Nouns",
				summary: "Nominalizing forms, lexical person-shaped prefixes, conversion, and the relationship between lexical nouns and clause-level constructions."
			},
			{
				slug: "nominal-number-utar-transnumerality",
				title: "Nominal Number and Utar",
				summary: "Number-neutral nouns, plural and associative utar, lexical plurals, and source differences over animacy and possession."
			},
			{
				slug: "noun-phrase-structure",
				title: "Noun-Phrase Structure",
				summary: "Modifiers, demonstratives, numerals, locative expressions, possession, and coordination, with attributed differences in analysis."
			}
		]
	},
	{
		title: "Part VII — Possession and the Affiliative System",
		chapters: [
			{
				slug: "alienable-inalienable-split",
				title: "Possessive Constructions and Alienability",
				summary: "Possession with kor and affiliative nouns, lexical and dialect variation, and the limits of semantic classifications."
			},
			{
				slug: "concept-form-affiliative-form",
				title: "Concept, Affiliative, and Personal Forms",
				summary: "Possessive noun forms, short and long variants, person marking, and the interpretation of expressed and unspecified possessors."
			},
			{
				slug: "affiliative-suffix-morphophonology",
				title: "Affiliative Suffix Patterns",
				summary: "Phonological conditions, lexical suffix classes, exceptional forms, and attributed historical analyses of possessive morphology."
			},
			{
				slug: "adnominal-possession-double-marking",
				title: "Adnominal Possession and Double Marking",
				summary: "Possessor phrases, head marking, kor with affiliative nouns, classifier verbs, and nested possessive relations."
			},
			{
				slug: "external-possession-possessor-raising",
				title: "Possessors in Noun Incorporation",
				summary: "Possessor-to-subject incorporation, its person marking, and the different restrictions on object incorporation."
			},
			{
				slug: "kinship-honorific-possession",
				title: "Kinship, Address, and Possession",
				summary: "Lexical and dialect differences in kinship possession, reference and address, honorific fourth person, and narrative possession."
			}
		]
	},
	{
		title: "Part VIII — Pronouns, Demonstratives, Postpositions, and Numerals",
		chapters: [
			{
				slug: "independent-personal-pronouns",
				title: "Independent Personal Pronouns",
				summary: "Dialect-specific pronoun paradigms, emphasis and contrast, third-person expressions, and the boundary between pronouns and possessed group nouns."
			},
			{
				slug: "demonstratives-anaphora-definiteness",
				title: "Demonstratives and Reference",
				summary: "Saru demonstrative modifiers, spatial and discourse reference, formal-noun combinations, and regional differences."
			},
			{
				slug: "interrogative-pro-forms",
				title: "Interrogative and Indefinite Expressions",
				summary: "Question-word classes, their dialect forms and sentence patterns, and their relationship to indefinite expressions."
			},
			{
				slug: "relational-and-spatial-nouns",
				title: "Relational Nouns, Spatial Forms, and Quasi-Incorporation",
				summary: "Locative noun classes, person marking, basic and long forms, spatial meanings, and Satō’s quasi-incorporation analysis of or."
			},
			{
				slug: "postpositions-local-case-and-motion-events",
				title: "Place Particles and Motion Expressions",
				summary: "Location, direction, origin, area, and route constructions, their dialect differences, and their relationship to postposed adverbs and translative ne."
			},
			{
				slug: "vigesimal-numeral-system",
				title: "Numeral Forms and Counting Systems",
				summary: "Adnominal, nominal, and enumeration forms, vigesimal composition, overcounting, and regional decimal systems."
			},
			{
				slug: "numeral-classifiers-ordinals-and-quantifier-syntax",
				title: "Numeral Syntax, Ordinals, and Quantity",
				summary: "Numeral position and independent use, compound counts, classifier analyses, ordinal expressions, and the interaction of quantity with number."
			}
		]
	},
	{
		title: "Part IX — The Verb: Structure, Transitivity, and Verbal Number",
		chapters: [
			{
				slug: "verb-word-template",
				title: "The Verb Word and Its Boundaries",
				summary: "Source-specific derivational templates, argument structure, number morphology, person zones, and the distinction between a verb word and quasi-incorporation."
			},
			{
				slug: "transitivity-and-valence-classes",
				title: "Transitivity and Valency Classes",
				summary: "Argument frames, ambient and experienced states, locative objects, copular person marking, higher valency, and competing analyses of arity."
			},
			{
				slug: "suppletive-verbal-number",
				title: "Verbal Number and Stem Alternation",
				summary: "Lexical number pairs, participant and event number, dialect forms, additional pa and ci, and the effects of respect and narrative person."
			},
			{
				slug: "light-and-pro-verbs",
				title: "Ki, Support Constructions, and Pro-Verbs",
				summary: "Lexical, formal, assertive, poetic, and referential uses of ki, with their person-marking patterns and dialect differences."
			},
			{
				slug: "denominal-deverbal-verb-derivation",
				title: "Verb Formation from Nouns and Verbal Roots",
				summary: "Lexicalized nominal formations, bound roots, transitivity pairs, different uses of kar, and intensive no."
			},
			{
				slug: "adverbializer-no",
				title: "Adverbial and Intensive No",
				summary: "Manner formation, lexical restrictions, unsuffixed adverbs, clause-linking no, and distinct intensive verbal forms."
			}
		]
	},
	{
		title: "Part X — The Personal-Affix System and Alignment",
		chapters: [
			{
				slug: "person-marking-architecture",
				title: "Person Marking and Argument Roles",
				summary: "Basic S, A, and O paradigms, person-conditioned alignment, interaction forms, zero third person, and the morphological status of person markers."
			},
			{
				slug: "first-second-person-singular-affixes",
				title: "First- and Second-Person Singular Affixes (ku=/en=, e=/e=)",
				summary: "The SAP-singular core: 1sg subjective ku= vs objective en=, and 2sg e= (syncretic across A/S/O), with their morphophonology and distribution."
			},
			{
				slug: "first-person-plural-and-clusivity",
				title: "First-Person Plural and the Clusivity Question (ci=/=as, un=)",
				summary: "The exclusive 1pl set — subjective ci=/=as and objective un= — and the contested inclusive/exclusive opposition with the indefinite person."
			},
			{
				slug: "eci-portmanteau-and-second-plural",
				title: "The eci= Portmanteau (1A→2O) and Second-Person Plural Syncretism",
				summary: "The cumulative eci= exponent encoding a 1sg subject acting on a 2nd-person object, and its syncretism with the 2pl subject/object marker eci=."
			},
			{
				slug: "object-indexing-monotransitive",
				title: "Object Indexing: Monotransitive and Ditransitive Clauses",
				summary: "How transitive and three-place verbs index their object(s) via the objective affix set, the subject/object indexing asymmetries, and the secundative-vs-indirective alignment of ditransitive indexing."
			},
			{
				slug: "indefinite-fourth-person-paradigm",
				title: "The Indefinite/Fourth Person: Forms, Reference, and Agent-Defocusing",
				summary: "The morphology of the indefinite person (a=/an=/=an, i=) and its referential range — generic 'one', inclusive 'we', definite fourth-person reference — and its agent-defocusing 'passive'/impersonal use with the does-Ainu-have-a-passive debate."
			},
			{
				slug: "fourth-person-honorific",
				title: "Honorific and Logophoric Uses of the Fourth Person",
				summary: "The indefinite/fourth person used to refer respectfully to esteemed humans and kamuy, and as the self-reference device of the first-person narrator in oral literature (the hero's 'I'); the affix-paradigm facts of these uses, with full discourse deployment in Part XIX."
			},
			{
				slug: "personal-affix-template-and-ordering",
				title: "The Personal-Affix Template: Position Classes and Affix Ordering",
				summary: "The ordering of subject and object personal affixes relative to each other, to valency prefixes, and to the verb stem — the personal-affix portion of the verb template."
			},
			{
				slug: "person-number-interactions",
				title: "Person–Number Interactions and Plural Agreement",
				summary: "How the personal affixes interact with number marking — the -pa plural, the =as suffix, and agreement resolution across A, S, and O."
			},
			{
				slug: "alignment-split-intransitive",
				title: "The Split-Intransitive (Active–Stative) Core",
				summary: "The foundational alignment fact: intransitive subjects split between the agentive (A-set) and patientive (O-set) exponents, and the Split-S vs Fluid-S question."
			},
			{
				slug: "alignment-hierarchical-and-the-debate",
				title: "Tripartite, Nominative-Accusative, and the Central Alignment Debate",
				summary: "How the 1sg and indefinite cells show distinct A/S/O exponents (tripartite) against the accusative readings of other cells, and the system-wide synthesis — hierarchical/inverse vs active-stative vs tripartite — including ditransitive and clause-type alignment."
			}
		]
	},
	{
		title: "Part XI — Valency, Voice, and Noun Incorporation",
		chapters: [
			{
				slug: "valency-voice-overview",
				title: "Valency, Voice, and Noun Incorporation: Overview",
				summary: "The architecture of the valency-changing system: the inventory of operations (causatives, the e-/ko-/o- applicatives, antipassive, reflexive, reciprocal, middle/anticausative, and noun incorporation) and how they compose, stack, and order on the verb."
			},
			{
				slug: "causative-morphological-re-e-te",
				title: "The Morphological Causative -re / -e / -te",
				summary: "The productive transitivizing causative suffix and its stem-conditioned allomorphy -re/-e/-te, encoding direct/manipulative causation."
			},
			{
				slug: "transitivizer-ka-valency-pairs",
				title: "The Transitivizer -ka and Lexical Valency Pairs",
				summary: "The transitivizer/causative -ka on stative bases, and the system of labile and suppletive causative–inchoative verb pairs."
			},
			{
				slug: "causee-marking-ditransitive-double-causative",
				title: "Causee Marking, Ditransitive and Double Causatives",
				summary: "How causativization of transitives builds three-place frames, the marking/indexing of the causee, and double causatives."
			},
			{
				slug: "permissive-sociative-causative-yar",
				title: "The Permissive/Sociative Causative -yar",
				summary: "The indirect/permissive causative -yar 'let/have someone do' and the directive-vs-sociative split it forms with -re/-e/-te."
			},
			{
				slug: "applicative-system-overview",
				title: "The Applicative System: Overview and the Preverb-vs-Applicative Debate",
				summary: "Bugaeva's reanalysis of e-/ko-/o- as applicatives promoting obliques to object, with the diagnostics and the terminological controversy."
			},
			{
				slug: "applicative-e",
				title: "The e- Applicative",
				summary: "The e- applicative promoting content/theme, instrument, reason and 'about/concerning' obliques to object."
			},
			{
				slug: "applicative-ko",
				title: "The ko- Applicative",
				summary: "The ko- applicative promoting goal/recipient, comitative and adversative ('to/with/against') obliques to object."
			},
			{
				slug: "applicative-o",
				title: "The o- Applicative",
				summary: "The o- applicative promoting locative/source/goal ('at, from, into') obliques, the spatial applicative, and allied spatial valency operators."
			},
			{
				slug: "applicative-stacking-relativization-feeding",
				title: "Applicative Stacking, Ordering, and the Feeding of Relativization",
				summary: "How multiple applicatives stack and order, and how applicative promotion extends the relativization accessibility hierarchy and feeds incorporation."
			},
			{
				slug: "antipassive-detransitive-i",
				title: "The Antipassive / Detransitive i-",
				summary: "The prefix i- 'something/someone' absorbing the object and detransitivizing, with the antipassive-vs-incorporation debate and its origin."
			},
			{
				slug: "reflexive-yay",
				title: "The Reflexive yay-",
				summary: "The reflexive prefix yay- 'self', its A/O coreference and detransitivization, and its autobenefactive/emotive extensions."
			},
			{
				slug: "reflexive-possessive-si",
				title: "The Reflexive-Possessive si- and the yay-/si- Division",
				summary: "The prefix si- 'oneself / one's own / by itself' and its division of labor with yay- in argument identification."
			},
			{
				slug: "reciprocal-u",
				title: "The Reciprocal u-",
				summary: "The reciprocal prefix u- 'each other/mutually', including quasi-possessive incorporation, the formation of aeuitaknup, and reflexive-possessive parallels."
			},
			{
				slug: "middle-anticausative-passive",
				title: "Middle, Anticausative, and the (Non-)Passive Question",
				summary: "Middle/spontaneous and anticausative uses of si-/yay- and detransitives, and whether the a=/an= indefinite-agent construction constitutes a passive."
			},
			{
				slug: "noun-incorporation-object",
				title: "Object (Patient) Noun Incorporation",
				summary: "Productive object incorporation (N+V → intransitive), its diagnostics, and its interaction with the antipassive and valency prefixes."
			},
			{
				slug: "noun-incorporation-subject-possessor-stranding",
				title: "Subject Incorporation and Possessor-Stranding",
				summary: "Subject incorporation with unaccusative verbs (sik-pirka 'eyes-be.good') and the possessor-stranding pattern — the classic Type IV test case."
			},
			{
				slug: "noun-incorporation-oblique-polysynthesis-debate",
				title: "Incorporation, Quasi-Incorporation, and Word Structure",
				summary: "Applicative-related incorporation, affix order, Tamura’s 連他動詞, Satō’s lexical quasi-incorporation, Nakagawa’s one-word and two-word forms, and the theoretical debates."
			},
			{
				slug: "adverbial-incorporation",
				title: "Adverbial (Manner) Incorporation and the Property-Verb Question",
				summary: "Manner/depictive verb-compounding (pirka-resu 'raise well'), its reanalysis as property-verb rather than adverb incorporation, its arity-neutral interaction with the applicatives, and its typological placement."
			}
		]
	},
	{
		title: "Part XII — The Simple Clause and Nonverbal Predication",
		chapters: [
			{
				slug: "constituent-order-head-final",
				title: "Basic Constituent Order and Head-Final Syntax",
				summary: "Rigid verb-final (S)OV clause order and pervasive head-finality, scored against Greenbergian word-order correlations."
			},
			{
				slug: "argument-realization-indexing",
				title: "Argument Realization: Affix Indexing and Free NP Order",
				summary: "Grammatical relations encoded by bound person affixes rather than case or fixed position, with free, pragmatically governed NP order."
			},
			{
				slug: "nonconfigurationality-pronominal-argument",
				title: "Pro-Drop, (Non)configurationality, and the Pronominal-Argument Debate",
				summary: "Argument ellipsis and null anaphora, and whether the bound affixes are the true arguments (Jelinek/Baker) — Ainu on the configurationality cline."
			},
			{
				slug: "oblique-adjunct-verbless-clauses",
				title: "Oblique and Adjunct Syntax; Verbless and Presentational Clauses",
				summary: "The syntax of postpositional/relational-noun obliques and adjuncts, plus minor verbless and presentational clause types."
			},
			{
				slug: "copula-ne-predicate-nominals",
				title: "The Copula ne and Predicate-Nominal Clauses",
				summary: "Equational and class-membership predication with the copula ne, its person indexing, and its disputed verb-vs-particle status."
			},
			{
				slug: "existential-locational-an-oka",
				title: "Existential and Locational Clauses (an / oka)",
				summary: "The existential/locational predicates an (SG) and oka (PL), their number suppletion, presentational use, and the isam negative."
			},
			{
				slug: "predicative-possession-clauses",
				title: "Predicative Possession: kor, Existential Possession, and isam",
				summary: "Clause-level 'have/belong' predication via transitive kor, existential-based possession, and negative isam, plus the noun-level affiliative-vs-kor choice for alienable nouns; placed on Stassen's predicative-possession typology and interfaced with the nominal affiliative system (Part VII)."
			},
			{
				slug: "property-concept-predication",
				title: "Property-Concept (Adjectival) Predication without a Copula",
				summary: "Predicate 'adjectives' as intransitive stative verbs taking person indexing — the clause-level consequence of the no-adjective-class thesis."
			},
			{
				slug: "nonverbal-predicate-tam-negation",
				title: "TAM, Evidentiality, and Negation on Nonverbal Predicates",
				summary: "How copular and other nonverbal predicates host the full sentence-final aspect, evidential, and negation apparatus through ne."
			}
		]
	},
	{
		title: "Part XIII — Nominalization, Relativization, and Complementation",
		chapters: [
			{
				slug: "nominalization-p-pe",
				title: "The Nominalizers -p/-pe and -i/-hi (Participant, Event, Place, Fact)",
				summary: "The participant nominalizer -p/-pe ('the one that') and the abstract/event nominalizer -i/-hi ('the V-ing / place / time / fact that'): argument-role readings, the headless-relative continuum, internal clause TAM/person, and the insubordination of nominalized clauses."
			},
			{
				slug: "lexical-head-formal-noun-nominalization",
				title: "Lexical-Head and Formal-Noun Nominalization (kur, uske, ruwe/hawe/siri/humi)",
				summary: "Nominalization headed by lexical nouns (kur 'person', uske/usi 'place', ike) and by the grammaticalized formal-noun set (ruwe, hawe, siri, humi, hi, pe) acting as clause-nominalizing heads."
			},
			{
				slug: "prenominal-gap-relative-clauses",
				title: "Relative Clauses: The Gap Strategy and the Accessibility Hierarchy",
				summary: "The head-final, relativizer-less gap relative clause and the Keenan–Comrie accessibility hierarchy — subject/object relativize directly, obliques only after e-/ko-/o- applicative promotion — plus possessor, locative/temporal, and standard-of-comparison relativization."
			},
			{
				slug: "headless-internally-headed-noun-modifying-clauses",
				title: "Headless, Internally-Headed, and Noun-Modifying Clause Analyses",
				summary: "The analytic question of whether Ainu adnominal clauses are externally-headed RCs, headless/internally-headed relatives, or a unified 'general noun-modifying clause' type."
			},
			{
				slug: "quotative-complementation-sekor",
				title: "Quotative Complementation and Reported Speech (sekor)",
				summary: "The dominant complementation strategy: framing a (direct-form) clause with the quotative sekor under verbs of speech, cognition, and intention."
			},
			{
				slug: "nominalized-complements-control-raising",
				title: "Nominalized Complements and Control/Raising",
				summary: "Complement clauses formed by nominalization (hi, -i, ruwe) under perception, cognition, and evaluative predicates, and the control/raising diagnostics of same-subject complex predicates."
			},
			{
				slug: "kuni-complementizer-purpose-complements",
				title: "The kuni Complementizer and Purpose Complements",
				summary: "The irrealis complementizer/nominalizer kuni and the purposive kus(u) / kuni ne, marking future-oriented complements of manipulation, desire, and purpose."
			}
		]
	},
	{
		title: "Part XIV — Tense, Aspect, Mood, and Modality",
		chapters: [
			{
				slug: "tam-overview",
				title: "Tense, Aspect, Mood, and Modality: Overview",
				summary: "The architecture of the TAM/modality system and how its pieces fit: tenselessness, the existential-aspect core, the phasal/iterative/habitual periphery, the directive/optative moods, and the modal field, with the boundaries to evidentiality and negation."
			},
			{
				slug: "tenselessness-and-time-reference",
				title: "Tenselessness and the Time-Reference System",
				summary: "Hokkaido Ainu lacks a grammatical tense category; temporal location is inferred from aspect, discourse anchoring, and temporal adverbs."
			},
			{
				slug: "existential-aspect-an-oka",
				title: "The Existential-Aspect System: kor an Progressive and wa an Resultative-Perfect",
				summary: "The existential verbs an (SG)/oka (PL) recruited as aspectual auxiliaries unifying kor an and wa an under one 'existential aspect': the progressive/continuative kor an and the resultative-perfect wa an, with number agreement, aktionsart conditioning, and grammaticalization."
			},
			{
				slug: "perfective-anterior-a",
				title: "The Perfective/Anterior Particle a (a, a…a, aan)",
				summary: "Postverbal a marks completion and anteriority ('already, have V-ed'), with reduplicated a…a and the anterior-stative aan."
			},
			{
				slug: "continuative-siri-siran-kane-an",
				title: "The 'Appearance' Continuative: siran, siri…, and kane an",
				summary: "siri/siran-based forms express durative, ongoing situations framed as observable appearance."
			},
			{
				slug: "phasal-iterative-habitual-aspect",
				title: "Phasal, Iterative, and Habitual Aspect",
				summary: "Inceptive and terminative phasal aspect via auxiliary verbs, plus iterative and habitual marking."
			},
			{
				slug: "imperative-and-prohibitive",
				title: "Imperative and Prohibitive (Directive Mood)",
				summary: "Bare-stem imperatives, the -yan plural/polite imperative, and the iteki prohibitive form one directive-mood system."
			},
			{
				slug: "hortative-and-optative",
				title: "Hortative, Optative, and Cohortative",
				summary: "First-person hortative/cohortative built on =an plus clause-final particles, alongside optative and wish constructions."
			},
			{
				slug: "desiderative-rusuy",
				title: "The Desiderative rusuy",
				summary: "Postverbal rusuy expresses 'want to' and desire, raising the verb-vs-auxiliary question central to the part."
			},
			{
				slug: "abilitative-easkay-eaykap",
				title: "Abilitative easkay / eaykap (Ability and Possibility)",
				summary: "easkay 'be able to' and its lexicalized negative counterpart eaykap 'cannot' encode root ability and possibility."
			},
			{
				slug: "deontic-necessity",
				title: "Deontic Necessity and Obligation (kuni ne, kus ne)",
				summary: "Necessity and obligation are expressed periphrastically via nominalized kuni ne / kunine and kus ne."
			},
			{
				slug: "epistemic-irrealis-modality",
				title: "Epistemic Modality, Dubitative, Intentive, and Irrealis",
				summary: "Probability nankor, the dubitative ya, intentive kusu ne, and counterfactual/irrealis interactions, plus the modal–evidential boundary."
			}
		]
	},
	{
		title: "Part XV — Evidentiality and Mirativity",
		chapters: [
			{
				slug: "evidential-schema-overview",
				title: "The Nominalization-plus-Copula Evidential Schema",
				summary: "The architecture of the Ainu evidential system: a clause-nominalizing formal noun (ruwe/siri/hawe/humi) plus the copula ne/an encodes the speaker's source of information."
			},
			{
				slug: "ruwe-ne-inferential",
				title: "ruwe ne — the Inferential / Visual-Trace Evidential",
				summary: "The default assertive-evidential ruwe ne ('it is the trace/fact that'), marking inference from evidence or established fact, the most frequent and most grammaticalized term of the paradigm."
			},
			{
				slug: "siri-ne-situational",
				title: "siri ne — the Direct-Perception / Situational Evidential",
				summary: "siri ne ('it is the appearance/scene that'), marking directly observed situations and visible states, with a close interface to the siran situational-continuative and a mirative lean."
			},
			{
				slug: "hawe-ne-reportative",
				title: "hawe ne — the Reportative / Hearsay Evidential",
				summary: "hawe ne ('it is the voice/report that'), marking information acquired through speech or hearsay, distinct from but adjacent to the sekor quotative and reported-discourse system."
			},
			{
				slug: "humi-ne-sensory",
				title: "humi ne — the Non-Visual Sensory Evidential",
				summary: "humi ne ('it is the sound/feeling that'), marking evidence from non-visual senses — non-verbal sound and bodily/internal sensation — and inference from such cues."
			},
			{
				slug: "mirativity-scope-grammaticalization",
				title: "Mirativity, Evidential Scope, and Grammaticalization to Sentence-Final Particles",
				summary: "System-level interactions: the evidential-to-mirative extension, evidential stacking and scope over negation and modality, aspect/perfect-based evidential strategies, and the cline from formal noun to sentence-final particle."
			}
		]
	},
	{
		title: "Part XVI — Negation",
		chapters: [
			{
				slug: "negation-somo-standard-clausal",
				title: "Standard Clausal Negation with somo",
				summary: "The preverbal standard negator somo: its position, scope, periphrastic somo ki construction, and placement in symmetric/asymmetric negation typology."
			},
			{
				slug: "negation-existential-possessive-isam",
				title: "Negative Existential and Possessive: isam",
				summary: "isam as the suppletive negative counterpart of the existentials an/oka, its 'not have' possessive use, and the privative sak."
			},
			{
				slug: "negation-ability-cognition-predicates",
				title: "Negative Predicates of Ability and Cognition",
				summary: "Lexically suppletive negative modal/cognition predicates — eaykap 'cannot', eramiskari 'not know how/never', erampewtek 'not understand' — versus analytic somo negation."
			},
			{
				slug: "negation-polarity-items-scope",
				title: "Negative-Polarity Indefinites and the Scope of Negation",
				summary: "The ka-indefinite/NPI series under somo, negative concord, constituent vs clausal negation, and the negation of nominal predicates (somo ... ne)."
			},
			{
				slug: "negation-prohibitive-iteki",
				title: "The Prohibitive Subsystem: iteki and Negative Directives",
				summary: "The dedicated prohibitive iteki, its asymmetry with declarative negation, apprehensive 'lest' uses, and links to the imperative/hortative system."
			}
		]
	},
	{
		title: "Part XVII — Clause Linkage and Adverbial Subordination",
		chapters: [
			{
				slug: "clause-linkage-overview",
				title: "Clause Linkage in Ainu: Typology and Inventory",
				summary: "Framing chapter mapping Ainu clause combining onto the coordination–cosubordination–subordination continuum and laying out the full inventory of clause-linking morphemes."
			},
			{
				slug: "sequential-wa-and-clause-chaining",
				title: "Sequential wa and Clause Chaining",
				summary: "The default connective wa 'and (then)', multi-clause event chains, and the culminative linker aine, disambiguated from the homophonous resultative/perfect wa."
			},
			{
				slug: "hine-akusu-switch-reference",
				title: "The hine/akusu Contrast and Switch-Reference-Like Linkage",
				summary: "The sequential connectives hine and akusu and the long-running debate over whether they encode same-/different-subject (switch-reference) or discourse (un)expectedness."
			},
			{
				slug: "simultaneous-kor-clauses",
				title: "Simultaneous kor 'while' and Overlapping-Event Clauses",
				summary: "The conjunctive particle kor marking temporal overlap, distinguished from the homophonous possessive verb kor and the progressive auxiliary kor an."
			},
			{
				slug: "conditional-temporal-concessive-clauses",
				title: "Conditional, Temporal, and Concessive Clauses",
				summary: "The yak(un)/ciki conditionals, their temporal 'when' uses and realis/irrealis split, and the morphologically related concessives yakka 'even if' and korka 'although'."
			},
			{
				slug: "causal-and-purpose-clauses",
				title: "Causal and Purpose Clauses (kusu)",
				summary: "The polyfunctional kusu/gusu marking reason 'because' and purpose 'in order to', its formal-noun origin, and its division of labour with the kuni purpose complementizer."
			},
			{
				slug: "manner-and-degree-adverbial-clauses",
				title: "Manner and Degree Adverbial Clauses",
				summary: "Manner clauses, the clause-linking -no adverbializer, and degree/extent clauses (pakno 'to the extent that'), framed against Ainu comparison strategies."
			},
			{
				slug: "tail-head-linkage-and-narrative-cohesion",
				title: "Tail-Head Linkage and Narrative Clause Cohesion",
				summary: "Recapitulative tail-head linkage, the discourse connective orowa(no) 'and then (from there)', and the anaphoric clause-linkage that structures Ainu oral narrative."
			}
		]
	},
	{
		title: "Part XVIII — Information Structure, Sentence-Final Particles, and Minor Classes",
		chapters: [
			{
				slug: "reference-tracking",
				title: "Reference Tracking and Argument Continuity",
				summary: "How participants are tracked across clauses: zero anaphora and pro-drop, person marking, the indefinite/fourth person as a tracking device, demonstrative/anaphoric reference, and switch-reference-like clause linkage (hine/akusu), drawn together as one system."
			},
			{
				slug: "topic-marking-anakne",
				title: "Topic and Focus Marking: anak(ne), patek, and ka",
				summary: "The topic/contrastive-topic particle anak~anakne and the focus-sensitive particles patek 'only' and ka 'also/even': thematic vs contrastive topic, restrictive/additive/scalar focus, and the NPI use of ka."
			},
			{
				slug: "cleft-nominalization-focus",
				title: "Cleft, Pseudocleft, and Nominalization-Based Focus",
				summary: "Identificational and predicate-focus constructions built on nominalization plus the copula (…p ne, …hi ne) and their relation to the evidential schema."
			},
			{
				slug: "pragmatic-word-order-dislocation",
				title: "Pragmatic Word-Order Permutation, Dislocation, and Argument Ellipsis",
				summary: "Departures from basic verb-final order for information-structural ends — scrambling, left/right dislocation, afterthought, and given-argument ellipsis."
			},
			{
				slug: "sentence-final-particles-illocutionary-force",
				title: "The Sentence-Final Particle System and Illocutionary Force",
				summary: "The inventory of clause-final particles (na, wa, ya, nankor, …) encoding assertion, emphasis, confirmation, and softening, and their grammaticalization from formal nouns."
			},
			{
				slug: "interrogative-strategies-question-particles",
				title: "Interrogative Strategies, Question Particles, and Evidential Questions",
				summary: "Polar and content questions — the particles ya/he, in-situ wh-words, biased/confirmational questions — integrated with the evidential interrogative/confirmational paradigm (ruwe un?, hawe ya?, siri ya?) and its evidence-source 'flip' from speaker to addressee."
			},
			{
				slug: "gendered-register-speech",
				title: "Gendered Speech and Pragmatic Registers",
				summary: "Sex-of-speaker and register differences in final particles, interjections, and politeness, and the documentation gaps surrounding them."
			},
			{
				slug: "adverbs-degree-comparison",
				title: "Adverbs, Degree Words, and Comparison Strategies",
				summary: "The adverb word-class, the -no adverbializer, intensifiers, and the periphrastic encoding of comparison (Ainu has no dedicated comparative)."
			},
			{
				slug: "conjunctions-discourse-connectives",
				title: "Conjunctions and Discourse Connectives",
				summary: "NP-coordinating conjunctions (newa, tura) and clause-edge discourse connectives (orowano, nah …) as a minor class, distinct from the converbal clause-linkers of Part XVII."
			},
			{
				slug: "interjections-ideophones-sound-symbolism",
				title: "Interjections, Response Words, Ideophones, and Sound Symbolism",
				summary: "The expressive minor classes — interjections and conversational formulae, ideophones/mimetics, and size/intensity sound-symbolic gradation."
			}
		]
	},
	{
		title: "Part XIX — Discourse and the Grammar of Oral Literature",
		chapters: [
			{
				slug: "oral-literature-genre-taxonomy",
				title: "The Oral-Literature Genre System and Its Grammatical Signatures",
				summary: "The taxonomy of Ainu oral-narrative genres and the bundle of grammatical features that indexes each one."
			},
			{
				slug: "logophoric-narration-and-reported-discourse",
				title: "First-Person Narration, the Logophoric Fourth Person, and Reported Discourse",
				summary: "The grammaticalized narrator viewpoint in sung epic and the logophoric/reported-speech system as deployed across genres."
			},
			{
				slug: "sakehe-refrain-and-sung-verse-structure",
				title: "The Sakehe Refrain, Verse Meter, and the Structure of Sung Verse",
				summary: "The sakehe burden and the metrical/structural organization of sung genres as performance grammar: refrain types and placement, verse-line segmentation and syllable/mora-count meter, and melodic vs linguistic pitch (proto-accent reconstruction in Part XX)."
			},
			{
				slug: "parallelism-couplets-and-word-pairs",
				title: "Parallelism, Couplets, and Word-Pair Doublets",
				summary: "Syntactic-semantic parallelism, the verse couplet, and lexical doublets analyzed as structural rhetoric rather than mere style."
			},
			{
				slug: "poetic-archaic-elevated-register",
				title: "The Elevated/Poetic Register: Archaic Morphology and Formulaic Diction",
				summary: "The grammar and lexicon of the elevated (雅語) register — archaic forms, verse-restricted morphology, and fixed formulae."
			},
			{
				slug: "honorific-ritual-and-taboo-registers",
				title: "Honorific, Ritual, and Taboo Registers",
				summary: "Referent/addressee honorification, the language of prayer, and hunting/taboo avoidance speech as register-specific grammar."
			},
			{
				slug: "narrative-tam-evidential-patterning-by-genre",
				title: "Narrative TAM and Evidential Patterning by Genre",
				summary: "Genre-quantified distribution of tense-aspect and the evidential clause-final system in connected narrative discourse."
			}
		]
	},
	{
		title: "Part XX — Diachrony, Reconstruction, and Dialectology",
		chapters: [
			{
				slug: "proto-ainu-segmental-reconstruction",
				title: "Proto-Ainu Reconstruction: Segments and Accent Classes",
				summary: "Reconstruction of the Proto-Ainu consonant/vowel inventory and accent classes, the correspondence sets to modern Hokkaido reflexes, Shiratori's *ia revision of the palatalization account, the accented/accentless split, and the Sakhalin length to Hokkaido pitch correspondence."
			},
			{
				slug: "final-h-history-and-sakhalin-length-reflex",
				title: "The Final-h Problem and Its Sakhalin Vowel-Length Reflex",
				summary: "The diachrony of word-final and coda -h, the Hokkaido final-h controversy, and its systematic correspondence to phonemic vowel length in Sakhalin Ainu."
			},
			{
				slug: "internal-reconstruction-and-grammaticalization-pathways",
				title: "Internal Reconstruction and Grammaticalization Pathways",
				summary: "Internal reconstruction from synchronic morphophonemic alternations, together with the major grammaticalization clines that feed the modern grammar."
			},
			{
				slug: "hokkaido-dialect-classification-and-dialectometry",
				title: "Hokkaido Dialect Classification and Dialectometry",
				summary: "The internal dialect divisions of Hokkaido Ainu, the classification debate, and the new statistical/dialectometric reanalyses."
			},
			{
				slug: "hokkaido-phonological-microvariation",
				title: "Hokkaido Dialect Microvariation: Phonology and Morphosyntax",
				summary: "Inter-dialectal variation within Hokkaido in both phonology (s~š, coda treatment, accent-class membership) and morphosyntax (personal-affix forms, third-plural marking, plural strategies, evidential/causative inventories)."
			},
			{
				slug: "hokkaido-lexical-dialectology-and-the-dialect-atlas",
				title: "Lexical Dialectology and the Dialect Atlas",
				summary: "Lexical microvariation across Hokkaido, the comparative dictionaries and Swadesh-style datasets, and the dialect atlas underpinning classification."
			},
			{
				slug: "sakhalin-and-kuril-ainu-contrast",
				title: "Sakhalin and Kuril Ainu: The External Comparison",
				summary: "Systematic contrast of Hokkaido with Sakhalin (Enciw) Ainu and the fragmentary Kuril record, framing the dialect-vs-language question."
			}
		]
	},
	{
		title: "Part XXI — Language Contact and the Lexicon",
		chapters: [
			{
				slug: "japanese-loanwords-in-ainu",
				title: "Japanese Loanwords and Their Phonological Adaptation",
				summary: "Lexical borrowing from Japanese — chronological strata, semantic domains, and numeral borrowing over the vigesimal base — together with the phonological nativization of loans (coda/cluster repair, segment mapping, accent assignment) as live evidence for the synchronic phonotactic grammar."
			},
			{
				slug: "ainu-loanwords-and-toponymy-in-japanese",
				title: "Ainu Loanwords and Toponymy in Japanese",
				summary: "Ainu's imprint on Japanese — animal/fish/plant loanwords in standard and northern-dialect Japanese, and the Ainu (substrate) toponymy of Hokkaido and northern Honshu."
			},
			{
				slug: "northern-contact-nivkh-tungusic-manchu",
				title: "Northern Contact: Nivkh, Tungusic, and Manchu",
				summary: "The Sakhalin/Amur contact zone — Nivkh and Tungusic (Uilta/Orok, Nanai)/Manchu lexical and structural contact, with Sakhalin Ainu as the principal locus."
			},
			{
				slug: "macro-comparison-and-deep-contact-controversies",
				title: "Macro-Comparison and Deep-Contact Controversies",
				summary: "A critical, method-driven survey of proposed external genetic relationships and deep-contact scenarios for Ainu, framed by borrowing-scale and areal typology."
			},
			{
				slug: "lexical-semantic-fields-synopsis",
				title: "Synopsis of Lexical-Semantic Fields",
				summary: "A field-by-field synopsis of the Ainu lexicon — its semantic organization, the classified-dictionary tradition, and culturally salient vocabulary domains."
			}
		]
	},
	{
		title: "Part XXII — Glossed Texts",
		chapters: [
			{
				slug: "uwepeker-prose-tale",
				title: "A Glossed Uwepeker (Prose Folktale)",
				summary: "A complete uwepeker prose folktale presented in four-tier interlinear gloss with running grammatical commentary cross-referenced clause-by-clause to the analytic chapters."
			},
			{
				slug: "heroic-and-divine-verse",
				title: "Glossed Verse: A Yukar Heroic Epic and a Kamuy Yukar God-Song",
				summary: "Two glossed verse texts — a yukar heroic-epic passage and a kamuy yukar divine self-narration with sakehe refrain — set side by side with comparative commentary on meter, refrain, and the first-person/logophoric narrator."
			},
			{
				slug: "inonno-itak-ritual-prayer",
				title: "A Glossed Inonno-itak (Ritual Prayer)",
				summary: "A ritual prayer (inonno-itak) text glossed and annotated, showcasing the elevated/honorific register, formulaic parallelism, and direct benedictive address to the kamuy."
			},
			{
				slug: "everyday-conversation-text",
				title: "A Glossed Everyday-Conversation Text",
				summary: "A passage of recorded everyday conversation glossed and annotated to illustrate spontaneous spoken syntax, sentence-final particles, and connected-speech reduction."
			},
			{
				slug: "sakhalin-contrast-text",
				title: "A Glossed Sakhalin (Enciw) Text with Hokkaido Contrast",
				summary: "A Sakhalin Ainu text glossed and annotated against Hokkaido norms, foregrounding phonemic vowel length, the final-h reflex, and divergent person, number, and negation morphology."
			}
		]
	},
	{
		title: "Part XXIII — Reference Apparatus (Back Matter)",
		chapters: [
			{
				slug: "glossary-grammatical-terms",
				title: "Glossary of Grammatical Terms",
				summary: "An alphabetical, validated glossary of the grammatical terminology used throughout the grammar, with trilingual equivalents and cross-references to the chapters that define each term."
			},
			{
				slug: "abbreviations-glossing-symbols",
				title: "Abbreviations and Glossing-Symbol Conventions",
				summary: "The tables of interlinear-gloss abbreviations, morpheme-boundary symbols, and notation conventions used in the grammar, with a concordance reconciling divergent conventions across the source literature."
			},
			{
				slug: "consolidated-references-bibliography",
				title: "Consolidated References and Bibliography",
				summary: "The unified, type-classified bibliography of all grammars, articles, text editions, and dictionaries consulted, with a critical apparatus flagging key works not directly available."
			},
			{
				slug: "index-of-subjects",
				title: "Index of Subjects",
				summary: "An alphabetical topic and concept index keyed to chapter and section, with a parallel typological-feature sub-index for cross-linguistic look-up."
			},
			{
				slug: "index-of-grammatical-morphemes",
				title: "Index of Grammatical Morphemes and Affixes",
				summary: "An exhaustive finding list of every bound morpheme, clitic, and grammatical particle, organized by form with gloss, class, dialect variants, and section reference, doubling as a reverse-lookup grammar dictionary."
			},
			{
				slug: "index-of-examples-sources-dialects",
				title: "Index of Cited Examples, Source Texts, and Dialects",
				summary: "A citation index of every quoted example by source edition and locus, organized further by genre, narrator/transcriber, and dialect, cross-referenced to the glossed-texts corpus."
			}
		]
	}
];

/** Unnumbered front-matter chapters; chapterNumber() yields 0 for these. */
const FRONT_MATTER = new Set<string>([]);

const allChapters: ChapterMeta[] = parts.flatMap((p) => p.chapters);

/**
 * The numbered chapters, in order; array index + 1 is the chapter number.
 * Front matter is excluded so that adding it never renumbers anything.
 */
export const chapters: ChapterMeta[] = allChapters.filter((c) => !FRONT_MATTER.has(c.slug));

export function chapterNumber(slug: string): number {
	return chapters.findIndex((c) => c.slug === slug) + 1;
}

export function chapterBySlug(slug: string): ChapterMeta | undefined {
	return allChapters.find((c) => c.slug === slug);
}

/** Back-matter pages rendered from data rather than chapter files. */
export const appendices = [
	{ slug: 'abbreviations', title: 'Abbreviations and conventions' },
	{ slug: 'references', title: 'References' }
] as const;
