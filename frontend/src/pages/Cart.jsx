import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';


const Cart = () => {
  const { cartItems, productsItems, incrementCartItem, decrementCartItem, removeCartItem, buyCartItem } = useContext(ShopContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const updatedItems = Object.entries(cartItems).map(([itemKey, { qty }]) => {
      const product = productsItems.find(item => item._id === itemKey);
      if (product) {
        return { ...product, qty, itemKey, showButtons: false };
      }
      return null;
    }).filter(Boolean);
    setItems(updatedItems);
  }, [cartItems, productsItems]);

  const toggleButtons = (id) => {
    setItems(
      items.map(item =>
        item._id === id ? { ...item, showButtons: !item.showButtons } : item
      )
    );
  };

  const total = items.reduce((acc, item) => acc + (item.price ? item.price * item.qty : 0), 0);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-purple-200 p-6 rounded-lg shadow-lg m-5">
      <div className="flex items-center w-full mb-6">
        <h2 className="text-3xl font-bold text-purple-800 text-center flex-1">SHOPPING CART</h2>
      </div>
      <div className="w-full flex justify-between p-3 bg-purple-300 rounded-lg mb-4 text-purple-900 font-semibold">
        <span className="flex-1 text-center">Quantity</span>
        <span className="flex-1 text-center">Item</span>
        <span className="flex-1 text-center">Unit Price</span>
        <span className="flex-1 text-center">Total Price</span>
        <span></span>
      </div>
      <div className="w-full">
        {items.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          items.map(item => (
            <div key={item.itemKey} className="bg-white mb-4 p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <button 
                    onClick={() => decrementCartItem(item.itemKey)} 
                    className="bg-gray-300 p-2 rounded-md"
                  >-</button>
                  <span className="mx-4">{item.qty}</span>
                  <button 
                    onClick={() => incrementCartItem(item.itemKey)} 
                    className="bg-gray-300 p-2 rounded-md"
                  >+</button>
                </div>
                <span className="flex-1 text-center">{item.name}</span>
                <span className="flex-1 text-center">${item.price ? item.price.toFixed(2) : 'N/A'}</span>
                <span className="flex-1 text-center">${(item.price && item.qty) ? (item.price * item.qty).toFixed(2) : 'N/A'}</span>
                <button 
                  onClick={() => toggleButtons(item._id)} 
                  className="text-lg"
                >&#x25BC;</button>
              </div>
              {item.showButtons && (
                <div className="flex justify-between mt-4">
                  <button 
                    onClick={() => removeCartItem(item.itemKey)} 
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >Remove Item</button>
                  <button 
                    onClick={() => buyCartItem(item.itemKey)} 
                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                  >Buy</button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
      <div className="flex justify-between w-full mt-6">
        <div className="text-lg font-bold">Total: ${total.toFixed(2)}</div>
        <button className="bg-violet-500 text-white px-6 py-2 rounded-md">ORDER</button>
      </div>
    </div>
  );
};

export default Cart;
