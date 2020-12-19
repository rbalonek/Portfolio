import React from "react";
import "./App.css";

//Components
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Skills from "./Components/MySkills/Skills";
import RestaurantApp from "./Components/Projects/RestaurantApp/RestaurantApp";
import TrinityPlace from "./Components/Projects/TrinityPlace/TrinityPlace";
import AboutMe from "./Components/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";
import EmptySpace from "./Components/FakeContent/EmptySpace";
import OperaSingerSearch from "./Components/Projects/OperaSingerSearch/OperaSingerSearch";
import RbOpera from "./Components/Projects/RbOpera/RbOpera.jsx";
import HappySpace from "./Components/Projects/HappySpace/HappySpace";

import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <EmptySpace />
      <section id="skills">
        <div className="skills-div">
          <Skills />
        </div>
      </section>

      <section id="projects">
        <Fade>
          <h1 className="my-title ">My Projects</h1>
        </Fade>

        <HappySpace />
        <EmptySpace />
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
