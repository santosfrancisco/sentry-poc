import React from 'react';
import * as Sentry from '@sentry/react-native';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSentryHub } from './hooks/useSentryHub';

const ModuloB = () => {
  const sentryHub = useSentryHub();

  return (
    <View style={styles.container}>
      <Text>Módulo B</Text>
      <View style={styles.box}>
        <Button
          title="Throw new Error no Mod-B"
          onPress={() => {
            throw new Error('Erro lançado do módulo B');
          }}
        />
      </View>
      <View style={styles.box}>
        <Button
          title="Sentry.captureException no Mod-B"
          onPress={() => {
            sentryHub.captureException(
              'Erro lançado manualmente do hub no módulo B'
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: '100%',
    padding: 8,
  },
  box: {
    marginVertical: 10,
  },
});

export default Sentry.wrap(ModuloB);
