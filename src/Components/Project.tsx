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
      className={`relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      } overflow-hidden`}
    >
      {/* Background effects
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 
          key={`title-${animationKey}`}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 text-center bg-gradient-to-r ${darkMode ? 'from-blue-200 to-blue-400' : ''} bg-clip-text text-transparent animate-fade-in`}
        >
           Featured Projects  <span className="ml-2 text-white drop-shadow-lg">🚀</span>
        </h2>
          <p 
            key={`subtitle-${animationKey}`}
            className={`text-base sm:text-lg md:text-xl ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } animate-fade-in`}
            style={{ animationDelay: '0.2s' }}
          >
            Some of my recent work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${animationKey}`}
              className={`group relative bg-gray-800/40 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-200 transform hover:scale-110"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all duration-200 transform hover:scale-110"
                  >
                    <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200" />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg text-xs font-medium ${
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
              <div className={`h-1 bg-gradient-to-r ${project.color}`}></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div 
          key={`button-${animationKey}`}
          className="text-center mt-8 sm:mt-12 md:mt-16 animate-fade-in" 
          style={{ animationDelay: '0.6s' }}
        >
          <a
            href="https://github.com/misharasandalidesilva"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl  border-2 sm:rounded-2xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl ${
              darkMode
                ? 'bg-gray-800 text-blue-400 border-blue-500 hover:bg-gray-700'
                : 'bg-blue-600 text-white border-blue-700 hover:bg-blue-700'
         }`} 
          >
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
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