import React from 'react';
import job from '../images/jobdone.webp';

const WhyChooseUs = () => {
  const sectionHeading = 'We get the job done!';
  const sectionDescription1 = 
    'Our commitment to excellence drives us to use only the best equipment, materials, and methods, ensuring our work consistently meets top industry standards. With this level of quality, we confidently back every job with a lifetime guarantee, knowing it’s built to last.';
  const sectionDescription2 = 
    'Beyond our superior services, we offer complimentary diagnostic assessments and a thorough plumbing inspection report, giving you a clear understanding of your property’s needs. Our detailed reports include actionable recommendations for necessary work, prioritizing urgent repairs and suggesting proactive maintenance options that can be managed through our annual plans. Our aim is to help you maintain your property in peak condition, offering long-term value and peace of mind.';

  return (
    <>
      <section className='responsivePad bg-white-0 2xl:py-32 lg:py-24 md:py-20 py-12 text-white-0 space-y-12 max-md:space-y-4'>
        <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-8'>
          <div>
            <img 
              src={job} 
              alt="Why Choose Us section image" 
              className='w-full h-full rounded-[4px]' 
              loading="lazy"
            />
          </div>

          <div className='text-black-0 space-y-8 max-md:space-y-6 flex flex-col justify-around'>
            <h2 className='h2 font-satoshi-black'>
              {sectionHeading}
            </h2>
            <div className='space-y-4 max-md:space-y-2'>
              <p className='h7 font-satoshi-medium'>
                {sectionDescription1}
              </p>
              <p className='h7 font-satoshi-medium'>
                {sectionDescription2}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
