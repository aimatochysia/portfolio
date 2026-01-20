import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Contact from './components/Contact';
import GitHubProjects from './components/GitHubProjects';
import TableofContents from './components/TableofContents';
import Certification from './components/Certification';
import BG from './components/BG';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 min-h-screen">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      
      <BG />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Intro />
        <TableofContents/>
        <Skills />
        <Hobbies />
        <Experience />
        <GitHubProjects />
        <Publications />
        <Certification/>
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
