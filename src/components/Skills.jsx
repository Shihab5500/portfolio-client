




// import React from 'react';
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
// import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiVercel, SiNetlify, SiNextdotjs, SiVite, SiDaisyui, SiFigma, SiReactrouter } from 'react-icons/si';

// const SkillCard = ({ skill }) => (
//   <div className="group relative bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-white/10 overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:border-blue-500/50">
//     <div className="relative z-10">
//       <div className="flex justify-between items-start mb-4">
//         <div className="p-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 group-hover:scale-110 transition-transform duration-300">
//           <span className="text-4xl" style={{ color: skill.color }}>{skill.icon}</span>
//         </div>
//         <span className="font-mono font-bold text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
//           {skill.level}%
//         </span>
//       </div>
//       <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">{skill.name}</h3>
//       <div className="w-full h-2.5 bg-gray-200 dark:bg-slate-700/50 rounded-full overflow-hidden">
//         <div 
//           className="h-full rounded-full transition-all duration-1000 ease-out"
//           style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
//         />
//       </div>
//     </div>
//   </div>
// );

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Frontend Development",
//       skills: [
//         { name: "React.js", icon: <FaReact />, color: "#61DAFB", level: 90 },
//         { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF", level: 85 },
//         { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4", level: 95 },
//         { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E", level: 88 },
//         { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", level: 98 },
//         { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", level: 95 },
//         { name: "DaisyUI", icon: <SiDaisyui />, color: "#1AD1A5", level: 92 },
//         { name: "React Router", icon: <SiReactrouter />, color: "#CA4245", level: 90 },
//       ]
//     },
//     {
//       title: "Backend & Database",
//       skills: [
//         { name: "Node.js", icon: <FaNodeJs />, color: "#339933", level: 80 },
//         { name: "Express.js", icon: <SiExpress />, color: "#828282", level: 85 },
//         { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: 82 },
//         { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", level: 75 },
//       ]
//     },
//     {
//       title: "Tools & Deployment",
//       skills: [
//         { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF", level: 90 },
//         { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF", level: 88 },
//         { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7", level: 85 },
//         { name: "Vite", icon: <SiVite />, color: "#646CFF", level: 92 },
//         { name: "Figma", icon: <SiFigma />, color: "#F24E1E", level: 70 },
//       ]
//     }
//   ];

//   const allSkills = skillCategories.flatMap(cat => cat.skills);

//   return (
//     <section id="skills" className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-300 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
//             My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Skills</span>
//           </h2>
//           <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
//         </div>

//         <div className="space-y-20">
//           {skillCategories.map((category, idx) => (
//             <div key={idx}>
//               <div className="flex items-center gap-4 mb-10">
//                 <div className="h-10 w-1.5 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full"></div>
//                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
//                   {category.title}
//                 </h3>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {category.skills.map((skill, sIdx) => (
//                   <SkillCard key={sIdx} skill={skill} />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Infinite Scroll Marquee using inline animation */}
//       <div className="mt-24 relative py-8 border-t border-gray-200 dark:border-white/5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm overflow-hidden flex">
//         <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-[#020617] to-transparent z-10"></div>
//         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-[#020617] to-transparent z-10"></div>
        
//         <div 
//           className="flex gap-16 w-max whitespace-nowrap items-center"
//           style={{ animation: 'scroll 30s linear infinite' }}
//         >
//           {/* Injecting keyframes via style block */}
//           <style>{`
//             @keyframes scroll {
//               0% { transform: translateX(0); }
//               100% { transform: translateX(-50%); }
//             }
//           `}</style>
          
//           {[...allSkills, ...allSkills, ...allSkills].map((skill, i) => (
//             <div key={i} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default">
//               <span className="text-3xl" style={{ color: skill.color }}>{skill.icon}</span>
//               <span className="text-lg font-bold text-gray-600 dark:text-gray-400">{skill.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;







import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaChartLine, FaSearch, FaBullhorn } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiVercel, SiNetlify, SiNextdotjs, SiVite, SiDaisyui, SiFigma, SiReactrouter, SiGoogleanalytics, SiGoogletagmanager } from 'react-icons/si';

const SkillCard = ({ skill }) => (
  <div className="group relative bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-white/10 overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:border-blue-500/50">
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 group-hover:scale-110 transition-transform duration-300">
          <span className="text-4xl" style={{ color: skill.color }}>{skill.icon}</span>
        </div>
        <span className="font-mono font-bold text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
          {skill.level}%
        </span>
      </div>
      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">{skill.name}</h3>
      <div className="w-full h-2.5 bg-gray-200 dark:bg-slate-700/50 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
        />
      </div>
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB", level: 90 },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF", level: 85 },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4", level: 95 },
        { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E", level: 88 },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", level: 98 },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", level: 95 },
        { name: "DaisyUI", icon: <SiDaisyui />, color: "#1AD1A5", level: 92 },
        { name: "React Router", icon: <SiReactrouter />, color: "#CA4245", level: 90 },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933", level: 80 },
        { name: "Express.js", icon: <SiExpress />, color: "#828282", level: 85 },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: 82 },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", level: 75 },
      ]
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF", level: 90 },
        { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF", level: 88 },
        { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7", level: 85 },
        { name: "Vite", icon: <SiVite />, color: "#646CFF", level: 92 },
        { name: "Figma", icon: <SiFigma />, color: "#F24E1E", level: 70 },
      ]
    },
    {
      // 🟢 নতুন ক্যাটাগরি যোগ করা হয়েছে 🟢
      title: "Digital Marketing & SEO",
      skills: [
        { name: "SEO Optimization", icon: <FaSearch />, color: "#4285F4", level: 90 },
        { name: "Google Analytics (GA4)", icon: <SiGoogleanalytics />, color: "#E37400", level: 85 },
        { name: "Google Tag Manager", icon: <SiGoogletagmanager />, color: "#246FDB", level: 85 },
        { name: "Social Media Boosting", icon: <FaBullhorn />, color: "#1877F2", level: 80 },
        { name: "Data Tracking", icon: <FaChartLine />, color: "#34A853", level: 88 },
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(cat => cat.skills);

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Skills</span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
        </div>

        <div className="space-y-20">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-10 w-1.5 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, sIdx) => (
                  <SkillCard key={sIdx} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Scroll Marquee using inline animation */}
      <div className="mt-24 relative py-8 border-t border-gray-200 dark:border-white/5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm overflow-hidden flex">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-[#020617] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-[#020617] to-transparent z-10"></div>
        
        <div 
          className="flex gap-16 w-max whitespace-nowrap items-center"
          style={{ animation: 'scroll 30s linear infinite' }}
        >
          {/* Injecting keyframes via style block */}
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          
          {[...allSkills, ...allSkills, ...allSkills].map((skill, i) => (
            <div key={i} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default">
              <span className="text-3xl" style={{ color: skill.color }}>{skill.icon}</span>
              <span className="text-lg font-bold text-gray-600 dark:text-gray-400">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;