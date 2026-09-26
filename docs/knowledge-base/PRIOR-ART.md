# Prior art for a claim-centric grammar knowledge base

Reading list and field map for the design in `PLAN.md`. Compiled 2026-09-10 from four surveys whose full notes, with retrieval details and unverified items marked, are in `surveys/`: `en-claim-evidence-kg.md` (62 items), `en-grammar-as-data.md` (78 items), `ja-survey.md`, `zh-survey.md`. Every URL below was retrieved on that date unless marked otherwise.

## 1. Keywords

| English | 日本語 | 中文 |
| --- | --- | --- |
| electronic grammaticography, digital reference grammar, grammar as database | 電子文法・記述文法のデータベース化 | 电子语法书、语法知识库 |
| form-meaning pair (fomp) | 形式と機能の対 | 形式与功能的配对 |
| descriptive categories vs comparative concepts | 個別言語の記述カテゴリーと比較概念 | 描写范畴与比较概念 |
| structural decomposition; autotypologising | 構造特徴への分解 | 结构分解 |
| CLDF, CLLD, Grambank feature coding, datapoint source citation | 類型論データベース・構造特徴 | 语言类型学数据库 |
| interlinear glossed text, Leipzig Glossing Rules, Xigt, Ligt | グロス付きテキスト・逐語訳 | 行间注释文本 |
| linguistic linked open data, OntoLex-Lemon, OLiA | 言語資源のLOD | 语言学关联数据 |
| nanopublication, micropublication, statement-level provenance | ナノパブリケーション（日本語文献なし） | 纳米出版物 |
| scholarly knowledge graph, research knowledge graph, ORKG | 学術知識グラフ・研究知識グラフ | 学术知识图谱、科技文献知识图谱 |
| discourse graph, question-claim-evidence | 主張・根拠のグラフ | 论证图、主张与证据 |
| evidence ontology, evidence type, line of evidence | 根拠・エビデンス | 证据本体 |
| provenance, PROV-O, attribution act | 来歴・出所 | 溯源 |
| citation typing, CiTO, citation function | 引用の種類（支持・批判） | 引文功能分类 |
| argument mining, argumentative zoning | 論述構造解析・議論マイニング | 论证挖掘 |
| scientific claim extraction and verification, atomic fact decomposition | 科学的主張の抽出・検証 | 科学主张抽取与验证 |
| attributed generation, attribution checking (AIS) | 根拠提示型生成 | 溯源生成 |
| evidence synthesis, living systematic review, GRADE, evidence gap map | 系統的レビュー・エビデンスマップ | 证据综合、系统综述、证据图谱 |
| data-to-text generation, transclusion, page as view | 知識ベースからの文書生成 | 数据到文本生成 |
| intelligent textbook, prerequisite graph, learning path | 前提知識グラフ・学習内容の構造化 | 先修关系、学习路径 |
| retrieval-augmented generation over grammars, grammar-book prompting | 検索拡張生成 | 检索增强生成 |
| data citation in linguistics (Austin Principles, Tromsø Recommendations) | 言語データの引用 | 语言数据引用 |

## 2. Grammar as data

- Nordhoff, Sebastian. 2008. Electronic reference grammars for typology: Challenges and solutions. *Language Documentation & Conservation* 2(2): 296–324. http://hdl.handle.net/10125/4352. Requirements for an electronic grammar in three domains (data quality, authoring, exploration); argues for standardising the macrostructure of descriptions. The authoring platform built on it (GALOES) left no public artefact.
- Nordhoff, Sebastian (ed.). 2012. *Electronic Grammaticography*. LD&C Special Publication 4. http://hdl.handle.net/10125/4547. The reference collection: ten chapters on the grammar as a decomposable object and on working systems.
- Good, Jeff. 2012. Deconstructing descriptive grammars. In Nordhoff (ed.), 2–32. http://hdl.handle.net/10125/4528. A grammar as a database of linked data curated from distinct sources; names what decomposition puts at risk: coverage (completeness, coextensivity) and coherence (consistency, consonance, compatibility). The validator inventory in `PLAN.md` §5.7 follows this paper.
- Nordhoff, Sebastian. 2012. The grammatical description as a collection of form-meaning-pairs. In Nordhoff (ed.), 33–62. http://hdl.handle.net/10125/4529. The form-meaning pair as atomic unit, indexed from the form side and from the function side; encapsulation removes the constraint of linearity and allows incremental publication.
- Good, Jeff. 2004. The descriptive grammar as a (meta)database. E-MELD 2004. http://emeld.org/workshop/2004/jcgood-paper.html. The annotation as the recurring unit of grammars: prose, exemplar, reference, ontology link.
- Musgrave, Simon and Nick Thieberger. 2012. Language description and hypertext: Nunggubuyu as a case study. In Nordhoff (ed.), 63–77. https://scholarspace.manoa.hawaii.edu/items/84406f5c-9ae6-4b05-9c2d-f0e155024629. Grammar, dictionary and texts as one linked object; hand-coded because full linking was not automatable.
- Bender, Emily M., Sumukh Ghodke, Timothy Baldwin and Rebecca Dridan. 2012. From database to treebank. In Nordhoff (ed.), 179–206. A parser and a treebank behind a hypertext grammar so that claims are checked against parses.
- Maxwell, Mike. 2012. Electronic grammars and reproducible research. In Nordhoff (ed.), 207–235. Descriptions should be re-verifiable against data.
- Mosel, Ulrike. 2012. Advances in the accountability of grammatical analysis and description by using regular expressions. In Nordhoff (ed.), 235–250. Store the query that produced the evidence beside the generalisation.
- Baraby, Anne-Marie. 2012. Reference grammars for speakers of minority languages. In Nordhoff (ed.), 78–101. Different audiences need different orderings and metalanguage.
- Black, Cheryl A. and H. Andrew Black. 2012. Grammars for the people, by the people, made easier using PAWS and XLingPaper. In Nordhoff (ed.), 103–128. The questionnaire-and-template route that Nordhoff argues against.
- Bird, Steven and Gary Simons. 2003. Seven dimensions of portability for language documentation and description. *Language* 79(3): 557–582. https://arxiv.org/pdf/cs/0204020. Content, format, discovery, access, citation, preservation, rights: an acceptance checklist.
- Himmelmann, Nikolaus P. 1998. Documentary and descriptive linguistics. *Linguistics* 36(1): 161–195. Documentation and description have different products and lifespans; a claim belongs to description, the example it cites to documentation.
- Ameka, Felix K., Alan Dench and Nicholas Evans (eds.). 2006. *Catching Language: The Standing Challenge of Grammar Writing*. Mouton de Gruyter. Mosel's chapter gives the received macrostructure a generated book has to be able to reproduce.
- Payne, Thomas E. and David J. Weber (eds.). 2007. *Perspectives on Grammar Writing*. Benjamins. https://benjamins.com/catalog/bct.11. Criteria for good grammars and their audiences.
- Language Science Press. https://langsci-press.org/. Open-access grammar series; LaTeX source of truth with CLDF exported for text collections. The design in `PLAN.md` inverts that direction and says why.
- Matter, Florian. lingdocs, cldf-ldd, cldflex, unboxer. https://fl.mt/digital-grammars/ · https://github.com/fmatter/lingdocs · https://github.com/fmatter/cldf-ldd/. Descriptive text in Markdown that references a CLDF dataset instead of retyping examples; CLDF components for morphs, morphemes, stems, wordforms, lexemes. The nearest existing implementation; on hiatus.
- Matter, Florian, Natalia Cáceres-Arandia and Spike Gildea. 2023. A digital sketch grammar of Yawarana. https://caribank.github.io/yawarana-sketch/latest/. Eighteen chapters generated over a CLDF dataset, with morph and wordform indexes, a CLLD app and a PDF.
- Lau, Jonas. 2021. *A Digital Reference Grammar of Abesabesi*. PhD thesis, Köln. https://kups.ub.uni-koeln.de/35719/ · http://abesabesi.cceh.uni-koeln.de/. A TEI-based data format for reference grammars with a running application.
- Junker, Marie-Odile et al. East Cree interactive reference grammar. https://www.eastcree.org/cree/en/grammar/. A verb-form database behind explanatory pages, in use for over twenty years by linguists and a speech community.
- Thieberger, Nicholas. 2006. *A Grammar of South Efate*. University of Hawai'i Press. Every example resolvable to a time-aligned recording.
- Grammar Watch (Association for Linguistic Typology). https://linguistic-typology.org/grammarwatch/. A bibliography of open grammars with citation export; the model for the source-record side.

