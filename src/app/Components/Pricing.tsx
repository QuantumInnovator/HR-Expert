"use client"
import { Check } from 'lucide-react'
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Image from 'next/image'

export default function PricingPlans() {
  useEffect(() => {
    Aos.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation should happen only once
    });
  }, [])

  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Basic Plan',
      price: 29,
      features: [
        'Employee Onboarding',
        'Time and Attendance Tracking',
        'Employee Self-Service Portal',
        'Standard Reporting',
      ],
      cta: 'Book a Demo',
      color: 'bg-white',
      textColor: 'text-gray-800',
    },
    {
      name: 'Professional Plan',
      price: 79,
      features: [
        'All Basic Plan Feature Plus',
        'Performance Management',
        'Customizable Reports and Analytics',
        'Standard Reporting',
      ],
      cta: 'Get Started With Professional',
      color: 'bg-gray-100',
      textColor: 'text-gray-800',
    },
    {
      name: 'Enterprise Plan',
      price: 199,
      features: [
        'All Basic Plan Feature Plus',
        'Performance Management',
        'Customizable Reports and Analytics',
        'Standard Reporting',
      ],
      cta: 'Get Started With Professional',
      color: 'bg-blue-600',
      textColor: 'text-white',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className='mb-6'>
          <center><Image src="/plan.png" alt='' width={100} height={100}/></center>
        </h2>
        <h1 className="mt-2 text-3xl font-semibold text-blue-500 sm:text-4xl lg:text-5xl">Choose the Right Plan for</h1>
        <h1 className="text-3xl font-semibold text-blue-900 sm:text-4xl lg:text-5xl">Your Business</h1>
        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
          Boost Efficiency, Productivity, and Employee Growth with Our Innovative HR Tools
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="relative bg-gray-100 rounded p-1">
          <button
            className={`${
              !isAnnual ? 'bg-blue-600 text-white' : 'text-gray-500'
            } relative w-32 py-2 text-sm font-medium rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </button>
          <button
            className={`${
              isAnnual ? 'bg-blue-600 text-white' : 'text-gray-500'
            } relative w-32 py-2 text-sm font-medium rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2`}
            onClick={() => setIsAnnual(true)}
          >
            Annually
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`${plan.color} ${plan.textColor} rounded-lg shadow-lg overflow-hidden`}
            data-aos="fade-up" // AOS animation
            data-aos-delay={index * 100} // Delay for sequential animations
          >
            <div className="px-6 py-8">
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-5xl font-extrabold">${plan.price}</span>
                <span className="text-xl font-medium">/month</span>
              </p>
              <p className="mt-2 text-sm opacity-75">
                Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis.
              </p>
              <button
                className={`mt-8 w-full py-3 px-4 rounded-md ${
                  index === 2 ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
                } hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2`}
              >
                {plan.cta}
              </button>
            </div>
            <div className="px-6 pt-6 pb-8 bg-gray-50">
              <h4 className="text-xs font-semibold text-gray-900 tracking-wide uppercase">What You Will Get</h4>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
