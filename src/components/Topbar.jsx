import React from 'react'
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
      linkTo: ''
    },
  ]

  const topBarLinksRight = [
    {
      linkIcon: FaPhoneAlt,
      linkDesc: '0413 536 277',
      linkTo: 'tel:0413 536 277'
    },
    {
      linkIcon: IoLocationSharp,
      linkDesc: 'Sydney, NSW',
    },
  ]

  return (
    <>
      <div className='bg-black-0 responsivePad py-4 flex justify-between font-satoshi-medium text-white-0'>

        <div className='flex space-x-2'>
          {
            topBarLinksLeft.map((link, linkIndex) => (
              <a href={link.linkTo} key={linkIndex}>
                <link.linkIcon className='w-5 h-5'/>
              </a>
            ))
          }
        </div>

        <div className='flex space-x-4 max-md:hidden'>
          {
            topBarLinksRight.map((link, linkIndex) => (
              <a href={link.linkTo} key={linkIndex} className='flex space-x-1 items-center'>
                <link.linkIcon className='w-5 h-5'/>
                <p>{link.linkDesc}</p>
              </a>
            ))
          }
        </div>

        <div className='md:hidden'>
          <p className=''>
          24-Hour Emergency Service 
          </p>
        </div>
      
      </div> 
    </>
  )
}

export default Topbar