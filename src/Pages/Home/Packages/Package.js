import { Button, Card } from 'flowbite-react';
import React from 'react';

const Package = ({ tour }) => {
    const { name, picture, description } = tour;
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