// import React, { useState, useEffect } from 'react';
// import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Award, Figma, Layers, Camera } from 'lucide-react';

// export default function Portfolio() {
//   const [darkMode, setDarkMode] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [aboutImage, setAboutImage] = useState('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'skills', 'projects', 'contact'];
//       const current = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (current) setActiveSection(current);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollTo = (id: string) => {
//     const element = document.getElementById(id);
//     element?.scrollIntoView({ behavior: 'smooth' });
//     setMenuOpen(false);
//   };

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     alert(`Message sent! Name: ${formData.name}, Email: ${formData.email}`);
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const skills = [
//     { name: 'React.js', icon: <Code className="w-4 h-4" />, color: 'from-blue-400 to-cyan-400' },
//     { name: 'HTML & CSS', icon: <Palette className="w-4 h-4" />, color: 'from-orange-400 to-pink-400' },
//     { name: 'JavaScript', icon: <Zap className="w-4 h-4" />, color: 'from-yellow-400 to-orange-400' },
//     { name: 'UI/UX Design', icon: <Figma className="w-4 h-4" />, color: 'from-purple-400 to-pink-400' },
//     { name: 'Tailwind CSS', icon: <Layers className="w-4 h-4" />, color: 'from-teal-400 to-blue-400' },
//     { name: 'Responsive Design', icon: <Award className="w-4 h-4" />, color: 'from-green-400 to-emerald-400' },
//   ];

//   const projects = [
//     { title: 'E-Commerce Platform', description: 'Modern online shopping experience with beautiful UI and seamless checkout', image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop', tags: ['React', 'Tailwind', 'UI/UX'], link: '#' },
//     { title: 'Portfolio CMS', description: 'Content management system with stunning interface for creative professionals', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', tags: ['Next.js', 'Design', 'API'], link: '#' },
//     { title: 'Fitness App UI', description: 'Mobile-first design for fitness tracking with elegant animations', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop', tags: ['Figma', 'UI/UX', 'Mobile'], link: '#' },
//   ];

//   return (
//     <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white' : 'bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 text-gray-900'}`}>
//       <style>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }
        
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
        
//         @keyframes gradient {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
        
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }
        
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }
        
//         .animate-fade-in-up {
//           animation: fade-in-up 1s ease-out forwards;
//         }
//       `}</style>

