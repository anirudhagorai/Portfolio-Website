// eslint-disable-next-line no-unused-vars
import { div, nav } from 'framer-motion/client'
import React, { useState } from 'react'
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); 

  return (
    <nav className="fixed z-50 w-full px-8 py-4 shadow-lg bg-dark-100/90 backdrop-blur-sm">
      <div className="container flex items-center justify-between mx-auto">
        <div>
          <a href="#" className="text-3xl font-bold text-white">
            Ani
            <span className="text-purple">Rudha</span>
            <div className="w-4 h-4 rounded-full bg-purple"></div>
          </a>
        </div>
        <div className="hidden space-x-10 md:flex">
          <a
            href="#home"
            className="relative transition duration-300 hover:text-purple group text-white/80"
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="relative transition duration-300 hover:text-purple group text-white/80"
          >
            <span>About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="relative transition duration-300 hover:text-purple group text-white/80"
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="relative transition duration-300 hover:text-purple group text-white/80"
          >
            <span>Project</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          {/* <a
            href="#experience"
            className="relative transition duration-300 hover:text-purple group text-white/80"
          >
            <span>Experience</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a> */}
          <a
            href="#contact"
            className="relative transition duration-300 hover:text-purple group text-white/80"
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          {/* -- Mobile-Button -- */}
        </div>
        {/* Mobile Button */}
        <div className="md:hidden">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(!showMenu)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      {showMenu && (
        <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center">
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#home"
            className="relative transition duration-300 hover:text-purple group text-white/80"
          >
            <span>Home</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#about"
            className="relative transition duration-300 hover:text-purple group text-white/80"
          >
            <span>About</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#skills"
            className="relative transition duration-300 hover:text-purple group text-white/80"
          >
            <span>Skills</span>
          </a>
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#projects"
            className="relative transition duration-300 hover:text-purple group text-white/80"
          >
            <span>Project</span>
          </a>
          {/* <a
            onClick={() => setShowMenu(!showMenu)}
            href="#experience"
            className="relative transition duration-300 hover:text-purple group text-white/80"
          >
            <span>Experience</span>
          </a> */}
          <a
            onClick={() => setShowMenu(!showMenu)}
            href="#contact"
            className="relative transition duration-300 hover:text-purple group text-white/80"
          >
            <span>Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar
