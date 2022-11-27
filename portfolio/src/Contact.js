import React from 'react';
import './contact.css'
import {AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'


function Contact() {
  return (
    <div className="ContactContainer">
      <div className="header">Contact info</div>
   
      <a href="https://github.com/Dev4long">
        <div className="linkInfo">
        <AiFillGithub size={84}/>
        <div>Github Profile</div>
        </div>
      </a>

      <a href="https://www.linkedin.com/in/denis-kadrich-7b3bb7215/">
      <div className="linkInfo">
        <AiFillLinkedin size={84}/> 
        <div>LinkiedIn Profile</div>
      </div>
      </a>
    
      
      <div className="cell">
        <AiOutlinePhone size={84}/>
        <div style={{textDecoration: "underline"}}>Cellphone number:</div>
        <div>347-684-0897</div>
      </div>
      
    
      <a href="mailto:deniskadrich69@gmail.com?subject=portfolio">
      <div className="linkInfo">
        <AiOutlineMail size={84}/>
        <div>Email:</div>
        <div>Deniskadrich69@gmail.com</div>
      </div>
      </a>
    
    </div>

  )
}

export default Contact