<script lang="ts">
	import { goto } from '$app/navigation';
	import { loadIndex, search, type SearchDoc, type SearchResult } from '$lib/grammar/search';

	/**
	 * Grammar sidebar search. An accessible combobox: the index is fetched lazily
	 * on first focus/typing (kept off the initial bundle), results are ranked and
	 * highlighted, and the keyboard drives the listbox (↑/↓ to move, Enter to open,
	 * Esc to clear/close).
	 */

	let container = $state<HTMLElement>();
	let inputEl = $state<HTMLInputElement>();

	let query = $state('');
	let docs = $state<SearchDoc[] | null>(null);
	let loading = $state(false);
	let failed = $state(false);
	let open = $state(false);
	let active = $state(-1);

	const results = $derived<SearchResult[]>(docs && query.trim() ? search(query, docs) : []);

	async function ensureIndex() {
		if (docs || loading) return;
		loading = true;
		try {
			docs = await loadIndex();
		} catch {
			failed = true;
		} finally {
			loading = false;
		}
	}

	function onInput() {
		open = true;
		active = -1;
		ensureIndex();
	}

	function onFocus() {
		open = true;
		ensureIndex();
	}

	function onFocusOut(e: FocusEvent) {
		if (!container?.contains(e.relatedTarget as Node | null)) open = false;
	}

	function navigate(r: SearchResult) {
		open = false;
		query = '';
		active = -1;
		goto(r.href);
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowDown') {
			if (!results.length) return;
			e.preventDefault();
			active = (active + 1) % results.length;
		} else if (e.key === 'ArrowUp') {
			if (!results.length) return;
			e.preventDefault();
			active = (active - 1 + results.length) % results.length;
		} else if (e.key === 'Enter') {
			const r = active >= 0 ? results[active] : results[0];
			if (r) {
				e.preventDefault();
				navigate(r);
			}
		} else if (e.key === 'Escape') {
			if (query) {
				query = '';
				active = -1;
			} else {
				open = false;
				inputEl?.blur();
			}
		}
	}
</script>

<div class="g-search" bind:this={container} onfocusout={onFocusOut}>
	<label class="sr-only" for="grammar-search-input">Search the grammar</label>
	<input
		bind:this={inputEl}
		bind:value={query}
		id="grammar-search-input"
		class="g-search-input"
		type="text"
		role="combobox"
		aria-expanded={open && results.length > 0}
		aria-controls="grammar-search-results"
		aria-activedescendant={active >= 0 ? `gs-opt-${active}` : undefined}
		aria-autocomplete="list"
		autocomplete="off"
		spellcheck="false"
		placeholder="Search the grammar…"
		oninput={onInput}
		onfocus={onFocus}
		onkeydown={onKeydown}
	/>

	{#if open && query.trim()}
		<div class="g-search-panel" id="grammar-search-results">
			{#if loading && !docs}
				<p class="g-search-status" role="status">Loading…</p>
			{:else if failed}
				<p class="g-search-status" role="status">Search is unavailable right now.</p>
			{:else if results.length === 0}
				<p class="g-search-status" role="status">No matches for “{query.trim()}”.</p>
			{:else}
				<ul role="listbox" aria-label="Search results">
					{#each results as r, i (r.slug + (r.sectionId ?? ''))}
						<li
							id={`gs-opt-${i}`}
							role="option"
							aria-selected={i === active}
							class:active={i === active}
						>
							<a
								href={r.href}
								onclick={(e) => {
									e.preventDefault();
									navigate(r);
								}}
								onmouseenter={() => (active = i)}
							>
								<span class="gs-title">
									<span class="gs-num">{r.num}</span
									>{#each r.titleSegments as s}{#if s.hit}<mark>{s.text}</mark>{:else}{s.text}{/if}{/each}
								</span>
								{#if r.sectionSegments}
									<span class="gs-section"
										>{#each r.sectionSegments as s}{#if s.hit}<mark>{s.text}</mark>{:else}{s.text}{/if}{/each}</span
									>
								{/if}
								<span class="gs-snippet"
									>{#each r.snippet as s}{#if s.hit}<mark>{s.text}</mark>{:else}{s.text}{/if}{/each}</span
								>
							</a>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}
</div>

<style>
	.g-search {
		position: relative;
		margin-bottom: 1.25rem;
		font-family: var(--font-sans);
	}

	.g-search-input {
		width: 100%;
		font: inherit;
		font-size: 0.85rem;
		padding: 0.4rem 0.55rem;
		color: var(--color-fg);
		background: var(--color-surface);
		border: 1px solid var(--color-border-strong);
	}

	.g-search-input::placeholder {
		color: var(--color-faint);
	}

	.g-search-panel {
		position: absolute;
		z-index: 30;
		left: 0;
		right: 0;
		top: calc(100% + 2px);
		max-height: 24rem;
		overflow-y: auto;
		background: var(--color-surface);
		border: 1px solid var(--color-border-strong);
		box-shadow: var(--shadow-popover);
	}

	.g-search-status {
		margin: 0;
		padding: 0.6rem 0.7rem;
		font-size: 0.8rem;
		color: var(--color-muted);
	}

	.g-search-panel ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.g-search-panel li {
		border-top: 1px solid var(--color-border);
	}

	.g-search-panel li:first-child {
		border-top: none;
	}

	.g-search-panel a {
		display: block;
		padding: 0.45rem 0.7rem;
		text-decoration: none;
		color: var(--color-fg);
	}

	.g-search-panel li.active,
	.g-search-panel a:hover {
		background: var(--color-surface-subtle);
	}

	.gs-title {
		display: block;
		font-weight: 600;
		font-size: 0.82rem;
		line-height: 1.35;
	}

	.gs-num {
		color: var(--color-faint);
		font-variant-numeric: tabular-nums;
		margin-right: 0.4em;
	}

	.gs-section {
		display: block;
		font-size: 0.76rem;
		color: var(--color-accent);
		margin-top: 0.05rem;
	}

	.gs-snippet {
		display: block;
		font-size: 0.76rem;
		color: var(--color-muted);
		margin-top: 0.15rem;
		line-height: 1.4;
	}

	.g-search :global(mark) {
		background: var(--color-selection);
		color: inherit;
		font-weight: 600;
	}
</style>
