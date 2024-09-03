import React from 'react';
import './Card.css'; // Import the CSS file for styling

function Card({ itemName, details, price, discount, image }) {
  // Calculate the new price based on the discount
  const discountedPrice = price - (price * (discount / 100));

  return (
    <div className="card">
      <img src={image} alt={itemName} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{itemName}</h2>
        <p className="card-details">{details}</p>
        <p className="card-price">Original Price: ${price.toFixed(2)}</p>
        <p className="card-discount">Discount: {discount}%</p>
        <p className="card-new-price">New Price: ${discountedPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Card;
