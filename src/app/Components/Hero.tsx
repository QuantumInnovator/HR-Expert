'use client';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Image from 'next/image';

function Hero() {
  // Initialize AOS with reduced animation duration
  useEffect(() => {
    Aos.init({
      duration: 300, // Reduced animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation should happen only once
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-200">
      <div className="text-center px-4 py-8 max-w-2xl mx-auto">
        {/* Main Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 dark:text-gray-200 mb-4"
        >
          Revolutionize Your HR Tasks with Our
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 dark:text-white mb-6"
        >
          Smart Assistant
        </h2>
        
        {/* Subheading */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg mb-8"
        >
          Streamline recruitment, manage talent, and automate HR processes effortlessly.
        </p>
        
        {/* Updated Image Component */}
        <div className="flex justify-center mb-6">
          <Image
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl object-contain transition-all duration-200"
            src="/hr.png"
            alt="HR Image"
            width={700}
            height={400}
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </div>
        
        {/* Call to Action Button */}
        <a
          data-aos="fade-up"
          data-aos-delay="300"
          href="#"
          className="inline-block px-6 py-3 text-white bg-blue-700 dark:bg-blue-600 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-700 transition duration-200"
        >
          Get Started
        </a>

        <p
          className="flex text-xs justify-center mt-8 text-gray-600 dark:text-gray-400"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          More than 100+ companies trusted us
        </p>
      </div>
    </section>
  );
}

export default Hero;
