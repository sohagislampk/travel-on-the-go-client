import { Card } from 'flowbite-react';
import { useLoaderData } from 'react-router-dom';
import { BsCash, BsStopwatch, BsPeopleFill } from 'react-icons/bs'
import { FaBed } from 'react-icons/fa'
import AddReview from './AddReview';
import Reviews from './Reviews';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../../Hooks/useTitle';


const PackageDetails = () => {
    useTitle('Package Details')
    const {
        name,
        _id,
        price,
        picture,
        duration,
        location,
        group,
        room,
        description } = useLoaderData();
    return (

        <div className="max-w-full mx-12 my-10">
            <Card >
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img src={picture} alt="" className='rounded-lg' />
                    </PhotoView>
                </PhotoProvider>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
            </Card>
            <Card className='my-4'>

                <p className='text-center text-2xl font-semibold'>Tour Location : {location}</p>

                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <BsStopwatch className='text-xl text-sky-500'></BsStopwatch>
                        <p className='mx-2'>{duration}</p>
                    </div>
                    <div className='flex items-center'>
                        <BsCash className='text-xl text-sky-500'></BsCash>
                        <p className='mx-2'> ${price}</p>
                    </div>
                    <div className='flex items-center'>
                        <FaBed className='text-xl text-sky-500'></FaBed>
                        <p className='mx-2'> ${room}</p>
                    </div>
                    <div className='flex items-center'>
                        <BsPeopleFill className='text-xl text-sky-500'></BsPeopleFill>
                        <p className='mx-2'> ${group}</p>
                    </div>
                </div>
                <div></div>

            </Card>
            <Card>
                <p className='text-center text-2xl font-semibold'>Tour Details</p>
                <p>{description}</p>
            </Card>
            <Reviews id={_id}></Reviews>
            <AddReview id={_id}></AddReview>
        </div>
    );
};

export default PackageDetails;