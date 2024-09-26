import React, { useEffect, useState, useRef } from 'react';

const TableofContents = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isTallScreen, setIsTallScreen] = useState(window.innerHeight > window.innerWidth);
  const navRef = useRef(null);

  const handleScroll = () => {
    const offset = window.scrollY;
    const navOffsetTop = navRef.current.getBoundingClientRect().top;
    setIsSticky(offset > 500);
    setIsAtTop(navOffsetTop > -10);
  };

  const handleResize = () => {
    setIsTallScreen(window.innerHeight > window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const links = [
    { href: "#intro", full: "Intro", short: "Intro" },
    { href: "#skills", full: "Skills", short: "Skills" },
    { href: "#hobbies", full: "Hobbies", short: "Hobbies" },
    { href: "#experience", full: "Experience", short: "Exp..." },
    { href: "#projects", full: "GitHub Projects", short: "Projects" },
    { href: "#publications", full: "Publications", short: "Pubs..." },
    { href: "#contact", full: "Contact", short: "Contact" },
  ];

  return (
    <div ref={navRef}>
      <h2 className="text-3xl font-semibold mb-6">Table of Contents</h2>
      <nav 
        className={`flex items-center justify-between space-x-4 p-4 rounded-md ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : (isAtTop ? '' : 'absolute')}`} 
        style={{
          backdropFilter: 'blur(7px)', 
          color: '#ffffff', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', 
          borderRadius: '12px',
          transition: 'top 0.3s ease',
        }}
      >
        <a href="#intro-section">
          <img 
            src="https://github.com/aimatochysia/portfolio/raw/main/public/logos/logo192.png"
            alt="Logo"
            className="h-10 w-auto mr-4"
          />
        </a>

        <div className="flex justify-center space-x-4">
          {links.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-sm md:text-base lg:text-lg text-white-500 hover:underline"
            >
              {isTallScreen ? link.short : link.full}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default TableofContents;
