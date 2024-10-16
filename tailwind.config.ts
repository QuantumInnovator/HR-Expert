import type { Config } from "tailwindcss";
import { transform } from "next/dist/build/swc";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '320px',    // Custom breakpoint for small devices like mobile
      'sm': '640px',    // Small screens (default)
      'md': '768px',    // Medium screens (default)
      'lg': '1024px',   // Large screens (default)
      'xl': '1280px',   // Extra large screens (default)
      '2xl': '1536px',  // 2X large screens (default)
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundtext: {
        'custom-gradient': 'linear-gradient(90deg, rgba(0, 85, 204, 0.1) 1.67%, rgba(51, 178, 196, 0.1) 96.17%)'
      },
    },
  },
  plugins: [],
};

module.exports = config;

export default config;
