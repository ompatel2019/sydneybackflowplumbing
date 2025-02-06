// pages/ContactPage.jsx
import React from 'react';
import SeoHelmet from '../components/SeoHelmet';

// ─── Components for Contact Page ────────────────────────────
import ContactForm from '../components/ContactForm';
import Faqs from '../components/Faqs';
import CTA from '../components/CTA';
import PageTitle from '../components/PageTitle';
import ContactDetails from '../components/ContactDetails';

const ContactPage = () => {
  // ─── Schema for Contact Page ───────────────────────────────
  const jsonLdContactPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contact Sydney Backflow & Plumbing | 24/7 Emergency Plumbers in Sydney",
    "description": "Get in touch with our licensed plumbers for round-the-clock service in Horsley Park and throughout Sydney. Request a quote or emergency assistance.",
    "url": "https://example.com/contact"
  };

  return (
    <>
      <SeoHelmet
        title="Contact Sydney Backflow & Plumbing | 24/7 Emergency Plumbers in Sydney"
        description="Get in touch with our licensed plumbers for round-the-clock service in Horsley Park and throughout Sydney. Request a quote or emergency assistance."
        jsonSchema={jsonLdContactPage}
      />

      {/* ─── Sections ─────────────────────────────────────────── */}
      <PageTitle 
        pageTitle='Contact Us' 
        pageRoute='home / contact' 
        dividerBackground='bg-primary-0' 
        dividerFill='#FAFAFA' 
        backgroundColour='bg-white-0' 
        textColour='text-black-0'
      />
      <ContactForm />
      <ContactDetails />
      <CTA backgroundColour='bg-white-0' textColour=''/>
      <Faqs />
    </>
  );
};

export default ContactPage;
