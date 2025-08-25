'use client';

import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Serviceshero from "../components/Serviceshero/Serviceshero"

import Services from "../components/Services/Services"
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop/GoToTop";
const careers = () => {
  return (
    <div>
       <Navbar />
       <Serviceshero />
       
       <Services />
      <GoToTop />
      <Footer />
    </div>
  )
}

export default careers


