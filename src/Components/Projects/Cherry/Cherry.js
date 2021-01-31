import React, { useState } from "react";
import ProjectHeader from "../../Header/ProjectHeader/ProjectHeader";
import "./Cherry.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Cherry() {
  const [modalOne, toggleModalOne] = useState("hidden");
  const [modalTwo, toggleModalTwo] = useState("hidden");
  const [modalThree, toggleModalThree] = useState("hidden");
  const [modalFour, toggleModalFour] = useState("hidden");
  return (
    <div id="cherry" className="cherry-container">
      <ProjectHeader
        navUp={"happy-space"}
        navDown={"about"}
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
    </div>
  );
}
