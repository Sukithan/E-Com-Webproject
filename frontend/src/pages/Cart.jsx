/*
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cart.css";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the server when the component loads
    axios.get('http://localhost:5000/cart-items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const toggleButtons = (id) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, showButtons: !item.showButtons } : item
      )
    );
  };

  const removeItem = (id) => {
    axios.delete(`http://localhost:5000/cart-items/${id}`)
      .then(() => {
        setItems(items.filter(item => item.id !== id));
      })
      .catch(error => console.error('Error removing item:', error));
  };

  const buyItem = (id) => {
    alert(`Bought ${items.find(item => item.id === id).name}`);
    // Handle buy item logic here
  };

  const incrementQty = (id) => {
    const item = items.find(item => item.id === id);
    axios.put(`http://localhost:5000/cart-items/${id}`, { qty: item.qty + 1 })
      .then(() => {
        setItems(
          items.map(item =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          )
        );
      })
      .catch(error => console.error('Error incrementing qty:', error));
  };

  const decrementQty = (id) => {
    const item = items.find(item => item.id === id);
    if (item.qty > 1) {
      axios.put(`http://localhost:5000/cart-items/${id}`, { qty: item.qty - 1 })
        .then(() => {
          setItems(
            items.map(item =>
              item.id === id ? { ...item, qty: item.qty - 1 } : item
            )
          );
        })
        .catch(error => console.error('Error decrementing qty:', error));
    }
  };

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="pic">
          <img src="cart.jpeg" alt="Cart" />
        </div>
        <h2 className="cart-title">Shopping Cart</h2>
      </div>
      <div className="cart-table">
        <div className="cart-headings">
          <span>QTY</span>
          <span>Item</span>
          <span>Unit Price</span>
          <span>Total Price</span>
          <span></span>
        </div>
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <div className="qty-controls">
                  <button onClick={() => decrementQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => incrementQty(item.id)}>+</button>
                </div>
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
                <button onClick={() => toggleButtons(item.id)}>&#x25BC;</button>
              </div>
              {item.showButtons && (
                <div className="item-actions">
                  <button onClick={() => removeItem(item.id)}>Remove Item</button>
                  <button onClick={() => buyItem(item.id)}>Buy</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="cart-footer">
        <div className="total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="order-button">ORDER</button>
      </div>
    </div>
  );
};

export default Cart;
*/

import React, { useState } from "react";
import "./Cart.css"; // Import the CSS file

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
    <div className="cart-container">
      <div className="cart-header">
        <div className="pic">
          <img src="cart.jpeg" alt="Cart" />
        </div>
        <h2 className="cart-title">Shopping Cart</h2>
      </div>
      <div className="cart-table">
        <div className="cart-headings">
          <span>QTY</span>
          <span>Item</span>
          <span>Unit Price</span>
          <span>Total Price</span>
          <span></span>
        </div>
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <div className="qty-controls">
                  <button onClick={() => decrementQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => incrementQty(item.id)}>+</button>
                </div>
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
                <button onClick={() => toggleButtons(item.id)}>&#x25BC;</button>
              </div>
              {item.showButtons && (
                <div className="item-actions">
                  <button onClick={() => removeItem(item.id)}>Remove Item</button>
                  <button onClick={() => buyItem(item.id)}>Buy</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="cart-footer">
        <div className="total">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="order-button" >ORDER</button>
      </div>
    </div>
  );
};

export default Cart;



