'use client';

import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import DashboardAdminScreen from '@/modules/dashboard/screens/admin';

export default withPageAuthRequired(function DashboardAdmin() {
  return <DashboardAdminScreen />;
});
