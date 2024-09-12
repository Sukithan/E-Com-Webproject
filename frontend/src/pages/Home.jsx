import React from 'react';
import { Link } from 'react-router-dom';
import ImageSwitcher from '../components/ImageSwithcher';
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
    <div>
      {/* Hero Section */}
      <section className='hero bg-purple-300  text-white py-20 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>Welcome to C-Store</h1>
        <p className='text-lg md:text-xl mb-8'>Explore the best in electronics and toys!</p>
        <Link to="/ProductCategory">
          <button className='bg-purple-500 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-medium hover:bg-purple-700'>
            Shop Now
          </button>
        </Link>
      </section>
      
      {/* Promotions Section */}
      <section className='promotions my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 p-6 rounded-lg text-center hover:scale-110 duration-300'>
          <h2 className='text-2xl font-semibold mb-2 text-white'>New Arrivals</h2>
          <p className='text-sm text-white'>Check out the latest products in our collection.</p>
        </div>
        <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 p-6 rounded-lg text-center hover:scale-110 duration-300'>
          <h2 className='text-2xl font-semibold mb-2 text-white'>Best Sellers</h2>
          <p className='text-sm text-white'>Discover the most popular items loved by our customers.</p>
        </div>
        <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-pink-600 p-6 rounded-lg text-center hover:scale-110 duration-300'>
          <h2 className='text-2xl font-semibold mb-2 text-white'>Special Offers</h2>
          <p className='text-sm text-white'>Don't miss out on our exclusive deals and discounts.</p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className='featured-products'>
        <h2 className='text-3xl font-bold text-center text-purple-500'>Featured Products</h2>
        <ImageSwitcher images={images} />
        {/* Product Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
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
      </section>
    </div>
  );
}

export default Home;
