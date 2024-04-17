import { Toaster } from '@/components/ui/toaster';
import SigninScreen from '@/modules/users/screens/signin';
import Providers from './providers';

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <Providers locale={locale}>
      <SigninScreen />
      <Toaster />
    </Providers>
  );
}
