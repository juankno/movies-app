import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Config from 'react-native-config';
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../theme/appTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';

interface Props {
    movie: Movie;
    width?: number;
    height?: number;
}

type NavigationProps = StackNavigationProp<RootStackParams>;

export const CardMovie = ({ movie, width = 300, height = 420 }: Props) => {

    const uri = `${Config.API_IMG_URL}${movie.poster_path}`;

    const navigation = useNavigation<NavigationProps>();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.8}
            style={{
                ...styles.card,
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7,
            }}>
            <View style={styles.cardImage}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    );
};

