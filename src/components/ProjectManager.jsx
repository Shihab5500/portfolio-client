


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { FaTrash, FaPlus, FaCode, FaLink, FaImage, FaListUl, FaUserShield } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';

// const ProjectManager = () => {
//   const [projects, setProjects] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [showForm, setShowForm] = useState(false);

//   // Form State
//   const [formData, setFormData] = useState({
//     title: '', description: '', image: '', liveLink: '', githubLink: '', serverLink: '',
//     tech: '', features: '', challenges: '', improvements: '',
//     adminEmail: '', adminPass: '', userEmail: '', userPass: ''
//   });

//   // 🔐 ADMIN KEY
//   const ADMIN_KEY = "Shihab@@@@@12345"; 

//   // 🌐 API URL
//   const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

//   // Fetch Projects
//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/projects`);
//       if(res.data.success) {
//         setProjects(res.data.data);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to load projects");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle Input Change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Submit New Project
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const techArray = formData.tech.split(',').map(item => item.trim());
//     const featuresArray = formData.features.split(',').map(item => item.trim());

//     const payload = {
//       ...formData,
//       tech: techArray,
//       features: featuresArray,
//       credentials: {
//         adminEmail: formData.adminEmail, adminPass: formData.adminPass,
//         userEmail: formData.userEmail, userPass: formData.userPass
//       }
//     };

//     try {
//       const res = await axios.post(`${API_URL}/api/projects`, payload, {
//         headers: { "x-admin-key": ADMIN_KEY }
//       });

//       if (res.data.success) {
//         toast.success("Project Added Successfully! 🚀");
//         setProjects([...projects, res.data.data]); // Add to end (since we sort by oldest first now)
//         setShowForm(false);
//         setFormData({
//             title: '', description: '', image: '', liveLink: '', githubLink: '', serverLink: '',
//             tech: '', features: '', challenges: '', improvements: '',
//             adminEmail: '', adminPass: '', userEmail: '', userPass: ''
//         });
//       }
//     } catch (error) {
//       toast.error("Failed to add project.");
//     }
//   };

//   // Delete Project
//   const handleDelete = async (id) => {
//     if(!window.confirm("Are you sure you want to delete this project?")) return;

//     try {
//       await axios.delete(`${API_URL}/api/projects/${id}`, {
//         headers: { "x-admin-key": ADMIN_KEY }
//       });
//       setProjects(projects.filter(p => p._id !== id));
//       toast.success("Project Deleted 🗑️");
//     } catch (error) {
//       toast.error("Delete Failed");
//     }
//   };

//   return (
//     <div className="space-y-8">
      
//       {/* Header & Add Button */}
//       <div className="flex justify-between items-center bg-slate-800/50 p-6 rounded-3xl border border-white/5">
//         <div>
//             <h2 className="text-2xl font-bold text-white">Project Manager</h2>
//             <p className="text-gray-400 text-sm">Manage your portfolio projects dynamically</p>
//         </div>
//         <button 
//             onClick={() => setShowForm(!showForm)}
//             className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold text-white transition-all shadow-lg shadow-blue-600/20"
//         >
//             {showForm ? 'Close Form' : <><FaPlus /> Add New Project</>}
//         </button>
//       </div>

//       {/* Add Project Form */}
//       <AnimatePresence>
//         {showForm && (
//             <motion.form 
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: 'auto' }}
//                 exit={{ opacity: 0, height: 0 }}
//                 onSubmit={handleSubmit}
//                 className="bg-slate-900/80 p-8 rounded-3xl border border-blue-500/30 space-y-6 overflow-hidden"
//             >
//                 <div className="grid md:grid-cols-2 gap-6">
//                     <Input label="Project Title" name="title" value={formData.title} onChange={handleChange} icon={<FaCode />} />
//                     <Input label="Image URL (Direct Link)" name="image" value={formData.image} onChange={handleChange} icon={<FaImage />} />
//                 </div>

//                 <div className="grid md:grid-cols-3 gap-6">
//                     <Input label="Live Link" name="liveLink" value={formData.liveLink} onChange={handleChange} icon={<FaLink />} />
//                     <Input label="GitHub Client Link" name="githubLink" value={formData.githubLink} onChange={handleChange} icon={<FaLink />} />
//                     <Input label="Server Link (Optional)" name="serverLink" value={formData.serverLink} onChange={handleChange} icon={<FaLink />} />
//                 </div>

//                 <TextArea label="Description" name="description" value={formData.description} onChange={handleChange} />
                
