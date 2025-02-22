import React from 'react';
import HeroWrapper from './HeroWrapper.jsx';
import { HashLink } from 'react-router-hash-link';
import { FaStar } from "react-icons/fa";

const Hero = () => {
  const topText = "Let's get to work!";
  const heroText = "Sydney Backflow and Plumbing — Serving Wetherill Park & Greater Sydney";

  const heroSubtext =
    "We offer premier plumbing solutions for all properties, from unblocking drains to fixing hot water systems. Our licensed team provides reliable, 24/7 service to ensure your plumbing needs are expertly handled.";

  const bottomText = "Only 5-Star Reviews On Google";

  const buttons = [
    { button: 'Get A Quote', buttonRed: '/contact' },
    { button: 'Learn More', buttonRed: '/services' }
  ];

  return (
    <section className="relative flex font-satoshi text-white-0">
      <HeroWrapper />

      <div className="absolute inset-0 bg-black-0 bg-opacity-40 w-full z-10"></div>

      <div className="responsivePad z-20 2xl:py-32 lg:py-24 md:py-20 py-12 text-left 2xl:space-y-14 lg:space-y-10 space-y-8">
        <div className="bg-primary-0 p-3 max-md:p-2 rounded-lg w-fit">
          <h2 className="h5 font-satoshi-bold max-md:text-base">
            {topText.toUpperCase()}
          </h2>
        </div>

        <div>
          <h1 className="font-satoshi-black h1">
            {heroText}
          </h1>
        </div>

        <div>
          <p className="font-satoshi-medium h6">{heroSubtext}</p>
        </div>

        <div className="space-x-4 h7">
          {buttons.map((button, buttonKey) => (
            <HashLink
              key={buttonKey}
              smooth
              to={button.buttonRed}
              className={
                buttonKey === 0
                  ? "bg-primary-0 px-6 p-3 rounded-[4px] hover:px-10 transition-all font-satoshi-medium"
                  : "bg-white-0 px-6 p-3 rounded-[4px] text-black-0 hover:px-10 transition-all font-satoshi-medium"
              }
            >
              {button.button}
            </HashLink>
          ))}
        </div>

        <div className="flex space-x-2 items-center p">
          <div className="flex text-yellow-400">
            <FaStar aria-hidden="true" />
            <FaStar aria-hidden="true" />
            <FaStar aria-hidden="true" />
            <FaStar aria-hidden="true" />
            <FaStar aria-hidden="true" />
          </div>
          <p className="font-semibold">
            {bottomText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
