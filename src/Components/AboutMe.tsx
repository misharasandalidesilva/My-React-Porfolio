import { useState, useEffect, useRef } from 'react';
import myimg from '../assets/my.jpg'

interface AboutMeProps {
  darkMode: boolean;
  aboutImage?: string;
  setAboutImage?: (image: string) => void;
}

export default function AboutMe({ darkMode = true }: AboutMeProps) {
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

  // const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;
  //   if (files && files.length > 0 && setAboutImage) {
  //     const file = files[0];
  //     const reader = new FileReader();
  //     reader.onloadend = () => setAboutImage(reader.result as string);
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`relative pt-16 sm:pt-10 md:pt-24 lg:pt-20 pb-16 sm:pb-20 md:pb-20 lg:pb-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50/90'} backdrop-blur-sm transition-all duration-500 overflow-hidden`}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <h2 
          key={`title-${animationKey}`}
          className={`text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black mb-3 sm:mb-4 md:mb-5 text-center bg-gradient-to-r ${darkMode ? 'from-blue-200 to-blue-400' : 'from-blue-600 to-blue-800'} bg-clip-text text-transparent animate-fade-in`}
        >
          About Me <span className={`ml-2 drop-shadow-lg ${darkMode ? 'text-white' : 'text-gray-700'}`}>👩‍💻</span>
        </h2>
        
        <p 
          key={`subtitle-${animationKey}`}
          className={`text-center text-sm xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-lg mb-10 sm:mb-12 md:mb-14 lg:mb-16 ${darkMode ? 'text-gray-300' : 'text-gray-700'} animate-fade-in`}
          style={{ animationDelay: '0.2s' }}
        >
          Get to know me better
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 items-center px-2 sm:px-4 md:px-6">
          {/* Image Section */}
          <div 
            key={`image-${animationKey}`}
            className="flex justify-center order-1 lg:order-1 animate-slide-in-left pb-6 sm:pb-8 md:pb-10 lg:pb-19"
          >
            <div className="relative w-48 h-48 xs:w-52 xs:h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              {/* Glow effect */}
              <div className={`absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 rounded-xl blur-2xl ${darkMode ? 'opacity-30' : 'opacity-20'} animate-pulse`}></div>
              
              {/* Image container */}
              <div className={`absolute inset-0 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl overflow-hidden border-2 sm:border-3 md:border-4 ${darkMode ? 'border-blue-500' : 'border-blue-400'} shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
                <img
                  src= {myimg}
                  alt="Mishara Sandali"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Experience badge */}
              <div className={`absolute -bottom-2 -right-6 xs:-bottom-2 xs:-right-7 sm:-bottom-3 sm:-right-8 bg-gradient-to-br ${darkMode ? 'from-blue-500 to-blue-600' : 'from-blue-400 to-blue-500'} px-2.5 py-1 xs:px-3 xs:py-1 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-2 rounded-full shadow-2xl border-2 sm:border-3 md:border-4 ${darkMode ? 'border-gray-800' : 'border-white'} transform hover:scale-110 transition-transform duration-300`}>
                <p className="text-[10px] xs:text-xs sm:text-sm md:text-sm lg:text-base font-bold text-white">Trainee</p>
                <p className="text-[8px] xs:text-[9px] sm:text-xs md:text-xs lg:text-sm text-gray-200">Experience</p>
              </div>
            </div>
          </div>
          
          {/* Text Section */}
          <div 
            key={`text-${animationKey}`}
            className="space-y-3 xs:space-y-3.5 sm:space-y-4 md:space-y-5 lg:space-y-6 order-2 lg:order-2 px-2 sm:px-4 md:px-6 animate-slide-in-right"
          >
            <h3 className={`text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-2xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'} animate-fade-in`}>
              Frontend Developer & UI/UX Designer
            </h3>
            
            <p className={`text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
              I'm a passionate frontend developer specializing in creating stunning, responsive web applications with a strong focus on user experience and visual design.
            </p>
            
            <p className={`text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
              With expertise in React, modern CSS frameworks, and UI/UX design principles, I transform creative ideas into pixel-perfect, interactive experiences that users love.
            </p>
            
            <p className={`text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
              My goal is to build interfaces that are not only beautiful but also intuitive, accessible, and performant across all devices.
            </p>
            
            <div className="flex flex-wrap gap-3 xs:gap-3.5 sm:gap-4 justify-center lg:justify-start mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a
                href="src/assets/Mishara  CV.pdf"
                className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 xs:px-5 xs:py-2.5 sm:px-5 sm:py-3 text-xs xs:text-sm sm:text-sm md:text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-medium`}
              >
                My Resume
              </a>
            </div>
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