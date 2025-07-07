"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const statRefs = useRef([]);

  useEffect(() => {
    // Animate testimonial cards
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: ".testimonials-wrapper",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Animate stat boxes
    gsap.from(".stat-box", {
      scrollTrigger: {
        trigger: ".stats-container",
        start: "top 90%",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Count-up animation with real numeric progress
    statRefs.current.forEach((el) => {
      const raw = el.getAttribute("data-value");
      const suffix = raw.match(/[^\d]/g)?.join("") || ""; // e.g., "K", "+"
      const numericValue = parseInt(raw.replace(/[^\d]/g, ""));

      const obj = { val: 0 };
      gsap.to(obj, {
        val: numericValue,
        duration: 2,
        ease: "power1.out",
        onUpdate: () => {
          el.textContent = `${Math.floor(obj.val)}${suffix}`;
        },
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
        },
      });
    });
  }, []);

  const stats = [
    { value: "200K", label: "Feedback" },      // K will appear after animation
    { value: "500+", label: "Workers" },         // + appears after
    { value: "70+", label: "Contributors" },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#A38FC2] via-[#9F86BD] to-[#7654A0] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto testimonials-wrapper">
        {/* Header + Stats Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-10 px-4 sm:px-6 md:px-10 lg:px-16">
          {/* Header Section */}
          <div className="md:w-1/2 text-left">
            <p className="text-lg font-medium mb-2">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
              What Our Clients <br /> Say!
            </h2>
          </div>

          {/* Stats Row */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6 stats-container">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="stat-box backdrop-blur-md bg-white/10 rounded-xl border border-white/20 px-6 py-4 text-center shadow-lg"
              >
                <h3
                  ref={(el) => (statRefs.current[i] = el)}
                  data-value={stat.value}
                  className="text-4xl font-extrabold text-white mb-1 stat-value"
                >
                  0
                </h3>
                <p className="text-sm text-white/80 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* You can add testimonial cards here */}
      </div>
    </div>
  );
};

export default Testimonials;
