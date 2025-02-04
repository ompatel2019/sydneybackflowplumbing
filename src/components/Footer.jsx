import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { BsFacebook } from "react-icons/bs";
import { IoLogoGoogle } from "react-icons/io5";

const Footer = () => {
  const linkClass = 'hover:underline transition-all p'

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

  return (
    <>
      <div className='responsivePad pt-10 bg-white-0 p font-satoshi-medium'>

        <div className='flex justify-between py-4'>
          <p>
            
          </p>

          <ul className='flex space-x-4 max-sm:space-x-2'>
            <li className={linkClass}><HashLink smooth to="/aboutus">About Us</HashLink></li>
            <li className={linkClass}><HashLink smooth to="/whychooseus">Why Choose Us</HashLink></li>
            <li className={linkClass}><HashLink smooth to="/contact">Contact</HashLink></li>
          </ul>

            <div className='flex space-x-2'>
              {
                topBarLinksLeft.map((link, linkIndex) => (
                  <a href={link.linkTo} key={linkIndex}>
                    <link.linkIcon className='w-5 h-5'/>
                  </a>
                ))
              }
            </div>
        </div>

        <div className='border-t-2 border-c-2-0 py-4'>
          <p className='text-center p m3'>
          © {new Date().getFullYear()} Sydney Backflow Plumbing & Excavation. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer