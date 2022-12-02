import React from 'react';
import './contact.css'
import {AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import {HiOutlineDocumentText} from 'react-icons/hi'

function Contact() {
  return (
    <div className="ContactContainer">
      <div className="header">Contact info</div>
   
      <a href="https://github.com/Dev4long">
        <div className="linkInfo">
        <AiFillGithub size={84}/>
        <div className="linkHover">Github Profile</div>
        </div>
      </a>
      <br></br>
      <br></br>
      <a href="https://www.linkedin.com/in/denis-kadrich-7b3bb7215/">
      <div className="linkInfo">
        <AiFillLinkedin size={84}/> 
        <div className="linkHover">LinkiedIn Profile</div>
      </div>
      </a>
    
      
      <div className="cell">
        <AiOutlinePhone size={84}/>
        <div style={{textDecoration: "underline"}}>Cellphone number:</div>
        <div className="linkHover">347-684-0897</div>
      </div>
      
    
      <a style={{textDecoration: "none"}} href="mailto:deniskadrich69@gmail.com?subject=portfolio">
      <div className="linkInfo">
        <AiOutlineMail size={84}/>
        <div style={{textDecoration: "underline"}}>Email:</div>
        <div className="linkHover">Deniskadrich69<br></br>@gmail.com</div>
      </div>
      </a>

      <br></br>
      <br></br>

      <a href="https://docs.google.com/document/d/1V-uZyqN4Ezf79VfaXRuRdgBJwpSQ3c3J/edit?usp=sharing&rtpof=true&sd=true">
        <div className="linkInfo">
        <HiOutlineDocumentText size={84}/>
        <div className="linkHover">Resume</div>
        </div>
      </a>
    
    </div>

  )
}

export default Contact