## 3. Typological databases and comparative concepts

- Skirgård, Hedvig et al. 2023. Grambank. *Science Advances* 9: eadg6175. https://grambank.clld.org/ · https://github.com/grambank/grambank. Per datapoint: language, parameter, value, code, comment, source with pages, source comment, coders; values 0, 1, ?. Hokkaido Ainu (ainu1240) is coded from Bugaeva 2012, Patrie 1982, Refsing 1986, Shibatani 1990, Simeon 1968 and Tamura 2000: https://grambank.clld.org/languages/ainu1240. The reference implementation of a claim row.
- Forkel, Robert et al. 2018. CLDF: Cross-Linguistic Data Formats. *Scientific Data* 5: 180205. https://cldf.clld.org/. Languages, parameters, values, sources; locators serialised as `sourcekey[3-12]`; modules StructureDataset, TextCorpus, Dictionary, with ExampleTable.
- CLLD. https://clld.org/. Applications generated from CLDF datasets; the website as a view over the store.
- Dryer, Matthew S. and Martin Haspelmath (eds.). 2013. WALS Online. https://wals.info/. Each feature chapter is an authored, citable text; citations name the chapter and the version. Forkel 2020 on the move to versioned CLDF releases: https://clld.org/2020/05/07/update.html.
- Michaelis, Susanne Maria et al. 2013. APiCS Online. https://apics-online.info/. 18,526 examples attached to individual feature values.
- Bickel, Balthasar and Johanna Nichols. AUTOTYP. https://github.com/autotyp/autotyp-data. Autotypology: categories recorded as encountered and equated with comparative types afterwards; definition files separate from data files; late aggregation; markers, roles and conditions recorded first and alignment derived.
- Ivani, Jessica K. and Balthasar Bickel. Databases for comparative syntactic research. https://arxiv.org/abs/2310.11187. Vocabulary for database design: unit of description (language, construction, expression) and design principle (monocategorisation, multicategorisation, structural decomposition).
- Koopman, Hilda et al. TerraLing / SSWL. https://terraling.com/. Property values with illustrative examples, contributed under per-property ownership.
- Virk, Shafqat Mumtaz et al. 2020. The DReaM corpus. LREC 2020. https://aclanthology.org/2020.lrec-1.110/. 7,126 descriptive documents treated as a searchable corpus.
- Hammarström, Harald et al. Glottolog. https://glottolog.org/. Languoids and references as stable resources; the external anchor for dialects and sources.
- List, Johann-Mattis et al. 2016. Concepticon. https://concepticon.clld.org/. Many labels mapped to defined, identified concept sets with the mapping published: the pattern for topic naming.
- Lexibank. https://lexibank.clld.org/. Each source keeps its dataset; standardisation is an explicit re-runnable mapping layer.
- Dictionaria. https://dictionaria.clld.org/. Peer-reviewed publication of dictionaries as CLDF datasets.
- Haspelmath, Martin. 2010. Comparative concepts and descriptive categories in crosslinguistic studies. *Language* 86(3): 663–687. https://muse.jhu.edu/article/394695. Haspelmath 2020, The structural uniqueness of languages and the value of comparison for language description, *Asian Languages and Linguistics* 1(2). A source's category is that source's; a topic is a comparative concept; the mapping is an argument.
- Good, Jeff and Calvin Hendryx-Parker. 2006. Modeling contested categorization in linguistic databases. E-MELD 2006. Two contradictory categorisations in one store without forced resolution.
- Cysouw, Michael. 2007. A social layer for typological databases. In Sansò (ed.), *Language Resources and Linguistic Theory*. Commentary and disagreement in a layer distinct from the data.

## 4. Claim and evidence models