//       <nav className={`fixed w-full z-50 transition-all duration-500 ${darkMode ? 'bg-gray-900/90 border-purple-500/30' : 'bg-white/90 border-pink-200/50'} backdrop-blur-xl shadow-2xl border-b-2`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className={`text-3xl font-black bg-gradient-to-r ${darkMode ? 'from-pink-400 via-purple-400 to-blue-400' : 'from-pink-600 via-purple-600 to-blue-600'} bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer`}>◆ Mishara Sandali</div>
//             <div className="hidden md:flex items-center space-x-2">
//               {[{ name: 'home', icon: '🏠' }, { name: 'about', icon: '👩‍💻' }, { name: 'skills', icon: '⚡' }, { name: 'projects', icon: '🚀' }, { name: 'contact', icon: '💬' }].map((item) => (
//                 <button key={item.name} onClick={() => scrollTo(item.name)} className={`group relative px-6 py-3 capitalize font-semibold transition-all duration-300 ${activeSection === item.name ? 'text-white scale-110' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
//                   <span className="relative z-10 flex items-center gap-2"><span className="text-lg">{item.icon}</span>{item.name}</span>
//                   {activeSection === item.name ? <div className={`absolute inset-0 bg-gradient-to-r ${darkMode ? 'from-pink-500 via-purple-500 to-blue-500' : 'from-pink-400 via-purple-400 to-blue-400'} rounded-full animate-pulse`}></div> : <div className={`absolute inset-0 bg-gradient-to-r ${darkMode ? 'from-pink-500 via-purple-500 to-blue-500' : 'from-pink-400 via-purple-400 to-blue-400'} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>}
//                 </button>
//               ))}
//             </div>
//             <div className="flex items-center space-x-4">
//               <button onClick={() => setDarkMode(!darkMode)} className={`relative p-3 rounded-full ${darkMode ? 'bg-gradient-to-br from-yellow-400 to-orange-500' : 'bg-gradient-to-br from-indigo-600 to-purple-600'} hover:scale-110 transition-all duration-300 shadow-lg`}>
//                 <div className="relative z-10 transition-transform duration-500 hover:rotate-180">{darkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />}</div>
//               </button>
//               <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden p-3 rounded-full bg-gradient-to-r ${darkMode ? 'from-pink-500 to-purple-500' : 'from-pink-400 to-purple-400'} hover:scale-110 transition-transform duration-300`}>{menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
//             </div>
//           </div>
//         </div>
//         {menuOpen && (
//           <div className={`md:hidden ${darkMode ? 'bg-gray-900/98 border-purple-500' : 'bg-white/98 border-pink-400'} backdrop-blur-xl border-t-2 shadow-2xl`}>
//             <div className="px-6 py-6 space-y-2">
//               {[{ name: 'home', icon: '🏠' }, { name: 'about', icon: '👩‍💻' }, { name: 'skills', icon: '⚡' }, { name: 'projects', icon: '🚀' }, { name: 'contact', icon: '💬' }].map((item) => (
//                 <button key={item.name} onClick={() => scrollTo(item.name)} className={`flex items-center gap-3 w-full text-left capitalize py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${activeSection === item.name ? `bg-gradient-to-r ${darkMode ? 'from-pink-500 to-purple-500' : 'from-pink-400 to-purple-400'} text-white scale-105` : darkMode ? 'hover:bg-gray-800' : 'hover:bg-pink-50'}`}>
//                   <span className="text-xl">{item.icon}</span>{item.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-20">
//           <div className={`absolute top-20 left-20 w-96 h-96 ${darkMode ? 'bg-pink-500' : 'bg-pink-300'} rounded-full blur-3xl animate-pulse`}></div>
//           <div className={`absolute bottom-20 right-20 w-96 h-96 ${darkMode ? 'bg-purple-500' : 'bg-purple-300'} rounded-full blur-3xl animate-pulse`} style={{animationDelay: '1s'}}></div>
//         </div>
//         <div className="max-w-7xl mx-auto text-center relative z-10">
//           <div className="mb-8"><div className={`w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br ${darkMode ? 'from-pink-400 via-purple-400 to-blue-400' : 'from-pink-400 via-purple-400 to-blue-400'} flex items-center justify-center text-6xl font-black shadow-2xl border-4 ${darkMode ? 'border-purple-400' : 'border-white'} hover:scale-110 transition-transform duration-300 animate-spin-slow`}>MS</div></div>
//           <h1 className="text-5xl md:text-7xl font-black mb-6">Hi, I'm <span className={`bg-gradient-to-r ${darkMode ? 'from-pink-400 via-purple-400 to-blue-400' : 'from-pink-500 via-purple-500 to-blue-500'} bg-clip-text text-transparent animate-gradient`}>Mishara Sandali</span></h1>
//           <p className={`text-xl md:text-3xl mb-8 font-semibold ${darkMode ? 'text-purple-300' : 'text-purple-600'} animate-fade-in-up`}>Frontend Developer & UI/UX Designer ✨</p>
//           <p className={`text-lg max-w-2xl mx-auto mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'} animate-fade-in-up`} style={{animationDelay: '0.2s'}}>Creating beautiful, responsive, and user-friendly interfaces that bring ideas to life</p>
//           <button onClick={() => scrollTo('projects')} className={`bg-gradient-to-r ${darkMode ? 'from-pink-400 via-purple-400 to-blue-400' : 'from-pink-400 via-purple-400 to-blue-400'} text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-fade-in-up`} style={{animationDelay: '0.4s'}}>View My Work 🚀</button>
//         </div>
//       </section>

