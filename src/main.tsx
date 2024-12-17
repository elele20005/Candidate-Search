


import React from "react";
import ReactDOM from "react-dom/client";

// Main App Component
import App from "./App";

// Global Styles
import "./styles/global.css";

// Context Provider for Candidate Data
import { CandidateProvider } from "./context/CandidateContext";

// Mount the React Application
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Context Provider wraps the App to share candidate data */}
    <CandidateProvider>
      <App />
    </CandidateProvider>
  </React.StrictMode>
);


