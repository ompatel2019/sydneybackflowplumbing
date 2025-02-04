import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Step icons (for display)
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

  // ---------------------------------
  // 1) The onSubmit Handler
  // ---------------------------------
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      // Post to the current path ("/"), which Netlify will intercept
      // The body must be URL-encoded so Netlify recognizes it properly.
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      // Show custom success
      setIsSubmitted(true);
      form.reset();

      // Fade out
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFadeOut(false);
        }, 1000);
      }, 2000);

    } catch (error) {
      console.error("Form submission error:", error);
      // Optionally handle or display an error message
    }
  };

  // Input classes (styling)
  const inputFieldClass =
    'p-2 px-4 rounded-sm focus:border-c-1 focus:outline-none text-c-5-0 w-full hover:px-6 transition-all bg-transparent border-b-2';

  const sectionHeading = 'Get in touch';
  const sectionDescription = 'We will get back to you as soon as possible!';

  return (
    <section className="responsivePad bg-primary-0 2xl:py-32 lg:py-24 md:py-20 py-12 text-white-0 space-y-12 max-md:space-y-4">
      <div className='space-y-4 text-center'>
        <h2 className='h2 font-satoshi-black'>{sectionHeading}</h2>
        <p className='h7 font-satoshi-medium'>{sectionDescription}</p>
      </div>

      {/* Display perk icons/steps */}
      <div className="flex space-x-4 max-md:hidden responsivePad">
        {perks.map((perk, i) => (
          <div key={i} className="flex flex-col w-full items-center rounded-2xl py-4 px-4">
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

      {/* The Netlify form */}
      <form
        name="contact"             // 1) Must match the hidden "form-name" value.
        method="POST"              // 2) Must be POST
        data-netlify="true"        // 3) Tells Netlify to process it
        onSubmit={handleSubmit}    // We'll override default POST so we can do no-reload
        className='responsivePad'
      >
        {/* Netlify requires this hidden form-name input */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Optionally, customize the email subject line: */}
        {/*
          <input
            type="hidden"
            name="subject"
            value="New lead from %{formName} (%{submissionId})"
          />
        */}

        <div className='flex space-x-4 mb-4'>
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

      {/* Simple success overlay */}
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
  );
};

export default ContactForm;
