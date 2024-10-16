'use client'
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

function HR() {
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation should happen only once
    });
  }, []);

  return (
    <div>
      {/* Button with AOS animation */}
      <button
        data-aos="fade-up" // AOS animation
        className='flex mx-auto px-1 py-1 text-xs font-thin text-blue-800 border border-8px rounded-md border-b-slate-950 mt-10'
      >
        HOW IT WORKS
      </button>

      {/* Main Heading with AOS animation */}
      <p
        data-aos="fade-up" // AOS animation
        data-aos-delay="100" // Delay for sequential animations
        className='text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#091e4c] mb-4 mt-10'
      >
        <span className='text-sky-500 font-bold'>Empower Employees and </span> 
        <br /> 
        <span className='font-bold text-blue-900'>Automate HR Processes</span>
      </p>

      {/* Description with AOS animation */}
      <p
        data-aos="fade-up" // AOS animation
        data-aos-delay="200" // Delay for sequential animations
        className='text-xs text-blue-900 flex flex-wrap justify-center'
      >
        Donec tempor risus ut magna egestas, ut placerat ligula 
        <br />
      </p>
      <p
        data-aos="fade-up" // AOS animation
        data-aos-delay="300" // Delay for sequential animations
        className='flex flex-wrap justify-center text-xs text-blue-900'
      >
        aliquet. Morbi fermentum felis in urna suscipit.
      </p>
    </div>
  )
}

export default HR;
