// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { FaArrowLeft, FaCalendarAlt, FaClock, FaTag, FaShareAlt, FaLightbulb, FaExternalLinkAlt, FaBook, FaSeedling, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

// const BlogPost = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     window.scrollTo(0, 0); 
    
//     // 🟢 রিয়েল স্টোরি ডেটা (Structured with sections)
//     const realBlogs = [
//       {
//         _id: "1",
//         title: "How I Transitioned from Agriculture to MERN Stack Development: A Shihab Ahmed Story",
//         author: "Shahariyar Sani Shihab",
//         date: "April 05, 2026",
//         readTime: "12 min read",
//         category: "My Journey",
//         image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
//         sections: [
//           {
//             title: "Introduction: A Non-Traditional Route",
//             icon: <FaMapMarkerAlt />,
//             content: "Welcome to my story. My name is Shahariyar Sani Shihab, and I work from my home studio in Rajshahi, Bangladesh. Looking back, my career path is far from the conventional 'Computer Science Degree' route. It's a journey fueled by continuous curiosity, late-night coding sessions, and a genuine passion for the digital world, all rooted in the patience I learned from my previous life in agriculture."
//           },
//           {
//             title: "The Seeds of Curiosity (My Early Days)",
//             icon: <FaSeedling />,
//             content: "My background in agriculture at Exim Bank Agricultural University taught me the value of observation, resilience, and patience. However, while I was surrounded by crops, I was always fascinated by technology. I realized that coding is remarkably similar to farming. You plant the logic (seeds), nurture it with debugging (watering and fertilizing), and finally, harvest a beautiful, scalable digital product. This analogy became my guiding principle."
//           },
//           {
//             title: "Transitioning to Frontend and Finding My Footing",
//             icon: <FaBook />,
//             content: "The switch wasn't instant. It started with simple HTML and CSS. I'll never forget the thrill of creating my first webpage. The struggle was real—the cascading style sheets often felt more like 'Cascading Errors'! But my agricultural roots had prepared me for a long cultivation cycle. My breakthrough came when I discovered JavaScript and later React.js. It felt like I had been farming with a shovel and suddenly was given a tractor."
//           },
//           {
//             title: "Deep Dive into MERN Stack: Building 'Nokshi House'",
//             icon: <FaExternalLinkAlt />,
//             content: "While frontend gave me the tools to design, my ambition was full-stack development. I spent countless hours mastering MongoDB, Express.js, and Node.js. The culmination of this effort was my major project, 'Nokshi House.' Building a full-stack e-commerce application from scratch allowed me to understand databases, APIs, and complex backend logic. It wasn't just code; it was about creating a secure and seamless user experience.",
//             projectLink: "https://your-nokshi-house-live-link.vercel.app" 
//           },
//           {
//             title: "Merging Dev and Marketing: The SEO & GA4 Expertise",
//             icon: <FaLightbulb />,
//             content: "I realized early on that a beautiful website is useless if no one visits it. This led me to my dual specialization. While I love building MERN apps, I am equally passionate about SEO and Digital Marketing. My expertise isn't just in code; it's in making that code grow organically. I deep-dive into **GA4, GTM, and GSC** to ensure every line of code is optimized for performance and visibility.",
//             extra_content: "I specialize in GTM, GA4 data analysis, Ad Boosting strategy, and strategic SEO optimization. I believe the future belongs to developers who can not only build but also strategize for growth."
//           },
//           {
//             title: "Rajshahi to the World: Community and Future Goals",
//             icon: <FaSeedling />,
//             content: "Working from Rajshahi allows me to stay connected to my roots while building digital solutions for clients worldwide. My journey from a non-tech background has made me a strong advocate for community learning and continuous improvement. I am excited to continue building high-performance web solutions that are beautifully designed and scientifically optimized for organic growth."
//           }
//         ]
//       }
//       // Add other real blog posts here
//     ];

//     const foundBlog = realBlogs.find(b => b._id === id);
//     setBlog(foundBlog);
//   }, [id]);

//   if (!blog) {
//     return <div className="min-h-screen flex items-center justify-center text-gray-500 pt-32 animate-pulse font-bold text-xl">Loading amazing story...</div>;
//   }

//   return (
//     <article className="pt-40 pb-24 bg-slate-50 dark:bg-[#020617] min-h-screen transition-colors duration-300">
      
