import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

// This is for the rating stars and submitting the user's personal rating.

const Stars = () => {
    const [rating, setRating] = useState(0);
    const [submittedReview, setSubmittedReview] = useState(false);

    const thisRatingChange = (event, newValue) => {
        setRating(newValue);
    };

    const submitThisReview = () => {
        setSubmittedReview(true);
    };

    return (
        <Box>
            {submittedReview ? (
                <p>Thank you for your rating!  Rated: {rating}</p>)
                : (
                    <div>
                        <Rating
                            name="stars"
                            value={rating}
                            onChange={thisRatingChange}
                            precision={0.5} />
                        <br></br>
                        <button onClick={submitThisReview}>Submit Your Rating</button>
                    </div>
                )}
        </Box>
    );
};

export default Stars;