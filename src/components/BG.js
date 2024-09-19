import React, { useRef, useEffect } from 'react';

const SPEED_SCALE = 50;
const NUM_ASTEROIDS = 200;  

function BG() {
  const canvasRef = useRef(null);

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
  );
}

export default BG;
