"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowItOperates = () => {
  useEffect(() => {
    gsap.from(".step", {
      scrollTrigger: {
        trigger: ".how-it-operates",
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#A38FC2] via-[#9F86BD] to-[#7654A0] text-white py-20">
      <div className="how-it-operates max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">How It Operates</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="step flex flex-col items-center text-center">
            <div className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold mb-4 shadow-lg">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">Safe and Swift Payment</h3>
            <p className="text-white/90 text-sm max-w-xs">
              Encryption protocols, multi-factor authentication, and regularly updating security measures to thwart potential.
            </p>
          </div>

          {/* Step 2 */}
          <div className="step flex flex-col items-center text-center">
            <div className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold mb-4 shadow-lg">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">Authenticate Your Account</h3>
            <p className="text-white/90 text-sm max-w-xs">
              Creating account to our website and use it for your required time. We always ready to give you support all the time.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step flex flex-col items-center text-center">
            <div className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold mb-4 shadow-lg">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">Get Started with Apee</h3>
            <p className="text-white/90 text-sm max-w-xs">
              Whether you're a business professional looking to optimize your workflows or a tech-savvy individual seeking simplify.
            </p>
          </div>
        </div>
{/* Divider Line */}
<div className="w-full h-px bg-white/30 my-12" />
        {/* Logos Row */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-10 opacity-90">
          {["miro", "monzo", "Trello", "SQUARED", "GONG"].map((brand, index) => (
            <span
              key={index}
              className="uppercase font-semibold tracking-wide text-white text-sm"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItOperates;
