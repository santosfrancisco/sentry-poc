import 'react-native-gesture-handler';

import React from 'react';
import * as Sentry from '@sentry/react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/screens/Home';
import ModuleAScreen from '../src/screens/ModuleA';

const Stack = createStackNavigator();

const ModuloA = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeModA"
        component={HomeScreen}
        options={{ title: 'Home do módulo A' }}
      />
      <Stack.Screen name="ModuleA" component={ModuleAScreen} />
    </Stack.Navigator>
  );
};

export default Sentry.wrap(ModuloA);
