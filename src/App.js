import React from "react";
import "./App.css";

//Components
import Header from "./Components/Header/Header"
import NavBar from "./Components/NavBar/NavBar";
import BackEndSkills from "./Components/MySkills/BackEndSkills"
import FrontEndSkills from "./Components/MySkills/FrontEndSkills"

//Fake Content
import FakeContent from "./Components/FakeContent/FakeContent";
import EmptySpace from "./Components/FakeContent/EmptySpace"




function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <EmptySpace />
      <div className="skills-div">
        <BackEndSkills />
        <h2 className="my-title">My Skills</h2>
      <FrontEndSkills />
      </div>
      <EmptySpace />
      <h2 className="my-title">My Projects</h2>
      <FakeContent />
    </div>
  );
}

export default App;
