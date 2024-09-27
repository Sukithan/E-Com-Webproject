import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className='container mx-auto px-4'>
      {/* Title Section */}
      <div className='text-center text-4xl font-bold pt-10 border-t'>
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Image */}
      <div className='flex flex-col justify-center items-center mb-6'> 
        <img 
              className="w-full md:w-1/2 m-5 rounded"
              src={assets.ContactUs} 
              alt="Contact Us Background" 
        />
      </div>

      {/* Contact Information & Form */}
      <div className='my-10 flex flex-col md:flex-row justify-between gap-10'>
        {/* Left Side: Contact Information */}
        <div className='relative w-full md:w-1/2 p-6 md:p-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg shadow-lg shadow-black overflow-hidden'>
  
          {/* Content on top of the background */}
          <div className='flex flex-col gap-4 items-center text-center'>
            <p className='font-bold text-xl md:text-3xl text-white'>Our Store</p>
            <p className='text-base md:text-lg font-semibold text-white'>
              <i className="fa-solid fa-location-dot"></i> 2536/2, Welawathe, Colombo-6
            </p>
            <p className='text-base md:text-lg font-semibold text-white'>
              <i className="fa-solid fa-phone"></i> Tel: 077 0890 678
            </p>
            <p className='text-base md:text-lg font-semibold text-white'>
              <i className="fa-solid fa-envelope"></i> Email: fgfzsgfsga@gmail.com
            </p>
            <p className='text-base md:text-lg font-semibold text-white'>
              <i className="fa-solid fa-lightbulb"></i> Careers at Forever
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className='bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg shadow-black w-full md:w-2/3'>
          <h3 className='text-2xl font-semibold mb-4 text-center'>Get in Touch</h3>
          <form className='flex flex-col gap-6'>
            <input 
              type='text' 
              placeholder='Your Name' 
              className='p-3 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500'
              required
            />
            <input 
              type='email' 
              placeholder='Your Email' 
              className='p-3 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500'
              required
            />
            <textarea 
              placeholder='Your Message' 
              className='p-3 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500 h-32'
              required
            ></textarea>
            <button 
              type='submit' 
              className='bg-pink-600 text-white py-3 rounded-md hover:bg-pink-800 transition duration-200'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
