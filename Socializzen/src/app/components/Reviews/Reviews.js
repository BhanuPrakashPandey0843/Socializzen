"use client";

import React from "react";
import { motion } from "framer-motion";

// ✅ Testimonial data
const testimonials = [
  {
    text: "Socializzen completely transformed our online presence. Their strategy and creative campaigns boosted our Instagram followers by 3x within just two months.",
    name: "Rajat Mehra",
    role: "Startup Founder",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    color: "#4BB04F",
  },
  {
    text: "Our brand engagement skyrocketed after partnering with Socializzen. Their reels, shorts, and ad campaigns brought us real customers, not just likes.",
    name: "Ananya Sharma",
    role: "E-commerce Entrepreneur",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    color: "#48407D",
  },
  {
    text: "Socializzen designed an end-to-end social media strategy for us. From content creation to ads, everything was seamless. We saw a 45% increase in leads in 3 months.",
    name: "Vikram Patel",
    role: "Marketing Manager",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    color: "#F98531",
  },
  {
    text: "The Socializzen team is young, creative, and super responsive. Their YouTube shorts and TikTok content went viral, giving our brand massive exposure.",
    name: "Sana Ali",
    role: "Lifestyle Blogger",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    color: "#FFB800",
  },
];

// ✅ Reusable testimonial card
const TestimonialCard = ({ t }) => (
  <div className="min-w-[320px] max-w-[350px] bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between mx-4 transition-transform duration-300 hover:scale-105 font-altrus">
    {/* Quote icon */}
    <i className="ri-double-quotes-l text-4xl mb-4" style={{ color: t.color }} />

    {/* Testimonial text */}
    <p className="text-gray-600 text-sm leading-relaxed mb-6 break-words whitespace-normal">
      {t.text}
    </p>

    {/* User info */}
    <div className="flex items-center gap-4 mt-auto">
      <img
        src={t.img}
        alt={t.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <p className="text-base font-semibold text-[#120B06]">{t.name}</p>
        <p className="text-sm text-gray-500">{t.role}</p>
      </div>
    </div>
  </div>
);

// ✅ Main Component
export default function Reviews() {
  return (
    <section
      id="our-service"
      className="relative bg-white text-black px-6 md:px-16 py-20 font-altrus overflow-hidden"
    >
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

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="bg-[#F9FFF9] text-[#120B06] px-6 py-16 rounded-2xl"
      >
        {/* Row 1 → left to right */}
        <motion.div
          className="flex mb-10"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`row1-${i}`} t={t} />
          ))}
        </motion.div>

        {/* Row 2 → right to left */}
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`row2-${i}`} t={t} />
          ))}
        </motion.div>
      </section>
    </section>
  );
}
