import '@/styles/globals.css';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
