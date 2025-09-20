"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlayCircle, TrendingUp, Users, Zap, ArrowRight } from "lucide-react";

export default function Service() {
  return (
    <section
      id="our-service"
      className="relative bg-gradient-to-br from-white via-[#faf8fc] to-[#f5f0ff] text-black px-6 md:px-10 lg:px-16 py-24 font-sans overflow-hidden"
    >
      {/* Floating gradient blob background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-indigo-200 rounded-full opacity-30 blur-3xl"></div>

      {/* Intro Section */}
            <motion.div
              className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10 items-center mb-16"
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
                  Social Media Growth <span className="text-[#0F0E0F]">with Socializzen</span>
                </h1>
              </div>
      
              {/* Right Side Paragraph */}
              <motion.div
                className="text-base text-gray-600 md:pl-10 leading-relaxed"
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
      {/* Cards Layout: Left tall | Middle stacked | Right tall */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Left Tall Card */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group bg-white/70 backdrop-blur-xl border border-gray-200/40 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden flex flex-col"
        >
          <div className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full shadow-sm group-hover:scale-110 transition">
            <Zap className="w-6 h-6 text-[#7654A0]" />
          </div>
          <h3 className="text-lg font-bold mb-3">Quick Impact</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Deliver your brand message in under 60 seconds with powerful,
            bite-sized content.
          </p>
          <img
            src="https://sharedteams.com/wp-content/uploads/2024/04/socialmedia-w.gif"
            alt="Social Media Animation"
            className="rounded-xl mb-4 w-full object-cover shadow-md group-hover:scale-105 transition"
          />
          <button className="mt-auto flex items-center gap-2 bg-[#7654A0] text-white px-5 py-2 rounded-full font-medium hover:bg-[#5d3e82] transition">
            Our Work <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Middle Column → stacked cards */}
        <div className="flex flex-col gap-10">
          {/* Boost Visibility */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group bg-white/70 backdrop-blur-xl border border-gray-200/40 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full shadow-sm group-hover:scale-110 transition">
              <TrendingUp className="w-6 h-6 text-[#7654A0]" />
            </div>
            <h3 className="text-lg font-bold mb-3">Boost Visibility</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Increase your brand reach and engagement through trending YouTube Shorts.
            </p>
          </motion.div>

          {/* Audience Focused */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group bg-white/70 backdrop-blur-xl border border-gray-200/40 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full shadow-sm group-hover:scale-110 transition">
              <Users className="w-6 h-6 text-[#7654A0]" />
            </div>
            <h3 className="text-lg font-bold mb-3">Audience Focused</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Curated shorts designed to resonate with today’s fast-paced viewers.
            </p>
          </motion.div>
        </div>

        {/* Right Tall Card */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative group bg-white/70 backdrop-blur-xl border border-gray-200/40 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden flex flex-col"
        >
          <div className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full shadow-sm group-hover:scale-110 transition">
            <PlayCircle className="w-6 h-6 text-[#7654A0]" />
          </div>
          <h3 className="text-lg font-bold mb-3">Creative Content</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Engaging visuals and stories that grab attention instantly.
          </p>
          <img
            src="https://cdn.dribbble.com/userupload/24183311/file/original-9ca09f4baa6dfc97522e235781d00fa4.gif"
            alt="Creative Content"
            className="rounded-xl mb-4 w-full object-cover shadow-md group-hover:scale-105 transition"
          />
          <button className="mt-auto flex items-center gap-2 bg-[#7654A0] text-white px-5 py-2 rounded-full font-medium hover:bg-[#5d3e82] transition">
            Contact Us <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
