import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Modern online shopping experience with beautiful UI and seamless checkout',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['React', 'Tailwind', 'UI/UX'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system with stunning interface for creative professionals',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Next.js', 'TypeScript', 'API'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Fitness Tracker App',
      description: 'Mobile-first design for fitness tracking with elegant animations',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['Figma', 'UI/UX', 'Mobile'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Social Dashboard',
      description: 'Analytics dashboard with real-time data visualization and charts',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['React', 'Charts', 'Analytics'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Weather App',
      description: 'Beautiful weather forecast app with smooth animations',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      tags: ['JavaScript', 'API', 'Mobile'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Task Manager',
      description: 'Productivity app with drag & drop and team collaboration',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['React', 'DnD', 'Teams'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section 
      id="projects" 
      className={`py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${
        darkMode ? 'bg-gray-900/50' : 'bg-white/50'
      } backdrop-blur-sm relative overflow-hidden transition-all duration-500`}
    >
      {/* Background Decorations - Portfolio Colors */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className={`absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 ${
          darkMode ? 'bg-pink-500' : 'bg-pink-300'
        } rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-10 right-10 w-64 h-64 sm:w-96 sm:h-96 ${
          darkMode ? 'bg-purple-500' : 'bg-purple-300'
        } rounded-full blur-3xl animate-pulse`} style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in-up">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 bg-gradient-to-r ${
            darkMode 
              ? 'from-pink-400 via-purple-400 to-blue-400' 
              : 'from-pink-600 via-purple-600 to-blue-600'
          } bg-clip-text text-transparent`}>
            Featured Projects 🚀
          </h2>
          <p className={`text-base sm:text-lg md:text-xl ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Check out my recent work
          </p>
        </div>

        {/* Projects Grid - Increased Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              } shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-3 border-2 ${
                darkMode 
                  ? 'border-gray-800 hover:border-purple-500' 
                  : 'border-gray-200 hover:border-purple-400'
              }`}>
                {/* Project Image - Increased Height */}
                <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                    loading="lazy"
                  />
                  
                  {/* Overlay on Hover - Portfolio Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    darkMode 
                      ? 'from-black/90 via-purple-900/50 to-pink-900/30' 
                      : 'from-purple-900/80 via-purple-500/40 to-pink-500/20'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br ${
                      darkMode 
                        ? 'from-pink-500/30 via-purple-500/30 to-blue-500/30' 
                        : 'from-pink-400/40 via-purple-400/40 to-blue-400/40'
                    } backdrop-blur-sm flex items-center justify-center border-2 ${
                      darkMode ? 'border-pink-400/50' : 'border-pink-500/50'
                    } transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <ExternalLink className="w-8 h-8 sm:w-9 sm:h-9 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  
                  {/* Project Number Badge - Portfolio Colors */}
                  <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${
                    darkMode 
                      ? 'from-pink-500 via-purple-500 to-blue-500' 
                      : 'from-pink-400 via-purple-400 to-blue-400'
                  } flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-xl border-2 ${
                    darkMode ? 'border-purple-400/30' : 'border-white/50'
                  } transform group-hover:rotate-12 transition-transform duration-300`}>
                    {index + 1}
                  </div>
                </div>

                {/* Project Content - Increased Padding */}
                <div className="p-4 sm:p-5 md:p-6">
                  {/* Project Title */}
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r ${
                    darkMode 
                      ? 'from-pink-400 via-purple-400 to-blue-400' 
                      : 'from-pink-600 via-purple-600 to-blue-600'
                  } bg-clip-text text-transparent line-clamp-1`}>
                    {project.title}
                  </h3>
                  
                  {/* Project Description - More Lines */}
                  <p className={`mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base line-clamp-3 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                  
                  {/* Tags - Portfolio Colors */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold ${
                          darkMode 
                            ? 'bg-purple-900/50 text-purple-300 border border-purple-500/30' 
                            : 'bg-purple-100 text-purple-700 border border-purple-300'
                        } transition-all duration-300 hover:scale-110 hover:border-pink-500/50`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons - Portfolio Gradient */}
                  <div className="flex gap-2 sm:gap-3">
                    <a 
                      href={project.liveLink} 
                      className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r ${
                        darkMode 
                          ? 'from-pink-500 via-purple-500 to-blue-500' 
                          : 'from-pink-400 via-purple-400 to-blue-400'
                      } text-white font-semibold text-sm sm:text-base hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300`}
                    >
                      <span>View Live</span>
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                    
                    <a 
                      href={project.githubLink} 
                      className={`inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full ${
                        darkMode 
                          ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300'
                      } font-semibold text-sm sm:text-base hover:shadow-lg hover:scale-105 transition-all duration-300`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Glow Effect - Portfolio Colors */}
                <div className={`absolute -top-2 -right-2 w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br ${
                  darkMode 
                    ? 'from-pink-500 via-purple-500 to-blue-500' 
                    : 'from-pink-400 via-purple-400 to-blue-400'
                } rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
          opacity: 0;
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}