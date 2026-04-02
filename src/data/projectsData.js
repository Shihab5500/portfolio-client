export const projectsData = [
    {
      id: 1,
      title: "Clean City - Issue Tracker",
      // আপনার দেওয়া ডিসক্রিপশন
      description: "Clean City is a modern community engagement platform designed to bridge the gap between citizens and city authorities. It allows users to report neighborhood issues (like garbage, road damage, illegal construction) and track their resolution status in real-time.",
      
      // আপনার দেওয়া টেকনোলজি লিস্ট থেকে মেইনগুলো নেওয়া হয়েছে
      tech: ["React (Vite)", "Tailwind & DaisyUI", "Firebase Auth", "Node.js", "Express.js", "MongoDB", "Recharts"],
      
      image: "https://i.ibb.co.com/yFvMwKRc/Screenshot-116.png", 
      liveLink: "https://clean-city-world.vercel.app/",
      githubLink: "https://github.com/Shihab5500/client",
      serverLink: "https://github.com/Shihab5500/server", // ✅ নতুন সার্ভার লিঙ্ক ফিল্ড
      
      challenges: "Implementing real-time status updates and managing secure role-based authentication (User vs Admin) was challenging.",
      improvements: "Planning to add AI-based issue categorization and a mobile app version using React Native.",
      
      // ✅ নতুন ফিচার লিস্ট (আপনার টেক্সট থেকে)
      features: [
        "🌍 Interactive Home Page with Parallax effects & Live stats",
        "🔐 Secure Authentication (Google & Email/Password)",
        "🛠️ User Dashboard to report & track issues",
        "🛡️ Admin Dashboard to manage status (Pending/Resolved)",
        "🌗 Dark/Light Mode & Responsive Design",
        "🗺️ Google Maps integration for contact"
      ],

      // ✅ অ্যাডমিন ক্রেডেনশিয়ালস (আপনার টেক্সট থেকে)
      credentials: {
        adminEmail: "demo@admin.com",
        adminPass: "Demo1234",
        userEmail: "demo@user.com",
        userPass: "Demo1234"
      }
    },
    {
      id: 2,
      title: "Blood Donation Platform",
      description: "A dedicated MERN stack application designed to connect blood donors with people in need efficiently. It features a comprehensive role-based dashboard system that streamlines the donation process, manages funding, and ensures secure user interactions.",
      
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase Auth", "Stripe", "JWT"],
      
      image: "https://i.ibb.co.com/LXSRBz91/Screenshot-179.png", // আপনার আগের দেওয়া ইমেজ
      liveLink: "https://blood-donation-platform.netlify.app/",
      githubLink: "https://github.com/Shihab5500/client2",
      serverLink: "https://github.com/Shihab5500/server2",
      
      challenges: "Implementing a multi-role authentication system (Admin/Donor/Volunteer) and integrating secure Stripe payments were the main challenges.",
      improvements: "Plan to add real-time chat functionality between donors and requesters, and an SMS notification system.",
      
      features: [
        "👤 Role-based Dashboard (Donor, Admin, Volunteer)",
        "🔍 Search Donors by Blood Group & District/Upazila",
        "🩸 Create & Manage Donation Requests with Status Flow",
        "📸 Donor Registration with Avatar Upload (imgBB)",
        "💳 Funding Page integrated with Stripe Payment Gateway",
        "🛡️ Admin Control: User Management (Block/Unblock/Role)",
        "🔐 Secure API Endpoints using JWT Verification"
      ],

      credentials: {
        adminEmail: "normartillis11@gmail.com",
        adminPass: "Shihab@@@123",
        userEmail: "donor@demo.com", // টেস্ট করার জন্য একটি সাধারণ ডোনার একাউন্ট বা রেজিস্টার করতে বলবেন
        userPass: "123456"
      }
    },
    {
      id: 3,
      title: "SkillSwap - Local Skill Exchange",
      description: "A Single Page Application (SPA) designed to foster community growth by allowing users to offer, learn, and trade skills locally. It connects individuals who want to teach with those eager to learn through a user-friendly interface.",
      
      tech: ["React (Vite)", "Tailwind CSS", "DaisyUI", "Firebase Auth", "React Router", "Swiper JS", "AOS Animation"],
      
      image: "https://i.ibb.co.com/FkNRW21N/Screenshot-180.png",
      liveLink: "https://skillswap-project-1.netlify.app/",
      githubLink: "https://github.com/Shihab5500/SkillSwap",
      // serverLink: null, // সার্ভার লিঙ্ক নেই তাই এটি বাদ দেওয়া হলো
      
      challenges: "Fixing 404 errors on page reload (Netlify _redirects) and managing complex protected route redirection logic were key challenges.",
      improvements: "Planning to implement a real-time chat system for skill negotiation and a user review/rating system.",
      
      features: [
        "🔐 Firebase Auth (Email/Password + Google Login)",
        "🛡️ Protected Routes with Redirect Back functionality",
        "⚡ Dynamic Skill Details with Booking Toast notifications",
        "👤 Profile Management (Update Name & Photo via Firebase)",
        "🔄 Forgot Password flow with Gmail redirection",
        "📱 Fully Responsive UI using DaisyUI & Tailwind",
        "✨ Smooth Animations (AOS, Swiper, React Hot Toast)"
      ],

      // ক্রেডেনশিয়াল না দেওয়ায় এটি এমনভাবে রাখা হলো যেন "Register" মেসেজ দেখায়
      credentials: {
        // adminEmail: "", 
        // userEmail: "" 
      }
    },
    {
      id: 4,
      title: "HERO.IO - Apps Platform",
      description: "A modern React-based Single Page Application (SPA) designed to explore, install, and manage trending apps. It demonstrates dynamic routing, local storage integration for app state management, and a fully responsive user interface allowing users to search and view app details seamlessly.",
      
      tech: ["React (Vite)", "React Router DOM", "Tailwind CSS", "JavaScript", "Recharts", "Netlify"],
      
      image: "https://i.ibb.co.com/g88Pkfy/Screenshot-237.png",
      liveLink: "https://hero-io-project-2.netlify.app/",
      githubLink: "https://github.com/Shihab5500/Assaigment8",
      // serverLink: null, // সার্ভার নেই
      
      challenges: "Visualizing analytics data effectively using the Recharts library and managing dynamic installation states via Local Storage were the main challenges.",
      improvements: "Implementing a dark mode toggle and adding more detailed analytics for installed applications.",
      
      features: [
        "📱 Dynamic App Installation & Uninstallation System",
        "🔍 Search Functionality to find trending apps",
        "📊 Data Visualization using Recharts library",
        "💾 Local Storage Integration for Persisting App State",
        "⚡ Fast & Responsive SPA Routing with React Router",
        "🎨 Modern & Clean UI built with Tailwind CSS"
      ],

      // লগইন নেই, তাই এটি খালি রাখা হলো (ডিটেইলস পেজে বক্স দেখাবে না)
      credentials: null 
    }
  ];