

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeServiceBanner from "./components/HomeServiceBanner/HomeServiceBanner"
import FinanceMockup from "./components/FinanceMockup/FinanceMockup"
import Hero from "./components/Hero";
import HowItOperates from "./components/HowItOperates/HowItOperates"
import Testimonials from "./components/Testimonials/Testimonials"


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
    
      <FinanceMockup />
      <HowItOperates />
        
        <Testimonials />
        <HomeServiceBanner />
     
      <Footer />
    </>
  );
}
