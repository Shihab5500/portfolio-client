





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