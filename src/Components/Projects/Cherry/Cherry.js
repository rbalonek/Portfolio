import React, { useState } from "react";
import ProjectHeader from "../../Header/ProjectHeader/ProjectHeader";
import "./Cherry.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Stack from "../Stacks/Stack";

export default function Cherry() {
  // const [modalOne, toggleModalOne] = useState("hidden");
  // const [modalTwo, toggleModalTwo] = useState("hidden");
  // const [modalThree, toggleModalThree] = useState("hidden");
  // const [modalFour, toggleModalFour] = useState("hidden");
  return (
    <div id="cherry" className="cherry-container">
      <ProjectHeader
        navUp={"happy-space"}
        navDown={"trinity"}
        github={"https://github.com/rbalonek/cherry"}
        title={"Cherry Project"}
        website={"https://cherry-site.netlify.app/"}
      />
      <div className="images-cherry">
        <Carousel
          showStatus={false}
          infiniteLoop
          showIndicators={true}
          showThumbs={false}
          autoPlay={false}
          useKeyboardArrows={true}
          swipeable
        >
          <div className="cherry-img-div">
            <img
              // onClick={() => toggleModalOne("show")}
              className="carousel-img"
              src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612117702/Portfolio%20Pics/Cherry%20Proj/Screen_Shot_2021-01-31_at_10.25.04_AM_au5hks.png"
              alt="cherry-1"
            />
          </div>
          <div>
            <img
              // onClick={() => toggleModalTwo("show")}
              className="carousel-img"
              src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612117727/Portfolio%20Pics/Cherry%20Proj/Screen_Shot_2021-01-31_at_10.25.49_AM_auno6n.png"
              alt="cherry-2"
            />
          </div>
          <div>
            <img
              // onClick={() => toggleModalThree("show")}
              className="carousel-img"
              src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612117699/Portfolio%20Pics/Cherry%20Proj/Screen_Shot_2021-01-31_at_10.26.13_AM_cm8qve.png"
              alt="cherry-3"
            />
          </div>
          <div>
            <img
              // onClick={() => toggleModalFour("show")}
              className="carousel-img"
              src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1612117729/Portfolio%20Pics/Cherry%20Proj/Screen_Shot_2021-01-31_at_10.26.46_AM_pf9ggi.png"
              alt="cherry-4"
            />
          </div>
        </Carousel>
      </div>
      <div className="about-holder">
        <div className="about-cherry">
          <p>
            This site was super fun to build. I was on my own so I started with
            a basic wireframe provided to me by the clients.{" "}
          </p>
          <p>
            They took some samples from other websites they liked and wanted me
            to replicate some key features including arrows pointing in the
            direction the user wants to move, modals popping in and out with
            project info, site organization for projects, and a masonry grid for
            their work that elegantly faded in.
          </p>
          <p>
            They also wanted to be able to upload videos to a database and have
            the opened hamburger menu, and background of their logo match the
            randomized video for each user visit.
          </p>
        </div>
      </div>
      <div className="stack-holder">
        <Stack
          images={[
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/html5-plain-wordmark.67d97895_kehxm9.svg",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/js-logo_xrxnfl.png",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512573/Portfolio%20Pics/css-logo_scrgq5.png",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/postman-logo_rr22mr.png",
            "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/node-js-logo_qxghko.png",
          ]}
        />
      </div>
    </div>
  );
}
