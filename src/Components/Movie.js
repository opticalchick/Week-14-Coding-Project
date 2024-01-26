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
        <div className='container'>
            <img src={movie.image} alt={movie.title}></img>


        </div>
    )
}