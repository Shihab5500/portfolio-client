// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// const Projects = () => {
//   // আপনার প্রজেক্টের লিস্ট এখানে যোগ করুন
//   const projects = [
//     {
//       id: 1,
//       title: "Clean City",
//       description: "This is a full-stack MERN (MongoDB, Express.js, React, Node.js) app that allows people to track and report on their local environmental or sustainability-related issues (e.g., garbage collection, sidewalks, construction).",
//       tech: ["React", "Node.js", "MongoDB", "Tailwind"],
//       image: "https://i.ibb.co.com/yFvMwKRc/Screenshot-116.png", // আপনার প্রজেক্টের স্ক্রিনশট লিঙ্ক দিন
//       liveLink: "https://clean-city-world.netlify.app/",
//       githubLink: "https://github.com/Shihab5500/client"
//     },
//     {
//       id: 2,
//       title: "Task Management Tool",
//       description: "ব্যক্তিগত এবং টিমের কাজের হিসাব রাখার জন্য একটি ডাইনামিক ড্যাশবোর্ড।",
//       tech: ["Next.js", "Firebase", "DaisyUI"],
//       image: "https://via.placeholder.com/600x400/0f172a/3b82f6?text=Project+2",
//       liveLink: "https://your-live-link.com",
//       githubLink: "https://github.com/Shihab5500/your-repo"
//     },
//     {
//       id: 3,
//       title: "Agricultural Tech App",
//       description: "কৃষকদের জন্য আধুনিক চাষাবাদ পদ্ধতি এবং বাজার দর জানার একটি ওয়েব অ্যাপ।",
//       tech: ["MERN Stack", "Redux", "Express"],
//       image: "https://via.placeholder.com/600x400/0f172a/3b82f6?text=Project+3",
//       liveLink: "https://your-live-link.com",
//       githubLink: "https://github.com/Shihab5500/your-repo"
//     }
//   ];

//   return (
//     <section id="projects" className="py-24 bg-[#020617] relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* Title Section - আপনার পছন্দ করা স্টাইল অনুযায়ী */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
//             My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Projects</span>
//           </h2>
//           <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projects.map((project) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="group relative bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-2xl"
//             >
//               {/* Image Section */}
//               <div className="relative h-64 overflow-hidden">
//                 <img 
//                   src={project.image} 
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
                
//                 {/* Overlay with Buttons - হোভার করলে আসবে */}
//                 <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-sm flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
//                   <a 
//                     href={project.githubLink} 
//                     target="_blank" 
//                     rel="noreferrer"
//                     className="p-4 bg-white/10 hover:bg-white/20 rounded-full text-white text-2xl transition-all hover:-translate-y-2 shadow-xl border border-white/20"
//                     title="GitHub Repository"
//                   >
//                     <FaGithub />
//                   </a>
//                   <a 
//                     href={project.liveLink} 
//                     target="_blank" 
//                     rel="noreferrer"
//                     className="p-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-2xl transition-all hover:-translate-y-2 shadow-xl"
//                     title="Live Demo"
//                   >
//                     <FaExternalLinkAlt />
//                   </a>
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-8 space-y-4">
//                 <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm leading-relaxed">
//                   {project.description}
//                 </p>
                
//                 {/* Tech Tags */}
//                 <div className="flex flex-wrap gap-2 pt-2">
//                   {project.tech.map((t, i) => (
//                     <span 
//                       key={i} 
//                       className="text-[10px] font-bold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 uppercase tracking-tighter"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;







import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Clean City",
      description: "This is a full-stack MERN (MongoDB, Express.js, React, Node.js) app that allows people to track and report on their local environmental or sustainability-related issues (e.g., garbage collection, sidewalks, construction).",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      image: "https://i.ibb.co.com/yFvMwKRc/Screenshot-116.png", 
      liveLink: "https://clean-city-world.netlify.app/",
      githubLink: "https://github.com/Shihab5500/client"
    },
    {
      id: 2,
      title: "Blood Donation",
      description: "Give Blood, Save Lives Join Bangladesh Donor Network Blood Donation connects donors with recipients fast and safely. Create requests, find donors, and make impact.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      image: "https://i.ibb.co.com/LXSRBz91/Screenshot-179.png",
      liveLink: "https://blooddonation20.netlify.app/",
      githubLink: "https://github.com/Shihab5500/client2"
    },
    {
      id: 3,
      title: "SkillSwap",
      description: "SkillSwap A Local Skill Exchange Platform.",
      tech: ["Firebase", "React + Vite", "React Router", "Swiper"],
      image: "https://i.ibb.co.com/FkNRW21N/Screenshot-180.png",
      liveLink: "https://skillswap-shihab.netlify.app/",
      githubLink: "https://github.com/Shihab5500/SkillSwap"
    },
    

  ];

  return (
    <section id="projects" className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Projects</span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-500 shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay: ডেস্কটপে হোভারে আসবে, মোবাইলে সব সময় দৃশ্যমান রাখার জন্য md:opacity-0 যোগ করা হয়েছে */}
                <div className="absolute inset-0 bg-blue-900/60 md:bg-blue-900/80 backdrop-blur-[2px] md:backdrop-blur-sm flex items-center justify-center gap-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-4 bg-white/10 hover:bg-white/20 rounded-full text-white text-2xl transition-all hover:-translate-y-2 shadow-xl border border-white/20"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-2xl transition-all hover:-translate-y-2 shadow-xl"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-white md:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-bold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 uppercase tracking-tighter"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;