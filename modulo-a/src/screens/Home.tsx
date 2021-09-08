import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home do Módulo A</Text>
      <Button
        title="Ir para outra página no módulo A"
        onPress={() => navigation.navigate('ModuleA')}
      />
    </View>
  );
};
export default HomeScreen;
