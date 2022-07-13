import React from 'react'
import './projects.css'
import UrbanRider from "./ProjectPics/UrbanRider.png"


function Projects() {
  return (
    <div className="projectContainer">
  
     
      <div className="d1 row border first">
        
        <div className="front">
          heys nsdoFVPIUEWRBNGPIUEWRTNBIUPNERWTIONBOITRWNBI[ONETOINBN
          EFNQEROIUVBPIUQERBUVIPNERIPN]
        </div>
        
        <div className="back">
        <img className="urbanRiderPic" src={UrbanRider} alt="blackjack"/>
        </div>

      </div>
    
     
     
      <div className="d2 row">
        <div className="front">
          heys nsdoFVPIUEWRBNGPIUEWRTNBIUPNERWTIONBOITRWNBI[ONETOINBN
          EFNQEROIUVBPIUQERBUVIPNERIPN]
        </div>
        
        <div className="back">
          yehiuebiuwebiu
        <img src="https://images.unsplash.com/photo-1588611845066-f56f220559e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80" alt="Eat lift prey"/>
        </div>
      </div>
   
      <div className="d3 row"></div>
  
      <div className="d4 row"></div>
      
      {/* <div className="projectImage"></div>
      <div className="projectImage"></div>
      <div className="projectImage"></div>
      <div className="projectImage"></div> */}
    </div>
  )
}

export default Projects