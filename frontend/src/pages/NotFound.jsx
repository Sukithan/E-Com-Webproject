import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold text-red-600 mb-4'>No Item Found</h1>
      <p className='text-lg text-gray-700 mb-6'>We couldn't find any results for your search.</p>
      <Link
        to='/ProductCategory'
        className='px-6 py-3 bg-purple-800 text-white rounded-md hover:bg-purple-600 transition duration-300 ease-in-out'
      >
        Browse Products
      </Link>
    </div>
  );
};

export default NotFound;
