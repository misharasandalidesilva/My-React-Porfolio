import { useState, useEffect, useRef } from 'react';
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
      icon: <Code2 className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      gradient: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30 hover:border-blue-500',
      skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend Development',
      description: 'Creating robust and scalable server solutions',
      icon: <Server className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      gradient: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500/30 hover:border-green-500',
      skills: ['Node.js', 'Express', 'Python', 'Java', 'REST API', 'Spring Boot']
    },
    {
      title: 'Database',
      description: 'Managing and optimizing data storage',
      icon: <Database className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      gradient: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500/30 hover:border-orange-500',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase']
    },
    {
      title: 'DevOps & Tools',
      description: 'Streamlining development processes',
      icon: <Settings className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      gradient: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30 hover:border-purple-500',
      skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Docker']
    },
    {
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile apps',
      icon: <Smartphone className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      gradient: 'from-pink-500 to-rose-500',
      borderColor: 'border-pink-500/30 hover:border-pink-500',
      skills: ['React Native', 'iOS', 'Android']
    },
    {
      title: 'Design & UI/UX',
      description: 'Crafting beautiful user interfaces',
      icon: <Palette className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      gradient: 'from-indigo-500 to-purple-500',
      borderColor: 'border-indigo-500/30 hover:border-indigo-500',
      skills: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping']
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills"
      className={`relative pt-12 sm:pt-14 md:pt-16 lg:pt-20 pb-12 sm:pb-14 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
      } transition-all duration-500`}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-14">
          <h2 
            key={`title-${animationKey}`}
            className={`text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black mb-2 sm:mb-3 md:mb-4 text-center bg-gradient-to-r ${
              darkMode ? 'from-blue-200 to-blue-400' : 'from-blue-600 to-blue-800'
            } bg-clip-text text-transparent animate-fade-in`}
          >
            Skills & Technologies <span className={`ml-2 drop-shadow-lg ${darkMode ? 'text-white' : 'text-gray-700'}`}>💻</span>
          </h2>
          <p 
            key={`subtitle-${animationKey}`}
            className={`text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            } animate-fade-in`}
            style={{ animationDelay: '0.2s' }}
          >
            My technical expertise and tools I work with
          </p>
        </div>

        {/* Skills Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7">
          {skillCategories.map((category, index) => (
            <div
              key={`${category.title}-${animationKey}`}
              className={`group relative ${
                darkMode 
                  ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                  : 'bg-white hover:bg-gray-50'
              } backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-2xl p-3 xs:p-3.5 sm:p-4 md:p-5 lg:p-6 border-2 ${
                category.borderColor
              } transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-slide-up overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative">
                {/* Icon with Gradient Background */}
                <div className={`bg-gradient-to-br ${category.gradient} w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl md:rounded-xl lg:rounded-2xl flex items-center justify-center text-white mb-2 xs:mb-2.5 sm:mb-3 md:mb-3.5 lg:mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className={`text-sm xs:text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-1 xs:mb-1.5 sm:mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>

                {/* Description */}
                <p className={`text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base mb-2 xs:mb-2.5 sm:mb-3 md:mb-3.5 lg:mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {category.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-1.5 md:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-1.5 py-0.5 xs:px-2 xs:py-1 sm:px-2 sm:py-1 md:px-2.5 md:py-1 lg:px-3 lg:py-1.5 ${
                        darkMode 
                          ? 'bg-gray-700/50 hover:bg-gray-700 text-gray-200 border-gray-600/50 hover:border-gray-500' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300 hover:border-gray-400'
                      } rounded-md sm:rounded-lg text-[9px] xs:text-[10px] sm:text-xs md:text-xs lg:text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-default`}
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