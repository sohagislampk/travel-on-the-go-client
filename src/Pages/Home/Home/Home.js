import { Button } from 'flowbite-react';
import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import WhyChooseUs from '../WhyChooseUS/WhyChooseUs';
import { MdExpandMore } from 'react-icons/md'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Packages size={3}></Packages>
            <Link to={'/packages'}>
                <Button className='mx-auto mt-4 mb-12' gradientMonochrome="cyan">Show All Packages <MdExpandMore className='text-xl'></MdExpandMore></Button>
            </Link>
            <WhyChooseUs></WhyChooseUs>
            <About></About>
        </div>
    );
};

export default Home;