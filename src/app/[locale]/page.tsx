import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

import HomeScreen from '@/modules/home/screens/main';

export default async function Home() {
  const session = await getSession();

  if (session) {
    redirect('/dashboard');
  }

  return <HomeScreen />;
}
