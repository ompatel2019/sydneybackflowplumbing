import React from 'react';
import heroImg from '../images/heroImage.webp';

const HeroWrapper = () => {
  return (
    <div className='absolute inset-0 z-0'>
      <img
        src={heroImg}
        alt="Hero Background"
        className='w-full h-full object-cover'
        loading="lazy"
      />
    </div>
  );
};

export default HeroWrapper;
