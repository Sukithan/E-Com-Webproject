import React, { useState } from "react";

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Birthday Cake", price: 49.95, qty: 1, showButtons: false },
    { id: 2, name: "Party Cups", price: 5.00, qty: 50, showButtons: false },
    { id: 3, name: "Beer kegs", price: 619.99, qty: 20, showButtons: false },
    { id: 4, name: "Pound of beef", price: 289.45, qty: 18, showButtons: false },
    { id: 5, name: "Bullet-proof vest", price: 450.00, qty: 1, showButtons: false },
  ]);

  const toggleButtons = (id) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, showButtons: !item.showButtons } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const buyItem = (id) => {
    alert(`Bought ${items.find(item => item.id === id).name}`);
    // Logic for buying the item goes here
  };
  
  const incrementQty = (id) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrementQty = (id) => {
    setItems(
      items.map(item =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto bg-purple-200 p-6 rounded-lg shadow-lg m-5">
      {/* Cart Header */}
      <div className="flex items-center w-full mb-6">
        <h2 className="text-3xl font-bold text-purple-800 text-center flex-1">SHOPPING CART</h2>
      </div>
      
      {/* Cart Table Header */}
      <div className="w-full flex justify-between p-3 bg-purple-300 rounded-lg mb-4 text-purple-900 font-semibold">
        <span className="flex-1 text-center">Quantity</span>
        <span className="flex-1 text-center">Item</span>
        <span className="flex-1 text-center">Unit Price</span>
        <span className="flex-1 text-center">Total Price</span>
        <span></span>
      </div>
      
      {/* Cart Items */}
      <div className="w-full">
        {items.map(item => (
          <div key={item.id} className="bg-white mb-4 p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <button 
                  onClick={() => decrementQty(item.id)} 
                  className="bg-gray-300 p-2 rounded-md"
                >-</button>
                <span className="mx-4">{item.qty}</span>
                <button 
                  onClick={() => incrementQty(item.id)} 
                  className="bg-gray-300 p-2 rounded-md"
                >+</button>
              </div>
              <span className="flex-1 text-center">{item.name}</span>
              <span className="flex-1 text-center">${item.price.toFixed(2)}</span>
              <span className="flex-1 text-center">${(item.price * item.qty).toFixed(2)}</span>
              <button 
                onClick={() => toggleButtons(item.id)} 
                className="text-lg"
              >&#x25BC;</button>
            </div>
            
            {item.showButtons && (
              <div className="flex justify-between mt-4">
                <button 
                  onClick={() => removeItem(item.id)} 
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >Remove Item</button>
                <button 
                  onClick={() => buyItem(item.id)} 
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                >Buy</button>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Cart Footer */}
      <div className="flex justify-between w-full mt-6">
        <div className="text-lg font-bold">Total: ${total.toFixed(2)}</div>
        <button className="bg-violet-500 text-white px-6 py-2 rounded-md">ORDER</button>
      </div>
    </div>
  );
};

export default Cart;
