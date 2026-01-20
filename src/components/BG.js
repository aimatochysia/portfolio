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
      
      {/* Loading overlay integrated with the space background */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Darkened overlay to focus on loading content */}
            <motion.div 
              className="absolute inset-0 bg-black/60"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Loading content */}
            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Glowing ring around content */}
              <div className="relative mb-8">
                <motion.div
                  className="w-32 h-32 mx-auto rounded-full border-2 border-white/20"
                  style={{
                    boxShadow: '0 0 30px rgba(100, 150, 255, 0.3), inset 0 0 30px rgba(100, 150, 255, 0.1)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div
                    className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400"
                    style={{ boxShadow: '0 0 10px #60a5fa' }}
                  />
                </motion.div>
                
                {/* Inner rotating ring */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div
                    className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400"
                    style={{ boxShadow: '0 0 8px #a78bfa' }}
                  />
                </motion.div>
                
                {/* Center sun */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #ffdd57, #ff9900)',
                    boxShadow: '0 0 20px #ffdd57',
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              
              <motion.h1
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Petra Michael
              </motion.h1>
              
              <motion.p
                className="text-gray-400 text-sm mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Entering the cosmos...
              </motion.p>
              
              {/* Progress bar */}
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  style={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              
              <motion.p
                className="text-gray-500 text-xs mt-2"
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
