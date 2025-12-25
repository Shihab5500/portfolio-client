import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href=""><h1 className="text-2xl font-bold text-blue-500">Shihab Ahmed</h1></a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-blue-400 transition">Home</a>
              <a href="#about" className="hover:text-blue-400 transition">About</a>
              <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full font-medium transition">
              Download Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> 
                       : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <a href="#home" className="block px-3 py-2 hover:bg-slate-700 rounded">Home</a>
          <a href="#about" className="block px-3 py-2 hover:bg-slate-700 rounded">About</a>
          <a href="#projects" className="block px-3 py-2 hover:bg-slate-700 rounded">Projects</a>
          <a href="#contact" className="block px-3 py-2 hover:bg-slate-700 rounded">Contact</a>
          <button className="w-full mt-2 bg-blue-600 px-5 py-2 rounded-full font-medium">Download Resume</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;