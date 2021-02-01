import React from "react";
import "./Project.css";
import { Carousel } from "react-responsive-carousel";
import ProjectHeader from "../../Header/ProjectHeader/ProjectHeader";
import Stack from "../Stacks/Stack";

export default function Project(props) {
  return (
    <div id={props.id} className="project-container">
      <ProjectHeader
        navUp={props.navUp}
        navDown={props.navDown}
        github={props.github}
        title={props.title}
        website={props.website}
      />
      <div className="split-screen">
        <div className="split-left">
          <Carousel
            showStatus={false}
            infiniteLoop
            showIndicators={true}
            showThumbs={false}
            autoPlay={false}
            useKeyboardArrows={true}
            swipeable
          >
            {props.carousel.map((img) => (
              <div className="carousel-img-div">
                <img
                  // onClick={() => toggleModalOne("show")}
                  className="carousel-image"
                  src={img}
                  alt={img}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="split-right">
          <div className="text-container">
            {props.text.map((text) => (
              <p className="project-text">{text}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="stack-container">
        <Stack images={props.stack} />
      </div>
    </div>
  );
}
