import React, { useState, useEffect, useRef } from 'react';
import { Code2, Server, Database, Smartphone, Palette, Settings } from 'lucide-react';

interface SkillsProps {
  darkMode?: boolean;
}

export default function Skills({ darkMode = true }: SkillsProps) {
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
      icon: <Code2 className="w-6 h-6 sm:w-7 sm:h-7" />,
      iconBg: 'bg-blue-600',
      borderColor: 'border-blue-500/50',
      skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend Development',
      description: 'Creating robust and scalable server-side solutions',
      icon: <Server className="w-6 h-6 sm:w-7 sm:h-7" />,
      iconBg: 'bg-green-600',
      borderColor: 'border-green-500/50',
      skills: ['Node.js', 'Express', 'Python', 'Java', 'REST API', 'Spring Boot']
    },
    {
      title: 'Database',
      description: 'Managing and optimizing data storage solutions',
      icon: <Database className="w-6 h-6 sm:w-7 sm:h-7" />,
      iconBg: 'bg-orange-600',
      borderColor: 'border-orange-500/50',
      skills: ['MongoDB', 'MySQL', 'Firebase']
    },
    {
      title: 'DevOps & Tools',
      description: 'Streamlining development and deployment processes',
      icon: <Settings className="w-6 h-6 sm:w-7 sm:h-7" />,
      iconBg: 'bg-purple-600',
      borderColor: 'border-purple-500/50',
      skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA']
    },
    {
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile applications',
      icon: <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />,
      iconBg: 'bg-pink-600',
      borderColor: 'border-pink-500/50',
      skills: ['React Native', 'iOS', 'Android']
    },
    {
      title: 'Design & UI/UX',
      description: 'Crafting beautiful and user-friendly interfaces',
      icon: <Palette className="w-6 h-6 sm:w-7 sm:h-7" />,
      iconBg: 'bg-indigo-600',
      borderColor: 'border-indigo-500/50',
      skills: ['Figma', 'UI Design']
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex flex-col lg:flex-row items-center justify-center pt-16 px-4 sm:px-8 lg:px-16"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 
            key={`title-${animationKey}`}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 text-center bg-gradient-to-r ${
              darkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent animate-fade-in`}
        >
            Skills & Technologies 💻
          </h2>
          <p 
            key={`subtitle-${animationKey}`}
           className={`text-center text-base sm:text-lg md:text-xl mb-8 sm:mb-12 md:mb-16 ${darkMode ? 'text-gray-300' : 'text-gray-600'} animate-fade-in`}
          style={{ animationDelay: '0.2s' }}
          >
            My technical expertise and tools
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={`${category.title}-${animationKey}`}
              className={`group relative bg-gray-800/40 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 border ${category.borderColor} hover:border-opacity-100 border-opacity-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slide-up overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`${category.iconBg} w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-2.5">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-gray-700/50 hover:bg-gray-700 text-gray-200 rounded-lg text-xs sm:text-sm font-medium border border-gray-600/50 hover:border-gray-500 transition-all duration-200 hover:scale-105 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
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