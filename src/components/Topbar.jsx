import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { IoLogoGoogle } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Topbar = () => {
  const topBarLinksLeft = [
    {
      linkIcon: BsFacebook,
      linkTo: ''
    },
    {
      linkIcon: IoLogoGoogle,
      linkTo: 'https://www.google.com/localservices/prolist?...'
    }
  ];

  const topBarLinksRight = [
    {
      linkIcon: FaPhoneAlt,
      linkDesc: '0413 536 277',
      linkTo: 'tel:0413 536 277'
    },
    {
      linkIcon: IoLocationSharp,
      linkDesc: 'Wetherill Park, NSW',
      linkTo: 'https://www.google.com/maps?sca_esv=9a8b494ebc885c97&rlz=1C5CHFA_enAU1102AU1102&output=search&q=wetherill+park&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpIgVFCTcbZI9VMGzNoV0iOZkckJJygdiLH6_g992ly-N56ueDsJ8PHmDNZqG8FmCe3GaMsJKZsLO8dQHXAa6ktp1Q-Ppm9Ty0oP3Vd8j148johs55TxuqqFtA_OuhVduB_ZaOlhwqZcpgdCmdxVKDjWMZtnYxAD8fUZ4o0y0NeFMuyYJZKylpMlFR_x_1-ojk1sLn1A&entry=mc&ved=1t:200715&ictx=111'
    },
  ];

  return (
    <div className="bg-primary-0 responsivePad py-4 flex justify-between font-satoshi-medium text-white-0">
      <div className="flex space-x-2">
        {topBarLinksLeft.map((link, linkIndex) => (
          <a target="_blank" href={link.linkTo} key={linkIndex} rel="noreferrer">
            <link.linkIcon className="w-5 h-5" />
          </a>
        ))}
      </div>

      <div className="flex space-x-4 max-md:hidden">
        {topBarLinksRight.map((link, linkIndex) => (
          <a href={link.linkTo} key={linkIndex} className="flex space-x-1 items-center" aria-label="Contact detail">
            <link.linkIcon className="w-5 h-5" aria-hidden="true" />
            <p>{link.linkDesc}</p>
          </a>
        ))}
      </div>

      <div className="md:hidden">
        <p>24-Hour Emergency Service</p>
      </div>
    </div>
  );
};

export default Topbar;
