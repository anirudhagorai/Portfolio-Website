import React from 'react'
import { motion, easeOut } from 'framer-motion'
import { skills } from '../assets/assets';
import { span } from 'framer-motion/client';
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: easeOut }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-dark-100"
    >
      <div className="container px-6 mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center">
          My
          <span className="text-purple">Skills</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-16 text-center text-gray-400">
          Technologies I work with to bring ideas to life
        </p>

        <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 transition duration-300 bg-dark-300 rounded-2xl hover:translate-y-2"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="mr-6 h-9 w-9 text-purple" />
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <p className="mb-4 text-gray-400">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-dark-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills
