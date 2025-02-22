import React from 'react';
import { Helmet } from 'react-helmet';
import blogImage from '../../images/blog2.jpg'; // The new image for Blog2

// Subcomponents
import BlogHeader from './blogComponents/BlogHeader';
import BlogSubheading from './blogComponents/BlogSubheading';
import BlogSectionWrapper from './blogComponents/BlogSectionWrapper';
import BlogSectionSubheading from './blogComponents/BlogSectionSubheading';
import BlogText from './blogComponents/BlogText';

const Blog2 = () => {
  // Main metadata
  const blogTitle = 'The Importance of Regular Drain Cleaning';
  const blogDescription = `
    Blocked or slow drains can quickly escalate into costly plumbing issues. 
    In this article, discover why consistent drain cleaning is so essential 
    and learn simple steps to keep your home’s plumbing running smoothly.
  `;
  const blogUrl = 'https://yourwebsite.com/blogs/2'; // Update to your actual URL
  const blogPublishDate = '2025-01-02';

  // JSON-LD for schema.org
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogTitle,
    "image": blogImage,
    "description": blogDescription.trim(),
    "author": {
      "@type": "Person",
      "name": "John Plumber" // Replace with actual author or organization name
    },
    "url": blogUrl,
    "datePublished": blogPublishDate,
    "publisher": {
      "@type": "Organization",
      "name": "Sydney Backflow & Plumbing", // Or your actual company name
      "logo": {
        "@type": "ImageObject",
        "url": "https://sydneybackflowplumbing.com.au/favicon.svg" // Replace if needed
      }
    }
  };

  // ──────────────────────────────────────
  // INTRO
  // ──────────────────────────────────────
  const introHeader = 'Introduction';
  const introText = `
    Drains are an essential but often overlooked part of a home’s plumbing system. 
    Over time, everyday debris—like hair, soap scum, and food residue—can build up 
    and narrow the pathways, causing sluggish water flow or outright clogs. 
    Left unchecked, these issues can lead to bigger headaches, including bad odors, 
    water damage, or even structural problems.
    
    In this guide, we’ll break down the importance of regular drain cleaning 
    and highlight easy steps you can take to keep your drains flowing freely. 
    Whether you’re a homeowner or a renter, consistent maintenance helps you avoid 
    inconvenient blockages and costly emergency repairs.
  `;

  // ──────────────────────────────────────
  // SECTION 1
  // ──────────────────────────────────────
  const section1Heading = '1. Understanding Drain Buildup';

  // Subheading 1.1
  const section1Subhead1 = '1.1 Common Culprits';
  const section1Text1 = `
    Most drain clogs happen gradually, as various substances accumulate along pipe walls:
    
    - **Grease and Oils**: When poured down the sink, these cool and solidify, 
      trapping other debris.
    - **Hair and Soap Scum**: Especially in bathroom drains, hair can form a tangled web 
      that snags soap residue.
    - **Food Particles**: Even with a garbage disposal, tough leftovers like coffee grounds 
      or fibrous vegetables can cause build-ups.
  `;

  // Subheading 1.2
  const section1Subhead2 = '1.2 Warning Signs';
  const section1Text2 = `
    Early detection is key. Look out for:
    
    - **Slow Draining**: If your sink or tub takes longer than usual to empty, 
      a blockage may be forming.
    - **Gurgling Noises**: Trapped air in the pipes can produce bubbling sounds 
      when water flows past partial clogs.
    - **Unpleasant Odors**: Decomposing food or bacteria in trapped water 
      often emits a foul smell.
  `;

  // ──────────────────────────────────────
  // SECTION 2
  // ──────────────────────────────────────
  const section2Heading = '2. Benefits of Routine Drain Cleaning';

  // Subheading 2.1
  const section2Subhead1 = '2.1 Preventing Major Blockages';
  const section2Text1 = `
    Routine cleanings can stop clogs from growing into full-blown blockages. 
    By removing buildup early, you save yourself from overflows, 
    standing water, or emergency plumber visits. Preventive care is almost 
    always cheaper and easier than reacting to a flood or sewage backup.
  `;

  // Subheading 2.2
  const section2Subhead2 = '2.2 Extending Pipe Lifespan';
  const section2Text2 = `
    Built-up debris puts pressure on pipes and can lead to corrosion or cracks. 
    When drains are kept clear, water flows smoothly without building pressure. 
    This minimizes wear and tear, helping your plumbing system last longer 
    and reducing the frequency of major repairs or replacements.
  `;

  // ──────────────────────────────────────
  // SECTION 3
  // ──────────────────────────────────────
  const section3Heading = '3. DIY Maintenance Methods';

  // Subheading 3.1
  const section3Subhead1 = '3.1 Hot Water and Natural Solutions';
  const section3Text1 = `
    A quick flush with hot water each day helps melt away minor grease or oil buildup. 
    For more stubborn clogs:
    
    1. Pour **baking soda** down the drain.
    2. Add **white vinegar** and let it fizz for a few minutes.
    3. Rinse with **boiling water**.
    
    This natural mixture can break up minor blockages and deodorize your drains 
    without harsh chemicals.
  `;

  // Subheading 3.2
  const section3Subhead2 = '3.2 Mesh Screens and Regular Checks';
  const section3Text2 = `
    Installing simple mesh screens or drain catchers in sinks, tubs, and showers 
    can drastically reduce the amount of debris that enters your pipes. 
    Clean these strainers regularly (weekly or as needed) to keep them effective.
    
    Also, set a monthly reminder to inspect all visible drains. If water is pooling 
    or draining slowly, address the issue promptly before it escalates.
  `;

  // ──────────────────────────────────────
  // SECTION 4
  // ──────────────────────────────────────
  const section4Heading = '4. Professional Drain Cleaning';

  // Subheading 4.1
  const section4Subhead1 = '4.1 When to Call an Expert';
  const section4Text1 = `
    Sometimes, DIY methods aren’t enough—especially if you’re dealing with 
    recurring clogs, multiple slow drains at once, or sewage odors. 
    Professionals have specialized tools (like cameras, hydro-jetting, and heavy-duty augers) 
    to thoroughly clear and inspect your drains, ensuring there’s no hidden damage.
  `;

  // Subheading 4.2
  const section4Subhead2 = '4.2 Avoiding Pipe Damage';
  const section4Text2 = `
    Overusing harsh chemical drain cleaners can corrode pipes over time. 
    A professional plumber can safely remove stubborn clogs without harming 
    your plumbing’s integrity. Plus, they’ll spot early signs of potential leaks, 
    cracks, or root infiltration, saving you from more significant problems later.
  `;

  // ──────────────────────────────────────
  // SECTION 5
  // ──────────────────────────────────────
  const section5Heading = '5. Long-Term Prevention Tips';

  // Subheading 5.1
  const section5Subhead1 = '5.1 Mind What You Dispose';
  const section5Text1 = `
    The best way to keep drains clear is to watch what goes down them in the first place. 
    Avoid flushing cooking oils, coffee grounds, eggshells, or cotton swabs. 
    In the bathroom, brush hair before showering if possible, and don’t treat “flushable” wipes 
    as truly flushable—most aren’t, and they contribute to stubborn clogs.
  `;

  // Subheading 5.2
  const section5Subhead2 = '5.2 Regular Inspection Schedules';
  const section5Text2 = `
    Just like you’d periodically check smoke alarms or HVAC filters, set a schedule 
    for drain inspections. Every few months, run a simple test: fill sinks and tubs, 
    then see how quickly they drain. A little effort now can prevent a hefty repair 
    bill later.
  `;

  // ──────────────────────────────────────
  // SECTION 6
  // (New, expanded content)
  // ──────────────────────────────────────
  const section6Heading = '6. Identifying Serious Plumbing Issues';

  // Subheading 6.1
  const section6Subhead1 = '6.1 Multiple Backups';
  const section6Text1 = `
    If multiple fixtures—like your bathtub, toilet, and kitchen sink—are all backing up 
    around the same time, the root cause may be deeper in the sewer line. 
    This typically requires professional assessment, as household fixes won’t reach 
    the main blockage.
  `;

  // Subheading 6.2
  const section6Subhead2 = '6.2 Gurgling or “Phantom Flushing”';
  const section6Text2 = `
    Strange sounds from your drains or toilets that flush themselves unexpectedly 
    can indicate venting problems or hidden leaks. A thorough plumbing inspection 
    can pinpoint whether there’s a blockage in a vent stack or a failing valve 
    that needs immediate attention.
  `;

  // ──────────────────────────────────────
  // SECTION 7
  // (New, expanded content)
  // ──────────────────────────────────────
  const section7Heading = '7. Seasonal Factors';

  // Subheading 7.1
  const section7Subhead1 = '7.1 Cold Weather Concerns';
  const section7Text1 = `
    In colder climates, frozen drains can lead to major damage. 
    Insulate outdoor pipes and keep a slow trickle of water flowing 
    during frigid nights to prevent freezing. Also, drain and store hoses 
    before winter to avoid splits or bursts.
  `;

  // Subheading 7.2
  const section7Subhead2 = '7.2 Heavy Rainfall and Flooding';
  const section7Text2 = `
    Heavy storms can overwhelm local sewer systems and cause backups. 
    Installing a sump pump in prone areas and keeping gutters clear of debris 
    can help divert excess water away from your home. Regular drain cleaning ensures 
    your own system isn’t already clogged when extreme weather hits.
  `;

  // ──────────────────────────────────────
  // CONCLUSION
  // ──────────────────────────────────────
  const conclusionHeader = 'Conclusion';
  const conclusionText = `
    Keeping your drains clean is a fundamental part of maintaining a safe, 
    efficient, and comfortable home. Through a combination of DIY upkeep 
    and professional services when needed, you can easily prevent clogs 
    and stave off costly repairs. 
    
    Remember, a little preventive action today goes a long way toward 
    avoiding major plumbing disruptions tomorrow. With regular drain maintenance, 
    you’ll enjoy smoother water flow, fewer odors, and the peace of mind 
    that comes from knowing your plumbing is in good hands.
  `;

  return (
    <section
      id="blog2"
      className="bg-white-0 responsivePad font-satoshi lg:py-16 md:py-12 py-10"
      aria-label={blogTitle}
    >
      {/* Helmet for meta tags & JSON-LD */}
      <Helmet>
        <title>{blogTitle} | Sydney Backflow & Plumbing</title>
        <meta name="description" content={blogDescription} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Blog Title */}
      <h1 className="h1 text-center font-satoshi-black">{blogTitle}</h1>

      {/* Blog Image */}
      <img
        src={blogImage}
        alt={blogTitle}
        className="rounded-md my-4 w-full"
      />

      <div className="responsivePad space-y-8">
        {/* Intro */}
        <BlogSectionWrapper>
          <BlogHeader blogHeader={introHeader} />
          <BlogText blogText={introText} />
        </BlogSectionWrapper>

        {/* Section 1 */}
        <BlogSubheading blogSubheading={section1Heading} />
        <BlogSectionWrapper>
          <BlogSectionSubheading blogSectionSubheading={section1Subhead1} />
          <BlogText blogText={section1Text1} />
          <BlogSectionSubheading blogSectionSubheading={section1Subhead2} />
          <BlogText blogText={section1Text2} />
        </BlogSectionWrapper>

        {/* Section 2 */}
        <BlogSubheading blogSubheading={section2Heading} />
        <BlogSectionWrapper>
          <BlogSectionSubheading blogSectionSubheading={section2Subhead1} />
          <BlogText blogText={section2Text1} />
          <BlogSectionSubheading blogSectionSubheading={section2Subhead2} />
          <BlogText blogText={section2Text2} />
        </BlogSectionWrapper>

        {/* Section 3 */}
        <BlogSubheading blogSubheading={section3Heading} />
        <BlogSectionWrapper>
          <BlogSectionSubheading blogSectionSubheading={section3Subhead1} />
          <BlogText blogText={section3Text1} />
          <BlogSectionSubheading blogSectionSubheading={section3Subhead2} />
          <BlogText blogText={section3Text2} />
        </BlogSectionWrapper>

        {/* Section 4 */}
        <BlogSubheading blogSubheading={section4Heading} />
        <BlogSectionWrapper>
          <BlogSectionSubheading blogSectionSubheading={section4Subhead1} />
          <BlogText blogText={section4Text1} />
          <BlogSectionSubheading blogSectionSubheading={section4Subhead2} />
          <BlogText blogText={section4Text2} />
        </BlogSectionWrapper>

        {/* Section 5 */}
        <BlogSubheading blogSubheading={section5Heading} />
        <BlogSectionWrapper>
          <BlogSectionSubheading blogSectionSubheading={section5Subhead1} />
          <BlogText blogText={section5Text1} />
          <BlogSectionSubheading blogSectionSubheading={section5Subhead2} />
          <BlogText blogText={section5Text2} />
        </BlogSectionWrapper>

        {/* Section 6 */}
        <BlogSubheading blogSubheading={section6Heading} />
        <BlogSectionWrapper>
          <BlogSectionSubheading blogSectionSubheading={section6Subhead1} />
          <BlogText blogText={section6Text1} />
          <BlogSectionSubheading blogSectionSubheading={section6Subhead2} />
          <BlogText blogText={section6Text2} />
        </BlogSectionWrapper>

        {/* Section 7 */}
        <BlogSubheading blogSubheading={section7Heading} />
        <BlogSectionWrapper>
          <BlogSectionSubheading blogSectionSubheading={section7Subhead1} />
          <BlogText blogText={section7Text1} />
          <BlogSectionSubheading blogSectionSubheading={section7Subhead2} />
          <BlogText blogText={section7Text2} />
        </BlogSectionWrapper>

        {/* Conclusion */}
        <BlogSectionWrapper>
          <BlogHeader blogHeader={conclusionHeader} />
          <BlogText blogText={conclusionText} />
        </BlogSectionWrapper>
      </div>
    </section>
  );
};

export default Blog2;
