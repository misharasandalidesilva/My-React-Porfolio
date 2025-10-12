import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare, Clock, CheckCircle } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      value: 'mishara.sandali@example.com',
      link: 'mailto:mishara.sandali@example.com',
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      value: '+94 77 123 4567',
      link: 'tel:+94771234567',
      gradient: 'from-purple-500 to-blue-600'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'Colombo, Sri Lanka',
      link: '#',
      gradient: 'from-blue-500 to-pink-600'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Availability',
      value: 'Mon - Fri, 9AM - 6PM',
      link: '#',
      gradient: 'from-pink-500 via-purple-500 to-blue-500'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'Github',
      link: '#',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      link: '#',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: 'Twitter',
      link: '#',
      gradient: 'from-sky-500 to-blue-600'
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: 'Telegram',
      link: '#',
      gradient: 'from-blue-400 to-cyan-500'
    }
  ];

  return (
    <section 
      id="contact" 
      className={`py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        darkMode ? 'bg-gray-900/50' : 'bg-gray-50/50'
      } transition-all duration-500`}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className={`absolute top-20 right-10 w-72 h-72 sm:w-96 sm:h-96 ${
          darkMode ? 'bg-pink-500' : 'bg-pink-300'
        } rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-20 left-10 w-64 h-64 sm:w-80 sm:h-80 ${
          darkMode ? 'bg-purple-500' : 'bg-purple-300'
        } rounded-full blur-3xl animate-pulse`} style={{animationDelay: '1s'}}></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 ${
          darkMode ? 'bg-blue-500' : 'bg-blue-300'
        } rounded-full blur-3xl animate-pulse`} style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
            darkMode 
              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
              : 'bg-purple-100 text-purple-700 border border-purple-300'
          }`}>
            Get In Touch
          </span>
          <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r ${
            darkMode 
              ? 'from-pink-400 via-purple-400 to-blue-400' 
              : 'from-pink-600 via-purple-600 to-blue-600'
          } bg-clip-text text-transparent`}>
            Let's Work Together
          </h2>
          <p className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have a project in mind? I'm always open to discussing new opportunities and creative collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left Side - Contact Info (2 columns) */}
          <div className="lg:col-span-2 space-y-6 animate-slide-in-left">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className={`block p-5 rounded-2xl ${
                    darkMode 
                      ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-purple-500/50' 
                      : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-purple-300'
                  } backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium mb-1 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {info.title}
                      </p>
                      <p className={`text-base font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className={`p-6 rounded-2xl ${
              darkMode 
                ? 'bg-gray-800/50 border border-gray-700/50' 
                : 'bg-white border border-gray-200'
            } backdrop-blur-sm`}>
              <h3 className={`text-lg font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Follow Me On
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-br ${social.gradient} text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300`}
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Badge */}
            <div className={`p-5 rounded-2xl ${
              darkMode 
                ? 'bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30' 
                : 'bg-gradient-to-br from-green-50 to-emerald-50 border border-green-300'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <div>
                  <p className={`text-sm font-bold ${
                    darkMode ? 'text-green-400' : 'text-green-700'
                  }`}>
                    Available for projects
                  </p>
                  <p className={`text-xs ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Usually responds within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form (3 columns) */}
          <div className="lg:col-span-3 animate-slide-in-right">
            <div className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl ${
              darkMode 
                ? 'bg-gray-800/50 border border-gray-700/50' 
                : 'bg-white border border-gray-200'
            } backdrop-blur-sm shadow-2xl`}>
              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center gap-3 animate-fade-in">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                      Message sent successfully!
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      I'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className={`w-full px-4 py-3 rounded-xl ${
                        darkMode 
                          ? 'bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500'
                      } border-2 focus:outline-none transition-all duration-300`}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className={`w-full px-4 py-3 rounded-xl ${
                        darkMode 
                          ? 'bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500'
                      } border-2 focus:outline-none transition-all duration-300`}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className={`w-full px-4 py-3 rounded-xl ${
                      darkMode 
                        ? 'bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500'
                    } border-2 focus:outline-none transition-all duration-300`}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, and budget..."
                    rows={6}
                    required
                    className={`w-full px-4 py-3 rounded-xl ${
                      darkMode 
                        ? 'bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500'
                    } border-2 focus:outline-none transition-all duration-300 resize-none`}
                  />
                </div>

                {/* Character Count */}
                <p className={`text-xs text-right ${
                  darkMode ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  {formData.message.length} / 500 characters
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative w-full bg-gradient-to-r ${
                    darkMode 
                      ? 'from-pink-500 via-purple-500 to-blue-500' 
                      : 'from-pink-400 via-purple-400 to-blue-400'
                  } text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-[1.02] transition-all duration-300 overflow-hidden group ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    darkMode 
                      ? 'from-blue-500 via-purple-500 to-pink-500' 
                      : 'from-blue-400 via-purple-400 to-pink-400'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </button>
              </form>

              {/* Privacy Note */}
              <p className={`text-xs text-center mt-6 ${
                darkMode ? 'text-gray-500' : 'text-gray-500'
              }`}>
                🔒 Your information is secure and will never be shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
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
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
          animation-delay: 0.2s;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </section>
  );
}