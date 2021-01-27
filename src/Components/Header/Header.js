import React from "react";
import "./Header.css";
import zenscroll from "zenscroll";

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
        <div>
          <h1>Robert Balonek</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className="animated-div">
          <Hinge triggerOnce delay={1500} duration={1000}>
            <AttentionSeeker effect={"tada"}>
              <h3 className="animated-hinge">Expert</h3>
            </AttentionSeeker>
          </Hinge>
        </div>
      </header>
    </div>
  );
}

// <button
// onClick={clicker}
// >Light Mode</button>
