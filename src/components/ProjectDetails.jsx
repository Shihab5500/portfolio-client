



// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import axios from 'axios'; // ✅ Axios ইম্পোর্ট
// import { 
//   FaGithub, FaExternalLinkAlt, FaArrowLeft, FaLayerGroup, 
//   FaTools, FaLightbulb, FaServer, FaUserShield, FaCheckCircle, FaKey 
// } from 'react-icons/fa';

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // 🌐 Dynamic API URL
//   const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

//   // ✅ স্পেসিফিক প্রজেক্ট ফেচ করা
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });

//     const fetchProjectDetails = async () => {
//       try {
//         const res = await axios.get(`${API_URL}/api/projects/${id}`);
//         if (res.data.success) {
//           setProject(res.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching project details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjectDetails();
//   }, [id]);

//   if (loading) {
//     return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white text-xl">Loading project details...</div>;
//   }

//   if (!project) {
//     return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white text-2xl">Project not found!</div>;
//   }

//   return (
//     <section className="py-24 bg-[#020617] min-h-screen text-white px-6 relative overflow-hidden">
      
//       {/* Background Glow */}
//       <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>

//       <div className="max-w-5xl mx-auto relative z-10">
        
//         {/* Back Button */}
//         <motion.div 
//            initial={{ x: -20, opacity: 0 }}
//            animate={{ x: 0, opacity: 1 }}
//            transition={{ duration: 0.5 }}
//         >
//             <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 mb-8 transition-all hover:-translate-x-2">
//               <FaArrowLeft /> Back to Home
//             </Link>
//         </motion.div>

//         {/* Main Content Card */}
//         <motion.div 
//            initial={{ y: 20, opacity: 0 }}
//            animate={{ y: 0, opacity: 1 }}
//            transition={{ duration: 0.6 }}
//            className="bg-slate-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-xl"
//         >
//           {/* Hero Image */}
//           <div className="relative group h-64 md:h-[500px] overflow-hidden">
//              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
//              <motion.img 
//                initial={{ scale: 1.1 }}
//                animate={{ scale: 1 }}
//                transition={{ duration: 1.5 }}
//                src={project.image} 
//                alt={project.title} 
//                className="w-full h-full object-cover"
//              />
             
//              {/* Title Overlay */}
//              <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
//                 <motion.h1 
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                   className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg"
//                 >
//                     {project.title}
//                 </motion.h1>
                
//                 {/* Action Buttons (Dynamic) */}
//                 <motion.div 
//                    initial={{ y: 20, opacity: 0 }}
//                    animate={{ y: 0, opacity: 1 }}
//                    transition={{ delay: 0.5 }}
//                    className="flex flex-wrap gap-4"
//                 >
//                   {project.liveLink && (
//                     <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition-all font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50">
//                         <FaExternalLinkAlt /> Live Demo
//                     </a>
//                   )}
                  
//                   {project.githubLink && (
//                     <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition-all font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50">
//                         <FaGithub /> Client Repo
//                     </a>
//                   )}

//                   {project.serverLink && (
//                     <a href={project.serverLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition-all font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50">
//                         <FaServer /> Server Repo
//                     </a>
//                   )}
//                 </motion.div>
//              </div>
//           </div>

//           <div className="p-8 md:p-12 space-y-12">
            
//             {/* Description */}
//             <motion.div 
//                initial={{ opacity: 0 }} 
//                whileInView={{ opacity: 1 }} 
//                viewport={{ once: true }}
//             >
//                 <p className="text-gray-300 text-lg md:text-xl leading-relaxed border-l-4 border-blue-500 pl-6">
//                   {project.description}
//                 </p>
//             </motion.div>

