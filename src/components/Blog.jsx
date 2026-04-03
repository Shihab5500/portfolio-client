import React, { useState } from 'react';
import { FaBookOpen, FaArrowRight, FaTags, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 🟢 ডামি ডেটা
  const blogs = [
    {
      _id: "1",
      title: "How I Transitioned from Agriculture to MERN Stack Development",
      excerpt: "The journey of switching careers isn't easy, but combining the patience learned in agriculture with the logic of coding made it possible.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      category: "My Journey",
      readTime: "5 min read",
      date: "April 05, 2026"
    },
    {
      _id: "2",
      title: "Why SEO is Crucial for Every React Developer in 2026",
      excerpt: "Building a fast React app is just the beginning. Without proper SEO and GA4 tracking, your beautiful app might never be found.",
      image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop",
      category: "SEO & Marketing",
      readTime: "7 min read",
      date: "April 01, 2026"
    },
    {
      _id: "3",
      title: "Understanding Server Actions in Next.js",
      excerpt: "A deep dive into how Server Actions are changing the way we handle form submissions and data mutations in React applications.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      category: "Tech Tips",
      readTime: "4 min read",
      date: "March 25, 2026"
    }
  ];

  const categories = ["All", "My Journey", "SEO & Marketing", "Tech Tips"];

  // Filter Logic
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    // 🟢 pt-40 দেওয়া হয়েছে যাতে নেভবারের সাথে না মেশে
    <section className="pt-40 pb-24 bg-slate-50 dark:bg-[#020617] min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */} 
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
             <FaBookOpen className="text-blue-600 dark:text-blue-500 text-2xl" />
             <span className="text-blue-600 dark:text-blue-500 font-mono tracking-widest uppercase text-sm font-bold">Insights & Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Blog</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Thoughts, tutorials, and experiences from my journey as a developer and digital marketer.
          </p>
        </div>

        {/* 🟢 Search & Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Search Bar */}
          <div className="relative w-full md:w-96 ">
            
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 text-gray-700 dark:text-gray-300 shadow-sm transition-all"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  selectedCategory === cat 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20" 
                  : "bg-white dark:bg-slate-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-slate-800 hover:text-blue-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article key={blog._id} className="group bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                      <FaTags className="text-[10px]" /> {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col grow">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 dark:text-gray-500 mb-4 uppercase tracking-wider">
                    <span>{blog.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
                    <Link to={`/blog/${blog._id}`} className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all">
                      Read Article <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-400">No articles found in this category.</h3>
          </div>
        )}

      </div>
    </section>
  );
};

export default Blog;