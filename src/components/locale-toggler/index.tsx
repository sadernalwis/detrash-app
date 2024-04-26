'use client';
import { CheckIcon, LanguagesIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useChangeLocale, useCurrentLocale } from '@/locales/client';

import { Button } from '../ui/button';

// Todo: add icons for each language
const locales = [
  {
    icon: '🇺🇸',
    name: 'English',
    value: 'en',
  },
  {
    icon: '🇪🇸',
    name: 'Español',
    value: 'es',
  },
  {
    icon: '🇵🇹',
    name: 'Português',
    value: 'pt',
  },
];

export default function LocaleToggler() {
  const changeLocale = useChangeLocale({ preserveSearchParams: true });
  const currentLocale = useCurrentLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0">
          <LanguagesIcon className="h-6 w-6" />
          <span className="sr-only">Change Locale</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.value}
            onClick={() => changeLocale(locale.value as typeof currentLocale)}
            disabled={locale.value === currentLocale}
          >
            <span>
              {locale.name} {locale.icon}
            </span>
            {locale.value === currentLocale ? (
              <DropdownMenuShortcut>
                <CheckIcon className="h-4 w-4" />
              </DropdownMenuShortcut>
            ) : undefined}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
