'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import local images
import one from "./work/one.png";
import two from "./work/two.jpg";
import three from "./work/three.jpg";
import four from "./work/four.jpg";
import five from "./work/five.jpg";
import six from "./work/six.jpg";
import seven from "./work/seven.jpg";
import eight from "./work/eight.jpg";
import ten from "./work/ten.jpg";
import eleven from "./work/eleven.jpg";
import muscle from "./work/muscle_studio.jpg";
import pratik from "./work/pratik_restaurant.jpg";
import wedding from "./work/ppf_wedding.jpg";
import ppf from "./work/PPF_20250421_152935_0000.jpg";
import rainbow from "./work/rainbow_watermelon.jpg";
import hiring from "./work/we_are_hiring.png";

// Array with both local and remote images
const images = [
  one, two, three, four, five, six, seven, eight,
  ten, eleven, muscle, pratik, wedding, ppf, rainbow, hiring,

  // remote ones
  'https://tse3.mm.bing.net/th/id/OIP.X6sCY09Z_ZQF8AvWi2-55gHaLD?rs=1&pid=ImgDetMain&o=7&rm=3',
  'https://tse2.mm.bing.net/th/id/OIP.thpdM2vrU7vQTBKcvEZm2AHaNK?rs=1&pid=ImgDetMain&o=7&rm=3'
];

const categories = [
  'Gym', 'Animals', 'Drink', 'Abstract', 'Love',
  'Culture', 'Wedding', 'Food', 'City',
  'Food', 'Dog', 'Art', 'Nature', 'Flowers'
];

const OurWorkHero = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Helper to resolve image path
  const getImageSrc = (img) => (typeof img === "string" ? img : img.src);

  return (
    <div className="bg-white py-12 md:py-20 px-4 md:px-12 lg:px-20 min-h-screen">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-serif">
          Our <span className="text-[#7654A0]">Work</span>
        </h1>
        <p className="mt-4 text-[#A38FC2] font-medium">
          Some of our sample work.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-[#9F86BD] text-white rounded-full text-lg font-semibold shadow-lg"
        >
          About Us
        </motion.button>
      </motion.div>

      {/* Wallpaper Grid */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {images.map((img, index) => {
          const position = index % 6;
          let marginTopClass = '';

          if (position === 0 || position === 5) marginTopClass = '-mt-50';
          else if (position === 1 || position === 4) marginTopClass = '-mt-30';
          else marginTopClass = 'mt-0';

          return (
            <motion.div 
              key={index}
              className={`rounded-3xl overflow-hidden shadow-lg bg-gray-100 cursor-pointer transition-all duration-300 ${marginTopClass}`}
              onClick={() => setSelectedImage(img)}
            >
              <div 
                className="h-44 sm:h-56 md:h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${getImageSrc(img)})` }}
              />
              <div className="text-center py-2 font-medium text-[#7654A0] capitalize text-sm sm:text-base md:text-lg">
                {categories[index] || 'Wallpaper'}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img 
              src={getImageSrc(selectedImage)} 
              alt="Wallpaper" 
              className="max-h-[90%] max-w-[90%] rounded-xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurWorkHero;
