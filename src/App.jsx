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
import SupplyChain from "./pages/mission/threat/SupplyChain";
import CouchDBRCE from "./pages/course/CouchDBRCE";
import MitreAttack from "./pages/MitreAttack";
import Alliances from "./pages/Alliances";
import SocAnalyst from "./pages/careerpath/SocAnalyst";
import Impact from "./pages/Impact";
import Privacy from "./pages/Privacy";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar constant rahega har page ke liye */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<SignupPopup />} />
          <Route path="/career-path" element={<CareerPath />} />
          <Route path="career-path/network-engineer" element={<NetworkEngineer />} />
          <Route path="threat-actor-campaign/weak-link-in-the-supply-chain" element={<SupplyChain />} />
          <Route path="course/cve-series-couchdb-rce-cve-2022-24706" element={<CouchDBRCE />} />
          <Route path="/mitre-attack" element={<MitreAttack />} />
          <Route path="/alliances" element={<Alliances />} />
          <Route path="/career-path/soc-analyst" element={<SocAnalyst />} />
          <Route path="/practice-lab/log-analysis-basics" element={<SocAnalyst />} />
          <Route path="/fortifylearning-impact-hub" element={<Impact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
      <Footer /> {/* Footer constant rahega har page ke liye */}
    </Router>
  );
}

export default App;