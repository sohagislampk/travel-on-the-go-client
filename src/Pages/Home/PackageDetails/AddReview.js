import { Button, Label, Textarea } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const AddReview = ({ id }) => {
    const { user } = useContext(AuthContext);
    const [tourPackage, setTourPackage] = useState([])
    const { _id, name } = tourPackage;
    const { email, displayName, photoURL } = user
    useEffect(() => {
        fetch(`http://localhost:5000/packages/${id}`)
            .then(res => res.json())
            .then(data => setTourPackage(data))
            .catch(error => console.error(error));
    }, [])

    const handleAddReview = event => {
        event.preventDefault();
        const review = event.target.review.value;
        const addedReview = {
            package: _id,
            packageName: name,
            writerName: displayName,
            writerEmail: email,
            writerPhoto: photoURL,
            review: review,
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addedReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Your review added successfully')
                    event.target.reset();

                }
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <form onSubmit={handleAddReview} className='max-w-xl mx-auto text-left'>
                <h1 className='text-center mx-auto rounded-lg py-2 mt-8 mb-4 bg-sky-400 text-white text-3xl font-bold'>Write A Review</h1>
                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Write review"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        placeholder="Write review here .."
                        type="text"
                        name="review"
                        required={true}
                        rows={4}
                    />
                </div>
                <div className='mx-auto my-6'>
                    <Button gradientMonochrome="cyan" type="submit">
                        Submit
                    </Button>

                </div>
            </form>

        </div>
    );
};

export default AddReview;