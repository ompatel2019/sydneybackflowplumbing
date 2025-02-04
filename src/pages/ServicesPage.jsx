// pages/ServicesPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

// ─── Components for Services Page ──────────────────────────────────────
import Services from '../components/Services';
import CTA from '../components/CTA';
import PageTitle from '../components/PageTitle';

const ServicesPage = () => {
  // ─── Schema for Services Page ─────────────────────────────────────────
  const jsonLdServicesPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Services - Business Name",
    "description": "Discover our range of professional services at Business Name.",
    "url": "https://example.com/services"
  };

  return (
    <>
      <Helmet>
        <title>Services - Business Name</title>
        <meta name="description" content="Discover our range of professional services at Business Name." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdServicesPage)}
        </script>
      </Helmet>

      {/* ─── Sections ───────────────────────────────────────────── */}
      <PageTitle pageTitle='Services' pageRoute='home / services' dividerBackground='bg-primary-0' dividerFill='#FAFAFA' backgroundColour='bg-white-0' textColour='text-black-0'/>
      <Services/>
      <CTA backgroundColour='bg-black-0' textColour='text-white-0'/>
    </>
  );
};

export default ServicesPage;
