import React, { useState, useEffect, useRef } from 'react';
import { Code2, Server, Database, Smartphone, Palette, Settings } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces',
      icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30 hover:border-blue-500',
      skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend Development',
      description: 'Creating robust and scalable server solutions',
      icon: <Server className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500/30 hover:border-green-500',
      skills: ['Node.js', 'Express', 'Python', 'Java', 'REST API', 'Spring Boot']
    },
    {
      title: 'Database',
      description: 'Managing and optimizing data storage',
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500/30 hover:border-orange-500',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase']
    },
    {
      title: 'DevOps & Tools',
      description: 'Streamlining development processes',
      icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30 hover:border-purple-500',
      skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Docker']
    },
    {
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile apps',
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-pink-500 to-rose-500',
      borderColor: 'border-pink-500/30 hover:border-pink-500',
      skills: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      title: 'Design & UI/UX',
      description: 'Crafting beautiful user interfaces',
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-indigo-500 to-purple-500',
      borderColor: 'border-indigo-500/30 hover:border-indigo-500',
      skills: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping']
    }
  ];

  return (
    <section 
      ref={sectionRef}
       id="skills"
        className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-16 px-4 sm:px-6 lg:px-10"
      >
      {/* Background Effects
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className={`absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 ${
          darkMode ? 'bg-blue-500' : 'bg-blue-300'
        } rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-10 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 ${
          darkMode ? 'bg-purple-500' : 'bg-purple-300'
        } rounded-full blur-3xl animate-pulse`} style={{animationDelay: '1s'}}></div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 
          key={`title-${animationKey}`}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 font-black mb-3 sm:mb-4 text-center bg-gradient-to-r ${darkMode ? 'from-blue-200 to-blue-400' : ''} bg-clip-text text-transparent animate-fade-in`}
        >
          Skills & Technologies <span className="ml-2 text-white drop-shadow-lg">💻</span>
        </h2>
          <p 
            key={`subtitle-${animationKey}`}
            className={`text-base sm:text-lg md:text-xl ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } animate-fade-in`}
            style={{ animationDelay: '0.2s' }}
          >
            My technical expertise and tools I work with
          </p>
        </div>

        {/* Skills Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={`${category.title}-${animationKey}`}
              className={`group relative ${
                darkMode 
                  ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                  : 'bg-white hover:bg-gray-50'
              } backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 ${
                category.borderColor
              } transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-slide-up overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative">
                {/* Icon with Gradient Background */}
                <div className={`bg-gradient-to-br ${category.gradient} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>

                {/* Description */}
                <p className={`text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {category.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-2 py-1 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 ${
                        darkMode 
                          ? 'bg-gray-700/50 hover:bg-gray-700 text-gray-200 border-gray-600/50 hover:border-gray-500' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300 hover:border-gray-400'
                      } rounded-lg text-xs sm:text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Skill Count Badge */}
                {/* <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br ${
                  category.gradient
                } flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  {category.skills.length}
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section (Optional) */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {[
            { number: '20+', label: 'Technologies', gradient: 'from-blue-500 to-cyan-500' },
            { number: '50+', label: 'Projects', gradient: 'from-purple-500 to-pink-500' },
            { number: '3+', label: 'Years Exp', gradient: 'from-green-500 to-emerald-500' },
            { number: '100%', label: 'Passionate', gradient: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl ${
                darkMode 
                  ? 'bg-gray-800/50 border border-gray-700/50' 
                  : 'bg-white border border-gray-200'
              } backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className={`text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r ${
                stat.gradient
              } bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className={`text-xs sm:text-sm md:text-base font-medium ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Custom Animations */}
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