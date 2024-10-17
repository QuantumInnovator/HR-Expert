'use client';
import React, { useEffect } from 'react';
import { FaCog } from 'react-icons/fa';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Image from 'next/image'; // Import Image from next/image

function Cards() {
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false, // Animation should happen only once
    });
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-center px-4 py-8">
      {/* First Card */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/5 xl:w-1/4 p-4" data-aos="fade-up">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-lg flex flex-col items-start h-full">
          <div className="relative w-full h-48 md:h-64"> {/* Container for Image */}
            <Image 
              className="rounded-t-md object-cover" // Use object-cover for responsive image fitting
              src="/img.png" 
              alt="Automated Workflows" 
              layout="fill" // Ensure the image fills the container
              objectFit="cover" // Maintain aspect ratio and cover the entire space
            />
          </div>
          <div className="mt-4 flex items-center">
            <FaCog className="text-blue-500 text-2xl mr-2" />
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100">Automated Workflows</h3>
          </div>
          <p className="text-gray-500 dark:text-gray-300 text-sm my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a href="#" className="text-blue-500 dark:text-blue-400 font-medium text-sm flex items-center">
            Learn More
            <span className="ml-1 text-lg">→</span>
          </a>
        </div>
      </div>

      {/* Second Card */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/5 xl:w-1/4 p-4" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-lg flex flex-col items-start h-full">
          <div className="relative w-full h-64"> {/* Container for Image */}
            <Image 
              className="rounded-t-md" 
              src="/newimg.png" 
              alt="Employee Self Service" 
              layout="fill" 
              objectFit="cover" // Maintain aspect ratio and cover the entire space
            />
          </div>
          <div className="mt-4 flex items-center">
            <Image src="/self.png" alt="Self Service Icon" width={24} height={24} className="mr-2" />
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100">Employee Self Service</h3>
          </div>
          <p className="text-gray-500 dark:text-gray-300 text-sm my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a href="#" className="text-blue-500 dark:text-blue-400 font-medium text-sm flex items-center">
            Learn More
            <span className="ml-1 text-lg">→</span>
          </a>
        </div>
      </div>

      {/* Third Card */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/5 xl:w-1/4 p-4" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-lg flex flex-col items-start h-full">
          <div className="relative w-full h-64"> {/* Container for Image */}
            <Image 
              className="rounded-t-md object-contain" // Use object-contain to fit the image without cutting off
              src="/img3.png" 
              alt="Real-Time Analytics" 
              layout="fill" 
              objectFit="contain" // Keep entire image visible
            />
          </div>
          <div className="mt-4 flex items-center">
            <Image src="/v7.png" alt="Analytics Icon" width={24} height={24} className="mr-2" />
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-100">Real-Time Analytics</h3>
          </div>
          <p className="text-gray-500 dark:text-gray-300 text-sm my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a href="#" className="text-blue-500 dark:text-blue-400 font-medium text-sm flex items-center">
            Learn More
            <span className="ml-1 text-lg">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
