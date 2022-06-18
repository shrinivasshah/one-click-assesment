import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import SummaryPage from "./pages/SummaryPage/SummaryPage";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:address" element={<DetailsPage />} />
            <Route path="/:address/summary" element={<SummaryPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
