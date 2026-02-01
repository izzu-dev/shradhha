import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countdown from "./pages/Countdown/Countdown";
import Home from "./pages/Home/Home";
import "./App.css";

// 🎯 TARGET DATE: January 31, 2027
const TARGET_DATE = new Date(2027, 0, 31, 0, 0, 0).getTime();

function App() {
  return (
    <Router>
      <Routes>
        {/* Route 1: Home is now the default page */}
        <Route path="/" element={<Home />} />

        {/* Route 2: The Countdown Page */}
        <Route 
          path="/countdown" 
          element={<Countdown targetDate={TARGET_DATE} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;