'use client';

import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import SettingsMainScreen from '@/modules/settings/screens/main';

export default withPageAuthRequired(function Profile() {
  return <SettingsMainScreen />;
});
