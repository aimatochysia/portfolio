import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SPEED_SCALE = 50;
const NUM_ASTEROIDS = 200;  

function BG({ onLoadingComplete }) {
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            if (onLoadingComplete) onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const planets = [
      { radius: 4, distance: 50, speed: 0.04 * SPEED_SCALE, color: '#b0b0b0' },
      { radius: 6, distance: 80, speed: 0.02 * SPEED_SCALE, color: '#d4af37' },
      { radius: 7, distance: 120, speed: 0.015 * SPEED_SCALE, color: '#1e90ff' },
      { radius: 4, distance: 160, speed: 0.012 * SPEED_SCALE, color: '#ff4500' },
      { radius: 15, distance: 220, speed: 0.009 * SPEED_SCALE, color: '#f4a460' },
      { radius: 12, distance: 300, speed: 0.007 * SPEED_SCALE, color: '#f7c873' },
      { radius: 10, distance: 380, speed: 0.005 * SPEED_SCALE, color: '#40e0d0' },
      { radius: 9, distance: 450, speed: 0.004 * SPEED_SCALE, color: '#4169e1' },
    ];

    const asteroidBelt = [];
    for (let i = 0; i < NUM_ASTEROIDS; i++) {
      const distance = 180 + Math.random() * 10;  
      const radius = Math.random() * 2 + 1;  
      const angle = Math.random() * Math.PI * 2;
      asteroidBelt.push({
        radius,
        distance,
        angle,
        speed: 0.01 * SPEED_SCALE,  
        color: 'rgba(200, 200, 200, 0.8)',
      });
    }

    let stars = [];
    for (let i = 0; i < 300; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
      });
    }

    let angle = 0;
    const planetAngles = planets.map(() => Math.random() * Math.PI * 2);

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      stars = stars.map(star => ({
        ...star,
        x: Math.random() * width,
        y: Math.random() * height,
      }));
    }

    function drawSolarSystem() {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(20, 20, 50, 1)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 20, 0, Math.PI * 2);
      ctx.fillStyle = '#ffdd57';
      ctx.fill();

      planets.forEach((planet, index) => {
        const orbitRadius = planet.distance;
        const startAngle = planetAngles[index];
        const planetX = width / 2 + Math.cos(startAngle + angle * planet.speed) * orbitRadius;
        const planetY = height / 2 + Math.sin(startAngle + angle * planet.speed) * orbitRadius;

        ctx.beginPath();
        ctx.arc(width / 2, height / 2, orbitRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 1.0)';
        ctx.setLineDash([5, 5]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.beginPath();
        ctx.arc(planetX, planetY, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.fill();
      });

      asteroidBelt.forEach(asteroid => {
        const x = width / 2 + Math.cos(asteroid.angle + angle * asteroid.speed) * asteroid.distance;
        const y = height / 2 + Math.sin(asteroid.angle + angle * asteroid.speed) * asteroid.distance;

        ctx.beginPath();
        ctx.arc(x, y, asteroid.radius, 0, Math.PI * 2);
        ctx.fillStyle = asteroid.color;
        ctx.fill();
      });

      angle += 0.01;
      requestAnimationFrame(drawSolarSystem);
    }

    window.addEventListener('resize', resizeCanvas);
    drawSolarSystem();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.cancelAnimationFrame(drawSolarSystem);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
        }}
      />
      
      {/* Loading overlay - truly integrated with the solar system */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Profile picture at the center of the solar system (replacing the sun) */}
            <motion.div
              className="relative"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0, y: -100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Glowing ring effect around profile - matches solar system orbit style */}
              <motion.div
                className="absolute -inset-4 rounded-full"
                style={{
                  border: '2px dashed rgba(255, 255, 255, 0.3)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-12 rounded-full"
                style={{
                  border: '1px dashed rgba(255, 255, 255, 0.15)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Profile picture container with sun-like glow */}
              <motion.div
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden"
                style={{
                  boxShadow: '0 0 40px rgba(255, 221, 87, 0.4), 0 0 80px rgba(255, 153, 0, 0.2)',
                  border: '3px solid rgba(255, 221, 87, 0.5)',
                }}
                animate={{ 
                  boxShadow: [
                    '0 0 40px rgba(255, 221, 87, 0.4), 0 0 80px rgba(255, 153, 0, 0.2)',
                    '0 0 60px rgba(255, 221, 87, 0.6), 0 0 100px rgba(255, 153, 0, 0.3)',
                    '0 0 40px rgba(255, 221, 87, 0.4), 0 0 80px rgba(255, 153, 0, 0.2)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <img
                  src={process.env.PUBLIC_URL + '/images/self_portrait.png'}
                  alt="Petra Michael"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Small orbiting planets around the profile */}
              <motion.div
                className="absolute -inset-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div 
                  className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{ background: '#1e90ff', boxShadow: '0 0 10px #1e90ff' }}
                />
              </motion.div>
              <motion.div
                className="absolute -inset-16"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <div 
                  className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{ background: '#ff4500', boxShadow: '0 0 8px #ff4500' }}
                />
              </motion.div>
              <motion.div
                className="absolute -inset-24"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              >
                <div 
                  className="absolute top-0 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{ background: '#f4a460', boxShadow: '0 0 12px #f4a460' }}
                />
              </motion.div>
            </motion.div>
            
            {/* Loading text and progress - positioned below the solar system center */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.h1
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Petra Michael
              </motion.h1>
              
              <motion.p
                className="text-gray-400 text-sm mb-6"
              >
                Entering the cosmos...
              </motion.p>
              
              {/* Progress bar styled like an orbit path */}
              <div className="relative w-64 h-2 mx-auto">
                <div className="absolute inset-0 rounded-full bg-white/10" />
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  style={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.1 }}
                />
                {/* Small planet indicator on progress bar */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white"
                  style={{ 
                    left: `${loadingProgress}%`,
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
                  }}
                />
              </div>
              
              <motion.p
                className="text-gray-500 text-sm mt-3"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {loadingProgress}%
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default BG;
