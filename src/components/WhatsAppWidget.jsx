import React, { useState } from 'react';
import { FaWhatsapp, FaTimes, FaPaperPlane } from 'react-icons/fa';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "8801730240084"; // আপনার নাম্বার দিন

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  return (
    // 🟢 flex flex-col items-end যোগ করা হয়েছে যাতে ডান দিকেই আটকে থাকে
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end font-sans">
      
      {/* চ্যাট উইন্ডো (origin-bottom-right দেওয়া হয়েছে যাতে ডান কোনা থেকে ওপেন হয়) */}
      <div className={`mb-4 w-72 sm:w-80 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5 overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}`}>
        
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">S</div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-green-500 rounded-full"></span>
            </div>
            <div>
              <h4 className="font-bold text-sm">Shihab Ahmed</h4>
              <p className="text-[10px] opacity-90">Typically replies within an hour</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform p-1">
            <FaTimes />
          </button>
        </div>

        <div className="p-4 bg-gray-50 dark:bg-slate-800/50 min-h-[100px]">
          <div className="bg-white dark:bg-slate-900 p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-white/5 max-w-[85%]">
            <p className="text-xs text-gray-700 dark:text-gray-300">
              Hi there! 👋 How can I help you with your web project or SEO strategy?
            </p>
          </div>
        </div>

        <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-white/5 flex gap-2">
          <input 
            type="text" 
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-gray-100 dark:bg-slate-800 border-none rounded-full px-4 py-2 text-xs focus:ring-2 focus:ring-green-500 dark:text-white outline-none"
          />
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-full transition-colors shadow-lg shadow-green-500/20">
            <FaPaperPlane size={14} />
          </button>
        </form>
      </div>

      {/* ফ্লোটিং বাটন */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center text-3xl shadow-2xl shadow-green-500/40 hover:scale-110 active:scale-95 transition-all duration-300 relative group"
      >
        <FaWhatsapp />
      </button>

    </div>
  );
};

export default WhatsAppWidget;