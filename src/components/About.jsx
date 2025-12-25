// import React from 'react';

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-slate-800 text-white px-6">
//       <div className="max-w-6xl mx-auto">
        
//         <section id="about" className="py-2 ">
//           <div className="max-w-7xl mx-auto px-6">
//           {/* শিরোনাম */}
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
//               About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Me</span>
//               </h2>
//             <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
//           </div>
//           {/* বাকি কন্টেন্ট */}
//           </div>
//         </section>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left Side: Story */}
//           <div>
//             <p className="text-gray-300 text-lg leading-relaxed mb-4">
//               Hi, I am <span className="text-blue-400 font-bold">Shahariyar Sani Shihab</span>. Although I am formally studying Agricultural Science (B.Sc. in Agriculture), my true passion lies in the world of coding and technology.
//             </p>
//             <p className="text-gray-300 mb-6 text-lg leading-relaxed">
//               As a self-taught MERN Stack developer, I love building modern and scalable web applications using MongoDB, Express.js, React.js, and Node.js.
//             </p>
            
//           </div>

//           {/* Right Side: Education Card */}
//           <div className="bg-slate-900 p-8 rounded-2xl border border-blue-500/30 shadow-xl shadow-blue-500/10">
//             <h3 className="text-2xl font-bold mb-6 text-blue-400">Education</h3>
//             <div className="relative border-l-2 border-gray-700 pl-6 ml-2">
//               <div className="mb-4 relative">
//                 <div className="absolute -left-[31px] top-1 bg-blue-500 h-4 w-4 rounded-full"></div>
//                 <h4 className="text-xl font-semibold">B.Sc. in Agriculture</h4>
//                 <p className="text-gray-400 text-sm">Exim Bank Agricultural University Bangladesh</p>
//                 <p className="text-blue-500 text-xs font-mono mt-1">2025 - 2029 (Expected)</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#020617] text-white px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* শিরোনাম সেকশন */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Me</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Story & Programming Hero Mention */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hi, I am <span className="text-blue-400 font-bold">Shahariyar Sani Shihab</span>. Although I am formally studying Agricultural Science (B.Sc. in Agriculture), my true passion lies in the world of coding and technology.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I have successfully completed a <span className="text-white font-semibold italic">Complete Web Development</span> course from <span className="text-blue-400 font-bold">Programming Hero</span>. This journey has transformed me into a skilled MERN Stack developer, where I've built 12+ industry-standard projects.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              As a dedicated developer, I love building modern and scalable web applications using MongoDB, Express.js, React.js, and Node.js.
            </p>
          </div>

          {/* Right Side: Education & Training Card */}
          <div className="bg-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-blue-500/30 shadow-2xl shadow-blue-500/5">
            <h3 className="text-2xl font-bold mb-8 text-blue-400 flex items-center gap-2">
              <span className="h-6 w-1 bg-blue-500 rounded-full"></span> Education & Training
            </h3>
            
            <div className="relative border-l-2 border-slate-800 pl-8 space-y-10">

              {/* University Education */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1 bg-blue-600 h-4 w-4 rounded-full ring-4 ring-blue-600/20"></div>
                <h4 className="text-xl font-bold text-white leading-none">B.Sc. in Agriculture</h4>
                <p className="text-gray-400 text-sm mt-2">Exim Bank Agricultural University Bangladesh</p>
                <p className="text-blue-500 text-xs font-mono mt-2 bg-blue-500/10 w-fit px-2 py-1 rounded">2025 - 2029 (Expected)</p>
              </div>

              {/* Professional Training from Programming Hero */}
              <div className="relative">
                <div className="absolute -left-[41px] top-1 bg-cyan-400 h-4 w-4 rounded-full ring-4 ring-cyan-400/20 shadow-[0_0_10px_#22d3ee]"></div>
                <h4 className="text-xl font-bold text-white leading-none">Professional Web Development (MERN)</h4>
                <p className="text-gray-400 text-sm mt-2">Programming Hero</p>
                <div className="flex gap-2 mt-2">
                    <span className="text-cyan-400 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-cyan-400/10 border border-cyan-400/20 rounded">Completed</span>
                    <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-slate-800 rounded">Certificate Awaiting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;