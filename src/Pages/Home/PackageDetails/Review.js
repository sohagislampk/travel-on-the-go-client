import { Avatar, Card } from 'flowbite-react';
import React from 'react';

const Review = ({ foundReview }) => {
    const { writerName, writerPhoto, review } = foundReview
    console.log(foundReview.writerName);
    return (
        <div className='text-left'>

            <Card>
                <div className="flex flex-wrap gap-2 items-center">
                    <Avatar
                        img={writerPhoto}
                        rounded={true}
                        bordered={true}
                    />
                    <p className='text-xl font-semibold'>{writerName}</p>
                </div>
                <p >{review}</p>
            </Card>
        </div>
    );
};

export default Review;