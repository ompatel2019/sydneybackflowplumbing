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
    "name": "Plumbing Services in Sydney | Sydney Backflow & Plumbing",
    "description": "Learn why our guaranteed workmanship, 20+ years of experience, and 24/7 emergency service set us apart in Horsley Park and Greater Sydney.",
    "url": "https://example.com/services"
  };

  return (
    <>
      <SeoHelmet
        title="Plumbing Services in Sydney | Sydney Backflow & Plumbing"
        description="Learn why our guaranteed workmanship, 30+ years of experience, and 24/7 emergency service set us apart in Horsley Park and Greater Sydney."
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
