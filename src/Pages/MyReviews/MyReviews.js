
import React, { useEffect, useState } from 'react';
import MyreviewCard from './MyreviewCard';

const MyReviews = () => {
    const [allReviews, setAllReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setAllReviews(data))
            .catch(error => console.error(error));
    }, [allReviews])

    return (
        <div>
            {
                allReviews.map(reviews => <MyreviewCard
                    key={reviews._id}
                    reviews={reviews}
                ></MyreviewCard>)
            }
        </div>
    );
};

export default MyReviews;