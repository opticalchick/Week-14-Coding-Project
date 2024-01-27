import React from 'react';
import Review from "./Review";

// This is a function to loop through reviews and remap when a new review is added.

const ReviewsList = ({ reviews }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            {reviews &&
                reviews.map((review, index) => <Review key={index} text={review} />)}
        </div>
    );
};

export default ReviewsList;