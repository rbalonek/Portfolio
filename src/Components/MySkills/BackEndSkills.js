import React from 'react'
import "./MySkills.css"

//Animations
import { Fade, Rotate, Flip, Zoom } from "react-awesome-reveal";

export default function BackEndSkills() {
  return (
    <div className="container">
      <Zoom>
    <div className="div-animate">
      <Rotate>
        <img
          className="img-animate"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598116135/Portfolio%20Pics/server_Icon_tzgjcj.svg"
          alt=""
        />
      </Rotate>

      <Flip direction="horizontal">
        <h1>Back End</h1>
      </Flip>

      <Fade cascade>
        <p>NodeJS</p>
        <p>Ruby/Rails</p>
        <p>SQL</p>
        <p>Express</p>
      </Fade>
      </div>
      </Zoom>
      </div>
  )
}
