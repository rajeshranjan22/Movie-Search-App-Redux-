import React from 'react';
import { useSelector } from 'react-redux';

const MovieList = () => {
    const { movies, loading, error } = useSelector((state) => state.movies);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!movies || movies.length === 0) return <p>No results found.</p>;

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div key={movie.imdbID} className="movie-item">
                    <img src={movie.Poster} alt={movie.Title} />
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieList;