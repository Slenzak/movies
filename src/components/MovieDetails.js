import React from 'react';

function MovieDetails({ movie, onClose }) {
  return (
    <div className="border rounded p-4 bg-white">
      <button onClick={onClose} className="text-white mb-4 bg-blue-500 rounded p-2 ml-2" >Wróć do wyników</button>
      <img src={movie.Poster} alt={movie.Title} className="w-full h-80 object-cover mb-4" />
      <h2 className="text-2xl font-bold">{movie.Title}</h2>
      <p><strong>Rok:</strong> {movie.Year}</p>
      <p><strong>Reżyser:</strong> {movie.Director}</p>
      <p><strong>Opis:</strong> {movie.Plot}</p>
      <p><strong>Gatunek:</strong> {movie.Genre}</p>
      <p><strong>Obsada:</strong> {movie.Actors}</p>
      <p><strong>Ocena:</strong> {movie.imdbRating}</p>
    </div>
  );
}

export default MovieDetails;