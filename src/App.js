import React from 'react';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Contact from './components/Contact';
import GitHubProjects from './components/GitHubProjects';
import TableofContents from './components/TableofContents';
import BG from './components/BG';
import './App.css';

function App() {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-200">
      <BG />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Intro />
        <TableofContents/>
        <Skills />
        <Hobbies />
        <Experience />
        <GitHubProjects />
        <Publications />
        <Contact />
      </div>
    </div>
  );
}

export default App;
