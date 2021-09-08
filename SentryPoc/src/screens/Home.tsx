import * as React from 'react';
import * as Sentry from '@sentry/react-native';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text>
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
            Sentry.setExtra('extra-info', 'aqui o valor da informaçào extra');

            throw new Error('Second error!');
          }}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Button
          color="lime"
          title="Ir para módulo A"
          onPress={() => navigation.navigate('ModA')}
        />
        <Button
          color="orange"
          title="Ir para módulo B"
          onPress={() =>
            navigation.navigate({
              name: 'ModB',
              params: {
                cpf: '53945299063',
                nome: 'Fulano',
                ip: '123.123.123.12',
              },
            })
          }
        />
      </View>
    </>
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

export default Home;
