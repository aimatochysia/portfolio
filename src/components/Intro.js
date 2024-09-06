import React from 'react';

const Intro = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 mb-16">
      <img 
        src="https://github.com/aimatochysia/portfolio/raw/main/public/images/self_portrait.png" 
        alt="Self Portrait" 
        className="w-32 h-32 rounded-full shadow-lg glassmorphism"
      />
      <h1 className="text-4xl font-bold">Petra Michael</h1>
      <p className="text-xl">Im a dev</p>
    </div>
  );
}

export default Intro;
