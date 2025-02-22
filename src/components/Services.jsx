import React from 'react';
import blockedDrains from '../images/blockedDrain.svg';
import gasPlumbing from '../images/gasPlumbing.svg';
import showerLeak from '../images/showerLeak.svg';
import toiletRepair from '../images/toilet.svg';
import hotWaterSystems from '../images/hotwatersystem.svg';
import emergencyPlumbing from '../images/emergency.svg';

const Services = () => {
  const services = [
    {
      serviceName: 'Blocked Drains',
      serviceImg: blockedDrains,
      to: '/services',
      serviceDesc: 'Expert solutions for clearing and repairing blocked drains, ensuring smooth flow.'
    },
    {
      serviceName: 'Gas Plumbing',
      serviceImg: gasPlumbing,
      to: '/services',
      serviceDesc: 'Safe and reliable gas fitting and repairs, meeting all safety standards.'
    },
    {
      serviceName: 'Shower Leak',
      serviceImg: showerLeak,
      to: '/services',
      serviceDesc: 'Quick repair for leaky showers, preventing water waste and damage.'
    },
    {
      serviceName: 'Toilet Repair',
      serviceImg: toiletRepair,
      to: '/services',
      serviceDesc: 'Efficient repair services for all types of toilet issues, from leaks to flush problems.'
    },
    {
      serviceName: 'Hot Water Systems',
      serviceImg: hotWaterSystems,
      to: '/services',
      serviceDesc: 'Installation and maintenance of hot water systems for Wetherill Park & Sydney.'
    },
    {
      serviceName: 'Emergency Plumbing',
      serviceImg: emergencyPlumbing,
      to: '/services',
      serviceDesc: '24/7 emergency plumbing services to address urgent plumbing issues quickly.'
    }
  ];

  const sectionHeading = 'Our Plumbing Solutions';
  const sectionDescription = 'We prioritize exceptional quality, utilizing premium equipment, materials, and techniques. Our high standards allow us to offer a lifetime guarantee on all of our work with complete confidence.';

  return (
    <section className="responsivePad bg-primary-0 2xl:py-32 lg:py-24 md:py-20 py-12 text-white-0 space-y-12 max-md:space-y-4">
      <div className="space-y-4">
        <h2 className="h2 font-satoshi-black">
          {sectionHeading}
        </h2>
        <p className="h7 font-satoshi-medium text-grey-0">
          {sectionDescription}
        </p>
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-2 lg:gap-12 gap-2">
        {services.map((service, serviceIndex) => (
          <div
            key={serviceIndex}
            className="px-4 py-8 rounded-md font-satoshi-medium h7 flex justify-center items-center flex-col space-y-4 hover:translate-y-[-15px] hover:invert transition-all"
          >
            <img
              className="max-md:h-12 max-md:w-12 rounded-lg"
              src={service.serviceImg}
              alt={`${service.serviceName} Image`}
              loading="lazy"
              width="80"
              height="80"
            />
            <h3 className="h6 text-center">{service.serviceName}</h3>
            <p className="text-center p max-md:hidden">{service.serviceDesc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
