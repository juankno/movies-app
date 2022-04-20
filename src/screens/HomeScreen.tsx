import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { RootStackParams } from '../navigation/Navigation';
import { useMovies } from '../hooks/useMovies';
import { styles } from '../theme/appTheme';
import { CardMovie } from '../components/CardMovie';

type HomeScreenProps = StackNavigationProp<RootStackParams, 'HomeScreen'>;

const { width } = Dimensions.get('window');

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

      <View style={{ height: 440 }}>

        <Carousel
          data={popularMovies}
          renderItem={({ item }: any) => <CardMovie movie={item} />}
          sliderWidth={width}
          itemWidth={300}
        />
      </View>
    </View>
  );
};
