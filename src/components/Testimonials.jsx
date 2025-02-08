import React from 'react';
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jessie W",
      testimonial: "Top-notch work! Adrian is the most reliable and smart plumber I’ve ever met, good at detecting and pinpointing issues and problem solving, providing sound and trustworthy professional advice, delivering quality work efficiently for a fair price. Highly recommended!"
    }, 
    {
      name: "Liz Seidi",
      testimonial: "If you need honest and reliable advice and very reasonable rates This is the company you should be using. Totally impressed."
    }
  ];
  
  const sectionHeading = 'Customer Testimonials'; 
  const sectionDescription = 'Listen to what our customers have said about us.';

  return (
    <>
      <section className='responsivePad bg-white-0 2xl:py-32 lg:py-24 md:py-20 py-12 text-black-0 space-y-12 max-md:space-y-4 p'>
        <div className='space-y-4 text-center max-md:space-y-2'>
          <h2 className='h2 font-satoshi-black'>
            {sectionHeading}
          </h2>
          <p className='h7 font-satoshi-medium'>
            {sectionDescription}
          </p>
        </div>

        <div className="flex justify-between max-md:flex-col md:space-x-10 font-satoshi h8 max-md:space-y-8">
          {testimonials.map((testimonial, testimonialIndex) => (
            <div key={testimonialIndex} className="w-full space-y-4 max-md:space-y-2 flex flex-col justify-between">
              <div className='space-y-4'>
                <div className="flex text-yellow-400">
                  <FaStar aria-hidden="true" />
                  <FaStar aria-hidden="true" />
                  <FaStar aria-hidden="true" />
                  <FaStar aria-hidden="true" />
                  <FaStar aria-hidden="true" />
                </div>
                <p>
                  {testimonial.testimonial}
                </p>
              </div>
              <p className="font-satoshi-bold">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>    
    </>
  );
};

export default Testimonials;
