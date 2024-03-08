import '~/styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';

import { Inter } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans'
});

export const metadata = {
    title: 'Emma Meredith-Black',
    description: '',
    icons: [{ rel: 'icon', url: '/favicon.ico' }]
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
        <html lang={locale}>
            <body className={`font-sans ${inter.variable}`}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider attribute="class" defaultTheme="system">
                        {children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
