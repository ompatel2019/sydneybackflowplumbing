// pages/WhyChooseUsPage.jsx
import React from 'react';
import SeoHelmet from '../components/SeoHelmet';

// ─── Components for Why Choose Us Page ───────────────────────────────
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import PageTitle from '../components/PageTitle';

const WhyChooseUsPage = () => {
  // ─── Schema for Why Choose Us Page ─────────────────────────
  const jsonLdWhyChooseUsPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Why Choose Sydney Backflow & Plumbing | Trusted Horsley Park Plumbers",
    "description": "Learn why our guaranteed workmanship, 20+ years of experience, and 24/7 emergency service set us apart in Horsley Park and Greater Sydney.",
    "url": "https://example.com/whychooseus"
  };

  return (
    <>
      <SeoHelmet
        title="Why Choose Sydney Backflow & Plumbing | Trusted Horsley Park Plumbers"
        description="Learn why our guaranteed workmanship, 20+ years of experience, and 24/7 emergency service set us apart in Horsley Park and Greater Sydney."
        jsonSchema={jsonLdWhyChooseUsPage}
      />

      {/* ─── Sections ─────────────────────────────────────────── */}
      <PageTitle 
        pageTitle='Why Choose Us' 
        pageRoute='home / why choose us' 
        dividerBackground='bg-white-0' 
        dividerFill='#2A2A2A' 
        backgroundColour='bg-black-0' 
        textColour='text-white-0'
      />
      <WhyChooseUs />
      <Testimonials />
      <CTA backgroundColour='bg-primary-0' textColour='text-white-0'/>
    </>
  );
};

export default WhyChooseUsPage;
