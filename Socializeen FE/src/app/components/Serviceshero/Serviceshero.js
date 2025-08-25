"use client"; 

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; 

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Serviceshero = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-white">
      {/* Hero Text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="text-center px-4 md:px-8"
      >
        <motion.h1
          variants={textVariants}
          className="text-4xl md:text-5xl font-semibold leading-snug text-gray-800"
        >
          <motion.span variants={textVariants}>Welcome to </motion.span>
          <motion.span
            variants={textVariants}
            animate={{ color: ["#000", "#7C3AED", "#000"] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="font-bold"
          >
            Socializzen
          </motion.span>
          <br />
          <motion.span variants={textVariants}>
            From Startups to Standouts, We make it happen.
          </motion.span>
        </motion.h1>

        <motion.p
          variants={textVariants}
          className="text-gray-600 text-sm md:text-base mt-3 max-w-xl mx-auto"
        >
          Lights. Camera. Engagement!
          <br />
          We craft blockbuster campaigns that turn your brand into a superstar.
        </motion.p>
      </motion.div>

      {/* Animated Image Cards */}
      <section className="bg-zinc-50 mt-16">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-12 lg:py-20 flex flex-col items-center">
          <div className="flex flex-col sm:flex-row gap-6">
            {[
              "https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&w=2574&auto=format&fit=crop",
            ].map((src, i) => (
              <motion.div
                key={i}
                whileHover={{
                  rotate: 0,
                  y: -20,
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
                initial={{ rotate: i % 2 === 0 ? 6 : -12 }}
                className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`card-${i}`}
                  width={400}
                  height={500}
                  className="object-cover h-full w-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Serviceshero;
