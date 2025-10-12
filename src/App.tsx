import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import Contact from './Components/ContactMe';
import Footer from './Components/Footer'; 


export default function App() {

  const [darkMode, setDarkMode] = useState(() => {

    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true;
  });
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll function
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setMenuOpen(false);
    setActiveSection(id);
  };

  // Common props for all components
  const commonProps = {
    darkMode,
    setDarkMode,
    activeSection,
    scrollTo
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <Navbar 
        {...commonProps}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      
      <main>
        <Home {...commonProps} />
        
        <AboutMe
          {...commonProps}
          aboutImage={''}
          setAboutImage={() => {"WhatsApp Image 2025-04-01 at 23.19.28_f94ecae7.jpg"}}
        />
        
        
        <Skills {...commonProps} />

        <Projects {...commonProps} />
        <Contact {...commonProps} />
        <Footer {...commonProps} /> 
       
      </main>
    </div>
  );
}