import React from 'react'
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='mb-16 text-center'>
      <h2 className='text-3xl font-semibold mb-6' id='contact'>
        Contact
      </h2>
      <div className='flex flex-col items-center space-y-3'>
        <p className='flex items-center gap-2'>
          <FaWhatsapp className='text-green-400' />
          Phone / Whatsapp:{' '}
          <a 
            href='https://wa.me/6289662287735?text=Hello%2C%20Petra!' 
            className='text-blue-400 hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            +6289662287735
          </a>
        </p>
        <p className='flex items-center gap-2'>
          <FaEnvelope className='text-blue-300' />
          Email:{' '}
          <a href='mailto:petra.michael@outlook.com' className='text-blue-400 hover:underline'>
            petra.michael@outlook.com
          </a>
        </p>
        <p className='flex items-center gap-2'>
          <FaLinkedin className='text-blue-500' />
          LinkedIn:{' '}
          <a 
            href='https://www.linkedin.com/in/aimatochysia/' 
            className='text-blue-400 hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            Petra Michael
          </a>
        </p>
        <p className='flex items-center gap-2'>
          <FaGithub className='text-gray-300' />
          GitHub:{' '}
          <a 
            href='https://github.com/aimatochysia' 
            className='text-blue-400 hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            @aimatochysia
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact
