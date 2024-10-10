import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from "../Context/ShopContext";
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';

const ProductDetails = () => {
  const { id } = useParams(); 
  const { currency, addToCart, productsItems } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const foundProduct = productsItems.find(item => item._id === id); 
    setProduct(foundProduct);
    if (foundProduct) {
      const initialColor = foundProduct.variants[0].color; 
      const initialSize = foundProduct.variants[0].sizes[0].size; 
      setSelectedColor(initialColor);
      setSelectedSize(initialSize);
      setSelectedImage(foundProduct.image[initialColor]); // Set initial image based on color
    }
  }, [id, productsItems]); 

  if (!product) {
    return <div className='p-10'>Product not found!</div>;
  }

  const handleColorChange = (color) => {
    setSelectedColor(color);
    const newVariant = product.variants.find(variant => variant.color === color);
    if (newVariant) {
      setSelectedSize(newVariant.sizes[0].size); // Default to the first size
      setSelectedImage(product.image[color]); // Change image based on selected color
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className='border-t-2 p-10 mb-5 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex flex-col sm:flex-row mb-10'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='w-full sm:w-[50%]'>
            <img src={selectedImage} alt={product.name} className='w-full h-auto' />
          </div>
        </div>

        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{product.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            {/* Star Ratings */}
            {/* Star Ratings */}
            <div className='flex flex-row gap-2 my-1'>
                    <img src={assets.Star} alt="" className='w-3.5' /> 
                    <p className=''>4.7</p>
                  </div>
            {/* Add star images here */}
          </div>
          <p className='mt-4'>{product.description}</p>
          <p className='mt-4 font-semibold'>{currency} {product.price}</p>

          <div className='mt-4'>
            <h3 className='font-medium'>Color:</h3>
            <div className='flex gap-2 mt-2'>
              {product.variants.map((variant, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border rounded ${selectedColor === variant.color ? 'bg-gray-300' : ''}`}
                  onClick={() => handleColorChange(variant.color)}
                >
                  {variant.color}
                </button>
              ))}
            </div>
          </div>

          <div className='mt-4'>
            <h3 className='font-medium'>Size:</h3>
            <div className='flex gap-2 mt-2'>
              {product.variants.find(variant => variant.color === selectedColor)?.sizes.map((sizeOption, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 border rounded ${selectedSize === sizeOption.size ? 'bg-gray-300' : ''}`}
                  onClick={() => handleSizeChange(sizeOption.size)}
                >
                  {sizeOption.size}
                </button>
              ))}
            </div>
          </div>

          <button
            className='mt-6 px-6 py-2 bg-blue-500 text-white rounded'
            onClick={() => addToCart(product, { color: selectedColor, size: selectedSize })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
