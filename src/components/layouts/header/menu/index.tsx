'use client';

import { Suspense } from 'react';
import { UserProfile } from '@auth0/nextjs-auth0/client';
import { Icon } from '@iconify/react';
import Link from 'next/link';

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

type HeaderProps = {
  user?: UserProfile;
};

export const Menu = ({ user }: HeaderProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={LINKS.NAV.ADMIN} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Admin
              <Icon icon="ic:sharp-admin-panel-settings" width="16" height="16" className="ml-1" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            className={navigationMenuTriggerStyle()}
            href={LINKS.NAV.SUBMIT_FORM}
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Submit Form <Icon icon="ph:recycle" width="16" height="16" className="ml-1" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className={navigationMenuTriggerStyle()}>
                Connect Wallet
                <Icon icon="ph:wallet-thin" width="16" height="16" className="ml-1" />
              </div>
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
                <AvatarFallback>{user?.name}</AvatarFallback>
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
