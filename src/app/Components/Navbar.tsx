'use client'
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

function Navbar() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration (optional)
      easing: 'ease-in-out', // Easing option (optional)
    });
  }, []);

  // State to manage the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className="bg-white dark:bg-gray-900 border-b-2 border-gray-100 dark:border-gray-700 transition-all duration-300"
      data-aos="fade-down"  // AOS animation applied to the entire navbar
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="text-xl font-bold text-gray-800 dark:text-gray-200"
            data-aos="fade-right"  // AOS animation applied to the logo
          >
            <a href="#" className="transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400">HRExpert</a>
          </div>

          {/* Desktop Menu */}
          <div 
            className="hidden lg:flex space-x-8 mx-auto transition-all duration-300"
            data-aos="fade-up"  // AOS animation applied to the desktop menu
          >
            <a href="#platform" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">Our Platform</a>
            <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">Pricing</a>
            <a href="#solution" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">Solution</a>
            <a href="#resources" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">Resources</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">About</a>
          </div>

          {/* Login and Demo Buttons */}
          <div 
            className="hidden lg:flex space-x-2"
            data-aos="fade-left"  // AOS animation applied to the buttons
          >
            <button className="border rounded-lg px-4 w-fit py-1 bg-slate-200 dark:bg-gray-800 dark:text-gray-200 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-700">Login</button>
            <button id='book' className="px-4 py-1 bg-blue-800 text-white rounded-lg transition-all duration-300 hover:bg-blue-700">Book a Free Demo</button>
          </div>

          {/* Mobile Menu Button - visible on mobile and tablet */}
          <div className="lg:hidden">
            <button
              type="button"
              className="toggle-button text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-400 focus:outline-none transition-all duration-300"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (now properly working with transition) */}
      <div className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="dropdown-menu px-4 pt-2 pb-3 space-y-2 font-bold" data-aos="fade-up">
          <a href="#platform" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-200 dark:bg-gray-800 rounded-lg w-full px-4 py-2 transition-all duration-300">
            Our Platform
          </a>
          <a href="#pricing" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-200 dark:bg-gray-800 rounded-lg w-full px-4 py-2 transition-all duration-300">
            Pricing
          </a>
          <a href="#solution" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-200 dark:bg-gray-800 rounded-lg w-full px-4 py-2 transition-all duration-300">
            Solution
          </a>
          <a href="#resources" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-200 dark:bg-gray-800 rounded-lg w-full px-4 py-2 transition-all duration-300">
            Resources
          </a>
          <a href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-200 dark:bg-gray-800 rounded-lg w-full px-4 py-2 transition-all duration-300">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

