'use client';

import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop/GoToTop";
import Service from "../components/service/service";
import Reviews from "../components/Reviews/Reviews";
const services = () => {
  return (
    <div>
       <Navbar />
       <Service />
       <Reviews />
      <GoToTop />
      <Footer />
    </div>
  )
}

export default services

