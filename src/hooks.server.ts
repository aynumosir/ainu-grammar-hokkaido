import type { Handle } from '@sveltejs/kit';
import { i18n } from '$lib/i18n';
const handleParaglide: Handle = i18n.handle();
export const handle: Handle = ({ event, resolve }) => {
	if (event.route.id === '/sitemap.xml' || event.route.id === '/robots.txt') return resolve(event);
	return handleParaglide({ event, resolve });
};
