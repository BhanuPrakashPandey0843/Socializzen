'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white font-semibold text-lg flex items-center space-x-2">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="2" />
            <path d="M12 6v6l4 2" strokeWidth="2" />
          </svg>
          <span>Socializzen</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-white hover:text-yellow-300 transition">Home</Link>
          <Link href="/about" className="text-white hover:text-yellow-300 transition">About</Link>
          <Link href="/curriculum" className="text-white hover:text-yellow-300 transition">Curriculum</Link>
          <Link href="/enrollment" className="text-white hover:text-yellow-300 transition">Enrollment</Link>
          <Link href="/contact" className="text-white hover:text-yellow-300 transition">Contact</Link>
          <a href="tel:4407795671" className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 transition">
            8910885581
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-purple-700 px-4 pb-4 flex flex-col space-y-3">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/about" className="text-white">About</Link>
          <Link href="/curriculum" className="text-white">Curriculum</Link>
          <Link href="/enrollment" className="text-white">Enrollment</Link>
          <Link href="/contact" className="text-white">Contact</Link>
          <a href="tel:4407795671" className="text-white font-semibold">440-779-5671</a>
        </div>
      )}
    </nav>
  );
}
