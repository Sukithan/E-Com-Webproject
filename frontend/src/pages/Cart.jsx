import React from 'react';

const Cart = () => {
  const cartItems = []; // Replace with actual cart items

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <h2 className='text-3xl font-bold mb-6'>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul className='mb-6'>
            {cartItems.map((item, index) => (
              <li key={index} className='bg-white p-4 rounded-lg shadow-md mb-4'>
                <div className='flex justify-between items-center'>
                  <div>
                    <h3 className='text-xl font-semibold'>{item.name}</h3>
                    <p className='text-sm text-gray-600'>Quantity: {item.quantity}</p>
                  </div>
                  <p className='text-xl font-bold'>${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className='w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600'>Proceed to Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty. Start shopping!</p>
      )}
    </div>
  );
}

export default Cart;
