import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Projects from "./Projects";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route path='/' element={<About />} />

          <Route path='/projects' element={<Projects />} />
           

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
