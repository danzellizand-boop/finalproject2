import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <button onClick={() => navigate("/plants")}>
        Get Started
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Route /plants akan diisi ProductList di Task 6 */}
      </Routes>
    </Router>
  );
};

export default App;
