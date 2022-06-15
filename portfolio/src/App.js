import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact"



function App() {
  return (
   <Router>
    <div>
      <Navbar />
      <Routes>
            <Route  exact path="/" element={<About/>}/>
            <Route  exact path="/projects" element={<Projects/>}/>
            <Route  exact path="/resume" element={<Resume/>}/>
            <Route  exact path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  </Router>
   
  );
}

export default App;
