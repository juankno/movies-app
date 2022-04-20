import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { useMovies } from '../hooks/useMovies';
import { styles } from '../theme/appTheme';
import { CardMovie } from '../components/CardMovie';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type HomeScreenProps = StackNavigationProp<RootStackParams, 'HomeScreen'>;

export const HomeScreen = () => {

  const navigation = useNavigation<HomeScreenProps>();

  const { popularMovies, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View style={{ marginTop: top + 20 }}>
      <CardMovie
        movie={ popularMovies[3]}
      />
    </View>
  );
};
