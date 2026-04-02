



// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaCode } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import axios from 'axios'; // ✅ Axios ইম্পোর্ট করা হয়েছে

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // 🌐 Dynamic API URL (Local vs Live)
//   const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

//   // ✅ ডাটাবেস থেকে প্রজেক্ট লোড করা
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await axios.get(`${API_URL}/api/projects`);
//         if (res.data.success) {
//           setProjects(res.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
//     },
//   };

//   const cardVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100, damping: 12 }
//     },
//   };

//   return (
//     <section id="projects" className="py-24 bg-[#020617] relative overflow-hidden">
      
//       {/* Background Decor */}
//       <motion.div 
//         animate={{ rotate: 360 }}
//         transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//         className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"
//       />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* Header */}
//         <div className="text-center mb-20">
//           <motion.div
//              initial={{ opacity: 0, y: -20 }}
//              whileInView={{ opacity: 1, y: 0 }}
//              viewport={{ once: true }}
//              className="flex items-center justify-center gap-3 mb-4"
//           >
//              <FaCode className="text-blue-500 text-2xl" />
//              <span className="text-blue-500 font-mono tracking-widest uppercase text-sm">Portfolio</span>
//           </motion.div>
          
//           <motion.h2 
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-6xl font-black text-white mb-4"
//           >
//             Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Projects</span>
//           </motion.h2>
//           <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
//         </div>

//         {/* Loading State */}
//         {isLoading ? (
//             <div className="text-center text-gray-400 animate-pulse">Loading amazing projects...</div>
//         ) : (
//             /* Projects Grid */
//             <motion.div 
//               variants={containerVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-100px" }}
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
//             >
//               {projects.map((project) => (
//                 <motion.div
//                   key={project._id} // ✅ MongoDB _id ব্যবহার করা হয়েছে
//                   variants={cardVariants}
//                   whileHover={{ y: -10 }}
//                   className="group relative bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-xl hover:shadow-blue-500/10 flex flex-col"
//                 >
//                   {/* Image Section */}
//                   <div className="relative h-64 overflow-hidden shrink-0">
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60"></div>
//                     <img 
//                       src={project.image} 
//                       alt={project.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
//                     />
                    
//                     {/* Floating Tech Badges */}
//                     <div className="absolute top-4 right-4 z-20 flex gap-2">
//                         {project.tech && project.tech[0] && (
//                             <span className="bg-slate-900/80 backdrop-blur-md text-xs text-white px-3 py-1 rounded-full border border-white/10">
//                                 {project.tech[0]}
//                             </span>
//                         )}
//                     </div>

//                     {/* Overlay Icons Action */}
//                     <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[4px] flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 translate-y-4 group-hover:translate-y-0">
//                       <a 
//                         href={project.githubLink} 
//                         target="_blank" 
//                         rel="noreferrer" 
//                         className="p-3 bg-white/5 hover:bg-white/20 rounded-full text-white text-xl border border-white/10 hover:scale-110 transition-transform"
//                         title="GitHub Code"
//                       >
//                         <FaGithub />
//                       </a>
//                       <a 
//                         href={project.liveLink} 
//                         target="_blank" 
//                         rel="noreferrer" 
//                         className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-xl hover:scale-110 transition-transform shadow-lg shadow-blue-600/40"
//                         title="Live Preview"
//                       >
//                         <FaExternalLinkAlt />
//                       </a>
//                       {/* ✅ Link to Dynamic ID */}
//                       <Link 
//                         to={`/project/${project._id}`} 
//                         className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white text-xl hover:scale-110 transition-transform shadow-lg shadow-purple-600/40"
//                         title="View Details"
//                       >
//                         <FaInfoCircle />
//                       </Link>
//                     </div>
//                   </div>

//                   {/* Content Section */}
//                   <div className="p-8 flex flex-col grow relative">
//                     <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
//                       {project.title}
//                     </h3>
                    
//                     <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
//                       {project.description}
//                     </p>
                    
//                     {/* Tech Stack Tags */}
//                     <div className="flex flex-wrap gap-2 mb-6 mt-auto">
//                       {project.tech?.slice(0, 4).map((t, i) => (
//                         <span key={i} className="text-[10px] font-bold px-3 py-1 bg-blue-500/5 text-blue-300 rounded-lg border border-blue-500/10 uppercase tracking-wider">
//                           {t}
//                         </span>
//                       ))}
//                       {project.tech?.length > 4 && (
//                         <span className="text-[10px] font-bold px-3 py-1 bg-white/5 text-gray-400 rounded-lg border border-white/10">
//                           +{project.tech.length - 4}
//                         </span>
//                       )}
//                     </div>

//                     {/* Main View Button */}
//                     <Link to={`/project/${project._id}`} className="w-full relative group/btn overflow-hidden rounded-xl bg-slate-800 border border-white/5 px-4 py-3 text-center">
//                       <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
//                       <span className="relative font-bold text-blue-400 group-hover/btn:text-white transition-colors flex items-center justify-center gap-2">
//                          View Details <FaInfoCircle />
//                       </span>
//                     </Link>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//         )}

//         {/* More Projects Link */}
//         <div className="text-center mt-16">
//            <a href="https://github.com/Shihab5500" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-blue-500 pb-1">
//               See more on GitHub <FaGithub />
//            </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;







import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/projects`);
        if (res.data.success) setProjects(res.data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-[#020617] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
             <FaCode className="text-blue-600 dark:text-blue-500 text-2xl" />
             <span className="text-blue-600 dark:text-blue-500 font-mono tracking-widest uppercase text-sm font-bold">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Projects</span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
        </div>

        {isLoading ? (
            <div className="text-center text-gray-500 dark:text-gray-400 animate-pulse font-bold text-xl">Loading amazing projects...</div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project._id}
                  // transform-gpu ensures smooth hardware-accelerated animations
                  className="group flex flex-col bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300 transform-gpu hover:-translate-y-2"
                >
                  {/* Image Section */}
                  <div className="relative h-60 overflow-hidden shrink-0 bg-gray-100 dark:bg-slate-800">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy" // Optimizes scrolling performance
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Overlay Icons Action */}
                    <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="p-3 bg-white/20 hover:bg-white/40 rounded-full text-white text-xl transition-colors" title="GitHub Code">
                          <FaGithub />
                        </a>
                      )}
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-xl transition-colors shadow-lg" title="Live Preview">
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col grow relative">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {project.tech?.slice(0, 4).map((t, i) => (
                        <span key={i} className="text-xs font-bold px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-100 dark:border-blue-500/20">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link to={`/project/${project._id}`} className="w-full rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 px-4 py-3 text-center transition-colors hover:bg-blue-600 dark:hover:bg-blue-600 group/btn">
                      <span className="font-bold text-blue-600 dark:text-blue-400 group-hover/btn:text-white transition-colors flex items-center justify-center gap-2">
                         View Details <FaInfoCircle />
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
        )}
      </div>
    </section>
  );
};

export default Projects;