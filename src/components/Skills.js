import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "Python", proficiency: 95, image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/python.png", color: "#4e7aa9" },
  { name: "Flask", proficiency: 85, image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/flask.png", color: "#f3f3f3" },
  { name: "C/C++", proficiency: 80, image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/cpp.png", color: "#19427c" },
  { name: "Tailwind CSS", proficiency: 75, image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/tailwind.png", color: "#62b9f3" },
  { name: "JavaScript", proficiency: 85, image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/javascript.png", color: "#F7DF1E" },
  { name: "React-JS", proficiency: 80, image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/react.png", color: "#7facc9" },
  { name: "Node-JS", proficiency: 90, image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/node.png", color: "#97bf57" },
  { name: "Express-JS", proficiency: 85, image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/express.png", color: "#ffffff" },
  { name: "Java", proficiency: 65, image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/java.png", color: "#e99d3e" },
  { name: "PostgreSQL", proficiency: 80, image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/postgresql.png", color: "#3f668d" },
  { name: "Blender 3D", proficiency: 95, image: "https://github.com/aimatochysia/portfolio/raw/main/public/app_icons/blender.png", color: "#db7d2d" },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      id="skills-section"
      ref={sectionRef}
      initial={{ opacity: 0, x: -50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-16"
    >
      <h2 className="text-3xl font-semibold mb-6">Top Skills</h2>
      <div className="space-y-0.1">
        {skills.map((skill) => {
          const backgroundColor = `${skill.color}20`;
          const borderColor = backgroundColor;
          const foregroundBorderColor = backgroundColor;

          return (
            <div
              key={skill.name}
              className="flex items-center space-x-4"
            >
              <img src={skill.image} alt={skill.name} className="w-12 h-12 object-contain" />
              <span className="w-1/4">{skill.name}</span>
              <div className="w-3/4 h-5 rounded-full overflow-hidden relative">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    backgroundColor: backgroundColor,
                    border: `2px solid ${borderColor}`,
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    backgroundColor: skill.color,
                    border: `2px solid ${foregroundBorderColor}`,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: isVisible ? `${skill.proficiency}%` : 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
