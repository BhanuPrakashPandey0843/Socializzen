"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeServiceBanner() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".home-banner",
          start: "top 85%",
        },
      });

      tl.from(".fade-in", {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
      }).from(
        ".phone-mockup img",
        {
          opacity: 0,
          x: 60,
          rotate: 12,
          scale: 0.95,
          duration: 1.2,
          ease: "back.out(1.4)",
          stagger: 0.2,
        },
        "-=0.8"
      );

      gsap.to(".phone-mockup img", {
        y: -8,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".glow-overlay", {
        scale: 1.03,
        opacity: 0.4,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white px-4 py-10 sm:px-6 md:py-16">
      <section className="home-banner relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#A38FC2] via-[#9F86BD] to-[#7654A0] px-4 sm:px-6 lg:px-12 py-10 md:py-16 text-white overflow-hidden rounded-3xl max-w-7xl mx-auto shadow-2xl transition-all duration-700 ease-in-out">

        {/* Left Content */}
        <div className="fade-in w-full max-w-xl text-center md:text-left space-y-6 z-10 will-change-transform">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            One app for <span className="text-[#E3D4F3]">fast, trusted</span><br />
            home service booking
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#f0eaff]">
            Book cleaning, repairs, or beauty services. Track, get reminders, and make secure payments in a seamless app.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-10 sm:h-11 hover:scale-110 hover:drop-shadow-xl transition-transform duration-300"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-10 sm:h-11 hover:scale-110 hover:drop-shadow-xl transition-transform duration-300"
            />
          </div>
          <br />
        </div>

        {/* Phone Mockups */}
        <div className="phone-mockup relative mt-14 md:mt-0 flex gap-4 md:pr-10 h-[280px] sm:h-[320px] md:h-[420px] z-10 will-change-transform">
          <img
            src="https://www.pngmart.com/files/23/Iphone-Transparent-PNG-Frame-PNG-Pic.png"
            alt="Phone 1"
            className="h-full object-contain self-end rounded-2xl shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-500"
            style={{
              marginBottom: "-100px",
              transform: "rotate(-10deg)",
              willChange: "transform",
            }}
          />
          <img
            src="https://www.pngmart.com/files/23/Iphone-Transparent-PNG-Frame-PNG-Pic.png"
            alt="Phone 2"
            className="h-full object-contain self-start rotate-180 rounded-2xl shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-500"
            style={{
              marginTop: "-90px",
              transform: "rotate(10deg)",
              willChange: "transform",
            }}
          />
        </div>

        {/* Glow Effect */}
        <div className="absolute top-0 left-0 w-full h-full glow-overlay bg-gradient-to-br from-transparent via-white/10 to-white/5 rounded-[50px] blur-2xl opacity-50 -z-10 pointer-events-none will-change-transform" />
      </section>
    </div>
  );
}

