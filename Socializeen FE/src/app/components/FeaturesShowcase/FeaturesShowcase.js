"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const FeaturesShowcase = () => {
  const stats = [
    { platform: "Instagram", value: 90 },
    { platform: "YouTube", value: 75 },
    { platform: "LinkedIn", value: 65 },
    { platform: "Facebook", value: 82 },
    { platform: "Twitter", value: 58 },
  ];

  const features = [
   
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white text-black px-6 md:px-16 py-20 font-sans overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-100 via-transparent to-indigo-100 blur-3xl opacity-60"></div>

      {/* Top Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 relative z-10"
      >
        <motion.div variants={fadeUp}>
          <p className="text-gray-500 text-sm mb-2">About Socializzen</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#000] bg-clip-text text-transparent">
            Shaping Digital Identities
          </h1>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="text-sm text-gray-600 mt-2 md:mt-10 md:pl-10 leading-relaxed"
        >
          <p>
            At{" "}
            <span className="text-[#000] font-semibold">Socializzen</span>, we
            help brands build meaningful connections with their audience by
            combining creativity, data, and strategy.
          </p>
          <p className="mt-3">
            From eye-catching content to performance-driven campaigns, we
            transform your social presence into a powerful growth engine that
            drives engagement, trust, and long-term success.
          </p>
        </motion.div>
      </motion.div>

      {/* ✅ Bar Graphs Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-20 flex justify-between gap-6 items-end h-80"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="flex flex-col items-center flex-1"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.25 }}
              className="text-[#7654A0] font-bold mb-2 text-lg"
            >
              {stat.value}%
            </motion.span>

            <div className="w-full bg-gray-200 rounded-md h-64 md:h-72 relative overflow-hidden shadow-inner">
              <motion.div
                initial={{ height: "0%" }}
                whileInView={{ height: `${stat.value}%` }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: i * 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="absolute bottom-0 w-full rounded-md bg-gradient-to-t from-[#7654A0] to-[#A78BFA] shadow-lg"
              ></motion.div>
            </div>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="mt-3 text-sm text-gray-700 font-semibold"
            >
              {stat.platform}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      {/* ✅ Features Section (No Icons, Premium Look) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center"
      >
        {features.map((feature, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#f9f5ff",
              boxShadow: "0px 8px 25px rgba(118,84,160,0.2)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="flex flex-col items-center justify-center p-6 rounded-2xl shadow-sm bg-white transition-all"
          >
            <p className="font-semibold text-gray-800 text-sm md:text-base">
              {feature}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturesShowcase;
