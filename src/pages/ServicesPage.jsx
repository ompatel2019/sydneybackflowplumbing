import React from 'react';
import SeoHelmet from '../components/SeoHelmet';

// Components
import Services from '../components/Services';
import CTA from '../components/CTA';
import PageTitle from '../components/PageTitle';

const ServicesPage = () => {
  const jsonLdServicesPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Plumbing Services in Wetherill Park & Sydney | Sydney Backflow and Plumbing",
    "description": "Professional and comprehensive plumbing services for Wetherill Park & Sydney. 24/7 emergency response, guaranteed workmanship, and 20+ years of experience.",
    "url": "https://sydneybackflowplumbing.com.au/services"
  };

  return (
    <>
      <SeoHelmet
        title="Plumbing Services in Wetherill Park & Sydney | Sydney Backflow and Plumbing"
        description="Professional plumbing services for Wetherill Park & Sydney. We offer 24/7 emergency service and 20+ years of experience."
        jsonSchema={jsonLdServicesPage}
      />

      <PageTitle
        pageTitle="Services"
        pageRoute="home / services"
        dividerBackground="bg-primary-0"
        dividerFill="#FAFAFA"
        backgroundColour="bg-white-0"
        textColour="text-black-0"
      />
      <Services />
      <CTA backgroundColour="bg-black-0" textColour="text-white-0" />
    </>
  );
};

export default ServicesPage;
