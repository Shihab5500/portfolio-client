import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async"; // 🟢 নতুন ইম্পোর্ট

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider> {/* 🟢 অ্যাপকে মুড়ে দেওয়া হলো */}
      <App />
    </HelmetProvider>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme="dark"
    />
  </StrictMode>
);