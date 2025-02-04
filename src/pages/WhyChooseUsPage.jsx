// pages/WhyChooseUsPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

// ─── Components for Why Choose Us Page ──────────────────────────────────
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import PageTitle from '../components/PageTitle';

const WhyChooseUsPage = () => {
  // ─── Schema for Why Choose Us Page ─────────────────────────────────────
  const jsonLdWhyChooseUsPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Why Choose Us - Business Name",
    "description": "Learn why Business Name is the best choice for your needs.",
    "url": "https://example.com/whychooseus"
  };

  return (
    <>
      <Helmet>
        <title>Why Choose Us - Business Name</title>
        <meta name="description" content="Learn why Business Name is the best choice for your needs." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdWhyChooseUsPage)}
        </script>
      </Helmet>

      {/* ─── Sections ───────────────────────────────────────────── */}
      <PageTitle pageTitle='Why Choose Us' pageRoute='home / why choose us' dividerBackground='bg-white-0' dividerFill='#2A2A2A' backgroundColour='bg-black-0' textColour='text-white-0'/>
      <WhyChooseUs />
      <Testimonials />
      <CTA backgroundColour='bg-primary-0' textColour='text-white-0'/>
    </>
  );
};

export default WhyChooseUsPage;
