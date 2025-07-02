"use client";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

// Import your custom components (if they exist)
import WaveDivider from "./WaveDivider"; // Adjust path as needed
import WaveDividerbottom from "./WaveDividerbottom"; // Adjust path as needed

const testimonials = [
  {
    name: "Sajib",
    title: "Designation",
    image: "https://wallpaperaccess.com/full/2562964.jpg",
    rating: 5,
    text: "Dynamically expedite sticky user for world-class services. Interactively expedite resource sucking services through standards compliant product.",
  },
  {
    name: "Sajib",
    title: "Designation",
    image: "https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    rating: 5,
    text: "Intrinsic pontificstrategic e-markets via user-centric web services. Collaboratively streamline competitive content through customized channels.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-purple-700 text-white overflow-hidden">
      <WaveDivider />

      <div className="max-w-6xl mx-auto px-4 py-16 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What students are saying
        </h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-10 text-sm md:text-base">
          Synergistically optimize an expanded array of web-readiness without innovative technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white text-black p-6 rounded-lg shadow-lg text-left"
            >
              <FaQuoteLeft className="text-orange-500 text-3xl mb-4" />
              <p className="mb-6 text-sm text-gray-700">{t.text}</p>
              <div className="flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover border border-gray-300"
                />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-gray-500 text-xs">{t.title}</p>
                </div>
              </div>
              <div className="mt-4 flex text-yellow-500">
                {Array(t.rating)
                  .fill(0)
                  .map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <WaveDividerbottom />
    </section>
  );
}
