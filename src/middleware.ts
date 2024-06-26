import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';
import { NextRequest } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';

export default withMiddlewareAuthRequired();

const I18nMiddleware = createI18nMiddleware({
  defaultLocale: 'en',
  locales: ['en', 'es', 'pt'],
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)', '/dashboard/:path*'],
};
