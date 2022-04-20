import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, ActivityIndicator, Dimensions, FlatList, Text, ScrollView } from 'react-native';
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

  const { theatersMovies, isLoading } = useMovies();
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
            data={theatersMovies}
            renderItem={({ item }: any) => <CardMovie movie={item} />}
            sliderWidth={width}
            itemWidth={300}
          />
        </View>

        {/* Peliculas Populares */}

        <View style={{ backgroundColor: 'red', height: 260 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}> En cine</Text>
          <FlatList
            data={theatersMovies}
            renderItem={({ item }: any) => (
              <CardMovie
                movie={item}
                width={140}
                height={200}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

      </View>
    </ScrollView>

  );
};
