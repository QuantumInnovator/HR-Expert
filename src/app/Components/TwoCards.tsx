'use client';
import { FaUser, FaChartLine } from 'react-icons/fa';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

function TwoCards() {
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation should happen only once
    });
  }, []);

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-6 space-y-6 lg:space-y-0 px-4 lg:px-0">
        
        {/* Card 1: Centralized Employee Data */}
        <div
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start max-w-lg w-full"
          data-aos="fade-up" // AOS animation
        >
          {/* Image (Placeholder) */}
          <div className="w-full mb-4 rounded-lg">
            <img
              src="wide.png"
              alt="Centralized Employee Data"
              className="w-full h-auto max-w-full object-cover rounded-lg"
            />
          </div>

          {/* Icon and Title */}
          <div className="flex items-center mb-4">
            <FaUser className="text-blue-500 text-3xl mr-3 mt-7" />
            <h3 className="text-sm font-semibold text-gray-800 mt-8">Centralized Employee Data</h3>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Learn More Link */}
          <a href="#" className="text-blue-500 font-medium text-sm flex items-center">
            Learn More
            <span className="ml-2 text-xl">→</span>
          </a>
        </div>

        {/* Card 2: Advanced Analytics and Reporting */}
        <div
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start max-w-lg w-full"
          data-aos="fade-up" // AOS animation
          data-aos-delay="100" // Delay for the second card
        >
          {/* Image (Placeholder) */}
          <div className="w-full mb-4 rounded-lg">
            <img
              src="wide2.png"
              alt="Advanced Analytics and Reporting"
              className="w-full h-auto max-w-full object-cover rounded-lg"
            />
          </div>

          {/* Icon and Title */}
          <div className="flex items-center mb-4">
            <FaChartLine className="text-blue-500 text-3xl mr-3 mt-7" />
            <h3 className="text-sm mt-8 font-semibold text-gray-800">Advanced Analytics and Reporting</h3>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Learn More Link */}
          <a href="#" className="text-blue-500 font-medium text-sm flex items-center">
            Learn More
            <span className="ml-2 text-xl">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TwoCards;
