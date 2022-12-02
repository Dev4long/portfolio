import React from 'react'
import './projectD.css'

function ProjectDesciptions() {
  return (
    <div className='projectDescriptionCont'>
     <h1 style={{fontSize:"x-large", fontWeight:"bold"}}>Project Descriptions</h1>
     <h2 style={{textDecoration:"underline"}} className="pTitle">Urban Riderz</h2>
     <div className="description">An app designed for bikers and skaters to meet up, connect and ride around the city together. 
          New users can register and every member has there own profile where they can upload there picture as well as a personal bio
          If you need a new ride the app offers a store where you can purchase bikes, skates, or skateboards.
          The app also includes a local community events page where people can create and post a community ride along where you can view 
          all the information on that ride through the apps google maps feature. 
          And last but not least there is a chat feature which allows you to converse with other members. Frontend was written in React.js, utilized JWT Auth as well as routes. 
          Backend server and database were written with Ruby on rails. Incorporated a web socket IO chat feature, as well as using google maps API.

     </div>
     <h2 style={{textDecoration:"underline"}} className="pTitle">Eat Lift Pray</h2>
     <div className="description">
         An app designed for all. You can register yourself on this app to book personal trainer sessions with celebrities.
         Pick a time and date to schedule any type of workout session with multiple different celebrities like the Rock, 
         Sylvester Stalone, Arnold Schwarzenegger, and many more. If anything pops up you can always reschedule your sessions 
         and modify the trainer you want as well as the type of workout you seek. Achieved a full CRUD frontend using React.js, and backend was written in Ruby.
         
     </div>
     <h2 style={{textDecoration:"underline"}} className="pTitle">WhatsThat</h2>
     <div className="description">
        A recreation of whatsapp. Allows users to connect with others while sending real time messages across the platform. Frontend was written in React.js. Incorporated MongoDB, a non-relational database to store messages. 
        Designed back-end server with node.js and express. Utilized Pusher as a hosted websocket allowing for real time data messages. And included FontAwesomes library for Icons.

     </div>
     <h2 style={{textDecoration:"underline"}} className="pTitle">BlackJack</h2>
     <div className="description">
        One of the first projects that I ever created when I was attending the Flat Iron school coding bootcamp. 
        This is a classic Blackjack game that you play and bet agaisnt the dealer. Whole project was written in React.js.
     </div>
    </div>
  )
}

export default ProjectDesciptions