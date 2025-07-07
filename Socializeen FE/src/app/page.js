

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeServiceBanner from "./components/HomeServiceBanner/HomeServiceBanner"
import Hero from "./components/Hero";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeServiceBanner />
      
     
      <Footer />
    </>
  );
}
