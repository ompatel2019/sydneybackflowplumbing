// pages/ServicesPage.jsx
import React from 'react';
import SeoHelmet from '../components/SeoHelmet';

// ─── Components for Services Page ─────────────────────────────────────
import Services from '../components/Services';
import CTA from '../components/CTA';
import PageTitle from '../components/PageTitle';

const ServicesPage = () => {
  // ─── Schema for Services Page ───────────────────────────────
  const jsonLdServicesPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Services - Sydney Backflow & Plumbing",
    "description": "Discover our range of professional services at Sydney Backflow & Plumbing.",
    "url": "https://example.com/services"
  };

  return (
    <>
      <SeoHelmet
        title="Services - Sydney Backflow & Plumbing"
        description="Discover our range of professional services at Sydney Backflow & Plumbing."
        jsonSchema={jsonLdServicesPage}
      />

      {/* ─── Sections ─────────────────────────────────────────── */}
      <PageTitle 
        pageTitle='Services' 
        pageRoute='home / services' 
        dividerBackground='bg-primary-0' 
        dividerFill='#FAFAFA' 
        backgroundColour='bg-white-0' 
        textColour='text-black-0'
      />
      <Services />
      <CTA backgroundColour='bg-black-0' textColour='text-white-0'/>
    </>
  );
};

export default ServicesPage;
