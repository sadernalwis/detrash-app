import { createI18nMiddleware } from 'next-international/middleware';

import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

const I18nMiddleware = createI18nMiddleware({
  defaultLocale: 'en',
  locales: ['en', 'es', 'pt'],
});

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)', '/dashboard/:path*'],
};

export default withMiddlewareAuthRequired(I18nMiddleware);
