"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Hero.css";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowChat((prev) => !prev);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          type="button"
          className="button rounded-full hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out"
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
        >
          <span className="fold"></span>
          <div className="points_wrapper">
            {[...Array(10)].map((_, i) => (
              <i className="point" key={i}></i>
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
            Top
          </span>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-28 right-6 w-[320px] sm:w-[360px] h-[440px] rounded-3xl shadow-2xl bg-white z-50 border border-gray-200 p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-lg text-purple-700">💬 AI Assistant</h2>
              <button
                onClick={() => setShowChat(false)}
                className="text-sm text-gray-500 hover:text-red-500"
              >
                Close ✖
              </button>
            </div>

            <div className="h-[300px] overflow-y-auto bg-gray-50 p-3 rounded-lg text-sm text-gray-700 custom-scrollbar">
              <div className="mb-2">👋 Hello! How can I assist you today?</div>
              <div className="text-xs italic text-gray-400 animate-pulse mt-4">AI is typing...</div>
            </div>

            <input
              className="w-full mt-3 p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              type="text"
              placeholder="Type your message..."
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GoToTop;
