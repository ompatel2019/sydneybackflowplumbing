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
    <section className="responsivePad 2xl:py-32 lg:py-24 md:py-20 py-12 font-satoshi space-y-8 bg-white-0">
      <div className="space-y-4">
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
            className="border-l-[3px] max-md:border-l-2 border-black-0 p-4 space-y-2 flex flex-col justify-between"
          >
            <div className="flex space-x-2 items-center">
              <contactDetail.contactIcon className="w-8 h-8" aria-hidden="true" />
              <h4 className="h7 font-bold">{contactDetail.contactType}</h4>
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

      {/* Lazy loading the map with "loading='lazy'" to improve performance. */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424143.8758662685!2d150.60232131820038!3d-33.847805254804975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1738642735937!5m2!1sen!2sau"
        className="w-full h-[480px]"
        style={{ border: '0' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Wetherill Park & Sydney Region Map"
      />
    </section>
  );
};

export default ContactDetails;
