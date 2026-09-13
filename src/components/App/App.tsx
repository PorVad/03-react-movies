import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import fetchMovies from '../../services/movieService';
import{ type Movie } from '../../types/movie';
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    try {
      const movies = await fetchMovies(query);
      setMovies(movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <p>{movie.title}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}


export default App
