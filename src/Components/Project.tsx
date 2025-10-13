import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

interface ProjectsProps {
  darkMode?: boolean;
}

export default function Projects({ darkMode = true }: ProjectsProps) {
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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with shopping cart, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, notifications, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with forecasts, interactive maps, and location-based weather alerts.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
      technologies: ['React', 'Weather API', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with insights, scheduling, and engagement tracking.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      technologies: ['React', 'TypeScript', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-pink-500 to-pink-700'
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-first fitness tracking application with workout plans, progress tracking, and nutrition guide.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      technologies: ['React Native', 'Firebase', 'Redux'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Portfolio Generator',
      description: 'Web application that helps developers create beautiful portfolio websites with customizable templates.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      color: 'from-orange-500 to-orange-700'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className={`relative pt-12 sm:pt-14 md:pt-16 lg:pt-20 pb-12 sm:pb-14 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      } overflow-hidden transition-all duration-500`}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-8 md:mb-10 lg:mb-14">
          <h2 
            key={`title-${animationKey}`}
            className={`text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black mb-2 sm:mb-3 md:mb-10 text-center bg-gradient-to-r ${
              darkMode ? 'from-blue-200 to-blue-400' : 'from-blue-600 to-blue-800'
            } bg-clip-text text-transparent animate-fade-in`}
          >
            Featured Projects <span className={`ml-2 drop-shadow-lg ${darkMode ? 'text-white' : 'text-gray-700'}`}>🚀</span>
          </h2>
          <p 
            key={`subtitle-${animationKey}`}
            className={`text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            } animate-fade-in`}
            style={{ animationDelay: '0.2s' }}
          >
            Some of my recent work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${animationKey}`}
              className={`group relative ${
                darkMode ? 'bg-gray-800/40' : 'bg-white'
              } backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-2xl overflow-hidden border-2 ${
                darkMode ? 'border-gray-700/50 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'
              } transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-32 xs:h-36 sm:h-40 md:h-44 lg:h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 xs:gap-3 sm:gap-3 md:gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 xs:p-2 sm:p-2 md:p-2.5 lg:p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-200 transform hover:scale-110"
                  >
                    <Github className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-blue-200" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 xs:p-2 sm:p-2 md:p-2.5 lg:p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-200 transform hover:scale-110"
                  >
                    <ExternalLink className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-blue-200" />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-3 xs:p-3.5 sm:p-4 md:p-5 lg:p-6">
                <h3 className={`text-base xs:text-lg sm:text-lg md:text-xl lg:text-2xl font-bold mb-1.5 xs:mb-2 sm:mb-2 md:mb-2.5 lg:mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base mb-2 xs:mb-2.5 sm:mb-3 md:mb-3.5 lg:mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-1.5 md:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-1.5 py-0.5 xs:px-2 xs:py-1 sm:px-2 sm:py-1 md:px-2.5 md:py-1 lg:px-3 lg:py-1.5 rounded-md sm:rounded-lg text-[9px] xs:text-[10px] sm:text-xs md:text-xs lg:text-sm font-medium ${
                        darkMode 
                          ? 'bg-gray-700/50 text-blue-400 border border-gray-600/50' 
                          : 'bg-blue-100 text-blue-700 border border-blue-200'
                      } hover:scale-105 transition-transform duration-200`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className={`h-0.5 sm:h-1 bg-gradient-to-r ${project.color}`}></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div 
          key={`button-${animationKey}`}
          className="text-center mt-6 xs:mt-7 sm:mt-8 md:mt-10 lg:mt-12 animate-fade-in" 
          style={{ animationDelay: '0.6s' }}
        >
          <a
            href="https://github.com/misharasandalidesilva"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 xs:gap-2 sm:gap-2 px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-2xl border-2 text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl ${
              darkMode
                ? 'bg-gray-800 text-blue-400 border-blue-500 hover:bg-gray-700'
                : 'bg-blue-600 text-white border-blue-700 hover:bg-blue-700'
            }`}
          >
            <Code2 className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            View All Projects
          </a>
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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}