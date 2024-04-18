'use client';
import LocaleToggler from '@/components/locale-toggler';
import { Button } from '@/components/ui/button';
import { LINKS } from '@/constants/';
import { useI18n } from '@/locales/client';
import Link from 'next/link';

import Image from 'next/image';
import { Suspense } from 'react';

export default function HomeScreen() {
  const t = useI18n();

  return (
    <div className="flex h-lvh flex-1 justify-between">
      <main className="flex h-full flex-1 flex-shrink-0 flex-col justify-center">
        <div className="absolute top-0 z-10 w-full p-5 ">
          <nav className="flex items-center justify-between">
            <Image src="/assets/brand/recy-logo.png" width={64} height={64} alt="Recy Logo" />

            <Link href={LINKS.WITHBOARD} target="_blank">
              <Button variant="secondary" className="uppercase" size="sm">
                whitepaper
              </Button>
            </Link>
          </nav>
        </div>

        <div className="flex max-w-xl flex-1 flex-col justify-center  gap-5 p-5">
          <h1 className="text-6xl font-bold">
            {t('home.welcomeMessage1')}
            <br /> <span className="text-primary">{t('home.welcomeMessage2')}</span>
          </h1>
          <p className="text-base  text-gray-500">{t('home.description')}</p>
          <Link href={LINKS.AUTH.LOGIN}>
            <Button size="lg" className="w-full">
              {t('home.login')}
            </Button>
          </Link>
        </div>

        <div className="flex  justify-center p-5">
          <Suspense>
            <LocaleToggler />
          </Suspense>
        </div>
      </main>
      <aside className="relative hidden h-lvh flex-1 flex-shrink basis-1/4 flex-col items-center justify-center xl:flex">
        <Image
          className="w-full object-cover sm:h-72 md:h-96"
          fill
          src="/assets/bg/ocean.jpg"
          alt="Ocean"
        />
      </aside>
    </div>
  );
}
