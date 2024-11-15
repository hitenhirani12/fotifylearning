import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import SignupPopup from "./loginSystem/SignupPopup";
import CareerPath from "./pages/careerpath/CareerPath";
import NetworkEngineer from "./pages/careerpath/NetworkEngineer";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar constant rahega har page ke liye */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<SignupPopup />} />
          {/* <Routes> */}
            <Route path="/career-path" element={<CareerPath />}/>
          {/* </Routes> */}

          <Route path="career-path/network" element={<NetworkEngineer/>}/>
        </Route>
      </Routes>
      <Footer /> {/* Footer constant rahega har page ke liye */}
    </Router>
  );
}

export default App;
