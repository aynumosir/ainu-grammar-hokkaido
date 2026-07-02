import * as runtime from '$lib/paraglide/runtime';
import { createI18n } from '@inlang/paraglide-sveltekit';
export const i18n = createI18n(runtime, {
	prefixDefaultLanguage: 'always',
	// We emit canonical + hreflang ourselves in +layout.svelte using the absolute
	// CANONICAL_HOSTNAME; paraglide's built-in links use the request origin, which
	// is the `sveltekit-prerender` placeholder in prerendered output.
	seo: { noAlternateLinks: true }
});
