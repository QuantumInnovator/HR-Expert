'use client';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Image from 'next/image'; // Import Image from next/image

function Company() {
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false, // Animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 w-full h-auto mt-4 px-4 bg-white dark:bg-gray-900 transition-all duration-300">
      {/* Add AOS attributes to the images for animation */}
      <Image
        src="/dckr.png"
        alt="Docker"
        width={64}
        height={64}
        className="w-16 h-auto sm:w-20 md:w-24 lg:w-28 dark:filter dark:invert" // Adjust size for responsiveness
        data-aos="fade-up"
      />
      <Image
        src="/amp.png"
        alt="AMP"
        width={64}
        height={64}
        className="w-16 h-auto sm:w-20 md:w-24 lg:w-28 dark:filter dark:invert" // Adjust size for responsiveness
        data-aos="fade-up"
        data-aos-delay="100"
      />
      <Image
        src="/atl.png"
        alt="Atlassian"
        width={64}
        height={64}
        className="w-16 h-auto sm:w-20 md:w-24 lg:w-28 dark:filter dark:invert" // Adjust size for responsiveness
        data-aos="fade-up"
        data-aos-delay="200"
      />
      <Image
        src="/base.png"
        alt="Base"
        width={64}
        height={64}
        className="w-16 h-auto sm:w-20 md:w-24 lg:w-28 dark:filter dark:invert" // Adjust size for responsiveness
        data-aos="fade-up"
        data-aos-delay="300"
      />
      <Image
        src="/drp.png"
        alt="DropBox"
        width={64}
        height={64}
        className="w-16 h-auto sm:w-20 md:w-24 lg:w-28 dark:filter dark:invert" // Adjust size for responsiveness
        data-aos="fade-up"
        data-aos-delay="400"
      />
      <Image
        src="/them.png"
        alt="Theme"
        width={64}
        height={64}
        className="w-16 h-auto sm:w-20 md:w-24 lg:w-28 dark:filter dark:invert" // Adjust size for responsiveness
        data-aos="fade-up"
        data-aos-delay="500"
      />
    </div>
  );
}

export default Company;
