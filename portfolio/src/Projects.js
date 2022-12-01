import React from 'react'
import './projects.css'
import UrbanRider from "./ProjectPics/UrbanRider.png"
// import TheaterPic from "./ProjectPics/theaterPic.webp"
import EatLiftPray from "./ProjectPics/eatLiftPray.png"
import WhatsThat from "./ProjectPics/whatsThat.png"
import BlackJack from "./ProjectPics/BlackJack.png"
import ProjectDesciptions from "./ProjectDescriptions";


function Projects() {
  return (
    <div className="mainContainer">
    <div className="projectContainer">
  
     {/* <div className="PTitle">Projects</div> */}
     {/* <br></br> */}
      <div className="d1 row border first">
        
        <div className="front">
        <h4 className = "projectTitle">Urban Riderz</h4>
        <img className="urbanRiderPic" src={UrbanRider} alt="urbanRider"/>
        <div className="linkContainer">
          
         <a style={{textDecoration:"none"}} className="frontend" href="https://github.com/Dev4long/urban-riderz-frontend">Frontend Code</a>
           
          
         <a style={{textDecoration:"none"}} className="backend" href="https://github.com/Dev4long/urban-riderz-backend">Backend Code</a>
         
          
         <a style={{textDecoration:"none"}} className="demo" href="https://www.loom.com/share/961cb7d31ce749c59a6b3f273aaaf437d">Demo Video</a>
         
         </div>
        </div>
        
        {/* <div className="back">
         <img className="theaterPic" src={TheaterPic} alt="theater"/>
         <h4 className = "projectTitle">Urban Riderz</h4>
         <div className="linkContainer">
         <a className="frontend" href="https://github.com/Dev4long/urban-riderz-frontend">Frontend Code</a>
         <a className="backend" href="https://github.com/Dev4long/urban-riderz-backend">Backend Code</a>
         <a className="demo" href="https://www.loom.com/share/961cb7d31ce749c59a6b3f273aaaf437d">Demo Video</a>
         </div>
        </div> */}

      </div>
    
     
     
      <div className="d2 row">
        <div className="front">
        <h4 className = "projectTitle">Eat Lift Pray</h4>
        <img className="EatLiftPrayPic" src={EatLiftPray} alt="eatLiftPray"/>
        <div className="linkContainer">
         <a style={{textDecoration:"none"}} className="frontend" href="https://github.com/Dev4long/Eat-lift-pray-frontend">Frontend Code</a>
         <a style={{textDecoration:"none"}} className="backend" href="https://github.com/Dev4long/Eat-lift-pray-backend">Backend Code</a>
         <a style={{textDecoration:"none"}} className="demo" href="https://www.loom.com/share/c6f9470169244e22923cc74d2ce2bbae">Demo Video</a>
         </div>
        </div>
        
        {/* <div className="back">
         <img className="theaterPic" src={TheaterPic} alt="theater"/>
        
         <div className="linkContainer">
         <a className="frontend" href="https://github.com/Dev4long/Eat-lift-pray-frontend">Frontend Code</a>
         <a className="backend" href="https://github.com/Dev4long/Eat-lift-pray-backend">Backend Code</a>
         <a className="demo" href="https://www.loom.com/share/c6f9470169244e22923cc74d2ce2bbae">Demo Video</a>
         </div>
        </div> */}
      </div>
   
      <div className="d3 row">

      <div className="front">
      <h4 className = "projectTitle">WhatsThat</h4>
        <img className="WhatsThatPic" src={WhatsThat} alt="whatsthat"/>
        <div className="linkContainer">
         <a style={{textDecoration:"none"}} className="frontend" href="https://github.com/Dev4long/whats-app">Frontend Code</a>
         <a style={{textDecoration:"none"}} className="backend" href="https://github.com/Dev4long/whats-app-backend">Backend Code</a>
         <a style={{textDecoration:"none"}} className="demo" href="https://www.loom.com/share/022039009cbd4b45b87aa503dae6f210">Demo Video</a>
         </div>
        </div>
        
        {/* <div className="back">
         <img className="theaterPic" src={TheaterPic} alt="theater"/>
         
         <div className="linkContainer">
         <a className="frontend" href="https://github.com/Dev4long/whats-app">Frontend Code</a>
         <a className="backend" href="https://github.com/Dev4long/whats-app-backend">Backend Code</a>
         <a className="demo" href="https://www.loom.com/share/022039009cbd4b45b87aa503dae6f210">Demo Video</a>
         </div>
        </div> */}

      </div>
  
      <div className="d4 row">

      <div className="front">
        <h4 className = "projectTitle">BlackJack</h4>
        <img className="BlackJackPic" src={BlackJack} alt="blackjack"/>
        <div className="linkContainer">
         <a style={{textDecoration:"none"}} className="frontend" href="https://github.com/Dev4long/BlackJack-project">Frontend Code</a>
         </div>
        </div>
        
        {/* <div className="back">
         <img className="theaterPic" src={TheaterPic} alt="theater"/>
         <h4 className = "projectTitle">BlackJack</h4>
         <div className="linkContainer">
         <a className="frontend" href="https://github.com/Dev4long/BlackJack-project">Frontend Code</a>
         </div>
        </div> */}

      </div>
      
    </div>
    <ProjectDesciptions />
    </div>
  )
}

export default Projects