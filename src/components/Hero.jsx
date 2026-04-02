


// import React, { useState, useEffect, useRef } from "react";
// import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
// import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, AnimatePresence } from "framer-motion";
// import myImg from "../picture/profile.jpeg";

// // --------------------------------------------------------
// // ✨ SPECIAL COMPONENT: MAGNETIC BUTTON
// // --------------------------------------------------------
// const MagneticButton = ({ children, className, href, download, onClick }) => {
//   const ref = useRef(null);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouse = (e) => {
//     const { clientX, clientY } = e;
//     const { height, width, left, top } = ref.current.getBoundingClientRect();
//     const middleX = clientX - (left + width / 2);
//     const middleY = clientY - (top + height / 2);
//     setPosition({ x: middleX * 0.2, y: middleY * 0.2 }); // 0.2 = magnetic strength
//   };

//   const reset = () => {
//     setPosition({ x: 0, y: 0 });
//   };

//   const { x, y } = position;
  
//   // Element to render (Link or Button)
//   const Component = href ? motion.a : motion.button;
//   const props = href ? { href, download, target: download ? "_self" : "_self" } : { onClick };

//   return (
//     <Component
//       ref={ref}
//       onMouseMove={handleMouse}
//       onMouseLeave={reset}
//       animate={{ x, y }}
//       transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
//       className={className}
//       {...props}
//     >
//       {children}
//     </Component>
//   );
// };

// // --------------------------------------------------------
// // ✨ SPECIAL COMPONENT: TYPEWRITER TEXT
// // --------------------------------------------------------
// const TypewriterText = ({ texts }) => {
//   const [index, setIndex] = useState(0);
//   const [subIndex, setSubIndex] = useState(0);
//   const [reverse, setReverse] = useState(false);
//   const [blink, setBlink] = useState(true);

//   // Blinking cursor effect
//   useEffect(() => {
//     const timeout2 = setTimeout(() => {
//       setBlink((prev) => !prev);
//     }, 500);
//     return () => clearTimeout(timeout2);
//   }, [blink]);

//   useEffect(() => {
//     if (subIndex === texts[index].length + 1 && !reverse) {
//       setTimeout(() => setReverse(true), 1000); // Wait before deleting
//       return;
//     }

//     if (subIndex === 0 && reverse) {
//       setReverse(false);
//       setIndex((prev) => (prev + 1) % texts.length);
//       return;
//     }

//     const timeout = setTimeout(() => {
//       setSubIndex((prev) => prev + (reverse ? -1 : 1));
//     }, reverse ? 50 : 100); // Speed of typing/deleting

//     return () => clearTimeout(timeout);
//   }, [subIndex, index, reverse, texts]);

//   return (
//     <span className="text-blue-400 font-mono">
//       {`${texts[index].substring(0, subIndex)}${blink ? "|" : " "}`}
//     </span>
//   );
// };

// // --------------------------------------------------------
// // 🚀 MAIN HERO COMPONENT
// // --------------------------------------------------------
// const Hero = ({ onSecretTap }) => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Mouse move for background particles
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Name Animation Variant
//   const letterContainer = {
//     hidden: { opacity: 0 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
//     }),
//   };

//   const letter = {
//     visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } },
//     hidden: { opacity: 0, y: 20, transition: { type: "spring", damping: 12, stiffness: 200 } },
//   };

//   const nameString = "Shihab Ahmed";

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#020617] text-white px-6 py-20 overflow-hidden">
      
//       {/* ==========================================
//           🌌 DYNAMIC PARTICLE BACKGROUND
//          ========================================== */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//          {/* Moving Gradient Orbs */}
//         <motion.div 
//           animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"
//         />
//         <motion.div 
//            animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.5, 1] }}
//            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"
//         />

