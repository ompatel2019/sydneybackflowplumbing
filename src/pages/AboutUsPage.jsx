// pages/AboutUsPage.jsx
import React from 'react';
import SeoHelmet from '../components/SeoHelmet';

// ─── Components for About Us Page ────────────────────────────
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Faqs from '../components/Faqs';
import CTA from '../components/CTA';
import PageTitle from '../components/PageTitle';

const AboutUsPage = () => {
  // ─── Schema for About Us Page ─────────────────────────────
  const jsonLdAboutUsPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Sydney Backflow & Plumbing | Serving Horsley Park & Greater Sydney",
    "description": "Learn more about Sydney Backflow & Plumbing, our values, and our team.",
    "url": "https://example.com/aboutus"
  };

  return (
    <>
      <SeoHelmet
        title="About Sydney Backflow & Plumbing | Serving Horsley Park & Greater Sydney"
        description="Learn about our 30+ years of experience, commitment to guaranteed workmanship, and why we're the trusted plumbers for Horsley Park and Greater Sydney."
        jsonSchema={jsonLdAboutUsPage}
      />

      {/* ─── Sections ─────────────────────────────────────────── */}
      <PageTitle 
        pageTitle='About Us' 
        pageRoute='home / about us' 
        dividerBackground='bg-white-0' 
        dividerFill='#2A2A2A' 
        backgroundColour='bg-black-0' 
        textColour='text-white-0'
      />
      <AboutUs />
      <CTA backgroundColour='bg-primary-0' textColour='text-white-0'/>
      <Testimonials />
      <Faqs />
    </>
  );
};

export default AboutUsPage;
