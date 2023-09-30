import axios from 'axios';    // 'https://api.themoviedb.org/3/movie/11?api_key=2ab89e1fe65871b0c48124dea1063a30'

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2ab89e1fe65871b0c48124dea1063a30';


const withRaseURL = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;




export class MovieService{
    static getMovies(){
        return axios (withRaseURL("movie/popular"));
    }

    static getMoviesDetails(id){
        return axios (withRaseURL(`movie/${id}`));
    }

    static searchMovies(movie){
        return axios (withRaseURL("search/movie") + `&query=${movie}`);
    }
}