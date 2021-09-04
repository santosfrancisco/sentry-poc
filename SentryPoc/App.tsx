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
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import * as Sentry from '@sentry/react-native';

import {initSentry} from './config/sentry';
import ModuloA from 'react-native-modulo-a';
import ModuloB from 'react-native-modulo-b';

initSentry();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  React.useEffect(() => {
    Sentry.configureScope((scope) => {
      // enriquece o log com dados do user
      scope.setUser({
        id: 'id_user2',
        email: 'user2@email.com',
        username: 'username_do_user2',
        ip_address: 'localhost',
      });
    });
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={styles.sectionContainer}>
            <Text
              style={[
                styles.sectionTitle,
                {
                  color: isDarkMode ? Colors.white : Colors.black,
                },
              ]}>
              POC <Text style={styles.highlight}>Sentry</Text>
            </Text>
            <Button
              title="Lançar erro"
              onPress={() => {
                Sentry.addBreadcrumb({
                  message: 'Esse erro aconteceu ao clicar no botao Lancar erro',
                  category: 'Buttons',
                  type: 'tipo aviso',
                });

                throw new Error('First error!');
              }}
            />
            <Button
              color="green"
              title="Lançar erro com tag"
              onPress={() => {
                Sentry.setTag('tag', 'valor_da_tag');
                Sentry.setExtra(
                  'extra-info',
                  'aqui o valor da informaçào extra',
                );

                throw new Error('Second error!');
              }}
            />
            <ModuloA />
            <ModuloB />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Sentry.wrap(App);