//       <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm transition-all duration-500`}>
//         <div className="max-w-7xl mx-auto">
//           <h2 className={`text-5xl font-black mb-4 text-center bg-gradient-to-r ${darkMode ? 'from-pink-400 via-purple-400 to-blue-400' : 'from-pink-500 via-purple-500 to-blue-500'} bg-clip-text text-transparent`}>About Me 👩‍💻</h2>
//           <p className={`text-center text-lg mb-16 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Get to know me better</p>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="relative group">
//               <div className={`absolute inset-0 bg-gradient-to-r ${darkMode ? 'from-pink-500 to-purple-500' : 'from-pink-400 to-purple-400'} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
//               <div className="relative">
//                 <img src={aboutImage} alt="Mishara Sandali" className="rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500" />
//                 <label className={`absolute bottom-4 right-4 p-4 rounded-full ${darkMode ? 'bg-purple-600' : 'bg-purple-400'} hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl`}>
//                   <Camera className="w-6 h-6 text-white" />
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => {
//                       const files = e.target.files;
//                       if (files && files.length > 0) {
//                         const file = files[0];
//                         const reader = new FileReader();
//                         reader.onloadend = () => {
//                           if (reader.result) {
//                             setAboutImage(reader.result as string);
//                           }
//                         };
//                         reader.readAsDataURL(file);
//                       }
//                     }}
//                     className="hidden"
//                   />
//                 </label>
//               </div>
//             </div>
//             <div className="space-y-6">
//               <h3 className={`text-3xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Frontend Developer & UI/UX Designer</h3>
//               <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>I'm a passionate frontend developer specializing in creating stunning, responsive web applications with a strong focus on user experience and visual design.</p>
//               <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>With expertise in React, modern CSS frameworks, and UI/UX design principles, I transform creative ideas into pixel-perfect, interactive experiences that users love.</p>
//               <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>My goal is to build interfaces that are not only beautiful but also intuitive, accessible, and performant across all devices.</p>
//               <div className="flex space-x-4 pt-4">
//                 <a href="#" className={`p-4 rounded-xl bg-gradient-to-r ${darkMode ? 'from-pink-400 to-purple-400' : 'from-pink-400 to-purple-400'} hover:shadow-2xl hover:scale-110 transition-all duration-300`}><Github className="w-6 h-6 text-white" /></a>
//                 <a href="#" className={`p-4 rounded-xl bg-gradient-to-r ${darkMode ? 'from-pink-400 to-purple-400' : 'from-pink-400 to-purple-400'} hover:shadow-2xl hover:scale-110 transition-all duration-300`}><Linkedin className="w-6 h-6 text-white" /></a>
//                 <a href="#" className={`p-4 rounded-xl bg-gradient-to-r ${darkMode ? 'from-pink-400 to-purple-400' : 'from-pink-400 to-purple-400'} hover:shadow-2xl hover:scale-110 transition-all duration-300`}><Mail className="w-6 h-6 text-white" /></a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="skills" className="py-20 px-4 relative overflow-hidden transition-all duration-500">
//         <div className="absolute inset-0 opacity-10">
//           <div className={`absolute top-10 left-10 w-64 h-64 ${darkMode ? 'bg-pink-400' : 'bg-pink-300'} rounded-full blur-3xl animate-pulse`}></div>
//           <div className={`absolute bottom-10 right-10 w-96 h-96 ${darkMode ? 'bg-purple-400' : 'bg-purple-300'} rounded-full blur-3xl animate-pulse`} style={{animationDelay: '1.5s'}}></div>
//         </div>
//         <div className="max-w-6xl mx-auto relative z-10">
//           <h2 className={`text-5xl font-black mb-4 text-center bg-gradient-to-r ${darkMode ? 'from-pink-400 via-purple-400 to-blue-400' : 'from-pink-500 via-purple-500 to-blue-500'} bg-clip-text text-transparent`}>My Skills ⚡</h2>
//           <p className={`text-center text-lg mb-16 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Technologies & tools I work with</p>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {skills.map((skill, index) => (
//               <div key={skill.name} className="group">
//                 <div 
//                   className={`relative p-4 rounded-xl ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-white to-gray-50'} shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 border ${darkMode ? 'border-gray-700 hover:border-purple-500' : 'border-gray-200 hover:border-purple-400'} overflow-hidden`}
//                   style={{
//                     animation: `float 3s ease-in-out infinite`,
//                     animationDelay: `${index * 0.2}s`
//                   }}
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
//                   <div className="relative z-10 flex flex-col items-center text-center space-y-2">
//                     <div className={`w-10 h-10 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-md`}>
//                       <div className="text-white">{skill.icon}</div>
//                     </div>
                    
//                     <h3 className="text-sm font-bold">{skill.name}</h3>
                    
//                     <div className="flex gap-1">
//                       {[...Array(5)].map((_, i) => (
//                         <div 
//                           key={i}
//                           className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${skill.color} transition-all duration-300`}
//                           style={{
//                             animation: `pulse 1.5s ease-in-out infinite`,
//                             animationDelay: `${i * 0.1}s`,
//                             opacity: 0.4
//                           }}
//                         ></div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   <div className={`absolute -bottom-1 -right-1 w-16 h-16 bg-gradient-to-br ${skill.color} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-sm relative transition-all duration-500`}>
//         <div className="max-w-7xl mx-auto">
//           <h2 className={`text-5xl font-black mb-4 text-center bg-gradient-to-r ${darkMode ? 'from-pink-400 via-purple-400 to-blue-400' : 'from-pink-500 via-purple-500 to-blue-500'} bg-clip-text text-transparent`}>Featured Projects 🚀</h2>
//           <p className={`text-center text-lg mb-16 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Check out my recent work</p>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {projects.map((project, index) => (
//               <div key={index} className="group relative">
//                 <div className={`relative rounded-3xl overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:-translate-y-6 border-2 ${darkMode ? 'border-gray-800 hover:border-purple-500' : 'border-gray-200 hover:border-purple-400'}`}>
//                   <div className="relative h-56 overflow-hidden">
//                     <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-3 transition-all duration-700" />
//                     <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-black/90 via-purple-900/50' : 'from-purple-900/80 via-purple-500/40'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
//                       <div className={`w-20 h-20 rounded-full ${darkMode ? 'bg-white/20' : 'bg-white/40'} backdrop-blur-sm flex items-center justify-center border-2 border-white/50 transform group-hover:scale-110 transition-transform duration-300`}><ExternalLink className="w-10 h-10 text-white" /></div>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <div className="flex items-start justify-between mb-3">
//                       <h3 className={`text-2xl font-bold bg-gradient-to-r ${darkMode ? 'from-pink-400 to-purple-400' : 'from-pink-600 to-purple-600'} bg-clip-text text-transparent`}>{project.title}</h3>
//                       <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${darkMode ? 'from-pink-500 to-purple-600' : 'from-pink-400 to-purple-500'} flex items-center justify-center text-white font-bold shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>{index + 1}</div>
//                     </div>
//                     <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {project.tags.map((tag) => (
//                         <span key={tag} className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-purple-900/50 text-purple-300 border border-purple-500/30' : 'bg-purple-100 text-purple-700 border border-purple-300'} transition-all duration-300 hover:scale-110`}>#{tag}</span>
//                       ))}
//                     </div>
//                     <a href={project.link} className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${darkMode ? 'from-pink-400 to-purple-500' : 'from-pink-400 to-purple-500'} text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300`}>
//                       <span>View Project</span><ExternalLink className="w-4 h-4" />
//                     </a>
//                   </div>
//                   <div className={`absolute -top-2 -right-2 w-32 h-32 bg-gradient-to-br ${darkMode ? 'from-pink-500 to-purple-500' : 'from-pink-400 to-purple-400'} rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="contact" className="py-20 px-4 relative overflow-hidden transition-all duration-500">
//         <div className="absolute inset-0 opacity-20">
//           <div className={`absolute top-20 right-20 w-96 h-96 ${darkMode ? 'bg-pink-400' : 'bg-pink-300'} rounded-full blur-3xl animate-pulse`}></div>
//           <div className={`absolute bottom-20 left-20 w-80 h-80 ${darkMode ? 'bg-blue-400' : 'bg-blue-300'} rounded-full blur-3xl animate-pulse`} style={{animationDelay: '1s'}}></div>
//         </div>
//         <div className="max-w-3xl mx-auto text-center relative z-10">
//           <h2 className={`text-5xl font-black mb-4 bg-gradient-to-r ${darkMode ? 'from-pink-400 via-purple-400 to-blue-400' : 'from-pink-500 via-purple-500 to-blue-500'} bg-clip-text text-transparent`}>Let's Work Together 💬</h2>
//           <p className={`text-xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Have a project in mind? Let's create something amazing!</p>
//           <div className={`p-10 rounded-3xl ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-white to-pink-50'} shadow-2xl border-2 ${darkMode ? 'border-purple-500/30 hover:border-purple-400' : 'border-purple-200 hover:border-purple-400'} transition-all duration-300`}>
//             <div className="space-y-6">
//               <input type="text" placeholder="Your Name ✨" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className={`w-full px-6 py-4 rounded-2xl ${darkMode ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-pink-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-400'} border-2 focus:outline-none transition-all duration-300 text-lg`} />
//               <input type="email" placeholder="Your Email 📧" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className={`w-full px-6 py-4 rounded-2xl ${darkMode ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-pink-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-400'} border-2 focus:outline-none transition-all duration-300 text-lg`} />
//               <textarea placeholder="Your Message 💭" rows={6} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className={`w-full px-6 py-4 rounded-2xl ${darkMode ? 'bg-gray-900 border-gray-700 text white placeholder-gray-500 focus:border-pink-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-400'} border-2 focus:outline-none transition-all duration-300 text-lg resize-none`} />
//               <button onClick={handleSubmit} className={`w-full bg-gradient-to-r ${darkMode ? 'from-pink-400 to-purple-500' : 'from-pink-400 to-purple-500'} text-white px-6 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300`}>Send Message 🚀</button>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       <footer className={`py-8 px-4 border-t-2 ${darkMode ? 'bg-gray-900 border-purple-500/30' : 'bg-white border-pink-200'} transition-all duration-500`}>
//         <div className="max-w-7xl mx-auto text-center">
//           <p className={`text-lg font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>© 2024 Mishara Sandali. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }