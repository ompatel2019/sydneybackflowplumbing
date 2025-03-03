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
    "name": "Services - Sydney Backflow and Plumbing",
    "description": "Professional plumbing services for Wetherill Park & Sydney. We offer 24/7 emergency support and 20+ years of experience.",
    "url": "https://sydneybackflowplumbing.com.au/our-services"
  };

  return (
    <>
      <SeoHelmet
        title="Services - Sydney Backflow and Plumbing"
        description="Professional plumbing services for Wetherill Park & Sydney. We offer 24/7 emergency support and 20+ years of experience."
        canonicalUrl="https://sydneybackflowplumbing.com.au/our-services"
        jsonSchema={jsonLdServicesPage}
      />

      <PageTitle
        pageTitle="Services - Sydney Backflow and Plumbing"
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
