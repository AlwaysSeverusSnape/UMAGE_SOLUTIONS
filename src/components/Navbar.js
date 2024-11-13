import React, { useState } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll'; // For smooth scrolling
import Logo from '../Assets/Logo.png'; // Import the logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling the menu

  const handleScrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
      offset: -70,  // Adjust offset for the fixed navbar height
    });
  };

  const handleMenuClick = (section) => {
    handleScrollToSection(section); // Scroll to the selected section
    setMenuOpen(false); // Close the menu after selection
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Title (for mobile and desktop) */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Mobile and Desktop: Logo and Title in a single line */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-10 mr-2" />
            <span className="text-lg font-bold sm:text-xl md:text-2xl">UMAGE Solutions</span>
          </div>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✖' : '☰'} {/* Toggle menu icon */}
          </button>
        </div>

        {/* Navigation Links for larger screens */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <ScrollLink to="top" smooth={true} duration={500} offset={-70} className="hover:text-blue-400 cursor-pointer">
              Home
            </ScrollLink>
          </li>
          <li>
            <button onClick={() => handleScrollToSection('product-section')} className="hover:text-blue-400">
              Technologies
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection('services-section')} className="hover:text-blue-400">
              Services
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection('about-section')} className="hover:text-blue-400">
              About Us
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection('contact-section')} className="hover:text-blue-400">
              Contact Us
            </button>
          </li>
        </ul>

        {/* Mobile menu links */}
        {menuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-gray-800 text-white py-4 px-6">
            <ul className="flex flex-col space-y-4">
              <li>
                <button onClick={() => handleMenuClick('top')} className="hover:text-blue-400">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleMenuClick('product-section')} className="hover:text-blue-400">
                  Technologies
                </button>
              </li>
              <li>
                <button onClick={() => handleMenuClick('services-section')} className="hover:text-blue-400">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleMenuClick('about-section')} className="hover:text-blue-400">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleMenuClick('contact-section')} className="hover:text-blue-400">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
