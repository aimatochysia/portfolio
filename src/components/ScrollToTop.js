import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 z-50 p-3 rounded-full glassmorphism shadow-lg cursor-pointer'
          style={{
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)'
          }}
          whileTap={{ scale: 0.95 }}
          aria-label='Scroll to top'
        >
          <FaArrowUp className='text-white text-lg' />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
