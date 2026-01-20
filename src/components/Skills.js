import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  {
    name: 'Python',
    image: process.env.PUBLIC_URL + '/app_icons/python.png',
    color: '#4e7aa9'
  },
  {
    name: 'Flask',
    image: process.env.PUBLIC_URL + '/app_icons/flask.png',
    color: '#f3f3f3'
  },
  {
    name: 'C/C++',
    image: process.env.PUBLIC_URL + '/app_icons/cpp.png',
    color: '#19427c'
  },
  {
    name: 'Tailwind CSS',
    image: process.env.PUBLIC_URL + '/app_icons/tailwind.png',
    color: '#62b9f3'
  },
  {
    name: 'JavaScript',
    image: process.env.PUBLIC_URL + '/app_icons/javascript.png',
    color: '#F7DF1E'
  },
  {
    name: 'React-JS/Native',
    image: process.env.PUBLIC_URL + '/app_icons/react.png',
    color: '#7facc9'
  },
  {
    name: 'Node-JS',
    image: process.env.PUBLIC_URL + '/app_icons/node.png',
    color: '#97bf57'
  },
  {
    name: 'Express-JS',
    image: process.env.PUBLIC_URL + '/app_icons/express.png',
    color: '#ffffff'
  },
  {
    name: 'Java',
    image: process.env.PUBLIC_URL + '/app_icons/java.png',
    color: '#e99d3e'
  },
  {
    name: 'PostgreSQL',
    image: process.env.PUBLIC_URL + '/app_icons/postgresql.png',
    color: '#3f668d'
  },
  {
    name: 'APDU Protocol',
    image: process.env.PUBLIC_URL + '/app_icons/apdu.png'
  },
  {
    name: 'Blender 3D',
    image: process.env.PUBLIC_URL + '/app_icons/blender.png',
    color: '#db7d2d'
  }
]

const Skills = () => {
  return (
    <div id='skills-section' className='mb-16'>
      <h2 id='skills' className='text-3xl font-semibold mb-6'>
        Top Skills
      </h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className='relative glassmorphism p-4 rounded-xl'
            style={{
              backdropFilter: 'blur(7px)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
              color: '#ffffff',
              overflow: 'hidden',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)',
              transition: { duration: 0.3 }
            }}
          >
            <div className='flex flex-col items-center justify-center text-center gap-3'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center'>
                <img
                  src={skill.image}
                  alt={skill.name}
                  className='w-full h-full object-contain'
                />
              </div>
              <span className='text-sm sm:text-base font-medium leading-tight'>
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
