// pages/HomePage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

// ─── Sections ───────────────────────────────────────────────────────────
import ServicesLine from '../components/ServicesLine';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Blogs from '../components/Blogs';
import Faqs from '../components/Faqs';
import ContactDetails from '../components/ContactDetails';

const HomePage = () => {
  // ─── Schema for Home Page ──────────────────────────────────────────────
  const jsonLdHomePage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Home - Business Name",
    "description": "Welcome to Business Name. Customize your homepage description here.",
    "url": "https://example.com/"
  };

  return (
    <>
      <Helmet>
        <title>Home - Business Name</title>
        <meta name="description" content="Welcome to Business Name. Customize your homepage description here." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdHomePage)}
        </script>
      </Helmet>

      {/* ─── Sections ───────────────────────────────────────────── */}
      <ServicesLine />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ContactDetails/>
      <ContactForm />
      <Testimonials />
      <AboutUs />
      <Blogs />
      <Faqs />
    </>
  );
};

export default HomePage;
