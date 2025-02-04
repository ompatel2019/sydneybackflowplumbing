import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const perks = [
    {
      image: FaPhoneAlt,
      header: 'Contact Us',
      extendedDescription: 'Reach out to schedule a plumbing service with us.',
    },
    {
      image: MdOutlineDateRange,
      header: 'Choose Date',
      extendedDescription: 'Select a convenient time, and we’ll be ready to assist.',
    },
    {
      image: FaCheck,
      header: 'Job Done!',
      extendedDescription: 'Sit back as we handle the job with precision and care.',
    },
  ];

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // This function manually sends a POST request to Netlify
  // while still letting Netlify identify and store the form submission.
  const onSubmit = async (event) => {
    event.preventDefault();

    // Collect all form fields
    const formData = new FormData(event.target);

    try {
      // Send the form data to Netlify
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      
      // If successful, show the success message
      setIsSubmitted(true);
      event.target.reset();

      // Fade out the success message after a short delay
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFadeOut(false);
        }, 1000);
      }, 2000);

    } catch (error) {
      console.error("Form submission error: ", error);
      // Optionally, handle errors or display a message to the user
    }
  };

  const inputFieldClass =
    'p-2 px-4 rounded-sm focus:border-c-1 focus:outline-none text-c-5-0 w-full hover:px-6 transition-all bg-transparent border-b-2';

  const sectionHeading = 'Get in touch';
  const sectionDescription = 'We will get back to you as soon as possible!';

  return (
    <>
      <section className="responsivePad bg-primary-0 2xl:py-32 lg:py-24 md:py-20 py-12 text-white-0 space-y-12 max-md:space-y-4">
        <div className='space-y-4 text-center'>
          <h2 className='h2 font-satoshi-black'>
            {sectionHeading}
          </h2>
          <p className='h7 font-satoshi-medium'>
            {sectionDescription}
          </p>
        </div>

        {/* Perks (static row) */}
        <div className="flex space-x-4 max-md:hidden responsivePad">
          {perks.map((perk, perkIndex) => (
            <div
              key={perkIndex}
              className="flex flex-col w-full justify-center items-center rounded-2xl py-4 px-4"
            >
              <div className="rounded-full p-6">
                <perk.image className='h4' aria-hidden="true" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="h7 font-satoshi-bold">{perk.header}</h3>
                <p className="font-satoshi">{perk.extendedDescription}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Netlify form */}
        <form
          className="text-c-3-0 space-y-8 responsivePad"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={onSubmit}
        >
          {/* IMPORTANT: hidden form-name input */}
          <input type="hidden" name="form-name" value="contact" />

          <div className='flex space-x-4'>
            <input 
              required 
              type="text" 
              id="name" 
              name="name" 
              placeholder='Full Name*' 
              className={inputFieldClass} 
            />
            <input 
              required 
              type="text" 
              id="contact" 
              name="contact" 
              placeholder='Contact No.*' 
              className={inputFieldClass} 
            />
          </div>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder='Email' 
            className={inputFieldClass} 
          />
          <textarea
            required
            id="message"
            name="message"
            placeholder="Inquiry*"
            className={inputFieldClass}
            rows="10"
          />
          <button className="bg-white-0 flex items-center p-4 space-x-2 font-medium rounded-sm px-6 w-full justify-center hover:bg-black-0 transition-colors hover:text-white-0 font-satoshi-medium text-black-0">
            <p>Send Inquiry</p>
            <FaRegPaperPlane aria-hidden="true" />
          </button>
        </form>

        {/* Simple success message overlay (optional) */}
        {isSubmitted && (
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center transition-opacity ${
              fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="bg-white p-8 rounded shadow-md text-black">
              <h3 className="text-xl font-bold">Thank you!</h3>
              <p>Your inquiry has been sent. We will contact you soon.</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ContactForm;
