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
    "name": "Contact - Sydney Backflow & Plumbing",
    "description": "Get in touch with Sydney Backflow & Plumbing for inquiries and support.",
    "url": "https://example.com/contact"
  };

  return (
    <>
      <SeoHelmet
        title="Contact - Sydney Backflow & Plumbing"
        description="Get in touch with Sydney Backflow & Plumbing for inquiries and support."
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
