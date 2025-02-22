// pages/blogs/Blog3.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

// If you have a dedicated image for Blog3, import it here:
import blogImage from '../../images/blog3.jpg';

// Subcomponents
import BlogHeader from './blogComponents/BlogHeader';
import BlogSubheading from './blogComponents/BlogSubheading';
import BlogSectionWrapper from './blogComponents/BlogSectionWrapper';
import BlogSectionSubheading from './blogComponents/BlogSectionSubheading';
import BlogText from './blogComponents/BlogText';

const Blog3 = () => {
  // Main metadata
  const blogTitle = 'How to Choose the Right Hot Water System for Your Home';
  const blogDescription = `
    Selecting the perfect hot water system can feel overwhelming. 
    In this guide, we break down the pros, cons, and key considerations for 
    different types of hot water units—from gas and electric to solar and heat pump systems. 
    Find out how to weigh factors like energy efficiency, household size, and budget 
    to make the best decision for your home.
  `;
  const blogUrl = 'https://example.com/blogs/3'; // Update to actual URL
  const blogPublishDate = '2025-01-03';

  // JSON-LD for schema.org
  const jsonLdBlogPost = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogTitle,
    "description": "Summary of how to Choose the Right Hot Water System for Your Home.",
    "url": blogUrl,
    "author": {
      "@type": "Person",
      "name": "Author Name" // Replace as necessary
    },
    "datePublished": blogPublishDate,
    "publisher": {
      "@type": "Organization",
      "name": "Sydney Backflow & Plumbing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sydneybackflowplumbing.com.au/favicon.svg" // Replace if needed
      }
    },
    // If you'd like, you can include the image:
    "image": "https://example.com/images/blog3.jpg"
  };

  // ──────────────────────────────────────
  // INTRO
  // ──────────────────────────────────────
  const introHeader = 'Introduction';
  const introText = `
    Choosing a new hot water system might seem straightforward—until you’re met with 
    a dizzying array of options. From traditional storage tanks to modern solar units, 
    each system type offers unique advantages and drawbacks. Your choice can affect 
    monthly utility bills, environmental impact, and even how quickly you can 
    enjoy a hot shower.
    
    In this post, we’ll walk you through the basics of different hot water systems 
    so you can find the perfect fit for your household. Understanding each system’s 
    pros and cons ensures you make an informed decision that balances 
    cost-efficiency, reliability, and sustainability.
  `;

  // ──────────────────────────────────────
  // SECTION 1
  // ──────────────────────────────────────
  const section1Heading = '1. Storage Tank vs. Tankless Systems';

  // Subheading 1.1
  const section1Subhead1 = '1.1 How Storage Tanks Work';
  const section1Text1 = `
    A storage tank system heats and stores water in a large tank, making hot water 
    readily available. When you turn on the faucet, hot water from the tank 
    flows out immediately. Key considerations:
    
    - Capacity: Larger tanks serve bigger families but require more space.
    - Standby Heat Loss: Tanks continuously reheat water to maintain temperature, 
      resulting in higher energy use.
    - Lower Initial Cost: Generally cheaper to purchase and install compared 
      to tankless units.
  `;

  // Subheading 1.2
  const section1Subhead2 = '1.2 How Tankless (On-Demand) Works';
  const section1Text2 = `
    Tankless systems heat water only when you need it. Instead of storing gallons, 
    they use high-powered burners or electric coils to warm water as it passes through:
    
    - Energy Efficiency: No standby heat loss, so overall energy consumption 
      is typically lower.
    - Unlimited Hot Water: Perfect for large families, provided the system’s 
      flow rate meets demand.
    - Higher Upfront Cost: Although you’ll likely save on bills, 
      the initial purchase and installation can be pricier.
  `;

  // ──────────────────────────────────────
  // SECTION 2
  // ──────────────────────────────────────
  const section2Heading = '2. Gas vs. Electric Systems';

  // Subheading 2.1
  const section2Subhead1 = '2.1 Gas Water Heaters';
  const section2Text1 = `
    Gas-powered heaters use either natural gas or propane to heat water. 
    They generally recover faster than electric heaters, meaning the tank 
    can reheat incoming cold water more quickly. Other points:
    
    - Operating Costs: Typically cheaper if natural gas is affordable in your area.
    - Ventilation: Requires proper venting to safely expel combustion fumes.
    - Reliability: Gas models can still function during power outages 
      (if they have a standing pilot light).
  `;

  // Subheading 2.2
  const section2Subhead2 = '2.2 Electric Water Heaters';
  const section2Text2 = `
    Electric units rely on heating elements within the tank or tankless unit. 
    They’re straightforward to install, but may have slower recovery times 
    and higher operating costs in regions with expensive electricity. 
    Keep in mind:
    
    - Easy Installation: No gas line or venting needed.
    - Lower Upfront Cost: Typically cheaper to buy, though cost of electricity 
      can offset initial savings over time.
    - Space Requirements: Tankless electric systems are often compact 
      and easier to fit in tight spaces.
  `;

  // ──────────────────────────────────────
  // SECTION 3
  // ──────────────────────────────────────
  const section3Heading = '3. Solar and Heat Pump Options';

  // Subheading 3.1
  const section3Subhead1 = '3.1 Solar Hot Water Systems';
  const section3Text1 = `
    Solar heaters use panels (collectors) to absorb the sun’s energy and heat water, 
    storing it in a tank for later use:
    
    - Eco-Friendly: Greatly reduces carbon footprint, especially in sunny climates.
    - High Initial Investment: Installation costs can be substantial, 
      but government rebates or incentives may help.
    - Backup Heater: Cloudy days and high demand might necessitate a backup 
      gas or electric booster.
  `;

  // Subheading 3.2
  const section3Subhead2 = '3.2 Heat Pump Water Heaters';
  const section3Text2 = `
    Heat pump models pull in ambient heat from the air to warm water. 
    They’re highly efficient but work best in moderate to warm climates:
    
    - Energy Savings: Can significantly lower monthly bills compared 
      to standard electric heaters.
    - Longer Lifespan: Heat pumps often outlast traditional systems 
      if maintained properly.
    - Higher Installation Cost: Equipment and setup can be pricier, 
      though long-term savings may offset this.
  `;

  // ──────────────────────────────────────
  // SECTION 4
  // ──────────────────────────────────────
  const section4Heading = '4. Sizing and Household Needs';

  // Subheading 4.1
  const section4Subhead1 = '4.1 Determining Capacity';
  const section4Text1 = `
    To choose the right size tank, consider how many people live in your home 
    and daily hot water usage habits (showers, laundry, dishwashing). 
    Oversizing wastes energy, while undersizing leads to frequent shortages.
    
    - Tank Storage Systems: Common sizes range from 40 to 80 gallons. 
      More occupants mean a larger tank.
    - Tankless Systems: Focus on flow rate (gallons per minute) 
      to ensure simultaneous showers and appliances remain comfortable.
  `;

  // Subheading 4.2
  const section4Subhead2 = '4.2 Peak Demand Analysis';
  const section4Text2 = `
    Think about peak demand times—like morning rush hour when multiple showers, 
    faucets, and appliances might run at once. A tankless system must handle 
    all these concurrent demands, or you’ll experience temperature drops. 
    A properly sized system or a hybrid approach can avert performance issues.
  `;

  // ──────────────────────────────────────
  // SECTION 5
  // ──────────────────────────────────────
  const section5Heading = '5. Costs and Energy Efficiency';

  // Subheading 5.1
  const section5Subhead1 = '5.1 Upfront vs. Long-Term Costs';
  const section5Text1 = `
    The least expensive system to purchase may not be the most affordable 
    in the long run. Consider:
    
    - Initial Purchase & Installation: Tankless and solar often cost more upfront.
    - Operating Expenses: Gas or solar could be cheaper depending on local rates 
      and sunshine availability.
    - Rebates & Incentives: Some regions offer tax credits for efficient systems 
      (e.g., solar, heat pump), offsetting initial costs.
  `;

  // Subheading 5.2
  const section5Subhead2 = '5.2 Look for Energy Ratings';
  const section5Text2 = `
    Efficiency labels (like ENERGY STAR) help you compare different models 
    and project utility bill savings. A higher efficiency rating generally 
    means better long-term performance and lower environmental impact. 
    Even small differences in efficiency can add up over the lifespan of your system.
  `;

  // ──────────────────────────────────────
  // SECTION 6
  // (New, expanded content)
  // ──────────────────────────────────────
  const section6Heading = '6. Installation and Maintenance Factors';

  // Subheading 6.1
  const section6Subhead1 = '6.1 Professional Installation';
  const section6Text1 = `
    Installing a hot water system is more than just “plug and play.” 
    Gas hookups, venting requirements, electrical wiring, and plumbing 
    can all be complex. Hiring a licensed professional ensures:
    
    - Code Compliance: Proper permits and inspections reduce safety hazards.
    - Optimized Efficiency: A correct setup prevents heat loss and damage 
      to the unit.
    - Warranty Protection: Many manufacturers require professional installation 
      to honor warranties.
  `;

  // Subheading 6.2
  const section6Subhead2 = '6.2 Regular Maintenance';
  const section6Text2 = `
    A little maintenance can go a long way toward maximizing lifespan and performance:
    
    - Flushing Storage Tanks: Removes sediment and mineral buildup every 6–12 months.
    - Checking Anodes: Sacrificial anodes protect against corrosion in tank-style heaters.
    - Cleaning Air Filters: For heat pumps or gas systems, ensure proper ventilation 
      and efficiency by keeping filters clear.
  `;

  // ──────────────────────────────────────
  // SECTION 7
  // (New, expanded content)
  // ──────────────────────────────────────
  const section7Heading = '7. Making Your Final Decision';

  // Subheading 7.1
  const section7Subhead1 = '7.1 Balancing Needs and Budget';
  const section7Text1 = `
    Weighing all these factors—initial cost, long-term savings, capacity, and environmental impact— 
    will guide you to the best choice. A large family might prioritize uninterrupted hot water 
    and lean toward a tankless system, while a smaller household or budget-sensitive scenario 
    might opt for a basic but reliable storage tank system.
  `;

  // Subheading 7.2
  const section7Subhead2 = '7.2 Consulting a Professional';
  const section7Text2 = `
    If you’re still unsure, a professional plumber or HVAC specialist 
    can assess your home’s specific needs. They’ll consider everything 
    from local weather conditions and utility rates to required permits. 
    An expert consultation can save you from an ill-fitting system 
    that results in higher bills or frequent repairs.
  `;

  // ──────────────────────────────────────
  // CONCLUSION
  // ──────────────────────────────────────
  const conclusionHeader = 'Conclusion';
  const conclusionText = `
    Selecting the right hot water system is a crucial step toward maintaining 
    a comfortable and efficient home. By exploring tank vs. tankless, gas vs. electric, 
    and alternative solutions like solar or heat pump systems, you can find 
    the perfect match for your lifestyle and budget.
    
    Remember to consider both upfront and ongoing costs, along with any 
    local incentives or rebates that can offset the purchase. Whether you choose 
    a modern tankless design or stick with a traditional storage tank, ensuring 
    proper installation and maintenance will keep those hot showers flowing 
    for years to come.
  `;

  return (
    <section
      id="blog3"
      className="bg-white-0 responsivePad font-satoshi lg:py-16 md:py-12 py-10"
      aria-label={blogTitle}
    >
      {/* Helmet for meta tags & JSON-LD */}
      <Helmet>
        <title>{blogTitle} | Sydney Backflow & Plumbing</title>
        <meta name="description" content={blogDescription} />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdBlogPost)}
        </script>
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

export default Blog3;
