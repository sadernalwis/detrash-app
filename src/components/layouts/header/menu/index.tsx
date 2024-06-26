'use client';

import { Suspense } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LocaleToggler from '@/components/locale-toggler';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { LINKS } from '@/constants';

export const Menu = () => {
  const { user } = useUser();

  return (
    <NavigationMenu className="flex min-w-full justify-between">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={LINKS.NAV.HOME}>
            <Image
              src="/assets/brand/recy-logo.png"
              width={64}
              height={64}
              alt="Recy Logo"
              className="mr-4"
            />
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link className={`${navigationMenuTriggerStyle()}`} href={LINKS.NAV.DASHBOARD}>
            Dashboard
            <Icon
              icon="material-symbols-light:team-dashboard-outline"
              width="16"
              height="16"
              className="ml-1"
            />
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link className={navigationMenuTriggerStyle()} href={LINKS.NAV.SUBMIT_FORM}>
            Submit Form <Icon icon="ph:recycle" width="16" height="16" className="ml-1" />
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link className={navigationMenuTriggerStyle()} href={LINKS.NAV.ADMIN}>
            Admin
            <Icon icon="ic:sharp-admin-panel-settings" width="16" height="16" className="ml-1" />
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList>
        <NavigationMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Connect Wallet
                <Icon icon="ph:wallet-thin" width="16" height="16" className="ml-1" />
              </NavigationMenuLink>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Wallet</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Suspense>
            <LocaleToggler />
          </Suspense>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="px-4">
              <Avatar>
                <AvatarImage src={user?.picture ?? ''} alt="User profile" />
                <AvatarFallback className="text-xs">{user?.name}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={LINKS.NAV.PROFILE}>Your Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={LINKS.AUTH.LOGOUT}>Sign out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
