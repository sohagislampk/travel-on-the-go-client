import React, { useEffect, useState } from 'react';

const ConmparePackage = () => {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/compare?productId=636aa36cdf167aefc978d4c9&&productid=636aa36cdf167aefc978d4c9')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data)
            })
    }, [])
    return (
        <div>
            <h1>Comapare Packages</h1>

            <div className='flex justify-around'>

                <h1>Package 1:</h1>
                <h2>Package 2 :</h2>
            </div>        </div>
    );
};

export default ConmparePackage;