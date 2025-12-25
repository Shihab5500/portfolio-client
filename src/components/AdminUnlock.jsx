import { useState } from "react";

const AdminUnlock = ({ setIsAdmin }) => {
  const [key, setKey] = useState("");
  const [error, setError] = useState("");

  const handleUnlock = () => {
    // 🔑 SECRET KEY (নিজের মতো করে বদলাতে পারো)
    if (key === "Shihab@@@@@12345") {
      localStorage.setItem("isAdmin", "true");
      setIsAdmin(true);
    } else {
      setError("Invalid admin key");
    }
  };

  return (
    <div className="py-24 bg-[#020617] flex justify-center">
      <div className="bg-slate-900/70 border border-white/10 rounded-3xl p-8 w-full max-w-md text-center shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">
          Admin Access
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          This section is restricted
        </p>

        <input
          type="password"
          placeholder="Enter admin key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl outline-none focus:border-blue-500 mb-4"
        />

        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

        <button
          onClick={handleUnlock}
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-bold transition"
        >
          Unlock Dashboard
        </button>
      </div>
    </div>
  );
};

export default AdminUnlock;
