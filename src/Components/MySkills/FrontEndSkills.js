import React from "react";
import "./MySkills.css";

//Animations
import { Fade, Rotate, Flip, Zoom } from "react-awesome-reveal";

export default function FrontEndSkills() {
  return (
    <div className="container">
      <Zoom>
        <div className="div-animate">
          <Rotate>
            <img
              className="img-animate"
              src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598116135/Portfolio%20Pics/computer_Icon_m4v4v5.svg"
              alt=""
            />
          </Rotate>

          <Flip direction="horizontal">
            <h1>Front End</h1>
          </Flip>

          <Fade cascade>
            <p>HTML</p>
            <div id="css-div">
              <p>CSS</p>
              <span id="css-element">
                BEM, Tailwind, flexbox, grid, responsive, animation, bulma
              </span>
            </div>
            <p>JavaScript</p>
            <p>ReactJS</p>
          </Fade>
        </div>
      </Zoom>
    </div>
  );
}
