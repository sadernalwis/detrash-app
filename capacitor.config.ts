import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'detrash.io',
  appName: 'detrash-app',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
