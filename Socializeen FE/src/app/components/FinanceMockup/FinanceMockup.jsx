"use client";
import React from "react";
import { motion } from "framer-motion";

const FinanceMockup = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans">
      {/* Top Half - White */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-0" />

      {/* Bottom Half - Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-[#A38FC2] via-[#9F86BD] to-[#7654A0] z-0" />

      {/* Center Container with Motion */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-3xl p-[2px] rounded-3xl bg-gradient-to-tr from-[#A38FC2] via-[#9F86BD] to-[#7F5EA5] shadow-2xl"
        >
          <div className="bg-white/60 backdrop-blur-xl rounded-[inherit] p-10 md:p-16 text-center">
          
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FinanceMockup;
