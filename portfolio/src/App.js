import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      
      
      <Navbar />
        <Routes>
          
          <Route path='/' element={<About />} />

          <Route path='/projects' element={<Projects />} />
          
          <Route path='/resume' element={<Resume />} />

          <Route path='/contact' element={<Contact />} />
           

        </Routes>
     
     
    </div>
    </Router>
  );
}

export default App;
