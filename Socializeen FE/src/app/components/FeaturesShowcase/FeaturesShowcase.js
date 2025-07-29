'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChartBig,
  FileText,
  Smartphone,
  BellRing,
  Link2,
  Megaphone,
  Share2,
  ShieldCheck,
} from 'lucide-react';

const FeaturesShowcase = () => {
  return (
    <section className="relative bg-white text-black px-6 md:px-16 py-20 font-sans overflow-hidden space-y-32">
      {/* Section 1: About Socializen */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
      >
        <div>
          <p className="text-pink-600 text-sm mb-2 font-semibold uppercase tracking-wide">
            About Socializen
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Empowering Brands with Smarter Social Strategies
          </h1>
        </div>
        <div className="text-base text-gray-600 mt-2 md:mt-10 md:pl-10 leading-relaxed">
          <p>
            At <strong>Socializen</strong>, we help brands expand their digital presence with innovative content, 
            data-driven strategies, and end-to-end social media management.
          </p>
          <p className="mt-4">
            From viral campaigns to influencer marketing and reputation management, we make your brand shine across every platform.
          </p>
        </div>
      </motion.div>

      {/* Section 2: Dashboard Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12"
      >
        {/* Features */}
        <div>
          <h2 className="text-3xl font-semibold mb-8">User-Friendly Dashboard</h2>
          <ul className="space-y-6 text-gray-700 text-base">
            {[
              {
                icon: <BarChartBig className="text-indigo-600 w-6 h-6 mt-1" />,
                title: 'Real-Time Analytics',
                desc: 'Get instant performance insights and audience metrics.',
              },
              {
                icon: <FileText className="text-indigo-600 w-6 h-6 mt-1" />,
                title: 'Custom Reports',
                desc: 'View tailored reports to monitor growth trends.',
              },
              {
                icon: <Smartphone className="text-indigo-600 w-6 h-6 mt-1" />,
                title: 'Mobile Optimized',
                desc: 'Manage your campaigns from any device.',
              },
              {
                icon: <BellRing className="text-indigo-600 w-6 h-6 mt-1" />,
                title: 'Instant Notifications',
                desc: 'Get notified of key events and earnings in real time.',
              },
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-4">
                {feature.icon}
                <div>
                  <strong className="block font-medium">{feature.title}</strong>
                  <span>{feature.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* GIF */}
        <div className="flex justify-center">
          <motion.img
            src="https://static.vecteezy.com/system/resources/previews/006/470/817/original/isometric-style-illustration-about-social-media-marketing-strategy-with-smartphone-and-icon-free-vector.jpg"
            alt="Dashboard Visual"
            className="w-full max-w-md rounded-2xl shadow-xl"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </div>
      </motion.div>

      {/* Section 3: Promotion Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12"
      >
        {/* GIF or illustration can be added here if desired */}
        <div className="flex justify-center">
          <motion.img
            src="https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/66c49a0b6795c68b3555fc24_0012.gif"
            alt="Promotion Visual"
            className="w-full max-w-md rounded-2xl shadow-xl"
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </div>

        {/* Features */}
        <div>
          <h2 className="text-3xl font-semibold mb-8">Easy Promotion Tools</h2>
          <ul className="space-y-6 text-gray-700 text-base">
            {[
              {
                icon: <Link2 className="text-pink-500 w-6 h-6 mt-1" />,
                title: 'Affiliate Link Generator',
                desc: 'Create and share links across all channels easily.',
              },
              {
                icon: <Megaphone className="text-pink-500 w-6 h-6 mt-1" />,
                title: 'Marketing Materials',
                desc: 'Access headlines, images, creatives and more.',
              },
              {
                icon: <Share2 className="text-pink-500 w-6 h-6 mt-1" />,
                title: 'Multi-Platform Promotion',
                desc: 'Distribute content on YouTube, Twitter, Telegram etc.',
              },
              {
                icon: <ShieldCheck className="text-pink-500 w-6 h-6 mt-1" />,
                title: 'Influencer Support',
                desc: 'Get assistance for acquisition and outreach strategies.',
              },
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-4">
                {feature.icon}
                <div>
                  <strong className="block font-medium">{feature.title}</strong>
                  <span>{feature.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesShowcase;
