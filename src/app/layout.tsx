import './globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './common/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Geraldo's Dev Blog",
  description: 'My personal blog about software development and other topics',
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
      </body>
    </html>
  );
}
