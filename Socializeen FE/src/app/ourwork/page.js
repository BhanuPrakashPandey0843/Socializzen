'use client';

import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import OurWorkHero from "../components/OurWorkHero/OurWorkHero";

import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop/GoToTop";
const ourwork = () => {
  return (
    <div>
       <Navbar />
              <OurWorkHero />
      <GoToTop />
      <Footer />
    </div>
  )
}

export default ourwork
