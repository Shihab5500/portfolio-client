

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaDatabase, FaPython 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiVercel, SiNetlify, 
  SiNextdotjs, SiVite, SiDaisyui, SiFigma, SiReactrouter, SiPostman, SiRedux 
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "DaisyUI", icon: <SiDaisyui />, color: "#1AD1A5" },
        { name: "React Router", icon: <SiReactrouter />, color: "#CA4245" },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#828282" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      ]
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
        { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
        { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
        { name: "Vite", icon: <SiVite />, color: "#646CFF" },
        { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#020617] relative overflow-hidden">
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-mono tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-black text-white mb-6"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Skills</span>
          </motion.h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
        </div>

        <div className="space-y-24">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="relative">
              <h3 className="text-gray-500 font-mono text-sm uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
                <span className="h-[1px] w-12 bg-gray-800" />
                {category.title}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -10,
                      boxShadow: `0px 15px 30px ${skill.color}15`,
                      borderColor: `${skill.color}50`
                    }}
                    className="relative group bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] flex flex-col items-center justify-center gap-5 transition-all duration-300"
                  >
                    <div 
                      className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                      style={{ backgroundColor: skill.color }}
                    />
                    
                    <div 
                      className="text-5xl transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    
                    <span className="text-[10px] font-black tracking-widest text-gray-400 group-hover:text-white uppercase">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;