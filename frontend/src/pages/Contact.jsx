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

      {/* Contact Information & Form */}
      <div className='my-10 flex flex-col md:flex-row justify-between gap-10 mb-28'>
        
        {/* Left Side: Contact Information */}
        <div className='relative w-full md:w-1/3 p-20 bg-black rounded-lg shadow-lg shadow-black overflow-hidden'>
          {/* Background Image */}
          <img 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            src={assets.ContactUs} 
            alt="Contact Us Background" 
          />
          
          {/* Content on top of the background */}
          <div className='relative z-10 flex flex-col gap-4 justify-center text-center md:text-left'>
            <p className='font-bold text-4xl text-white'>Our Store</p>
            <p className='text-xl font-semibold text-white'>
              2536/2, Welawathe, <br />
              Colombo-6
            </p>
            <p className='text-xl font-semibold text-white'>
              Tel: 077 0890 678 <br />
              Email: fgfzsgfsga@gmail.com
            </p>
            <p className='text-xl font-semibold text-white'>Careers at Forever</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className='bg-gray-100 p-8 rounded-lg shadow-lg shadow-black w-full md:w-2/3'>
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
              className='bg-rose-600 text-white py-3 rounded-md hover:bg-rose-800 transition duration-200'
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
