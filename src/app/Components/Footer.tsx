'use client';

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="md:flex justify-between items-center border-b border-gray-200 pb-16 mb-10">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold text-blue-800">Transform Your HR Processes Today</h2>
          </div>

          {/* Demo Form */}
          <div className="md:w-1/2 mt-6 md:mt-0 md:text-right">
            <p className="text-gray-600 mb-4">
              Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit.
            </p>
            <div className="flex justify-start md:justify-end items-center mt-4">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="px-4 py-2 border rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <a href='#book'  className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-r-md hover:bg-orange-600">
                Book a Demo
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Stay Informed */}
          <div>
            <h3 className="font-semibold text-gray-700">Stay Informed</h3>
            <p className="text-gray-500 mt-2 mb-4">
            Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-700">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Platform</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Solution</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Resources</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-gray-700">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Employee Onboarding</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Time and Attendance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Performance Management</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">HR Analytics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Employee Self-Service</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-700">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">E-books & Guides</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Webinars</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Community Forum</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-700">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-gray-500">
          © 2024 Company Name. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
