/**
 * Bibliography of the reference grammar.
 *
 * Keys are cited in chapters via <Ref k="..."/> and on examples via <Ex cite="..."/>.
 * `citeAuthor` and `year` are what appear in the in-text citation; the full entry is
 * rendered on the references page. Original-script titles are kept alongside
 * translations.
 *
 * The Ref/Ex components validate every key against this table, so a citation can
 * never point at a missing entry. This is the *registered* bibliography. The
 * separate *evidentiary* role each work plays in a given chapter (primary-data,
 * prior-analysis, typological-framework, philological-witness, background) and its
 * db.aynu.org crosswalk live in `citation-registry.ts`; redistribution rights live
 * in `rights.json`.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 *  CANONICAL CITATION-KEY SCHEME (binding — see AUTHORING.md §"Citation keys")
 * ─────────────────────────────────────────────────────────────────────────────
 *   key = lastnameYEAR  — all-lowercase ASCII, no diacritics, no spaces.
 *     • Surname only, romanised; Japanese authors by romanised surname with macrons
 *       stripped (佐藤知己 → `sato`, 中川裕 → `nakagawa`, 切替英雄 → `kirikae`).
 *     • Multi-author works key on the FIRST author's surname
 *       (`barrie2021`, `nikitina2021`, `keenancomrie1977` joins two only for the
 *       canonical Keenan & Comrie pairing).
 *     • YEAR is the 4-digit publication year; ranges keep only the start (`chiri1953`).
 *     • Collisions (same surname + year) get a lowercase suffix `a`, `b`, `c…` in
 *       order of first citation in the grammar (`sato2023a`, `sato2023b`).
 *     • A second work by the same author/year that is topically distinct may instead
 *       take a short topical suffix when that aids the reader (`bugaeva2021poss` vs
 *       `bugaeva2021antip`); pick ONE convention per author-year and document it.
 *   Examples: tamura1996, sato2008, nakagawa2024, kirikae1984.
 *
 * Coverage: the 15 book-length sources of the Hokkaido corpus plus the
 * highest-value, most-citable article per grammatical domain (≈100 entries). It is
 * not exhaustive of the 235-record inventory; it grows additively as chapters are
 * authored. New keys MUST follow the scheme above and SHOULD be registered in
 * citation-registry.ts in the same commit.
 */

export interface BibEntry {
	/** e.g. 'Tamura, Suzuko' or 'Chiri Mashiho 知里真志保' */
	author: string;
	/** Short name(s) used in in-text citations, e.g. 'Tamura'. */
	citeAuthor: string;
	year: string;
	title: string;
	/** English translation of a non-English title. */
	titleTr?: string;
	/** Journal, book, or series the work appeared in. */
	container?: string;
	editor?: string;
	pages?: string;
	publisher?: string;
	place?: string;
	url?: string;
	/** BCP-47 tag for the title text, e.g. 'ja', 'ru'. Defaults to 'en'. */
	lang?: string;
	note?: string;
	/**
	 * What the work is primarily about. Hokkaido Ainu is the core of this grammar;
	 * Sakhalin and Kuril works appear for contrast; 'general' covers pan-Ainu,
	 * comparative, proto-Ainu, and methodological/typological literature.
	 */
	region: 'hokkaido' | 'sakhalin' | 'kuril' | 'general';
	/**
	 * True when the work is cited second-hand (apud another source) or is a known
	 * must-cite NOT consulted directly (e.g. Tamura 2000, Hattori 1964). Rendered as
	 * a badge so the reader can see which claims rest on intermediated evidence.
	 */
	reported?: boolean;
}

