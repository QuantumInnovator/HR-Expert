"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import Aos from "aos";

const FAQSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 300, // Minimized animation duration
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const [hoveredAnswer, setHoveredAnswer] = useState<string | null>(null);

  const faqItems = [
    {
      id: "answer-1",
      question: "How easy is it to set up the software?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris fusce nec tellus sed augue semper porta.",
    },
    {
      id: "answer-2",
      question: "What kind of support is available?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris fusce nec tellus sed augue semper porta.",
    },
    {
      id: "answer-3",
      question: "Is the software compatible with other tools I use?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris fusce nec tellus sed augue semper porta.",
    },
    {
      id: "answer-4",
      question: "How does the pricing work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris fusce nec tellus sed augue semper porta.",
    },
    {
      id: "answer-5",
      question: "Can I customize the features to fit my needs?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris fusce nec tellus sed augue semper porta.",
    },
  ];

  return (
    <div className="bg-[#E6F3FF] dark:bg-[#1a1a1a] py-6 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Added FAQs box */}
        <div className="w-[55px] h-[22px] mx-auto mb-8 ">
          <h2 className="font-urbanist text-center" id="faq">
            <Image src="/faq.png" alt="" width={200} height={200} />
          </h2>
        </div>
        <h1 className="text-2xl font-bold text-center mb-8 text-[#0F47A6] dark:text-white">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#333333] rounded-lg shadow-md overflow-hidden"
              onMouseEnter={() => setHoveredAnswer(item.id)}
              onMouseLeave={() => setHoveredAnswer(null)}
              data-aos="fade-up" // AOS animation for the FAQ item
              data-aos-delay={index * 50} // Stagger the animations
            >
              <button
                className="w-full text-left p-4 flex justify-between items-center focus:outline-none transition duration-150 bg-transparent hover:bg-[#0F47A6] dark:hover:bg-[#0F47A6] hover:text-white dark:hover:text-white"
              >
                <span className="font-semibold font-urbanist text-[#09134c] dark:text-white">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 dark:text-gray-300 transform transition-transform duration-150`} // Reduced transition duration
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-4 pb-4 text-gray-600 dark:text-gray-300 transition-all duration-150 ease-in-out ${
                  hoveredAnswer === item.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{
                  overflow: "hidden", // Ensure overflow is hidden for smooth transition
                }}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;


