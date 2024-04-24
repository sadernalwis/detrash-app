'use client';

import { Menu } from './menu';

export const Header = () => {
  return (
    <header className="mx-auto my-5 flex items-center justify-between sm:container">
      <Menu />
    </header>
  );
};
