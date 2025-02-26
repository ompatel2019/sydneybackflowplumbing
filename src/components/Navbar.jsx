import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import logo from '../images/logoDark.svg';

const Navbar = () => {
  const navbarLinks = [
    { linkName: 'Home', to: '/' },
    { linkName: 'Services', to: '/our-services' },
    { linkName: 'Why Choose Us', to: '/why-choose-us' },
    { linkName: 'About Us', to: '/about-us' },
    { linkName: 'Blogs', to: '/blogs' },
    { linkName: 'Get Started', to: '/contact-us' }
  ];

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(prev => !prev);

  return (
    <>
      <header
        className={`responsivePad py-4 flex justify-between font-satoshi-medium items-center sticky top-0 z-50 
                    ${showMenu ? 'bg-black-0' : 'bg-white-0'}`}
      >

      <img src={logo} alt="Sydney Backflow and Plumbing Logo" class="2xl:w-24 lg:w-20 w-16 h-auto" width="384" height="auto"/>
      {/* <div>Logo goes here...</div> */}

        {/* Desktop Nav */}
        <nav role="navigation" aria-label="Primary" className="hidden md:flex">
          <ul className="flex space-x-3 items-center">
            {navbarLinks.map((link, index) =>
              link.linkName !== 'Get Started' ? (
                <li key={index} className="hover:text-grey-0 transition-all">
                  <HashLink smooth to={link.to}>
                    {link.linkName}
                  </HashLink>
                </li>
              ) : (
                <li key={index}>
                  <HashLink smooth to={link.to}>
                    <div className="px-4 py-2 bg-primary-0 hover:px-8 text-white-0 rounded-sm hover:bg-blue-500 
                                    transition-all duration-200"
                    >
                      {link.linkName}
                    </div>
                  </HashLink>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          aria-label={showMenu ? 'Close menu' : 'Open menu'}
          aria-expanded={showMenu}
          className="md:hidden focus:outline-none"
        >
          {showMenu ? (
            <RxCross2 className="w-6 h-6 text-white-0" />
          ) : (
            <FiMenu className="w-6 h-6 text-black-0" />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay (NO aria-hidden) */}
      <div
        className={`fixed inset-0 bg-black-0 text-white-0 flex flex-col items-center justify-center 
                    transition-opacity duration-300
                    ${showMenu ? 'opacity-95 pointer-events-auto z-40' : 'opacity-0 pointer-events-none z-[-1]'}
                  `}
      >
        <nav role="navigation" aria-label="Mobile menu">
          <ul className="flex flex-col space-y-6">
            {navbarLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-grey-0 transition-all"
                onClick={toggleMenu}
              >
                <HashLink smooth to={link.to}>
                  {link.linkName}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
