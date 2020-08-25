import React from 'react'
import "./TrinityPlace.css"

import { Fade, Rotate, Flip, Zoom, Slide, JackInTheBox, Hinge } from "react-awesome-reveal";

export default function TrinityPlace() {
  return (
    <div>
    <h1 className="trinity-place-title">Trinity Place Shelter</h1>
    <div className="trinity-place-container">
      <img className="trinity-place-img" src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598326354/Portfolio%20Pics/trinityPlaceShelter_srxffl.png" alt=""/>
      
      <Slide>
        <div className="content-trinity-place">
          <div className="text-card-trinity-place">
         
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat debitis nulla magnam nam nemo voluptate delectus ad, dignissimos fuga consequuntur. Maxime, repudiandae optio facilis quod quo numquam dolore incidunt ipsa.</p>
      </div>  
      </div>
      </Slide>
    </div>
    </div>
  )
}
