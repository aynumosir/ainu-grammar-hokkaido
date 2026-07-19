/**
 * form-card.svelte.ts — shared hover-card state for the grammar's `<A>` words.
 *
 * One popover serves the whole page: `A.svelte` calls `showCard(el, w)` on
 * hover/focus and `hideCard()` on leave/blur; `FormCard.svelte` (mounted once in
 * the grammar layout) reads `cardState` and renders the card. The state lives
 * here in a plain module so no prop drilling is needed.
 */

export const cardState = $state<{
	/** The `<A>` link the card is attached to. */
	anchor: HTMLElement | null;
	/** The Ainu form being looked up. */
	form: string;
	/** Whether the card is on screen (220 ms show delay already elapsed). */
	visible: boolean;
}>({ anchor: null, form: '', visible: false });

/** Delay before the card appears, so brushing across a word never flashes it. */
const SHOW_MS = 220;
/** Grace period on hide so the pointer can travel from anchor into the card. */
const HIDE_MS = 140;

let showTimer: ReturnType<typeof setTimeout> | null = null;
let hideTimer: ReturnType<typeof setTimeout> | null = null;

function clearTimers() {
	if (showTimer) clearTimeout(showTimer);
	if (hideTimer) clearTimeout(hideTimer);
	showTimer = hideTimer = null;
}

export function showCard(el: HTMLElement, form: string) {
	clearTimers();
	const same = cardState.anchor === el && cardState.form === form;
	cardState.anchor = el;
	cardState.form = form;
	if (same && cardState.visible) return;
	cardState.visible = false;
	showTimer = setTimeout(() => {
		showTimer = null;
		if (cardState.anchor === el) cardState.visible = true;
	}, SHOW_MS);
}

export function hideCard(immediate = false) {
	if (showTimer) clearTimeout(showTimer);
	showTimer = null;
	if (hideTimer) clearTimeout(hideTimer);
	hideTimer = null;
	const settle = () => {
		cardState.visible = false;
		cardState.anchor = null;
		cardState.form = '';
	};
	if (immediate || !cardState.visible) settle();
	else hideTimer = setTimeout(settle, HIDE_MS);
}

/** Cancel a pending hide — the pointer has moved into the card itself. */
export function keepCard() {
	if (hideTimer) clearTimeout(hideTimer);
	hideTimer = null;
}
