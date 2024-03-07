import createMiddleware from 'next-intl/middleware';
import supported from './i18nAvalibleLocales.json';

export default createMiddleware({
    // A list of all locales that are supported
    locales: supported.locales,

    // Used when no locale matches
    defaultLocale: 'en',

    // Imo prefixes are ugly
    localePrefix: 'never'
});

export const config = {
    // Matches all routes that are not prefixed with /_next or /_vercel or have a file extension
    matcher: ['/', '/((?!_next|_vercel|.*\\..*).*)']
};
