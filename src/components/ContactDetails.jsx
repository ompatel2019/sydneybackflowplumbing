import React, { useState } from 'react';
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

// We'll lazy-load the map to improve performance
// Instead of using <iframe> directly, we can show a "Load Map" button or similar approach
// For simplicity, let's keep the iframe but give it loading="lazy".
const ContactDetails = () => {
  const contactDetails = [
    {
      contactType: 'Location',
      contactIcon: MdLocationOn,
      contactDesc: 'Wetherill Park & Sydney Region',
      contactLinkName: 'Visit Map',
      contactLink: 'https://maps.app.goo.gl/jQB1xP6qcLEwCzdNA'
    },
    {
      contactType: 'Email',
      contactIcon: MdEmail,
      contactDesc: 'sydneybackflow@bigpond.com',
      contactLinkName: 'Send Email',
      contactLink: 'mailto:sydneybackflow@bigpond.com'
    },
    {
      contactType: 'Phone',
      contactIcon: FaPhoneAlt,
      contactDesc: '0413 536 277',
      contactLinkName: 'Call Now',
      contactLink: 'tel:0413 536 277'
    },
  ];

  const sectionHeading = 'Our Details';
  const sectionDescription = "We're closer than you think!";

  return (
    <section className="responsivePad 2xl:py-32 lg:py-24 md:py-20 py-12 font-satoshi space-y-8 bg-primary-0 text-white-0">
      <div className="space-y-4 text-center">
        <h2 className="h2 font-satoshi-black">
          {sectionHeading}
        </h2>
        <p className="h7 font-satoshi-medium">
          {sectionDescription}
        </p>
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4">
        {contactDetails.map((contactDetail, index) => (
          <div
            key={index}
            className="border-l-[3px] max-md:border-l-2 border-white-0 p-4 space-y-2 flex flex-col justify-between"
          >
            <div className="flex space-x-2 items-center">
              <contactDetail.contactIcon className="w-8 h-8" aria-hidden="true" />
              <p className="h7 font-bold">{contactDetail.contactType}</p>
            </div>
            <p className="p font-satoshi-light">
              {contactDetail.contactDesc}
            </p>
            <a
              target="_blank"
              className="font-bold"
              href={contactDetail.contactLink}
              rel="noreferrer"
            >
              {contactDetail.contactLinkName}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactDetails;
