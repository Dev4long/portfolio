import React from 'react'
import './projects.css'
import UrbanRider from "./ProjectPics/UrbanRider.png"
import TheaterPic from "./ProjectPics/theaterPic.webp"
import EatLiftPray from "./ProjectPics/eatLiftPray.png"


function Projects() {
  return (
    <div className="projectContainer">
  
     
      <div className="d1 row border first">
        
        <div className="front">
        <img className="urbanRiderPic" src={UrbanRider} alt="urbanRider"/>
        </div>
        
        <div className="back">
         <img className="theaterPic" src={TheaterPic} alt="theater"/>
         <h4 className = "projectTitle">Urban Riderz</h4>
         <div className="linkContainer">
         <a className="frontend" href="https://github.com/Dev4long/urban-riderz-frontend">Frontend Code</a>
         <a className="backend" href="https://github.com/Dev4long/urban-riderz-backend">Backend Code</a>
         <a className="demo" href="https://www.loom.com/share/961cb7d31ce749c59a6b3f273aaaf437d">Demo Video</a>
         </div>
        </div>

      </div>
    
     
     
      <div className="d2 row">
        <div className="front">
        <img className="EatLiftPrayPic" src={EatLiftPray} alt="eatLiftPray"/>
        </div>
        
        <div className="back">
         <img className="theaterPic" src={TheaterPic} alt="theater"/>
         <h4 className = "projectTitle">Eat Lift Pray</h4>
         <div className="linkContainer">
         <a className="frontend" href="https://github.com/Dev4long/Eat-lift-pray-frontend">Frontend Code</a>
         <a className="backend" href="https://github.com/Dev4long/Eat-lift-pray-backend">Backend Code</a>
         <a className="demo" href="https://www.loom.com/share/c6f9470169244e22923cc74d2ce2bbae">Demo Video</a>
         </div>
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