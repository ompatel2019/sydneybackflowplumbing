import React from 'react';
import SeoHelmet from '../components/SeoHelmet';

// Components
import ContactForm from '../components/ContactForm';
import Faqs from '../components/Faqs';
import CTA from '../components/CTA';
import PageTitle from '../components/PageTitle';
import ContactDetails from '../components/ContactDetails';

const ContactPage = () => {
  const jsonLdContactPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contact Sydney Backflow and Plumbing | 24/7 Emergency Plumbers in Wetherill Park & Sydney",
    "description": "Get in touch with our licensed plumbers for round-the-clock service in Wetherill Park & Sydney. Request a quote or emergency assistance.",
    "url": "https://sydneybackflowplumbing.com.au/contact"
  };

  return (
    <>
      <SeoHelmet
        title="Contact Sydney Backflow and Plumbing | 24/7 Plumbers in Wetherill Park & Sydney"
        description="Get in touch for round-the-clock service in Wetherill Park & Sydney. Request a quote or emergency help."
        jsonSchema={jsonLdContactPage}
      />

      <PageTitle
        pageTitle="Contact Us"
        pageRoute="home / contact"
        dividerBackground="bg-primary-0"
        dividerFill="#FAFAFA"
        backgroundColour="bg-white-0"
        textColour="text-black-0"
      />
      <ContactForm />
      <ContactDetails />
      <CTA backgroundColour="bg-white-0" textColour="" />
      <Faqs />
    </>
  );
};

export default ContactPage;
