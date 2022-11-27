import React from 'react';
import './contact.css'
import {AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'


function Contact() {
  return (
    <div className="ContactContainer">
      <div className="header">Contact info</div>
   
      <div className="linkInfo">
        <AiFillGithub size={84}/>
        <div>Github Profile</div>
      </div>
    
      <div className="linkInfo">
        <AiFillLinkedin size={84}/> 
        <div>LinkiedIn Profile</div>
      </div>
    
      <div className="linkInfo">
        <AiOutlinePhone size={84}/>
        <div>Cellphone number</div>
      </div>
    
      <div className="linkInfo">
        <AiOutlineMail size={84}/>
        <div>Email</div>
      </div>
    
    </div>

  )
}

export default Contact