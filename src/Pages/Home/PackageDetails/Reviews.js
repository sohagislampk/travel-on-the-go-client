import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = ({ id }) => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.error(error));
    }, [reviews])

    return (
        <div>
            <h1 className='w-1/3 mx-auto rounded-lg py-2 my-8 bg-sky-400 text-white text-3xl font-bold'>Reviews</h1>
            {
                reviews.map(review => <Review
                    key={review._id}
                    foundReview={review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;