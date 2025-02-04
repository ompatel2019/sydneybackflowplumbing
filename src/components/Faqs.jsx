import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

const Faqs = () => {
  const faqs = [
    {
      question: "What should I do if I have a plumbing emergency?",
      answer: "In case of a plumbing emergency, such as a burst pipe or severe leak, immediately turn off the main water supply to your home and contact us. We offer 24/7 emergency plumbing services to address critical issues promptly and prevent further damage to your property."
    },
    {
      question: "Can you help with blocked drains?",
      answer: "Absolutely! We specialize in clearing blocked drains using the latest tools and techniques to ensure quick and effective resolution. Whether it's a simple kitchen sink blockage or a more complex sewer line issue, our experienced plumbers are equipped to handle it all."
    },
    {
      question: "How often should I service my hot water system?",
      answer: "We recommend servicing your hot water system at least once a year to ensure it's running efficiently and safely. Regular maintenance can help extend the lifespan of your system and prevent unexpected breakdowns."
    },
    {
      question: "Do you offer installations for new plumbing fixtures?",
      answer: "Yes, we provide professional installation services for a wide range of plumbing fixtures, including sinks, toilets, faucets, and showerheads. Our team ensures that installations are done correctly the first time, providing you with peace of mind and high-quality results."
    },
    {
      question: "What are your rates for plumbing services?",
      answer: "Our rates vary depending on the type of service required. We offer transparent pricing with detailed quotes before any work begins. Contact us for a free estimate tailored to your specific plumbing needs."
    },
    {
      question: "How can I prevent common plumbing issues?",
      answer: "Preventive maintenance is key to avoiding common plumbing issues. Regularly check for leaks, avoid pouring grease down the drain, and ensure that only appropriate items are flushed down toilets. We offer preventive maintenance services to keep your plumbing systems in top condition."
    },
    {
      question: "What areas do you service?",
      answer: "We service the Sydney to Wollongong region, providing timely and efficient plumbing solutions to both residential and commercial clients. Whether you're located in the heart of the city or the suburbs, we're ready to assist you with your plumbing needs."
    }
  ];  

  const sectionHeading = 'FAQs';
  const sectionDescription = "Your questions, answered.";
  const [activeFaqIndex, setFaqActive] = useState(null);

  const toggleFaq = (index) => {
    setFaqActive(prev => (prev === index ? null : index));
  };

  return (
    <section 
      id="faqs"
      className='responsivePad bg-white 2xl:py-32 lg:py-24 md:py-20 py-12 text-white-0 space-y-12 max-md:space-y-4 p font-satoshi bg-primary-0'
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

      <div>
        {faqs.map((faq, faqIndex) => {
          const isActive = activeFaqIndex === faqIndex;
          return (
            <div 
              key={faqIndex}
              className="py-10 md:py-8 max-md:py-6 border-b-2 flex flex-col h7 space-y-4"
            >
              <div className="flex justify-between items-top max-md:items-center">
                {/* Button for better accessibility */}
                <button
                  type="button"
                  className="flex-1 text-left"
                  onClick={() => toggleFaq(faqIndex)}
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${faqIndex}`}
                  aria-label={
                    isActive 
                      ? `Collapse answer ${faqIndex + 1}` 
                      : `Expand answer ${faqIndex + 1}`
                  }
                >
                  <h3>
                    {faqIndex + 1}. {faq.question}
                  </h3>
                </button>

                {/* Icon for toggling */}
                {isActive ? (
                  <FaMinus
                    onClick={() => toggleFaq(faqIndex)}
                    className="w-6 h-6 max-md:max-w-4 max-md:max-h-4 max-md:ml-2 cursor-pointer"
                    aria-hidden="true"
                  />
                ) : (
                  <FaPlus
                    onClick={() => toggleFaq(faqIndex)}
                    className="w-6 h-6 max-md:max-w-4 max-md:max-h-4 max-md:ml-2 cursor-pointer"
                    aria-hidden="true"
                  />
                )}
              </div>

              {isActive && (
                <div
                  id={`faq-answer-${faqIndex}`}
                  className="text-gray-400"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;