//       {/* 🟢 Hero Header Section */}
//       <div className="max-w-4xl mx-auto px-6 mb-12">
//         <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:-translate-x-2 transition-transform mb-8 group">
//           <FaArrowLeft className="group-hover:scale-110 transition-transform"/> Back to Insights & Stories
//         </Link>
        
//         <div className="flex items-center gap-3 mb-6">
//           <span className="bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 border border-blue-200 dark:border-blue-500/20 shadow-sm">
//             <FaTag /> {blog.category}
//           </span>
//         </div>

//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-8">
//           {blog.title}
//         </h1>

//         <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-slate-800 pb-10">
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-blue-500/30">
//               S
//             </div>
//             <span>By <span className="text-gray-900 dark:text-white font-black">{blog.author}</span></span>
//           </div>
//           <div className="flex items-center gap-2.5 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-full border border-gray-200 dark:border-slate-800 shadow-sm"><FaCalendarAlt className="text-blue-500" /> {blog.date}</div>
//           <div className="flex items-center gap-2.5 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-full border border-gray-200 dark:border-slate-800 shadow-sm"><FaClock className="text-blue-500" /> {blog.readTime}</div>
//         </div>
//       </div>

//       {/* 🟢 Hero Image with Depth */}
//       <div className="max-w-5xl mx-auto px-6 mb-16 relative">
//          <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 blur-[150px] pointer-events-none rounded-full" />
//          <div className="w-full h-[40vh] md:h-[60vh] lg:h-[70vh] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 dark:shadow-gray-900 relative z-10 border border-gray-100 dark:border-slate-800">
//            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
//          </div>
//       </div>

//       {/* 🟢 Blog Content Area (Organized Sections) */}
//       <div className="max-w-4xl mx-auto px-6">
//         <div className="flex flex-col gap-y-12">
          
//           {blog.sections.map((section, index) => (
//             <div key={index} className="bg-white dark:bg-slate-900/60 p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-white/5 shadow-lg shadow-blue-500/5 hover:border-blue-500/30 dark:hover:border-blue-500/10 transition-colors">
//               <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-4">
//                  <span className="text-blue-500 text-3xl">{section.icon}</span> {section.title}
//               </h2>
              
//               {/* \n এবং ** ** ফরম্যাটিং সাপোর্ট */}
//               <div className="text-gray-700 dark:text-gray-300 leading-loose text-base md:text-lg mb-4">
//                 {section.content.split('\n').map((paragraph, i) => {
//                    if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
//                       return <strong key={i} className="block mt-4 mb-2 text-gray-900 dark:text-white">{paragraph.replace(/\*\*/g, '')}</strong>;
//                    }
//                    return <p key={i} className="mb-4">{paragraph}</p>;
//                 })}
//               </div>
              
//               {/* Project Link */}
//               {section.projectLink && (
//                 <a 
//                   href={section.projectLink} 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="inline-flex items-center gap-2.5 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all text-sm group mt-4"
//                 >
//                   Explore Nokshi House <FaExternalLinkAlt className="text-xs group-hover:scale-110"/>
//                 </a>
//               )}
              
//               {/* Extra Content block */}
//               {section.extra_content && (
//                   <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-white/5">
//                     <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
//                         {section.extra_content}
//                     </p>
//                   </div>
//               )}
//             </div>
//           ))}

//           {/* 🟢 Call-to-Action (CTA) */}
//           <div className="mt-8 bg-white dark:bg-slate-900 p-10 rounded-3xl border border-gray-100 dark:border-white/5 flex flex-col items-center text-center shadow-lg shadow-blue-500/10">
//              <div className="p-4 rounded-2xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-4xl mb-6 shadow-sm border border-blue-200 dark:border-blue-500/20">
//                <FaLightbulb />
//              </div>
//              <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-3">Merging Dev and Marketing? That's My Specialization.</h4>
//              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl font-medium leading-relaxed">If you need a developer who builds scalable MERN applications and optimizes them for SEO and Analytics, I am here to help.</p>
//              <Link to="/#contact" className="px-10 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-black text-sm hover:scale-105 transition-transform shadow-lg shadow-blue-500/20 flex items-center gap-2.5">
//                HIRE SHIHAB NOW <FaArrowRight />
//              </Link>
//           </div>

