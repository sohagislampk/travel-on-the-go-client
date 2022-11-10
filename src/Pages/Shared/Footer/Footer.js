import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>

            <footer className="p-4 mt-16 bg-gray-100 rounded-lg shadow-xl md:px-6 md:py-8 dark:bg-gray-900">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to={'/'} className="flex items-center mb-4 sm:mb-0">
                        <img src={'Travel On The Go.png'} className="mr-3 h-12" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TOTG</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to={'/'} className="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link to={'/'} className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to={'/'} className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
                        </li>
                        <li>
                            <Link to={'/'} className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link to={'/'} className="hover:underline">Travel On The Go™</Link>. All Rights Reserved.
                </span>
            </footer>

        </div>
    );
};

export default Footer;