- Groth, Paul, Andrew Gibson and Jan Velterop. 2010. The anatomy of a nanopublication. *Information Services and Use* 30: 51–56. https://nanopub.net/. Assertion, provenance and publication information as three named graphs. Kuhn et al. on trusty URIs and supersession: https://peerj.com/articles/cs-78/.
- Clark, Tim, Paolo N. Ciccarese and Carole A. Goble. 2014. Micropublications. *Journal of Biomedical Semantics* 5: 28. https://jbiomedsem.biomedcentral.com/articles/10.1186/2041-1480-5-28. A claim with as much or as little of its argument as exists; `supports`, `challenges`, `qualifies`, `statedIn`.
- Ciccarese, Paolo et al. 2008. SWAN ontology. https://www.w3.org/TR/hcls-swan/. Hypotheses, claims and comments in one base with contradictions kept.
- de Waard, Anita et al. 2009. HypER. https://ceur-ws.org/Vol-523/deWaard.pdf. Against flattening claims into triples: hedge, scope and author are part of the claim.
- Brush, Matthew et al. 2016. SEPIO. https://obofoundry.org/ontology/sepio.html. Assertion, lines of evidence, evidence items, methods and agents.
- Chibucos, Marcus et al. ECO, the Evidence and Conclusion Ontology. https://github.com/evidenceontology/evidenceontology. A closed vocabulary of evidence types beside every assertion.
- Al Manir, Sadnan et al. 2021. Evidence graphs (EVI). https://fairscape.github.io/EVI/index.html. Transitive support and propagating challenges.
- Jaradeh, Mohamad Yaser et al. 2019. Open Research Knowledge Graph. K-CAP 2019. https://orkg.org/. Templates per research problem make contributions comparable; comparisons are citable tables.
- Chan, Joel et al. Discourse Graphs. https://discoursegraphs.com/ · https://arxiv.org/abs/2407.20666. Question, claim, evidence, source; grown from researchers' local notes.
- Buckingham Shum, Simon, Enrico Motta and John Domingue. 2000. ScholOnto. https://link.springer.com/article/10.1007/s007990000034. The literature as a claim graph, papers secondary; sound model, little sustained authoring.
- Vogt, Lars, Tobias Kuhn and Robert Hoehndorf. 2023. Semantic units. https://arxiv.org/abs/2301.01227. Statement units and compound units as identifiable subgraphs.
- Vogt, Lars et al. 2024. Rosetta Statements. https://arxiv.org/abs/2407.20007. The stored form reads back as a sentence; experts model without an ontology engineer.
- Toulmin, Stephen. 1958. *The Uses of Argument*. Claim, grounds, warrant, backing, qualifier, rebuttal; qualifier and rebuttal are structured slots.
- Chesñevar, Carlos et al. 2006. Argument Interchange Format. https://dl.acm.org/doi/10.1017/S0269888906001044. Inference and conflict reified as nodes.
- Vrandečić, Denny and Markus Krötzsch. 2014. Wikidata. https://www.wikidata.org/wiki/Help:Statements. Statement, qualifiers, references, rank.
- W3C. PROV-O. https://www.w3.org/TR/prov-o/. Entity, activity, agent.
- CIDOC CRM E13 Attribute Assignment and CRMinf. https://cidoc-crm.org/. How a catalogue records "X says Y" without asserting Y.
- IFLA Library Reference Model. https://www.ifla.org/files/assets/cataloguing/frbr-lrm/ifla-lrm-august-2017_rev201712.pdf. A page belongs to a manifestation.
- W3C Web Annotation Data Model. https://www.w3.org/TR/annotation-model/. Text-quote selectors with prefix and suffix survive repagination.
- Shotton, David. 2010. CiTO. https://sparontologies.github.io/cito/2018-02-12/cito.html. `agreesWith`, `disagreesWith`, `extends`, `confirms`, `refutes`.
- Peroni, Silvio and David Shotton. 2020. OpenCitations. https://opencitations.net/. A citation as an entity with its own metadata.
- Plazi TreatmentBank. https://plazi.org/treatmentbank/. A literature decomposed into treatments: one author's usage of one name at one time.
- Vitali, Fabio and Valentina Pasqual. 2026. Provenance-enhanced statements and epistemic stance. https://arxiv.org/abs/2606.15246. Promoting "S claims X" to "we hold X" under stated conditions.

## 5. Evidence synthesis and meta-research

- GRADE Working Group. https://www.gradeworkinggroup.org/. Certainty of a body of evidence per question, moved up or down for named reasons.
- Elliott, Julian H. et al. 2014. Living systematic reviews. *PLoS Medicine* 11(2): e1001603. A fixed protocol re-run continuously, with dated states and update triggers.
- Cochrane PICO linked data. https://www.cochranelibrary.com/about-cochrane-pico-linked-data. A fixed question skeleton plus a controlled vocabulary makes prose reviews queryable.
- Snilstveit, Birte et al. 2016. Evidence and gap maps. https://www.3ieimpact.org/evidence-hub/evidence-gap-maps. A framework matrix whose cells show volume and confidence, built to make absence visible.
- Epistemonikos L·OVE. https://iloveevidence.com/. Question-first, documents second, with machine classification followed by human checks.
- Alamri, Abdulaziz and Mark Stevenson. Contradiction detection in biomedical literature. https://link.springer.com/chapter/10.1007/978-3-319-96136-1_12. Most apparent contradictions dissolve under context.
- Teufel, Simone. 1999 onward. Argumentative zoning and citation function classification. https://www.cl.cam.ac.uk/~sht25/thesis/t1.pdf. Sentences in the author's own voice are where claims live.

## 6. Claim extraction, verification, attribution, generation

