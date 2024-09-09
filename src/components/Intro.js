import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const introElement = document.getElementById('intro-section');
      if (introElement) {
        const rect = introElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isMoreThanHalfVisible = rect.top + rect.height / 0.9 < windowHeight && rect.bottom - rect.height / 2 > 0;
        setIsVisible(isMoreThanHalfVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.6, ease: 'easeIn' } },
  };

  return (
    <motion.div
      id="intro-section"
      className="flex flex-col items-center text-center space-y-4 mb-16"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'exit'}
    >
      <motion.img 
        src="https://github.com/aimatochysia/portfolio/raw/main/public/images/self_portrait.png" 
        alt="Self Portrait" 
        className="w-64 h-64 rounded-full shadow-lg glassmorphism object-cover"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
      <motion.h1 
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Petra Michael
      </motion.h1>
      <motion.p 
        className="text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        Hi👋, I'm Petra Michael, a versatile programmer experienced in:
      </motion.p>
      <motion.p 
        className="text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
      >
        AI research, Software Engineering, Data Science, and Full-Stack Development.
      </motion.p>
    </motion.div>
  );
}

export default Intro;
