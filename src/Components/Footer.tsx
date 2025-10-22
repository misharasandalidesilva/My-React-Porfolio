import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowUp, Code2, Sparkles } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const [animationKey, setAnimationKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setAnimationKey(prev => prev + 1);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <footer 
      ref={footerRef}
      className={`relative py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 border-t-2 ${
        darkMode 
          ? 'bg-gray-900/95 border-purple-500/30' 
          : 'bg-white/95 border-blue-200'
      } backdrop-blur-sm transition-all duration-500 scroll-smooth`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div 
            key={`brand-${animationKey}`}
            className="text-center sm:text-left animate-fade-in-up"
          >
            <div
              className={`text-lg sm:text-xl lg:text-2xl font-black bg-gradient-to-r mb-3 sm:mb-4 ${
                darkMode
                  ? 'from-blue-300 via-blue-400 to-blue-300'
                  : 'from-blue-600 via-blue-600 to-blue-600'
              } bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer`}
            >
              <span className="hidden sm:inline">◆ Mishara Sandali</span>
              <span className="inline sm:hidden">◆ MS</span>
            </div>
          
            <p className={`text-xs sm:text-sm mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Frontend Developer & UI/UX Designer
            </p>
            <p className={`text-xs flex items-center justify-center sm:justify-start gap-2 ${
              darkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Creating beautiful digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div 
            key={`links-${animationKey}`}
            className="text-center sm:text-left animate-fade-in-up"
            style={{animationDelay: '0.1s'}}
          >
            <h4 className={`text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block text-xs sm:text-sm transition-all duration-300 hover:translate-x-2 ${
                    darkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  style={{
                    animation: isVisible ? `slide-in-left 0.5s ease-out ${0.2 + index * 0.05}s both` : 'none'
                  }}
                >
                  → {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div 
            key={`social-${animationKey}`}
            className="text-center sm:text-left animate-fade-in-up"
            style={{animationDelay: '0.2s'}}
          >
            <h4 className={`text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Connect With Me
            </h4>
            
            {/* Social Icons Grid */}
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start mb-3"> 
              {[
                {
                  href: 'https://github.com/misharasandalidesilva',
                  icon: <Github className="w-4 h-4" />,
                  label: 'GitHub'
                },
                {
                  href: 'https://www.linkedin.com/in/mishara-sandali-558557319/',
                  icon: <Linkedin className="w-4 h-4" />,
                  label: 'LinkedIn'
                },
                {
                  href: 'mailto:misharasandali@gmail.com',
                  icon: <Mail className="w-4 h-4" />,
                  label: 'Email'
                },
                {
                  href: 'https://wa.me/message/CXTCRIUAFFKLD1',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  ),
                  label: 'WhatsApp'
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md transform hover:scale-110 border ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300 hover:text-blue-400 hover:bg-gray-700 border-blue-500'
                      : 'bg-gray-100 text-gray-600 hover:text-blue-600 hover:bg-gray-200 border-blue-300'
                  }`}
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            
            {/* Email */}
            <a 
              href="mailto:misharasandali@gmail.com"
              className={`text-xs inline-flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-800/50' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
              }`}
            >
              <Mail className="w-3 h-3" />
              misharasandali@gmail.com
            </a>
          </div>

          {/* CTA Section */}
          <div 
            key={`cta-${animationKey}`}
            className="text-center sm:text-left animate-fade-in-up"
            style={{animationDelay: '0.3s'}}
          >
            <h4 className={`text-sm sm:text-base lg:text-lg font-bold mb-3 sm:mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Collaborate
            </h4>
            <p className={`text-xs mb-3 sm:mb-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Have a project in mind? Let's create something amazing together!
            </p>
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r ${
                darkMode 
                  ? 'from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500' 
                  : 'from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600'
              } text-white text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group`}
            >
              Get In Touch
              <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t ${
          darkMode ? 'border-gray-800' : 'border-gray-200'
        } my-6 animate-scale-x`}></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          {/* Copyright */}
          <p 
            key={`copyright-${animationKey}`}
            className={`text-xs text-center sm:text-left animate-fade-in ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
            style={{animationDelay: '0.4s'}}
          >
            © {currentYear} Mishara Sandali. All rights reserved.
          </p>

          {/* Scroll to Top Button */}
          <button
            key={`scroll-${animationKey}`}
            onClick={scrollToTop}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${
              darkMode 
                ? 'from-blue-500 to-blue-600' 
                : 'from-blue-400 to-blue-500'
            } flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group`}
            style={{animationDelay: '0.5s'}}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Additional Info */}
        <div 
          key={`info-${animationKey}`}
          className={`mt-6 pt-6 border-t ${
            darkMode ? 'border-gray-800/50' : 'border-gray-200/50'
          } text-center animate-fade-in`}
          style={{animationDelay: '0.6s'}}
        >
          <p className={`text-xs flex items-center justify-center gap-2 ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            <Code2 className="w-3 h-3 sm:w-4 sm:h-4" />
            Designed & Developed with passion by Mishara Sandali
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        * {
          scroll-behavior: smooth;
        }
        
        html {
          scroll-behavior: smooth;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-x {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-x {
          animation: scale-x 1s ease-out forwards;
          transform-origin: left;
        }
      `}</style>
    </footer>
  );
}