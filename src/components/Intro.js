import React from 'react';

const Intro = () => {
  return (
    <div
      id="intro-section"
      className="flex flex-col items-center text-center space-y-4 mb-16 relative"
    >
      <img 
        src="https://github.com/aimatochysia/portfolio/raw/main/public/images/self_portrait.png" 
        alt="Self Portrait" 
        className="w-64 h-64 rounded-full shadow-lg glassmorphism object-cover"
      />
      <div className="relative bg-opacity-30 glassmorphism backdrop-blur-md p-6 rounded-lg">
        <h1 id="intro" className="text-4xl font-bold">
          Petra Michael
        </h1>
        <p className="text-xl mt-2">
          Hi👋, I'm Petra Michael, a versatile programmer experienced in:
        </p>
        <p className="text-xl mt-2">
          AI research, Software Engineering, Data Science, and Full-Stack Development.
        </p>
      </div>
    </div>
  );
}

export default Intro;
