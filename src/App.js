import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState('');

  const searchMovies = async (title) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=34187b51
      &s=${title}`);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
        setError('');
      } else {
        setError('Nie znaleziono filmów o podanym tytule.');
        setMovies([]);
      }
    } catch (err) {
      setError('Wystąpił problem z połączeniem.');
    }
  };

  const selectMovie = async (id) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=34187b51
      &i=${id}`);
      setSelectedMovie(response.data);
    } catch (err) {
      setError('Nie udało się załadować szczegółów filmu.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Wyszukiwarka Filmów</h1>
      <SearchBar onSearch={searchMovies} />
      {error && <p className="text-red-500">{error}</p>}
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      ) : (
        <MovieList movies={movies} onSelectMovie={selectMovie} />
      )}
    </div>
  );
}

export default App;