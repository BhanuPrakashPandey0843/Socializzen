"use client";
import React from "react";
import { motion } from "framer-motion";
import Middleimage from "./MiddlePhone.png";
import RightPhone from "./RightPhone.png";
import Leftimage from "./LeftPhone.png";

const FinanceMockup = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans">
      {/* Top Half - White */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-0" />

      {/* Bottom Half - Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-[#A38FC2] via-[#9F86BD] to-[#7654A0] z-0" />

      {/* Center Container with Motion */}
      <section className="relative z-10 flex items-center justify-center pt-24 pb-12 px-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-6xl p-[2px] rounded-3xl bg-gradient-to-tr from-[#A38FC2] via-[#9F86BD] to-[#7F5EA5] shadow-2xl"
        >
          <div className="bg-white/70 backdrop-blur-2xl rounded-[inherit] p-6 md:p-10 flex justify-center items-end gap-0 overflow-visible relative">
            {/* Left Phone */}
            <img
              src={Leftimage.src}
              alt="Left Phone Mockup"
              className="w-[18rem] md:w-[22rem] lg:w-[26rem] h-auto object-contain -translate-y-24 -translate-x-6 scale-95"
            />

            {/* Middle Phone */}
            <img
              src={Middleimage.src}
              alt="Middle Phone Mockup"
              className="w-[12rem] md:w-[16rem] lg:w-[20rem] h-auto object-contain z-10 -translate-y-32 scale-110"
            />

            {/* Right Phone */}
            <img
              src={RightPhone.src}
              alt="Right Phone Mockup"
              className="w-[18rem] md:w-[22rem] lg:w-[26rem] h-auto object-contain -translate-y-24 translate-x-6 scale-95"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FinanceMockup;
