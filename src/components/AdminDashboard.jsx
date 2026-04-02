


// import React, { useState, useEffect } from "react";
// import { FaEnvelopeOpenText, FaSignOutAlt, FaProjectDiagram, FaTrash } from "react-icons/fa";
// import { motion } from "framer-motion";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { toast } from "react-toastify";

// // প্রজেক্ট ম্যানেজার কম্পোনেন্ট ইম্পোর্ট
// import ProjectManager from "./ProjectManager"; 

// // --- মেসেজ দেখার কম্পোনেন্ট (Internal Component) ---
// const MessagesTab = () => {
//     const [messages, setMessages] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // মেসেজ লোড করা
//     useEffect(() => { 
//         fetchMessages(); 
//     }, []);

//     const fetchMessages = async () => {
//         try {
//             // আপনার ব্যাকএন্ড লিঙ্ক ঠিক আছে কিনা দেখে নেবেন
//             const res = await axios.get("https://portfolio-server-eta-dusky.vercel.app/api/admin/messages");
//             setMessages(res.data);
//         } catch { 
//             toast.error("Failed to load messages"); 
//         } finally { 
//             setLoading(false); 
//         }
//     };

//     // মেসেজ ডিলিট করা
//     const handleDelete = async (id) => {
//         const result = await Swal.fire({
//             title: "Delete Message?", 
//             text: "Permanently remove this?", 
//             icon: "warning",
//             showCancelButton: true, 
//             confirmButtonColor: "#ef4444", 
//             cancelButtonColor: "#334155",
//             confirmButtonText: "Yes, delete", 
//             background: "#020617", 
//             color: "#fff"
//         });

//         if (result.isConfirmed) {
//             try {
//                 // DELETE রিকোয়েস্টে হেডার বা অথেন্টিকেশন লাগলে সেটা যোগ করতে হতে পারে (যদি ব্যাকএন্ডে সেট করা থাকে)
//                 await axios.delete(`https://portfolio-server-eta-dusky.vercel.app/api/admin/messages/${id}`);
//                 setMessages(messages.filter((msg) => msg._id !== id));
//                 toast.success("Message deleted");
//             } catch { 
//                 toast.error("Delete failed"); 
//             }
//         }
//     };

//     return (
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {loading && <p className="text-gray-400">Loading messages...</p>}
//             {!loading && messages.length === 0 && <p className="text-gray-500">No messages found.</p>}
            
//             {messages.map((msg) => (
//                 <div key={msg._id} className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-xl relative group hover:border-blue-500/30 transition-all">
//                      <h3 className="text-lg font-bold text-blue-400">{msg.name}</h3>
//                      <p className="text-xs text-gray-400 mb-3">{msg.email}</p>
//                      <p className="text-sm font-bold text-gray-500">Subject: {msg.subject}</p>
//                      <p className="text-sm text-gray-300 mb-4 mt-1 bg-slate-800/50 p-3 rounded-xl border border-white/5">
//                         {msg.message}
//                      </p>
//                      <div className="flex justify-between items-center mt-4 border-t border-white/5 pt-3">
//                         <span className="text-[10px] text-gray-500">
//                             {new Date(msg.createdAt).toLocaleDateString()}
//                         </span>
//                         <button 
//                             onClick={() => handleDelete(msg._id)} 
//                             className="text-red-400 hover:bg-red-500/10 p-2 rounded-lg transition-colors"
//                         >
//                             <FaTrash />
//                         </button>
//                      </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// // --- মেইন ড্যাশবোর্ড কম্পোনেন্ট ---
// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("messages"); // 'messages' or 'projects'

//   const handleLogout = () => {
//     localStorage.removeItem("isAdmin");
//     window.location.reload(); // পেজ রিলোড করে লগইন পেজে পাঠাবে
//   };

//   return (
//     <section className="py-24 bg-[#020617] text-white min-h-screen">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header & Navigation */}
//         <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-8">
          
//           <div className="flex items-center gap-4">
//             <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 text-3xl">
//               {activeTab === 'messages' ? <FaEnvelopeOpenText /> : <FaProjectDiagram />}
//             </div>
//             <div>
//               <h1 className="text-4xl font-black">Admin Dashboard</h1>
//               <p className="text-gray-400 text-sm">Manage your portfolio content</p>
//             </div>
//           </div>

//           <div className="flex gap-4">
//              {/* Tab Buttons */}
//              <div className="flex bg-slate-900 rounded-xl p-1 border border-white/10">
//                 <button 
//                     onClick={() => setActiveTab("messages")}
//                     className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === 'messages' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
//                 >
//                     Messages
//                 </button>
//                 <button 
//                     onClick={() => setActiveTab("projects")}
//                     className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === 'projects' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
//                 >
//                     Projects
//                 </button>
//              </div>

//              <button 
//                 onClick={handleLogout} 
//                 className="px-5 py-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 hover:text-white transition-all"
//                 title="Logout"
//              >
//                 <FaSignOutAlt />
//              </button>
//           </div>
//         </div>

//         {/* Dynamic Content Area */}
//         <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//         >
//             {activeTab === 'messages' ? <MessagesTab /> : <ProjectManager />}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default AdminDashboard;









