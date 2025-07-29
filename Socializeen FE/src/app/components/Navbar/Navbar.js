'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import './Button.css';
import NavbarImg from './Socializzen Without Bg.png';
import {
  Home,
  Info,
  Briefcase,
  Layers,
  Users,
  Mail
} from 'lucide-react';

// ✅ Updated navItems with proper Next.js paths
const navItems = [
  { name: 'Home', path: '/', icon: <Home className="mr-2 text-[#7654A0]" /> },
  { name: 'About', path: '/about', icon: <Info className="mr-2 text-[#7654A0]" /> },
  { name: 'Our Work', path: '/ourwork', icon: <Layers className="mr-2 text-[#7654A0]" /> },
  { name: 'Services', path: '/careers', icon: <Users className="mr-2 text-[#7654A0]" /> },

];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm px-4 md:px-8 py-2"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
            <h1 className="text-2xl md:text-2xl font-bold tracking-tight text-[#7654A0] font-[Atrust]">
              Socializzen
            </h1>
          </motion.div>
        </Link>

        {/* ✅ Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-6 font-medium text-sm tracking-tight">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="relative cursor-pointer group"
            >
              <Link href={item.path} className="text-gray-800 hover:text-[#7654A0]">
                {item.name}
              </Link>
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7654A0] group-hover:w-full transition-all duration-300"
              ></motion.span>
            </motion.div>
          ))}
        </div>

        {/* ✅ Desktop "Connect Us" Button → Goes to /contact */}
        <div className="hidden md:flex justify-end">
          <Link href="/contact">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              className="button"
            >
              <span className="fold"></span>
              <div className="points_wrapper">
                {[...Array(10)].map((_, i) => (
                  <i key={i} className="point"></i>
                ))}
              </div>
              <span className="inner">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37" />
                </svg>
                Connect Us
              </span>
            </motion.button>
          </Link>
        </div>

        {/* ✅ Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(true)} className="focus:outline-none">
            <svg className="w-7 h-7 text-[#7654A0]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* ✅ Mobile Side Nav */}
            <motion.div
              key="side-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-full sm:w-[80%] bg-white z-50 px-6 py-6 flex flex-col justify-start rounded-l-3xl border-l border-[#e2d4fa] shadow-xl overflow-y-auto"
            >
              <div className="flex justify-end mb-4">
                <button onClick={() => setMenuOpen(false)} className="text-[#7654A0] hover:rotate-90 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* ✅ Mobile Logo */}
              <div className="flex justify-center mb-4">
                <Image
                  src={NavbarImg}
                  alt="Socializzen Logo"
                  width={160}
                  height={160}
                  priority
                  className="rounded-full drop-shadow-md"
                />
              </div>

              {/* ✅ Mobile Nav Items */}
              <motion.div
                className="mt-2 flex flex-col gap-4 text-lg font-semibold text-[#333]"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08 },
                  },
                }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: 40 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link href={item.path} onClick={handleLinkClick}>
                      <div className="py-3 px-4 flex items-center rounded-xl hover:bg-[#f2e9fd] transition-all shadow-sm border border-[#dad2f3]/40 bg-[#fdfbff] backdrop-blur-sm">
                        {React.cloneElement(item.icon, { size: 26 })}
                        {item.name}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* ✅ Mobile "Connect Us" Button → Goes to /contact */}
              <Link href="/contact" onClick={handleLinkClick}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="button w-full mt-8 mb-2"
                >
                  <span className="fold"></span>
                  <div className="points_wrapper">
                    {[...Array(10)].map((_, i) => (
                      <i key={i} className="point"></i>
                    ))}
                  </div>
                  <span className="inner">
                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37" />
                    </svg>
                    Connect Us
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
