import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBMoviesResponse, Movie } from '../interfaces/movieInterface';

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [theatersMovies, setTheatersMovies] = useState<Movie[]>([]);
    const [popularsMovies, setPopularsMovies] = useState<Movie[]>([]);

    const getMovies = async () => {

        const nowPlaying = await movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const populars = await movieDB.get<MovieDBMoviesResponse>('/popular');

         await movieDB.get<MovieDBMoviesResponse>('/top_rated');
         await movieDB.get<MovieDBMoviesResponse>('/upcoming');

        setTheatersMovies(nowPlaying.data.results);
        setPopularsMovies(populars.data.results);

        setIsLoading(false);
    };

    useEffect(() => {
        setTimeout(() => {
            getMovies();
        }, 1000);
    }, []);

    return {
        theatersMovies,
        popularsMovies,
        isLoading,
    };

};
