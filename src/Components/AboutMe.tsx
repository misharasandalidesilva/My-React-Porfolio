import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Camera } from 'lucide-react';
import { resume } from 'react-dom/server';

interface AboutMeProps {
  darkMode: boolean;
  aboutImage?: string;
  setAboutImage?: (image: string) => void;
}

export default function AboutMe({ darkMode = true, aboutImage, setAboutImage }: AboutMeProps) {
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimationKey(prev => prev + 1);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0 && setAboutImage) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => setAboutImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm transition-all duration-500 overflow-hidden`}
    >
      {/* Background circles
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-4 sm:top-16 sm:left-8 md:top-20 md:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full blur-3xl animate-pulse bg-blue-500"></div>
        <div
          className="absolute bottom-10 right-4 sm:bottom-16 sm:right-8 md:bottom-20 md:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full blur-3xl animate-pulse bg-blue-500"
          style={{ animationDelay: '1s' }}
        ></div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <h2 
          key={`title-${animationKey}`}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 text-center bg-gradient-to-r ${darkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent animate-fade-in`}
        >
          About Me 👩‍💻
        </h2>
        
        <p 
          key={`subtitle-${animationKey}`}
          className={`text-center text-base sm:text-lg md:text-xl mb-8 sm:mb-12 md:mb-16 ${darkMode ? 'text-gray-300' : 'text-gray-600'} animate-fade-in`}
          style={{ animationDelay: '0.2s' }}
        >
          Get to know me better
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Image Section */}
          <div 
            key={`image-${animationKey}`}
            className="flex justify-center order-1 lg:order-1 animate-slide-in-left"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              {/* Glow effect */}
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Image container */}
              <div className="absolute inset-0 bg-gray-800 rounded-2xl overflow-hidden border-3 sm:border-6 md:border-6 border-blue-500 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="../src/assets/WhatsApp Image 2025-04-01 at 23.19.28_f94ecae7.jpg"
                  alt="Mishara Sandali"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Experience badge */}
              <div className="absolute -bottom-3 -right-8 sm:-bottom-3 sm:-right-8 bg-gradient-to-br from-blue-600 to-purple-600 px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-1 rounded-full shadow-2xl border-3 sm:border-4 border-gray-800 transform hover:scale-110 transition-transform duration-300">
                <p className="text-xs sm:text-sm md:text-base font-bold text-white">Trainee</p>
                <p className="text-xs sm:text-xs md:text-sm text-gray-200">Experience</p>
              </div>
            </div>
          </div>
          
          {/* Text Section */}
          <div 
            key={`text-${animationKey}`}
            className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-2 px-2 sm:px-4 animate-slide-in-right"
          >
            <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${darkMode ? 'text-blue-200' : 'text-blue-300'} animate-fade-in`}>
              Frontend Developer & UI/UX Designer
            </h3>
            
            <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
              I'm a passionate frontend developer specializing in creating stunning, responsive web applications with a strong focus on user experience and visual design.
            </p>
            
            <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
              With expertise in React, modern CSS frameworks, and UI/UX design principles, I transform creative ideas into pixel-perfect, interactive experiences that users love.
            </p>
            
            <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
              My goal is to build interfaces that are not only beautiful but also intuitive, accessible, and performant across all devices.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <a
              href="/path/to/your/resume.pdf"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              My Resume
            </a>
           
          </div>
            {/* Stats or Skills - Optional */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className={`p-3 sm:p-4 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} text-center transform hover:scale-105 transition-all duration-300 border ${darkMode ? 'border-blue-500/30' : 'border-blue-300'}`}>
                <p className={`text-xl sm:text-2xl md:text-3xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>2+</p>
                <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Years</p>
              </div>
              <div className={`p-3 sm:p-4 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} text-center transform hover:scale-105 transition-all duration-300 border ${darkMode ? 'border-purple-500/30' : 'border-purple-300'}`}>
                <p className={`text-xl sm:text-2xl md:text-3xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>10+</p>
                <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects</p>
              </div>
              <div className={`p-3 sm:p-4 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'} text-center transform hover:scale-105 transition-all duration-300 border ${darkMode ? 'border-pink-500/30' : 'border-pink-300'} col-span-2 sm:col-span-1`}>
                <p className={`text-xl sm:text-2xl md:text-3xl font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>100%</p>
                <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Passionate</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}