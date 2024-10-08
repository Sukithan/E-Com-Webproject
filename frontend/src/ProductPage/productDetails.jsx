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
    <div className='border-t-2 p-10 mb-5 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex flex-col sm:flex-row mb-10'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='w-full sm:w-[50%]'>
            <img src={product.image[0]} alt={product.name} className='w-full h-auto' />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{product.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            {/* Star Ratings */}
            {/* Consider making this dynamic based on the product's rating */}
            <img src={assets.Star} alt="" className='w-3.5' />
            <img src={assets.Star} alt="" className='w-3.5' />
            <img src={assets.Star} alt="" className='w-3.5' />
            <img src={assets.Star} alt="" className='w-3.5' />
            <img src={assets.Rating} alt="" className='w-3.5' />
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{product.price}</p>
          <p className='my-5 text-gray-500 md:w-4/5'>{product.description}</p>
          <button className='bg-purple-700 text-white px-8 py-3 active:bg-purple-300 my-4' onClick={() => addToCart(product._id)}>ADD TO CART</button>
          <div className='text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product</p>
            <p>Cash on delivery available on this product</p>
            <p>Easy return/exchange policy available within 7 days only</p>
          </div>
        </div>
      </div>

      <hr className="my-6 border-0 h-[1px] bg-gray-500" />
    </div>
  );
}

export default ProductDetails;
