import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';

type HomeScreenProps = StackNavigationProp<RootStackParams, 'HomeScreen'>;

export const HomeScreen = () => {

  const navigation = useNavigation<HomeScreenProps>();

  return (
    <View>
      <Text>HomeScreen</Text>

      <Button
        title="Ir a detalle"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};
