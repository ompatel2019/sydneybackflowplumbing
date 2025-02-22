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
    "name": "About Sydney Backflow and Plumbing | Serving Wetherill Park & Sydney",
    "description": "Learn about our 20+ years of experience and why we're the trusted plumbers for Wetherill Park & Sydney.",
    "url": "https://sydneybackflowplumbing.com.au/aboutus"
  };

  return (
    <>
      <SeoHelmet
        title="About Sydney Backflow and Plumbing | Serving Wetherill Park & Sydney"
        description="Learn about our 20+ years of experience, commitment to guaranteed workmanship, and why we’re the trusted plumbers for Wetherill Park & Sydney."
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
