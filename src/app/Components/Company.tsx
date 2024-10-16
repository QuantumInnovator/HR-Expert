'use client';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Company() {
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false, // Animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 w-full h-auto mt-4">
      {/* Add AOS attributes to the images for animation */}
      <img src="dckr.png" alt="Docker" className="w-16 h-auto md:w-20" data-aos="fade-up" />
      <img src="amp.png" alt="AMP" className="w-16 h-auto md:w-20" data-aos="fade-up" data-aos-delay="100" />
      <img src="atl.png" alt="Atlassian" className="w-16 h-auto md:w-20" data-aos="fade-up" data-aos-delay="200" />
      <img src="base.png" alt="Base" className="w-16 h-auto md:w-20" data-aos="fade-up" data-aos-delay="300" />
      <img src="drp.png" alt="DropBox" className="w-16 h-auto md:w-20" data-aos="fade-up" data-aos-delay="400" />
      <img src="them.png" alt="Theme" className="w-16 h-auto md:w-20" data-aos="fade-up" data-aos-delay="500" />
    </div>
  );
}

export default Company;
