'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import './Hero.css';

const images = [
  'https://img.freepik.com/premium-photo/happy-beautiful-young-girl-orange-background_1154721-184.jpg',
  'https://static.vecteezy.com/system/resources/previews/025/039/370/non_2x/woman-fashion-happy-beautiful-style-studio-young-yellow-trendy-emotion-stylish-photo.jpg',
  'https://tse1.explicit.bing.net/th/id/OIP.TV9q1YPZwH25DeQXqz4jOgHaE8?w=1000&h=667&rs=1&pid=ImgDetMain&o=7&rm=3',
  'https://tse1.explicit.bing.net/th/id/OIP.V1RqF-BkNBu1Oe0WKhLhZAHaLI?rs=1&pid=ImgDetMain&o=7&rm=3'
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.2 }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  }
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="text-center px-4 md:px-8"
      >
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-semibold leading-snug text-gray-800"
        >
          <motion.span variants={textVariants}>Welcome to </motion.span>
          <motion.span
            variants={textVariants}
            animate={{ color: ['#000', '#7C3AED', '#000'] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="font-bold"
          >
            Socializzen
          </motion.span>
          <br />
          <motion.span variants={textVariants}>
           From Startups to Standouts, We make it happen.
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={textVariants}
          className="text-gray-600 text-sm md:text-base mt-3 max-w-xl mx-auto"
        >
          Lights. Camera. Engagement! 
          <br />
          We craft blockbuster campaigns that turn your brand into a superstar 
        </motion.p>

        {/* Button */}
        <motion.div
          variants={textVariants}
          className="mt-8 flex justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <button type="button" className="button">
            <span className="fold"></span>
            <div className="points_wrapper">
              {Array(10).fill().map((_, i) => (
                <i key={i} className="point"></i>
              ))}
            </div>
            <span className="inner">
              <svg
                className="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              >
                <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37" />
              </svg>
              Let’s Go Viral 
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Sparkles */}
      <motion.div
        className="absolute -top-10 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-0 right-20 w-32 h-32 bg-pink-100 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />

      {/* Floating Image Carousel */}
      <div className="flex justify-center gap-4 mt-14 px-4 flex-wrap md:flex-nowrap">
        {images.map((src, i) => (
          <motion.div
            key={i}
            variants={floatVariants}
            animate="animate"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            className="w-44 h-64 rounded-full overflow-hidden shadow-xl border border-gray-200"
          >
            <Image
              src={src}
              alt={`hero-${i}`}
              width={300}
              height={400}
              className="object-cover w-full h-full"
              unoptimized
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
