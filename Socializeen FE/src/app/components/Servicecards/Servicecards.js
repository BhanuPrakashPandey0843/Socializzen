"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cards = [
  {
    id: 1,
    img: "https://cdni.iconscout.com/illustration/premium/thumb/digital-marketing-illustration-download-in-svg-png-gif-file-formats--computer-office-design-development-illustrations-3181511.png",
    alt: "Invoice Payments",
    title: "INVOICE PAYMENTS, SIMPLIFIED",
    desc: "From cash to credit—make secure payments to freelancers, vendors, or contractors.",
    bg: "from-yellow-200 to-yellow-200 text-blue-900",
  },
  {
    id: 2,
    img: "https://digitaldock.com.au/wp-content/uploads/2020/10/DIgital-Marketing.png",
    alt: "Transfer Costs",
    title: "0% TRANSFER COSTS",
    desc: "Transfer money with zero hidden fees—ever. Save more on every transaction and keep more of what matters.",
    bg: "from-blue-300 to-blue-400 text-blue-900",
  },
];

const ServiceCard = ({ img, alt, title, desc, bg }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.05, rotate: 1 }}
    whileTap={{ scale: 0.97 }}
    className={`rounded-2xl bg-gradient-to-br ${bg} shadow-xl p-6 flex flex-col items-center text-center transition-all`}
  >
    <Image
      src={img}
      alt={alt}
      width={200}
      height={200}
      className="rounded-lg drop-shadow-lg"
    />
    <h2 className="text-2xl font-bold mt-4">{title}</h2>
    <p className="mt-2 text-lg opacity-90">{desc}</p>
  </motion.div>
);

const Servicecards = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 space-y-10">
      {/* Grid Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {cards.map((card) => (
          <ServiceCard key={card.id} {...card} />
        ))}
      </motion.div>

      {/* Premium Full Width Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="show"
        whileHover={{ scale: 1.03 }}
        className="rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 shadow-2xl p-10 flex flex-col items-center text-center text-white"
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
          alt="Premium Services"
          width={220}
          height={220}
          className="rounded-lg drop-shadow-2xl"
        />
        <h2 className="text-3xl md:text-4xl font-extrabold mt-6">
          PREMIUM DIGITAL SOLUTIONS
        </h2>
        <p className="text-lg md:text-xl mt-4 max-w-2xl opacity-95 leading-relaxed">
          Unlock powerful marketing, branding, and software solutions designed to
          grow your business with innovative strategies and seamless execution.
        </p>
      </motion.div>
    </div>
  );
};

export default Servicecards;
