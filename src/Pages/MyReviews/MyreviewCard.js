import { Avatar, Card, Tooltip } from 'flowbite-react';
import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
const MyreviewCard = ({ reviews, handleDelete }) => {
    const { writerName, writerPhoto, review, _id, time, packageName } = reviews;
    const navigate = useNavigate();

    const handleUpdateReview = (id) => {
        navigate(`/myreviews/updatereview/${id}`)
    }
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
                            <p className='text-cyan-500'>{time}</p>
                        </div>
                        <p className='font-bold'>Package Name : {packageName}</p>
                        <p > <strong>Review :</strong> {review}</p>
                    </Card>
                </div>
                <div className='flex items-center'>
                    <Tooltip content="Edit Review">
                        <Card onClick={() => handleUpdateReview(_id)} className='mr-4'>  <AiFillEdit className='text-2xl text-cyan-500'></AiFillEdit></Card>
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