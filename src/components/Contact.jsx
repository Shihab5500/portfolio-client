

// import React, { useState } from "react";
// import axios from "axios";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
// import { toast } from "react-toastify";

// const Contact = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const form = e.target;

//     const formData = {
//       name: form.name.value,
//       email: form.email.value,
//       subject: form.subject.value,
//       message: form.message.value,
//     };

//     try {
//       const response = await axios.post(
//         "https://portfolio-server-eta-dusky.vercel.app/api/contact",
//         formData
//       );

//       if (response.data.success) {
//         toast.success("Message sent successfully 🚀");
//         form.reset();
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Something went wrong 😢");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-slate-900 text-white px-6 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />
//       <div className="absolute bottom-20 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />

//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
//             Contact{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
//               Me
//             </span>
//           </h2>
//           <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
//           <p className="text-gray-400 mt-4">
//             Feel free to message me for any questions or project discussions.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-10">
//           {/* Left Side */}
//           <div className="lg:col-span-1 space-y-6">
//             <InfoCard icon={<FaEnvelope />} title="Email Me" value="saniahmed65900@gmail.com" />
//             <InfoCard icon={<FaPhoneAlt />} title="WhatsApp / Call" value="+8801730240084" color="green" />
//             <InfoCard icon={<FaMapMarkerAlt />} title="Location" value="Rajshahi, Bangladesh" color="red" />
//           </div>

//           {/* Form */}
//           <div className="lg:col-span-2 bg-slate-800/30 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm shadow-2xl">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <Input label="Your Name" name="name" />
//                 <Input label="Your Email" name="email" type="email" />
//               </div>

//               <Input label="Subject" name="subject" />

//               <div>
//                 <label className="text-sm text-gray-400 ml-1">Your Message</label>
//                 <textarea
//                   rows="4"
//                   name="message"
//                   required
//                   placeholder="Tell me about your project..."
//                   className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold flex items-center gap-3 transition ${
//                   loading && "opacity-70 cursor-not-allowed"
//                 }`}
//               >
//                 {loading ? "Sending..." : "Send Message"}
//                 <FaPaperPlane />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Input = ({ label, name, type = "text" }) => (
//   <div>
//     <label className="text-sm text-gray-400 ml-1">{label}</label>
//     <input
//       type={type}
//       name={name}
//       required
//       className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
//     />
//   </div>
// );

// const InfoCard = ({ icon, title, value, color = "blue" }) => (
//   <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-xl">
//     <div className="flex items-center gap-4">
//       <div className={`w-12 h-12 bg-${color}-500/10 rounded-xl flex items-center justify-center text-${color}-500 text-xl`}>
//         {icon}
//       </div>
//       <div>
//         <h4 className="text-sm text-gray-400 uppercase font-bold">{title}</h4>
//         <p className="text-white font-medium">{value}</p>
//       </div>
//     </div>
//   </div>
// );

// export default Contact;







// import React, { useState } from "react";
// import axios from "axios";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
// import { toast } from "react-toastify";

// const Contact = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const form = e.target;

//     const formData = {
//       name: form.name.value,
//       email: form.email.value,
//       subject: form.subject.value,
//       message: form.message.value,
//     };

//     try {
//       const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
//       const response = await axios.post(`${API_URL}/api/contact`, formData);
//       if (response.data.success) {
//         toast.success("Message sent successfully 🚀");
//         form.reset();
//       }
//     } catch (err) {
//       toast.error("Something went wrong 😢");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6 relative z-10">
        
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
//             Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Me</span>
//           </h2>
//           <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
//           <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
//             Have a project in mind or just want to say hi? Feel free to send me a message!
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-10">
//           {/* Left Side: Info Cards */}
//           <div className="lg:col-span-1 space-y-6">
//             <InfoCard icon={<FaEnvelope />} title="Email Me" value="shihabahmed7600@gmail.com" color="blue" />
//             <InfoCard icon={<FaPhoneAlt />} title="WhatsApp / Call" value="+8801730240084" color="green" />
//             <InfoCard icon={<FaMapMarkerAlt />} title="Location" value="Rajshahi, Bangladesh" color="red" />
//           </div>

//           {/* Right Side: Form */}
//           <div className="lg:col-span-2 bg-gray-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-xl dark:shadow-none">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <Input label="Your Name" name="name" />
//                 <Input label="Your Email" name="email" type="email" />
//               </div>

