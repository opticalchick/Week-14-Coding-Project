import React from 'react';
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
        <div className='movieContainer'>
            <img src={movie.image} alt={movie.title}></img>
            <h2 className='movieTitle'>{movie.title}</h2>
            <p className='movieSynopsis'>{movie.synopsis}</p>
            <p className='movieRating'>{movie.rating}</p>
            <Stars />
            <ReviewsList reviews={reviews} />
            <ReviewForm movie={movie} showReviews={showReviews} />
        </div>
    );
};

export default Movie;