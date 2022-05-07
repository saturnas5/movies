import React from "react";

const Reviews = ({review}) => {

    return (
        <>
            <div className="review-box">
                <div className="review-box__user">
                    <img src={review?.author_details?.avatar_path?.replace('/', '')} alt="" className="review-box__user-img"/>
                    <div className="review-box__user-info">
                        <span>A review by {review.author}</span>
                        <span>Written by {review.author} on {review.created_at}</span>
                    </div>
                </div>
                <p className="review-box__content">
                    {review.content}
                </p>
            </div>
        </>
    )
}

export default Reviews;