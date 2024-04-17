'use client';

import LocaleToggler from '@/components/locale-toggler';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/locales/client';

import Image from 'next/image';

export default function SigninScreen() {
  const t = useI18n();

  return (
    <div className="flex h-lvh flex-1 justify-between">
      <main className="flex h-full flex-1 flex-shrink-0 flex-col justify-center">
        <div className="absolute top-0 z-10 w-full p-5 ">
          <nav className="flex items-center justify-between">
            <Image src="/assets/brand/recy-logo.png" width={88} height={88} alt="Recy Logo" />

            <Button variant="secondary" className="uppercase" size="sm">
              whitepaper
            </Button>
          </nav>
        </div>

        <div className="flex max-w-xl flex-1 flex-col justify-center  gap-5 p-5">
          <h1 className="text-6xl font-bold">
            {t('home.welcomeMessage1')}
            <br /> <span className="text-primary">{t('home.welcomeMessage2')}</span>
          </h1>
          <p className="text-base  text-gray-500">{t('home.description')}</p>
          <Button size="lg">{t('home.login')}</Button>
        </div>

        <div className="flex  justify-center p-5">
          <LocaleToggler />
        </div>
      </main>
      <aside className="relative hidden h-lvh flex-1 flex-shrink basis-1/4 flex-col items-center justify-center xl:flex">
        <Image
          className="w-full object-cover sm:h-72 md:h-96"
          fill
          src="/assets/bg/ocean.jpg"
          alt="Ocean"
        />
        quotes
      </aside>
    </div>
  );
}
