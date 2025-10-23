import { useState, useEffect, useRef } from 'react';
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
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields! ⚠️');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address! ⚠️');
      return;
    }

    setIsSubmitting(true);

    try {
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
          _captcha: 'false',
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
  alert('Message sent successfully! 🎉 I will get back to you soon.');
  setFormData({ name: '', email: '', subject: '', message: '' });
} else {
  throw new Error('Failed to send');
}

    } catch (error) {
      console.error('Error:', error);
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
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Email',
      value: 'misharasandali@gmail.com',
      link: 'mailto:misharasandali@gmail.com',
      color: darkMode ? 'from-blue-400 to-blue-600' : 'from-blue-500 to-blue-700'
    },
    {
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Phone',
      value: '+94 704044549',
      link: 'tel:+94704044549',
      color: darkMode ? 'from-green-400 to-green-600' : 'from-green-500 to-green-700'
    },
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Location',
      value: 'Matara, Sri Lanka',
      link: '#',
      color: darkMode ? 'from-purple-400 to-purple-600' : 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className={`min-h-screen lg:pt-20 flex items-center justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12">
          <h2 
            key={`title-${animationKey}`}
            className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 bg-gradient-to-r ${
              darkMode 
                ? 'from-blue-200 to-blue-400' 
                : 'from-blue-600 to-blue-800'
            } bg-clip-text text-transparent animate-fade-in`}
          >
            Get In Touch <span className={darkMode ? 'text-white' : 'text-gray-700'}>📬</span>
          </h2>
          <p 
            key={`subtitle-${animationKey}`}
            className={`text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg animate-fade-in ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Let's work together on your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {/* Contact Info & Social Links */}
          <div 
            key={`info-${animationKey}`}
            className="space-y-4 lg:space-y-5 animate-slide-in-left"
          >
            {/* Contact Cards */}
            <div className="space-y-3 lg:space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className={`group block p-4 sm:p-5 backdrop-blur-sm rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                    darkMode 
                      ? 'bg-gray-800/60 border-gray-700/50 hover:border-blue-500/50 hover:shadow-blue-500/20' 
                      : 'bg-white/80 border-gray-200 hover:border-blue-400 hover:shadow-blue-400/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 sm:p-2.5 bg-gradient-to-br ${info.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {info.title}
                      </p>
                      <p className={`text-sm sm:text-lg font-semibold break-words ${
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
            <div className={`p-5 sm:p-6 backdrop-blur-sm rounded-xl border-2 transition-all duration-300 ${
              darkMode 
                ? 'bg-gray-800/60 border-gray-700/50 hover:border-blue-500/30' 
                : 'bg-white/80 border-gray-200 hover:border-blue-300'
            }`}>
              <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-4 lg:mb-5 bg-gradient-to-r ${
                darkMode ? 'from-blue-400 to-blue-400' : 'from-blue-600 to-blue-800'
              } bg-clip-text text-transparent`}>
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4 justify-center"> 
                {[
                  {
                    href: 'https://github.com/misharasandalidesilva',
                    icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
                    label: 'GitHub'
                  },
                  {
                    href: 'https://www.linkedin.com/in/mishara-sandali-558557319/',
                    icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
                    label: 'LinkedIn'
                  },
                  {
                    href: 'https://www.facebook.com/share/xtHt4rjZG8rtJWdT/',
                    icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />,
                    label: 'Facebook'
                  },
                  {
                    href: 'mailto:misharasandali@gmail.com',
                    icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
                    label: 'Email'
                  },
                  {
                    href: 'https://wa.me/message/CXTCRIUAFFKLD1',
                    icon: (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
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
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md transform hover:scale-110 border-2 ${
                      darkMode 
                        ? 'bg-gray-800 text-gray-300 hover:text-blue-400 hover:bg-gray-700 border-blue-500' 
                        : 'bg-white text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-blue-400'
                    }`}
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className={`p-5 sm:p-6 backdrop-blur-sm rounded-xl border-2 ${
              darkMode 
                ? 'bg-gradient-to-br from-blue-900/10 to-blue-500/20 border-blue-800/80' 
                : 'bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'
            }`}>
              <h3 className={`text-base sm:text-lg font-bold mb-2 ${
                darkMode ? 'text-blue-300' : 'text-blue-700'
              }`}>
                💡 Quick Response
              </h3>
              <p className={`text-xs sm:text-base leading-relaxed ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            key={`form-${animationKey}`}
            className="animate-slide-in-right"
          >
            <div className={`p-6 sm:p-7 lg:p-8 backdrop-blur-sm rounded-xl border-2 space-y-5 ${
              darkMode 
                ? 'bg-gray-800/60 border-gray-700/50' 
                : 'bg-white/80 border-gray-200'
            }`}>
              {/* Name Input */}
              <div>
                <label className={`block text-sm sm:text-base font-semibold mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Your Name
                </label>
                <input
                
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-lg text-sm sm:text-base transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none border-2 ${
                    darkMode 
                      ? 'bg-gray-700/50 text-white border-gray-600 focus:border-blue-400' 
                      : 'bg-white text-gray-900 border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className={`block text-sm sm:text-base font-semibold mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-lg text-sm sm:text-base transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none border-2 ${
                    darkMode 
                      ? 'bg-gray-700/50 text-white border-gray-600 focus:border-blue-400' 
                      : 'bg-white text-gray-900 border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className={`block text-sm sm:text-base font-semibold mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className={`w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-lg text-sm sm:text-base transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none border-2 ${
                    darkMode 
                      ? 'bg-gray-700/50 text-white border-gray-600 focus:border-blue-400' 
                      : 'bg-white text-gray-900 border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="Project Discussion"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className={`block text-sm sm:text-base font-semibold mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className={`w-full px-4 py-3 sm:px-5 sm:py-3.5 rounded-lg text-sm sm:text-base transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none border-2 ${
                    darkMode 
                      ? 'bg-gray-700/50 text-white border-gray-600 focus:border-blue-500' 
                      : 'bg-white text-gray-900 border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Email Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="group relative w-full px-6 py-3.5 sm:py-4 overflow-hidden rounded-xl text-sm sm:text-base font-bold transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-700 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <span className="relative flex items-center justify-center gap-2 text-white z-10">
                    {isSubmitting ? 'Sending...' : 'Send Email'}
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                  
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </button>

                {/* WhatsApp Button */}
                <button
                  onClick={sendToWhatsApp}
                  className="group relative w-full px-6 py-3.5 sm:py-4 overflow-hidden rounded-xl text-sm sm:text-base font-bold transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-green-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-800 to-green-700 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <span className="relative flex items-center justify-center gap-2 text-white z-10">
                    WhatsApp
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:scale-110 transition-transform duration-300" />
                  </span>
                  
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </button>
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