//         </div>

//         {/* 🟢 Bottom Share Area */}
//         <div className="mt-20 pt-10 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
//           <h4 className="text-lg font-bold text-gray-900 dark:text-white">Enjoyed my story?</h4>
//           <button className="flex items-center gap-2.5 px-8 py-3 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-white font-bold hover:bg-blue-600 hover:text-white transition-all shadow-sm">
//             <FaShareAlt /> Share Article
//           </button>
//         </div>
//       </div>

//     </article>
//   );
// };

// export default BlogPost;








import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaClock, FaTag, FaShareAlt, FaLightbulb, FaExternalLinkAlt, FaBook, FaSeedling, FaMapMarkerAlt, FaArrowRight, FaChartLine, FaCode } from 'react-icons/fa';

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

useEffect(() => {
    window.scrollTo(0, 0); 
    
    // 🟢 রিয়েল স্টোরি ডেটা (Structured with sections)
    const realBlogs = [
      {
        _id: "1",
        title: "How I Transitioned from Agriculture to MERN Stack Development: A Shihab Ahmed Story",
        author: "Shahariyar Sani Shihab",
        date: "April 05, 2026",
        readTime: "12 min read",
        category: "My Journey",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "Introduction: A Non-Traditional Route",
            icon: <FaMapMarkerAlt />,
            content: "Welcome to my story. My name is Shahariyar Sani Shihab, and I work from my home studio in Rajshahi, Bangladesh. Looking back, my career path is far from the conventional 'Computer Science Degree' route. It's a journey fueled by continuous curiosity, late-night coding sessions, and a genuine passion for the digital world, all rooted in the patience I learned from my previous life in agriculture."
          },
          {
            title: "The Seeds of Curiosity (My Early Days)",
            icon: <FaSeedling />,
            content: "My background in agriculture at Exim Bank Agricultural University taught me the value of observation, resilience, and patience. However, while I was surrounded by crops, I was always fascinated by technology. I realized that coding is remarkably similar to farming. You plant the logic (seeds), nurture it with debugging (watering and fertilizing), and finally, harvest a beautiful, scalable digital product. This analogy became my guiding principle."
          },
          {
            title: "Transitioning to Frontend and Finding My Footing",
            icon: <FaBook />,
            content: "The switch wasn't instant. It started with simple HTML and CSS. I'll never forget the thrill of creating my first webpage. The struggle was real—the cascading style sheets often felt more like 'Cascading Errors'! But my agricultural roots had prepared me for a long cultivation cycle. My breakthrough came when I discovered JavaScript and later React.js. It felt like I had been farming with a shovel and suddenly was given a tractor."
          },
          {
            title: "Deep Dive into MERN Stack: Building 'Nokshi House'",
            icon: <FaExternalLinkAlt />,
            content: "While frontend gave me the tools to design, my ambition was full-stack development. I spent countless hours mastering MongoDB, Express.js, and Node.js. The culmination of this effort was my major project, 'Nokshi House.' Building a full-stack e-commerce application from scratch allowed me to understand databases, APIs, and complex backend logic. It wasn't just code; it was about creating a secure and seamless user experience.",
            projectLink: "https://shihab-dev-portfolio.netlify.app/"
          },
          {
            title: "Merging Dev and Marketing: The SEO & GA4 Expertise",
            icon: <FaLightbulb />,
            content: "I realized early on that a beautiful website is useless if no one visits it. This led me to my dual specialization. While I love building MERN apps, I am equally passionate about SEO and Digital Marketing. My expertise isn't just in code; it's in making that code grow organically. I deep-dive into GA4, GTM, and GSC to ensure every line of code is optimized for performance and visibility.",
            extra_content: "I specialize in GTM, GA4 data analysis, Ad Boosting strategy, and strategic SEO optimization. I believe the future belongs to developers who can not only build but also strategize for growth."
          },
          {
            title: "Rajshahi to the World: Community and Future Goals",
            icon: <FaSeedling />,
            content: "Working from Rajshahi allows me to stay connected to my roots while building digital solutions for clients worldwide. My journey from a non-tech background has made me a strong advocate for community learning and continuous improvement. I am excited to continue building high-performance web solutions that are beautifully designed and scientifically optimized for organic growth."
          }
        ]
      },
      {
        _id: "2",
        title: "Why SEO is Crucial for Every React Developer in 2026",
        author: "Shahariyar Sani Shihab",
        date: "April 01, 2026",
        readTime: "7 min read",
        category: "SEO & Marketing",
        image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "The Silent Killer of Beautiful Web Apps",
            icon: <FaBook />,
            content: "As MERN stack developers, we love building fast, dynamic, and visually stunning single-page applications (SPAs) using React.js. But there's a harsh reality we often ignore: A beautiful app is useless if no one can find it on Google. In 2026, the competition is fierce, and relying solely on good UI/UX is a guaranteed path to failure."
          },
          {
            title: "The Problem with Traditional React and Search Engines",
            icon: <FaCode />,
            content: "Search engine crawlers historically struggle with client-side rendering (CSR). When Googlebot visits a traditional React app, it initially sees an almost empty HTML file. If the crawler doesn't wait for the JavaScript to execute and render the content, your amazing application might get indexed as a blank page. This is disastrous for organic traffic."
          },
          {
            title: "Bridging the Gap: Server-Side Rendering (SSR) and Meta Tags",
            icon: <FaLightbulb />,
            content: "The solution? We must take SEO seriously. Transitioning to frameworks like Next.js for Server-Side Rendering (SSR) ensures that search engines receive fully rendered HTML immediately. But it doesn't stop there. Managing dynamic meta tags, structured data (JSON-LD), and Open Graph tags using libraries like react-helmet-async is non-negotiable. Every route needs a unique, descriptive title and meta description."
          },
          {
            title: "Enter GA4 & GTM: Tracking What Matters",
            icon: <FaChartLine />,
            content: "SEO gets users to your site, but Analytics tells you what they do once they arrive. Integrating Google Analytics 4 (GA4) via Google Tag Manager (GTM) is the next critical step. As developers, we need to set up custom event tracking—not just page views, but button clicks, form submissions, and specific user interactions. This data is the lifeblood of marketing strategy and Conversion Rate Optimization (CRO)."
          },
          {
            title: "Conclusion: The Full-Stack Marketer",
            icon: <FaSeedling />,
            content: "The line between a web developer and a technical marketer is blurring. To truly add value to a business, we must write code that not only functions flawlessly but also ranks highly and tracks accurately. The developer who understands SEO and Analytics is the developer who wins in 2026."
          }
        ]
      },
      {
        _id: "3",
        title: "Understanding Server Actions in Next.js",
        author: "Shahariyar Sani Shihab",
        date: "March 25, 2026",
        readTime: "4 min read",
        category: "Tech Tips",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
        sections: [
          {
            title: "The End of Boilerplate API Routes?",
            icon: <FaLightbulb />,
            content: "For years, building forms in React meant a tedious process: create state, handle the onChange event, prevent default submission, create an API endpoint, make a fetch request, and manage loading/error states. Next.js Server Actions have fundamentally changed this paradigm, moving data mutation back to the server, right alongside the component."
          },
          {
            title: "What exactly are Server Actions?",
            icon: <FaCode />,
            content: "Server Actions are asynchronous functions that run exclusively on the server. They can be called directly from Client Components or Server Components. By simply adding the 'use server' directive at the top of an async function, Next.js behind the scenes creates an invisible API endpoint and handles the network request for you."
          },
          {
            title: "The Magic of Progressive Enhancement",
            icon: <FaChartLine />,
            content: "One of the most powerful features of Server Actions when used with the native HTML form elements is Progressive Enhancement. Even if JavaScript hasn't fully loaded on the client, or if it fails entirely, the form can still submit its data to the server. This is a massive win for performance and accessibility."
          },
          {
            title: "Security and Revalidation",
            icon: <FaBook />,
            content: "Because Server Actions execute on the server, you can securely interact with your database (like MongoDB) without exposing sensitive API keys to the client. Furthermore, Next.js provides functions like revalidatePath and revalidateTag, allowing you to instantly update the UI with fresh data after a successful mutation, without needing complex state management."
          }
        ]
      }
    ];

    const foundBlog = realBlogs.find(b => b._id === id);
    setBlog(foundBlog);
  }, [id]);

