// pages/BlogsPage.jsx
import React from 'react';
import SeoHelmet from '../components/SeoHelmet';

// ─── Components for Blogs Page ───────────────────────────────
import Blogs from '../components/Blogs';
import CTA from '../components/CTA';
import PageTitle from '../components/PageTitle';

const BlogsPage = () => {
  // ─── Schema for Blogs Page ─────────────────────────────
  const jsonLdBlogsPage = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blogs - Sydney Backflow & Plumbing",
    "description": "Explore our latest posts on plumbing tips, industry insights, and expert advice. Proudly serving Horsley Park and Greater Sydney.",
    "url": "https://example.com/blogs"
  };

  return (
    <>
      <SeoHelmet
        title="Plumbing Tips & News | Sydney Backflow & Plumbing Blog"
        description="Explore our latest posts on plumbing tips, industry insights, and expert advice. Proudly serving Horsley Park and Greater Sydney."
        jsonSchema={jsonLdBlogsPage}
      />

      {/* ─── Sections ─────────────────────────────────────────── */}
      <PageTitle 
        pageTitle='Blogs' 
        pageRoute='home / blogs' 
        dividerBackground='bg-white-0' 
        dividerFill='#2A2A2A' 
        backgroundColour='bg-black-0' 
        textColour='text-white-0'
      />
      <Blogs />
      <CTA backgroundColour='bg-primary-0' textColour='text-white-0'/>
    </>
  );
};

export default BlogsPage;
