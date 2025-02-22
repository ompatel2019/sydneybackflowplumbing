import React from 'react';
import heroImg from '../images/heroImage.webp';

const HeroWrapper = () => {
  // Removed lazy-loading for the hero (above-the-fold) image
  return (
    <div className="absolute inset-0 z-0">
      <img
        src={heroImg}
        alt="Hero Background"
        className="w-full h-full object-cover"
        width="1920"
        height="1080"
      />
    </div>
  );
};

export default HeroWrapper;
