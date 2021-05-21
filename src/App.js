import React from "react";
import "./App.css";
import { Fade, Roll, AttentionSeeker } from "react-awesome-reveal";
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

import StickyNavBar from "./Components/NavBar/StickyNavBar/StickyNavBar";
import Cherry from "./Components/Projects/Cherry/Cherry";
import ProjectHeader from "./Components/Header/ProjectHeader/ProjectHeader";
import Project from "./Components/Projects/Project/Project";

import mernOne from "./assets/mern1.png";
import mernTwo from "./assets/mern2.png";
import mernThree from "./assets/mern3.png";

function App() {
  return (
    <div className="App">
      <div class="container">
        <section>
          <Header />
        </section>
        <StickyNavBar />
        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <div style={{ position: "relative" }}>
            <Project
              id={"happy-space"}
              navUp={"skills"}
              navDown={"cherry"}
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
            <div className="app-store-holder">
              <AttentionSeeker delay={2000} effect="jello">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://apps.apple.com/us/app/happy-space/id1544516931"
                >
                  <img
                    className="app-store-img"
                    src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612209961/Portfolio%20Pics/Happy-space/downloadAppStore_hz55mh.png"
                    alt="app-store"
                  />
                </a>
              </AttentionSeeker>
            </div>

            <div className="app-icon-holder">
              <Roll delay="100">
                <AttentionSeeker effect="tada" delay="200">
                  <img
                    className="app-icon-img"
                    src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612209953/Portfolio%20Pics/Happy-space/icon_axfldx.png"
                    alt="app-store"
                  />
                </AttentionSeeker>
              </Roll>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <Project
              id={"cherry"}
              navUp={"happy-space"}
              navDown={"trinity"}
              github={"https://github.com/rbalonek/cherry"}
              title={"Cherry Project"}
              website={"https://cherry-site.netlify.app/"}
              carousel={[
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612117702/Portfolio%20Pics/Cherry%20Proj/Screen_Shot_2021-01-31_at_10.25.04_AM_au5hks.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612117727/Portfolio%20Pics/Cherry%20Proj/Screen_Shot_2021-01-31_at_10.25.49_AM_auno6n.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612117699/Portfolio%20Pics/Cherry%20Proj/Screen_Shot_2021-01-31_at_10.26.13_AM_cm8qve.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612117729/Portfolio%20Pics/Cherry%20Proj/Screen_Shot_2021-01-31_at_10.26.46_AM_pf9ggi.png",
              ]}
              text={[
                " This site was super fun to build. I was on my own so I started with a basic wireframe provided to me by the clients.",
                "They took some samples from other websites they liked and wanted me to replicate some key features including arrows pointing in the direction the user wants to move, modals popping in and out with project info, site organization for projects, and a masonry grid for their work that elegantly faded in.",
                "They also wanted to be able to upload videos to a database and have the opened hamburger menu, and background of their logo match the randomized video for each user visit.",
              ]}
              stack={[
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/html5-plain-wordmark.67d97895_kehxm9.svg",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/js-logo_xrxnfl.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512573/Portfolio%20Pics/css-logo_scrgq5.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/postman-logo_rr22mr.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/node-js-logo_qxghko.png",
              ]}
            />
          </div>
          <div style={{ position: "relative" }}>
            <Project
              id={"trinity"}
              navUp={"cherry"}
              navDown={"restaurant-app"}
              github={"https://github.com/rbalonek/trinity-place-shelter"}
              title={"Trinity Place Shelter"}
              website={"https://trinity-place-shelter.netlify.app/"}
              carousel={[
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598326354/Portfolio%20Pics/trinityPlaceShelter_srxffl.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/r_22/v1599500206/Portfolio%20Pics/Trinity-cell-2_gx7ytc.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/r_22/v1599500206/Portfolio%20Pics/Trinity-cell-1_e2d9xi.png",
              ]}
              text={[
                "Trinity Place Shelter was my first project working with a UX team and multiple developers.",
                "Our team was given a design and 4 days to make a responsive website that also had full CRUD capabilities. I was the team leader so I controlled the github project flow using the github built in project board.",
                "We added an admin screen to show full CRUD capabilities with the volunteer form",
                "Our team hopes to continue working with the UX team to finish the rest of the screens for this project and donate the site to Trinity Place Shelter.",
              ]}
              stack={[
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/mongodb-plain-wordmark.07c92838_rgtxc3.svg",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512572/Portfolio%20Pics/express-original-wordmark.f1a0b0e9_pom0ic.svg",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512568/Portfolio%20Pics/react-original-wordmark.fadd9c95_fhawii.svg",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/node-js-logo_qxghko.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512573/Portfolio%20Pics/git-original-wordmark.66e06c06_s7bavw.svg",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604514327/Portfolio%20Pics/Netlify-Logo_amivge.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/postman-logo_rr22mr.png",
              ]}
            />
          </div>

          <div style={{ position: "relative" }}>
            <Project
              id={"restaurant-app"}
              navUp={"trinity"}
              navDown={"opera-search"}
              github={"https://github.com/rbalonek/Restaurant-App"}
              title={"Restaurant App"}
              website={"https://balonek-restaurant-app.netlify.app/LiveMenu"}
              carousel={[
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/r_22/v1598127072/Portfolio%20Pics/CellPhonePreview1_stuvob.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/r_22/v1598127073/Portfolio%20Pics/CellPhonePreview2_ot50f8.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598126009/Portfolio%20Pics/RestaurantAppPreview_erljtv.png",
              ]}
              text={[
                "My Restaurant-App was created to provide restaurants assistance in complying with a socially distanced guest experience.",
                "The app is designed so a guest will be able to scan the QR code on the table and view / order from the menu without needing to call over the server.",
                "The admin of the restaurant-app is able to log into their password-protected back-end to Create, Edit, and delete menu items. The edits will reflect the Main Menu screen so the guests will be able to add menu items to their bill.",
              ]}
              stack={[
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512568/Portfolio%20Pics/react-original-wordmark.fadd9c95_fhawii.svg",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604514327/Portfolio%20Pics/Netlify-Logo_amivge.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/html5-plain-wordmark.67d97895_kehxm9.svg",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/js-logo_xrxnfl.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512573/Portfolio%20Pics/css-logo_scrgq5.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/postman-logo_rr22mr.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/node-js-logo_qxghko.png",
              ]}
            />
          </div>

          <div style={{ position: "relative" }}>
            <Project
              id={"opera-search"}
              navUp={"restaurant-app"}
              navDown={"mern"}
              github={"https://github.com/rbalonek/opera-singer-search"}
              title={"Opera Singer Search"}
              website={"https://opera-singer-search.netlify.app/operas"}
              carousel={[
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604968788/Portfolio%20Pics/Screen_Shot_2020-11-09_at_4.29.23_PM_za1mww.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/r_45/v1600955664/Portfolio%20Pics/singer-search-cell-Operas_dzgw31.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/r_45/v1600955664/Portfolio%20Pics/singer-search-cell-Singers-page_etlfsz.png",
              ]}
              text={[
                "Opera-Singer-Search is a full stack application using a Rails back end and React front end with fully functioning user authentication.",
                "Singers can register / login and add opera roles to their resume so when you click on an opera, the singers name will appear under the 'roles' tab.",
                "Singers can also create, update, and destroy blog-style recent performances on their singer page and it will appear on their profile page.",
              ]}
              stack={[
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512568/Portfolio%20Pics/react-original-wordmark.fadd9c95_fhawii.svg",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604514327/Portfolio%20Pics/Netlify-Logo_amivge.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512573/Portfolio%20Pics/heroku-plain-wordmark.6fd6c3b7_pgrfhc.svg",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512568/Portfolio%20Pics/rails-logo_f3zkrq.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512569/Portfolio%20Pics/postgresql-plain-wordmark.06aadd67_jqewef.svg",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512568/Portfolio%20Pics/ruby-plain-wordmark.b065b718_pxbhrj.svg",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/node-js-logo_qxghko.png",
              ]}
            />
          </div>

          <div style={{ position: "relative" }}>
            <Project
              id={"mern"}
              navUp={"opera-search"}
              navDown={"about"}
              github={"https://github.com/rbalonek/mern-bootstrap-project"}
              title={"MERN Bootstrap"}
              website={
                "https://mern-bootstrap-portfolio.netlify.app/https://opera-singer-search.netlify.app/operas"
              }
              carousel={[mernOne, mernTwo, mernThree]}
              text={[
                "I was practicing my MERN stack for a job interview and put this together",
                "It's a super simple product displaying app with Bootstrap design.",
                "I included a search and a sort-by feature as well as making a mock login for CRUD on the products",
              ]}
              stack={[
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/mongodb-plain-wordmark.07c92838_rgtxc3.svg",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512572/Portfolio%20Pics/express-original-wordmark.f1a0b0e9_pom0ic.svg",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512568/Portfolio%20Pics/react-original-wordmark.fadd9c95_fhawii.svg",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/node-js-logo_qxghko.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512573/Portfolio%20Pics/git-original-wordmark.66e06c06_s7bavw.svg",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604514327/Portfolio%20Pics/Netlify-Logo_amivge.png",
                "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/postman-logo_rr22mr.png",
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

// <div style={{ position: "relative" }}>
// <Project
//   id={""}
//   navUp={""}
//   // navDown={""}
//   github={""}
//   title={""}
//   website={""}
//   carousel={[
//     "",
//     "",
//     "",
//   ]}
//   text={[
//     "",
//     "",
//     "",
//   ]}
//   stack={[
//     "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512568/Portfolio%20Pics/react-original-wordmark.fadd9c95_fhawii.svg",
//     "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604514327/Portfolio%20Pics/Netlify-Logo_amivge.png",
//     "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/html5-plain-wordmark.67d97895_kehxm9.svg",
//     "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/js-logo_xrxnfl.png",
//     "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512573/Portfolio%20Pics/css-logo_scrgq5.png",
//     "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/postman-logo_rr22mr.png",
//     "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/node-js-logo_qxghko.png",
//   ]}
// />
// </div>
