


// import { useState } from "react";
// import { FaArrowLeft } from "react-icons/fa"; // আইকন ইম্পোর্ট

// // ✅ onCancel prop রিসিভ করা হলো
// const AdminLogin = ({ setIsAdmin, onCancel }) => {
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const ADMIN_PASSWORD = "Shihab@@@@@12345"; 

//   const handleLogin = () => {
//     if (password === ADMIN_PASSWORD) {
//       localStorage.setItem("isAdmin", "true");
//       setIsAdmin(true);
//     } else {
//       setError("Wrong password! Access Denied.");
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-[#020617] px-4 relative overflow-hidden">
      
//       {/* Background Glow */}
//       <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

//       <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 w-full max-w-md text-center shadow-2xl relative z-10">
        
//         {/* ✅ Back Button (উপরে বাম পাশে) */}
//         <button 
//           onClick={onCancel} 
//           className="absolute top-6 left-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold"
//         >
//           <FaArrowLeft /> Back
//         </button>

//         <h2 className="text-3xl font-black mb-2 text-white mt-8">
//           Admin <span className="text-blue-500">Access</span>
//         </h2>
//         <p className="text-gray-400 text-sm mb-8">
//           Authorized personnel only. Please verify your identity.
//         </p>

//         <div className="space-y-4">
//           <input
//             type="password"
//             placeholder="Enter secure password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//               setError(""); // টাইপ করার সময় এরর মুছে যাবে
//             }}
//             className="w-full px-5 py-4 bg-slate-800/50 border border-slate-700 rounded-xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-500 transition-all"
//           />

//           {error && (
//             <p className="text-red-400 text-sm font-medium bg-red-500/10 py-2 rounded-lg animate-pulse">
//               {error}
//             </p>
//           )}

//           <button
//             onClick={handleLogin}
//             className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 transition-all transform hover:scale-[1.02] active:scale-95"
//           >
//             Unlock Dashboard
//           </button>
//         </div>
        
//         {/* Cancel option at bottom text */}
//         <p className="mt-6 text-xs text-gray-500">
//           Not an admin? <button onClick={onCancel} className="text-blue-400 hover:underline cursor-pointer">Go back to portfolio</button>
//         </p>

//       </div>
//     </section>
//   );
// };

// export default AdminLogin;








import { useState } from "react";
import { FaArrowLeft, FaLock } from "react-icons/fa";
import axios from "axios";

const AdminLogin = ({ setIsAdmin, onCancel }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      // API call to your backend
      const res = await axios.post(`${API_URL}/api/admin/login`, { password });
      
      if (res.data.success) {
        localStorage.setItem("adminToken", res.data.token); // Save JWT
        localStorage.setItem("isAdmin", "true");
        setIsAdmin(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Wrong password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#020617] px-4 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 w-full max-w-md text-center shadow-2xl relative z-10 transition-transform duration-300 hover:scale-[1.01]">
        
        <button 
          onClick={onCancel} 
          className="absolute top-6 left-6 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors flex items-center gap-2 text-sm font-bold group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back
        </button>

        <div className="flex justify-center mt-8 mb-4">
          <div className="p-4 bg-blue-100 dark:bg-blue-500/10 rounded-full text-blue-600 dark:text-blue-400">
             <FaLock className="text-3xl" />
          </div>
        </div>

        <h2 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">
          Admin <span className="text-blue-600 dark:text-blue-500">Access</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
          Authorized personnel only. Please verify your identity.
        </p>

        <div className="space-y-4">
          <input
            type="password"
            placeholder="Enter secure password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(""); 
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full px-5 py-4 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
          />

          {error && (
            <p className="text-red-500 dark:text-red-400 text-sm font-medium bg-red-100 dark:bg-red-500/10 py-2 rounded-lg">
              {error}
            </p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 transition-all transform active:scale-95 ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02]"}`}
          >
            {loading ? "Verifying..." : "Unlock Dashboard"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;