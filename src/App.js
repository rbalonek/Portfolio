import React from "react";
import "./App.css";

//Components
import NavBar from "./Components/NavBar/NavBar";
import BackEndSkills from "./Components/MySkills/BackEndSkills"
import FrontEndSkills from "./Components/MySkills/FrontEndSkills"

//Fake Content
import FakeContent from "./Components/FakeContent/FakeContent";
import EmptySpace from "./Components/FakeContent/EmptySpace"

//Animation
import {Animated} from "react-animated-css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Robert Balonek</h1>
        <h2>Software Engineer</h2>
        <div className="animated-div">
          <Animated
          animationInDelay={1500}
          className="animation-delay"
          animationIn="hinge"
          animationInDuration={2800}
          isVisible={true}>
        <h3 className="animated-hinge">Expert</h3>
    </Animated>
    </div>
      </header>

      <NavBar />
      <EmptySpace />
      <div className="skills-div">
      <BackEndSkills />
      <FrontEndSkills />
      </div>
      <FakeContent />
      <FakeContent />
      <FakeContent />
    </div>
  );
}

export default App;