//             {/* Credentials Section */}
//             {project.credentials && (project.credentials.adminEmail || project.credentials.userEmail) && (
//               <motion.div 
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="bg-slate-800/40 p-6 rounded-3xl border border-blue-500/20"
//               >
//                 <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
//                   <FaUserShield /> Demo Credentials (For Testing)
//                 </h3>
                
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {project.credentials.adminEmail && (
//                     <div className="bg-slate-900/80 p-5 rounded-2xl border border-white/5 relative overflow-hidden group">
//                         <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
//                         <p className="text-xs text-red-400 uppercase font-black tracking-widest mb-3">Admin Access</p>
//                         <div className="space-y-1">
//                             <p className="text-gray-400 font-mono text-sm">Email: <span className="text-white select-all">{project.credentials.adminEmail}</span></p>
//                             <p className="text-gray-400 font-mono text-sm">Pass: <span className="text-white select-all">{project.credentials.adminPass}</span></p>
//                         </div>
//                     </div>
//                   )}

//                   {project.credentials.userEmail ? (
//                     <div className="bg-slate-900/80 p-5 rounded-2xl border border-white/5 relative overflow-hidden group">
//                         <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
//                         <p className="text-xs text-green-400 uppercase font-black tracking-widest mb-3">User Access</p>
//                         <div className="space-y-1">
//                             <p className="text-gray-400 font-mono text-sm">Email: <span className="text-white select-all">{project.credentials.userEmail}</span></p>
//                             <p className="text-gray-400 font-mono text-sm">Pass: <span className="text-white select-all">{project.credentials.userPass}</span></p>
//                         </div>
//                     </div>
//                   ) : (
//                     <div className="bg-slate-900/80 p-5 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-center items-center text-center opacity-60">
//                         <div className="absolute top-0 left-0 w-1 h-full bg-gray-500"></div>
//                         <p className="text-xs text-gray-400 uppercase font-bold mb-1">User Access</p>
//                         <p className="text-gray-500 text-xs">Please register on the live site to test user features.</p>
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             )}

//             {/* Key Features */}
//             {project.features && project.features.length > 0 && (
//                <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                >
//                   <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
//                     <FaKey className="text-yellow-400" /> Key Features
//                   </h3>
//                   <div className="grid md:grid-cols-2 gap-4">
//                     {project.features.map((feature, idx) => (
//                       <div key={idx} className="flex items-start gap-3 text-gray-300 bg-slate-800/30 p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors group">
//                         <FaCheckCircle className="text-blue-500 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
//                         <span className="text-sm font-medium">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                </motion.div>
//             )}

//             {/* Info Grid */}
//             <div className="grid md:grid-cols-2 gap-8">
              
//               {/* Tech Stack */}
//               <motion.div 
//                  initial={{ x: -20, opacity: 0 }}
//                  whileInView={{ x: 0, opacity: 1 }}
//                  viewport={{ once: true }}
//                  transition={{ delay: 0.2 }}
//                  className="bg-slate-800/30 p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-colors"
//               >
//                 <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
//                     <FaLayerGroup /> Tech Stack
//                 </h3>
//                 <div className="flex flex-wrap gap-3">
//                   {project.tech?.map((t, i) => (
//                     <span key={i} className="px-4 py-2 bg-blue-500/10 text-blue-200 rounded-xl text-sm font-bold border border-blue-500/20 shadow-sm">
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Challenges */}
//               <motion.div 
//                  initial={{ x: 20, opacity: 0 }}
//                  whileInView={{ x: 0, opacity: 1 }}
//                  viewport={{ once: true }}
//                  transition={{ delay: 0.3 }}
//                  className="bg-slate-800/30 p-8 rounded-3xl border border-white/5 hover:border-red-500/30 transition-colors"
//               >
//                  <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
//                     <FaLightbulb /> Challenges
//                  </h3>
//                  <p className="text-gray-400 leading-relaxed">{project.challenges}</p>
//               </motion.div>

//               {/* Improvements */}
//               <motion.div 
//                  initial={{ y: 20, opacity: 0 }}
//                  whileInView={{ y: 0, opacity: 1 }}
//                  viewport={{ once: true }}
//                  transition={{ delay: 0.4 }}
//                  className="bg-slate-800/30 p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-colors md:col-span-2"
//               >
//                  <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
//                     <FaTools /> Future Improvements
//                  </h3>
//                  <p className="text-gray-400 leading-relaxed">{project.improvements}</p>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ProjectDetails;







