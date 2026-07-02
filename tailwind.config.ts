import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			// House style: no rounded corners anywhere. Every border-radius utility is
			// forced to 0 so a stray `rounded-*` can never reintroduce one — it suits the
			// cold/precise feel.
			borderRadius: {
				none: '0',
				sm: '0',
				DEFAULT: '0',
				md: '0',
				lg: '0',
				xl: '0',
				'2xl': '0',
				'3xl': '0',
				full: '0'
			},

			// IBM Plex superfamily (self-hosted). Serif = prose/body, Sans = UI/headings/nav,
			// Mono = interlinear example lines. Backed by the CSS vars defined in app.css.
			fontFamily: {
				serif: ['var(--font-serif)'],
				sans: ['var(--font-sans)'],
				mono: ['var(--font-mono)']
			},

			// Cold semantic palette, backed by the CSS custom properties in app.css.
			// Each token auto-flips under `prefers-color-scheme: dark`, so utilities like
			// `bg-canvas` / `text-fg` / `text-accent` are correct in both schemes.
			colors: {
				canvas: 'var(--color-canvas)',
				surface: 'var(--color-surface)',
				'surface-subtle': 'var(--color-surface-subtle)',
				'surface-hover': 'var(--color-surface-hover)',
				fg: 'var(--color-fg)',
				muted: 'var(--color-muted)',
				faint: 'var(--color-faint)',
				accent: 'var(--color-accent)',
				'accent-soft': 'var(--color-accent-soft)',
				'accent-contrast': 'var(--color-accent-contrast)',
				hairline: 'var(--color-border)',
				'hairline-strong': 'var(--color-border-strong)'
			},

			// Square elevation tokens, exposed as `shadow-raised` / `shadow-popover`
			// so chrome and popovers reference one source of truth.
			boxShadow: {
				raised: 'var(--shadow-raised)',
				popover: 'var(--shadow-popover)'
			},

			// The reading measure, exposed as `max-w-measure` (68ch).
			maxWidth: {
				measure: '68ch'
			},

			// Semantic spacing aliases backed by the 4/8px scale in app.css, so
			// components stop hand-rolling px/rem values (e.g. `p-space-4`, `mt-space-12`).
			spacing: {
				'space-1': 'var(--space-1)',
				'space-2': 'var(--space-2)',
				'space-3': 'var(--space-3)',
				'space-4': 'var(--space-4)',
				'space-6': 'var(--space-6)',
				'space-8': 'var(--space-8)',
				'space-12': 'var(--space-12)'
			}
		}
	},

	plugins: [forms, containerQueries, typography]
} satisfies Config;
