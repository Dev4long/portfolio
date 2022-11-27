import React from 'react'
import './about.css'
import DenisPic from "./ProjectPics/DenisGithubPic.jpeg"

function About() {
  return (
    <div className="AboutContainer">
    
    <div className="picContainer">
      <img className="DenisPic" src={DenisPic} alt="DenisPic"/>
    </div>

    <div className="Summary">
     I was born and raised in Astoria, New york and have been living here my 
     whole life. I grew up playing almost every and any sport you can think but excelled in baseball, 
     tennis, and swimming. Definetly can say I am competitive by nature but easily transition from working as a team 
     to working independantly. I had multiple different jobs growing up ranging from being a 
     ball kid at the U.S. open, lifegaurding, also working in multiple restaurants and bars.
     As covid-19 struck I was working at a local sports bar named Sweet Spot for about three years. Buisness slowed down and I got laid off. 
     This was when I decided I had to learn a new skill and discovered the art of coding. I enrolled into the Flat-iron school which was a vigorous 
     and challenging codeing bootcamp. We started off learning about HTML and CSS. We progressed into frontend development working with javascript and React as a framework. 
     And lastly we advanced into backend development where we worked with Ruby and Ruby on Rails as a framework. The entire expierence was very callenging for the days were over 9 hours long, 
     but I stuck with it, didn't give up and graduated as a full-stack software developer. I am currently looking for work as a software engineer and am continously learning. 
     I've been looking into cloud development, as well new techs like Kubernetes and Docker to containerize applications. I have been practicing algorithms and data structures as well. Also have been recently dabbling with some python. 
     Can't wait to see what the future holds for me in a life of Tech.

    </div>

    </div>
  )
}

export default About