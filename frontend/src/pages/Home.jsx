import React from 'react';
import { Link } from 'react-router-dom';
import ImageSwitcher from '../components/ImageSwithcher';  // Ensure correct import path
import Card from '../components/Card';
import { assets } from '../assets/assets';

const images = [
  '/1.jpg',
  '/iphone.webp',
  '/mac2.webp',
  '/car.jpg',
  '/teddy.jpeg',
  // Add more image paths as needed
];

const Home = () => {
  return (
    <div className='flex flex-col'>
      {/* Hero Section */}
      <section className='hero bg-purple-300 text-white py-12 md:py-16 text-center'>
        <h1 className='text-2xl md:text-4xl font-bold mb-4'>Welcome to C-Store</h1>
        <p className='text-base md:text-lg mb-6'>Explore the best in electronics and toys!</p>
        <Link to="/ProductCategory">
          <button className='bg-purple-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-medium hover:bg-purple-700'>
            Shop Now
          </button>
        </Link>
      </section>
      
      {/* Promotions Section */}
      <div className='promotions my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
        <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 p-4 md:p-6 rounded-lg text-center hover:scale-105 duration-300'>
          <h2 className='text-lg md:text-xl font-semibold mb-2 text-white'>New Arrivals</h2>
          <p className='text-sm md:text-base text-white'>Check out the latest products in our collection.</p>
        </div>
        <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 p-4 md:p-6 rounded-lg text-center hover:scale-105 duration-300'>
          <h2 className='text-lg md:text-xl font-semibold mb-2 text-white'>Best Sellers</h2>
          <p className='text-sm md:text-base text-white'>Discover the most popular items loved by our customers.</p>
        </div>
        <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 p-4 md:p-6 rounded-lg text-center hover:scale-105 duration-300'>
          <h2 className='text-lg md:text-xl font-semibold mb-2 text-white'>Special Offers</h2>
          <p className='text-sm md:text-base text-white'>Don't miss out on our exclusive deals and discounts.</p>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className='flex flex-col items-center mb-6 md:mb-12'>
        <h2 className='text-xl md:text-2xl font-bold text-center text-purple-500 mb-4 md:mb-6'>Featured Products</h2>
        <div className='w-full max-w-4xl mb-4 md:mb-6'>
          <ImageSwitcher images={images} />
        </div>
        {/* Product Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <Card 
            itemName="Iphone" 
            details="Good Product" 
            price={20} 
            discount={50} 
            image={assets.Phone} 
          />
          <Card 
            itemName="MacBook" 
            details="Good Product" 
            price={2000} 
            discount={5} 
            image={assets.Laptops} 
          />
          <Card 
            itemName="LG Smart" 
            details="Good Product" 
            price={2500} 
            discount={15} 
            image={assets.Television}
          />
          <Card 
            itemName="Samsung S24 Ultra" 
            details="Flagship Mobile" 
            price={1400} 
            discount={15} 
            image={assets.Samsung_S24_Ultra} 
          />
          <Card 
            itemName="I Watch" 
            details="Series 9" 
            price={500} 
            discount={10} 
            image={assets.I_watch}
          />
          <Card 
            itemName="Car" 
            details="Kid Product" 
            price={100} 
            discount={12} 
            image={assets.Electric_car} 
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
