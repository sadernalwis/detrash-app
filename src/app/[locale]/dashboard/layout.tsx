import { Header } from '@/components/layouts/header';
import { PropsWithChildren } from 'react';

export default function SubLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
