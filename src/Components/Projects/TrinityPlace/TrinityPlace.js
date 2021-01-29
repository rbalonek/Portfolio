import React from "react";
import "./TrinityPlace.css";
import TrinityStack from "../Stacks/TrinityStack";

import { Slide } from "react-awesome-reveal";

export default function TrinityPlace() {
  return (
    <div className="trinity-app-container">
      <div className="happy-icon-div">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/rbalonek/trinity-place-shelter"
        >
          <img
            className="happy-github-icon"
            src="data:image/png;base64,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"
            alt=""
          />
        </a>
        <div className="happy-title-holder">
          <h1 className="trinity-place-title">Trinity Place Shelter</h1>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://trinity-place-shelter.netlify.app/"
        >
          <img
            className="happy-website-icon"
            src="data:image/png;base64,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"
            alt=""
          />
        </a>
      </div>

      <div className="trinity-place-container">
        <img
          className="trinity-place-img"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1598326354/Portfolio%20Pics/trinityPlaceShelter_srxffl.png"
          alt=""
        />
        <Slide>
          <div className="content-trinity-place">
            <div className="text-card-trinity-place">
              <p>
                {" "}
                Trinity Place Shelter was my first project working with a UX
                team and multiple developers.{" "}
              </p>
              <p>
                {" "}
                Our team was given a design and 4 days to make a responsive
                website that also had full CRUD capabilities.
              </p>
              <p>
                {" "}
                I was the "team leader" so I controlled the github project flow
                using the github built in project board.{" "}
              </p>
              <p>
                {" "}
                We added an "admin" screen to show full CRUD capabilities with
                the "volunteer" form.
              </p>
              <p>
                {" "}
                Our team hopes to continue working with the UX team to finish
                the rest of the screens for this project and donate the site to
                Trinity Place Shelter.{" "}
              </p>
            </div>
          </div>
        </Slide>
      </div>
      <img
        className="img-trinity-app"
        src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1599500206/Portfolio%20Pics/Trinity-cell-1_e2d9xi.png"
        alt=""
      />
      <img
        className="img-trinity-app-right"
        src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1599500206/Portfolio%20Pics/Trinity-cell-2_gx7ytc.png"
        alt=""
      />
      <TrinityStack />
    </div>
  );
}
