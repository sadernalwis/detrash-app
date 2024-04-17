'use client';

import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ReactNode } from 'react';
import { I18nProviderClient } from '../../locales/client';

export default function Providers({ locale, children }: { locale: string; children: ReactNode }) {
  return (
    <UserProvider>
      <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
    </UserProvider>
  );
}
