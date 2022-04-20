import React from 'react';
import { Image, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { styles } from '../theme/appTheme';

interface Props {
    movie: Movie;
}

export const CardMovie = ({ movie }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <View style={styles.card}>
            <View style={styles.cardImage}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </View>
    );
};

