// pages/_app.tsx
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { useEffect } from 'react';
import type { AppProps } from 'next/app'; // Import AppProps type

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
