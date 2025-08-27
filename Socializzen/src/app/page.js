"use client";
import { useEffect, useState } from "react";


import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop/GoToTop";
import HomeServiceBanner from "./components/HomeServiceBanner/HomeServiceBanner";
import FinanceMockup from "./components/FinanceMockup/FinanceMockup";
import Hero from "./components/Hero";
import HowItOperates from "./components/HowItOperates/HowItOperates";
import Testimonials from "./components/Testimonials/Testimonials";
import AboutSection from "./components/AboutSection/AboutSection";
import AboutUs from "./components/AboutUs/AboutUs";
import OurVideos from "./components/Our-videos/our-videos";

export default function HomePage() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <AboutUs />
      <FinanceMockup />
      <HowItOperates />
      <Testimonials />
      <OurVideos />
      <HomeServiceBanner />
         
      <GoToTop />
      <Footer />
    </>
  );
}
