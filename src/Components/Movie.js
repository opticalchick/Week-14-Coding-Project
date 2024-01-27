import React, { useState } from 'react';
import Stars from './Stars';
import ReviewsList from './ReviewsList';
import ReviewForm from './ReviewForm';
import '../App.css'

const Movie = ({ movie }) => {
    const [reviews, setReviews] = useState([]);
    function showReviews(newReview) {
        setReviews([reviews, newReview]);
    }

    return (
        <div className='movieContainer justify-content-center h-100'>
            <div className='row row-cols-1 row-cols-md-3 h-100'>
                <div className="card-columns">
                    <div className="card" style={{ 'borderRadius': '15px', 'width': '30rem' }} >
                        <div className="card-body text-center">
                            <img src={movie.image} alt={movie.title}></img>
                            <h2 className='movieTitle'>{movie.title}</h2>
                            <p className='movieSynopsis'>{movie.synopsis}</p>
                            <p className='movieRating'>{movie.rating}</p>
                            <Stars />
                            <br></br>
                            <ReviewsList reviews={reviews} />
                            <ReviewForm movie={movie} showReviews={showReviews} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;