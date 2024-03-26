import '~/styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';

import { NextIntlClientProvider, useMessages } from 'next-intl';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import i18nAvalibleLocales from '../../i18nAvalibleLocales.json';

import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import type { Viewport } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        metadataBase: new URL('https://emmamb.com'),
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        icons: [
            { rel: 'favicon', url: '/favicon.ico' },
            { rel: 'icon', url: '/icon.png' },
            { rel: 'apple-touch-icon', url: '/icon2.png' }
        ],
        alternates: {
            canonical: '/',
            languages: i18nAvalibleLocales.localesDir
        },
        openGraph: {
            determiner: '',
            title: t('title'),
            description: t('description'),
            url: 'https://emmamb.com',
            type: 'website',
            locale: t('locale'),
            images: [
                {
                    url: '/icon2.png',
                    width: 80,
                    height: 80,
                    alt: t('title')
                }
            ],
            alternateLocale: i18nAvalibleLocales.locales,
            countryName: 'CA',
            ttl: 604800
        },
        twitter: {
            card: 'summary',
            site: '@emma0mb',
            title: t('title'),
            description: t('description'),
            images: ['https://emmamb.com/icon2.png']
        },
        robots: {
            index: true,
            follow: true,
            nocache: true
        },
        other: {
            'google-site-verification': 'LaN35pw5rPNkAPt05x2SvVBb7Y1uhSBFNnt9EohQOqA'
        }
    };
}

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#c084fc' },
        { media: '(prefers-color-scheme: dark)', color: '#7e22ce' }
    ]
};

export default function RootLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = useMessages();
    return (
        <NextIntlClientProvider messages={messages}>
            <ThemeProvider attribute="class" defaultTheme="system">
                {children}
                <Analytics />
                <SpeedInsights />
            </ThemeProvider>
        </NextIntlClientProvider>
    );
}
