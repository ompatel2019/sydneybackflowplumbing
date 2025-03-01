import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { BsFacebook } from "react-icons/bs";
import { IoLogoGoogle } from "react-icons/io5";
import logo from '../images/logoDark.svg';

const Footer = () => {
  const linkClass = 'hover:underline transition-all p';

  // const topBarLinksLeft = [
  //   {
  //     linkIcon: BsFacebook,
  //     linkTo: ''
  //   },
  //   {
  //     linkIcon: IoLogoGoogle,
  //     linkTo: 'https://www.google.com/localservices/prolist?g2lbs=AAEPWCuDTutmzVRwvsIh9OTO8u1sIKyZoLscfxhHmqP4fsIAreDsI6n9KzRpgTtlWAzhfi9F3OohmMmQ93N2aCcwrOOIOfmoAA%3D%3D&hl=en-AU&gl=au&cs=1&ssta=1&q=sydney%20backflow%20and%20plumbing...'
  //   }
  // ];

  return (
    <div className="responsivePad pt-10 bg-white-0 p font-satoshi-medium">
      <div className="flex justify-between py-4">
      <img src={logo} alt="Sydney Backflow and Plumbing Logo" class="2xl:w-24 lg:w-20 w-16 h-auto" width="384" height="auto"/>

        {/* <div className="flex space-x-2">
          {topBarLinksLeft.map((link, linkIndex) => (
            <a target="_blank" href={link.linkTo} key={linkIndex} rel="noreferrer">
              <link.linkIcon className="w-5 h-5" />
            </a>
          ))}
        </div> */}
      </div>

      <div className="border-t-2 border-c-2-0 py-4 flex justify-between">
        <p className="p">
          © {new Date().getFullYear()} Sydney Backflow and Plumbing. All rights reserved.
        </p>

        <a target="_blank" rel="noreferrer" href="https://bytesitedigital.com.au/">
          <p className="p">Powered by bytesitedigital.</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
