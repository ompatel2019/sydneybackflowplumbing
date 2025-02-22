import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";

const Faqs = () => {
  const faqs = [
    {
      question: "What should I do if I have a plumbing emergency?",
      answer: "Turn off the main water supply and contact us at 0413 536 277 immediately. We offer 24/7 service across Wetherill Park & Sydney."
    },
    {
      question: "Can you help with blocked drains?",
      answer: "Absolutely! We specialize in clearing blocked drains using advanced tools, ensuring a quick resolution."
    },
    {
      question: "How often should I service my hot water system?",
      answer: "Annual servicing keeps your hot water system running efficiently and safely. Contact Sydney Backflow and Plumbing for professional maintenance."
    },
    {
      question: "Do you offer installations for new plumbing fixtures?",
      answer: "Yes. From toilets to faucets and showerheads, our installations are done to the highest standards."
    },
    {
      question: "What are your rates for plumbing services?",
      answer: "Our pricing depends on the scope of work. We provide transparent quotes before starting any project."
    },
    {
      question: "How can I prevent common plumbing issues?",
      answer: "Regular inspections, avoiding grease in drains, and using only flushable materials are great starts. We also offer preventive services."
    },
    {
      question: "What areas do you service?",
      answer: "We proudly service Wetherill Park & Sydney, offering timely responses for both residential and commercial customers."
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
      className="responsivePad bg-white 2xl:py-32 lg:py-24 md:py-20 py-12 text-white-0 space-y-12 max-md:space-y-4 p font-satoshi bg-primary-0"
      aria-label="faq-section"
    >
      <div className="space-y-4 text-center">
        <h2 className="h2 font-satoshi-black">
          {sectionHeading}
        </h2>
        <p className="h7 font-satoshi-medium">
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
