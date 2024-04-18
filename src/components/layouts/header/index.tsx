'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from './menu';

export const Header = () => {
  const { user } = useUser();

  return (
    <header className="mx-auto flex items-center justify-between sm:container">
      <Link href="/dashboard">
        <Image src="/assets/brand/recy-logo.png" width={88} height={88} alt="Recy Logo" />
      </Link>

      <Menu user={user} />
    </header>
  );
};
