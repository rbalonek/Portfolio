import React from "react";
import "./App.css";

//Components
import Header from "./Components/Header/Header";
// import NavBar from "./Components/NavBar/NavBar";
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
import StickyNavBar from "./Components/NavBar/StickyNavBar/StickyNavBar";
import Cherry from "./Components/Projects/Cherry/Cherry";
import ProjectHeader from "./Components/Header/ProjectHeader/ProjectHeader";
import Project from "./Components/Projects/Project/Project";

function App() {
  return (
    <div className="App">
      <div class="container">
        <section>
          <Header />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <StickyNavBar />
        <section id="projects" class="child">
          <div>
            <Project
              id={"happy-space"}
              navUp={"skills"}
              // navDown={"trinity"}
              github={"https://github.com/rbalonek/Happy-Space-App"}
              title={"Happy Space"}
              website={"https://apps.apple.com/us/app/happy-space/id1544516931"}
              carousel={[
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612209966/Portfolio%20Pics/Happy-space/InspirationScreen_m5vfie.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612209967/Portfolio%20Pics/Happy-space/CatScreen_kllufq.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612209968/Portfolio%20Pics/Happy-space/DadScreen_qpvmtk.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612209929/Portfolio%20Pics/Happy-space/HistoryScreen_pvrvvx.png",
              ]}
              text={[
                " Happy-Space is my first React Native App store App.",
                "It was built in under a week using 5 Async Api calls, 4 screens, and a homepage with some fun animations",
                "My main goal was to get ANYTHING on the app store, but I had a really great time making it and playing with React Native",
              ]}
              stack={[
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1611784258/Portfolio%20Pics/Logos/ReactNativeKnockout_v54jwe.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/html5-plain-wordmark.67d97895_kehxm9.svg",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/js-logo_xrxnfl.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512573/Portfolio%20Pics/css-logo_scrgq5.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/postman-logo_rr22mr.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/node-js-logo_qxghko.png",
              ]}
            />
          </div>
        </section>

        <section class="child" id="about">
          <AboutMe />
        </section>

        <section class="child" id="contact">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;

// <div className="App">
//       <div class="container">
//         <section class="child">
//           <Header />
//         </section>
//         <section id="skills" class="child">
//           <Skills />
//         </section>
//         <StickyNavBar />
//         <section id="projects" class="child">
//           <div>
//             <HappySpace />
//           </div>
//         </section>
//         <section class="child">
//           <Cherry />
//         </section>
//         <section class="child">
//           <TrinityPlace />
//         </section>
//         <section class="child">
//           <RestaurantApp />
//         </section>
//         <section class="child" id="about">
//           <AboutMe />
//         </section>

//         <section class="child" id="contact">
//           <Footer />
//         </section>
//       </div>
//     </div>
