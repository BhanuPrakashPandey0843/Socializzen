'use client';
import { useState } from "react";
import { motion } from "framer-motion";

const shortsLinks = [
  "https://www.youtube.com/shorts/RJSLV2fb3hI",
  "https://www.youtube.com/shorts/MJmjNrvYEPo",
  "https://www.youtube.com/shorts/0lAiswBm2Ec",
  "https://www.youtube.com/shorts/xmctxBUux2c",
  "https://www.youtube.com/shorts/OtL9Qelqq6A",
  "https://www.youtube.com/shorts/I7fZbbYj5dQ",
  "https://www.youtube.com/shorts/N8djkUJGH3k",
  "https://www.youtube.com/shorts/JmZZd_jvr6w",
  "https://www.youtube.com/shorts/JjsaKL34RUY",
  "https://www.youtube.com/shorts/FHp5GGOIyzM",
  "https://www.youtube.com/shorts/Ef4XA7D4bJM",
  "https://www.youtube.com/shorts/qiQ3PGPjysI",
  "https://www.youtube.com/shorts/k71jcGmzEK4",
  "https://www.youtube.com/shorts/qqdRvVQbl9s",
  "https://www.youtube.com/shorts/FajOX8-BaJA",
  "https://www.youtube.com/shorts/3jA9itJ1q7c",
  "https://www.youtube.com/shorts/O1M_MvaJ2EE",
  "https://www.youtube.com/shorts/AkOLLK8wKUg",
  "https://www.youtube.com/shorts/XpQiTdmGcOw",
  "https://www.youtube.com/shorts/5hrGV6Xjvqk",
];

// helper to convert Shorts link → embed url
const toEmbedUrl = (url) => {
  const id = url.split("/shorts/")[1];
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
};

export default function OurVideos() {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 text-black px-6 md:px-16 py-24 font-sans overflow-hidden">
      
      {/* --- Intro Section --- */}
      <motion.div 
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10 items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <p className="text-gray-500 text-sm tracking-wide uppercase mb-3">Our Shorts</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Engaging <span style={{ color: "#7654A0" }}>YouTube Shorts</span>
          </h1>
        </div>
        <motion.div 
          className="text-base text-gray-600 md:pl-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            Explore our curated YouTube Shorts — snackable, impactful content
            that grabs attention and delivers value in under 60 seconds.
          </p>
        </motion.div>
      </motion.div>

      {/* --- Film Strip Background --- */}
      <div className="absolute top-1/2 left-0 right-0 h-32 bg-[linear-gradient(to_right,#000_10px,transparent_10px)] bg-[length:40px_40px] opacity-5 animate-filmstrip"></div>

      {/* --- Shorts Reel (Scrolling Effect) --- */}
      <motion.div
        className="flex gap-8 mt-20 w-max mx-auto"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {shortsLinks.concat(shortsLinks).slice(0, visibleCount * 2).map((url, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-3 w-[280px] group"
            whileHover={{ scale: 1.05, y: -8 }}
          >
            {/* Video Card */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/70 to-gray-800/40 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/10 group-hover:border-purple-400/40">
              <iframe
                src={toEmbedUrl(url)}
                title={`short-${index}`}
                width="100%"
                height="230"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full rounded-2xl"
              ></iframe>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-purple-600/30 via-transparent to-transparent"></div>
            </div>

            {/* Caption */}
            <p className="text-center text-gray-500 text-sm font-medium group-hover:text-purple-400 transition">
              Short #{index + 1}
            </p>
          </motion.div>
        ))}
      </motion.div>


      
    </section>
  );
}
