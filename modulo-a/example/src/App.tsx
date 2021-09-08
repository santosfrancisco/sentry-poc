import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Sentry from '@sentry/react-native';
import ModuloA from 'react-native-modulo-a';
import pkg from '../../package.json';

export const initSentry = () => {
  Sentry.init({
    dsn: 'https://8d6fd957968e4e738263dd6087fa09bd@o983951.ingest.sentry.io/5945751',
    environment: 'develop',
    debug: true,
    release: pkg.version,
    onReady: () => console.log('Sentry start!', pkg.version),
    beforeSend: (event) => {
      console.log('Sending: ', event);
      return event;
    },
  });
};

initSentry();

const App = () => (
  <NavigationContainer>
    <ModuloA />
  </NavigationContainer>
);

export default App;
