import React from 'react'
import "./Header.css"

//Animation
import {Animated} from "react-animated-css";

export default function Header() {
  return (
    <div>
    <header className="App-header">
    <h1>Robert Balonek</h1>
    <h2>Software Engineer</h2>
    <div className="animated-div">
      <Animated
      animationInDelay={1300}
      className="animation-delay"
      animationIn="hinge"
      animationInDuration={1500}
      isVisible={true}>
    <h3 className="animated-hinge">Expert</h3>
</Animated>
</div>
  </header>
    </div>
  )
}
