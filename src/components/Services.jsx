import React from 'react';
import { 
  FaLaptopCode, 
  FaCheckCircle, 
  FaSearchDollar, 
  FaStore, 
  FaArrowRight, 
  FaCommentDots,
  FaRocket,
  FaChartPie,
  FaTools
} from 'react-icons/fa';

const Services = () => {
  // 🟢 ৬টি অ্যাডভান্সড সার্ভিস এবং তাদের টিয়ার (Standard, Premium, Enterprise)
  const gigs = [
    {
      id: 1,
      tier: "Standard",
      tierColor: "text-blue-600 bg-blue-100 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200 dark:border-blue-500/20",
      icon: <FaLaptopCode className="text-3xl text-blue-500" />,
      title: "Frontend Web Dev",
      description: "Pixel-perfect, highly interactive, and responsive user interfaces.",
      features: [
        "React.js / Next.js Development",
        "Tailwind CSS / Material UI",
        "Figma to Pixel-Perfect HTML/React",
        "Smooth Animations & Transitions",
        "API Integration"
      ],
      actionText: "Discuss Frontend"
    },
    {
      id: 2,
      tier: "Premium",
      badge: "Most Popular",
      tierColor: "text-purple-600 bg-purple-100 dark:bg-purple-500/10 dark:text-purple-400 border-purple-200 dark:border-purple-500/20",
      icon: <FaStore className="text-3xl text-purple-500" />,
      title: "Full-Stack E-commerce",
      description: "A complete online store with admin panel, built with MERN stack.",
      features: [
        "Custom UI/UX Storefront",
        "Secure JWT Authentication",
        "Cart & Order Management",
        "Payment Gateway Integration",
        "Full Admin Dashboard"
      ],
      actionText: "Build My Store"
    },
    {
      id: 3,
      tier: "Enterprise",
      tierColor: "text-emerald-600 bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20",
      icon: <FaRocket className="text-3xl text-emerald-500" />,
      title: "Custom SaaS / Web App",
      description: "Complex, scalable, and secure web applications for large businesses.",
      features: [
        "Scalable Database Architecture",
        "Role-Based Access Control",
        "Real-Time Data (Socket.io)",
        "Advanced Server Actions",
        "Third-Party API Integrations"
      ],
      actionText: "Plan My SaaS"
    },
    {
      id: 4,
      tier: "Growth",
      tierColor: "text-amber-600 bg-amber-100 dark:bg-amber-500/10 dark:text-amber-400 border-amber-200 dark:border-amber-500/20",
      icon: <FaSearchDollar className="text-3xl text-amber-500" />,
      title: "Complete SEO Setup",
      description: "Rank higher on Google and bring organic traffic to your business.",
      features: [
        "Technical SSR SEO Optimization",
        "On-Page Keyword Strategy",
        "Dynamic Meta & Open Graph Tags",
        "XML Sitemap & Robots.txt",
        "Google Search Console Indexing"
      ],
      actionText: "Boost SEO Ranking"
    },
    {
      id: 5,
      tier: "Data",
      tierColor: "text-rose-600 bg-rose-100 dark:bg-rose-500/10 dark:text-rose-400 border-rose-200 dark:border-rose-500/20",
      icon: <FaChartPie className="text-3xl text-rose-500" />,
      title: "Web Analytics Tracking",
      description: "Track user behavior, events, and conversions with zero data loss.",
      features: [
        "Google Analytics 4 (GA4) Setup",
        "Google Tag Manager (GTM)",
        "Facebook / Meta Pixel",
        "E-commerce Purchase Tracking",
        "Custom Button Click Events"
      ],
      actionText: "Setup Tracking"
    },
    {
      id: 6,
      tier: "Maintenance",
      tierColor: "text-cyan-600 bg-cyan-100 dark:bg-cyan-500/10 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20",
      icon: <FaTools className="text-3xl text-cyan-500" />,
      title: "Performance & Bug Fix",
      description: "Optimize slow websites to load in milliseconds and fix broken code.",
      features: [
        "90+ Google Lighthouse Score",
        "Image & Asset Optimization",
        "Code Minification & Refactoring",
        "Database Indexing",
        "Responsive UI Fixes"
      ],
      actionText: "Fix My Website"
    }
  ];

  const handleActionClick = (e) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
             <FaLaptopCode className="text-blue-600 dark:text-blue-500 text-2xl" />
             <span className="text-blue-600 dark:text-blue-500 font-mono tracking-widest uppercase text-sm font-bold">My Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Service Packages</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            From basic landing pages to enterprise-level SaaS applications, select a package that fits your business needs.
          </p>
        </div>

        {/* Gig Grid (3 Columns -> 6 Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {gigs.map((gig) => (
            <div 
              key={gig.id} 
              className="relative group bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-white/5 overflow-hidden hover:border-blue-500/50 dark:hover:border-blue-500/30 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col"
            >
              {/* Most Popular Badge */}
              {gig.badge && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-lg z-10">
                  {gig.badge}
                </div>
              )}

              {/* Gig Header */}
              <div className="p-8 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-slate-800/20">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-white dark:bg-slate-800 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {gig.icon}
                  </div>
                  {/* 🟢 Tier Badge (Standard, Premium, etc.) */}
                  <span className={`px-3 py-1 rounded-full text-[10px] uppercase font-black tracking-wider border shadow-sm ${gig.tierColor}`}>
                    {gig.tier}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                  {gig.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed min-h-[40px]">
                  {gig.description}
                </p>
                
                {/* Price (Custom Quote) */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700/50">
                   <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Pricing Setup</p>
                   <p className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                     <FaCommentDots className="text-blue-500" /> Custom Quote
                   </p>
                </div>
              </div>

              {/* Gig Features */}
              <div className="p-8 flex-grow flex flex-col">
                <ul className="space-y-4 mb-8 flex-grow">
                  {gig.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Call to Action */}
                <button 
                  onClick={handleActionClick}
                  className="w-full py-4 rounded-xl font-bold text-sm bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all flex items-center justify-center gap-2 group/btn border border-blue-100 dark:border-slate-700/50 hover:border-transparent"
                >
                  {gig.actionText} <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;