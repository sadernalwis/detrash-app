'use client';

import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import SubmitScreen from '@/modules/submit/screens/main';

export default withPageAuthRequired(function Submit() {
  return <SubmitScreen />;
});
