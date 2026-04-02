import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

// Components Import
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import ProjectDetails from "./components/ProjectDetails"; 
import Experience from "./components/Experience";
import SEO from "./components/SEO"; // 🟢 SEO ইম্পোর্ট

// Landing Page Component
const Home = ({ handleSecretTap }) => (
  <>
    <div onClick={handleSecretTap}>
      <Hero />
    </div>
    <About />
    <Education />
    <Experience/>
    <Skills />
    <Projects />
    <Contact />
  </>
);

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") === "true");
  const [showLogin, setShowLogin] = useState(false);
  const [tapCount, setTapCount] = useState(0);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (tapCount === 0) return;
    const timer = setTimeout(() => setTapCount(0), 2000);
    return () => clearTimeout(timer);
  }, [tapCount]);

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
    <BrowserRouter>
      {/* 🟢 SEO কম্পোনেন্ট এখানে বসানো হলো */}
      <SEO /> 
      
      <div className="bg-slate-50 text-gray-900 dark:bg-[#020617] dark:text-white min-h-screen scroll-smooth transition-colors duration-300">
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/" element={
            <>
              {isAdmin && <AdminDashboard />}
              {!isAdmin && showLogin && (
                <AdminLogin 
                  setIsAdmin={setIsAdmin} 
                  onCancel={() => setShowLogin(false)} 
                />
              )}
              {!isAdmin && !showLogin && <Home handleSecretTap={handleSecretTap} />} 
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;