'use client';

import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import OurWorkHero from "../components/OurWorkHero/OurWorkHero";
import ProjectsShowcase from "../components/ProjectsShowcase/ProjectsShowcase";
import HomeServiceBanner from "../components/HomeServiceBanner/HomeServiceBanner";
import Testimonials from "../components/Testimonials/Testimonials";
import VideoSection from "../components/VideoSection/VideoSection";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop/GoToTop";
const ourwork = () => {
  return (
    <div>
       <Navbar />
              <OurWorkHero />
              <ProjectsShowcase />
              <VideoSection />
              <Testimonials />
              
              <HomeServiceBanner />
      <GoToTop />
      <Footer />
    </div>
  )
}

export default ourwork
