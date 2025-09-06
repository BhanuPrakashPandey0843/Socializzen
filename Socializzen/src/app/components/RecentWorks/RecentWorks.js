"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

// ✅ Import images from same folder
import five from "./three.jpg";
import four from "./four.jpg";
import one from "./one.jpg";
import seven from "./seven.jpg";
import six from "./six.jpg";
import two from "./two.jpg";
import three from "./three.jpg"
import Socializzen from "./Socializzen.jpg"
const works = [five, four, one, seven, six, two, three , Socializzen];

const RecentWorks = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        // Scroll right → left
        await controls.start({
          x: "-50%",
          transition: { duration: 12, ease: "linear" },
        });
        // Scroll left → right
        await controls.start({
          x: "0%",
          transition: { duration: 12, ease: "linear" },
        });
      }
    };
    sequence();
  }, [controls]);

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="font-[Bebas Neue] uppercase tracking-wide text-3xl md:text-4xl text-gray-900">
          Recent Works
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
          A glimpse of the creative{" "}
          <span className="font-semibold">logos & identities</span> we’ve
          crafted for our clients at{" "}
          <span className="text-black font-bold">Socializzem</span>.
        </p>
      </div>

      {/* Logo Scroller */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10"
          animate={controls}
          initial={{ x: 0 }}
        >
          {/* Duplicate images for smooth loop */}
          {[...works, ...works].map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 h-40 md:w-48 md:h-48 rounded-xl bg-white shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              <Image
                src={src}
                alt={`Recent work ${i + 1}`}
                fill
                className="object-contain p-6"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RecentWorks;
