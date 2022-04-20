import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying, Movie } from '../interfaces/movieInterface';

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [pupularMovies, setPupularMovies] = useState<Movie[]>([]);

    const getMovies = async () => {
        const response = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        const movies = response.data.results;
        setPupularMovies(movies);

        setIsLoading(false);
    };

    useEffect(() => {
        setTimeout(() => {
            getMovies();
        }, 1000);
    }, []);

    return {
        pupularMovies,
        isLoading,
    };

};
