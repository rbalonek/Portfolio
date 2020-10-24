import React from "react";
import "./App.css";

//Components
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import BackEndSkills from "./Components/MySkills/BackEndSkills";
import FrontEndSkills from "./Components/MySkills/FrontEndSkills";
import RestaurantApp from "./Components/Projects/RestaurantApp/RestaurantApp";
import TrinityPlace from "./Components/Projects/TrinityPlace/TrinityPlace";
import AboutMe from "./Components/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";

//Effects
// import AnchorLink from "react-anchor-link-smooth-scroll";

//Fake Content
// import FakeContent from "./Components/FakeContent/FakeContent";
import EmptySpace from "./Components/FakeContent/EmptySpace";
// import ProjectShell from "./Components/Projects/ProjectShell/ProjectShell.jsx";
import OperaSingerSearch from "./Components/Projects/OperaSingerSearch/OperaSingerSearch";
import RbOpera from "./Components/Projects/RbOpera/RbOpera.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <EmptySpace />
      <section id="skills">
        <div className="skills-div">
          <BackEndSkills />
          <h1 className="my-title">My Skills</h1>
          <FrontEndSkills />
        </div>
      </section>

      <EmptySpace />

      <section id="projects">
        <h1 className="my-title">My Projects</h1>
        <RestaurantApp />
        <EmptySpace />
        <OperaSingerSearch />
        <div className="extra-space">
          <EmptySpace />
        </div>
        <TrinityPlace />
        <EmptySpace />
        <RbOpera />
      </section>
      <EmptySpace />
      <EmptySpace />

      <section id="about">
        <AboutMe />
      </section>
      <EmptySpace />
      <EmptySpace />
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
