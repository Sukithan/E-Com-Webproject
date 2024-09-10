import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  

  return (
    <nav className='bg-gray-800 text-white'>
      <div className='flex items-center justify-between py-5 px-4 sm:px-8'>
        {/* Logo */}
        <div className='flex items-center space-x-4'>
          <img src={assets.Storelogo} className='w-40' alt="Store Logo" />
        </div>

        {/* Desktop Links */}
        <div className='hidden md:flex space-x-6'>
          <Link to='/' className='hover:text-yellow-500'>Home</Link>
          <Link to='/ProductCategory' className='hover:text-yellow-500'>Our Products</Link>
          <Link to='/Cart' className='hover:text-yellow-500'>Cart</Link>
          <Link to='/About_us' className='hover:text-yellow-500'>About Us</Link>
          <Link to='/Contact' className='hover:text-yellow-500'>Contact Us</Link>
        </div>

        {/* Search and Icons */}
        <div className='flex items-center space-x-4'>
          {/* Hide Search Bar on Small Screens */}
          <input 
            type='text' 
            placeholder='Search...' 
            className='hidden md:block px-4 py-2 rounded-md focus:outline-none text-black'
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

        {/* Hamburger Icon for Mobile */}
        <div className='md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='focus:outline-none'>
            <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='flex flex-col space-y-2 px-4 py-2 bg-gray-700'>
            <Link to='/' className='hover:text-yellow-500'>Home</Link>
            <Link to='/ProductCategory' className='hover:text-yellow-500'>Our Products</Link>
            <Link to='/Cart' className='hover:text-yellow-500'>Cart</Link>
            <Link to='/About_us' className='hover:text-yellow-500'>About Us</Link>
            <Link to='/Contact' className='hover:text-yellow-500'>Contact Us</Link>
            <Link to='/Login' className='hover:text-yellow-500'>Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
