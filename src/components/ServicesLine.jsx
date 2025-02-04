import React from 'react';
import '../ServiceLine.css'
import { HashLink } from 'react-router-hash-link';

const ServicesLine = () => {
  const servicesArray = [
    'Drain cleaning', 'Tap installation', 'Tap repair', 'Waste disposal installation',
    'Waste disposal repair', 'Outdoor plumbing system repair', 'Plumbing leak detection',
    'Plumbing pipe repair', 'Sewer repair', 'Shower installation', 'Shower repair',
    'Toilet installation', 'Toilet repair', 'Water heater installation', 'Water heater repair',
    'Hot water service'
  ];

  return (
    <div className='bg-primary-0 font-satoshi-semibold h7'>
      <div className="services-scroll">
        <div className="scrolling-content py-2 max-md:py-2">
          {servicesArray.map((service, index) => (
            <HashLink
              key={`service-${index}`}
              className='service-item'
              smooth to="/services"
            >
              <div className="mr-[1rem]">{service.toUpperCase()}</div>
            </HashLink>
          ))}
          {servicesArray.map((service, index) => (
            <HashLink
              key={`service-duplicate-${index}`}
              className='service-item'
              smooth to="/services"
            >
              <div>{service}</div>
            </HashLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesLine;
