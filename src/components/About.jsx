import React from 'react'
import { easeOut, motion } from 'framer-motion'
import { aboutInfo, assets } from "../assets/assets.js";
import { div } from 'framer-motion/client';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container px-6 mx-0">
        <h2 className="mb-4 text-3xl font-bold text-center">
          About
          <span className="text-purple">Me</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-4 text-center text-gray-400">
          Get to know more about my background and passion
        </p>

        {/* Image + My journey */}
        <div className="flex flex-col items-center gap-5 md:flex-row">
          {/* image */}
          <div className="ml-20 overflow-hidden md:w-1/2 rounded-2xl">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: easeOut }}
              viewport={{ once: false, amount: 0.2 }}
              className="object-cover h-150 w-120"
              src={assets.profileImg1}
              alt="profileImg1"
            />
          </div>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: easeOut }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2 mr-5 py-5"
          >
            <div className="p-10 rounded-2xl">
              <h3 className="mb-6 text-2xl font-semibold">My Journey</h3>
              <p className="text-gray-300 mb-4">
                My journey into technology started with curiosity about how
                software and applications work. As a student, I began learning
                programming and gradually developed an interest in building
                real-world projects.
              </p>
              <p className="text-gray-300 mb-6">
                I started exploring languages like Python and basic web
                development through self-learning and online resources. During
                this process, I worked on projects such as an Online Exam System
                and other mini applications, which helped me understand
                problem-solving and practical development.
              </p>
              <p className="text-gray-300 mb-6">
                Although I am a fresher, I am continuously improving my skills
                by practicing coding, learning new technologies, and building
                projects. My goal is to become a skilled software developer and
                contribute to real-world innovative solutions.
              </p>

              {/* Cards */}

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                  aboutInfo.map((data, index) => (
                    <div key={index} className='bg-dark-300 rounded-2xl p-4 transition-transform duration-300 hover:translate-y-2 cursor-pointer'>
                      <div className='text-purple mb-4 text-3xl'>
                        <data.icon />
                      </div>
                      <h3 className='text-xl font-semibold mb-2'>{data.title}</h3>
                      <p className='text-gray-300'>{data.description}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default About
