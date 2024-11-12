import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignupPopup from "./loginSystem/SignupPopup";
import Certfications from "./pages/Certifications";
import CareerPath from "./pages/careerpath/CareerPath";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<SignupPopup />} />
        <Route path="/career-path" element={<CareerPath/>} />

        <Route path="/certifications" element={<Certfications />} />


      </Routes>
    </Router>
  );
}

export default App;
