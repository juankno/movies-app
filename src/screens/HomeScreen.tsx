import React from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { styles } from '../theme/appTheme';
import { CardMovie } from '../components/CardMovie';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width } = Dimensions.get('window');

export const HomeScreen = () => {


  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>

        {/* Carousel Principal */}
        <View style={{ height: 440 }}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }: any) => <CardMovie movie={item} />}
            sliderWidth={width}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        {/* Peliculas populares */}
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />

      </View>
    </ScrollView>

  );
};
