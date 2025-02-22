import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Blogs = ({blog1, blog2, blog3}) => {
  const sectionHeading = 'Blogs & Articles';
  const sectionDescription = "Read Our Latest Blogs";

  const blogs = [
    {
      blogImage: blog1,
      blogType: 'Tutorial', 
      blogTitle: 'Prevent Common Plumbing Issues with These Simple Tips', 
      blogDescription: 'Learn how to prevent common plumbing problems with easy maintenance tips that save you money and headaches.',
      blogReleaseDuration: 'November 15, 2024 ⋅ 5 min read',
      blogTo: '/blogs/1'
    },
    {
      blogImage: blog2,
      blogType: 'Informative', 
      blogTitle: 'The Importance of Regular Drain Cleaning', 
      blogDescription: 'Understand why regular drain cleaning is crucial for maintaining your plumbing system’s health and avoiding costly repairs.',
      blogReleaseDuration: 'September 10, 2024 ⋅ 5 min read',
      blogTo: '/blogs/2'
    },
    {
      blogImage: blog3,
      blogType: 'Tutorial', 
      blogTitle: 'How to Choose the Right Hot Water System for Your Home', 
      blogDescription: 'Explore the different types of hot water systems and find out which one best suits your needs and budget.',
      blogReleaseDuration: 'December 1, 2024 ⋅ 5 min read',
      blogTo: '/blogs/3'
    }
  ];
  
  return (
    <section 
      id="faqs"
      className='responsivePad bg-white 2xl:py-32 lg:py-24 md:py-20 py-12 text-black-0 space-y-12 max-md:space-y-4 p font-satoshi bg-white-0'
      aria-label="faq-section"
    >
      <div className='space-y-4 text-center'>
        <h2 className='h2 font-satoshi-black'>
          {sectionHeading}
        </h2>
        <p className='h7 font-satoshi-medium'>
          {sectionDescription}
        </p>
      </div>

      {/* BLOGS */}
      <div className='grid grid-cols-3 gap-8 max-md:grid-cols-1'>
        {blogs.map((blog, blogIndex) => (
          <div key={blogIndex} className='flex flex-col justify-between space-y-2'>
            <img 
              src={blog.blogImage} 
              alt={blog.blogTitle} 
              width={400} 
              height={400} 
              loading='lazy' 
              className='rounded-md w-full md:h-[320px]' 
            />
            <p className='italic text-base'>{blog.blogType}</p>
            <HashLink smooth to={blog.blogTo}>
              <h4 className='p font-bold'>{blog.blogTitle}</h4>
            </HashLink>
            <p className='text-md'>{blog.blogDescription}</p>
            <p className='text-xs'>{blog.blogReleaseDuration}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Blogs;
