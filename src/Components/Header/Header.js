import React from 'react'
import "./Header.css"

//Animation
import { Fade, Rotate, Flip, Zoom, Slide, JackInTheBox, Hinge } from "react-awesome-reveal";
import {Animated} from "react-animated-css";

export default function Header() {
  return (
    <div className="container">
    <header className="App-header">
    <h1>Robert Balonek</h1>
    <h2>Software Engineer</h2>
        <div className="animated-div">
          <Hinge
            triggerOnce
            delay={1000}
            duration={1500}
          >
            <h3 className="animated-hinge">Expert</h3>
            </Hinge>
</div>
  </header>
    </div>
  )
}
