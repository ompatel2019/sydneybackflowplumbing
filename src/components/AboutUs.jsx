import React from 'react';
import aboutImg from '../images/aboutUs.webp';

const AboutUs = () => {
  const sectionHeading = 'About Us'; 
  const sectionDescription = 'Sydney Backflow and Plumbing has been in operation since 2001. We service Domestic, industrial and commercial clients within the Sydney to Wollongong regions. With fast response times and upfront reasonable costs. Services from sewer line unblock ages/repairs , hot water service repair and replacement including commercial Raypak boilers, busted hot/cold water lines including header tank service, shopping center and service station maintenance all done with a friendly smile. We have been serving the same clientele for 20 years. Our quality of service and knowledge is what makes us different.';
  
  return (
    <>
      <section className='bg-c-3-0 responsivePad py-24 max-md:py-10 space-y-8 bg-white-0'>
        <div className='grid md:grid-cols-2'>
          <h2 className='h2 font-satoshi-black'>
            {sectionHeading}
          </h2>
          <p className='h7 font-satoshi-medium'>
            {sectionDescription}
          </p>
        </div>

        <div className='flex justify-center'>
          <img 
            className='rounded-[4px] w-full' 
            src={aboutImg} 
            alt="about us image" 
            loading="lazy"
          />
        </div>
      </section>    
    </>
  );
};

export default AboutUs;
