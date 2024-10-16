import React from 'react'
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Company from "./Components/Company";
import Cards from "./Components/Cards";
import TwoCards from "./Components/TwoCards";
import HR from "./Components/HR";
import Exp from "./Components/Exp";
import FAQSection from "./Components/FAQ";
import PricingPlans from "./Components/Pricing";
import Footer from "./Components/Footer";
import Icons from "./Components/Icons";



function page()  {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Company/>
    <Features/>
    <Cards/>
    <TwoCards/>
    <HR/>
    <Exp/>
    <Icons/>
    <FAQSection/>
    <PricingPlans/>
    <Footer/>
    
    </div>
  )
}


export default page