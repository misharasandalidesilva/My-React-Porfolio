import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, MessageSquare } from 'lucide-react';

interface ContactProps {
  darkMode?: boolean;
}

export default function Contact({ darkMode = true }: ContactProps) {
  const [animationKey, setAnimationKey] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async () => {
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields! ⚠️');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address! ⚠️');
      return;
    }

    setIsSubmitting(true);

    try {
      // Using FormSubmit.co - No setup required!
      const response = await fetch('https://formsubmit.co/ajax/misharasandali@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Contact Form Message',
          message: formData.message,
          _captcha: 'false', // Disable captcha for testing
        }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        alert('Message sent successfully! 🎉 I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error:', error);
      // Fallback to mailto if FormSubmit fails
      const mailtoLink = `mailto:misharasandali@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Message')}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert('Opening your email client... Please send the email. 📧');
      }, 500);
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendToWhatsApp = () => {
    if (!formData.name || !formData.message) {
      alert('Please fill in your name and message! ⚠️');
      return;
    }

    const message = `*New Contact Message*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email || 'Not provided'}%0A*Subject:* ${formData.subject || 'N/A'}%0A%0A*Message:*%0A${formData.message}`;
    window.open(`https://wa.me/94704044549?text=${message}`, '_blank');
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />,
      title: 'Email',
      value: 'misharasandali@gmail.com',
      link: 'mailto:misharasandali@gmail.com',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: <Phone className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />,
      title: 'Phone',
      value: '+94 704044549',
      link: 'tel:+94704044549',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: <MapPin className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />,
      title: 'Location',
      value: 'Matara, Sri Lanka',
      link: '#',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex flex-col items-start justify-center py-12 xs:py-16 sm:py-20 md:py-24 text-left px-3 xs:px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <h2 
            key={`title-${animationKey}`}
            className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 xs:mb-3 sm:mb-4 text-center bg-gradient-to-r ${darkMode ? 'from-blue-200 to-blue-400' : ''} bg-clip-text text-transparent animate-fade-in`}
          >
            Get In Touch <span className="ml-2 text-white drop-shadow-lg">📬</span>
          </h2>
          <p 
            key={`subtitle-${animationKey}`}
            className={`text-xs xs:text-sm sm:text-base md:text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } animate-fade-in`}
            style={{ animationDelay: '0.2s' }}
          >
            Let's work together on your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
          {/* Contact Info & Social Links */}
          <div 
            key={`info-${animationKey}`}
            className="space-y-3 xs:space-y-4 animate-slide-in-left"
          >
            {/* Contact Cards */}
            <div className="space-y-2 xs:space-y-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group block p-2.5 xs:p-3 sm:p-4 bg-gray-800/60 backdrop-blur-sm rounded-lg sm:rounded-xl border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
                    <div className={`p-1.5 xs:p-2 sm:p-3 bg-gradient-to-br ${info.color} rounded-lg sm:rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-0.5`}>
                        {info.title}
                      </p>
                      <p className={`text-xs sm:text-sm md:text-base font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} break-all`}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-3 xs:p-4 sm:p-5 bg-gray-800/60 backdrop-blur-sm rounded-lg sm:rounded-xl border-2 border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
              <h3 className={`text-sm xs:text-base sm:text-lg md:text-xl font-bold mb-2.5 xs:mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent`}>
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-3 xs:gap-3 sm:gap-6 justify-center"> 
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
                    className="w-10 h-10 xs:w-12 xs:h-12 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 shadow-md transform hover:scale-110 border border-blue-500"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-2.5 xs:p-3 sm:p-4 md:p-5 bg-gradient-to-br from-blue-900/10 to-blue-500/20 backdrop-blur-sm rounded-lg sm:rounded-xl border-2 border-blue-800/80">
              <h3 className="text-xs xs:text-sm sm:text-base md:text-lg font-bold mb-1 xs:mb-1.5 sm:mb-2 text-blue-300">
                💡 Quick Response
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            key={`form-${animationKey}`}
            className="animate-slide-in-right"
          >
            <div className="space-y-3 xs:space-y-4">
              <div className="p-3 xs:p-4 sm:p-5 md:p-6 bg-gray-800/60 backdrop-blur-sm rounded-lg sm:rounded-xl border-2 border-gray-700/50 space-y-2.5 xs:space-y-3 sm:space-y-4">
                {/* Name Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1 xs:mb-1.5 text-gray-300">
                    Your Name 
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-2.5 py-2 xs:px-3 xs:py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-700/50 text-white border-2 border-gray-600 focus:border-blue-400"
                    placeholder="Name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1 xs:mb-1.5 text-gray-300">
                    Your Email 
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-2.5 py-2 xs:px-3 xs:py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-700/50 text-white border-2 border-gray-600 focus:border-blue-400"
                    placeholder="Email"
                    required
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-1 xs:mb-1.5 text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-2.5 py-2 xs:px-3 xs:py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-700/50 text-white border-2 border-gray-600 focus:border-blue-400"
                    placeholder="Project Discussion"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className={`block text-xs sm:text-sm font-semibold mb-1 xs:mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message 
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className={`w-full px-2.5 py-2 xs:px-3 xs:py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none ${
                      darkMode 
                        ? 'bg-gray-700/50 text-white border-2 border-gray-600 focus:border-blue-500' 
                        : 'bg-white text-gray-900 border-2 border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3">
                  {/* Email Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="group relative w-full px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 overflow-hidden rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-bold transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-gray-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <span className="relative flex items-center justify-center gap-1.5 xs:gap-2 text-white z-10">
                      {isSubmitting ? 'Sending...' : 'Send Email'}
                      <Send className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                    
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </button>

                  {/* WhatsApp Button
                  <button
                    onClick={sendToWhatsApp}
                    className="group relative w-full px-4 py-2 xs:px-5 xs:py-2.5 sm:px-6 sm:py-3 overflow-hidden rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-bold transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-700 to-green-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <span className="relative flex items-center justify-center gap-1.5 xs:gap-2 text-white z-10">
                      WhatsApp
                      <MessageSquare className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 transform group-hover:scale-110 transition-transform duration-300" />
                    </span>
                    
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}