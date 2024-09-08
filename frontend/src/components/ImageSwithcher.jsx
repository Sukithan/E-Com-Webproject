import React, { useState, useEffect } from 'react';

const ImageSwitcher = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 3000); // 5 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [images]);

  return (
    <div 
      style={{ 
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0
      }}
    >
      <div 
        style={{ 
          backgroundImage: `url(${currentImage})`,
          backgroundSize: 'contain',  // Use 'contain' to ensure the full image is visible
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '600px',  // Fixed height
          width: '1200px',  // Fixed width
        }}
      >
        
      </div>
    </div>
  );
};

export default ImageSwitcher;
