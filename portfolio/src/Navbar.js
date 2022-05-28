import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'

function Navbar() {
  return (
    <div className= "navbar">
    <div className="container">
        <h1 className="name">DENIS KADRICH</h1>

        <div className="menu">
            <Link className="links" to="/">About</Link>
            <Link className="links" to="/projects">Projects</Link>
            <Link className="links" to="/resume">Resume</Link>
            <Link className="links" to="/contact">Contact</Link>
        </div>

        {/* <button class="burger">
            <span></span>
            <span></span>
            <span></span>
        </button> */}

    </div>
    </div>
  )
}

export default Navbar