import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className='mt-16 py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='flex items-center gap-2 text-gray-400'>
            <span>Made with</span>
            <FaHeart className='text-red-500 animate-pulse' />
            <span>by Petra Michael</span>
          </div>
          
          <div className='flex items-center gap-6'>
            <a 
              href='https://github.com/aimatochysia'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-white transition-colors duration-300'
              aria-label='GitHub'
            >
              <FaGithub className='text-xl' />
            </a>
            <a 
              href='https://www.linkedin.com/in/aimatochysia/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-blue-500 transition-colors duration-300'
              aria-label='LinkedIn'
            >
              <FaLinkedin className='text-xl' />
            </a>
            <a 
              href='mailto:petra.michael@outlook.com'
              className='text-gray-400 hover:text-blue-300 transition-colors duration-300'
              aria-label='Email'
            >
              <FaEnvelope className='text-xl' />
            </a>
          </div>
          
          <div className='text-gray-500 text-sm'>
            © {currentYear} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
