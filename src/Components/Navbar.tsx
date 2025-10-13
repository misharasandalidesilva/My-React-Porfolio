import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;                   
  setDarkMode: (mode: boolean) => void;   
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  activeSection: string;
  scrollTo: (id: string) => void;
}

export default function Navbar({ 
  darkMode,        
  setDarkMode,      
  menuOpen, 
  setMenuOpen, 
  activeSection, 
  scrollTo 
}: NavbarProps) {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact Me', id: 'contact' }];

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b-2 shadow-2xl transition-all duration-500  ${
        darkMode
          ? 'bg-gray-900/90 border-blue-400/30'
          : 'bg-white/90 border-pink-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo */}
          <div
            className={`text-lg sm:text-xl md:text-2xl font-black bg-gradient-to-r ${
              darkMode
                ? 'from-blue-50 via-blue-50 to-blue-300'
                : 'from-blue-600 via-blue-600 to-blue-600'
            } bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer animate-pulse`}
          >
            <span className="hidden sm:inline">◆ Mishara Sandali</span>
            <span className="inline sm:hidden">◆ MS</span>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  console.log('Clicking:', item.name, item.id);
                  const element = document.getElementById(item.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`relative px-3 py-2 text-base xl:text-base font-semibold  transition-colors duration-300 group ${
                  darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-full ${
                darkMode 
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                  : 'bg-gradient-to-br from-indigo-600 to-purple-600'
              } hover:scale-110 transition-all duration-300`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen && setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 sm:p-3 rounded-full transition-transform duration-300 transform hover:scale-110 ${
                darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {menuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className={`px-4 pt-2 pb-4 space-y-2 ${
            darkMode ? 'bg-gray-900' : 'bg-white'
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                console.log('Mobile clicking:', item.name, item.id);
                const element = document.getElementById(item.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                setMenuOpen && setMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                darkMode
                  ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-200'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}