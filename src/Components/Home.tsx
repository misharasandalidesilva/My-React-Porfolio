import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Facebook, ChevronDown } from 'lucide-react';

interface HomeProps {
  darkMode: boolean;
  setDarkMode?: (mode: boolean) => void;
  activeSection?: string;
  scrollTo?: (id: string) => void;
}

export default function Home({ darkMode = true }: HomeProps) {
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
      { threshold: 0.3 }
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

  return (
    <section
      ref={sectionRef}
      id="home"
      className={`min-h-screen ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
      } flex flex-col items-center justify-center py-12 xs:py-16 sm:py-20 md:py-24 text-center overflow-hidden transition-colors duration-500`}
    >
      {/* Background circles */}
      {/* <div className="absolute inset-0 opacity-4 pointer-events-none">
        <div className={`absolute top-10 left-4 xs:top-16 xs:left-8 sm:top-20 sm:left-20 w-48 h-48 xs:w-64 xs:h-64 sm:w-96 sm:h-96 rounded-full blur-3xl animate-pulse ${
          darkMode ? 'bg-blue-500' : 'bg-blue-400'
        }`}></div>
        <div
          className={`absolute bottom-10 right-4 xs:bottom-16 xs:right-8 sm:bottom-20 sm:right-20 w-48 h-48 xs:w-64 xs:h-64 sm:w-96 sm:h-96 rounded-full blur-3xl animate-pulse ${
            darkMode ? 'bg-blue-500' : 'bg-purple-400'
          }`}
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
       */}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl px-3 xs:px-4 sm:px-6">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 xs:mb-4 sm:mb-6">
          <span className={darkMode ? 'text-white' : 'text-gray-900'}>Hi, I'm </span>
          <span className="inline-block">
            {'Mishara Sandali'.split('').map((letter, index) => (
              <span
                key={`${animationKey}-${index}`}
                className="inline-block animate-letter"
                style={{
                  animationDelay: `${index * 0.04}s`,
                  backgroundImage: darkMode
                    ? 'linear-gradient(to right, rgb(96, 165, 250), rgb(147, 197, 253), rgb(96, 165, 250))'
                    : 'linear-gradient(to right, rgb(37, 99, 235), rgb(59, 130, 246), rgb(37, 99, 235))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </span>
        </h1>

        <p
          key={`title-${animationKey}`}
          className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-2 xs:mb-3 sm:mb-4 font-semibold leading-snug ${
            darkMode ? 'text-white' : 'text-gray-800'
          } animate-content`}
          style={{
            animationDelay: '0.6s'
          }}
        >
          Software Engineer & Frontend Developer / UI/UX Designer
        </p>

        <p
          key={`desc-${animationKey}`}
          className={`text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 xs:mb-8 sm:mb-12 leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          } animate-content`}
          style={{
            animationDelay: '0.8s'
          }}
        >
          Crafting beautiful, responsive, and user-friendly interfaces that turn ideas into reality.
          Passionate Front-End Developer & UI/UX Designer focused on seamless digital experiences.
        </p>

        {/* Social Links */}
        <div
          key={`social-${animationKey}`}
          className="flex flex-wrap gap-3 xs:gap-4 sm:gap-6 justify-center animate-content"
          style={{
            animationDelay: '1s'
          }}
        >
          {[
            {
              href: 'https://github.com/misharasandalidesilva',
              icon: <Github className="w-4 h-4 xs:w-5 xs:h-5" />,
            },
            {
              href: 'https://www.linkedin.com/in/mishara-sandali-558557319/',
              icon: <Linkedin className="w-4 h-4 xs:w-5 xs:h-5" />,
            },
            {
              href: 'https://www.facebook.com/share/xtHt4rjZG8rtJWdT/',
              icon: <Facebook className="w-4 h-4 xs:w-5 xs:h-5" />,
            },
            {
              href: 'mailto:misharasandali@gmail.com',
              icon: <Mail className="w-4 h-4 xs:w-5 xs:h-5" />,
            },
            {
              href: 'https://wa.me/message/CXTCRIUAFFKLD1',
              icon: (
                <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              ),
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('mailto:') ? '_self' : '_blank'}
              rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className={`w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:text-blue-400 hover:bg-gray-700 border-blue-500' 
                  : 'bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50 border-blue-400 shadow-lg'
              } rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 border-2`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-letter {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-content {
          animation: fadeInUp 0.9s ease-in forwards;
          opacity: 0;
        }
      `}</style>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 w-full flex justify-center animate-bounce">
        <a href="#about">
          <ChevronDown className={`w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 ${
            darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
          } transition-colors cursor-pointer`} />
        </a>
      </div>
    </section>
  );
}