//         {/* Interactive Particles (Simple Dot Grid) */}
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-white/20 rounded-full"
//             initial={{ 
//               x: Math.random() * window.innerWidth, 
//               y: Math.random() * window.innerHeight,
//               scale: Math.random() * 0.5 + 0.5
//             }}
//             animate={{ 
//               y: [null, Math.random() * -100],
//               x: [null, (Math.random() - 0.5) * 50]
//             }}
//             transition={{
//               duration: Math.random() * 10 + 10,
//               repeat: Infinity,
//               ease: "linear",
//               repeatType: "mirror"
//             }}
//             style={{
//               width: Math.random() * 4 + 1 + "px",
//               height: Math.random() * 4 + 1 + "px",
//             }}
//           />
//         ))}
//       </div>


//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
//         {/* ==========================================
//             📝 LEFT SIDE: TEXT CONTENT
//            ========================================== */}
//         <div className="space-y-8 text-center md:text-left order-2 md:order-1">
          
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
//               <span className="h-[2px] w-10 bg-blue-500"></span>
//               <span className="text-blue-400 font-mono tracking-widest uppercase text-sm font-bold">
//                 Welcome To My World
//               </span>
//             </div>
            
//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
//               Hi, I'm <br />
//               <motion.div 
//                 className="flex justify-center md:justify-start overflow-hidden"
//                 variants={letterContainer}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 {nameString.split("").map((char, index) => (
//                   <motion.span 
//                     key={index} 
//                     variants={letter} 
//                     className={`inline-block ${char === " " ? "w-4" : ""} text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-400 hover:text-blue-500 transition-colors duration-300 cursor-default`}
//                   >
//                     {char}
//                   </motion.span>
//                 ))}
//               </motion.div>
//             </h1>
//           </motion.div>
          
//           <motion.div 
//              initial={{ opacity: 0 }}
//              animate={{ opacity: 1 }}
//              transition={{ delay: 1, duration: 1 }}
//              className="text-2xl md:text-3xl font-bold text-gray-400 h-10"
//           >
//             I am a <TypewriterText texts={["MERN Stack Developer", "Frontend Expert", "React Specialist", "Tech Enthusiast"]} />
//           </motion.div>
          
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2, duration: 0.8 }}
//             className="text-gray-400 text-lg max-w-xl leading-relaxed mx-auto md:mx-0 pt-4"
//           >
//             Merging creativity with code to build scalable, high-performance web applications. Let's turn your ideas into digital reality.
//           </motion.p>

//           {/* Magnetic Buttons */}
//           <motion.div 
//              initial={{ opacity: 0, y: 30 }}
//              animate={{ opacity: 1, y: 0 }}
//              transition={{ delay: 1.4, duration: 0.8 }}
//              className="flex flex-wrap gap-6 justify-center md:justify-start pt-6"
//           >
//              {/* Resume Button */}
//              <MagneticButton 
//               href="/Resume (1).pdf" 
//               download="Shihab_Resume.pdf"
//               className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-bold text-white shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
//             >
//               <span>Download Resume</span>
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
//             </MagneticButton>

//             <MagneticButton href="#contact" className="px-8 py-4 border border-white/20 hover:bg-white/5 rounded-full font-bold text-white backdrop-blur-sm transition-all">
//               Contact Me
//             </MagneticButton>
//           </motion.div>

//           {/* Social Icons */}
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.6, duration: 0.8 }}
//             className="flex gap-8 justify-center md:justify-start pt-8"
//           >
//             {[
//               { Icon: FaGithub, link: "https://github.com/Shihab5500" },
//               { Icon: FaLinkedin, link: "https://www.linkedin.com/in/shahariyar-sani-shihab/" },
//               { Icon: FaFacebook, link: "https://www.facebook.com/shahariyarsani.shihab.1" }
//             ].map((item, index) => (
//               <MagneticButton 
//                 key={index}
//                 href={item.link}
//                 className="text-gray-400 hover:text-white text-2xl p-2 transition-colors"
//               >
//                 <item.Icon />
//               </MagneticButton>
//             ))}
//           </motion.div>
//         </div>

//         {/* ==========================================
//             🖼️ RIGHT SIDE: 3D FLOATING IMAGE
//            ========================================== */}
//         <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, type: "spring" }}
//             className="relative z-10"
//           >
//              {/* Tech Ring Animation */}
//             <motion.div 
//                animate={{ rotate: 360 }}
//                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                className="absolute -inset-4 border-2 border-dashed border-blue-500/30 rounded-full"
//             />
//             <motion.div 
//                animate={{ rotate: -360 }}
//                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//                className="absolute -inset-8 border border-blue-500/10 rounded-full"
//             />

