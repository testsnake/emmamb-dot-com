import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import supported from './i18nAvalibleLocales.json';
import { IntlErrorCode } from 'next-intl';

// Can be imported from a shared config
const locales = supported.locales;

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`../messages/${locale}.json`)).default,
        onError(error) {
            if (error.code === IntlErrorCode.MISSING_MESSAGE) {
                // Missing translations are expected and should only log an error
                console.error(error);
            } else {
                console.error(error);
            }
        },
        getMessageFallback({ namespace, key, error }) {
            const path = [namespace, key].filter((part) => part != null).join('.');

            if (error.code === IntlErrorCode.MISSING_MESSAGE) {
                return path;
            } else {
                return 'Dear developer, please fix this message: ' + path;
            }
        }
    };
});
