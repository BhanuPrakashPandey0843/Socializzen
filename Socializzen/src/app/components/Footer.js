'use client';

import { motion } from 'framer-motion';
import {
  Instagram, Mail, Linkedin, Facebook, Phone, Twitter, MapPin, Send
} from 'lucide-react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const COMPANY_INFO = {
  name: 'Socializzen',
  email: 'support@socializzen.com',
  phone: '+91 98765 43210',
  location: 'Kolkata, India',
};

const SOCIAL_LINKS = [
  { icon: <Instagram size={18} />, name: "Instagram", link: 'https://instagram.com' },
  { icon: <Linkedin size={18} />, name: "LinkedIn", link: 'https://linkedin.com' },
  { icon: <Facebook size={18} />, name: "Facebook", link: 'https://facebook.com' },
  { icon: <Twitter size={18} />, name: "Twitter", link: 'https://twitter.com' },
];

const TAGS = [
  "Engagement", "Content", "Strategy", "Analytics", "Branding", "Audience", "Hashtags",
  "Posts", "Insights", "Scheduling", "Campaigns", "Influencers", "Reach", "Impressions",
  "Metrics", "Community", "Followers", "Platforms", "Trends", "Interaction", "Promotion",
  "Advertising", "Viral", "Feedback", "Monitoring", "Optimization", "Collaboration",
  "Storytelling", "HappEase", "CultElit", "Happier", "Serenity", "Culture", "Optimistic",
  "Peaceful", "Life Pulse", "Unveiled", "LinkedIn", "WhatsApp", "Gmail", "Twitter",
  "Instagram", "Socializzen"
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Please enter a valid email.');
      return;
    }

    try {
      const res = await fetch("https://sheetdb.io/api/v1/k3r7aehchgpun", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: {
            Email: email,
            Date: new Date().toISOString()
          }
        })
      });

      if (res.ok) {
        toast.success('Subscribed successfully!');
        setEmail('');
      } else {
        toast.error('Failed to subscribe.');
      }
    } catch (err) {
      toast.error('Error occurred!');
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20 md:py-28 font-sans overflow-hidden"
    >
      <Toaster position="top-right" reverseOrder={false} />

      {/* Background Shine Effect */}
      <motion.div
        className="absolute top-0 left-[-60%] w-[220%] h-full bg-white opacity-5 blur-2xl rotate-12 z-0"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 22, ease: 'easeInOut' }}
      />

      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] z-0 pointer-events-none" />

      {/* Main Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-12">

        {/* Brand Info */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">{COMPANY_INFO.name}</h1>
          <p className="text-gray-400 leading-relaxed text-base">
            Your trusted partner in building bold, data-driven social media strategies. We simplify and supercharge your digital presence.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <h2 className="text-lg font-semibold uppercase mb-5">Services</h2>
          <ul className="space-y-3 text-gray-300">
            {['Content Strategy', 'SMM', 'Campaign Management', 'Analytics & Reports'].map((item, i) => (
              <li key={i} className="hover:text-white transition-all duration-200">{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Portfolio */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <h2 className="text-lg font-semibold uppercase mb-5">Portfolio</h2>
          <ul className="space-y-3 text-gray-300">
            {['Tech Brands', 'Startups', 'Retail Clients', 'E-commerce'].map((item, i) => (
              <li key={i} className="hover:text-white transition-all duration-200">{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
          <h2 className="text-lg font-semibold uppercase mb-5">Contact</h2>
          <div className="space-y-4 text-gray-300 text-sm">
            <div className="flex items-center gap-3"><Mail size={18} /> {COMPANY_INFO.email}</div>
            <div className="flex items-center gap-3"><Phone size={18} /> {COMPANY_INFO.phone}</div>
            <div className="flex items-center gap-3"><MapPin size={18} /> {COMPANY_INFO.location}</div>
          </div>
        </motion.div>

        {/* Newsletter + Social Icons */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <h2 className="text-lg font-semibold uppercase mb-5">Newsletter</h2>
          <form onSubmit={handleNewsletterSubmit} className="relative mb-6">
            <div className="flex rounded-lg overflow-hidden bg-white/10 border border-white/20">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-white bg-transparent placeholder-gray-400 focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="px-4 bg-blue-600 hover:bg-blue-700 transition text-white flex items-center justify-center"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
          <div className="flex gap-4 flex-wrap">
            {SOCIAL_LINKS.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="rounded-full p-2 bg-white/10 hover:bg-white/20 transition"
                aria-label={item.name}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer Section */}
      <motion.div
        className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 z-10 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div>© {new Date().getFullYear()} <span className="text-white font-medium">{COMPANY_INFO.name}</span>. All rights reserved.</div>
        <motion.div
          className="mt-4 md:mt-0 text-4xl font-bold tracking-wider text-white"
          whileHover={{ scale: 1.05 }}
        >
          {COMPANY_INFO.name}
        </motion.div>
      </motion.div>

      {/* Floating Tags */}
      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-3"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.04
            }
          }
        }}
      >
        {TAGS.map((tag, i) => (
          <motion.span
            key={i}
            className={`px-3 py-1 text-xs font-semibold shadow-md rounded-md ${
              i % 3 === 0
                ? "bg-yellow-300 text-black rotate-[-6deg]"
                : i % 3 === 1
                ? "bg-pink-400 text-white rotate-[4deg]"
                : "bg-indigo-500 text-white rotate-[-3deg]"
            } hover:rotate-0 transition-transform duration-300`}
            whileHover={{ scale: 1.15 }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.footer>
  );
}
