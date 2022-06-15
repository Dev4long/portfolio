import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'





function Navbar() {
  return (
    
    <div className= "navbar">
    <div className="container">
        <h1 className="name">DENIS KADRICH</h1>
        
       
        <div className="menu">
        
          <nav>
            <Link to="/" className="links">About</Link>
            <Link to="/projects" className="links">Projects</Link>
            <Link to="/resume" className="links">Resume</Link>
            <Link to="/contact" className="links">Contact</Link>
          </nav>
          
        
        </div>
        

    </div>
    </div>
   
  )
}

export default Navbar