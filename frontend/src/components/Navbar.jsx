import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 px-4 sm:px-8 bg-gray-800 text-white'>
      <div className='flex items-center space-x-4'>
        <img src={assets.Storelogo} className='w-40' alt="Store Logo" />
        <span className='text-2xl font-bold'>C-Store</span>
      </div>
      <div className='hidden md:flex space-x-6'>
        <Link to='/' className='hover:text-yellow-500'>Home</Link>
        <Link to='/Collection' className='hover:text-yellow-500'>Collection</Link>
        <Link to='/Cart' className='hover:text-yellow-500'>Cart</Link>
        <Link to='/About_us' className='hover:text-yellow-500'>About Us</Link>
        <Link to='/Contact' className='hover:text-yellow-500'>Contact Us</Link>
      </div>
      <div className='flex items-center space-x-4'>
        <input 
          type='text' 
          placeholder='Search...' 
          className='px-4 py-2 rounded-md focus:outline-none text-black'
        />
        <Link to='/Login' className='hover:text-yellow-500'>Login</Link>
        <div className='relative'>
          <Link to='/Cart'>
            <svg className='w-8 h-8' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l1-7H6.4m-1.4 9h16m-9-3h6a1 1 0 011 1v3a1 1 0 01-1 1h-7a1 1 0 01-1-1v-4z" />
            </svg>
          </Link>
          <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full'>3</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
