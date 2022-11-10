
import { Button, Carousel } from 'flowbite-react';
import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="h-56 lg:h-96 mt-4">
                <Carousel>
                    <div className="flex flex-col h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white banner-1 banner-overlay">
                        <h3 className='lg:text-lg text-white z-50' >Experiences The Largest See Beach</h3>
                        <h1 className='text-white text-2xl lg:text-5xl z-50 lg:my-6' >Bangladesh Is Open For Travel</h1>
                        <div className='z-50 mt-6'>
                            <Button gradientDuoTone="greenToBlue">
                                Explor The Packages
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white banner-2 banner-overlay">
                        <h3 className='lg:text-lg text-white z-50' >See World Like Never before</h3>
                        <h1 className='text-white text-2xl lg:text-5xl z-50 lg:my-6' >Travel with Travel On The Go</h1>
                        <div className='z-50 mt-6'>
                            <Button gradientDuoTone="greenToBlue">
                                Explor The Packages
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white banner-3 banner-overlay">
                        <h3 className='lg:text-lg text-white z-50' >Travel is your therapy</h3>
                        <h1 className='text-white text-2xl lg:text-5xl z-50 lg:my-6' >Dare to live the life you've always wanted</h1>
                        <div className='z-50 mt-6'>
                            <Button gradientDuoTone="greenToBlue">
                                Explor The Packages
                            </Button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;