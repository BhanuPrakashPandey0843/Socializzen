'use client';

import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import OurWorkHero from "../components/OurWorkHero/OurWorkHero";
import ProjectsShowcase from "../components/ProjectsShowcase/ProjectsShowcase";
import RecentWorks from "../components/RecentWorks/RecentWorks";
import HomeServiceBanner from "../components/HomeServiceBanner/HomeServiceBanner";
import Testimonials from "../components/Testimonials/Testimonials";
import OurVideos from "../components/Our-videos/our-videos";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop/GoToTop";
const ourwork = () => {
  return (
    <div>
       <Navbar />
              <OurWorkHero />
              <ProjectsShowcase />
              <RecentWorks />
              
              <Testimonials />
              <OurVideos />
              <HomeServiceBanner />
      <GoToTop />
      <Footer />
    </div>
  )
}

export default ourwork
