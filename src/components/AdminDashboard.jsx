

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaEnvelopeOpenText, FaSignOutAlt } from "react-icons/fa";

// const AdminDashboard = () => {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/admin/messages")
//       .then((res) => {
//         setMessages(res.data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to load messages");
//         setLoading(false);
//       });
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("isAdmin");
//     window.location.reload();
//   };

//   return (
//     <section className="py-24 bg-[#020617] text-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//           <div className="flex items-center gap-4">
//             <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 text-3xl">
//               <FaEnvelopeOpenText />
//             </div>
//             <div>
//               <h1 className="text-4xl font-black">Admin Dashboard</h1>
//               <p className="text-gray-400 text-sm">
//                 Portfolio contact messages
//               </p>
//             </div>
//           </div>

//           {/* Logout */}
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-2 px-5 py-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 transition-all w-fit"
//           >
//             <FaSignOutAlt />
//             Logout
//           </button>
//         </div>

//         {/* Loading */}
//         {loading && (
//           <p className="text-center text-gray-400">
//             Loading messages...
//           </p>
//         )}

//         {/* Error */}
//         {!loading && error && (
//           <p className="text-center text-red-400">
//             {error}
//           </p>
//         )}

//         {/* Empty */}
//         {!loading && !error && messages.length === 0 && (
//           <p className="text-center text-gray-400">
//             No messages found.
//           </p>
//         )}

//         {/* Messages */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {messages.map((msg) => (
//             <div
//               key={msg._id}
//               className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-xl hover:border-blue-500/40 transition-all"
//             >
//               {/* Header */}
//               <div className="mb-4">
//                 <h3 className="text-lg font-bold text-blue-400">
//                   {msg.name}
//                 </h3>
//                 <p className="text-xs text-gray-400 break-all">
//                   {msg.email}
//                 </p>
//               </div>

//               {/* Subject */}
//               <div className="mb-3">
//                 <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
//                   Subject
//                 </span>
//                 <p className="text-sm text-white mt-1">
//                   {msg.subject}
//                 </p>
//               </div>

//               {/* Message */}
//               <div className="mb-4">
//                 <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
//                   Message
//                 </span>
//                 <p className="text-sm text-gray-300 mt-1 leading-relaxed">
//                   {msg.message}
//                 </p>
//               </div>

//               {/* Date */}
//               <p className="text-[11px] text-gray-500 font-mono">
//                 {new Date(msg.createdAt).toLocaleString()}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AdminDashboard;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaEnvelopeOpenText, FaSignOutAlt, FaTrash } from "react-icons/fa";

// const AdminDashboard = () => {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/admin/messages")
//       .then((res) => {
//         setMessages(res.data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Failed to load messages");
//         setLoading(false);
//       });
//   }, []);

//   // 🗑 DELETE message
//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this message?"
//     );
//     if (!confirmDelete) return;

//     try {
//       await axios.delete(
//         `http://localhost:5000/api/admin/messages/${id}`
//       );
//       setMessages(messages.filter((msg) => msg._id !== id));
//     } catch {
//       alert("Delete failed");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("isAdmin");
//     window.location.reload();
//   };

//   return (
//     <section className="py-24 bg-[#020617] text-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Header */}
//         <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
//           <div className="flex items-center gap-4">
//             <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 text-3xl">
//               <FaEnvelopeOpenText />
//             </div>
//             <div>
//               <h1 className="text-4xl font-black">Admin Dashboard</h1>
//               <p className="text-gray-400 text-sm">
//                 Portfolio contact messages
//               </p>
//             </div>
//           </div>

//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-2 px-5 py-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 transition-all w-fit"
//           >
//             <FaSignOutAlt /> Logout
//           </button>
//         </div>

//         {/* Loading */}
//         {loading && (
//           <p className="text-center text-gray-400">
//             Loading messages...
//           </p>
//         )}

//         {/* Error */}
//         {!loading && error && (
//           <p className="text-center text-red-400">
//             {error}
//           </p>
//         )}

//         {/* Empty */}
//         {!loading && !error && messages.length === 0 && (
//           <p className="text-center text-gray-400">
//             No messages found.
//           </p>
//         )}

//         {/* Messages */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {messages.map((msg) => (
//             <div
//               key={msg._id}
//               className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-xl hover:border-blue-500/40 transition-all"
//             >
//               <div className="mb-4">
//                 <h3 className="text-lg font-bold text-blue-400">
//                   {msg.name}
//                 </h3>
//                 <p className="text-xs text-gray-400 break-all">
//                   {msg.email}
//                 </p>
//               </div>

//               <div className="mb-3">
//                 <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
//                   Subject
//                 </span>
//                 <p className="text-sm text-white mt-1">
//                   {msg.subject}
//                 </p>
//               </div>

//               <div className="mb-4">
//                 <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
//                   Message
//                 </span>
//                 <p className="text-sm text-gray-300 mt-1 leading-relaxed">
//                   {msg.message}
//                 </p>
//               </div>

//               <p className="text-[11px] text-gray-500 font-mono">
//                 {new Date(msg.createdAt).toLocaleString()}
//               </p>

//               {/* 🗑 Delete Button (ONLY FEATURE) */}
//               <button
//                 onClick={() => handleDelete(msg._id)}
//                 className="mt-4 flex items-center gap-2 text-sm text-red-400 hover:text-red-500 transition"
//               >
//                 <FaTrash /> Delete
//               </button>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AdminDashboard;



import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaEnvelopeOpenText, FaSignOutAlt, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/messages");
      setMessages(res.data);
    } catch {
      toast.error("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete Message?",
      text: "This message will be permanently removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#334155",
      confirmButtonText: "Yes, delete it",
      background: "#020617",
      color: "#fff",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(
          `http://localhost:5000/api/admin/messages/${id}`
        );

        setMessages(messages.filter((msg) => msg._id !== id));
        toast.success("Message deleted successfully 🗑️");
      } catch {
        toast.error("Delete failed");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    window.location.reload();
  };

  return (
    <section className="py-24 bg-[#020617] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 text-3xl">
              <FaEnvelopeOpenText />
            </div>
            <div>
              <h1 className="text-4xl font-black">Admin Dashboard</h1>
              <p className="text-gray-400 text-sm">
                Portfolio contact messages
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {loading && <p className="text-center text-gray-400">Loading...</p>}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-slate-900/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-xl hover:border-blue-500/40 transition-all relative"
            >
              <h3 className="text-lg font-bold text-blue-400">
                {msg.name}
              </h3>
              <p className="text-xs text-gray-400 break-all mb-3">
                {msg.email}
              </p>

              <p className="text-sm font-bold text-gray-500">Subject</p>
              <p className="text-sm mb-3">{msg.subject}</p>

              <p className="text-sm font-bold text-gray-500">Message</p>
              <p className="text-sm text-gray-300 mb-4">{msg.message}</p>

              <p className="text-[11px] text-gray-500 mb-4">
                {new Date(msg.createdAt).toLocaleString()}
              </p>

              <button
                onClick={() => handleDelete(msg._id)}
                className="flex items-center gap-2 text-red-400 hover:text-red-500 text-sm"
              >
                <FaTrash /> Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;

