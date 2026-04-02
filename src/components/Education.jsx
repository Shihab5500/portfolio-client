





// import React from 'react';
// import { FaUserGraduate, FaLaptopCode, FaCalendarAlt, FaUniversity } from 'react-icons/fa';

// const Education = () => {
//   const educationData = [
//     {
//       id: 1,
//       degree: "B.Sc. in Agriculture",
//       institution: "Exim Bank Agricultural University Bangladesh",
//       year: "2025 - 2029 (Expected)",
//       description: "Building a strong foundation in agricultural sciences. Integrating modern technology with agriculture to create sustainable solutions.",
//       icon: <FaUniversity />,
//       color: "from-green-500 to-emerald-500"
//     },
//     {
//       id: 2,
//       degree: "Complete Web Development (MERN)",
//       institution: "Programming Hero",
//       year: "2025 - (Completed)",
//       description: "Coursework Completed & Awaiting Certification. Learned advanced MERN stack technologies and built scalable applications.",
//       icon: <FaLaptopCode />,
//       color: "from-blue-600 to-cyan-500"
//     }
//   ];

//   return (
//     <section id="education" className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-300 relative overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6 relative z-10">
        
//         {/* Section Title */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
//             My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Education</span>
//           </h2>
//           <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
//         </div>

//         {/* Timeline Container */}
//         <div className="relative">
//           {/* Vertical Line */}
//           <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 dark:from-blue-500/50 to-transparent rounded-full hidden md:block"></div>

//           <div className="space-y-12">
//             {educationData.map((item, index) => (
//               <div
//                 key={item.id}
//                 className={`flex flex-col md:flex-row items-center gap-8 ${
//                   index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//                 }`}
//               >
//                 {/* Content Card */}
//                 <div className="w-full md:w-1/2 relative group">
//                   <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-500`}></div>
                  
//                   <div className="relative bg-white dark:bg-slate-900/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-white/20 transition-all duration-300 shadow-xl transform hover:-translate-y-2">
//                     <div className="flex items-center gap-3 mb-4">
//                       <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} text-white shadow-lg`}>
//                         {item.icon}
//                       </div>
//                       <span className="text-sm font-mono text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center gap-2">
//                         <FaCalendarAlt /> {item.year}
//                       </span>
//                     </div>

//                     <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
//                       {item.degree}
//                     </h3>
//                     <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-4 flex items-center gap-2">
//                       <FaUserGraduate className="text-sm" /> {item.institution}
//                     </h4>
//                     <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-l-2 border-blue-500 pl-4">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Center Dot (Timeline Marker) */}
//                 <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-200 dark:border-blue-500/30 z-10 shadow-lg">
//                   <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} animate-pulse`}></div>
//                 </div>

//                 {/* Empty Space for alignment */}
//                 <div className="w-full md:w-1/2 hidden md:block"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;










import React from 'react';
import { FaUniversity, FaLaptopCode, FaCalendarAlt, FaGraduationCap, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "B.Sc. in Agriculture",
      institution: "Exim Bank Agricultural University Bangladesh",
      date: "2025 - 2029 (Expected)",
      description: "Building a strong foundation in agricultural sciences. Integrating modern technology with agriculture to create sustainable solutions.",
      icon: <FaUniversity className="text-emerald-500" />,
      iconBg: "bg-emerald-100 dark:bg-emerald-500/20",
      dotColor: "bg-emerald-500",
    },
    {
      id: 2,
      title: "Complete Web Development (MERN)",
      institution: "Programming Hero",
      date: "2025 - (Completed)",
      description: "Mastered advanced MERN stack technologies (MongoDB, Express.js, React, Node.js) and built multiple full-stack scalable applications.",
      icon: <FaLaptopCode className="text-blue-500" />,
      iconBg: "bg-blue-100 dark:bg-blue-500/20",
      dotColor: "bg-blue-500",
      // 👇 এখানে আপনার দেওয়া ImgBB লিংকটি বসানো হয়েছে 👇
      certificateLink: "https://i.ibb.co.com/9kkpn2PV/Screenshot-349.png" 
    }
  ];

  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Education</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-transparent dark:from-blue-900 dark:via-blue-700 md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={item.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-50 dark:border-[#020617] shadow-md transform -translate-x-1/2 flex items-center justify-center z-10">
                  <div className={`w-3 h-3 rounded-full ${item.dotColor}`}></div>
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 w-full md:w-[45%] bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-white/5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}>
                  
                  {/* Top Bar (Icon & Date) */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm shrink-0 ${item.iconBg}`}>
                      {item.icon}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-slate-800 rounded-lg text-sm font-bold text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-white/5 w-fit">
                      <FaCalendarAlt />
                      {item.date}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-bold mb-4">
                      <FaGraduationCap className="text-gray-400" />
                      {item.institution}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-l-2 border-gray-200 dark:border-slate-700 pl-4 py-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Certificate Button (Conditional) */}
                  {item.certificateLink && (
                    <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-800">
                      <a 
                        href={item.certificateLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 hover:bg-blue-600 dark:bg-blue-500/10 dark:hover:bg-blue-600 text-blue-600 hover:text-white dark:text-blue-400 dark:hover:text-white rounded-xl font-bold text-sm transition-all duration-300 shadow-sm"
                      >
                        <FaCertificate className="text-lg" />
                        View Certificate
                        <FaExternalLinkAlt className="text-xs ml-1" />
                      </a>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;