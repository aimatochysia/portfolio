import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "Python", image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/python.png", color: "#4e7aa9" },
  { name: "Flask", image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/flask.png", color: "#f3f3f3" },
  { name: "C/C++", image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/cpp.png", color: "#19427c" },
  { name: "Tailwind CSS", image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/tailwind.png", color: "#62b9f3" },
  { name: "JavaScript", image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/javascript.png", color: "#F7DF1E" },
  { name: "React-JS", image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/react.png", color: "#7facc9" },
  { name: "Node-JS", image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/node.png", color: "#97bf57" },
  { name: "Express-JS", image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/express.png", color: "#ffffff" },
  { name: "Java", image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/java.png", color: "#e99d3e" },
  { name: "PostgreSQL", image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/postgresql.png", color: "#3f668d" },
  { name: "Blender 3D", image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/blender.png", color: "#db7d2d" },
];

const Skills = () => {
  return (
    <div id="skills-section" className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">Top Skills</h2>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="relative p-2 md:p-4 rounded-lg"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              color: '#ffffff',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 80%)`,
                transform: 'translate(-50%, -50%)',
                top: '50%',
                left: '50%',
                width: '200%',
                height: '200%',
                filter: 'blur(20px)',
                zIndex: 1,
                opacity: 0.3,
              }}
            />
            <div
              className="relative z-10 flex items-center space-x-2 sm:space-x-4"
              style={{ zIndex: 2 }}
            >
              <img src={skill.image} alt={skill.name} className="w-10 h-10 sm:w-16 sm:h-16 object-contain" />
              <span className="hidden sm:inline-block text-sm sm:text-lg font-medium">{skill.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
