import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import MainHeader from './components/MainHeader';

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Course Platform',
  description: 'Learn Next.js with our comprehensive courses',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
