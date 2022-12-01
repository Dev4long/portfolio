import React from 'react';
import {useState} from 'react';
import { Link } from "react-router-dom";
import './navbar.css'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'



function Navbar() {

  const[sidebar, setBar] = useState(false)

  const showBar = () => setBar(!sidebar)


  return (
    
    <div className= "navbar">
    
    <div className="container">
        <h2 className="name">DENIS KADRICH</h2>
        
       
        <div className="menu">
        <AiOutlineMenu className="menuIcon" onClick={showBar} />
        
          
          
          
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className= 'nav-menu-items' onClick={showBar}>
            <li className="navBar-toggle">
            <AiOutlineClose className="X"/>
            </li>
            <li style={{style:"none"}}className="links">
            <Link to="/" className="linksH">About</Link>
            </li>
            <li className="links">
            <Link to="/projects" className="linksH">Projects</Link>
            </li>
            <li className="links">
            {/* <Link to="/resume" className="links">Resume</Link> */}
            <Link to="/contact" className="linksH">Contact</Link>
            </li>
          </ul>
          </nav>
        
        
        </div>
        

    </div>
    </div>
   
  )
}

export default Navbar