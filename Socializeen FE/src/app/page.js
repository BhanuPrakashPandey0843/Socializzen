

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import HomeServiceBanner from "./components/HomeServiceBanner/HomeServiceBanner"
import FinanceMockup from "./components/FinanceMockup/FinanceMockup"
import Hero from "./components/Hero";
import HowItOperates from "./components/HowItOperates/HowItOperates"
import Testimonials from "./components/Testimonials/Testimonials"
import AboutSection from "./components/AboutSection/AboutSection";
import GoToTop from "./components/GoToTop/GoToTop";

export default function HomePage() {
  return (
    <>

      <Navbar />
      <Hero />
      <AboutSection />
    
      <FinanceMockup />
      <HowItOperates />
        
        <Testimonials />
        <HomeServiceBanner />
        <GoToTop />
     
      <Footer />
    </>
  );
}
