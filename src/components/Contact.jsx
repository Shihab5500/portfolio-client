

import React, { useState } from "react";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      if (response.data.success) {
        toast.success("Message sent successfully 🚀");
        form.reset();
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Me
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">
            Feel free to message me for any questions or project discussions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Side */}
          <div className="lg:col-span-1 space-y-6">
            <InfoCard icon={<FaEnvelope />} title="Email Me" value="saniahmed65900@gmail.com" />
            <InfoCard icon={<FaPhoneAlt />} title="WhatsApp / Call" value="+8801730240084" color="green" />
            <InfoCard icon={<FaMapMarkerAlt />} title="Location" value="Rajshahi, Bangladesh" color="red" />
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-slate-800/30 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Your Name" name="name" />
                <Input label="Your Email" name="email" type="email" />
              </div>

              <Input label="Subject" name="subject" />

              <div>
                <label className="text-sm text-gray-400 ml-1">Your Message</label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold flex items-center gap-3 transition ${
                  loading && "opacity-70 cursor-not-allowed"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Input = ({ label, name, type = "text" }) => (
  <div>
    <label className="text-sm text-gray-400 ml-1">{label}</label>
    <input
      type={type}
      name={name}
      required
      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
    />
  </div>
);

const InfoCard = ({ icon, title, value, color = "blue" }) => (
  <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 shadow-xl">
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 bg-${color}-500/10 rounded-xl flex items-center justify-center text-${color}-500 text-xl`}>
        {icon}
      </div>
      <div>
        <h4 className="text-sm text-gray-400 uppercase font-bold">{title}</h4>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  </div>
);

export default Contact;
