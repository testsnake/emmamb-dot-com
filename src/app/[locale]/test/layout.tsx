import '~/styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';

import { NextIntlClientProvider, useMessages } from 'next-intl';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import i18nAvalibleLocales from '~/i18nAvalibleLocales.json';

import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import type { Viewport } from 'next';

export default function RootLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}): JSX.Element {
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