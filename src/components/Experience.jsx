import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Experience</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
        </div>

        {/* Experience Card */}
        <div className="relative border-l-4 border-blue-500 pl-8 ml-4 md:ml-0 group">
          {/* Timeline Dot */}
          <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white dark:bg-slate-900 border-4 border-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
          
          <div className="bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-none hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <FaBriefcase className="text-blue-500" /> Frontend Developer Intern
                </h3>
                <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium mt-1">Syntecxhub</h4>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-500/20">
                <FaCalendarAlt /> Feb 2026 - Present
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently working as a Frontend Developer Intern, applying modern web technologies like React, Next.js, and Tailwind CSS to build responsive and user-friendly interfaces. Collaborating with the team to enhance user experience and optimize performance.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;