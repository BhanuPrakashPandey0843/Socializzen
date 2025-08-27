"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const brands = ["miro", "monzo", "Trello", "SQUARED", "GONG"];

const HowItOperates = () => {
  const stepsRef = useRef(null);
  const logosRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh(); // ensures accuracy on reload

      gsap.from(".step-card", {
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
      });

      gsap.from(".brand-logo", {
        scrollTrigger: {
          trigger: logosRef.current,
          start: "top 90%",
          once: true,
        },
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-[#A38FC2] via-[#9F86BD] to-[#7654A0] text-white py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 leading-snug">
          How It Operates
        </h2>

        {/* Steps Section */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12"
          ref={stepsRef}
        >
          {[
            {
              title: "Safe and Swift Payment",
              description:
                "Encryption protocols, multi-factor authentication, and regularly updating security measures to thwart threats.",
            },
            {
              title: "Authenticate Your Account",
              description:
                "Create your account to get started. Our support team is always available to assist you.",
            },
            {
              title: "Get Started with Apee",
              description:
                "Ideal for professionals and tech-savvy users to simplify and streamline their workflow.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="step-card flex flex-col items-center text-center px-4"
            >
              <div className="bg-gradient-to-br from-white to-gray-200 text-black w-14 h-14 flex items-center justify-center rounded-full text-lg font-bold shadow-lg mb-6">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-white/85 text-sm max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/30 my-16" />

        {/* Logos Carousel */}
        {/* Logos Carousel */}
<div className="w-full mt-10" ref={logosRef}>
  <div className="relative w-full py-4 overflow-hidden"> {/* FIXED: Added py-4 and overflow-hidden here */}
    <div className="whitespace-nowrap flex animate-scroll gap-14 items-center justify-start px-4">
      {Array(4)
        .fill(brands)
        .flat()
        .map((brand, index) => (
          <motion.span
            key={index}
            className="brand-logo uppercase font-semibold tracking-wider text-white/90 text-xl md:text-2xl hover:scale-110 transition-transform duration-300 cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            {brand}
          </motion.span>
        ))}
    </div>
  </div>
</div>

         
      </div>
    </section>
  );
};

export default HowItOperates;
