"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#A38FC2] via-[#9F86BD] to-[#7654A0] py-12 px-4 md:px-12 flex justify-center items-center">
      <motion.div
        className="max-w-7xl w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* LEFT SIDE - FORM */}
        <motion.div
          className="p-8 md:p-12 flex flex-col justify-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have Questions? <br /> We’re Just a Message Away!
          </h2>
          <p className="text-white/80 mb-8 text-sm md:text-base">
            Fill out the form below, and one of our team members will get back to you shortly.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#9F86BD] transition"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#9F86BD] transition"
              />
            </div>

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#9F86BD] transition"
            />
            <input
              type="tel"
              placeholder="+91 9876543210"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#9F86BD] transition"
            />
            <select className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#9F86BD] transition">
              <option className="text-black">Choose Message Subject</option>
              <option className="text-black">General Inquiry</option>
              <option className="text-black">Support</option>
              <option className="text-black">Partnership</option>
            </select>
            <textarea
              rows="4"
              placeholder="Leave us a message..."
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#9F86BD] transition"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 bg-gradient-to-r from-[#9F86BD] to-[#7654A0] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              Send Message →
            </motion.button>
          </form>
        </motion.div>

        {/* RIGHT SIDE - IMAGE + CONTACT INFO */}
        <motion.div
          className="relative bg-[#9F86BD]/10 flex flex-col justify-between"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {/* IMAGE */}
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/your-image.jpg" // Replace with your actual image
              alt="Contact"
              fill
              className="object-cover"
            />
          </div>

          {/* CONTACT DETAILS */}
          <div className="p-8 space-y-4">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Our experts will always help you
            </h3>

            <div className="flex items-center gap-3 text-white">
              <Mail className="w-6 h-6 text-white/80" />
              <span>support@thrilliz.com</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Phone className="w-6 h-6 text-white/80" />
              <span>+1 (800) 555-1234</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <MapPin className="w-6 h-6 text-white/80" />
              <span>125 Adventure Lane, Suite 100, Boulder, CO 80301</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Clock className="w-6 h-6 text-white/80" />
              <span>Mon-Fri: 9:00 AM - 6:00 PM (PST)</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
