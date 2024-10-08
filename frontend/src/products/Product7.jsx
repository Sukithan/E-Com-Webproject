import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from "../Context/ShopContext";
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import "./style.css"

const Product1 = () => {
  const { productCategoriesSeven, currency } = useContext(ShopContext);
  const [products, setProducts] = useState([]);

  // Array of sold counts
  const soldCount = [23, 123, 78, 90];
  const offers = ["Best Price in similar deals", "Extra 5% off with coins", "Get free shipping with coins"];

  const fetchProductData = async () => {
    setProducts(productCategoriesSeven);
  };

  useEffect(() => {
    fetchProductData();
  }, [productCategoriesSeven]);

  // Function to truncate description
  const truncateDescription = (description, maxLength = 20) => {
    if (description.length <= maxLength) return description;
    return `${description.substring(0, maxLength)}...`;
  };

  return (
    <div className='p-5 md:p-10 mb-5 transition-opacity ease-in duration-500 opacity-100'>
      {products.map((product, index) => {
        // Get a random sold count from the soldCount array
        const randomSoldCount = soldCount[Math.floor(Math.random() * soldCount.length)];
        const showOffer = index % 3 === 0; // Show offer for every second product
        const randomSoldOffer = offers[Math.floor(Math.random() * offers.length)];
        
        return (
          <div key={index} className="mb-6">
            <div className='flex flex-col sm:flex-row gap-8'>
              {/* Product Images */}
              <div className='mb-4 sm:mb-0'>
                <img
                  src={product.image}
                  alt={`Image of ${product.name}`}
                  className='w-full h-auto object-cover max-w-[200px] sm:max-w-[300px] md:max-w-[400px]'
                />
              </div>

              <Link to={"/productdetails/" + product._id} className='flex-1 flex flex-col justify-between pl-2 sm:pl-4'>
                {/* Product Info */}
                <div className='flex flex-col gap-3'>
                  <h1 className='font-medium text-2xl mt-2'>{product.name}</h1>
                  {/* Star Ratings */}
                  <div className='flex flex-row gap-2 my-1'>
                    <img src={assets.Star} alt="" className='w-3.5' /> 
                    <p className=''>4.7</p>
                  </div>
                  {/* Displaying random sold count */}
                  <p className='text-lg font-medium'>{randomSoldCount} items sold</p>
                  <p className='text-3xl font-medium'>{currency}{product.price}</p>
                  <p className='text-gray-500'>{truncateDescription(product.description)}</p>
                  
                  {/* Conditionally render the offer with animation */}
                  {showOffer && (
                    <p className='text-red-600 animated-offer'>{randomSoldOffer}</p>
                  )}
                </div>
              </Link>
            </div>

            {/* Horizontal line after each product */}
            <hr className="my-6 border-0 h-[0.5px] bg-gray-500" />
          </div>
        );
      })}
    </div>
  );
};

export default Product1;
