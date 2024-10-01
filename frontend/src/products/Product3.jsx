import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from "../Context/ShopContext";
import { assets } from '../assets/assets';

const Product3 = () => {
  const { productCategoriesThree, currency } = useContext(ShopContext);
  const [products, setProducts] = useState([]);

  // Fetch all products
  const fetchProductData = async () => {
    setProducts(productCategoriesThree);  // Set the entire product list in state
  }

  useEffect(() => {
    fetchProductData();
  }, [productCategoriesThree]);

  return (
    <div className='border-t-2 p-10 mb-5 transition-opacity ease-in duration-500 opacity-100'>
      {/* Iterate over the products and render each one */}
      {products.map((product, index) => (
        <div key={index}>
          <div className='flex flex-col sm:flex-row mb-10'>
            {/* Product Images */}
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
              <div className='w-full sm:w-[80%]'>
                <img src={product.image} alt={`Image of ${product.name}`} className='w-full h-auto' />
              </div>
            </div>

            {/* Product Info */}
            <div className='flex-1'>
              <h1 className='font-medium text-2xl mt-2'>{product.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                {/* Star Ratings */}
                <img src={assets.Star} alt="" className='w-3.5' />
                <img src={assets.Star} alt="" className='w-3.5' />
                <img src={assets.Star} alt="" className='w-3.5' />
                <img src={assets.Star} alt="" className='w-3.5' />
                <img src={assets.Rating} alt="" className='w-3.5' />
              </div>
              <p className='mt-5 text-gray-500'>Available products count: {product.count}</p>
              <p className='mt-5 text-3xl font-medium'>{currency}{product.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{product.description}</p>
              <button className='bg-black text-white px-8 py-3 active:bg-gray-700 my-4'>ADD TO CART</button>
              <div className='text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original Product</p>
                <p>Cash on delivery available on this product</p>
                <p>Easy return/exchange policy available within 7 days only</p>
              </div>
            </div>
          </div>

          {/* Horizontal line after each product */}
          <hr className="my-6 border-0 h-[1px] bg-gray-500" />
        </div>
      ))}
    </div>
  );
}

export default Product3;
