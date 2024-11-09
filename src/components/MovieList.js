import React from 'react';

function MovieList({ movies, onSelectMovie }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="border rounded p-2 cursor-pointer bg-white"
          onClick={() => onSelectMovie(movie.imdbID)}
        >
          <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover mb-2" />
          <h2 className="text-lg font-semibold">{movie.Title}</h2>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;