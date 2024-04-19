import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';

import { Toaster } from '@/components/ui/toaster';

import Providers from './providers';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description:
    "Let's end waste pollution at its source. Let's transform how we think about trash and recycling.",
  title: 'Recy - App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = cookies().get('Next-Locale')?.value || 'en';

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Providers locale={locale}>
          {children} <Toaster />
        </Providers>
      </body>
    </html>
  );
}
