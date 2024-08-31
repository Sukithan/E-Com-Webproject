import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-md w-full max-w-lg'>
        <h2 className='text-3xl font-bold mb-6 text-center'>Contact Us</h2>
        <div className='mb-4'>
          <label className='block text-sm font-medium mb-2'>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-500'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium mb-2'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-500'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-sm font-medium mb-2'>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-500'
            rows='4'
          ></textarea>
        </div>
        <button type='submit' className='w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600'>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
