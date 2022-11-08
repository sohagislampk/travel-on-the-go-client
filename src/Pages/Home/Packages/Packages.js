import React, { useEffect, useState } from 'react';
import Package from './Package';



const Packages = () => {
    const [packages, setPackages] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div>
            <h1 className='w-1/3 mx-auto rounded-lg py-2 my-8 bg-sky-400 text-white text-3xl font-bold'>Our Tour Packages</h1>
            <div className='grid grid-cols-3 gap-6'>
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