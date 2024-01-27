import React from "react";

// function to display the review 

const Review = ({ text }) => {
    return (
        <div className="review">
            <br></br>
            <p>{text.text}</p>
        </div>
    );
};

export default Review; 