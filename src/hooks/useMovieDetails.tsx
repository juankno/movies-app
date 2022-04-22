import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';

interface MovieDetails {
    isLoading: boolean;
    movieFull: MovieFull;
    cast: any[];
}

export const useMovieDetails = (movieId: number) => {

    const [first, setfirst] = useState<MovieDetails>();

    const getMovieDetails = async () => {
      const response = await movieDB.get<MovieFull>(`/${movieId}`);

      console.log(response.data.overview);
    };



    useEffect(() => {

      getMovieDetails();

    }, []);


};
