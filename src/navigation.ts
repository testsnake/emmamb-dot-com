import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import supported from './i18nAvalibleLocales.json';

export const locales = supported.locales;
export const localePrefix = 'as-needed';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales, localePrefix });
