import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from "../Context/ShopContext";
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';

// ProductDetails Component
const ProductDetails = () => {
  const { id } = useParams(); 
  const { currency, addToCart, productsItems } = useContext(ShopContext);
  const [product, setProduct] = useState(null);

  // Effect to fetch product based on id
  useEffect(() => {
    const foundProduct = productsItems.find(item => item._id === id); 
    setProduct(foundProduct);
  }, [id, productsItems]); 

  // Handle case where product is not found
  if (!product) {
    return <div className='p-10'>Product not found!</div>;
  }

  return (
    <div className='border-t-2 p-5 md:p-10 mb-5 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex flex-col md:flex-row md:space-x-8'>
        {/* Product Images */}
        <div className='flex-1 flex justify-center mb-5 md:mb-0'>
          <div className='w-full max-w-md h-80 relative'>
            <img 
              src={product.image[0]} 
              alt={product.name} 
              className='w-full h-full object-contain rounded-lg shadow-lg' 
            />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-xl md:text-2xl mt-2'>{product.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            {/* Star Ratings */}
            {[...Array(4)].map((_, index) => (
              <img key={index} src={assets.Star} alt="" className='w-4' />
            ))}
            <img src={assets.Rating} alt="" className='w-4' />
          </div>
          <p className='mt-5 text-2xl md:text-3xl font-medium'>{currency}{product.price}</p>
          <p className='my-5 text-gray-500'>{product.description}</p>
          <button className='bg-purple-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-purple-500 transition ease-in-out duration-200' onClick={() => addToCart(product._id)}>ADD TO CART</button>
          <div className='text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product</p>
            <p>Cash on delivery available on this product</p>
            <p>Easy return/exchange policy available within 7 days only</p>
            <p className='text-yellow-800 p-3 bg-yellow-200 mt-4 rounded'><i className="fa-solid fa-tags pr-1"></i> Best Price in similar deals</p>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className='mt-5 border-t p-4 bg-gray-200'>
        <h1 className='text-xl font-semibold mb-2'>Description</h1>
        <p className='text-gray-700'>Made in: <span className='font-medium'>{product.madeIn}</span></p>
      </div>

      {/* Reviews Section */}
      <div className='border-indigo-400 border-2 rounded-lg border-dashed my-10 p-4'>
          <div className='flex align-center gap-2 mb-4'>
            <h1 className='text-xl font-semibold'>Reviews </h1>
            <p className='bg-green-100 p-1 text-sm rounded-lg'><i className="fa-solid fa-check"></i> All from verified purchases</p>
         </div>
          {product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                  <div key={index} className='border rounded-md p-4 mb-2 bg-indigo-50 shadow-sm'>
                      <p className='text-gray-700'><i className="fa-regular fa-user pr-1"></i> {review}</p>
                  </div>
              ))
          ) : (
              <p className='text-gray-500'>No reviews available.</p>
          )}
      </div>

    </div>
  );
}

export default ProductDetails;
