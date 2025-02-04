// pages/BlogsPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

// ─── Components for Blogs Page ───────────────────────────────────────
import Blogs from '../components/Blogs';
import CTA from '../components/CTA';
import PageTitle from '../components/PageTitle';

const BlogsPage = () => {
  // ─── Schema for Blogs Page ───────────────────────────────────────────
  const jsonLdBlogsPage = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blogs - Business Name",
    "description": "Collection of our latest insights and trends in digital services.",
    "url": "https://example.com/blogs"
  };

  return (
    <>
      <Helmet>
        <title>All Blogs - Business Name</title>
        <meta name="description" content="Explore our latest blog posts on SEO, web design, and digital marketing insights." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdBlogsPage)}
        </script>
      </Helmet>

      {/* ─── Sections ───────────────────────────────────────────── */}
      <PageTitle pageTitle='Blogs' pageRoute='home / blogs' dividerBackground='bg-white-0' dividerFill='#2A2A2A' backgroundColour='bg-black-0' textColour='text-white-0'/>
      <Blogs />
      <CTA backgroundColour='bg-primary-0' textColour='text-white-0'/>
    </>
  );
};

export default BlogsPage;
