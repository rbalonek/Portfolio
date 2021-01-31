import React from "react";
import "./HappySpace.css";
import Stack from "../Stacks/Stack";
import zenscroll from "zenscroll";

import icon from "../../../assets/icon.png";
import CatScreen from "../../../assets/CatScreen.png";
import HistoryScreen from "../../../assets/HistoryScreen.png";
import Dad from "../../../assets/DadScreen.png";
import Inspiration from "../../../assets/InspirationScreen.png";

import AppStore from "../../../assets/downloadAppStore.png";
//effects
import { Fade, Roll, AttentionSeeker } from "react-awesome-reveal";
import ProjectHeader from "../../Header/ProjectHeader/ProjectHeader";

export default function HappySpace() {
  return (
    <div id="happy-space" className="happy-space-app-container">
      <ProjectHeader
        navUp={"skills"}
        navDown={"cherry"}
        github={"https://github.com/rbalonek/Happy-Space-App"}
        title={"Happy-Space"}
        website={"https://apps.apple.com/us/app/happy-space/id1544516931"}
      />

      <div className="happy-space-container">
        <div className="cell-img-container">
          <Fade cascade>
            <img
              className="CatScreenImg, cellImg"
              src={CatScreen}
              alt="CatScreenImg"
            />
            <img
              className="HistoryScreenImg, cellImg"
              src={HistoryScreen}
              alt="HistoryScreenImg"
            />
            <img
              className="DadScreenImg, cellImg"
              src={Dad}
              alt="DasScreenImg"
            />
            <img
              className="InspirationScreenImg, cellImg"
              src={Inspiration}
              alt="Inspiration"
            />
          </Fade>
        </div>
        <div className="icon-container">
          <Roll delay="100">
            <AttentionSeeker effect="tada" delay="200">
              <img className="icon-img" src={icon} alt="icon" />
            </AttentionSeeker>
          </Roll>
        </div>

        <div className="Text-Container-happy-space">
          <p className="happy-text">
            Happy-Space is my first React Native App store App.
          </p>
          <p className="happy-text">
            It was built in under a week using 5 different APIs, 4 screens, and
            a homepage with some fun animations.
          </p>
          <p className="happy-text">
            My main goal was to get ANYTHING onto the app store, but I did have
            a fun time making it.
          </p>
          <AttentionSeeker effect="jello">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://apps.apple.com/us/app/happy-space/id1544516931"
            >
              <img
                className="download-app-store"
                src={AppStore}
                alt="App Store"
              />
            </a>
          </AttentionSeeker>
        </div>
        <div className="happy-stack-holder">
          <Stack
            images={[
              "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1611784258/Portfolio%20Pics/Logos/ReactNativeKnockout_v54jwe.png",
              "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/html5-plain-wordmark.67d97895_kehxm9.svg",
              "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/js-logo_xrxnfl.png",
              "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512573/Portfolio%20Pics/css-logo_scrgq5.png",
              "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/postman-logo_rr22mr.png",
              "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/node-js-logo_qxghko.png",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
