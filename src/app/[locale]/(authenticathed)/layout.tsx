import { PropsWithChildren } from 'react';

import { Header } from '@/components/layouts/header';

export default function SubLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
