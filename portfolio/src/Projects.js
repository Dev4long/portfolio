import React from 'react'
import './projects.css'


function Projects() {
  return (
    <div className="projectContainer">
  
     
      <div className="d1 row border first">
        
        <div className="front">
          <img className ="projectImage" alt="Project" src="https://randomuser.me/api/portraits/men/5.jpg"/>
        </div>
        
        <div className="back">
        <img className ="projectImage" src="https://randomuser.me/api/portraits/men/4.jpg"/>
        </div>

      </div>
    
     
     
      <div className="d2 row"></div>
   
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