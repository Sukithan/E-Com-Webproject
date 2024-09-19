import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentState, setCurrentState] = useState('Sign up');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login or signup logic here
    if (currentState === 'Sign up' && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100' style={{ backgroundImage: 'url("src/assets/Login_bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Left Side - Welcome Text */}
      <div className='text-left text-white w-1/2 flex flex-col justify-center' style={{marginLeft:'80px',marginRight:'auto'}}>
          <h1 className='text-6xl font-bold mb-4'>Welcome to C-Store</h1>
          <p className='text-3xl'>Your Local retailer is now Online!</p>
        </div>

      <div className='bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full' style={{ marginLeft: 'auto', marginRight: '20px' }}>
        <h2 className='text-2xl font-bold mb-8 text-center text-gray-700'>{currentState}</h2>

        {currentState === 'Sign up' && (
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Username</label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500'
              placeholder='Enter your username'
              required
            />
          </div>
        )}

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500'
            placeholder='Enter your email'
            required
          />
        </div>

        <div className='mb-6'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500'
            placeholder='Enter your password'
            required
          />
        </div>

  

            {currentState === 'Sign up' && (
          <div className='mb-6'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Confirm Password</label>
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500'
            placeholder='Confirm your password'
            required
          />
        </div>
        )}

        <div className='mb-8 text-right'>
          {currentState === 'Login' ?
            <p className='text-sm text-gray-600'>New here? <a className='text-indigo-500 cursor-pointer' onClick={() => setCurrentState('Sign up')}>Sign up</a></p>
            : <p className='text-sm text-gray-600'>Already have an account? <a className='text-indigo-500 cursor-pointer' onClick={() => setCurrentState('Login')}>Login</a></p>
          }
        </div>

        <button
          type='submit'
          className='w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-md transition duration-300'
        >
          {currentState === 'Login' ? 'Login' : 'Sign up'}
        </button>
      </div>
    </div>
  );
}

export default Login;



