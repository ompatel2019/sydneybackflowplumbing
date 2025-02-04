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

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('access_key', 'a8e0995a-e8dd-496e-829e-e803772adc30');
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setIsSubmitted(true);
      event.target.reset();

      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFadeOut(false);
        }, 1000);
      }, 2000);
    }
  };

  const inputFieldClass =
    'p-2 px-4 rounded-sm focus:border-c-1 focus:outline-none text-c-5-0 w-full hover:px-6 transition-all bg-transparent border-b-2';

  const inputFields = [
    {
      label: 'Name',
      type: 'text',
      id: 'name',
      name: 'name',
      placeholder: 'Full Name*',
      className: inputFieldClass,
    },
    {
      label: 'Contact',
      type: 'text',
      id: 'contact',
      name: 'contact',
      placeholder: 'Contact No.*',
      className: inputFieldClass,
    },
    {
      label: 'Email',
      type: 'email',
      id: 'email',
      name: 'email',
      placeholder: 'Email',
      className: inputFieldClass,
    },
    {
      label: 'Message',
      type: 'textarea',
      id: 'message',
      name: 'message',
      placeholder: 'Inquiry*',
      className: inputFieldClass,
      rows: 5,
    },
  ];

  const sectionHeading = 'Get in touch';
  const sectionDescription = 'We will get back to you as soon as possible!'

  return (
    <>
      <section className="responsivePad bg-primary-0 2xl:py-32 lg:py-24 md:py-20 py-12 text-white-0 space-y-12 max-md:space-y-4 p">
          <div className='space-y-4 text-center'>
            <h2 className='h2 font-satoshi-black'>
              {sectionHeading}
            </h2>
            <p className='h7 font-satoshi-medium'>
              {sectionDescription}
            </p>
          </div>

        <div className="flex space-x-4 max-md:hidden responsivePad">
          {perks.map((perk, perkIndex) => (
            <div
              key={perkIndex}
              className="flex flex-col w-full justify-center items-center rounded-2xl py-4 px-4"
            >
              <div className="rounded-full p-6">
                <perk.image className='h4'/>
              </div>

              <div className="space-y-2">
                <h3 className="h7 font-satoshi-bold text-center">
                  {perk.header}
                </h3>
                <p className="text-center font-satoshi lg:hidden">
                  {perk.description}
                </p>
                <p className="text-center font-satoshi max-lg:hidden">
                  {perk.extendedDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        <form className="text-c-3-0 space-y-8 responsivePad" onSubmit={onSubmit}>
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
                id= "message"
                name="message"
                placeholder="Inquiry*"
                className= {`${inputFieldClass} `}
                rows="10"
              />
          <button className="bg-white-0 flex items-center p-4 space-x-2 font-medium rounded-sm px-6 w-full justify-center hover:bg-black-0 transition-colors hover:text-white-0 font-satoshi-medium text-black-0">
            <p>Send Inquiry</p>
            <FaRegPaperPlane/>
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
