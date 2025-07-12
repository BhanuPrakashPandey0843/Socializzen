"use client";
import React from "react";
import { motion } from "framer-motion";
import Middleimage from "./MiddlePhone.png";
import RightPhone from "./RightPhone.png";
import Leftimage from "./LeftPhone.png";

const FinanceMockup = () => {
  return (
    <div className="relative w-full min-h-[80vh] overflow-hidden font-sans isolate">
      {/* Top Half - White */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-0" />

      {/* Bottom Half - Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-[#A38FC2] via-[#9F86BD] to-[#7654A0] z-0" />

      {/* Center Container */}
   {/* Center Container */}
<section className="relative z-10 flex items-center justify-center px-4 pt-4 pb-2">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative w-full max-w-5xl mx-auto p-[2px] rounded-3xl bg-gradient-to-tr from-[#A38FC2] via-[#9F86BD] to-[#7F5EA5] shadow-2xl"
  >
    <div className="bg-white/70 backdrop-blur-2xl rounded-[inherit] px-4 py-3 md:px-8 md:py-4 flex justify-center items-end gap-0 overflow-visible relative">
      
      {/* Left Phone - Scaled to 1.5x */}
      <img
        src={Leftimage.src}
        alt="Left Phone Mockup"
        className="w-[27rem] md:w-[33rem] lg:w-[39rem] h-auto object-contain -translate-y-16 -translate-x-4"
      />

      {/* Middle Phone */}
      <div className="relative z-10 -translate-y-24 scale-105">
        <img
          src={Middleimage.src}
          alt="Middle Phone Mockup"
          className="w-[11rem] md:w-[14rem] lg:w-[17rem] h-auto object-contain"
        />
      </div>

      {/* Right Phone - Scaled to 1.5x */}
      <img
        src={RightPhone.src}
        alt="Right Phone Mockup"
        className="w-[27rem] md:w-[33rem] lg:w-[39rem] h-auto object-contain -translate-y-16 translate-x-4"
      />
    </div>
  </motion.div>
</section>


    </div>
  );
};

export default FinanceMockup;
