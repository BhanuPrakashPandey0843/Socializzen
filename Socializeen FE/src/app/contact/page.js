'use client';

import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Contacthero from "../components/Contacthero/Contacthero"
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop/GoToTop";
const contact = () => {
  return (
    <div>
       <Navbar />
       <Contacthero />
      <GoToTop />
      <Footer />
    </div>
  )
}

export default contact
