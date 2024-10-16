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
    <div className='w-full flex flex-wrap justify-center'>
      {/* First Card */}
      <div className='w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 mb-4' data-aos="fade-up">
        <div className='grid grid-cols-1 items-center mb-6 border border-2px'>
          <Image className='w-full h-64' src="/img.png" alt="Automated Workflows" width={500} height={256} />
          <div className='mr-2'></div>
          <div className="bg-white p-4 rounded-md shadow-sm flex flex-col items-start max-w-[15rem] w-full">
            {/* Icon and Title */}
            <div className="flex items-center mb-2">
              <FaCog className="text-blue-500 text-2xl mr-1" />
              <h3 className="text-sm font-medium text-gray-800 mr-auto">Automated Workflows</h3>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Learn More Link */}
            <a href="#" className="text-blue-500 font-medium text-sm flex items-center">
              Learn More
              <span className="ml-1 text-lg">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className='w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 mb-4' data-aos="fade-up" data-aos-delay="100">
        <div className='grid grid-cols-1 items-center mb-6 border border-2px'>
          <Image className='w-full h-64' src="/newimg.png" alt="Employee Self Service" width={500} height={256} />
          <div className='mr-2'></div>
          <div className="bg-white p-4 rounded-md shadow-sm flex flex-col items-start max-w-[15rem] w-full">
            {/* Icon and Title */}
            <div className="flex items-center mb-2">
              <Image className="text-blue-500 text-2xl mr-1" src="/self.png" alt="Self Service Icon" width={24} height={24} />
              <h3 className="text-sm font-medium text-gray-800 mr-auto">Employee Self Service</h3>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Learn More Link */}
            <a href="#" className="text-blue-500 font-medium text-sm flex items-center">
              Learn More
              <span className="ml-1 text-lg">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className='w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 mb-4' data-aos="fade-up" data-aos-delay="200">
        <div className='grid grid-cols-1 items-center mb-6 border border-2px'>
          <Image className='w-full h-64' src="/img3.png" alt="Real-Time Analytics" width={500} height={256} />
          <div className='mr-2'></div>
          <div className="bg-white p-4 rounded-md shadow-sm flex flex-col items-start max-w-[15rem] w-full">
            {/* Icon and Title */}
            <div className="flex items-center mb-2">
              <Image className="text-blue-500 text-2xl mr-1" src="/v7.png" alt="Analytics Icon" width={24} height={24} />
              <h3 className="text-sm font-medium text-gray-800 mr-auto">Real-Time Analytics</h3>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Learn More Link */}
            <a href="#" className="text-blue-500 font-medium text-sm flex items-center">
              Learn More
              <span className="ml-1 text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
