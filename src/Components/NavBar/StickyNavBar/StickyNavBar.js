import React, { useState } from "react";
import "./StickyNavBar.css";
import { Fade } from "react-awesome-reveal";
import zenscroll from "zenscroll";
import inView from "element-in-view";
import { Animated } from "react-animated-css";

export default function StickyNavBar() {
  const [skillsTextColor, setSkillsTextColor] = useState("text-regular");
  const [projectsTextColor, setProjectsTextColor] = useState("text-regular");
  const [aboutTextColor, setAboutTextColor] = useState("text-regular");
  const [contactTextColor, setContactTextColor] = useState("text-regular");

  var defaultDuration = 777; // ms
  var edgeOffset = -2; // px
  zenscroll.setup(defaultDuration, edgeOffset);

  const scrollSkills = () => {
    var skills = document.getElementById("skills");
    zenscroll.to(skills);
  };
  const scrollProjects = () => {
    var projects = document.getElementById("projects");
    zenscroll.to(projects, null, 800);
  };
  const scrollAbout = () => {
    var about = document.getElementById("about");
    zenscroll.to(about);
  };
  const scrollContact = () => {
    var contact = document.getElementById("contact");
    zenscroll.to(contact);
  };

  window.addEventListener("scroll", () => {
    if (inView(document.getElementById("skills"))) {
      setSkillsTextColor("text-highlighted");
      setProjectsTextColor("text-regular");
      setAboutTextColor("text-regular");
      setContactTextColor("text-regular");
    } else if (inView(document.getElementById("projects"))) {
      setSkillsTextColor("text-regular");
      setProjectsTextColor("text-highlighted");
      setAboutTextColor("text-regular");
      setContactTextColor("text-regular");
    } else if (inView(document.getElementById("about"))) {
      setSkillsTextColor("text-regular");
      setProjectsTextColor("text-regular");
      setAboutTextColor("text-highlighted");
      setContactTextColor("text-regular");
    } else if (inView(document.getElementById("contact"))) {
      setSkillsTextColor("text-regular");
      setProjectsTextColor("text-regular");
      setAboutTextColor("text-regular");
      setContactTextColor("text-highlighted");
    } else {
      setSkillsTextColor("text-regular");
      setProjectsTextColor("text-regular");
      setAboutTextColor("text-regular");
      setContactTextColor("text-regular");
    }
  });

  return (
    <div className="sticky-nav--container">
      <Fade>
        <p className={skillsTextColor} onClick={scrollSkills}>
          Skills
        </p>

        <p className={projectsTextColor} onClick={scrollProjects}>
          Projects
        </p>
        <p className={aboutTextColor} onClick={scrollAbout}>
          About
        </p>
        <p className={contactTextColor} onClick={scrollContact}>
          Contact
        </p>
      </Fade>
    </div>
  );
}