//               <Input label="Subject" name="subject" />

//               <div>
//                 <label className="text-sm font-bold text-gray-700 dark:text-gray-400 ml-1 mb-1 block">Your Message</label>
//                 <textarea
//                   rows="4"
//                   name="message"
//                   required
//                   placeholder="Tell me about your project..."
//                   className="w-full bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none transition-all"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-blue-500/30 transform hover:-translate-y-1 ${loading && "opacity-70 cursor-not-allowed transform-none"}`}
//               >
//                 {loading ? "Sending..." : "Send Message"} <FaPaperPlane />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Reusable Components inside Contact
// const Input = ({ label, name, type = "text" }) => (
//   <div>
//     <label className="text-sm font-bold text-gray-700 dark:text-gray-400 ml-1 mb-1 block">{label}</label>
//     <input
//       type={type}
//       name={name}
//       required
//       className="w-full bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
//     />
//   </div>
// );

// const InfoCard = ({ icon, title, value, color }) => {
//   // Tailwind dynamic color maps for safe rendering
//   const colorMap = {
//     blue: "text-blue-500 bg-blue-100 dark:bg-blue-500/10",
//     green: "text-green-500 bg-green-100 dark:bg-green-500/10",
//     red: "text-red-500 bg-red-100 dark:bg-red-500/10",
//   };

//   return (
//     <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm transition-transform duration-300 hover:-translate-y-1">
//       <div className="flex items-center gap-4">
//         <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${colorMap[color]}`}>
//           {icon}
//         </div>
//         <div>
//           <h4 className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">{title}</h4>
//           <p className="text-gray-900 dark:text-white font-bold mt-1">{value}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;




import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Web3Forms Setup
    const formData = new FormData(e.target);
    // 👇 এখানে আপনার ইমেইলে পাওয়া Access Key বসান 👇
    formData.append("access_key", "59dd0869-9d17-44fa-b97c-90502b382ddf");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully 🚀");
        e.target.reset(); // ফর্ম ক্লিয়ার করা
      } else {
        console.error("Error", data);
        toast.error("Failed to send message.");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      toast.error("Something went wrong 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Me</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? Feel free to send me a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Side: Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <InfoCard icon={<FaEnvelope />} title="Email Me" value="shihabahmed7600@gmail.com" color="blue" />
            <InfoCard icon={<FaPhoneAlt />} title="WhatsApp / Call" value="+8801730240084" color="green" />
            <InfoCard icon={<FaMapMarkerAlt />} title="Location" value="Rajshahi, Bangladesh" color="red" />
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-2 bg-gray-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-xl dark:shadow-none">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Optional: Add a subject dynamically for your email subject line */}
              <input type="hidden" name="subject" value="New Submission from Portfolio" />
              {/* Optional: Anti-spam honeypot */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Your Name" name="name" />
                <Input label="Your Email" name="email" type="email" />
              </div>

              {/* Web3Forms এ Subject এর জন্য name="subject" ব্যবহার করা যায় না যদি উপরের hidden input ব্যবহার করেন। তাই এটি name="Project_Subject" করে দিলাম। */}
              <Input label="Subject" name="Project_Subject" />

              <div>
                <label className="text-sm font-bold text-gray-700 dark:text-gray-400 ml-1 mb-1 block">Your Message</label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-blue-500/30 transform hover:-translate-y-1 ${loading && "opacity-70 cursor-not-allowed transform-none"}`}
              >
                {loading ? "Sending..." : "Send Message"} <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Components
const Input = ({ label, name, type = "text" }) => (
  <div>
    <label className="text-sm font-bold text-gray-700 dark:text-gray-400 ml-1 mb-1 block">{label}</label>
    <input
      type={type}
      name={name}
      required
      className="w-full bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
    />
  </div>
);

const InfoCard = ({ icon, title, value, color }) => {
  const colorMap = {
    blue: "text-blue-500 bg-blue-100 dark:bg-blue-500/10",
    green: "text-green-500 bg-green-100 dark:bg-green-500/10",
    red: "text-red-500 bg-red-100 dark:bg-red-500/10",
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${colorMap[color]}`}>
          {icon}
        </div>
        <div>
          <h4 className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">{title}</h4>
          <p className="text-gray-900 dark:text-white font-bold mt-1">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;