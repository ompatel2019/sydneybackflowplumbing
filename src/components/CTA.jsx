import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { HashLink } from 'react-router-hash-link';

const CTA = ({ backgroundColour, textColour }) => {
  const perks = [
    'Fast Response To Inquiry', 
    '30+ Years of Proven Expertise', 
    'Master-level Professionals', 
    'Craftsmanship You Can Count On'
  ];
  const sectionHeading = 'Available around the clock, every day of the year!';

  return (
    <>
      <section className={`responsivePad 2xl:py-32 lg:py-24 md:py-20 py-12 space-y-12 max-md:space-y-4 p ${backgroundColour} ${textColour}`}>
        <div className='space-y-4 text-center'> 
          <h2 className='h2 font-satoshi-black'>
            {sectionHeading}
          </h2>
        </div>

        <div className='grid grid-cols-2 space-y-8 place-items-center max-md:grid-cols-1 h6'>
          {perks.map((perk, perkIndex) => (
            <div key={perkIndex} className='flex space-x-2 items-center'>
              <FaCheck className='h5' aria-hidden="true" />
              <p className='font-satoshi-medium'>{perk}</p>
            </div>
          ))}
        </div>

        <div className='flex space-x-4 items-center justify-center h7 font-satoshi-medium'>
          <a href="tel:0413536277">
            <button className='bg-grey-0 px-4 p-3 rounded-[4px] transition-all ease-in duration-150 hover:bg-green-500 hover:text-white-0 text-black-0 min-w-[160px]'>
              Call Now
            </button>
          </a>
          <HashLink smooth to="/contact">
            <button className='bg-grey-0 rounded-[4px] text-c-4-0 px-4 p-3 transition-all ease-in duration-150 hover:bg-green-500 hover:text-white-0 text-black-0 min-w-[160px]'>
              Get a Free Quote
            </button>
          </HashLink>
        </div>
      </section>
    </>
  );
};

export default CTA;
