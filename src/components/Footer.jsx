








// import React from 'react';
// import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaChevronRight } from 'react-icons/fa';
// import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from 'react-icons/si';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const socialLinks = [
//     { icon: <FaGithub />, link: "https://github.com/Shihab5500", color: "hover:bg-[#333]" },
//     { icon: <FaLinkedin />, link: "https://linkedin.com/in/shahariyar-sani-shihab", color: "hover:bg-[#0077b5]" },
//     { icon: <FaFacebook />, link: "https://facebook.com/shahariyarsani.shihab.1", color: "hover:bg-[#1877f2]" }
//   ];

//   return (
//     <footer className="relative bg-white dark:bg-[#020617] pt-20 pb-10 border-t border-gray-200 dark:border-white/5 transition-colors duration-500 overflow-hidden">
      
//       {/* 🟢 Background Accents (সাজানোর জন্য হালকা গ্লো) */}
//       <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
//       <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
//           {/* 1. Brand Section */}
//           <div className="space-y-6">
//             <h2 className="text-3xl font-black tracking-tighter text-gray-900 dark:text-white">
//               Shihab<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> Ahmed</span>
//             </h2>
//             <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
//               I am a MERN Stack Developer. I love building scalable web applications by merging creativity with code. 🌱
//             </p>
//             <div className="flex items-center gap-4 pt-2">
//                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Stack:</span>
//                <div className="flex gap-3 text-gray-400">
//                   <SiReact className="hover:text-[#61DAFB] transition-colors cursor-help" title="React" />
//                   <SiTailwindcss className="hover:text-[#06B6D4] transition-colors cursor-help" title="Tailwind" />
//                   <SiNodedotjs className="hover:text-[#339933] transition-colors cursor-help" title="Node.js" />
//                   <SiMongodb className="hover:text-[#47A248] transition-colors cursor-help" title="MongoDB" />
//                </div>
//             </div>
//           </div>

//           {/* 2. Quick Explorer */}
//           <div>
//             <h4 className="text-gray-900 dark:text-white font-bold mb-8 text-lg flex items-center gap-2">
//               <span className="w-8 h-[2px] bg-blue-600 rounded-full"></span>
//               Explore
//             </h4>
//             <ul className="space-y-4">
//               {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <a href={`#${item.toLowerCase()}`} className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-medium text-sm">
//                     <FaChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* 3. Connect Info */}
//           <div>
//             <h4 className="text-gray-900 dark:text-white font-bold mb-8 text-lg flex items-center gap-2">
//                <span className="w-8 h-[2px] bg-blue-600 rounded-full"></span>
//                Contact
//             </h4>
//             <ul className="space-y-5">
//                <li className="flex items-start gap-4 group">
//                   <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-blue-600 dark:text-blue-500 shrink-0 group-hover:scale-110 transition-transform">
//                      <FaMapMarkerAlt />
//                   </div>
//                   <span className="text-gray-600 dark:text-gray-400 text-sm leading-tight pt-1">Rajshahi, Bangladesh</span>
//                </li>
//                <li className="flex items-start gap-4 group">
//                   <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-blue-600 dark:text-blue-500 shrink-0 group-hover:scale-110 transition-transform">
//                      <FaEnvelope />
//                   </div>
//                   <a href="mailto:shihabahmed7600@gmail.com" className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-white transition-colors pt-1">shihabahmed7600@gmail.com</a>
//                </li>
//             </ul>
//           </div>

//           {/* 4. Let's Talk & Social */}
//           <div className="space-y-8">
//             <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/5">
//                <h4 className="text-gray-900 dark:text-white font-bold mb-4">Have a project?</h4>
//                <a
//                  href="mailto:shihabahmed7600@gmail.com"
//                  className="inline-flex items-center justify-center w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-bold text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:-translate-y-1 active:scale-95"
//                >
//                  Hire Me Now
//                </a>
//             </div>
            
//             <div className="flex justify-between items-center px-2">
//               <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Follow Me</span>
//               <div className="flex gap-3">
//                 {socialLinks.map((social, i) => (
//                   <a 
//                     key={i} 
//                     href={social.link} 
//                     target="_blank" 
//                     rel="noreferrer" 
//                     className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-white ${social.color} transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-white/5 shadow-sm`}
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 🟢 Bottom Bar */}
//         <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="text-gray-500 dark:text-gray-500 text-sm font-medium">
//             © {currentYear} <span className="text-blue-600 dark:text-blue-400 font-bold">Shihab Ahmed</span>. All Rights Reserved.
//           </p>
          
