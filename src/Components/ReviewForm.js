import React, { useState } from 'react';
import ReviewsList from "./ReviewsList";



const ReviewForm = ({ value, movie }) => {
    const [review, setReview] = useState('');
    const [reviews, setReviews] = useState([]);


    const onChange = () => {
        const textAreaDataReview = document.getElementById(
            `review-textarea-${movie.id}`
        ).value;

        setReview(textAreaDataReview);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        const newReview = {
            id: Date.now(),
            text: review,
        };

        setReviews([...reviews, newReview]);

        setReview("");

    };

    return (
        <div>
            <h3>Review Form</h3>
            <form onSubmit={onSubmit}>
                <label htmlFor={`review-textarea-${movie.id}`}>Leave a Review Here:</label>
                <br></br>
                <textarea
                    id={`review-textarea-${movie.id}`}
                    name='review'
                    rows='5'
                    cols='45'
                    value={review}
                    onChange={onChange} />
                <br></br>
                <button type="submit">Submit Your Review</button>
            </form>
            <ReviewsList reviews={reviews} />
        </div>
    );
};

export default ReviewForm;
