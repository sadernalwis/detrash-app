'use client';

import DashboardScreen from '@/modules/dashboard/screens/main';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function Dashboard() {
  return <DashboardScreen />;
});
