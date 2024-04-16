import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';

export default createMiddleware({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: 'en',

    // Use prefix for locale in the URL
    localePrefix: localePrefix
});

export const config = {
    // Matches all routes that are 
    // - not prefixed with /_ (e.g /_next and /_vercel) 
    // - not /api
    // - not a file
    matcher: ['^/((?!_)(?!api)[^.]+)$']
};
