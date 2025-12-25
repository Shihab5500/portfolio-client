


// import React from 'react';
// import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
// import myImg from '../picture/profile.jpeg'; 

// const Hero = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6 py-20">
//       <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
//         {/* Left Side: Text Content */}
//         <div className="md:w-[65%] space-y-6 text-center md:text-left">
//           <h4 className="text-blue-500 font-mono text-sm md:text-base tracking-[0.3em] uppercase opacity-80">
//             Welcome To My World
//           </h4>
          
//           {/* নাম পাশাপাশি করার জন্য এখানে h1 পরিবর্তন করা হয়েছে */}
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
//             Hi, I'm <span className="text-blue-500 whitespace-nowrap">Shihab Ahmed</span>
//           </h1>
          
//           <h2 className="text-2xl md:text-4xl font-bold text-gray-300">
//             Professional <span className="text-white">MERN Stack Developer</span>
//           </h2>
          
//           <p className="text-gray-400 text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
//             I love building modern, scalable, and user-friendly web applications. Despite being an agricultural science student, my love for coding has made me the skilled developer I am today.
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
//             <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/40">
//               View My Work
//             </a>
//             <a href="#contact" className="border border-blue-500 hover:bg-blue-500/10 px-8 py-3 rounded-xl font-bold transition-all">
//               Contact Me
//             </a>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-6 justify-center md:justify-start pt-6">
//             <a href="https://github.com/Shihab5500" target="_blank" className="text-gray-500 hover:text-white text-3xl transition-all hover:scale-110"><FaGithub /></a>
//             <a href="https://www.linkedin.com/in/shahariyar-sani-shihab/" target="_blank" className="text-gray-500 hover:text-blue-500 text-3xl transition-all hover:scale-110"><FaLinkedin /></a>
//             <a href="https://www.facebook.com/shahariyarsani.shihab.1" target="_blank" className="text-gray-500 hover:text-blue-600 text-3xl transition-all hover:scale-110"><FaFacebook /></a>
//           </div>
//         </div>

//         {/* Right Side: Professional Image with Glow */}
//         <div className="md:w-[35%] flex justify-center md:justify-end relative">
//           <div className="absolute inset-0 bg-blue-600 rounded-full blur-[100px] opacity-25 animate-pulse"></div>
          
//           <div className="relative group">
//             {/* ছবির ফ্রেম স্টাইল একটু উন্নত করা হয়েছে */}
//             <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
//             <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-[8px] border-slate-800 overflow-hidden shadow-2xl z-10 transition-transform duration-700 group-hover:scale-[1.02]">
//               <img 
//                 src={myImg} 
//                 alt="Shihab Profile" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import myImg from '../picture/profile.jpeg'; 

// 🔐 onSecretTap prop নেওয়া হয়েছে
const Hero = ({ onSecretTap }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6 py-20">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <div className="md:w-[65%] space-y-6 text-center md:text-left">
          <h4 className="text-blue-500 font-mono text-sm md:text-base tracking-[0.3em] uppercase opacity-80">
            Welcome To My World
          </h4>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Hi, I'm <span className="text-blue-500 whitespace-nowrap">Shihab Ahmed</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold text-gray-300">
            Professional <span className="text-white">MERN Stack Developer</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
            I love building modern, scalable, and user-friendly web applications. Despite being an agricultural science student, my love for coding has made me the skilled developer I am today.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/40">
              View My Work
            </a>
            <a href="#contact" className="border border-blue-500 hover:bg-blue-500/10 px-8 py-3 rounded-xl font-bold transition-all">
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center md:justify-start pt-6">
            <a href="https://github.com/Shihab5500" target="_blank" rel="noreferrer"
              className="text-gray-500 hover:text-white text-3xl transition-all hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shahariyar-sani-shihab/" target="_blank" rel="noreferrer"
              className="text-gray-500 hover:text-blue-500 text-3xl transition-all hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/shahariyarsani.shihab.1" target="_blank" rel="noreferrer"
              className="text-gray-500 hover:text-blue-600 text-3xl transition-all hover:scale-110">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Right Side: Professional Image with Glow */}
        <div className="md:w-[35%] flex justify-center md:justify-end relative">
          <div className="absolute inset-0 bg-blue-600 rounded-full blur-[100px] opacity-25 animate-pulse"></div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>

            {/* 🔐 SECRET TAP AREA (5 tap / click) */}
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-[8px] border-slate-800 overflow-hidden shadow-2xl z-10 transition-transform duration-700 group-hover:scale-[1.02] cursor-pointer"
              onClick={onSecretTap}
            >
              <img 
                src={myImg} 
                alt="Shihab Profile" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
