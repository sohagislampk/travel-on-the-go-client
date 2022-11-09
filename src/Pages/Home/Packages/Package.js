import { Button, Card } from 'flowbite-react';
import React from 'react';
import { BsCash, BsStopwatch } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Package = ({ tour }) => {
    const { name, picture, description, duration, price, _id } = tour;
    return (
        <div>
            <div className="max-w-sm">
                <Card >
                    <PhotoProvider>
                        <PhotoView src={picture}>
                            <img src={picture} alt="" className='rounded-lg' />
                        </PhotoView>
                    </PhotoProvider>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {description.slice(0, 100)} ...
                    </p>
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <BsStopwatch className='text-xl text-sky-500'></BsStopwatch>
                            <p className='mx-2'>{duration}</p>
                        </div>
                        <div className='flex items-center'>
                            <BsCash className='text-xl text-sky-500'></BsCash>
                            <p className='mx-2'> ${price}</p>
                        </div>
                    </div>
                    <div className='mx-auto'>
                        <Link to={`/packages/${_id}`} >
                            <Button gradientMonochrome="cyan">
                                View Details
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>

        </div>
    );
};

export default Package;