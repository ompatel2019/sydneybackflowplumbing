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
    "name": "Sydney Backflow & Plumbing | 24/7 Plumber for Horsley Park & Sydney",
    "description": "Sydney Backflow & Plumbing offers expert, around-the-clock service. Specializing in drain cleaning, hot water systems, gas plumbing, and more.",
    "url": "https://example.com/"
  };

  return (
    <>
      <SeoHelmet
        title="Sydney Backflow & Plumbing | 24/7 Plumber for Horsley Park & Sydney"
        description="Sydney Backflow & Plumbing offers expert, around-the-clock service. Specializing in drain cleaning, hot water systems, gas plumbing, and more."
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