import React, { useState, useEffect } from "react";
import { FaEnvelopeOpenText, FaSignOutAlt, FaProjectDiagram, FaTrash } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

// প্রজেক্ট ম্যানেজার কম্পোনেন্ট ইম্পোর্ট
import ProjectManager from "./ProjectManager"; 

// --- মেসেজ দেখার কম্পোনেন্ট (Internal Component) ---
const MessagesTab = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // ডায়নামিক API URL
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // মেসেজ লোড করা
  useEffect(() => { 
    fetchMessages(); 
  }, []);

  const fetchMessages = async () => {
    try {
      // 🟢 লোকাল স্টোরেজ থেকে JWT টোকেন নেওয়া হলো
      const token = localStorage.getItem("adminToken");
      
      const res = await axios.get(`${API_URL}/api/admin/messages`, {
        headers: { Authorization: `Bearer ${token}` } // 🟢 সার্ভারকে টোকেন পাঠানো হলো
      });
      setMessages(res.data);
    } catch (err) { 
      console.error(err);
      toast.error("Failed to load messages. Please login again."); 
    } finally { 
      setLoading(false); 
    }
  };

  // মেসেজ ডিলিট করা
  const handleDelete = async (id) => {
    // ডার্ক/লাইট মোডের উপর ভিত্তি করে Swal এর কালার ঠিক করা
    const isDark = document.documentElement.classList.contains("dark");

    const result = await Swal.fire({
      title: "Delete Message?", 
      text: "Permanently remove this?", 
      icon: "warning",
      showCancelButton: true, 
      confirmButtonColor: "#ef4444", 
      cancelButtonColor: isDark ? "#334155" : "#94a3b8",
      confirmButtonText: "Yes, delete", 
      background: isDark ? "#020617" : "#ffffff", 
      color: isDark ? "#fff" : "#0f172a"
    });

    if (result.isConfirmed) {
      try {
        // 🟢 ডিলিট করার সময়ও টোকেন পাঠাতে হবে
        const token = localStorage.getItem("adminToken");

        await axios.delete(`${API_URL}/api/admin/messages/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setMessages(messages.filter((msg) => msg._id !== id));
        toast.success("Message deleted");
      } catch { 
        toast.error("Delete failed. You might not be authorized."); 
      }
    }
  };

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading && <p className="text-gray-500 dark:text-gray-400 font-bold animate-pulse">Loading messages...</p>}
      {!loading && messages.length === 0 && <p className="text-gray-500">No messages found.</p>}
      
      {messages.map((msg) => (
        <div key={msg._id} className="bg-white dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200 dark:border-white/5 rounded-3xl p-6 shadow-lg dark:shadow-xl relative group hover:border-blue-500/50 dark:hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
          <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">{msg.name}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{msg.email}</p>
          <p className="text-sm font-bold text-gray-700 dark:text-gray-500">Subject: {msg.subject}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 mt-1 bg-gray-50 dark:bg-slate-800/50 p-3 rounded-xl border border-gray-100 dark:border-white/5 whitespace-pre-wrap">
            {msg.message}
          </p>
          <div className="flex justify-between items-center mt-4 border-t border-gray-100 dark:border-white/5 pt-3">
            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500">
              {new Date(msg.createdAt).toLocaleDateString()}
            </span>
            <button 
              onClick={() => handleDelete(msg._id)} 
              className="text-red-500 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-500/10 p-2 rounded-lg transition-colors"
              title="Delete Message"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- মেইন ড্যাশবোর্ড কম্পোনেন্ট ---
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("messages"); // 'messages' or 'projects'

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("adminToken"); // 🟢 লগআউট করার সময় টোকেন ডিলিট করা হলো
    window.location.reload(); // পেজ রিলোড করে লগইন পেজে পাঠাবে
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#020617] text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header & Navigation */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-200 dark:border-white/10 pb-8">
          
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-100 dark:bg-blue-500/10 rounded-2xl text-blue-600 dark:text-blue-400 text-3xl shadow-sm">
              {activeTab === 'messages' ? <FaEnvelopeOpenText /> : <FaProjectDiagram />}
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900 dark:text-white">Admin Dashboard</h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Manage your portfolio content</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
             {/* Tab Buttons */}
             <div className="flex bg-white dark:bg-slate-900 rounded-xl p-1 border border-gray-200 dark:border-white/10 shadow-sm">
                <button 
                    onClick={() => setActiveTab("messages")}
                    className={`px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${activeTab === 'messages' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white'}`}
                >
                    Messages
                </button>
                <button 
                    onClick={() => setActiveTab("projects")}
                    className={`px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${activeTab === 'projects' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white'}`}
                >
                    Projects
                </button>
             </div>

             <button 
                onClick={handleLogout} 
                className="px-5 py-2 rounded-xl bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/30 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center"
                title="Logout"
             >
                <FaSignOutAlt />
             </button>
          </div>
        </div>

        {/* Dynamic Content Area (No Framer Motion, Pure CSS Fade-in) */}
        <div key={activeTab} className="animate-[fadeIn_0.4s_ease-in-out]">
            {/* Inline CSS animation for smooth tab switching without framer-motion */}
            <style>{`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            
            {activeTab === 'messages' ? <MessagesTab /> : <ProjectManager />}
        </div>

      </div>
    </section>
  );
};

export default AdminDashboard;