import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'; 
import { 
  FaGithub, FaExternalLinkAlt, FaArrowLeft, FaLayerGroup, 
  FaTools, FaLightbulb, FaServer, FaUserShield, FaCheckCircle, FaKey 
} from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const fetchProjectDetails = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/projects/${id}`);
        if (res.data.success) {
          setProject(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjectDetails();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center text-gray-900 dark:text-white text-xl font-bold animate-pulse">Loading Details...</div>;
  }

  if (!project) {
    return <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex items-center justify-center text-gray-900 dark:text-white text-2xl">Project not found!</div>;
  }

  return (
    <section className="pt-24 pb-12 bg-slate-50 dark:bg-[#020617] min-h-screen transition-colors duration-300 px-6">
      <div className="max-w-5xl mx-auto">
        
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-all hover:-translate-x-2 font-bold">
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl">
          {/* Hero Image */}
          <div className="relative h-64 md:h-[450px] bg-gray-100 dark:bg-slate-800">
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-80"></div>
             <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
             
             <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-lg">
                    {project.title}
                </h1>
                
                <div className="flex flex-wrap gap-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-bold shadow-lg transform hover:-translate-y-1">
                        <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-all font-bold shadow-lg transform hover:-translate-y-1">
                        <FaGithub /> Client Repo
                    </a>
                  )}
                  {project.serverLink && (
                    <a href={project.serverLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-all font-bold shadow-lg transform hover:-translate-y-1">
                        <FaServer /> Server Repo
                    </a>
                  )}
                </div>
             </div>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed border-l-4 border-blue-500 pl-6 bg-blue-50/50 dark:bg-blue-900/10 py-4 rounded-r-xl">
              {project.description}
            </p>

            {/* Credentials */}
            {project.credentials && (project.credentials.adminEmail || project.credentials.userEmail) && (
              <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <FaUserShield className="text-blue-500" /> Demo Credentials
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.credentials.adminEmail && (
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border-l-4 border-l-red-500 border-t border-r border-b border-gray-100 dark:border-slate-700 shadow-sm">
                        <p className="text-xs text-red-500 uppercase font-black tracking-widest mb-3">Admin Access</p>
                        <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">Email: <span className="text-gray-900 dark:text-white select-all">{project.credentials.adminEmail}</span></p>
                        <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">Pass: <span className="text-gray-900 dark:text-white select-all">{project.credentials.adminPass}</span></p>
                    </div>
                  )}
                  {project.credentials.userEmail && (
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border-l-4 border-l-green-500 border-t border-r border-b border-gray-100 dark:border-slate-700 shadow-sm">
                        <p className="text-xs text-green-500 uppercase font-black tracking-widest mb-3">User Access</p>
                        <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">Email: <span className="text-gray-900 dark:text-white select-all">{project.credentials.userEmail}</span></p>
                        <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">Pass: <span className="text-gray-900 dark:text-white select-all">{project.credentials.userPass}</span></p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
               <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <FaKey className="text-yellow-500" /> Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl border border-gray-100 dark:border-slate-700">
                        <FaCheckCircle className="text-blue-500 mt-1 shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
               </div>
            )}

            {/* Info Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-gray-200 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-2">
                    <FaLayerGroup /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech?.map((t, i) => (
                    <span key={i} className="px-4 py-2 bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 rounded-xl text-sm font-bold border border-gray-200 dark:border-slate-700 shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/10 p-8 rounded-3xl border border-red-100 dark:border-red-900/30">
                 <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6 flex items-center gap-2">
                    <FaLightbulb /> Challenges
                 </h3>
                 <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.challenges}</p>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 md:col-span-2">
                 <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 flex items-center gap-2">
                    <FaTools /> Future Improvements
                 </h3>
                 <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.improvements}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;