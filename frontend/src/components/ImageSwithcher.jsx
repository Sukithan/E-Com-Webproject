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
    }, 3000); // 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [images]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',  
        alignItems: 'center',
        height: '60vh',  
        width: '100%',  
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundSize: 'contain',  
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',  
          width: '100%',  
        }}
      />
    </div>
  );
};

export default ImageSwitcher;
