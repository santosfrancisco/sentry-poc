import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import ModuloB from 'react-native-modulo-b';

const ModB = () => {
  return (
    <View style={{height: 100}}>
      <ModuloB />
    </View>
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

export default ModB;
