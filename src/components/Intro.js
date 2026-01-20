import React from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <motion.div
      id='intro-section'
      className='flex flex-col items-center text-center space-y-6 mb-16 relative pt-8'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.img
        src={process.env.PUBLIC_URL + '/images/self_portrait.png'}
        alt='Self Portrait'
        className='w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl glassmorphism object-cover ring-4 ring-white/20'
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <div className='relative bg-opacity-30 glassmorphism backdrop-blur-md p-8 rounded-2xl max-w-3xl'>
        <h1 id='intro' className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
          Petra Michael
        </h1>
        <p className='text-lg md:text-xl text-gray-200 leading-relaxed'>
          I'm a Computer Science student at BINUS University in Bandung,
          Indonesia, currently interning at IDEMIA as a Software Development
          Engineering Intern.
        </p>
        <p className='text-base md:text-lg text-gray-300 mt-4 leading-relaxed'>
          At IDEMIA, I focus on writing and executing test cases, particularly
          involving FIDO2 authentication protocols and APDU command sets. My
          interests span across Deep Learning, Software Engineering, Automation
          Testing, Data Science, and Full-Stack Development. I'm passionate
          about building secure, scalable, and efficient systems that bridge the
          gap between theory and real-world application.
        </p>
      </div>
    </motion.div>
  )
}

export default Intro
