import React from "react";
import "./App.css";

//Components
import Header from "./Components/Header/Header"
import NavBar from "./Components/NavBar/NavBar";
import BackEndSkills from "./Components/MySkills/BackEndSkills"
import FrontEndSkills from "./Components/MySkills/FrontEndSkills"
import RestaurantApp from "./Components/Projects/RestaurantApp/RestaurantApp"
import CocktailHelper from './Components/Projects/CocktailHelper/CocktailHelper'
import FunCarousel from "./Components/Projects/FunCarousel/FunCarousel"
import AboutMe from "./Components/AboutMe/AboutMe"
import Footer from "./Components/Footer/Footer"

//Effects
import AnchorLink from 'react-anchor-link-smooth-scroll'

//Fake Content
// import FakeContent from "./Components/FakeContent/FakeContent";
import EmptySpace from "./Components/FakeContent/EmptySpace"




function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <EmptySpace />
      <section id='skills'>
      <div className="skills-div">
        <BackEndSkills />
        <h1 className="my-title">My Skills</h1>
      <FrontEndSkills />
        </div>
      </section>
      
      <EmptySpace />

      <section id='projects'>
        <h1 className="my-title">My Projects</h1>
      <RestaurantApp />
      <EmptySpace />
        <CocktailHelper />
        <EmptySpace />
      </section>
      
      <section id='about'>
        <AboutMe />
      </section>
      
      <EmptySpace />
      <section id='contact'>
        <Footer />
        </section>
    </div>
  );
}

export default App;
