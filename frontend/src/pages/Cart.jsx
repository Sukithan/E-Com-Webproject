import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Fetch cart data from backend
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cart', { withCredentials: true });
        console.log('Cart fetch response:', response.data);
        if (response.data) {
          setItems(response.data.cart);
          setTotal(response.data.total || 0);
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };      
    fetchCart();
  }, []);  

  const incrementCartItem = async (id) => {
    try {
      const response = await axios.post('http://localhost:3000/EditQuantity', { id, Increase: true });
      if (response.data) {
        setItems(response.data.cart);
        setTotal(response.data.total);
      }
    } catch (error) {
      console.error('Error incrementing item:', error);
    }
  };

  const decrementCartItem = async (id) => {
    try {
      const response = await axios.post('http://localhost:3000/EditQuantity', { id, Decrease: true });
      if (response.data) {
        setItems(response.data.cart);
        setTotal(response.data.total);
      }
    } catch (error) {
      console.error('Error decrementing item:', error);
    }
  };

  const removeCartItem = async (id) => {
    try {
      await axios.post('http://localhost:3000/removeProduct', { id });
      const response = await axios.get('http://localhost:3000/cart'); 
      setItems(response.data.cart);
      setTotal(response.data.total);
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-purple-200 p-6 rounded-lg shadow-lg m-5">
      <h2 className="text-3xl font-bold text-purple-800 text-center">SHOPPING CART</h2>
      {items.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        items.map(item => (
          <div key={item.id} className="bg-white mb-4 p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <button onClick={() => decrementCartItem(item.id)} className="bg-gray-300 p-2 rounded-md">-</button>
                <span className="mx-4">{item.count}</span>
                <button onClick={() => incrementCartItem(item.id)} className="bg-gray-300 p-2 rounded-md">+</button>
              </div>
              <span className="flex-1 text-center">{item.name}</span>
              <span className="flex-1 text-center">${item.price.toFixed(2)}</span>
              <button onClick={() => removeCartItem(item.id)} className="text-lg">&#x25BC;</button>
            </div>
          </div>
        ))
      )}
      <div className="flex justify-between w-full mt-6">
        <div className="text-lg font-bold">Total: ${total.toFixed(2)}</div>
        <button className="bg-violet-500 text-white px-6 py-2 rounded-md">ORDER</button>
      </div>
    </div>
  );
};

export default Cart;
