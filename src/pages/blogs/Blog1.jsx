import React from 'react';
import SeoHelmet from '../../components/SeoHelmet';
import blogImage from '../../images/blog1.webp';

// Subcomponents
import BlogHeader from './blogComponents/BlogHeader';
import BlogSubheading from './blogComponents/BlogSubheading';
import BlogSectionWrapper from './blogComponents/BlogSectionWrapper';
import BlogSectionSubheading from './blogComponents/BlogSectionSubheading';
import BlogText from './blogComponents/BlogText';

const Blog1 = () => {
  // Main metadata
  const blogTitle = 'Prevent Common Plumbing Issues with These Simple Tips';
  const blogDescription = `
    Tired of unexpected leaks, clogs, and other costly plumbing problems? 
    In this guide, we’ll show you how to spot warning signs early and 
    apply easy DIY fixes—helping you avoid expensive repairs, wasted water, 
    and unnecessary stress.
  `.trim();
  const blogUrl = 'https://sydneybackflowplumbing.com.au/blogs/1'; // Update if needed
  const blogPublishDate = '2025-01-01';

  // JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogTitle,
    "image": blogImage,
    "description": blogDescription,
    "url": blogUrl,
    "datePublished": blogPublishDate,
    "publisher": {
      "@type": "Organization",
      "name": "Sydney Backflow & Plumbing", // Replace if desired
      "logo": {
        "@type": "ImageObject",
        "url": "https://sydneybackflowplumbing.com.au/favicon.svg"
      }
    }
  };

  // ──────────────────────────────────────
  // INTRO
  // ──────────────────────────────────────
  const introHeader = 'Introduction';
  const introText = `
    Plumbing issues can bring any household to a standstill—sometimes at the worst possible 
    times. From dripping faucets that rack up water bills to major pipe bursts causing 
    significant damage, it's crucial to practice routine maintenance and catch problems 
    before they escalate.
    
    In this guide, we'll walk you through the most common plumbing pitfalls, 
    how to identify early warning signs, and the simple steps you can take 
    to keep everything flowing smoothly. Whether you’re a homeowner or a renter, 
    these tips can save you from unexpected headaches and expenses.
  `;

  // ──────────────────────────────────────
  // SECTION 1
  // ──────────────────────────────────────
  const section1Heading = '1. Routine Maintenance and Inspections';

  // Subheading 1.1
  const section1Subhead1 = '1.1 Checking for Leaks';
  const section1Text1 = `
    Even the smallest leaks can waste significant amounts of water and lead to 
    higher utility bills. Over time, tiny drips under a sink or in a basement 
    can cause mold, mildew, or structural damage. Make it a habit to:
    
    - Look under sinks and around toilets for any puddles or damp spots.
    - Check your water meter before and after a two-hour window when no water 
      is in use. If the meter changes, you likely have a hidden leak.
    - Examine outdoor faucets and hoses for seepage. Outdoor leaks can be 
      just as damaging and more difficult to notice right away.
  `;

  // Subheading 1.2
  const section1Subhead2 = '1.2 Water Heater Inspections';
  const section1Text2 = `
    Your water heater works tirelessly to provide hot water for showers, 
    washing dishes, and more. Performing a quick check every few months can 
    extend its lifespan and prevent sudden breakdowns:
    
    - Flush the Tank: Sediment buildup at the bottom of the heater 
      can reduce efficiency and lead to rust.
    - Check the Pressure Relief Valve: This safety valve should release 
      water when pressure gets too high.
    - Listen for Unusual Noises: Banging or rumbling could indicate 
      mineral buildup or impending failure.
  `;

  // ──────────────────────────────────────
  // SECTION 2
  // ──────────────────────────────────────
  const section2Heading = '2. Proper Drain Care';

  // Subheading 2.1
  const section2Subhead1 = '2.1 Kitchen Sinks and Garbage Disposals';
  const section2Text1 = `
    Clogged kitchen drains are among the most frequent household plumbing issues. 
    They often stem from grease, food scraps, and other debris collecting in the pipes. 
    To reduce blockages:
    
    - Avoid Pouring Grease Down the Drain: Grease solidifies as it cools, 
      creating stubborn clogs. Dispose of it in a sealed container instead.
    - Run Cold Water When Using Disposals: Cold water solidifies oils, 
      helping the disposal break them down more effectively.
    - Use Strainers: Catch food particles and prevent them from creating 
      larger blockages deeper in the system.
  `;

  // Subheading 2.2
  const section2Subhead2 = '2.2 Bathroom and Shower Drains';
  const section2Text2 = `
    The combination of hair, soap scum, and mineral buildup can quickly turn 
    bathroom drains into major clog zones. Keep them clear by:
    
    - Installing Mesh Screens: A simple screen or drain catcher 
      can trap hair before it goes down the pipe.
    - Regularly Using a Safe Cleaner: Enzyme-based drain cleaners or hot 
      water and baking soda flushes can help dissolve minor blockages.
    - Avoid Flushing Non-Flushables: Baby wipes, feminine products, 
      and "flushable" wipes cause major clogs. Stick to toilet paper only.
  `;

  // ──────────────────────────────────────
  // SECTION 3
  // ──────────────────────────────────────
  const section3Heading = '3. Toilets and Fixtures';

  // Subheading 3.1
  const section3Subhead1 = '3.1 Detecting Silent Leaks';
  const section3Text1 = `
    Toilets can leak silently, wasting gallons of water without any obvious signs. 
    A quick and easy way to check:
    
    1. Remove the toilet tank lid.
    2. Add a few drops of food coloring to the tank.
    3. Wait about 30 minutes (without flushing). If the color appears in the bowl, 
       you have a leak (usually a faulty flapper or seal).
  `;

  // Subheading 3.2
  const section3Subhead2 = '3.2 Maintaining Faucets and Showerheads';
  const section3Text2 = `
    Dripping faucets aren’t just annoying—they can also hike up your water bill. 
    Typically, worn-out washers or cartridges are the culprits. Meanwhile, 
    clogged or calcified showerheads can reduce water pressure.
    
    - Replace Washers: Turn off the water supply, disassemble the faucet, 
      and swap out old parts.
    - Soak Showerheads: Remove and soak in vinegar to dissolve mineral deposits. 
      Gently scrub away residue for a like-new flow.
    - Inspect for Rust or Corrosion: Over time, metal fixtures 
      can corrode, potentially leading to leaks. Replace them as needed.
  `;

  // ──────────────────────────────────────
  // SECTION 4
  // ──────────────────────────────────────
  const section4Heading = '4. Seasonal Preparations';

  // Subheading 4.1
  const section4Subhead1 = '4.1 Winterizing Your Pipes';
  const section4Text1 = `
    In colder climates, frozen pipes pose a major risk. Water expands when it freezes, 
    which can cause pipes to burst. To prevent this:
    
    - Insulate Exposed Pipes: Use foam insulation or insulating tape 
      for pipes in unheated areas like garages and crawl spaces.
    - Let Faucets Drip: On extremely cold nights, a slow trickle of water 
      keeps pipes from freezing.
    - Shut Off Exterior Faucets: Drain outdoor faucets and hoses 
      before winter hits to avoid ice blockages.
  `;

  // Subheading 4.2
  const section4Subhead2 = '4.2 Handling Heavy Rains and Storms';
  const section4Text2 = `
    Sudden downpours or storm surges can overwhelm drainage systems. 
    Be prepared by:
    
    - Clearing Gutters and Downspouts: Debris buildup can cause water 
      to back up near your foundation or roof.
    - Installing a Sump Pump: In flood-prone areas, a sump pump can prevent 
      water from flooding your basement.
    - Sealing Cracks: Inspect your home’s foundation and exterior walls 
      for gaps where water might seep in.
  `;

  // ──────────────────────────────────────
  // SECTION 5
  // ──────────────────────────────────────
  const section5Heading = '5. DIY Fixes vs. Professional Help';

  // Subheading 5.1
  const section5Subhead1 = '5.1 When to Try DIY';
  const section5Text1 = `
    Many small repairs—like fixing a running toilet or unclogging a minor drain—can be tackled 
    with basic tools and a little know-how. Always turn off the water supply before making 
    any repairs, and consult online tutorials or guides if you’re unsure.
    
    - Basic Clogs: A plunger or homemade solution (baking soda + vinegar) 
      might clear smaller blockages.
    - Dripping Faucets: Often fixed by replacing a washer or cartridge.
    - Slow-Draining Sinks: Removing and cleaning the drain trap can solve 
      a surprising number of clogs.
  `;

  // Subheading 5.2
  const section5Subhead2 = '5.2 When to Call a Pro';
  const section5Text2 = `
    Some problems demand professional intervention. If you encounter:
    
    - Major Leaks or Bursts: A flooded basement or heavy water damage 
      requires immediate assistance to prevent mold and structural harm.
    - Sewage Backups: Raw sewage poses serious health hazards—don’t attempt 
      to handle large backups on your own.
    - Complex Installations: Moving pipes, installing new gas lines, 
      or dealing with code requirements are best left to licensed plumbers.
  `;

  // ──────────────────────────────────────
  // SECTION 6
  // (New, expanded content)
  // ──────────────────────────────────────
  const section6Heading = '6. Understanding Water Pressure & Quality';

  // Subheading 6.1
  const section6Subhead1 = '6.1 Monitoring Pressure';
  const section6Text1 = `
    High water pressure can feel great in the shower, but it strains your pipes over time, 
    increasing the likelihood of leaks or bursts. Conversely, low pressure might indicate 
    blockages or pipe corrosion. Use a pressure gauge to test your home’s water pressure 
    periodically:
    
    - Ideal Range: 40–60 psi is generally acceptable for most household plumbing.
    - Pressure Regulators: If your pressure is too high, installing a regulator 
      can prolong the life of pipes, fixtures, and appliances.
    - Silent Indicators: If faucets sputter or you hear "hammering" noises 
      in the walls, you might be dealing with pressure issues.
  `;

  // Subheading 6.2
  const section6Subhead2 = '6.2 Filtering and Softening Water';
  const section6Text2 = `
    Hard water, characterized by excessive minerals like calcium and magnesium, 
    can lead to scale buildup in pipes and appliances, reducing efficiency. 
    Likewise, impurities or sediments can affect taste and safety. Consider:
    
    - Whole-House Water Softeners: These remove minerals before they enter 
      your plumbing system, protecting heaters and extending appliance lifespan.
    - Inline Filters: Adding sediment or carbon filters can improve water clarity 
      and odor while reducing wear on fixtures.
    - Regular Maintenance: Whether you use a softener or filter, follow recommended 
      replacement schedules to keep the system effective.
  `;

  // ──────────────────────────────────────
  // SECTION 7
  // (New, expanded content)
  // ──────────────────────────────────────
  const section7Heading = '7. Sewer Lines and Outdoor Plumbing';

  // Subheading 7.1
  const section7Subhead1 = '7.1 Tree Roots and Sewer Blockages';
  const section7Text1 = `
    Tree roots naturally seek moisture, often infiltrating sewer lines through small cracks. 
    This can cause slow drains, gurgling sounds, or backups in toilets and tubs. To reduce risks:
    
    - Regular Inspections: Consider a camera inspection if you notice consistent clogs 
      or suspect root intrusion.
    - Strategic Landscaping: Plant trees and shrubs away from main sewer lines.
    - Root Barriers: Some plumbers install chemical or physical barriers to prevent 
      roots from reaching the lines.
  `;

  // Subheading 7.2
  const section7Subhead2 = '7.2 Outdoor Faucets and Hoses';
  const section7Text2 = `
    Don’t forget about the plumbing beyond your home’s walls. Outdoor faucets, hoses, 
    and sprinkler systems can develop leaks that go unnoticed for weeks or months:
    
    - Check Hose Connections: Worn washers or loose fittings waste water 
      and may eventually damage the faucet.
    - Inspect Sprinkler Heads: Misaligned or cracked heads can spill water 
      where it’s not needed, driving up bills.
    - Shut Off and Drain: Before winter, drain exterior lines to prevent freezing 
      and bursts, which can remain hidden until spring thaw.
  `;

  // ──────────────────────────────────────
  // CONCLUSION
  // ──────────────────────────────────────
  const conclusionHeader = 'Conclusion';
  const conclusionText = `
    A little preventive care goes a long way. By routinely inspecting your pipes, 
    drains, and fixtures, you can catch small problems before they become major disasters. 
    Remember to adjust for seasonal changes, know when to tackle a repair yourself, 
    and recognize when it’s time to call in a professional. 
    
    Keeping your plumbing in top shape not only saves money but also helps conserve 
    water—a win for your wallet and the environment. By following these simple tips, 
    you’ll maintain a healthy, hassle-free system for years to come.
  `;

  return (
    <section 
      id="blog1"
      className="bg-white-0 responsivePad font-satoshi lg:py-16 md:py-12 py-10"
      aria-label={blogTitle}
    >
      <SeoHelmet
        title={`${blogTitle} | Sydney Backflow & Plumbing`}
        description={blogDescription}
        canonicalUrl={blogUrl}
        jsonSchema={jsonLd}
      />

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

export default Blog1;
