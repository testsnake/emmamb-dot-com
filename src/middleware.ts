import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';

export default createMiddleware({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: 'en',

    localePrefix: localePrefix
});

export const config = {
    // Matches all routes that are not prefixed with /_next or /_vercel or have a file extension
    matcher: ['/', '/([\\w-]+)', '/([\\w-]+)?/contact/(.+)', '/((?!_next|_vercel|.*\\..*).*)']
};
