"use client";
import { FaComments, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

// Premium serif font for a classy look
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ContactHero = () => {
  return (
    <motion.div
      className={`${playfair.className} relative flex flex-col items-center justify-center min-h-screen text-center px-6 
                 pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-purple-100`}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Decorative Background Blur */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,200,255,0.3),_transparent)]" />

      {/* Header Section */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-sm"
        variants={fadeInUp}
      >
        Socializzen – Transforming <br /> Your Digital Presence
      </motion.h1>

      <motion.p
        className="text-lg text-gray-700 max-w-2xl leading-relaxed"
        variants={fadeInUp}
      >
        We are a premium <span className="font-semibold">Digital Marketing Agency</span> helping 
        brands grow with result-driven strategies. From social media to performance marketing, 
        we craft solutions that deliver measurable success.
      </motion.p>

      {/* CTA Button */}
      <motion.div className="mt-8 flex gap-4" variants={fadeInUp}>
        <Link href="/ourwork">
          <button className="px-6 py-3 text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
            View Our Work
          </button>
        </Link>
      </motion.div>

      {/* Contact Options */}
      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl"
        variants={staggerContainer}
      >
        {/* Chat Now */}
        <motion.a
          href="https://wa.me/918910885581"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          whileHover={{ y: -5 }}
          variants={fadeInUp}
        >
          <div className="w-14 h-14 mx-auto flex items-center justify-center bg-green-100 rounded-full">
            <FaComments className="text-green-600 text-2xl" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">Chat on WhatsApp</h3>
          <p className="text-gray-600">Get instant replies from our team</p>
          <button className="mt-4 px-5 py-2 bg-green-500 text-white rounded-full text-sm font-semibold hover:bg-green-600 transition">
            Start Chat →
          </button>
        </motion.a>

        {/* Email Us */}
        <motion.a
          href="mailto:Socializzen@gmail.com"
          className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          whileHover={{ y: -5 }}
          variants={fadeInUp}
        >
          <div className="w-14 h-14 mx-auto flex items-center justify-center bg-purple-100 rounded-full">
            <FaEnvelope className="text-purple-600 text-2xl" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">Email Us</h3>
          <p className="text-gray-600">Discuss your next big project</p>
          <p className="mt-2 text-gray-900 font-semibold">
            Socializzen@gmail.com
          </p>
        </motion.a>

        {/* Call or Text Us */}
        <motion.a
          href="tel:+918910885581"
          className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          whileHover={{ y: -5 }}
          variants={fadeInUp}
        >
          <div className="w-14 h-14 mx-auto flex items-center justify-center bg-red-100 rounded-full">
            <FaPhone className="text-red-600 text-2xl" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">
            Call or Text Us
          </h3>
          <p className="text-gray-600">Let’s talk about your brand</p>
          <p className="mt-2 text-gray-900 font-semibold">+91 8910885581</p>
        </motion.a>
      </motion.div>

      {/* Footer Note */}
      <motion.p className="mt-12 text-gray-600 text-sm max-w-xl" variants={fadeInUp}>
        Our digital experts are ready to help you scale. We’re available 
        <span className="font-semibold"> Monday to Friday, 9 AM - 7 PM</span>.
      </motion.p>
    </motion.div>
  );
};

export default ContactHero;
