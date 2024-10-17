'use client'
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Features() {
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false, // Animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-8 bg-white dark:bg-gray-900 transition-all duration-300">
      <h2
        className="text-blue-600 dark:text-blue-400 text-sm font-thin mb-2 border-2 p-1 rounded-lg cursor-pointer hover:shadow-lg hover:bg-sky-200 dark:hover:bg-sky-600 transition duration-300"
        data-aos="fade-up" // Add AOS animation
      >
        POWERFUL FEATURES
      </h2>
      <h1
        className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#091e4c] dark:text-white mb-4"
        data-aos="fade-up" // Add AOS animation
        data-aos-delay="100" // Optional delay
      >
        Empower Your Workforce With <br /> Advanced Tools
      </h1>
      <p
        className="text-center text-gray-600 dark:text-gray-300 text-xs sm:text-base md:text-lg max-w-2xl"
        data-aos="fade-up" // Add AOS animation
        data-aos-delay="200" // Optional delay
      >
        Boost Efficiency, Productivity, and Employee Growth with Our Innovative HR Tools.
      </p>
    </div>
  );
}

export default Features;
