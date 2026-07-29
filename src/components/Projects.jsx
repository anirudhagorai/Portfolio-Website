import React, {useState}  from 'react'
import { easeOut, motion } from 'framer-motion'
import { projects } from "../assets/assets";
import { FaArrowRight } from 'react-icons/fa6';
import ProjectCard from './ProjectCard'
const INITIAL_COUNT = 3;
const Projects = () => {

  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      viewport={{ once: true }}
      id="projects"
      className="py-20 bg-dark-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My
          <span className="text-purple">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A selection of my work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Project Card */}
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {projects.length > INITIAL_COUNT && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300">
              <span>{showAll ? "Show Less" : "View More Projects"}</span>
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  ); 
}

export default Projects
