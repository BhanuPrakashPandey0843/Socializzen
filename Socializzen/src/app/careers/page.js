'use client';

import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Serviceshero from "../components/Serviceshero/Serviceshero"
import Service from "../components/service/service";
import Reviews from "../components/Reviews/Reviews";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop/GoToTop";
const careers = () => {
  return (
    <div>
       <Navbar />
       <Serviceshero />
       
       <Service />
       <Reviews />
      <GoToTop />
      <Footer />
    </div>
  )
}

export default careers


