'use client';

import { motion } from 'framer-motion';

export default function AboutUsHero() {
  // Variants for text animation
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.25,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative bg-white py-24 font-altruist flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Floating Background Glows */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute top-10 left-10 w-28 h-28 bg-purple-200 rounded-full blur-3xl opacity-40"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        className="absolute bottom-20 right-12 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-30"
      />

      {/* Content */}
      <div className="w-full text-center relative z-10 flex flex-col gap-8 max-w-5xl px-6 md:px-12">
        {/* Animated Header */}
        <motion.h1
          className="text-3xl md:text-5xl font-semibold text-gray-900 leading-snug tracking-tight"
        >
          <motion.span
            variants={textVariant}
            initial="hidden"
            animate="visible"
            custom={0}
            className="block"
          >
            Driving Growth With
          </motion.span>
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed font-light"
        >
          At <span className="font-semibold text-purple-700">Socializzen</span>, we believe in
          transforming ideas into impactful digital experiences. Our mission is to help brands
          connect, engage, and grow with elegance and innovation.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 1,
            duration: 0.6,
            type: 'spring',
            stiffness: 120,
          }}
          className="flex flex-wrap justify-center gap-5"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 text-white text-sm md:text-base font-medium shadow-lg hover:shadow-purple-400/50 transition-all"
            aria-label="Discover more about Socializzen"
          >
            Discover More
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-xl bg-white text-gray-900 border border-gray-300 text-sm md:text-base font-medium shadow hover:shadow-md transition-all"
            aria-label="Contact Socializzen team"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* About Video Section (Responsive with animation) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
        className="mt-16 relative w-full max-w-[95%] mx-auto"
      >
        <motion.video
          src="/video/about section video.mp4"
          autoPlay
          loop
          muted
          playsInline
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover shadow-xl rounded-3xl"
        />
      </motion.div>
    </motion.section>
  );
}