//           <button
//             onClick={scrollToTop}
//             className="group flex items-center gap-3 text-xs font-black text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all uppercase tracking-[0.2em]"
//           >
//             Back to Top
//             <div className="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-white/5 rounded-full border border-gray-100 dark:border-white/5 group-hover:bg-blue-600 transition-all duration-300 group-hover:-translate-y-2">
//                <FaArrowUp className="group-hover:text-white transition-colors" />
//             </div>
//           </button>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaChevronRight } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/Shihab5500", color: "hover:bg-[#333]" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/shahariyar-sani-shihab", color: "hover:bg-[#0077b5]" },
    { icon: <FaFacebook />, link: "https://facebook.com/shahariyarsani.shihab.1", color: "hover:bg-[#1877f2]" }
  ];

  return (
    <footer className="relative bg-white dark:bg-[#020617] pt-20 pb-10 border-t border-gray-200 dark:border-white/5 transition-colors duration-500 overflow-hidden">
      
      {/* 🟢 Background Accents (সাজানোর জন্য হালকা গ্লো) */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black tracking-tighter text-gray-900 dark:text-white">
              Shihab<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> Ahmed</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              I am a MERN Stack Developer. I love building scalable web applications by merging creativity with code. 🌱
            </p>
            <div className="flex items-center gap-4 pt-2">
               <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Stack:</span>
               <div className="flex gap-3 text-gray-400">
                  <SiReact className="hover:text-[#61DAFB] transition-colors cursor-help" title="React" />
                  <SiTailwindcss className="hover:text-[#06B6D4] transition-colors cursor-help" title="Tailwind" />
                  <SiNodedotjs className="hover:text-[#339933] transition-colors cursor-help" title="Node.js" />
                  <SiMongodb className="hover:text-[#47A248] transition-colors cursor-help" title="MongoDB" />
               </div>
            </div>
          </div>

          {/* 2. Quick Explorer */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-8 text-lg flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-600 rounded-full"></span>
              Explore
            </h4>
            <ul className="space-y-4">
              {/* 🟢 এখানে Services যোগ করা হয়েছে */}
              {['About', 'Experience', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-medium text-sm">
                    <FaChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Connect Info */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-8 text-lg flex items-center gap-2">
               <span className="w-8 h-[2px] bg-blue-600 rounded-full"></span>
               Contact
            </h4>
            <ul className="space-y-5">
               <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-blue-600 dark:text-blue-500 shrink-0 group-hover:scale-110 transition-transform">
                     <FaMapMarkerAlt />
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm leading-tight pt-1">Rajshahi, Bangladesh</span>
               </li>
               <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-blue-600 dark:text-blue-500 shrink-0 group-hover:scale-110 transition-transform">
                     <FaEnvelope />
                  </div>
                  <a href="mailto:shihabahmed7600@gmail.com" className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-white transition-colors pt-1">shihabahmed7600@gmail.com</a>
               </li>
            </ul>
          </div>

          {/* 4. Let's Talk & Social */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/5">
               <h4 className="text-gray-900 dark:text-white font-bold mb-4">Have a project?</h4>
               <a
                 href="mailto:shihabahmed7600@gmail.com"
                 className="inline-flex items-center justify-center w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-bold text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:-translate-y-1 active:scale-95"
               >
                 Hire Me Now
               </a>
            </div>
            
            <div className="flex justify-between items-center px-2">
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Follow Me</span>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-white ${social.color} transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-white/5 shadow-sm`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 🟢 Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 dark:text-gray-500 text-sm font-medium">
            © {currentYear} <span className="text-blue-600 dark:text-blue-400 font-bold">Shihab Ahmed</span>. All Rights Reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-black text-gray-400 hover:text-blue-600 dark:hover:text-white transition-all uppercase tracking-[0.2em]"
          >
            Back to Top
            <div className="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-white/5 rounded-full border border-gray-100 dark:border-white/5 group-hover:bg-blue-600 transition-all duration-300 group-hover:-translate-y-2">
               <FaArrowUp className="group-hover:text-white transition-colors" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;