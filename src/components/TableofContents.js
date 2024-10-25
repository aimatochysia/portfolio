import React, { useEffect, useState, useRef } from 'react';

const TableofContents = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleScroll = () => {
    const offset = window.scrollY;
    const navOffsetTop = navRef.current.getBoundingClientRect().top;
    setIsSticky(offset > 500);
    setIsAtTop(navOffsetTop > -10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: "#intro", full: "Intro", short: "Int.." },
    { href: "#skills", full: "Skills", short: "Skil.." },
    { href: "#hobbies", full: "Hobbies", short: "Hob.." },
    { href: "#experience", full: "Experience", short: "Exp.." },
    { href: "#projects", full: "GitHub Projects", short: "Pro.." },
    { href: "#publications", full: "Publications", short: "Pub.." },
    { href: "#certification", full: "Certifications", short: "Cer.." },
    { href: "#contact", full: "Contact", short: "Con.." },
  ];

  return (
    <div ref={navRef} className="relative">
      <h2 className="text-3xl font-semibold mb-6">Table of Contents</h2>
      <nav 
        className={`flex items-center justify-between p-4 rounded-md ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : (isAtTop ? '' : 'absolute')}`} 
        style={{
          backdropFilter: 'blur(7px)', 
          color: '#ffffff', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', 
          borderRadius: '12px',
          transition: 'top 0.3s ease',
        }}
      >
        <div className="flex items-center space-x-4">
          <a href="#intro-section" style={{ display: 'inline-flex' }}>
            <img 
              src="https://github.com/aimatochysia/portfolio/raw/main/public/logos/logo192.png"
              alt="Logo"
              className="logo"
              style={{
                objectFit: 'contain',
                width: '2vw',
                height: 'auto',
              }}
            />
          </a>

          <button 
            className="glassmorphism-button"
            href="https://raw.githubusercontent.com/aimatochysia/portfolio/main/public/CV/Curriculum%20Vitae.pdf"
            style={{
              borderRadius: '12px',
              fontSize: '2vh',
              fontWeight: 'bold',
              border: '2px solid',
              borderColor:'rgba(255,255,255,0.2)',
              cursor: 'pointer',
              transition: 'border 0.4s ease',
              color: '#fff',
              padding: '1vh 1.5vw',
              whiteSpace: 'nowrap'
              
            }}
          >
            Get CV
          </button>
        </div>

        <button 
          className="hamburger md:hidden" 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            padding: '0',
            fontSize: '2vh',
            color: '#ffffff',
            marginLeft: 'auto'
          }}
        >
          &#9776;
        </button>

        <div className="hidden md:flex space-x-4">
          {links.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-base hover:underline"
              style={{
                fontSize: '2vh',
                color: '#ffffff',
              }}
            >
              {link.full}
            </a>
          ))}
        </div>
      </nav>

      {menuOpen && (
        <div 
          className="dropdown fixed w-full flex flex-col items-center space-y-4 p-4 z-50"
          style={{
            top: '60px',
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
            borderRadius: '12px',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
          }}
        >
          {links.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-base hover:underline"
              style={{
                fontSize: '2vh',
                padding: '0.5vh 0',
                color: '#ffffff',
              }}
            >
              {link.full}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        .glassmorphism-button {
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          position: relative;
          overflow: hidden;
        }

        .glassmorphism-button::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #ffffff;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .glassmorphism-button:hover::before {
          transform: scaleX(1);
        }

        /* Media Queries */
        @media (max-width: 768px) {
          .dropdown {
            display: ${menuOpen ? 'flex' : 'none'};
            position: fixed;
            top: 60px;
            width: 100%;
          }
        }
        
        @media (min-width: 768px) {
          .hamburger {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default TableofContents;
