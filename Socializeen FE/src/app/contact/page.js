'use client';

import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Contacthero from "../components/Contacthero/Contacthero";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop/GoToTop";
const contact = () => {
  return (
    <div>
       <Navbar />
       <Contacthero />
       <ContactUs />
      <GoToTop />
      <Footer />
    </div>
  )
}

export default contact
