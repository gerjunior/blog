import './globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Header from './common/header';
import { Footer } from './common/footer';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Geraldo's Dev Blog",
  description:
    'Explore software dev and beyond: code, career, and personal growth insights. Join the journey!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Script
          defer
          data-domain='geraldosilva.dev'
          src='https://plausible.io/js/script.js'
        ></Script>
        <Analytics />
      </body>
    </html>
  );
}
