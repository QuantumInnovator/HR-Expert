'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Icons() {
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation should happen only once
    });
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-center mb-14 cursor-pointer">
    <Image
      src="/frame32.png" // Ensure the path is correct and the image is in the public folder
      alt="Responsive Image"
      className="hidden md:block w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl object-contain"
      width={500} // Set an appropriate width
      height={500} // Set an appropriate height (adjust as needed)
      priority // Optional: Use this for images that should be loaded with higher priority
    />
  </div>
  
  
  
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full mt-6 text-center">
    //   {/* Icon 1 */}
    //   <button 
    //     data-aos="fade-up" // AOS animation
    //     className="w-full h-24 p-4 border rounded-lg hover:bg-blue-100 flex flex-col items-center justify-center"
    //   >
    //     <span className="text-3xl mb-2">🕒</span>
    //     <p className="text-blue-600 font-medium">Time Attendance</p>
    //   </button>

    //   {/* Icon 2 */}
    //   <button 
    //     data-aos="fade-up" // AOS animation
    //     data-aos-delay="100" // Delay for sequential animations
    //     className="w-full h-24 p-4 border rounded-lg hover:bg-blue-100 flex flex-col items-center justify-center"
    //   >
    //     <span className="text-3xl mb-2">📂</span>
    //     <p className="text-blue-600 font-medium">Onboarding</p>
    //   </button>

    //   {/* Icon 3 */}
    //   <button 
    //     data-aos="fade-up" // AOS animation
    //     data-aos-delay="200" // Delay for sequential animations
    //     className="w-full h-24 p-4 border rounded-lg hover:bg-blue-100 flex flex-col items-center justify-center"
    //   >
    //     <span className="text-3xl mb-2">📊</span>
    //     <p className="text-blue-600 font-medium">Monitor and Analyze</p>
    //   </button>

    //   {/* Icon 4 */}
    //   <button 
    //     data-aos="fade-up" // AOS animation
    //     data-aos-delay="300" // Delay for sequential animations
    //     className="w-full h-24 p-4 border rounded-lg hover:bg-blue-100 flex flex-col items-center justify-center"
    //   >
    //     <span className="text-3xl mb-2">⚙️</span>
    //     <p className="text-blue-600 font-medium">Automate HR Tasks</p>
    //   </button>
    // </div>

  )
}

export default Icons;
