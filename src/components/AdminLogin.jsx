import { useState } from "react";

const AdminLogin = ({ setIsAdmin }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const ADMIN_PASSWORD = "Shihab@@@@@12345"; // 🔐 নিজের মতো করে বদলাও

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      setIsAdmin(true);
    } else {
      setError("Wrong password");
    }
  };

  return (
    <section className="py-24 bg-[#020617] flex justify-center">
      <div className="bg-slate-900/70 border border-white/10 rounded-3xl p-8 w-full max-w-md text-center shadow-xl">
        <h2 className="text-2xl font-bold mb-2 text-blue-400">
          Admin Login
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Authorized access only
        </p>

        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl outline-none focus:border-blue-500 mb-4"
        />

        {error && (
          <p className="text-red-400 text-sm mb-3">{error}</p>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-bold transition"
        >
          Login
        </button>
      </div>
    </section>
  );
};

export default AdminLogin;
