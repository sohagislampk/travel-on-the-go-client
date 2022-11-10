import { Button, Label, Textarea } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateReview = () => {
    const router = useParams();
    const { id } = router;
    const navigate = useNavigate();
    const [getReview, setGetReview] = useState({});
    useEffect(() => {
        fetch(`https://travel-on-the-go-server.vercel.app/updatereview/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setGetReview(data))
            .catch(error => console.error(error));
    }, [id])
    const handleUpdateReview = event => {
        event.preventDefault()
        const review = event.target.review.value;
        const updatedReview = {
            review: review
        }

        fetch(`https://travel-on-the-go-server.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Your review update successfully')
                    navigate('/myreviews')
                }
            })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <form onSubmit={handleUpdateReview} className='max-w-xl mx-auto text-left'>
                <h1 className='text-center mx-auto rounded-lg py-2 mt-8 mb-4 bg-sky-400 text-white text-3xl font-bold'>Update your Review</h1>
                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Update Your review"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        type="text"
                        name="review"
                        defaultValue={getReview.review}
                        required={true}
                        rows={4}
                    />
                </div>
                <div className='mx-auto my-6'>
                    <Button gradientMonochrome="cyan" type="submit">
                        Update
                    </Button>

                </div>
            </form>
        </div>
    );
};

export default UpdateReview;