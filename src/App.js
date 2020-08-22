import React from "react";
import "./App.css";

//Components
import NavBar from "./Components/NavBar/NavBar";
import FakeContent from "./Components/FakeContent/FakeContent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="glow">Robert Balonek</h1>
        <h2>Software Engineer</h2>
      </header>

      <NavBar />
      <FakeContent />
      <FakeContent />
      <FakeContent />
      <FakeContent />
    </div>
  );
}

export default App;
