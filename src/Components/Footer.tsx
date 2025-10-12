import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 border-t-2 ${
      darkMode 
        ? 'bg-gray-900 border-purple-500/30' 
        : 'bg-white border-pink-200'
    } transition-all duration-500 overflow-hidden`}>
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className={`absolute top-0 left-0 w-64 h-64 ${
          darkMode ? 'bg-pink-500' : 'bg-pink-300'
        } rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-0 right-0 w-64 h-64 ${
          darkMode ? 'bg-purple-500' : 'bg-purple-300'
        } rounded-full blur-3xl`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className={`text-2xl sm:text-3xl font-black mb-3 bg-gradient-to-r ${
              darkMode 
                ? 'from-pink-400 via-purple-400 to-blue-400' 
                : 'from-pink-600 via-purple-600 to-blue-600'
            } bg-clip-text text-transparent`}>
              ◆ Mishara Sandali
            </h3>
            <p className={`text-sm sm:text-base mb-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Frontend Developer & UI/UX Designer
            </p>
            <p className={`text-xs sm:text-sm ${
              darkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Creating beautiful digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className={`text-lg font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h4>
            <nav className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block text-sm sm:text-base transition-colors duration-300 ${
                    darkMode 
                      ? 'text-gray-400 hover:text-purple-400' 
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="text-center md:text-right">
            <h4 className={`text-lg font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Connect With Me
            </h4>
            
            {/* Social Icons */}
            <div className="flex justify-center md:justify-end gap-3 mb-4">
              <a 
                href="#" 
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${
                  darkMode 
                    ? 'from-pink-500 to-purple-600' 
                    : 'from-pink-400 to-purple-500'
                } flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg group`}
                aria-label="Github"
              >
                <Github className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a 
                href="#" 
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${
                  darkMode 
                    ? 'from-purple-500 to-blue-600' 
                    : 'from-purple-400 to-blue-500'
                } flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg group`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a 
                href="#" 
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${
                  darkMode 
                    ? 'from-blue-500 to-pink-600' 
                    : 'from-blue-400 to-pink-500'
                } flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg group`}
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a 
                href="mailto:mishara@example.com" 
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${
                  darkMode 
                    ? 'from-pink-500 via-purple-500 to-blue-500' 
                    : 'from-pink-400 via-purple-400 to-blue-400'
                } flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg group`}
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>

            {/* Email */}
            <p className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              mishara@example.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t-2 ${
          darkMode ? 'border-gray-800' : 'border-gray-200'
        } my-6 sm:my-8`}></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className={`text-xs sm:text-sm font-medium text-center sm:text-left ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © {currentYear} Mishara Sandali. All rights reserved.
          </p>

          {/* Made with Love */}
          <p className={`text-xs sm:text-sm flex items-center gap-2 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Built with 
            <Heart className={`w-4 h-4 ${
              darkMode ? 'text-pink-500' : 'text-pink-600'
            } animate-pulse`} fill="currentColor" />
            using React & Tailwind CSS
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${
              darkMode 
                ? 'from-pink-500 via-purple-500 to-blue-500' 
                : 'from-pink-400 via-purple-400 to-blue-400'
            } flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group`}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-800/50 text-center">
          <p className={`text-xs ${
            darkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>
            Designed & Developed by Mishara Sandali
          </p>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
}