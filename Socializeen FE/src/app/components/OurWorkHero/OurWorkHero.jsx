'use client';
import { motion } from 'framer-motion';

const images = [
  'https://wallpaperaccess.com/full/2858973.jpg',
  'https://wallpaperaccess.com/full/2859136.jpg',
  'https://wallpaperaccess.com/full/2859138.jpg',
  'https://wallpaperaccess.com/full/2858987.jpg',
  'https://wallpaperaccess.com/full/538825.jpg',
  'https://wallpaperaccess.com/full/8053155.jpg',
  'https://wallpapercave.com/wp/wp9589913.jpg',
  'https://wallpaper.dog/large/5503686.jpg',
  'https://wallpaper.dog/large/5503782.jpg',
  'https://i.etsystatic.com/14740891/r/il/ca1372/2015071909/il_300x300.2015071909_evf4.jpg',
  'https://img.freepik.com/premium-photo/amazing-wallpaper-4k-background_839182-1509.jpg',
  'https://wallpaper.dog/large/5503610.jpg',
  'https://wallpaperaccess.com/full/2859150.jpg',
  'https://cdn.wallpapersafari.com/98/83/8Mav7F.jpg',
  'https://i.pinimg.com/736x/d9/f3/90/d9f390212dab74e16716dd24cc622b37.jpg',
  'https://wallpapers.com/images/hd/tall-trees-all-best-d2c1o7sb66t45lgc.jpg',
  'https://tse3.mm.bing.net/th/id/OIP.X6sCY09Z_ZQF8AvWi2-55gHaLD?rs=1&pid=ImgDetMain&o=7&rm=3',
  'https://tse2.mm.bing.net/th/id/OIP.thpdM2vrU7vQTBKcvEZm2AHaNK?rs=1&pid=ImgDetMain&o=7&rm=3'
];

const categories = [
  'Birds', 'Animals', 'Forest', 'Abstract', 'Love',
  'Culture', 'Beach', 'Cute', 'City',
  'Food', 'Dog', 'Art', 'Nature', 'Flowers'
];

const OurWorkHero = () => {
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
          50000+ High Resolution 4K Wallpapers
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-[#9F86BD] text-white rounded-full text-lg font-semibold shadow-lg"
        >
          About Us
        </motion.button>
      </motion.div>

      {/* Wallpaper Grid with Enhanced Stair Pattern */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {images.map((img, index) => {
          const position = index % 6;
          let marginTopClass = '';

          // Enhanced stair logic for more lift on sides
          if (position === 0 || position === 5) marginTopClass = '-mt-50';     // outer
          else if (position === 1 || position === 4) marginTopClass = '-mt-30'; // mid-outer
          else marginTopClass = 'mt-0';                                        

          return (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className={`rounded-3xl overflow-hidden shadow-lg bg-gray-100 transition-all duration-300 ${marginTopClass}`}
            >
              <div 
                className="h-44 sm:h-56 md:h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
              <div className="text-center py-2 font-medium text-[#7654A0] capitalize text-sm sm:text-base md:text-lg">
                {categories[index] || 'Wallpaper'}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default OurWorkHero;
