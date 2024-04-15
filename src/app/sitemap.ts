import i18nAvalibleLocales from "~/i18nAvalibleLocales.json"

export default function sitemap() {
    const baseUrl = 'https://emmamb.com';

    const alternates = i18nAvalibleLocales.locales.map(lang => ({
        lang: lang === 'en' ? baseUrl : `${baseUrl}/${lang}`
    }));
    return [
        {
            url: 'https://emmamb.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            alternates: {
                languages: alternates
            }
        }
    ];
}
