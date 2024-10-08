import React from 'react';
import './About_us.css';
import bgImage from '../assets/Background_AboutUs.png';
import { assets } from '../assets/assets';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <img 
          className="hero-image" 
          src={bgImage} 
          alt="About Us Background" 
        />
        <div className="hero-overlay">
          <img 
            className="company-logo" 
            src={assets.Storelogo} 
            alt="Company Logo" 
          />
          {/* <h1>About Us</h1> */}
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="about-section who-we-are">
        <h2>Who We Are</h2>
        <p>
        We are a family-owned e-commerce platform dedicated to bringing you the best products from around the world. 
        With a focus on quality, variety, and convenience, we strive to provide an exceptional online shopping experience. 
        Established in Texas, we have built a loyal customer base by offering efficient and reliable service. 
        In response to the competitive landscape, particularly the challenge posed by Amazon, we are embracing technology to enhance our online presence. 
        Initially, we will focus on consumer electronics and toys, leveraging our extensive inventory of over 10,000 products and ensuring timely delivery through our own courier service.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="about-section what-we-do">
        <h2>What We Sell</h2>
        <p>
          Smartphones | Laptops | Tablets | Gaming Consoles | Action Figures | Puzzles | Drones | Educational Kits | Headphones | Smartwatches </p>
        <p1>
          Explore Us to find the best deals on the latest products and accessories. We offer a wide range of items, from electronics and gadgets to toys and collectibles,
        </p1>
      </section>

      {/* Where We Are Section */}
      <section className="about-section where-we-are">
      <h2>Where We Are</h2>
      <div className="location-container">
        {/* Embedded Google Map */}
        <div className="map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.8903077206974!2d-122.08424948439815!3d37.4220655798259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24a5e0e6d49%3A0x4c35b24ec2a0c0d2!2sGoogleplex!5e0!3m2!1sen!2sus!4v1634599121634!5m2!1sen!2sus" 
            width="400" 
            height="300" 
            allowFullScreen="" 
            loading="lazy" 
            title="Company Location"
          ></iframe>
        </div>

        {/* Text Section */}
        <div className="location-text">
          <p>
          Located in 1600 Amphitheatre Parkway, Mountain View Texas, we operate multiple warehouses across the state, ensuring quick and reliable delivery. 
          With our own courier service, we efficiently serve customers statewide as we expand our online presence.
          </p>
          <p>
            Address: 1600 Amphitheatre Parkway, Mountain View, Texas
          </p>
        </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
