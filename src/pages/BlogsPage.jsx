import React from 'react';
import SeoHelmet from '../components/SeoHelmet';
import blog1 from '../images/blog1.webp';
import blog2 from '../images/blog2.webp';
import blog3 from '../images/blog3.webp';

// Components
import Blogs from '../components/Blogs';
import CTA from '../components/CTA';
import PageTitle from '../components/PageTitle';

const BlogsPage = () => {
  const jsonLdBlogsPage = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blogs",
    "description": "Explore our latest posts on plumbing tips, industry insights, and expert advice for Wetherill Park & Sydney.",
    "url": "https://sydneybackflowplumbing.com.au/blogs"
  };

  return (
    <>
      <SeoHelmet
        title="Blogs"
        description="Read our latest posts on plumbing tips, industry insights, and expert advice for Wetherill Park & Sydney."
        canonicalUrl="https://sydneybackflowplumbing.com.au/blogs"
        jsonSchema={jsonLdBlogsPage}
      />

      <PageTitle
        pageTitle="Blogs"
        pageRoute="home / blogs"
        dividerBackground="bg-white-0"
        dividerFill="#2A2A2A"
        backgroundColour="bg-black-0"
        textColour="text-white-0"
      />
      <Blogs blog1={blog1} blog2={blog2} blog3={blog3} />
      <CTA backgroundColour="bg-primary-0" textColour="text-white-0" />
    </>
  );
};

export default BlogsPage;
