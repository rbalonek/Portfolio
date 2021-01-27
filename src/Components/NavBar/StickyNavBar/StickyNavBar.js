import React from "react";
import "./StickyNavBar.css";
import { Fade } from "react-awesome-reveal";

export default function StickyNavBar() {
  return (
    <div className="sticky-nav--container">
      <Fade>
        <p>Skills</p>
        <p>Projects</p>
        <p>About</p>
        <p>Contact</p>
      </Fade>
    </div>
  );
}
