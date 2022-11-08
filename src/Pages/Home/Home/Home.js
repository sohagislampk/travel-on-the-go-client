import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import WhyChooseUs from '../WhyChooseUS/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <WhyChooseUs></WhyChooseUs>
            <About></About>
        </div>
    );
};

export default Home;