//                 <div className="grid md:grid-cols-2 gap-6">
//                     <Input label="Tech Stack (comma separated)" name="tech" value={formData.tech} onChange={handleChange} icon={<FaListUl />} />
//                     <Input label="Features (comma separated)" name="features" value={formData.features} onChange={handleChange} icon={<FaListUl />} />
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                     <TextArea label="Challenges" name="challenges" value={formData.challenges} onChange={handleChange} />
//                     <TextArea label="Future Improvements" name="improvements" value={formData.improvements} onChange={handleChange} />
//                 </div>

//                 {/* Credentials Section */}
//                 <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
//                     <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2"><FaUserShield /> Demo Credentials (Optional)</h3>
//                     <div className="grid md:grid-cols-2 gap-4">
//                         <Input label="Admin Email" name="adminEmail" value={formData.adminEmail} onChange={handleChange} />
//                         <Input label="Admin Password" name="adminPass" value={formData.adminPass} onChange={handleChange} />
//                         <Input label="User Email" name="userEmail" value={formData.userEmail} onChange={handleChange} />
//                         <Input label="User Password" name="userPass" value={formData.userPass} onChange={handleChange} />
//                     </div>
//                 </div>

//                 <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-600/20 transition-all">
//                     🚀 Publish Project
//                 </button>
//             </motion.form>
//         )}
//       </AnimatePresence>

//       {/* Project List */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {isLoading ? <p className="text-gray-400">Loading projects...</p> : projects.map((project) => (
//             <div key={project._id} className="bg-slate-900/50 border border-white/5 p-4 rounded-2xl flex flex-col gap-4 group hover:border-blue-500/30 transition-all">
//                 <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-xl" />
//                 <div>
//                     <h3 className="text-lg font-bold text-white">{project.title}</h3>
//                     <p className="text-xs text-gray-400 line-clamp-2">{project.description}</p>
//                 </div>
//                 <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
//                     <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
//                         {new Date(project.createdAt).toLocaleDateString()}
//                     </span>
//                     <button 
//                         onClick={() => handleDelete(project._id)}
//                         className="text-red-400 hover:bg-red-500/10 p-2 rounded-lg transition-colors"
//                     >
//                         <FaTrash />
//                     </button>
//                 </div>
//             </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// // Helper Components
// const Input = ({ label, name, value, onChange, icon }) => (
//     <div className="space-y-1">
//         <label className="text-xs text-gray-400 uppercase font-bold ml-1">{label}</label>
//         <div className="relative">
//             <input type="text" name={name} value={value} onChange={onChange} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" />
//             {icon && <span className="absolute right-4 top-3.5 text-gray-500">{icon}</span>}
//         </div>
//     </div>
// );

// const TextArea = ({ label, name, value, onChange }) => (
//     <div className="space-y-1">
//         <label className="text-xs text-gray-400 uppercase font-bold ml-1">{label}</label>
//         <textarea name={name} value={value} onChange={onChange} rows="3" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none"></textarea>
//     </div>
// );

// export default ProjectManager;









