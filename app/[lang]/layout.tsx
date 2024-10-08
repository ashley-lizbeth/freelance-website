import { Inter } from 'next/font/google';

import { languages } from '../i18n/settings';
import './globals.css';

import Navbar from './components/navbar';
import Footer from './components/footer/footer';

export async function generateStaticParams() {
    return languages.map((lang) => ({ lang }));
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
    params: { lang },
}: Readonly<{
    children: React.ReactNode;
    params: { lang: string };
}>) {
    return (
        <html lang={lang} className="scroll-smooth">
            <body className={inter.className + ' bg-neutral-100'}>
                <Navbar lang={lang} />
                <div className="bg-white">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