// ... (Rest of your component remains the same: the 'if (!blog)' check and the 'return' statement with the UI)
  if (!blog) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500 pt-32 animate-pulse font-bold text-xl">Loading amazing story...</div>;
  }

  return (
    <article className="pt-40 pb-24 bg-slate-50 dark:bg-[#020617] min-h-screen transition-colors duration-300">
      
      {/* 🟢 Hero Header Section */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:-translate-x-2 transition-transform mb-8 group">
          <FaArrowLeft className="group-hover:scale-110 transition-transform"/> Back to Insights & Stories
        </Link>
        
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 border border-blue-200 dark:border-blue-500/20 shadow-sm">
            <FaTag /> {blog.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-8">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-slate-800 pb-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-blue-500/30">
              S
            </div>
            <span>By <span className="text-gray-900 dark:text-white font-black">{blog.author}</span></span>
          </div>
          <div className="flex items-center gap-2.5 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-full border border-gray-200 dark:border-slate-800 shadow-sm"><FaCalendarAlt className="text-blue-500" /> {blog.date}</div>
          <div className="flex items-center gap-2.5 bg-white dark:bg-slate-900 px-5 py-2.5 rounded-full border border-gray-200 dark:border-slate-800 shadow-sm"><FaClock className="text-blue-500" /> {blog.readTime}</div>
        </div>
      </div>

      {/* 🟢 Hero Image with Depth */}
      <div className="max-w-5xl mx-auto px-6 mb-16 relative">
         <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 blur-[150px] pointer-events-none rounded-full" />
         <div className="w-full h-[40vh] md:h-[60vh] lg:h-[70vh] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 dark:shadow-gray-900 relative z-10 border border-gray-100 dark:border-slate-800">
           <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
         </div>
      </div>

      {/* 🟢 Blog Content Area (Organized Sections) */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col gap-y-12">
          
          {blog.sections.map((section, index) => (
            <div key={index} className="bg-white dark:bg-slate-900/60 p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-white/5 shadow-lg shadow-blue-500/5 hover:border-blue-500/30 dark:hover:border-blue-500/10 transition-colors">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-4">
                 <span className="text-blue-500 text-3xl">{section.icon}</span> {section.title}
              </h2>
              
              {/* \n এবং ** ** ফরম্যাটিং সাপোর্ট */}
              <div className="text-gray-700 dark:text-gray-300 leading-loose text-base md:text-lg mb-4">
                {section.content.split('\n').map((paragraph, i) => {
                   if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                      return <strong key={i} className="block mt-4 mb-2 text-gray-900 dark:text-white">{paragraph.replace(/\*\*/g, '')}</strong>;
                   }
                   return <p key={i} className="mb-4">{paragraph}</p>;
                })}
              </div>
              
              {/* Project Link */}
              {section.projectLink && (
                <a 
                  href={section.projectLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2.5 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all text-sm group mt-4"
                >
                  Explore Nokshi House <FaExternalLinkAlt className="text-xs group-hover:scale-110"/>
                </a>
              )}
              
              {/* Extra Content block */}
              {section.extra_content && (
                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                        {section.extra_content}
                    </p>
                  </div>
              )}
            </div>
          ))}

          {/* 🟢 Call-to-Action (CTA) */}
          <div className="mt-8 bg-white dark:bg-slate-900 p-10 rounded-3xl border border-gray-100 dark:border-white/5 flex flex-col items-center text-center shadow-lg shadow-blue-500/10">
             <div className="p-4 rounded-2xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-4xl mb-6 shadow-sm border border-blue-200 dark:border-blue-500/20">
               <FaLightbulb />
             </div>
             <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-3">Merging Dev and Marketing? That's My Specialization.</h4>
             <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl font-medium leading-relaxed">If you need a developer who builds scalable MERN applications and optimizes them for SEO and Analytics, I am here to help.</p>
             <Link to="/#contact" className="px-10 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-black text-sm hover:scale-105 transition-transform shadow-lg shadow-blue-500/20 flex items-center gap-2.5">
               HIRE SHIHAB NOW <FaArrowRight />
             </Link>
          </div>

        </div>

        {/* 🟢 Bottom Share Area */}
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">Enjoyed my story?</h4>
          <button className="flex items-center gap-2.5 px-8 py-3 rounded-full bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-white font-bold hover:bg-blue-600 hover:text-white transition-all shadow-sm">
            <FaShareAlt /> Share Article
          </button>
        </div>
      </div>

    </article>
  );
};

export default BlogPost;