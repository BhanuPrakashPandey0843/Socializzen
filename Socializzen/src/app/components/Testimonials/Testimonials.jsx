"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const statRefs = useRef([]);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const testimonialRefs = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    // Animate section header
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });

    // Animate stat counters
    statRefs.current.forEach((el) => {
      const raw = el.getAttribute("data-value");
      const suffix = raw.match(/[^\d]/g)?.join("") || "";
      const numericValue = parseInt(raw.replace(/[^\d]/g, ""));

      const obj = { val: 0 };
      gsap.to(obj, {
        val: numericValue,
        duration: 2.5,
        ease: "bounce.out",
        onUpdate: () => {
          el.textContent = `${Math.floor(obj.val).toLocaleString()}${suffix}`;
        },
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
        },
      });
    });

    // Animate testimonials on scroll
    gsap.from(testimonialRefs.current, {
      opacity: 0,
      scale: 0.95,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: testimonialRefs.current[0],
        start: "top 85%",
      },
    });

    // Infinite scrolling rows
    const animateInfiniteScroll = (rowRef, direction = "left") => {
      const row = rowRef.current;
      const width = row.scrollWidth;

      gsap.fromTo(
        row,
        { x: direction === "left" ? 0 : -width },
        {
          x: direction === "left" ? -width : 0,
          duration: 50,
          ease: "linear",
          repeat: -1,
        }
      );
    };

    animateInfiniteScroll(row1Ref, "left");
    animateInfiniteScroll(row2Ref, "right");
  }, []);

  const stats = [
    { value: "200K", label: "Feedback" },
    { value: "500+", label: "Workers" },
    { value: "70+", label: "Contributors" },
  ];

  const testimonials = [
    {
      img: "https://i.pravatar.cc/100?img=11",
      name: "Aarav Mehta",
      quote: "Socializzen skyrocketed our Instagram reach in just a few weeks!",
    },
    {
      img: "https://i.pravatar.cc/100?img=12",
      name: "Sneha Kapoor",
      quote: "Super professional team — our brand visibility improved dramatically!",
    },
    {
      img: "https://i.pravatar.cc/100?img=13",
      name: "Rohan Verma",
      quote: "Their campaign strategy was spot on. ROI doubled within a month.",
    },
    {
      img: "https://i.pravatar.cc/100?img=14",
      name: "Ananya Iyer",
      quote: "Engagement rates have never been this high. Thanks, Socializzen!",
    },
    {
      img: "https://i.pravatar.cc/100?img=15",
      name: "Vikram Malhotra",
      quote: "Highly responsive and creative team. They understand trends well.",
    },
    {
      img: "https://i.pravatar.cc/100?img=16",
      name: "Neha Sharma",
      quote: "Our reels went viral! Socializzen knows what works on social.",
    },
    {
      img: "https://i.pravatar.cc/100?img=17",
      name: "Karan Desai",
      quote: "We saw 300% growth in followers within 60 days. Incredible!",
    },
    {
      img: "https://i.pravatar.cc/100?img=18",
      name: "Ishita Reddy",
      quote: "Brilliant at storytelling and brand positioning. Worth every penny!",
    },
  ];

  const repeatedTestimonials = [...testimonials, ...testimonials];
  const firstRow = repeatedTestimonials.slice(0, repeatedTestimonials.length / 2);
  const secondRow = repeatedTestimonials.slice(repeatedTestimonials.length / 2);

  return (
    <div className="relative overflow-hidden py-20 bg-[#f8f9fc]">
     <div className="absolute top-0 left-0 w-full h-[65%] sm:h-1/2 bg-gradient-to-r from-[#A38FC2] via-[#9F86BD] to-[#7654A0] z-0" />
<div className="absolute bottom-0 left-0 w-full h-[45%] sm:h-1/2 bg-white z-0" />

      <div className="relative z-10 max-w-7xl mx-auto testimonials-wrapper">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-10 px-4 sm:px-6 md:px-10 lg:px-16"
          ref={headerRef}
        >
          <div className="md:w-1/2 text-left">
            <p className="text-lg font-medium mb-2">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-snug text-white">
              What Our Clients Say!
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
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

        {/* Testimonial Rows */}
        <div className="flex flex-col space-y-12 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
          {/* Row 1 */}
          <div className="flex space-x-6 w-max min-w-full animate-marquee" ref={row1Ref}>
            {firstRow.map((t, i) => (
              <div
                key={i}
                ref={(el) => (testimonialRefs.current[i] = el)}
                className="testimonial-card min-w-[260px] sm:min-w-[300px] max-w-xs bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full border object-cover"
                  />
                  <div className="ml-3">
                    <h6 className="text-gray-800 font-semibold">{t.name}</h6>
                    <p className="text-xs text-gray-500">Client</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  <span className="text-lg font-bold text-gray-400 mr-1">"</span>
                  {t.quote}
                  <span className="text-lg font-bold text-gray-400 ml-1">"</span>
                </p>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex space-x-6 w-max min-w-full items-center animate-marquee-reverse" ref={row2Ref}>
            {secondRow.map((t, i) => (
              <div
                key={i}
                ref={(el) => (testimonialRefs.current[firstRow.length + i] = el)}
                className="testimonial-card min-w-[260px] sm:min-w-[300px] max-w-xs bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full border object-cover"
                  />
                  <div className="ml-3">
                    <h6 className="text-gray-800 font-semibold">{t.name}</h6>
                    <p className="text-xs text-gray-500">Client</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  <span className="text-lg font-bold text-gray-400 mr-1">"</span>
                  {t.quote}
                  <span className="text-lg font-bold text-gray-400 ml-1">"</span>
                </p>
              </div>
            ))}

            {/* Lottie animation with pulse effect */}
            <div className="min-w-[260px] sm:min-w-[300px] max-w-xs flex justify-center items-center bg-transparent animate-pulse-slow">
              <div className="w-48 h-48 sm:w-38 sm:h-42">
                <DotLottieReact
                  src="https://lottie.host/207e715f-3a90-4f7f-af81-27420a843618/SocxsyARqW.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

