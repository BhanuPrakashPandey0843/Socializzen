"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlayCircle, TrendingUp, Users, Zap, ArrowRight } from "lucide-react";

export default function Service() {
  return (
    <section
      id="our-service"
      className="relative bg-white text-black px-6 md:px-10 lg:px-16 py-20 font-sans overflow-hidden"
    >
      {/* Intro Section */}
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Left Side Heading */}
        <div>
          <p className="text-gray-500 text-sm tracking-wide uppercase mb-3">
            Why Brands Choose Us
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#0F0E0F] to-[#0F0E0F] bg-clip-text text-transparent">
            Social Media Growth{" "}
            <span className="text-[#0F0E0F]">with Socializzen</span>
          </h1>
        </div>

        {/* Right Side Paragraph */}
        <motion.div
          className="text-base text-gray-600 md:pl-6 lg:pl-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            At <span className="text-[#7654A0] font-semibold">Socializzen</span>, we help
            businesses dominate social media. From Instagram reels to YouTube
            shorts and ad campaigns, we craft content that drives engagement,
            builds trust, and turns followers into loyal customers.
          </p>
        </motion.div>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 items-stretch"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Left Tall Card */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-md relative hover:shadow-xl transition md:row-span-2 flex flex-col justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Icon */}
          <div className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full shadow-sm">
            <Zap className="w-6 h-6 text-[#7654A0]" />
          </div>

          {/* Text */}
          <h3 className="text-lg font-bold mb-3">Quick Impact</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Deliver your brand message in under 60 seconds with powerful,
            bite-sized content.
          </p>

          {/* Image */}
          <img
            src="https://sharedteams.com/wp-content/uploads/2024/04/socialmedia-w.gif"
            alt="Social Media Animation"
            className="rounded-xl mb-4 w-full object-cover"
          />

          {/* Button */}
          <button className="mt-auto flex items-center gap-2 bg-[#7654A0] text-white px-5 py-2 rounded-full font-medium hover:bg-[#5d3e82] transition">
            Our Work <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Middle Column → Boost Visibility + Audience Focused */}
        <div className="flex flex-col gap-6">
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md relative hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full shadow-sm">
              <TrendingUp className="w-6 h-6 text-[#7654A0]" />
            </div>
            <h3 className="text-lg font-bold mb-3">Boost Visibility</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Increase your brand reach and engagement through trending YouTube
              Shorts.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md relative hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full shadow-sm">
              <Users className="w-6 h-6 text-[#7654A0]" />
            </div>
            <h3 className="text-lg font-bold mb-3">Audience Focused</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Curated shorts designed to resonate with today’s fast-paced
              viewers.
            </p>
          </motion.div>
        </div>

        {/* Right Tall Card */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-md relative hover:shadow-xl transition md:row-span-2 flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full shadow-sm">
            <PlayCircle className="w-6 h-6 text-[#7654A0]" />
          </div>
          <h3 className="text-lg font-bold mb-3">Creative Content</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Engaging visuals and stories that grab attention instantly.
          </p>
            {/* Button */}
          <button className="mt-auto flex items-center gap-2 bg-[#7654A0] text-white px-5 py-2 rounded-full font-medium hover:bg-[#5d3e82] transition">
            Contact Us <ArrowRight className="w-4 h-4" />
          </button>
          {/* Image */}
          <img
            src="https://cdn.dribbble.com/userupload/24183311/file/original-9ca09f4baa6dfc97522e235781d00fa4.gif"
            alt="Social Media Animation"
            className="rounded-xl mb-4 w-full object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
