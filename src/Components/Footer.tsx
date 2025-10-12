import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Code2, Sparkles } from 'lucide-react';

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

  const socialLinks = [
    { 
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />, 
      label: 'Github', 
      href: '#',
      gradient: 'from-pink-500 to-purple-600'
    },
    { 
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />, 
      label: 'LinkedIn', 
      href: '#',
      gradient: 'from-purple-500 to-blue-600'
    },
    { 
      icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />, 
      label: 'Twitter', 
      href: '#',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />, 
      label: 'Email', 
      href: 'mailto:mishara.sandali@example.com',
      gradient: 'from-pink-500 via-purple-500 to-blue-500'
    }
  ];

  const quickLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <footer 
      ref={footerRef}
      className={`relative py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-t-2 ${
        darkMode 
          ? 'bg-gray-900/95 border-purple-500/30' 
          : 'bg-white/95 border-pink-200'
      } backdrop-blur-sm transition-all duration-500 overflow-hidden`}
    >
      {/* Animated Background Decoration - Portfolio Colors */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className={`absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 ${
          darkMode ? 'bg-gradient-to-br from-pink-500 to-purple-500' : 'bg-gradient-to-br from-pink-300 to-purple-300'
        } rounded-full blur-3xl animate-pulse-slow`}></div>
        <div className={`absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 ${
          darkMode ? 'bg-gradient-to-br from-purple-500 to-blue-500' : 'bg-gradient-to-br from-purple-300 to-blue-300'
        } rounded-full blur-3xl animate-pulse-slow`} style={{animationDelay: '1s'}}></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 ${
          darkMode ? 'bg-gradient-to-br from-blue-500 to-pink-500' : 'bg-gradient-to-br from-blue-300 to-pink-300'
        } rounded-full blur-3xl animate-pulse-slow`} style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand Section */}
          <div 
            key={`brand-${animationKey}`}
            className="text-center sm:text-left lg:col-span-1 animate-fade-in-up"
          >
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${
                darkMode 
                  ? 'from-pink-500 via-purple-500 to-blue-500' 
                  : 'from-pink-400 via-purple-400 to-blue-400'
              } flex items-center justify-center shadow-lg animate-float`}>
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className={`text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r ${
                darkMode 
                  ? 'from-pink-400 via-purple-400 to-blue-400' 
                  : 'from-pink-600 via-purple-600 to-blue-600'
              } bg-clip-text text-transparent`}>
                Mishara Sandali
              </h3>
            </div>
            <p className={`text-sm sm:text-base mb-3 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Frontend Developer & UI/UX Designer
            </p>
            <p className={`text-xs sm:text-sm flex items-center justify-center sm:justify-start gap-2 ${
              darkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              <Sparkles className="w-4 h-4" />
              Creating beautiful digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div 
            key={`links-${animationKey}`}
            className="text-center sm:text-left animate-fade-in-up"
            style={{animationDelay: '0.1s'}}
          >
            <h4 className={`text-base sm:text-lg font-bold mb-4 sm:mb-5 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h4>
            <nav className="space-y-2 sm:space-y-3">
              {quickLinks.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block text-sm sm:text-base transition-all duration-300 hover:translate-x-2 ${
                    darkMode 
                      ? 'text-gray-400 hover:text-purple-400' 
                      : 'text-gray-600 hover:text-purple-600'
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
            <h4 className={`text-base sm:text-lg font-bold mb-4 sm:mb-5 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Connect With Me
            </h4>
            
            {/* Social Icons Grid */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
              {socialLinks.map((social, index) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className={`w-full aspect-square rounded-xl bg-gradient-to-br ${
                    social.gradient
                  } flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group animate-bounce-in`}
                  style={{animationDelay: `${0.3 + index * 0.1}s`}}
                  aria-label={social.label}
                  title={social.label}
                >
                  <div className="text-white group-hover:rotate-12 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Email */}
            <a 
              href="mailto:mishara.sandali@example.com"
              className={`text-xs sm:text-sm inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'text-gray-400 hover:text-purple-400 hover:bg-gray-800/50' 
                  : 'text-gray-600 hover:text-purple-600 hover:bg-gray-100'
              }`}
            >
              <Mail className="w-4 h-4" />
              mishara.sandali@example.com
            </a>
          </div>

          {/* Newsletter/CTA Section */}
          <div 
            key={`cta-${animationKey}`}
            className="text-center sm:text-left animate-fade-in-up"
            style={{animationDelay: '0.3s'}}
          >
            <h4 className={`text-base sm:text-lg font-bold mb-4 sm:mb-5 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Collaborate
            </h4>
            <p className={`text-xs sm:text-sm mb-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Have a project in mind? Let's create something amazing together!
            </p>
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r ${
                darkMode 
                  ? 'from-pink-500 via-purple-500 to-blue-500 hover:from-pink-400 hover:via-purple-400 hover:to-blue-400' 
                  : 'from-pink-400 via-purple-400 to-blue-400 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500'
              } text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group`}
            >
              Get In Touch
              <ArrowUp className="w-4 h-4 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Divider with Animation */}
        <div className={`border-t-2 ${
          darkMode ? 'border-gray-800' : 'border-gray-200'
        } my-6 sm:my-8 animate-scale-x`}></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Copyright */}
          <p 
            key={`copyright-${animationKey}`}
            className={`text-xs sm:text-sm font-medium text-center sm:text-left animate-fade-in ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
            style={{animationDelay: '0.4s'}}
          >
            © {currentYear} Mishara Sandali. All rights reserved.
          </p>

          {/* Made with Love */}
          <p 
            key={`made-${animationKey}`}
            className={`text-xs sm:text-sm flex items-center gap-2 animate-fade-in ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
            style={{animationDelay: '0.5s'}}
          >
            Built with 
            <Heart className={`w-4 h-4 ${
              darkMode ? 'text-pink-500' : 'text-pink-600'
            } animate-heartbeat`} fill="currentColor" />
            using React & Tailwind CSS
          </p>

          {/* Scroll to Top Button */}
          <button
            key={`scroll-${animationKey}`}
            onClick={scrollToTop}
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${
              darkMode 
                ? 'from-pink-500 via-purple-500 to-blue-500' 
                : 'from-pink-400 via-purple-400 to-blue-400'
            } flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group animate-bounce-slow`}
            style={{animationDelay: '0.6s'}}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Additional Info */}
        <div 
          key={`info-${animationKey}`}
          className={`mt-6 sm:mt-8 pt-6 sm:pt-8 border-t ${
            darkMode ? 'border-gray-800/50' : 'border-gray-200/50'
          } text-center animate-fade-in`}
          style={{animationDelay: '0.7s'}}
        >
          <p className={`text-xs flex items-center justify-center gap-2 ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            <Code2 className="w-4 h-4" />
            Designed & Developed with passion by Mishara Sandali
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.2);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.1);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
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

        @keyframes bounce-in {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out forwards;
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