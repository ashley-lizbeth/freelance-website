import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { languages } from '../i18n/settings';
import './globals.css';

import Navbar from './components/navbar';

export async function generateStaticParams() {
    return languages.map((lang) => ({ lang }));
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
    params: { lang },
}: Readonly<{
    children: React.ReactNode;
    params: { lang: string };
}>) {
    return (
        <html lang={lang} className="scroll-smooth">
            <body className={inter.className}>
                <Navbar lang={lang} />
                {children}
            </body>
        </html>
    );
}
