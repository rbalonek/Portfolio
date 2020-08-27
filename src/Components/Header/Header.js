import React, { useState } from 'react'
import "./Header.css"

//Animation
import { Fade, Rotate, Flip, Zoom, Slide, JackInTheBox, Hinge } from "react-awesome-reveal";
import {Animated} from "react-animated-css";

export default function Header() {
  const [clicked, updateClicked] = useState(false);

  const clicker = () => {
    if (!clicked) {
      updateClicked(true)
    } else {
      updateClicked(false)
  }
}

  return (
    <div className="container">
      <header className="App-header">
    <div className={clicked ? 'light-mode' : 'dark-mode'}>
    <h1>Robert Balonek</h1>
          <h2>Software Engineer</h2>
    </div>
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
      <button
      onClick={clicker}
      >Light Mode</button>
    </div>
  )
}
