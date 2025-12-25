// import React from 'react';
// import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#0b1120] pt-16 pb-8 overflow-hidden">
//       {/* Background Glow Effect */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          
//           {/* Brand Identity */}
//           <div className="space-y-6">
//             <h2 className="text-3xl font-extrabold text-white tracking-tighter">
//               Shihab Ahmed
//             </h2>
//             <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
//                I am a skilled MERN Stack developer. I love building high-performance and user-friendly web applications.
//             </p>
//             <div className="flex gap-4">
//               {[
//                 { icon: <FaGithub />, link: "https://github.com/Shihab5500" },
//                 { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shahariyar-sani-shihab/" },
//                 { icon: <FaWhatsapp />, link: "https://wa.me/8801730240084" }
//               ].map((social, i) => (
//                 <a key={i} href={social.link} target="_blank" rel="noreferrer" 
//                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700 text-gray-400 hover:text-blue-500 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <div>
//             <h3 className="text-white font-bold mb-6 text-lg">Quick Access</h3>
//             <ul className="space-y-4">
//               {['Home', 'About Me', 'Projects', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
//                     <span className="h-[2px] w-0 bg-blue-500 group-hover:w-4 transition-all"></span>
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Tech Expertise Tags */}
//           <div>
//             <h3 className="text-white font-bold mb-6 text-lg">Focus Area</h3>
//             <div className="flex flex-wrap gap-2">
//               {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind', 'Next.js'].map((tech) => (
//                 <span key={tech} className="px-3 py-1 text-[11px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md uppercase tracking-wider">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-3xl border border-slate-700/50">
//             <h3 className="text-white font-bold mb-2">Have a Project?</h3>
//             <p className="text-xs text-gray-400 mb-6">You can discuss your next project with me.</p>
//             <a href="mailto:saniahmed65900@gmail.com" 
//                className="block w-full text-center py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-blue-900/20">
//               Hire Me Now
//             </a>
//           </div>
//         </div>

//         {/* Final Bottom Section */}
//         <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-gray-500 text-xs">
//             © {new Date().getFullYear()} <span className="text-gray-300">Shahariyar Sani Shihab</span>. All Rights Reserved.
//           </p>
//           <div className="flex gap-6 text-[11px] text-gray-500 uppercase tracking-widest font-bold">
//             <span className="hover:text-blue-500 cursor-pointer">Design</span>
//             <span className="hover:text-blue-500 cursor-pointer">Development</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-[#0b1120] pt-16 pb-8 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          
          {/* Brand Identity */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-white tracking-tighter">
              Shihab Ahmed
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
               I am a skilled MERN Stack developer. I love building high-performance and user-friendly web applications.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, link: "https://github.com/Shihab5500" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/shahariyar-sani-shihab/" },
                { icon: <FaWhatsapp />, link: "https://wa.me/8801730240084" }
              ].map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noreferrer" 
                   className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700 text-gray-400 hover:text-blue-500 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Access</h3>
            <ul className="space-y-4">
              {/* এখানে লিঙ্কের জন্য অবজেক্ট ব্যবহার করা হয়েছে যাতে টেক্সট এবং আইডি আলাদা রাখা যায় */}
              {[
                { name: 'Home', link: '#home' },
                { name: 'About', link: '#about' }, // About Me ক্লিক করলে #about এ নিয়ে যাবে
                { name: 'Skills', link: '#skills' },
                { name: 'Projects', link: '#projects' },
                { name: 'Contact', link: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="h-[2px] w-0 bg-blue-500 group-hover:w-4 transition-all"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Expertise Tags */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Focus Area</h3>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind', 'Next.js'].map((tech) => (
                <span key={tech} className="px-3 py-1 text-[11px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-3xl border border-slate-700/50">
            <h3 className="text-white font-bold mb-2">Have a Project?</h3>
            <p className="text-xs text-gray-400 mb-6">You can discuss your next project with me.</p>
            <a href="mailto:saniahmed65900@gmail.com" 
               className="block w-full text-center py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-blue-900/20">
              Hire Me Now
            </a>
          </div>
        </div>

        {/* Final Bottom Section */}
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} <span className="text-gray-300">Shihab Ahmed</span>. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[11px] text-gray-500 uppercase tracking-widest font-bold">
            <span className="hover:text-blue-500 cursor-pointer">Design</span>
            <span className="hover:text-blue-500 cursor-pointer">Development</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;