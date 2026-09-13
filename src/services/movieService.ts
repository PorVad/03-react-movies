import axios from 'axios';
import { type Movie } from '../types/movie';

async function fetchMovies(query: string): Promise<Movie[]> {
    try {
        const response = await axios.get<MovieHTTPResponse>(
            `https://api.themoviedb.org/3/search/movie`,{ 
                params: {
                    query: query,
                },
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
                }
            }
        );
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
}

interface MovieHTTPResponse {
    results: Movie[];
}


export default fetchMovies;