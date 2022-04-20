import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import movieDB from '../api/movieDB';

type HomeScreenProps = StackNavigationProp<RootStackParams, 'HomeScreen'>;

export const HomeScreen = () => {

  const navigation = useNavigation<HomeScreenProps>();

  useEffect(() => {
    movieDB.get('/now_playing')
      .then(res => {
        console.log(JSON.stringify(res.data, null, 2));
      });
  }, []);


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
