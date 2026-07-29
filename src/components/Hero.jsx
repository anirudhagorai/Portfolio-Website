import React from 'react'
import { easeOut, motion } from 'framer-motion'
import {assets} from '../assets/assets.js'
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      viewport={{ once: true }}
      id="home"
      className="flex items-center min-h-screen pt-20 pb-16 bg-linear-to-r from-dark-100 via-dark-300 to-dark-100">
      <div className="container flex flex-col items-center justify-between px-10 mx-auto md:flex-row pt-10">
        {/* --- Left Side Content --- */}

        <div className="mb-10 md:w-1/2 md:mb-0">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Hi, I'm <span className="text-purple">Anirudha</span>
          </h1>
          <h2 className="mb-6 text-2xl font-semibold md:text-4xl typewriter">
            Software Developer
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            I create stunning web experiences with modern technologies and
            innovative design.
          </p>
          <div className="flex space-x-4">
            <a
              href="/Anirudha Gorai CV.pdf"
              download="Anirudha_Gorai_Resume.pdf"
              className="px-6 py-3 font-medium transition duration-300 border rounded-lg border-purple hover:bg-purple/20">
              Download CV
            </a>
          </div>
        </div>

        {/* --- Right Side Content --- */}

        <div className="flex justify-center md:w-1/2">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full opacity-70 bg-linear-to-r from-purple to-red-500">
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: easeOut,
                }}
                className="relative z-10 object-cover w-64 h-64 rounded-full md:w-80 md:h-80 animate-float"
                src={assets.profileImg}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero
