import { useUser } from '@auth0/nextjs-auth0/client';

export default function DashboardScreen() {
  const { user } = useUser();
  return (
    <section className="my-5 sm:container">
      <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Welcome, {user?.name}</h1>
    </section>
  );
}
