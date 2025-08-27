'use client';

import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Aboutushero from "../components/Aboutushero/Aboutushero"
import FeaturesShowcase from "../components/FeaturesShowcase/FeaturesShowcase"
import HomeServiceBanner from "../components/HomeServiceBanner/HomeServiceBanner";
import Ouroffering from '../components/Ouroffering/Ouroffering';
import Faq from '../components/Faq/Faq';
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop/GoToTop";
const about = () => {
  return (
    <div>
       <Navbar />
       <Aboutushero />
       <FeaturesShowcase />
       <Faq />
       <Ouroffering />
       <HomeServiceBanner />
      <GoToTop />
      <Footer />
    </div>
  )
}

export default about
