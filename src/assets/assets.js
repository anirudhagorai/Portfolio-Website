import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import profileImg1 from '../assets/profile1.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
  profileImg,
  profileImg1,
}


export const aboutInfo =
  [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: "Programming Languages",
    icon: FaCode,
    description:
      "Building applications using Python, Java, and C with strong programming fundamentals and problem-solving skills.",
    tags: ["Python", "C", "Java"],
  },
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["React", "JS", "BootStrap"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express", "Django"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub"],
  },
];



export const projects = [
  {
    title: "Weather Web Application",
    description:
      "A simple and responsive Weather Web Application built using Flask that provides real-time weather information for any city using a public weather API.",
    image: projectImg4,
    tech: [
      "Python",
      "Flask",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Weather API (OpenWeatherMap or similar)",
    ],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "https://github.com/anirudhagorai/Weather-Web-Application.git",
  },
  {
    title: "Namaste Assistant",
    description:
      "A Python-based desktop voice assistant with GUI that will run on offline/online mode.",
    image: projectImg5,
    tech: ["Python", "pyttsx3", "Tkinter", "PyInstaller", "Inno Setup"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "#",
    code: "https://github.com/anirudhagorai/Namaste-Assistant.git",
  },
  {
    title: "Online Examination and Education System (OEES) — 'EduExam'",
    description:
      "A web based Online Examination and Education platform with real time mock tests, online exams, automated grading, result tracking, course management, and student/teacher management.",
    image: projectImg6,
    tech: ["Python", "Django", "HTML", "CSS", "JS", "MySQL", "AJAX"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "https://github.com/anirudhagorai/Online-Examination-Education-System-OEES.git",
  },
  {
    title: "Mine-Detection-Software-using-YOLOv8-model",
    description:
      "A computer vision-based project that uses YOLOv8 for detecting landmines from images/video. The model is trained on a custom dataset to identify mine-like objects and perform real-time detection and also give a real-time location to all objects.",
    image: projectImg6,
    tech: [
      "Python",
      "YOLOv8",
      "Anaconda",
      "Tkinter",
      "PyInstaller",
      "Inno Setup",
    ],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "https://github.com/anirudhagorai/Mine-Detection-Software-using-YOLOv8-model.git",
  },
  // {
  //   title: "AI Image Generator",
  //   description:
  //     "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
  //   image: projectImg6,
  //   tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
  //   icons: [FaRobot, FaReact, FaCloud],
  //   demo: "#",
  //   code: "#",
  // },
];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