- Wadden, David et al. 2020. SciFact. https://aclanthology.org/2020.emnlp-main.609/. A verdict returns its rationale sentences.
- Magnusson, Ian and Scott Friedman. 2021. SciClaim. https://aclanthology.org/2021.emnlp-main.381/. A claim as a small graph with attributes for hedges and scope.
- Tchechmedjiev, Andon et al. 2019. ClaimsKG. https://data.gesis.org/claimskg/. Claim coreference and rating harmonisation.
- Lawrence, John and Chris Reed. 2019. Argument Mining: A Survey. *Computational Linguistics* 45(4). https://aclanthology.org/J19-4006/.
- Min, Sewon et al. 2023. FActScore. https://aclanthology.org/2023.emnlp-main.741/. Atomic fact decomposition of generated text, checked against a knowledge source.
- Bohnet, Bernd et al. 2022. Attributed question answering. https://arxiv.org/abs/2212.08037. Answers with supporting passages; AIS as the attribution criterion.
- LLM-empowered knowledge graph construction: a survey. 2025. https://arxiv.org/abs/2510.20345. Schema-guided extraction with a verification pass beats free-form extraction.
- Ding, Ning et al. 2026. Typed claim networks over citations. https://arxiv.org/abs/2605.30966. "What A says about B" as the unit.
- Nielsen, Finn Årup et al. 2017. Scholia. https://github.com/WDscholia/scholia. Pages rendered from queries with no stored page content.
- Vrandečić, Denny. 2020. Abstract Wikipedia. https://meta.wikimedia.org/wiki/Abstract_Wikipedia. One content base, many rendered documents; large machinery, slow progress.
- Lsjbot. https://en.wikipedia.org/wiki/Lsjbot. Millions of generated articles later refused by the receiving communities.
- Gardent, Claire et al. 2017. WebNLG. https://aclanthology.org/W17-3518/. Aggregation and sentence segmentation are where data-to-text fails.
- Shao, Yijia et al. 2024. STORM. https://arxiv.org/abs/2402.14207. Outline curation as a separate stage with its own artefact.
- Brusilovsky, Peter et al. 2022. The return of intelligent textbooks. https://onlinelibrary.wiley.com/doi/full/10.1002/aaai.12061. The concept layer pays off mainly through navigation and search.
- Learning paths over prerequisite graphs. https://arxiv.org/abs/2506.22303. A curriculum is a path through a concept graph with prerequisite and similarity edges.

## 7. Interlinear text and linguistic linked data

- Leipzig Glossing Rules. https://www.eva.mpg.de/lingua/resources/glossing-rules.php · CLDF packaging https://github.com/cldf-datasets/lgr.
- Goodman, Michael Wayne et al. 2015. Xigt. *Language Resources and Evaluation* 49: 455–485. http://xigt.org/. Tiers aligned by identifiers, never by column.
- Lewis, William D. and Fei Xia. ODIN. http://xigt.org/odin/. IGT harvested from published documents at scale, with the noise that implies.
- Bender, Emily M. et al. AGGREGATION and the LinGO Grammar Matrix. https://depts.washington.edu/uwcl/aggregation/. From IGT to a testable grammar fragment; phenomenon libraries as a topic inventory.
- Bender, Emily M. 2014. Language CoLLAGE. https://aclanthology.org/L14-1508/. Documentation plus testsuite plus executable characterisation per language.
- Chiarcos, Christian and Maxim Ionov. 2019. Ligt. https://drops.dagstuhl.de/entities/document/10.4230/OASIcs.LDK.2019.3 · Ionov 2025 https://aclanthology.org/2025.ldk-1.11/. IGT as RDF; APiCS-Ligt exports example-to-value links.
- Ginn, Michael et al. 2024. GlossLM. https://aclanthology.org/2024.emnlp-main.683/. Normalising gloss labels across sources pays off.
- Mortensen, David R. et al. 2023. Generalized Glossing Guidelines. https://aclanthology.org/2023.sigmorphon-1.7/. Item-and-process glossing for reduplication and non-concatenative morphology.
- SIGMORPHON 2023 shared task on interlinear glossing. https://aclanthology.org/2023.sigmorphon-1.20/.
- OntoLex-Lemon and its frequency, attestation and corpus module. https://www.w3.org/2016/04/ontolex/ · https://ontolex.github.io/frequency-attestation-corpus-information/.
- Chiarcos, Christian and Maria Sukhareva. 2015. OLiA. https://acoli-repo.github.io/olia/. Annotation models linked to a reference model by subclass assertions.
- GOLD, ISOcat, CLARIN Concept Registry. https://standards.clarin.eu/sis/views/view-spec.xq?id=SpecGOLD · https://aclanthology.org/2020.lrec-1.696.pdf. Two decades of shared registries that did not become dependable; own the vocabulary locally.
- Berez-Kroeker, Andrea L. et al. Austin Principles and Tromsø Recommendations. https://site.uit.no/linguisticsdatacitation/austinprinciples/ · https://zenodo.org/records/3672840. What a printed example must resolve to.
- Lindemann, David et al. 2019. LexBib. https://drops.dagstuhl.de/opus/volltexte/2019/10383/. Terms mined from full text, proposed as ontology candidates, approved by people.

## 8. Language models and grammar books

- Tanzer, Garrett et al. 2024. MTOB: A benchmark for learning to translate a new language from one grammar book. ICLR 2024. https://arxiv.org/abs/2309.16575. Kalamang from several hundred pages of reference material.
- Aycock, Seth et al. 2025. Can LLMs really learn to translate a low-resource language from one grammar book? ICLR 2025. https://arxiv.org/abs/2409.19151. The gains come from the parallel examples; explanations add nothing for translation.
- Zhang, Kexun et al. 2024. Hire a Linguist! (LingoLLM). Findings of ACL 2024. https://aclanthology.org/2024.findings-acl.925/. Lexicon, morphological analyser and prose as separate callable resources.
- Zhang, Chen et al. 2024. Teaching Large Language Models an Unseen Language on the Fly (DiPMT++). https://aclanthology.org/2024.findings-acl.519/.
- Zhang, Chen et al. 2025. Read it in Two Steps: code-augmented grammar books. ACL 2025. https://arxiv.org/abs/2506.01796. Rule retrieval is the bottleneck; code-shaped rules retrieve and apply better.
- GrammaMT. ACL 2025. https://aclanthology.org/2025.acl-long.1447/. Glosses as context are worth up to 17 BLEU when accurate.
- Yang, Changbing et al. 2025. LingGym. https://arxiv.org/abs/2511.00343. Structured cues improve meta-linguistic reasoning.
- Yang, Changbing et al. 2026. AutoTypologist. https://arxiv.org/abs/2609.07791. Prose is needed for feature identification; IGT alone underperforms.
- Kornilov, Albert and Tatiana Shavrina. 2024. From MTEB to MTOB. https://arxiv.org/abs/2411.15577. Retrieval and classification of typological information from grammars.
- Bean, Andrew M. et al. 2024. LINGOLY. https://arxiv.org/abs/2406.06196. A no-context baseline against memorisation.
- Shaw, Jonathan et al. 2025. Testing the limits of machine translation from one book. https://arxiv.org/abs/2508.06665. Resource ablation: grammar, dictionary, parallel sentences and combinations.
- Gemini 1.5 technical report, Kalamang experiments. https://arxiv.org/html/2403.05530v5. Long-context reference material supports translation; more grammar context is not uniformly better.

## 9. GrammarXiv

GrammarXiv (グラマカイブ), https://grammarxiv.net/, is an open-access database of "linguistic truths" led by 成田広樹 (Tokai University), developed from 2021 with KAKENHI support (among others JP21K18367, 再現性を担保した容認性判断のアーカイブの開発, 2021–2024, https://kaken.nii.ac.jp/ja/grant/KAKENHI-PROJECT-21K18367/) and in regular web beta operation since January 2024. Sources: 杉崎鉱司・折田奈甫・瀧田健介・水谷謙太・山口真史・成田広樹 2025, GrammarXivがもたらす理論言語学と心理言語学のシナジー, *Studies in Language Sciences* 23(2): 1–10, https://doi.org/10.34609/sls.23.2_1; 成田広樹・小林亮一朗・竹内士瑛伊・小町将之 2024, 照応表現「自分」をめぐる諸問題: GrammarXivを用いた論点整理と将来的展望, 慶應義塾大学言語文化研究所紀要 55: 89–113, https://doi.org/10.14991/005.00000055-0089; the announcement at https://www.u-tokai.ac.jp/ud-letters/news/4396/; the site's own description, read on 2026-09-10.

What it is, from those sources:

- The unit of record is the proposition (命題): a statement that can be judged true or false. Proposition entries cover acceptability judgement data (an ok or starred sentence with its judgement), hypotheses (language-specific or universal, such as the double-o constraint), and theories or frameworks. Publication entries are deliberately polysemous: a publication entry stands for the work and for the theory the author put forward in it. Experiment entries carry sub_type, variant, population and target_language. User entries exist as nodes.
- Relations between entries include truevote, falsevote and uncertainvote (a registered user's endorsement or doubt, and, by convention, a publication citing a datum or hypothesis as its source is a truevote relation, a criticism a falsevote relation), can_explain (data to hypothesis), incompatible, entail, related_topic and is_subtopic_of.
- Five requirements define the design: open access, collaborative editing by registered users, flexible linking between entries, cross-cutting graph search, and peer review through social-network functions. The store is Neo4j and the site exposes Cypher queries in its URLs.
- The fiscal 2021 KAKEN report (https://kaken.nii.ac.jp/en/report/KAKENHI-PROJECT-21K18367/21K183672021hokoku/) describes the aim as one database managing descriptions of 言語事例, 文法仮説 and 文法理論 together, and counts five entry kinds at the end of that year: 仮説 479, データ 1,368, 現象・トピック 240, 文献 1,917, 関係 2,782, in all 6,778 sample entries.
- The 2024 paper on zibun registers exhaustively the example data and the hypotheses attached to them from three handbooks, displays the network, isolates subgraphs for subject orientation and the c-command requirement and for their counterexamples, and examines the reproducibility of the acceptability judgements on which the handbook chapters rest. The stated advantage is that a published paper's data can be updated and linked to later discussion after publication.
- Entry creation is manual, by trained users; the project runs entry-writing workshops.

What transfers, and what differs from the design in `PLAN.md`:

- The proposition as unit, with acceptability judgements, hypotheses and theories at different levels of abstraction, is the same choice as the claim record; the `judgement` and `analysis` claim types cover the same ground.
- can_explain, incompatible and entail correspond to `supports`, `contradicts` and `depends_on`.
- GrammarXiv folds a publication and its theory into one node; the design keeps the source (a db.aynu.org record), the source's statement at a locus, and the proposition as three records, because the grammar's problems are about loci and attribution fidelity.
- GrammarXiv's assessment is social (truevote counts by expert users); the design's support is computed from source statements and its assessment is editorial, signed and reasoned. A community vote layer could be added later on top, as Cysouw's social layer suggests, without touching the record model.
- GrammarXiv has no corpus evidence layer and no page anchoring; the design's corpus queries, surveys and text-quote anchors have no counterpart there.
- Its organisation of 論点 around one phenomenon by exhaustive registration from handbooks is a worked example of the topic dossier this plan builds from sources.

## 10. Japanese-language work and resources

Scholarly knowledge organisation:

- 小川潤・大向一輝・中村覚・北本朝展 2022. 知識グラフを用いた歴史資料の構造化: TEIとRDFの活用. 情報知識学会誌 32(4). https://doi.org/10.2964/jsik_2022_041. A text layer in TEI with positions, and a graph layer in RDF for abstract statements ("マイクロナレッジ"); the nearest Japanese model for anchoring claims to loci.
- 武田英明 2022. 信頼できる知識グラフ構築を目指して. 人工知能学会SWO研究会. https://doi.org/10.11517/jsaisigtwo.2022.SWO-056_01.
- 山田慎太郎ほか 2025. 大規模言語モデルによるShape Expressionsの半自動生成と知識グラフ抽出への応用. https://doi.org/10.11517/jsaisigtwo.2025.SWO-067_04. Schema validation (ShEx or SHACL) as the filter for model-generated records.
- 栗林樹生ほか 2020. 論述構造解析におけるスパン分散表現. 自然言語処理 27(4). https://doi.org/10.5715/jnlp.27.753. Japanese argumentation structure parsing; relation labels (support, attack, detail) reusable.
- 上松大輝・武田英明・山田奨治・相田満 2025. 古事類苑LODを用いた地部と引用資料との関連性抽出. 情報知識学会誌 35(2). https://doi.org/10.2964/jsik_2025_026. A cited reference work turned into linked data.
- CiNii Research. https://cir.nii.ac.jp/ (OpenSearch API, JSON-LD per CRID). J-STAGE API. https://api.jstage.jst.go.jp/searchapi/do?service=3&text=... Web NDL Authorities. https://id.ndl.go.jp/auth/ndla. Machine-readable bibliography and authority identifiers for Japanese sources and researchers.
- Reisert, Paul, 井之上直也, 岡崎直観, 乾健太郎 2017. 論証構造の説明としての深い論証構造コーパス. 言語処理学会第23回年次大会. https://arxiv.org/abs/1712.02480. Argument relations reduced to a small set of defined patterns; the procedure for designing a finite relation vocabulary.
- Mindsガイドラインライブラリ (日本医療機能評価機構). https://minds.jcqhc.or.jp/. Clinical guidelines structured from clinical questions to a body of evidence to graded recommendations, in operation for two decades; the Japanese counterpart of GRADE for the assessment axis.
- 角幸頼ほか 2025. システマティックレビュー支援の実践. 医学図書館 72(3). https://doi.org/10.7142/igakutoshokan.72.3_136. Active-learning screening (ASReview) over 12,314 records; the same shape as ordering a review queue of extracted statements.
- ヤマモト・ビクトルエイイチほか 2025. 大規模言語モデルに基づく学術要旨からの知識グラフ構築手法の比較評価. 人工知能学会SWO研究会. https://doi.org/10.11517/jsaisigtwo.2025.swo-067_02. 井手綾乃・岡島光希・中村泰明 2026. 言語オントロジー階層構造に基づいたリンク予測向け知識グラフ表現集約手法. JSAI2026. Both report label variance in model-extracted entities and relations as the recurring problem, which is the argument for fixing topics and terms as a controlled vocabulary and letting a model assign to existing nodes only.
- Iso, Hayate et al. 2019. Learning to Select, Track, and Generate for Data-to-Text. ACL 2019. https://aclanthology.org/P19-1202/. A generator that tracks which records it has already verbalised; the skeleton for writing a section from a claim bundle without repetition.
- No Japanese-language literature on nanopublications, micropublications or ORKG was found (CiNii and J-STAGE, 2026-09-10).

Linguistic databases and electronic grammar:

- UniDic (国立国語研究所). https://clrd.ninjal.ac.jp/unidic/about_unidic.html. The lexicon database and the corpus database refer to each other; each corpus token points at one lexicon entry, so attributes added to the lexicon reach the corpus without rewriting it.
- コーパス検索アプリケーション『中納言』, 日本語歴史コーパス, 日本語諸方言コーパス, 日本語日常会話コーパス. https://clrd.ninjal.ac.jp/. Shared unit definitions across corpora and periods.
- 分類語彙表増補改訂版データベース. https://github.com/masayu-a/WLSP. A fixed classification with derived datasets (familiarity, antonyms) layered on separately.
- 堀恵子・李在鎬・長谷部陽一郎 2016. 機能語用例文データベース「はごろも」. 計量国語学 30(5): 275–285. https://doi.org/10.24701/mathling.30.5_275. A grammatical item as the key, with meaning, preceding form, category, attested examples and a separate human-rated difficulty.
- グループ・ジャマシイ『日本語文型辞典』. Sentence patterns with meaning, connection, examples and related patterns; multilingual editions share one headword structure.
- NPCMJ (統語・意味解析コーパス); Universal Dependencies Japanese. https://universaldependencies.org/.
- 宮川創 2023. 言語資源デジタルアーカイブにおけるキュレーション: 国立国語研究所デジタルアーカイブNINDAの事例. 情報知識学会誌 33(2). https://doi.org/10.2964/jsik_2023_011.
- 髙橋洋成 2025. 言語資源のためのOLAC標準. アジア・アフリカ言語文化研究 別冊. https://cir.nii.ac.jp/crid/1390306428913994496.
- NINJAL 消滅危機言語の保存研究プロジェクト. https://www.ninjal.ac.jp/research/cr-project/project-4/endangered-languages/. Reference grammars named as deliverables alongside dictionaries and subtitled video.

Ainu resources:

- アイヌ語口承文芸コーパス: 音声・グロス付き (A Glossed Audio Corpus of Ainu Folklore). 中川裕・アンナ・ブガエワ・小林美紀・吉川佳見, 国立国語研究所. https://ainu.ninjal.ac.jp/folklore/. Version 1.40, 2021; the derived dataset wav2gloss/NINJAL-Ainu-Folklore on Hugging Face is CC BY-SA 4.0, 38 texts, two speakers, about 7,700 sentences, glosses in the Generalized Glossing Format.
- トピック別アイヌ語会話辞典. https://ainu.ninjal.ac.jp/topic/. 3,510 headwords in 63 topics over 神保・金澤 1898.
- 国立アイヌ民族博物館アイヌ語アーカイブ. https://ainugo.nam.go.jp/. Transcription follows 田村すず子1996; rights reserved, reproduction beyond quotation prohibited; cite by reference.
- ほっかいどうアイヌ語アーカイブ (北海道博物館アイヌ民族文化研究センター). https://ainugo.hm.pref.hokkaido.lg.jp/.
- AA研アイヌ語資料公開プロジェクト (奥田統己ほか, KAKENHI 17H02336). https://ainugo.aa-ken.jp/. About 12.5 hours of 田村すゞ子's recordings with transcription and translation; permissions obtained from speakers' families, which is the precedent for a permission field on source records.
- UD-Ainu. 安岡孝一・安岡素子. https://github.com/KoichiYasuoka/UD-Ainu. CoNLL-U treebanks over 知里幸恵『アイヌ神謠集』, 『アイヌ語會話字典』, a Cyrillic dictionary, a museum pamphlet and the 加賀家文書 translation of 『五倫名義解』, CC BY-SA 4.0, with pretrained models on Hugging Face (KoichiYasuoka/roberta-base-ainu and relatives). Not part of an official UD release; the authors note that UD's label set handles incorporation poorly.
- 松浦孝平・上乃聖・三村正人・坂井信輔・河原達也 2020. Speech corpus of Ainu folklore and end-to-end speech recognition. LREC 2020. https://aclanthology.org/2020.lrec-1.319.pdf. 河原達也・松浦孝平 2025. 言語の多様性とアイヌ語の音声言語処理. 日本音響学会誌 81(1). https://doi.org/10.20697/jasj.81.1_35.
- Nowakowski, Karol Piotr et al. Ainu segmentation and tagging. https://www.mdpi.com/2078-2489/10/11/329.
- 宮川創 2024. Ainu–Japanese bi-directional neural machine translation. https://doi.org/10.46298/jdmdh.13151. 五十嵐涼・宮川創 2024. https://aclanthology.org/2024.nlp4dh-1.40/. 宮川創 2026. LLM・RAGによる消滅危機言語ニューラル機械翻訳の試み. JSAI2026. https://doi.org/10.11517/pjsai.JSAI2026.0_4I4OS17a01.
- 奥田統己 2022. AIによるアイヌ語の自動処理: 実現したこと、期待されること、やるべきでないこと. 北海道博物館アイヌ民族文化研究センター研究紀要. https://cir.nii.ac.jp/crid/1520575340770280320. A normative discussion of what should not be automated; to be read before deciding how generated material is handled.
- 佐藤知己. アイヌ語調査資料のデータベース化に関する基礎的研究 (報告書, 2021–2026). https://cir.nii.ac.jp/crid/1970589400307243037.
- Bugaeva, Anna (ed.). 2022. *Handbook of the Ainu Language*. De Gruyter Mouton. https://doi.org/10.1515/9781501502859. 21 chapters by 17 authors; claims carry the chapter author.
- 中川裕 2024. 『アイヌ語広文典』. 白水社. ISBN 978-4-560-09963-6. 657 pages.
- 文化庁 アイヌ語アーカイブ化事業. https://www.bunka.go.jp/seisaku/kokugo_nihongo/kokugo_shisaku/kikigengo/archivejigyo/index.html. The map of publicly digitised holdings and their rights holders.
- Wikidata Lexemes hold no Ainu lexemes (Hokkaido Q20968488, Sakhalin Q2984936, checked 2026-09-10); English Wiktionary has 1,985 Ainu lemmas.

Venues: じんもんこん (情報処理学会人文科学とコンピュータ研究会) and 情報知識学会誌 carry most of the Japanese knowledge-graph, TEI and LOD work above.

## 11. Chinese-language work

Knowledge organisation and citation semantics:

- 王晓光・宋宁远 2017. 语义出版物的内容组织架构研究: 基于纳米出版物和微型出版物的比较分析. 《出版科学》2017(4). https://www.sohu.com/a/160506998_99943009. Nanopublications (assertion, provenance, publication information) against micropublications (argument structure made explicit); the argument block belongs in the record.
- 祝清松・冷伏海 2013. 引文内容分析方法研究综述. 《情报资料工作》2013(5). http://qbzl.ruc.edu.cn/EN/article/downloadArticleFile.do?attachType=PDF&id=423. Citation counting loses motive, polarity and depth.
- 刘兴帮・陆伟・孟睿 2016. 基于多标签分类的引文全局功能识别研究. 《数字图书馆论坛》2016(3): 2–9. A citation's local function at one point and its global function for the whole work are two layers.
- 张晔・贾雨葶・傅洛伊・王新兵 2018. AceKG学术知识图谱. 《上海交通大学学报》52(10): 1357–1362. https://doi.org/10.16183/j.cnki.jsjtu.2018.10.026. Bibliographic records as first-class entities.
- 王萌ほか 2022. 新一代知识图谱关键技术综述. 《计算机研究与发展》. https://doi.org/10.7544/issn1000-1239.20210829.
- 陈玉博・郭少茹・刘康・赵军 2023. 大模型与知识图谱. CCL 2023. https://aclanthology.org/2023.ccl-2.6/.
- 井梦甜・雷蕾・范海巍 2025. 生物医学知识图谱辅助循证医学决策. 《生命科学》37(12): 1505–1516. https://lifescience.sinh.ac.cn/202512/20251204.htm. Evidence grading, conflicting evidence side by side, traceable sources.
- CCKS 全国知识图谱与语义计算大会 技术评测. https://sigkg.cn/ccks2025/call_for_evaluation/. Evaluation frameworks and agreement conventions for Chinese knowledge extraction.

Grammar knowledge bases:

- 谭晓平・杨丽姣・苏靖杰 2015. 面向汉语（二语）教学的语法点知识库构建及语法点标注研究. CCL 2015. http://www.cips-cl.org/static/CCL2015/papers_CN/Oral/164_面向汉语（二语）教学的语法点知识库构建及语法点标注研究.pdf. 121 grammar points, 21 attributes in four groups (basic, semantic, syntactic, pragmatic), attribute values carrying corpus frequencies, similarity links between points, and error data attached from a learner corpus, with a 95,592-sentence annotated corpus. The closest Chinese precedent for a topic record with a template.
- 汉语方言语法特征语料库 (中国社会科学院语言研究所; 刘丹青・夏俐萍 eds., 2023). http://ling.cass.cn/keyan/xueshuchengguo/szzy/202308/t20230816_5679245.html · www.dialectgrammar.com. 711 questionnaire sentences under 22 grammatical categories, elicited at 29 dialect points, with IPA and audio, filterable by sentence, category and point. A fixed category table and a fixed sentence table make cross-dialect comparison a query result.
- 俞士汶ほか. 《现代汉语语法信息词典》(1998; 2nd ed. 2003). Entry-level grammatical attributes as fields; the base under any grammar knowledge base.
- 董振东・董强. HowNet; OpenHowNet (THUNLP 2019). https://openhownet.thunlp.org/. Concepts described by combinations of about 2,000 sememes; a model for defining categories from a finite set of primitives.
- 汉语语法点查询系统 (北京语言大学 语言资源高精尖创新中心). https://yuyanziyuan.blcu.edu.cn/info/1055/2538.htm. Over 9,000 grammar points, 17,000 explanations and 47,000 examples drawn from 117 textbooks and syllabi, each explanation attributed to its textbook: one grammar point, many attributed explanations.
- 臺灣華語文能力基準 and COCT (國家教育研究院). https://coct.naer.edu.tw/. Graded grammar points that feed a textbook-editing tool directly.
- 汉语框架语义知识库 CFN. https://aclanthology.org/2023.ccl-3.12/. Frame, frame element, lexical unit, annotated sentence as four layers.
- 周红照 2025. 基于构式知识本体抽取评价名词的评价对象. CCL 2025. https://aclanthology.org/2025.ccl-1.17/. Construction type, meaning pattern, formal language: a route from prose description to machine-checkable rules.
- 周贺 2024. 基于通用依存句法的锡伯语句法树库. CCL 2024. https://aclanthology.org/2024.ccl-1.22/. A treebank for an endangered Tungusic language seeded from grammar books, newspapers and textbooks.
- 黄恬・邵艳秋・李炜 2022. 《二十四史》古代汉语语义依存图库. CCL 2022. https://aclanthology.org/2022.ccl-1.40/. Annotation guidelines published with an agreement figure (78.83 percent).
- 谢晨晖ほか 2022. 句式结构树库的自动构建研究. CCL 2022. https://aclanthology.org/2022.ccl-1.42/. Rule mappings between annotation schemes instead of re-annotation.

Language resource infrastructure:

- 中国语言资源保护工程 and 中国语言资源采录展示平台. http://www.moe.gov.cn/s78/A19/A19_ztzl/yuyan/. 1,712 survey points, 123 languages; survey point, language and item as three levels with audio, video and IPA bound to each item.
- FormosanBank (Hartshorne, Prud'hommeaux, 宋麗梅). https://ai4commsci.gitbook.io/formosanbank. About 8.2 million words and 703 hours for 17 Formosan languages; XML in git, audio hosted outside, distributed through GitHub and Hugging Face.
- 臺灣南島語數位典藏 (中央研究院, 2001–2014). https://sinica.digitalarchives.tw/site_928.html. User-defined sub-corpora for comparison; the site closed when the project ended and only a snapshot remains, which is the argument for open formats kept apart from any one site.
- 原住民族語言線上辭典 (ILRDF). https://e-dictionary.ilrdf.org.tw/. Sixteen dictionaries with cross-language lookup of one entry, which needs a shared identifier across varieties.
- 錢志安. 香港二十世紀中期粵語語料庫. https://hkcc.eduhk.hk/v1/. A corpus built to answer dated questions about a period of change.

Generation and reading paths:

- 《中国大百科全书》第三版网络版. https://www.zgbk.com/. One entry base with professional, thematic and general entrances.
- Chinese Text Project. https://ctext.org/. Text library, editable wiki, scanned library and a structured data wiki, interlinked, with an API.
- CBDB 中国历代人物传记资料库. https://zhuanlan.zhihu.com/p/425720519. SPARQL access and alignment with VIAF and DBpedia.
- Pan, Liangming, Chengjiang Li, Juanzi Li and Jie Tang. 2017. Prerequisite relation learning for concepts in MOOCs. ACL 2017. https://aclanthology.org/P17-1133/. Prerequisite edges learned from text and confirmed by hand.

Ainu in Chinese-language scholarship: no reference grammar, database or knowledge-base project was found. Crossref and OpenAlex searches for 阿伊努语, 阿伊努語, 虾夷语 and 愛努語 returned nothing on the language; the Chinese Wikipedia article cites one 1971 paper (彭哲卿, 《清華學報》9(1)) that could not be verified independently. A Chinese view of the base would need its own terminology table, with each term mapped to its Japanese and English equivalents.

Venues: CCL (中国计算语言学大会), CCKS, and the digital humanities community at https://www.dhcn.cn/.

## 12. Lessons applied in the plan

1. Assertion, provenance and assessment are separate objects (nanopublications, micropublications, SEPIO, EVI, CIDOC E13).
2. The citation act is an entity and the locus lives on it (OpenCitations, CiTO).
3. A locus is a selector against a frozen text revision, with the printed label read from the page (Web Annotation, CTS, LRM).
4. Evidence types are a closed vocabulary and lines of evidence are graded separately (ECO, SEPIO).
5. Certainty decomposes into named reasons (GRADE).
6. Contradiction is a typed link with the dimension of difference recorded (SWAN, CiTO, contradiction-detection studies).
7. Challenges propagate to everything downstream (EVI).
8. Scope, quantifier and hedge are fields (Toulmin, SciClaim, Wikidata qualifiers).
9. Topics carry templates so that a topic page is a comparison table (ORKG).
10. The gap map is built early and shows described, disagreed, denied, unknown, not inspected (evidence gap maps, Grambank's ?).
11. A source's category is that source's; the mapping to a topic is an attributed record (Haspelmath, AUTOTYP, Concepticon).
12. Topics are owned locally, defined and versioned, mapped outward (the fate of GOLD, ISOcat and the CLARIN registry).
13. Every claim ships with its examples in one retrieval unit (Aycock et al., AutoTypologist).
14. Rules are individually addressable and, where possible, executable (Read it in Two Steps).
15. Examples are tiered records with source and normalised gloss labels (Xigt, GlossLM).
16. The generated book transcludes and never copies; pages are views (Xanadu, Scholia).
17. Generated prose is decomposed and attribution-checked before publication (FActScore, AIS), and a person accepts each topic (Lsjbot).
18. Coverage and coherence need their own validators (Good 2012).
19. A reading path is authored data, and there are several (Baraby, Mosel, prerequisite graphs).
20. Authoring must happen where writing happens and pay off the same day (ScholOnto, Discourse Graphs, Rosetta Statements).
21. The lexicon and the corpus refer to each other by identifiers, so attributes added on one side reach the other (UniDic).
22. Rights and permissions are per source and per example, and some examples are known to exist and cannot be cited (AA研 project, National Ainu Museum archive, 二風谷).
23. The proposition is the unit, and social endorsement is a layer above editorial assessment, never a substitute for it (GrammarXiv, Cysouw).
