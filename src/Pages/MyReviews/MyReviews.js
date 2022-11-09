
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyreviewCard from './MyreviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [allReviews, setAllReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllReviews(data))
            .catch(error => console.error(error));
    }, [allReviews])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
                headers: {

                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Review deleted successfully');
                        const remaining = allReviews.filter(review => review._id !== id);
                        setAllReviews(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <h1 className='w-1/3 mx-auto rounded-lg py-2 my-8 bg-sky-400 text-white text-3xl font-bold'>All Reviews</h1>
            {
                allReviews.length ?
                    allReviews.map(reviews => <MyreviewCard
                        key={reviews._id}
                        reviews={reviews}
                        handleDelete={handleDelete}
                    ></MyreviewCard>)
                    :
                    <p className='text-xl text-center my-40'>No reviews were added</p>

            }
        </div>
    );
};

export default MyReviews;