//             {/* Main Image Container */}
//             <motion.div
//                whileHover={{ scale: 1.05 }}
//                transition={{ type: "spring", stiffness: 300 }}
//                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-[8px] border-slate-800/80 shadow-2xl overflow-hidden cursor-pointer"
//                onClick={onSecretTap}
//             >
//                <img 
//                  src={myImg} 
//                  alt="Shihab Profile" 
//                  className="w-full h-full object-cover"
//                />
               
//                {/* Glass Reflection */}
//                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
//             </motion.div>

//             {/* Floating Badge */}
//             <motion.div 
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute bottom-10 -left-6 bg-slate-900/80 backdrop-blur-md border border-blue-500/30 p-4 rounded-2xl shadow-xl flex items-center gap-3"
//             >
//               <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//               <span className="text-xs font-bold text-gray-300">Open to Work</span>
//             </motion.div>

//           </motion.div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;





import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaDownload, FaPaperPlane } from "react-icons/fa";
import myImg from "../picture/profile.jpeg"; // ছবির পাথ ঠিক আছে কিনা দেখে নেবেন

// 🚀 Pure React Typewriter (No extra library needed)
const TypewriterText = ({ texts }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[index];
      if (!isDeleting) {
        setText(currentText.substring(0, text.length + 1));
        if (text === currentText) {
          setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
        }
      } else {
        setText(currentText.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts]);

  return (
    <span className="text-blue-600 dark:text-blue-400 font-mono border-r-2 border-blue-500 pr-1 animate-pulse">
      {text}
    </span>
  );
};

const Hero = ({ onSecretTap }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-6 overflow-hidden transition-colors duration-300">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT SIDE: Text Content */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1 mt-10 md:mt-0">
          <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="h-[2px] w-10 bg-blue-500"></span>
            <span className="text-blue-600 dark:text-blue-400 font-mono tracking-widest uppercase text-sm font-bold">
              Welcome To My World
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Shihab Ahmed
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 h-10">
            I am a <TypewriterText texts={["MERN Stack Developer", "Frontend Expert", "Tech Enthusiast"]} />
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
            Merging creativity with code to build scalable, high-performance web applications. Let's turn your ideas into digital reality.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a 
             href="/resume.pdf" 
              download="Shahariyar_Sani_Shihab_Resume.pdf"
              id="download-resume-hero" // For Google Tag Manager
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-600/50 flex items-center gap-2"
            >
              Download Resume <FaDownload />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 border-2 border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl font-bold transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              Contact Me <FaPaperPlane />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center md:justify-start pt-6">
            {[
              { Icon: FaGithub, link: "https://github.com/Shihab5500", color: "hover:text-gray-900 dark:hover:text-white" },
              { Icon: FaLinkedin, link: "https://www.linkedin.com/in/shahariyar-sani-shihab/", color: "hover:text-blue-600 dark:hover:text-blue-500" },
              { Icon: FaFacebook, link: "https://www.facebook.com/shahariyarsani.shihab.1", color: "hover:text-blue-700 dark:hover:text-blue-600" }
            ].map((item, index) => (
              <a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`text-gray-500 dark:text-gray-400 text-2xl transition-all duration-300 hover:-translate-y-2 ${item.color}`}
              >
                <item.Icon />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: Passport Style Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <div 
             className="relative cursor-pointer group"
             onClick={onSecretTap}
          >
            {/* Animated Border Behind Image */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            {/* Image Container (Passport Aspect Ratio 3:4) */}
            <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src={"https://i.ibb.co.com/dqrZ7mC/02278e9b-17b3-4c71-afc8-89e3ea417071.jpg"} 
                alt="Shihab Profile" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-blue-500/30 px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 transform transition-transform duration-500 hover:-translate-y-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-gray-800 dark:text-gray-200">Open to Work</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;