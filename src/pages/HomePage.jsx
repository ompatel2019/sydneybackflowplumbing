import React from 'react';
import SeoHelmet from '../components/SeoHelmet';

// Sections
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
  const jsonLdHomePage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sydney Backflow and Plumbing | 24/7 Plumber for Wetherill Park & Sydney",
    "description": "Sydney Backflow and Plumbing offers expert, around-the-clock service. Specializing in drain cleaning, hot water systems, gas plumbing, and more.",
    "url": "https://sydneybackflowplumbing.com.au/"
  };

  return (
    <>
      <SeoHelmet
        title="Sydney Backflow and Plumbing | 24/7 Plumber for Wetherill Park & Sydney"
        description="Sydney Backflow and Plumbing offers expert, around-the-clock service for Wetherill Park & Sydney. Specializing in drains, hot water, and more."
        canonicalUrl="https://sydneybackflowplumbing.com.au/"
        jsonSchema={jsonLdHomePage}
      />

      <ServicesLine />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ContactForm />
      <ContactDetails />
      <Testimonials />
      <AboutUs />
      <Blogs />
      <Faqs />
    </>
  );
};

export default HomePage;
