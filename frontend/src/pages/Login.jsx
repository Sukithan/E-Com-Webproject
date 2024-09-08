import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentState, setCurrentState] = useState('Sign up');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };


  return (
    <div className='flex justify-center items-center h-screen bg-gray-200'>
      <form onSubmit={handleLogin} className='bg-white p-8 rounded-lg shadow-md w-full max-w-sm'>

        <h2 className='text-2xl font-bold mb-6 text-center'>{currentState}</h2>

        {currentState === 'Login' ? '':
        <div className='mb-4'>
          <label className='block text-sm font-medium mb-2'>Username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-500' placeholder='user name eca methana ghanna' required
          />
        </div>
        }

        <div className='mb-5'>
          <label className='block text-sm font-medium mb-2'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-500' placeholder='email eca methana ghanna' required
          />
        </div>

        <div className='mb-6'>
          <label className='block text-sm font-medium mb-2'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-yellow-500' placeholder='password eca methana gahanna' required
          />
        </div>

        <div className='mb-7'>
          {currentState === 'Login' ?
          <p className='cursor-pointer'>New here? <a className='cursor-pointer' onClick={()=>setCurrentState('Sign up')}> Sign up</a></p>
          :<p className='cursor-pointer' >Already have an account? <a onClick={()=>setCurrentState('Login')}>Login</a></p>
          }

        </div>

        {currentState === 'Login' ? 
        <button type='submit' className='w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600'>Login</button>
        : <button type='submit' className='w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600'>Sign up</button>
        }

      </form>
    </div>
  );
}

export default Login;
