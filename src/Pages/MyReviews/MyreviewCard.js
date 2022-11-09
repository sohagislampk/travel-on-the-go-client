import { Avatar, Card, Tooltip } from 'flowbite-react';
import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
const MyreviewCard = ({ reviews, handleDelete }) => {
    const { writerName, writerPhoto, review, _id } = reviews;

    return (
        <div>
            <div className='flex items-center justify-around'>
                <div className='text-left m-4 w-2/3'>
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
                <div className='flex items-center'>
                    <Tooltip content="Edit Review">
                        <Card className='mr-4'>  <AiFillEdit className='text-2xl text-cyan-500'></AiFillEdit></Card>
                    </Tooltip>
                    <Tooltip content="Delete Review">
                        <Card onClick={() => handleDelete(_id)} className='mr-4'><AiFillDelete className='text-2xl text-red-500'></AiFillDelete></Card>
                    </Tooltip>

                </div>
            </div>
        </div>

    );
};

export default MyreviewCard;