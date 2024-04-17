import { PropsWithChildren } from 'react';

export default function SubLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <header>Header</header>
      {children}
      <footer>footer</footer>
    </main>
  );
}
