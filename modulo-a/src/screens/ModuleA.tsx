import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSentryHub } from '../hooks/useSentryHub';

const ModuloA = () => {
  const sentryHub = useSentryHub();

  return (
    <View style={styles.container}>
      <Text>Módulo A</Text>
      <View style={styles.box}>
        <Button
          title="Throw new Error no Mod-A"
          onPress={() => {
            throw new Error('Erro lançado do módulo A.');
          }}
        />
      </View>
      <View style={styles.box}>
        <Button
          title="Sentry.captureException no Mod-A"
          onPress={() => {
            sentryHub.captureException(
              'Erro lançado manualmente do hub no módulo A'
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
    padding: 8,
  },
  box: {
    marginVertical: 10,
  },
});

export default ModuloA;
