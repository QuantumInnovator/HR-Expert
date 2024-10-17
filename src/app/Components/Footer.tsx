"use client";
import { useState } from "react";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

export default function DemoSection() {
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false, // Animation should happen only once
    });
  }, []);

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log("Valid email submitted:", email);
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  return (
    <section className="bg-[#e6f3ff] dark:bg-[#1a202c] py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Heading */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#003d79] dark:text-white">
            Transform Your HR <br /> Processes Today
          </h2>
        </div>

        {/* Right side - Form */}
        <div className="flex justify-center lg:justify-end">
          <form onSubmit={handleSubmit} className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsValidEmail(true);
              }}
              required
              className="w-full lg:w-auto px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent dark:bg-[#2d3748] dark:border-gray-600 dark:text-white"
            />
            <button
              type="submit"
              className="bg-[#FF9900] hover:bg-[#ff8800] text-white rounded-lg px-6 py-2 text-sm font-medium transition-colors"
            >
              Book a Demo
            </button>
          </form>
        </div>

        {/* Error message */}
        {!isValidEmail && (
          <p className="text-red-500 text-sm mt-2 lg:col-start-2 lg:col-end-3 text-center lg:text-right">
            Please enter a valid email address
          </p>
        )}
      </div>

      {/* Divider */}
      <div className="mt-8 w-full h-px bg-[#0066cc] opacity-20"></div>
      <div className="bg-blue-50 text-blue-900 py-10 dark:bg-[#2d3748] dark:text-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Stay Informed Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Informed</h3>
            <p className="text-sm text-gray-500 mb-6 dark:text-gray-400">
              Donec tempor sit amet magna egestas, ut placerat ligula aliquet. Morbi.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500">
                {/* Facebook Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 3C4.44772 3 4 3.44772 4 4V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V4C20 3.44772 19.5523 3 19 3H5ZM8 7.5C8.82843 7.5 9.5 8.17157 9.5 9C9.5 9.82843 8.82843 10.5 8 10.5C7.17157 10.5 6.5 9.82843 6.5 9C6.5 8.17157 7.17157 7.5 8 7.5ZM9 16H7V11H9V16ZM13 16H11V13.5H10V12H11V11C11 10.4477 11.4477 10 12 10H13V11.5H12.5C12.2239 11.5 12 11.7239 12 12V13H13.5V16ZM16 16H14V13.5H15.5L16 12.5H14V11.5H16V16Z" />
                </svg>
              </a>
              <a href="#" className="text-blue-500">
                {/* Twitter Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163C6.937 2.163 2.813 6.287 2.813 11.351c0 4.58 3.517 8.351 8.087 8.877V15.06h-2.44v-2.35h2.44v-1.823c0-2.61 1.417-3.972 3.631-3.972.777 0 1.588.127 1.588.127v1.763h-.893c-.879 0-1.15.553-1.15 1.118v1.447h2.364l-.377 2.35h-1.987v5.168c4.566-.517 8.09-4.296 8.09-8.877 0-5.064-4.124-9.188-9.187-9.188z" />
                </svg>
              </a>
              <a href="#" className="text-blue-500">
                {/* Instagram Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.004 2.161c5.063 0 9.188 4.125 9.188 9.189 0 5.064-4.125 9.188-9.188 9.188-5.064 0-9.189-4.125-9.189-9.188 0-5.064 4.125-9.189 9.189-9.189zm0 2.5c-3.692 0-6.688 2.996-6.688 6.689 0 3.693 2.996 6.689 6.688 6.689 3.693 0 6.688-2.996 6.688-6.689 0-3.693-2.995-6.688-6.688-6.688zm-.005 1.88c1.598 0 2.896 1.297 2.896 2.897 0 1.599-1.298 2.896-2.896 2.896-1.6 0-2.896-1.297-2.896-2.896 0-1.6 1.296-2.897 2.896-2.897zm0 4.003c.609 0 1.104-.497 1.104-1.106 0-.609-.495-1.106-1.104-1.106-.609 0-1.104.497-1.104 1.106 0 .609.495 1.106 1.104 1.106zm4.302-2.707c.194 0 .35.156.35.35s-.156.35-.35.35-.35-.156-.35-.35.156-.35.35-.35z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Email: support@example.com
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Phone: (123) 456-7890
            </p>
          </div>

          {/* Additional Links */}
          <div className="md:col-span-2 md:text-right">
            <h3 className="text-xl font-semibold mb-4">Helpful Links</h3>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
