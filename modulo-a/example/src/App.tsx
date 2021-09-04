import * as React from 'react';
import ModuloA from 'react-native-modulo-a';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import pkg from '../../package.json';

import * as Sentry from '@sentry/react-native';

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

const App = () => {
  return (
    <SafeAreaView>
      <View style={{ height: 100 }}>
        <ModuloA />
      </View>
    </SafeAreaView>
  );
};

export default App;
