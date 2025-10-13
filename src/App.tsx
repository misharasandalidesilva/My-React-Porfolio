import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';

export default function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Active section detection on scroll
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
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function with navbar offset
  const scrollTo = (id: string) => {
    console.log('ScrollTo function called with ID:', id);
    
    const element = document.getElementById(id);
    
    if (element) {
      console.log('Element found:', element);
      const navbarHeight = 50;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      console.log('Scrolling to position:', offsetPosition);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.error('Element NOT found with ID:', id);
      console.log('Available IDs:', ['home', 'about', 'skills', 'projects', 'contact'].map(s => 
        document.getElementById(s) ? `${s} ✓` : `${s} ✗`
      ));
    }
    
    setMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gray-900' : 'bg-gray-50' 

    }`}>
      <Navbar 
        darkMode={darkMode}           
        setDarkMode={setDarkMode}    
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        scrollTo={scrollTo}
      />
      
      <Home darkMode={darkMode} scrollTo={scrollTo} />
      <AboutMe darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <ContactMe darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}