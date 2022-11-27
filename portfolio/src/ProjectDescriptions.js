import React from 'react'
import './projectD.css'

function ProjectDesciptions() {
  return (
    <div className='projectDescriptionCont'>
     <h1 style={{textDecoration:"underline"}}>Project Descriptions</h1>
     <h2 className="pTitle">Urban Riderz</h2>
     <div>An app designed for bikers and skaters to meet up, connect and ride around the city together. 
          New users can register and every member has there own profile where they can upload there picture as well as a personal bio
          If you need a new ride the app offers a store where you can purchase bikes, skates, or skateboards.
          The app also includes a local community events page where people can create and post a community ride along where you can view 
          all the information on that ride through the apps google maps feature. 
          And last but not least there is a chat feature which allows you to converse with other members.

     </div>
     <h2 className="pTitle">Eat Lift Pray</h2>
     <div>
         An app designed for all. You can register yourself on this app to book personal trainer sessions with celebrities.
         Pick a time and date to schedule any type of workout session with multiple different celebrities like the Rock, 
         Sylvester Stalone, Arnold Schwarzenegger, and many more. If anything pops up you can always reschedule your sessions 
         and modify the trainer you want as well as the type of workout you seek.
         
     </div>
     <h2 className="pTitle">WhatsThat</h2>
     <div>
        A recreation of whatsapp. Allows users to connect with others while sending real time messages across the platform. 
     </div>
     <h2 className="pTitle">BlackJack</h2>
     <div>
        One of the first projects that I ever created when I was attending the Flat Iron school coding bootcamp. 
        This is a classic Blackjack game that you play and bet agaisnt the dealer.
     </div>
    </div>
  )
}

export default ProjectDesciptions