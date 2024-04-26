'use client';

import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import DashboardScreen from '@/modules/dashboard/screens/main';

export default withPageAuthRequired(function Dashboard() {
  return <DashboardScreen />;
});
