import { Button, Card } from 'flowbite-react';
import React from 'react';
import { BsCash, BsStopwatch } from 'react-icons/bs'


const Package = ({ tour }) => {
    const { name, picture, description, duration, price } = tour;
    return (
        <div>
            <div className="max-w-sm">
                <Card imgSrc={picture}>
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
                        <Button gradientMonochrome="cyan">
                            View Details
                        </Button>
                    </div>
                </Card>
            </div>

        </div>
    );
};

export default Package;