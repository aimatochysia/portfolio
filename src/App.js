import React from 'react';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 py-8">
        <Intro />
        <Skills />
        <Hobbies />
        <Experience />
        <Publications />
        <Contact />
      </div>
    </div>
  );
}

export default App;
