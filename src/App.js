import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AskAI from "./AskAI";

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-700 text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ACE Wise Ag</h1>
          <nav className="flex gap-4">
            <Link to="/" className="bg-white text-green-700 px-4 py-2 rounded hover:bg-green-100 transition font-semibold">Home</Link>
            <Link to="/ask-ai" className="bg-white text-green-700 px-4 py-2 rounded hover:bg-green-100 transition font-semibold">Ask AI</Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ask-ai" element={<AskAI />} />
        </Routes>
      </main>
      <footer className="bg-green-100 text-center text-sm text-gray-700 p-4">
        &copy; {new Date().getFullYear()} ACE Wise Ag. All rights reserved.
      </footer>
    </div>
  </Router>
);

export default App;