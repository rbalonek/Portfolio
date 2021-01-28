import React from "react";
import "./Header.css";
import zenscroll from "zenscroll";
import { Fade, JackInTheBox } from "react-awesome-reveal";
//Animation
import { Hinge, AttentionSeeker } from "react-awesome-reveal";
// import {Animated} from "react-animated-css";

export default function Header() {
  // const [clicked, updateClicked] = useState(false);

  // const clicker = () => {
  //   if (!clicked) {
  //     updateClicked(true);
  //   } else {
  //     updateClicked(false);
  //   }
  // };

  const clickedHeader = () => {
    var skills = document.getElementById("skills");
    zenscroll.to(skills);
  };

  return (
    <div className="container" onClick={clickedHeader}>
      <header className="App-header">
        <Fade
          triggerOnce={true}
          delay={1000}
          duration={2000}
          className="header-text-container"
        >
          <div className="header-text-container">
            <h1>Robert Balonek</h1>
            <h2>Software Engineer</h2>
          </div>
        </Fade>

        <div className="animated-div">
          <JackInTheBox delay={2000} duration={1500}>
            <Hinge triggerOnce delay={3000} duration={1000}>
              <h3 className="animated-hinge">Expert</h3>
            </Hinge>
          </JackInTheBox>
        </div>

        <Fade delay={3500} duration={2000} triggerOnce={true}>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Fade>
      </header>
    </div>
  );
}

// <button
// onClick={clicker}
// >Light Mode</button>
