"use client";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import "./Footer.css"; // custom CSS module or global CSS depending on structure

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-24 pb-12 px-6 footer-cloud">
      {/* Socializzen Heading */}
      <div className="text-center text-white text-4xl font-extrabold tracking-wide mb-10 z-10 relative">
        #Socializzen
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm relative z-10">
        {/* Left Logo & Desc */}
        <div>
          <h2 className="text-3xl font-bold text-[#ff4b2b]">
            KID<span className="text-[#6a5acd]">STAR</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Appropriately maximize 2.0 channels with reliable content. <br />
            Collaboratively disseminate.
          </p>
          <div className="flex gap-3 mt-5 text-white text-lg">
            <FaTwitter className="hover:text-[#1DA1F2] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#0077b5] cursor-pointer" />
            <FaInstagram className="hover:text-[#e1306c] cursor-pointer" />
            <FaFacebookF className="hover:text-[#3b5998] cursor-pointer" />
          </div>
        </div>

        {/* KIDSTAR Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">KIDSTAR</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Plans</li>
            <li className="hover:text-white cursor-pointer">Leadership</li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Help Centre</li>
            <li className="hover:text-white cursor-pointer">Contacts us</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Ticket</li>
            <li className="hover:text-white cursor-pointer">Parent community</li>
          </ul>
        </div>

        {/* Location Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Location</h4>
          <div className="flex items-start gap-2 text-gray-400 mb-2">
            <MdLocationOn className="mt-1 text-[#ff4b2b]" />
            <span>Mowrin plaza, Tangail.</span>
          </div>
          <div className="flex items-start gap-2 text-gray-400 mb-2">
            <MdEmail className="mt-1 text-[#ff4b2b]" />
            <span>monika@gmail.com</span>
          </div>
          <div className="flex items-start gap-2 text-gray-400 mb-4">
            <MdPhone className="mt-1 text-[#ff4b2b]" />
            <span>01365-589310</span>
          </div>
          <button className="bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300">
            Book a visit
          </button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm relative z-10">
        2023 KIDSTER. ALL rights reserved. Powered by <span className="text-white">MosCreative</span>.
      </div>
    </footer>
  );
};

export default Footer;