import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaTrash, FaPlus, FaCode, FaLink, FaImage, FaListUl, FaUserShield } from 'react-icons/fa';

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    title: '', description: '', image: '', liveLink: '', githubLink: '', serverLink: '',
    tech: '', features: '', challenges: '', improvements: '',
    adminEmail: '', adminPass: '', userEmail: '', userPass: ''
  });

  // 🌐 API URL
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Fetch Projects
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/projects`);
      if(res.data.success) {
        setProjects(res.data.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load projects");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit New Project
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const techArray = formData.tech.split(',').map(item => item.trim());
    const featuresArray = formData.features.split(',').map(item => item.trim());

    const payload = {
      ...formData,
      tech: techArray,
      features: featuresArray,
      credentials: {
        adminEmail: formData.adminEmail, adminPass: formData.adminPass,
        userEmail: formData.userEmail, userPass: formData.userPass
      }
    };

    try {
      // 🟢 লোকাল স্টোরেজ থেকে JWT টোকেন নেওয়া হলো
      const token = localStorage.getItem("adminToken");

      const res = await axios.post(`${API_URL}/api/projects`, payload, {
        headers: { Authorization: `Bearer ${token}` } // 🟢 পুরনো x-admin-key বাদ দিয়ে টোকেন পাঠানো হলো
      });

      if (res.data.success) {
        toast.success("Project Added Successfully! 🚀");
        setProjects([res.data.data, ...projects]); // নতুন প্রজেক্ট শুরুতে দেখানোর জন্য
        setShowForm(false);
        setFormData({
            title: '', description: '', image: '', liveLink: '', githubLink: '', serverLink: '',
            tech: '', features: '', challenges: '', improvements: '',
            adminEmail: '', adminPass: '', userEmail: '', userPass: ''
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add project.");
    }
  };

  // Delete Project
  const handleDelete = async (id) => {
    if(!window.confirm("Are you sure you want to delete this project?")) return;

    try {
      // 🟢 ডিলিট করার সময়ও টোকেন পাঠাতে হবে
      const token = localStorage.getItem("adminToken");

      await axios.delete(`${API_URL}/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` } 
      });
      setProjects(projects.filter(p => p._id !== id));
      toast.success("Project Deleted 🗑️");
    } catch (error) {
      toast.error("Delete Failed. You might not be authorized.");
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Header & Add Button */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white dark:bg-slate-800/50 p-6 rounded-3xl border border-gray-200 dark:border-white/5 shadow-sm">
        <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Project Manager</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Manage your portfolio projects dynamically</p>
        </div>
        <button 
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold text-white transition-all shadow-lg shadow-blue-600/20 transform hover:-translate-y-1"
        >
            {showForm ? 'Close Form' : <><FaPlus /> Add New Project</>}
        </button>
      </div>

      {/* Add Project Form (Pure Tailwind CSS Transition) */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showForm ? "max-h-[2500px] opacity-100 mb-8" : "max-h-0 opacity-0"}`}>
        <form 
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-900/80 p-8 rounded-3xl border border-gray-200 dark:border-blue-500/30 space-y-6 shadow-xl"
        >
            <div className="grid md:grid-cols-2 gap-6">
                <Input label="Project Title" name="title" value={formData.title} onChange={handleChange} icon={<FaCode />} />
                <Input label="Image URL (Direct Link)" name="image" value={formData.image} onChange={handleChange} icon={<FaImage />} />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <Input label="Live Link" name="liveLink" value={formData.liveLink} onChange={handleChange} icon={<FaLink />} />
                <Input label="GitHub Client Link" name="githubLink" value={formData.githubLink} onChange={handleChange} icon={<FaLink />} />
                <Input label="Server Link (Optional)" name="serverLink" value={formData.serverLink} onChange={handleChange} icon={<FaLink />} />
            </div>

            <TextArea label="Description" name="description" value={formData.description} onChange={handleChange} />
            
            <div className="grid md:grid-cols-2 gap-6">
                <Input label="Tech Stack (comma separated)" name="tech" value={formData.tech} onChange={handleChange} icon={<FaListUl />} />
                <Input label="Features (comma separated)" name="features" value={formData.features} onChange={handleChange} icon={<FaListUl />} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <TextArea label="Challenges" name="challenges" value={formData.challenges} onChange={handleChange} />
                <TextArea label="Future Improvements" name="improvements" value={formData.improvements} onChange={handleChange} />
            </div>

            {/* Credentials Section */}
            <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-white/5">
                <h3 className="text-blue-600 dark:text-blue-400 font-bold mb-4 flex items-center gap-2"><FaUserShield /> Demo Credentials (Optional)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <Input label="Admin Email" name="adminEmail" value={formData.adminEmail} onChange={handleChange} />
                    <Input label="Admin Password" name="adminPass" value={formData.adminPass} onChange={handleChange} />
                    <Input label="User Email" name="userEmail" value={formData.userEmail} onChange={handleChange} />
                    <Input label="User Password" name="userPass" value={formData.userPass} onChange={handleChange} />
                </div>
            </div>

            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-600/20 transition-all transform hover:-translate-y-1">
                🚀 Publish Project
            </button>
        </form>
      </div>

      {/* Project List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? <p className="text-gray-500 dark:text-gray-400 font-bold animate-pulse">Loading projects...</p> : projects.map((project) => (
            <div key={project._id} className="bg-white dark:bg-slate-900/50 border border-gray-200 dark:border-white/5 p-4 rounded-2xl flex flex-col gap-4 group hover:border-blue-500/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-xl h-40 shrink-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mt-1">{project.description}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center">
                    <span className="text-xs font-bold bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-md border border-blue-100 dark:border-blue-500/20">
                        {new Date(project.createdAt).toLocaleDateString()}
                    </span>
                    <button 
                        onClick={() => handleDelete(project._id)}
                        className="text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 p-2 rounded-lg transition-colors"
                        title="Delete Project"
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
        ))}
      </div>

    </div>
  );
};

// Helper Components
const Input = ({ label, name, value, onChange, icon }) => (
    <div className="space-y-1">
        <label className="text-xs text-gray-600 dark:text-gray-400 uppercase font-bold ml-1">{label}</label>
        <div className="relative">
            <input type="text" name={name} value={value} onChange={onChange} className="w-full bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
            {icon && <span className="absolute right-4 top-3.5 text-gray-400">{icon}</span>}
        </div>
    </div>
);

const TextArea = ({ label, name, value, onChange }) => (
    <div className="space-y-1">
        <label className="text-xs text-gray-600 dark:text-gray-400 uppercase font-bold ml-1">{label}</label>
        <textarea name={name} value={value} onChange={onChange} rows="3" className="w-full bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"></textarea>
    </div>
);

export default ProjectManager;