import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body className={`font-sans ${inter.variable}`}>{children}</body>
        </html>
    );
}
