import { Avatar, Card } from 'flowbite-react';
import React from 'react';

const MyreviewCard = ({ reviews }) => {
    const { writerName, writerPhoto, review } = reviews;
    return (
        <div>
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
        </div>
    );
};

export default MyreviewCard;