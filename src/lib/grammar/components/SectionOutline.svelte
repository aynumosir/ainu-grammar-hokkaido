<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	/**
	 * In-chapter "On this page" outline. Progressive enhancement: after the chapter
	 * renders, it reads the <S> sections straight from the DOM (each renders a
	 * `<section id>` whose first child is the heading with a `.sec-num` label), so it
	 * needs no changes to S.svelte or the chapter files. Hidden when a page has no
	 * sections (e.g. placeholder chapters / the cover / back matter) — a clean
	 * no-op rather than an empty box.
	 */
	type Item = { id: string; label: string; title: string; level: number };
	let items = $state<Item[]>([]);
	let activeId = $state<string | null>(null);

	let observer: IntersectionObserver | null = null;
	const visible = new Set<string>();

	function scan() {
		const main = document.querySelector('.g-main');
		if (!main) {
			items = [];
			return;
		}
		const out: Item[] = [];
		for (const sec of main.querySelectorAll('section[id]')) {
			const id = sec.getAttribute('id');
			const h = sec.querySelector(':scope > h2, :scope > h3, :scope > h4');
			if (!id || !h) continue;
			const label = h.querySelector('.sec-num')?.textContent?.trim() ?? '';
			let title = (h.textContent ?? '').trim();
			if (label && title.startsWith(label)) title = title.slice(label.length).trim();
			out.push({ id, label, title, level: Number(h.tagName.slice(1)) });
		}
		items = out;
	}

	/**
	 * Scroll-spy that marks the section currently in view. The observer itself is
	 * passive (no animation), so it runs for everyone; the only motion — the
	 * highlight transition — is gated to `prefers-reduced-motion: no-preference`
	 * in CSS, keeping the feature reduced-motion-safe.
	 */
	function setupObserver() {
		observer?.disconnect();
		observer = null;
		visible.clear();
		if (typeof IntersectionObserver === 'undefined') return;
		const main = document.querySelector('.g-main');
		if (!main || !items.length) return;
		const sections = [...main.querySelectorAll('section[id]')].filter((s) =>
			items.some((it) => it.id === s.id)
		);
		if (!sections.length) return;
		observer = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					const id = e.target.getAttribute('id');
					if (!id) continue;
					if (e.isIntersecting) visible.add(id);
					else visible.delete(id);
				}
				// Highlight the topmost (document-order) section still in view.
				const first = items.find((it) => visible.has(it.id));
				if (first) activeId = first.id;
			},
			{ rootMargin: '0px 0px -65% 0px', threshold: 0 }
		);
		for (const s of sections) observer.observe(s);
	}

	function refresh() {
		scan();
		setupObserver();
	}

	onMount(() => {
		requestAnimationFrame(refresh);
		return () => observer?.disconnect();
	});
	afterNavigate(() => {
		activeId = null;
		requestAnimationFrame(refresh);
	});
</script>

{#if items.length}
	<nav class="g-outline" aria-label="On this page">
		<p class="g-outline-title">On this page</p>
		<ul>
			{#each items as it (it.id)}
				<li style:--depth={it.level - 2} class:active={activeId === it.id}>
					<a href={`#${it.id}`} aria-current={activeId === it.id ? 'location' : undefined}>
						{#if it.label}<span class="g-outline-num">{it.label}</span>{/if}
						{it.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
	.g-outline {
		margin-bottom: 1.5rem;
		padding-bottom: 1.25rem;
		border-bottom: 1px solid var(--color-border);
	}

	.g-outline-title {
		margin: 0 0 0.45rem;
		font-variant-caps: all-small-caps;
		letter-spacing: 0.08em;
		font-weight: 600;
		color: var(--color-muted);
	}

	.g-outline ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.g-outline li {
		margin: 0.1rem 0;
		padding-left: calc(0.4rem + var(--depth, 0) * 0.9rem);
		border-left: 2px solid transparent;
	}

	/* Current section (driven by the IntersectionObserver scroll-spy). */
	.g-outline li.active {
		border-left-color: var(--color-accent);
		background: var(--color-surface-subtle);
	}

	.g-outline li.active > a {
		color: var(--color-accent);
	}

	.g-outline a {
		display: block;
		color: var(--color-fg);
		text-decoration: none;
	}

	/* Gate the only motion (the highlight transition) to users who allow it. */
	@media (prefers-reduced-motion: no-preference) {
		.g-outline li,
		.g-outline a {
			transition:
				color 0.15s ease,
				border-color 0.15s ease,
				background-color 0.15s ease;
		}
	}

	.g-outline-num {
		color: var(--color-faint);
		font-variant-numeric: tabular-nums;
		margin-right: 0.2em;
	}

	.g-outline a:hover {
		color: var(--color-accent);
		text-decoration: underline;
	}
</style>
