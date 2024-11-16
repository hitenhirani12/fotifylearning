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

          <Route path="career-path/network-engineer" element={<NetworkEngineer/>}/>
          <Route path="threat-actor-campaign/weak-link-in-the-supply-chain" element={<SupplyChain/>}/>
          <Route path="course/cve-series-couchdb-rce-cve-2022-24706" element={<CouchDBRCE/>}/>
          <Route path="/mitre-attack" element={<MitreAttack/>}/>
          <Route path="/alliances" element={<Alliances/>}/>
          <Route path="/career-path/soc-analyst" element={<SocAnalyst/>}/>
          <Route path="/practice-lab/log-analysis-basics" element={<SocAnalyst/>}/>
        </Route>
      </Routes>
      <Footer /> {/* Footer constant rahega har page ke liye */}
    </Router>
  );
}

export default App;
