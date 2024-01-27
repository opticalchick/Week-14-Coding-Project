import React from 'react';
import Movie from './Movie';

// This is a function to loop through the array of movies and map them 

const MoviesList = ({ movies }) => {
    return (
        <div>
            {movies.map((movie, index) => (
                <Movie key={index} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesList;