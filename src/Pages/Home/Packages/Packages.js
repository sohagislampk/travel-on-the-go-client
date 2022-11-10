import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import Package from './Package';



const Packages = ({ size }) => {
    const [packages, setPackages] = useState([])
    useTitle('Packages')
    useEffect(() => {
        fetch(`https://travel-on-the-go-server.vercel.app/packages?limit=${size}`)
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div>
            <h1 className='lg:w-1/3 mx-auto rounded-lg py-2 my-4 lg:my-8 bg-sky-400 text-white text-3xl font-bold'>Our Tour Packages</h1>
            <div className='grid lg:grid-cols-3 gap-6 mx-8'>
                {
                    packages.map(tour => <Package
                        key={tour._id}
                        tour={tour}
                    ></Package>)
                }
            </div>
        </div>
    );
};

export default Packages;