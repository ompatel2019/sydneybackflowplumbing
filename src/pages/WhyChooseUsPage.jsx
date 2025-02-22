import React from 'react';
import SeoHelmet from '../components/SeoHelmet';

// Components
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import PageTitle from '../components/PageTitle';

const WhyChooseUsPage = () => {
  const jsonLdWhyChooseUsPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Why Choose Sydney Backflow and Plumbing | Trusted Wetherill Park & Sydney Plumbers",
    "description": "Discover why our guaranteed workmanship, 20+ years of experience, and 24/7 emergency service set us apart in Wetherill Park & Sydney.",
    "url": "https://sydneybackflowplumbing.com.au/whychooseus"
  };

  return (
    <>
      <SeoHelmet
        title="Why Choose Sydney Backflow and Plumbing | Trusted Wetherill Park & Sydney Plumbers"
        description="Discover why our guaranteed workmanship, 20+ years of experience, and 24/7 emergency service set us apart in Wetherill Park & Sydney."
        jsonSchema={jsonLdWhyChooseUsPage}
      />

      <PageTitle
        pageTitle="Why Choose Us"
        pageRoute="home / why choose us"
        dividerBackground="bg-white-0"
        dividerFill="#2A2A2A"
        backgroundColour="bg-black-0"
        textColour="text-white-0"
      />
      <WhyChooseUs />
      <Testimonials />
      <CTA backgroundColour="bg-primary-0" textColour="text-white-0" />
    </>
  );
};

export default WhyChooseUsPage;
