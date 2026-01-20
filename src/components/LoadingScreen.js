import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0a0a1a 100%)' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      onAnimationComplete={onComplete}
    >
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Orbiting planets */}
      <div className="relative w-64 h-64">
        {/* Sun */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #ffdd57, #ff9900)',
            boxShadow: '0 0 60px #ffdd57, 0 0 100px #ff990055',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Orbit ring 1 */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full border border-white/20"
          style={{ transform: 'translate(-50%, -50%)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute w-4 h-4 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #1e90ff, #0066cc)',
              top: '0%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 10px #1e90ff',
            }}
          />
        </motion.div>

        {/* Orbit ring 2 */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full border border-white/10"
          style={{ transform: 'translate(-50%, -50%)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #ff4500, #cc3300)',
              top: '0%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 8px #ff4500',
            }}
          />
        </motion.div>

        {/* Orbit ring 3 */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-white/5"
          style={{ transform: 'translate(-50%, -50%)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute w-5 h-5 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #f4a460, #cc8844)',
              top: '0%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 12px #f4a460',
            }}
          />
        </motion.div>
      </div>

      {/* Loading text */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Petra Michael
        </motion.h1>
        <motion.p
          className="text-gray-400 mt-2 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Loading portfolio...
        </motion.p>
        
        {/* Loading bar */}
        <div className="mt-4 w-48 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.3, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