export const bibliography: Record<string, BibEntry> = {
	// ───────────────────────── Reference grammars & handbooks ─────────────────────────
	kindaichi1933: {
		region: 'general',
		author: 'Kindaichi Kyōsuke 金田一京助',
		citeAuthor: 'Kindaichi',
		year: '1933',
		title: 'アイヌ文学',
		titleTr: 'Ainu literature',
		publisher: 'Kawade Shobō 河出書房',
		place: 'Tokyo',
		lang: 'ja'
	},
	kindaichi1936: {
		region: 'general',
		author: 'Kindaichi Kyōsuke 金田一京助 & Chiri Mashiho 知里真志保',
		citeAuthor: 'Kindaichi & Chiri',
		year: '1936',
		title: 'アイヌ語法概説',
		titleTr: 'An outline of Ainu grammar',
		publisher: 'Iwanami Shoten 岩波書店',
		place: 'Tokyo',
		url: 'https://db.aynu.org/sources/1936-kindaichi',
		lang: 'ja'
	},
	chiri1942: {
		region: 'sakhalin',
		author: 'Chiri Mashiho 知里真志保',
		citeAuthor: 'Chiri',
		year: '1942',
		title: 'アイヌ語法研究——樺太方言を中心として',
		titleTr: 'A study of Ainu grammar, centred on the Sakhalin dialect',
		container: '樺太庁博物館報告 [Reports of the Karafuto Government Museum]',
		pages: '4(4): 51–172',
		place: 'Toyohara',
		url: 'https://db.aynu.org/sources/1942-chiri',
		note: 'Reprinted in 知里真志保著作集 3 (Heibonsha, 1973)',
		lang: 'ja'
	},
	refsing1986: {
		region: 'hokkaido',
		author: 'Refsing, Kirsten',
		citeAuthor: 'Refsing',
		year: '1986',
		title: 'The Ainu language: The morphology and syntax of the Shizunai dialect',
		publisher: 'Aarhus University Press',
		place: 'Aarhus',
		url: 'https://db.aynu.org/sources/1986-refsing'
	},
	shibatani1990: {
		region: 'general',
		author: 'Shibatani, Masayoshi',
		citeAuthor: 'Shibatani',
		year: '1990',
		title: 'The languages of Japan',
		container: 'Cambridge Language Surveys',
		publisher: 'Cambridge University Press',
		place: 'Cambridge',
		url: 'https://db.aynu.org/sources/1990-shibatani'
	},
	tamura1996: {
		region: 'hokkaido',
		author: 'Tamura Suzuko 田村すゞ子',
		citeAuthor: 'Tamura',
		year: '1996',
		title: 'アイヌ語沙流方言辞典',
		titleTr: 'The Ainu–Japanese dictionary: Saru dialect',
		publisher: 'Sōfūkan 草風館',
		place: 'Tokyo',
		url: 'https://db.aynu.org/sources/1996-tamura',
		lang: 'ja'
	},
	tamura2000: {
		region: 'hokkaido',
		author: 'Tamura, Suzuko',
		citeAuthor: 'Tamura',
		year: '2000',
		title: 'The Ainu language',
		container: 'ICHEL Linguistic Studies 2',
		publisher: 'Sanseidō 三省堂',
		place: 'Tokyo',
		url: 'https://db.aynu.org/sources/2000-suzuko-tamura-the-ainu-language',
		note: 'English version of her 1988 アイヌ語 encyclopedia article (Saru)',
		reported: true
	},
	sato2008: {
		region: 'hokkaido',
		author: 'Satō Tomomi 佐藤知己',
		citeAuthor: 'Satō',
		year: '2008',
		title: 'アイヌ語文法の基礎',
		titleTr: 'Foundations of Ainu grammar',
		publisher: 'Daigaku Shorin 大学書林',
		place: 'Tokyo',
		url: 'https://db.aynu.org/sources/2008-sato',
		lang: 'ja'
	},
	sato2009: {
		region: 'hokkaido',
		author: 'Satō Tomomi 佐藤知己',
		citeAuthor: 'Satō',
		year: '2009',
		title: 'アイヌ語の条件表現について',
		titleTr: 'On the conditional expressions of Ainu',
		container: 'Tsumagari Toshirō 津曲敏郎 (ed.), サハリンの言語世界 [The linguistic world of Sakhalin]',
		pages: '49–56',
		publisher: 'Graduate School of Letters, Hokkaido University 北海道大学大学院文学研究科',
		place: 'Sapporo',
		lang: 'ja'
	},
	sato2023a: {
		region: 'hokkaido',
		author: 'Satō Tomomi 佐藤知己',
		citeAuthor: 'Satō',
		year: '2023',
		title: 'アイヌ語',
		titleTr: 'The Ainu language (handbook/encyclopedia grammar)',
		container: '世界の言語シリーズ / 朝倉日本語講座',
		lang: 'ja'
	},
	bugaeva2012: {
		region: 'hokkaido',
		author: 'Bugaeva, Anna',
		citeAuthor: 'Bugaeva',
		year: '2012',
		title: 'Southern Hokkaido Ainu',
		editor: 'Nicolas Tranter',
		container: 'The languages of Japan and Korea',
		pages: '461–509',
		publisher: 'Routledge',
		place: 'London'
	},
	bugaeva2022: {
		region: 'general',
		author: 'Bugaeva, Anna (ed.)',
		citeAuthor: 'Bugaeva',
		year: '2022',
		title: 'Handbook of the Ainu language',
		container: 'Handbooks of Japanese Language and Linguistics 12',
		publisher: 'De Gruyter Mouton',
		place: 'Berlin & Boston',
		url: 'https://db.aynu.org/sources/2022-bugaeva'
	},
	nakagawa2024: {
		region: 'general',
		author: 'Nakagawa Hiroshi 中川裕',
		citeAuthor: 'Nakagawa',
		year: '2024',
		title: 'アイヌ語広文典',
		titleTr: 'Ainugo kōbunten [An extensive grammar of the Ainu language]',
		publisher: 'Hakusuisha 白水社',
		place: 'Tokyo',
		url: 'https://db.aynu.org/sources/2024-nakagawa',
		lang: 'ja'
	},
	nakagawa2022: {
		region: 'general',
		author: 'Nakagawa, Hiroshi 中川裕',
		citeAuthor: 'Nakagawa',
		year: '2022',
		title: 'Verbal number',
		editor: 'Anna Bugaeva',
		container: 'Handbook of the Ainu language (HJLL 12)',
		publisher: 'De Gruyter Mouton',
		place: 'Berlin & Boston',
		url: 'https://db.aynu.org/sources/2022-hiroshi-nakagawa-17-verbal-number'
	},
	tamuramasashi2011: {
		region: 'hokkaido',
		author: 'Tamura Masashi 田村雅史',
		citeAuthor: 'Tamura, M.',
		year: '2011',
		title: 'アイヌ語白糠方言の文法記述',
		titleTr: 'A grammatical description of the Shiranuka dialect of Ainu',
		lang: 'ja'
	},
	asai1969: {
		region: 'hokkaido',
		author: 'Asai Tōru 浅井亨',
		citeAuthor: 'Asai',
		year: '1969',
		title: 'アイヌ語の文法——アイヌ語石狩方言文法の概略',
		titleTr: 'An outline of the grammar of the Ishikari dialect of Ainu',
		container: 'アイヌ民族誌 1',
		url: 'https://db.aynu.org/sources/1969-asai-toru-ainugo-no-bunpo-ainugo-ishikari-hogen-bunpo-no-gai',
		lang: 'ja',
		reported: true
	},
	chamberlain1887: {
		region: 'general',
		author: 'Chamberlain, Basil Hall',
		citeAuthor: 'Chamberlain',
		year: '1887',
		title: 'The language, mythology, and geographical nomenclature of Japan viewed in the light of Aino studies',
		publisher: 'Imperial University',
		place: 'Tokyo',
		reported: true
	},

	// ───────────────────────── Sakhalin / contrast grammars ─────────────────────────
	pilsudski1912: {
		region: 'sakhalin',
		author: 'Piłsudski, Bronisław',
		citeAuthor: 'Piłsudski',
		year: '1912',
		title: 'Materials for the study of the Ainu language and folklore',
		publisher: 'Spółka Wydawnicza Polska',
		place: 'Cracow',
		url: 'https://db.aynu.org/sources/1912-pilsudski'
	},
	murasaki1979: {
		region: 'sakhalin',
		author: 'Murasaki Kyōko 村崎恭子',
		citeAuthor: 'Murasaki',
		year: '1979',
		title: 'カラフトアイヌ語——文法篇',
		titleTr: 'Sakhalin Ainu: Grammar volume',
		publisher: 'Kokusho Kankōkai 国書刊行会',
		place: 'Tokyo',
		url: 'https://db.aynu.org/sources/1979-murasaki-kyoko-karafuto-ainugo-bunpo-hen-sakhalin-ainu-grammar-vo',
		lang: 'ja',
		reported: true
	},
	murasaki2025: {
		region: 'sakhalin',
		author: 'Murasaki Kyōko 村崎恭子',
		citeAuthor: 'Murasaki',
		year: '2025',
		title: 'エンチウ（樺太アイヌ）語会話入門【改訂版】',
		titleTr: 'Introduction to Enciw (Sakhalin Ainu) conversation, rev. ed.',
		url: 'https://db.aynu.org/sources/2025-murasaki',
		lang: 'ja'
	},
	dalcorso2021: {
		region: 'sakhalin',
		author: 'Dal Corso, Elia',
		citeAuthor: 'Dal Corso',
		year: '2021',
		title: "The language and folklore of West Sakhalin Ainu: A re-edition of Murasaki Kyōko's 'Karafuto Ainugo' with translation and grammatical notes",
		url: 'https://db.aynu.org/sources/2021-dal-corso-elia-the-language-and-folklore-of-west-sakhalin-ainu-a',
		reported: true
	},

	// ───────────────────────── Pedagogical / standard / text-collection books ─────────────────────────
	kayano1987: {
		region: 'hokkaido',
		author: 'Kayano Shigeru 萱野茂',
		citeAuthor: 'Kayano',
		year: '1987',
		title: 'アイヌ語会話 初級編',
		titleTr: 'Ainu conversation: Beginner',
		url: 'https://db.aynu.org/sources/1987-kayano',
		lang: 'ja'
	},
	utari1994: {
		region: 'hokkaido',
		author: 'Hokkaidō Utari Kyōkai 北海道ウタリ協会',
		citeAuthor: 'Hokkaidō Utari Kyōkai',
		year: '1994',
		title: 'アコㇿイタㇰ——テキスト アイヌ語会話',
		titleTr: 'Akor Itak: A textbook of Ainu conversation',
		place: 'Sapporo',
		lang: 'ja'
	},
	ijas2023: {
		region: 'hokkaido',
		author: 'Ijäs, Silja',
		citeAuthor: 'Ijäs',
		year: '2023',
		title: 'Aynu itak a-eyaypakasnu ro — Let’s learn Ainu: Ainu language grammar guide',
		url: 'https://aynuitak.org',
		note: 'Online English pedagogical grammar guide'
	},
	aynucorporadiscord: {
		region: 'general',
		author: 'aynu-corpora Discord community',
		citeAuthor: 'aynu-corpora Discord',
		year: '2023–2026',
		title: 'Community linguistic discussion (aynu-corpora Discord archive)',
		note: 'Machine-extracted member analyses — leads, not authorities; cite with member handle and confidence grade'
	},
	nakagawatexts2000: {
		region: 'hokkaido',
		author: 'Nakagawa Hiroshi 中川裕 (ed.)',
		citeAuthor: 'Nakagawa',
		year: '2000',
		title: 'アイヌ口承文芸テキスト集 1–24',
		titleTr: 'A collection of Ainu oral-literature texts, vols. 1–24 (2000–2025)',
		note: 'Annotated Saru/Chitose uwepeker and kamuy yukar narrated by Shirasawa Nabe and others; the largest annotated Hokkaido narrative corpus. Cite per-volume for examples.',
		lang: 'ja'
	},
	takahashi2014texts: {
		region: 'hokkaido',
		author: 'Takahashi Yasui 髙橋靖以',
		citeAuthor: 'Takahashi',
		year: '2014',
		title: 'アイヌ語十勝方言例文集',
		titleTr: 'A collection of example sentences in the Tokachi dialect of Ainu',
		url: 'https://db.aynu.org/sources/2014-yasushige-takahashi-ainugo-tokachi-hogen-reibunshu',
		lang: 'ja'
	},

	// ───────────────────────── Dictionaries & lexica ─────────────────────────
	nakagawa1995: {
		region: 'hokkaido',
		author: 'Nakagawa Hiroshi 中川裕',
		citeAuthor: 'Nakagawa',
		year: '1995',
		title: 'アイヌ語千歳方言辞典',
		titleTr: 'A dictionary of the Chitose dialect of Ainu',
		publisher: 'Sōfūkan 草風館',
		place: 'Tokyo',
		url: 'https://db.aynu.org/sources/1995-nakagawa-hiroshi-ainugo-chitose-hogen-jiten-ainu-japanese-dictionar',
		lang: 'ja',
		reported: true
	},
	kayano1996: {
		region: 'hokkaido',
		author: 'Kayano Shigeru 萱野茂',
		citeAuthor: 'Kayano',
		year: '1996',
		title: '萱野茂のアイヌ語辞典',
		titleTr: "Kayano's Ainu dictionary (Saru)",
		publisher: 'Sanseidō 三省堂',
		place: 'Tokyo',
		url: 'https://db.aynu.org/sources/1996-kayano-kayanos-ainu-dictionary',
		lang: 'ja',
		reported: true
	},
	hattori1964: {
		region: 'general',
		author: 'Hattori Shirō 服部四郎 (ed.)',
		citeAuthor: 'Hattori',
		year: '1964',
		title: 'アイヌ語方言辞典',
		titleTr: 'An Ainu dialect dictionary',
		publisher: 'Iwanami Shoten 岩波書店',
		place: 'Tokyo',
		lang: 'ja',
		note: 'Classic comparative dialect dictionary (19 localities)',
		reported: true
	},
	chiri1953: {
		region: 'general',
		author: 'Chiri Mashiho 知里真志保',
		citeAuthor: 'Chiri',
		year: '1953',
		title: '分類アイヌ語辞典',
		titleTr: 'A classified dictionary of Ainu (plants, animals, humans), 1953–1962',
		publisher: 'Nihon Jōmin Bunka Kenkyūjo 日本常民文化研究所',
		place: 'Tokyo',
		lang: 'ja',
		reported: true
	},
	batchelor1905: {
		region: 'hokkaido',
		author: 'Batchelor, John',
		citeAuthor: 'Batchelor',
		year: '1905',
		title: 'An Ainu–English–Japanese dictionary (including a grammar of the Ainu language)',
		publisher: 'Methodist Publishing House',
		place: 'Tokyo',
		url: 'https://db.aynu.org/sources/1905-batchelor-ainu-english-japanese-dictionary',
		reported: true
	},
	batchelor1938: {
		region: 'hokkaido',
		author: 'Batchelor, John',
		citeAuthor: 'Batchelor',
		year: '1938',
		title: 'An Ainu–English–Japanese dictionary, 4th edn',
		publisher: 'Iwanami Shoten 岩波書店',
		place: 'Tokyo',
		url: 'https://db.aynu.org/sources/1938-batchelor-ainu-english-japanese-dictionary-4ed',
		reported: true
	},
	bugaeva2015topical: {
		region: 'hokkaido',
		author: 'Bugaeva, Anna, Shiho Endō & Shirō Akasegawa',
		citeAuthor: 'Bugaeva et al.',
		year: '2015',
		title: 'A topical dictionary of conversational Ainu',
		url: 'https://db.aynu.org/sources/2015-bugaeva-anna-a-topical-dictionary-of-conversational-ainu-englis',
		note: 'Web dictionary; Chitose idiolect of Ito Oda'
	},
	kanazawa1898: {
		region: 'hokkaido',
		author: 'Kanazawa Shōzaburō 金澤庄三郎',
		citeAuthor: 'Kanazawa',
		year: '1898',
		title: 'アイヌ語会話辞典',
		titleTr: 'A topical dictionary of Ainu conversation (Saru)',
		url: 'https://ainu.ninjal.ac.jp/topic/',
		note: 'Saru-dialect topical conversation dictionary; consulted via the NINJAL digital edition. Cite the underlying 1898 work for banked conversational examples.',
		lang: 'ja'
	},

	// ───────────────────────── Phonology, prosody, morphophonology ─────────────────────────
	chiri1952: {
		region: 'general',
		author: 'Chiri Mashiho 知里真志保',
		citeAuthor: 'Chiri',
		year: '1952',
		title: 'アイヌ語に於ける母音調和',
		titleTr: 'Vowel harmony in Ainu',
		lang: 'ja'
	},
	okuda2025: {
		region: 'hokkaido',
		author: 'Okuda Osami 奥田統己',
		citeAuthor: 'Okuda',
		year: '2025',
		title: 'アイヌ語のわたり音と母音連続',
		titleTr: 'Glides and vowel hiatus in Ainu',
		lang: 'ja'
	},
	ochiai2023: {
		region: 'general',
		author: 'Ochiai Izumi 落合いずみ',
		citeAuthor: 'Ochiai',
		year: '2023',
		title: 'A disparity in the final vowels in Ainu: Word-final CV and CCV',
		container: 'Phonological Externalization',
		url: 'https://db.aynu.org/sources/2023-ochiai-izumi-a-disparity-in-the-final-vowels-in-ainu-word-final'
	},
	dalcorso2024: {
		region: 'sakhalin',
		author: 'Dal Corso, Elia',
		citeAuthor: 'Dal Corso',
		year: '2024',
		title: "Elements of Sakhalin Ainu phonetics, phonology, and morphosyntax in Bronisław Piłsudski's corpus of Ainu folklore",
		url: 'https://db.aynu.org/sources/2024-dal-corso-elia-elements-of-sakhalin-ainu-phonetics-phonology-and-morphosyntax-in-bronis-aw-pi-sudskis-corpus-of-ainu-folklore'
	},
	itabashi2001: {
		region: 'general',
		author: 'Itabashi Yoshizō 板橋義三',
		citeAuthor: 'Itabashi',
		year: '2001',
		title: '樺太アイヌ語の母音の長短と北海道アイヌ語のピッチアクセントとの史的関係',
		titleTr: 'The diachronic relation between Sakhalin Ainu vowel length and Hokkaido Ainu pitch accent',
		lang: 'ja'
	},
	shiratori2026: {
		region: 'general',
		author: 'Shiratori Shiori 白鳥詩織',
		citeAuthor: 'Shiratori',
		year: '2026',
		title: '口蓋化子音の改訂に向けたアイヌ祖語 *ia の提唱',
		titleTr: 'A proposal of Proto-Ainu *ia toward a revision of the palatalized consonants',
		lang: 'ja'
	},
	fukuda1956: {
		region: 'hokkaido',
		author: 'Fukuda (Tamura) Suzuko 田村すゞ子',
		citeAuthor: 'Fukuda',
		year: '1956',
		title: 'On the morphological structure of the verbs in Saru dialect of Ainu',
		container: 'Onsei no Kenkyū 7'
	},
	nakagawa2009: {
		region: 'hokkaido',
		author: 'Nakagawa Hiroshi 中川裕',
		citeAuthor: 'Nakagawa',
		year: '2009',
		title: 'アイヌ語の接頭辞',
		titleTr: 'The prefixes of Ainu',
		lang: 'ja'
	},
	kirikae1984: {
		region: 'hokkaido',
		author: 'Kirikae Hideo 切替英雄',
		citeAuthor: 'Kirikae',
		year: '1984',
		title: '名詞句の構造と合成名詞',
		titleTr: 'The structure of noun phrases and compound nouns',
		lang: 'ja'
	},

	// ───────────────────────── Person marking & alignment ─────────────────────────
	tamura1971: {
		region: 'hokkaido',
		author: 'Tamura Suzuko 田村すゞ子',
		citeAuthor: 'Tamura',
		year: '1971',
		title: '沙流方言の人称代名詞',
		titleTr: 'Personal pronouns in the Saru dialect',
		lang: 'ja'
	},
	tamura1972: {
		region: 'hokkaido',
		author: 'Tamura Suzuko 田村すゞ子',
		citeAuthor: 'Tamura',
		year: '1972',
		title: '沙流方言の人称の種類',
		titleTr: 'The categories of person in the Saru dialect',
		lang: 'ja'
	},
	takahashi2015: {
		region: 'hokkaido',
		author: 'Takahashi Yasui 髙橋靖以',
		citeAuthor: 'Takahashi',
		year: '2015',
		title: '十勝方言における1人称と包括人称について',
		titleTr: 'On the first and inclusive persons in the Tokachi dialect',
		lang: 'ja'
	},
	baek2021: {
		region: 'sakhalin',
		author: 'Baek, Sangyub 白尚燁',
		citeAuthor: 'Baek',
		year: '2021',
		title: 'サハリン地域のウイルタ語・アイヌ語・ニヴフ語における3人称標示と複数接辞',
		titleTr: 'Third-person marking and plural affixes in Uilta, Ainu and Nivkh of the Sakhalin area',
		lang: 'ja'
	},
	sakaguchi2024: {
		region: 'sakhalin',
		author: 'Sakaguchi Ryō 阪口諒',
		citeAuthor: 'Sakaguchi',
		year: '2024',
		title: '樺太アイヌ語における人称と数の標示に関する研究',
		titleTr: 'A study of person and number marking in Sakhalin Ainu (dissertation)',
		lang: 'ja'
	},
	dalcorso2025align: {
		region: 'sakhalin',
		author: 'Dal Corso, Elia',
		citeAuthor: 'Dal Corso',
		year: '2025',
		title: 'The mixed nominative-neutral-inverse morphological alignment of Sakhalin Ainu',
		url: 'https://db.aynu.org/sources/2025-dal-corso-elia-the-mixed-nominative-neutral-inverse-morphological-alignment-of-sakhalin-ainu'
	},
	sato2004: {
		region: 'hokkaido',
		author: 'Satō Tomomi 佐藤知己',
		citeAuthor: 'Satō',
		year: '2004',
		title: 'アイヌ文学における一人称体の問題',
		titleTr: 'The problem of the first-person form in Ainu literature',
		lang: 'ja'
	},

	// ───────────────────────── Valency: causative / applicative / antipassive / reflexive ─────────────────────────
	bugaeva2006: {
		region: 'general',
		author: 'Bugaeva, Anna',
		citeAuthor: 'Bugaeva',
		year: '2006',
		title: 'Applicatives in Ainu',
		url: 'https://db.aynu.org/sources/2006-bugaeva-anna-applicatives-in-ainu'
	},
	bugaeva2010: {
		region: 'general',
		author: 'Bugaeva, Anna',
		citeAuthor: 'Bugaeva',
		year: '2010',
		title: 'Ainu applicatives in typological perspective',
		container: 'Studies in Language 34(4)',
		pages: '749–801',
		url: 'https://db.aynu.org/sources/2010-anna-bugaeva-ainu-applicatives-in-typological-perspective'
	},
	bugaeva2014: {
		region: 'hokkaido',
		author: 'Bugaeva, Anna ブガエワ・アンナ',
		citeAuthor: 'Bugaeva',
		year: '2014',
		title: 'アイヌ語使役構文に関する再考察',
		titleTr: 'A reconsideration of the causative construction in Ainu',
		lang: 'ja'
	},
	nam2021: {
		region: 'general',
		author: 'Nam, Deokhyun 南徳鉉',
		citeAuthor: 'Nam',
		year: '2021',
		title: 'Some evidence for the origin of the Ainu antipassive prefix i-',
		url: 'https://db.aynu.org/sources/2021-nam-deokhyun-some-evidence-for-the-origin-of-the-ainu-antipassive-prefix-i'
	},
	bugaeva2021antip: {
		region: 'general',
		author: 'Bugaeva, Anna',
		citeAuthor: 'Bugaeva',
		year: '2021',
		title: 'Unspecified participant: A case of antipassive in Ainu',
		editor: 'Katarzyna Janic & Alena Witzlack-Makarevich',
		container: 'Antipassive: Typology, diachrony, and related constructions (TSL 130)',
		publisher: 'John Benjamins',
		place: 'Amsterdam & Philadelphia',
		url: 'https://db.aynu.org/sources/2021-anna-bugaeva-unspecified-participant-a-case-of-antipassive-in-a'
	},
	bugaeva2025: {
		region: 'general',
		author: 'Bugaeva, Anna',
		citeAuthor: 'Bugaeva',
		year: '2025',
		title: 'A diachronic study of anticausatives in Ainu',
		url: 'https://db.aynu.org/sources/2025-bugaeva-anna-a-diachronic-study-of-anticausatives-in-ainu'
	},
	bugaevakobayashi2022: {
		region: 'general',
		author: 'Bugaeva, Anna & Miki Kobayashi',
		citeAuthor: 'Bugaeva & Kobayashi',
		year: '2022',
		title: 'Verbal valency',
		editor: 'Anna Bugaeva',
		container: 'Handbook of the Ainu language (HJLL 12)',
		pages: '465–509',
		publisher: 'De Gruyter Mouton',
		place: 'Berlin & Boston',
		url: 'https://db.aynu.org/sources/2022-anna-bugaeva-15-verbal-valency'
	},
	kobayashi2015: {
		region: 'hokkaido',
		author: 'Kobayashi Miki 小林美紀',
		citeAuthor: 'Kobayashi',
		year: '2015',
		title: 'アイヌ語動詞の結合価と項構造',
		titleTr: 'Valency and argument structure of the Ainu verb (dissertation)',
		lang: 'ja'
	},
	takahashi2017: {
		region: 'hokkaido',
		author: 'Takahashi Yasui 髙橋靖以',
		citeAuthor: 'Takahashi',
		year: '2017',
		title: 'アイヌ語幌別方言の使役接尾辞について',
		titleTr: 'On the causative suffixes in the Horobetsu dialect of Ainu',
		container: '北方言語研究 7',
		pages: '99–106',
		lang: 'ja'
	},
	sato2007: {
		region: 'hokkaido',
		author: 'Satō Tomomi 佐藤知己',
		citeAuthor: 'Satō',
		year: '2007',
		title: '千歳方言の再帰接頭辞yay-とsi-について',
		titleTr: 'On the reflexive prefixes yay- and si- in the Chitose dialect',
		lang: 'ja'
	},
	kobayashi2010: {
		region: 'hokkaido',
		author: 'Kobayashi Miki 小林美紀',
		citeAuthor: 'Kobayashi',
		year: '2010',
		title: '動詞接頭辞si-とyay-の項同定機能',
		titleTr: 'The argument-identifying function of the verbal prefixes si- and yay-',
		lang: 'ja'
	},
	kobayashi2020: {
		region: 'hokkaido',
		author: 'Kobayashi Miki 小林美紀',
		citeAuthor: 'Kobayashi',
		year: '2020',
		title: '空間・場所を項とするアイヌ語動詞の結合価を増やす操作について：otkeとkamuを例として',
		titleTr:
			'On valency-increasing operations for Ainu verbs that take space or place as an argument: otke and kamu as case studies',
		container: '千葉大学ユーラシア言語文化論集 22',
		pages: '167–174',
		lang: 'ja'
	},
	sato2023b: {
		region: 'hokkaido',
		author: 'Satō Tomomi 佐藤知己',
		citeAuthor: 'Satō',
		year: '2023',
		title: '動詞の結合価と3項動詞',
		titleTr: 'Verb valency and three-place verbs (ditransitives)',
		lang: 'ja'
	},

	// ───────────────────────── Noun incorporation / polysynthesis ─────────────────────────
	shibatani1988: {
		region: 'general',
		author: 'Shibatani, Masayoshi',
		citeAuthor: 'Shibatani',
		year: '1988',
		title: 'Polysynthesis in Ainu and theories of incorporation',
		url: 'https://db.aynu.org/sources/1988-shibatani-masayoshi-polysynthesis-in-ainu-and-theories-of-incorporation'
	},
	sato2016: {
		region: 'general',
		author: 'Satō Tomomi 佐藤知己',
		citeAuthor: 'Satō',
		year: '2016',
		title: 'A classification of the types of noun incorporation in Ainu and its implications for morphosyntactic typology',
		editor: 'Ekaterina Gruzdeva & Juha Janhunen',
		container: 'Crosslinguistics and linguistic crossings in Northeast Asia (Studia Orientalia 117)',
		place: 'Helsinki',
		url: 'https://db.aynu.org/sources/2016-sato-tomomi-a-classification-of-the-types-of-noun-incorporation-in-ainu-and-its-implications-for-morphosyntactic-typology'
	},
	satoni2022: {
		region: 'general',
		author: 'Satō Tomomi 佐藤知己',
		citeAuthor: 'Satō',
		year: '2022',
		title: 'Noun incorporation in Ainu',
		editor: 'Anna Bugaeva',
		container: 'Handbook of the Ainu language (HJLL 12)',
		publisher: 'De Gruyter Mouton',
		place: 'Berlin & Boston',
		url: 'https://db.aynu.org/sources/2022-tomomi-sato-16-noun-incorporation-in-ainu'
	},
	dalcorso2020: {
		region: 'hokkaido',
		author: 'Dal Corso, Elia',
		citeAuthor: 'Dal Corso',
		year: '2020',
		title: 'The interaction of relativization and noun incorporation in Southern Hokkaidō Ainu',
		url: 'https://db.aynu.org/sources/2020-dal-corso-elia-the-interaction-of-relativization-and-noun-incorporation-in-southern-hokkaido-ainu'
	},
	barrie2021: {
		region: 'general',
		author: 'Barrie, Michael & Éric Mathieu',
		citeAuthor: 'Barrie & Mathieu',
		year: '2021',
		title: 'Noun incorporation and polysynthesis',
		url: 'https://db.aynu.org/sources/2021-barrie-michael-mathieu-eric-noun-incorporation-and-polysynthesis'
	},
	kaiser1998: {
		region: 'hokkaido',
		author: 'Kaiser, Lizanne',
		citeAuthor: 'Kaiser',
		year: '1998',
		title: 'The interaction of noun incorporation and applicative formation in Ainu',
		container: 'Yearbook of Morphology 1997',
		pages: '157–178',
		url: 'https://db.aynu.org/sources/1998-lizanne-kaiser-the-interaction-of-noun-incorporation-and-applicat'
	},

	// ───────────────────────── Tense / aspect / mood / auxiliaries ─────────────────────────
	tamura1960: {
		region: 'hokkaido',
		author: 'Tamura Suzuko 田村すゞ子',
		citeAuthor: 'Tamura',
		year: '1960',
		title: '沙流方言の助動詞',
		titleTr: 'Auxiliary verbs in the Saru dialect',
		lang: 'ja'
	},
	sato2006: {
		region: 'hokkaido',
		author: 'Satō Tomomi 佐藤知己',
		citeAuthor: 'Satō',
		year: '2006',
		title: '千歳方言のアスペクト——kor an、wa an',
		titleTr: 'Aspect in the Chitose dialect: kor an, wa an',
		lang: 'ja'
	},
	yoshikawa2020: {
		region: 'hokkaido',
		author: 'Yoshikawa Yoshimi 吉川佳見',
		citeAuthor: 'Yoshikawa',
		year: '2020',
		title: 'アイヌ語における存在型アスペクト形式',
		titleTr: 'Existential-type aspect forms in Ainu (dissertation)',
		lang: 'ja'
	},
	yoshikawa2022: {
		region: 'hokkaido',
		author: 'Yoshikawa Yoshimi 吉川佳見',
		citeAuthor: 'Yoshikawa',
		year: '2022',
		title: 'Existential aspectual forms in the Saru and Chitose dialects of Ainu',
		editor: 'Anna Bugaeva',
		container: 'Handbook of the Ainu language (HJLL 12)',
		publisher: 'De Gruyter Mouton',
		place: 'Berlin & Boston',
		url: 'https://db.aynu.org/sources/2022-yoshimi-yoshikawa-existential-aspectual-forms-in-the-saru-and-chitos'
	},
	refsing2011: {
		region: 'hokkaido',
		author: 'Refsing, Kirsten',
		citeAuthor: 'Refsing',
		year: '2011',
		title: 'Tense, aspect and actionality in the Ainu language',
		reported: true
	},

	// ───────────────────────── Evidentiality ─────────────────────────
	dalcorso2018: {
		region: 'general',
		author: 'Dal Corso, Elia',
		citeAuthor: 'Dal Corso',
		year: '2018',
		title: 'Ainu evidentiality: A semantico-pragmatic analysis and a morphosyntactic account',
		publisher: 'SOAS, University of London',
		place: 'London',
		note: 'PhD dissertation (the definitive study of Ainu evidentiality)'
	},
	takahashi2013: {
		region: 'hokkaido',
		author: 'Takahashi Yasui 髙橋靖以',
		citeAuthor: 'Takahashi',
		year: '2013',
		title: '十勝方言における証拠性と叙述類型',
		titleTr: 'Evidentiality and predication types in the Tokachi dialect',
		lang: 'ja'
	},
	takahashi2022: {
		region: 'general',
		author: 'Takahashi Yasui 髙橋靖以',
		citeAuthor: 'Takahashi',
		year: '2022',
		title: 'Aspect and evidentiality',
		editor: 'Anna Bugaeva',
		container: 'Handbook of the Ainu language (HJLL 12)',
		publisher: 'De Gruyter Mouton',
		place: 'Berlin & Boston',
		url: 'https://db.aynu.org/sources/2022-yasushige-takahashi-18-aspect-and-evidentiality'
	},
	hirosawa2026: {
		region: 'hokkaido',
		author: 'Hirosawa 廣澤',
		citeAuthor: 'Hirosawa',
		year: '2026',
		title: '証拠性表現の用法——ruwe ne を中心に',
		titleTr: 'The uses of evidential expressions, centred on ruwe ne',
		lang: 'ja'
	},

	// ───────────────────────── Negation ─────────────────────────
	takahashi2016: {
		region: 'hokkaido',
		author: 'Takahashi Yasui 髙橋靖以',
		citeAuthor: 'Takahashi',
		year: '2016',
		title: '十勝方言の否定構造について',
		titleTr: 'On the negation structures of the Tokachi dialect',
		lang: 'ja'
	},
	dalcorso2025neg: {
		region: 'sakhalin',
		author: 'Dal Corso, Elia',
		citeAuthor: 'Dal Corso',
		year: '2025',
		title: 'Negation in Sakhalin Ainu: History and typology',
		url: 'https://db.aynu.org/sources/2025-dal-corso-elia-negation-in-sakhalin-ainu-history-and-typology'
	},

	// ───────────────────────── Nominalization & relativization ─────────────────────────
	bugaeva2015: {
		region: 'general',
		author: 'Bugaeva, Anna',
		citeAuthor: 'Bugaeva',
		year: '2015',
		title: 'An equivalent of the standard of comparison relativization in Ainu',
		url: 'https://db.aynu.org/sources/2015-bugaeva-anna-an-equivalent-of-the-standard-of-comparison-relativization-in-ainu'
	},
	bugaeva2016: {
		region: 'sakhalin',
		author: 'Bugaeva, Anna',
		citeAuthor: 'Bugaeva',
		year: '2016',
		title: 'On the innovative nature of Sakhalin Ainu, focusing on nominalization',
		editor: 'Ekaterina Gruzdeva & Juha Janhunen',
		container: 'Linguistic crossings and crosslinguistics in Northeast Asia (Studia Orientalia 117)',
		place: 'Helsinki',
		url: 'https://db.aynu.org/sources/2016-bugaeva-anna-on-the-innovative-nature-of-sakhalin-ainu-focusing-on-nominalization'
	},
	takahashi2018: {
		region: 'hokkaido',
		author: 'Takahashi Yasui 髙橋靖以',
		citeAuthor: 'Takahashi',
		year: '2018',
		title: '幌別方言における名詞化辞の文法化',
		titleTr: 'The grammaticalization of nominalizers in the Horobetsu dialect',
		lang: 'ja'
	},

	// ───────────────────────── Possession ─────────────────────────
	bugaeva2021poss: {
		region: 'general',
		author: 'Bugaeva, Anna',
		citeAuthor: 'Bugaeva',
		year: '2021',
		title: 'Appositive possession in Ainu and around the Pacific',
		url: 'https://db.aynu.org/sources/2021-bugaeva-anna-appositive-possession-in-ainu-and-around-the-pacific'
	},
	sato2021: {
		region: 'hokkaido',
		author: 'Satō Tomomi 佐藤知己',
		citeAuthor: 'Satō',
		year: '2021',
		title: '千歳方言の位置名詞orの用法',
		titleTr: 'The uses of the locative noun or in the Chitose dialect',
		lang: 'ja'
	},
	huber2025: {
		region: 'hokkaido',
		author: 'Huber, Klára フダー・クラーラ',
		citeAuthor: 'Huber',
		year: '2025',
		title: '主観性から見たアイヌ語の所有表現',
		titleTr: 'Ainu possessive expressions from the perspective of subjectivity',
		lang: 'ja'
	},

	// ───────────────────────── Numerals & classifiers ─────────────────────────
	ochiai2021: {
		region: 'general',
		author: 'Ochiai Izumi 落合いずみ',
		citeAuthor: 'Ochiai',
		year: '2021',
		title: 'アイヌ語の数詞再考——二十進法における下方算法から上方算法へ',
		titleTr: 'Ainu numerals reconsidered: from subtractive to additive counting in the vigesimal system',
		lang: 'ja'
	},
	sakaguchi2022: {
		region: 'sakhalin',
		author: 'Sakaguchi Ryō 阪口諒',
		citeAuthor: 'Sakaguchi',
		year: '2022',
		title: '樺太方言における数詞と計算',
		titleTr: 'Numerals and calculation in the Sakhalin dialects',
		lang: 'ja'
	},
	peng1970: {
		region: 'general',
		author: 'Peng, Fred C. C. & Barron Brainerd',
		citeAuthor: 'Peng & Brainerd',
		year: '1970',
		title: 'A grammar of Ainu number names',
		container: 'Lingua 25',
		pages: '381–397',
		url: 'https://db.aynu.org/sources/1970-fred-c-c-peng-a-grammar-of-ainu-number-names',
		reported: true
	},

	// ───────────────────────── Demonstratives & deixis ─────────────────────────
	takahashi2011: {
		region: 'hokkaido',
		author: 'Takahashi Yasui 髙橋靖以',
		citeAuthor: 'Takahashi',
		year: '2011',
		title: '十勝方言の指示表現',
		titleTr: 'Demonstrative expressions in the Tokachi dialect',
		lang: 'ja'
	},

	// ───────────────────────── Logophoricity & reported speech ─────────────────────────
	bugaeva2008: {
		region: 'hokkaido',
		author: 'Bugaeva, Anna',
		citeAuthor: 'Bugaeva',
		year: '2008',
		title: 'Reported discourse and logophoricity in Southern Hokkaido dialects of Ainu',
		container: 'Gengo Kenkyū 133',
		pages: '31–75',
		url: 'https://db.aynu.org/sources/2008-bugaeva-anna-reported-discourse-and-logophoricity-in-southern-hokkaido-dialects-of-ainu'
	},
	nikitina2021: {
		region: 'general',
		author: 'Nikitina, Tatiana & Anna Bugaeva',
		citeAuthor: 'Nikitina & Bugaeva',
		year: '2021',
		title: 'Logophoric speech is not indirect: Towards a syntactic approach to reported speech constructions',
		container: 'Linguistics 59(3)',
		url: 'https://db.aynu.org/sources/2021-nikitina-tatiana-bugaeva-anna-logophoric-speech-is-not-indirect'
	},

	// ───────────────────────── Word order & basic syntax ─────────────────────────
	sato2025a: {
		region: 'hokkaido',
		author: 'Satō Tomomi 佐藤知己',
		citeAuthor: 'Satō',
		year: '2025',
		title: 'Basic sentence structures in Ainu',
		editor: 'Anna Bugaeva',
		container: 'Handbook of the Ainu language (HJLL 12)',
		publisher: 'De Gruyter Mouton',
		place: 'Berlin & Boston'
	},
	sato2025b: {
		region: 'hokkaido',
		author: 'Satō Tomomi 佐藤知己',
		citeAuthor: 'Satō',
		year: '2025',
		title: '書評：中川裕『アイヌ語広文典』',
		titleTr: "Review of Nakagawa Hiroshi's Ainugo kōbunten",
		lang: 'ja'
	},

	// ───────────────────────── Dialectology ─────────────────────────
	ono2020: {
		region: 'general',
		author: 'Ono, Yohei 小野洋平',
		citeAuthor: 'Ono',
		year: '2020',
		title: 'Reconsideration of the "major division" of Ainu dialects: A statistical reanalysis of Asai (1974)',
		container: 'Journal of the Linguistic Society of Japan'
	},
	nakagawafukazawa2022: {
		region: 'general',
		author: 'Nakagawa Hiroshi 中川裕 & Fukazawa Mika 深澤美香',
		citeAuthor: 'Nakagawa & Fukazawa',
		year: '2022',
		title: 'Hokkaido Ainu dialects: Towards a classification of Ainu dialects',
		editor: 'Anna Bugaeva',
		container: 'Handbook of the Ainu language (HJLL 12)',
		publisher: 'De Gruyter Mouton',
		place: 'Berlin & Boston',
		url: 'https://db.aynu.org/sources/2022-nakagawa-hiroshi-hokkaido-ainu-dialects-towards-a-classification-of'
	},
	fukazawaono2024: {
		region: 'general',
		author: 'Fukazawa Mika 深澤美香 & Ono Yohei 小野洋平',
		citeAuthor: 'Fukazawa & Ono',
		year: '2024',
		title: 'アイヌ語の方言境界再考',
		titleTr: 'Ainu dialect boundaries reconsidered',
		lang: 'ja'
	},
	kasuga2026: {
		region: 'general',
		author: 'Kasuga Hayato 春日勇人',
		citeAuthor: 'Kasuga',
		year: '2026',
		title: 'アイヌ語多地点方言分類——75地点の計量的分析',
		titleTr: 'A multi-locality classification of Ainu dialects: a quantitative analysis of 75 sites',
		lang: 'ja'
	},
	fukazawa2025: {
		region: 'hokkaido',
		author: 'Fukazawa Mika 深澤美香',
		citeAuthor: 'Fukazawa',
		year: '2025',
		title: '国立アイヌ民族博物館所蔵 知里真志保記入のアイヌ語基礎語彙調査表',
		titleTr: "Chiri Mashiho's annotated Ainu basic-vocabulary survey tables (National Ainu Museum)",
		lang: 'ja'
	},

	// ───────────────────────── Historical / comparative ─────────────────────────
	vovin1993: {
		region: 'general',
		author: 'Vovin, Alexander',
		citeAuthor: 'Vovin',
		year: '1993',
		title: 'A reconstruction of Proto-Ainu',
		container: "Brill's Japanese Studies Library 4",
		publisher: 'Brill',
		place: 'Leiden',
		reported: true
	},

	// ───────────────────────── Orthography & philology ─────────────────────────
	kirikae1997: {
		region: 'hokkaido',
		author: 'Kirikae Hideo 切替英雄',
		citeAuthor: 'Kirikae',
		year: '1997',
		title: 'アイヌによるアイヌ語表記',
		titleTr: 'Ainu-language orthography by Ainu',
		lang: 'ja'
	},
	nakagawa2006: {
		region: 'hokkaido',
		author: 'Nakagawa Hiroshi 中川裕',
		citeAuthor: 'Nakagawa',
		year: '2006',
		title: 'アイヌ人によるアイヌ語表記への取り組み',
		titleTr: 'Ainu efforts toward writing the Ainu language',
		lang: 'ja'
	},
	fukazawa2017: {
		region: 'hokkaido',
		author: 'Fukazawa Mika 深澤美香',
		citeAuthor: 'Fukazawa',
		year: '2017',
		title: '加賀家文書の文献学的研究',
		titleTr: 'A philological study of the Kaga-ke documents (dissertation)',
		lang: 'ja'
	},
	yasuoka2023: {
		region: 'general',
		author: 'Yasuoka Kōichi 安岡孝一 & Yasuoka Motoko 安岡素子',
		citeAuthor: 'Yasuoka & Yasuoka',
		year: '2023',
		title: '『蝦夷島奇觀』の漢訳アイヌ語',
		titleTr: 'The Sino-Ainu glosses of the Ezoshima kikan',
		lang: 'ja'
	},

	// ───────────────────────── Sociolinguistics & revitalization ─────────────────────────
	sato2012: {
		region: 'general',
		author: 'Satō Tomomi 佐藤知己',
		citeAuthor: 'Satō',
		year: '2012',
		title: 'アイヌ語の現状と復興',
		titleTr: 'The current situation and revitalization of the Ainu language',
		lang: 'ja'
	},
	ijas2023b: {
		region: 'hokkaido',
		author: 'Ijäs, Silja',
		citeAuthor: 'Ijäs',
		year: '2023',
		title: 'Language revitalization through lexical modernization and neologism-coining',
		note: 'On modern coinages; cite when discussing neo-Ainu forms (contrast boxes only)'
	},

	// ───────────────────────── Corpus / data resources ─────────────────────────
	ninjal2003: {
		region: 'hokkaido',
		author: 'National Institute for Japanese Language and Linguistics 国立国語研究所',
		citeAuthor: 'NINJAL',
		year: '2003',
		title: 'アイヌ語口承文芸コーパス',
		titleTr: 'Corpus of Ainu oral literature',
		url: 'https://ninjal-cjfle.ninjal.ac.jp/',
		note: 'Aligned Hokkaido Ainu oral-literature corpus with audio (Saru, Chitose, and other dialects); narrators include 木村きみ, 小田イト, and others. Cite the underlying narrator and document for examples.',
		lang: 'ja'
	},
	ainukoraci1991: {
		region: 'hokkaido',
		author: 'Ainu language learner group, Otaru アイヌ語学習者グループ（小樽）',
		citeAuthor: 'Ainu Koraci',
		year: '1991',
		title: 'アイヌタイムズ',
		titleTr: 'Ainu Times (Ainu language learners\' newsletter)',
		note: 'Periodical newsletter featuring texts by speakers including 神崎雅好, 浜田隆史, 丸野和子, 萱野志朗, and 横山裕之 (Saru and Chitose dialects). Cite the underlying contributor and issue for examples.',
		lang: 'ja'
	},
	glossedcorpus2016: {
		region: 'hokkaido',
		author: 'Nakagawa Hiroshi, Anna Bugaeva, Miki Kobayashi & Yoshimi Yoshikawa (eds.)',
		citeAuthor: 'Nakagawa et al.',
		year: '2016',
		title: 'A glossed audio corpus of Ainu folklore',
		url: 'https://db.aynu.org/sources/2016-nakagawa-hiroshi-a-glossed-audio-corpus-of-ainu-folklore',
		note: 'Online glossed Hokkaido folktale corpus (Chitose, Saru). Cite the underlying narrator/source for examples.'
	},
	ilcaa1976: {
		region: 'hokkaido',
		author: 'Research Institute for Languages and Cultures of Asia and Africa (ILCAA), Tokyo University of Foreign Studies',
		citeAuthor: 'ILCAA Ainu materials',
		year: '1976',
		title: 'AA研アイヌ語資料',
		titleTr: 'ILCAA Ainu language materials',
		url: 'https://db.aynu.org/sources/ilcaa-ainu-materials',
		note: 'Aligned Saru/Shizunai audio-text corpus (recordings 1976–1984); ainugo.aa-ken.jp. Cite the underlying narrator/document for examples.',
		lang: 'ja'
	},
	biratori1969: {
		region: 'hokkaido',
		author: 'Biratori Town Ainu oral-literature archive 平取町アイヌ口承文芸',
		citeAuthor: 'Biratori Ainu oral literature',
		year: '1969',
		title: '平取町アイヌ口承文芸',
		titleTr: 'Biratori Town Ainu oral literature',
		url: 'https://db.aynu.org/sources/biratori-ainu-oral-literature',
		note: 'Saru-dialect oral-literature corpus held by the National Ainu Museum (国立アイヌ民族博物館; ainugo.nam.go.jp). Cite the underlying narrator/document for examples.',
		lang: 'ja'
	},

	// ───────────────────────── Typological & theoretical frameworks (not held; cited for framing) ─────────────────────────
	mithun1984: {
		region: 'general',
		author: 'Mithun, Marianne',
		citeAuthor: 'Mithun',
		year: '1984',
		title: 'The evolution of noun incorporation',
		container: 'Language 60(4)',
		pages: '847–894',
		reported: true
	},
	baker1988: {
		region: 'general',
		author: 'Baker, Mark C.',
		citeAuthor: 'Baker',
		year: '1988',
		title: 'Incorporation: A theory of grammatical function changing',
		publisher: 'University of Chicago Press',
		place: 'Chicago',
		reported: true
	},
	keenancomrie1977: {
		region: 'general',
		author: 'Keenan, Edward L. & Bernard Comrie',
		citeAuthor: 'Keenan & Comrie',
		year: '1977',
		title: 'Noun phrase accessibility and universal grammar',
		container: 'Linguistic Inquiry 8(1)',
		pages: '63–99',
		reported: true
	},
	foleyvanvalin1984: {
		region: 'general',
		author: 'Foley, William A. & Robert D. Van Valin, Jr.',
		citeAuthor: 'Foley & Van Valin',
		year: '1984',
		title: 'Functional syntax and universal grammar',
		container: 'Cambridge Studies in Linguistics 38',
		publisher: 'Cambridge University Press',
		place: 'Cambridge',
		reported: true
	},
	aikhenvald2004: {
		region: 'general',
		author: 'Aikhenvald, Alexandra Y.',
		citeAuthor: 'Aikhenvald',
		year: '2004',
		title: 'Evidentiality',
		publisher: 'Oxford University Press',
		place: 'Oxford',
		reported: true
	},
	comrie1976: {
		region: 'general',
		author: 'Comrie, Bernard',
		citeAuthor: 'Comrie',
		year: '1976',
		title: 'Aspect: An introduction to the study of verbal aspect and related problems',
		publisher: 'Cambridge University Press',
		place: 'Cambridge',
		reported: true
	},
	bybee1994: {
		region: 'general',
		author: 'Bybee, Joan, Revere Perkins & William Pagliuca',
		citeAuthor: 'Bybee et al.',
		year: '1994',
		title: 'The evolution of grammar: Tense, aspect, and modality in the languages of the world',
		publisher: 'University of Chicago Press',
		place: 'Chicago',
		reported: true
	},
	talmy2000: {
		region: 'general',
		author: 'Talmy, Leonard',
		citeAuthor: 'Talmy',
		year: '2000',
		title: 'Toward a cognitive semantics',
		publisher: 'MIT Press',
		place: 'Cambridge, MA',
		reported: true
	},
	peterson2007: {
		region: 'general',
		author: 'Peterson, David A.',
		citeAuthor: 'Peterson',
		year: '2007',
		title: 'Applicative constructions',
		publisher: 'Oxford University Press',
		place: 'Oxford',
		reported: true
	},
	corbett2000: {
		region: 'general',
		author: 'Corbett, Greville G.',
		citeAuthor: 'Corbett',
		year: '2000',
		title: 'Number',
		publisher: 'Cambridge University Press',
		place: 'Cambridge',
		reported: true
	},
	miestamo2005: {
		region: 'general',
		author: 'Miestamo, Matti',
		citeAuthor: 'Miestamo',
		year: '2005',
		title: 'Standard negation: The negation of declarative verbal main clauses in a typological perspective',
		publisher: 'Mouton de Gruyter',
		place: 'Berlin',
		reported: true
	},
	haspelmath1997: {
		region: 'general',
		author: 'Haspelmath, Martin',
		citeAuthor: 'Haspelmath',
		year: '1997',
		title: 'Indefinite pronouns',
		container: 'Oxford Studies in Typology and Linguistic Theory',
		publisher: 'Oxford University Press',
		place: 'Oxford',
		reported: true
	},
	stassen1997: {
		region: 'general',
		author: 'Stassen, Leon',
		citeAuthor: 'Stassen',
		year: '1997',
		title: 'Intransitive predication',
		publisher: 'Oxford University Press',
		place: 'Oxford',
		reported: true
	},
	nichols1986: {
		region: 'general',
		author: 'Nichols, Johanna',
		citeAuthor: 'Nichols',
		year: '1986',
		title: 'Head-marking and dependent-marking grammar',
		container: 'Language 62(1)',
		pages: '56–119',
		reported: true
	},
	givon1978: {
		region: 'general',
		author: 'Givón, Talmy',
		citeAuthor: 'Givón',
		year: '1978',
		title: 'Negation in language: Pragmatics, function, ontology',
		editor: 'Peter Cole',
		container: 'Pragmatics (Syntax and Semantics 9)',
		pages: '69–112',
		publisher: 'Academic Press',
		place: 'New York',
		reported: true
	},
	croft1991: {
		region: 'general',
		author: 'Croft, William',
		citeAuthor: 'Croft',
		year: '1991',
		title: 'The evolution of negation',
		container: 'Journal of Linguistics 27(1)',
		pages: '1–27',
		reported: true
	}
};
