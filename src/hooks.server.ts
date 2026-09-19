import { redirect, type Handle } from '@sveltejs/kit';

// The site used to be served under locale prefixes; send those URLs to the
// unprefixed page permanently.
const localePrefix = /^\/(en|ja|ain-Latn|ain-Kana)(?=\/|$)/;

export const handle: Handle = ({ event, resolve }) => {
	const { pathname, search } = event.url;
	const match = localePrefix.exec(pathname);
	if (match) redirect(301, (pathname.slice(match[0].length) || '/') + search);
	return resolve(event);
};
