import React from 'react';
import { Image, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../theme/appTheme';

interface Props {
    movie: Movie;
    width?: number;
    height?: number;
}

export const CardMovie = ({ movie, width = 300, height = 420 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <View style={{
            ...styles.card,
            width,
            height,
            marginHorizontal: 8,
        }}>
            <View style={styles.cardImage}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </View>
    );
};

