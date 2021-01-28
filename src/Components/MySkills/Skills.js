import React from "react";
import "./Skills.css";
import { Animated } from "react-animated-css";
import { Slide, Fade, AttentionSeeker } from "react-awesome-reveal";
import Static from "../../assets/tvnoise.gif";

export default function Skills() {
  return (
    <div className="skills-container">
      <div class="cloud-div">
        <Slide delay={1000} triggerOnce={true}>
          <div class="cloud"></div>
        </Slide>
      </div>
      <div className="cloud-icon-div">
        <Fade
          delay={1000}
          triggerOnce={true}
          cascade
          className="cloud-icon-div"
          childClassName="cloud-img"
        >
          <img
            className="cloud-img"
            alt="Heroku"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512573/Portfolio%20Pics/heroku-plain-wordmark.6fd6c3b7_pgrfhc.svg"
          ></img>

          <img
            className="cloud-img"
            alt="AWS"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604514307/Portfolio%20Pics/amazon-web-services_gn3uen.png"
          ></img>

          <img
            className="cloud-img"
            alt="Netlify"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604514327/Portfolio%20Pics/Netlify-Logo_amivge.png"
          ></img>
          <img
            className="cloud-img"
            alt="Wordpress"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604514331/Portfolio%20Pics/wordpress_qpulah.jpg"
          ></img>
          <img
            className="cloud-img"
            alt="GIT"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512573/Portfolio%20Pics/git-logo_pacwkv.png"
          ></img>
        </Fade>
      </div>

      <div className="computer-div">
        <Fade triggerOnce={true} className="static-tv">
          <div className="static-tv">
            <img className="static-gif" src={Static} alt="static" />
          </div>
        </Fade>
        <img
          className="computer-img"
          alt="computer"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604517652/Portfolio%20Pics/Computer_Cropped_vcxr2m.png"
        ></img>
      </div>
      <div className="react-div">
        <div className="react-dive-inner">
          <img
            className="react-img"
            alt="React"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512568/Portfolio%20Pics/react-original-wordmark.fadd9c95_fhawii.svg"
          ></img>

          <img
            className="react-native-img"
            alt="React"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1611784258/Portfolio%20Pics/Logos/ReactNativeKnockout_v54jwe.png"
          ></img>
        </div>
      </div>
      <div className="skills-front_end">
        <img
          className="skills-img"
          alt="html"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512572/Portfolio%20Pics/html-logo_nerabl.png"
        ></img>
        <div id="css-div">
          <img
            className="skills-img"
            id="css"
            alt="CSS"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512573/Portfolio%20Pics/css-logo_scrgq5.png"
          ></img>
          <span id="css-element">
            BEM, Tailwind, flexbox, grid, responsive design, animation, bulma
          </span>
        </div>
        <img
          className="skills-img"
          alt="JS"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/js-logo_xrxnfl.png"
        ></img>
      </div>

      <div className="backend-container">
        <div className="server-container">
          <div className="server-top">
            <div className="orange-dot"></div>
          </div>
          <div className="server-bottom">
            <div className="green-dot"></div>
          </div>
        </div>
      </div>

      <div className="skills-back_end_one">
        <AttentionSeeker
          triggerOnce={true}
          delay={2500}
          className="backend-skills-img"
          effect={"tada"}
        >
          <img
            className="backend-skills-img"
            alt="Node"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/node-js-logo_qxghko.png"
          ></img>
          <img
            className="backend-skills-img"
            alt="Docker"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512573/Portfolio%20Pics/docker-original-wordmark.86726983_iksoeg.svg"
          ></img>
          <img
            className="backend-skills-img"
            alt="Express"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512572/Portfolio%20Pics/express-original-wordmark.f1a0b0e9_pom0ic.svg"
          ></img>
          <img
            className="backend-skills-img"
            alt="MongoDB"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512571/Portfolio%20Pics/mongodb-plain-wordmark.07c92838_rgtxc3.svg"
          ></img>
          <img
            className="backend-skills-img"
            alt="PostgresSQL"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512569/Portfolio%20Pics/postgresql-plain-wordmark.06aadd67_jqewef.svg"
          ></img>
          <img
            className="backend-skills-img"
            alt="postico"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604514402/Portfolio%20Pics/Postico_wrhfis.png"
          ></img>
        </AttentionSeeker>
      </div>
      <div className="skills-back_end_two">
        <AttentionSeeker
          triggerOnce={true}
          delay={2500}
          className="backend-skills-img"
          effect={"tada"}
        >
          <img
            className="backend-skills-img"
            alt="Postman"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512570/Portfolio%20Pics/postman-logo_rr22mr.png"
          ></img>
          <img
            className="backend-skills-img"
            alt="SQL"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512568/Portfolio%20Pics/sql-logo_m7x84a.png"
          ></img>
          <img
            className="backend-skills-img"
            alt="RAILS"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512568/Portfolio%20Pics/rails-plain-wordmark.afe59a88_qkf93e.svg"
          ></img>
          <img
            className="backend-skills-img"
            alt="RUBY"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1604512568/Portfolio%20Pics/ruby-plain-wordmark.b065b718_pxbhrj.svg"
          ></img>
        </AttentionSeeker>
      </div>
    </div>
  );
}
