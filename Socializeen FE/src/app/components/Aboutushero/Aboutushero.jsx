'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from "./Socializzen logo.png"

export default function Aboutushero() {
  return (
    <section className="bg-white min-h-screen px-6 md:px-20 py-16 font-altruist">
      {/* Header Text */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-5xl font-semibold text-black leading-snug">
          EMPOWERING FUTURES
          <span className="inline-block mx-2 align-middle">
            <Image src={logo} width={40} height={40} alt="icon" />
          </span>
          THROUGH
          <br />
          <span className="text-purple-600">COMPREHENSIVE ONLINE</span> PLATFORM
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
          Founded on the Principles of Bridging Knowledge and Practice, VinEdu was born out of a
          shared belief in the power of education and innovation to shape a better future.
        </p>
        <button className="mt-6 px-6 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200">
          SCROLL TO KNOW MORE
        </button>
      </motion.div>

      {/* Cards Grid */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-orange-100 rounded-xl flex items-center justify-center h-40 text-orange-600 text-lg font-semibold"
        >
          Block Chain
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-purple-100 rounded-xl flex items-center justify-center h-40 text-purple-600 text-lg font-semibold"
        >
          Data Science
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden h-40"
        >
          <Image
            src="https://th.bing.com/th/id/R.583bbfeb87ab0fea962bc837f02df26e?rik=9TzIMpvPaIQDnA&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f5e59eefe0e4624584d852c64%2f5e59ef60483fcf20331ab604%2f64ffce954ec4a410f68d93eb%2f1694486720883%2fgiphy.gif%3fformat%3d1500w&ehk=oJ%2f8DycMDq7Y49mwFKXDW0IglbkjHInCmlzKMxwl80I%3d&risl=&pid=ImgRaw&r=0"
            alt="man"
            width={300}
            height={300}
            className="w-full h-full object-cover"
            unoptimized // required for external gif
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-purple-600 rounded-xl flex items-center justify-center h-40 text-white text-lg font-semibold"
        >
          System Design
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-100 rounded-xl flex items-center justify-center h-40"
        >
          <Image src="/images/robot.png" alt="robot" width={60} height={60} />
        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  className="rounded-xl overflow-hidden h-40"
>
  <img
    src="https://smallbusinesssurgeon.com/wp-content/uploads/2023/09/357082738710Startup_Marketing_Service.gif"
    alt="woman"
    className="w-full h-full object-cover"
  />
</motion.div>


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          className="bg-blue-100 rounded-xl flex items-center justify-center h-40 text-blue-600 text-lg font-semibold"
        >
          Web Development
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="bg-yellow-100 rounded-xl flex items-center justify-center h-40 text-yellow-600 text-lg font-semibold"
        >
          Machine Learning
        </motion.div>
      </div>
    </section>
  );
}

