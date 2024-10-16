'use client';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Image from 'next/image';

function Hero() {
  // Initialize AOS
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation should happen only once
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="text-center px-4 py-8 max-w-2xl mx-auto">
        {/* Main Heading */}
        <h1
          data-aos="fade-up" // AOS animation
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-4"
        >
          Revolutionize Your HR Tasks with Our
        </h1>
        <h2
          data-aos="fade-up" // AOS animation
          data-aos-delay="100" // Delay for sequential animations
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-6"
        >
          Smart Assistant
        </h2>
        
        {/* Subheading */}
        <p
          data-aos="fade-up" // AOS animation
          data-aos-delay="200" // Delay for sequential animations
          className="text-gray-600 text-sm sm:text-base md:text-lg mb-8"
        >
          Streamline recruitment, manage talent, and automate HR processes effortlessly.
        </p>
        
        {/* Updated Image Component */}
        <div className="flex justify-center mb-6">
          <Image
            className="w-full max-w-lg object-contain" // Ensures the image is responsive
            src="/hr.png" // Ensure the path is correct
            alt="HR Image" // Provide a meaningful alt text
            width={500} // Set the appropriate width
            height={300} // Set the appropriate height
            data-aos="fade-up" // AOS animation
            data-aos-delay="400" // Delay for sequential animations
          />
        </div>
        
        {/* Call to Action Button */}
        <a
          data-aos="fade-up" // AOS animation
          data-aos-delay="300" // Delay for sequential animations
          href="#"
          className="inline-block px-6 py-3 text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300"
        >
          Get Started
        </a>

        <p
          className="flex text-xs justify-center mt-8"
          data-aos="fade-up" // AOS animation
          data-aos-delay="500" // Delay for sequential animations
        >
          More than 100+ companies trusted us
        </p>
      </div>
    </section>
  );
}

export default Hero;
