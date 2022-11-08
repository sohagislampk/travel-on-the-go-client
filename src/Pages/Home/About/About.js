import React from 'react';
import aboutImg from '../../../Assets/About/exploring-dream-place .jpg'
const About = () => {
    return (
        <div className='bg-gray-200 '>
            <div className='pt-8'>
                <h1 className='w-1/3 mx-auto rounded-lg py-2 my-4 bg-sky-400 text-white text-3xl font-bold'>Why Choose Us</h1>
            </div>
            <div className='grid grid-cols-2 py-4 px-24'>
                <div className='p-10'>
                    <img className=' border-8 border-white' src={aboutImg} alt="" />
                </div>

                <div className='p-10'>
                    <h1 className='text-2xl font-semibold mb-2'>Who are we?</h1>
                    <p> 'Travel on the go' is the country's first and leading online travel aggregator. Initially starting as Travel Booking BD, we dreamt of making travel easier for people of all ages. And that is what we have done since our inception. And now, with our new, innovative, easy to use Android and iOS mobile app, travel services are within your fingertips. The dynamic app lets you book your flight, hotel room and even find your perfect holiday from our thousands of holiday packages around the globe.

                    </p>
                    <br />
                    <p>
                        Travel On the go is revolutionising the way you book travel services. With us booking your flight, hotel, or holiday becomes more fun than you would think. With exciting games and real rewards like free trips and air tickets, Travel On The Go is more fun to use! You can also win TripCoin by playing games or booking a service from Travel On The Go, which you can use to avail yourself of the discount.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;