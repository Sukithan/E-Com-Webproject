import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  

  return (
    <nav className='bg-purple-800 text-white'>
      <div className='flex items-center justify-between py-5 px-4 sm:px-8'>
        {/* Logo */}
        <div className='flex items-center space-x-4'>
          <img src={assets.Storelogo} className='w-40' alt="Store Logo" />
        </div>

        {/* Desktop Links */}
        <div className='hidden lg:flex space-x-6 lg:text-lg'>
          <Link to='/' className='hover:text-indigo-400 text-lg'>Home</Link>
          <Link to='/ProductCategory' className='hover:text-indigo-400'>Our Products</Link>
          <Link to='/Cart' className='hover:text-indigo-400'>Cart</Link>
          <Link to='/About_us' className='hover:text-indigo-400'>About Us</Link>
          <Link to='/Contact' className='hover:text-indigo-400'>Contact Us</Link>
        </div>

        {/* Search and Icons */}
        <div className='flex items-center space-x-4'>
          {/* Hide Search Bar on Small Screens */}
          <input 
            type='text' 
            placeholder='Search...' 
            className='hidden md:block px-4 py-2 rounded-md focus:outline-none text-black'
          />
          <Link to='/Login' className='hover:text-indigo-400 text-lg'>Login</Link>
          <div className='relative'>
            <Link to='/Cart'>
              <i className="fa-solid fa-cart-shopping text-2xl"></i> {/* Cart icon */}
            </Link>
            <span className='absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2'>
              3
           </span>
          </div>

        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='lg:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='focus:outline-none'>
            <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden'>
          <div className='flex flex-col space-y-2 px-4 py-2 bg-purple-800'>
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
