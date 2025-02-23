import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { FaCheck, FaRegPaperPlane } from "react-icons/fa6";

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Clears the status message after 3 seconds
  const clearStatus = () => {
    setTimeout(() => {
      setStatusMessage("");
    }, 3000);
  };

  // Handle form submission via AJAX (Netlify)
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);

    const form = event.target;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        body: formData,
      });

      // Mark as submitted
      setIsSubmitted(true);
      setIsSending(false);
      setStatusMessage("Form submitted successfully!");

      // Clear form fields
      form.reset();

      // Fade out success after some time
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFadeOut(false);
        }, 1000);
      }, 2000);

      clearStatus();
    } catch (error) {
      setIsSending(false);
      setStatusMessage(`Form submission failed: ${error}`);
      clearStatus();
    }
  };

  return (
    <section className="responsivePad bg-primary-0 2xl:py-32 lg:py-24 md:py-20 py-12 text-white-0 space-y-12 max-md:space-y-4">
      {/* Heading */}
      <div className="space-y-4 text-center">
        <h2 className="h2 font-satoshi-black">Get in touch</h2>
        <p className="h7 font-satoshi-medium">We will get back to you as soon as possible!</p>
      </div>

      {/* Perk icons/steps (unchanged) */}
      <div className="flex space-x-4 max-md:hidden responsivePad">
        {/* 1) Contact Us */}
        <div className="flex flex-col w-full items-center rounded-2xl py-4 px-4">
          <div className="rounded-full p-6">
            <FaPhoneAlt className="h4" aria-hidden="true" />
          </div>
          <div className="space-y-2 text-center">
            <h3 className="h7 font-satoshi-bold">Contact Us</h3>
            <p className="font-satoshi">Reach out to schedule plumbing service with us.</p>
          </div>
        </div>
        {/* 2) Choose Date */}
        <div className="flex flex-col w-full items-center rounded-2xl py-4 px-4">
          <div className="rounded-full p-6">
            <MdOutlineDateRange className="h4" aria-hidden="true" />
          </div>
          <div className="space-y-2 text-center">
            <h3 className="h7 font-satoshi-bold">Choose Date</h3>
            <p className="font-satoshi">Pick a convenient time, and we’ll be ready to assist.</p>
          </div>
        </div>
        {/* 3) Job Done! */}
        <div className="flex flex-col w-full items-center rounded-2xl py-4 px-4">
          <div className="rounded-full p-6">
            <FaCheck className="h4" aria-hidden="true" />
          </div>
          <div className="space-y-2 text-center">
            <h3 className="h7 font-satoshi-bold">Job Done!</h3>
            <p className="font-satoshi">Sit back as we handle the job with precision and care.</p>
          </div>
        </div>
      </div>

      {/* The Netlify form (same styling). */}
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="responsivePad"
      >
        {/* Netlify hidden input */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot for spam */}
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out:
            <input name="bot-field" aria-label="bot-field" />
          </label>
        </p>

        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name*"
            className="p-2 px-4 rounded-sm focus:border-c-1 focus:outline-none text-c-5-0 w-full hover:px-6 transition-all bg-transparent border-b-2"
          />
          <input
            type="text"
            name="contact"
            required
            placeholder="Contact No.*"
            className="p-2 px-4 rounded-sm focus:border-c-1 focus:outline-none text-c-5-0 w-full hover:px-6 transition-all bg-transparent border-b-2"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 px-4 rounded-sm focus:border-c-1 focus:outline-none text-c-5-0 w-full hover:px-6 transition-all bg-transparent border-b-2 mb-4"
        />

        <textarea
          required
          name="message"
          rows="10"
          placeholder="Inquiry*"
          className="p-2 px-4 rounded-sm focus:border-c-1 focus:outline-none text-c-5-0 w-full hover:px-6 transition-all bg-transparent border-b-2 mb-4"
        />

        {/* Optional Netlify reCAPTCHA (enable in Netlify if you want) */}
        <div data-netlify-recaptcha="true" className="mb-4"></div>

        {/* Send button */}
        <button
          type="submit"
          className="bg-white-0 flex items-center p-4 space-x-2 font-medium rounded-sm px-6 w-full justify-center
                     hover:bg-black-0 transition-colors hover:text-white-0 font-satoshi-medium text-black-0"
        >
          {/* If isSending is true, show "Sending...", else show normal label + icon */}
          {isSending ? (
            <>Sending...</>
          ) : (
            <>
              <span>Send Inquiry</span>
              <FaRegPaperPlane aria-hidden="true" />
            </>
          )}
        </button>
      </form>

      {/* Overlays the entire screen if the form was submitted. */}
      {isSubmitted && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center transition-opacity
            ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="bg-white p-8 rounded shadow-md text-black">
            <h3 className="text-xl font-bold">Thank you!</h3>
            <p>Your inquiry has been sent. We will contact you soon.</p>
          </div>
        </div>
      )}

      {/* Display status message for error or success after fade out */}
      {statusMessage && (
        <p className="text-center mt-4">{statusMessage}</p>
      )}
    </section>
  );
};

export default ContactForm;
