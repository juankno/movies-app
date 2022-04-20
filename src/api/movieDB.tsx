import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '67a7664891dffbd9c47cd642d786395b',
        language: 'es-ES',
    },
});


export default movieDB;
