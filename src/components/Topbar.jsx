import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

const Topbar = () => {
  const topBarLinksLeft = [
    {
      linkIcon: BsFacebook,
      linkTo: ''
    },
    {
      linkIcon: IoLogoGoogle,
      linkTo: 'https://www.google.com/localservices/prolist?g2lbs=AAEPWCuDTutmzVRwvsIh9OTO8u1sIKyZoLscfxhHmqP4fsIAreDsI6n9KzRpgTtlWAzhfi9F3OohmMmQ93N2aCcwrOOIOfmoAA%3D%3D&hl=en-AU&gl=au&cs=1&ssta=1&q=sydney%20backflow%20and%20plumbing&oq=sydney%20backflow%20and%20plumbing&slp=MgBSAggCYAB6nwJDaHh6ZVdSdVpYa2dZbUZqYTJac2IzY2dZVzVrSUhCc2RXMWlhVzVuU0p5bS0tREJzNENBQ0Zvc0VBRVFBaEFER0FBWUFSZ0NHQU1pSEhONVpHNWxlU0JpWVdOclpteHZkeUJoYm1RZ2NHeDFiV0pwYm1lU0FRZHdiSFZ0WW1WeXFnRjBDZ2d2YlM4d1lsOTZaZ29JTDIwdk1EWjVOVGNRQVNvWkloVmlZV05yWm14dmR5QmhibVFnY0d4MWJXSnBibWNvQURJZkVBRWlHenR2ck8wTWJpYWd4Q1JObTNpc3ViRklZVmVwRDVtRnluUFY2aklnRUFJaUhITjVaRzVsZVNCaVlXTnJabXh2ZHlCaGJtUWdjR3gxYldKcGJtY5IBLQoNL2cvMTFtamcxeW5zeAoNL2cvMTFoa3NjM3F0MQoNL2cvMTFjNmRrbV95aA%3D%3D&src=2&spp=Cg0vZy8xMWhrc2MzcXQxOtQBV2lRUUFSQUNFQU1pSEhONVpHNWxlU0JpWVdOclpteHZkeUJoYm1RZ2NHeDFiV0pwYm1lcUFYUUtDQzl0THpCaVgzcG1DZ2d2YlM4d05uazFOeEFCS2hraUZXSmhZMnRtYkc5M0lHRnVaQ0J3YkhWdFltbHVaeWdBTWg4UUFTSWJPMi1zN1F4dUpxREVKRTJiZUt5NXNVaGhWNmtQbVlYS2M5WHFNaUFRQWlJY2MzbGtibVY1SUdKaFkydG1iRzkzSUdGdVpDQndiSFZ0WW1sdVp3PT0%3D&serdesk=1&lrlstt=1738650951096&ved=2ahUKEwiCmvPBs6mLAxXBSGwGHekiN7QQvS56BAgaEAE&scp=CgxnY2lkOnBsdW1iZXISNBISCT90mvM4mBJrEVCoMhZofQEDIgZTeWRuZXkqFA0S9KnrFcart1kd32H86yXBHDVaMAAaFWJhY2tmbG93IGFuZCBwbHVtYmluZyIcc3lkbmV5IGJhY2tmbG93IGFuZCBwbHVtYmluZyoHUGx1bWJlcjoCMAI%3D'
    },
  ];

  const topBarLinksRight = [
    {
      linkIcon: FaPhoneAlt,
      linkDesc: '0413 536 277',
      linkTo: 'tel:0413 536 277'
    },
    {
      linkIcon: IoLocationSharp,
      linkDesc: 'Greater Sydney, NSW',
    },
  ];

  return (
    <>
      <div className='bg-primary-0 responsivePad py-4 flex justify-between font-satoshi-medium text-white-0'>
        <div className='flex space-x-2'>
          {topBarLinksLeft.map((link, linkIndex) => (
            <a target='_blank' href={link.linkTo} key={linkIndex}>
              <link.linkIcon className='w-5 h-5' />
            </a>
          ))}
        </div>

        <div className='flex space-x-4 max-md:hidden'>
          {topBarLinksRight.map((link, linkIndex) => (
            <a href={link.linkTo} key={linkIndex} className='flex space-x-1 items-center'>
              <link.linkIcon className='w-5 h-5' />
              <p>{link.linkDesc}</p>
            </a>
          ))}
        </div>

        <div className='md:hidden'>
          <p className=''>
            24-Hour Emergency Service
          </p>
        </div>
      </div> 
    </>
  );
};

export default Topbar;
