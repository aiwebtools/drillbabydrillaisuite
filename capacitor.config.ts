import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.0973584f706d468a9c02be735caf36c3',
  appName: 'drillbabydrillaisuite',
  webDir: 'dist',
  server: {
    url: 'https://0973584f-706d-468a-9c02-be735caf36c3.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;