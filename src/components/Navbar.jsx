





import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon, FaDownload } from 'react-icons/fa';

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // মোবাইল মেনু ওপেন থাকলে ব্যাকগ্রাউন্ড স্ক্রল বন্ধ করা (এবং iOS এর বাউন্স ইফেক্ট বন্ধ করা)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Prevent iOS background scroll
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
  }, [isOpen]);

  const navItems = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      {/* 🟢 Desktop & Tablet Navbar */}
      <nav
        className={`fixed w-full top-0 z-40 transition-all duration-500 ${
          scrolled 
            ? "bg-white/80 dark:bg-[#020617]/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-white/5 py-3 shadow-sm" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          
          {/* Logo (Minimalist) */}
          <a href="#home" className="flex-shrink-0 z-50">
            <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Shihab<span className="text-blue-500"> Ahmed</span>
            </h1>
          </a>

          {/* Desktop Links (Visible on lg and above) */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Action Buttons (Desktop & Mobile) */}
          <div className="flex items-center gap-4 sm:gap-5 z-50">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* Resume Button (Desktop only) */}
            <a
              href="/resume.pdf" 
              download="Shahariyar_Sani_Shihab_Resume.pdf"
              className="px-6 py-2.5 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/30" 
            >
              Resume
            </a>

            {/* Hamburger Button (Mobile/Tablet - visible below lg) */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors p-2 rounded-lg bg-gray-100/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700"
              aria-label="Open Menu"
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* 🟢 Mobile Sidebar/Drawer Menu */}
      
      {/* 1. Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      ></div>

      {/* 2. The Drawer itself */}
      <div 
        className={`fixed top-0 right-0 h-[100dvh] w-full max-w-[320px] bg-white dark:bg-[#0b1120] z-[70] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header (Close Button) */}
        <div className="flex justify-end p-6 border-b border-gray-100 dark:border-slate-800/50">
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2.5 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors bg-gray-50 dark:bg-slate-800 rounded-xl"
            aria-label="Close Menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Drawer Links Area (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3.5 text-base font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800/50 rounded-xl transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Drawer Footer (Resume Button Fixed at Bottom) */}
        <div className="p-6 border-t border-gray-100 dark:border-slate-800/50 bg-white/50 dark:bg-[#0b1120]/50 backdrop-blur-sm">
          <a
            href="/Resume (1).pdf"
            download="Shihab_Resume.pdf"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-4 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-lg shadow-blue-600/20"
          >
            <FaDownload size={14} /> Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;