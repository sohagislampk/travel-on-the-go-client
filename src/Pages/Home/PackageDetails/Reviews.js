import React, { useEffect, useState } from 'react';
import Review from './Review';
import { AiOutlineArrowDown } from 'react-icons/ai'
const Reviews = ({ id }) => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://travel-on-the-go-server.vercel.app/reviews/${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.error(error));
    }, [reviews])

    return (
        <div>
            <h1 className='w-1/3 mx-auto rounded-lg py-2 my-8 bg-sky-400 text-white text-3xl font-bold'>Reviews</h1>
            {
                reviews.length ?
                    reviews.map(review => <Review
                        key={review._id}
                        foundReview={review}
                    ></Review>)
                    :
                    <div className='flex items-center justify-center'>
                        <p className='text-xl'>No Review yet ! Write a review </p>
                        <AiOutlineArrowDown className='text-2xl ml-2'></AiOutlineArrowDown>
                    </div>
            }
        </div>
    );
};

export default Reviews;