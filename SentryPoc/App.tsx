/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import * as Sentry from '@sentry/react-native';

import {initSentry} from './config/sentry';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import ModA from './src/screens/ModA';
import ModB from './src/screens/ModB';
const routingInstrumentation = new Sentry.ReactNavigationV5Instrumentation();

const Stack = createStackNavigator();

initSentry(routingInstrumentation);

const App = () => {
  // Create a ref for the navigation container
  const navigation = React.useRef();
  React.useEffect(() => {
    Sentry.configureScope((scope) => {
      // enriquece o log com dados do user
      scope.setUser({
        id: 'id_user1',
        email: 'user1@email.com',
        username: 'username_do_user1',
      });
    });
  }, []);

  return (
    <NavigationContainer
      //@ts-ignore
      ref={navigation}
      onReady={() => {
        // Register the navigation container with the instrumentation
        routingInstrumentation.registerNavigationContainer(navigation);
      }}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ModA"
          component={ModA}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="ModB" component={ModB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Sentry.wrap(App);
