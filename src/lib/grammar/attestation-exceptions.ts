/** Forms printed in the grammar that no corpus token or database entry attests,
 *  each with the reason it is nonetheless legitimate. */
export interface AttestationException {
	/** Normalised form, as the audit computes it. */
	form: string;
	/** Why it may appear unattested: cite the source or state the status. */
	reason: string;
	/** Bibliography key when the form comes from a specific source. */
	source?: string;
}
export const attestationExceptions: AttestationException[] = [
	{
		form: 'irupaye',
		reason:
			'Chitose genre name (heroic epic retold in prose style), reported by Satō (2008: 259); absent from the Saru-dominated corpus.',
		source: 'sato2008'
	},
	{
		form: 'arkian',
		reason:
			'Printed as arki=an with the person-marker boundary, which the audit normalisation fuses; the bound form arki=an itself is corpus-attested (e.g. aa-irc/007#44).'
	},
	{
		form: 'eciokaya',
		reason:
			'Sakhalin second-person plural form in a SA-tagged contrast example cited to Murasaki (1979: 52) and Nakagawa (2024: 155).',
		source: 'murasaki1979'
	},
	{
		form: 'ennuure',
		reason:
			"Sakhalin 'en=nuure 'let me hear' in a SA-tagged contrast example cited to Murasaki (2025: 30); the audit normalisation fuses the SA 1SG.O prefix 'en=.",
		source: 'murasaki2025'
	},
	{
		form: 'kuytak',
		reason:
			"Solid-print citation of ku=ytak 'I pull it' illustrating the Hattori/Tamura orthographic convention in the orthography chapter; the fused spelling is the object of discussion."
	},
	{
		form: 'kk',
		reason:
			'Geminate cluster -kk- quoted as a phonological string in the Ainu→OJ loan-phonology discussion (Vovin 2022: §2), not a word form.',
		source: 'vovin2022'
	},
	{
		form: 'cisan',
		reason:
			"Hepburn-style respelling of cis=an 'we cry' in the orthography-comparison ladder (Nakagawa 2006: 3–5).",
		source: 'nakagawa2006'
	},
	{
		form: 'chisan',
		reason:
			"Hepburn-style respelling of cis=an 'we cry' in the orthography-comparison ladder (Nakagawa 2006: 3–5).",
		source: 'nakagawa2006'
	},
	{
		form: 'ajnu',
		reason:
			"Chiri Mashiho's 1942 one-letter-per-phoneme respelling of aynu 'person' in the orthography-comparison ladder (Nakagawa 2006: 3–5).",
		source: 'nakagawa2006'
	},
	{
		form: 'ch',
		reason:
			'Hepburn-style digraph for the affricate, quoted as an object of discussion in the historical-orthography chapter.'
	},
	{
		form: 'rv',
		reason:
			"Schematic syllable notation -rV ('-r + vowel') in the final-consonant discussion, not a word form."
	},
	{
		form: 'taarak',
		reason:
			"Nairo (Kuril) form 'smooth' quoted in the Nairo–Sakhalin–Hokkaido correspondence set (Tangiku 2022: §2.5).",
		source: 'tangiku2022'
	},
	{
		form: 'raarak',
		reason:
			"Sakhalin form 'smooth' quoted in the Nairo–Sakhalin–Hokkaido correspondence set (Tangiku 2022: §2.5).",
		source: 'tangiku2022'
	},
	{
		form: 'haspa',
		reason:
			"Bihoro prothetic-h form 'deaf' quoted in the discussion of Bihoro initial h- (Alonso de la Fuente 2022: §2.2.5).",
		source: 'alonso2022'
	},
	{
		form: 'vhv',
		reason:
			"Schematic affiliative notation -VhV (Janhunen's account, via Alonso de la Fuente 2022: §2.1), not a word form.",
		source: 'alonso2022'
	},
	{
		form: 'ih',
		reason:
			'Esutoru (Sakhalin) coda form -ih quoted in the subdialect coda discussion (Tangiku 2022: §2.3).',
		source: 'tangiku2022'
	}
];
