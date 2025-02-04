// pages/HomePage.jsx
import React from 'react';
import SeoHelmet from '../components/SeoHelmet';

// ─── Sections ─────────────────────────────────────────────────────
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
  // ─── Schema for Home Page ─────────────────────────────────
  const jsonLdHomePage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Home - Sydney Backflow & Plumbing",
    "description": "Welcome to Sydney Backflow & Plumbing. Customize your homepage description here.",
    "url": "https://example.com/"
  };

  return (
    <>
      <SeoHelmet
        title="Home - Sydney Backflow & Plumbing"
        description="Welcome to Sydney Backflow & Plumbing. Customize your homepage description here."
        jsonSchema={jsonLdHomePage}
      />

      {/* ─── Sections ─────────────────────────────────────────── */}
      <ServicesLine />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ContactDetails />
      <ContactForm />
      <Testimonials />
      <AboutUs />
      <Blogs />
      <Faqs />
    </>
  );
};

export default HomePage;
