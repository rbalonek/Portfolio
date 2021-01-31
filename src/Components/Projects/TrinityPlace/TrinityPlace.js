import React from "react";
import "./TrinityPlace.css";
import TrinityStack from "../Stacks/TrinityStack";

import { Slide } from "react-awesome-reveal";
import ProjectHeader from "../../Header/ProjectHeader/ProjectHeader";
import Stack from "../Stacks/Stack";

export default function TrinityPlace() {
  return (
    <div id="trinity" className="trinity-app-container">
      <ProjectHeader
        navUp={"cherry"}
        navDown={"about"}
        github={"https://github.com/rbalonek/trinity-place-shelter"}
        title={"Trinity Place Shelter"}
        website={"https://trinity-place-shelter.netlify.app/"}
      />

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
      <div className="cell-img-trinity">
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
      </div>
      <div className="stack-holder">
        <Stack
          images={[
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
    </div>
  );
}
