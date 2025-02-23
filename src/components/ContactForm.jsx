import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaCheck, FaRegPaperPlane } from "react-icons/fa6";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const perks = [
    {
      image: FaPhoneAlt,
      header: 'Contact Us',
      extendedDescription: 'Reach out to schedule plumbing service with us.'
    },
    {
      image: MdOutlineDateRange,
      header: 'Choose Date',
      extendedDescription: 'Pick a convenient time, and we’ll be ready to assist.'
    },
    {
      image: FaCheck,
      header: 'Job Done!',
      extendedDescription: 'Sit back as we handle the job with precision and care.'
    },
  ];

  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);
    formData.append('access_key', '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult('Form Submitted Successfully');
        event.target.reset();
      } else {
        console.error('Error submitting form:', data);
        setResult(data.message);
      }
    } catch (error) {
      console.error('Network Error:', error);
      setResult('Error submitting form. Please try again later.');
    }
  };
  const inputFieldClass =
    "p-2 px-4 rounded-sm focus:border-c-1 focus:outline-none text-c-5-0 w-full hover:px-6 transition-all bg-transparent border-b-2";

  const sectionHeading = 'Get in touch';
  const sectionDescription = 'We will get back to you as soon as possible!';

  return (
    <section className="responsivePad bg-primary-0 2xl:py-32 lg:py-24 md:py-20 py-12 text-white-0 space-y-12 max-md:space-y-4">
      <div className="space-y-4 text-center">
        <h2 className="h2 font-satoshi-black">{sectionHeading}</h2>
        <p className="h7 font-satoshi-medium">{sectionDescription}</p>
      </div>

      <div className="flex space-x-4 max-md:hidden responsivePad">
        {perks.map((perk, i) => (
          <div key={i} className="flex flex-col w-full items-center rounded-2xl py-4 px-4">
            <div className="rounded-full p-6">
              <perk.image className="h4" aria-hidden="true" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="h7 font-satoshi-bold">{perk.header}</h3>
              <p className="font-satoshi">{perk.extendedDescription}</p>
            </div>
          </div>
        ))}
      </div>

      <form
        name="contact"
        method="POST"
        onSubmit={onSubmit}
        className="responsivePad"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name*"
            className={inputFieldClass}
          />
          <input
            type="text"
            name="contact"
            required
            placeholder="Contact No.*"
            className={inputFieldClass}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className={`${inputFieldClass} mb-4`}
        />

        <textarea
          required
          name="message"
          rows="10"
          placeholder="Inquiry*"
          className={`${inputFieldClass} mb-4 w-full`}
        />

        <button
          type="submit"
          className="bg-white-0 flex items-center p-4 space-x-2 font-medium rounded-sm px-6 w-full justify-center hover:bg-black-0 transition-colors hover:text-white-0 font-satoshi-medium text-black-0"
        >
          <span>Send Inquiry</span>
          <FaRegPaperPlane aria-hidden="true" />
        </button>
      </form>

      {isSubmitted && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-700 ${
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
  );
};

export default ContactForm;
