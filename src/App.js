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
      <FrontEndSkills />
      </div>
      <FakeContent />
      <FakeContent />
      <FakeContent />
    </div>
  );
}

export default App;
