import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const contactLinks = [
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+6289662287735',
    href: 'https://wa.me/6289662287735?text=Hello%2C%20Petra!',
    color: 'hover:text-green-400',
    iconColor: 'text-green-400'
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'petra.michael@outlook.com',
    href: 'mailto:petra.michael@outlook.com',
    color: 'hover:text-blue-300',
    iconColor: 'text-blue-300'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Petra Michael',
    href: 'https://www.linkedin.com/in/aimatochysia/',
    color: 'hover:text-blue-500',
    iconColor: 'text-blue-500'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: '@aimatochysia',
    href: 'https://github.com/aimatochysia',
    color: 'hover:text-gray-300',
    iconColor: 'text-gray-300'
  }
]

const Contact = () => {
  return (
    <div className='mb-16'>
      <h2 className='text-3xl font-semibold mb-8 text-center' id='contact'>
        Get In Touch
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto'>
        {contactLinks.map((contact, index) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith('mailto') ? '_self' : '_blank'}
            rel='noopener noreferrer'
            className='glassmorphism p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:scale-105'
            style={{
              backdropFilter: 'blur(7px)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ 
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div className={`text-2xl ${contact.iconColor}`}>
              <contact.icon />
            </div>
            <div className='flex flex-col'>
              <span className='text-sm text-gray-400'>{contact.label}</span>
              <span className={`text-white font-medium ${contact.color} transition-colors`}>
                {contact.value}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default Contact
