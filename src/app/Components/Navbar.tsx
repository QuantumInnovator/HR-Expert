'use client'
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'


function Navbar() {
  useEffect(() => {
    Aos.init({})
  }, [])
  // State to manage the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16" data-aos="fade-down">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800" data-aos="fade-down">
            <a href="#">HRExpert</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 mx-auto" data-aos="fade-down">
            <a href="#" className="text-gray-700 hover:text-blue-600">Our Platform</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Solution</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Resources</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
          </div>

          {/* Login and Demo Buttons */}
          <div className="hidden lg:flex space-x-2" data-aos="fade-down">
            <button className="border rounded-lg px-4 w-fit py-1 bg-slate-200">Login</button>
            <button className="px-4 py-1 bg-blue-800 text-white rounded-lg">Book a Free Demo</button>
          </div>

          {/* Mobile Menu Button - visible on mobile and tablet */}
          <div className="lg:hidden" data-aos="fade-down">
            <button
              type="button"
              className="toggle-button text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden by default, shows when screen is small) */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`} data-aos="fade-up">
        <div className="dropdown-menu px-4 pt-2 pb-3 space-y-2 font-bold">
          <a href="#" className="block text-gray-700 hover:text-blue-600 bg-slate-200 rounded-lg w-full px-4 py-2">Our Platform</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 bg-slate-200 rounded-lg w-full px-4 py-2">Pricing</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 bg-slate-200 rounded-lg w-full px-4 py-2">Solution</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 bg-slate-200 rounded-lg w-full px-4 py-2">Resources</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 bg-slate-200 rounded-lg w-full px-4 py-2">About</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
