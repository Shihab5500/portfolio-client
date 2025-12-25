


// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import AdminDashboard from "./components/AdminDashboard";
// import AdminUnlock from "./components/AdminUnlock";


// function App() {
//   const [isAdmin, setIsAdmin] = useState(
//     localStorage.getItem("isAdmin") === "true"
//   );

//   return (
//     <div className="scroll-smooth bg-slate-900 min-h-screen text-white">
//       <Navbar />

//       <Hero />
//       <About />
//       <Skills />
//       <Projects />

//       {/* 🔐 Admin Section */}
//       {isAdmin ? (
//         <AdminDashboard />
//       ) : (
//         <AdminUnlock setIsAdmin={setIsAdmin} />
//       )}

//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;




import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";

function App() {
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );
  const [showLogin, setShowLogin] = useState(false);
  const [tapCount, setTapCount] = useState(0);

  // ⏱ Reset tap count after 2 seconds
  useEffect(() => {
    if (tapCount === 0) return;
    const timer = setTimeout(() => setTapCount(0), 2000);
    return () => clearTimeout(timer);
  }, [tapCount]);

  // 👆 Handle secret 5 taps / clicks
  const handleSecretTap = () => {
    setTapCount((prev) => {
      const count = prev + 1;
      if (count === 5) {
        setShowLogin(true);
        return 0;
      }
      return count;
    });
  };

  return (
    <div className="scroll-smooth bg-slate-900 min-h-screen text-white">
      <Navbar />

      {/* 👇 Hero image receives tap/click */}
      <Hero onSecretTap={handleSecretTap} />

      <About />
      <Skills />
      <Projects />

      {/* 🔐 Admin Section */}
      {isAdmin && <AdminDashboard />}
      {!isAdmin && showLogin && (
        <AdminLogin setIsAdmin={setIsAdmin} />
      )}

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
