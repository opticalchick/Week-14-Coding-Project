import React from "react";

const Review = ({ text }) => {
    return (
        <div className="review">
            <br></br>
            <p>{text.text}</p>
        </div>
    );
};

export default Review; 