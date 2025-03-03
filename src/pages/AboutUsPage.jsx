import React from 'react';
import SeoHelmet from '../components/SeoHelmet';

// Components
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Faqs from '../components/Faqs';
import CTA from '../components/CTA';
import PageTitle from '../components/PageTitle';

const AboutUsPage = () => {
  const jsonLdAboutUsPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Us",
    "description": "Learn about our 20+ years of experience and why we're the trusted plumbers for Wetherill Park & Sydney.",
    "url": "https://sydneybackflowplumbing.com.au/about-us"
  };

  return (
    <>
      <SeoHelmet
        title="About Us"
        description="Learn about our 20+ years of experience, guaranteed workmanship, and why we’re trusted plumbers in Wetherill Park & Sydney."
        canonicalUrl="https://sydneybackflowplumbing.com.au/about-us"
        jsonSchema={jsonLdAboutUsPage}
      />

      <PageTitle
        pageTitle="About Us"
        pageRoute="home / about us"
        dividerBackground="bg-white-0"
        dividerFill="#2A2A2A"
        backgroundColour="bg-black-0"
        textColour="text-white-0"
      />
      <AboutUs />
      <CTA backgroundColour="bg-primary-0" textColour="text-white-0" />
      <Testimonials />
      <Faqs />
    </>
  );
};

export default AboutUsPage;
